<script lang="ts">
  import { CalendarDays, Mail, MapPin, MessageSquare, PhoneCall } from 'lucide-svelte';
  import CTASection from '$lib/components/CTASection.svelte';
</script>

<svelte:head>
  <title>Contact | FAIT Consulting</title>
  <meta name="description" content="Contact FAIT Consulting to discuss operations, automation, and waste reduction." />
</svelte:head>

<section class="section contact-hero">
  <div class="container hero-grid">
    <div>
      <span class="pill">Contact</span>
      <h1>Tell us about your operations.</h1>
      <p class="lede">
        We do not use a contact form or CRM. Reach out directly and we will set up a working session.
      </p>

      <div class="contact-cards">
        <a class="contact-card" href="mailto:admin@itsfait.com">
          <Mail size="18" />
          <div>
            <div class="label">Email</div>
            <div class="value">admin@itsfait.com</div>
          </div>
        </a>
        <a class="contact-card" href="mailto:admin@itsfait.com" target="_blank" rel="noreferrer">
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
