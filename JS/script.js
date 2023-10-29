// const nav = document.querySelector('nav');
// console.log(nav);

// function showResetNav(){
//     nav.classList.toggle('hidden');
// }
// function showNav(){
//     if (nav.classList.contains('hidden')){
//         nav.classList.remove('hidden')
//         console.log('Nav showed')
//     }else{
//         console.log('Nav already showed')
//     }
// }
// function resetNav(event){
//     if(nav.classList.contains('hidden')){
//     console.log('Nav already reseted')
//     }else{
//         nav.classList.add('hidden');
//     }
// }
        



// nav.addEventListener('mouseout', resetNav, )
// nav.addEventListener('mousemove', showNav)
// nav.addEventListener('mouseover', showNav)

// setTimeout(showNav, 10000);
// setTimeout(resetNav, 12000);

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



//! Lazy loading

// const lazyObjects = document.querySelectorAll('.')


