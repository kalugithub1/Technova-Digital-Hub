import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowDown,
  Sparkles,
  Users,
  GraduationCap,
  Check,
  UserPlus,
  BookOpen,
  Award,
  Briefcase,
  Quote,
  HandCoins,
  Handshake,
  HeartHandshake,
  MapPin,
} from "lucide-react";
import hubBg from "@/assets/site/room_with_fence6.jpg";
import construction from "@/assets/site/construction1.jpeg";
import tier1Img from "@/assets/site/image1.jpg";
import tier2Img from "@/assets/site/image3.jpg";
import tier3Img from "@/assets/site/image2.jpg";

function useScrollFadeUp(threshold = 0.2) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll<HTMLElement>(".fade-up")
              .forEach((el) => {
                el.style.animationPlayState = "running";
              });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return ref;
}

function useScrollSlide(threshold = 0.15) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll<HTMLElement>(
                ".slide-from-left, .slide-from-right",
              )
              .forEach((el) => {
                el.style.animationPlayState = "running";
              });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return ref;
}

const FADE_UP_STYLE = `
  @keyframes fadeUp { from { opacity:0; transform:translateY(32px); } to { opacity:1; transform:translateY(0); } }
  .fade-up { opacity:0; animation:fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) forwards; animation-play-state:paused; }
`;
const SLIDE_STYLE = `
  @keyframes slideFromLeft { from { opacity:0; transform:translateX(-60px); } to { opacity:1; transform:translateX(0); } }
  @keyframes slideFromRight { from { opacity:0; transform:translateX(60px); } to { opacity:1; transform:translateX(0); } }
  .slide-from-left { opacity:0; animation:slideFromLeft 0.75s cubic-bezier(0.22,1,0.36,1) forwards; animation-play-state:paused; }
  .slide-from-right { opacity:0; animation:slideFromRight 0.75s cubic-bezier(0.22,1,0.36,1) forwards; animation-play-state:paused; }
`;

export default function Home() {
  return (
    <>
      <Hero />
      <MissionVisionSection />
      <AboutPreview />
      <ProgramsPreview />
      <ImpactNumbers />
      <SupportStrip />
    </>
  );
}

function Hero() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "calc(100vh - 5rem)",
        marginTop: "-5rem",
        paddingTop: "5rem",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        backgroundColor: "#0B1F3A",
      }}
    >
      <style>{`
        @keyframes slideInLeft { from{opacity:0;transform:translateX(-48px)} to{opacity:1;transform:translateX(0)} }
        .slide-left { opacity:0; animation:slideInLeft 0.75s cubic-bezier(0.22,1,0.36,1) forwards; }
        @keyframes floatIn { from{opacity:0;transform:translateY(14px)} to{opacity:1;transform:translateY(0)} }
        .hero-grid { display:grid; gap:3.5rem; align-items:center; }
        @media(min-width:1024px){ .hero-grid { grid-template-columns: 1fr auto; } }
        .hero-stats { display:none; flex-direction:column; gap:1.25rem; width:320px; }
        @media(min-width:1024px){ .hero-stats { display:flex !important; } }
        @keyframes ping{75%,100%{transform:scale(2);opacity:0}}
      `}</style>
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${hubBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(11,31,58,.78)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.07,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.6) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.6) 1px,transparent 1px)",
          backgroundSize: "56px 56px",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "-8rem",
          right: "-8rem",
          height: "30rem",
          width: "30rem",
          borderRadius: "9999px",
          background: "rgba(245,200,66,.2)",
          filter: "blur(3rem)",
          pointerEvents: "none",
        }}
      />

      <div
        className="container-page hero-grid"
        style={{ position: "relative", zIndex: 10, paddingBlock: "4rem" }}
      >
        <div style={{ maxWidth: "680px", color: "#fff" }}>
          <span
            className="slide-left"
            style={{
              animationDelay: "0ms",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              color: "var(--amber)",
              fontWeight: 600,
              fontSize: "0.75rem",
              textTransform: "uppercase",
              letterSpacing: "0.18em",
              padding: "0.5rem 0.875rem",
              borderRadius: "9999px",
            }}
          >
            <span
              style={{
                position: "relative",
                display: "inline-flex",
                height: "0.5rem",
                width: "0.5rem",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "9999px",
                  background: "var(--amber)",
                  opacity: 0.75,
                  animation: "ping 1s cubic-bezier(0,0,.2,1) infinite",
                }}
              />
              <span
                style={{
                  position: "relative",
                  borderRadius: "9999px",
                  height: "0.5rem",
                  width: "0.5rem",
                  background: "var(--amber)",
                  display: "inline-flex",
                }}
              />
            </span>
            Kalobeyei Refugee Settlement, Kenya
          </span>
          <h1
            className="slide-left"
            style={{
              animationDelay: "120ms",
              marginTop: "1.75rem",
              color: "#fff",
            }}
          >
            Bridging the Digital Divide,{" "}
            <span
              style={{
                color: "var(--amber)",
                fontStyle: "italic",
                fontWeight: "normal",
              }}
            >
              One Skill
            </span>{" "}
            at a Time
          </h1>
          <p
            className="slide-left"
            style={{
              animationDelay: "240ms",
              marginTop: "1.75rem",
              fontSize: "1.125rem",
              lineHeight: 1.6,
              color: "rgba(255,255,255,.9)",
            }}
          >
            Technova Digital Hub is a refugee-led initiative providing free and
            affordable digital skills training to youth in Kakuma and Kalobeyei,
            creating pathways to remote work, entrepreneurship, and
            self-reliance.
          </p>
          <div
            className="slide-left"
            style={{
              animationDelay: "360ms",
              marginTop: "2.25rem",
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <a href="#programs" className="btn-amber">
              Learn More <ArrowRight size={16} />
            </a>
            <Link
              to="/support"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.75rem 1.5rem",
                borderRadius: "9999px",
                border: "1px solid rgba(255,255,255,.5)",
                color: "#fff",
                fontWeight: 600,
                textDecoration: "none",
                transition: "background .2s, color .2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#fff";
                (e.currentTarget as HTMLElement).style.color = "var(--navy)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background =
                  "transparent";
                (e.currentTarget as HTMLElement).style.color = "#fff";
              }}
            >
              Support Our Mission
            </Link>
          </div>
        </div>

        <div className="hero-stats">
          <StatCard
            value="37,500+"
            label="Refugees in Kalobeyei"
            Icon={Users}
          />
          <StatCard
            value="75%"
            label="Are youth aged 15–30"
            Icon={Sparkles}
            delay="100ms"
          />
          <StatCard
            value="3%"
            label="Access higher education (UNHCR)"
            Icon={GraduationCap}
            delay="200ms"
          />
        </div>
      </div>
    </section>
  );
}

function StatCard({
  value,
  label,
  Icon,
  delay = "0ms",
}: {
  value: string;
  label: string;
  Icon: React.ComponentType<{ className?: string }>;
  delay?: string;
}) {
  return (
    <div
      style={{
        borderRadius: "1rem",
        border: "1px solid rgba(255,255,255,.2)",
        background: "rgba(255,255,255,.08)",
        backdropFilter: "blur(12px)",
        padding: "1.5rem",
        animation: `floatIn .8s ease ${delay} both`,
        transition: "background .2s",
      }}
      onMouseEnter={(e) =>
        ((e.currentTarget as HTMLElement).style.background =
          "rgba(255,255,255,.12)")
      }
      onMouseLeave={(e) =>
        ((e.currentTarget as HTMLElement).style.background =
          "rgba(255,255,255,.08)")
      }
    >
      <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
        <div
          style={{
            height: "2.75rem",
            width: "2.75rem",
            borderRadius: "0.75rem",
            background: "rgba(245,200,66,.2)",
            border: "1px solid rgba(245,200,66,.4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <div
            style={{
              fontFamily: '"DM Serif Display",serif',
              fontSize: "2.5rem",
              color: "#fff",
              lineHeight: 1,
            }}
          >
            {value}
          </div>
          <div
            style={{
              marginTop: "0.5rem",
              fontSize: "0.875rem",
              color: "rgba(255,255,255,.85)",
            }}
          >
            {label}
          </div>
        </div>
      </div>
    </div>
  );
}

function MissionVisionSection() {
  const sectionRef = useScrollFadeUp();
  return (
    <section
      ref={sectionRef}
      style={{
        position: "relative",
        paddingBlock: "4rem 5rem",
        overflow: "hidden",
        borderBottom: "1px solid rgba(11,31,58,.05)",
        background: "#fff",
      }}
    >
      <style>{FADE_UP_STYLE}</style>
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.04,
          backgroundImage:
            "radial-gradient(circle at 1px 1px,#0B1F3A 1px,transparent 0)",
          backgroundSize: "24px 24px",
          pointerEvents: "none",
        }}
      />
      <div className="container-page" style={{ position: "relative" }}>
        <div
          style={{
            display: "grid",
            gap: "1.5rem",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
          }}
        >
          {[
            {
              label: "Our Mission",
              text: "To empower refugees with free, high-quality digital skills, building economic independence from within the community.",
              delay: "200ms",
            },
            {
              label: "Our Vision",
              text: "To create a future where every refugee has the opportunity to thrive in the digital economy and achieve economic independence.",
              delay: "400ms",
            },
          ].map((card) => (
            <div
              key={card.label}
              className="fade-up"
              style={{
                animationDelay: card.delay,
                position: "relative",
                borderRadius: "1.5rem",
                overflow: "hidden",
                padding: "2rem 2.5rem",
                display: "flex",
                flexDirection: "column",
                backgroundColor: "#1A6FD4",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  opacity: 0.1,
                  backgroundImage:
                    "radial-gradient(circle at 1px 1px,white 1px,transparent 0)",
                  backgroundSize: "24px 24px",
                  pointerEvents: "none",
                }}
              />
              <div
                style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                <div
                  style={{
                    color: "var(--amber)",
                    fontSize: "0.75rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.25em",
                    fontWeight: 600,
                    marginBottom: "1rem",
                  }}
                >
                  {card.label}
                </div>
                <blockquote
                  style={{
                    fontFamily: '"DM Serif Display",serif',
                    fontStyle: "italic",
                    color: "#fff",
                    fontSize: "1.25rem",
                    lineHeight: 1.4,
                    flex: 1,
                  }}
                >
                  <span
                    style={{
                      color: "rgba(245,200,66,.9)",
                      fontSize: "1.875rem",
                      verticalAlign: "top",
                      lineHeight: 1,
                    }}
                  >
                    "
                  </span>
                  {card.text}
                  <span
                    style={{
                      color: "rgba(245,200,66,.9)",
                      fontSize: "1.875rem",
                      verticalAlign: "top",
                      lineHeight: 1,
                    }}
                  >
                    "
                  </span>
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const values = [
  { title: "Digital Inclusion", desc: "Skills for every refugee" },
  { title: "Community Power", desc: "Refugee-led, community-owned" },
  { title: "Self-Reliance", desc: "Beyond humanitarian aid" },
  { title: "Lifelong Learning", desc: "Continuous growth pathways" },
];

function AboutPreview() {
  const sectionRef = useScrollSlide();
  return (
    <section
      ref={sectionRef}
      style={{
        paddingBlock: "6rem",
        overflow: "hidden",
        backgroundColor: "var(--off-white)",
      }}
    >
      <style>{SLIDE_STYLE}</style>
      <div
        className="container-page about-grid"
        style={{ display: "grid", gap: "3.5rem", alignItems: "center" }}
      >
        <div
          className="slide-from-left"
          style={{ animationDelay: "200ms", position: "relative" }}
        >
          <div
            style={{
              borderRadius: "1.5rem",
              overflow: "hidden",
              boxShadow: "0 25px 50px -12px rgba(0,0,0,.25)",
            }}
          >
            <img
              src={construction}
              alt="Technova Hub under construction"
              style={{
                width: "100%",
                aspectRatio: "4/5",
                objectFit: "cover",
                display: "block",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: "auto 0 0 0",
                background:
                  "linear-gradient(to top,rgba(0,0,0,.85),rgba(0,0,0,.4),transparent)",
                padding: "1.5rem",
                paddingTop: "5rem",
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  color: "#fff",
                }}
              >
                <span
                  style={{
                    height: "0.5rem",
                    width: "0.5rem",
                    borderRadius: "9999px",
                    background: "var(--amber)",
                    display: "inline-block",
                  }}
                />
                <span
                  style={{
                    fontSize: "0.75rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    fontWeight: 600,
                    color: "var(--amber)",
                  }}
                >
                  Phase 1
                </span>
              </div>
              <div
                style={{
                  color: "#fff",
                  fontSize: "1.125rem",
                  marginTop: "0.25rem",
                  fontWeight: 500,
                }}
              >
                Construction underway, 2026
              </div>
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              bottom: "-1.5rem",
              right: "-1rem",
              background: "var(--amber)",
              color: "var(--navy)",
              borderRadius: "1rem",
              boxShadow: "0 20px 25px -5px rgba(0,0,0,.2)",
              padding: "1.25rem",
              width: "10rem",
              transform: "rotate(3deg)",
            }}
          >
            <div
              style={{
                fontFamily: '"DM Serif Display",serif',
                fontSize: "3rem",
                lineHeight: 1,
              }}
            >
              11
            </div>
            <div
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                marginTop: "0.5rem",
              }}
            >
              Founding Scholars
            </div>
          </div>
        </div>

        <div className="slide-from-right" style={{ animationDelay: "400ms" }}>
          <div
            style={{
              color: "var(--brand-blue)",
              fontSize: "0.75rem",
              textTransform: "uppercase",
              letterSpacing: "0.25em",
              fontWeight: 600,
            }}
          >
            Our Story
          </div>
          <h3 style={{ marginTop: "0.75rem", fontWeight: 600 }}>
            Built by Refugees, for Refugees
          </h3>
          <div
            style={{
              marginTop: "1.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              fontSize: "1.0625rem",
              lineHeight: 1.6,
            }}
          >
            <p>
              Technova Digital Hub was founded by 11 refugee scholars from
              Kakuma Refugee Camp, educators, organizers, and lifelong learners
              who refused to wait for opportunity to arrive.
            </p>
            <p>
              Over 90% of our founding team are former teachers. We've stood in
              the same classrooms, walked the same dusty paths, and faced the
              same barriers our students face today.
            </p>
            <p>
              That firsthand understanding shapes everything we build: a hub
              owned by the community, designed for the realities of camp life,
              and powered by the belief that talent is everywhere, opportunity
              should be too.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
            {values.map((v) => (
              <div
                key={v.title}
                style={{
                  background: "#fff",
                  borderRadius: "0.75rem",
                  padding: "1.25rem",
                  border: "1px solid rgba(11,31,58,.1)",
                  transition: "border-color .2s, transform .2s, box-shadow .2s",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "var(--amber)";
                  (e.currentTarget as HTMLElement).style.transform =
                    "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(11,31,58,.1)";
                  (e.currentTarget as HTMLElement).style.transform =
                    "translateY(0)";
                }}
              >
                <div
                  style={{
                    fontFamily: '"DM Serif Display",serif',
                    fontSize: "1.25rem",
                    color: "var(--navy)",
                  }}
                >
                  {v.title}
                </div>
                <div style={{ fontSize: "0.875rem", marginTop: "0.25rem" }}>
                  {v.desc}
                </div>
              </div>
            ))}
          </div>
          <Link
            to="/about"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              marginTop: "2rem",
              color: "var(--brand-blue)",
              fontWeight: 600,
              textDecoration: "none",
              transition: "gap .2s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.gap = "0.75rem")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.gap = "0.5rem")
            }
          >
            Read Our Full Story <ArrowRight size={16} />
          </Link>
        </div>
      </div>
      <style>{`.about-grid{grid-template-columns:1fr}@media(min-width:1024px){.about-grid{grid-template-columns:1fr 1fr}}`}</style>
    </section>
  );
}

function ProgramsPreview() {
  const sectionRef = useScrollFadeUp(0.1);
  return (
    <section
      ref={sectionRef}
      id="programs"
      style={{ paddingBlock: "6rem", background: "#fff" }}
    >
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
            What We Offer
          </div>
          <h2 style={{ marginTop: "0.75rem" }}>Programs and Services</h2>
          <p style={{ marginTop: "1rem", fontSize: "1.0625rem" }}>
            Three pathways designed to meet learners where they are, from
            first-time computer users to professionals delivering work to global
            clients.
          </p>
        </div>

        <div
          style={{ marginTop: "3.5rem", display: "grid", gap: "1.75rem" }}
          className="programs-grid"
        >
          <div className="fade-up" style={{ animationDelay: "200ms" }}>
            <TierCard
              image={tier1Img}
              headerBg="#E8F2FD"
              badge="Tier 1: Free"
              badgeClass={{ bg: "var(--brand-blue)", color: "#fff" }}
              title="Foundational Digital Literacy"
              items={[
                "Google Workspace",
                "Microsoft Office",
                "Basic Computing",
                "Internet Literacy",
              ]}
              ctaLabel="Get in Touch"
              ctaStyle={{ background: "var(--brand-blue)", color: "#fff" }}
            />
          </div>
          <div className="fade-up" style={{ animationDelay: "400ms" }}>
            <TierCard
              image={tier2Img}
              imageOverlay
              headerBg="#0B1F3A"
              badge="Tier 2: Subsidized"
              badgeClass={{ bg: "var(--amber)", color: "var(--navy)" }}
              title="Advanced Professional Courses"
              titleColor="#fff"
              textColor="rgba(255,255,255,.9)"
              items={[
                "Data Analysis",
                "Digital Marketing",
                "Web Development",
                "Graphic Design ★",
                "SEO",
              ]}
              ctaLabel="Get in Touch"
              ctaStyle={{ background: "var(--amber)", color: "var(--navy)" }}
              featured
            />
          </div>
          <div className="fade-up" style={{ animationDelay: "600ms" }}>
            <TierCard
              image={tier3Img}
              headerBg="#FEF9E6"
              badge="Tier 3: Professional Services"
              badgeClass={{ bg: "var(--navy)", color: "#fff" }}
              title="Digital Services for NGOs & Businesses"
              items={[
                "Graphic Design",
                "Web Development",
                "Digital Marketing",
                "Data Entry",
              ]}
              ctaLabel="Request a Quote"
              ctaStyle={{ background: "var(--navy)", color: "#fff" }}
            />
          </div>
        </div>
        <style>{`.programs-grid{grid-template-columns:1fr}@media(min-width:768px){.programs-grid{grid-template-columns:repeat(3,1fr)}}`}</style>

        {/* Pathway section */}
        <div
          style={{
            marginTop: "5rem",
            borderRadius: "1rem",
            padding: "2rem 2.5rem",
            backgroundColor: "var(--off-white)",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <div
              style={{
                color: "var(--brand-blue)",
                fontSize: "0.75rem",
                textTransform: "uppercase",
                letterSpacing: "0.25em",
                fontWeight: 600,
              }}
            >
              The Learner Pathway
            </div>
            <h3 style={{ marginTop: "0.5rem" }}>
              From classroom to income in 4 steps
            </h3>
          </div>

          {/* Mobile: column, Desktop: row */}
          <style>{`
            .pathway-wrapper {
              display: flex;
              flex-direction: column;
              align-items: center;
              gap: 0.75rem;
            }
            @media(min-width: 640px) {
              .pathway-wrapper {
                flex-direction: row;
                flex-wrap: wrap;
                justify-content: center;
              }
            }
            .arrow-down  { display: flex; }
            .arrow-right { display: none; }
            @media(min-width: 640px) {
              .arrow-down  { display: none; }
              .arrow-right { display: flex; }
            }
          `}</style>

          <div className="pathway-wrapper">
            <PathStep n="01" label="Register" Icon={UserPlus} />
            <PathArrow />
            <PathStep n="02" label="Learn" Icon={BookOpen} />
            <PathArrow />
            <PathStep n="03" label="Get Certified" Icon={Award} />
            <PathArrow />
            <PathStep n="04" label="Earn" Icon={Briefcase} />
          </div>
        </div>
      </div>
    </section>
  );
}

function TierCard({
  image,
  imageOverlay = false,
  headerBg,
  badge,
  badgeClass,
  title,
  titleColor = "var(--navy)",
  textColor = "#000",
  items,
  ctaLabel,
  ctaStyle,
  featured = false,
}: any) {
  return (
    <article
      style={{
        borderRadius: "1rem",
        overflow: "hidden",
        boxShadow: "0 10px 15px -3px rgba(0,0,0,.1)",
        border: "1px solid rgba(11,31,58,.1)",
        display: "flex",
        flexDirection: "column",
        transition: "transform .2s, box-shadow .2s",
        backgroundColor: headerBg,
        ...(featured
          ? {
              outline: "2px solid rgba(245,200,66,.6)",
              transform: "translateY(-0.75rem)",
            }
          : {}),
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0 25px 50px -12px rgba(0,0,0,.2)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = featured
          ? "translateY(-0.75rem)"
          : "translateY(0)";
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0 10px 15px -3px rgba(0,0,0,.1)";
      }}
    >
      <div
        style={{ position: "relative", height: "15rem", overflow: "hidden" }}
      >
        <img
          src={image}
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
        {imageOverlay && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(11,31,58,.4)",
            }}
          />
        )}
      </div>
      <div
        style={{
          padding: "1.75rem",
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <span
          style={{
            display: "inline-block",
            alignSelf: "flex-start",
            fontSize: "0.6875rem",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            padding: "0.375rem 0.75rem",
            borderRadius: "9999px",
            background: badgeClass.bg,
            color: badgeClass.color,
          }}
        >
          {badge}
        </span>
        <h3
          style={{
            marginTop: "1rem",
            fontFamily: '"DM Serif Display",serif',
            fontSize: "1.5rem",
            color: titleColor,
          }}
        >
          {title}
        </h3>
        <ul
          style={{
            marginTop: "1.25rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.625rem",
            color: textColor,
            flex: 1,
          }}
        >
          {items.map((it: string) => (
            <li
              key={it}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "0.625rem",
                fontSize: "0.9375rem",
              }}
            >
              <Check
                size={16}
                style={{
                  marginTop: "0.25rem",
                  flexShrink: 0,
                  color: featured ? "var(--amber)" : "var(--brand-blue)",
                }}
              />
              <span>{it}</span>
            </li>
          ))}
        </ul>
        <Link
          to="/contact"
          style={{
            marginTop: "1.75rem",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
            padding: "0.75rem 1.25rem",
            borderRadius: "9999px",
            fontWeight: 600,
            textDecoration: "none",
            transition: "opacity .2s",
            ...ctaStyle,
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLElement).style.opacity = ".9")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLElement).style.opacity = "1")
          }
        >
          {ctaLabel} <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  );
}

function PathStep({
  n,
  label,
  Icon,
}: {
  n: string;
  label: string;
  Icon: React.ComponentType<any>;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        background: "#fff",
        borderRadius: "0.75rem",
        padding: "1.25rem",
        border: "1px solid rgba(11,31,58,.1)",
        boxShadow: "0 1px 3px rgba(0,0,0,.05)",
        width: "200px",
        flexShrink: 0,
      }}
    >
      <div
        style={{
          height: "3rem",
          width: "3rem",
          borderRadius: "9999px",
          background: "rgba(245,200,66,.6)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Icon size={20} style={{ color: "var(--brand-blue)" }} />
      </div>
      <div
        style={{
          fontFamily: '"DM Serif Display",serif',
          color: "var(--amber)",
          fontSize: "0.875rem",
          marginTop: "0.75rem",
        }}
      >
        {n}
      </div>
      <div
        style={{
          fontWeight: 600,
          color: "var(--navy)",
          marginTop: "0.125rem",
        }}
      >
        {label}
      </div>
    </div>
  );
}

function PathArrow() {
  return (
    <>
      {/* Down arrow — mobile only */}
      <div
        className="arrow-down"
        style={{
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <ArrowDown size={24} style={{ color: "rgba(26,111,212,.6)" }} />
      </div>
      {/* Right arrow — desktop only */}
      <div
        className="arrow-right"
        style={{ alignItems: "center", justifyContent: "center" }}
      >
        <ArrowRight size={24} style={{ color: "rgba(26,111,212,.6)" }} />
      </div>
    </>
  );
}

function ImpactNumbers() {
  const sectionRef = useScrollFadeUp(0.15);
  return (
    <section
      ref={sectionRef}
      style={{
        position: "relative",
        paddingBlock: "6rem",
        overflow: "hidden",
        backgroundColor: "#0B1F3A",
      }}
    >
      <style>{FADE_UP_STYLE}</style>
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.07,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.6) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.6) 1px,transparent 1px)",
          backgroundSize: "56px 56px",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-8rem",
          left: "-8rem",
          height: "26rem",
          width: "26rem",
          borderRadius: "9999px",
          background: "rgba(26,111,212,.2)",
          filter: "blur(3rem)",
        }}
      />
      <div className="container-page" style={{ position: "relative" }}>
        <div
          className="fade-up"
          style={{
            animationDelay: "0ms",
            textAlign: "center",
            maxWidth: "42rem",
            margin: "0 auto",
            color: "#fff",
          }}
        >
          <div
            style={{
              color: "var(--amber)",
              fontSize: "0.75rem",
              textTransform: "uppercase",
              letterSpacing: "0.25em",
              fontWeight: 600,
            }}
          >
            Our Impact
          </div>
          <h2 style={{ marginTop: "0.75rem", color: "#fff" }}>
            Measurable change. Real lives.
          </h2>
        </div>
        <div
          style={{ marginTop: "3.5rem", display: "grid", gap: "1.25rem" }}
          className="impact-grid"
        >
          {[
            {
              value: "120+",
              label: "Refugees trained annually",
              delay: "100ms",
            },
            {
              value: "30+",
              label: "Advanced graduates per year",
              delay: "200ms",
            },
            {
              value: "20%",
              label: "Graduates connected to paid work within 6 months",
              delay: "300ms",
            },
            {
              value: "500+",
              label: "Cumulative trained over 5 years",
              delay: "400ms",
            },
          ].map(({ value, label, delay }) => (
            <div
              key={value}
              className="fade-up"
              style={{ animationDelay: delay }}
            >
              <div
                style={{
                  borderRadius: "1rem",
                  border: "1px solid rgba(255,255,255,.2)",
                  background: "rgba(255,255,255,.08)",
                  backdropFilter: "blur(12px)",
                  padding: "1.75rem",
                  height: "100%",
                  transition: "background .2s",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.background =
                    "rgba(255,255,255,.12)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.background =
                    "rgba(255,255,255,.08)")
                }
              >
                <div
                  style={{
                    fontFamily: '"DM Serif Display",serif',
                    fontSize: "3rem",
                    color: "var(--amber)",
                    lineHeight: 1,
                  }}
                >
                  {value}
                </div>
                <div
                  style={{
                    marginTop: "0.75rem",
                    color: "rgba(255,255,255,.9)",
                    fontSize: "0.875rem",
                    lineHeight: 1.6,
                  }}
                >
                  {label}
                </div>
              </div>
            </div>
          ))}
        </div>
        <style>{`.impact-grid{grid-template-columns:repeat(2,1fr)}@media(min-width:1024px){.impact-grid{grid-template-columns:repeat(4,1fr)}}`}</style>

        <div
          style={{ marginTop: "3rem", display: "grid", gap: "1.5rem" }}
          className="stories-grid"
        >
          {[
            {
              quote:
                "I joined Technova knowing nothing about design tools. Eight months later, I'm taking on freelance branding projects from clients outside the camp.",
              name: "Kalu, Graphic Design Graduate",
              delay: "200ms",
            },
            {
              quote:
                "Building my first website for a local cooperative changed everything. I see myself as a developer now, not someone waiting for things to change.",
              name: "Omar, Web Development Graduate",
              delay: "350ms",
            },
          ].map((s) => (
            <div
              key={s.name}
              className="fade-up"
              style={{ animationDelay: s.delay }}
            >
              <figure
                style={{
                  position: "relative",
                  borderRadius: "1rem",
                  border: "1px solid rgba(255,255,255,.2)",
                  background: "rgba(255,255,255,.08)",
                  backdropFilter: "blur(12px)",
                  padding: "2rem",
                  height: "100%",
                }}
              >
                <Quote
                  style={{
                    position: "absolute",
                    top: "-0.75rem",
                    left: "-0.75rem",
                    height: "2.5rem",
                    width: "2.5rem",
                    color: "var(--amber)",
                    background: "var(--navy)",
                    borderRadius: "9999px",
                    padding: "0.5rem",
                    border: "1px solid rgba(245,200,66,.4)",
                  }}
                />
                <blockquote
                  style={{
                    color: "#fff",
                    fontSize: "1.0625rem",
                    lineHeight: 1.6,
                  }}
                >
                  "{s.quote}"
                </blockquote>
                <figcaption
                  style={{
                    marginTop: "1.25rem",
                    color: "var(--amber)",
                    fontWeight: 600,
                    fontSize: "0.875rem",
                  }}
                >
                  — {s.name}
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
        <style>{`.stories-grid{grid-template-columns:1fr}@media(min-width:768px){.stories-grid{grid-template-columns:repeat(2,1fr)}}`}</style>
      </div>
    </section>
  );
}

function SupportStrip() {
  const sectionRef = useScrollFadeUp();
  return (
    <section
      ref={sectionRef}
      style={{ paddingBlock: "6rem", background: "#fff" }}
    >
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
            Join the Mission
          </div>
          <h2 style={{ marginTop: "0.75rem" }}>Three ways to stand with us</h2>
          <p style={{ marginTop: "1rem", fontSize: "1.0625rem" }}>
            Every laptop, partnership, and hour of mentorship moves a refugee
            learner one step closer to economic independence.
          </p>
        </div>
        <div
          style={{ marginTop: "3.5rem", display: "grid", gap: "1.5rem" }}
          className="support-grid"
        >
          {[
            {
              theme: "amber" as const,
              Icon: HandCoins,
              title: "Donate",
              text: "Fund laptops, internet, and tuition for refugee learners. Every contribution is direct, transparent, and community-managed.",
              cta: "Donate Now",
              to: "/support",
              delay: "200ms",
            },
            {
              theme: "blue" as const,
              Icon: Handshake,
              title: "Partner With Us",
              text: "NGOs, corporations, and universities, collaborate on curriculum, internships, or co-funded training cohorts.",
              cta: "Become a Partner",
              to: "/contact",
              delay: "400ms",
            },
            {
              theme: "navy" as const,
              Icon: HeartHandshake,
              title: "Volunteer",
              text: "Mentor remotely, teach a workshop, or share your industry expertise with learners building their first portfolios.",
              cta: "Join as Volunteer",
              to: "/contact",
              delay: "600ms",
            },
          ].map(({ delay, ...props }) => (
            <div
              key={props.title}
              className="fade-up"
              style={{ animationDelay: delay }}
            >
              <SupportCard {...props} />
            </div>
          ))}
        </div>
        <style>{`.support-grid{grid-template-columns:1fr}@media(min-width:768px){.support-grid{grid-template-columns:repeat(3,1fr)}}`}</style>
      </div>
    </section>
  );
}

function SupportCard({
  theme,
  Icon,
  title,
  text,
  cta,
  to,
}: {
  theme: "amber" | "blue" | "navy";
  Icon: React.ComponentType<any>;
  title: string;
  text: string;
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
    },
    blue: {
      card: "rgba(26,111,212,.1)",
      border: "rgba(26,111,212,.4)",
      iconBg: "var(--brand-blue)",
      iconColor: "#fff",
      btn: { bg: "var(--brand-blue)", color: "#fff" },
      titleColor: "var(--navy)",
      textColor: "#000",
    },
    navy: {
      card: "var(--navy)",
      border: "var(--navy)",
      iconBg: "var(--amber)",
      iconColor: "var(--navy)",
      btn: { bg: "var(--amber)", color: "var(--navy)" },
      titleColor: "#fff",
      textColor: "rgba(255,255,255,.9)",
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
        transition: "transform .2s, box-shadow .2s",
        background: themes.card,
        height: "100%",
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
        }}
      >
        <Icon size={28} style={{ color: themes.iconColor }} />
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
        {text}
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
