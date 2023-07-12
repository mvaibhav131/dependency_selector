describe('DependencySelector', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000');
    });
  
    it('renders the selectors', () => {
      cy.findByLabelText('Country:').should('exist');
      cy.findByLabelText('State:').should('exist');
      cy.findByLabelText('City:').should('exist');
    });
  
    it('updates state options when a country is selected', () => {
      cy.findByLabelText('Country:').select('United States');
  
      cy.findByLabelText('State:').should('not.be.disabled');
    });
  
    it('updates city options when a state is selected', () => {
      cy.findByLabelText('Country:').select('United States');
      cy.findByLabelText('State:').select('California');
  
      cy.findByLabelText('City:').should('not.be.disabled');
    });
  
    it('displays the selected city', () => {
      cy.findByLabelText('Country:').select('United States');
      cy.findByLabelText('State:').select('California');
      cy.findByLabelText('City:').select('Los Angeles');
  
      cy.findByText(/Selected City:/).should(
        'have.text',
        'Selected City: Los Angeles (California, United States)'
      );
    });
  });
  