let bg = document.querySelector('body')
let toggleBtn = document.querySelector('label');
let header = document.querySelector('h1');
toggleBtn.addEventListener('click', function(){
    bg.classList.toggle('darkmode');
    toggleBtn.classList.toggle('move');
    header.classList.toggle('header')
});

