const BtnActive = document.querySelector('div')

BtnActive.addEventListener(('click'), ActiveBtn)
function ActiveBtn (){
    BtnActive.classList.toggle('btn-active')
    // console.log(BtnActive.className)
}