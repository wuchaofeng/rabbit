(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-246133f2"],{4438:function(e,a,t){"use strict";t.r(a);var l=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("el-table",{staticClass:"el-table-no-border",attrs:{data:e.params,size:"mini","show-header":!1}},[t("el-table-column",{attrs:{property:"key",label:"Key","header-align":"center","min-width":"200"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-autocomplete",{staticClass:"inline-input",staticStyle:{width:"100%"},attrs:{"fetch-suggestions":e.querySearch,placeholder:"请输入参数名称",size:"mini"},model:{value:a.row.key,callback:function(t){e.$set(a.row,"key",t)},expression:"scope.row.key"}})]}}])}),e._v(" "),t("el-table-column",{attrs:{property:"value",label:"Value","header-align":"center","min-width":"200"},scopedSlots:e._u([{key:"default",fn:function(a){return[1===a.row.type?t("el-input",{staticStyle:{width:"100%"},attrs:{size:"mini",placeholder:"请输入参数值"},model:{value:a.row.value,callback:function(t){e.$set(a.row,"value",t)},expression:"scope.row.value"}}):e._e(),e._v(" "),2===a.row.type?t("el-input-number",{staticStyle:{width:"100%"},attrs:{size:"mini",controls:!1},model:{value:a.row.value,callback:function(t){e.$set(a.row,"value",t)},expression:"scope.row.value"}}):e._e(),e._v(" "),3===a.row.type?t("el-select",{staticStyle:{width:"100%"},attrs:{size:"mini",placeholder:"请输入参数值"},model:{value:a.row.value,callback:function(t){e.$set(a.row,"value",t)},expression:"scope.row.value"}},[t("el-option",{attrs:{label:"true",value:"true"}}),e._v(" "),t("el-option",{attrs:{label:"false",value:"false"}})],1):e._e(),e._v(" "),4===a.row.type?t("el-input",{staticStyle:{width:"100%"},attrs:{disabled:"",size:"mini",placeholder:"请输入参数值"},model:{value:a.row.value,callback:function(t){e.$set(a.row,"value",t)},expression:"scope.row.value"}}):e._e()]}}])}),e._v(" "),t("el-table-column",{attrs:{property:"type",label:"type","header-align":"center","min-width":"200"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-select",{staticStyle:{width:"100%"},attrs:{size:"mini",filterable:"",placeholder:"请选择参数值类型"},on:{change:function(t){return e.changeType(t,a.row)}},model:{value:a.row.type,callback:function(t){e.$set(a.row,"type",t)},expression:"scope.row.type"}},[t("el-option",{attrs:{label:"字符串",value:1}}),e._v(" "),t("el-option",{attrs:{label:"数值",value:2}}),e._v(" "),t("el-option",{attrs:{label:"布尔值",value:3}}),e._v(" "),t("el-option",{attrs:{label:"null",value:4}})],1)]}}])}),e._v(" "),t("el-table-column",{attrs:{label:"操作","header-align":"center",width:"40"},scopedSlots:e._u([{key:"default",fn:function(a){return[a.$index+1!==e.params.length?t("el-button",{staticStyle:{padding:"5px 0px 5px"},attrs:{type:"text",icon:"el-icon-delete"},nativeOn:{click:function(t){return e.delTableRow("params",a.$index)}}}):e._e()]}}])})],1)},r=[],n=(t("6d57"),{props:["apiData"],data:function(){return{baseValues:[],params:[]}},computed:{paramValues:function(){var e=[];return this.apiData.api.reqBodyData&&this.apiData.api.reqBodyData.forEach((function(a){e.push({value:"$."+a.key})})),this.apiData.api.reqQuery&&this.apiData.api.reqQuery.forEach((function(a){e.push({value:"#."+a.key})})),e}},watch:{params:{handler:function(e){0===this.params.length?this.addTableRow("params"):this.params[this.params.length-1]["key"]&&this.addTableRow("params");for(var a=0;a<this.params.length;a++){var t=this.params[a];if(a!==this.params.length-1&&!t.key){this.delTableRow("params",a);break}}},deep:!0},apiData:{handler:function(e){this.params=e.apiParams||[{key:"",value:"",type:1}]},immediate:!0}},mounted:function(){},methods:{changeType:function(e,a){2===e?a.value=0:3===e?a.value="true":4===e&&(a.value="null")},addTableRow:function(e){"params"===e&&this.params.push({key:"",value:"",type:1})},selectHeader:function(e,a){"Content-Type"===e.value&&(a.value="application/json;charset=UTF-8")},delTableRow:function(e,a){"params"===e&&this.params.splice(a,1)},createFilter:function(e){return function(a){return 0===a.value.toLowerCase().indexOf(e.toLowerCase())}},querySearch:function(e,a){var t=this.paramValues,l=e?t.filter(this.createFilter(e)):t;a(l)}}}),i=n,s=(t("b944"),t("5511")),o=Object(s["a"])(i,l,r,!1,null,"6bfaf1dc",null);a["default"]=o.exports},5329:function(e,a,t){},b944:function(e,a,t){"use strict";var l=t("5329"),r=t.n(l);r.a}}]);