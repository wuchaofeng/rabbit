(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b502bed4","chunk-12b9d652"],{"2d81":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{"close-on-click-modal":!1,title:e.addOrEditForm.title,visible:e.visible,width:"500px"},on:{"update:visible":function(t){e.visible=t},close:function(t){return e.closeDialog("addOrEditForm")}}},[a("el-form",{ref:"addOrEditForm",attrs:{"label-width":"90px",model:e.addOrEditForm,size:"small",rules:e.rules}},[a("el-form-item",{attrs:{label:"参数名称",prop:"paramName"}},[a("el-input",{attrs:{"auto-complete":"off",placeholder:"请输入参数名称"},model:{value:e.addOrEditForm.paramName,callback:function(t){e.$set(e.addOrEditForm,"paramName",t)},expression:"addOrEditForm.paramName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"参数类型",prop:"paramType"}},[a("el-select",{attrs:{filterable:"",placeholder:"请输选择参数类型"},model:{value:e.addOrEditForm.paramType,callback:function(t){e.$set(e.addOrEditForm,"paramType",t)},expression:"addOrEditForm.paramType"}},[a("el-option",{attrs:{label:"字符串",value:1}}),e._v(" "),a("el-option",{attrs:{label:"数值",value:2}}),e._v(" "),a("el-option",{attrs:{label:"数据库",value:3}}),e._v(" "),a("el-option",{attrs:{label:"布尔值",value:4}}),e._v(" "),a("el-option",{attrs:{label:"函数",value:5}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"参数值",prop:"paramValue"}},[1===e.addOrEditForm.paramType?a("el-input",{attrs:{"auto-complete":"off",placeholder:"请输入参数值"},model:{value:e.addOrEditForm.paramValue,callback:function(t){e.$set(e.addOrEditForm,"paramValue",t)},expression:"addOrEditForm.paramValue"}}):e._e(),e._v(" "),2===e.addOrEditForm.paramType?a("el-input-number",{staticStyle:{width:"187px"},attrs:{controls:!1},model:{value:e.addOrEditForm.paramValue,callback:function(t){e.$set(e.addOrEditForm,"paramValue",t)},expression:"addOrEditForm.paramValue"}}):e._e(),e._v(" "),3===e.addOrEditForm.paramType?a("el-input",{attrs:{"auto-complete":"off",placeholder:"请输入参数值"},model:{value:e.addOrEditForm.paramValue,callback:function(t){e.$set(e.addOrEditForm,"paramValue",t)},expression:"addOrEditForm.paramValue"}}):e._e(),e._v(" "),4===e.addOrEditForm.paramType?a("el-select",{attrs:{"auto-complete":"off",placeholder:"请选择"},model:{value:e.addOrEditForm.paramValue,callback:function(t){e.$set(e.addOrEditForm,"paramValue",t)},expression:"addOrEditForm.paramValue"}},[a("el-option",{attrs:{label:"true",value:"true"}}),e._v(" "),a("el-option",{attrs:{label:"false",value:"false"}})],1):e._e(),e._v(" "),5===e.addOrEditForm.paramType?a("el-input",{attrs:{"auto-complete":"off",placeholder:"请输入参数值"},model:{value:e.addOrEditForm.paramValue,callback:function(t){e.$set(e.addOrEditForm,"paramValue",t)},expression:"addOrEditForm.paramValue"}}):e._e()],1),e._v(" "),a("el-form-item",{attrs:{label:"备注",prop:"remark"}},[a("el-input",{attrs:{type:"textarea"},model:{value:e.addOrEditForm.remark,callback:function(t){e.$set(e.addOrEditForm,"remark",t)},expression:"addOrEditForm.remark"}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small"},on:{click:function(t){return e.closeDialog("addOrEditForm")}}},[e._v("取消")]),e._v(" "),a("el-button",{staticClass:"title",attrs:{size:"small",type:"primary"},on:{click:function(t){return e.submitForm("addOrEditForm")}}},[e._v("保存")])],1)],1)},i=[],o=a("57f8"),d=a("3fa5"),l={data:function(){return{visible:!1,rules:{paramName:[{required:!0,message:"参数组名不能为空",trigger:"blur"}]},addOrEditForm:{title:"",id:"",paramName:"",projectId:"",paramType:1,paramValue:"",remark:""}}},methods:{init:function(e){if(e){try{this.addOrEditForm.jobParams=JSON.parse(e.methodParams)}catch(t){this.addOrEditForm.jobParams={}}this.visible=!0,this.addOrEditForm.title="编辑参数",this.addOrEditForm.id=e.id,this.addOrEditForm.paramName=e.paramName,this.addOrEditForm.paramType=e.paramType,this.addOrEditForm.projectId=e.projectId,this.addOrEditForm.paramValue=e.paramValue,this.addOrEditForm.remark=e.remark}else this.visible=!0,this.addOrEditForm.projectId=this.$store.getters.projectId,this.addOrEditForm.title="新增参数"},closeDialog:function(){this.$refs["addOrEditForm"].resetFields(),this.visible=!1,this.addOrEditForm={title:"",id:"",paramName:"",projectId:"",paramType:1,paramValue:"",remark:""}},submitForm:function(e){var t=this;this.$refs[e].validate(function(a){t.addOrEditForm.methodParams=JSON.stringify(t.addOrEditForm.jobParams),a&&"addOrEditForm"===e&&t.addOrEditForm.id?Object(o["d"])(t.addOrEditForm).then(function(e){t.visible=!1,t.$emit("refreshDataList"),Object(d["a"])("保存数据成功")}):a&&"addOrEditForm"===e&&!t.addOrEditForm.id&&Object(o["a"])(t.addOrEditForm).then(function(e){t.visible=!1,t.$emit("refreshDataList"),Object(d["a"])("保存数据成功")})})}}},n=l,s=a("6691"),m=Object(s["a"])(n,r,i,!1,null,null,null);t["default"]=m.exports},"57f8":function(e,t,a){"use strict";a.d(t,"c",function(){return i}),a.d(t,"a",function(){return o}),a.d(t,"d",function(){return d}),a.d(t,"b",function(){return l});var r=a("b775"),i=function(e){return Object(r["d"])("/globalParams/listPage",e,!1)},o=function(e){return Object(r["e"])("/globalParams/add",e)},d=function(e){return Object(r["f"])("/globalParams/edit",e)},l=function(e){return Object(r["e"])("/globalParams/remove",e)}},7633:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-card",{staticClass:"box-card card-main",attrs:{shadow:"never"}},[a("div",{attrs:{slot:"header"},slot:"header"},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.serchData,"label-width":"90px","label-position":"right",size:"mini"}},[a("el-form-item",{attrs:{label:"参数名称："}},[a("el-input",{staticStyle:{width:"150px"},attrs:{placeholder:"请输入参数名称"},model:{value:e.serchData.paramName,callback:function(t){e.$set(e.serchData,"paramName",t)},expression:"serchData.paramName"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.searchList}},[e._v("查询")]),e._v(" "),a("el-button",{on:{click:e.resetSearch}},[e._v("重置")])],1)],1)],1),e._v(" "),a("el-row",[a("el-button",{attrs:{size:"mini"},on:{click:function(t){return e.addRow()}}},[e._v("新增参数")])],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"auto"},attrs:{data:e.dataList,border:"",stripe:"",size:"small"}},[a("el-table-column",{attrs:{type:"selection",align:"center",width:"35"}}),e._v(" "),a("el-table-column",{attrs:{width:"150",align:"center",label:"参数名称"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.paramName))]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"参数类型"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(1===t.row.paramType?"字符串":"")+"\n        "+e._s(2===t.row.paramType?"数值":"")+"\n        "+e._s(3===t.row.paramType?"数据库":"")+"\n        "+e._s(4===t.row.paramType?"布尔值":"")+"\n        "+e._s(5===t.row.paramType?"函数":"")+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"参数值"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.paramValue))]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"备注"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.remark))]}}])}),e._v(" "),a("el-table-column",{attrs:{width:"180",fixed:"right",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{staticStyle:{padding:"3px 4px 3px 4px",margin:"1px"},attrs:{type:"primary",size:"mini"},on:{click:function(a){return e.addRow(t.row)}}},[e._v("修改")]),e._v(" "),a("el-button",{staticStyle:{padding:"3px 4px 3px 4px",margin:"1px"},attrs:{type:"danger",size:"mini"},on:{click:function(a){return e.deleteRow(t.row)}}},[e._v("删除")])]}}])})],1),e._v(" "),a("el-pagination",{attrs:{background:"","current-page":e.pageInfo.pageNum,"page-sizes":[10,20,30,50],"page-size":e.pageInfo.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.pageInfo.pageCount},on:{"size-change":e.changePageSize,"current-change":e.changePageNum}}),e._v(" "),e.addOrEditFormVisible?a("add-or-update",{ref:"addOrUpdate",on:{refreshDataList:e.getPageList}}):e._e()],1)},i=[],o=a("57f8"),d=a("2d81"),l={components:{AddOrUpdate:d["default"]},data:function(){return{loading:!1,serchData:{paramName:""},pageInfo:{pageNum:1,pageSize:10,pageCount:0},dataList:[],addOrEditFormVisible:!1}},computed:{serchInfo:function(){var e=this.pageInfo,t=this.serchData;return t.projectId=this.$store.getters.projectId,e.serchData=t,e}},mounted:function(){this.getPageList()},methods:{resetSearch:function(){this.serchData={name:""}},searchList:function(){this.getPageList()},changePageSize:function(e){this.pageInfo.pageSize=e,this.getPageList()},changePageNum:function(e){this.pageInfo.pageNum=e,this.getPageList()},addRow:function(e){var t=this;this.addOrEditFormVisible=!0,this.$nextTick(function(){t.$refs.addOrUpdate.init(e)})},deleteRow:function(e){var t=this;this.$confirm("此操作将永久删除该参数, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(o["b"])(e).then(function(e){t.$message({type:"success",message:"删除成功!"}),t.getPageList()})}).catch(function(){t.$message({type:"success",message:"已取消删除"})})},getPageList:function(){var e=this;this.loading=!0,Object(o["c"])(this.serchInfo).then(function(t){e.dataList=t.list||[],e.pageInfo.pageCount=t.total,e.loading=!1})}}},n=l,s=a("6691"),m=Object(s["a"])(n,r,i,!1,null,"36e69fe8",null);t["default"]=m.exports}}]);