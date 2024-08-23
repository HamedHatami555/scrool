const bg=document.querySelector('.background');
window.addEventListener('scroll',()=>{
    bg.style.opacity= 1 -  window.pageYOffset/350
    
});
