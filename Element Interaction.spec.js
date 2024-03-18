describe('Element Interaction Test', () => {
    it('should interact with elements on the dashboard page', () => {
      
      cy.visit('https://seahorse-app-pi3di.ondigitalocean.app/dashboard');
  
      
      cy.get('button-selector').click();
  
      
      cy.get('element-selector').should('be.visible');
  
     
      cy.contains('text-to-verify').should('be.visible');
    });
  });
  