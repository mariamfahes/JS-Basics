var x = document.getElementById("name");
var div=document.createElement('div');
document.body.appendChild(div);
x.onchange = function(){
    div.innerHTML = "<p>"+x.value+"</p>";

}
// x.addEventListener("change",function(){
// });