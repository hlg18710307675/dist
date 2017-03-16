/**
 * Created by 刚子 on 2017/3/10.
 */
window.onload = function () {
    // 头部搜索
    var seach = document.querySelector(".seach_box");
    window.onscroll = function(){ //滚动条事件，控制搜索条的透明度
        var t = document.documentElement.scrollTop || document.body.scrollTop;
        // console.log(t);
        if( t> 150 && 300>= t){
            seach.style.background = "rgba(202,23,32,0.4)";
        }else if(t> 300){
            seach.style.background = "rgba(202,23,32,0.8)";
        }else{
            seach.style.background = "rgba(202,23,32,0)";
        }
    }
    // 轮播图
    var lunBo = document.querySelector(".ad_lunbo>ul");
    function getStyle(obj,attr){
        if (obj.currentStyle) {
            return obj.currentStyle[attr]
        }else{
            return getComputedStyle(obj,false)[attr]
        }
    }
    var timeInter,i=1;
    var lunBo_dot = document.querySelectorAll(".ad_lunbo>ol>li");
    timeInter = setInterval(playLnBo,3000);
    function playLnBo(){
        i++;
        if(i > 9){
            i = 1;
            // lunBo_dot[i-1].style.background = "#fff";
            lunBo.style.transition = "transform 0s";
            lunBo.style.transform = "translateX(-"+i+"0%)";
        }else{
            // lunBo_dot[i-1].style.background = "#fff";
            lunBo.style.transition = "transform 1s";
            lunBo.style.transform = "translateX(-"+i+"0%)";
        }
        for (var k = 0;k<lunBo_dot.length;k++){
            lunBo_dot[k].style.background = "transparent";
            if(k == i-1){
                lunBo_dot[k].style.background = "#fff";
            }else if(i==9){
                lunBo_dot[0].style.background = "#fff";
            }

        }
        // lunBo.animate({transform:"translateX(-"+i+"0%)"},500);
    }
    // lunBo.style.transform = "translateX(-20%)";
}