import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/site/organization_logo.jpg";

const links = [
  { to: "/about", label: "About Us" },
  { to: "/programs", label: "Programs" },
  { to: "/impact", label: "Impact" },
  { to: "/gallery", label: "Gallery" },
  { to: "/team", label: "Team" },
  { to: "/support", label: "Support Us" },
  { to: "/contact", label: "Contact" },
] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: "#fff",
        boxShadow: "0 1px 8px rgba(0,0,0,.08)",
      }}
    >
      <div
        className="container-page"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "5rem",
        }}
      >
        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            textDecoration: "none",
          }}
        >
          <img
            src={logo}
            alt="Technova Digital Hub logo"
            style={{
              height: "2.5rem",
              width: "2.5rem",
              borderRadius: "",
              objectFit: "cover",
            }}
          />

          <div style={{ lineHeight: 1.2 }}>
            <div
              style={{
                fontFamily: '"DM Serif Display",serif',
                fontSize: "1.125rem",
                color: "#000",
              }}
            >
              Technova Digital Hub
            </div>
            <div
              style={{
                fontSize: "0.6875rem",
                letterSpacing: "0.05em",
                color: "var(--amber)",
                fontWeight: 500,
              }}
            >
              Kalobeyei · Kenya
            </div>
          </div>
        </Link>

        <style>{`
          .desktop-nav { display: none; }
          .mobile-menu-btn { display: block; }
          @media(min-width: 1024px) {
            .desktop-nav { display: flex !important; align-items: center; gap: 1.75rem; }
            .mobile-menu-btn { display: none !important; }
          }
        `}</style>

        <nav className="desktop-nav">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              style={({ isActive }) => ({
                fontSize: "0.875rem",
                fontWeight: 500,
                color: isActive ? "var(--amber)" : "#000",
                textDecoration: "none",
                transition: "color .2s",
              })}
            >
              {l.label}
            </NavLink>
          ))}
          <Link to="/contact" className="gradient-btn">
            <span className="gradient-btn-inner">Get in Touch</span>
          </Link>
        </nav>

        <button
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="mobile-menu-btn"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#000",
            padding: "0.5rem",
          }}
        >
          <Menu size={28} />
        </button>
      </div>

      {open && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 60,
            background: "#fff",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            className="container-page"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: "5rem",
            }}
          >
            <Link
              to="/"
              onClick={() => setOpen(false)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                textDecoration: "none",
              }}
            >
              <img
                src={logo}
                alt=""
                style={{
                  height: "2.5rem",
                  width: "2.5rem",
                  borderRadius: "9999px",
                  objectFit: "cover",
                }}
              />
              <div
                style={{
                  fontFamily: '"DM Serif Display",serif',
                  fontSize: "1.125rem",
                  color: "#000",
                }}
              >
                Technova Digital Hub
              </div>
            </Link>
            <button
              onClick={() => setOpen(false)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "0.5rem",
              }}
            >
              <X size={28} />
            </button>
          </div>
          <nav
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "1.5rem",
            }}
          >
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                style={({ isActive }) => ({
                  fontFamily: '"DM Serif Display",serif',
                  fontSize: "2rem",
                  color: isActive ? "var(--amber)" : "#000",
                  textDecoration: "none",
                })}
              >
                {l.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="gradient-btn"
              style={{ marginTop: "1rem" }}
            >
              <span
                className="gradient-btn-inner"
                style={{ padding: "10px 28px", fontSize: "1rem" }}
              >
                Get in Touch
              </span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
