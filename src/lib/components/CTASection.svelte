<script lang="ts">
  export let pill = "Ready to move faster?";
  export let title = 'Book a consultation';
  export let body =
    'Schedule a 30-minute call to map your operations and build a quick-win plan for automation.';
  export let primaryHref =
    'mailto:admin@itsfait.com?subject=Book%20a%20consultation&body=Hi%2C%20I%27d%20like%20to%20schedule%20a%2030-minute%20call.%20My%20availability%20is%3A';
  export let primaryLabel = 'Book Consultation';
  export let secondaryHref =
    'mailto:admin@itsfait.com?subject=Question%20about%20services&body=Hi%2C%20I%20have%20a%20question%20about%20your%20services.';
  export let secondaryLabel = 'Email the team';
</script>

<section class="cta">
  <div class="container cta-inner">
    <div class="copy">
      <span class="pill">{pill}</span>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
    <div class="actions">
      <a class="primary" href={primaryHref}>
        {primaryLabel}
      </a>
      <a class="ghost" href={secondaryHref}>{secondaryLabel}</a>
    </div>
  </div>
  <div class="glow"></div>
</section>
