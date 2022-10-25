const checkbox = document.getElementById("header__check");
const overlay = document.getElementById("overlay");
const menu = document.getElementById("menu");

function check() {
  const atr = menu.getAttribute("class");
  if (atr === "menu menu-hidden") {
    menu.setAttribute("class", "menu menu-shown");
    menu.removeAttribute("disabled");
    overlay.setAttribute("class", "overlay overlay-shown");
    return;
  }
  if (atr === "menu menu-shown") {
    menu.setAttribute("class", "menu menu-hidden");
    menu.setAttribute("disbled", "true");
    overlay.setAttribute("class", "overlay overlay-hidden");
    return;
  }
}

checkbox.addEventListener("change", check);
