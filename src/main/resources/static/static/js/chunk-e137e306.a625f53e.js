(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e137e306"],{"05ed":function(t,e,i){"use strict";i.d(e,"e",(function(){return n})),i.d(e,"i",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return d})),i.d(e,"j",(function(){return c})),i.d(e,"g",(function(){return s})),i.d(e,"b",(function(){return u})),i.d(e,"k",(function(){return l})),i.d(e,"d",(function(){return f})),i.d(e,"h",(function(){return m})),i.d(e,"f",(function(){return h}));var r=i("b775"),n=function(t){return Object(r["d"])("/dict/listDict")},o=function(t){return Object(r["d"])("/dict/uiActionList")},a=function(t){return Object(r["d"])("/dict/apiActionList")},d=function(t){return Object(r["e"])("/dict/addDict",t)},c=function(t){return Object(r["f"])("/dict/editDict",t)},s=function(t){return Object(r["d"])("/dict/listDictValue/"+t)},u=function(t){return Object(r["e"])("/dict/addDictValue",t)},l=function(t){return Object(r["f"])("/dict/editDictValue",t)},f=function(t){return Object(r["e"])("/dict/removeDictValue/"+t)},m=function(t){return Object(r["d"])("/dict/dictValue/listPage",t)},h=function(t){return Object(r["e"])("/dict/getDictValueById/"+t)}},"163d":function(t,e,i){"use strict";var r=i("e7ad"),n=i("e042"),o=i("75c4"),a=i("1e5b"),d=i("94b3"),c=i("238a"),s=i("2ea2").f,u=i("dcb7").f,l=i("064e").f,f=i("777a").trim,m="Number",h=r[m],p=h,b=h.prototype,v=o(i("e005")(b))==m,g="trim"in String.prototype,y=function(t){var e=d(t,!1);if("string"==typeof e&&e.length>2){e=g?e.trim():f(e,3);var i,r,n,o=e.charCodeAt(0);if(43===o||45===o){if(i=e.charCodeAt(2),88===i||120===i)return NaN}else if(48===o){switch(e.charCodeAt(1)){case 66:case 98:r=2,n=49;break;case 79:case 111:r=8,n=55;break;default:return+e}for(var a,c=e.slice(2),s=0,u=c.length;s<u;s++)if(a=c.charCodeAt(s),a<48||a>n)return NaN;return parseInt(c,r)}}return+e};if(!h(" 0o1")||!h("0b1")||h("+0x1")){h=function(t){var e=arguments.length<1?0:t,i=this;return i instanceof h&&(v?c((function(){b.valueOf.call(i)})):o(i)!=m)?a(new p(y(e)),i,h):y(e)};for(var O,k=i("149f")?s(p):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),E=0;k.length>E;E++)n(p,O=k[E])&&!n(h,O)&&l(h,O,u(p,O));h.prototype=b,b.constructor=h,i("bf16")(r,m,h)}},"1e5b":function(t,e,i){var r=i("fb68"),n=i("859b").set;t.exports=function(t,e,i){var o,a=e.constructor;return a!==i&&"function"==typeof a&&(o=a.prototype)!==i.prototype&&r(o)&&n&&n(t,o),t}},"2fc8":function(t,e,i){"use strict";i.r(e);var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}]},[i("sticky",{attrs:{"z-index":4,"sticky-top":84,"class-name":"sub-navbar"}},[i("el-button",{attrs:{size:"mini"},on:{click:t.toBack}},[t._v("返回")]),t._v(" "),i("el-button",{staticClass:"title",attrs:{size:"mini",type:"primary"},on:{click:function(e){return t.submitForm("addOrEditForm")}}},[t._v("\n        "+t._s("保存")+"\n      ")])],1),t._v(" "),i("el-card",{staticClass:"box-card card-my",attrs:{shadow:"never"}},[i("div",{staticClass:"task-main"},[i("el-form",{ref:"addOrEditForm",attrs:{"label-width":"90px",model:t.addOrEditForm,size:"small",rules:t.rules}},[i("el-row",[i("el-col",{attrs:{span:10}},[i("el-form-item",{attrs:{label:"关键字名称",prop:"name"}},[i("el-input",{staticStyle:{width:"290px"},attrs:{"auto-complete":"off",placeholder:"请输入关键字名称"},model:{value:t.addOrEditForm.name,callback:function(e){t.$set(t.addOrEditForm,"name",e)},expression:"addOrEditForm.name"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"关键字Key",prop:"name"}},[i("el-input",{staticStyle:{width:"290px"},attrs:{"auto-complete":"off",placeholder:"请输入关键字名称"},model:{value:t.addOrEditForm.key,callback:function(e){t.$set(t.addOrEditForm,"key",e)},expression:"addOrEditForm.key"}})],1)],1),t._v(" "),i("el-col",{attrs:{span:10}},[i("el-form-item",{staticStyle:{width:"100%"},attrs:{label:"关键字描述",prop:"remark"}},[i("el-input",{attrs:{autosize:"",type:"textarea"},model:{value:t.addOrEditForm.remark,callback:function(e){t.$set(t.addOrEditForm,"remark",e)},expression:"addOrEditForm.remark"}})],1)],1)],1),t._v(" "),i("el-divider",{attrs:{"content-position":"left"}},[i("div",[t._v("\n              关键字代码\n              "),i("el-divider",{attrs:{direction:"vertical"}}),t._v(" "),i("el-popover",{attrs:{placement:"right",width:"800",trigger:"click"}},[i("pre",[t._v('import org.openqa.selenium.WebDriver;\nimport java.util.Map;\npublic class TestStingToCode {\n    /**说明：方法名和参数是固定的！！！\n     * @param driver   浏览器驱动\n     * @param byString 定位方式  byid和byvalue用英文字符“;;”隔开\n     * @param data     操作的数据\n     * @param vars     内置用例变量\n     * @return 返回 Result.fail(String msg),Result.success(String msg),断言此关键字是否通过\n     */\n    public static Object run(WebDriver driver, String byString, String data, Map vars) throws Exception {\n        try {\n            driver.get("https://www.baidu.com/");\n            //编写执行内容，并进行断言\n            return Result.success("你执行我，我报错了！");\n        } catch (Exception e) {\n            //失败的时候断言\n            return Result.fail("关闭失败！");\n        }\n    }\n}')]),t._v(" "),i("el-button",{attrs:{slot:"reference",type:"text"},slot:"reference"},[t._v("模板")])],1)],1)]),t._v(" "),i("div",{staticClass:"action-codemirror"},[i("codemirror",{ref:"myCm",attrs:{options:t.cmOptions},model:{value:t.addOrEditForm.remark2,callback:function(e){t.$set(t.addOrEditForm,"remark2",e)},expression:"addOrEditForm.remark2"}})],1)],1)],1)])],1)},n=[],o=(i("cc57"),i("8a2b")),a=i("05ed"),d=i("3fa5"),c=i("b804"),s={components:{Sticky:c["a"],codemirror:o["codemirror"]},data:function(){return{browserTypeList:[],clientList:[],loading:!1,rules:{name:[{required:!0,message:"关键字名称不能为空",trigger:"blur"}]},addOrEditForm:{title:"",id:"",name:"",key:"",dictId:"",remark:"",remark2:""},cmOptions:{value:"",mode:"text/x-java",theme:"night",indentUnit:2,smartIndent:!0,tabSize:4,readOnly:!1,showCursorWhenSelecting:!0,lineNumbers:!0,firstLineNumber:1,extraKeys:{"Ctrl-Space":"autocomplete"},autofocus:!0,matchBrackets:!0}}},mounted:function(){this.initBefore()},methods:{initBefore:function(){var t=this;this.$route.query.id?(this.loading=!0,Object(a["f"])(this.$route.query.id).then((function(e){19!==e.dictId&&t.toBack(),t.init(e)})).finally((function(){t.loading=!1}))):this.init()},init:function(t){t?(this.addOrEditForm.title="编辑任务",this.addOrEditForm.id=t.id,this.addOrEditForm.name=t.name,this.addOrEditForm.projectId=t.projectId,this.addOrEditForm.key=t.key,this.addOrEditForm.remark=t.remark,this.addOrEditForm.remark2=t.remark2,this.addOrEditForm.dictId=t.dictId):(this.addOrEditForm.title="新增任务",this.addOrEditForm.dictId=19)},closeDialog:function(){this.$refs["addOrEditForm"].resetFields(),this.resetDialog()},toBack:function(){this.closeDialog(),this.$router.push({path:"/publicConfig/customerAction/list"})},submitForm:function(t){var e=this;this.$refs[t].validate((function(t){t&&e.addOrEditForm.id?(e.loading=!0,Object(a["k"])(e.addOrEditForm).then((function(t){Object(d["a"])("保存数据成功"),e.initBefore()})).finally((function(){e.loading=!1}))):t&&!e.addOrEditForm.id&&(e.loading=!0,Object(a["b"])(e.addOrEditForm).then((function(t){Object(d["a"])("保存数据成功"),e.toBack()})).finally((function(){e.loading=!1})))}))},resetDialog:function(){this.addOrEditForm={title:"",id:"",name:"",key:"",dictId:"",remark:"",remark2:""}}}},u=s,l=(i("b19f"),i("5511")),f=Object(l["a"])(u,r,n,!1,null,"3fb65e05",null);e["default"]=f.exports},"777a":function(t,e,i){var r=i("e46b"),n=i("f6b4"),o=i("238a"),a=i("9769"),d="["+a+"]",c="​",s=RegExp("^"+d+d+"*"),u=RegExp(d+d+"*$"),l=function(t,e,i){var n={},d=o((function(){return!!a[t]()||c[t]()!=c})),s=n[t]=d?e(f):a[t];i&&(n[i]=s),r(r.P+r.F*d,"String",n)},f=l.trim=function(t,e){return t=String(n(t)),1&e&&(t=t.replace(s,"")),2&e&&(t=t.replace(u,"")),t};t.exports=l},"859b":function(t,e,i){var r=i("fb68"),n=i("69b3"),o=function(t,e){if(n(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{r=i("4ce5")(Function.call,i("dcb7").f(Object.prototype,"__proto__").set,2),r(t,[]),e=!(t instanceof Array)}catch(n){e=!0}return function(t,i){return o(t,i),e?t.__proto__=i:r(t,i),t}}({},!1):void 0),check:o}},9769:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},b19f:function(t,e,i){"use strict";var r=i("bfbf"),n=i.n(r);n.a},b804:function(t,e,i){"use strict";var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{style:{height:t.height+"px",zIndex:t.zIndex}},[i("div",{class:t.className,style:{top:t.isSticky?t.stickyTop+"px":"",zIndex:t.zIndex,position:t.position,width:t.width,height:t.height+"px"}},[t._t("default",[i("div",[t._v("sticky")])])],2)])},n=[],o=(i("163d"),{name:"Sticky",props:{stickyTop:{type:Number,default:0},zIndex:{type:Number,default:1},className:{type:String,default:""}},data:function(){return{active:!1,position:"",width:void 0,height:void 0,isSticky:!1}},mounted:function(){this.height=this.$el.getBoundingClientRect().height,window.addEventListener("scroll",this.handleScroll),window.addEventListener("resize",this.handleResize)},activated:function(){this.handleScroll()},destroyed:function(){window.removeEventListener("scroll",this.handleScroll),window.removeEventListener("resize",this.handleResize)},methods:{sticky:function(){this.active||(this.position="fixed",this.active=!0,this.width=this.width+"px",this.isSticky=!0)},handleReset:function(){this.active&&this.reset()},reset:function(){this.position="",this.width="auto",this.active=!1,this.isSticky=!1},handleScroll:function(){var t=this.$el.getBoundingClientRect().width;this.width=t||"auto";var e=this.$el.getBoundingClientRect().top;e<this.stickyTop?this.sticky():this.handleReset()},handleResize:function(){this.isSticky&&(this.width=this.$el.getBoundingClientRect().width+"px")}}}),a=o,d=i("5511"),c=Object(d["a"])(a,r,n,!1,null,null,null);e["a"]=c.exports},bfbf:function(t,e,i){}}]);