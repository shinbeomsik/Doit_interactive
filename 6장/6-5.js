const wrap = document.querySelector("#wrap1");
const box = wrap.querySelector("#ex1-1");

wrap.addEventListener("click",()=>{
    box.style.backgroundColor = "hotpink";
});

// =============================================

const wrap2 = document.querySelector("#wrap2");
const box2 = wrap2.querySelector("#ex1-2");

wrap2.addEventListener("click",()=>{
    wrap2.classList.add("on");
});

// =============================================

const wrap3 = document.querySelector("#wrap3");
const box3 = wrap3.querySelector("#ex2-1");

wrap3.addEventListener("click",()=>{
    let isOn = wrap3.classList.contains("on");
    console.log(isOn);
    wrap3.classList.add("on");
});

// =============================================
const wrap4 = document.querySelector("#wrap4");
const box4 = wrap4.querySelector("#ex2-2");

wrap4.addEventListener("click",()=>{
    let isOn1 = wrap4.classList.contains("on");
    console.log(isOn1);

    if(isOn1){
        wrap4.classList.remove("on");
    }else {
        wrap4.classList.add("on");
    }
});