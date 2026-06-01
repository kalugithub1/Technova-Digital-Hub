import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
  UserPlus,
  BookOpen,
  Award,
  Briefcase,
  Star,
  Sparkles,
} from "lucide-react";
import heroBg from "@/assets/site/tech_classroom_structure1.jpg";
import tier1Img from "@/assets/site/students_learning4.jpg";
import tier2Img from "@/assets/site/students_learning5.jpg";
import tier3Img from "@/assets/site/image3.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState } from "react";

export default function Programs() {
  return (
    <>
      <Hero />
      <Tier1 />
      <Tier2 />
      <Tier3 />
      <Pathway />
      <FAQ />
    </>
  );
}

function Hero() {
  return (
    <section
      style={{
        position: "relative",
        marginTop: "-5rem",
        paddingTop: "5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        backgroundColor: "#0B1F3A",
        minHeight: "90vh",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(11,31,58,.52)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.06,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.6) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.6) 1px,transparent 1px)",
          backgroundSize: "56px 56px",
          pointerEvents: "none",
        }}
      />
      <style>{`@keyframes fadeUp{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:translateY(0)}}.hero-animate{opacity:0;animation:fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) forwards;}`}</style>
      <div
        style={{
          position: "relative",
          maxWidth: "56rem",
          padding: "0 1.5rem",
          paddingBlock: "5rem",
          textAlign: "center",
        }}
      >
        <span
          className="hero-animate"
          style={{
            animationDelay: "0ms",
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            borderRadius: "9999px",
            padding: "0.375rem 1rem",
            fontSize: "0.75rem",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.18em",
            color: "var(--amber)",
          }}
        >
          What We Offer
        </span>
        <h1
          className="hero-animate"
          style={{
            animationDelay: "200ms",
            marginTop: "1.5rem",
            color: "#fff",
            fontFamily: '"DM Serif Display",serif',
            fontSize: "clamp(2.5rem,5vw,4.5rem)",
          }}
        >
          Programs and Services
        </h1>
        <p
          className="hero-animate"
          style={{
            animationDelay: "250ms",
            maxWidth: "42rem",
            margin: "1.5rem auto 0",
            fontSize: "1.125rem",
            color: "rgba(255,255,255,.75)",
          }}
        >
          A three-tier model built for accessibility, sustainability, and
          real-world impact.
        </p>
      </div>
    </section>
  );
}

function Tier1() {
  const ref = useScrollReveal<HTMLDivElement>();
  const details = [
    ["Target", "Refugees with basic literacy"],
    ["Cost", "Free"],
    ["Format", "In-person + offline"],
    ["Duration", "4-6 weeks"],
    ["Capacity", "120 learners / year"],
  ];
  const courses = [
    {
      name: "Google Workspace",
      desc: "Docs, Sheets, Slides, Drive, Gmail - collaboration for school, work and community organizing.",
    },
    {
      name: "Microsoft Office",
      desc: "Word, Excel, PowerPoint - the document and spreadsheet skills every employer expects.",
    },
    {
      name: "Basic Computing",
      desc: "File management, typing, hardware basics, troubleshooting - confidence with a computer.",
    },
    {
      name: "Internet Literacy",
      desc: "Safe browsing, search skills, email, online forms, and protecting personal data.",
    },
  ];
  return (
    <section style={{ background: "#fff", paddingBlock: "6rem" }}>
      <style>{`
        .tier1-text{opacity:0;transform:translateX(-56px);transition:opacity .75s cubic-bezier(0.22,1,0.36,1),transform .75s cubic-bezier(0.22,1,0.36,1);}
        .tier1-image{opacity:0;transform:translateX(56px);transition:opacity .75s cubic-bezier(0.22,1,0.36,1) .15s,transform .75s cubic-bezier(0.22,1,0.36,1) .15s;}
        [data-visible="true"] .tier1-text,[data-visible="true"] .tier1-image{opacity:1;transform:translateX(0);}
      `}</style>
      <div
        ref={ref}
        className="container-page tier1-grid"
        style={{ display: "grid", gap: "3rem", alignItems: "start" }}
      >
        {/* Text — left on desktop */}
        <div className="tier1-text" style={{ order: 2 }}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              borderRadius: "9999px",
              background: "var(--amber)",
              padding: "0.25rem 0.75rem",
              fontSize: "0.75rem",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "var(--brand-blue)",
            }}
          >
            Tier 1: Free
          </span>
          <h2 style={{ marginTop: "1rem", fontSize: "clamp(2rem,3vw,3rem)" }}>
            Foundational Digital Literacy
          </h2>
          <p style={{ marginTop: "1rem", fontSize: "1.125rem", color: "#000" }}>
            Everyone in the settlement deserves a starting point. Tier 1 is
            fully funded, in-person, and designed for first-time computer users.
          </p>
          <div
            style={{
              marginTop: "2rem",
              borderRadius: "1rem",
              border: "1px solid rgba(11,31,58,.1)",
              background: "var(--off-white)",
              padding: "1.5rem",
            }}
          >
            <dl
              style={{
                display: "grid",
                gap: "0.75rem",
                gridTemplateColumns: "repeat(2,1fr)",
              }}
            >
              {details.map(([k, v]) => (
                <div
                  key={k}
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <dt
                    style={{
                      fontSize: "0.6875rem",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      color: "var(--brand-blue)",
                    }}
                  >
                    {k}
                  </dt>
                  <dd
                    style={{
                      marginTop: "0.125rem",
                      fontSize: "0.875rem",
                      fontWeight: 500,
                      color: "#000",
                      fontStyle: "italic",
                    }}
                  >
                    {v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <ul
            style={{
              marginTop: "2rem",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            {courses.map((c) => (
              <li key={c.name} style={{ display: "flex", gap: "0.75rem" }}>
                <span
                  style={{
                    marginTop: "0.25rem",
                    display: "flex",
                    height: "1.5rem",
                    width: "1.5rem",
                    flexShrink: 0,
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "9999px",
                    background: "rgba(26,111,212,.1)",
                    color: "var(--brand-blue)",
                  }}
                >
                  <Check size={14} />
                </span>
                <div>
                  <p style={{ fontWeight: 600, color: "var(--navy)" }}>
                    {c.name}
                  </p>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "#000",
                      fontStyle: "italic",
                    }}
                  >
                    {c.desc}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <Link
            to="/contact"
            style={{
              marginTop: "2rem",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              borderRadius: "9999px",
              background: "var(--navy)",
              padding: "0.75rem 1.5rem",
              fontSize: "0.875rem",
              fontWeight: 600,
              color: "#fff",
              textDecoration: "none",
              transition: "opacity .2s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.opacity = ".9")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.opacity = "1")
            }
          >
            Get in Touch <ArrowRight size={16} />
          </Link>
        </div>
        {/* Image — first on mobile, right (order-1 visually = order:1) on desktop */}
        <div className="tier1-image" style={{ position: "relative", order: 1 }}>
          <img
            src={tier1Img}
            alt="Foundational digital literacy"
            style={{
              width: "100%",
              borderRadius: "1.25rem",
              objectFit: "cover",
              aspectRatio: "4/5",
              display: "block",
              boxShadow: "0 20px 25px -5px rgba(0,0,0,.15)",
            }}
          />
        </div>
      </div>
      <style>{`.tier1-grid{grid-template-columns:1fr}@media(min-width:1024px){.tier1-grid{grid-template-columns:1fr 1fr}.tier1-text{order:1!important}.tier1-image{order:2!important}}`}</style>
    </section>
  );
}

function Tier2() {
  const ref = useScrollReveal<HTMLDivElement>();
  const details = [
    ["Target", "Tier 1 graduates"],
    ["Cost", "Ksh 500 - 1,000"],
    ["Duration", "6-10 weeks"],
  ];
  const courses = [
    "Data Analysis with Excel & Power BI",
    "Digital Marketing & E-Commerce",
    "Search Engine Optimization (SEO)",
    "Web Development (HTML, CSS, JavaScript, WordPress)",
    "Cybersecurity Basics",
  ];
  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        paddingBlock: "6rem",
        backgroundColor: "#0B1F3A",
      }}
    >
      <style>{`
        .tier2-image{opacity:0;transform:translateX(-56px);transition:opacity .75s cubic-bezier(0.22,1,0.36,1),transform .75s cubic-bezier(0.22,1,0.36,1);}
        .tier2-text{opacity:0;transform:translateX(56px);transition:opacity .75s cubic-bezier(0.22,1,0.36,1) .15s,transform .75s cubic-bezier(0.22,1,0.36,1) .15s;}
        [data-visible="true"] .tier2-image,[data-visible="true"] .tier2-text{opacity:1;transform:translateX(0);}
      `}</style>
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.05,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.6) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.6) 1px,transparent 1px)",
          backgroundSize: "56px 56px",
          pointerEvents: "none",
        }}
      />
      <div
        ref={ref}
        className="container-page tier2-grid"
        style={{
          position: "relative",
          display: "grid",
          gap: "3rem",
          alignItems: "center",
        }}
      >
        <div className="tier2-image" style={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              inset: "-1rem",
              borderRadius: "1.75rem",
              background: "rgba(245,200,66,.2)",
              filter: "blur(2rem)",
            }}
          />
          <img
            src={tier2Img}
            alt="Advanced courses"
            style={{
              position: "relative",
              width: "100%",
              borderRadius: "1.25rem",
              objectFit: "cover",
              aspectRatio: "4/3",
              display: "block",
              boxShadow: "0 25px 50px -12px rgba(0,0,0,.4)",
              outline: "1px solid rgba(255,255,255,.1)",
            }}
          />
        </div>
        <div className="tier2-text">
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              borderRadius: "9999px",
              background: "var(--amber)",
              padding: "0.25rem 0.75rem",
              fontSize: "0.75rem",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "var(--navy)",
            }}
          >
            Tier 2: Subsidized
          </span>
          <h2
            style={{
              marginTop: "1rem",
              fontSize: "clamp(2rem,3vw,3rem)",
              color: "#fff",
            }}
          >
            Affordable Advanced Professional Courses
          </h2>
          <p
            style={{
              marginTop: "1rem",
              fontSize: "1.125rem",
              color: "rgba(255,255,255,.8)",
            }}
          >
            For graduates ready to move from basic skills to employable
            specializations.
          </p>
          <div
            style={{
              marginTop: "2rem",
              display: "grid",
              gap: "0.75rem",
              borderRadius: "1rem",
              border: "1px solid rgba(255,255,255,.1)",
              background: "rgba(255,255,255,.04)",
              padding: "1.5rem",
              gridTemplateColumns: "repeat(3,1fr)",
            }}
          >
            {details.map(([k, v]) => (
              <div key={k}>
                <p
                  style={{
                    fontSize: "0.6875rem",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "var(--amber)",
                  }}
                >
                  {k}
                </p>
                <p
                  style={{
                    marginTop: "0.125rem",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    color: "#fff",
                  }}
                >
                  {v}
                </p>
              </div>
            ))}
          </div>
          <div
            style={{
              marginTop: "2rem",
              borderRadius: "1rem",
              border: "1px solid rgba(245,200,66,.4)",
              background:
                "linear-gradient(135deg,rgba(245,200,66,.15),transparent)",
              padding: "1.5rem",
            }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.375rem",
                borderRadius: "9999px",
                background: "var(--amber)",
                padding: "0.25rem 0.75rem",
                fontSize: "0.6875rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "var(--navy)",
              }}
            >
              <Star size={12} style={{ fill: "var(--navy)" }} /> Flagship Course
            </span>
            <h3
              style={{
                marginTop: "0.75rem",
                fontFamily: '"DM Serif Display",serif',
                fontSize: "1.5rem",
                color: "#fff",
              }}
            >
              Graphic Design
            </h3>
            <p
              style={{
                marginTop: "0.5rem",
                fontSize: "0.875rem",
                color: "rgba(255,255,255,.8)",
              }}
            >
              Canva, Adobe Photoshop, and Illustrator, our most in-demand
              program.
            </p>
          </div>
          <ul
            style={{
              marginTop: "1.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
            }}
          >
            {courses.map((c) => (
              <li
                key={c}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  color: "rgba(255,255,255,.85)",
                }}
              >
                <span
                  style={{
                    height: "0.5rem",
                    width: "0.5rem",
                    flexShrink: 0,
                    borderRadius: "9999px",
                    background: "var(--amber)",
                    display: "inline-block",
                  }}
                />
                <span>{c}</span>
              </li>
            ))}
          </ul>
          <Link
            to="/contact"
            style={{
              marginTop: "2rem",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              borderRadius: "9999px",
              background: "var(--amber)",
              padding: "0.75rem 1.5rem",
              fontSize: "0.875rem",
              fontWeight: 700,
              color: "var(--navy)",
              textDecoration: "none",
            }}
          >
            Get in Touch <ArrowRight size={16} />
          </Link>
        </div>
      </div>
      <style>{`.tier2-grid{grid-template-columns:1fr}@media(min-width:1024px){.tier2-grid{grid-template-columns:1fr 1fr}}`}</style>
    </section>
  );
}

function Tier3() {
  const ref = useScrollReveal<HTMLDivElement>();
  const services = [
    {
      name: "Graphic Design & Brand Identity",
      desc: "Logos, brand systems, social graphics, print collateral.",
    },
    {
      name: "Website Development",
      desc: "Landing pages, WordPress builds, and small business sites.",
    },
    {
      name: "Digital Marketing & Social Media",
      desc: "Campaign strategy, content calendars, paid and organic growth.",
    },
    {
      name: "Data Entry & Analysis",
      desc: "Clean datasets, dashboards, reporting for programs and M&E teams.",
    },
  ];
  return (
    <section
      style={{ paddingBlock: "6rem", backgroundColor: "var(--off-white)" }}
    >
      <style>{`
        .tier3-text{opacity:0;transform:translateX(-56px);transition:opacity .75s cubic-bezier(0.22,1,0.36,1),transform .75s cubic-bezier(0.22,1,0.36,1);}
        .tier3-image{opacity:0;transform:translateX(56px);transition:opacity .75s cubic-bezier(0.22,1,0.36,1) .15s,transform .75s cubic-bezier(0.22,1,0.36,1) .15s;}
        [data-visible="true"] .tier3-text,[data-visible="true"] .tier3-image{opacity:1;transform:translateX(0);}
      `}</style>
      <div
        ref={ref}
        className="container-page tier3-grid"
        style={{ display: "grid", gap: "3rem", alignItems: "center" }}
      >
        {/* Text — left on desktop (order 1), first on mobile */}
        <div className="tier3-text" style={{ order: 1 }}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              borderRadius: "9999px",
              background: "var(--amber)",
              padding: "0.25rem 0.75rem",
              fontSize: "0.75rem",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "var(--brand-blue)",
            }}
          >
            Tier 3: Professional Services
          </span>
          <h2 style={{ marginTop: "1rem", fontSize: "clamp(2rem,3vw,3rem)" }}>
            Digital Services for NGOs and Businesses
          </h2>
          <p style={{ marginTop: "1rem", fontSize: "1.125rem", color: "#000" }}>
            Our top graduates take on real client work, earning income, building
            portfolios, and proving refugee talent on the open market.
          </p>
          <ul
            style={{
              marginTop: "2rem",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            {services.map((s) => (
              <li
                key={s.name}
                style={{
                  borderRadius: "0.75rem",
                  border: "1px solid rgba(0,0,0,.1)",
                  background: "#fff",
                  padding: "1.25rem",
                  transition: "border-color .2s, box-shadow .2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(26,111,212,.4)";
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 4px 12px rgba(0,0,0,.08)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(0,0,0,.1)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                <p style={{ fontWeight: 600, color: "#000" }}>{s.name}</p>
                <p
                  style={{
                    marginTop: "0.25rem",
                    fontSize: "0.875rem",
                    fontStyle: "italic",
                    color: "rgba(0,0,0,.7)",
                  }}
                >
                  {s.desc}
                </p>
              </li>
            ))}
          </ul>
          <Link
            to="/contact"
            style={{
              marginTop: "2rem",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              borderRadius: "9999px",
              background: "var(--brand-blue)",
              padding: "0.75rem 1.5rem",
              fontSize: "0.875rem",
              fontWeight: 600,
              color: "#fff",
              textDecoration: "none",
              transition: "opacity .2s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.opacity = ".9")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.opacity = "1")
            }
          >
            Request a Quote <ArrowRight size={16} />
          </Link>
        </div>
        {/* Image — right on desktop (order 2) */}
        <div className="tier3-image" style={{ order: 2 }}>
          <img
            src={tier3Img}
            alt="Professional services"
            style={{
              width: "100%",
              borderRadius: "1.25rem",
              objectFit: "cover",
              aspectRatio: "4/5",
              display: "block",
              boxShadow: "0 20px 25px -5px rgba(0,0,0,.15)",
            }}
          />
        </div>
      </div>
      <style>{`.tier3-grid{grid-template-columns:1fr}@media(min-width:1024px){.tier3-grid{grid-template-columns:1fr 1fr}}`}</style>
    </section>
  );
}

function Pathway() {
  const steps = [
    { icon: UserPlus, label: "Register", note: "Apply at the hub" },
    { icon: BookOpen, label: "Learn", note: "In-person training" },
    { icon: Award, label: "Get Certified", note: "Recognized completion" },
    { icon: Briefcase, label: "Earn", note: "Work, freelance, scale" },
  ];
  return (
    <section style={{ background: "#fff", paddingBlock: "6rem" }}>
      <div className="container-page">
        <div
          style={{ maxWidth: "42rem", margin: "0 auto", textAlign: "center" }}
        >
          <span
            style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.18em",
              color: "var(--brand-blue)",
            }}
          >
            The Pathway
          </span>
          <h2 style={{ marginTop: "0.75rem" }}>Your Journey with Technova</h2>
        </div>
        <div
          style={{ marginTop: "3.5rem", display: "grid", gap: "1.5rem" }}
          className="pathway-steps"
        >
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.label}
                style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    display: "flex",
                    height: "5rem",
                    width: "5rem",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "9999px",
                    background: "rgba(26,111,212,.7)",
                    color: "#fff",
                    boxShadow: "0 10px 15px -3px rgba(0,0,0,.2)",
                  }}
                >
                  <Icon size={32} />
                  <span
                    style={{
                      position: "absolute",
                      right: "-0.25rem",
                      top: "-0.25rem",
                      display: "flex",
                      height: "1.75rem",
                      width: "1.75rem",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "9999px",
                      background: "var(--amber)",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      color: "var(--navy)",
                    }}
                  >
                    {i + 1}
                  </span>
                </div>
                <h3
                  style={{
                    marginTop: "1.25rem",
                    fontFamily: '"DM Serif Display",serif',
                    fontSize: "1.25rem",
                    color: "var(--navy)",
                  }}
                >
                  {s.label}
                </h3>
                <p
                  style={{
                    marginTop: "0.25rem",
                    fontSize: "0.875rem",
                    fontStyle: "italic",
                    color: "rgba(0,0,0,.8)",
                  }}
                >
                  {s.note}
                </p>
                {i < steps.length - 1 && (
                  <ArrowRight
                    size={24}
                    style={{
                      position: "absolute",
                      right: 0,
                      top: "2rem",
                      display: "none",
                      color: "rgba(11,31,58,.7)",
                      transform: "translateX(50%)",
                    }}
                    className="pathway-arrow"
                  />
                )}
              </div>
            );
          })}
        </div>
        <style>{`.pathway-steps{grid-template-columns:repeat(2,1fr)}@media(min-width:768px){.pathway-steps{grid-template-columns:repeat(4,1fr)}.pathway-arrow{display:block!important}}`}</style>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const faqs = [
    {
      q: "Who can apply to Technova Digital Hub programs?",
      a: "Any refugee or member of the host community in Kalobeyei and Kakuma. Tier 1 has no prerequisites beyond basic literacy. Tier 2 requires Tier 1 completion or equivalent skills.",
    },
    {
      q: "Is Tier 1 really free?",
      a: "Yes. Tier 1 is 100% free for all eligible learners. It is funded by partnerships and Tier 3 service revenue.",
    },
    {
      q: "How much do the advanced (Tier 2) courses cost?",
      a: "Between Ksh 500 and Ksh 1,000 for the full course, depending on the program.",
    },
    {
      q: "How do I sign up?",
      a: "Visit the hub in Kalobeyei or use the Contact page on this site. We run intake cohorts throughout the year.",
    },
    {
      q: "Do you offer online learning?",
      a: "Our flagship delivery is in-person with offline materials. Some Tier 2 content is available in hybrid format.",
    },
    {
      q: "Can I skip Tier 1 if I already know the basics?",
      a: "Yes, we offer a short placement assessment. If you demonstrate the foundational skills, you can enroll directly in a Tier 2 course.",
    },
  ];
  return (
    <section
      style={{ paddingBlock: "6rem", backgroundColor: "var(--off-white)" }}
    >
      <div
        className="container-page"
        style={{ maxWidth: "48rem", margin: "0 auto" }}
      >
        <div style={{ textAlign: "center" }}>
          <span
            style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.18em",
              color: "var(--brand-blue)",
            }}
          >
            FAQ
          </span>
          <h2 style={{ marginTop: "0.75rem" }}>Common Questions</h2>
        </div>
        <div
          style={{
            marginTop: "3rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
          }}
        >
          {faqs.map((f, i) => (
            <div
              key={i}
              style={{
                borderRadius: "0.75rem",
                border: "1px solid rgba(11,31,58,.1)",
                background: "#fff",
                overflow: "hidden",
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "1.25rem",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  fontFamily: "Sora,sans-serif",
                  fontSize: "1rem",
                  color: "rgba(0,0,0,.8)",
                  fontWeight: 500,
                }}
              >
                {f.q}
                <span
                  style={{
                    fontSize: "1.5rem",
                    flexShrink: 0,
                    color: "var(--brand-blue)",
                    lineHeight: 1,
                  }}
                >
                  {open === i ? "−" : "+"}
                </span>
              </button>
              {open === i && (
                <div
                  style={{
                    padding: "0 1.25rem 1.25rem",
                    fontStyle: "italic",
                    color: "rgba(0,0,0,.7)",
                    lineHeight: 1.6,
                  }}
                >
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
