const k1 = document.querySelector(".a1");

k1.addEventListener("click" , ()=>{
    console.log(k1);
});

const k2 = document.querySelector(".a2");

k2.addEventListener("click" , ()=>{
    console.log(k2);
});

const k3 = document.querySelector(".a3");

k3.addEventListener("click" , ()=>{
    console.log(k3);
});

//===============================================

const list = document.querySelector(".list");
const items = list.children;
const btn1 = document.querySelector(".btn1");

/* i = 1부터하면 첫번째는 콘솔에 찍히지 않음*/  
btn1.addEventListener("click" , ()=>{        
    for(let i=0; i<items.length;i++){
        console.log(items[i].textContent);
    }
});

//===============================================

const box = document.querySelector("#box");

box.addEventListener("mouseenter" , ()=>{
    box.style.backgroundColor = "hotpink";
    box.style.border = "none";
    box.style.width = " 100px";
    box.style.height = "100px";
});

//===============================================

const btnPlus = document.querySelector("#plus1");
const btnReset = document.querySelector("#reset");
const btnMinus = document.querySelector("#minus1");

let num =0;

btnPlus.addEventListener("click" , e=>{
    e.preventDefault();  /* preventDefault()은 기본 이벤트 동작을 중단시킴 */
    num++;
    console.log(num);
})

btnReset.addEventListener("click" , e=>{
    e.preventDefault();
    num =0;
    console.log(num);
})

btnMinus.addEventListener("click" , e=>{
    e.preventDefault();
    num--;
    console.log(num);
})

//===============================================

const btnLeft = document.querySelector("#btnLeft");
const btnRight = document.querySelector("#btnRight");
const box2 = document.querySelector("#box2");
const deg = 45;  /*각도 정하는 변수*/
let num2 =0;  /* 회전 수 */

btnLeft.addEventListener("click" , e=>{
    e.preventDefault();
    num2--;
    box2.style.transform=`rotate(${num2*deg}deg)`;  /* rotateX 라고 바꾸거나 rotateY 라고 바꾸어도 상관없음  */ 
})
btnRight.addEventListener("click" , e=>{
    e.preventDefault();
    num2++;
    box2.style.transform=`rotate(${num2*deg}deg)`;
})

//===============================================

const ex5 = document.querySelector("#ex5");
const box3 = ex5.querySelector("#box3");

ex5.addEventListener("click",()=>{
    let isOn1 = ex5.classList.contains("on");
    console.log(isOn1);

    if(isOn1){ /* isOn1이 true 이면 실행 */ 
        ex5.classList.remove("on");
    }else { /* isOn1이 false 이면 실행 */ 
        ex5.classList.add("on");
    }
});