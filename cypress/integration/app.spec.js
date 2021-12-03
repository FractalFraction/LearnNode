describe("displays hello world on index page", () => {
  
  beforeEach(() => {
    cy.visit('/')
    // cy.log(Cypress.env('baseurl'))
  })
  
  it("user can see hello world text", () => {
    cy.get("h1[id='message']").should("contain", "Hello World")
  })

  it("user can see navbar links", () => {

    const linksText = ["Firestones", "Stores", "Categories", "Best Sellers", "Add", "Map"]

    cy.get("nav[data-cy='navbar']").children().each(($li, index) => {
      cy.wrap($li).should('contain', linksText[index])
    })

  })


});
