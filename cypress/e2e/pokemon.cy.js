describe('Pokemon Details Page', () => {
    beforeEach(() => {
        cy.intercept('GET', '**/pokemon/?offset=0&limit=12', { fixture: 'pokemons-list/initial-pokemons.json' }).as('getPokemons');
        cy.intercept('GET', '**/pokemon/1', { fixture: 'pokemon-details/bulbasaur.json' }).as('getBulbasaurDetails');
        cy.intercept('GET', '**/pokemon/4', { fixture: 'pokemon-details/charmander.json' }).as('getCharmanderDetails');
        cy.intercept('GET', '**/pokemon/10', { fixture: 'pokemon-details/caterpie.json' }).as('getCaterpieDetails');
        
        cy.visit('/');
        cy.wait('@getPokemons');
        cy.wait('@getBulbasaurDetails');
        cy.wait('@getCharmanderDetails');
        cy.wait('@getCaterpieDetails');

        cy.intercept('GET', '**/pokemon-species/10', { fixture: 'species/caterpieSpecies.json' }).as('getCaterpieSpeciesDetails');
        cy.intercept('GET', '**/ability/19', { fixture: 'abilities/shieldDust.json' }).as('getShieldDustDetails');
        cy.intercept('GET', '**/ability/50', { fixture: 'abilities/runAway.json' }).as('getRunAwayDetails');
        cy.intercept('GET', '**/move/33', { fixture: 'moves/tackle.json' }).as('getTackleDetails');
        cy.intercept('GET', '**/move/81', { fixture: 'moves/stringShot.json' }).as('getStringShotDetails');
        cy.intercept('GET', '**/move/173', { fixture: 'moves/snore.json' }).as('getSnoreDetails');
        cy.intercept('GET', '**/move/450', { fixture: 'moves/bugBite.json' }).as('getBugBiteDetails');
        cy.intercept('GET', '**/move/527', { fixture: 'moves/electroweb.json' }).as('getElectrowebDetails');

        cy.getDataTest('pokemon-card').contains('caterpie').click();
        cy.wait('@getCaterpieSpeciesDetails');
        cy.wait('@getShieldDustDetails');
        cy.wait('@getRunAwayDetails');
        cy.wait('@getTackleDetails');
        cy.wait('@getStringShotDetails');
        cy.wait('@getSnoreDetails');
        cy.wait('@getBugBiteDetails');
        cy.wait('@getElectrowebDetails');
    });

    it('Should show Pokemon Details', () => {
        cy.url().should('include', '/pokemon/10');
        cy.getDataTest('pokemon-name').should('contain.text', 'caterpie');
        cy.getDataTest('pokemon-id').should('contain.text', '#10');
        cy.getDataTest('pokemon-type').should('have.length.at.least', 1).and('contain.text', 'bug');
        cy.getDataTest('pokedex-entry').should('contain.text', 'Its short feet are tipped with suction');
        
        cy.getDataTest('pokemon-data').within(() => {
            cy.get('li').should('have.length', 4);
        });
        cy.getDataTest('pokemon-stat').should('have.length', 6);
        cy.getDataTest('pokemon-ability').should('have.length.at.least', 1);
        cy.getDataTest('pokemon-move').should('have.length.at.least', 1);

        cy.getDataTest('back-button').click();
        cy.wait('@getPokemons');
        cy.getDataTest('pokedex-entry').should('not.exist');
        cy.getDataTest('pokemon-card').should('have.length', 3).and('contain.text', 'bulbasaur');
    });
});
