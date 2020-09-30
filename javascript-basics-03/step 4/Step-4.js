var zer = document.querySelector('button')
var passwd = document.getElementById("password")
var confirm = document.getElementById("confirmation")

zer.addEventListener("click", function func(){
    if (passwd.value !== confirm.value){
        passwd.style.borderColor = "red"
        confirm.style.borderColor = "red"
    }else {
        passwd.style.borderColor = ""
        confirm.style.borderColor = ""
    }
})