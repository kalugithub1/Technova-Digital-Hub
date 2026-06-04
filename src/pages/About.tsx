import {
  Target,
  Telescope,
  Gem,
  GraduationCap,
  Briefcase,
  Scale,
} from "lucide-react";
import heroBg from "@/assets/site/classroom_structure2.jpg";
import wavesBg from "@/assets/site/students_learning2.jpg";
import phase1 from "@/assets/site/construction1.jpeg";
import phase2 from "@/assets/site/internal_tech_room1.jpg";
import phase3 from "@/assets/site/technova_hub_center.jpg";
import omar_img from "@/assets/site/team_images/Omar_img.jpg";
import aketch_img from "@/assets/site/team_images/aketch1.jpg";
import deo_img from "@/assets/site/team_images/deo.jpg";
import rashid_img from "@/assets/site/team_images/rashid.jpg";
import dut_img from "@/assets/site/team_images/dut.jpg";
import prisca_img from "@/assets/site/team_images/prisca.jpg";
import ezekiel_img from "@/assets/site/team_images/ezekiel.jpg";
import iranzi_img from "@/assets/site/team_images/innocent.jpg";
import sdgBg from "@/assets/site/image12.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function About() {
  return (
    <>
      <Hero />
      <OriginStory />
      <MissionVisionValues />
      <SDGAlignment />
      <Timeline />
      <TeamGrid />
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
        textAlign: "center",
        overflow: "hidden",
        backgroundColor: "#0B1F3A",
        minHeight: "80vh",
      }}
    >
      <style>{`
        @keyframes slideInLeft { from{opacity:0;transform:translateX(-48px)} to{opacity:1;transform:translateX(0)} }
        .slide-left { opacity:0; animation:slideInLeft 0.75s cubic-bezier(0.22,1,0.36,1) forwards; }
      `}</style>
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
          backgroundColor: "rgba(11,31,58,.5)",
        }}
      />
      <div
        className="container-page"
        style={{ position: "relative", zIndex: 10, paddingBlock: "5rem" }}
      >
        <span
          className="slide-left"
          style={{
            animationDelay: "0ms",
            display: "inline-block",
            fontSize: "0.75rem",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            color: "var(--amber)",
            marginBottom: "1.25rem",
          }}
        >
          Who We Are
        </span>
        <h1
          className="slide-left"
          style={{
            animationDelay: "120ms",
            color: "#fff",
            maxWidth: "64rem",
            margin: "0 auto",
          }}
        >
          Built by Refugees,{" "}
          <em style={{ color: "var(--amber)", fontStyle: "normal" }}>
            for Refugees
          </em>
        </h1>
        <p
          className="slide-left"
          style={{
            animationDelay: "240ms",
            marginTop: "1.5rem",
            color: "rgba(255,255,255,.85)",
            fontSize: "1.125rem",
            maxWidth: "42rem",
            margin: "1.5rem auto 0",
          }}
        >
          A refugee-led digital skills training center turning lived experience
          into pathways for economic independence.
        </p>
      </div>
    </section>
  );
}

function OriginStory() {
  const ref = useScrollReveal<HTMLDivElement>();
  return (
    <section style={{ background: "#fff", paddingBlock: "6rem" }}>
      <style>{`
        .origin-text { opacity:0; transform:translateX(-56px); transition:opacity .75s cubic-bezier(0.22,1,0.36,1), transform .75s cubic-bezier(0.22,1,0.36,1); }
        .origin-image { opacity:0; transform:translateX(56px); transition:opacity .75s cubic-bezier(0.22,1,0.36,1) .15s, transform .75s cubic-bezier(0.22,1,0.36,1) .15s; }
        [data-visible="true"] .origin-text, [data-visible="true"] .origin-image { opacity:1; transform:translateX(0); }
        
        /* Mobile fixes for the stat cards overlaying the image */
        .stat-overlay-card {
          width: 100%;
          max-width: 100% !important;
          align-self: center !important;
          padding: 1rem !important;
        }
        .stat-number {
          font-size: 1.75rem !important;
        }
        
        /* Desktop styles restored */
        @media(min-width: 480px) {
          .stat-overlay-card {
            max-width: 18rem !important;
            padding: 1.25rem !important;
          }
          .stat-number {
            font-size: 2.5rem !important;
          }
          .stat-align-start { align-self: flex-start !important; }
          .stat-align-end { align-self: flex-end !important; }
        }

        .origin-grid { grid-template-columns: 1fr; }
        @media(min-width: 1024px) { .origin-grid { grid-template-columns: 1fr 1fr; } }
      `}</style>
      <div
        ref={ref}
        className="container-page origin-grid"
        style={{ display: "grid", gap: "4rem", alignItems: "center" }}
      >
        <div className="origin-text">
          <span
            style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              color: "var(--brand-blue)",
            }}
          >
            Our Origin
          </span>
          <h2 style={{ marginTop: "0.75rem" }}>
            A story written from the camp, for the camp
          </h2>
          <div
            style={{
              marginTop: "1.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
              color: "rgba(0,0,0,.8)",
              lineHeight: 1.6,
            }}
          >
            <p>
              Technova Digital Hub was founded by 11 refugee scholars from
              Kakuma Refugee Camp who earned scholarships to study at
              USIU-Africa in Nairobi. There, they witnessed how quickly digital
              fluency unlocks opportunity, and how completely its absence locks
              it away.
            </p>
            <p>
              Nine of the eleven were once teachers in Kakuma. They returned to
              the settlement with a clear, firsthand understanding of the
              barriers their community faces: limited connectivity, no devices,
              and no structured pathway from literacy to livelihood.
            </p>
            <p>
              So they came back to build one. Not as outsiders delivering aid,
              but as community members designing the program they wished had
              existed for them.
            </p>
          </div>
        </div>
        <div
          className="origin-image"
          style={{
            position: "relative",
            aspectRatio: "4/5",
            borderRadius: "1.5rem",
            overflow: "hidden",
            boxShadow: "0 25px 50px -12px rgba(0,0,0,.25)",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: `url(${wavesBg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundColor: "rgba(11,31,58,.55)",
            }}
          />
          <div
            style={{
              position: "relative",
              zIndex: 10,
              height: "100%",
              padding: "1.5rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: "1rem",
            }}
          >
            {[
              ["200,000+", "Refugees in Kakuma and Kalobeyei region", "start"],
              ["75%", "Are youth aged 15-30", "end"],
              ["3%", "Access higher education globally", "start"],
            ].map(([v, l, a]) => (
              <div
                key={v}
                className={`stat-overlay-card stat-align-${a}`}
                style={{
                  borderRadius: "1rem",
                  background: "rgba(255,255,255,.95)",
                  backdropFilter: "blur(8px)",
                  boxShadow: "0 20px 25px -5px rgba(0,0,0,.2)",
                }}
              >
                <div
                  className="stat-number"
                  style={{
                    fontFamily: '"DM Serif Display",serif',
                    color: "var(--navy)",
                    lineHeight: 1.1,
                  }}
                >
                  {v}
                </div>
                <div
                  style={{
                    fontSize: "0.875rem",
                    color: "rgba(0,0,0,.7)",
                    marginTop: "0.25rem",
                  }}
                >
                  {l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function MissionVisionValues() {
  const ref = useScrollReveal<HTMLDivElement>(0.1);
  return (
    <section
      style={{ paddingBlock: "6rem", backgroundColor: "var(--off-white)" }}
    >
      <style>{`
        .mvv-card { opacity:0; transform:translateY(36px); transition:opacity .6s cubic-bezier(0.22,1,0.36,1), transform .6s cubic-bezier(0.22,1,0.36,1); }
        .mvv-card:nth-child(1){transition-delay:0ms} .mvv-card:nth-child(2){transition-delay:120ms} .mvv-card:nth-child(3){transition-delay:240ms}
        [data-visible="true"] .mvv-card { opacity:1; transform:translateY(0); }
      `}</style>
      <div className="container-page">
        <div style={{ maxWidth: "42rem", marginBottom: "3.5rem" }}>
          <span
            style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              color: "var(--brand-blue)",
            }}
          >
            What guides us
          </span>
          <h2 style={{ marginTop: "0.75rem" }}>Mission, Vision and Values</h2>
        </div>
        <div
          ref={ref}
          style={{ display: "grid", gap: "1.5rem" }}
          className="mvv-grid"
        >
          {[
            {
              Icon: Target,
              title: "Mission",
              body: "To empower refugees with free, high-quality digital skills, building economic independence from within the community.",
            },
            {
              Icon: Telescope,
              title: "Vision",
              body: "To create a future where every refugee has the opportunity to thrive in the digital economy and achieve economic independence.",
            },
          ].map(({ Icon, title, body }) => (
            <div
              key={title}
              className="mvv-card"
              style={{
                background: "#fff",
                borderRadius: "1rem",
                padding: "2rem",
                border: "1px solid rgba(0,0,0,.06)",
                boxShadow: "0 1px 3px rgba(0,0,0,.05)",
              }}
            >
              <div
                style={{
                  width: "3rem",
                  height: "3rem",
                  borderRadius: "0.75rem",
                  background: "rgba(26,111,212,.1)",
                  color: "var(--brand-blue)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Icon size={24} />
              </div>
              <h3 style={{ marginTop: "1.25rem", fontSize: "1.5rem" }}>
                {title}
              </h3>
              <p
                style={{
                  marginTop: "0.75rem",
                  color: "rgba(0,0,0,.75)",
                  lineHeight: 1.6,
                }}
              >
                {body}
              </p>
            </div>
          ))}
          <div
            className="mvv-card"
            style={{
              background: "#fff",
              borderRadius: "1rem",
              padding: "2rem",
              border: "1px solid rgba(0,0,0,.06)",
              boxShadow: "0 1px 3px rgba(0,0,0,.05)",
            }}
          >
            <div
              style={{
                width: "3rem",
                height: "3rem",
                borderRadius: "0.75rem",
                background: "rgba(26,111,212,.1)",
                color: "var(--brand-blue)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Gem size={24} />
            </div>
            <h3 style={{ marginTop: "1.25rem", fontSize: "1.5rem" }}>Values</h3>
            <div
              style={{
                marginTop: "1rem",
                display: "flex",
                flexWrap: "wrap",
                gap: "0.5rem",
              }}
            >
              {[
                "Digital Inclusion",
                "Community Power",
                "Self-Reliance",
                "Lifelong Learning",
              ].map((v) => (
                <span
                  key={v}
                  style={{
                    padding: "0.375rem 0.75rem",
                    borderRadius: "9999px",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    color: "rgba(0,0,0,.75)",
                  }}
                >
                  {v}
                </span>
              ))}
            </div>
          </div>
        </div>
        <style>{`.mvv-grid{grid-template-columns:1fr}@media(min-width:768px){.mvv-grid{grid-template-columns:repeat(3,1fr)}}`}</style>
      </div>
    </section>
  );
}

function SDGAlignment() {
  const ref = useScrollReveal<HTMLDivElement>(0.1);
  return (
    <section
      style={{
        position: "relative",
        paddingBlock: "6rem",
        overflow: "hidden",
        backgroundColor: "#0B1F3A",
      }}
    >
      <style>{`
        .sdg-card{opacity:0;transform:translateY(36px);transition:opacity .6s cubic-bezier(0.22,1,0.36,1),transform .6s cubic-bezier(0.22,1,0.36,1);}
        .sdg-card:nth-child(1){transition-delay:0ms}.sdg-card:nth-child(2){transition-delay:120ms}.sdg-card:nth-child(3){transition-delay:240ms}
        [data-visible="true"] .sdg-card{opacity:1;transform:translateY(0);}
      `}</style>
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${sdgBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.25,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom,rgba(11,31,58,.2),rgba(11,31,58,.5),rgba(11,31,58,.8))",
        }}
      />
      <div
        className="container-page"
        style={{ position: "relative", zIndex: 10 }}
      >
        <div style={{ maxWidth: "42rem", marginBottom: "3rem" }}>
          <span
            style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              color: "var(--amber)",
            }}
          >
            Global alignment
          </span>
          <h2 style={{ marginTop: "0.75rem", color: "#fff" }}>
            UN Sustainable Development Goals
          </h2>
          <p style={{ marginTop: "1rem", color: "rgba(255,255,255,.7)" }}>
            Our work directly advances three SDGs at the intersection of
            education, work, and equity.
          </p>
        </div>
        <div
          ref={ref}
          style={{ display: "grid", gap: "1.5rem" }}
          className="sdg-grid"
        >
          {[
            {
              number: "4",
              title: "Quality Education",
              body: "Inclusive, equitable digital education for refugees of all ages and skill levels.",
              icon: <GraduationCap size={24} />,
            },
            {
              number: "8",
              title: "Decent Work & Growth",
              body: "Pathways to remote freelance work, local employment, and entrepreneurship.",
              icon: <Briefcase size={24} />,
            },
            {
              number: "10",
              title: "Reduced Inequalities",
              body: "Closing the digital divide that excludes refugees from the global economy.",
              icon: <Scale size={24} />,
            },
          ].map(({ number, title, body, icon }) => (
            <div
              key={number}
              className="sdg-card"
              style={{
                borderRadius: "1rem",
                padding: "1.75rem",
                background: "rgba(255,255,255,.1)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255,255,255,.15)",
                transition: "background .2s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.background =
                  "rgba(255,255,255,.15)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.background =
                  "rgba(255,255,255,.1)")
              }
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "1rem" }}
              >
                <div
                  style={{
                    width: "3.5rem",
                    height: "3.5rem",
                    borderRadius: "0.75rem",
                    background: "var(--amber)",
                    color: "var(--navy)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: '"DM Serif Display",serif',
                    fontSize: "1.5rem",
                  }}
                >
                  {number}
                </div>
                <div style={{ color: "rgba(255,255,255,.8)" }}>{icon}</div>
              </div>
              <h3
                style={{
                  marginTop: "1.25rem",
                  color: "#fff",
                  fontSize: "1.25rem",
                }}
              >
                SDG {number}: {title}
              </h3>
              <p
                style={{
                  marginTop: "0.5rem",
                  color: "rgba(255,255,255,.8)",
                  fontSize: "0.875rem",
                  lineHeight: 1.6,
                }}
              >
                {body}
              </p>
            </div>
          ))}
        </div>
        <style>{`.sdg-grid{grid-template-columns:1fr}@media(min-width:768px){.sdg-grid{grid-template-columns:repeat(3,1fr)}}`}</style>
      </div>
    </section>
  );
}

function Timeline() {
  const ref = useScrollReveal<HTMLDivElement>(0.1);
  const phases = [
    {
      img: phase1,
      label: "Phase 1: Foundation and Setup",
      date: "April – August 2026",
      body: "Facility construction, founding partnerships established, and seed funding secured to launch the hub.",
      active: true,
    },
    {
      img: phase2,
      label: "Phase 2: Program Rollout",
      date: "Dec 2026 +",
      body: "Training begins with 30 students per quarter across foundational digital literacy and creative tracks.",
      active: false,
    },
    {
      img: phase3,
      label: "Phase 3: Growth and Sustainability",
      date: "Ongoing",
      body: "Scaling cohorts, launching paid professional services, and diversifying funding for long-term impact.",
      active: false,
    },
  ];
  return (
    <section style={{ background: "#fff", paddingBlock: "6rem" }}>
      <style>{`
        .phase-card{opacity:0;transform:translateY(36px);transition:opacity .6s cubic-bezier(0.22,1,0.36,1),transform .6s cubic-bezier(0.22,1,0.36,1);}
        .phase-card:nth-child(1){transition-delay:0ms}.phase-card:nth-child(2){transition-delay:120ms}.phase-card:nth-child(3){transition-delay:240ms}
        [data-visible="true"] .phase-card{opacity:1;transform:translateY(0);}
      `}</style>
      <div className="container-page">
        <div style={{ maxWidth: "42rem", marginBottom: "3.5rem" }}>
          <span
            style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              color: "var(--brand-blue)",
            }}
          >
            Our journey
          </span>
          <h2
            style={{
              marginTop: "0.75rem",
              fontSize: "1.5rem",
              lineHeight: "2rem",
            }}
            className="md:!text-3xl" /* Restores a grand headline size on desktop */
          >
            From Vision to Reality, Building the Hub
          </h2>
        </div>
        <div
          ref={ref}
          style={{ display: "grid", gap: "2rem" }}
          className="timeline-grid"
        >
          {phases.map((p, i) => (
            <div
              key={i}
              className="phase-card"
              style={{
                borderRadius: "1rem",
                overflow: "hidden",
                background: "#fff",
                border: `1px solid ${p.active ? "var(--amber)" : "#E9ECEF"}`,
                boxShadow: p.active
                  ? "0 20px 50px -20px rgba(245,200,66,.7)"
                  : "0 1px 3px rgba(0,0,0,.05)",
                outline: p.active ? "2px solid rgba(245,200,66,.4)" : "none",
              }}
            >
              <div style={{ height: "12rem", overflow: "hidden" }}>
                <img
                  src={p.img}
                  alt={p.label}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
              <div style={{ padding: "1.5rem" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                  }}
                >
                  <span
                    style={{
                      width: "2rem",
                      height: "2rem",
                      borderRadius: "9999px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: '"DM Serif Display",serif',
                      fontSize: "0.875rem",
                      background: p.active
                        ? "var(--amber)"
                        : "var(--light-blue)",
                      color: "var(--navy)",
                    }}
                  >
                    {i + 1}
                  </span>
                  {p.active && (
                    <span
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        color: "var(--amber)",
                        background: "rgba(245,200,66,.15)",
                        padding: "0.25rem 0.625rem",
                        borderRadius: "9999px",
                      }}
                    >
                      Active now
                    </span>
                  )}
                </div>
                <h3 style={{ marginTop: "1rem", fontSize: "1.25rem" }}>
                  {p.label}
                </h3>
                <div
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--brand-blue)",
                    fontWeight: 500,
                    marginTop: "0.25rem",
                  }}
                >
                  {p.date}
                </div>
                <p
                  style={{
                    marginTop: "0.75rem",
                    color: "rgba(0,0,0,.75)",
                    fontSize: "0.875rem",
                    lineHeight: 1.6,
                  }}
                >
                  {p.body}
                </p>
              </div>
            </div>
          ))}
        </div>
        <style>{`.timeline-grid{grid-template-columns:1fr}@media(min-width:768px){.timeline-grid{grid-template-columns:repeat(3,1fr)}}`}</style>
      </div>
    </section>
  );
}

const TEAM = [
  { name: "Iranzi Innocent", role: "Chairperson & Founder", image: iranzi_img },
  { name: "Athok Chol", role: "Vice Chairperson", image: "" },
  { name: "Abut Seleman Tiso", role: "Head of Logistics", image: "" },
  {
    name: "Rashid Ismael Rashid",
    role: "Assistant Partnership Coordinator",
    image: rashid_img,
  },
  { name: "Omar Abas", role: "Partnership Coordinator", image: omar_img },
  { name: "Dut Maluk Deng", role: "Social Media Manager", image: dut_img },
  {
    name: "Ezekiel Niyomwungere",
    role: "Assistant Treasurer",
    image: ezekiel_img,
  },
  { name: "Deogracia Olweny Okeny", role: "Secretary General", image: deo_img },
  { name: "Daniel Deng", role: "Treasurer", image: "" },
  {
    name: "Aketch Atem",
    role: "Asst. Social Media Manager",
    image: aketch_img,
  },
  {
    name: "Nikuze Mugisha Prisca",
    role: "Assistant Secretary",
    image: prisca_img,
  },
];

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

function TeamGrid() {
  return (
    <section
      style={{ paddingBlock: "6rem", backgroundColor: "var(--off-white)" }}
    >
      <div className="container-page">
        <div style={{ maxWidth: "42rem", marginBottom: "3.5rem" }}>
          <span
            style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              color: "var(--brand-blue)",
            }}
          >
            Our team
          </span>
          <h2
            style={{
              marginTop: "0.75rem",
              fontSize: "1.5rem",
              lineHeight: "2rem",
            }}
            className="md:!text-3xl"
          >
            Driven by lived experience and academic excellence
          </h2>
          <p
            style={{
              marginTop: "1rem",
              color: "rgba(0,0,0,.8)",
              lineHeight: 1.6,
            }}
          >
            Eleven founding scholars, formerly teachers, students, and community
            leaders in Kakuma and Kalobeyei, now building the hub they wished
            had existed for them.
          </p>
        </div>
        <div
          style={{ display: "grid", gap: "1.5rem" }}
          className="team-about-grid"
        >
          {TEAM.map((m) => (
            <div
              key={m.name}
              style={{
                background: "#fff",
                borderRadius: "1rem",
                padding: "1.5rem",
                border: "1px solid #E9ECEF",
                boxShadow: "0 1px 3px rgba(0,0,0,.05)",
                textAlign: "center",
                transition: "box-shadow .2s, transform .2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 4px 12px rgba(0,0,0,.1)";
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 1px 3px rgba(0,0,0,.05)";
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(0)";
              }}
            >
              <div
                style={{
                  margin: "0 auto",
                  width: "5rem",
                  height: "5rem",
                  borderRadius: "9999px",
                  overflow: "hidden",
                  background: "var(--navy)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {m.image ? (
                  <img
                    src={m.image}
                    alt={m.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  <span
                    style={{
                      color: "#fff",
                      fontFamily: '"DM Serif Display",serif',
                      fontSize: "1.5rem",
                    }}
                  >
                    {initials(m.name)}
                  </span>
                )}
              </div>
              <div
                style={{
                  marginTop: "1rem",
                  fontWeight: 600,
                  color: "var(--navy)",
                  lineHeight: 1.3,
                }}
              >
                {m.name}
              </div>
              <div
                style={{
                  fontSize: "0.875rem",
                  color: "var(--brand-blue)",
                  marginTop: "0.25rem",
                }}
              >
                {m.role}
              </div>
            </div>
          ))}
        </div>
        <style>{`
  /* Start with 1 column for mobile viewports */
  .team-about-grid { 
    grid-template-columns: 1fr; 
  }
  
  /* 2 columns for small tablets and large phones */
  @media(min-width: 480px) { 
    .team-about-grid { grid-template-columns: repeat(2, 1fr); } 
  }
  
  /* 3 columns for tablets */
  @media(min-width: 768px) { 
    .team-about-grid { grid-template-columns: repeat(3, 1fr); } 
  }
  
  /* 4 columns for desktops */
  @media(min-width: 1024px) { 
    .team-about-grid { grid-template-columns: repeat(4, 1fr); } 
  }
`}</style>
      </div>
    </section>
  );
}
