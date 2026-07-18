import ContactHero from "../components/contact/ContactHero";
import KickoffCard from "../components/contact/KickoffCard";
import ContactDetails from "../components/contact/ContactDetails";
import InquiryForm from "../components/contact/InquiryForm";

export default function Contact() {
  return (
    <>
      <ContactHero />

      <section className="mx-auto max-w-7xl px-5 sm:px-8 pb-16 sm:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
          <div>
            <KickoffCard />
            <ContactDetails />
          </div>

          <InquiryForm />
        </div>
      </section>
    </>
  );
}