describe('RANCID', () => {
  beforeEach( () => {
    cy.intercept("https://rancid-tomatillos.herokuapp.com/api/v2/movies", {statusCode: 201})
    console.log(cy.fixture("example"))
    cy.visit('localhost:3000')
  })

  it('should load the home page', () => {
    cy.contains('h1', 'Rancid')
  })
  
  // it('should load all the movie cards', () => {
  //   cy.get('div[class="movie-card]').should()
  // })

  it('should show each movies title, rating, and poster', () => {

    cy.visit("localhost:3000/").get('a.movie-card')
    cy.get('div.movie-card-container').should("", "Money Plane") 
    
    cy.get('h1.title').contains("lalala")
    cy.get('h1.rating').contains("Rating: ")

    


  })


})