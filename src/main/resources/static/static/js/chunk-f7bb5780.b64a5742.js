(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f7bb5780"],{"0f54":function(e,t,l){"use strict";var a=l("7111"),o=l.n(a);o.a},"6fec":function(e,t,l){"use strict";l.r(t);var a=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("el-table",{attrs:{data:e.assert,border:"",size:"mini"}},[l("el-table-column",{attrs:{property:"dataSource",align:"center","min-width":"115"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-select",{attrs:{size:"mini",placeholder:"响应类型"},model:{value:t.row.dataSource,callback:function(l){e.$set(t.row,"dataSource",l)},expression:"scope.row.dataSource"}},[l("el-option",{attrs:{label:"响应体(JSON)",value:"bodyJson"}}),e._v(" "),l("el-option",{attrs:{label:"响应体(XML)",value:"bodyXml"}}),e._v(" "),l("el-option",{attrs:{label:"响应体(正则)",value:"bodyReg"}}),e._v(" "),l("el-option",{attrs:{label:"响应码",value:"code"}}),e._v(" "),l("el-option",{attrs:{label:"响应头",value:"header"}})],1)]}}])},[l("template",{slot:"header"},[l("span",{staticClass:"required"},[e._v("\n        数据源\n        "),l("el-button",{staticClass:"el-icon-circle-plus",staticStyle:{padding:"4px 0px"},attrs:{type:"text",size:"mini"},on:{click:function(t){return e.addTableRow("assert")}}})],1)])],2),e._v(" "),l("el-table-column",{attrs:{property:"extractExpress",label:"提取表达式",align:"center","min-width":"160"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-input",{attrs:{disabled:"响应码"===t.row.dataSource,size:"mini",placeholder:"提取表达式"},model:{value:t.row.extractExpress,callback:function(l){e.$set(t.row,"extractExpress",l)},expression:"scope.row.extractExpress"}})]}}])}),e._v(" "),l("el-table-column",{attrs:{property:"expectRelation",label:"期望关系",align:"center","min-width":"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-select",{attrs:{size:"mini",disabled:"响应码"===t.row.dataSource,placeholder:"期望关系"},model:{value:t.row.expectRelation,callback:function(l){e.$set(t.row,"expectRelation",l)},expression:"scope.row.expectRelation"}},[l("el-option",{attrs:{label:"等于",value:"等于"}}),e._v(" "),l("el-option",{attrs:{label:"大于",value:"大于"}}),e._v(" "),l("el-option",{attrs:{label:"大于等于",value:"大于等于"}}),e._v(" "),l("el-option",{attrs:{label:"小于",value:"小于"}}),e._v(" "),l("el-option",{attrs:{label:"小于等于",value:"小于等于"}}),e._v(" "),l("el-option",{attrs:{label:"包含",value:"包含"}}),e._v(" "),l("el-option",{attrs:{label:"不包含",value:"不包含"}}),e._v(" "),l("el-option",{attrs:{label:"长度等于",value:"长度等于"}}),e._v(" "),l("el-option",{attrs:{label:"长度大于",value:"长度大于"}}),e._v(" "),l("el-option",{attrs:{label:"长度大于等于",value:"长度大于等于"}}),e._v(" "),l("el-option",{attrs:{label:"长度小于",value:"长度小于"}}),e._v(" "),l("el-option",{attrs:{label:"长度小于等于",value:"长度小等于"}}),e._v(" "),l("el-option",{attrs:{label:"开始于",value:"开始于"}}),e._v(" "),l("el-option",{attrs:{label:"结束于",value:"结束于"}})],1)]}}])}),e._v(" "),l("el-table-column",{attrs:{property:"extractType",label:"期望类型",align:"center","min-width":"92"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-select",{attrs:{size:"mini",disabled:"响应码"===t.row.dataSource,placeholder:"期望关系"},model:{value:t.row.extractType,callback:function(l){e.$set(t.row,"extractType",l)},expression:"scope.row.extractType"}},[l("el-option",{attrs:{label:"字符串",value:"string"}}),e._v(" "),l("el-option",{attrs:{label:"数值",value:"number"}}),e._v(" "),l("el-option",{attrs:{label:"布尔值",value:"boolean"}}),e._v(" "),l("el-option",{attrs:{label:"接口变量",value:"apiVar"}}),e._v(" "),l("el-option",{attrs:{label:"Null",value:"null"}})],1)]}}])}),e._v(" "),l("el-table-column",{attrs:{property:"expectValue",label:"期望值",align:"center","min-width":"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-input",{attrs:{size:"mini",placeholder:"期望值"},model:{value:t.row.expectValue,callback:function(l){e.$set(t.row,"expectValue",l)},expression:"scope.row.expectValue"}})]}}])}),e._v(" "),l("el-table-column",{attrs:{label:"操作",align:"center",width:"55"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-button",{staticStyle:{padding:"5px 7px 5px 7px"},attrs:{type:"text",icon:"el-icon-delete"},nativeOn:{click:function(l){return e.delTableRow("assert",t.$index)}}})]}}])})],1)},o=[],n={props:["value"],data:function(){return{assert:[{dataSource:"bodyJson",extractType:"string",extractExpress:"",expectRelation:"等于",expectValue:""}]}},watch:{assert:{handler:function(e){this.$emit("input",e)},deep:!0},value:{handler:function(e){this.assert=e||[]},immediate:!0}},mounted:function(){},methods:{addTableRow:function(e){"assert"===e&&this.assert.push({dataSource:"bodyJson",extractType:"string",extractExpress:"",expectRelation:"等于",expectValue:""})},delTableRow:function(e,t){"assert"===e&&this.assert.splice(t,1)}}},r=n,s=(l("0f54"),l("5511")),i=Object(s["a"])(r,a,o,!1,null,"5cc609b8",null);t["default"]=i.exports},7111:function(e,t,l){}}]);