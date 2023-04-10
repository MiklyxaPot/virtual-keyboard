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


    window.addEventListener("DOMContentLoaded", (() => {

      const iconBurger = document.querySelector(".menu__icon"),
       menuItem = document.querySelectorAll(".menu__item"), 
       menu = document.querySelector(".menu__list");


      iconBurger.addEventListener("click", (() => {
         console.log('booo');
         
          if (menu.classList.contains("menu__list-open")) {
              menu.classList.remove("menu__list-open");
              iconBurger.classList.remove("icon-menu__open");
              document.body.style.overflow = "unset";
          } else {
              menu.classList.add("menu__list-open");
              iconBurger.classList.add("icon-menu__open");
              document.body.style.overflow = "hidden";
          }
      }));
      menuItem.forEach((item => {
          item.addEventListener("click", (() => {
              menu.classList.remove("menu__list-open");
              iconBurger.classList.remove("icon-menu__open");
              document.body.style.overflow = "unset";
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
          const dataSlides = "js/pets.json";
          const res = await fetch(dataSlides);
          const data = await res.json();
          console.log(data);
          let num = randomNum < 7 ? randomNum++ : randomNum = 2;
          sliders.innerHTML = `<div class="slider__card">
          <div class="slider__img">
             <picture><img src=${data[num].img} alt=${data[num].name}></picture>
          </div>
          <div class="slider__name-pet">${data[num].name}</div>
          <div class="slider__btn pet-btn"> <a href="" class="slider__link">Learn more</a></div>
       </div>
       <div class="slider__card hide-523">
          <div class="slider__img">
             <picture><img src=${data[num-1].img} alt=${data[num-1].name}></picture>
          </div>
          <div class="slider__name-pet ">${data[num-1].name}</div>
          <div class="slider__btn pet-btn"> <a href="" class="slider__link">Learn more</a></div>
       </div>
       <div class="slider__card hide">
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
        
      }));
      next.addEventListener("click", (() => {
          getSliders();
          
      }));
      prevNav.addEventListener("click", (() => {
         getSliders();
       
     }));
     nextNav.addEventListener("click", (() => {
         getSliders();
         
     }));
 
  }));
})();

console.log("1.Вёрстка страницы Main соответствует макету при ширине экрана 1280px: +14\n 2. Вёрстка страницы Main соответствует макету при ширине экрана 768px: +14.\n 3. Вёрстка страницы Main соответствует макету при ширине экрана 320px: +14\n");
console.log("1.Вёрстка страницы Pets соответствует макету при ширине экрана 1280px: +6\n 2. Вёрстка страницы Pets соответствует макету при ширине экрана 768px: +6\n 3. Вёрстка страницы Pets соответствует макету при ширине экрана 320px: +6.\n ");
console.log("1.Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки, справа от отдельных блоков не появляются белые поля. Весь контент страницы при этом сохраняется: не обрезается и не удаляется: +20\n 2. При ширине экрана меньше 768px на обеих страницах меню в хедере скрывается, появляется иконка бургер-меню: +4\n 3. Верстка обеих страниц валидная: +8.\n ");
console.log('П.С для проверяющего: у многих возникают трудности с ПП с прокруткой страницы. нужно включить ПП и наведя курсор на меню ПП крутить колесико мыши. спасибо за отзыв - готов исправить ошибки которые не заметил');

