/* eslint-disable */
/// <reference types= "cypress" />

describe('Galerie', ()=> {
	before(() => {
		cy.visit('/');
		cy.rmOverlay();
		cy.get('#galerie').click();
	});
	it('should have class fieldset', function () {
		cy.get('#galerie > :nth-child(1) > .fieldset').should('have.class', 'fieldset');
	});
	it('should have a photo', function () {
		cy.get(':nth-child(1) > .photo > img');
		cy.get('[data-testid=exterior]');
	});
	// todo cum fac sa aflu toata marimea

});
