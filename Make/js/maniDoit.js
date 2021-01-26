const h1 = document.querySelector('h1');
const nameForm = document.querySelector('.title');
const nameInput = nameForm.querySelector('input');
const NAME_LS = "name";
const userName = localStorage.getItem(NAME_LS);



function handelName(e){
    e.preventDefault();
    const nameValue = nameInput.value;
    console.log('a');
}

function writeName(){
// 이름 입력
nameForm.addEventListener('submit',handelName);
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