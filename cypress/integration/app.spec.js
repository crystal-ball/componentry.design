/// <reference types="Cypress" />

describe('Application', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  // Test that the production build finished without errors by loading the app
  it('should have built without errors', () => {
    cy.get('[data-testid=title]').contains('Componentry')
  })
})
