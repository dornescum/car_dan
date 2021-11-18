/* eslint-disable */
/// <reference types= "cypress" />

describe('Footer contact', () => {
	before(() => {
		cy.visit('/');
		cy.rmOverlay();
		cy.get('#contact').click();
	});
	it('should show button phone info after click', function () {
		cy.get('[data-testid=phone-btn]').click();
	});
	it('should close button phone info after click', function () {
		cy.get('[data-testid=phone-btn]').click();
	});

	it('should show button email info after click', function () {
		cy.get('[data-testid=button-email]').click();
	});
	it('should close  button email info after click', function () {
		cy.get('[data-testid=button-email]').click();
	});

});
