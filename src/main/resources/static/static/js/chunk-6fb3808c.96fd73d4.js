(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6fb3808c","chunk-e3e0049c"],{"0d09":function(t,e,a){},"376e1":function(t,e,a){},"3baf":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-row",{staticClass:"dect-main",attrs:{gutter:10}},[a("el-col",{attrs:{span:7}},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"singleTable",staticStyle:{width:"auto","min-height":"500px"},attrs:{data:t.dataList,border:"","row-style":{cursor:"pointer"},stripe:"",size:"small","highlight-current-row":""},on:{"row-click":t.selectRow}},[a("el-table-column",{attrs:{align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[[t._v("\n            "+t._s(e.row.name)+"\n            "),e.row.id?a("i",{staticClass:"el-icon-delete",staticStyle:{float:"right",padding:"5px",cursor:"pointer"},on:{click:function(a){return t.deleteRow(e.row)}}}):t._e()]]}}])},[a("template",{slot:"header"},[t._v("\n          环境列表\n          "),a("el-button",{staticClass:"el-icon-circle-plus",staticStyle:{padding:"4px 0px"},attrs:{type:"text",size:"mini"},on:{click:function(e){return t.selectRow()}}})],1)],2)],1)],1),t._v(" "),a("el-col",{attrs:{span:17}},[""!==t.selectedId?a("api-env-add-or-edit",{ref:"apiEnvAddOrEdit",on:{refreshData:t.callCack}}):t._e()],1)],1)},i=[],r=(a("63ff"),a("e71e")),l=a("b48a"),s=a("664d"),o={components:{apiEnvAddOrEdit:s["default"]},data:function(){return{loading:!1,dataList:[],selectedId:"",rules:{key:[{required:!0,message:"key不能为空",trigger:"blur"}],name:[{required:!0,message:"name不能为空",trigger:"blur"}]}}},mounted:function(){this.getDataList()},methods:{callCack:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(e){var a,n,i=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.getDataList();case 2:this.selectedId=e.id,a=0;case 4:if(!(a<this.dataList.length)){t.next=13;break}if(n=this.dataList[a],n.id!==e.id){t.next=10;break}return this.$refs.singleTable.setCurrentRow(n),this.$nextTick(function(){i.$refs.apiEnvAddOrEdit.init(e.id)}),t.abrupt("return");case 10:a++,t.next=4;break;case 13:this.selectedId="";case 14:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),selectRow:function(t){var e=this;t?(this.$refs.singleTable.setCurrentRow(t),this.selectedId=t.id,this.$nextTick(function(){e.$refs.apiEnvAddOrEdit.init(t.id)})):(this.dataList.length>0&&this.dataList[0].id&&this.dataList.unshift({name:"新增环境"}),this.$refs.singleTable.setCurrentRow(this.dataList[0]),this.selectedId=0,this.$nextTick(function(){e.$refs.apiEnvAddOrEdit.init()}))},deleteRow:function(t){var e=this;this.$confirm("此操作将永久删除该环境, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(l["b"])(t).then(function(t){e.$message({type:"success",message:"删除成功!"}),e.getDataList()})}).catch(function(){e.$message({type:"success",message:"已取消删除"})})},getDataList:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.loading=!0,this.selectedId="",t.next=4,Object(l["d"])(this.$store.getters.projectId).then(function(t){e.dataList=t||[],e.loading=!1});case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}},d=o,c=(a("f06d"),a("6691")),u=Object(c["a"])(d,n,i,!1,null,"71451f36",null);e["default"]=u.exports},"5874d":function(t,e,a){"use strict";var n=a("0d09"),i=a.n(n);i.a},"664d":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-card",{staticClass:"box-card card-main",attrs:{shadow:"never"}},[a("el-row",{staticClass:"header"},[a("b",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),a("el-button",{staticStyle:{"margin-left":"25px"},attrs:{size:"mini",type:"primary"},on:{click:t.save}},[t._v("保存")])],1),t._v(" "),a("el-card",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"box-card api-detail-card",attrs:{shadow:"never"}},[a("el-form",{ref:"addOrEditForm",attrs:{model:t.dataInfo,"label-position":"right",rules:t.rules,size:"mini"}},[a("el-form-item",{attrs:{label:"环境名称：","label-width":"82px",prop:"name"}},[a("el-input",{staticStyle:{width:"400px"},attrs:{placeholder:"请输入环境名称"},model:{value:t.dataInfo.name,callback:function(e){t.$set(t.dataInfo,"name",e)},expression:"dataInfo.name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"环境域名：","label-width":"82px",prop:"domain"}},[a("el-input",{staticStyle:{width:"400px"},attrs:{placeholder:"请输入内容"},model:{value:t.dataInfo.domain,callback:function(e){t.$set(t.dataInfo,"domain",e)},expression:"dataInfo.domain"}},[a("el-select",{staticStyle:{width:"90px"},attrs:{slot:"prepend",placeholder:"请选择"},slot:"prepend",model:{value:t.dataInfo.prepend,callback:function(e){t.$set(t.dataInfo,"prepend",e)},expression:"dataInfo.prepend"}},[a("el-option",{attrs:{label:"http://",value:"http://"}}),t._v(" "),a("el-option",{attrs:{label:"https://",value:"https://"}})],1)],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"备注：","label-width":"82px"}},[a("el-input",{staticStyle:{width:"400px"},attrs:{type:"textarea",autosize:{minRows:1,maxRows:5}},model:{value:t.dataInfo.remark,callback:function(e){t.$set(t.dataInfo,"remark",e)},expression:"dataInfo.remark"}})],1),t._v(" "),a("el-divider",{attrs:{"content-position":"left"}},[t._v("环境变量")])],1),t._v(" "),a("el-table",{staticClass:"el-table-no-border",attrs:{data:t.global,size:"mini","show-header":!1}},[a("el-table-column",{attrs:{property:"key",label:"Key","header-align":"center","min-width":"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{attrs:{size:"mini",placeholder:"key"},model:{value:e.row.key,callback:function(a){t.$set(e.row,"key",a)},expression:"scope.row.key"}})]}}])}),t._v(" "),a("el-table-column",{attrs:{property:"value",label:"Value","header-align":"center","min-width":"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{attrs:{size:"mini",placeholder:"value"},model:{value:e.row.value,callback:function(a){t.$set(e.row,"value",a)},expression:"scope.row.value"}})]}}])}),t._v(" "),a("el-table-column",{attrs:{property:"remark",label:"Value","header-align":"center","min-width":"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{attrs:{size:"mini",placeholder:"remark"},model:{value:e.row.remark,callback:function(a){t.$set(e.row,"remark",a)},expression:"scope.row.remark"}})]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"操作","header-align":"center",width:"40"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.$index+1!==t.global.length?a("el-button",{staticStyle:{padding:"5px 0px 5px"},attrs:{type:"text",icon:"el-icon-delete"},nativeOn:{click:function(a){return t.delTableRow("global",e.$index)}}}):t._e()]}}])})],1)],1)],1)],1)},i=[],r=a("9090"),l=a("b48a"),s=a("3fa5"),o={data:function(){return{visible:!1,loading:!1,title:"",apiEvnId:"",dataInfo:{},global:[],rules:{name:[{required:!0,message:"环境名称不能为空",trigger:"blur"}],domain:[{required:!0,message:"环境域名不能为空",trigger:"blur"}]}}},watch:{global:{handler:function(t){0===this.global.length?this.addTableRow("global"):this.global[this.global.length-1]["key"]&&this.addTableRow("global");for(var e=0;e<this.global.length;e++){var a=this.global[e];if(e!==this.global.length-1&&!a.key&&!a.value){this.delTableRow("global",e);break}}this.dataInfo.global=JSON.stringify(this.global)},deep:!0}},mounted:function(){},methods:{init:function(t){this.$refs["addOrEditForm"].resetFields(),this.global=[{key:"",value:"",remark:""}],t?(this.title="编辑环境",this.apiEvnId=t,this.getApiEvn()):(this.title="新增环境",this.apiEvnId="",this.dataInfo={},this.dataInfo.prepend="http://",this.dataInfo.projectId=this.$store.getters.projectId)},addTableRow:function(t){"global"===t&&this.global.push({key:"",value:"",remark:""})},delTableRow:function(t,e){"global"===t&&this.global.splice(e,1)},handler:function(t){if(t)try{this.global=JSON.parse(t),"object"===Object(r["a"])(this.global)&&this.global||(this.global=[{key:"",value:"",remark:""}])}catch(e){this.global=[{key:"",value:"",remark:""}]}else this.global=[{key:"",value:"",remark:""}]},save:function(){var t=this;this.$refs["addOrEditForm"].validate(function(e){if(e){var a=JSON.parse(t.dataInfo.global);a&&a.length>0&&a.splice(a.length-1,1),t.dataInfo.global=JSON.stringify(a),t.apiEvnId?Object(l["e"])(t.dataInfo).then(function(e){t.$emit("refreshData",e),Object(s["a"])("保存数据成功")}):Object(l["a"])(t.dataInfo).then(function(e){t.$emit("refreshData",e),Object(s["a"])("保存数据成功")})}})},getApiEvn:function(){var t=this;this.loading=!0,Object(l["c"])(this.apiEvnId).then(function(e){"http://"===e.prepend&&"https://"===e.prepend||(e.prepend="http://"),t.dataInfo=e||{},t.handler(e.global),t.loading=!1})}}},d=o,c=(a("5874d"),a("6691")),u=Object(c["a"])(d,n,i,!1,null,"7b7fec98",null);e["default"]=u.exports},b48a:function(t,e,a){"use strict";a.d(e,"d",function(){return i}),a.d(e,"c",function(){return r}),a.d(e,"a",function(){return l}),a.d(e,"e",function(){return s}),a.d(e,"b",function(){return o});var n=a("b775"),i=function(t){return Object(n["d"])("/apiEnv/listByProject/"+t)},r=function(t){return Object(n["d"])("/apiEnv/"+t)},l=function(t){return Object(n["e"])("/apiEnv/add",t)},s=function(t){return Object(n["f"])("/apiEnv/edit",t)},o=function(t){return Object(n["e"])("/apiEnv/remove",t)}},f06d:function(t,e,a){"use strict";var n=a("376e1"),i=a.n(n);i.a}}]);