declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const googleTagId = process.env.NEXT_PUBLIC_GOOGLE_TAG_ID;
const googleAdsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
const whatsappConversionLabel = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL_WHATSAPP;
const formConversionLabel = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL_FORM;
const callConversionLabel = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL_CALL;

type LeadChannel = "whatsapp" | "phone" | "form";

type TrackLeadOptions = {
  channel: LeadChannel;
  location: string;
  insuranceType?: string;
};

function getAdsLabel(channel: LeadChannel) {
  if (channel === "whatsapp") return whatsappConversionLabel;
  if (channel === "phone") return callConversionLabel;
  return formConversionLabel;
}

export function trackLead({ channel, location, insuranceType }: TrackLeadOptions) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;

  const params: Record<string, unknown> = {
    event_category: "lead",
    lead_channel: channel,
    cta_location: location,
    value: 1,
    currency: "MXN",
  };

  if (insuranceType) {
    params.insurance_type = insuranceType;
  }

  if (googleTagId) {
    params.send_to = googleTagId;
  }

  window.gtag("event", "generate_lead", params);

  const label = getAdsLabel(channel);
  if (googleAdsId && label) {
    window.gtag("event", "conversion", {
      send_to: `${googleAdsId}/${label}`,
      value: 1,
      currency: "MXN",
    });
  }
}

