import { Link } from "react-router-dom";
import { Lightbulb, GraduationCap, School } from "lucide-react";
import heroBg from "@/assets/site/team_img3.jpg";
import wavesBg from "@/assets/site/image12.jpg";
import omar_img from "@/assets/site/team_images/Omar_img.jpg";
import aketch_img from "@/assets/site/team_images/aketch1.jpg";
import deo_img from "@/assets/site/team_images/deo.jpg";
import rashid_img from "@/assets/site/team_images/rashid.jpg";
import dut_img from "@/assets/site/team_images/dut.jpg";
import prisca_img from "@/assets/site/team_images/prisca.jpg";
import ezekiel_img from "@/assets/site/team_images/ezekiel.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Team() {
  return (
    <>
      <Hero />
      <IntroStrip />
      <TeamGrid />
      <JoinCTA />
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
        minHeight: "75vh",
      }}
    >
      <style>{`@keyframes slideInLeft{from{opacity:0;transform:translateX(-48px)}to{opacity:1;transform:translateX(0)}}.slide-left{opacity:0;animation:slideInLeft 0.75s cubic-bezier(0.22,1,0.36,1) forwards;}`}</style>
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
          backgroundColor: "rgba(11,31,58,.45)",
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
          The People Behind the Mission
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
          Meet Our Team
        </h1>
        <p
          className="slide-left"
          style={{
            animationDelay: "240ms",
            marginTop: "1.5rem",
            color: "rgba(255,255,255,.8)",
            fontSize: "1.125rem",
            maxWidth: "42rem",
            margin: "1.5rem auto 0",
          }}
        >
          Eleven refugee scholars from Kakuma and Kalobeyei Camp, now studying
          at USIU-Africa in Nairobi, united by one mission: to bring digital
          opportunity back to the community that shaped them.
        </p>
      </div>
    </section>
  );
}

function IntroStrip() {
  const ref = useScrollReveal<HTMLDivElement>(0.1);
  return (
    <section style={{ background: "#fff", paddingBlock: "6rem" }}>
      <style>{`
        .intro-item{opacity:0;transform:translateY(32px);transition:opacity .7s cubic-bezier(0.22,1,0.36,1),transform .7s cubic-bezier(0.22,1,0.36,1);}
        .intro-item:nth-child(1){transition-delay:0ms}.intro-item:nth-child(2){transition-delay:150ms}.intro-item:nth-child(3){transition-delay:300ms}
        [data-visible="true"] .intro-item{opacity:1;transform:translateY(0);}
      `}</style>
      <div
        ref={ref}
        className="container-page"
        style={{ maxWidth: "48rem", textAlign: "center", margin: "0 auto" }}
      >
        <h2 className="intro-item" style={{ marginTop: "0.75rem" }}>
          Built From the Inside Out
        </h2>
        <p
          className="intro-item"
          style={{
            marginTop: "1.5rem",
            color: "#000",
            lineHeight: 1.75,
            fontSize: "1.0625rem",
          }}
        >
          What sets Technova Digital Hub apart is simple: every one of our
          founders has lived the experience they are working to change. 90% of
          our team served as teachers in secondary schools across Kakuma and
          Kalobeyei before pursuing degrees at USIU-Africa. We are not outsiders
          bringing solutions, we are Kakuma and Kalobeyei, building something
          for our own.
        </p>
        <div
          className="intro-item"
          style={{
            marginTop: "2.5rem",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          {[
            { icon: <Lightbulb size={16} />, label: "11 Co-Founders" },
            { icon: <GraduationCap size={16} />, label: "90% Former Teachers" },
            { icon: <School size={16} />, label: "USIU-Africa Scholars" },
          ].map((p) => (
            <span
              key={p.label}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "rgba(245,200,66,.5)",
                borderRadius: "9999px",
                padding: "0.625rem 1.5rem",
                fontSize: "0.875rem",
                fontWeight: 500,
                color: "var(--navy)",
              }}
            >
              <span style={{ color: "var(--brand-blue)" }}>{p.icon}</span>
              {p.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

const TEAM = [
  {
    name: "Iranzi Innocent",
    role: "Chairperson & Founder",
    initials: "II",
    avatarBg: "#0B1F3A",
    image: "",
    bio: "Iranzi leads Technova Digital Hub's overall strategy, funding relationships, and external partnerships. A former secondary school teacher in Kakuma, he serves as the organization's primary spokesperson and the driving force behind transforming a shared dream into a functioning learning center.",
  },
  {
    name: "Athok Chol",
    role: "Vice Chairperson",
    initials: "AC",
    avatarBg: "#1A6FD4",
    image: "",
    bio: "Athok oversees the development of the hub's website and Learning Management System, and coordinates all legal documentation with Kenyan authorities. Her technical leadership ensures the hub's digital infrastructure is as solid as its physical walls.",
  },
  {
    name: "Abut Seleman Tiso",
    role: "Head of Logistics",
    initials: "AS",
    avatarBg: "#154360",
    image: "",
    bio: "Abut manages the on-the-ground realities that make the hub possible, from identifying the facility location and overseeing construction to procuring computers, furniture, and equipment. Nothing gets built without his coordination.",
  },
  {
    name: "Rashid Ismael Rashid",
    role: "Assistant Partnership Coordinator",
    initials: "RI",
    avatarBg: "#0D4FA0",
    image: rashid_img,
    bio: "Rashid is the hub's primary liaison with NGOs, international organizations, and local authorities operating in the Kakuma and Kalobeyei region. He works to formalize partnerships.",
  },
  {
    name: "Omar Abas",
    role: "Partnership Coordinator",
    initials: "OA",
    avatarBg: "#1A5276",
    image: omar_img,
    bio: "Omar manages relationships with employers, tech companies, and freelance platforms, creating direct pathways for hub graduates into the job market. He also identifies opportunities for the hub to deliver professional digital services to NGOs and businesses.",
  },
  {
    name: "Dut Maluk Deng",
    role: "Social Media Manager",
    initials: "DM",
    avatarBg: "#0B2D5A",
    image: dut_img,
    bio: "Dut manages Technova Digital Hub's online presence and leads community outreach campaigns to recruit students from across Kalobeyei and Kakuma. He also drives diversified fundraising efforts through digital channels and social media storytelling.",
  },
  {
    name: "Ezekiel Niyomwungere",
    role: "Assistant Treasurer",
    initials: "EN",
    avatarBg: "#1F618D",
    image: ezekiel_img,
    bio: "Ezekiel supports financial management and leads data collection for the hub's Monitoring and Evaluation system. He tracks student progress and program outcomes, ensuring the hub can demonstrate measurable impact to funders and partners.",
  },
  {
    name: "Deogracia Olweny Okeny",
    role: "Secretary General",
    initials: "DO",
    avatarBg: "#154360",
    image: deo_img,
    bio: "Deogracia oversees curriculum development, ensures all training programs meet quality standards, and manages official reporting to stakeholders. He also leads the recruitment process for trainers and beneficiaries, keeping the hub's operations structured and accountable.",
  },
  {
    name: "Daniel Deng",
    role: "Treasurer",
    initials: "DD",
    avatarBg: "#0B1F3A",
    image: "",
    bio: "Daniel manages the hub's finances, budget allocation, and funding applications. He works closely with Iranzi to secure supplementary grants and ensures every shilling is tracked, reported, and deployed where it creates the most impact for students.",
  },
  {
    name: "Aketch Atem",
    role: "Asst. Social Media Manager",
    initials: "AA",
    avatarBg: "#1A6FD4",
    image: aketch_img,
    bio: "Aketch supports the hub's digital marketing efforts and content creation, helping attract new students to advanced courses and amplifying the hub's story to a wider audience. She brings creativity and digital savvy to the team's outreach strategy.",
  },
  {
    name: "Nikuze Mugisha Prisca",
    role: "Assistant Secretary",
    initials: "NM",
    avatarBg: "#0D4FA0",
    image: prisca_img,
    bio: "Prisca handles administrative support, documentation, and assists the Secretary General in keeping all operations organized and on schedule. Her attention to detail ensures nothing falls through the cracks as the hub grows.",
  },
];

function TeamGrid() {
  const ref = useScrollReveal<HTMLDivElement>(0.05);
  return (
    <section
      style={{ paddingBlock: "6rem", backgroundColor: "var(--off-white)" }}
    >
      <style>{`
        .team-card{opacity:0;transform:translateY(36px);transition:opacity .6s cubic-bezier(0.22,1,0.36,1),transform .6s cubic-bezier(0.22,1,0.36,1);}
        .team-card:nth-child(1){transition-delay:100ms}.team-card:nth-child(2){transition-delay:200ms}.team-card:nth-child(3){transition-delay:300ms}
        .team-card:nth-child(4){transition-delay:400ms}.team-card:nth-child(5){transition-delay:500ms}.team-card:nth-child(6){transition-delay:600ms}
        .team-card:nth-child(7){transition-delay:700ms}.team-card:nth-child(8){transition-delay:800ms}.team-card:nth-child(9){transition-delay:900ms}
        .team-card:nth-child(10){transition-delay:1000ms}.team-card:nth-child(11){transition-delay:1100ms}
        [data-visible="true"] .team-card{opacity:1;transform:translateY(0);}
      `}</style>
      <div
        className="container-page"
        style={{ maxWidth: "68rem", margin: "0 auto" }}
      >
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span
            style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              color: "var(--brand-blue)",
            }}
          >
            Our Team
          </span>
          <h2 style={{ marginTop: "0.75rem" }}>The Faces Behind the Hub</h2>
          <p
            style={{
              marginTop: "1rem",
              color: "#000",
              maxWidth: "35rem",
              margin: "1rem auto 0",
              fontSize: "1.0625rem",
            }}
          >
            Eleven scholars. Eleven stories. One shared mission.
          </p>
        </div>
        <div
          ref={ref}
          style={{ display: "grid", gap: "1.5rem" }}
          className="team-main-grid"
        >
          {TEAM.map((member) => (
            <div
              key={member.name}
              className="team-card"
              style={{
                background: "#fff",
                borderRadius: "1.25rem",
                border: "1px solid #E9ECEF",
                padding: "2rem 1.75rem",
                transition: "transform .2s, box-shadow .2s",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(-4px)";
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 18px 40px -20px rgba(11,31,58,.25)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "1rem" }}
              >
                <div
                  style={{
                    width: "4.5rem",
                    height: "4.5rem",
                    borderRadius: "9999px",
                    overflow: "hidden",
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: "1.375rem",
                    backgroundColor: member.avatarBg,
                  }}
                >
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  ) : (
                    member.initials
                  )}
                </div>
                <div>
                  <div
                    style={{
                      fontWeight: 700,
                      fontSize: "1.0625rem",
                      color: "var(--navy)",
                      lineHeight: 1.3,
                    }}
                  >
                    {member.name}
                  </div>
                  <div
                    style={{
                      fontSize: "0.6875rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      fontWeight: 600,
                      marginTop: "0.125rem",
                      color: "var(--brand-blue)",
                    }}
                  >
                    {member.role}
                  </div>
                </div>
              </div>
              <div
                style={{
                  width: "100%",
                  height: "1.5px",
                  background: "var(--amber)",
                  margin: "1rem 0",
                }}
              />
              <p
                style={{
                  color: "#000",
                  fontSize: "0.875rem",
                  lineHeight: 1.75,
                }}
              >
                {member.bio}
              </p>
            </div>
          ))}
        </div>
        <style>{`.team-main-grid{grid-template-columns:1fr}@media(min-width:768px){.team-main-grid{grid-template-columns:repeat(2,1fr)}}@media(min-width:1024px){.team-main-grid{grid-template-columns:repeat(3,1fr)}}`}</style>
      </div>
    </section>
  );
}

function JoinCTA() {
  const ref = useScrollReveal<HTMLDivElement>();
  return (
    <section
      style={{
        position: "relative",
        paddingBlock: "6rem",
        overflow: "hidden",
        textAlign: "center",
        backgroundColor: "#0B1F3A",
      }}
    >
      <style>{`
        .cta-item{opacity:0;transform:translateX(-56px);transition:opacity .75s cubic-bezier(0.22,1,0.36,1),transform .75s cubic-bezier(0.22,1,0.36,1);}
        .cta-item:nth-child(1){transition-delay:100ms}.cta-item:nth-child(2){transition-delay:200ms}.cta-item:nth-child(3){transition-delay:300ms}
        [data-visible="true"] .cta-item{opacity:1;transform:translateX(0);}
      `}</style>
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${wavesBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.15,
        }}
      />
      <div
        ref={ref}
        className="container-page"
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "40rem",
          margin: "0 auto",
        }}
      >
        <h2 className="cta-item" style={{ color: "#fff" }}>
          Want to Be Part of This?
        </h2>
        <p
          className="cta-item"
          style={{
            marginTop: "1.5rem",
            color: "rgba(255,255,255,.8)",
            fontSize: "1.0625rem",
          }}
        >
          We are always looking for mentors, volunteers, and partners who share
          our belief that digital skills can transform lives. If that sounds
          like you, we'd love to talk.
        </p>
        <div
          className="cta-item"
          style={{
            marginTop: "2.5rem",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          <Link to="/contact" className="btn-amber">
            Volunteer Your Skills
          </Link>
          <Link
            to="/support"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              fontWeight: 600,
              padding: "0.75rem 1.5rem",
              borderRadius: "9999px",
              border: "1px solid rgba(255,255,255,.4)",
              color: "#fff",
              textDecoration: "none",
              transition: "background .2s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.background =
                "rgba(255,255,255,.1)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.background =
                "transparent")
            }
          >
            Partner With Us
          </Link>
        </div>
      </div>
    </section>
  );
}
