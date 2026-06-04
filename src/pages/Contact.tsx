import { useState } from "react";
import {
  MapPin,
  Mail,
  Phone,
  Send,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import heroImg from "@/assets/site/team_img3.jpg";
import { z } from "zod";

const schema = z.object({
  firstName: z.string().trim().min(1, "Required").max(80),
  lastName: z.string().trim().min(1, "Required").max(80),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  subject: z.string().min(1, "Select a subject"),
  message: z.string().trim().min(5, "Tell us a bit more").max(2000),
});

const SUBJECTS = [
  "Course Inquiry",
  "Donation",
  "Partnership Inquiry",
  "Request a Quote",
  "Volunteer",
  "General Inquiry",
];

export default function Contact() {
  return (
    <>
      <Hero />
      <Main />
    </>
  );
}

function Hero() {
  return (
    <section
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        minHeight: "70vh",
        backgroundImage: `url(${heroImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <style>{`
        @keyframes slideInLeft{from{opacity:0;transform:translateX(-48px)}to{opacity:1;transform:translateX(0)}}
        .slide-left{opacity:0;animation:slideInLeft 0.75s cubic-bezier(0.22,1,0.36,1) forwards;}
      `}</style>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(11,31,58,.45)",
        }}
      />
      <div
        className="container-page"
        style={{
          position: "relative",
          paddingBlock: "5rem",
          textAlign: "center",
        }}
      >
        <span
          className="slide-left"
          style={{
            animationDelay: "0ms",
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            color: "var(--amber)",
            fontSize: "0.875rem",
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          <span className="pulse-dot" /> Connect With Us
        </span>
        <h1
          className="slide-left"
          style={{ animationDelay: "120ms", color: "#fff", marginTop: "1rem" }}
        >
          Get in Touch
        </h1>
        <p
          className="slide-left"
          style={{
            animationDelay: "240ms",
            marginTop: "1.25rem",
            maxWidth: "42rem",
            margin: "1.25rem auto 0",
            color: "rgba(255,255,255,.9)",
          }}
        >
          Whether you're a prospective student, donor, partner, or volunteer,
          we'd love to hear from you. We respond within 48 hours.
        </p>
      </div>
    </section>
  );
}

function Main() {
  return (
    <section style={{ background: "#fff", paddingBlock: "5rem" }}>
      <div
        className="container-page contact-grid"
        style={{ display: "grid", gap: "3rem" }}
      >
        <ContactDetails />
        <ContactForm />
      </div>
      <style>{`.contact-grid{grid-template-columns:1fr}@media(min-width:1024px){.contact-grid{grid-template-columns:1fr 1fr}}`}</style>
    </section>
  );
}

function ContactDetails() {
  return (
    <div>
      <h2>Reach Us Directly</h2>
      <p style={{ marginTop: "0.75rem", color: "#000" }}>
        Our team is based in Kalobeyei and online, pick whichever channel works
        for you.
      </p>
      <ul
        style={{
          marginTop: "2rem",
          display: "flex",
          flexDirection: "column",
          gap: "1.25rem",
          listStyle: "none",
        }}
      >
        {[
          {
            icon: <MapPin size={20} />,
            title: "Visit",
            content: "Kalobeyei Resettlement Camp, Turkana County, Kenya",
          },
          {
            icon: <Mail size={20} />,
            title: "Email",
            content: (
              <a
                href="mailto:technovadigitahub@gmail.com"
                style={{ color: "var(--brand-blue)" }}
              >
                technovadigitahub@gmail.com
              </a>
            ),
          },
          {
            icon: <Phone size={20} />,
            title: "Phone",
            content: (
              <a
                href="tel:+254716734707"
                style={{ color: "var(--brand-blue)" }}
              >
                +254 716 734 707
              </a>
            ),
          },
        ].map((r, i) => (
          <li key={i} style={{ display: "flex", gap: "1rem" }}>
            <div
              style={{
                height: "2.75rem",
                width: "2.75rem",
                flexShrink: 0,
                borderRadius: "9999px",
                background: "var(--light-blue)",
                color: "var(--brand-blue)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {r.icon}
            </div>
            <div>
              <div style={{ fontWeight: 600, color: "#000" }}>{r.title}</div>
              <div style={{ color: "#000" }}>{r.content}</div>
            </div>
          </li>
        ))}
      </ul>
      <div style={{ marginTop: "2rem" }}>
        <div
          style={{
            fontSize: "0.875rem",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: "#000",
            marginBottom: "0.75rem",
          }}
        >
          Follow Us
        </div>
        <div style={{ display: "flex", gap: "0.75rem" }}>
          {[
            {
              Icon: FaFacebookF,
              label: "Facebook",
              href: "https://www.facebook.com/profile.php?id=61566723170197",
            },
            {
              Icon: FaLinkedinIn,
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/technova-digital-hub-767583404/",
            },
            {
              Icon: FaInstagram,
              label: "Instagram",
              href: "https://www.instagram.com/tech_novadigitalhub/?hl=en",
            },
          ].map(({ Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              style={{
                height: "2.75rem",
                width: "2.75rem",
                borderRadius: "9999px",
                background: "var(--navy)",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "background .2s, color .2s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "var(--amber)";
                el.style.color = "var(--navy)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "var(--navy)";
                el.style.color = "#fff";
              }}
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
      <div
        style={{
          marginTop: "2rem",
          borderRadius: "1.25rem",
          overflow: "hidden",
          boxShadow: "0 4px 6px -1px rgba(0,0,0,.1)",
          border: "1px solid rgba(0,0,0,.05)",
        }}
      >
        <iframe
          title="Map of Kalobeyei area"
          src="https://www.google.com/maps?q=Kalobeyei,+Turkana+County,+Kenya&output=embed"
          width="100%"
          height="320"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          style={{ border: 0, display: "block" }}
        />
      </div>
    </div>
  );
}

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [serverError, setServerError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setServerError(null);
    setSubmitted(false);

    const formElement = e.currentTarget;
    const fd = new FormData(formElement);
    const payload = {
      firstName: String(fd.get("firstName") ?? ""),
      lastName: String(fd.get("lastName") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      subject: String(fd.get("subject") ?? ""),
      message: String(fd.get("message") ?? ""),
    };

    const result = schema.safeParse(payload);
    if (!result.success) {
      const next: Record<string, string> = {};
      for (const issue of result.error.issues)
        next[issue.path[0] as string] = issue.message;
      setErrors(next);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xwvjezra", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: fd, // You can pass the FormData object directly to Formspree
      });

      if (response.ok) {
        setSubmitted(true);
        formElement.reset();
      } else {
        const data = await response.json();
        if (data.errors) {
          setServerError(data.errors.map((err: any) => err.message).join(", "));
        } else {
          setServerError("Something went wrong. Please try again later.");
        }
      }
    } catch (err) {
      setServerError("Network error. Please check your internet connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputStyle = {
    marginTop: "0.375rem",
    width: "100%",
    borderRadius: "0.5rem",
    border: "1px solid rgba(0,0,0,.15)",
    background: "#fff",
    padding: "0.625rem 0.75rem",
    color: "#000",
    fontFamily: "Sora,sans-serif",
    fontSize: "1rem",
    outline: "none",
  };
  const labelStyle = { fontSize: "0.875rem", fontWeight: 600, color: "#000" };
  <style>{`
  @keyframes successFadeIn {
    from {
      opacity: 0;
      transform: translateY(16px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`}</style>;
  if (submitted) {
    return (
      <div
        style={{
          background: "#fff",
          borderRadius: "1.25rem",
          boxShadow: "0 20px 25px -5px rgba(0,0,0,.1)",
          border: "1px solid rgba(0,0,0,.05)",
          padding: "4rem 2rem",
          textAlign: "center",
          animation: "successFadeIn .5s ease",
        }}
      >
        <style>{`
        @keyframes successFadeIn {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

        <div
          style={{
            width: "90px",
            height: "90px",
            margin: "0 auto 1.5rem",
            borderRadius: "50%",
            background: "#22c55e",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 12px 30px rgba(34,197,94,.25)",
          }}
        >
          <CheckCircle2 size={48} color="#fff" />
        </div>

        <h3
          style={{
            fontFamily: '"DM Serif Display", serif',
            color: "var(--navy)",
            fontSize: "2rem",
            marginBottom: "1rem",
          }}
        >
          Thank You!
        </h3>

        <p
          style={{
            maxWidth: "520px",
            margin: "0 auto",
            color: "#4b5563",
            lineHeight: 1.8,
            fontSize: "1rem",
          }}
        >
          Your message has been successfully submitted.
          <br />A member of the <strong>Technova Digital Hub</strong> team will
          review your inquiry and respond within <strong>24–48 hours</strong>.
        </p>

        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setErrors({});
            setServerError(null);
          }}
          style={{
            marginTop: "2rem",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: ".5rem",
            borderRadius: "9999px",
            background: "var(--brand-blue)",
            color: "#fff",
            fontWeight: 600,
            padding: "0.9rem 1.75rem",
            border: "none",
            cursor: "pointer",
            fontFamily: "Sora,sans-serif",
            fontSize: "1rem",
            transition: "all .2s ease",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget;
            el.style.opacity = ".9";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget;
            el.style.opacity = "1";
          }}
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "1.25rem",
        boxShadow: "0 20px 25px -5px rgba(0,0,0,.1)",
        border: "1px solid rgba(0,0,0,.05)",
        padding: "2rem 2.5rem",
      }}
    >
      <h3
        style={{
          fontFamily: '"DM Serif Display",serif',
          fontSize: "1.5rem",
          color: "var(--navy)",
        }}
      >
        Send Us a Message
      </h3>
      <p style={{ fontSize: "0.875rem", color: "#000", marginTop: "0.25rem" }}>
        For course inquiries, select <strong>"Course Inquiry"</strong> below.
      </p>

      {serverError && (
        <div
          style={{
            marginTop: "1.25rem",
            display: "flex",
            alignItems: "flex-start",
            gap: "0.75rem",
            borderRadius: "0.75rem",
            padding: "1rem",
            background: "#FCE8E6",
            border: "1px solid #EA4335",
          }}
        >
          <AlertCircle
            size={20}
            style={{
              color: "#EA4335",
              flexShrink: 0,
              marginTop: "0.125rem",
            }}
          />
          <div style={{ color: "#000" }}>
            <div style={{ fontWeight: 600 }}>Submission Failed</div>
            {serverError}
          </div>
        </div>
      )}

      <form
        onSubmit={onSubmit}
        style={{ marginTop: "1.5rem", display: "grid", gap: "1rem" }}
      >
        <div
          style={{
            display: "grid",
            gap: "1rem",
            gridTemplateColumns: "1fr 1fr",
          }}
        >
          <Field
            label="First Name"
            name="firstName"
            error={errors.firstName}
            required
            inputStyle={inputStyle}
            labelStyle={labelStyle}
          />
          <Field
            label="Last Name"
            name="lastName"
            error={errors.lastName}
            required
            inputStyle={inputStyle}
            labelStyle={labelStyle}
          />
        </div>
        <Field
          label="Email Address"
          name="email"
          type="email"
          error={errors.email}
          required
          inputStyle={inputStyle}
          labelStyle={labelStyle}
        />
        <Field
          label="Phone Number"
          name="phone"
          type="tel"
          error={errors.phone}
          inputStyle={inputStyle}
          labelStyle={labelStyle}
        />
        <div>
          <label style={labelStyle}>Subject</label>
          <select
            name="subject"
            required
            defaultValue=""
            style={{ ...inputStyle, cursor: "pointer" }}
          >
            <option value="" disabled>
              Choose a topic…
            </option>
            {SUBJECTS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          {errors.subject && (
            <p
              style={{
                marginTop: "0.25rem",
                fontSize: "0.875rem",
                color: "#b91c1c",
              }}
            >
              {errors.subject}
            </p>
          )}
        </div>
        <div>
          <label style={labelStyle}>Message</label>
          <textarea
            name="message"
            rows={5}
            required
            placeholder="How can we help?"
            style={{ ...inputStyle, resize: "vertical" }}
          />
          {errors.message && (
            <p
              style={{
                marginTop: "0.25rem",
                fontSize: "0.875rem",
                color: "#b91c1c",
              }}
            >
              {errors.message}
            </p>
          )}
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          style={{
            width: "100%",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
            borderRadius: "9999px",
            background: "var(--brand-blue)",
            color: "#fff",
            fontWeight: 600,
            padding: "0.875rem",
            fontFamily: "Sora,sans-serif",
            fontSize: "1rem",
            border: "none",
            cursor: isSubmitting ? "not-allowed" : "pointer",
            opacity: isSubmitting ? 0.7 : 1,
            transition: "opacity .2s",
          }}
          onMouseEnter={(e) => {
            if (!isSubmitting)
              (e.currentTarget as HTMLElement).style.opacity = ".9";
          }}
          onMouseLeave={(e) => {
            if (!isSubmitting)
              (e.currentTarget as HTMLElement).style.opacity = "1";
          }}
        >
          {isSubmitting ? "Sending..." : "Send Message"} <Send size={16} />
        </button>
      </form>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  error,
  inputStyle,
  labelStyle,
}: any) {
  return (
    <div>
      <label style={labelStyle}>
        {label}
        {required && <span style={{ color: "var(--brand-blue)" }}> *</span>}
      </label>
      <input name={name} type={type} required={required} style={inputStyle} />
      {error && (
        <p
          style={{
            marginTop: "0.25rem",
            fontSize: "0.875rem",
            color: "#b91c1c",
          }}
        >
          {error}
        </p>
      )}
    </div>
  );
}
