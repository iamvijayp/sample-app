describe('Login Page', () => {
  it('logs in successfully', () => {
    cy.visit('http://localhost:3000/login');
    cy.get('input[name="username"]').type('user');
    cy.get('input[name="password"]').type('pass');
    cy.get('button[type="submit"]').click();
    cy.contains('Login successful');
  });

  it('fails with wrong credentials', () => {
    cy.visit('http://localhost:3000/login');
    cy.get('input[name="username"]').type('wrong');
    cy.get('input[name="password"]').type('wrong');
    cy.get('button[type="submit"]').click();
    cy.contains('Login failed');
  });
});
