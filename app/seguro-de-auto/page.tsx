import { ServiceLandingPage } from "@/components/service-landing";
import { buildServiceMetadata, servicePagesBySlug } from "@/lib/service-pages";

const service = servicePagesBySlug["seguro-de-auto"];

export const metadata = buildServiceMetadata(service);

export default function SeguroDeAutoPage() {
  return <ServiceLandingPage service={service} />;
}
