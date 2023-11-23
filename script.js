'use strict';
const modal=document.querySelector('.modal');
const overlay=document.querySelector('.overlay');
const closemodalbtn=document.querySelector('.close-modal');
const openmodabtn=document.querySelectorAll('.show-modal');
for(let i=0;i<openmodabtn.length;i++)
    openmodabtn[i].addEventListener('click',function(){
        modal.classList.remove('hide');
        overlay.classList.remove('hide')
    })
closemodalbtn.addEventListener('click',function(){
    modal.classList.add('hide');
    overlay.classList.add('hide');
})