const burgerMenu= document.querySelector(".burger-menu")
const mobileNav=document.querySelector(".mobile-nav")

burgerMenu.addEventListener('click',()=>{
   if(burgerMenu.classList.contains("active")){
        burgerMenu.classList.toggle("active")
        mobileNav.style.display="block"
   }else{
    burgerMenu.classList.toggle("active")
    mobileNav.style.display="none"
   }
})