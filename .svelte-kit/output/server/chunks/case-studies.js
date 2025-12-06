const caseStudies = [
  {
    slug: "construction-remodeler-efficiency",
    title: "Construction Remodeler: Cutting Setup Time by 60%",
    industry: "Construction / Trades",
    year: "2025",
    result: "60% faster job setup",
    highlight: ["Scope templates", "Approval trails", "Readiness dashboard"],
    profile: "Regional remodeling company coordinating crews, subs, and client communication across multiple apps.",
    problem: [
      "Job setup and estimating required copying data between tools and versions.",
      "Scope changes were approved in email, creating confusion in the field.",
      "Managers lacked visibility into job readiness and blockers."
    ],
    approach: [
      "Mapped the intake-to-scheduling workflow and standardized required data.",
      "Built templated scopes and approvals with audit trails and notifications.",
      "Automated job packet creation and handoffs to field teams.",
      "Instrumented dashboards for readiness, cycle time, and exceptions."
    ],
    results: [
      "60% faster job setup from inquiry to scheduled work.",
      "Clear change control reduced rework and callbacks.",
      "Leads regained ~6 hours per week previously spent chasing status."
    ],
    tags: ["automation", "construction", "process"],
    summary: "Standardized scopes, automated handoffs, and templated estimating to reduce admin time."
  },
  {
    slug: "field-services-visibility",
    title: "Field Services: Real-Time Ops Visibility",
    industry: "Field Services",
    year: "2024",
    result: "35% faster dispatch decisions",
    highlight: ["Live status board", "Alerting rules", "Customer updates"],
    profile: "Field services operator dispatching crews across a region with complex scheduling and status updates.",
    problem: [
      "Dispatch decisions relied on texts and spreadsheets with outdated statuses.",
      "No clear signal for priority jobs or when to escalate delays.",
      "Supervisors lacked a single view of crew location, status, and blockers."
    ],
    approach: [
      "Centralized intake and scheduling rules with clear capacity constraints.",
      "Built a live status board with alerts for stalled jobs and missed checkpoints.",
      "Automated customer updates and internal escalations for high-priority work."
    ],
    results: [
      "35% faster dispatch decisions with fewer conflicts.",
      "Missed updates dropped as alerts replaced manual check-ins.",
      "Supervisors gained real-time visibility without chasing crews."
    ],
    tags: ["operations", "dashboards", "automation"],
    summary: "Centralized scheduling, status dashboards, and alerting to keep dispatch and crews aligned."
  },
  {
    slug: "professional-services-playbook",
    title: "Professional Services: Repeatable Delivery Playbook",
    industry: "Professional Services",
    year: "2024",
    result: "25% higher utilization",
    highlight: ["Scope templates", "Delivery playbook", "Utilization dashboard"],
    profile: "Boutique professional services firm delivering repeat projects with variable scopes.",
    problem: [
      "Projects were scoped inconsistently, causing scope creep and margin squeeze.",
      "Onboarding new team members took too long due to tribal knowledge.",
      "Reporting on utilization and profitability required manual effort."
    ],
    approach: [
      "Created pricing and scope templates with explicit change control.",
      "Documented delivery playbook with roles, SLAs, and escalation paths.",
      "Built a lightweight dashboard for utilization and project health."
    ],
    results: [
      "25% higher utilization with clearer staffing and scheduling.",
      "Scope changes tracked and approved with fewer surprises.",
      "Leadership gained weekly visibility into delivery health and margin."
    ],
    tags: ["process", "templates", "reporting"],
    summary: "Built a delivery runbook, intake automation, and client-ready reporting templates."
  }
];
export {
  caseStudies as c
};
