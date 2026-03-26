import { ServiceLandingPage, buildServiceMetadata } from "@/components/service-landing";
import { servicePagesBySlug } from "@/lib/service-pages";

const service = servicePagesBySlug["seguro-de-vida"];

export const metadata = buildServiceMetadata(service);

export default function SeguroDeVidaPage() {
  return <ServiceLandingPage service={service} />;
}

