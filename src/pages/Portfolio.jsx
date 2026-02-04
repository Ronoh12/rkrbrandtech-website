import { useEffect } from "react";
import { useMemo, useState } from "react";
import Container from "../components/Container";

const Tag = ({ children }) => (
  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-200">
    {children}
  </span>
);

function ProjectCard({ project }) {
  return (
    <div className="rkr-glass-card relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-white/40">
      <div className="relative z-10">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="inline-flex items-center rounded-full border border-green-500/25 bg-green-500/10 px-3 py-1 text-xs text-green-200">
              {project.category}
            </div>
            <h3 className="mt-3 text-white font-semibold text-xl">
              {project.title}
            </h3>
            <p className="mt-2 text-sm text-gray-300 leading-relaxed">
              {project.summary}
            </p>
          </div>

          <div className="h-11 w-11 rounded-2xl border border-green-500/25 bg-green-500/10 flex items-center justify-center text-lg">
            {project.icon}
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>

        <div className="mt-5 rounded-2xl border border-white/10 bg-black/30 p-4">
          <div className="text-xs text-gray-500">Deliverables</div>
          <ul className="mt-2 space-y-2 text-sm text-gray-300">
            {project.deliverables.map((d, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-green-500/70" />
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <a
            href="/contact"
            className="rounded-xl bg-green-600 px-5 py-3 text-sm font-semibold text-white hover:bg-green-500 transition text-center"
          >
            Request Similar Work
          </a>
          <a
            href="/services"
            className="rounded-xl border border-white/15 bg-black/30 px-5 py-3 text-sm font-semibold text-white hover:border-white/30 transition text-center"
          >
            View Services
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const projects = useMemo(
    () => [
      {
        id: 1,
        category: "Managed IT",
        icon: "🧩",
        title: "SME IT Support & Maintenance Workflow",
        summary:
          "Designed a repeatable IT support process for small offices: diagnostics, remote support, scheduled checks, and reporting.",
        tags: ["Remote Support", "Helpdesk", "Documentation"],
        deliverables: [
          "Support workflow checklist (intake → fix → follow-up)",
          "Monthly maintenance checklist (updates, cleanup, backups)",
          "Device inventory template + basic reporting format",
        ],
      },
      {
        id: 2,
        category: "Cybersecurity",
        icon: "🛡️",
        title: "Network Vulnerability Scan + Report (SME style)",
        summary:
          "Performed an internal network assessment focusing on open ports, risky services, and remediation guidance.",
        tags: ["Assessment", "Reporting", "Risk Reduction"],
        deliverables: [
          "Vulnerability scan summary report (non-technical + technical)",
          "Priority fixes list (High/Med/Low)",
          "Hardening recommendations (MFA, updates, backups)",
        ],
      },
      {
        id: 3,
        category: "Cybersecurity",
        icon: "📶",
        title: "Wi-Fi Security Hardening (Business Setup)",
        summary:
          "Improved Wi-Fi security posture with strong configurations, guest network separation, and access controls.",
        tags: ["Wi-Fi", "Hardening", "SME Security"],
        deliverables: [
          "Secure Wi-Fi configuration checklist",
          "Guest network separation guidance",
          "Password & access policy recommendations",
        ],
      },
      {
        id: 4,
        category: "Business Tech Setup",
        icon: "⚙️",
        title: "Business Email + Cloud Storage Permissions Setup",
        summary:
          "Created structured cloud folders and access permissions for teams, plus business email readiness guidance.",
        tags: ["Google Drive", "Permissions", "Business Email"],
        deliverables: [
          "Folder structure template (Departments/Finance/HR/Projects)",
          "Permissions plan (owners/editors/viewers)",
          "Business email setup checklist",
        ],
      },
      {
        id: 5,
        category: "Branding Division",
        icon: "🎨",
        title: "Brand Identity Starter Pack (Design + Print)",
        summary:
          "Prepared a basic brand identity and print-ready materials for a small business presence.",
        tags: ["Branding", "Print", "Merchandise"],
        deliverables: [
          "Logo usage guidance (spacing, backgrounds)",
          "Business card + flyer design (print-ready)",
          "Merch mockup direction (mugs/t-shirts)",
        ],
      },
    ],
    []
  );

  const categories = ["All", "Managed IT", "Cybersecurity", "Business Tech Setup", "Branding Division"];
  const [active, setActive] = useState("All");

  const filtered = useMemo(() => {
    if (active === "All") return projects;
    return projects.filter((p) => p.category === active);
  }, [projects, active]);

  return (
    <div className="bg-black">
      {/* Hero */}
      <section className="border-b border-white/10">
        <Container className="py-10 md:py-14">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center rounded-full border border-green-500/25 bg-green-500/10 px-4 py-2 text-xs text-green-200">
              Portfolio
            </div>

            <h1 className="mt-4 text-3xl md:text-5xl font-bold text-white tracking-tight">
              Proof of Work & Deliverables
            </h1>

            <p className="mt-3 text-sm md:text-base text-gray-300 leading-relaxed">
              Clients trust visible results. Here are examples of what we deliver: reports,
              checklists, workflows, and professional documentation.
            </p>
          </div>

          {/* Filters */}
          <div className="mt-8 flex flex-wrap gap-2 justify-center">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-4 py-2 rounded-xl text-sm border transition ${
                  active === c
                    ? "border-green-500/35 bg-green-500/10 text-green-200"
                    : "border-white/10 bg-white/5 text-gray-200 hover:border-white/25"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* Projects */}
      <section>
        <Container className="py-10 md:py-14">
          <div className="grid gap-4 lg:grid-cols-2">
            {filtered.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10 rounded-3xl border border-white/10 bg-gradient-to-br from-black via-black to-green-950 p-7 md:p-10 text-center">
            <h3 className="text-xl md:text-2xl font-bold text-white">
              Want a report like this for your business?
            </h3>
            <p className="mt-2 text-sm md:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Book a consultation and we’ll recommend the best approach for your environment.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="/contact"
                className="rounded-xl bg-green-600 px-6 py-3 text-sm font-semibold text-white hover:bg-green-500 transition text-center"
              >
                Book a Consultation
              </a>
              <a
                href="/services"
                className="rounded-xl border border-white/15 bg-black/30 px-6 py-3 text-sm font-semibold text-white hover:border-white/30 transition text-center"
              >
                Explore Services
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
