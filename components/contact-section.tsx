import { ContactForm } from "@/components/contact-form";
import { DirectContact } from "@/components/direct-contact";

export function ContactSection({ heading = "h2" }: { heading?: "h1" | "h2" }) {
  const Title = heading;
  return (
    <section id="contact" className="scroll-mt-20 bg-navy text-white">
      <div className="mx-auto grid w-full max-w-6xl items-start gap-12 px-5 py-16 sm:px-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-12 lg:px-8 lg:py-20">
        <div className="max-w-md">
          <Title className="text-2xl font-bold tracking-tight sm:text-3xl">
            Have a product or project in mind?
          </Title>
          <p className="mt-4 text-base leading-relaxed text-white/90">
            Tell us what you want to build, who it is for, and where you want to start. We will
            reply with a practical next step.
          </p>
          <div className="mt-8">
            <DirectContact tone="dark" />
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
