// window.addEventListener("DOMContentLoaded", (() => {




// }))


const arr = ['~`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'Del', 'CapsLock','A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'Enter', 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', 'ArrowUp', 'Shift', 'Ctrl', 'Win', 'Alt', '', 'Alt','Ctrl', 'ArrowLeft',  'ArrowDown', 'ArrowRight'];

const pageDom = () => {
  document.querySelector('#body').innerHTML = `<div class="container">
  <input class="input" type="text">
  <div class="keyboard">
    
    
  </div>
</div>`;
};
pageDom();


const keyBoared = document.querySelector('.keyboard');

  const init = () =>{

    let out = '';
    for (let i = 0; i < arr.length; i++){
      if( i == 0){
        out += `<div class = "key dark" data ="${arr[i]}">${arr[i]}</div>`;
      }
      else if(arr[i] === 'ArrowUp'){
        out += `<div class = "key dark padding-none" data ="${arr[i]}">${'<img src="./asset/up.png"  class="img "></img>'}</div>`
      }
      else if(arr[i] === 'ArrowDown'){
        out += `<div class = "key dark dawn padding-none" data ="${arr[i]}">${'<img src="./asset/up.png"  class="img "></img>'}</div>`;
      }
      else if(arr[i] === 'ArrowLeft'){
        out += `<div class = "key dark left padding-none" data ="${arr[i]}">${'<img src="./asset/up.png"  class="img "></img>'}</div>`;
      }
      else if(arr[i] === 'ArrowRight'){
        out += `<div class = "key dark rigth padding-none" data ="${arr[i]}">${'<img src="./asset/up.png"  class="img "></img>'}</div>`;
      }
      else if(arr[i] === ''){
        out += `<div class = "key spaes" data ="${arr[i]}">${arr[i]}</div>`;
      }
      else if(arr[i].length == 3){
        out += `<div class = "key dark big-key" data ="${arr[i]}">${arr[i]}</div>`;
      }else if(arr[i].length == 4){
        out += `<div class = "key dark ctrl" data ="${arr[i]}">${arr[i]}</div>`;
      }
      else if(arr[i].length > 3){
        out += `<div class = "key dark shift" data ="${arr[i]}">${arr[i]}</div>`;
      }
      else{ out += `<div class="key" data ="${arr[i]}" >${arr[i]}</div>`;
    }
    }

    keyBoared.innerHTML = out;

  }

  init();




  
