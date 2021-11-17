/* eslint-disable */
/// <reference types= "cypress" />

describe('hero section', ()=>{
	before(()=>{
		cy.visit('/');
	})
	it('should have an Id of Home', function () {
		cy.rmOverlay();
	});
	it('should have an image', function () {
		cy.get(['#home > .hero > .hero-image'])
	});
	it('should containt text dragoste', function () {
		cy.get('.hero__title').should('contain.text', 'dragoste');
	});
	it('should have font 48px', function () {
		cy.get('.hero__title').should('have.css', 'font-size', '48px');
	});

})
