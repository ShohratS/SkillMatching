describe('Network Request Test', () => {
    it('should intercept and verify network requests', () => {
      
      cy.intercept('POST', '**/api/endpoint').as('postRequest');
      
      cy.get('button').click();
      
      cy.wait('@postRequest').then((interception) => {
        
        expect(interception.response.statusCode).to.equal(200);
  
        expect(interception.response.body).to.have.property('success', true);
      });
    });
  });
  