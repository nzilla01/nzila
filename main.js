const display = document.getElementById("displaytop");
const answer= document.getElementById('displaybottom');

function data(number){
  display.innerText +=number

}
function signs(opera){
  display.innerText+= opera
}
  value =0
function clearAll(clear){
  display.innerText = clear;
  answer.innerText = clear;
  
}
clearAll('')
function del(){
  display.innerHTML= display.innerText.slice(0,-1)
}
function equalTo(){
 answer.innerText= eval(display.innerText);
  }

