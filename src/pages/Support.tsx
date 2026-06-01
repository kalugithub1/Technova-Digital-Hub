import { Link } from "react-router-dom";
import {
  DollarSign,
  Laptop,
  Users,
  Briefcase,
  Monitor,
  HandCoins,
  HeartHandshake,
  Handshake,
  ArrowRight,
} from "lucide-react";
import heroBg from "@/assets/site/construction1.jpeg";
import { useScrollReveal, useScrollFadeUp } from "@/hooks/useScrollReveal";

const FADE_UP_STYLE = `
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(40px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .fade-up {
    opacity: 0;
    animation: fadeUp 0.65s cubic-bezier(0.22,1,0.36,1) forwards paused;
  }
`;
export default function Support() {
  return (
    <>
      <Hero />
      <WhyItMatters />
      <ThreeWays />
      <Corporate />
    </>
  );
}

function Hero() {
  return (
    <section
      style={{
        position: "relative",
        paddingTop: "8rem",
        paddingBottom: "6rem",
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "#fff",
        backgroundImage: `linear-gradient(rgba(11,31,58,.7),rgba(11,31,58,.7)),url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <style>{`@keyframes slideDown{from{opacity:0;transform:translateY(-32px)}to{opacity:1;transform:translateY(0)}}.hero-down{opacity:0;animation:slideDown 0.75s cubic-bezier(0.22,1,0.36,1) forwards;}`}</style>
      <div className="container-page">
        <span
          className="hero-down"
          style={{
            animationDelay: "0ms",
            display: "inline-block",
            color: "var(--amber)",
            fontSize: "0.75rem",
            fontWeight: 700,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginBottom: "1rem",
          }}
        >
          Get Involved
        </span>
        <h1
          className="hero-down"
          style={{ animationDelay: "130ms", color: "rgba(255,255,255,.8)" }}
        >
          Support the Movement
        </h1>
        <p
          className="hero-down"
          style={{
            animationDelay: "260ms",
            marginTop: "1rem",
            color: "rgba(255,255,255,.8)",
            maxWidth: "42rem",
            margin: "1rem auto 0",
          }}
        >
          From the first stone to a thriving digital classroom, your support
          builds what comes next.
        </p>
      </div>
    </section>
  );
}

const IMPACT = [
  { amount: "$40", text: "covers one month of internet for 25 learners" },
  { amount: "$115", text: "funds one fully equipped workstation" },
  { amount: "$385", text: "sponsors a full cohort of 30 students" },
];

function WhyItMatters() {
  return (
    <section
      style={{
        background: "var(--brand-blue)",
        color: "#fff",
        paddingBlock: "5rem",
      }}
    >
      <div className="container-page">
        <blockquote
          style={{
            maxWidth: "48rem",
            margin: "0 auto",
            textAlign: "center",
            fontFamily: '"DM Serif Display",serif',
            fontSize: "clamp(1.25rem,2.5vw,1.875rem)",
            lineHeight: 1.4,
          }}
        >
          "Every contribution directly funds equipment, internet access, and
          keeps courses free for refugees who need them most."
        </blockquote>
      </div>
      <div
        className="container-page impact-amounts"
        style={{ marginTop: "3rem", display: "grid", gap: "1.5rem" }}
      >
        {IMPACT.map((i) => (
          <div
            key={i.text}
            style={{
              borderRadius: "1rem",
              background: "#fff",
              color: "var(--navy)",
              padding: "1.5rem",
              boxShadow: "0 1px 3px rgba(0,0,0,.05)",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <div
              style={{
                width: "3.5rem",
                height: "3.5rem",
                borderRadius: "9999px",
                background: "rgba(245,200,66,.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <DollarSign
                size={28}
                style={{ color: "var(--amber)" }}
                strokeWidth={2.5}
              />
            </div>
            <p style={{ fontWeight: 500, lineHeight: 1.6 }}>
              <span
                style={{
                  fontWeight: 700,
                  color: "var(--brand-blue)",
                  fontSize: "1.125rem",
                }}
              >
                {i.amount}
              </span>{" "}
              {i.text}
            </p>
          </div>
        ))}
      </div>
      <style>{`.impact-amounts{grid-template-columns:1fr}@media(min-width:768px){.impact-amounts{grid-template-columns:repeat(3,1fr)}}`}</style>
    </section>
  );
}

function ThreeWays() {
  const ref = useScrollFadeUp();

  return (
    <section ref={ref} style={{ paddingBlock: "6rem", background: "#fff" }}>
      <style>{FADE_UP_STYLE}</style>
      <div className="container-page">
        <div
          className="fade-up"
          style={{
            animationDelay: "0ms",
            textAlign: "center",
            maxWidth: "42rem",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              color: "var(--brand-blue)",
              fontSize: "0.75rem",
              textTransform: "uppercase",
              letterSpacing: "0.25em",
              fontWeight: 600,
            }}
          >
            Get Involved
          </div>
          <h2 style={{ marginTop: "0.75rem" }}>Three Ways to Support</h2>
        </div>

        <div
          style={{ marginTop: "3.5rem", display: "grid", gap: "1.5rem" }}
          className="ways-grid"
        >
          {[
            {
              theme: "amber" as const,
              delay: "200ms",
              icon: <HandCoins size={28} />,
              title: "Donate",
              body: "One-time or recurring gifts via bank transfer or M-Pesa. Every shilling goes to equipment, internet, and teaching costs.",
              detail:
                "M-Pesa Paybill: XXXXX · Account: TECHNOVA  •  Bank: Equity Bank - A/C XXXXXX",
              cta: "Donate Now",
              to: "/contact",
            },
            {
              theme: "blue" as const,
              delay: "400ms",
              icon: <Handshake size={28} />,
              title: "Partner",
              body: "NGOs, tech companies, and local businesses can sponsor cohorts, provide internships, or co-design curriculum.",
              detail:
                "Open to multi-year program partnerships and in-kind contributions.",
              cta: "Become a Partner",
              to: "/contact",
            },
            {
              theme: "navy" as const,
              delay: "600ms",
              icon: <HeartHandshake size={28} />,
              title: "Volunteer",
              body: "Mentor remotely, help develop curriculum, run guest workshops, or contribute professional services.",
              detail:
                "Time commitments from a single workshop up to ongoing weekly mentorship.",
              cta: "Volunteer Now",
              to: "/contact",
            },
          ].map(({ theme, delay, ...w }) => (
            <div
              key={w.title}
              className="fade-up"
              style={{ animationDelay: delay }}
            >
              <WayCard theme={theme} {...w} />
            </div>
          ))}
        </div>
        <style>{`.ways-grid{grid-template-columns:1fr}@media(min-width:1024px){.ways-grid{grid-template-columns:repeat(3,1fr)}}`}</style>
      </div>
    </section>
  );
}

function WayCard({
  theme,
  icon,
  title,
  body,
  detail,
  cta,
  to,
}: {
  theme: "amber" | "blue" | "navy";
  icon: React.ReactNode;
  title: string;
  body: string;
  detail: string;
  cta: string;
  to: string;
}) {
  const themes = {
    amber: {
      card: "rgba(245,200,66,.1)",
      border: "rgba(245,200,66,.4)",
      iconBg: "var(--amber)",
      iconColor: "var(--navy)",
      btn: { bg: "var(--amber)", color: "var(--navy)" },
      titleColor: "var(--navy)",
      textColor: "#000",
      detailColor: "rgba(11,31,58,.6)",
    },
    blue: {
      card: "rgba(26,111,212,.1)",
      border: "rgba(26,111,212,.4)",
      iconBg: "var(--brand-blue)",
      iconColor: "#fff",
      btn: { bg: "var(--brand-blue)", color: "#fff" },
      titleColor: "var(--navy)",
      textColor: "#000",
      detailColor: "rgba(11,31,58,.6)",
    },
    navy: {
      card: "var(--navy)",
      border: "var(--navy)",
      iconBg: "var(--amber)",
      iconColor: "var(--navy)",
      btn: { bg: "var(--amber)", color: "var(--navy)" },
      titleColor: "#fff",
      textColor: "rgba(255,255,255,.9)",
      detailColor: "rgba(255,255,255,.6)",
    },
  }[theme];

  return (
    <article
      style={{
        borderRadius: "1rem",
        border: `2px solid ${themes.border}`,
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        background: themes.card,
        height: "100%",
        transition: "transform .2s, box-shadow .2s",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0 20px 40px -12px rgba(0,0,0,.2)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLElement).style.boxShadow = "none";
      }}
    >
      <div
        style={{
          height: "3.5rem",
          width: "3.5rem",
          borderRadius: "1rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: themes.iconBg,
          color: themes.iconColor,
        }}
      >
        {icon}
      </div>
      <h3
        style={{
          marginTop: "1.25rem",
          fontFamily: '"DM Serif Display",serif',
          fontSize: "1.5rem",
          color: themes.titleColor,
        }}
      >
        {title}
      </h3>
      <p
        style={{
          marginTop: "0.75rem",
          fontSize: "0.9375rem",
          lineHeight: 1.6,
          color: themes.textColor,
          flex: 1,
        }}
      >
        {body}
      </p>
      <p
        style={{
          marginTop: "0.5rem",
          fontSize: "0.875rem",
          lineHeight: 1.6,
          color: themes.detailColor,
        }}
      >
        {detail}
      </p>
      <Link
        to={to}
        style={{
          marginTop: "1.5rem",
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5rem",
          padding: "0.625rem 1.25rem",
          borderRadius: "9999px",
          fontWeight: 600,
          fontSize: "0.875rem",
          textDecoration: "none",
          transition: "opacity .2s",
          background: themes.btn.bg,
          color: themes.btn.color,
        }}
        onMouseEnter={(e) =>
          ((e.currentTarget as HTMLElement).style.opacity = ".9")
        }
        onMouseLeave={(e) =>
          ((e.currentTarget as HTMLElement).style.opacity = "1")
        }
      >
        {cta} <ArrowRight size={16} />
      </Link>
    </article>
  );
}

const CORPORATE = [
  {
    icon: Laptop,
    title: "In-Kind Donations",
    text: "Laptops, monitors, software licenses, networking gear.",
  },
  {
    icon: Users,
    title: "Employee Mentorship",
    text: "Pair your engineers and designers with our learners.",
  },
  {
    icon: Briefcase,
    title: "Graduate Hiring",
    text: "Recruit trained refugee talent for remote and in-person roles.",
  },
  {
    icon: Monitor,
    title: "Digital Services",
    text: "Commission our Tier 3 studio for design, dev, and data work.",
  },
];

function Corporate() {
  return (
    <section style={{ paddingBlock: "5rem", background: "var(--off-white)" }}>
      <div className="container-page">
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span
            style={{
              display: "inline-block",
              color: "var(--brand-blue)",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginBottom: "0.75rem",
            }}
          >
            For Companies
          </span>
          <h2
            style={{
              fontFamily: '"DM Serif Display",serif',
              color: "var(--navy)",
            }}
          >
            Corporate Partnerships
          </h2>
        </div>
        <div
          style={{
            display: "grid",
            gap: "1.5rem",
            maxWidth: "56rem",
            margin: "0 auto",
          }}
          className="corporate-grid"
        >
          {CORPORATE.map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.title}
                style={{
                  borderRadius: "1rem",
                  background: "#fff",
                  padding: "1.5rem",
                  border: "1px solid rgba(0,0,0,.05)",
                  display: "flex",
                  gap: "1rem",
                }}
              >
                <div
                  style={{
                    width: "3rem",
                    height: "3rem",
                    borderRadius: "0.75rem",
                    background: "rgba(26,111,212,.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={24} style={{ color: "var(--brand-blue)" }} />
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: '"DM Serif Display",serif',
                      fontSize: "1.25rem",
                      color: "var(--navy)",
                      marginBottom: "0.25rem",
                    }}
                  >
                    {c.title}
                  </h3>
                  <p
                    style={{ fontSize: "0.875rem", color: "rgba(11,31,58,.7)" }}
                  >
                    {c.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <style>{`.corporate-grid{grid-template-columns:1fr}@media(min-width:640px){.corporate-grid{grid-template-columns:repeat(2,1fr)}}`}</style>
        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <Link to="/contact" className="btn-navy">
            Start a Conversation
          </Link>
        </div>
      </div>
    </section>
  );
}
