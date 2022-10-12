const burger = document.getElementById("burger");
const cross = document.getElementById("cross");
const menu = document.getElementById("menu");
console.log(burger);
console.log(cross);
console.log(menu);

function burger_check() {
  cross.checked = false;
  console.log(window.innerWidth);
  if (window.innerWidth < 500) {
    console.log(" < 500");
    menu.style.width = "100%";

    return;
  }
  if (window.innerWidth < 685) {
    menu.style.width = "300px";
    console.log(" < 685");
    return;
  } else {
    return;
  }
}
function cross_check() {
  burger.checked = false;
  menu.style.width = "0px";
  console.log(menu);
}

burger.addEventListener("click", burger_check);
cross.addEventListener("click", cross_check);
