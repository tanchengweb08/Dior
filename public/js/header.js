/*左边目录弹出框*/
var hd=document.getElementsByClassName("header-left")[0]
console.log(hd);
var hp=document.getElementsByClassName("popup")[0]
hd.onclick=function(){
hp.style.display="block"
}
/*关闭按钮关闭弹出框*/
var hpc=document.getElementsByClassName("popup-close")[0].getElementsByTagName("button")[0]
hpc.onclick=function(){
hp.style.display="none"
}
/*点击女士进入下一层*/
var t1=document.getElementsByClassName("popup-nav-t1")[0];
var tn=document.querySelectorAll(".nav-bt");
var pnl=document.getElementsByClassName("popup-nav-lady")[0];
//console.log(tn);
t1.onclick=function(){
    for(var i of tn){
        i.style.display="none";
    }
    pnl.style.display="block";
}
/*点击<女士返回上一层*/
var tt1=document.getElementsByClassName("popup-nav-tt1")[0]; 
tt1.onclick=function(){
    for(var i of tn){
        pnl.style.display="none";
        i.style.display="block";
    }
}
/*点击成衣打开下一层*/
var ladycy=document.getElementsByClassName("nav-lady-cy")[0]
var ladycyn=document.querySelectorAll(".nav-lady-a");
var ladychengy=document.getElementsByClassName("nav-lady-chengy")[0]
var ladyri=document.getElementsByClassName("popup-nav-lady-right")[0]
ladycy.onclick=function(){
    for(var i of ladycyn){
        i.style.display="none";
        ladyri.style.display="none"
        ladychengy.style.display="block";
    }
}
/*点击<成衣返回上一层*/
var ladycy1=document.getElementsByClassName("nav-lady-cy1")[0]
ladycy1.onclick=function(){
    for(var i of ladycyn){
        i.style.display="block";
        ladyri.style.display="block"
        ladychengy.style.display="none";
    }
}
/*点击手提包打开下一层*/
var ladystb=document.getElementsByClassName("nav-lady-stb")[0]
var ladyshoutib=document.getElementsByClassName("nav-lady-shoutib")[0]
ladystb.onclick=function(){
    for(var i of ladycyn){
        i.style.display="none";
        ladyri.style.display="none"
        ladyshoutib.style.display="block";
    }
}
/*点击<手提包返回上一层*/
var ladystb1=document.getElementsByClassName("nav-lady-stb1")[0]
ladystb1.onclick=function(){
    for(var i of ladycyn){
        i.style.display="block";
        ladyri.style.display="block"
        ladyshoutib.style.display="none";
    }
}
/*点击鞋履打开下一层*/
var ladyxl=document.getElementsByClassName("nav-lady-xl")[0]
var ladyxiel=document.getElementsByClassName("nav-lady-xiel")[0]
ladyxl.onclick=function(){
    for(var i of ladycyn){
        i.style.display="none";
        ladyri.style.display="none"
        ladyxiel.style.display="block";
    }
}
/*点击<鞋履返回上一层*/
var ladyxl1=document.getElementsByClassName("nav-lady-xl1")[0]
ladyxl1.onclick=function(){
    for(var i of ladycyn){
        i.style.display="block";
        ladyri.style.display="block"
        ladyxiel.style.display="none";
    }
}
/*点击珠宝打开下一层*/
var ladysszb=document.getElementsByClassName("nav-lady-sszb")[0]
var ladyzhub=document.getElementsByClassName("nav-lady-zhub")[0]
ladysszb.onclick=function(){
    for(var i of ladycyn){
        i.style.display="none";
        ladyri.style.display="none"
        ladyzhub.style.display="block";
    }
}
/*点击<珠宝返回上一层*/
var ladysszb1=document.getElementsByClassName("nav-lady-sszb1")[0]
ladysszb1.onclick=function(){
    for(var i of ladycyn){
        i.style.display="block";
        ladyri.style.display="block"
        ladyzhub.style.display="none";
    }
}
/*点击配饰打开下一层*/
var ladyps=document.getElementsByClassName("nav-lady-ps")[0]
var ladypeis=document.getElementsByClassName("nav-lady-peis")[0]
ladyps.onclick=function(){
    for(var i of ladycyn){
        i.style.display="none";
        ladyri.style.display="none"
        ladypeis.style.display="block";
    }
}
/*点击<配饰返回上一层*/
var ladyps1=document.getElementsByClassName("nav-lady-ps1")[0]
ladyps1.onclick=function(){
    for(var i of ladycyn){
        i.style.display="block";
        ladyri.style.display="block"
        ladypeis.style.display="none";
    }
}
/*点击腕表打开下一层*/
var ladywb=document.getElementsByClassName("nav-lady-wb")[0]
var ladywanb=document.getElementsByClassName("nav-lady-wanb")[0]
ladywb.onclick=function(){
    for(var i of ladycyn){
        i.style.display="none";
        ladyri.style.display="none"
        ladywanb.style.display="block";
    }
}
/*点击<腕表返回上一层*/
var ladywb1=document.getElementsByClassName("nav-lady-wb1")[0]
ladywb1.onclick=function(){
    for(var i of ladycyn){
        i.style.display="block";
        ladyri.style.display="block"
        ladywanb.style.display="none";
    }
}
/*点击时装秀打开下一层*/
var ladyszx=document.getElementsByClassName("nav-lady-szx")[0]
var ladyshizx=document.getElementsByClassName("nav-lady-shizx")[0]
ladyszx.onclick=function(){
    for(var i of ladycyn){
        i.style.display="none";
        ladyri.style.display="none"
        ladyshizx.style.display="block";
    }
}
/*点击<时装秀返回上一层*/
var ladyszx1=document.getElementsByClassName("nav-lady-szx1")[0]
ladyszx1.onclick=function(){
    for(var i of ladycyn){
        i.style.display="block";
        ladyri.style.display="block"
        ladyshizx.style.display="none";
    }
}
/*点击香氛打开下一层*/
var ladyxf=document.getElementsByClassName("nav-lady-xf")[0]
var ladyxiangf=document.getElementsByClassName("nav-lady-xiangf")[0]
ladyxf.onclick=function(){
    for(var i of ladycyn){
        i.style.display="none";
        ladyxiangf.style.display="block";
    }
}
/*点击<香氛返回上一层*/
var ladyxf1=document.getElementsByClassName("nav-lady-xf1")[0]
ladyxf1.onclick=function(){
    for(var i of ladycyn){
        i.style.display="block"; 
        ladyxiangf.style.display="none";
    }
}
/*点击香氛打开下一层*/
var ladycz=document.getElementsByClassName("nav-lady-cz")[0]
var ladycaiz=document.getElementsByClassName("nav-lady-caiz")[0]
ladycz.onclick=function(){
    for(var i of ladycyn){
        i.style.display="none";
        ladycaiz.style.display="block";
    }
}
/*点击<香氛返回上一层*/
var ladycz1=document.getElementsByClassName("nav-lady-cz1")[0]
ladycz1.onclick=function(){
    for(var i of ladycyn){
        i.style.display="block"; 
        ladycaiz.style.display="none";
    }
}
/*点击护肤打开下一层*/
var ladyhf=document.getElementsByClassName("nav-lady-hf")[0]
var ladyhuf=document.getElementsByClassName("nav-lady-huf")[0]
ladyhf.onclick=function(){
    for(var i of ladycyn){
        i.style.display="none";
        ladyhuf.style.display="block";
    }
}
/*点击<护肤返回上一层*/
var ladyhf1=document.getElementsByClassName("nav-lady-hf1")[0]
ladyhf1.onclick=function(){
    for(var i of ladycyn){
        i.style.display="block"; 
        ladyhuf.style.display="none";
    }
}