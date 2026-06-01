import { Link } from "react-router-dom";
import heroBg from "@/assets/site/image10.jpg";
import wavesBg from "@/assets/site/image12.jpg";
import { useScrollReveal, useScrollFadeUp } from "@/hooks/useScrollReveal";

export default function Impact() {
  return (
    <>
      <Hero />
      <Metrics />
      <Stories />
      <SDG />
      <Commitment />
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
        backgroundColor: "rgb(11,31,58)",
        backgroundImage: `linear-gradient(rgba(11,31,58,.58),rgba(11,31,58,.58)),url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <style>{`@keyframes fadeDown{from{opacity:0;transform:translateY(-32px)}to{opacity:1;transform:translateY(0)}}.hero-down{opacity:0;animation:fadeDown 0.75s cubic-bezier(0.22,1,0.36,1) forwards;}`}</style>
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
          Our Impact
        </span>
        <h1
          className="hero-down"
          style={{ animationDelay: "120ms", color: "#fff" }}
        >
          Numbers That Tell the Story
        </h1>
        <p
          className="hero-down"
          style={{
            animationDelay: "240ms",
            marginTop: "1rem",
            color: "rgba(255,255,255,.8)",
            maxWidth: "42rem",
            margin: "1rem auto 0",
          }}
        >
          Real outcomes, measured and shared, from first enrollment to first
          paycheck.
        </p>
      </div>
    </section>
  );
}

const METRICS = [
  { n: "120+", label: "Learners trained in pilot cohorts" },
  { n: "30+", label: "Graduates placed in digital work" },
  { n: "20%", label: "Target placement rate within 6 months" },
  { n: "500+", label: "Cumulative trainees over 5 years" },
];

function Metrics() {
  const ref = useScrollReveal<HTMLDivElement>(0.1);
  return (
    <section
      style={{ paddingBlock: "5rem", background: "var(--navy)", color: "#fff" }}
    >
      <style>{`
        .metric-card{opacity:0;transform:translateY(36px);transition:opacity .6s cubic-bezier(0.22,1,0.36,1),transform .6s cubic-bezier(0.22,1,0.36,1);}
        .metric-card:nth-child(1){transition-delay:100ms}.metric-card:nth-child(2){transition-delay:200ms}.metric-card:nth-child(3){transition-delay:300ms}.metric-card:nth-child(4){transition-delay:400ms}
        [data-visible="true"] .metric-card{opacity:1;transform:translateY(0);}
      `}</style>
      <div
        ref={ref}
        className="container-page metrics-grid"
        style={{ display: "grid", gap: "1.5rem" }}
      >
        {METRICS.map((m) => (
          <div
            key={m.label}
            className="metric-card"
            style={{
              borderRadius: "1rem",
              border: "1px solid rgba(255,255,255,.1)",
              background: "rgba(255,255,255,.05)",
              backdropFilter: "blur(8px)",
              padding: "2rem",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontFamily: '"DM Serif Display",serif',
                fontSize: "3rem",
                color: "var(--amber)",
              }}
            >
              {m.n}
            </div>
            <div
              style={{
                marginTop: "0.75rem",
                fontSize: "0.875rem",
                color: "rgba(255,255,255,.8)",
              }}
            >
              {m.label}
            </div>
          </div>
        ))}
      </div>
      <style>{`.metrics-grid{grid-template-columns:repeat(2,1fr)}@media(min-width:1024px){.metrics-grid{grid-template-columns:repeat(4,1fr)}}`}</style>
    </section>
  );
}

const STORIES = [
  {
    quote:
      "I came to the hub knowing nothing about computers. Today I design logos for businesses across Kakuma and earn an income that supports my family.",
    name: "Kalu A.",
    program: "Graphic Design - Tier 2",
    location: "Kalobeyei Village 3",
    initials: "KA",
  },
  {
    quote:
      "The web development course gave me a future I could not have imagined. I now build websites remotely for clients in Nairobi.",
    name: "Omar A.",
    program: "Web Development - Tier 2",
    location: "Kakuma Camp",
    initials: "OA",
  },
];

function Stories() {
  const ref = useScrollFadeUp(0.15);

  return (
    <section style={{ paddingBlock: "5rem", background: "#fff" }}>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fade-up {
          opacity: 0;
          animation: fadeUp 0.65s cubic-bezier(0.22,1,0.36,1) forwards paused;
        }
        .story-card:nth-child(1) .fade-up, .story-card:nth-child(1).fade-up { animation-delay: 0ms; }
        .story-card:nth-child(2) .fade-up, .story-card:nth-child(2).fade-up { animation-delay: 120ms; }
        .stories-grid { grid-template-columns: 1fr; }
        @media(min-width:768px){ .stories-grid { grid-template-columns: repeat(2,1fr); } }
      `}</style>
      <div className="container-page">
        <h2
          style={{
            fontFamily: '"DM Serif Display",serif',
            textAlign: "center",
            marginBottom: "3rem",
            color: "var(--navy)",
          }}
        >
          From the Community
        </h2>
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className="stories-grid"
          style={{
            display: "grid",
            gap: "2rem",
            maxWidth: "64rem",
            margin: "0 auto",
          }}
        >
          {STORIES.map((s) => (
            <article
              key={s.name}
              className="story-card fade-up"
              style={{
                borderRadius: "1rem",
                background: "var(--off-white)",
                border: "1px solid rgba(0,0,0,.05)",
                padding: "2rem",
                boxShadow: "0 1px 3px rgba(0,0,0,.05)",
              }}
            >
              <div
                style={{
                  color: "var(--amber)",
                  fontFamily: '"DM Serif Display",serif',
                  fontSize: "3.75rem",
                  lineHeight: 1,
                  marginBottom: "0.5rem",
                }}
              >
                "
              </div>
              <p
                style={{
                  fontStyle: "italic",
                  color: "rgba(11,31,58,.8)",
                  lineHeight: 1.6,
                }}
              >
                {s.quote}
              </p>
              <div
                style={{
                  marginTop: "1.5rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <div
                  style={{
                    height: "3rem",
                    width: "3rem",
                    borderRadius: "9999px",
                    background: "var(--navy)",
                    color: "var(--amber)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                  }}
                >
                  {s.initials}
                </div>
                <div>
                  <div style={{ fontWeight: 600, color: "var(--navy)" }}>
                    {s.name}
                  </div>
                  <div
                    style={{ fontSize: "0.875rem", color: "rgba(11,31,58,.6)" }}
                  >
                    {s.program} · {s.location}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const SDGS = [
  {
    n: "4",
    title: "Quality Education",
    text: "Inclusive, equitable digital literacy for displaced learners who have been systematically excluded from formal education pathways.",
  },
  {
    n: "8",
    title: "Decent Work & Economic Growth",
    text: "Pathways from training to paid digital work, freelancing, remote employment, and entrepreneurship, that move refugees beyond aid.",
  },
  {
    n: "10",
    title: "Reduced Inequalities",
    text: "Bridging the digital divide between refugees and the global workforce by delivering world-class skills inside the settlement.",
  },
];

function SDG() {
  const ref = useScrollFadeUp(0.15);

  return (
    <section style={{ paddingBlock: "5rem", background: "var(--off-white)" }}>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fade-up {
          opacity: 0;
          animation: fadeUp 0.6s cubic-bezier(0.22,1,0.36,1) forwards paused;
        }
        .sdg-impact-card:nth-child(1).fade-up { animation-delay: 0ms; }
        .sdg-impact-card:nth-child(2).fade-up { animation-delay: 120ms; }
        .sdg-impact-card:nth-child(3).fade-up { animation-delay: 240ms; }
        .sdg-impact-grid { grid-template-columns: 1fr; }
        @media(min-width:768px){ .sdg-impact-grid { grid-template-columns: repeat(3,1fr); } }
      `}</style>
      <div className="container-page">
        <h2
          style={{
            fontFamily: '"DM Serif Display",serif',
            textAlign: "center",
            marginBottom: "3rem",
            color: "var(--navy)",
          }}
        >
          SDG Alignment
        </h2>
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className="sdg-impact-grid"
          style={{ display: "grid", gap: "1.5rem" }}
        >
          {SDGS.map((s) => (
            <div
              key={s.n}
              className="sdg-impact-card fade-up"
              style={{
                borderRadius: "1rem",
                background: "#fff",
                padding: "2rem",
                border: "1px solid rgba(0,0,0,.05)",
                boxShadow: "0 1px 3px rgba(0,0,0,.05)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  marginBottom: "1rem",
                }}
              >
                <div
                  style={{
                    height: "3.5rem",
                    width: "3.5rem",
                    borderRadius: "0.75rem",
                    background: "var(--brand-blue)",
                    color: "#fff",
                    fontFamily: '"DM Serif Display",serif',
                    fontSize: "1.5rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {s.n}
                </div>
                <div style={{ fontWeight: 600, color: "var(--navy)" }}>
                  SDG {s.n}
                </div>
              </div>
              <h3
                style={{
                  fontFamily: '"DM Serif Display",serif',
                  fontSize: "1.25rem",
                  color: "var(--navy)",
                  marginBottom: "0.5rem",
                }}
              >
                {s.title}
              </h3>
              <p
                style={{ fontSize: "0.875rem", color: "#000", lineHeight: 1.6 }}
              >
                {s.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Commitment() {
  const ref = useScrollReveal<HTMLDivElement>();
  return (
    <section
      style={{
        position: "relative",
        paddingBlock: "6rem",
        color: "#fff",
        backgroundImage: `linear-gradient(rgba(11,31,58,.92),rgba(11,31,58,.92)),url(${wavesBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <style>{`
        .commit-item{opacity:0;transform:translateX(-56px);transition:opacity .75s cubic-bezier(0.22,1,0.36,1),transform .75s cubic-bezier(0.22,1,0.36,1);}
        .commit-item:nth-child(1){transition-delay:0ms}.commit-item:nth-child(2){transition-delay:130ms}.commit-item:nth-child(3){transition-delay:260ms}.commit-item:nth-child(4){transition-delay:390ms}
        [data-visible="true"] .commit-item{opacity:1;transform:translateX(0);}
      `}</style>
      <div
        ref={ref}
        className="container-page"
        style={{ maxWidth: "48rem", margin: "0 auto", textAlign: "center" }}
      >
        <h2
          className="commit-item"
          style={{ color: "#fff", marginBottom: "1.5rem" }}
        >
          Our Commitment to Accountability
        </h2>
        <p
          className="commit-item"
          style={{
            color: "rgba(255,255,255,.8)",
            lineHeight: 1.6,
            marginBottom: "1rem",
          }}
        >
          We measure what matters. Every cohort is tracked from enrollment
          through graduation and into employment, and our data is published
          openly to partners and donors.
        </p>
        <p
          className="commit-item"
          style={{
            color: "rgba(255,255,255,.8)",
            lineHeight: 1.6,
            marginBottom: "2rem",
          }}
        >
          Our north-star metric is a{" "}
          <span style={{ color: "var(--amber)", fontWeight: 600 }}>
            20% placement rate
          </span>{" "}
          into paid digital work within six months of graduation, a number we
          revisit each quarter and refine alongside our community.
        </p>
        <div className="commit-item">
          <Link to="/contact" className="btn-amber">
            Partner With Us on Impact
          </Link>
        </div>
      </div>
    </section>
  );
}
