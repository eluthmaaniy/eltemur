import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { productProjects } from "@/data/projects";
import { pageMetadata } from "@/lib/seo";
import { businessInfo } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Terms of Service | Eltemur Zentra Studio",
  description:
    "Terms of Service for Eltemur Zentra Studio, its website, client work, and the products it publishes, including Scoutier and its other apps.",
  path: "/terms",
});

const updated = "5 November 2026";

const productRules: Record<string, string> = {
  scoutier:
    "Scoutier prepares personalized messages and opens them in your own mail app. It does not send mail from our servers, and it does not read the message you finally send. You review and send each message. You are responsible for having a lawful basis to contact each recipient and for the content you send. Files you open so Scoutier can extract addresses are read on your device. Scoutier publishes its own terms, privacy policy, and refund policy at scoutier.com.ng. Those pages govern use of Scoutier, including the free period, plan limits, Paystack and Google Play billing, and the 7-day refund on a first purchase.",
  cartumi:
    "Cartumi sells prepared digital products. Files are released after the payment provider confirms the payment.",
  shopidict:
    "Shopidict reviews a public store and shows a score, an estimated revenue impact, and a priority issue. Those results are an analysis of what the tool can see. They are not a promise of future sales.",
  uiprep:
    "UIPrep is a practice product for University of Ibadan Post-UTME style questions. It is not the University of Ibadan, and it does not administer the official exam.",
  gradeng:
    "GradeNG is an offline calculator. Figures follow the grading systems built into the app. They are not an official transcript or a result issued by a school.",
  passcarda:
    "Passcarda is a practice product for JAMB and post-UTME style questions. It is not JAMB, a university, or a polytechnic, and it does not administer those exams.",
};

export default function TermsPage() {
  return (
    <main id="main" className="flex-1">
      <article className="mx-auto w-full max-w-3xl px-5 py-12 sm:px-6 lg:py-16">
        <Breadcrumbs items={[{ name: "Terms of Service", path: "/terms" }]} />
        <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
          Terms of Service
        </h1>
        <p className="mt-4 text-sm font-semibold text-navy">Last updated: {updated}</p>
        <p className="mt-4 text-base leading-7 text-muted">
          These terms are the agreement between you and {businessInfo.name} for this website, for
          client work we take on, and for the software products we publish. They apply to the
          Android apps we publish, including the Scoutier app.
        </p>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-navy">1. Who you are contracting with</h2>
          <p className="mt-3 text-sm leading-6 text-muted">
            {businessInfo.name} is a business name registered with the {businessInfo.registrationAuthority}.
            Registration number {businessInfo.cacNumber}. Registration date {businessInfo.registrationDate}.
            The business is in {businessInfo.country}. We act as a trader: we offer this website,
            our products, and our services in the course of business.
          </p>
          <dl className="mt-4 border-t border-line">
            <div className="grid gap-1 border-b border-line py-3 sm:grid-cols-[12rem_minmax(0,1fr)]">
              <dt className="text-sm font-semibold text-navy">Legal name</dt>
              <dd className="text-sm leading-6 text-muted">{businessInfo.name}</dd>
            </div>
            <div className="grid gap-1 border-b border-line py-3 sm:grid-cols-[12rem_minmax(0,1fr)]">
              <dt className="text-sm font-semibold text-navy">CAC number</dt>
              <dd className="text-sm leading-6 text-muted">{businessInfo.cacNumber}</dd>
            </div>
            <div className="grid gap-1 border-b border-line py-3 sm:grid-cols-[12rem_minmax(0,1fr)]">
              <dt className="text-sm font-semibold text-navy">Website</dt>
              <dd className="text-sm leading-6 text-muted">https://eltemur.com</dd>
            </div>
            <div className="grid gap-1 border-b border-line py-3 sm:grid-cols-[12rem_minmax(0,1fr)]">
              <dt className="text-sm font-semibold text-navy">Email</dt>
              <dd className="text-sm leading-6">
                <a
                  className="text-royal underline decoration-royal/30 underline-offset-4"
                  href={`mailto:${businessInfo.email}`}
                >
                  {businessInfo.email}
                </a>
              </dd>
            </div>
            <div className="grid gap-1 border-b border-line py-3 sm:grid-cols-[12rem_minmax(0,1fr)]">
              <dt className="text-sm font-semibold text-navy">Phone</dt>
              <dd className="text-sm leading-6">
                <a
                  className="text-royal underline decoration-royal/30 underline-offset-4"
                  href={`tel:${businessInfo.phoneInternational}`}
                >
                  {businessInfo.phoneDisplay}
                </a>
              </dd>
            </div>
          </dl>
          <p className="mt-4 text-sm leading-6 text-muted">
            Scoutier’s privacy policy refers to the operator as Eltemur Labs Limited. The registered
            business for this website, and the business named for our published apps, is{" "}
            {businessInfo.name}, {businessInfo.cacNumber}. Write to {businessInfo.email} about
            either name. Support for Scoutier stays at scoutier.com.ng@gmail.com, which is the
            address printed on Scoutier’s own policies.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-navy">2. What these terms cover</h2>
          <p className="mt-3 text-sm leading-6 text-muted">
            These terms cover eltemur.com, enquiries and client projects, and the products we
            publish and list on our work pages. If you do not agree, do not use the website or the
            product.
          </p>
          <p className="mt-3 text-sm leading-6 text-muted">
            Some products publish their own terms, privacy policy, or refund policy. Those pages
            govern that product. These terms govern this website, client work, and any product that
            does not publish its own terms. They also identify us as the business behind every
            product listed below. If both sets of terms apply and they disagree about how that
            product works, the product’s own page controls for that product.
          </p>
          <p className="mt-3 text-sm leading-6 text-muted">
            Pages on this website also describe websites we built for other people. Those client
            sites are showcases. We do not operate them, and these terms do not govern them. The
            operator of each client site sets its own terms.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-navy">3. Products we publish</h2>
          <p className="mt-3 text-sm leading-6 text-muted">
            The products below are ours. Descriptions on each work page are summaries. The live
            product, and any policy published on that product, define how it works.
          </p>
          <ul className="mt-4 border-t border-line">
            {productProjects.map((project) => (
              <li key={project.slug} className="border-b border-line py-4">
                <h3 className="text-sm font-semibold text-navy">
                  <Link href={`/work/${project.slug}`} className="hover:text-royal">
                    {project.name}
                  </Link>
                  <span className="font-normal text-muted">
                    {" "}
                    · {project.platforms.join(", ")}
                  </span>
                </h3>
                <p className="mt-1 text-sm leading-6 text-muted">{project.summary}</p>
                {productRules[project.slug] ? (
                  <p className="mt-2 text-sm leading-6 text-muted">{productRules[project.slug]}</p>
                ) : null}
                {project.links.length > 0 ? (
                  <p className="mt-2 text-sm leading-6">
                    {project.links.map((link, index) => (
                      <span key={link.href}>
                        {index > 0 ? <span className="text-muted"> · </span> : null}
                        <a
                          href={link.href}
                          className="font-semibold text-royal underline decoration-royal/30 underline-offset-4"
                        >
                          {link.label}
                        </a>
                      </span>
                    ))}
                  </p>
                ) : null}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-6 text-muted">
            The Scoutier Android app is published as com.scoutier.app. GradeNG is our offline
            Android calculator. These terms apply to both apps, together with any policy the app
            itself presents.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-navy">4. This website</h2>
          <p className="mt-3 text-sm leading-6 text-muted">
            eltemur.com describes our services, our products, and selected client work. Reading a
            page does not create a project, a subscription, or a support obligation.
          </p>
          <p className="mt-3 text-sm leading-6 text-muted">
            The contact form asks for your name, email, company, project type, budget, and a
            description of the work. We use that information to reply. A submission is an enquiry.
            It is not an order, and it does not reserve a date. You can also write to{" "}
            {businessInfo.email} or message us on WhatsApp.
          </p>
          <p className="mt-3 text-sm leading-6 text-muted">
            Do not misuse the site. That includes trying to break it, sending malware through the
            form, or copying the site’s design, text, or branding for another commercial website.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-navy">5. Client work</h2>
          <p className="mt-3 text-sm leading-6 text-muted">
            A client project starts only when we and the client agree the scope, price, and timing
            in writing. Until that agreement exists, either side can stop the conversation. Fees,
            deposits, delivery, and ownership of the work are set in that agreement.
          </p>
          <p className="mt-3 text-sm leading-6 text-muted">
            Unless the agreement says otherwise, we may show the completed public website or app
            as a case study on this site. We will not publish private business information in that
            case study.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-navy">6. Accounts and age</h2>
          <p className="mt-3 text-sm leading-6 text-muted">
            Products that ask you to create an account are for people aged 16 or older. You must
            give accurate account details, keep your sign-in details private, and tell us if you
            believe someone else has used your account. You may not share, sell, or transfer an
            account. We may refuse or close duplicate accounts.
          </p>
          <p className="mt-3 text-sm leading-6 text-muted">
            GradeNG does not require an account. It stores its records on the device.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-navy">7. Acceptable use of our products</h2>
          <p className="mt-3 text-sm leading-6 text-muted">
            Use the products lawfully. You are responsible for content you upload, messages you
            send, and files you buy or download. In particular, you must not use a product to:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-muted">
            <li>Send spam, phishing, scams, or mail you have no lawful basis to send.</li>
            <li>Harass, defame, or threaten anyone, or distribute malware.</li>
            <li>Break a product’s limits, probe it, or resell it without our written permission.</li>
            <li>Pretend a practice score, store audit, or CGPA figure is an official result.</li>
          </ul>
          <p className="mt-3 text-sm leading-6 text-muted">
            If you use Scoutier to contact people, you are responsible for the rules that apply to
            those recipients. That includes the Nigeria Data Protection Act, and, where those
            recipients are protected by them, the GDPR and the CAN-SPAM Act. Marketing mail needs
            a lawful basis and any unsubscribe route the law requires. Scoutier does not send the
            mail for you.
          </p>
          <p className="mt-3 text-sm leading-6 text-muted">
            We may suspend or close access if you break these terms, if we have to comply with a
            lawful request, or if we see fraud or abuse. Closure for a breach does not create a
            right to a refund.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-navy">8. Payments, renewal, and refunds</h2>
          <p className="mt-3 text-sm leading-6 text-muted">
            Prices are shown on the product before you pay. Website payments for our products are
            taken by Paystack where the product says so. Android purchases can be billed by Google
            Play. We do not see or store your full card number, CVV, or PIN.
          </p>
          <p className="mt-3 text-sm leading-6 text-muted">
            Google Play subscriptions renew through Google Play and are cancelled in the Google
            Play app. On Scoutier, website card payments can renew automatically. Scoutier’s terms
            explain how to turn that off, and that bank transfer and USSD payments do not renew.
          </p>
          <p className="mt-3 text-sm leading-6 text-muted">
            Refunds follow the policy of the product you paid for. Scoutier’s refund policy gives a
            full refund within 7 days of the first purchase, including a Google Play order requested
            through Google Play in that same window. Later renewals are not refunded under that
            policy. For any other product, contact {businessInfo.email} with the payment reference.
            Digital access or files that have already been delivered are not refunded unless the
            product page says they are, or the law requires a refund. Google Play orders are
            requested through Google Play.
          </p>
          <p className="mt-3 text-sm leading-6 text-muted">
            Client-project fees are governed by the written agreement, not by a product refund page.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-navy">9. Your content and our intellectual property</h2>
          <p className="mt-3 text-sm leading-6 text-muted">
            You keep ownership of content you create or upload in a product, such as templates,
            lists, and campaign text. You give us a limited right to host and process that content
            only so we can run the product for you. We do not sell that content.
          </p>
          <p className="mt-3 text-sm leading-6 text-muted">
            We own the Eltemur Zentra Studio name, this website, and the products we publish,
            including their names, interfaces, and code, except where a third party owns a
            component. You may not copy them or present them as yours. Client-project ownership
            follows the client agreement. A case study on this site does not transfer the client’s
            brand to you, or our brand to the client.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-navy">10. Availability</h2>
          <p className="mt-3 text-sm leading-6 text-muted">
            We work to keep the website and products available. We do not promise uninterrupted
            access. We may change or retire a feature. Where a change materially reduces something
            you have already paid for, we will give reasonable notice, and at least 14 days by
            email where we hold an email address for that product account.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-navy">11. Liability</h2>
          <p className="mt-3 text-sm leading-6 text-muted">
            The website is information about our work. Product results, including store-audit
            scores, practice-test scores, and CGPA figures, are outputs of the tool. They are not
            professional, academic, or financial advice, and they are not official records.
          </p>
          <p className="mt-3 text-sm leading-6 text-muted">
            To the extent the law allows, we are not liable for indirect or consequential loss, for
            mail that a recipient’s server refuses, or for content you choose to send or upload.
            Where a paid product is involved, our total liability for a claim is limited to the
            amount you paid us for that product in the 12 months before the claim.
          </p>
          <p className="mt-3 text-sm leading-6 text-muted">
            Nothing in these terms limits liability that the law does not allow us to limit. That
            includes fraud, and rights you have as a consumer. If you are a consumer in Nigeria, the
            European Economic Area, or the United Kingdom, the consumer protection laws that apply
            to you still apply. We do not exclude them.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-navy">12. Responsibility for your use</h2>
          <p className="mt-3 text-sm leading-6 text-muted">
            If a claim is made against us because of content you uploaded, messages you sent, or
            your breach of these terms, you will cover the loss that results, including reasonable
            legal costs. This does not apply to the extent the claim is caused by our own breach or
            by something the law does not let us shift onto you.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-navy">13. Law and disputes</h2>
          <p className="mt-3 text-sm leading-6 text-muted">
            These terms are governed by the laws of the Federal Republic of Nigeria. Write to{" "}
            {businessInfo.email} first and give us 30 days to try to resolve the dispute. If it is
            still unresolved, the courts of Nigeria may hear it.
          </p>
          <p className="mt-3 text-sm leading-6 text-muted">
            If you are a consumer in the European Economic Area or the United Kingdom, you keep any
            mandatory right to rely on the protections of your country of residence, and any
            mandatory right to bring a claim in the courts of that country.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-navy">14. Changes</h2>
          <p className="mt-3 text-sm leading-6 text-muted">
            We may update these terms. The date at the top of this page will change when we do. If
            a change reduces a right you already have on a paid product, we will give at least 14
            days’ notice by email where we hold an email address for that account. If you keep
            using the website or the product after the update applies, you accept the updated
            terms. If you do not accept them, stop using the product and write to us.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-navy">15. Contact</h2>
          <p className="mt-3 text-sm leading-6 text-muted">
            Questions about these terms:{" "}
            <a
              className="text-royal underline decoration-royal/30 underline-offset-4"
              href={`mailto:${businessInfo.email}`}
            >
              {businessInfo.email}
            </a>
            . Phone:{" "}
            <a
              className="text-royal underline decoration-royal/30 underline-offset-4"
              href={`tel:${businessInfo.phoneInternational}`}
            >
              {businessInfo.phoneDisplay}
            </a>
            . We aim to reply within two business days.
          </p>
          <p className="mt-3 text-sm leading-6 text-muted">
            Scoutier account, billing, and refund questions can also go to scoutier.com.ng@gmail.com,
            as stated on{" "}
            <a
              className="text-royal underline decoration-royal/30 underline-offset-4"
              href="https://scoutier.com.ng/terms"
            >
              Scoutier’s terms
            </a>
            ,{" "}
            <a
              className="text-royal underline decoration-royal/30 underline-offset-4"
              href="https://scoutier.com.ng/privacy"
            >
              privacy policy
            </a>
            , and{" "}
            <a
              className="text-royal underline decoration-royal/30 underline-offset-4"
              href="https://scoutier.com.ng/refund"
            >
              refund policy
            </a>
            .
          </p>
        </section>
      </article>
    </main>
  );
}
