const link =document.querySelector("#ex1");
const link_href = link.getAttribute("href");
console.log(link_href);

const link2 =document.querySelector("a");
const new_href= "https://www.nate.com";
link2.setAttribute("href", new_href);