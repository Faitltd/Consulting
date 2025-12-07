/// <reference types="cypress" />

const consultationHref = 'mailto:admin@itsfait.com?subject=30-Minute%20Consultation%20Request';
const inquiryHref = 'mailto:admin@itsfait.com?subject=FAIT%20Consulting%20Inquiry';

describe('Consultation CTAs use mailto links', () => {
  it('header CTA uses the consultation mailto link', () => {
    cy.visit('/');
    cy.get('header .nav-cta a.primary')
      .should('contain.text', 'Book Consultation')
      .should('have.attr', 'href', consultationHref);
  });

  it('hero CTA uses mailto on home page', () => {
    cy.visit('/');
    cy.get('.hero-actions .primary')
      .should('contain.text', 'Book Consultation')
      .should('have.attr', 'href', inquiryHref);
  });

  it('contact CTAs use mailto', () => {
    cy.visit('/contact');
    cy.get('.contact-card').eq(0).should('have.attr', 'href', consultationHref);
    cy.get('.contact-card').eq(1).should('have.attr', 'href', consultationHref);
  });

  it('footer CTA uses mailto', () => {
    cy.visit('/');
    cy.get('footer .inline-link')
      .should('contain.text', 'Book a consultation')
      .should('have.attr', 'href', consultationHref);
  });
});
