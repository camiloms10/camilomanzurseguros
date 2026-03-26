import { ServiceLandingPage, buildServiceMetadata } from "@/components/service-landing";
import { servicePagesBySlug } from "@/lib/service-pages";

const service = servicePagesBySlug["seguro-de-empresas"];

export const metadata = buildServiceMetadata(service);

export default function SeguroDeEmpresasPage() {
  return <ServiceLandingPage service={service} />;
}

