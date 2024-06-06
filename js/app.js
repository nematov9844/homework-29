let header = document.querySelector(".header")

function btn(){
    let element = document.querySelector(".header__list");
    element.classList.toggle("active")
}


window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
      header.classList.add("shrink");
    } else {
      header.classList.remove("shrink");
    }
  });