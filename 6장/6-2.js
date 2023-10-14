// const frame =  document.querySelector(".box1");
//  //#은 id를 의미하기에 wrap 라는 이름의 아이디를 가진 요소를 가지고옴 

//  //const 변수는 절대 변경하면 안되는 데이터를 저장할 때 사용
//  //let 변수는 계속 변할수 있는 데이터를 저장할 때 사용 

//  //js에서 = 기호는 오른쪽 구문을 먼저 실행해서 왼쪽에 대입하는 연산자
//  console.log(frame);  //콘솔에 frame라는 변수명을 가진 정보를 출력

// const items = document.querySelectorAll("#wrap article");
// //               ┌ 반복시킬 그룹
// for(let item of items){
// //       └ 반복하는 요소가 담길 변수
//     console.log(item); //그룹에 담겨 있는 요소의 개수만큼 자동 반복
// }


// const items = document.querySelectorAll("#wrap article");
// //        ┌반복하기위한 초기 순서값   ┌ 반복할 횟수의 최댓값
// for(let i=0;                  i<items.length;  i++){
// //      └ 반복하는 순서가 담길 변수               └증감연산자  
//     console.log(items[i]); //반복 실행할 구문
// }

// const list = document.querySelector(".list");
// const items = list.children;

// console.log(items); //콘솔창을 보면 4개로 묶인것을 볼수 있다.

// console.log(items[0]); //items에 0번째 요소를 출력
// console.log(items[1]); //items에 1번째 요소를 출력
// console.log(items[2]); //items에 2번째 요소를 출력
// console.log(items[3]); //items에 3번째 요소를 출력

// const item2 = document.querySelector(".item2");
// //클래스가 item2인 요소를 item2 변수에 저장
// console.log(item2.parentElement); //item2을 기준으로 부모요소를 출력

// const li = document.querySelector("li");
// console.log(li.closest("main")); 
// //              └ 선택자를 기준으로 상위 부모 요소를 쉽게 탐색 가능

const item3 = document.querySelector(".item3");
console.log(item3.previousElementSibling);
//                 └item3의 이전 형제 요소를 선택
console.log(item3.nextElementSibling);
//                 └item3의 다음 형제 요소를 선택