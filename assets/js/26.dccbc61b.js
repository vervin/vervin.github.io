(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{540:function(n,s,a){"use strict";a.r(s);var e=a(9),t=Object(e.a)({},function(){var n=this,s=n.$createElement,a=n._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h2",{attrs:{id:"轮播是基础特效中较有代表性的一种"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#轮播是基础特效中较有代表性的一种","aria-hidden":"true"}},[n._v("#")]),n._v(" 轮播是基础特效中较有代表性的一种")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("<!DOCTYPE html>\n<html>\n<head>\n<meta charset=\"utf-8\">\n\n<meta name=\"copyright\" content=\"谢尔铎Sheldon\">\n<meta name=\"viewport\"\n      content=\"width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0\">\n<meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n<title>无缝滚动轮播图</title>\n<style>\n        *{\n            margin:0;\n            padding:0;\n            list-style: none;\n        }\n    #box{\n        width:16rem;\n        height: 7.5rem;\n        overflow: hidden;\n        position: relative;\n        margin:0 auto;\n    }\n    #box ul{\n        width:96rem;\n        height: 7.5rem;\n        transform: translateX(-16rem);\n\n    }\n    #box ul li{\n        width:16rem;\n        height:7.5rem;\n        float: left;\n        font-size:2rem;\n        color: #fff;\n        line-height: 7.5rem;\n        text-align: center;\n    }\n</style>\n<script>\n//用js监听屏幕的大小来改变根元素的font-size\n    (function(win,doc){\n        function change(){\n            doc.documentElement.style.fontSize = doc.documentElement.clientWidth*20/320 +'px';\n        }\n        change();\n        win.addEventListener('resize',change,false);\n    })(window,document);\n<\/script>\n<script>\n    document.addEventListener('DOMContentLoaded',function(){\n        var oBox = document.getElementById('box');\n        var oUl = document.querySelector('#box ul');\n        var aLi = oUl.children;\n        var iNow = 1;\n        var x = -iNow*aLi[0].offsetWidth;\n        //设置一个开关,是css运动结束后解锁\n        var bReady = true;\n        oUl.addEventListener('touchstart',function(ev){\n            if(bReady==false){return;}\n            bReady = false;\n            oUl.style.transition = 'none';\n            var disX = ev.targetTouches[0].pageX - x;\n            var downX = ev.targetTouches[0].pageX;\n            function fnMove(ev){\n                x = ev.targetTouches[0].pageX - disX;\n                oUl.style.transform = 'translate3d('+x+'px,0,0)';\n            }\n            function fnEnd(ev){\n                var upX = ev.changedTouches[0].pageX;\n                //判断是否移动距离大于50\n                if(Math.abs(upX - downX)>50){\n                    //左边移动\n                    if(upX - downX<0){\n                        iNow++;\n                        if(iNow==aLi.length){iNow=aLi.length-1;}\n                    }else{\n                    //右边移动\n                        iNow--;\n                        if(iNow==-1){iNow=0;}\n                    }\n                }\n                //储存此时ul的位置\n                x = -iNow*aLi[0].offsetWidth;\n                oUl.style.transform = 'translate3d('+x+'px,0,0)';\n                oUl.style.transition = '200ms all ease';\n\n                //监听li 当移动到两端的li时  瞬间移回\n                function tEnd(){\n                    if(iNow==5){\n                        iNow=1;\n                    }\n                    if(iNow==0){iNow=4;}\n                    oUl.style.transition = 'none'\n                    x = -iNow*aLi[0].offsetWidth;\n                    oUl.style.transform = 'translate3d('+x+'px,0,0)';\n                    bReady = true;\n                }\n                oUl.addEventListener('transitionend',tEnd,false);\n                //释放内存\n                document.removeEventListener('touchend',fnEnd,false);\n                document.removeEventListener('touchmove',fnMove,false);\n            }\n\n            document.addEventListener('touchmove',fnMove,false);\n            document.addEventListener('touchend',fnEnd,false);\n            //阻止默认事件\n            ev.preventDefault();\n        },false);\n    },false);\n<\/script>\n</head>\n<body>\n<div id=\"box\">\n    <ul>\n        <li style =\"background:green\">3</li>\n        <li style=\"background: red;\">0</li>\n        <li style=\"background: yellow;\">1</li>\n        <li style=\"background: blue;\">2</li>\n        <li style =\"background:green\">3</li>\n        <li style=\"background: red;\">0</li>\n    </ul>\n</div>\n</body>\n</html>\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br"),a("span",{staticClass:"line-number"},[n._v("24")]),a("br"),a("span",{staticClass:"line-number"},[n._v("25")]),a("br"),a("span",{staticClass:"line-number"},[n._v("26")]),a("br"),a("span",{staticClass:"line-number"},[n._v("27")]),a("br"),a("span",{staticClass:"line-number"},[n._v("28")]),a("br"),a("span",{staticClass:"line-number"},[n._v("29")]),a("br"),a("span",{staticClass:"line-number"},[n._v("30")]),a("br"),a("span",{staticClass:"line-number"},[n._v("31")]),a("br"),a("span",{staticClass:"line-number"},[n._v("32")]),a("br"),a("span",{staticClass:"line-number"},[n._v("33")]),a("br"),a("span",{staticClass:"line-number"},[n._v("34")]),a("br"),a("span",{staticClass:"line-number"},[n._v("35")]),a("br"),a("span",{staticClass:"line-number"},[n._v("36")]),a("br"),a("span",{staticClass:"line-number"},[n._v("37")]),a("br"),a("span",{staticClass:"line-number"},[n._v("38")]),a("br"),a("span",{staticClass:"line-number"},[n._v("39")]),a("br"),a("span",{staticClass:"line-number"},[n._v("40")]),a("br"),a("span",{staticClass:"line-number"},[n._v("41")]),a("br"),a("span",{staticClass:"line-number"},[n._v("42")]),a("br"),a("span",{staticClass:"line-number"},[n._v("43")]),a("br"),a("span",{staticClass:"line-number"},[n._v("44")]),a("br"),a("span",{staticClass:"line-number"},[n._v("45")]),a("br"),a("span",{staticClass:"line-number"},[n._v("46")]),a("br"),a("span",{staticClass:"line-number"},[n._v("47")]),a("br"),a("span",{staticClass:"line-number"},[n._v("48")]),a("br"),a("span",{staticClass:"line-number"},[n._v("49")]),a("br"),a("span",{staticClass:"line-number"},[n._v("50")]),a("br"),a("span",{staticClass:"line-number"},[n._v("51")]),a("br"),a("span",{staticClass:"line-number"},[n._v("52")]),a("br"),a("span",{staticClass:"line-number"},[n._v("53")]),a("br"),a("span",{staticClass:"line-number"},[n._v("54")]),a("br"),a("span",{staticClass:"line-number"},[n._v("55")]),a("br"),a("span",{staticClass:"line-number"},[n._v("56")]),a("br"),a("span",{staticClass:"line-number"},[n._v("57")]),a("br"),a("span",{staticClass:"line-number"},[n._v("58")]),a("br"),a("span",{staticClass:"line-number"},[n._v("59")]),a("br"),a("span",{staticClass:"line-number"},[n._v("60")]),a("br"),a("span",{staticClass:"line-number"},[n._v("61")]),a("br"),a("span",{staticClass:"line-number"},[n._v("62")]),a("br"),a("span",{staticClass:"line-number"},[n._v("63")]),a("br"),a("span",{staticClass:"line-number"},[n._v("64")]),a("br"),a("span",{staticClass:"line-number"},[n._v("65")]),a("br"),a("span",{staticClass:"line-number"},[n._v("66")]),a("br"),a("span",{staticClass:"line-number"},[n._v("67")]),a("br"),a("span",{staticClass:"line-number"},[n._v("68")]),a("br"),a("span",{staticClass:"line-number"},[n._v("69")]),a("br"),a("span",{staticClass:"line-number"},[n._v("70")]),a("br"),a("span",{staticClass:"line-number"},[n._v("71")]),a("br"),a("span",{staticClass:"line-number"},[n._v("72")]),a("br"),a("span",{staticClass:"line-number"},[n._v("73")]),a("br"),a("span",{staticClass:"line-number"},[n._v("74")]),a("br"),a("span",{staticClass:"line-number"},[n._v("75")]),a("br"),a("span",{staticClass:"line-number"},[n._v("76")]),a("br"),a("span",{staticClass:"line-number"},[n._v("77")]),a("br"),a("span",{staticClass:"line-number"},[n._v("78")]),a("br"),a("span",{staticClass:"line-number"},[n._v("79")]),a("br"),a("span",{staticClass:"line-number"},[n._v("80")]),a("br"),a("span",{staticClass:"line-number"},[n._v("81")]),a("br"),a("span",{staticClass:"line-number"},[n._v("82")]),a("br"),a("span",{staticClass:"line-number"},[n._v("83")]),a("br"),a("span",{staticClass:"line-number"},[n._v("84")]),a("br"),a("span",{staticClass:"line-number"},[n._v("85")]),a("br"),a("span",{staticClass:"line-number"},[n._v("86")]),a("br"),a("span",{staticClass:"line-number"},[n._v("87")]),a("br"),a("span",{staticClass:"line-number"},[n._v("88")]),a("br"),a("span",{staticClass:"line-number"},[n._v("89")]),a("br"),a("span",{staticClass:"line-number"},[n._v("90")]),a("br"),a("span",{staticClass:"line-number"},[n._v("91")]),a("br"),a("span",{staticClass:"line-number"},[n._v("92")]),a("br"),a("span",{staticClass:"line-number"},[n._v("93")]),a("br"),a("span",{staticClass:"line-number"},[n._v("94")]),a("br"),a("span",{staticClass:"line-number"},[n._v("95")]),a("br"),a("span",{staticClass:"line-number"},[n._v("96")]),a("br"),a("span",{staticClass:"line-number"},[n._v("97")]),a("br"),a("span",{staticClass:"line-number"},[n._v("98")]),a("br"),a("span",{staticClass:"line-number"},[n._v("99")]),a("br"),a("span",{staticClass:"line-number"},[n._v("100")]),a("br"),a("span",{staticClass:"line-number"},[n._v("101")]),a("br"),a("span",{staticClass:"line-number"},[n._v("102")]),a("br"),a("span",{staticClass:"line-number"},[n._v("103")]),a("br"),a("span",{staticClass:"line-number"},[n._v("104")]),a("br"),a("span",{staticClass:"line-number"},[n._v("105")]),a("br"),a("span",{staticClass:"line-number"},[n._v("106")]),a("br"),a("span",{staticClass:"line-number"},[n._v("107")]),a("br"),a("span",{staticClass:"line-number"},[n._v("108")]),a("br"),a("span",{staticClass:"line-number"},[n._v("109")]),a("br"),a("span",{staticClass:"line-number"},[n._v("110")]),a("br"),a("span",{staticClass:"line-number"},[n._v("111")]),a("br"),a("span",{staticClass:"line-number"},[n._v("112")]),a("br"),a("span",{staticClass:"line-number"},[n._v("113")]),a("br"),a("span",{staticClass:"line-number"},[n._v("114")]),a("br"),a("span",{staticClass:"line-number"},[n._v("115")]),a("br"),a("span",{staticClass:"line-number"},[n._v("116")]),a("br"),a("span",{staticClass:"line-number"},[n._v("117")]),a("br"),a("span",{staticClass:"line-number"},[n._v("118")]),a("br"),a("span",{staticClass:"line-number"},[n._v("119")]),a("br"),a("span",{staticClass:"line-number"},[n._v("120")]),a("br"),a("span",{staticClass:"line-number"},[n._v("121")]),a("br"),a("span",{staticClass:"line-number"},[n._v("122")]),a("br"),a("span",{staticClass:"line-number"},[n._v("123")]),a("br"),a("span",{staticClass:"line-number"},[n._v("124")]),a("br"),a("span",{staticClass:"line-number"},[n._v("125")]),a("br")])])])},[],!1,null,null,null);s.default=t.exports}}]);