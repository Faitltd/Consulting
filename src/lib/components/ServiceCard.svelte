<script lang="ts">
  import type { ComponentType } from 'svelte';
  import { Workflow } from 'lucide-svelte';

  export let title: string;
  export let description: string;
  export let href: string;
  export let icon: ComponentType = Workflow;
</script>

<a class="service-card" href={href} aria-label={`Learn more about ${title}`}>
  <div class="icon-wrapper">
    <svelte:component this={icon} width="40" height="40" stroke-width="1.5" />
  </div>
  <h3>{title}</h3>
  <p>{description}</p>
  <span class="learn-more">Learn more about {title} -></span>
</a>
