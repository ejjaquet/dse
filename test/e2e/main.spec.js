// e2e/main.spec.js
describe('Main', () => {
    it('should display header text', () => {
      cy.visit('/')
      cy.contains('h1', 'Erik-Jan is supercool!')
    })
  })