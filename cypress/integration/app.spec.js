describe("displays hello world on index page", () => {
  
  beforeEach(() => {
    cy.visit('/')
    // cy.log(Cypress.env('baseurl'))
  })
  
  it("user can see hello world text", () => {
    cy.get("h1[id='message']").should("contain", "Hello World")
  })
});
