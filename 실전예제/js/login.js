const id = document.getElementById('username')
const password = document.getElementById('password')
const btnlogin = document.getElementById('btnlogin')

btnlogin.addEventListener('click' , ()=> {
    if(id.value == 'root'){
       if(password.value == '1234'){
            alert('로그인 성공')
            location.href = 'profile.html';
       }else {
            alert('비밀번호를 다시 한번 확인해주세요')
       } 
    }else{
        alert('아이디를 다시 한번 확인해주세요')
    }
})