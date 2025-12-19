<script lang="ts">
  import { CalendarDays, Mail, MapPin, MessageSquare, PhoneCall } from 'lucide-svelte';
  import { page } from '$app/stores';
  import CTASection from '$lib/components/CTASection.svelte';
</script>

<svelte:head>
  <title>Contact | FAIT Consulting</title>
  <meta name="description" content="Contact FAIT Consulting to discuss operations, automation, and waste reduction." />
</svelte:head>

<section class="section contact-hero" id="book">
  <div class="container hero-grid">
    <div>
      <span class="pill">Contact</span>
      <h1>Tell us about your operations.</h1>
      <p class="lede">
        Send a quick note and we will set up a working session.
      </p>

      {#if $page.url.searchParams.get('success') === '1'}
        <div class="contact-success">Thanks! Your message is on its way.</div>
      {/if}

      <div class="contact-cards">
        <a class="contact-card" href="mailto:admin@itsfait.com?subject=30-Minute%20Consultation%20Request">
          <Mail size="18" />
          <div>
            <div class="label">Email</div>
            <div class="value">admin@itsfait.com</div>
          </div>
        </a>
        <a class="contact-card" href="mailto:admin@itsfait.com?subject=30-Minute%20Consultation%20Request">
          <CalendarDays size="18" />
          <div>
            <div class="label">Schedule a call</div>
            <div class="value">30-minute consultation</div>
          </div>
        </a>
        <div class="contact-card static">
          <MapPin size="18" />
          <div>
            <div class="label">Location</div>
            <div class="value">Centennial, CO (working nationwide)</div>
          </div>
        </div>
      </div>

      <form
        class="contact-form"
        method="POST"
        action="https://formspree.io/f/mvzpzbrv"
      >
        <input type="text" name="name" placeholder="Your name" autocomplete="name" required />
        <input type="email" name="email" placeholder="Work email" autocomplete="email" required />
        <input type="text" name="company" placeholder="Company (optional)" autocomplete="organization" />
        <textarea name="message" rows="5" placeholder="What can we help with?" required></textarea>
        <input type="text" name="_gotcha" tabindex="-1" autocomplete="off" class="hidden" />
        <input type="hidden" name="_subject" value="FAIT Consulting contact request" />
        <input type="hidden" name="_next" value="https://consulting.itsfait.com/contact?success=1" />
        <button class="primary" type="submit">Send message</button>
      </form>
    </div>

    <div class="content-card">
      <h3>What to expect</h3>
      <ol>
        <li>A short discovery call to align on goals and current tools.</li>
        <li>A quick audit of your workflows, pain points, and handoffs.</li>
        <li>A proposal with quick wins and longer-term recommendations.</li>
      </ol>
      <div class="contact-note">
        <PhoneCall size="16" />
        We keep calls focused and actionable. No sales scripts.
      </div>
    </div>
  </div>
</section>

<section class="section muted">
  <div class="container">
    <div class="section-header">
      <h2>Common topics</h2>
      <p>Show up with a messy workflow or half-baked process. We will help you organize it.</p>
    </div>
    <div class="topics">
      <div class="topic-card">
        <MessageSquare size="16" />
        <span>Operational bottlenecks slowing down delivery or billing.</span>
      </div>
      <div class="topic-card">
        <MessageSquare size="16" />
        <span>Where to start with automation across your existing tools.</span>
      </div>
      <div class="topic-card">
        <MessageSquare size="16" />
        <span>How to document processes so new hires can ramp quickly.</span>
      </div>
      <div class="topic-card">
        <MessageSquare size="16" />
        <span>Building dashboards for throughput, cycle time, and quality.</span>
      </div>
    </div>
  </div>
</section>

<CTASection />
