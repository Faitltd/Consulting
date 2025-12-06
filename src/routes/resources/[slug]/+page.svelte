<script lang="ts">
  import CTASection from '$lib/components/CTASection.svelte';
  import type { PageData } from './$types';

  export let data: PageData;
  const { resource } = data;
</script>

<svelte:head>
  <title>{resource.title} | Resources | FAIT Consulting</title>
  <meta name="description" content={resource.summary} />
</svelte:head>

<main class="page-shell">
  <section class="section hero">
    <div class="container hero-grid">
      <div>
        <span class="pill">{resource.date}</span>
        <h1>{resource.title}</h1>
        <p class="lede">{resource.summary}</p>
        <div class="tags">
          {#each resource.tags as tag}
            <span>{tag}</span>
          {/each}
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container sections">
      {#each resource.sections as section}
        <div class="section-card">
          <h3>{section.title}</h3>
          {#each section.bullets as bullet}
            <p>{bullet}</p>
          {/each}
        </div>
      {/each}
    </div>
  </section>

  <CTASection pill={resource.ctaPill} title={resource.ctaTitle} body={resource.ctaBody} />
</main>
