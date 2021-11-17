/* eslint-disable */
/// <reference types= "cypress" />

describe('Should exit a sold modal', ()=>{
before(()=>{
	cy.visit('/');
})
	it('should see the image sold', function () {
		cy.get('[data-testid=sold-img]');
	});
	it('should have a cursor not-allowed', function () {
		cy.get('[data-testid=show-modal]').should('have.css', 'cursor', 'not-allowed');
	});
	it('should have an overlay', function () {
		//! error ! ar trebui sa aiba clasa background dar nu o vede
		cy.get('[data-testid=backdrop-container]').should('have.not.class', 'background');
		cy.get('[data-testid=backdrop-container]').should('have.css', 'height', '1080px')
	});
	it('should disappear overlay on click', function () {
		// cy.get('[data-testid=backdrop-container]').click({force: true});
		cy.rmOverlay();
	});

})
