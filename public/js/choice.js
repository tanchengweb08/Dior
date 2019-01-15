//轮播
var cho=document.getElementsByClassName("choice")[0]
var clb=document.getElementsByClassName("choice-lunbo")[0]
var clb1=document.getElementsByClassName("choice-lunb");
var leng=-(clb1[0].offsetWidth+200);
var a=window.getComputedStyle(clb).left

function lunbo(){
    clb.style.left=this.clb.offsetLeft+leng+"px";
    if(clb.offsetLeft<-1440){
        clb.style.left=0
    }
    if(clb.offsetLeft>0){
        clb.style.left="-1440px";
    }
    yd();
}
time=setInterval(lunbo,2000);
//小圆点
var chp=document.getElementsByClassName("choice-point")[0];
var chpsp=chp.getElementsByTagName("span");
function yd(){
    var xb=clb.offsetLeft/-1440;
    for(var i=0;i<chpsp.length;i++){
        chpsp[i].className="";
    }

    chpsp[xb].className="col";
}
 //鼠标进入停止轮播
 cho.onmouseover=function(){clearInterval(time)};
 //鼠标移出继续轮播
 cho.onmouseout=function(){time=setInterval(lunbo,2000)};

 //点击按钮
 var char=document.getElementsByClassName("choice-arrow")[0];
 var chara=char.getElementsByTagName("a");
 //左按钮
 chara[0].onclick=function(){
    leng=clb1[0].offsetWidth+200;
    setTimeout(lunbo,0)
 }
 //右按钮
 chara[1].onclick=function(){
    leng=-(clb1[0].offsetWidth+200);
    time=setTimeout(lunbo,0)
 } 
 //小圆点点击
 for(var i=0;i<chpsp.length;i++){
     var j;
     chpsp[i].j=i;
     chpsp[i].onclick=function(){
         for(var i=0;i<chpsp.length;i++){
         chpsp[i].className=""
     }
         this.className="col";
         clb.style.left=-1440*this.j+"px";
     }

 }