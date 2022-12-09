text=document.querySelector("#name");

text.addEventListener("focusout", myFunction);


function myFunction() {
  alert("thank you for participating!");
}