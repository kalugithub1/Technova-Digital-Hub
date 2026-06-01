import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import logo from "@/assets/site/organization_logo.jpg";

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--navy)",
        color: "#fff",
        paddingTop: "4rem",
        paddingBottom: "2rem",
        marginTop: "6rem",
      }}
    >
      <div
        className="container-page"
        style={{
          display: "grid",
          gap: "3rem",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        }}
      >
        <div>
          <div
            style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}
          >
            <img
              src={logo}
              alt="TND Hub"
              style={{
                height: "3rem",
                width: "3rem",
                borderRadius: "9999px",
                objectFit: "cover",
                outline: "2px solid rgba(245,200,66,.4)",
              }}
            />
            <div>
              <div
                style={{
                  fontFamily: '"DM Serif Display",serif',
                  fontSize: "1.25rem",
                }}
              >
                Technova Digital Hub
              </div>
              <div style={{ fontSize: "0.75rem", color: "var(--amber)" }}>
                Kalobeyei · Kenya
              </div>
            </div>
          </div>
          <p
            style={{
              marginTop: "1.25rem",
              color: "rgba(255,255,255,.9)",
              fontSize: "0.875rem",
              lineHeight: 1.6,
            }}
          >
            A refugee-led digital skills training center building the next
            generation of African tech talent from Kalobeyei Resettlement Camp.
          </p>

          {/* Social icons */}
          <div
            style={{ display: "flex", gap: "0.75rem", marginTop: "1.25rem" }}
          >
            {[
              {
                Icon: FaFacebookF,
                href: "https://www.facebook.com/profile.php?id=61566723170197",
                label: "Facebook",
              },
              {
                Icon: FaLinkedinIn,
                href: "https://www.linkedin.com/in/technova-digital-hub-767583404/",
                label: "LinkedIn",
              },
              {
                Icon: FaInstagram,
                href: "https://www.instagram.com/tech_novadigitalhub/?hl=en",
                label: "Instagram",
              },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                style={{
                  height: "2.25rem",
                  width: "2.25rem",
                  borderRadius: "9999px",
                  background: "rgba(255,255,255,.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  transition: "background .2s, color .2s",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "var(--amber)";
                  el.style.color = "var(--navy)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "rgba(255,255,255,.1)";
                  el.style.color = "#fff";
                }}
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4
            style={{
              color: "var(--amber)",
              fontSize: "0.75rem",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              fontWeight: 600,
              marginBottom: "1rem",
              fontFamily: "Sora,sans-serif",
            }}
          >
            Explore
          </h4>
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              gap: "0.625rem",
            }}
          >
            {[
              ["About Us", "/about"],
              ["Programs", "/programs"],
              ["Impact", "/impact"],
              ["Gallery", "/gallery"],
              ["Team", "/team"],
            ].map(([l, t]) => (
              <li key={t}>
                <Link
                  to={t}
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                    fontSize: "0.875rem",
                    transition: "color .2s",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.color =
                      "var(--amber)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "#fff")
                  }
                >
                  {l}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4
            style={{
              color: "var(--amber)",
              fontSize: "0.75rem",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              fontWeight: 600,
              marginBottom: "1rem",
              fontFamily: "Sora,sans-serif",
            }}
          >
            Get Involved
          </h4>
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              gap: "0.625rem",
            }}
          >
            {[
              ["Support Us", "/support"],
              ["Contact", "/contact"],
            ].map(([l, t]) => (
              <li key={t}>
                <Link
                  to={t}
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                    fontSize: "0.875rem",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.color =
                      "var(--amber)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "#fff")
                  }
                >
                  {l}
                </Link>
              </li>
            ))}
            {[
              ["Volunteer", "#"],
              ["Partner With Us", "#"],
            ].map(([l, t]) => (
              <li key={l}>
                <a
                  href={t}
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                    fontSize: "0.875rem",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.color =
                      "var(--amber)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "#fff")
                  }
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4
            style={{
              color: "var(--amber)",
              fontSize: "0.75rem",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              fontWeight: 600,
              marginBottom: "1rem",
              fontFamily: "Sora,sans-serif",
            }}
          >
            Contact
          </h4>
          <address
            style={{
              fontStyle: "normal",
              fontSize: "0.875rem",
              color: "#fff",
              display: "flex",
              flexDirection: "column",
              gap: "0.875rem",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "0.625rem",
              }}
            >
              <div
                style={{
                  height: "2rem",
                  width: "2rem",
                  borderRadius: "9999px",
                  background: "rgba(255,255,255,.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  marginTop: "0.0625rem",
                }}
              >
                <MapPin size={13} style={{ color: "#478cd7" }} />
              </div>
              <div>
                <div style={{ color: "#478cd7" }}>
                  Kalobeyei Resettlement Camp
                </div>
                <div style={{ color: "#478cd7" }}>Turkana County, Kenya</div>
              </div>
            </div>
            <a
              href="mailto:technovadigitahub@gmail.com"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.625rem",
                color: "#478cd7",
                textDecoration: "none",
                transition: "color .2s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--amber)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "#478cd7")
              }
            >
              <div
                style={{
                  height: "2rem",
                  width: "2rem",
                  borderRadius: "9999px",
                  background: "rgba(255,255,255,.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Mail size={13} style={{ color: "#478cd7" }} />
              </div>
              technovadigitahub@gmail.com
            </a>
            <a
              href="tel:+254716734707"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.625rem",
                color: "#478cd7",
                textDecoration: "none",
                transition: "color .2s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--amber)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "#478cd7")
              }
            >
              <div
                style={{
                  height: "2rem",
                  width: "2rem",
                  borderRadius: "9999px",
                  background: "rgba(255,255,255,.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Phone size={13} style={{ color: "#478cd7" }} />
              </div>
              +254 716 734 707
            </a>
          </address>
        </div>
      </div>

      <div
        className="container-page"
        style={{
          marginTop: "3rem",
          paddingTop: "1.5rem",
          borderTop: "1px solid rgba(255,255,255,.1)",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "0.75rem",
          fontSize: "0.75rem",
          color: "rgba(255,255,255,.8)",
        }}
      >
        <span>© 2026 Technova Digital Hub. All rights reserved.</span>
        <span>Refugee-led · Community-built · Future-focused</span>
      </div>
    </footer>
  );
}
