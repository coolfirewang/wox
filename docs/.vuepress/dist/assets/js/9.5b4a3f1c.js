(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{181:function(s,t,e){"use strict";e.r(t);var n=e(0),a=Object(n.a)({},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"content"},[s._m(0),s._v(" "),s._m(1),s._v(" "),e("p",[s._v("Vue 不支持 IE8 及以下版本，因为 Vue 使用了 IE8 无法模拟的 ECMAScript 5 特性。但它支持所有兼容 "),e("a",{attrs:{href:"https://caniuse.com/#feat=es5",target:"_blank",rel:"noopener noreferrer"}},[s._v("ECMAScript 5"),e("OutboundLink")],1),s._v(" 的浏览器。同理，Wox.js 的兼容性取决于 Vue 的兼容性。")]),s._v(" "),s._m(2),s._v(" "),e("p",[s._v("在使用 Vue 时，我们推荐在你的浏览器上安装 "),e("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener noreferrer"}},[s._v("Vue Devtools"),e("OutboundLink")],1),s._v("。它允许你在一个更友好的界面中审查和调试 Vue 应用。")]),s._v(" "),s._m(3),s._v(" "),e("p",[s._v("使用Wox.js架构的时候，推荐通过 "),e("router-link",{attrs:{to:"/cli/"}},[s._v("CLI")]),s._v(" 工具创建项目，不建议通过引入原始文件自行创建。")],1),s._v(" "),s._m(4),e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[s._v("WARNING")]),s._v(" "),e("p",[s._v("CLI 工具假定用户对 Node.js 和相关构建工具有一定程度的了解。如果你是新手，我们强烈建议先在不用构建工具的情况下通读 "),e("strong",[e("router-link",{attrs:{to:"/guide/"}},[s._v("指南")])],1),s._v("，在熟悉 wox.js 本身之后再使用 CLI。")])]),s._v(" "),s._m(5),s._v(" "),e("p",[s._v("使用 CLI 工具创建一个新的项目：")]),s._v(" "),s._m(6),s._m(7),s._v(" "),s._m(8),s._m(9),s._v(" "),s._m(10),s._v(" "),s._m(11),s._v(" "),s._m(12),s._v(" "),s._m(13),s._v(" "),s._m(14),s._v(" "),s._m(15),s._v(" "),e("p",[s._v("本项目需要一些自定义的配置，那么我们可以通过配置此文件夹下的文件内容来改变：")]),s._v(" "),s._m(16)])},[function(){var s=this.$createElement,t=this._self._c||s;return t("h1",{attrs:{id:"渐进式开发指南"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#渐进式开发指南","aria-hidden":"true"}},[this._v("#")]),this._v(" 渐进式开发指南")])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"兼容性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#兼容性","aria-hidden":"true"}},[this._v("#")]),this._v(" 兼容性")])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"vue-devtools"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue-devtools","aria-hidden":"true"}},[this._v("#")]),this._v(" Vue Devtools")])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"cli"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cli","aria-hidden":"true"}},[this._v("#")]),this._v(" CLI")])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装脚手架")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i -g @node/cli \n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装脚手架插件")]),s._v("\ncli "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" @wox/cli \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"创建项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建项目","aria-hidden":"true"}},[this._v("#")]),this._v(" 创建项目")])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建新项目")]),s._v("\ncli wox:new "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("project"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入项目目录")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cd")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("project"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装依赖")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开始编码")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run dev\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"目录结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#目录结构","aria-hidden":"true"}},[this._v("#")]),this._v(" 目录结构")])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v(".\n├─ README.md\n├─ package.json\n├─ app.vue\n├─ app.js\n├─ app\n│  ├─ controller\n│  │  └─ index.js\n│  ├─ middleware\n│  ├─ vue\n│  │  ├─ component\n│  │  ├─ directive\n│  │  ├─ filter\n│  │  └─ mixin\n│  ├─ webview\n│  │  └─ index.vue\n│  └─ service\n└─ config\n   ├─ plugin.json\n   ├─ config.development.json\n   ├─ config.production.json\n   ├─ plugin.development.json\n   └─ plugin.production.json\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",{attrs:{id:"主项目目录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#主项目目录","aria-hidden":"true"}},[this._v("#")]),this._v(" 主项目目录")])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("文件夹"),t("code",[this._v("/app/")]),this._v("下为主要的项目文件目录。主要有以下目录结构：")])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ul",[e("li",[e("code",[s._v("controller/")]),s._v(" controller文件存放")]),s._v(" "),e("li",[e("code",[s._v("middleware/")]),s._v(" middleware中间件文件存放")]),s._v(" "),e("li",[e("code",[s._v("service/")]),s._v(" service model层文件存放")]),s._v(" "),e("li",[e("code",[s._v("webview/")]),s._v(" 同步页面文件存放")]),s._v(" "),e("li",[e("code",[s._v("vue/component/")]),s._v(" 组件文件存放")]),s._v(" "),e("li",[e("code",[s._v("vue/directives/")]),s._v(" 指令文件存放")]),s._v(" "),e("li",[e("code",[s._v("vue/filter/")]),s._v(" filter存放文件")]),s._v(" "),e("li",[e("code",[s._v("vue/mixin/")]),s._v(" mixin文件存放")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",{attrs:{id:"插件配置目录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#插件配置目录","aria-hidden":"true"}},[this._v("#")]),this._v(" 插件配置目录")])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("文件夹 "),t("code",[this._v("/config/")]),this._v("下为主要的插件配置文件存放目录。主要有以下文件：")])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ul",[e("li",[e("code",[s._v("plugin.json")]),s._v(" 插件列表文件")]),s._v(" "),e("li",[e("code",[s._v("plugin.development.json")]),s._v(" 开发环境插件配置文件")]),s._v(" "),e("li",[e("code",[s._v("plugin.production.json")]),s._v(" 生产环境插件配置文件")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",{attrs:{id:"本项目配置目录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#本项目配置目录","aria-hidden":"true"}},[this._v("#")]),this._v(" 本项目配置目录")])},function(){var s=this.$createElement,t=this._self._c||s;return t("ul",[t("li",[t("code",[this._v("config.development.js")]),this._v(" 开发环境配置文件")]),this._v(" "),t("li",[t("code",[this._v("config.production.js")]),this._v(" 生产环境配置文件")])])}],!1,null,null,null);t.default=a.exports}}]);