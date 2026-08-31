"use client";

import { useEffect, useRef, useState } from "react";
import LiveClock from "./LiveClock";
import DashboardCard from "./DashboardCard";
import ExperienceCard from "./ExperienceCard";
import TechCategoryCard from "./TechCategoryCard";
import { dashboards, experiences, techCategories, navItems } from "../data/content";

export default function PortfolioApp() {
  const [theme, setTheme] = useState("light");
  const [activeView, setActiveView] = useState("home-view");
  const pageViewIds = useRef([
    "profile-view",
    "home-view",
    "dashboards-view",
    "experience-view",
    "tech-view",
    "contact-view",
  ]);

  // --- THEME: read saved preference on mount, then keep <html data-theme> in sync ---
  useEffect(() => {
    const saved = localStorage.getItem("theme") || "light";
    setTheme(saved);
    document.documentElement.setAttribute("data-theme", saved);
  }, []);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  };

  // --- SCROLL SPY: highlight the dock button for whichever section is in view ---
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      let currentViewId = "";

      for (const id of pageViewIds.current) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.offsetTop;
        const height = el.offsetHeight;
        if (scrollPosition >= top && scrollPosition < top + height) {
          currentViewId = id;
        }
      }

      if (currentViewId) setActiveView(currentViewId);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToView = (viewId) => {
    const el = document.getElementById(viewId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const copyEmail = () => {
    navigator.clipboard.writeText("meer.abdullah2016@gmail.com");
    alert("Copied email address: meer.abdullah2016@gmail.com");
  };

  const handleCvDownload = (e) => {
    e.preventDefault();
    alert("Downloading Meer Abdullah Jawed CV...");
  };

  return (
    <div className="app-layout">
      {/* LEFT PROFILE CARD */}
      <aside className="profile-card page-view active" id="profile-view">
        <div className="card-header">
          <div className="brand-logo">
            <i className="fa-solid fa-database"></i>
          </div>
          <div className="window-actions">
            <button
              className="action-btn"
              aria-label="LinkedIn"
              onClick={() => window.open("https://linkedin.com", "_blank")}
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </button>
            <button className="action-btn" id="quick-email-btn" title="Copy Email" onClick={copyEmail}>
              <i className="fa-solid fa-envelope"></i>
            </button>
          </div>
        </div>

        <div className="image-wrapper">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/avatar.jpeg" alt="Meer Abdullah Jawed" className="profile-img" />
          <div className="availability-tag">
            <span className="dot"></span> Available for Work
          </div>
        </div>

        <div className="card-body">
          <h2>Meer Abdullah Jawed</h2>
          <p className="role-subtitle">Data Engineer & BI Specialist</p>
          <p className="bio-text">
            I am a Data Engineer and Analytics Specialist with experience building production-grade data products,
            scalable ETL/ELT pipelines, and enterprise executive dashboards. I bridge the gap between complex raw
            database architectures (BigQuery, SQL Server, REST APIs) and strategic decision-making.
          </p>

          <div className="bio-details">
            <div>
              <i className="fa-solid fa-location-dot"></i> Karachi, Pakistan (PKT)
            </div>
            <div>
              <i className="fa-solid fa-globe"></i> US Remote Experience
            </div>
            <div>
              <i className="fa-solid fa-graduation-cap"></i> BS Computer Science, Iqra University
            </div>
          </div>

          <div className="card-actions">
            <a href="mailto:meer.abdullah2016@gmail.com" className="btn-green">
              Let&apos;s talk
            </a>
            <a href="#" className="btn-outline" id="cv-download-btn" onClick={handleCvDownload}>
              <i className="fa-solid fa-download"></i> Download CV
            </a>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="main-content">
        {/* TOP NAV */}
        <header className="top-nav">
          <div className="user-badge">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/avatar.jpeg" alt="Meer Abdullah" className="avatar" />
            <div>
              <h3>Meer Abdullah Jawed</h3>
              <span className="user-title">Data Engineer & Data Analyst</span>
            </div>
          </div>

          <LiveClock />
        </header>

        {/* VIEW 1: HOME PAGE */}
        <div className="page-view active" id="home-view">
          <section className="hero-headline">
            <h1>
              Building <span className="green-pill-outline">ETL Pipelines</span>
              <br />
              <span className="dark-pill">& Analytics Systems</span> that scale
            </h1>
            <p className="hero-subtext">
              Specializing in turning unstructured operational and financial data into clean data models, automated
              orchestration, and interactive BI platforms.
            </p>
          </section>

          <footer className="bottom-bar">
            <div className="stats-group">
              <div className="stat-item">
                <h2>2+</h2>
                <p>Years Experience</p>
              </div>
              <div className="stat-item">
                <h2>30%</h2>
                <p>Efficiency Gain</p>
              </div>
              <div className="stat-item">
                <h2>45%</h2>
                <p>Downtime Cut</p>
              </div>
            </div>

            <div className="clients-group">
              <span className="client-label">
                <i className="fa-solid fa-certificate"></i> Certifications
              </span>
              <div className="client-logos">
                <span className="logo-item">
                  <i className="fa-brands fa-meta"></i> Meta Python
                </span>
                <span className="logo-item">
                  <i className="fa-solid fa-cube"></i> IBM Analytics
                </span>
                <span className="logo-item">
                  <i className="fa-brands fa-google"></i> Google Data
                </span>
              </div>
            </div>
          </footer>
        </div>

        {/* VIEW 2: DASHBOARD SHOWCASE VIEW */}
        <div className="page-view active" id="dashboards-view">
          <section className="dashboard-showcase">
            <div className="section-title">
              <i className="fa-solid fa-chart-line"></i> Production BI Dashboards & Data Products
            </div>

            <div className="dashboard-grid">
              {dashboards.map((dashboard) => (
                <DashboardCard key={dashboard.id} dashboard={dashboard} />
              ))}
            </div>
          </section>
        </div>

        {/* VIEW 3: WORK EXPERIENCE VIEW */}
        <div className="page-view active" id="experience-view">
          <section className="experience-section">
            <div className="section-title">
              <i className="fa-solid fa-briefcase"></i> Complete Work Experience
            </div>

            {experiences.map((experience) => (
              <ExperienceCard key={experience.id} experience={experience} />
            ))}
          </section>
        </div>

        {/* VIEW 4: TECHNOLOGIES & SKILLS VIEW */}
        <div className="page-view active" id="tech-view">
          <section className="tech-section">
            <div className="section-title">
              <i className="fa-solid fa-sliders"></i> Technologies & Technical Stack
            </div>

            <div className="tech-grid">
              {techCategories.map((category) => (
                <TechCategoryCard key={category.id} category={category} />
              ))}
            </div>
          </section>
        </div>

        {/* VIEW 5: CONTACT VIEW */}
        <div className="page-view active" id="contact-view">
          <section className="contact-section">
            <div className="section-title">
              <i className="fa-solid fa-paper-plane"></i> Get In Touch
            </div>
            <div className="contact-card">
              <h3>Let&apos;s build data solutions together</h3>
              <p>I am available for full-time roles, contract remote work, and data pipeline consultancy.</p>
              <div className="contact-methods">
                <a href="mailto:meer.abdullah2016@gmail.com" className="contact-item">
                  <i className="fa-solid fa-envelope"></i>
                  <span>meer.abdullah2016@gmail.com</span>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="contact-item">
                  <i className="fa-brands fa-linkedin"></i>
                  <span>LinkedIn Profile</span>
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* FLOATING VERTICAL NAVIGATION DOCK */}
      <nav className="side-dock" id="floating-dock">
        <button className="dock-btn" id="theme-toggle" data-tooltip="Settings & Theme" onClick={toggleTheme}>
          <i className={theme === "light" ? "fa-solid fa-gear" : "fa-solid fa-sun"} id="theme-icon"></i>
        </button>

        <div className="dock-divider"></div>

        {navItems.map((item) => (
          <button
            key={item.view}
            className={`dock-btn${activeView === item.view ? " active" : ""}`}
            data-view={item.view}
            data-tooltip={item.tooltip}
            onClick={() => scrollToView(item.view)}
          >
            <i className={item.icon}></i>
          </button>
        ))}

        <div className="dock-divider"></div>

        <button className="dock-btn" id="scroll-top" data-tooltip="Scroll to Top" onClick={scrollToTop}>
          <i className="fa-solid fa-arrow-up"></i>
        </button>
      </nav>
    </div>
  );
}
