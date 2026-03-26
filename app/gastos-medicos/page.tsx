import { ServiceLandingPage, buildServiceMetadata } from "@/components/service-landing";
import { servicePagesBySlug } from "@/lib/service-pages";

const service = servicePagesBySlug["gastos-medicos"];

export const metadata = buildServiceMetadata(service);

export default function GastosMedicosPage() {
  return <ServiceLandingPage service={service} />;
}

