let saveEl = document.getElementById('entrying'); 
let countEl = document.getElementById('down');
console.log(countEl);
let count = 0;
 function increments(){
    count = count +1;
    countEl.innerText = count;
    console.log(count)
 };
 increments()
  let add = 0;
  
   function save(){
    let countStr = count + ' - ';
    
    saveEl.textContent += countStr;
    countEl.textContent = 0;

    count = 0
    console.log(count);
   };
   save()
//    saveEl.innerText = save() ;
 