describe('RANCID', () => {
  beforeEach( () => {
    
  })

  it('should have a link to all movies', () => {
    cy.visit("localhost:3000").get('div[class="movie-card"]').first().click()
    cy.contains("h2", "All Movies")
   })

  it('should load the movie details page when the user clicks on a movie card', () => {
    cy.visit("localhost:3000").get('div[class="movie-card"]').first().click().url().should("include", "/movie_details")
  })

  it('should load the movie details page when the user clicks on a different movie card', () => {
    cy.visit("localhost:3000").get('div[class="movie-card"]').last().click().url().should("include", "/movie_details")
  })

  it('should load the correct movie details page when the user clicks on a specific movie card', () => {
    cy.visit("localhost:3000").get('div[class="movie-card"]').first().click().url().should("include", "/movie_details/694919")
  })
  

  it('should try to get data for one movie', () => {

    cy.intercept("https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919", {statusCode: 201, body: {
      id: 694919,
      poster_path: "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
      backdrop_path: "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
      title: "Money Plane",
      average_rating: 6.875,
      release_date: "2020-09-29"
    }})
    cy.visit("localhost:3000").get('div[class="movie-card"]').first().click()
    // cy.get('img[class="poster"]').should().not().eq(undefined)

  })
})