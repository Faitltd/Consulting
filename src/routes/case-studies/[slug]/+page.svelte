<script lang="ts">
  import CTASection from '$lib/components/CTASection.svelte';
  import type { PageData } from './$types';

  export let data: PageData;
  const { study } = data;
</script>

<svelte:head>
  <title>{study.title} | Case Study | FAIT Consulting</title>
  <meta name="description" content={study.summary} />
</svelte:head>

<main class="page-shell">
  <section class="section hero">
    <div class="container hero-grid">
      <div>
        <span class="pill">{study.industry}</span>
        <h1>{study.title}</h1>
        <p class="lede">{study.summary}</p>
        <div class="hero-badge-row">
          <span class="badge">{study.year}</span>
          <span class="badge">{study.result}</span>
        </div>
      </div>
      <div class="card">
        <div class="title">Highlights</div>
        <div class="chips">
          {#each study.highlight as item}
            <span>{item}</span>
          {/each}
        </div>
        <p class="profile">{study.profile}</p>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container grid">
      <div class="card">
        <h3>Problem</h3>
        <ul>
          {#each study.problem as item}
            <li><span>•</span><span>{item}</span></li>
          {/each}
        </ul>
      </div>
      <div class="card">
        <h3>Approach</h3>
        <ul>
          {#each study.approach as item}
            <li><span>•</span><span>{item}</span></li>
          {/each}
        </ul>
      </div>
      <div class="card">
        <h3>Results</h3>
        <ul>
          {#each study.results as item}
            <li><span>•</span><span>{item}</span></li>
          {/each}
        </ul>
      </div>
    </div>
  </section>

  <CTASection pill="Want similar results?" title="Let's map your next win" body="Book a short call to identify the fastest way to remove waste or automate a key workflow." />
</main>
