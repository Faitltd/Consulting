<script lang="ts">
  import { ChevronDown, ExternalLink, Menu, X } from 'lucide-svelte';
  import { afterNavigate } from '$app/navigation';
  import { services } from '$lib/content/services';

  let mobileOpen = false;
  let servicesOpen = false;

  const navLinks = [
    { href: '/case-studies', label: 'Case Studies' },
    { href: '/resources', label: 'Resources' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' }
  ];

  const toggleServices = () => (servicesOpen = !servicesOpen);
  const closeServices = () => (servicesOpen = false);

  afterNavigate(() => {
    servicesOpen = false;
    mobileOpen = false;
  });
</script>

<header class="header">
  <div class="container header-inner">
    <a class="logo" href="/">FAIT Consulting</a>
    <nav class="nav">
      <ul class="nav-links">
        <li class="has-children">
          <div class="services-wrapper" role="group" aria-label="Services menu">
            <button
              type="button"
              class="parent-link"
              aria-haspopup="true"
              aria-expanded={servicesOpen}
              on:click={toggleServices}
            >
              <span>Services</span>
              <ChevronDown size="16" />
            </button>
            <div class="dropdown" class:open={servicesOpen}>
              {#each services as service}
                <a href={`/services/${service.slug}`} on:click={closeServices}>{service.name}</a>
              {/each}
              <a class="all-services" href="/services" on:click={closeServices}>View all services</a>
            </div>
          </div>
        </li>
        {#each navLinks as link}
          <li>
            <a href={link.href}><span>{link.label}</span></a>
          </li>
        {/each}
      </ul>

      <div class="nav-cta">
        <a class="ghost-link" href="/case-studies">Results</a>
        <a class="primary" href="mailto:admin@itsfait.com?subject=FAIT%20Consulting%20Inquiry">
          Book Consultation
          <ExternalLink size="16" />
        </a>
      </div>

      <button class="menu-button" aria-label="Toggle menu" on:click={() => (mobileOpen = !mobileOpen)}>
        {#if mobileOpen}
          <X size="22" />
        {:else}
          <Menu size="22" />
        {/if}
      </button>
    </nav>
  </div>

  {#if mobileOpen}
    <div class="mobile-menu">
      <div class="mobile-item">
        <a href="/services">Services</a>
        <div class="mobile-children">
          {#each services as service}
            <a href={`/services/${service.slug}`}>{service.name}</a>
          {/each}
        </div>
      </div>

      {#each navLinks as link}
        <div class="mobile-item">
          <a href={link.href}>{link.label}</a>
        </div>
      {/each}

      <a class="ghost-link" href="/case-studies">Results</a>
      <a class="primary full" href="mailto:admin@itsfait.com?subject=FAIT%20Consulting%20Inquiry">
        Book Consultation
      </a>
    </div>
  {/if}
</header>
