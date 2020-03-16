(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0abc57"],{1761:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-card",{staticClass:"box-card card-main",attrs:{shadow:"never"}},[a("div",{attrs:{slot:"header"},slot:"header"},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:t.serchData,"label-width":"90px","label-position":"right",size:"mini"}},[a("el-form-item",{attrs:{label:"项目名称："}},[a("el-input",{attrs:{placeholder:"请输入项目名称"},model:{value:t.serchData.projectName,callback:function(e){t.$set(t.serchData,"projectName",e)},expression:"serchData.projectName"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"项目描述："}},[a("el-input",{attrs:{placeholder:"请输入项目描述"},model:{value:t.serchData.description,callback:function(e){t.$set(t.serchData,"description",e)},expression:"serchData.description"}})],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:t.searchList}},[t._v("查询")]),t._v(" "),a("el-button",{on:{click:t.resetSearch}},[t._v("重置")])],1)],1)],1),t._v(" "),a("el-row",[a("el-button",{attrs:{size:"mini"},on:{click:function(e){return t.addRow()}}},[t._v("新增项目")])],1),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"auto"},attrs:{data:t.dataList,border:"",stripe:"",size:"small"}},[a("el-table-column",{attrs:{type:"selection",align:"center",width:"35"}}),t._v(" "),a("el-table-column",{attrs:{width:"80",align:"center",label:"项目ID"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.id))]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"项目名称"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.projectName))]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"手机平台"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(1===e.row.platform?"Andorid":"")+"\n        "+t._s(2===e.row.platform?"IOS":"")+"\n        "+t._s(3===e.row.platform?"Andorid-微信Web":"")+"\n        "+t._s(4===e.row.platform?"Andorid-微信小程序":"")+"\n      ")]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"项目描述"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.description))]}}])}),t._v(" "),a("el-table-column",{attrs:{width:"160",align:"center",label:"创建时间"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.createTime))]}}])}),t._v(" "),a("el-table-column",{attrs:{width:"180",fixed:"right",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{staticStyle:{padding:"3px 4px 3px 4px",margin:"1px"},attrs:{size:"mini"},on:{click:function(a){return t.addRow(e.row)}}},[t._v("修改")]),t._v(" "),a("el-button",{staticStyle:{padding:"3px 4px 3px 4px",margin:"1px"},attrs:{type:"danger",size:"mini"},on:{click:function(a){return t.deleteRow(e.row)}}},[t._v("删除")])]}}])})],1),t._v(" "),a("el-pagination",{attrs:{background:"","current-page":t.pageInfo.pageNum,"page-sizes":[10,20,30,50],"page-size":t.pageInfo.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:t.pageInfo.pageCount},on:{"size-change":t.changePageSize,"current-change":t.changePageNum}}),t._v(" "),a("el-dialog",{attrs:{"close-on-click-modal":!1,title:t.addOrEditForm.title,visible:t.addOrEditFormVisible,width:"530px"},on:{"update:visible":function(e){t.addOrEditFormVisible=e},close:function(e){return t.closeDialog("addOrEditForm")}}},[a("el-form",{ref:"addOrEditForm",attrs:{"label-width":"90px",model:t.addOrEditForm,size:"small",rules:t.rules}},[a("el-form-item",{attrs:{label:"项目名称",prop:"projectName"}},[t.addOrEditForm.id?a("el-input",{attrs:{disabled:!0,"auto-complete":"off",placeholder:"请输入项目名称"},model:{value:t.addOrEditForm.projectName,callback:function(e){t.$set(t.addOrEditForm,"projectName",e)},expression:"addOrEditForm.projectName"}}):t._e(),t._v(" "),t.addOrEditForm.id?t._e():a("el-input",{attrs:{"auto-complete":"off",placeholder:"请输入项目名称"},model:{value:t.addOrEditForm.projectName,callback:function(e){t.$set(t.addOrEditForm,"projectName",e)},expression:"addOrEditForm.projectName"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"手机平台",prop:"description"}},[a("el-radio-group",{attrs:{disabled:""!==t.addOrEditForm.id},model:{value:t.addOrEditForm.platform,callback:function(e){t.$set(t.addOrEditForm,"platform",e)},expression:"addOrEditForm.platform"}},[a("el-radio",{attrs:{label:1}},[t._v("Android")]),t._v(" "),a("el-radio",{attrs:{label:2}},[t._v("IOS")]),t._v(" "),a("el-radio",{attrs:{label:3}},[t._v("Android-微信Web")]),t._v(" "),a("el-radio",{attrs:{label:4}},[t._v("Android-微信小程序")])],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"项目描述",prop:"description"}},[a("el-input",{attrs:{"auto-complete":"off",placeholder:"请输入项目描述"},model:{value:t.addOrEditForm.description,callback:function(e){t.$set(t.addOrEditForm,"description",e)},expression:"addOrEditForm.description"}})],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small"},on:{click:function(e){return t.closeDialog("addOrEditForm")}}},[t._v("取消")]),t._v(" "),a("el-button",{staticClass:"title",attrs:{size:"small",type:"primary"},on:{click:function(e){return t.submitForm("addOrEditForm")}}},[t._v("保存")])],1)],1)],1)},i=[],o=a("b775"),d=function(t){return Object(o["d"])("/projects/listPage",t,!1)},n=function(t){return Object(o["e"])("/projects/add",t)},s=function(t){return Object(o["f"])("/projects/edit",t)},l=function(t){return Object(o["e"])("/projects/remove",t)},c=a("3fa5"),m={data:function(){return{loading:!1,serchData:{projectName:"",description:""},pageInfo:{pageNum:1,pageSize:10,pageCount:0},dataList:[],addOrEditFormVisible:!1,rules:{projectName:[{required:!0,message:"项目名称不能为空",trigger:"blur"}]},addOrEditForm:{title:"",id:"",platform:1,projectName:"",description:""}}},computed:{serchInfo:function(){var t=this.pageInfo,e=this.serchData;return t.serchData=e,t}},mounted:function(){this.getPageList()},methods:{resetSearch:function(){this.serchData={}},searchList:function(){this.getPageList()},changePageSize:function(t){this.pageInfo.pageSize=t,this.getPageList()},changePageNum:function(t){this.pageInfo.pageNum=t,this.getPageList()},addRow:function(t){t?(this.addOrEditFormVisible=!0,this.addOrEditForm.title="编辑项目",this.addOrEditForm.id=t.id,this.addOrEditForm.platform=t.platform,this.addOrEditForm.projectName=t.projectName,this.addOrEditForm.description=t.description):(this.addOrEditFormVisible=!0,this.addOrEditForm.title="新增项目")},deleteRow:function(t){var e=this;this.$confirm("此操作将永久删除该任务, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){l(t).then((function(t){e.$message({type:"success",message:"删除成功!"}),e.getPageList()}))})).catch((function(){e.$message({type:"success",message:"已取消删除"})}))},submitForm:function(t){var e=this;this.$refs[t].validate((function(a){a&&"addOrEditForm"===t&&e.addOrEditForm.id?s(e.addOrEditForm).then((function(t){e.addOrEditFormVisible=!1,e.getPageList(),Object(c["a"])("保存数据成功")})):a&&"addOrEditForm"===t&&!e.addOrEditForm.id&&n(e.addOrEditForm).then((function(t){e.addOrEditFormVisible=!1,e.getPageList(),Object(c["a"])("保存数据成功")}))}))},closeDialog:function(t){"addOrEditForm"===t&&(this.$refs[t].resetFields(),this.addOrEditFormVisible=!1,this.resetDialog())},getPageList:function(){var t=this;this.loading=!0,d(this.serchInfo).then((function(e){t.dataList=e.list||[],t.pageInfo.pageCount=e.total,t.loading=!1}))},resetDialog:function(){this.addOrEditForm={title:"",id:"",platform:1,projectName:"",description:""}}}},u=m,p=a("5511"),f=Object(p["a"])(u,r,i,!1,null,"185efa9b",null);e["default"]=f.exports}}]);