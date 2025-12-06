<script lang="ts">
  import { ArrowUpRight } from 'lucide-svelte';

  export let title: string;
  export let summary: string;
  export let href: string;
  export let result: string;
  export let category: string;
  export let tags: string[] = [];
</script>

<a class="case-card" href={href}>
  <div class="result">{result}</div>
  <h3>{title}</h3>
  <p>{summary}</p>
  <div class="meta">
    <span class="pill">{category}</span>
    <div class="tags">
      {#each tags as tag}
        <span>{tag}</span>
      {/each}
    </div>
  </div>
  <span class="cta-link">
    Read case study
    <ArrowUpRight size="16" />
  </span>
</a>
