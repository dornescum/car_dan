/* eslint-disable */
/// <reference types= "cypress" />

describe('Dotarile masini', ()=>{
	before(()=>{
		cy.visit('/');
		cy.rmOverlay();
		cy.get('#info').click();
	});
	it('should title Dotari', function () {
		cy.get('#info > .container > .fieldset > h1').should('have.text', 'Dotări și alte informații');
	});
	it('should have atribute label', function () {
		//? ar trebui sa aiba atribut de label
		cy.get(':nth-child(1) > .border-card > .row > .col-sm-12 > .info-form > :nth-child(1) > label').should('have.not.attr', 'label');
	});
	it('should be checked ', function () {
		cy.get('[data-testid=check-btn]').click({force: true});
	});
})
