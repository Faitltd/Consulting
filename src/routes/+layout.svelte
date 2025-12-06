<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import '$lib/styles/global.css';
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
    rel="stylesheet"
  />
  <link rel="icon" href="/favicon.svg" />
  <meta name="description" content="FAIT Consulting helps small businesses document processes, automate workflows, and eliminate waste to unlock capacity." />
  <script defer data-domain="consulting.itsfait.com" src="https://plausible.io/js/script.js"></script>
</svelte:head>

<Header />
<slot />
<Footer />
