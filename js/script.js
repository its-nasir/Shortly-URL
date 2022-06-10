"use strict";
console.log("i'm here");

const hidden_div = document.querySelector(".hidden_div");
const link_input = document.getElementById("search_bar");
const submit = document.querySelector(".submit");
let urlD = document.querySelector(".url_hdn");
let alldataS = [];

var dataL = JSON.parse(localStorage.getItem("data"));
if(dataL && dataL.length>=1){
  alldataS = [...dataL];
  let randerD = link_input.innerHTML
    let elemDiv=``;
    alldataS.forEach(elementt => {
      elemDiv += ` <div class="shadow  mb-2 bg-body  d-flex  load  extra-hidden mt-3 bg-light d-flex ">
      <p class="urlName">${elementt.url}</p>
            <a target="_blank" href="${elementt.S_url}" class="js_tag ">${elementt.S_url}</a>
      <button class="copyBtn">Copy</button>
      </div>`;
    });
    hidden_div.innerHTML= elemDiv;
}

submit.addEventListener("click", (event) => {
  // console.log(link_input.value.length);
  if(link_input.value.length >=1){
    console.log("working.....");
    urlD.classList.add('url_1')


  // event.preventDefault();
  let store ={};
  let APi = fetch(`https://api.shrtco.de/v2/shorten?url=${link_input.value}`)
  .then((res) => res.json())
  .then((data) => {
    hidden_div.innerHTML += ` <div class="shadow  mb-2 bg-body rounded  load  extra-hidden mt-3 bg-light d-flex ">
    <p class="urlName">${link_input.value}</p>
    
    <a href="${data.result.full_short_link}" class="js_tag">${data.result.full_short_link}</a>
    <button>Copy</button>
    </div>`;
    store['S_url'] = data.result.full_short_link;
    store['url'] = link_input.value;
    alldataS.push(store);
    localStorage.setItem("data", JSON.stringify(alldataS));
  });
  console.log(APi,"api calling");
}else{
  urlD.classList.remove('url_1')
}
});
