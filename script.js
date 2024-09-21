//script for slider-menu and slides
const slide_btns = document.querySelectorAll(".slider-btn");
const slides = document.querySelectorAll(".slide");
let last_i = 0;
for(let i in slide_btns){
    if(slide_btns[i].checked == true){
        slides[last_i].classList.remove('active');
        slides[i].classList.add('active');
        last_i = i;
    }
}

function slide(i){
    if(i !== last_i){
        slides[last_i].classList.remove('active');
        slides[i].classList.add('active');
        last_i = i;
    }
}

for(let i in slide_btns){
    slide_btns[i].addEventListener('change', ()=>{
        slide(i);
    });
}
