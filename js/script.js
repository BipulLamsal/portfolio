const primaryNav = document.querySelector('.nav-links')
const navToggle = document.querySelector('.mb-nav-toggle')

navToggle.addEventListener('click',() => {
    togglevalidate = primaryNav.style.transform
    if (togglevalidate == 'translateX(0%)'){
        primaryNav.style.transform = 'translateX(100%)';  
    }
    else
    {
        primaryNav.style.transform = 'translateX(0%)';
    }
     
     console.log("Tero")
})