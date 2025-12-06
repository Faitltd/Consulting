<script lang="ts">
  import ResourceCard from '$lib/components/ResourceCard.svelte';
  import { resources } from '$lib/content/resources';
</script>

<svelte:head>
  <title>Resources | FAIT Consulting</title>
  <meta name="description" content="Articles and checklists on operations, automation, and process design." />
</svelte:head>

<main class="page-shell">
  <section class="section hero">
    <div class="container hero-grid">
      <div>
        <span class="pill">Resources</span>
        <h1>Playbooks, checklists, and frameworks.</h1>
        <p class="lede">Practical guidance for documenting, automating, and optimizing your operation.</p>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="resource-grid">
        {#each resources as resource}
          <ResourceCard
            href={`/resources/${resource.slug}`}
            title={resource.title}
            description={resource.summary}
            date={resource.date}
            tags={resource.tags}
          />
        {/each}
      </div>
    </div>
  </section>
</main>
