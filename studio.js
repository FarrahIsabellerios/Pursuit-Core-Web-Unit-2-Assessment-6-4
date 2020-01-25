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
     
        // document.body.removeChild(button);
        // div.removeChild(textarea)
      }
  
      div = document.createElement("div");
      button = document.createElement("button")
      button.innerText = "WRite your own review"
      h2.innerText = "Synopsis of:  " + movietitle.title;
      h3.innerText = movietitle.description;
      let input = document.createElement("input")
      input.value = ""
      // h3.innerHTML = <button></button>
      document.body.appendChild(div);
      div.appendChild(h2);
      div.appendChild(h3);
      div.appendChild(button)
      button.addEventListener("click",()=>{
   console.log("hey")
   document.body.replaceChild(input,div)
 
   let button = document.createElement("button")
   button.innerText = "Submit Review"
   document.body.appendChild(button)
   button.addEventListener("click",()=>{
     let ul = document.createElement("ul")
     let li = document.createElement("li")
     li.innerText = input.value
    ul.appendChild(li)
    document.body.appendChild(ul)


  




   })



   
 

  //  let ul = document.createElement("ul")
  //  let li = document.createElement("li")
  //  div.appendChild(ul)
  //  ul.appendChild(li)
  //  li.innerText = "test"
 

      })
  
    
      // div.appendChild(textarea)
    //   div.appendChild(button)
    
    
    } catch (err) {
      console.log(err);
    }
  };

  getMovies();
  select.addEventListener("change", event => {
    getMovieDescription(event.target.value);
  });


});
