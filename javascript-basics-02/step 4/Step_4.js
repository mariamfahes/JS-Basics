
var button= document.getElementsByName("button");
button[0].addEventListener("click",function(){
    if(confirm("Reset")){
   document.getElementById("name").value='';
   document.getElementById("surname").value='';
    document.getElementById("city").value='';
}
});