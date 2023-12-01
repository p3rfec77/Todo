describe("App e2e", () => {
  it("should have todo form", () => {
    cy.intercept(
      "https://jsonplaceholder.typicode.com/users/1/todos?_limit=5"
    ).as("getTodos");
    cy.visit("/");
    cy.wait("@getTodos");
    cy.get("input[type='text']").should("have.value", "");
    cy.get("ul").should("contain.html", "li");
  });

  it("should add new Todo", () => {
    cy.intercept(
      "https://jsonplaceholder.typicode.com/users/1/todos?_limit=5"
    ).as("getTodos");
    cy.visit("/");
    cy.wait("@getTodos");

    cy.get("input[type='text']")
      .type("Learn React")
      .should("have.value", "Learn React")
      .type("{enter}")
      .should("have.value", "");

    cy.get("li:last-of-type [data-test-id='todo-item-text']").should(
      "have.text",
      "Learn React"
    );
  });

  it("should remove when click remove button", () => {
    cy.intercept(
      "https://jsonplaceholder.typicode.com/users/1/todos?_limit=5"
    ).as("getTodos");
    cy.visit("/");
    cy.wait("@getTodos");

    cy.get("li").should("have.length", 5);
    cy.get("li:last-of-type [data-test-id='todo-item-remove']").click();
    cy.get("li").should("have.length", 4);
  });

  it("should checked when click check button", () => {
    cy.intercept(
      "https://jsonplaceholder.typicode.com/users/1/todos?_limit=5"
    ).as("getTodos");
    cy.visit("/");
    cy.wait("@getTodos");

    cy.get("li:last-of-type label input").should("not.be.checked");
    cy.get("li:last-of-type label").click();
    cy.get("li:last-of-type label input").should("be.checked");
  });
});
