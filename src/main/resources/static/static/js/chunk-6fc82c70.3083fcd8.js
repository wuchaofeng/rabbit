(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6fc82c70","chunk-145c2f74","chunk-246133f2","chunk-016f2cb0","chunk-9d5cc0e2"],{"05ed":function(e,t,a){"use strict";a.d(t,"e",(function(){return l})),a.d(t,"i",(function(){return r})),a.d(t,"c",(function(){return i})),a.d(t,"a",(function(){return o})),a.d(t,"j",(function(){return s})),a.d(t,"g",(function(){return c})),a.d(t,"b",(function(){return u})),a.d(t,"k",(function(){return p})),a.d(t,"d",(function(){return d})),a.d(t,"h",(function(){return f})),a.d(t,"f",(function(){return b}));var n=a("b775"),l=function(e){return Object(n["d"])("/dict/listDict")},r=function(e){return Object(n["d"])("/dict/uiActionList")},i=function(e){return Object(n["d"])("/dict/apiActionList")},o=function(e){return Object(n["e"])("/dict/addDict",e)},s=function(e){return Object(n["f"])("/dict/editDict",e)},c=function(e){return Object(n["d"])("/dict/listDictValue/"+e)},u=function(e){return Object(n["e"])("/dict/addDictValue",e)},p=function(e){return Object(n["f"])("/dict/editDictValue",e)},d=function(e){return Object(n["e"])("/dict/removeDictValue/"+e)},f=function(e){return Object(n["d"])("/dict/dictValue/listPage",e)},b=function(e){return Object(n["e"])("/dict/getDictValueById/"+e)}},"0e4c":function(e,t,a){"use strict";a.d(t,"c",(function(){return l})),a.d(t,"d",(function(){return r})),a.d(t,"a",(function(){return i})),a.d(t,"e",(function(){return o})),a.d(t,"b",(function(){return s}));var n=a("b775"),l=function(e){return Object(n["d"])("/testDatabese/listPage",e,!1)},r=function(e){return Object(n["d"])("/testDatabese/listByProjectId/"+e)},i=function(e){return Object(n["e"])("/testDatabese/add",e)},o=function(e){return Object(n["f"])("/testDatabese/edit",e)},s=function(e){return Object(n["e"])("/testDatabese/remove",e)}},"1d87e":function(e,t,a){},3568:function(e,t,a){"use strict";var n=a("886a"),l=a.n(n);l.a},4438:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-table",{staticClass:"el-table-no-border",attrs:{data:e.params,size:"mini","show-header":!1}},[a("el-table-column",{attrs:{property:"key",label:"Key","header-align":"center","min-width":"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-autocomplete",{staticClass:"inline-input",staticStyle:{width:"100%"},attrs:{"fetch-suggestions":e.querySearch,placeholder:"请输入参数名称",size:"mini"},model:{value:t.row.key,callback:function(a){e.$set(t.row,"key",a)},expression:"scope.row.key"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{property:"value",label:"Value","header-align":"center","min-width":"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[1===t.row.type?a("el-input",{staticStyle:{width:"100%"},attrs:{size:"mini",placeholder:"请输入参数值"},model:{value:t.row.value,callback:function(a){e.$set(t.row,"value",a)},expression:"scope.row.value"}}):e._e(),e._v(" "),2===t.row.type?a("el-input-number",{staticStyle:{width:"100%"},attrs:{size:"mini",controls:!1},model:{value:t.row.value,callback:function(a){e.$set(t.row,"value",a)},expression:"scope.row.value"}}):e._e(),e._v(" "),3===t.row.type?a("el-select",{staticStyle:{width:"100%"},attrs:{size:"mini",placeholder:"请输入参数值"},model:{value:t.row.value,callback:function(a){e.$set(t.row,"value",a)},expression:"scope.row.value"}},[a("el-option",{attrs:{label:"true",value:"true"}}),e._v(" "),a("el-option",{attrs:{label:"false",value:"false"}})],1):e._e(),e._v(" "),4===t.row.type?a("el-input",{staticStyle:{width:"100%"},attrs:{disabled:"",size:"mini",placeholder:"请输入参数值"},model:{value:t.row.value,callback:function(a){e.$set(t.row,"value",a)},expression:"scope.row.value"}}):e._e()]}}])}),e._v(" "),a("el-table-column",{attrs:{property:"type",label:"type","header-align":"center","min-width":"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-select",{staticStyle:{width:"100%"},attrs:{size:"mini",filterable:"",placeholder:"请选择参数值类型"},on:{change:function(a){return e.changeType(a,t.row)}},model:{value:t.row.type,callback:function(a){e.$set(t.row,"type",a)},expression:"scope.row.type"}},[a("el-option",{attrs:{label:"字符串",value:1}}),e._v(" "),a("el-option",{attrs:{label:"数值",value:2}}),e._v(" "),a("el-option",{attrs:{label:"布尔值",value:3}}),e._v(" "),a("el-option",{attrs:{label:"null",value:4}})],1)]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"操作","header-align":"center",width:"40"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.$index+1!==e.params.length?a("el-button",{staticStyle:{padding:"5px 0px 5px"},attrs:{type:"text",icon:"el-icon-delete"},nativeOn:{click:function(a){return e.delTableRow("params",t.$index)}}}):e._e()]}}])})],1)},l=[],r=(a("6d57"),{props:["apiData"],data:function(){return{baseValues:[],params:[]}},computed:{paramValues:function(){var e=[];return this.apiData.api.reqBodyData&&this.apiData.api.reqBodyData.forEach((function(t){e.push({value:"$."+t.key})})),this.apiData.api.reqQuery&&this.apiData.api.reqQuery.forEach((function(t){e.push({value:"#."+t.key})})),e}},watch:{params:{handler:function(e){0===this.params.length?this.addTableRow("params"):this.params[this.params.length-1]["key"]&&this.addTableRow("params");for(var t=0;t<this.params.length;t++){var a=this.params[t];if(t!==this.params.length-1&&!a.key){this.delTableRow("params",t);break}}},deep:!0},apiData:{handler:function(e){this.params=e.apiParams||[{key:"",value:"",type:1}]},immediate:!0}},mounted:function(){},methods:{changeType:function(e,t){2===e?t.value=0:3===e?t.value="true":4===e&&(t.value="null")},addTableRow:function(e){"params"===e&&this.params.push({key:"",value:"",type:1})},selectHeader:function(e,t){"Content-Type"===e.value&&(t.value="application/json;charset=UTF-8")},delTableRow:function(e,t){"params"===e&&this.params.splice(t,1)},createFilter:function(e){return function(t){return 0===t.value.toLowerCase().indexOf(e.toLowerCase())}},querySearch:function(e,t){var a=this.paramValues,n=e?a.filter(this.createFilter(e)):a;t(n)}}}),i=r,o=(a("b944"),a("5511")),s=Object(o["a"])(i,n,l,!1,null,"6bfaf1dc",null);t["default"]=s.exports},4719:function(e,t,a){},"50a5":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-table",{attrs:{data:e.assert,border:"",size:"mini"}},[a("el-table-column",{attrs:{property:"dataSource",align:"center","min-width":"115"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-select",{attrs:{size:"mini",placeholder:"响应类型"},model:{value:t.row.dataSource,callback:function(a){e.$set(t.row,"dataSource",a)},expression:"scope.row.dataSource"}},[a("el-option",{attrs:{label:"响应体(JSON)",value:"bodyJson"}}),e._v(" "),a("el-option",{attrs:{label:"响应体(XML)",value:"bodyXml"}}),e._v(" "),a("el-option",{attrs:{label:"响应体(正则)",value:"bodyReg"}}),e._v(" "),a("el-option",{attrs:{label:"响应码",value:"code"}}),e._v(" "),a("el-option",{attrs:{label:"响应头",value:"header"}})],1)]}}])},[a("template",{slot:"header"},[a("span",{staticClass:"required"},[e._v("\n        数据源\n        "),a("el-button",{staticClass:"el-icon-circle-plus",staticStyle:{padding:"4px 0px"},attrs:{type:"text",size:"mini"},on:{click:function(t){return e.addTableRow("assert")}}})],1)])],2),e._v(" "),a("el-table-column",{attrs:{property:"extractExpress",label:"提取表达式",align:"center","min-width":"160"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{attrs:{disabled:"响应码"===t.row.dataSource,size:"mini",placeholder:"提取表达式"},model:{value:t.row.extractExpress,callback:function(a){e.$set(t.row,"extractExpress",a)},expression:"scope.row.extractExpress"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{property:"expectRelation",label:"期望关系",align:"center","min-width":"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-select",{attrs:{size:"mini",disabled:"响应码"===t.row.dataSource,placeholder:"期望关系"},model:{value:t.row.expectRelation,callback:function(a){e.$set(t.row,"expectRelation",a)},expression:"scope.row.expectRelation"}},[a("el-option",{attrs:{label:"等于",value:"等于"}}),e._v(" "),a("el-option",{attrs:{label:"大于",value:"大于"}}),e._v(" "),a("el-option",{attrs:{label:"大于等于",value:"大于等于"}}),e._v(" "),a("el-option",{attrs:{label:"小于",value:"小于"}}),e._v(" "),a("el-option",{attrs:{label:"小于等于",value:"小于等于"}}),e._v(" "),a("el-option",{attrs:{label:"包含",value:"包含"}}),e._v(" "),a("el-option",{attrs:{label:"不包含",value:"不包含"}}),e._v(" "),a("el-option",{attrs:{label:"长度等于",value:"长度等于"}}),e._v(" "),a("el-option",{attrs:{label:"长度大于",value:"长度大于"}}),e._v(" "),a("el-option",{attrs:{label:"长度大于等于",value:"长度大于等于"}}),e._v(" "),a("el-option",{attrs:{label:"长度小于",value:"长度小于"}}),e._v(" "),a("el-option",{attrs:{label:"长度小于等于",value:"长度小等于"}}),e._v(" "),a("el-option",{attrs:{label:"开始于",value:"开始于"}}),e._v(" "),a("el-option",{attrs:{label:"结束于",value:"结束于"}})],1)]}}])}),e._v(" "),a("el-table-column",{attrs:{property:"extractType",label:"期望类型",align:"center","min-width":"92"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-select",{attrs:{size:"mini",disabled:"响应码"===t.row.dataSource,placeholder:"期望关系"},model:{value:t.row.extractType,callback:function(a){e.$set(t.row,"extractType",a)},expression:"scope.row.extractType"}},[a("el-option",{attrs:{label:"字符串",value:"string"}}),e._v(" "),a("el-option",{attrs:{label:"数值",value:"number"}}),e._v(" "),a("el-option",{attrs:{label:"布尔值",value:"boolean"}}),e._v(" "),a("el-option",{attrs:{label:"接口变量",value:"apiVar"}}),e._v(" "),a("el-option",{attrs:{label:"Null",value:"null"}})],1)]}}])}),e._v(" "),a("el-table-column",{attrs:{property:"expectValue",label:"期望值",align:"center","min-width":"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{attrs:{size:"mini",placeholder:"期望值"},model:{value:t.row.expectValue,callback:function(a){e.$set(t.row,"expectValue",a)},expression:"scope.row.expectValue"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"操作",align:"center",width:"55"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{staticStyle:{padding:"5px 7px 5px 7px"},attrs:{type:"text",icon:"el-icon-delete"},nativeOn:{click:function(a){return e.delTableRow("assert",t.$index)}}})]}}])})],1)},l=[],r={props:["value"],data:function(){return{assert:[{dataSource:"bodyJson",extractType:"string",extractExpress:"",expectRelation:"等于",expectValue:""}]}},watch:{assert:{handler:function(e){this.$emit("input",e)},deep:!0},value:{handler:function(e){this.assert=e||[]},immediate:!0}},mounted:function(){},methods:{addTableRow:function(e){"assert"===e&&this.assert.push({dataSource:"bodyJson",extractType:"string",extractExpress:"",expectRelation:"等于",expectValue:""})},delTableRow:function(e,t){"assert"===e&&this.assert.splice(t,1)}}},i=r,o=(a("db0c"),a("5511")),s=Object(o["a"])(i,n,l,!1,null,"16f1b9c0",null);t["default"]=s.exports},5329:function(e,t,a){},6793:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"card-main ",staticStyle:{padding:"0px 30px"}},[a("div",{staticClass:"box-card",attrs:{shadow:"never"}},[a("el-form",{ref:"addOrEditForm",attrs:{model:e.apiData,"label-position":"right",rules:e.rules,size:"small"}},[a("el-row",{staticStyle:{"margin-bottom":"5px"}},[a("el-col",{attrs:{span:10}},[a("el-form-item",{attrs:{label:"步骤名称：","label-width":"83px",prop:"name"}},[a("el-input",{staticStyle:{width:"85%"},attrs:{placeholder:"请输入接口名称"},model:{value:e.apiData.name,callback:function(t){e.$set(e.apiData,"name",t)},expression:"apiData.name"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:10}},[a("el-form-item",{attrs:{label:"关联接口：","label-width":"83px"}},[e.apiData.api?a("el-link",{attrs:{type:"primary"},on:{click:e.openApiDetail}},[e._v(e._s(e.apiData.api.name))]):e._e(),e._v(" "),e.apiData.api?e._e():a("el-link",{attrs:{disabled:""}},[e._v("该接口不存在")])],1)],1)],1)],1)],1),e._v(" "),a("el-tabs",{model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[a("el-tab-pane",{ref:"params",attrs:{label:"参数",name:"reqQuery"}},[a("apiParams",{attrs:{"api-data":e.apiData}})],1),e._v(" "),a("el-tab-pane",{attrs:{label:"断言",name:"response-assert"}},[a("responseAssert",{model:{value:e.apiData.reqAssert,callback:function(t){e.$set(e.apiData,"reqAssert",t)},expression:"apiData.reqAssert"}})],1),e._v(" "),a("el-tab-pane",{attrs:{label:"参数提取",name:"response-extract"}},[a("responseExtract",{model:{value:e.apiData.reqExtract,callback:function(t){e.$set(e.apiData,"reqExtract",t)},expression:"apiData.reqExtract"}})],1),e._v(" "),a("el-tab-pane",{attrs:{label:"前置处理器",name:"before-excs"}},[a("ApiActionExcList",{model:{value:e.apiData.beforeExcs,callback:function(t){e.$set(e.apiData,"beforeExcs",t)},expression:"apiData.beforeExcs"}})],1),e._v(" "),a("el-tab-pane",{attrs:{label:"附件",name:"file"}},[a("actionFileList",{ref:"actionFileList"})],1)],1),e._v(" "),a("MyFoot",{attrs:{"z-index":2,"sticky-bottom":0,"class-name":"sub-navbar my-foot-api-edit"}},[a("div",{staticStyle:{"text-align":"center"}},[a("el-button",{staticStyle:{"font-size":"14px","padding-left":"25px","padding-right":"25px"},attrs:{size:"small",type:"primary"},on:{click:e.editApi}},[e._v("保存并关闭")])],1)]),e._v(" "),a("apiDetail",{ref:"apiDetail"})],1)},l=[],r=a("0cea"),i=a("4d33"),o=a("3fa5"),s=a("7525"),c=a("50a5"),u=a("4438"),p=a("ca2d"),d=a("737b"),f=a("65e5"),b={components:{MyFoot:i["a"],responseExtract:s["default"],responseAssert:c["default"],actionFileList:p["default"],ApiActionExcList:d["default"],apiParams:u["default"],apiDetail:f["default"]},props:["apiData"],data:function(){return{apiDrawer:!1,activeName:"reqQuery",loading:!1,apiSuiteList:[],rules:{name:[{required:!0,message:"步骤名称不能为空",trigger:"blur"}],domain:[{required:!0,message:"协议+域名为空",trigger:"blur"}],path:[{required:!0,message:"接口路径不能为空",trigger:"blur"}]}}},watch:{},mounted:function(){var e=this;this.$nextTick((function(){e.$refs.actionFileList.init(e.apiData.id,4)}))},methods:{openApiDetail:function(){this.$refs.apiDetail.init(this.apiData.api)},editApi:function(){var e=this;this.$refs["addOrEditForm"].validate((function(t){if(t){e.loading=!0;var a=JSON.parse(JSON.stringify(e.apiData));a.beforeExcs&&a.beforeExcs.length>0&&!a.beforeExcs[a.beforeExcs.length-1].key&&a.beforeExcs.splice(a.beforeExcs.length-1,1),a.apiParams&&a.apiParams.length>0&&!a.apiParams[a.apiParams.length-1].key&&a.apiParams.splice(a.apiParams.length-1,1),Object(r["k"])(a).then((function(t){e.$emit("stepApiSave",a),e.loading=!1,Object(o["a"])("修改数据成功")}))}}))}}},m=b,v=(a("db28"),a("5511")),h=Object(v["a"])(m,n,l,!1,null,"55abf162",null);t["default"]=h.exports},"737b":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"request-body"},[a("el-table",{staticClass:"el-table-no-border",attrs:{data:e.body,size:"mini","show-header":!0}},[a("el-table-column",{attrs:{property:"name",label:"描述","header-align":"center",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{attrs:{size:"mini",placeholder:"执行名称"},model:{value:t.row.name,callback:function(a){e.$set(t.row,"name",a)},expression:"scope.row.name"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{property:"action",label:"action","header-align":"center",width:"188"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-cascader",{staticStyle:{width:"150px"},attrs:{placeholder:"试试搜索：关键字",size:"mini",options:e.apiActionList,"show-all-levels":!1,filterable:"","popper-class":"ui-action-popper-class",props:{expandTrigger:"hover"}},on:{change:function(a){return e.changeAction(t.row,t.row.actionTemp)}},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.node,l=t.data;return[a("span",[e._v(e._s(l.label))]),e._v(" "),n.isLeaf?a("span",[e._v(" ("+e._s(l.name)+") ")]):e._e(),e._v(" "),n.isLeaf?e._e():a("span",[e._v(" ("+e._s(l.children.length)+") ")])]}}],null,!0),model:{value:t.row.actionTemp,callback:function(a){e.$set(t.row,"actionTemp",a)},expression:"scope.row.actionTemp"}}),e._v(" "),a("el-popover",{attrs:{placement:"top",width:"400",trigger:"click"}},[a("pre",[e._v(e._s(t.row.actionRemark))]),e._v(" "),a("svg-icon",{staticStyle:{cursor:"pointer"},attrs:{slot:"reference","icon-class":"tips"},slot:"reference"})],1)]}}])}),e._v(" "),a("el-table-column",{attrs:{property:"mainParamId",label:"数据库/文件","header-align":"center",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-select",{staticStyle:{width:"100%"},attrs:{size:"mini",filterable:"",placeholder:"请选择数据库"},model:{value:t.row.mainParamId,callback:function(a){e.$set(t.row,"mainParamId",a)},expression:"scope.row.mainParamId"}},e._l(e.testDataBaseList,(function(e,t){return a("el-option",{key:t,attrs:{label:e.name,value:e.id}})})),1)]}}])}),e._v(" "),a("el-table-column",{attrs:{property:"params",label:"参数","header-align":"center","min-width":"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{attrs:{size:"mini",placeholder:"参数"},model:{value:t.row.params,callback:function(a){e.$set(t.row,"params",a)},expression:"scope.row.params"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"","header-align":"center",width:"40"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.$index+1!==e.body.length?a("el-button",{staticStyle:{padding:"5px 0px 5px"},attrs:{type:"text",icon:"el-icon-delete"},nativeOn:{click:function(a){return e.delTableRow("body",t.$index)}}}):e._e()]}}])})],1)],1)},l=[],r=(a("6d57"),a("cc57"),a("0e4c")),i=a("05ed"),o={props:["value"],data:function(){return{testDataBaseList:[],apiActionList:[],body:[]}},watch:{body:{handler:function(e){0===e.length?this.addTableRow("body"):e[e.length-1]["name"]&&e[e.length-1]["action"]&&this.addTableRow("body");for(var t=0;t<e.length;t++){var a=e[t];if(t!==e.length-1&&!a.name&&!a.action){this.delTableRow("body",t);break}}this.$emit("input",e)},deep:!0},value:{handler:function(e){this.body=e||[{name:"",actionType:"",action:"",actionRemark:"",actionTemp:[],mainParamId:"",params:""}],this.body&&this.body.map((function(e){return e.actionTemp=[e.actionType,e.action],e}))},immediate:!0}},mounted:function(){var e=this;this.getApiActionList(),Object(r["d"])(this.$store.getters.projectId).then((function(t){e.testDataBaseList=t||[]}))},methods:{addTableRow:function(e){"body"===e&&this.body.push({name:"",actionType:"",action:"",actionRemark:"",actionTemp:[],mainParamId:"",params:""})},delTableRow:function(e,t){"body"===e&&this.body.splice(t,1)},changeAction:function(e,t){e.actionType=t[0],e.action=t[1];for(var a=this.apiActionList,n=0;n<a.length;n++)if(0!==a[n].children.length&&a[n].value===t[0])for(var l=0;l<a[n].children.length;l++)if(a[n].children[l].value===t[1]){e.actionRemark=a[n].children[l].remark;break}},getApiActionList:function(){var e=this;Object(i["c"])().then((function(t){t.forEach((function(t){var a=t.name,n=t.key,l=[];t.sysDictValueList&&t.sysDictValueList.forEach((function(e){var t=e.key,a=e.key,n=e.name,r=e.remark;l.push({label:t,value:a,name:n,remark:r})})),e.apiActionList.push({label:a,value:n,children:l})}))}))}}},s=o,c=(a("7db5"),a("5511")),u=Object(c["a"])(s,n,l,!1,null,"60f24ec4",null);t["default"]=u.exports},7525:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-table",{attrs:{data:e.extract,border:"",size:"mini"}},[a("el-table-column",{attrs:{property:"dataSource",align:"center",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-select",{staticStyle:{width:"100%"},attrs:{size:"mini",placeholder:"响应类型"},model:{value:t.row.dataSource,callback:function(a){e.$set(t.row,"dataSource",a)},expression:"scope.row.dataSource"}},[a("el-option",{attrs:{label:"响应体(JSON)",value:"bodyJson"}}),e._v(" "),a("el-option",{attrs:{label:"响应体(XML)",value:"bodyXml"}}),e._v(" "),a("el-option",{attrs:{label:"响应体(正则)",value:"bodyReg"}}),e._v(" "),a("el-option",{attrs:{label:"响应码",value:"code"}}),e._v(" "),a("el-option",{attrs:{label:"响应头",value:"header"}})],1)]}}])},[a("template",{slot:"header"},[a("span",{staticClass:"required"},[e._v("\n        数据源\n        "),a("el-button",{staticClass:"el-icon-circle-plus",staticStyle:{padding:"4px 0px"},attrs:{type:"text",size:"mini"},on:{click:function(t){return e.addTableRow("extract")}}})],1)])],2),e._v(" "),a("el-table-column",{attrs:{property:"extractExpress",label:"提取表达式",align:"center","min-width":"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{attrs:{size:"mini",placeholder:"提取表达式"},model:{value:t.row.extractExpress,callback:function(a){e.$set(t.row,"extractExpress",a)},expression:"scope.row.extractExpress"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{property:"varName",label:"变量名称",align:"center",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{attrs:{size:"mini",placeholder:"变量名称"},model:{value:t.row.varName,callback:function(a){e.$set(t.row,"varName",a)},expression:"scope.row.varName"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"操作",align:"center",width:"70"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{staticStyle:{padding:"5px 0px 5px"},attrs:{type:"text",icon:"el-icon-delete"},nativeOn:{click:function(a){return e.delTableRow("extract",t.$index)}}})]}}])})],1)},l=[],r={props:["value"],data:function(){return{extract:[{dataSource:"bodyJson",extractExpress:"",varName:""}]}},watch:{extract:{handler:function(e){this.$emit("input",e)},deep:!0},value:{handler:function(e){this.extract=e||[]},immediate:!0}},mounted:function(){},methods:{addTableRow:function(e){"extract"===e&&this.extract.push({dataSource:"bodyJson",extractExpress:"",varName:""})},delTableRow:function(e,t){"extract"===e&&this.extract.splice(t,1)}}},i=r,o=(a("3568"),a("5511")),s=Object(o["a"])(i,n,l,!1,null,"e4ed8d16",null);t["default"]=s.exports},"7db5":function(e,t,a){"use strict";var n=a("7f0e"),l=a.n(n);l.a},"7f0e":function(e,t,a){},"886a":function(e,t,a){},b944:function(e,t,a){"use strict";var n=a("5329"),l=a.n(n);l.a},db0c:function(e,t,a){"use strict";var n=a("1d87e"),l=a.n(n);l.a},db28:function(e,t,a){"use strict";var n=a("4719"),l=a.n(n);l.a}}]);