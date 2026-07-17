import Hero from "../components/home/Hero";
import FeaturedWork from "../components/home/FeaturedWork";
import Expertise from "../components/home/Expertise";
import Testimonials from "../components/home/Testimonials";
import CTASection from "../components/home/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedWork />
      <Expertise />
      <Testimonials />
      <CTASection />
    </>
  );
}