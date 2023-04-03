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
console.log('П.С для проверяющего: у многих возникают трудности с ПП с прокруткой страницы. нужно включить ПП и наведя курсор на меню ПП крутить колесико мыши. спасибо за отзыв - готов исправить ошибки которые не заметил');

