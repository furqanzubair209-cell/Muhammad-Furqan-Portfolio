import { useState, type FormEvent } from "react";
import { Phone, Mail, MessageCircle, MapPin, Clock, Copy, Check, Send } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { Reveal } from "../components/Reveal";
import { profile } from "../data/profile";
import { GithubIcon, LinkedinIcon } from "../components/BrandIcons";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const nextErrors: Record<string, string> = {};
    if (!name.trim()) nextErrors.name = "Name is required";
    if (!/^\S+@\S+\.\S+$/.test(email)) nextErrors.email = "Enter a valid email";
    if (!subject.trim()) nextErrors.subject = "Subject is required";
    if (!message.trim()) nextErrors.message = "Message is required";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      const firstField = ["name", "email", "subject", "message"].find((f) => nextErrors[f]);
      if (firstField) document.getElementById(`contact-${firstField}`)?.focus();
      return;
    }

    const body = `From: ${name} (${email})\n\n${message}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="py-24">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading eyebrow="Engagement" title="Have an idea worth building?" />
        <div className="grid lg:grid-cols-2 gap-8">
          <Reveal>
            <div className="section-surface p-8 h-full">
              <p className="text-[var(--muted)] leading-relaxed mb-8">
                Get in touch for internships, project collaborations, or technical inquiries. I am
                active and ready to contribute.
              </p>
              <div className="space-y-5">
                <ContactRow icon={<Phone size={16} />} label="Call Me">
                  <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="hover:text-[var(--primary)]">
                    {profile.phone}
                  </a>
                </ContactRow>
                <ContactRow icon={<Mail size={16} />} label="Email">
                  <div className="flex items-center gap-2 flex-wrap">
                    <a href={`mailto:${profile.email}`} className="hover:text-[var(--primary)]">
                      {profile.email}
                    </a>
                    <button
                      onClick={copyEmail}
                      className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-md border border-[var(--border)] text-[var(--muted)] hover:text-[var(--primary)] hover:border-[var(--primary)] transition focus-ring"
                    >
                      {copied ? <Check size={12} /> : <Copy size={12} />}
                      {copied ? "Copied" : "Copy"}
                    </button>
                    <span className="sr-only" role="status" aria-live="polite">
                      {copied ? "Email address copied to clipboard" : ""}
                    </span>
                  </div>
                </ContactRow>
                <ContactRow icon={<MessageCircle size={16} />} label="WhatsApp">
                  <a href={profile.whatsapp} target="_blank" rel="noreferrer" className="hover:text-[var(--primary)]">
                    {profile.phone}
                  </a>
                </ContactRow>
                <ContactRow icon={<MapPin size={16} />} label="Location">
                  <span>{profile.location}</span>
                </ContactRow>
                <ContactRow icon={<Clock size={16} />} label="Average Response Time">
                  <span>&lt; 24 Hours</span>
                </ContactRow>
              </div>

              <div className="flex items-center gap-3 mt-8 pt-6 border-t border-[var(--border)]">
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  data-tooltip="LinkedIn"
                  className="w-10 h-10 grid place-items-center rounded-full border border-[var(--border)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition focus-ring"
                >
                  <LinkedinIcon size={17} />
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  data-tooltip="GitHub"
                  className="w-10 h-10 grid place-items-center rounded-full border border-[var(--border)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition focus-ring"
                >
                  <GithubIcon size={17} />
                </a>
                <a
                  href={profile.fiverr}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs px-3 py-2 rounded-full border border-[var(--border)] text-[var(--muted)] hover:text-[var(--primary)] hover:border-[var(--primary)] transition focus-ring"
                >
                  Fiverr
                </a>
                <a
                  href={profile.upwork}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs px-3 py-2 rounded-full border border-[var(--border)] text-[var(--muted)] hover:text-[var(--primary)] hover:border-[var(--primary)] transition focus-ring"
                >
                  Upwork
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} noValidate className="section-surface p-8 space-y-4">
              <Field id="contact-name" label="Name" error={errors.name}>
                <input
                  id="contact-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-input"
                  placeholder="Enter your name"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "contact-name-error" : undefined}
                />
              </Field>
              <Field id="contact-email" label="Email" error={errors.email}>
                <input
                  id="contact-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-input"
                  placeholder="Enter your email"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "contact-email-error" : undefined}
                />
              </Field>
              <Field id="contact-subject" label="Subject" error={errors.subject}>
                <input
                  id="contact-subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="form-input"
                  placeholder="Enter subject"
                  aria-invalid={Boolean(errors.subject)}
                  aria-describedby={errors.subject ? "contact-subject-error" : undefined}
                />
              </Field>
              <Field id="contact-message" label="Message" error={errors.message}>
                <textarea
                  id="contact-message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="form-input min-h-[120px] resize-y"
                  placeholder="Type your message here..."
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "contact-message-error" : undefined}
                />
              </Field>
              <p className="text-xs text-[var(--muted)]">
                Submitting opens your email app with this message pre-filled to {profile.email}.
              </p>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[var(--primary)] text-[var(--on-primary)] font-semibold text-sm hover:brightness-110 transition focus-ring"
              >
                Send Message <Send size={15} />
              </button>
            </form>
          </Reveal>
        </div>
      </div>
      <style>{`
        .form-input {
          width: 100%;
          background: var(--surface-2);
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 0.65rem 0.9rem;
          font-size: 0.875rem;
          color: var(--text);
          outline: none;
          transition: border-color 0.2s;
        }
        .form-input:focus {
          border-color: var(--primary);
        }
      `}</style>
    </section>
  );
}

function ContactRow({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4">
      <span className="w-10 h-10 shrink-0 grid place-items-center rounded-lg bg-[var(--surface-2)] text-[var(--primary)]">
        {icon}
      </span>
      <div className="text-sm">
        <p className="text-xs text-[var(--muted)] mb-0.5">{label}</p>
        <div className="font-medium">{children}</div>
      </div>
    </div>
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="block">
      <label htmlFor={id} className="block text-xs font-medium text-[var(--muted)] mb-1.5">
        {label}
      </label>
      {children}
      {error && (
        <span id={`${id}-error`} role="alert" className="block text-xs mt-1" style={{ color: "var(--danger)" }}>
          {error}
        </span>
      )}
    </div>
  );
}
