<script lang="ts">
  import * as icons from 'lucide-svelte';

  export let name: string;
  export let summary: string;
  export let href: string;
  export let icon = 'Workflow';

  const Icon = (icons as Record<string, typeof icons.Workflow>)[icon] || icons.Workflow;
</script>

<a class="service-card" href={href}>
  <div class="icon-wrapper">
    <svelte:component this={Icon} width="40" height="40" stroke-width="1.5" />
  </div>
  <h3>{name}</h3>
  <p>{summary}</p>
  <span class="learn-more">Learn more -></span>
</a>
