# 바닐라JS

- 바닐라 스크립트란?
  - 라이브러리, 프레임워크를 사용하지 않은 순수 자바스크립트를 의미한다.



## 노마드코더 바닐라JS

- 선행 : Html, css
- 준비물 : VSC(visual studio code), 구글 크롬, 깃허브

- 목표 : 작은 미니 앱 만들기, 모멘텀 만들기 ( 모멘텀 : 크롬 확장 앱, todolist)



### 자바스크립트

- 웹에서 쓰이는 하나뿐인 프로그래밍 언어. 웹에서 쓰이는 언어는 javascript 하나뿐이다.

- Javascript = ECMAScript(코어) + BOM(Browser Object Model) (모델) + DOM(Document Object Model)(모델)

  1개의 코어, 2개의 모델

  

###  ES5, ES6

- ECMAScript : 자바스크립트의 표준 규격(매뉴얼)

- ECMAScript가 생긴 이유 : 다양한 웹 브라우저에서 공통되게 작동하는 표준 규격이 필요해져 만들어짐.

  


###  변수

- 변하는 수(가변적)
- 사용순서
  1. 변수를 생성
  2. 변수를 초기화
  3. 사용

- 종류
  1. let : 변수. 재정의 가능
  2. const : 상수. 안정적인 수, 변경 불가(변경시 오류)
  3. var : 변수. 재정의 가능(구분 x )
- 기본값으로 const를 쓰고 변경이 필요한 변수 생성시 let 사용 (var는 사용하지 않음)
- 변수 명 시작은 소문자, 띄어쓰기 불가
- 변수 명은 Camel case(카멜케이스) 방식으로 사용
  
  - 카멜케이스 : 단어의 시작을 대문자로 표기(userList, toDoList)
  
    

###  주석

- 실행되지 않는 메모

- ```
  한 줄 : //
  여러 줄 : /* */
  ```



###  타입

- String(스트링) : 문자타입. 따옴표(" ", ' ') 사이에 작성하면 문자 타입으로 인식
- Boolean(불리안) : true / false 참/거짓으로 구분
- Number(넘버) : 숫자타입(정수)
- Float(플롯) : 소숫점이 있는 수(실수)



###  데이터타입 정렬

- Array(어레이) -배열

  -  배열(리스트) 형식. 

  - [  ] (브라켓) 안에 작성. 
  
  - 위 타입에 있는 형식으로만 작성 가능

  - 어레이의 시작은 0번째
  
      ```javascript
      weeks : ["Mon","Tue","Wed","Thu","Fri","Set","Sun"]
      ```
  
- Object(오브젝트)-객체

  - 실제 객체를 정의

  - 키-값 형식으로 정보를 저장

  - label 에 date 값을 줄 수 있음

  - {} (컬리 브라켓) 안에 작성.

  - value에 이름 지정 가능

  - 오브젝트 안에 Array(배열)로 정의 가능.

  - const로 정의해도 내부 값은 변경 가능(오브젝트 변수 명은 변경 불가)
  
    ```javascript
    const maniInfo = {
      name : "mani",
    career : "Web Publisher",
      ability : ["html","css","javascript"],
      education : [
            {
              year:2020,
              job : "Web Publisher",
              location : "Seoul"
            },
            {
              year:2019,
              job : "Student manager",
              location : "Philippines"
            },
            {
              year:2018,
              job : "Student",
              location : "Korea"
            }		
      ]
    }
    
  console.log(maniInfo.education)
    ```
  
  

### 함수
- 어떤 것의 수행하는 기능

- 원하는 만큼 사용 가능

  ```javascript
  function sayHello(){
      console.log('Hello!'); // 함수 정의
  }
  
  sayHello(); //함수 실행
  ```

#### 인자(argument  or  parameter) 

- 함수 내부에 들어가는 것 

- 변수 같은 것. 미리 정의해 줘야함.

- 외부에 있는 데이터를 읽을 수 있게 해줌

- ```javascript
  console.log("Hi!");
  console = object
  log = key
  "Hi!" = argument
  // -------------------
  function 함수명(인자){
      함수내용
  }
  
  function sayHello(name){
      console.log('Hello!',name); // 함수 정의
  }
  sayHello("mani")
  // 결과--------
  Hello! mani
  ```





#### 백팁(`)

- 백팁 내부에 ${} 작성

  ```javascript
  function sayWho(name, who){
      console.log(`Hello. I am ${name}. I'm ${who}`);
  }
  ```

  

#### return

- 값을 반환

  ```javascript
  function sayWho(name, who){
      return (`Hello. my name is ${name}. I'm ${who}`);
  }
  
  const whoAmI = sayHello("mani","Publisher");
  
  console.log(whoAmI)
  ```

- const whoAmI 는 sayWho 함수의 return 값과 같음

  

#### console.log

  - 브라우저의 내장 함수(built-in function)

  - console.log(maniInfo.education)

  - Object(객체) = console / maniInfo

  - Key (값)= log / education

  - Argument(인자) = log( ) 내부에 들어가는 값

  - console.dir = 할 수 있는 모든 것(이벤트)을 보여줌

    

### 계산기 함수

- 정의한 함수 calculator 는 객채이다

```javascript
const calculator = {
    plus : function(a, b){
        return (`${a}+${b}= ${a+b}`);
    },
    minis : function(a, b){
        return (`${a}-${b}= ${a-b}`);
    },
    multiple : function(a, b){
        return (`${a}*${b}= ${a*b}`);
    },
    divide : function(a, b){
        return (`${a}/${b}= ${a/b}`);
    },
    remainder : function(a, b){
        return (`${a}%${b}= ${a%b}`);
    },
    power : function(a, b){
        return (`${a}**${b}= ${a**b}`);
    }
}

const answer =[
  calculator.plus(5,5),
  calculator.minis(1,87),
  calculator.multiple(5,6),
  calculator.divide(68,5),
  calculator.remainder(234,5),
  calculator.power(3,2)
]
console.log(answer)
```



### DOM(document Object Module)

- document 객체에는 이미 정의되어있는 많은 함수가 있음

- 모든 함수는 DOM 형태로 변경 가능

- 자바스크립트로 선택한 것 = 객체

- id = document.getElementById("id"); //지정한 id

- class = document.getElementByClassName("class"); //지정한 class

- tag = document.getElementByTagName("tagname") //기본 태그명 (h1,h2,div)

- querySelector

  - 노드의 첫번째 자식을 반환 
  - 원하는 것 하나만 선택 가능

  ```javascript
  const title = document.getElementById("title")
  console.log(title)
  ```

- title.innerHTML = "test"; //태그 내부에 내용 변경

- title.style.color = "red"; // css스타일 변경

- document.title = "test" //상단 타이틀 변경(<title></title> 에 들어가는 내용)






### if , if-else (조건문)

 ```javascript 
  if(조건){
      조건이 참일시 실행
  } else{
      조건이 거짓일시 실행
  }
 ```

	#### 논리연산자

- and = "&&"
- or = "||"
- same = "==="



### * prompt

- alert와 비슷한 기능. 팝업창에 form 형식으로 입력할 수 있는 창이 뜸

- 오래된 기능. 거의 쓰지 않음(html로 더 나은 형식을 만들 수 있음)

  ```javascript
  const question = prompt("How old are you?");    
      if(question > 19){        
        alert("ok");    
      }else{        
        alert("no");    
      }
  ```

  

### 이벤트

- 이벤트 : 웹 사이트에서 발생하는 것(click, resize, submit, input, change, load, before, closing, printing 등)

- 이벤트에서 함수 작성시 ()를 붙이면 바로 실행 / 안붙이면 이벤트 발생시 실행

 ```javascript
    title.addEventListener('click',handler); // 클릭시 실행
    title.addEventListener('click',handler());//바로실행, 클릭시 기능x
 ```

- 이벤트 참조 MDN사이트 : [Html JavaScript DOM event MDN](https://developer.mozilla.org/ko/docs/Web/Events)

  

#### addEventListener

- 이벤트 등록하는 방법(가장 권장하는 방법)

- 여러 이벤트 핸들러 등록 가능

- ie8이하 지원x (ie8이하는 attachEvent)

  ```javascript
  name.addEventListener('click',handlerClick);
  ```
  
#### className

- 함수의 모든 클래스 명 찾기

  ```javascript
  const className = name.className;
  console.log(className);
  ```
  

#### querySelector

- 선택자
  
- selectors 형태는 css와 같이 표기(#id 또는 .class)
  
  ```javascript
  element = baseElement.querySelector(selectors);
  
  const myDiv = document.querySelector(".a"),
        child = myDiv.querySelector("h1");
  // child = myDiv안에 있는 h1
  ```
#### querySelectorAll

- 모든 것을 선택
  
- 배열 형식
  
  ```javascript
  element = baseElement.querySelectorAll(selectors);
  
  const myDiv = document.querySelectorAll(".a");
  ```
#### classList
- class를 조작
  ```javascript
  classList.add() //클래스 추가
  classList.remove() //클래스 제거
  classList.contains() //값 체크(true/false)
  classList.toggle() //클래스값 여부를 체크하고 추가,제거
  
  document.classList.contains('className');
  
  ```





### 시계

- 현재시간 얻기

  ```javascript
  const date = new Date();
  date.getDay() //요일 일~토=>0~6
  date.getDate() // 날짜
  date.getHours() //시간
  date.getMinutes() //분
  
  ```

- setInterval(함수, 실행시간 간격) : 일정 시간마다 자동으로 변경 



### 삼항연산자

- if문 축약형

- 조건 ?  참일 때 : 거짓일 때

  ```
  seconds < 10 ? `0${seconds}` : seconds
  ```

  0+seconds 는 문자열로 인식. 백팁으로 감싸줘야한다.
  
  

### 로컬스토리지

- 컴퓨터에 사용자 정보 기억