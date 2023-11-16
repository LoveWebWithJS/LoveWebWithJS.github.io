let mainElement = document.documentElement
let mainElementHeight = mainElement.clientHeight
let mainElementWeight = mainElement.clientWidth

// ! Отмена анимации
if(mainElementWeight < 550){
    console.log("Ширина меньше 550px");
    let headerBody = document.querySelector(".header-wrapper__body")
    let elementsWithAnimationHeaderBody = headerBody.querySelectorAll('.animate__animated')
    for(let i = 0; i < elementsWithAnimationHeaderBody.length; i++){
        elementsWithAnimationHeaderBody[i].classList.remove('animate__animated')
    }
}

// ! Бургер
const brgrIcon = document.querySelector('.brgr-icon');
console.log(brgrIcon);
if (brgrIcon){
    const linksWrapper = document.querySelector('.links-wrapper');
    console.log(linksWrapper);
    brgrIcon.addEventListener('click', function(e){
        document.body.classList.toggle('_lock');
        linksWrapper.classList.toggle('_active');
        brgrIcon.classList.toggle('_active');
    })
}

// ! Кнопка вверх
const UpBtn = document.querySelector(".up-btn")
// console.log(UpBtn) есть
UpBtn.addEventListener('click', function(){
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
})
