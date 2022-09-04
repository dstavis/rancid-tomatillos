const customHost = "http://localhost:3002/movies/"

let fetchData = (id) => 
  id ? fetch(customHost + id)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      } else {
        return response.json();
      }
    }) 
  :fetch(customHost)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      } else {
        return response.json();
      }
    })

export {fetchData}