// https://docs.cypress.io/api/introduction/api.html

describe('Test index page', () => {
  it('Having access to cart page', () => {
    cy.visit('/');
    cy.get('[data-test=cart]').should('have.attr', 'href', '/cart');
  });

  it('shows preloader', () => {
    cy.visit('/');
    cy.contains('Загрузка');
  });
  it('shows items after response', () => {
    cy.fixture('items').then((items) => {
      cy.intercept('GET', '/powerlimit/vue-pizza/pizza', items).as('getItems');
    });
    cy.visit('/');
    cy.wait('@getItems').then(() => {
      cy.contains('Чизбургер-пицца');
    });
  });
});
