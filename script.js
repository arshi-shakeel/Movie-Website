let APIKey ="a42bc7bb";
let searchInput = document.getElementById("searchInput");
let searchBtn = document.getElementById("searchBtn");

const getData = async (movie) =>{
   try {
    let fetchData = await fetch(`http://www.omdbapi.com/?apikey=a42bc7bb&t=${movie}`);
   let jsonData = await fetchData.json();
   console.log(jsonData);
   document.querySelector(".card").innerHTML=""
   searchInput.value="";
   let div = document.createElement("div");
   div.classList.add("movieCard");
   div.innerHTML=`
   <img src= ${jsonData.Poster} alt="">
       <div card="cardText">
         <h1>${jsonData.Title}</h1>
         <p class="rating">Ratings : <span>${jsonData.Ratings[0].Value}</span></p>
         <a href="">${jsonData.Genre}</a>
         <p>Released : <span>${jsonData.Released}</span></p>
         <p>Runtime : <span>${jsonData.Runtime}</span></p>
         <p>Plot : <span>${jsonData.Plot}</span></p>
         <p>Actors : <span>${jsonData.Actors}</span></p>
         <p>Director : <span>${jsonData.Director}</span></p>
         <p>Writer : <span>${jsonData.Writer}</span></p>
       </div> `
   document.querySelector(".card").appendChild(div)
   }
   catch(error){
     document.querySelector(".card").innerHTML="<h1>enter Valid Movie Name</h1>"
    
   }
}
searchBtn.addEventListener("click",function(){
    let movieName = searchInput.value;
    if(movieName != ""){
        getData(movieName);
    }else{
         document.querySelector(".card").innerHTML="<h1>First Search Movie Name</h1>"
      
    }
})





