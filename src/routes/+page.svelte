<script>
  import ServiceCard from '$components/ServiceCard.svelte';
  import CaseStudyCard from '$components/CaseStudyCard.svelte';
  import CTASection from '$components/CTASection.svelte';
  import StatsGrid from '$components/StatsGrid.svelte';
  import caseStudies from '$data/case-studies.json';
  import { Workflow, BarChart3, Target, CheckCircle2, Gauge, Rocket } from 'lucide-svelte';

  const services = [
    {
      icon: Workflow,
      title: 'Process Automation',
      description: 'Automate repetitive work, standardize handoffs, and connect your tools so teams move faster.',
      href: '/services/process-automation'
    },
    {
      icon: BarChart3,
      title: 'Waste Analysis',
      description: 'Identify bottlenecks, duplicate data entry, and slow approvals to reclaim capacity and cash.',
      href: '/services/waste-analysis'
    },
    {
      icon: Target,
      title: 'Business Optimization',
      description: 'Align pricing, capacity, and delivery with a repeatable playbook that scales without chaos.',
      href: '/services/business-optimization'
    }
  ];

  const stats = [
    { value: '50+', label: 'Processes documented', detail: 'Across trades and professional services.' },
    { value: '30%+', label: 'Cost reduction', detail: 'Typical waste removed from admin time.' },
    { value: '2-4x', label: 'Faster delivery', detail: 'From clearer scopes and automated handoffs.' },
    { value: '3', label: 'Weeks to first win', detail: 'Time to ship the first automation or playbook.' }
  ];

  const howItWorks = [
    {
      title: 'Discovery Call',
      body: 'Map your workflows, systems, and friction points. Align on outcomes and risks.'
    },
    {
      title: 'Analysis & Proposal',
      body: 'Rank opportunities by impact and effort. Deliver a clear plan with quick wins first.'
    },
    {
      title: 'Implementation & Iteration',
      body: 'Document, automate, and measure. Tune with your team until it sticks.'
    }
  ];

  const featuredCaseStudies = caseStudies.slice(0, 2);
</script>

<svelte:head>
  <title>FAIT Consulting | Operations, Automation, Waste Analysis</title>
  <meta
    name="description"
    content="FAIT Consulting helps small businesses document processes, automate workflows, and eliminate waste to unlock capacity."
  />
  <meta property="og:title" content="FAIT Consulting | Operations, Automation, Waste Analysis" />
  <meta
    property="og:description"
    content="Document, automate, and optimize your business with systems-first consulting."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://consulting.itsfait.com" />
</svelte:head>

<section class="hero section">
  <div class="hero-visual">
    <img
      src="/images/Fait%20Consulting.jpg"
      alt="Consultant presenting results to executives in a boardroom meeting"
      fetchpriority="high"
    />
  </div>

  <div class="container hero-grid">
    <div class="hero-copy">
      <span class="pill">Operations / Automation / Waste Reduction</span>
      <h1>Transform your business. Minimize waste.</h1>
      <p class="lede">
        We build the playbooks, automations, and visibility you need to scale without chaos - starting with
        the highest-value processes in your operation.
      </p>
      <div class="hero-actions">
        <a class="primary" href="mailto:admin@itsfait.com" target="_blank" rel="noreferrer">
          Book Consultation
        </a>
        <a class="ghost" href="/case-studies">View case studies</a>
      </div>
      <div class="hero-points">
        <div class="point">
          <CheckCircle2 size={18} />
          <div>
            <div class="point-title">Document and standardize</div>
            <div class="point-body">Clear SOPs, ownership, and exceptions in one place.</div>
          </div>
        </div>
        <div class="point">
          <CheckCircle2 size={18} />
          <div>
            <div class="point-title">Automate the repetitive</div>
            <div class="point-body">Trigger-based workflows across tools you already use.</div>
          </div>
        </div>
        <div class="point">
          <CheckCircle2 size={18} />
          <div>
            <div class="point-title">Measure what matters</div>
            <div class="point-body">Visibility into throughput, bottlenecks, and quality.</div>
          </div>
        </div>
      </div>
    </div>

    <div class="panel-card hero-panel-card">
      <div class="panel-heading">
        <Gauge size={18} />
        <span>Operations Snapshot</span>
      </div>
      <div class="meter">
        <div class="meter-label">Process coverage</div>
        <div class="meter-bar">
          <span style="width: 72%"></span>
        </div>
        <div class="meter-value">72% documented</div>
      </div>
      <div class="panel-metrics">
        <div>
          <div class="metric">18</div>
          <div class="meta">active workflows</div>
        </div>
        <div>
          <div class="metric">3.2x</div>
          <div class="meta">faster handoffs</div>
        </div>
        <div>
          <div class="metric">-28%</div>
          <div class="meta">ops overhead</div>
        </div>
      </div>
      <div class="panel-footer">
        <Rocket size={16} />
        Quick wins shipped in 3 weeks or less.
      </div>
    </div>
  </div>
</section>

<section class="section" id="services">
  <div class="container">
    <div class="section-header">
      <h2>What we deliver</h2>
      <p>Three focused service lines to document, automate, and optimize how your business runs.</p>
    </div>
    <div class="services-grid">
      {#each services as service}
        <ServiceCard {...service} />
      {/each}
    </div>
  </div>
</section>

<section class="section muted">
  <div class="container">
    <div class="section-header">
      <h2>Proof you can measure</h2>
      <p>Clarity, speed, and cost reduction - not vanity metrics.</p>
    </div>
    <StatsGrid items={stats} />
  </div>
</section>

<section class="section" id="how">
  <div class="container">
    <div class="section-header">
      <h2>How it works</h2>
      <p>Simple, transparent steps. Quick wins first, long-term stability next.</p>
    </div>
    <div class="steps">
      {#each howItWorks as step, i}
        <div class="step-card">
          <div class="step-index">0{i + 1}</div>
          <h3>{step.title}</h3>
          <p>{step.body}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<section class="section muted" id="case-studies">
  <div class="container">
    <div class="section-header">
      <h2>Case studies</h2>
      <p>Recent engagements across trades, field services, and professional services.</p>
    </div>
    <div class="case-grid">
      {#each featuredCaseStudies as cs}
        <CaseStudyCard {...cs} />
      {/each}
    </div>
  </div>
</section>

<CTASection
  eyebrow="Let's fix the biggest bottleneck first"
  title="Ready to map your operations?"
  description="Book a working session to document a core workflow and identify the quickest win for your team."
  primaryLabel="Book Consultation"
  primaryHref="mailto:admin@itsfait.com"
  secondaryLabel="Email the team"
  secondaryHref="mailto:admin@itsfait.com"
/>

<style>
  .hero {
    padding-top: 6.5rem;
  }

  .hero-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2rem;
    align-items: center;
  }

  .hero-copy h1 {
    font-size: clamp(2.4rem, 3vw + 1rem, 3.3rem);
    margin: 1rem 0 0.75rem;
    line-height: 1.05;
  }

  .lede {
    color: var(--muted);
    line-height: 1.7;
    margin-bottom: 1.5rem;
  }

  .hero-actions {
    display: flex;
    gap: 0.75rem;
    flex-wrap: wrap;
    margin-bottom: 1.25rem;
  }

  .primary,
  .ghost {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.85rem 1.35rem;
    border-radius: 12px;
    font-weight: 700;
    border: 1px solid var(--border);
  }

  .primary {
    background: linear-gradient(120deg, rgba(46, 197, 211, 0.22), rgba(93, 139, 255, 0.24));
    color: var(--text);
    box-shadow: var(--glow);
  }

  .ghost {
    color: var(--text);
    background: rgba(255, 255, 255, 0.04);
  }

  .hero-points {
    display: grid;
    gap: 0.75rem;
    margin-top: 1rem;
  }

  .point {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 0.75rem;
    align-items: start;
    padding: 0.65rem 0.75rem;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid var(--border);
  }

  .point-title {
    font-weight: 700;
    margin-bottom: 0.1rem;
  }

  .point-body {
    color: var(--muted);
  }

  .hero-visual {
    position: relative;
    border-radius: 18px;
    overflow: hidden;
    min-height: 420px;
    border: 1px solid var(--border);
    background: linear-gradient(140deg, rgba(46, 197, 211, 0.12), rgba(6, 7, 12, 0.9));
    box-shadow: 0 22px 60px rgba(0, 0, 0, 0.32);
  }

  .hero-visual img {
    position: absolute;
    inset: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
    display: block;
    filter: saturate(1.02);
  }

  .hero-visual::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(160deg, rgba(6, 7, 12, 0.4), rgba(6, 7, 12, 0.75));
    z-index: 1;
    pointer-events: none;
  }

  .panel-card {
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid var(--border);
    border-radius: 18px;
    padding: 1.5rem;
    backdrop-filter: blur(8px);
    position: relative;
    overflow: hidden;
    box-shadow: var(--glow);
  }

  .panel-card::after {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 20% 20%, rgba(46, 197, 211, 0.14), transparent 50%);
    pointer-events: none;
  }

  .panel-heading {
    display: inline-flex;
    align-items: center;
    gap: 0.45rem;
    padding: 0.45rem 0.7rem;
    border-radius: 12px;
    border: 1px solid var(--border);
    background: rgba(255, 255, 255, 0.03);
    font-weight: 700;
  }

  .meter {
    margin: 1rem 0;
  }

  .meter-label {
    color: var(--muted);
    margin-bottom: 0.35rem;
    font-weight: 600;
  }

  .meter-bar {
    height: 12px;
    background: rgba(255, 255, 255, 0.06);
    border-radius: 999px;
    overflow: hidden;
  }

  .meter-bar span {
    display: block;
    height: 100%;
    background: linear-gradient(90deg, var(--accent), var(--accent-strong));
    border-radius: 999px;
  }

  .meter-value {
    margin-top: 0.35rem;
    color: var(--muted);
  }

  .panel-metrics {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    margin: 1rem 0;
  }

  .metric {
    font-size: 1.35rem;
    font-weight: 800;
  }

  .meta {
    color: var(--muted);
  }

  .panel-footer {
    display: inline-flex;
    align-items: center;
    gap: 0.45rem;
    padding: 0.65rem 0.75rem;
    border-radius: 12px;
    border: 1px solid var(--border);
    background: rgba(255, 255, 255, 0.03);
    font-weight: 600;
  }

  .hero-panel-card {
    background: rgba(6, 7, 12, 0.82);
    border: 1px solid rgba(255, 255, 255, 0.12);
    max-width: 420px;
  }

  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 1rem;
  }

  .muted {
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.02), transparent 40%);
  }

  .steps {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 1rem;
  }

  .step-card {
    padding: 1.25rem;
    border-radius: 14px;
    border: 1px solid var(--border);
    background: rgba(255, 255, 255, 0.04);
    display: grid;
    gap: 0.4rem;
  }

  .step-index {
    font-weight: 800;
    color: var(--accent);
  }

  .step-card h3 {
    margin: 0;
    font-size: 1.15rem;
  }

  .step-card p {
    margin: 0;
    color: var(--muted);
    line-height: 1.6;
  }

  .case-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1rem;
  }

  @media (max-width: 720px) {
    .panel-metrics {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 640px) {
    .hero-visual {
      min-height: 360px;
    }

    .hero-panel-card {
      max-width: none;
    }
  }
</style>
