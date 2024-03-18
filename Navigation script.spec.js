describe('Navigation Test', () => {
    it('should navigate to the dashboard page successfully', () => {
      
      cy.visit('https://seahorse-app-pi3di.ondigitalocean.app/dashboard');
  
      
      cy.url().should('include', '/dashboard');
  
      
      cy.contains('Dashboard').should('be.visible');
      
    });
  });
  