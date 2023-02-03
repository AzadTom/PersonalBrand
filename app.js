
const twitter = document.querySelector('.twitter');

const linkedin = document.querySelector('.linkedin');

const github = document.querySelector('.github');


const menu = document.querySelector('.menu');

const close = document.querySelector('.close');



const nav = document.querySelector('nav');

menu.addEventListener('click', ()=>{


    nav.classList.add('open-nav');

      

});

close.addEventListener('click', ()=>{


    nav.classList.remove('open-nav');

      

});

twitter.addEventListener('click',()=>{

    window.open('https://twitter.com/kumarazad2917');

});

linkedin.addEventListener('click',()=>{

    window.open('https://www.linkedin.com/in/azad-kumar-395798218/');

});

github.addEventListener('click',()=>{

    window.open('https://github.com/AzadTom');

});








