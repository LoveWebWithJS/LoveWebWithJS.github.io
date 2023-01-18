//! Будем делать анимацтю для иконок (в качестве обучения), чтоб поворачивались на 360 при hover-е)
function rotate360() {
	this.classList.add('.rotate360');
}

let iconsHeader = document.querySelectorAll(".logo");
// console.log(iconsHeader);
addEventListener('mouseover', rotate360);

