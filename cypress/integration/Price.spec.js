/* eslint-disable */
/// <reference types= "cypress" />

describe('Price', ()=> {
	before(() => {
		cy.visit('/');
		cy.rmOverlay();
		cy.get('[data-testid=price]').click();
	});
	it('should show the logo and dowload info', function () {
		// cy.get('[data-testid=logo]').click();
		cy.get('[data-testid=logo]').should('have.attr', 'href');
	});
	it('should have a price available', function () {
		cy.get('#final-price').should('have.text', 'Preț: 2100 Euro (negociabil)');
		cy.get('#final-price').should("contain", ' 2100');
	});

});
