<script lang="ts">
  export let stats: { value: string; label: string; detail?: string }[] = [];
</script>

<div class="stats">
  {#each stats as stat}
    <div class="stat">
      <div class="value">{stat.value}</div>
      <div class="label">{stat.label}</div>
      {#if stat.detail}
        <p>{stat.detail}</p>
      {/if}
    </div>
  {/each}
</div>
