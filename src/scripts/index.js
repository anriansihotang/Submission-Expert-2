import 'regenerator-runtime'; /* for async await transpile */

import '../styles/main.css';
import '../styles/responsive.css';
import App from './views/app';

const app = new App({
  button: document.querySelector('#menu'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
// //* Menu
// const menu = document.querySelector('#menu');
// const hero = document.querySelector('.hero');
// const main = document.querySelector('main');
// const drawer = document.querySelector('#drawer');

// menu.addEventListener('click', function (event) {
//     drawer.classList.toggle('open');
//     event.stopPropagation();
// });

// hero.addEventListener('click', function () {
//     drawer.classList.remove('open');
// });

// main.addEventListener('click', function () {
//     drawer.classList.remove('open');
// });
// //* data
// import ('../DATA.json').then(({default: jsonData}) => {
//     let datas = jsonData['restaurants']
//     let dataList = '';
//     datas.forEach(function(data) {
//         dataList +=`
//         <div class="list_item">
// eslint-disable-next-line max-len
//             <img class="list_item_thumb" src="${data['pictureId']}" alt="${data['name']}" title="${data['name']}">
//             <div class="list_item_content">
//                 <p class="list_item_location">Lokasi : ${data['city']}</p>
// eslint-disable-next-line max-len
//                <p class="list_item_rating">Rating :<span class="list_item_rating_value"> ${data['rating']}</span></p>
//                 <h1 class="list_item_title">${data['name']}</h1>
//                 <div class="list_item_desc">${data['description'].slice(0, 150)}...</div>
//             </div>
//         </div>
//         `;
//     });
//     document.querySelector('#tes').innerHTML = dataList;
// });

// //* tahun buat (copyright)
// document.getElementById("tahun").innerText = new Date().getFullYear();
