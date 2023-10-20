// 1번
const link = document.querySelector("#naver1");
link.addEventListener("click", ()=>{
    console.log("링크를 클릭했음");
})
// 2번
const link2 = document.querySelector("#naver2");
link2.addEventListener("click", (e)=>{
    e.preventDefault();
    console.log("링크를 클릭했음");
})


// =================================

const box = document.querySelector("#box");
box.addEventListener("mouseenter",()=>{
    box.style.backgroundColor = "hotpink";
})

box.addEventListener("mouseleave",()=>{
    box.style.backgroundColor = "aqua";
})

// =================================

const list = document.querySelectorAll(".list li");
for(let el of list){
    el.addEventListener("click", e=>{
        e.preventDefault();
        console.log(e.currentTarget.innerText);
    })
}

// =================================

const btnPlus = document.querySelector("#plus1");
const btnReset = document.querySelector("#reset");
const btnMinus = document.querySelector("#minus1");

let num =0;

btnPlus.addEventListener("click" , e=>{
    e.preventDefault();
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

// =================================

const myName = "이순신";
console.log("myName장군님");

const myName1 = "이순신";
console.log(`${myName1}장군님`);

// =================================

const btnLeft = document.querySelector("#btnLeft");
const btnRight = document.querySelector("#btnRight");
const box2 = document.querySelector("#box2");
const deg = 45;
let num2 =0;

btnLeft.addEventListener("click" , e=>{
    e.preventDefault();
    num2--;
    box2.style.transform=`rotate(${num2*deg}deg)`;
})
btnRight.addEventListener("click" , e=>{
    e.preventDefault();
    num2++;
    box2.style.transform=`rotate(${num2*deg}deg)`;
})