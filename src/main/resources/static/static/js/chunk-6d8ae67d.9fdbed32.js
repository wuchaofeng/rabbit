(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6d8ae67d"],{"0cea":function(e,t,n){"use strict";n.d(t,"h",(function(){return i})),n.d(t,"g",(function(){return r})),n.d(t,"f",(function(){return s})),n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return c})),n.d(t,"i",(function(){return u})),n.d(t,"j",(function(){return l})),n.d(t,"d",(function(){return d})),n.d(t,"e",(function(){return f})),n.d(t,"c",(function(){return p}));var a=n("b775"),i=function(e){return Object(a["d"])("/apiTestCase/listPage",e,!1)},r=function(e){return Object(a["d"])("/apiTestCase/"+e)},s=function(e){return Object(a["d"])("/apiTestCase/steps/"+e)},o=function(e){return Object(a["e"])("/apiTestCase/add",e)},c=function(e){return Object(a["e"])("/apiTestCase/addApiToCase",e)},u=function(e){return Object(a["f"])("/apiTestCase/edit",e)},l=function(e){return Object(a["f"])("/apiTestCase/editStep",e)},d=function(e){return Object(a["e"])("/apiTestCase/remove",e)},f=function(e){return Object(a["e"])("/apiTestCase/removeStep",e)},p=function(e){return Object(a["e"])("/apiTestCase/debug",e)}},"1c2e":function(e,t,n){"use strict";n.d(t,"g",(function(){return i})),n.d(t,"f",(function(){return r})),n.d(t,"i",(function(){return s})),n.d(t,"h",(function(){return o})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return u})),n.d(t,"j",(function(){return l})),n.d(t,"b",(function(){return d})),n.d(t,"k",(function(){return f})),n.d(t,"d",(function(){return p})),n.d(t,"e",(function(){return h}));var a=n("b775"),i=function(e){return Object(a["d"])("/api/listPage",e,!1)},r=function(e){return Object(a["d"])("/api/"+e)},s=function(e){return Object(a["d"])("/api/listTreeByProjectId/"+e)},o=function(e){return Object(a["d"])("/api/listSuiteByProjectId/"+e)},c=function(e){return Object(a["e"])("/api/debug",e)},u=function(e){return Object(a["e"])("/api/add",e)},l=function(e){return Object(a["f"])("/api/edit",e)},d=function(e){return Object(a["e"])("/api/addSuite",e)},f=function(e){return Object(a["f"])("/api/editSuite",e)},p=function(e){return Object(a["e"])("/api/remove",e)},h=function(e){return Object(a["e"])("/api/removeSuite",e)}},"40da":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-dialog",{attrs:{"close-on-click-modal":!1,title:"添加HTTP接口",visible:e.visible,"append-to-body":"",width:"70%"},on:{"update:visible":function(t){e.visible=t},open:function(t){return e.openDialog()},close:function(t){return e.closeDialog("addForm")}}},[n("el-card",{staticClass:"box-card card-my",attrs:{shadow:"never","body-style":"padding-top:0px;"}},[n("div",{staticClass:"my-class"},[n("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.serchData,"label-width":"90px","label-position":"right",size:"mini"}},[n("el-form-item",{attrs:{label:"接口名称："}},[n("el-input",{attrs:{placeholder:"请输入接口名称"},model:{value:e.serchData.name,callback:function(t){e.$set(e.serchData,"name",t)},expression:"serchData.name"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"接口描述："}},[n("el-input",{attrs:{placeholder:"请输入接口描述"},model:{value:e.serchData.remark,callback:function(t){e.$set(e.serchData,"remark",t)},expression:"serchData.remark"}})],1),e._v(" "),n("el-form-item",[n("el-button",{on:{click:e.searchList}},[e._v("查询")]),e._v(" "),n("el-button",{staticClass:"title",attrs:{type:"primary"},on:{click:function(t){return e.submitForm("addForm")}}},[e._v("添加")])],1)],1)],1),e._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"table",staticStyle:{width:"auto"},attrs:{data:e.dataList,border:"",stripe:"",size:"small"},on:{"selection-change":e.selected}},[n("el-table-column",{attrs:{type:"selection",align:"center",width:"40"}}),e._v(" "),n("el-table-column",{attrs:{align:"center",width:"200",label:"接口名称"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.name))]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center","show-overflow-tooltip":"",label:"接口路径"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.path))]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",width:"170",label:"接口分类"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n          "+e._s(t.row.suiteName)+"\n        ")]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",width:"90",label:"状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n          "+e._s(0===t.row.status?"未完成":"已完成")+"\n        ")]}}])})],1),e._v(" "),n("el-pagination",{attrs:{background:"","current-page":e.pageInfo.pageNum,"page-sizes":[10,20,30,50],"page-size":e.pageInfo.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.pageInfo.pageCount},on:{"size-change":e.changePageSize,"current-change":e.changePageNum}})],1)],1)},i=[],r=(n("cc57"),n("6d57"),n("1c2e")),s=n("0cea"),o=n("3fa5"),c={props:["value","testcaseId"],data:function(){return{visible:!1,dataList:[],selectedData:[],apiSuiteList:[],serchData:{name:"",remark:"",caseType:1},pageInfo:{pageNum:1,pageSize:10,pageCount:0},loading:!1}},computed:{serchInfo:function(){var e=this.pageInfo,t=this.serchData;return t.projectId=this.$store.getters.projectId,e.serchData=t,e}},watch:{value:{handler:function(e){this.visible=e},immediate:!0},visible:function(e){this.$emit("input",e)}},mounted:function(){var e=this;Object(r["h"])(this.$store.getters.projectId).then((function(t){e.apiSuiteList=t||[]}))},methods:{selected:function(e){this.selectedData=e},submitForm:function(e){var t=this;if("addForm"===e&&0===this.selectedData.length)this.$message({showClose:!0,message:"请选择一个HTTP接口",type:"error"});else if("addForm"===e&&this.selectedData.length>0){var n=[];this.selectedData.forEach((function(e){var a={};a.api=e,a.name=e.name,a.type=1,a.testcaseId=t.testcaseId,a.sourceId=e.id,a.status=1,a.domain=e.domain||"",a.method=e.method||"GET",a.path=e.path||"",a.beforeExcs=e.beforeExcs,a.reqHeader=e.reqHeader,a.reqQuery=e.reqQuery,a.reqBodyData=e.reqBodyData,a.reqBodyJson=e.reqBodyJson,a.reqBodyType=e.reqBodyType,a.reqExtract=e.reqExtract,a.reqAssert=e.reqAssert,n.push(a)})),Object(s["a"])(n).then((function(e){t.visible=!1,t.$emit("callBack"),Object(o["a"])("保存数据成功")}))}},getPageList:function(){var e=this;this.loading=!0,Object(r["g"])(this.serchInfo).then((function(t){e.dataList=t.list.map((function(t,n){for(var a=0;a<e.apiSuiteList.length;a++)if(e.apiSuiteList[a].id===t.apiSuiteId){t.suiteName=e.apiSuiteList[a].name;break}return t})),e.pageInfo.pageCount=t.total,e.loading=!1}))},searchList:function(){this.getPageList()},changePageSize:function(e){this.pageInfo.pageSize=e,this.getPageList()},changePageNum:function(e){this.pageInfo.pageNum=e,this.getPageList()},closeDialog:function(e){this.visible=!1,this.$refs.table.clearSelection()},openDialog:function(){this.getPageList()}}},u=c,l=(n("b1ec"),n("5511")),d=Object(l["a"])(u,a,i,!1,null,"0983158a",null);t["default"]=d.exports},"8fc9":function(e,t,n){},b1ec:function(e,t,n){"use strict";var a=n("8fc9"),i=n.n(a);i.a}}]);