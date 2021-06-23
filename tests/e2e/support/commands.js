Cypress.Commands.add('interceptRequest', () => {
  cy.fixture('items').then((items) => {
    cy.intercept('GET', '/powerlimit/vue-pizza/pizza', items).as('getItems');
  });
});
