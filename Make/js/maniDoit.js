const nameh1 = document.querySelector('h1');
const nameForm = document.querySelector('.title');
const nameInput = nameForm.querySelector('input');
const NAME_LS = "username";
const planBoard = document.querySelector('.plan_board');


// 1. 이름입력하기
function saveName(text){
    localStorage.setItem(NAME_LS,text);
}

function askName(){
    nameForm.addEventListener('submit',handelName);
    nameh1.classList.add('hide');
    nameForm.style.display = 'flex';
}

function handelName(e){
    e.preventDefault();
    const nameValue = nameInput.value;
    writeName(nameValue);
    saveName(nameValue);
}

function writeName(text){
    // 이름 입력
    nameForm.style.display = 'none';
    planBoard.style.display = 'block';
    nameh1.classList.remove('hide');
    nameh1.innerText = `${text}, Do It !`
}

function loadName(){
    const userName = localStorage.getItem(NAME_LS);
    // 이름 저장
    if(userName !== null){
        //값O
        writeName(userName);
    }else{
        //값X
        askName();
    }
}

// 2. 할 일 추가

loadName();