document.addEventListener("DOMContentLoaded", () => {
  


  //could not remove div onclick since div was declared going to try to make bigger div to remove.
  
    let select = document.querySelector("select");
  const getMovies = async () => {
    try {
      let res = await axios.get("https://ghibliapi.herokuapp.com/films");
      let getMovies = res.data;
   //   debugger;
 
      getMovies.forEach(movie => {

        let option = document.createElement("option");
        option.innerHTML = "select"
        option.innerText = movie.title;
        option.value = movie.url;
        select.appendChild(option);
      });
    } catch (err) {
      console.log(err);
    //   debugger;
    }
  };

  const getMovieDescription = async url => {
    let h2 = document.createElement("h2");
    let h3 = document.createElement("h3");

    try {
      let res = await axios.get(url);

      let movietitle = res.data;

      let div = document.querySelector("div");
      if (div) {
        document.body.removeChild(div);
        // div.removeChild(textarea)
      }
      div = document.createElement("div");
      // let textarea = document.createElement("textarea")
      // textarea.value=""
      h2.innerText = "Synopsis of:  " + movietitle.title;
      h3.innerText = movietitle.description;
      document.body.appendChild(div);
     
      div.appendChild(h2);
      div.appendChild(h3);
      // div.appendChild(textarea)
      div.appendChild(button)
    
    
    } catch (err) {
      console.log(err);
    }
  };

  getMovies();
  select.addEventListener("change", event => {
    getMovieDescription(event.target.value);
  });
  reviews.innerText = ""
let button = document.createElement("button")
button.innerText = "click here for movie reviews"
button.addEventListener("click",()=>{
let reviews = document.querySelector("#reviews")
reviews.innerText = "Movie Reviews"
let h3 = document.querySelector("h3")
h3.innerText = ""
let li = document.createElement("li")
//li.innerText = "good movie"
reviews.appendChild(li)








  })

  // console.log(reviewInput);
  // reviewInput.addEventListener("input", bee => {
  //   console.log(bee);
  // });
});
