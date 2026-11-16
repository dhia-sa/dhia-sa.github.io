// ============================================================
//  YOUR PROJECTS — edit this list to add / remove projects.
//  category: "Data Engineering" | "Analytics & BI" | "Data Science" | "Apps"
//  type:     "Case study" (internal, anonymized) | "Public" | "Coming soon"
//  link:     detail page (projects/xxx.html) or external URL
//  image:    optional, e.g. "assets/img/warehouse.png"
// ============================================================
const PROJECTS = [
    {
    title: "Indonesia Weather Data Pipeline",
    summary: "Daily pipeline for 10 Indonesian cities: Open-Meteo API → Postgres → dbt models & data tests → Streamlit dashboard, scheduled with GitHub Actions.",
    category: "Data Engineering",
    type: "Public",
    tags: ["Python", "PostgreSQL (Neon)", "dbt", "GitHub Actions", "Streamlit"],
    link: "projects/weather-pipeline.html",
  },
  {
    title: "Automated Data Warehouse Pipeline",
    summary: "389 daily ETL tasks loading POS, ERP and spreadsheet data into a cloud warehouse, processing millions of sales rows.",
    category: "Data Engineering",
    type: "Case study",
    tags: ["AnalyticDB (PostgreSQL)", "DataWorks", "Python", "SQL"],
    link: "projects/warehouse-pipeline.html",
  },
  {
    title: "SAP B1 AR/AP Migration & Reconciliation",
    summary: "Moved accounts receivable/payable from SAP Business One into the warehouse and reconciled per document number with Finance.",
    category: "Data Engineering",
    type: "Case study",
    tags: ["SAP B1", "SQL", "Reconciliation"],
    link: "projects/template.html",
  },
  {
    title: "POS API Integration (ESB)",
    summary: "Ingested sales data from a newly adopted POS via its REST API into the warehouse alongside the legacy POS.",
    category: "Data Engineering",
    type: "Case study",
    tags: ["REST API", "Python", "Incremental load"],
    link: "projects/template.html",
  },
  {
    title: "Accounting API Integration (Accurate)",
    summary: "API-to-warehouse ETL through an API gateway for accounting data.",
    category: "Data Engineering",
    type: "Case study",
    tags: ["REST API", "Python", "ETL"],
    link: "projects/template.html",
  },
  {
    title: "Store Demand Forecasting",
    summary: "Forecasting product demand per store to support production and ordering decisions.",
    category: "Data Science",
    type: "Case study",
    tags: ["Forecasting", "Python", "Time series"],
    link: "projects/template.html",
  },
  {
    title: "Suggested Ordering System",
    summary: "Recommends order quantities for stores from sales history and stock on hand.",
    category: "Data Science",
    type: "Case study",
    tags: ["iSeller POS", "SQL", "Inventory"],
    link: "projects/template.html",
  },
  {
    title: "B2B Consignment Tracker",
    summary: "Google Apps Script app tracking partner (mitra) consignment orders and returns end-to-end.",
    category: "Apps",
    type: "Case study",
    tags: ["Google Apps Script", "Google Sheets", "Workflow"],
    link: "projects/template.html",
  },
  {
    title: "Stock-on-Hand by Expiry Form",
    summary: "Form for stores to report stock by expiry date, enabling make-to-stock planning by expiry category.",
    category: "Apps",
    type: "Case study",
    tags: ["Google Apps Script", "Forms", "Operations"],
    link: "projects/template.html",
  },
  {
    title: "Animal Shelter Dashboard",
    summary: "Power BI dashboard built for the Onyx Data DataDNA challenge.",
    category: "Analytics & BI",
    type: "Public",
    tags: ["Power BI", "DAX", "Data storytelling"],
    link: "https://datadna.onyxdata.co.uk/portfolios/animal-shelter-dashboard/",
  },
  {
    title: "E-commerce Analytics with dbt + DuckDB",
    summary: "Public analytics-engineering project on the Olist Brazilian e-commerce dataset: staging → marts, tests, docs.",
    category: "Analytics & BI",
    type: "Coming soon",
    tags: ["dbt", "DuckDB", "GitHub Actions"],
    link: "#",
  },
];

// ------------------------------------------------------------
//  Rendering (no need to edit below)
// ------------------------------------------------------------
const TYPE_STYLE = {
  "Case study": "bg-amber-100 text-amber-800",
  "Public": "bg-emerald-100 text-emerald-800",
  "Coming soon": "bg-slate-200 text-slate-600",
};

function card(p) {
  const external = p.link.startsWith("http");
  const disabled = p.type === "Coming soon";
  return `
  <a ${disabled ? "" : `href="${p.link}"`} ${external ? 'target="_blank" rel="noopener"' : ""}
     class="group flex flex-col bg-slate-50 rounded-xl border border-slate-200 overflow-hidden ${disabled ? "opacity-70 cursor-default" : "hover:border-indigo-400 hover:shadow-lg transition"}">
    ${p.image ? `<img src="${p.image}" alt="${p.title}" class="h-40 w-full object-cover" />`
               : `<div class="h-2 bg-gradient-to-r from-indigo-500 to-sky-400"></div>`}
    <div class="p-5 flex flex-col flex-1">
      <div class="flex items-center justify-between text-xs mb-3">
        <span class="font-medium text-indigo-600">${p.category}</span>
        <span class="px-2 py-0.5 rounded-full font-medium ${TYPE_STYLE[p.type] || ""}">${p.type}</span>
      </div>
      <h3 class="font-semibold text-lg leading-snug ${disabled ? "" : "group-hover:text-indigo-600"}">${p.title}</h3>
      <p class="text-sm text-slate-600 mt-2 flex-1">${p.summary}</p>
      <div class="flex flex-wrap gap-1.5 mt-4">
        ${p.tags.map(t => `<span class="text-xs bg-white border border-slate-200 rounded px-2 py-0.5">${t}</span>`).join("")}
      </div>
    </div>
  </a>`;
}

function render(filter = "All") {
  const list = filter === "All" ? PROJECTS : PROJECTS.filter(p => p.category === filter);
  document.getElementById("project-grid").innerHTML = list.map(card).join("");
  document.querySelectorAll("#filters button").forEach(b => {
    const on = b.dataset.f === filter;
    b.className = "text-sm px-3 py-1.5 rounded-lg border " +
      (on ? "bg-indigo-600 text-white border-indigo-600" : "bg-white border-slate-300 hover:border-indigo-400");
  });
}

const cats = ["All", ...new Set(PROJECTS.map(p => p.category))];
document.getElementById("filters").innerHTML =
  cats.map(c => `<button data-f="${c}">${c}</button>`).join("");
document.querySelectorAll("#filters button").forEach(b => b.onclick = () => render(b.dataset.f));
render();

// skill chips
document.querySelectorAll("[data-chips]").forEach(el => {
  el.innerHTML = el.dataset.chips.split(",")
    .map(s => `<span class="bg-slate-100 rounded-md px-2.5 py-1">${s.trim()}</span>`).join("");
});
document.getElementById("year").textContent = new Date().getFullYear();
