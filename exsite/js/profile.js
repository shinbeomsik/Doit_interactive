const like = document.querySelector("#like");
let num =0;
// like.addEventListener('click' , ()=> {
//     if(num ==0){
//         like.style.color = "red";
//         num =1;
//     }else {
//        like.style.color = "black";
//        num=0;
//     }
// })

// === 은 두 값이 완전 동일한지 비교 즉 데이터 값과 데이터 유형도 똑같아야한다.
// "1" 과 '1' 을 == 로 비교하면 형변환을 해서 true로 나오지만 === 을 사용하면 false 가 나옴
like.addEventListener("click", () => {
    if (like.className === "fa fa-heart") {
        // 클래스 이름을 변경
        like.className = "fa fa-heart-o";
    } else {
        like.className = "fa fa-heart";
    }
});