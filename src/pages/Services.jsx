import ServicesHero from "../components/services/ServicesHero";
import ServicesGrid from "../components/services/ServicesGrid";
import TrustSection from "../components/services/TrustSection";
import ServicesCTA from "../components/services/ServicesCTA";

export default function Services() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <TrustSection />
      <ServicesCTA />
    </>
  );
}