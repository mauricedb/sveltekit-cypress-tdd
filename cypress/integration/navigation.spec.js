/// <reference types="cypress" />

describe('Navigation', () => {
	beforeEach(() => {
		cy.visit('/');
	});

	it('can navigate to the movies page', () => {
		cy.get('nav').contains('a', 'Movies').click();
		cy.location('pathname').should('eq', '/movies');
		cy.title().should('eq', 'Movies');
		cy.contains('h5', 'The Shawshank Redemption').should('exist');
	});

	it('can navigate to the about page', () => {
		cy.get('nav').contains('a', 'About').click();
		cy.location('pathname').should('eq', '/about');
		cy.title().should('eq', 'About');
		cy.contains('h2', 'Maurice de Beijer').should('exist');
	});
});
