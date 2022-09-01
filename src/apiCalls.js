const hostName = "https://rancid-tomatillos.herokuapp.com/api/v2/movies/"

let fetchData = (id) => 
id ? fetch(hostName + id)
.then((response) => {
  if (!response.ok) {
    throw new Error(response.statusText);
  } else {
    return response.json();
}
}) 
: fetch(hostName)
.then((response) => {
  if (!response.ok) {
    throw new Error(response.statusText);
  } else {
    return response.json();
}
})


export {fetchData}