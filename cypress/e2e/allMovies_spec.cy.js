describe('RANCID', () => {
  beforeEach( () => {
    cy.fixture("movies").then((data) => {
      cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies/", { statusCode: 201, body: data })
    })
    cy.visit('http://localhost:3000/')
  })

  it('should load the home page', () => {
    cy.contains('h1', 'Rancid')
  })

  it('should load at least one movie card', () => {
    cy.visit("localhost:3000/").get('a.movie-card')
  })

  it('should load all the movie cards that it gets data for (in this case, 5)', () => {
    cy.visit("localhost:3000/").get('a.movie-card').should('have.length', 5)
  })

  it("should show each movie's title, rating, and poster", () => {
    cy.visit("localhost:3000/").get('a.movie-card')
    cy.get('h1.title').first().contains("Money Plane")
    cy.get('h1.rating').first().contains("Rating: 7/10")
    cy.get('div.background-style').first().should("have.css", 'background-image', `url("https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg")`)
  })
})