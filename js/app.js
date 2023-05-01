// window.addEventListener("DOMContentLoaded", (() => {




// }))


const arr = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Delete', 'CapsLock','a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'ArrowUp', 'Shift', 'Control', 'Meta', 'Alt', ' ', 'Alt','Control', 'ArrowLeft',  'ArrowDown', 'ArrowRight'];

let arrRus = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Delete', 'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'ArrowUp', 'Shift', 'Control', 'Meta', 'Alt', ' ', 'Alt', 'Control', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];
// document.onkeydown = function(event){
//   arrRus.push(event.key);
//   console.log(arrRus);
  
// }

const pageDom = () => {
  document.querySelector("#body").innerHTML = `<div class="container">
  <input class="input" type ="text" value = "">
  <div class="keyboard">
  </div>
</div>`;
};
pageDom();


const keyBoard = document.querySelector(".keyboard");




let arrCurent = arr;
const init = () =>{

  let out = "";
  for (let i = 0; i < arr.length; i++){
    if( i == 0){
      out += `<div class = "key dark" data ="${arrCurent[i]}">${arrCurent[i]}</div>`;
    }
    else if(arrCurent[i] === "ArrowUp"){
      out += `<div class = "key dark padding-none" data ="${arrCurent[i]}">${'<img src="./asset/up.png"  class="img "></img>'}</div>`
    }
    else if(arrCurent[i] === "ArrowDown"){
      out += `<div class = "key dark dawn padding-none" data ="${arrCurent[i]}">${'<img src="./asset/up.png"  class="img "></img>'}</div>`;
    }
    else if(arrCurent[i] === "ArrowLeft"){
      out += `<div class = "key dark left padding-none" data ="${arrCurent[i]}">${'<img src="./asset/up.png"  class="img "></img>'}</div>`;
    }
    else if(arrCurent[i] === "ArrowRight"){
      out += `<div class = "key dark rigth padding-none" data ="${arrCurent[i]}">${'<img src="./asset/up.png"  class="img "></img>'}</div>`;
    }
    else if(arrCurent[i] === "Delete"){
      out += `<div class = "key dark big-key" data ="${arrCurent[i]}">${'Del'}</div>`;
    }
    else if(arrCurent[i] === "Meta"){
      out += `<div class = "key dark big-key" data ="${arrCurent[i]}">${'Win'}</div>`;
    }
    else if(arrCurent[i] === "Control"){
      out += `<div class = "key dark big-key" data ="${arrCurent[i]}">${'Ctrl'}</div>`;
    }
    else if(arrCurent[i] === " "){
      out += `<div class = "key spaes" data ="${arrCurent[i]}">${arrCurent[i]}</div>`;
    }
    else if(arrCurent[i].length == 3){
      out += `<div class = "key dark big-key" data ="${arrCurent[i]}">${arrCurent[i]}</div>`;
    }else if(arrCurent[i].length == 4){
      out += `<div class = "key dark ctrl" data ="${arrCurent[i]}">${arrCurent[i]}</div>`;
    }
    else if(arrCurent[i].length > 3){
      out += `<div class = "key dark shift" data ="${arrCurent[i]}">${arrCurent[i]}</div>`;
    }
    else{ out += `<div class="key upperCase" data ="${arrCurent[i]}" >${arrCurent[i]}</div>`;
  }
  }

  keyBoard.innerHTML = out;

};

  init();

const keyBotton = keyBoard.querySelectorAll(".key"),
      input = document.querySelector(".input");

  // 
document.onkeydown = function(event){

  keyBotton.forEach( function(item){
    item.classList.remove("active");
  });

  if(event.key === 'Backspace' || event.key ==='Tab' || event.key === 'ArrowUp'|| event.key === 'Shift' || event.key === 'Control' || event.key ==='Meta' || event.key ==='Alt' || event.key === 'ArrowLeft' || event.key ==='ArrowDown' || event.key ==='ArrowRight' || event.key === 'Enter' || event.key === 'CapsLock' || event.key === 'Delete' || event.key === ' '){

    keyBoard.querySelector('[data = "'+event.key+'"]').classList.add('active');

  }else {
    keyBoard.querySelector('[data = "'+event.key.toLowerCase()+'"]').classList.add('active');
  };

  input.value += event.key;
};

keyBotton.forEach( item =>{
  // item.addEventListener('click', function(event){
  //   keyBotton.forEach(item =>{
  //      item.classList.remove("active");
  //      item.classList.add("active");
  //   });
   
  // });
  item.onclick = function(e){
    keyBotton.forEach(function(e){
      e.classList.remove('active')
    });
    let codeKey = this.getAttribute('data');
    this.classList.add('active');
    input.value += codeKey;
    
  };
});



const changeKeyboard = (e) => {
  if(e.code === "AltLeft"){
    document.onkeyup = function(e){
      if(e.code === "ShiftLeft"){
        if(arrCurent === arr){
          arrCurent = arrRus;
          init();
        }else{
          arrCurent = arr;
          init();
        }
      }
    };
  }
};
document.addEventListener('keydown', changeKeyboard);
// ****************************************** RUS ************

// const initRus = () =>{

//   let outRus = "";
//   for (let i = 0; i < arrRus.length; i++){
//     if( i == 0){
//       outRus += `<div class = "key dark" data ="${arrRus[i]}">${arrRus[i]}</div>`;
//     }
//     else if(arrRus[i] === "ArrowUp"){
//       outRus += `<div class = "key dark padding-none" data ="${arrRus[i]}">${'<img src="./asset/up.png"  class="img "></img>'}</div>`
//     }
//     else if(arrRus[i] === "ArrowDown"){
//       outRus += `<div class = "key dark dawn padding-none" data ="${arrRus[i]}">${'<img src="./asset/up.png"  class="img "></img>'}</div>`;
//     }
//     else if(arrRus[i] === "ArrowLeft"){
//       outRus += `<div class = "key dark left padding-none" data ="${arrRus[i]}">${'<img src="./asset/up.png"  class="img "></img>'}</div>`;
//     }
//     else if(arrRus[i] === "ArrowRight"){
//       outRus += `<div class = "key dark rigth padding-none" data ="${arrRus[i]}">${'<img src="./asset/up.png"  class="img "></img>'}</div>`;
//     }
//     else if(arrRus[i] === "Delete"){
//       outRus += `<div class = "key dark big-key" data ="${arrRus[i]}">${'Del'}</div>`;
//     }
//     else if(arrRus[i] === "Meta"){
//       outRus += `<div class = "key dark big-key" data ="${arrRus[i]}">${'Win'}</div>`;
//     }
//     else if(arrRus[i] === "Control"){
//       outRus += `<div class = "key dark big-key" data ="${arr[i]}">${'Ctrl'}</div>`;
//     }
//     else if(arrRus[i] === " "){
//       outRus += `<div class = "key spaes" data ="${arrRus[i]}">${arrRus[i]}</div>`;
//     }
//     else if(arrRus[i].length == 3){
//       outRus += `<div class = "key dark big-key" data ="${arrRus[i]}">${arrRus[i]}</div>`;
//     }else if(arrRus[i].length == 4){
//       outRus += `<div class = "key dark ctrl" data ="${arrRus[i]}">${arrRus[i]}</div>`;
//     }
//     else if(arrRus[i].length > 3){
//       outRus += `<div class = "key dark shift" data ="${arrRus[i]}">${arrRus[i]}</div>`;
//     }
//     else{ outRus += `<div class="key upperCase" data ="${arrRus[i]}" >${arrRus[i]}</div>`;
//   }
//   }

//   keyBoardRus.innerHTML = outRus;

// };

// initRus();

// const keyBottonRus = keyBoardRus.querySelectorAll(".key");
 

// try{
//   document.addEventListener('keydown' function(event){

//   keyBottonRus.forEach( function(item){
//     item.classList.remove("active");
//   });
  
//   if(event.key === 'Backspace' || event.key ==='Tab' || event.key === 'ArrowUp'|| event.key === 'Shift' || event.key === 'Control' || event.key ==='Meta' || event.key ==='Alt' || event.key === 'ArrowLeft' || event.key ==='ArrowDown' || event.key ==='ArrowRight' || event.key === 'Enter' || event.key === 'CapsLock' || event.key === 'Delete' || event.key === ' '){
  
//     keyBoardRus.querySelector('[data = "'+event.key+'"]').classList.add('active');
  
//   }else {
//     keyBoardRus.querySelector('[data = "'+event.key.toLowerCase()+'"]').classList.add('active');
//   };
  
//   input.value += event.key;
//   };
//   );
//   keyBottonRus.forEach( item =>{
//   // item.addEventListener('click', function(event){
//   //   keyBotton.forEach(item =>{
//   //      item.classList.remove("active");
//   //      item.classList.add("active");
//   //   });
   
//   // });
//   item.onclick = function(e){
//     keyBottonRus.forEach(function(e){
//       e.classList.remove('active')
//     });
//     let codeKey = this.getAttribute('data');
//     this.classList.add('active');
//     input.value += codeKey;
    
//   }
//   });}
//   catch(error){
//     console.error(error);
//   }











