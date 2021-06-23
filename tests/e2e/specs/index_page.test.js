// https://docs.cypress.io/api/introduction/api.html

describe('Test index page', () => {
  beforeEach(() => {
    cy.interceptRequest();
    cy.visit('/');
  });

  it('Having access to cart page', () => {
    cy.get('[data-test=cart]').should('have.attr', 'href', '/cart');
  });

  it('shows preloader', () => {
    cy.contains('Загрузка');
  });

  it('shows items after response', () => {
    cy.wait('@getItems').then(() => {
      cy.contains('Чизбургер-пицца');
    });
  });
});
