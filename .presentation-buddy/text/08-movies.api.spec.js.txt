/// <reference types="cypress" />

describe('The movies.json API', () => {
	it('gets the right movie shape', () => {
		cy.request('/movies.json')
			.its('body')
			.then((movies) => {
				expect(movies).to.have.length(20);
				expect(movies[0]).to.have.property('id').and.to.be.a('number');
				expect(movies[0]).to.have.property('title').and.to.be.a('string');
				// Etc.
			});
	});
});
