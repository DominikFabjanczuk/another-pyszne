import '../scss/restaurant.scss';

console.log('hello restaurant');

const logo = document.querySelector('.logo--js');
logo.addEventListener('click', ()=>{
    window.location.href = "http://localhost:8080"
});