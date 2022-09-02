describe('RANCID', () => {
  beforeEach( () => {
    let movieData;
    cy.fixture("movies").then( (fixtureJSON) => {
      movieData = fixtureJSON
      cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies/", { statusCode: 201, body: movieData })
    })
    cy.visit('http://localhost:3000/')
  })
  
  // it('should load the fixture', () => {
  //   cy.fixture("movies").then( (movieData) => {
  //     expect(694919).to.equal(movieData.movies[0].id)
  //   })
  // })

  it('should load the home page', () => {
    cy.contains('h1', 'Rancid')
  })

  it('should load at least one movie card', () => {
    cy.visit("localhost:3000/").get('a.movie-card')
  })

  it('should show each movies title, rating, and poster', () => {

    cy.visit("localhost:3000/").get('a.movie-card')
    // cy.get('div.movie-card-container').contain("", "Money Plane") 
    
    // cy.get('h1.title').contains("lalala")
    // cy.get('h1.rating').contains("Rating: ")

    


  })


})