describe('Register Page Tests', () => {
    it('should navigate to the register page', () => {
    
      cy.visit('https://seahorse-app-pi3di.ondigitalocean.app/register');
  
      cy.url().should('include', '/register');
  
      cy.contains('Register').should('be.visible');
      
    });
  
    it('should register a new user successfully', () => {
      
      cy.visit('https://seahorse-app-pi3di.ondigitalocean.app/register');
  
      cy.get('input[name="username"]').type('new_user');
      cy.get('input[name="email"]').type('new_user@example.com');
      cy.get('input[name="password"]').type('new_password');
      cy.get('input[name="confirmPassword"]').type('new_password');
  
      cy.get('form').submit();
  
      cy.contains('Registration successful').should('be.visible');
    });
  });
  