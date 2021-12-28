/// <reference types="cypress" />

describe('The movies page', () => {
	beforeEach(() => {
		cy.visit('/');
		cy.intercept('/movies.json', { fixture: 'movies.json' }).as('movies.json');
		cy.wait(1000);
		cy.get('nav').contains('a', 'Movies').click();
	});

	it('shows the movies', () => {
		cy.wait('@movies.json').then(({ response }) => {
			const movies = response.body;

			movies.forEach((movie, index) => {
				cy.get('.card')
					.eq(index)
					.within(() => {
						cy.get('.card-title').should('have.text', movie.title);
						cy.get('.card-text').should('have.text', movie.overview);
					});
			});
		});
	});
});
