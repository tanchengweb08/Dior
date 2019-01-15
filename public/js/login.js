var adv=document.getElementsByClassName("adv")[0];
var lbd=document.getElementsByClassName("login-body")[0]
window.onload=function(){
    adv.style.top="0px";
    // adv.style.display="block";
}
adv.children[0].children[0].onclick=function(){
    adv.style.top="-70px";
    // adv.style.display="none";
    lbd.style.marginTop="0px";
}