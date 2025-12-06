<script lang="ts">
  import { Workflow, ChartColumn, Target, ClipboardCheck, Settings2, ShieldCheck } from 'lucide-svelte';
  import ServiceCard from '$lib/components/ServiceCard.svelte';
  import CTASection from '$lib/components/CTASection.svelte';
</script>

<svelte:head>
  <title>Services | FAIT Consulting</title>
  <meta name="description" content="Explore FAIT Consulting services: process automation, waste analysis, and business optimization." />
</svelte:head>

<main class="page-shell">
  <section class="section hero">
    <div class="container hero-grid">
      <div>
        <span class="pill">Services</span>
        <h1>Focused on outcomes, not buzzwords.</h1>
        <p class="lede">
          We start with a clear picture of your operation, then deliver documented processes, automations, and metrics your team can run with.
        </p>
      </div>
      <div class="note">
        <div class="title">Engagement shape</div>
        <ul>
          <li><span>•</span><span>Discovery + prioritization</span></li>
          <li><span>•</span><span>Design + build quick wins</span></li>
          <li><span>•</span><span>Stabilize, handoff, and measure</span></li>
        </ul>
        <div class="title" style="color: var(--muted); font-weight: 600;">Typically 4-8 weeks depending on scope.</div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="section-header">
        <h2>Choose the path that fits</h2>
        <p>Each service is scoped to deliver measurable wins fast, then deepen as needed.</p>
      </div>
      <div class="services-grid">
        <ServiceCard
          title="Process Automation"
          description="Replace repetitive tasks with structured, automated workflows that reduce errors and handoffs."
          href="/services/process-automation"
          icon={Workflow}
        />
        <ServiceCard
          title="Waste Analysis"
          description="Identify friction, rework, and manual loops that drain capacity across your operation."
          href="/services/waste-analysis"
          icon={ChartColumn}
        />
        <ServiceCard
          title="Business Optimization"
          description="Align pricing, capacity, and delivery with a repeatable playbook your team can follow."
          href="/services/business-optimization"
          icon={Target}
        />
      </div>
    </div>
  </section>

  <section class="section muted-section">
    <div class="container">
      <div class="section-header">
        <h2>Our approach</h2>
        <p>Clear steps, heavy documentation, and tight feedback loops with your team.</p>
      </div>
      <div class="approach-grid">
        <div class="approach-card">
          <div class="icon"><ClipboardCheck size={20} /></div>
          <h3>Systems-first discovery</h3>
          <p>Map your workflows, tools, and decision points. Surface blockers and failure modes before we build.</p>
        </div>
        <div class="approach-card">
          <div class="icon"><Settings2 size={20} /></div>
          <h3>Design and build</h3>
          <p>Document the playbook, automate repetitive work, and wire your tools together with clear owners.</p>
        </div>
        <div class="approach-card">
          <div class="icon"><ShieldCheck size={20} /></div>
          <h3>Stabilize and hand off</h3>
          <p>Measure adoption, refine, and hand off with documentation so your team owns the system long-term.</p>
        </div>
      </div>
    </div>
  </section>

  <CTASection />
</main>
