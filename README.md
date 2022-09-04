# Rancid Tomatillos

## Abstract
The objective of this project was to create a multi-page UX using Router in React, and then test our React components and asynchronous JS, leveraging Cypress.

This application simulates an experience similar to IMDB, Netflix, and Rotten Tomatoes.

This project began design with 2 different endpoints from herokuapp.com.

Those endpoints can be found here:
Get all movies - [here](https://rancid-tomatillos.herokuapp.com/api/v2/movies)
Get a single movie - [here](https://rancid-tomatillos.herokuapp.com/api/v2/movies/:movie_id)

We created this [API](https://github.com/edjrodriguez/rancid-custom-api) to store the details for each of the 40 movies in one place which was required to allow the user to filter movies by genre with respect to the application architecture.

If you would like to view the deployed version of this application follow this [link](https://dstavis.github.io/rancid-tomatillos).  This link leads to a version of the application without our custom API and as a result lacks the genre filter feature.  GitHub pages only supports static front-ends. 

## Technologies Used
- React/JSX
- Express.js (custom API) 
- Javascript
- HTML/CSS
- Cypress
- fetch API to retrieve and add data from a custom API
- Webpack
- GitHub & Git

## Illustrated Design Mock-up
<img width="300" alt="Rancid wireframes" src="https://user-images.githubusercontent.com/100659793/188319670-7985a63a-7c14-45ec-a0a1-e487a001fd68.png">

## Guided Motion Feature
https://user-images.githubusercontent.com/100659793/188319453-ea658aad-9890-4f69-b80c-1a76e34e872d.mov

## Setup  
1. Clone down the repo into a local directory.  CD into that directory. 
2. Then install the library dependencies. Run:

```bash or zsh
npm install
```
To verify that it is setup correctly, run `npm start` in your terminal. 

You will see a bunch of lines output to your terminal. One of those lines will be something like:

```bash or zsh
Project is running at http://localhost:3000/
```

3.  Go to `http://localhost:3000/` and you should see the logo "Rancid" at the top of the page and a green background with the message "TypeError: Failed to fetch. Bad data from server. Refresh or try again later"

Enter `control + c` in your terminal to stop the server at any time.

### You will also need this repo to run the backend server that the UI requires to function
4. Go to this link [here](https://github.com/edjrodriguez/rancid-custom-api)

5. Read the setup instructions for this API in the README

You will need both hosts running locally to see the fully functioning website

## Future Extensions
- User can login
- User can rate movies  
- User can favorite movies and/or mark as watched 
- Add links to movie trailers
- Implement search bar
- More filtering options (by genre, runtime, year released, ratings). 
- Elaborate on error handling in server and the application

## Members
- David Stavis [linkedin](https://www.linkedin.com/in/dstavis/)
- Eddie Rodriguez [linkedin](https://www.linkedin.com/in/edward-rodriguez-1b497423b/)

## Links
- [Project Requirements](https://frontend.turing.edu/projects/module-3/rancid-tomatillos-v3.html)
- DTR [here](https://docs.google.com/document/d/1_WLvzD2fKInh9Dg-b34tkHXrQYhVfsTqxkOsLtjIJs4/edit#heading=h.7heqf1wdwzmj)
- Project Board [here](https://trello.com/b/QBNSgPZC/rancid-tomatillos)
- Component Architecture, Wireframes, and Inspiration [here](https://app.excalidraw.com/l/1Q1K6fNw53E/8t5M4KCtQ1B)




