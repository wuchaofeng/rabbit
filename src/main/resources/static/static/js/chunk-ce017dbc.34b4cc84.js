(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ce017dbc"],{"0c51":function(e,t,a){},"6be8":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-table",{attrs:{data:e.extract,border:"",size:"mini"}},[a("el-table-column",{attrs:{property:"content","header-align":"center","min-width":"90"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-select",{attrs:{size:"mini",placeholder:"响应类型"},model:{value:t.row.content,callback:function(a){e.$set(t.row,"content",a)},expression:"scope.row.content"}},[a("el-option",{attrs:{label:"响应体",value:"响应体"}}),e._v(" "),a("el-option",{attrs:{label:"响应码",value:"响应码"}}),e._v(" "),a("el-option",{attrs:{label:"响应头",value:"响应头"}})],1)]}}])},[a("template",{slot:"header"},[a("span",{staticClass:"required"},[e._v("\n        提取内容\n        "),a("el-button",{staticClass:"el-icon-circle-plus",staticStyle:{padding:"4px 0px"},attrs:{type:"text",size:"mini"},on:{click:function(t){return e.addTableRow("extract")}}})],1)])],2),e._v(" "),a("el-table-column",{attrs:{property:"extractType",label:"提取方式","header-align":"center","min-width":"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-select",{attrs:{size:"mini",placeholder:"提取方式"},model:{value:t.row.extractType,callback:function(a){e.$set(t.row,"extractType",a)},expression:"scope.row.extractType"}},[a("el-option",{attrs:{label:"JSON",value:"JSON"}}),e._v(" "),a("el-option",{attrs:{label:"正则",value:"正则"}}),e._v(" "),a("el-option",{attrs:{label:"XPATH",value:"XPATH"}}),e._v(" "),a("el-option",{attrs:{label:"XML",value:"XML"}})],1)]}}])}),e._v(" "),a("el-table-column",{attrs:{property:"extractExpress",label:"提取表达式","header-align":"center","min-width":"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{attrs:{size:"mini",placeholder:"提取表达式"},model:{value:t.row.extractExpress,callback:function(a){e.$set(t.row,"extractExpress",a)},expression:"scope.row.extractExpress"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{property:"extractValue",label:"提取值","header-align":"center","min-width":"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{attrs:{size:"mini",placeholder:"期望值"},model:{value:t.row.extractValue,callback:function(a){e.$set(t.row,"extractValue",a)},expression:"scope.row.extractValue"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"操作","header-align":"center",width:"40"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{staticStyle:{padding:"5px 0px 5px"},attrs:{type:"text",icon:"el-icon-delete"},nativeOn:{click:function(a){return e.delTableRow("extract",t.$index)}}})]}}])})],1)},n=[],r={props:["value"],data:function(){return{extract:[{content:"响应体",extractType:"JSON",extractExpress:"",extractValue:""}]}},watch:{extract:{handler:function(e){this.$emit("input",JSON.stringify(e))},deep:!0},value:{handler:function(e){this.extract=e?JSON.parse(e):[{content:"响应体",extractType:"JSON",extractExpress:"",extractValue:""}]},immediate:!0}},mounted:function(){},methods:{addTableRow:function(e){"extract"===e&&this.extract.push({content:"响应体",extractType:"JSON",extractExpress:"",extractValue:""})},delTableRow:function(e,t){"extract"===e&&this.extract.splice(t,1)}}},c=r,o=(a("7163"),a("6691")),s=Object(o["a"])(c,l,n,!1,null,"628eda98",null);t["default"]=s.exports},7163:function(e,t,a){"use strict";var l=a("0c51"),n=a.n(l);n.a}}]);