let paraText = document.getElementById("jokeText");
let spinnerE1 = document.getElementById("spinner");
let btn = document.getElementById("jokeBtn");
function joke(){
    spinnerE1.classList.toggle("d-none");
    paraText.classList.toggle("d-none");
    let url = "https://apis.ccbp.in/jokes/random";
    let options={
        method :"GET"
    };
    fetch(url,options)
    .then(function(responce){
        return responce.json();
    })
    .then(function(data){
        spinnerE1.classList.toggle("d-none");
        paraText.classList.toggle("d-none");
        paraText.textContent = data.value;
    });
}
btn.addEventListener("click",joke);
