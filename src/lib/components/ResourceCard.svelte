<script lang="ts">
  export let title: string;
  export let description: string;
  export let date: string;
  export let tags: string[] = [];
  export let href: string;
</script>

<a class="resource-card" href={href}>
  <div class="meta">
    <span class="badge">{date}</span>
  </div>
  <h3>{title}</h3>
  <p>{description}</p>
  <div class="tags">
    {#each tags as tag}
      <span>{tag}</span>
    {/each}
  </div>
</a>
