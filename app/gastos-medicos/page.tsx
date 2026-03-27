import { ServiceLandingPage } from "@/components/service-landing";
import { buildServiceMetadata, servicePagesBySlug } from "@/lib/service-pages";

const service = servicePagesBySlug["gastos-medicos"];

export const metadata = buildServiceMetadata(service);

export default function GastosMedicosPage() {
  return <ServiceLandingPage service={service} />;
}
