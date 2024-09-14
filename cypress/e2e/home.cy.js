describe('Home Page', () => {
    beforeEach(() => {
        cy.intercept('GET', '**/pokemon/?offset=0&limit=12', { fixture: 'pokemons-list/initial-pokemons.json' }).as('getPokemons');
        cy.intercept('GET', '**/pokemon/?offset=0&limit=10000', { fixture: 'pokemons-list/all-pokemons.json' }).as('getAllPokemons');
        cy.intercept('GET', '**/pokemon/1', { fixture: 'pokemon-details/bulbasaur.json' }).as('getBulbasaurDetails');
        cy.intercept('GET', '**/pokemon/4', { fixture: 'pokemon-details/charmander.json' }).as('getCharmanderDetails');
        cy.intercept('GET', '**/pokemon/10', { fixture: 'pokemon-details/caterpie.json' }).as('getCaterpieDetails');
        cy.intercept('GET', '**/pokemon/15', { fixture: 'pokemon-details/beedrill.json' }).as('getBeedrillDetails');
        cy.intercept('GET', '**/pokemon/16', { fixture: 'pokemon-details/pidgey.json' }).as('getPidgeyDetails');
        cy.intercept('GET', '**/pokemon/384', { fixture: 'pokemon-details/rayquaza.json' }).as('getRayquazaDetails');

        cy.visit('/');
        cy.wait('@getPokemons');
    });

    it('Should load more pokemons', () => {
        cy.getDataTest('pokemon-card').should('have.length', 3);
        cy.getDataTest('pokemon-card').should('not.contain.text', 'pidgey');

        cy.intercept('GET', '**/pokemon?offset=12&limit=12', { fixture: 'pokemons-list/next-pokemons.json' }).as('getMorePokemons');

        cy.getDataTest('load-more-button').click();
        cy.wait('@getMorePokemons');

        cy.getDataTest('pokemon-card').should('have.length', 5);
        cy.getDataTest('pokemon-card').should('contain.text', 'pidgey');
    });

    it('Should search and display the correct Pokémon', () => {
        cy.getDataTest('input-search').type('rayquaza');
        cy.wait('@getAllPokemons');

        cy.getDataTest('pokemon-card').should('contain.text', 'rayquaza');
        cy.getDataTest('pokemon-card').should('not.contain.text', 'bulbasaur');
        cy.getDataTest('load-more-button').should('not.exist');

        cy.getDataTest('input-search').clear();
        cy.getDataTest('pokemon-card').should('have.length', 3);
        cy.getDataTest('pokemon-card').first().should('contain.text', 'bulbasaur');
        cy.getDataTest('load-more-button').should('exist');

        cy.getDataTest('input-search').type('noExistingPokemon');
        cy.getDataTest('no-pokemons-found').should('be.visible').and('contain.text', 'No pokémons found');
        cy.getDataTest('pokemon-card').should('have.length', 0);
        cy.getDataTest('load-more-button').should('not.exist');
    });

    it('Should display filtered Pokémons by type', () => {
        cy.getDataTest('filter-button').click();
        cy.getDataTest('type-button-flying').click();
        cy.wait('@getAllPokemons')
        cy.wait('@getRayquazaDetails');
        cy.wait('@getPidgeyDetails');

        cy.getDataTest('pokemon-card').should('have.length', 2);
        cy.getDataTest('pokemon-card').each(($card) => {
            cy.wrap($card).should('contain.text', 'flying');
        });

        cy.getDataTest('load-more-button').should('not.exist');

        cy.getDataTest('filter-button').click();
        cy.getDataTest('type-button-bug').click();
        cy.wait('@getCaterpieDetails');
        cy.wait('@getBeedrillDetails');

        cy.getDataTest('pokemon-card').should('have.length', 2);
        cy.getDataTest('pokemon-card').each(($card) => {
            cy.wrap($card).should('contain.text', 'bug');
        });

        cy.getDataTest('home-title').click();
        cy.getDataTest('pokemon-card').should('have.length', 3);
        cy.getDataTest('pokemon-card').should('contain.text', 'bulbasaur');
        cy.getDataTest('load-more-button').should('exist');
    });

    it('Should toggle between light and dark theme', () => {
        cy.getDataTest('theme-toggler').as('themeToggler');

        cy.getDataTest('home-main').should('have.css', 'background-color', 'rgb(255, 255, 255)');
        cy.getDataTest('home-title').should('have.css', 'color', 'rgb(15, 15, 15)');

        cy.get('@themeToggler').click();
        cy.reload();
        cy.getDataTest('home-main').should('have.css', 'background-color', 'rgb(36, 36, 36)');
        cy.getDataTest('home-title').should('have.css', 'color', 'rgb(238, 238, 238)');

        cy.get('@themeToggler').click();
        cy.getDataTest('home-main').should('have.css', 'background-color', 'rgb(255, 255, 255)');
        cy.getDataTest('home-title').should('have.css', 'color', 'rgb(15, 15, 15)');
    });
});
