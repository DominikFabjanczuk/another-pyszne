import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('HELLO 🚀')

const searchButton = document.querySelector('.button--search--js');

searchButton.addEventListener('click', (e) =>{
    e.preventDefault();    
    window.location.replace("http://localhost:8080/restaurant.html");
});