describe('Test cart page', () => {
  beforeEach(() => {
    cy.interceptRequest();
    cy.visit('/');
  });
  it('add item to cart and display them on the page', () => {
    cy.wait('@getItems').then(() => {
      cy.get('[data-test=btn-add]').first().click();
      cy.get('[data-test=cart]').contains('1');
      cy.get('[data-test=cart]').click();
      cy.get('.cart-item').should('be.visible');
      cy.get('[data-test=pay]').click();
      cy.contains('Ваш заказ оформлен успешно!');
    });
  });
});
