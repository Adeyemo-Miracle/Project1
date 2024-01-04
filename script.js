const slideout = document.querySelector('.slideout')
const btnOpenSlideout = document.querySelector('.btn-open-slideout')
const closeBtn = document.querySelector('.close-btn')

window.addEventListener(('DOMContentLoaded'), ()=>{
    slideout.className = 'slideout'
})
btnOpenSlideout.addEventListener(('click'),()=>{
    console.log('hi')
    slideout.classList.remove('slideout')
    slideout.classList.add('slideout-active')
})
closeBtn.addEventListener(('click'), ()=>{
    slideout.classList.remove('slideout-active')
    slideout.classList.add('slideout')
})