describe('RANCID', () => {
  beforeEach( () => {
    cy.intercept("https://rancid-tomatillos.herokuapp.com/api/v2/movies", {statusCode: 201, body: {
      id: 694919,
      poster_path: "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
      backdrop_path: "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
      title: "Money Plane",
      average_rating: 6.875,
      release_date: "2020-09-29"
    }})
    cy.visit('localhost:3000')
  })

  it('should load the home page', () => {
    cy.contains('h1', 'Rancid')
  })
  
  // it('should load all the movie cards', () => {
  //   cy.get('div[class="movie-card]').should()
  // })

  it('should try to get movies data', () => {
    cy.intercept("https://rancid-tomatillos.herokuapp.com/api/v2/movies", {statusCode: 201})
  })

  it('should try to get movies data', () => {
  })


})