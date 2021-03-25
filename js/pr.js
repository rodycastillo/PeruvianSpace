const header = document.querySelector(".header");
const banner = document.querySelector(".banner");
const html = document.querySelector("html");
const distance = banner.getBoundingClientRect().height/3;

window.addEventListener('scroll', ()=> {
  if(html.scrollTop > distance){
      header.classList.add("header--dark");
  }
  else {
    header.classList.remove("header--dark");
  }
})