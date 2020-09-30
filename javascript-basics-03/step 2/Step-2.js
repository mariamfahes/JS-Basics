document.querySelector("#hide").addEventListener("click", ()=> fun("hide"));
document.querySelector("#show").addEventListener("click", ()=> fun("show"));
function fun(id){
    if(id == "hide")
        document.querySelector("#texte").style.display= "none";
    
    else 
        document.querySelector("#texte").style.display= "block";
    
}