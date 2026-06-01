import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import heroBg from "@/assets/site/room_structure_final.jpg";
import hub from "@/assets/site/technova_hub_center.jpg";
import classroom2 from "@/assets/site/classroom_structure2.jpg";
import classroom1 from "@/assets/site/tech_classroom_structure1.jpg";
import construction1 from "@/assets/site/construction1.jpeg";
import room1 from "@/assets/site/internal_tech_room1.jpg";
import room2 from "@/assets/site/internal_tech_room2.jpg";
import room3 from "@/assets/site/internal_tech_room3.jpg";

import img3 from "@/assets/site/image3.jpg";
import img10 from "@/assets/site/image10.jpg";

import fd0 from "@/assets/site/foundation0.jpg";
import fd1 from "@/assets/site/foundation1.jpg";

import roof1 from "@/assets/site/roofing1.jpg";
import roof2 from "@/assets/site/roofing2.jpg";
import roof3 from "@/assets/site/roofing3.jpg";
import wall from "@/assets/site/wall_building.jpg";

import internalRM1 from "@/assets/site/internal_room1.jpg";
import internalRM2 from "@/assets/site/internal_room2.jpg";
import internalRM3 from "@/assets/site/internal_room3.jpg";

import externalRM1 from "@/assets/site/external_room1.jpg";
import externalRM2 from "@/assets/site/external_room2.jpg";
import externalRM3 from "@/assets/site/external_room3.jpg";
import externalRM4 from "@/assets/site/external_room4.jpg";

import rmFence1 from "@/assets/site/room_with_fence1.jpg";
import rmFence2 from "@/assets/site/room_with_fence2.jpg";
import rmFence3 from "@/assets/site/room_with_fence3.jpg";
import rmFence4 from "@/assets/site/room_with_fence4.jpg";
import rmFence5 from "@/assets/site/room_with_fence5.jpg";
import rmFence6 from "@/assets/site/room_with_fence6.jpg";
import rmFence7 from "@/assets/site/room_with_fence7.jpg";

import tchRM1 from "@/assets/site/room_structure_final.jpg";
import tchRM2 from "@/assets/site/tech_classroom_structure1.jpg";

type Category =
  | "Construction"
  | "Inside the Hub"
  | "The Hub"
  | "Digital Learning";

interface GalleryItem {
  src: string;
  category: Category;
  caption: string;
}

const ITEMS: GalleryItem[] = [
  {
    src: wall,
    category: "Construction",
    caption:
      "Technology flows like water, our mission is to make sure it flows to everyone, everywhere.",
  },
  {
    src: fd0,
    category: "Construction",
    caption:
      "Technology flows like water, our mission is to make sure it flows to everyone, everywhere.",
  },
  {
    src: fd1,
    category: "Construction",
    caption:
      "Technology flows like water, our mission is to make sure it flows to everyone, everywhere.",
  },
  {
    src: roof1,
    category: "Construction",
    caption:
      "Technology flows like water, our mission is to make sure it flows to everyone, everywhere.",
  },
  {
    src: roof2,
    category: "Construction",
    caption:
      "Technology flows like water, our mission is to make sure it flows to everyone, everywhere.",
  },
  {
    src: roof3,
    category: "Construction",
    caption:
      "Technology flows like water, our mission is to make sure it flows to everyone, everywhere.",
  },
  {
    src: hub,
    category: "The Hub",
    caption:
      "The Technova Digital Hub, Kalobeyei Settlement, 2026. Our home, built from the ground up.",
  },
  {
    src: classroom2,
    category: "The Hub",
    caption:
      "The learning center exterior, stone foundation, blue metal walls, ready to welcome its first cohort.",
  },
  {
    src: classroom1,
    category: "The Hub",
    caption:
      "A second view of the completed classroom structure, built within the Kalobeyei Settlement.",
  },
  { src: externalRM1, category: "The Hub", caption: "" },
  { src: externalRM2, category: "The Hub", caption: "" },
  { src: externalRM3, category: "The Hub", caption: "" },
  { src: externalRM4, category: "The Hub", caption: "" },
  { src: tchRM1, category: "The Hub", caption: "" },
  { src: tchRM2, category: "The Hub", caption: "" },
  { src: rmFence1, category: "The Hub", caption: "" },
  { src: rmFence2, category: "The Hub", caption: "" },
  { src: rmFence3, category: "The Hub", caption: "" },
  { src: rmFence4, category: "The Hub", caption: "" },
  { src: rmFence5, category: "The Hub", caption: "" },
  { src: rmFence6, category: "The Hub", caption: "" },
  { src: rmFence7, category: "The Hub", caption: "" },
  {
    src: construction1,
    category: "Construction",
    caption:
      "Early days, the first walls rise under an open Turkana sky. Every stone placed with purpose.",
  },
  {
    src: room2,
    category: "Construction",
    caption:
      "Interior plastering in progress, transforming raw walls into a space for learning.",
  },
  {
    src: room3,
    category: "Construction",
    caption:
      "The learning hall takes shape, walls smoothed, space defined, future written in cement.",
  },
  {
    src: room1,
    category: "Inside the Hub",
    caption:
      "Inspecting the interior, the soaring wooden roof trusses that will shelter thousands of learners.",
  },
  {
    src: internalRM1,
    category: "Inside the Hub",
    caption:
      "Inspecting the interior, the soaring wooden roof trusses that will shelter thousands of learners.",
  },
  {
    src: internalRM2,
    category: "Inside the Hub",
    caption:
      "Inspecting the interior, the soaring wooden roof trusses that will shelter thousands of learners.",
  },
  {
    src: internalRM3,
    category: "Inside the Hub",
    caption:
      "Inspecting the interior, the soaring wooden roof trusses that will shelter thousands of learners.",
  },
  {
    src: img3,
    category: "Digital Learning",
    caption:
      "A developer's workspace, the kind of setup our advanced students work toward.",
  },
  {
    src: img10,
    category: "Digital Learning",
    caption:
      "Dual screens, full focus, the developer environment our advanced students master.",
  },
];

const FILTERS = [
  "All",
  "Construction",
  "Inside the Hub",
  "The Hub",
  "Digital Learning",
] as const;
type Filter = (typeof FILTERS)[number];

// ── Mobile dropdown filter ──────────────────────────────────────────────────

function MobileFilter({
  filter,
  setFilter,
}: {
  filter: Filter;
  setFilter: (f: Filter) => void;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const handler = () => setOpen(false);
    window.addEventListener("click", handler);
    return () => window.removeEventListener("click", handler);
  }, [open]);

  return (
    <div
      className="filter-mobile"
      style={{ alignItems: "center", justifyContent: "space-between" }}
    >
      <span
        style={{ fontSize: "0.9375rem", fontWeight: 600, color: "var(--navy)" }}
      >
        {filter === "All" ? "All Photos" : filter}
      </span>

      <div style={{ position: "relative" }}>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setOpen((v) => !v);
          }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.5rem 1rem",
            borderRadius: "9999px",
            border: "1.5px solid",
            borderColor: open ? "var(--amber)" : "rgba(11,31,58,.15)",
            background: open ? "rgba(245,200,66,.1)" : "transparent",
            color: "var(--navy)",
            fontWeight: 600,
            fontSize: "0.875rem",
            cursor: "pointer",
            transition: "all .2s",
          }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="8" y1="12" x2="16" y2="12" />
            <line x1="11" y1="18" x2="13" y2="18" />
          </svg>
          Filter
          {filter !== "All" && (
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "1.125rem",
                height: "1.125rem",
                borderRadius: "9999px",
                background: "var(--amber)",
                color: "var(--navy)",
                fontSize: "0.625rem",
                fontWeight: 700,
              }}
            >
              1
            </span>
          )}
        </button>

        {open && (
          <div className="filter-dropdown" onClick={(e) => e.stopPropagation()}>
            {FILTERS.map((f) => {
              const active = f === filter;
              return (
                <button
                  key={f}
                  className={`filter-dropdown-item${active ? " active" : ""}`}
                  onClick={() => {
                    setFilter(f);
                    setOpen(false);
                  }}
                >
                  {f}
                  {active && (
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--amber)"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  )}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────

export default function Gallery() {
  const [filter, setFilter] = useState<Filter>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const visible =
    filter === "All" ? ITEMS : ITEMS.filter((i) => i.category === filter);

  const close = useCallback(() => setLightbox(null), []);
  const next = useCallback(
    () => setLightbox((i) => (i === null ? null : (i + 1) % visible.length)),
    [visible.length],
  );
  const prev = useCallback(
    () =>
      setLightbox((i) =>
        i === null ? null : (i - 1 + visible.length) % visible.length,
      ),
    [visible.length],
  );

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, close, next, prev]);

  return (
    <>
      {/* Hero */}
      <section
        style={{
          position: "relative",
          paddingTop: "8rem",
          paddingBottom: "4rem",
          minHeight: "70vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: `linear-gradient(rgba(11,31,58,.25),rgba(11,31,58,.35)),url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#fff",
        }}
      >
        <style>{`
          @keyframes slideDown{from{opacity:0;transform:translateY(-32px)}to{opacity:1;transform:translateY(0)}}
          .gallery-hero-down{opacity:0;animation:slideDown 0.75s cubic-bezier(0.22,1,0.36,1) forwards;}
        `}</style>
        <div
          className="container-page"
          style={{ textAlign: "center", maxWidth: "48rem" }}
        >
          <span
            className="gallery-hero-down"
            style={{
              animationDelay: "0ms",
              display: "inline-block",
              color: "var(--amber)",
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            Our Journey
          </span>
          <h1
            className="gallery-hero-down"
            style={{
              animationDelay: "130ms",
              color: "#fff",
              marginBottom: "1rem",
            }}
          >
            Gallery
          </h1>
          <p
            className="gallery-hero-down"
            style={{
              animationDelay: "260ms",
              color: "rgba(255,255,255,.8)",
              fontSize: "1.125rem",
            }}
          >
            A visual record of Technova Digital Hub, from the first stone laid
            to a living, breathing center of learning.
          </p>
        </div>
      </section>

      {/* Filter bar */}
      <div
        style={{
          position: "sticky",
          top: "5rem",
          zIndex: 30,
          background: "rgba(255,255,255,.95)",
          backdropFilter: "blur(8px)",
          borderBottom: "1px solid rgba(0,0,0,.05)",
        }}
      >
        <style>{`
          .filter-pills { display:none; }
          .filter-mobile { display:flex; }
          @media(min-width:640px) {
            .filter-pills { display:flex; }
            .filter-mobile { display:none; }
          }
          .filter-dropdown {
            position:absolute;
            top:calc(100% + 0.5rem);
            right:0;
            background:#fff;
            border:1px solid rgba(0,0,0,.08);
            border-radius:0.875rem;
            box-shadow:0 8px 24px -4px rgba(0,0,0,.12);
            overflow:hidden;
            min-width:200px;
            z-index:50;
          }
          .filter-dropdown-item {
            display:flex;
            align-items:center;
            justify-content:space-between;
            width:100%;
            padding:0.75rem 1.25rem;
            border:none;
            background:none;
            cursor:pointer;
            font-size:0.9375rem;
            font-weight:500;
            color:var(--navy);
            text-align:left;
            transition:background .15s;
          }
          .filter-dropdown-item:hover { background:rgba(11,31,58,.04); }
          .filter-dropdown-item.active { background:rgba(245,200,66,.15); }
          .filter-dropdown-item + .filter-dropdown-item { border-top:1px solid rgba(0,0,0,.05); }
        `}</style>

        <div
          className="container-page"
          style={{ paddingBlock: "1rem", position: "relative" }}
        >
          {/* Desktop pills */}
          <div
            className="filter-pills"
            style={{
              flexWrap: "wrap",
              gap: "0.5rem",
              justifyContent: "center",
            }}
          >
            {FILTERS.map((f) => {
              const active = f === filter;
              return (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  style={{
                    padding: "0.5rem 1.25rem",
                    borderRadius: "9999px",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    border: "none",
                    cursor: "pointer",
                    transition: "all .2s",
                    background: active ? "var(--amber)" : "rgba(11,31,58,.05)",
                    color: "var(--navy)",
                    boxShadow: active
                      ? "0 4px 6px -1px rgba(0,0,0,.1)"
                      : "none",
                  }}
                >
                  {f}
                </button>
              );
            })}
          </div>

          {/* Mobile dropdown */}
          <MobileFilter filter={filter} setFilter={setFilter} />
        </div>
      </div>

      {/* Grid */}
      <section style={{ paddingBlock: "4rem", background: "#fff" }}>
        <div className="container-page">
          <style>{`
            .gallery-columns { columns: 1; gap: 1.25rem; }
            @media(min-width:640px)  { .gallery-columns { columns: 2; } }
            @media(min-width:1024px) { .gallery-columns { columns: 3; } }
            .gallery-item { display:block; width:100%; overflow:hidden; border-radius:1rem; background:rgba(11,31,58,.05); position:relative; border:none; cursor:pointer; margin-bottom:1.25rem; break-inside:avoid; page-break-inside:avoid; }
            .gallery-item img { width:100%; height:auto; display:block; transition:transform .5s cubic-bezier(0.25,0.46,0.45,0.94); }
            .gallery-item:hover img { transform:scale(1.05); }
            .gallery-overlay { position:absolute; inset:0; background:linear-gradient(to top,rgba(11,31,58,.85),rgba(11,31,58,.2),transparent); opacity:0; transition:opacity .3s; display:flex; align-items:flex-end; padding:1rem; }
            .gallery-item:hover .gallery-overlay { opacity:1; }
          `}</style>
          <div key={filter} className="gallery-columns">
            {visible.map((item, i) => (
              <button
                key={`${filter}-${i}`}
                onClick={() => setLightbox(i)}
                className="gallery-item"
              >
                <img src={item.src} alt={item.caption} loading="lazy" />
                <div className="gallery-overlay">
                  <div>
                    <div
                      style={{
                        color: "var(--amber)",
                        fontSize: "0.625rem",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        marginBottom: "0.25rem",
                      }}
                    >
                      {item.category}
                    </div>
                    <div
                      style={{
                        color: "#fff",
                        fontSize: "0.875rem",
                        overflow: "hidden",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical" as const,
                      }}
                    >
                      {item.caption}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section
        style={{ paddingBlock: "3.5rem", backgroundColor: "var(--brand-blue)" }}
      >
        <div
          className="container-page"
          style={{ textAlign: "center", color: "#fff" }}
        >
          <h2
            style={{
              fontFamily: '"DM Serif Display",serif',
              fontSize: "clamp(1.5rem,3vw,2.25rem)",
              marginBottom: "1.5rem",
              color: "#fff",
            }}
          >
            Want to see the hub in person? Get in touch with our team.
          </h2>
          <Link to="/contact" className="btn-amber">
            Contact Us
          </Link>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && visible[lightbox] && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1rem",
            backgroundColor: "rgba(11,31,58,.95)",
          }}
          onClick={close}
        >
          <button
            aria-label="Close"
            onClick={close}
            style={{
              position: "absolute",
              top: "1.5rem",
              right: "1.5rem",
              background: "none",
              border: "none",
              color: "#fff",
              cursor: "pointer",
              padding: "0.5rem",
              transition: "color .2s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "var(--amber)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "#fff")
            }
          >
            <X size={32} />
          </button>
          <button
            aria-label="Previous"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            style={{
              position: "absolute",
              left: "1rem",
              background: "none",
              border: "none",
              color: "#fff",
              cursor: "pointer",
              padding: "0.5rem",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "var(--amber)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "#fff")
            }
          >
            <ChevronLeft size={40} />
          </button>
          <button
            aria-label="Next"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            style={{
              position: "absolute",
              right: "1rem",
              background: "none",
              border: "none",
              color: "#fff",
              cursor: "pointer",
              padding: "0.5rem",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "var(--amber)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "#fff")
            }
          >
            <ChevronRight size={40} />
          </button>
          <div
            style={{
              position: "relative",
              maxWidth: "90vw",
              maxHeight: "90vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <span
              style={{
                position: "absolute",
                top: "-0.75rem",
                left: 0,
                background: "var(--amber)",
                color: "var(--navy)",
                fontSize: "0.75rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                padding: "0.25rem 0.75rem",
                borderRadius: "9999px",
                zIndex: 10,
              }}
            >
              {visible[lightbox].category}
            </span>
            <img
              src={visible[lightbox].src}
              alt={visible[lightbox].caption}
              style={{
                maxWidth: "90vw",
                maxHeight: "78vh",
                objectFit: "contain",
                borderRadius: "0.5rem",
              }}
            />
            <p
              style={{
                color: "#fff",
                textAlign: "center",
                marginTop: "1rem",
                maxWidth: "42rem",
                fontSize: "0.9375rem",
              }}
            >
              {visible[lightbox].caption}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
