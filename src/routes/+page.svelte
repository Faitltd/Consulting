<script lang="ts">
  import { Gauge, CircleCheck, Rocket, Workflow, ChartColumn, Target } from 'lucide-svelte';
  import ServiceCard from '$lib/components/ServiceCard.svelte';
  import CaseStudyCard from '$lib/components/CaseStudyCard.svelte';
  import StatGrid from '$lib/components/StatGrid.svelte';
  import CTASection from '$lib/components/CTASection.svelte';

  import { onMount } from 'svelte';

  let parallax = 0;

  onMount(() => {
    const handleScroll = () => {
      parallax = window.scrollY;
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  const stats = [
    { value: '50+', label: 'Processes documented', body: 'Across trades and professional services.' },
    { value: '30%+', label: 'Cost reduction', body: 'Typical waste removed from admin time.' },
    { value: '2-4x', label: 'Faster delivery', body: 'From clearer scopes and automated handoffs.' },
    { value: '3', label: 'Weeks to first win', body: 'Time to ship the first automation or playbook.' }
  ];
</script>

<svelte:head>
  <title>FAIT Consulting | Operations, Automation, Waste Analysis</title>
</svelte:head>

<main class="page-shell">
  <section class="section hero">
    <div class="hero-visual" aria-hidden="true">
      <img
        class="hero-img"
        src="/images/Fait%20Consulting.jpg?v=3"
        alt="Consultant presenting results to executives"
        fetchpriority="high"
        style={`object-position: center 37%; transform: translateY(${parallax * -0.15}px);`}
      />
    </div>
    <div class="container hero-grid">
      <div class="hero-copy">
        <span class="pill">Operations / Automation / Waste Reduction</span>
        <h1>Transform your business. Minimize waste.</h1>
        <p class="lede">
          We build the playbooks, automations, and visibility you need to scale without chaos - starting with the
          highest-value processes in your operation.
        </p>
        <div class="hero-actions">
          <a class="primary" href="mailto:admin@itsfait.com" target="_blank" rel="noreferrer">Book Consultation</a>
          <a class="ghost" href="/case-studies">View case studies</a>
        </div>
        <div class="hero-points">
          <div class="point">
            <CircleCheck size={18} />
            <div>
              <div class="point-title">Document and standardize</div>
              <div class="point-body">Clear SOPs, ownership, and exceptions in one place.</div>
            </div>
          </div>
          <div class="point">
            <CircleCheck size={18} />
            <div>
              <div class="point-title">Automate the repetitive</div>
              <div class="point-body">Trigger-based workflows across tools you already use.</div>
            </div>
          </div>
          <div class="point">
            <CircleCheck size={18} />
            <div>
              <div class="point-title">Measure what matters</div>
              <div class="point-body">Visibility into throughput, bottlenecks, and quality.</div>
            </div>
          </div>
        </div>
      </div>

      <div class="hero-panel">
        <div class="panel-heading">
          <Gauge size={18} />
          <span>Operations Snapshot</span>
        </div>
        <div class="meter">
          <div class="meter-label">Process coverage</div>
          <div class="meter-bar"><span style="width:72%"></span></div>
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
          <Rocket size={16} /> Quick wins shipped in 3 weeks or less.
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
        <ServiceCard
          title="Process Automation"
          description="Automate repetitive work, standardize handoffs, and connect your tools so teams move faster."
          href="/services/process-automation"
          icon={Workflow}
        />
        <ServiceCard
          title="Waste Analysis"
          description="Identify bottlenecks, duplicate data entry, and slow approvals to reclaim capacity and cash."
          href="/services/waste-analysis"
          icon={ChartColumn}
        />
        <ServiceCard
          title="Business Optimization"
          description="Align pricing, capacity, and delivery with a repeatable playbook that scales without chaos."
          href="/services/business-optimization"
          icon={Target}
        />
      </div>
    </div>
  </section>

  <section class="section muted-section">
    <div class="container">
      <div class="section-header">
        <h2>Proof you can measure</h2>
        <p>Clarity, speed, and cost reduction - not vanity metrics.</p>
      </div>
      <StatGrid {stats} />
    </div>
  </section>

  <section class="section" id="how">
    <div class="container">
      <div class="section-header">
        <h2>How it works</h2>
        <p>Simple, transparent steps. Quick wins first, long-term stability next.</p>
      </div>
      <div class="steps">
        <div class="approach-card">
          <div class="icon"><span>01</span></div>
          <h3>Discovery Call</h3>
          <p>Map your workflows, systems, and friction points. Align on outcomes and risks.</p>
        </div>
        <div class="approach-card">
          <div class="icon"><span>02</span></div>
          <h3>Analysis &amp; Proposal</h3>
          <p>Rank opportunities by impact and effort. Deliver a clear plan with quick wins first.</p>
        </div>
        <div class="approach-card">
          <div class="icon"><span>03</span></div>
          <h3>Implementation &amp; Iteration</h3>
          <p>Document, automate, and measure. Tune with your team until it sticks.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="section muted-section" id="case-studies">
    <div class="container">
      <div class="section-header">
        <h2>Case studies</h2>
        <p>Recent engagements across trades, field services, and professional services.</p>
      </div>
      <div class="case-grid">
        <CaseStudyCard
          href="/case-studies/construction-remodeler-efficiency"
          title="Construction Remodeler: Cutting Setup Time by 60%"
          description="Standardized scopes, automated handoffs, and templated estimating to reduce admin time."
          industry="Construction / Trades"
          result="60% faster job setup"
          tags={["automation", "construction", "process"]}
        />
        <CaseStudyCard
          href="/case-studies/field-services-visibility"
          title="Field Services: Real-Time Ops Visibility"
          description="Centralized scheduling, status dashboards, and alerting to keep dispatch and crews aligned."
          industry="Field Services"
          result="35% faster dispatch decisions"
          tags={["operations", "dashboards", "automation"]}
        />
      </div>
    </div>
  </section>

  <CTASection
    pill="Let's fix the biggest bottleneck first"
    title="Ready to map your operations?"
    body="Book a working session to document a core workflow and identify the quickest win for your team."
  />
</main>
