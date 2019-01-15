/*左边目录弹出框*/
var hd=document.getElementsByClassName("header-left")[0]
// console.log(hd);
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

// 男士
/*点击男士进入下一层*/
var t2=document.getElementsByClassName("popup-nav-t2")[0];
var pnm=document.getElementsByClassName("popup-nav-man")[0];
t2.onclick=function(){
    for(var i of tn){
        i.style.display="none";
    }
    pnm.style.display="block";
}
/*点击<男士返回上一层*/
var tt2=document.getElementsByClassName("popup-nav-tt2")[0]; 
tt2.onclick=function(){
    for(var i of tn){
        pnm.style.display="none";
        i.style.display="block";
    }
}
/*点击皮衣打开下一层*/
var manpy=document.getElementsByClassName("nav-man-py")[0]
var manna=document.querySelectorAll(".nav-man-a");
var manpiy=document.getElementsByClassName("nav-man-piy")[0]
var manri=document.getElementsByClassName("popup-nav-man-right")[0]
manpy.onclick=function(){
    for(var i of manna){
        i.style.display="none";
        manri.style.display="none"
        manpiy.style.display="block";
    }
}
/*点击<皮衣返回上一层*/
var manpy1=document.getElementsByClassName("nav-man-py1")[0]
manpy1.onclick=function(){
    for(var i of manna){
        i.style.display="block";
        manri.style.display="block"
        manpiy.style.display="none";
    }
}
/*点击皮具打开下一层*/
var manpj=document.getElementsByClassName("nav-man-pj")[0]
var manpij=document.getElementsByClassName("nav-man-pij")[0]
manpj.onclick=function(){
    for(var i of manna){
        i.style.display="none";
        manri.style.display="none"
        manpij.style.display="block";
    }
}
/*点击<皮具返回上一层*/
var manpj1=document.getElementsByClassName("nav-man-pj1")[0]
manpj1.onclick=function(){
    for(var i of manna){
        i.style.display="block";
        manri.style.display="block"
        manpij.style.display="none";
    }
}
/*点击鞋履打开下一层*/
var manxl=document.getElementsByClassName("nav-man-xl")[0]
var manxiel=document.getElementsByClassName("nav-man-xiel")[0]
manxl.onclick=function(){
    for(var i of manna){
        i.style.display="none";
        manri.style.display="none"
        manxiel.style.display="block";
    }
}
/*点击<鞋履返回上一层*/
var manxl1=document.getElementsByClassName("nav-man-xl1")[0]
manxl1.onclick=function(){
    for(var i of manna){
        i.style.display="block";
        manri.style.display="block"
        manxiel.style.display="none";
    }
}
/*点击配饰打开下一层*/
var manps=document.getElementsByClassName("nav-man-ps")[0]
var manpeis=document.getElementsByClassName("nav-man-peis")[0]
manps.onclick=function(){
    for(var i of manna){
        i.style.display="none";
        manri.style.display="none"
        manpeis.style.display="block";
    }
}
/*点击<配饰返回上一层*/
var manps1=document.getElementsByClassName("nav-man-ps1")[0]
manps1.onclick=function(){
    for(var i of manna){
        i.style.display="block";
        manri.style.display="block"
        manpeis.style.display="none";
    }
}
/*点击特别版打开下一层*/
var mantbb=document.getElementsByClassName("nav-man-tbb")[0]
var mantebb=document.getElementsByClassName("nav-man-tebb")[0]
mantbb.onclick=function(){
    for(var i of manna){
        i.style.display="none";
        manri.style.display="none"
        mantebb.style.display="block";
    }
}
/*点击<特别版返回上一层*/
var mantbb1=document.getElementsByClassName("nav-man-tbb1")[0]
mantbb1.onclick=function(){
    for(var i of manna){
        i.style.display="block";
        manri.style.display="block"
        mantebb.style.display="none";
    }
}
/*点击系列与时装秀打开下一层*/
var manszx=document.getElementsByClassName("nav-man-szx")[0]
var manshizx=document.getElementsByClassName("nav-man-shizx")[0]
manszx.onclick=function(){
    for(var i of manna){
        i.style.display="none";
        manri.style.display="none"
        manshizx.style.display="block";
    }
}
/*点击<系列与时装秀返回上一层*/
var manszx1=document.getElementsByClassName("nav-man-szx1")[0]
manszx1.onclick=function(){
    for(var i of manna){
        i.style.display="block";
        manri.style.display="block"
        manshizx.style.display="none";
    }
}
/*点击香氛打开下一层*/
var manxf=document.getElementsByClassName("nav-man-xf")[0]
var manxiangf=document.getElementsByClassName("nav-man-xiangf")[0]
manxf.onclick=function(){
    for(var i of manna){
        i.style.display="none";
        manxiangf.style.display="block";
    }
}
/*点击<香氛返回上一层*/
var manxf1=document.getElementsByClassName("nav-man-xf1")[0]
manxf1.onclick=function(){
    for(var i of manna){
        i.style.display="block";
        manxiangf.style.display="none";
    }
}
/*点击护肤打开下一层*/
var manhf=document.getElementsByClassName("nav-man-hf")[0]
var manhuf=document.getElementsByClassName("nav-man-huf")[0]
manhf.onclick=function(){
    for(var i of manna){
        i.style.display="none";
        manhuf.style.display="block";
    }
}
/*点击<护肤返回上一层*/
var manhf1=document.getElementsByClassName("nav-man-hf1")[0]
manhf1.onclick=function(){
    for(var i of manna){
        i.style.display="block";
        manhuf.style.display="none";
    }
}

// 童装
/*点击童装进入下一层*/
var t3=document.getElementsByClassName("popup-nav-t3")[0];
var pnc=document.getElementsByClassName("popup-nav-child")[0];
t3.onclick=function(){
    for(var i of tn){
        i.style.display="none";
    }
    pnc.style.display="block";
}
/*点击<童装返回上一层*/
var tt3=document.getElementsByClassName("popup-nav-tt3")[0]; 
tt3.onclick=function(){
    for(var i of tn){
        pnc.style.display="none";
        i.style.display="block";
    }
}




/*点击第二级目录打开下一层*/
// var childna=document.querySelectorAll(".nav-child-a");
// var childnr=document.querySelectorAll(".nav-child-return");
// var childnu=document.querySelectorAll(".nav-child-ul");
// // for(var key in childna){
// //     if( key +1-0){ 
// //         console.log(key)
// //         console.log(childnu[0])
// //         console.log(childnu[key])
// //   childna[key].onclick=function(){
// //       for(var key1 in childnu){
// //           if(key1 +1-0){
// //            childnu[key1].style.display="block";  
// //           }
// //       }
// //         for(var i of childna){
// //         i.style.display="none"
// //     }
// //     }
// // }
  
// //}

// for(var a of childna){
//     a.onclick=function(){
//         for(var b of childnu){
//             b.style.display="block";
//         }
//         for(var i of childna){
//             i.style.display="none"
//         }
//     }
// }

/*点击女童（2-13岁）打开下一层*/
var childnt=document.getElementsByClassName("nav-child-nt")[0]
var childna=document.querySelectorAll(".nav-child-a");
var childnvt=document.getElementsByClassName("nav-child-nvt")[0]
childnt.onclick=function(){
    for(var i of childna){
        i.style.display="none";
        childnvt.style.display="block";
    }
}
/*点击<女童（2-13岁）返回上一层*/
var childnt1=document.getElementsByClassName("nav-child-nt1")[0]
childnt1.onclick=function(){
    for(var i of childna){
        i.style.display="block";
        childnvt.style.display="none";
    }
}
/*点击男童（2-13岁）打开下一层*/
var childnat=document.getElementsByClassName("nav-child-nat")[0]
var childnant=document.getElementsByClassName("nav-child-nant")[0]
childnat.onclick=function(){
    for(var i of childna){
        i.style.display="none";
        childnant.style.display="block";
    }
}
/*点击<男童（2-13岁）返回上一层*/
var childnat1=document.getElementsByClassName("nav-child-nat1")[0]
childnat1.onclick=function(){
    for(var i of childna){
        i.style.display="block";
        childnant.style.display="none";
    }
}
/*点击女婴（1-36个月）打开下一层*/
var childny=document.getElementsByClassName("nav-child-ny")[0]
var childnvy=document.getElementsByClassName("nav-child-nvy")[0]
childny.onclick=function(){
    for(var i of childna){
        i.style.display="none";
        childnvy.style.display="block";
    }
}
/*点击<女婴（1-36个月）返回上一层*/
var childny1=document.getElementsByClassName("nav-child-ny1")[0]
childny1.onclick=function(){
    for(var i of childna){
        i.style.display="block";
        childnvy.style.display="none";
    }
}
/*点击男婴（1-36个月）打开下一层*/
var childnay=document.getElementsByClassName("nav-child-nay")[0]
var childnany=document.getElementsByClassName("nav-child-nany")[0]
childnay.onclick=function(){
    for(var i of childna){
        i.style.display="none";
        childnany.style.display="block";
    }
}
/*点击<男婴（1-36个月）返回上一层*/
var childnay1=document.getElementsByClassName("nav-child-nay1")[0]
childnay1.onclick=function(){
    for(var i of childna){
        i.style.display="block";
        childnany.style.display="none";
    }
}

// 礼物
/*点击礼物进入下一层*/
var t4=document.getElementsByClassName("popup-nav-t4")[0];
var png=document.getElementsByClassName("popup-nav-gift")[0];
t4.onclick=function(){
    for(var i of tn){
        i.style.display="none";
    }
    png.style.display="block";
}
/*点击<礼物返回上一层*/
var tt4=document.getElementsByClassName("popup-nav-tt4")[0]; 
tt4.onclick=function(){
    for(var i of tn){
        png.style.display="none";
        i.style.display="block";
    }
}

// 最新消息&展览
/*点击最新消息&展览进入下一层*/
var t5=document.getElementsByClassName("popup-nav-t5")[0];
var pnn=document.getElementsByClassName("popup-nav-news")[0];
t5.onclick=function(){
    for(var i of tn){
        i.style.display="none";
    }
    pnn.style.display="block";
}
/*点击<最新消息&展览返回上一层*/
var tt5=document.getElementsByClassName("popup-nav-tt5")[0]; 
tt5.onclick=function(){
    for(var i of tn){
        pnn.style.display="none";
        i.style.display="block";
    }
}

// 品牌历史&精湛工艺
/*点击品牌历史&精湛工艺进入下一层*/
var t6=document.getElementsByClassName("popup-nav-t6")[0];
var pnb=document.getElementsByClassName("popup-nav-brand")[0];
t6.onclick=function(){
    for(var i of tn){
        i.style.display="none";
    }
    pnb.style.display="block";
}
/*点击<品牌历史&精湛工艺返回上一层*/
var tt6=document.getElementsByClassName("popup-nav-tt6")[0]; 
tt6.onclick=function(){
    for(var i of tn){
        pnb.style.display="none";
        i.style.display="block";
    }
}