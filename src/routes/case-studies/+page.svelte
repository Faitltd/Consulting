<script lang="ts">
  import CaseStudyCard from '$lib/components/CaseStudyCard.svelte';
  import CTASection from '$lib/components/CTASection.svelte';
  import { caseStudies } from '$lib/content/case-studies';
</script>

<svelte:head>
  <title>Case Studies | FAIT Consulting</title>
  <meta name="description" content="See how FAIT Consulting helps teams reduce waste, automate processes, and improve delivery." />
</svelte:head>

<main class="page-shell">
  <section class="section hero">
    <div class="container hero-grid">
      <div>
        <span class="pill">Case Studies</span>
        <h1>Real outcomes with systems-first consulting.</h1>
        <p class="lede">Each engagement starts with clarity, quick wins, and measurable improvements in speed, quality, and cost.</p>
      </div>
      <div class="note">
        <div class="title">Industries</div>
        <div class="chips">
          <span>Construction</span>
          <span>Field Services</span>
          <span>Professional Services</span>
        </div>
        <div class="title" style="color: var(--muted); font-weight: 600;">More sectors coming as we publish new work.</div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="case-grid">
        {#each caseStudies as study}
          <CaseStudyCard
            href={`/case-studies/${study.slug}`}
            title={study.title}
            description={study.summary}
            industry={study.industry}
            result={study.result}
            tags={study.tags}
          />
        {/each}
      </div>
    </div>
  </section>

  <CTASection />
</main>
