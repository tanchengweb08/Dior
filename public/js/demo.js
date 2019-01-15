//轮播
var demo=document.getElementById("demo");
var dul=demo.getElementsByTagName("ul")[0];
var dli=dul.getElementsByTagName("li");
var speed=-dli[0].offsetWidth;
var psp=document.getElementById("point").getElementsByTagName("span")
function move(){
    dul.style.left=this.dul.offsetLeft+speed+"px";
    if(dul.offsetLeft<=-8640){
        dul.style.left=0;
    }
    if(dul.offsetLeft>0){
        dul.style.left=-1440*(dli.length-1)+"px";
    }
    point();
    // console.log(dul.offsetLeft)
}
time=setInterval(move,2000);
// console.log(dul.offsetWidth)
// console.log(dli[0].offsetWidth)
//小圆点
function point(){
    var pw=dul.offsetLeft/-dli[0].offsetWidth;
    for(var i=0;i<psp.length;i++){
        psp[i].className=""
    }
    psp[pw].className="co";
    // console.log(psp[pw]);
}
//鼠标进入停止轮播
demo.onmouseover=function(){clearInterval(time)};
//鼠标移出继续轮播
demo.onmouseout=function(){time=setInterval(move,2000)};
//点击按钮
 var dar=document.getElementById("demo-arrow");
var dara=dar.getElementsByTagName("a");
// console.log(dara);
// var a1=document.querySelector(".a1")
// console.log(a1  )
//左按钮
dara[0].onclick=function(){
    speed=dli[0].offsetWidth;
    setTimeout(move,0)
}
//右按钮
dara[1].onclick=function(){
    speed=-dli[0].offsetWidth;
    time=setTimeout(move,0)
} 
//a1.onclick=function(){setTimeout( move,0)}
//小圆点点击
for(var i=0;i<psp.length;i++){
    var j;
    psp[i].j=i;
    psp[i].onclick=function(){
        for(var i=0;i<psp.length;i++){
        psp[i].className=""
    }
        this.className="co";
        dul.style.left=-dli[0].offsetWidth*this.j+"px";
        // console.log(this.j)
    }

}