// window.addEventListener("DOMContentLoaded", (() => {




// }))


const arr = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Delete', 'CapsLock','a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'ArrowUp', 'Shift', 'Control', 'Meta', 'Alt', '', 'Alt','Control', 'ArrowLeft',  'ArrowDown', 'ArrowRight'];

const pageDom = () => {
  document.querySelector("#body").innerHTML = `<div class="container">
  <input class="input" type ="text" value = "">
  <div class="keyboard">
     
    
  </div>
</div>`;
};
pageDom();


const keyBoard = document.querySelector(".keyboard");




  const init = () =>{

    let out = "";
    for (let i = 0; i < arr.length; i++){
      if( i == 0){
        out += `<div class = "key dark" data ="${arr[i]}">${arr[i]}</div>`;
      }
      else if(arr[i] === "ArrowUp"){
        out += `<div class = "key dark padding-none" data ="${arr[i]}">${'<img src="./asset/up.png"  class="img "></img>'}</div>`
      }
      else if(arr[i] === "ArrowDown"){
        out += `<div class = "key dark dawn padding-none" data ="${arr[i]}">${'<img src="./asset/up.png"  class="img "></img>'}</div>`;
      }
      else if(arr[i] === "ArrowLeft"){
        out += `<div class = "key dark left padding-none" data ="${arr[i]}">${'<img src="./asset/up.png"  class="img "></img>'}</div>`;
      }
      else if(arr[i] === "ArrowRight"){
        out += `<div class = "key dark rigth padding-none" data ="${arr[i]}">${'<img src="./asset/up.png"  class="img "></img>'}</div>`;
      }
      else if(arr[i] === "Delete"){
        out += `<div class = "key dark big-key" data ="${arr[i]}">${'Del'}</div>`;
      }
      else if(arr[i] === "Meta"){
        out += `<div class = "key dark big-key" data ="${arr[i]}">${'Win'}</div>`;
      }
      else if(arr[i] === "Control"){
        out += `<div class = "key dark big-key" data ="${arr[i]}">${'Ctrl'}</div>`;
      }
      else if(arr[i] === ""){
        out += `<div class = "key spaes" data ="${'spase'}">${arr[i]}</div>`;
      }
      else if(arr[i].length == 3){
        out += `<div class = "key dark big-key" data ="${arr[i]}">${arr[i]}</div>`;
      }else if(arr[i].length == 4){
        out += `<div class = "key dark ctrl" data ="${arr[i]}">${arr[i]}</div>`;
      }
      else if(arr[i].length > 3){
        out += `<div class = "key dark shift" data ="${arr[i]}">${arr[i]}</div>`;
      }
      else{ out += `<div class="key upperCase" data ="${arr[i]}" >${arr[i]}</div>`;
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

  if(event.key === 'Backspace' || event.key ==='Tab' || event.key === 'ArrowUp'|| event.key === 'Shift' || event.key === 'Control' || event.key ==='Meta' || event.key ==='Alt' || event.key === 'ArrowLeft' || event.key ==='ArrowDown' || event.key ==='ArrowRight' || event.key === 'Enter' || event.key === 'CapsLock' || event.key === 'Delete' || event.key === ''){

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
    
  }
});








