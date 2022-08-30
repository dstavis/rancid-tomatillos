describe('RANCID', () => {
  beforeEach( () => {
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


})