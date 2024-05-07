let btn = document.getElementById("bar");
let mobiles = document.getElementById("mobiles");
let x = document.getElementById("x");

btn.addEventListener("click", () => {
  mobiles.style.transform = "translateX(0px)";
});

x.addEventListener("click", () => {
  mobiles.style.transform = "translateX(1000px)";
});
