(() => {
   "use strict";
   function isWebp() {
      function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
               callback(2 == webP.height);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
      }
      testWebP((function(support) {
            let className = true === support ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
      }));
   }
   let addWindowScrollEvent = false;
   setTimeout((() => {
      if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
               document.dispatchEvent(windowScroll);
            }));
      }
   }), 0);
   window["FLS"] = true;
   isWebp();


   
})();

console.log("1.Вёрстка страницы Main соответствует макету при ширине экрана 1280px: +14\n 2. Вёрстка страницы Main соответствует макету при ширине экрана 768px: +14.\n 3. Вёрстка страницы Main соответствует макету при ширине экрана 320px: +14\n");
console.log("1.Вёрстка страницы Pets соответствует макету при ширине экрана 1280px: +6\n 2. Вёрстка страницы Pets соответствует макету при ширине экрана 768px: +6\n 3. Вёрстка страницы Pets соответствует макету при ширине экрана 320px: +6.\n ");
console.log("1.Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки, справа от отдельных блоков не появляются белые поля. Весь контент страницы при этом сохраняется: не обрезается и не удаляется: +20\n 2. При ширине экрана меньше 768px на обеих страницах меню в хедере скрывается, появляется иконка бургер-меню: +4\n 3. Верстка обеих страниц валидная: +8.\n ");

window.addEventListener("DOMContentLoaded", (() => {

   const iconBurger = document.querySelector(".menu__icon"),
   menuItem = document.querySelectorAll(".menu__item"), 
   menu = document.querySelector(".menu__list");


   const openBurger = () =>{
      menu.classList.remove("menu__list-open");
      iconBurger.classList.remove("icon-menu__open");
      document.body.style.overflow = "unset";
   };

   iconBurger.addEventListener("click", (() => {
      if (menu.classList.contains("menu__list-open")) {
         openBurger();
      } else {
         menu.classList.add("menu__list-open");
         iconBurger.classList.add("icon-menu__open");
         document.body.style.overflow = "hidden";
      }
   }));
   menuItem.forEach((item => {
      item.addEventListener("click", (() => {
         openBurger();
      }));
   }));

   // **********slider********
   const slide = document.querySelectorAll(".slider__card"), 
   prev = document.querySelector(".pets__prew"), 
   next = document.querySelector(".pets__next"), 
   sliders = document.querySelector(".pets__slider"),
   nextNav = document.querySelector(".pets__navigation-next"), 
   prevNav = document.querySelector(".pets__navigation-prew");

   let randomNum;
   function getRandomNum(min = 2, max = 7) {
      min = Math.ceil(min);
      max = Math.floor(max);
       randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
   }
   getRandomNum();


   async function getSliders() {
      const dataSlides = "../js/pets.json";
      const res = await fetch(dataSlides);
      const data = await res.json();
      let num = randomNum < 7 ? randomNum++ : randomNum = 2;
      sliders.innerHTML = `<div data-modal class="slider__card">
      <div class="slider__img">
         <picture><img src=${data[num].img} alt=${data[num].name}></picture>
      </div>
      <div class="slider__name-pet">${data[num].name}</div>
      <div class="slider__btn pet-btn"> <a href="" class="slider__link">Learn more</a></div>
   </div>
   <div data-modal class="slider__card ">
      <div class="slider__img">
         <picture><img src=${data[num-1].img} alt=${data[num-1].name}></picture>
      </div>
      <div class="slider__name-pet ">${data[num-1].name}</div>
      <div class="slider__btn pet-btn"> <a href="" class="slider__link">Learn more</a></div>
   </div>
   <div data-modal class="slider__card ">
      <div class="slider__img">
         <picture><img src=${data[num +1].img} alt=${data[num +1].name}></picture>
      </div>
      <div class="slider__name-pet">${data[num +1].name}</div>
      <div class="slider__btn pet-btn"> <a href="" class="slider__link">Learn more</a></div>
   </div>`
   }
   getSliders();

   prev.addEventListener("click", (() => {
      getSliders();
      modalLoad();
   }));
   next.addEventListener("click", (() => {
      getSliders();
      modalLoad();
   }));
   prevNav.addEventListener("click", (() => {
      getSliders();
      modalLoad();
   }));
   nextNav.addEventListener("click", (() => {
      getSliders();
      modalLoad();
   }));

// ************modal**************
const timeAfteLoad = ()=>{
const modalOpen = document.querySelectorAll('[data-modal]'),
         modal = document.querySelector('.modal'),
         modalClose = document.querySelector('[data-close]');


   modalOpen.forEach(item =>{
      item.addEventListener("click", () => {
         // getModal();
         modal.style.display = 'block';
         document.body.style.overflow = 'hidden';
         });
   });


   modalClose.addEventListener('click', ()=>{
     
      modal.style.display = 'none';
      document.body.style.overflow = '';
   });

   modal.addEventListener('click', (e) => {
      if(e.target === modal){
         modal.style.display = 'none';
      document.body.style.overflow = '';
      }
   })

};
const modalLoad = ()=>{
   window.setTimeout(timeAfteLoad, 500);
};
modalLoad();

// async function getModal() {
//    const dataSlides = "js/pets.json";
//    const res = await fetch(dataSlides);
//    const data = await res.json();
//    // let num = randomNum < 7 ? randomNum++ : randomNum = 2;
//    sliders.innerHTML = ` <div class="modal">
//    <div class="modal__dialog">
//       <div class="modal__body">
//             <div data-close class="modal__close">&times;</div>
//             <img class ="modsl__img" src=${data.img} alt="">
//             <div class="modal__content">
//                <div class="modal__title title">${data.name}</div>
//                <div class="modal__subtitle ">${data.type}</div>
//                <div class="modal__discrition">${data.description}</div>
//                <ul class="modal__list">
//                   <li class="modal__item">Age: <span>${data.age}</span></li>
//                   <li class="modal__item">Inoculations: <span>${data.inoculations}</span></li>
//                   <li class="modal__item">Diseases: <span>${data.diseases}</span></li>
//                   <li class="modal__item">Parasites: <span>${data.parasites}</span></li>
//                </ul>
//             </div>
//       </div>
//    </div>
// </div>`
// };

}));
