const header = document.querySelector("header");

window.addEventListener ("scroll", function(){
    header.classList.toggle ("sticky", window.scrollY > 200)
})
  
function toggleMenu() {  
    const navList = document.querySelector('.navlist');  
    navList.classList.toggle('show');  
}  