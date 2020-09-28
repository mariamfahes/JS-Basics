let shoesize = window.prompt("enter shoe size");
let birthyear = window.prompt("enter birth year ");
const calc = (shoesize, birthyear) =>{
    let res=shoesize*2;
    res += 5;
    res = 50;
    res -= birthyear;
    res += 1766;
    return res;
}
 alert(calc(shoesize, birthyear));