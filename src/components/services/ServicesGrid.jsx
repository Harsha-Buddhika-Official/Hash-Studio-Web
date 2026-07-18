import ServiceCard from "./ServiceCard";
import { services } from "../../data/services";

export default function ServicesGrid() {
  return (
    <section className="mx-auto max-w-7xl px-5 sm:px-8 py-10 sm:py-14">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
}