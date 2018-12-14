var hd=document.getElementsByClassName("header-left")[0]
console.log(hd);
var hp=document.getElementsByClassName("popup")[0]
hd.onclick=function(){
    hp.style.display="block"
}