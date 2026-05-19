import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { ContactForm } from "./ContactForm";
import { contact, siteConfig } from "@/lib/content";

export function Contact() {
  const { email, phoneDisplay, phoneE164 } = siteConfig.contact;

  return (
    <section
      id="contact"
      className="bg-paper-deep py-24 sm:py-32"
      aria-labelledby="contact-title"
    >
      <div className="container-editorial">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-16">
          {/* Colonne intro + coordonnées */}
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow={contact.eyebrow}
              title={contact.title}
              intro={contact.intro}
            />

            <Reveal delay={250}>
              <dl className="mt-12 space-y-8">
                <div>
                  <dt className="eyebrow">Email</dt>
                  <dd className="mt-2">
                    <a
                      href={`mailto:${email}`}
                      className="link-editorial font-display text-xl"
                    >
                      {email}
                    </a>
                  </dd>
                </div>

                <div>
                  <dt className="eyebrow">Téléphone</dt>
                  <dd className="mt-2">
                    {phoneE164 ? (
                      <a
                        href={`tel:${phoneE164}`}
                        className="link-editorial font-display text-xl"
                      >
                        {phoneDisplay}
                      </a>
                    ) : (
                      <span className="font-display text-xl text-ink-muted">
                        {phoneDisplay}
                      </span>
                    )}
                  </dd>
                </div>

                <div>
                  <dt className="eyebrow">Zone d'intervention</dt>
                  <dd className="mt-2 font-display text-xl text-ink">
                    {siteConfig.contact.areaServed}
                  </dd>
                </div>
              </dl>
            </Reveal>
          </div>

          {/* Colonne formulaire */}
          <div className="lg:col-span-7">
            <Reveal delay={200}>
              <div className="rounded-sm border border-line bg-paper-soft p-8 sm:p-10">
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
