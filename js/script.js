"use strict";
console.log("i'm here");

const hidden_div = document.querySelector(".hidden_div");
const link_input = document.querySelector(".srch-2");
const submit = document.querySelector(".submit");


let alldataS = [];
var dataL = JSON.parse(localStorage.getItem("data"));
            alldataS.push(dataL);
            console.log(alldataS);
  hidden_div.innerHTML = ` <div class="shadow p-3 mb-5 bg-body rounded  load  extra-hidden mt-3 bg-light d-flex ">
            ${dataL.url}
            <a class="dAtag" target="_blank"  href="${dataL.S_url}" class="js_tag">${dataL.S_url}</a>
            <button>Copy</button>
            </div>`;

submit.addEventListener("click", (event) => {
  event.preventDefault();

  let APi = fetch(`https://api.shrtco.de/v2/shorten?url=${link_input.value}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      hidden_div.innerHTML += ` <div class="shadow p-3 mb-5 bg-body rounded  load  extra-hidden mt-3 bg-light d-flex ">
    ${link_input.value}
    <a href="${data.result.full_short_link}" class="js_tag">${data.result.full_short_link}</a>
    <button>Copy</button>
    </div>`;
      localStorage.setItem("data", JSON.stringify({'S_url':data.result.full_short_link,'url':link_input.value}));

    });

  console.log(APi);
});
