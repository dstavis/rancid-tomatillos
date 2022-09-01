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
  "tagline": "",
  "average_rating": 6.875
  }
}

describe('RANCID', () => {
  beforeEach( () => {
    cy.intercept("https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919", {statusCode: 201, body: exampleMovieJSON
  })
  })

  it('should have a link to all movies', () => {
    cy.visit("localhost:3000").get('div.movie-card').first().click()
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

    cy.visit("localhost:3000/movies/").get('div.movie-card').first().click()
    cy.get('div.movie-title').contains("h1", "Money Plane")

  })
})