(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f5e88010","chunk-6028559a"],{"120e":function(e,t,a){"use strict";a.d(t,"c",function(){return i}),a.d(t,"a",function(){return n}),a.d(t,"e",function(){return l}),a.d(t,"b",function(){return o}),a.d(t,"d",function(){return s});var r=a("b775"),i=function(e){return Object(r["d"])("/pageElement/listPage",e,!1)},n=function(e){return Object(r["e"])("/pageElement/add",e)},l=function(e){return Object(r["f"])("/pageElement/edit",e)},o=function(e){return Object(r["e"])("/pageElement/remove",e)},s=function(e){return Object(r["d"])("/pageElement/listByProjectId/"+e)}},"7e71":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-card",{staticClass:"box-card card-main",attrs:{shadow:"never"}},[a("div",{attrs:{slot:"header"},slot:"header"},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.serchData,"label-width":"90px","label-position":"right",size:"mini"}},[a("el-form-item",{attrs:{label:"页面名称："}},[a("el-input",{staticStyle:{width:"150px"},attrs:{disabled:"",placeholder:"请输入页面名称"},model:{value:e.serchData.pageName,callback:function(t){e.$set(e.serchData,"pageName",t)},expression:"serchData.pageName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"元素名称："}},[a("el-input",{staticStyle:{width:"150px"},attrs:{placeholder:"请输入元素名称"},model:{value:e.serchData.elementName,callback:function(t){e.$set(e.serchData,"elementName",t)},expression:"serchData.elementName"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.searchList}},[e._v("查询")]),e._v(" "),a("el-button",{on:{click:e.resetSearch}},[e._v("重置")])],1)],1)],1),e._v(" "),a("el-row",[a("el-button",{attrs:{size:"mini"},on:{click:function(t){return e.$router.push({path:"/uiTest/pageElement/page"})}}},[e._v("返回")]),e._v(" "),a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(t){return e.addRow()}}},[e._v("新增元素")])],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"auto"},attrs:{data:e.dataList,border:"",stripe:"",size:"small"}},[a("el-table-column",{attrs:{type:"selection",align:"center",width:"35"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",width:"180",label:"元素名称"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.elementName))]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",width:"150",label:"定位方式"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.byType))]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center","show-overflow-tooltip":"",label:"定位值"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.byValue))]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"备注"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.remark))]}}])}),e._v(" "),a("el-table-column",{attrs:{width:"180",fixed:"right",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{staticStyle:{padding:"3px 4px 3px 4px",margin:"1px"},attrs:{type:"primary",size:"mini"},on:{click:function(a){return e.addRow(t.row)}}},[e._v("修改")]),e._v(" "),a("el-button",{staticStyle:{padding:"3px 4px 3px 4px",margin:"1px"},attrs:{type:"danger",size:"mini"},on:{click:function(a){return e.deleteRow(t.row)}}},[e._v("删除")])]}}])})],1),e._v(" "),a("el-pagination",{attrs:{background:"","current-page":e.pageInfo.pageNum,"page-sizes":[10,20,30,50],"page-size":e.pageInfo.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.pageInfo.pageCount},on:{"size-change":e.changePageSize,"current-change":e.changePageNum}}),e._v(" "),e.addOrEditFormVisible?a("add-or-update",{ref:"addOrUpdate",on:{refreshDataList:e.getPageList}}):e._e()],1)},i=[],n=a("120e"),l=a("af96"),o=a("958a"),s={components:{AddOrUpdate:o["default"]},data:function(){return{loading:!1,serchData:{pageName:"",pageId:"",elementName:""},pageInfo:{pageNum:1,pageSize:10,pageCount:0},dataList:[],addOrEditFormVisible:!1}},computed:{serchInfo:function(){var e=this.pageInfo,t=this.serchData;return e.serchData=t,e}},mounted:function(){this.serchData.pageId=this.$route.query.id,this.getProjectElement(this.$route.query.id),this.getPageList()},methods:{resetSearch:function(){this.serchData.elementName=""},searchList:function(){this.getPageList()},changePageSize:function(e){this.pageInfo.pageSize=e,this.getPageList()},changePageNum:function(e){this.pageInfo.pageNum=e,this.getPageList()},addRow:function(e){var t=this;this.addOrEditFormVisible=!0,this.$nextTick(function(){t.$refs.addOrUpdate.init(e,t.$route.query.id)})},deleteRow:function(e){var t=this;this.$confirm("此操作将永久删除该元素, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(n["b"])(e).then(function(e){t.$message({type:"success",message:"删除成功!"}),t.getPageList()})}).catch(function(){t.$message({type:"success",message:"已取消删除"})})},getPageList:function(){var e=this;this.loading=!0,Object(n["c"])(this.serchInfo).then(function(t){e.dataList=t.list||[],e.pageInfo.pageCount=t.total,e.loading=!1})},getProjectElement:function(e){var t=this;Object(l["d"])(e).then(function(e){e&&(t.serchData.pageName=e.pageName)})}}},d=s,c=a("6691"),u=Object(c["a"])(d,r,i,!1,null,"599f8250",null);t["default"]=u.exports},"958a":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{"close-on-click-modal":!1,title:e.addOrEditForm.title,visible:e.visible,width:"500px"},on:{"update:visible":function(t){e.visible=t},close:function(t){return e.closeDialog("addOrEditForm")}}},[a("el-form",{ref:"addOrEditForm",attrs:{"label-width":"90px",model:e.addOrEditForm,size:"small",rules:e.rules}},[a("el-form-item",{attrs:{label:"元素名称",prop:"elementName"}},[a("el-input",{attrs:{"auto-complete":"off",placeholder:"请输入元素名称"},model:{value:e.addOrEditForm.elementName,callback:function(t){e.$set(e.addOrEditForm,"elementName",t)},expression:"addOrEditForm.elementName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"定位方式",prop:"byType"}},[a("el-select",{attrs:{filterable:"",placeholder:"请选择定位方式"},model:{value:e.addOrEditForm.byType,callback:function(t){e.$set(e.addOrEditForm,"byType",t)},expression:"addOrEditForm.byType"}},[a("el-option",{attrs:{label:"id",value:"id"}}),e._v(" "),a("el-option",{attrs:{label:"name",value:"name"}}),e._v(" "),a("el-option",{attrs:{label:"className",value:"className"}}),e._v(" "),a("el-option",{attrs:{label:"cssSelector",value:"cssSelector"}}),e._v(" "),a("el-option",{attrs:{label:"xpath",value:"xpath"}}),e._v(" "),a("el-option",{attrs:{label:"linkText",value:"linkText"}}),e._v(" "),a("el-option",{attrs:{label:"tagName",value:"tagName"}}),e._v(" "),a("el-option",{attrs:{label:"partialLinkText",value:"partialLinkText"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"定位值",prop:"byValue"}},[a("el-input",{attrs:{"auto-complete":"off",placeholder:"请输入定位值"},model:{value:e.addOrEditForm.byValue,callback:function(t){e.$set(e.addOrEditForm,"byValue",t)},expression:"addOrEditForm.byValue"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"备注",prop:"remark"}},[a("el-input",{attrs:{type:"textarea"},model:{value:e.addOrEditForm.remark,callback:function(t){e.$set(e.addOrEditForm,"remark",t)},expression:"addOrEditForm.remark"}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small"},on:{click:function(t){return e.closeDialog("addOrEditForm")}}},[e._v("取消")]),e._v(" "),a("el-button",{staticClass:"title",attrs:{size:"small",type:"primary"},on:{click:function(t){return e.submitForm("addOrEditForm")}}},[e._v("保存")])],1)],1)},i=[],n=a("120e"),l=a("3fa5"),o={data:function(){return{visible:!1,projectPages:[],rules:{elementName:[{required:!0,message:"元素名称不能为空",trigger:"blur"}],byType:[{required:!0,message:"定位方式不能为空",trigger:"blur"}],byValue:[{required:!0,message:"定位值不能为空",trigger:"blur"}]},addOrEditForm:{title:"",id:"",pageId:-1,elementName:"",byType:"",byValue:"",isEnable:1,remark:""}}},methods:{init:function(e,t){e?(this.visible=!0,this.addOrEditForm.title="编辑元素",this.addOrEditForm.id=e.id,this.addOrEditForm.pageId=e.pageId,this.addOrEditForm.elementName=e.elementName,this.addOrEditForm.byType=e.byType,this.addOrEditForm.byValue=e.byValue,this.addOrEditForm.isEnable=e.isEnable,this.addOrEditForm.remark=e.remark):(this.visible=!0,this.addOrEditForm.pageId=t,this.addOrEditForm.title="新增元素")},closeDialog:function(){this.$refs["addOrEditForm"].resetFields(),this.visible=!1,this.addOrEditForm={title:"",id:"",pageId:-1,elementName:"",byType:"",byValue:"",isEnable:1,remark:""}},submitForm:function(e){var t=this;this.$refs[e].validate(function(a){a&&"addOrEditForm"===e&&t.addOrEditForm.id?Object(n["e"])(t.addOrEditForm).then(function(e){t.visible=!1,t.$emit("refreshDataList"),Object(l["a"])("保存数据成功")}):a&&"addOrEditForm"===e&&!t.addOrEditForm.id&&Object(n["a"])(t.addOrEditForm).then(function(e){t.visible=!1,t.$emit("refreshDataList"),Object(l["a"])("保存数据成功")})})}}},s=o,d=a("6691"),c=Object(d["a"])(s,r,i,!1,null,null,null);t["default"]=c.exports},af96:function(e,t,a){"use strict";a.d(t,"c",function(){return i}),a.d(t,"a",function(){return n}),a.d(t,"f",function(){return l}),a.d(t,"b",function(){return o}),a.d(t,"e",function(){return s}),a.d(t,"d",function(){return d});var r=a("b775"),i=function(e){return Object(r["d"])("/projectPage/listPage",e,!1)},n=function(e){return Object(r["e"])("/projectPage/add",e)},l=function(e){return Object(r["f"])("/projectPage/edit",e)},o=function(e){return Object(r["e"])("/projectPage/remove",e)},s=function(e){return Object(r["d"])("/projectPage/listByProjectId/"+e)},d=function(e){return Object(r["d"])("/projectPage/listById/"+e)}}}]);