const h1 = document.querySelector('h1');
const nameForm = document.querySelector('.title');
const nameInput = nameForm.querySelector('input');
const NAME_LS = "name";
const userName = localStorage.getItem(NAME_LS);


function askName(){
    h1.classList.remove('hide');
    h1.classList.add('show');
}

function handelName(e){
    e.preventDefault();
    const nameValue = nameInput.value;
}

function writeName(){
    // 이름 입력
    nameForm.addEventListener('submit',handelName);
    nameForm.classList.remove('show');
    nameForm.classList.add('hide');
}

function loadName(){
    // 이름 저장
    if(userName !== null){
        writeName();
        h1.innerText = ` Do It !`
    }else{
        askName();
    }
}

function init(){
loadName();
}

init();