(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-162302a1"],{"2d09":function(t,e,n){"use strict";var o=n("68f6"),i=n.n(o);i.a},"68f6":function(t,e,n){},d68e:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"request-body"},[n("div",[n("editor",{directives:[{name:"contextmenu",rawName:"v-contextmenu:contextmenu",arg:"contextmenu"}],staticStyle:{"font-size":"14px"},attrs:{lang:"json",theme:"chrome",width:"100%",height:"205px",options:{}},on:{init:t.editorInit},model:{value:t.body,callback:function(e){t.body=e},expression:"body"}}),t._v(" "),n("v-contextmenu",{ref:"contextmenu"},[n("v-contextmenu-item",{on:{click:t.handleClick}},[t._v("清除")]),t._v(" "),n("v-contextmenu-item",{on:{click:t.formatData}},[t._v("格式化")])],1)],1)])},i=[],c={components:{editor:n("50bc")},props:["value"],data:function(){return{body:""}},watch:{body:{handler:function(t){this.$emit("input",t)},deep:!0},value:{handler:function(t){this.body=t||"[]"},immediate:!0}},mounted:function(){},methods:{handleClick:function(){this.body=""},editorInit:function(){n("ce60"),n("bb47"),n("7456")},formatData:function(){try{this.body=JSON.parse(this.body),this.body=JSON.stringify(this.body,null,2)}catch(t){this.$message({showClose:!0,message:"json格式错误",type:"warning"})}},addTableRow:function(t){"body"===t&&this.body.push({key:"",value:"",remark:""})},delTableRow:function(t,e){"body"===t&&this.body.splice(e,1)}}},a=c,s=(n("2d09"),n("6691")),d=Object(s["a"])(a,o,i,!1,null,"691c8cb7",null);e["default"]=d.exports}}]);