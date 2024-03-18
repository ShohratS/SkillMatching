describe('Login Test', () => {
    it('should successfully log in with correct credentials', () => {
      cy.visit('https://seahorse-app-pi3di.ondigitalocean.app/login');
  
      cy.get('input[name="username"]').type('your_username');
  
      cy.get('input[name="password"]').type('your_password');
  
      cy.get('button[type="submit"]').click();

      cy.url().should('include', '/dashboard');
    });
  
    it('should display error message with incorrect credentials', () => {
      cy.visit('https://seahorse-app-pi3di.ondigitalocean.app/login');
  
      cy.get('input[name="username"]').type('incorrect_username');
  
      cy.get('input[name="password"]').type('incorrect_password');
  
      cy.get('button[type="submit"]').click();
  
      cy.contains('Invalid username or password').should('be.visible');
    });
  });
  