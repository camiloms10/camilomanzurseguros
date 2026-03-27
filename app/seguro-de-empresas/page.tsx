import { ServiceLandingPage } from "@/components/service-landing";
import { buildServiceMetadata, servicePagesBySlug } from "@/lib/service-pages";

const service = servicePagesBySlug["seguro-de-empresas"];

export const metadata = buildServiceMetadata(service);

export default function SeguroDeEmpresasPage() {
  return <ServiceLandingPage service={service} />;
}
