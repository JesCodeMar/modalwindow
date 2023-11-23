'use strict';
const modal=document.querySelector('.modal');
const overlay=document.querySelector('.overlay');
const closemodalbtn=document.querySelector('.close-modal');
const openmodabtn=document.querySelectorAll('.show-modal');

const open=function(){
    modal.classList.remove('hide');
    overlay.classList.remove('hide');
}

const close=function(){
    modal.classList.add('hide');
    overlay.classList.add('hide');
}

for(let i=0;i<openmodabtn.length;i++)
    openmodabtn[i].addEventListener('click',open);

closemodalbtn.addEventListener('click',close);

overlay.addEventListener('click',close);

document.addEventListener('keydown',function(event){
    if(event.key==='Escape'){
        if(!modal.classList.contains('hide')){
            close();
        }
    }
});