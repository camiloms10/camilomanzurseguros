import { ServiceLandingPage } from "@/components/service-landing";
import { buildServiceMetadata, servicePagesBySlug } from "@/lib/service-pages";

const service = servicePagesBySlug["seguro-de-vida"];

export const metadata = buildServiceMetadata(service);

export default function SeguroDeVidaPage() {
  return <ServiceLandingPage service={service} />;
}
