document.addEventListener("DOMContentLoaded", () => {
    let select = document.querySelector("select");
    const getMovies = async () => {
        try {
            let res = await axios.get("https://ghibliapi.herokuapp.com/films");
 
            let getMovies = res.data;
            getMovies.forEach(movie => {
                let option = document.createElement("option");
                option.innerText = movie.title; 
                option.value = movie.url;
                select.appendChild(option)
            })
        } catch(err) {
            console.log(err);
            debugger
            
        }
    }

    const getMovieDescription = async (url) => {
        try {
            let res = await axios.get(url);
         
            let movietitle = res.data;
       
   
            let section = document.querySelector("section");
            if(section) {
                section.parentNode.removeChild(section);
            }
            section = document.createElement("section");
            let h1 = document.createElement("h1");
            h1.innerText = "Synopsis of " + movietitle.title; 
            let h3 = document.createElement("h3");
            h3.innerText = movietitle.description;
            document.body.appendChild(section)
            section.appendChild(h1)
            section.appendChild(h3)
        } catch(err) {
            console.log(err)
        }
    }

    getMovies()
 
    select.addEventListener("change", (event) => {
  
        getMovieDescription(event.target.value)
    })
} )
