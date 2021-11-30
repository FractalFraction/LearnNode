describe("displays hello world on index page", () => {
  
  beforeEach(() => {
    cy.visit("/")
  })
  
  it("user can see hello world text", () => {
    cy.get("body").should("contain", "Hello World")
  })
});
