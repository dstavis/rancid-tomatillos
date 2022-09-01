let fetchData = (id) => 
id ? fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
.then((response) => {
  if (!response.ok) {
    throw new Error(response.statusText);
  } else {
    return response.json();
}
}) 
: fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies/")
.then((response) => {
  if (!response.ok) {
    throw new Error(response.statusText);
  } else {
    return response.json();
}
})


export {fetchData}