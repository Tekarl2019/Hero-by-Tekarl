//script for slider-menu and slides
const slide_btns = document.querySelectorAll(".slider-btn");
const slides = document.querySelectorAll(".slide");
let last_i = 0;
let count;


slide_btns[1].checked = false;
slide_btns[2].checked = false;
slide_btns[3].checked = false;
slide_btns[4].checked = false;
slide_btns[0].checked = true;
slides[0].classList.add('active');



function slide(i){
    if(i !== last_i){
        slides[last_i].classList.remove('active');
        slide_btns[last_i].checked = false;
        slide_btns[i].checked = true;
        slides[i].classList.add('active');
        last_i = i;
    }
}

for(let i=0; i < slide_btns.length;i++){
    slide_btns[i].addEventListener('change', ()=>{
        slide(i);
    });
}



   count = setInterval(autom , 5000);

   function autom(){

    if(last_i === 4){
        slide(0);
    }else{
        let new_i = last_i + 1;
        slide(new_i);
    }
}

