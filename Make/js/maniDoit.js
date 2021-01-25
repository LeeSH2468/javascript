const h1 = document.querySelector('h1');
const form = document.querySelector('.title');
const NAME_LS = "name";
const userName = localStorage.getItem(NAME_LS);



function handelName(){
    console.log('test')
}

function writeName(){
// 이름 입력
form.addEventListener('submit',handelName);
}


function loadName(){
// 이름 저장
 if(userName !== null){
    writeName();
     h1.innerText = ` Do It !`
}else{
    console.log('null')
 }
 
 
 
}

function init(){
loadName();
}

init();