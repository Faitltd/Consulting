/// <reference types="cypress" />

describe('Site navigation and pages', () => {
  it('loads home and navigates to a service and case study page', () => {
    cy.visit('/');
    cy.contains('h1', 'Transform your business').should('be.visible');

    cy.get('a.service-card').first().click();
    cy.url().should('include', '/services/');
    cy.get('h1').should('exist');
    cy.contains('Book Consultation').should('be.visible');

    cy.visit('/case-studies');
    cy.get('.case-card').first().within(() => {
      cy.contains('Read case study').should('exist');
    });
    cy.get('.case-card').first().click();
    cy.url().should('include', '/case-studies/');
    cy.get('h1').should('exist');
  });
});
