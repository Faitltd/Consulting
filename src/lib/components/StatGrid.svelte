<script lang="ts">
  type Stat = { value: string; label: string; body?: string };
  export let stats: Stat[] = [];
</script>

<div class="stats">
  {#each stats as stat}
    <div class="stat">
      <div class="value">{stat.value}</div>
      <div class="label">{stat.label}</div>
      {#if stat.body}
        <p>{stat.body}</p>
      {/if}
    </div>
  {/each}
</div>
