(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{427:function(n,s,e){n.exports=e.p+"assets/img/vue.c341bfa6.png"},554:function(n,s,e){"use strict";e.r(s);var a=e(9),t=Object(a.a)({},function(){var n=this,s=n.$createElement,a=n._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("p",[a("img",{attrs:{src:e(427),alt:"流程图"}})]),n._v(" "),a("h2",{attrs:{id:"observer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#observer","aria-hidden":"true"}},[n._v("#")]),n._v(" Observer")]),n._v(" "),a("blockquote",[a("p",[n._v("实现一个监听器Observer，用来劫持并监听所有属性，如果有变动的，就通知订阅者。")])]),n._v(" "),a("p",[n._v("将需要observe的数据对象进行递归遍历，包括子属性对象的属性，都加上 setter和getter")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("var data = {name: 'yifeng'};\nobserve(data);\ndata.name = 'haha'; // 哈哈哈，监听到值变化了 kindeng --\x3e haha\n\nfunction observe(data) {\n    if (!data || typeof data !== 'object') {\n        return;\n    }\n    // 取出所有属性遍历\n    Object.keys(data).forEach(function(key) {\n        defineReactive(data, key, data[key]);\n    });\n};\n\nfunction defineReactive(data, key, val) {\n    observe(val); // 监听子属性\n    Object.defineProperty(data, key, {\n        enumerable: true, // 可枚举\n        configurable: false, // 不能再define\n        get: function() {\n            return val;\n        },\n        set: function(newVal) {\n            console.log('哈哈哈，监听到值变化了 ', val, ' --\x3e ', newVal);\n            val = newVal;\n        }\n    });\n}\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br"),a("span",{staticClass:"line-number"},[n._v("24")]),a("br"),a("span",{staticClass:"line-number"},[n._v("25")]),a("br"),a("span",{staticClass:"line-number"},[n._v("26")]),a("br"),a("span",{staticClass:"line-number"},[n._v("27")]),a("br"),a("span",{staticClass:"line-number"},[n._v("28")]),a("br")])]),a("h2",{attrs:{id:"compile"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#compile","aria-hidden":"true"}},[n._v("#")]),n._v(" Compile")]),n._v(" "),a("blockquote",[a("p",[n._v("实现一个解析器Compile，可以扫描和解析每个节点的相关指令，并根据初始化模板数据以及初始化相应的订阅器。")])]),n._v(" "),a("p",[n._v("compile主要做的事情是解析模板指令，将模板中的变量替换成数据，然后初始化渲染页面视图，并将每个指令对应的节点绑定更新函数，添加监听数据的订阅者，一旦数据有变动，收到通知，更新视图")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("function Compile(el) {\n    this.$el = this.isElementNode(el) ? el : document.querySelector(el);\n    if (this.$el) {\n        this.$fragment = this.node2Fragment(this.$el);\n        this.init();\n        this.$el.appendChild(this.$fragment);\n    }\n}\nCompile.prototype = {\n    init: function() { this.compileElement(this.$fragment); },\n    node2Fragment: function(el) {\n        var fragment = document.createDocumentFragment(), child;\n        // 将原生节点拷贝到fragment\n        while (child = el.firstChild) {\n            fragment.appendChild(child);\n        }\n        return fragment;\n    },\n    compileElement: function(el) {\n        var childNodes = el.childNodes, me = this;\n        [].slice.call(childNodes).forEach(function(node) {\n            var text = node.textContent;\n            var reg = /\\{\\{(.*)\\}\\}/;    // 表达式文本\n            // 按元素节点方式编译\n            if (me.isElementNode(node)) {\n                me.compile(node);\n            } else if (me.isTextNode(node) && reg.test(text)) {\n                me.compileText(node, RegExp.$1);\n            }\n            // 遍历编译子节点\n            if (node.childNodes && node.childNodes.length) {\n                me.compileElement(node);\n            }\n        });\n    },\n\n    compile: function(node) {\n        var nodeAttrs = node.attributes, me = this;\n        [].slice.call(nodeAttrs).forEach(function(attr) {\n            // 规定：指令以 v-xxx 命名\n            // 如 <span v-text=\"content\"></span> 中指令为 v-text\n            var attrName = attr.name;    // v-text\n            if (me.isDirective(attrName)) {\n                var exp = attr.value; // content\n                var dir = attrName.substring(2);    // text\n                if (me.isEventDirective(dir)) {\n                    // 事件指令, 如 v-on:click\n                    compileUtil.eventHandler(node, me.$vm, exp, dir);\n                } else {\n                    // 普通指令\n                    compileUtil[dir] && compileUtil[dir](node, me.$vm, exp);\n                }\n            }\n        });\n    }\n};\n\n// 指令处理集合\nvar compileUtil = {\n    text: function(node, vm, exp) {\n        this.bind(node, vm, exp, 'text');\n    },\n    // ...省略\n    bind: function(node, vm, exp, dir) {\n        var updaterFn = updater[dir + 'Updater'];\n        // 第一次初始化视图\n        updaterFn && updaterFn(node, vm[exp]);\n        // 实例化订阅者，此操作会在对应的属性消息订阅器中添加了该订阅者watcher\n        new Watcher(vm, exp, function(value, oldValue) {\n            // 一旦属性值有变化，会收到通知执行此更新函数，更新视图\n            updaterFn && updaterFn(node, value, oldValue);\n        });\n    }\n};\n\n\n// 更新函数\nvar updater = {\n    textUpdater: function(node, value) {\n        node.textContent = typeof value == 'undefined' ? '' : value;\n    }\n    // ...省略\n};\n\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br"),a("span",{staticClass:"line-number"},[n._v("24")]),a("br"),a("span",{staticClass:"line-number"},[n._v("25")]),a("br"),a("span",{staticClass:"line-number"},[n._v("26")]),a("br"),a("span",{staticClass:"line-number"},[n._v("27")]),a("br"),a("span",{staticClass:"line-number"},[n._v("28")]),a("br"),a("span",{staticClass:"line-number"},[n._v("29")]),a("br"),a("span",{staticClass:"line-number"},[n._v("30")]),a("br"),a("span",{staticClass:"line-number"},[n._v("31")]),a("br"),a("span",{staticClass:"line-number"},[n._v("32")]),a("br"),a("span",{staticClass:"line-number"},[n._v("33")]),a("br"),a("span",{staticClass:"line-number"},[n._v("34")]),a("br"),a("span",{staticClass:"line-number"},[n._v("35")]),a("br"),a("span",{staticClass:"line-number"},[n._v("36")]),a("br"),a("span",{staticClass:"line-number"},[n._v("37")]),a("br"),a("span",{staticClass:"line-number"},[n._v("38")]),a("br"),a("span",{staticClass:"line-number"},[n._v("39")]),a("br"),a("span",{staticClass:"line-number"},[n._v("40")]),a("br"),a("span",{staticClass:"line-number"},[n._v("41")]),a("br"),a("span",{staticClass:"line-number"},[n._v("42")]),a("br"),a("span",{staticClass:"line-number"},[n._v("43")]),a("br"),a("span",{staticClass:"line-number"},[n._v("44")]),a("br"),a("span",{staticClass:"line-number"},[n._v("45")]),a("br"),a("span",{staticClass:"line-number"},[n._v("46")]),a("br"),a("span",{staticClass:"line-number"},[n._v("47")]),a("br"),a("span",{staticClass:"line-number"},[n._v("48")]),a("br"),a("span",{staticClass:"line-number"},[n._v("49")]),a("br"),a("span",{staticClass:"line-number"},[n._v("50")]),a("br"),a("span",{staticClass:"line-number"},[n._v("51")]),a("br"),a("span",{staticClass:"line-number"},[n._v("52")]),a("br"),a("span",{staticClass:"line-number"},[n._v("53")]),a("br"),a("span",{staticClass:"line-number"},[n._v("54")]),a("br"),a("span",{staticClass:"line-number"},[n._v("55")]),a("br"),a("span",{staticClass:"line-number"},[n._v("56")]),a("br"),a("span",{staticClass:"line-number"},[n._v("57")]),a("br"),a("span",{staticClass:"line-number"},[n._v("58")]),a("br"),a("span",{staticClass:"line-number"},[n._v("59")]),a("br"),a("span",{staticClass:"line-number"},[n._v("60")]),a("br"),a("span",{staticClass:"line-number"},[n._v("61")]),a("br"),a("span",{staticClass:"line-number"},[n._v("62")]),a("br"),a("span",{staticClass:"line-number"},[n._v("63")]),a("br"),a("span",{staticClass:"line-number"},[n._v("64")]),a("br"),a("span",{staticClass:"line-number"},[n._v("65")]),a("br"),a("span",{staticClass:"line-number"},[n._v("66")]),a("br"),a("span",{staticClass:"line-number"},[n._v("67")]),a("br"),a("span",{staticClass:"line-number"},[n._v("68")]),a("br"),a("span",{staticClass:"line-number"},[n._v("69")]),a("br"),a("span",{staticClass:"line-number"},[n._v("70")]),a("br"),a("span",{staticClass:"line-number"},[n._v("71")]),a("br"),a("span",{staticClass:"line-number"},[n._v("72")]),a("br"),a("span",{staticClass:"line-number"},[n._v("73")]),a("br"),a("span",{staticClass:"line-number"},[n._v("74")]),a("br"),a("span",{staticClass:"line-number"},[n._v("75")]),a("br"),a("span",{staticClass:"line-number"},[n._v("76")]),a("br"),a("span",{staticClass:"line-number"},[n._v("77")]),a("br"),a("span",{staticClass:"line-number"},[n._v("78")]),a("br"),a("span",{staticClass:"line-number"},[n._v("79")]),a("br"),a("span",{staticClass:"line-number"},[n._v("80")]),a("br"),a("span",{staticClass:"line-number"},[n._v("81")]),a("br"),a("span",{staticClass:"line-number"},[n._v("82")]),a("br"),a("span",{staticClass:"line-number"},[n._v("83")]),a("br"),a("span",{staticClass:"line-number"},[n._v("84")]),a("br")])]),a("h2",{attrs:{id:"watcher"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#watcher","aria-hidden":"true"}},[n._v("#")]),n._v(" Watcher")]),n._v(" "),a("blockquote",[a("p",[n._v("实现一个订阅者Watcher，可以收到属性的变化通知并执行相应的函数，从而更新视图。")])]),n._v(" "),a("p",[n._v("Watcher订阅者作为Observer和Compile之间通信的桥梁，主要做的事情是:\n1、在自身实例化时往属性订阅器(dep)里面添加自己\n2、自身必须有一个update()方法\n3、待属性变动dep.notice()通知时，能调用自身的update()方法，并触发Compile中绑定的回调，则功成身退。\n如果有点乱，可以回顾下前面的思路整理")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("function Watcher(vm, exp, cb) {\n    this.cb = cb;\n    this.vm = vm;\n    this.exp = exp;\n    // 此处为了触发属性的getter，从而在dep添加自己，结合Observer更易理解\n    this.value = this.get(); \n}\nWatcher.prototype = {\n    update: function() {\n        this.run();    // 属性值变化收到通知\n    },\n    run: function() {\n        var value = this.get(); // 取到最新值\n        var oldVal = this.value;\n        if (value !== oldVal) {\n            this.value = value;\n            this.cb.call(this.vm, value, oldVal); // 执行Compile中绑定的回调，更新视图\n        }\n    },\n    get: function() {\n        Dep.target = this;    // 将当前订阅者指向自己\n        var value = this.vm[exp];    // 触发getter，添加自己到属性订阅器中\n        Dep.target = null;    // 添加完毕，重置\n        return value;\n    }\n};\n// 这里再次列出Observer和Dep，方便理解\nObject.defineProperty(data, key, {\n    get: function() {\n        // 由于需要在闭包内添加watcher，所以可以在Dep定义一个全局target属性，暂存watcher, 添加完移除\n        Dep.target && dep.addDep(Dep.target);\n        return val;\n    }\n    // ... 省略\n});\nDep.prototype = {\n    notify: function() {\n        this.subs.forEach(function(sub) {\n            sub.update(); // 调用订阅者的update方法，通知变化\n        });\n    }\n};\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br"),a("span",{staticClass:"line-number"},[n._v("24")]),a("br"),a("span",{staticClass:"line-number"},[n._v("25")]),a("br"),a("span",{staticClass:"line-number"},[n._v("26")]),a("br"),a("span",{staticClass:"line-number"},[n._v("27")]),a("br"),a("span",{staticClass:"line-number"},[n._v("28")]),a("br"),a("span",{staticClass:"line-number"},[n._v("29")]),a("br"),a("span",{staticClass:"line-number"},[n._v("30")]),a("br"),a("span",{staticClass:"line-number"},[n._v("31")]),a("br"),a("span",{staticClass:"line-number"},[n._v("32")]),a("br"),a("span",{staticClass:"line-number"},[n._v("33")]),a("br"),a("span",{staticClass:"line-number"},[n._v("34")]),a("br"),a("span",{staticClass:"line-number"},[n._v("35")]),a("br"),a("span",{staticClass:"line-number"},[n._v("36")]),a("br"),a("span",{staticClass:"line-number"},[n._v("37")]),a("br"),a("span",{staticClass:"line-number"},[n._v("38")]),a("br"),a("span",{staticClass:"line-number"},[n._v("39")]),a("br"),a("span",{staticClass:"line-number"},[n._v("40")]),a("br"),a("span",{staticClass:"line-number"},[n._v("41")]),a("br"),a("span",{staticClass:"line-number"},[n._v("42")]),a("br")])]),a("h2",{attrs:{id:"mvvm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mvvm","aria-hidden":"true"}},[n._v("#")]),n._v(" MVVM")]),n._v(" "),a("blockquote",[a("p",[n._v("MVVM作为数据绑定的入口，整合Observer、Compile和Watcher三者，通过Observer来监听自己的model数据变化，通过Compile来解析编译模板指令，最终利用Watcher搭起Observer和Compile之间的通信桥梁，达到数据变化 -> 视图更新；视图交互变化(input) -> 数据model变更的双向绑定效果。")])]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("function MVVM(options) {\n    this.$options = options;\n    var data = this._data = this.$options.data, me = this;\n    // 属性代理，实现 vm.xxx -> vm._data.xxx\n    Object.keys(data).forEach(function(key) {\n        me._proxy(key);\n    });\n    observe(data, this);\n    this.$compile = new Compile(options.el || document.body, this)\n}\n\nMVVM.prototype = {\n    _proxy: function(key) {\n        var me = this;\n        Object.defineProperty(me, key, {\n            configurable: false,\n            enumerable: true,\n            get: function proxyGetter() {\n                return me._data[key];\n            },\n            set: function proxySetter(newVal) {\n                me._data[key] = newVal;\n            }\n        });\n    }\n};\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br"),a("span",{staticClass:"line-number"},[n._v("24")]),a("br"),a("span",{staticClass:"line-number"},[n._v("25")]),a("br"),a("span",{staticClass:"line-number"},[n._v("26")]),a("br")])]),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考","aria-hidden":"true"}},[n._v("#")]),n._v(" 参考")]),n._v(" "),a("p",[a("a",{attrs:{href:"https://www.cnblogs.com/libin-1/p/6893712.html",target:"_blank",rel:"noopener noreferrer"}},[n._v("vue的双向绑定原理及实现"),a("OutboundLink")],1),a("br"),n._v(" "),a("a",{attrs:{href:"https://segmentfault.com/a/1190000006599500?utm_source=tag-newest",target:"_blank",rel:"noopener noreferrer"}},[n._v("剖析Vue原理&实现双向绑定MVVM"),a("OutboundLink")],1)])])},[],!1,null,null,null);s.default=t.exports}}]);