<script lang="ts">
  import { BookOpen, Sparkles, UserCheck, Workflow } from 'lucide-svelte';
  import CTASection from '$lib/components/CTASection.svelte';
  import StatsGrid from '$lib/components/StatsGrid.svelte';

  const principles = [
    {
      icon: BookOpen,
      title: 'Document before you automate',
      body: 'We map the process, owners, and exceptions first so automation is stable and transparent.'
    },
    {
      icon: UserCheck,
      title: 'Humans stay in the loop',
      body: 'Automation should support good judgment, not replace it. Clear checkpoints keep quality high.'
    },
    {
      icon: Sparkles,
      title: 'Ship, measure, improve',
      body: 'Quick wins first, then iterate with metrics to make the changes stick.'
    },
    {
      icon: Workflow,
      title: 'Use what you have',
      body: 'We work with your current tools when possible and only add new ones if ROI is obvious.'
    }
  ];

  const aboutStats = [
    { value: '10+ yrs', label: 'Ops + systems experience', detail: 'Across ops, dev, and program leadership.' },
    { value: '50+', label: 'Processes documented', detail: 'From trades to professional services.' },
    { value: '3 weeks', label: 'Time to first win', detail: 'We start small and ship quickly.' },
    { value: 'CO', label: 'Based in Centennial', detail: 'Working with clients across the US.' }
  ];
</script>

<svelte:head>
  <title>About | FAIT Consulting</title>
  <meta
    name="description"
    content="FAIT Consulting combines operations, systems, and engineering experience to document, automate, and optimize your business."
  />
</svelte:head>

<section class="section about-hero">
  <div class="container hero-grid">
    <div>
      <span class="pill">About</span>
      <h1>Systems-first consulting for small businesses.</h1>
      <p class="lede">
        FAIT was started to give operators a partner who can document, automate, and optimize without bloated
        software or endless strategy decks.
      </p>
      <div class="about-story">
        <p>
          With a background across operations, software, and program leadership, we bridge the gap between how
          work happens on the ground and the systems that support it. Every engagement starts with clarity: who
          owns what, how work flows today, and what "good" looks like in the future.
        </p>
      </div>
    </div>
    <div class="content-card">
      <div class="title">What to expect</div>
      <ul>
        <li>Direct access to the person doing the work.</li>
        <li>Clear scope, deliverables, and timelines.</li>
        <li>Documentation and training, not just build.</li>
        <li>Metrics to prove the change is working.</li>
      </ul>
    </div>
  </div>
</section>

<section class="section muted">
  <div class="container">
    <div class="section-header">
      <h2>Principles</h2>
      <p>How we approach every engagement.</p>
    </div>
    <div class="principles">
      {#each principles as principle}
        <div class="principle-card">
          <div class="icon">
            <svelte:component this={principle.icon} size="20" />
          </div>
          <h3>{principle.title}</h3>
          <p>{principle.body}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<section class="section">
  <div class="container two-col-tight">
    <div class="content-card">
      <h3>Why FAIT over a generic consultant</h3>
      <ul>
        <li>We build and document, not just advise.</li>
        <li>We work with your tools first to avoid disruption.</li>
        <li>We deliver quick wins before deep change.</li>
        <li>We focus on measurable ops outcomes, not vanity metrics.</li>
      </ul>
    </div>
    <div class="content-card">
      <h3>Results we target</h3>
      <StatsGrid stats={aboutStats} />
    </div>
  </div>
</section>

<CTASection
  pill="Talk through your operations"
  title="Book a 30-minute working session"
  body="We will map a core workflow together and highlight the fastest path to improvement."
/>
