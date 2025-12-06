<script lang="ts">
  import { CircleCheck, Rocket } from 'lucide-svelte';
  import CTASection from '$lib/components/CTASection.svelte';
  import type { PageData } from './$types';

  export let data: PageData;
  const { service } = data;
</script>

<svelte:head>
  <title>{service.name} | Services | FAIT Consulting</title>
  <meta name="description" content={service.summary} />
</svelte:head>

<main class="page-shell">
  <section class="section hero service-hero">
    <div class="container hero-grid">
      <div>
        <span class="pill">{service.name}</span>
        <h1>{service.heroTitle}</h1>
        <p class="lede">{service.heroLead}</p>
        <div class="hero-actions">
          <a class="primary" href="mailto:admin@itsfait.com" target="_blank" rel="noreferrer">Book Consultation</a>
          <a class="ghost" href="mailto:admin@itsfait.com">Email the team</a>
        </div>
      </div>

      <div class="summary-card">
        <div class="summary-title">{service.summaryTitle}</div>
        <ul>
          {#each service.summaryPoints as point}
            <li>
              <CircleCheck size={18} />
              <span>{point}</span>
            </li>
          {/each}
        </ul>
        <div class="tag">
          <Rocket size={14} />
          {service.tag}
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container two-col">
      <div class="card">
        <h3>Who this is for</h3>
        <ul>
          {#each service.who as item}
            <li><CircleCheck size={16} /> <span>{item}</span></li>
          {/each}
        </ul>
      </div>
      <div class="card">
        <h3>Typical problems</h3>
        <ul>
          {#each service.problems as item}
            <li><CircleCheck size={16} /> <span>{item}</span></li>
          {/each}
        </ul>
      </div>
    </div>
  </section>

  <section class="section muted-section">
    <div class="container two-col">
      <div class="card">
        <h3>Deliverables</h3>
        <ul>
          {#each service.deliverables as item}
            <li><CircleCheck size={16} /> <span>{item}</span></li>
          {/each}
        </ul>
      </div>
      <div class="card">
        <h3>Example outcomes</h3>
        <ul>
          {#each service.outcomes as item}
            <li><CircleCheck size={16} /> <span>{item}</span></li>
          {/each}
        </ul>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="section-header">
        <h2>FAQ</h2>
        <p>Answers to the common questions teams ask before we start.</p>
      </div>
      <div class="faq-grid">
        {#each service.faq as item}
          <div class="faq-card">
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <CTASection
    pill="Ready to move faster?"
    title="Book a consultation"
    body="Schedule a 30-minute call to map your operations and build a quick-win plan for automation."
  />
</main>
