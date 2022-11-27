import MainPage from '../../pages/main';

const sectionCards = [
  'Elements',
  'Forms',
  'Alerts, Frame & Windows',
  'Widgets',
  'Interactions',
  'Book Store Application'
];

describe('Main Page', () => {
  it('should display main page elements', () => {
    cy.visit('/');
    MainPage.siteLogo().should('be.visible');
    sectionCards.map((cardCaption) => MainPage.card(cardCaption).should('be.visible'));
  });

  it('section cards should lead to the appropriate pages', () => {
    cy.visit('/');
    sectionCards.map((cardCaption) => {
      cy.visit('/');
      MainPage.card(cardCaption).click();
      return true;
    });
  });
});
