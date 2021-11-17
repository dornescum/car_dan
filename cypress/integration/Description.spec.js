/* eslint-disable */
/// <reference types= "cypress" />

describe('', ()=>{
	before(()=>{
		cy.visit('/');
		cy.rmOverlay();

	});

	it('should contain text Daniel', function () {
		cy.get('#description').should('contain.text', 'Daniel');
	});
	it('should have bold text ', function () {
		cy.get('[data-testid=bold-font]').should('have.css', 'font-weight', '700');
	});
	it('should have font size 16 ', function () {
		cy.get('#description').should('have.css', 'font-size', '16px');
	});
})
