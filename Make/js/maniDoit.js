const nameh1 = document.querySelector('h1');
const nameForm = document.querySelector('.title');
const nameInput = nameForm.querySelector('input');
const NAME_LS = "name";
const userName = localStorage.getItem(NAME_LS);

function saveName(text){
    localStorage.setItem();

}

function askName(){
    nameForm.addEventListener('submit',handelName);
    nameh1.style.display = 'none';
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
}

function loadName(){
    // 이름 저장
    if(userName !== null){
        //값O
        writeName();
        nameh1.innerText = ` Do It !`
    }else{
        //값X
        askName();
    }
}

function init(){
loadName();
}

init();