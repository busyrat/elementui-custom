(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{438:function(t,a,s){},466:function(t,a,s){"use strict";var n=s(1),e=s(42),r=[].reverse,p=[1,2];n({target:"Array",proto:!0,forced:String(p)===String(p.reverse())},{reverse:function(){return e(this)&&(this.length=this.length),r.call(this)}})},467:function(t,a,s){"use strict";s(438)},480:function(t,a,s){"use strict";s.r(a);var n=s(13),e=(s(466),s(235),s(12),s(15),s(16),s(227),s(40),s(228),s(38),s(234),s(81),s(57),s(58),s(225),s(37)),r={created:function(){"undefined"!=typeof window&&(this.$icon=this.getIcons("el-icon-").reverse())},methods:{arrayUnique:function(t){return Object(n.a)(new Set(t))},getIcons:function(t){var a=new RegExp("(?<=.".concat(t,")[\\w-]*?(?=:{1,2}before\\s*\\{\\s*content)"),"g"),s=Object.values(document.styleSheets).filter((function(t){var s=[];if(t.hasOwnProperty("rules"))s=sheets.rules;else{try{s=t.cssRules}catch(t){return!1}s=t.cssRules}return Object(n.a)(s).some((function(t){return a.test(t.cssText)}))})),e=[];return Object(n.a)(s[0].cssRules).forEach((function(t){var s=t.cssText.match(a);s&&e.push(s[0])})),Object(n.a)(new Set(e))},iconListClick:function(t){var a;a=/use/.test(t.target.tagName)?t.target.parentNode.className.baseVal:/svg/.test(t.target.tagName)?t.target.className.baseVal:t.target.className,/^(el-icon)/.test(a)&&(Object(e.a)('<i class="'.concat(a,'"/>')),this.$message&&this.$message('copy: <i class="'.concat(a,'"/>')))}},mounted:function(){var t=this;this.$nextTick((function(){t.iconLists=Object(n.a)(t.$el.getElementsByClassName("icon-list")),t.iconLists.forEach((function(a){return a.addEventListener("click",t.iconListClick,!1)}))}))},beforeDestroy:function(){var t=this;this.iconLists.forEach((function(a){return a.removeEventListener("click",t.iconListClick,!1)}))}},p=(s(467),s(25)),c=Object(p.a)(r,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"icon-图标"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#icon-图标"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://element.eleme.cn/2.10/#/zh-CN/component/icon",target:"_blank",rel:"noopener noreferrer"}},[t._v("Icon 图标"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("提供了一套常用的图标集合。")]),t._v(" "),s("h3",{attrs:{id:"使用方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用方法"}},[t._v("#")]),t._v(" 使用方法")]),t._v(" "),s("p",[t._v("直接通过设置类名为 "),s("code",[t._v("el-icon-iconName")]),t._v(" 来使用即可。例如：")]),t._v(" "),s("demo-block",[s("template",{slot:"source"},[s("demo-block-v-144e7ecc-0")],1),t._v(" "),s("template",{slot:"code"},[s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("i")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("el-icon-edit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("i")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("i")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("el-icon-share"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("i")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("i")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("el-icon-delete"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("i")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("el-button")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("primary"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("icon")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("el-icon-search"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("搜索"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("el-button")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n\n")])])])])],2),s("h3",{attrs:{id:"图标集合"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#图标集合"}},[t._v("#")]),t._v(" 图标集合")]),t._v(" "),s("ul",{staticClass:"icon-list"},t._l(t.$icon,(function(a){return s("li",{key:a},[s("span",[s("i",{class:"el-icon-"+a}),t._v(" "),s("span",{staticClass:"icon-name"},[t._v(t._s("el-icon-"+a))])])])})),0),t._v(" "),s("h2",{attrs:{id:"icon-extend"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#icon-extend"}},[t._v("#")]),t._v(" Icon Extend")]),t._v(" "),s("h3",{attrs:{id:"引入自定义图标"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#引入自定义图标"}},[t._v("#")]),t._v(" 引入自定义图标")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" MyIcon "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Icon"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createFromIconfontCN")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" key"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'font_8d5l8fzk5b87iudi'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nVue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("component")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Icon'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" MyIcon"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("tips: "),s("a",{attrs:{href:"../iconfont.html?iconfontKey=font_8d5l8fzk5b87iudi"}},[t._v("查看所有图标")])]),t._v(" "),s("p",[t._v("如果你使用 html-webpack-plugin 还提供一个插件"),s("a",{attrs:{href:"https://github.com/busyrat/html-webpack-iconfont-plugin",target:"_blank",rel:"noopener noreferrer"}},[t._v("html-webpack-iconfont-plugin"),s("OutboundLink")],1),t._v("，自动注入")]),t._v(" "),s("demo-block",[s("template",{slot:"source"},[s("demo-block-v-144e7ecc-1")],1),t._v(" "),s("template",{slot:"code"},[s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("icon")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("color")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("green"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("icon-biaoqing"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("size")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("36px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("font-family")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("iconfont"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("icon")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("icon-souren"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("size")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("36px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])])],2),s("h3",{attrs:{id:"props"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#props"}},[t._v("#")]),t._v(" Props")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Name")]),t._v(" "),s("th",[t._v("Description")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Required")]),t._v(" "),s("th",[t._v("Default")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("color")]),t._v(" "),s("td",[t._v("图标颜色，没有颜色即为使用 SVG 模式")]),t._v(" "),s("td",[s("code",[t._v("String")])]),t._v(" "),s("td",[s("code",[t._v("false")])]),t._v(" "),s("td",[t._v("-")])]),t._v(" "),s("tr",[s("td",[t._v("size")]),t._v(" "),s("td",[t._v("图标大小")]),t._v(" "),s("td",[s("code",[t._v("String")]),t._v(" / "),s("code",[t._v("Number")])]),t._v(" "),s("td",[s("code",[t._v("false")])]),t._v(" "),s("td",[t._v("'20px'")])]),t._v(" "),s("tr",[s("td",[t._v("name")]),t._v(" "),s("td",[t._v("图标的名字，从 iconfont 仓库复制名字")]),t._v(" "),s("td",[s("code",[t._v("String")])]),t._v(" "),s("td",[s("code",[t._v("true")])]),t._v(" "),s("td",[t._v("-")])]),t._v(" "),s("tr",[s("td",[t._v("font-family")]),t._v(" "),s("td",[t._v("iconfont 官网上可以配置")]),t._v(" "),s("td",[s("code",[t._v("String")])]),t._v(" "),s("td",[s("code",[t._v("false")])]),t._v(" "),s("td",[t._v("'iconfont'")])])])])],1)}),[],!1,null,null,null);a.default=c.exports}}]);