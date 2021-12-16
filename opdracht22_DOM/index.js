const p = document.getElementsByTagName("p");
p[0].innerText = "Ik ben de nieuwe paragraaf.";

// const firstSection = document.getElementById('first-section');
const firstSection = document.querySelector("#first-section") //same as above
firstSection.style.backgroundColor = 'green';

const paragraphDivs = document.getElementsByClassName("paragraph");
console.log(paragraphDivs);
