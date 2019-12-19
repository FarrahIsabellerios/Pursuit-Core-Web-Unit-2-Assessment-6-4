    // let form = document.querySelector("form");
    // form.addEventListener("submit", (event) => {
    // event.preventDefault();
    // let li = document.createElement("li");
    // let input = document.querySelector("input");
    // li.innerText = input.value; 
    //     let ul = document.querySelector("ul")
    //     ul.appendChild(li)
    //     input.value = ""
        // let btn = document.createElement("button");
        // btn.innerText = "X";
        // li.appendChild(btn);
        // btn.addEventListener("click", () => {
        // ul.removeChild(li);


document.addEventListener("DOMContentLoaded", ()=>{
let select = document.querySelector("select");


// form.addEventListener("submit",(event)=>{   
//     event.preventDefault()
//    getMovie(option.value, select.value);
// })
//   select.addEventListener("change",()=>{
//       getMovie()
//     let h1 = document.createElement("h1")
//     h1.innerText = movie.description
//   document.body.appendChild(h1)
//   })



const getMovie = async () => {
try {
let res = await axios.get("https://ghibliapi.herokuapp.com/films");
// debugger;
// let description = option.value
let movies = res.data
movies.forEach(movie=>{
let option = document.createElement("option")
option.innerText = movie.title 
option.value = movie.description
select.appendChild(option)
})

// let h1 = document.createElement("h1")
// h1.innerText = description
} catch(err){
    console.log(err)
debugger;
        }
      
    }
    getMovie()



    const getDescription = async () => {
        try {
        let res = await axios.get("https://ghibliapi.herokuapp.com/films");
        // debugger;
        // let description = option.value
        let info = res.data
        let buttonInfo = document.createElement("button")
        buttonInfo.innerText = "Movie Info"
        document.body.appendChild(buttonInfo)

const buttonI = ()=>{
    for (let i=0; i<info; i++){
        if (i === true )  {  
      let infoMovie = document.querySelector("infoMovie")
      infoMovie.innetText = i.description
      buttonI.addEventListener("click",buttonI)
           } 
}
buttonI.addEventListener("click",buttonI)
  }
    
        } catch(err){
            console.log(err)
        debugger;
                }
              
            }
            getDescription()

            buttonI.addEventListener("click",buttonI)

          
            


})

// const getDescription = async (url)=>{
// try{
// let res = await axios.get(url)
// let review = res.description
// let section = document.querySelector("option")
// if(section){
//     section.parentNode.removeChild.section
// }
// section = document.createElement("section")
// let h1 = document.createElement("h1")
// h1.innerText = res
// let h3 = document.createElement("h3")
// h3.innerText = review
// document.body.appendChild(section)
// section.appendChild(h1)
// section.appendChild
// } catch(err){
//     console.log(err);
// // debugger;
//         }
// }
//     getMovie()

// select.addEventListener("change",(event)=>{

//     getDescription(event.target.value)











// })



// res.data is an array of objects 
//[{id:"blah",title:"blah",description:"blahblah"}]


