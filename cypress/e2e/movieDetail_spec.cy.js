// look into fixtures; but sample data in a fixture and import it into the test so that the intercept can use it

const exampleMovieJSON = {
  "movie": {
  "id": 694919,
  "title": "Money Plane",
  "poster_path": "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
  "backdrop_path": "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
  "release_date": "2020-09-29",
  "overview": "A professional thief with $40 million in debt and his family's life on the line must commit one final heist - rob a futuristic airborne casino filled with the world's most dangerous criminals.",
  "genres": [
  "Action"
  ],
  "budget": 0,
  "revenue": 0,
  "runtime": 82,
  "tagline": "lalala",
  "average_rating": 6.875
  }
}

describe('RANCID', () => {
  beforeEach( () => {
    cy.intercept("https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919", {statusCode: 201, body: exampleMovieJSON
  })
  })

  it('should have a link to all movies', () => {
    cy.visit("localhost:3000").get('a.movie-card').first().click()
    cy.contains("a", "All Movies")
  })

  it('should load the movie details page when the user clicks on a movie card', () => {
    cy.visit("localhost:3000").get('a[class="movie-card"]').first().click().url().should("include", "/movie_details")
  })

  it('should load the movie details page when the user clicks on a different movie card', () => {
    cy.visit("localhost:3000").get('a[class="movie-card"]').last().click().url().should("include", "/movie_details")
  })

  it('should load the correct movie details page when the user clicks on a specific movie card', () => {
    cy.visit("localhost:3000").get('a[class="movie-card"]').first().click().url().should("include", "/movie_details/694919")
  })
  

  it('should try to get data for one movie', () => {
    cy.visit("localhost:3000/").get('a.movie-card').first().click()
    cy.get('div.movie-title').contains("h1", "Money Plane")
    cy.get('div.movie-title').contains("small", "2020-09-29")
    cy.get('div.movie-rating').contains("span", 6.9)
    cy.get('img.poster').should("have.attr", 'src').should('include', "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg") 
    cy.get('img.backdrop').should("have.attr", 'src').should('include', "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg") 
    cy.get('h3.tagline').contains("lalala")
    cy.get('h4.overview').contains("A professional thief with $40 million in debt and his family's life on the line must commit one final heist - rob a futuristic airborne casino filled with the world's most dangerous criminals.")
    cy.get('div.genre-bubbles').contains("Action")
    cy.get('div.left-column').contains('p', '$0')
  })

  it('should be able to return to all movies from movie details', () => {
    cy.visit("localhost:3000/").get('a.movie-card').first().click()
    cy.get('a.all-movies').click().url().should("not.include", "/movie_details")
  })
})