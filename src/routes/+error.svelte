<script lang="ts">
  export let error: Error & { status?: number };
  export let status: number;
</script>

<section class="section not-found">
  <div class="container">
    <span class="pill">{status === 404 ? '404' : 'Error'}</span>
    <h1>{status === 404 ? 'Page not found.' : 'Something went wrong.'}</h1>
    <p>{error?.message ?? 'An unexpected error occurred.'}</p>
    <div class="hero-actions" style="justify-content:center">
      <a class="primary" href="/">Back to home</a>
      <a class="ghost" href="/contact">Contact us</a>
    </div>
  </div>
</section>
