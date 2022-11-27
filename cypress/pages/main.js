// eslint-disable-next-line import/prefer-default-export
class MainPage {
  static siteLogo() {
    return cy.get('header > a > img');
  }

  static banner() {
    return cy.get('.home-banner');
  }

  static card(cardCaption) {
    return cy.get('.card').contains(cardCaption);
  }
}

export default MainPage;
