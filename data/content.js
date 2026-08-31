export const dashboards = [
  {
    id: "containers",
    image: "/images/dashboard-containers.jpeg",
    alt: "Containers Data Summarization Dashboard",
    tag: "Logistics & Operations",
    title: "Containers Operations & Logistics Summarization",
    desc: "Monitors end-to-end container movements across terminals (GIMT, DIMT, GOMT), tracking volume distribution, match code performance, and delivery turn-around-time (TAT).",
    stack: ["SQL", "Power BI", "Logistics ETL", "TAT Metrics"],
    highlights: [
      { value: "14,831", label: "Total Containers" },
      { value: "9,203", label: "Unique Units" },
      { value: "Turnaround", label: "Analysis" },
    ],
  },
  {
    id: "sales-ytd",
    image: "/images/dashboard-sales-ytd.jpeg",
    alt: "Executive YTD Sales & Variance Analysis",
    tag: "Financial Analytics",
    title: "Executive YTD Sales & Variance Analysis",
    desc: "Provides executive visibility into multi-subsidiary sales performance, tracking year-to-date metrics against prior year targets, category breakdowns, and FX variance impact.",
    stack: ["Power BI / DAX", "Data Warehouse", "FX Modeling"],
    highlights: [
      { value: "$33.25M", label: "YTD Revenue" },
      { value: "-2.59%", label: "Target Var" },
      { value: "-8.20%", label: "FX Var" },
    ],
  },
  {
    id: "sales-matrix",
    image: "/images/dashboard-sales-matrix.jpeg",
    alt: "Inter-Company Sales Matrix & Top SKUs",
    tag: "Commercial Analytics",
    title: "Inter-Company Sales Matrix & Top SKU Performance",
    desc: "Combines a dynamic cross-entity sales matrix with historical category trends (2018\u20132026) and Top 35 SKU growth tables for inventory planning and product performance tracking.",
    stack: ["BigQuery / SQL", "Product Cohorts", "SKU Rankings"],
    highlights: [
      { value: "Top 35", label: "SKU Table" },
      { value: "2018\u20132026", label: "Multi-Year" },
      { value: "Cross-Entity", label: "Matrix" },
    ],
  },
  {
    id: "facebook-ads",
    image: "/images/dashboard-facebook-ads.jpeg",
    alt: "Facebook Ads Marketing Funnel Dashboard",
    tag: "Growth Marketing",
    title: "Paid Acquisition & Full-Funnel Conversion Engine",
    desc: "Tracks paid ad performance from impressions to purchases. Details spend, ROAS, CPA, CAC, and conversion drop-offs at every stage of the purchase funnel.",
    stack: ["Meta Ads API", "Funnel Analysis", "Attribution"],
    highlights: [
      { value: "Full-Funnel", label: "Tracking" },
      { value: "CPA & ROAS", label: "Metrics" },
      { value: "Daily Trend", label: "Ingestion" },
    ],
  },
];

export const experiences = [
  {
    id: "tgt-nexus",
    role: "Assistant Manager \u2014 Data Engineering & BI",
    company: "TGT-Nexus",
    date: "May 2026 \u2013 Present",
    bullets: [
      "Designed and implemented end-to-end ETL/ELT pipelines using Python, Pandas, SQL, and BigQuery to ingest, transform, validate, and centralize multi-source BPO campaign data.",
      "Integrated Zoom Phone API and Primo Dialer API to automate call-log ingestion and support hourly agent, team, tier, and campaign performance analytics.",
      "Developed SQL-based data models, database views, transformations, and analytical queries for hourly, daily, monthly, agent-wise, team-wise, and tier-wise reporting.",
      "Automated data extraction, transformation, validation, reporting, and distribution across APIs, Google Sheets, BigQuery, MySQL, and Power BI, improving operational efficiency by 30%.",
      "Implemented data quality processes including duplicate detection and removal, null/missing-value handling, data validation, inconsistent-data checks, and automated data cleaning.",
      "Performed data migration between source systems and centralized data platforms, including historical data movement, transformation, validation, and reconciliation.",
      "Configured Google Cloud Service Accounts, JSON service-account credentials, API permissions, and Google Sheets integrations to securely automate data access and reporting workflows.",
      "Built automated Google Sheets workflows using Google Sheets API and gspread, enabling scheduled worksheet updates and reducing manual reporting activities.",
      "Systematized data processing and validation workflows, reducing pipeline downtime by 45% and eliminating manual data preparation.",
      "Developed Power BI reporting solutions for agent performance, call activity, sales, conversion metrics, and operational KPIs.",
    ],
  },
  {
    id: "simplified-dashboard",
    role: "Data Associate & Analyst",
    company: "Simplified Dashboard",
    date: "Nov 2024 \u2013 Apr 2026",
    bullets: [
      "Built and maintained KPI dashboards tracking CAC, ROAS, conversion rates, and revenue, improving decision-making speed by 35%.",
      "Performed funnel analysis to identify conversion drop-offs, contributing to an 18% increase in overall conversion rates.",
      "Conducted cohort analysis to improve customer retention insights, contributing to a 12% increase in repeat customer rate.",
      "Executed gap analysis between planned and actual KPIs, helping reduce performance variance by 20%.",
      "Integrated multi-source Facebook and Google data through ETL pipelines, reducing manual data preparation effort by 50%.",
      "Optimized SQL queries and reporting logic, improving dashboard load time by 40%.",
    ],
  },
  {
    id: "codic-solutions",
    role: "Data Analyst Intern \u2014 Codic Solutions",
    company: "Remote",
    date: "2023 \u2013 2024",
    bullets: [
      "Performed exploratory data analysis (EDA) and statistical analysis on real-world datasets to identify business trends and actionable insights.",
      "Developed feature engineering logic for an AI-based HR product, improving candidate ranking accuracy by 25%. Conducted competitor analysis, contributing to a 15% improvement in workflow efficiency.",
      "Prepared, cleaned, and validated computer vision datasets for a shoplifting detection system.",
      "Collaborated with cross-functional teams to translate data insights into product and workflow improvements.",
    ],
  },
];

export const techCategories = [
  {
    id: "warehousing",
    icon: "fa-solid fa-database",
    title: "Data Warehousing & Databases",
    pills: [
      "Google BigQuery",
      "PostgreSQL",
      "MySQL",
      "SQL Server",
      "Data Modeling (Star/Snowflake)",
    ],
  },
  {
    id: "engineering",
    icon: "fa-solid fa-code",
    title: "Engineering & Languages",
    pills: [
      "Python (Pandas, NumPy)",
      "Advanced SQL (CTEs, Window Functions)",
      "REST API Ingestion",
      "Bash / Scripting",
    ],
  },
  {
    id: "bi",
    icon: "fa-solid fa-chart-column",
    title: "BI & Data Visualization",
    pills: [
      "Power BI (DAX, Power Query)",
      "Executive Dashboards",
      "Funnel & Cohort Analysis",
      "Financial Modeling",
    ],
  },
  {
    id: "orchestration",
    icon: "fa-solid fa-gears",
    title: "Orchestration & Integration",
    pills: ["Apache Airflow", "Meta Ads API", "Git / GitHub", "ETL/ELT Pipeline Design"],
  },
];

export const navItems = [
  { view: "home-view", icon: "fa-solid fa-house", tooltip: "Home" },
  { view: "profile-view", icon: "fa-solid fa-user", tooltip: "About Profile" },
  { view: "dashboards-view", icon: "fa-solid fa-briefcase", tooltip: "Dashboards & BI" },
  { view: "experience-view", icon: "fa-solid fa-layer-group", tooltip: "Work Experience" },
  { view: "tech-view", icon: "fa-solid fa-sliders", tooltip: "Technologies & Stack" },
  { view: "contact-view", icon: "fa-solid fa-comment-dots", tooltip: "Messages / Contact" },
];
