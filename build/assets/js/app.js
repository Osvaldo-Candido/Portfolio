const btnMenu = document.querySelector('#mobile-menu-button')
const header = document.querySelector('header')

btnMenu.addEventListener('click', ()=> {
    const menuMobile = document.querySelector('#mobile-menu')
    menuMobile.classList.toggle('hidden')
})

window.addEventListener("scroll",()=>{
    if(window.scrollY > 100)
    {
        header.classList.toggle("sticky",window.scrollY > 0)
        header.style.backgroundColor = "rgba(0,0,0,.8)"
    }else{
        header.style.backgroundColor = 'transparent'
    }

})