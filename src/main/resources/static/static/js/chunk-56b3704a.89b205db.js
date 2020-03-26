(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-56b3704a","chunk-eac2ce56","chunk-7189cf00","chunk-2d0db458","chunk-2d221446"],{"0542":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-dialog",{attrs:{"close-on-click-modal":!1,title:"选择页面元素",visible:e.visible,width:"80%"},on:{"update:visible":function(t){e.visible=t}}},[n("el-card",{staticClass:"box-card card-my",attrs:{shadow:"never"}},[n("div",{staticClass:"my-class"},[n("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.serchData,"label-width":"90px","label-position":"right",size:"mini"}},[n("el-form-item",{attrs:{label:"页面名称："}},[n("el-input",{staticStyle:{width:"150px"},attrs:{placeholder:"请输入页面名称"},model:{value:e.serchData.pageName,callback:function(t){e.$set(e.serchData,"pageName",t)},expression:"serchData.pageName"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"元素名称："}},[n("el-input",{staticStyle:{width:"150px"},attrs:{placeholder:"请输入元素名称"},model:{value:e.serchData.elementName,callback:function(t){e.$set(e.serchData,"elementName",t)},expression:"serchData.elementName"}})],1),e._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:e.searchList}},[e._v("查询")]),e._v(" "),n("el-button",{on:{click:e.clearElement}},[e._v("清除元素")])],1)],1)],1),e._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"auto"},attrs:{data:e.dataList,border:"",stripe:"",size:"small"},on:{"row-dblclick":e.selectRow}},[n("el-table-column",{attrs:{width:"100",align:"center",label:"项目名称"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.projectName))]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",width:"150",label:"页面名称"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.pageName))]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",width:"150",label:"元素名称"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.elementName))]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",width:"100",label:"定位方式"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.byType))]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center","show-overflow-tooltip":"",label:"定位值"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.value))]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"备注"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.remark))]}}])}),e._v(" "),n("el-table-column",{attrs:{width:"180",label:"操作"}},[n("span",[e._v("双击选择元素")])])],1),e._v(" "),n("el-pagination",{attrs:{background:"","current-page":e.pageInfo.pageNum,"page-sizes":[10,20,30,50],"page-size":e.pageInfo.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.pageInfo.pageCount},on:{"size-change":e.changePageSize,"current-change":e.changePageNum}})],1)],1)},a=[],s=n("120e"),o={data:function(){return{visible:!1,loading:!1,projects:[],serchData:{projectName:"",pageName:"",elementName:""},pageInfo:{pageNum:1,pageSize:10,pageCount:0},dataList:[],row:{}}},computed:{serchInfo:function(){var e=this.pageInfo,t=this.serchData;return e.serchData=t,e}},methods:{init:function(e,t){this.projects=this.$store.getters.projects,this.serchData.projectName=t,this.row=e,this.visible=!0,this.getPageList()},searchList:function(){this.getPageList()},changePageSize:function(e){this.pageInfo.pageSize=e,this.getPageList()},changePageNum:function(e){this.pageInfo.pageNum=e,this.getPageList()},selectRow:function(e,t,n){this.row.elementName=e.pageName+"->"+e.elementName,this.row.elementId=e.id,this.visible=!1},clearElement:function(){this.row.elementName="",this.row.elementId=-1,this.visible=!1},getPageList:function(){var e=this;this.loading=!0,Object(s["c"])(this.serchInfo).then((function(t){e.dataList=t.list||[],e.pageInfo.pageCount=t.total,e.loading=!1}))}}},r=o,l=(n("58d4"),n("5511")),c=Object(l["a"])(r,i,a,!1,null,"11242623",null);t["default"]=c.exports},"05ed":function(e,t,n){"use strict";n.d(t,"e",(function(){return a})),n.d(t,"i",(function(){return s})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return r})),n.d(t,"j",(function(){return l})),n.d(t,"g",(function(){return c})),n.d(t,"b",(function(){return u})),n.d(t,"k",(function(){return d})),n.d(t,"d",(function(){return f})),n.d(t,"h",(function(){return p})),n.d(t,"f",(function(){return b}));var i=n("b775"),a=function(e){return Object(i["d"])("/dict/listDict")},s=function(e){return Object(i["d"])("/dict/uiActionList")},o=function(e){return Object(i["d"])("/dict/apiActionList")},r=function(e){return Object(i["e"])("/dict/addDict",e)},l=function(e){return Object(i["f"])("/dict/editDict",e)},c=function(e){return Object(i["d"])("/dict/listDictValue/"+e)},u=function(e){return Object(i["e"])("/dict/addDictValue",e)},d=function(e){return Object(i["f"])("/dict/editDictValue",e)},f=function(e){return Object(i["e"])("/dict/removeDictValue/"+e)},p=function(e){return Object(i["d"])("/dict/dictValue/listPage",e)},b=function(e){return Object(i["e"])("/dict/getDictValueById/"+e)}},"0e4c":function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"d",(function(){return s})),n.d(t,"a",(function(){return o})),n.d(t,"e",(function(){return r})),n.d(t,"b",(function(){return l}));var i=n("b775"),a=function(e){return Object(i["d"])("/testDatabese/listPage",e,!1)},s=function(e){return Object(i["d"])("/testDatabese/listByProjectId/"+e)},o=function(e){return Object(i["e"])("/testDatabese/add",e)},r=function(e){return Object(i["f"])("/testDatabese/edit",e)},l=function(e){return Object(i["e"])("/testDatabese/remove",e)}},"120e":function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return s})),n.d(t,"e",(function(){return o})),n.d(t,"b",(function(){return r})),n.d(t,"d",(function(){return l}));var i=n("b775"),a=function(e){return Object(i["d"])("/pageElement/listPage",e,!1)},s=function(e){return Object(i["e"])("/pageElement/add",e)},o=function(e){return Object(i["f"])("/pageElement/edit",e)},r=function(e){return Object(i["e"])("/pageElement/remove",e)},l=function(e){return Object(i["d"])("/pageElement/listByProjectId/"+e)}},"298a":function(e,t,n){},"2b76":function(e,t,n){"use strict";var i=n("33da"),a=n.n(i);a.a},"33da":function(e,t,n){},"58d4":function(e,t,n){"use strict";var i=n("298a"),a=n.n(i);a.a},"5a41":function(e,t,n){},"6ec6":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-table",{attrs:{data:e.params,border:"","max-height":"200",size:"mini"}},[n("el-table-column",{attrs:{align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-input",{attrs:{size:"mini",disabled:!e.isAdd,clearable:""},model:{value:t.row.name,callback:function(n){e.$set(t.row,"name","string"===typeof n?n.trim():n)},expression:"scope.row.name"}})]}}])},[n("template",{slot:"header"},[n("el-button",{staticClass:"el-icon-circle-plus",staticStyle:{padding:"4px 0px"},attrs:{type:"text",disabled:!e.isAdd,size:"mini"},on:{click:e.addParam}}),e._v("\n        方法参数名\n      ")],1)],2),e._v(" "),n("el-table-column",{attrs:{label:"值",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-input",{attrs:{size:"mini",clearable:""},model:{value:t.row.value,callback:function(n){e.$set(t.row,"value","string"===typeof n?n.trim():n)},expression:"scope.row.value"}})]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"描述",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-input",{attrs:{size:"mini",clearable:""},model:{value:t.row.description,callback:function(n){e.$set(t.row,"description","string"===typeof n?n.trim():n)},expression:"scope.row.description"}})]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"操作",align:"center",width:"50"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{staticClass:"el-icon-delete",attrs:{type:"text",disabled:!e.isAdd,size:"mini"},on:{click:function(n){return e.deleteParam(t.$index)}}})]}}])})],1)],1)},a=[],s={props:{isAdd:Boolean},data:function(){return{params:[]}},methods:{addParam:function(){this.params.push({name:"",value:"",description:""})},deleteParam:function(e){this.params.splice(e,1)}}},o=s,r=n("5511"),l=Object(r["a"])(o,i,a,!1,null,null,null);t["default"]=l.exports},8961:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}]},[n("sticky",{attrs:{"z-index":4,"sticky-top":84,"class-name":"sub-navbar"}},[n("el-button",{attrs:{size:"mini"},on:{click:e.toBack}},[e._v("返回")]),e._v(" "),n("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){return e.save("formDom")}}},[e._v("保存(ctrl+s)")]),e._v(" "),n("el-button",{attrs:{type:"success",size:"mini"},on:{click:function(t){return e.save("formDom",1)}}},[e._v("调试(ctrl+d)")]),e._v(" "),n("el-button",{attrs:{type:"info",plain:"",size:"mini"},on:{click:function(t){return e.save("formDom",2)}}},[e._v("复制(ctrl+shift+c)")]),e._v(" "),e.$route.query.id?n("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){return e.save("formDom",3)}}},[e._v("用例转业务")]):e._e()],1),e._v(" "),n("el-card",{staticClass:"box-card card-main",attrs:{shadow:"never"}},[n("el-form",{ref:"caseInfoForm",staticClass:"demo-form-inline",attrs:{inline:!0,model:e.caseInfo,"label-width":"110px","label-position":"right",rules:e.caseInfoFormRules,size:"mini"}},[n("el-form-item",{attrs:{label:"用例名称：",prop:"name"}},[n("el-input",{attrs:{placeholder:"请输入用例名称"},model:{value:e.caseInfo.name,callback:function(t){e.$set(e.caseInfo,"name",t)},expression:"caseInfo.name"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"超时时间(分)：",prop:"timoutTime"}},[n("el-input-number",{attrs:{step:1,precision:0,"controls-position":"right",min:1,max:20},model:{value:e.caseInfo.timoutTime,callback:function(t){e.$set(e.caseInfo,"timoutTime",t)},expression:"caseInfo.timoutTime"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"备注："}},[n("el-input",{attrs:{placeholder:"请输入业务备注"},model:{value:e.caseInfo.remark,callback:function(t){e.$set(e.caseInfo,"remark",t)},expression:"caseInfo.remark"}})],1)],1),e._v(" "),n("el-tabs",{staticStyle:{margin:"20px 0px 30px 0px"},attrs:{"tab-position":"left"}},[n("el-tab-pane",{attrs:{label:"用例参数"}},[n("action-case-var-list",{ref:"caseVars",attrs:{"is-add":!0}})],1),e._v(" "),n("el-tab-pane",{attrs:{label:"公共参数"}},[e._v("公共参数列表")]),e._v(" "),n("el-tab-pane",{attrs:{disabled:!e.caseInfo.id,label:"附件"}},[n("ActionFileList",{ref:"actionFileList"})],1)],1),e._v(" "),n("el-form",{ref:"formDom",attrs:{rules:e.formData.rules,model:e.formData,size:"mini"}},[n("el-divider",{attrs:{"content-position":"left"}},[e._v("测试步骤")]),e._v(" "),n("el-table",{staticStyle:{width:"auto"},attrs:{data:e.formData.tableData,border:"",stripe:"",size:"mini"}},[n("el-table-column",{attrs:{align:"center",width:"220",prop:"name"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-form-item",{attrs:{prop:"tableData."+t.$index+".name",rules:e.formData.rules.name}},[n("el-input",{attrs:{placeholder:"描述"},model:{value:t.row.name,callback:function(n){e.$set(t.row,"name",n)},expression:"scope.row.name"}})],1)]}}])},[n("template",{slot:"header"},[n("span",{staticClass:"required"},[n("el-button",{staticClass:"el-icon-circle-plus",staticStyle:{padding:"4px 0px"},attrs:{type:"text",size:"mini"},on:{click:function(t){return e.addRow()}}}),e._v("\n              描述\n            ")],1)])],2),e._v(" "),n("el-table-column",{attrs:{align:"center",width:"210",prop:"actionTemp",label:"动作Action"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-form-item",{attrs:{prop:"tableData."+t.$index+".actionTemp",rules:e.formData.rules.actionTemp}},[n("el-cascader",{staticStyle:{width:"170px"},attrs:{placeholder:"试试搜索：关键字",options:e.uiActionList,"show-all-levels":!1,filterable:"","popper-class":"ui-action-popper-class",props:{expandTrigger:"hover"}},on:{change:function(n){return e.changeAction(t.row,t.row.actionTemp)}},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.node,a=t.data;return[n("span",[e._v(e._s(a.label))]),e._v(" "),i.isLeaf?n("span",[e._v(" ("+e._s(a.name)+") ")]):e._e(),e._v(" "),i.isLeaf?e._e():n("span",[e._v(" ("+e._s(a.children.length)+") ")])]}}],null,!0),model:{value:t.row.actionTemp,callback:function(n){e.$set(t.row,"actionTemp",n)},expression:"scope.row.actionTemp"}}),e._v(" "),n("el-popover",{attrs:{placement:"top",width:"400",trigger:"click"}},[n("pre",[e._v(e._s(t.row.actionRemark))]),e._v(" "),n("svg-icon",{staticStyle:{cursor:"pointer"},attrs:{slot:"reference","icon-class":"tips"},slot:"reference"})],1)],1)]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",prop:"path",width:"260px",label:"页面元素"},scopedSlots:e._u([{key:"default",fn:function(t){return["uiAction11"===t.row.actionType?n("el-form-item",[n("el-select",{staticStyle:{width:"100%"},attrs:{filterable:"",placeholder:"请选择数据库"},model:{value:t.row.elementId,callback:function(n){e.$set(t.row,"elementId",n)},expression:"scope.row.elementId"}},e._l(e.testDataBaseList,(function(e,t){return n("el-option",{key:t,attrs:{label:e.name,value:e.id}})})),1)],1):e._e(),e._v(" "),"uiAction12"===t.row.actionType?n("el-form-item",[n("el-select",{staticStyle:{width:"100%"},attrs:{filterable:"",placeholder:"请选择业务"},model:{value:t.row.elementId,callback:function(n){e.$set(t.row,"elementId",n)},expression:"scope.row.elementId"}},e._l(e.businessList,(function(e,t){return n("el-option",{key:t,attrs:{label:e.name,value:e.id}})})),1)],1):e._e(),e._v(" "),"uiAction11"!==t.row.actionType&&"uiAction12"!==t.row.actionType?n("el-form-item",{attrs:{prop:"tableData."+t.$index+".pageElementTemp",rules:e.formData.rules.pageElementTemp}},[n("el-cascader",{staticStyle:{width:"100%"},attrs:{placeholder:"试试搜索：元素",options:e.projectPageList,"popper-class":"ui-action-popper-class",filterable:"",clearable:"",props:{expandTrigger:"hover"}},on:{change:function(n){return e.changeElement(t.row,t.row.pageElementTemp)}},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.node,a=t.data;return[n("span",[e._v(e._s(a.label))]),e._v(" "),i.isLeaf?e._e():n("span",[e._v(" ("+e._s(a.children.length)+") ")])]}}],null,!0),model:{value:t.row.pageElementTemp,callback:function(n){e.$set(t.row,"pageElementTemp",n)},expression:"scope.row.pageElementTemp"}})],1):e._e()]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",prop:"optionData",label:"操作数据/结果"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-form-item",{attrs:{prop:"tableData."+t.$index+".optionData",rules:e.formData.rules.optionData}},[n("el-input",{attrs:{placeholder:"操作数据/结果"},model:{value:t.row.optionData,callback:function(n){e.$set(t.row,"optionData",n)},expression:"scope.row.optionData"}})],1)]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"操作",width:"170"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-form-item",[n("el-button-group",[n("el-button",{attrs:{icon:"el-icon-plus",size:"mini",circle:""},on:{click:function(n){return e.addRow(t.row,t.$index)}}}),e._v(" "),n("el-button",{attrs:{icon:"el-icon-delete",size:"mini",circle:""},on:{click:function(n){return e.deleteRow(t.row,t.$index)}}}),e._v(" "),n("el-button",{attrs:{icon:"el-icon-top",size:"mini",circle:""},on:{click:function(n){return e.upGo(t.$index)}}}),e._v(" "),n("el-button",{attrs:{icon:"el-icon-bottom",size:"mini",circle:""},on:{click:function(n){return e.downGo(t.$index)}}}),e._v(" "),n("el-button",{attrs:{icon:"el-icon-document-copy",size:"mini",circle:""},on:{click:function(n){return e.copyRow(t.row,t.$index)}}})],1)],1)]}}])})],1)],1),e._v(" "),n("element-add-or-update",{ref:"elementAddOrUpdate"}),e._v(" "),n("debug",{ref:"debug"})],1)],1)},a=[],s=(n("6d57"),n("63ff"),n("57f0")),o=(n("cc57"),n("b804")),r=n("05ed"),l=n("3fa5"),c=n("0542"),u=n("fc93"),d=n("af96"),f=n("0e4c"),p=n("6ec6"),b=n("ca2d"),m=n("ad5d"),g={components:{ActionCaseVarList:p["default"],ElementAddOrUpdate:c["default"],Sticky:o["a"],debug:m["default"],ActionFileList:b["default"]},data:function(){return{loading:!1,caseInfoFormRules:{name:{type:"string",required:!0,message:"用例名称不能为空",trigger:"blur"},timoutTime:{required:!0,message:"超时时间不能为空",trigger:"blur"}},formData:{rules:{name:{type:"string",required:!0,message:"必填字段",trigger:"blur"},actionTemp:{required:!0,message:"必填字段",trigger:"blur"}},tableData:[{name:"",testcaseId:this.$route.query.id,elementId:"",actionTemp:[],pageElementTemp:[],optionData:"",type:1}]},uiActionList:[],projectPageList:[],caseInfo:{title:"",id:"",name:"",projectId:0,failContinue:"",caseType:1,params:"",timoutTime:1,testSteps:[],remark:""},businessList:[],testDataBaseList:[]}},destroyed:function(){window.onbeforeunload=null,document.onkeydown=null},mounted:function(){var e=this;this.initBefore(),this.getUiActionList(),this.getPageEelement(),Object(u["b"])(this.$store.getters.projectId).then((function(t){e.businessList=t||[]})),Object(f["d"])(this.$store.getters.projectId).then((function(t){e.testDataBaseList=t||[]})),document.onkeydown=function(){var t=window.event;83===t.keyCode&&t.ctrlKey?(e.save("formDom"),t.preventDefault()):68===t.keyCode&&t.ctrlKey?(e.save("formDom",1),t.preventDefault()):67===t.keyCode&&t.ctrlKey&&t.shiftKey&&(e.save("formDom",2),t.preventDefault())}},methods:{initBefore:function(){var e=this;this.$route.query.id?(this.loading=!0,Object(u["e"])(this.$route.query.id).then((function(t){t&&t.projectId===e.$store.getters.projectId||e.toBack(),e.init(t)})).finally((function(){e.loading=!1}))):this.init()},init:function(e){var t=this;e?(this.caseInfo.id=e.id,this.caseInfo.name=e.name,this.caseInfo.projectId=e.projectId,this.caseInfo.remark=e.remark,this.caseInfo.failContinue=e.failContinue,this.caseInfo.timoutTime=e.timoutTime,this.$refs.caseVars.params=JSON.parse(e.caseVars||"[]"),this.$nextTick((function(){t.$refs.actionFileList.init(e.id)})),this.formData.tableData=e.testSteps.map((function(e){return e.pageElementTemp=[e.pageId,e.elementId],e.actionTemp=[e.actionType,e.action],e}))):(this.caseInfo.projectId=this.$store.getters.projectId,this.caseInfo.caseType=1,this.caseInfo.failContinue=0,this.caseInfo.timoutTime=1)},debug:function(){this.$refs.debug.visible=!0},toBack:function(){this.$router.push({path:"/uiTestNew/testCase/list"})},changeElement:function(e,t){e.pageId=t[0],e.elementId=t[1]},changeAction:function(e,t){e.actionType=t[0],e.action=t[1],e.elementId="",e.pageElementTemp=[];for(var n=this.uiActionList,i=0;i<n.length;i++)if(0!==n[i].children.length&&n[i].value===t[0])for(var a=0;a<n[i].children.length;a++)if(n[i].children[a].value===t[1]){e.actionRemark=n[i].children[a].remark;break}},copyRow:function(e,t){var n=JSON.parse(JSON.stringify(e));n.id="",this.formData.tableData.splice(t+1,0,n)},addRow:function(e,t){var n={name:"",testcaseId:this.$route.query.id,elementId:"",actionTemp:"",pageElementTemp:"",optionData:"",type:1};t||0===t?this.formData.tableData.splice(t+1,0,n):this.formData.tableData.push(n)},deleteRow:function(e,t){this.formData.tableData.splice(t,1)},upGo:function(e){if(0!==e){var t=this.formData.tableData[e],n=this.formData.tableData[e-1];this.formData.tableData.splice(e,1,n),this.formData.tableData[e-1]=t}},downGo:function(e){if(e!==this.formData.tableData.length-1){var t=this.formData.tableData[e],n=this.formData.tableData[e+1];this.formData.tableData.splice(e,1,n),this.formData.tableData[e+1]=t}},save:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t,n){var i,a,s=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i=!0,e.next=3,this.$refs["caseInfoForm"].validate((function(e,t){!e&i&&(i=e)}));case 3:return e.next=5,this.$refs.caseVars.params.every((function(e,t){return!!e.name||(s.$message.error("第"+(t+1)+"行用例参数名不能为空"),i=!1,!1)}));case 5:return a=e.sent,a&&(this.caseInfo.caseVars=JSON.stringify(this.$refs.caseVars.params)),e.next=9,this.$refs[t].validate((function(e,t){e&i&&(s.caseInfo.testSteps=s.formData.tableData,1===n?(s.$refs.debug.init(s.caseInfo),s.$refs.debug.visible=!0):s.$route.query.id&&2!==n?(3===n&&(s.caseInfo.caseType=2),Object(u["g"])(s.caseInfo).then((function(e){3===n?(s.$router.push({path:"/uiTestNew/business/edit",query:{id:e.id}}),Object(l["a"])("用例转业务成功！")):(s.initBefore(),Object(l["a"])("保存用例成功！"))}))):Object(u["a"])(s.caseInfo).then((function(e){s.$router.push({path:"/uiTestNew/testCase/edit",query:{id:e.id}}),2===n?Object(l["a"])("恭喜你！复制用例成功！"):Object(l["a"])("保存用例成功！")})))}));case 9:case"end":return e.stop()}}),e,this)})));function t(t,n){return e.apply(this,arguments)}return t}(),getPageEelement:function(){var e=this;Object(d["e"])(this.$store.getters.projectId).then((function(t){t.forEach((function(t){var n=t.pageName,i=t.id,a=[];t.pageElementList&&t.pageElementList.forEach((function(e){var t=e.elementName,n=e.id;a.push({label:t,value:n})})),e.projectPageList.push({label:n,value:i,children:a})}))}))},getUiActionList:function(){var e=this;Object(r["i"])().then((function(t){t.forEach((function(t){var n=t.name,i=t.key,a=[];t.sysDictValueList&&t.sysDictValueList.forEach((function(e){var t=e.key,n=e.key,i=e.name,s=e.remark;a.push({label:t,value:n,name:i,remark:s})})),e.uiActionList.push({label:n,value:i,children:a})}))}))}}},h=g,v=(n("2b76"),n("5511")),y=Object(v["a"])(h,i,a,!1,null,"110e14b6",null);t["default"]=y.exports},"8f3f":function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"d",(function(){return s})),n.d(t,"a",(function(){return o})),n.d(t,"e",(function(){return r})),n.d(t,"b",(function(){return l}));var i=n("b775"),a=function(e){return Object(i["d"])("/clients/listPage",e,!1)},s=function(e){return Object(i["d"])("/clients/listByProjectId/"+e)},o=function(e){return Object(i["e"])("/clients/add",e)},r=function(e){return Object(i["f"])("/clients/edit",e)},l=function(e){return Object(i["e"])("/clients/remove",e)}},"919d":function(e,t,n){"use strict";var i=n("5a41"),a=n.n(i);a.a},ad5d:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-dialog",{attrs:{"close-on-click-modal":!1,title:"调试用例",visible:e.visible,width:"1400px",top:"10vh"},on:{"update:visible":function(t){e.visible=t},close:function(t){return e.closeDialog("debugForm")}}},[n("el-form",{ref:"debugForm",attrs:{inline:!0,model:e.debugForm,size:"mini",rules:e.rules}},[n("el-form-item",{attrs:{label:"执行机",prop:"host"}},[n("el-select",{staticStyle:{width:"220px"},attrs:{filterable:"",placeholder:"请选择执行机"},model:{value:e.debugForm.host,callback:function(t){e.$set(e.debugForm,"host",t)},expression:"debugForm.host"}},e._l(e.clientList,(function(e,t){return n("el-option",{key:t,attrs:{label:"【"+e.remark+"】 "+e.name+(1===e.status?"【在线】":"【离线】"),value:e.name}})})),1)],1),e._v(" "),n("el-form-item",{attrs:{label:"浏览器类型",prop:"browserType"}},[n("el-select",{staticStyle:{width:"200px"},attrs:{filterable:"",placeholder:"请选浏览器类型"},model:{value:e.debugForm.browserType,callback:function(t){e.$set(e.debugForm,"browserType",t)},expression:"debugForm.browserType"}},e._l(e.browserTypeList,(function(e,t){return n("el-option",{key:t,attrs:{label:e.key,value:e.key}})})),1)],1),e._v(" "),n("el-button",{staticClass:"title",attrs:{loading:e.loading,size:"mini",type:"primary"},on:{click:function(t){return e.initDebug("debugForm")}}},[e._v(e._s(e.loading?"调试中":"开始"))]),e._v(" "),n("el-button",{attrs:{disabled:e.isDebuging,size:"mini"},on:{click:function(t){return e.debugNext()}}},[e._v("执行下一步")]),e._v(" "),n("el-button",{attrs:{disabled:e.isDebuging,size:"mini"},on:{click:function(t){return e.debugNextPoint()}}},[e._v("执行到下个断点")]),e._v(" "),n("el-button",{attrs:{disabled:e.isDebuging,size:"mini"},on:{click:function(t){return e.debugNextAll()}}},[e._v("执行剩余步骤")]),e._v(" "),n("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(t){return e.stopDebug()}}},[e._v("停止")]),e._v(" "),n("el-button",{attrs:{size:"mini"},on:{click:function(t){e.debugLog=""}}},[e._v("清除日志")]),e._v(" "),n("el-button",{attrs:{size:"mini"},on:{click:function(t){e.debugLogIsTop=!e.debugLogIsTop}}},[e._v(e._s(e.debugLogIsTop?"取消显示最底":"显示最底"))])],1),e._v(" "),n("el-row",{attrs:{gutter:10}},[n("el-col",{attrs:{span:13}},[n("el-table",{ref:"debugTable",staticStyle:{width:"auto"},attrs:{data:e.debugTestcase.testSteps,height:"400",border:"",size:"mini","row-class-name":e.tableRowClassName}},[n("el-table-column",{attrs:{align:"center",width:"50px",label:"断点"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{staticStyle:{padding:"7px",margin:"3px"},attrs:{round:"",type:t.row.point?"danger":"info"},on:{click:function(n){return e.swichDebug(t.row)}}})]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",width:"40px",label:"ID"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.id))]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"步骤描述"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.name))]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",width:"120",label:"定位方式"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-select",{attrs:{size:"mini",filterable:"",clearable:""},model:{value:t.row.byType,callback:function(n){e.$set(t.row,"byType",n)},expression:"scope.row.byType"}},[n("el-option",{attrs:{label:"id",value:"id"}}),e._v(" "),n("el-option",{attrs:{label:"name",value:"name"}}),e._v(" "),n("el-option",{attrs:{label:"className",value:"className"}}),e._v(" "),n("el-option",{attrs:{label:"cssSelector",value:"cssSelector"}}),e._v(" "),n("el-option",{attrs:{label:"xpath",value:"xpath"}}),e._v(" "),n("el-option",{attrs:{label:"linkText",value:"linkText"}}),e._v(" "),n("el-option",{attrs:{label:"tagName",value:"tagName"}}),e._v(" "),n("el-option",{attrs:{label:"partialLinkText",value:"partialLinkText"}})],1)]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"定位值"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-input",{attrs:{size:"mini","auto-complete":"off",placeholder:"请输入定位值"},model:{value:t.row.byValue,callback:function(n){e.$set(t.row,"byValue",n)},expression:"scope.row.byValue"}})]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"操作数据"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-input",{attrs:{size:"mini","auto-complete":"off"},model:{value:t.row.optionData,callback:function(n){e.$set(t.row,"optionData",n)},expression:"scope.row.optionData"}})]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",width:"70",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{staticClass:"mini-btn",attrs:{type:"danger",disabled:!e.loading,size:"mini"},on:{click:function(n){return e.debugRow(t.row)}}},[e._v("调试")])]}}])})],1)],1),e._v(" "),n("el-col",{attrs:{span:11}},[n("div",{staticClass:"log-s",staticStyle:{width:"100%"}},[n("div",{staticClass:"debug-log-codemirror"},[n("codemirror",{ref:"debugLog",staticClass:"code",attrs:{options:e.cmOptions},model:{value:e.debugLog,callback:function(t){e.debugLog=t},expression:"debugLog"}})],1)])])],1)],1)},a=[],s=(n("6491"),n("63ff"),n("57f0")),o=n("05ed"),r=n("8f3f"),l=n("8a2b"),c=n("120e"),u={components:{codemirror:l["codemirror"]},data:function(){return{debugTestcase:{title:"",id:"",name:"",projectId:0,failContinue:"",caseType:1,params:"",timoutTime:"",testSteps:[],remark:""},loading:!1,visible:!1,rules:{host:[{required:!0,message:"执行机不能为空",trigger:"blur"}],browserType:[{required:!0,message:"浏览器类型不能为空",trigger:"blur"}]},debugLog:"",debugForm:{caseId:this.$route.query.id,host:"",browserType:"",caseVars:""},debugWebsocket:null,clientList:[],browserTypeList:[],testPageList:[],cmOptions:{value:"",mode:"text/x-yaml",theme:"night",indentUnit:2,smartIndent:!0,tabSize:4,readOnly:!0,showCursorWhenSelecting:!0,lineNumbers:!0,firstLineNumber:1,extraKeys:{"Ctrl-Space":"autocomplete"},autofocus:!0,matchBrackets:!0},debugId:0,debugCaseList:[],isDebuging:!0,debugLogIsTop:!0}},mounted:function(){var e=this;Object(o["g"])(2).then((function(t){e.browserTypeList=t})),Object(r["d"])(this.$store.getters.projectId).then((function(t){e.clientList=t})),Object(c["d"])(this.$store.getters.projectId).then((function(t){e.testPageList=t||[]}))},beforeDestroy:function(){this.debugWebsocket&&(this.debugWebsocket.close(),this.debugWebsocket.send("关闭一下")),this.loading=!1},methods:{init:function(e){var t=this,n=JSON.parse(JSON.stringify(e));n.testSteps.map((function(e,n){if(e.elementId)for(var i=0;i<t.testPageList.length;i++){var a=t.testPageList[i];a.id===e.elementId&&(e.byType=a.byType||"",e.byValue=a.byValue||"")}return e.id=n+1,e.point=!1,e})),this.debugForm.caseVars=n.caseVars,this.debugTestcase=n,this.isDebuging=!0,this.debugLogIsTop=!0,this.debugId=0},tableRowClassName:function(e){e.row;var t=e.rowIndex;return t+1===this.debugId?"debug-row":""},swichDebug:function(e){e.point=!e.point},debugNextAll:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getDebugCase(this.debugId,!0);case 2:this.debugCaseList.length>0?(this.isDebuging=!0,this.debugId=this.debugId+1,this.debugWebsocket.send(JSON.stringify({key:"case",msg:this.debugTestcase.testSteps[this.debugId-1]}))):this.debugLog=this.debugLog.concat("提示: 已经没有步骤可以执行！\r\n");case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),debugNextPoint:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getDebugCase(this.debugId);case 2:this.debugCaseList.length>0?(this.isDebuging=!0,this.debugId=this.debugId+1,this.debugWebsocket.send(JSON.stringify({key:"case",msg:this.debugTestcase.testSteps[this.debugId-1]}))):this.debugLog=this.debugLog.concat("提示: 已经没有步骤可以执行！\r\n");case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),stopDebug:function(){this.debugWebsocket&&this.debugWebsocket.close()},debugRow:function(e){this.debugWebsocket.send(JSON.stringify({key:"debugCase",msg:e}))},debugNext:function(){this.debugId<this.debugTestcase.testSteps[this.debugTestcase.testSteps.length-1].id?(this.debugId=this.debugId+1,this.debugWebsocket.send(JSON.stringify({key:"case",msg:this.debugTestcase.testSteps[this.debugId-1]}))):this.debugLog=this.debugLog.concat("提示: 已经没有步骤可以执行！\r\n")},closeDialog:function(){this.$refs["debugForm"].resetFields(),this.visible=!1,this.debugLog="",this.debugWebsocket&&this.debugWebsocket.close(),this.debugForm={caseId:this.$route.query.id,host:"",browserType:""}},getDebugCase:function(e,t){var n=0;for(e&&(n=e),this.debugCaseList=[],n;n<this.debugTestcase.testSteps.length;n++){var i=this.debugTestcase.testSteps[n];if(t)this.debugCaseList.push(i);else{if(i.point){this.debugCaseList.push(i);break}this.debugCaseList.push(i)}}},initDebug:function(e){var t=this;this.debugId=0,this.isDebuging=!0,this.$refs[e].validate((function(e){e&&(t.loading=!0,t.debugWebsocket=new WebSocket("ws://"+t.debugForm.host+"/ui/debug"),t.debugWebsocket.onclose=function(){t.loading=!1,t.debugId=0,t.isDebuging=!0,t.debugLog=t.debugLog.concat("调试通道关闭\r\n")},t.debugWebsocket.onerror=function(){t.loading=!1,t.debugId=0,t.isDebuging=!0,t.debugLog=t.debugLog.concat("调试通道报错\r\n")},t.debugWebsocket.onmessage=function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(n){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(i=JSON.parse(n.data)||{},"info"!==i.type){e.next=12;break}if("调试通道连接成功"!==i.msg){e.next=8;break}return t.debugWebsocket.send(JSON.stringify({key:"start",msg:t.debugForm})),e.next=6,t.getDebugCase();case 6:e.next=9;break;case 8:i.msg.startsWith("创建浏览器对象成功")&&(t.debugCaseList&&(t.debugId=1),t.debugWebsocket.send(JSON.stringify({key:"case",msg:t.debugCaseList[0]})));case 9:t.debugLog=t.debugLog.concat((i.msg||"")+"\r\n"),e.next=13;break;case 12:"caseInfo"===i.type&&(i.stepNo<t.debugCaseList[t.debugCaseList.length-1].id?(t.debugLog=t.debugLog.concat((i.msg||"")+"\r\n"),t.debugId=t.debugId+1,t.debugWebsocket.send(JSON.stringify({key:"case",msg:t.debugTestcase.testSteps[t.debugId-1]}))):i.stepNo===t.debugCaseList[t.debugCaseList.length-1].id?(t.debugLog=t.debugLog.concat((i.msg||"")+"\r\n"),t.isDebuging=!1,t.debugLog=t.debugLog.concat("已经执行完断点\r\n")):t.debugLog=t.debugLog.concat((i.msg||"")+"\r\n"));case 13:t.debugLogIsTop&&t.$nextTick((function(){var e=t.$el.querySelector(".CodeMirror-vscrollbar");e.scrollTop=e.scrollHeight}));case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}))}}},d=u,f=(n("919d"),n("5511")),p=Object(f["a"])(d,i,a,!1,null,"59dd1f94",null);t["default"]=p.exports},af96:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return s})),n.d(t,"f",(function(){return o})),n.d(t,"b",(function(){return r})),n.d(t,"e",(function(){return l})),n.d(t,"d",(function(){return c}));var i=n("b775"),a=function(e){return Object(i["d"])("/projectPage/listPage",e,!1)},s=function(e){return Object(i["e"])("/projectPage/add",e)},o=function(e){return Object(i["f"])("/projectPage/edit",e)},r=function(e){return Object(i["e"])("/projectPage/remove",e)},l=function(e){return Object(i["d"])("/projectPage/listByProjectId/"+e)},c=function(e){return Object(i["d"])("/projectPage/listById/"+e)}},b804:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{style:{height:e.height+"px",zIndex:e.zIndex}},[n("div",{class:e.className,style:{top:e.isSticky?e.stickyTop+"px":"",zIndex:e.zIndex,position:e.position,width:e.width,height:e.height+"px"}},[e._t("default",[n("div",[e._v("sticky")])])],2)])},a=[],s=(n("163d"),{name:"Sticky",props:{stickyTop:{type:Number,default:0},zIndex:{type:Number,default:1},className:{type:String,default:""}},data:function(){return{active:!1,position:"",width:void 0,height:void 0,isSticky:!1}},mounted:function(){this.height=this.$el.getBoundingClientRect().height,window.addEventListener("scroll",this.handleScroll),window.addEventListener("resize",this.handleResize)},activated:function(){this.handleScroll()},destroyed:function(){window.removeEventListener("scroll",this.handleScroll),window.removeEventListener("resize",this.handleResize)},methods:{sticky:function(){this.active||(this.position="fixed",this.active=!0,this.width=this.width+"px",this.isSticky=!0)},handleReset:function(){this.active&&this.reset()},reset:function(){this.position="",this.width="auto",this.active=!1,this.isSticky=!1},handleScroll:function(){var e=this.$el.getBoundingClientRect().width;this.width=e||"auto";var t=this.$el.getBoundingClientRect().top;t<this.stickyTop?this.sticky():this.handleReset()},handleResize:function(){this.isSticky&&(this.width=this.$el.getBoundingClientRect().width+"px")}}}),o=s,r=n("5511"),l=Object(r["a"])(o,i,a,!1,null,null,null);t["a"]=l.exports},ca2d:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-table",{attrs:{data:e.fileList,border:"","max-height":"200",size:"mini"}},[n("el-table-column",{attrs:{align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.name)+"\n      ")]}}])},[n("template",{slot:"header"},[n("el-button",{staticClass:"el-icon-circle-plus",staticStyle:{padding:"4px 0px"},attrs:{type:"text",size:"mini"},on:{click:function(t){e.dialogVisible=!0}}}),e._v("\n        文件名称\n      ")],1)],2),e._v(" "),n("el-table-column",{attrs:{label:"文件类型",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.contentType)+"\n      ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"操作",align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{staticClass:"el-icon-delete",staticStyle:{padding:"2px"},attrs:{type:"text",size:"mini"},on:{click:function(n){return e.deleteFile(t.row.id)}}}),e._v(" "),n("el-button",{staticClass:"el-icon-download",staticStyle:{padding:"2px"},attrs:{type:"text",size:"mini"},on:{click:function(n){return e.downloadFile(t.row)}}})]}}])})],1),e._v(" "),n("el-dialog",{attrs:{title:"文件导入","close-on-click-modal":!1,visible:e.dialogVisible,width:"410px",center:""},on:{"update:visible":function(t){e.dialogVisible=t},close:function(t){return e.closeDialog()}}},[n("el-form",{ref:"uploadForm",attrs:{model:e.uploadInfo,"label-position":"right",size:"mini",rules:e.rules}},[n("el-form-item",{attrs:{prop:"name"}},[n("el-input",{attrs:{size:"small",placeholder:"请输入文件名称"},model:{value:e.uploadInfo.name,callback:function(t){e.$set(e.uploadInfo,"name",t)},expression:"uploadInfo.name"}})],1)],1),e._v(" "),n("el-upload",{directives:[{name:"loading",rawName:"v-loading",value:e.uploadLoading,expression:"uploadLoading"}],ref:"upload",attrs:{"show-file-list":!1,drag:"","http-request":e.fileUpload,action:"#",multiple:""}},[n("i",{staticClass:"el-icon-upload"}),e._v(" "),n("div",{staticClass:"el-upload__text"},[e._v("将文件拖到此处，或"),n("em",[e._v("点击上传")])]),e._v(" "),n("div",{staticClass:"el-upload__tip",attrs:{slot:"tip",center:""},slot:"tip"},[e._v("文件不能超过10M")])])],1)],1)},a=[],s=n("b775"),o=function(e){return Object(s["e"])("/file/list",e)},r=function(e){return Object(s["g"])("/file/upload",e)},l=function(e){return Object(s["b"])("/file/"+e)},c={data:function(){return{dialogVisible:!1,uploadLoading:!1,rules:{name:[{required:!0,message:"文件名不能为空",trigger:"blur"}]},uploadInfo:{name:"",sourceType:1,sourceId:0,projectId:this.$store.getters.projectId},fileList:[]}},methods:{init:function(e,t){e&&(t&&(this.uploadInfo.sourceType=t),this.uploadInfo.sourceId=e,this.getFiles())},downloadFile:function(e){var t=document.createElement("a");t.style.display="none",t.href="/public/profile/system/"+e.path,t.download="",document.body.appendChild(t),t.click(),document.body.removeChild(t)},fileUpload:function(e){var t=this;this.$refs["uploadForm"].validate((function(n){if(n){var i=e.file,a=i.size<10485760;if(!a)return t.$message.warning("请上传10M以下的zip文件"),!1;var s=new FormData;s.append("files",i),s.append("fileInfo",JSON.stringify(t.uploadInfo)),t.uploadLoading=!0,r(s).then((function(e){t.$message({type:"success",message:"上传成功!"}),t.getFiles(),t.$refs["upload"].clearFiles(),t.dialogVisible=!1})).finally((function(){t.uploadLoading=!1}))}}))},deleteFile:function(e){var t=this;this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){l(e).then((function(e){t.$message({type:"success",message:"删除成功!"}),t.getFiles()}))})).catch((function(){t.$message({type:"success",message:"已取消删除"})}))},closeDialog:function(){this.$refs["upload"].clearFiles(),this.uploadInfo.name=""},getFiles:function(){var e=this;o({sourceType:this.uploadInfo.sourceType,sourceId:this.uploadInfo.sourceId}).then((function(t){e.fileList=t||[]}))}}},u=c,d=n("5511"),f=Object(d["a"])(u,i,a,!1,null,null,null);t["default"]=f.exports},fc93:function(e,t,n){"use strict";n.d(t,"f",(function(){return a})),n.d(t,"b",(function(){return s})),n.d(t,"e",(function(){return o})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return l})),n.d(t,"g",(function(){return c})),n.d(t,"d",(function(){return u}));var i=n("b775"),a=function(e){return Object(i["d"])("/uiTestCaseNew/listPage",e,!1)},s=function(e){return Object(i["d"])("/uiTestCaseNew/allBusiness/"+e)},o=function(e){return Object(i["d"])("/uiTestCaseNew/"+e)},r=function(e){return Object(i["d"])("/uiTestCaseNew/business/"+e)},l=function(e){return Object(i["e"])("/uiTestCaseNew/add",e)},c=function(e){return Object(i["f"])("/uiTestCaseNew/edit",e)},u=function(e){return Object(i["e"])("/uiTestCaseNew/remove",e)}}}]);