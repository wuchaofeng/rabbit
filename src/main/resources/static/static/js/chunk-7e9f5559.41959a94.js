(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7e9f5559","chunk-ad869c6c"],{"0da1":function(t,e,i){},"629f":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("el-row",[i("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(e){t.dialogVisible=!0}}},[t._v("导入新数据")])],1),t._v(" "),i("el-table",{staticStyle:{width:"auto"},attrs:{data:t.dataList,border:"",stripe:"",size:"small"}},[i("el-table-column",{attrs:{align:"center",label:"文件名称"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.name))]}}])}),t._v(" "),i("el-table-column",{attrs:{width:"320",align:"center",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(i){return t.downloadCsv(e.row.name)}}},[t._v("下载")]),t._v(" "),i("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(i){return t.openCoverCsvDialog(e.row.name)}}},[t._v("覆盖")]),t._v(" "),i("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(i){return t.deleteRow(e.row)}}},[t._v("删除")])]}}])})],1),t._v(" "),i("el-dialog",{attrs:{title:"导入数据","close-on-click-modal":!1,visible:t.dialogVisible,width:"410px",center:""},on:{"update:visible":function(e){t.dialogVisible=e}}},[i("el-upload",{directives:[{name:"loading",rawName:"v-loading",value:t.uploadLoading,expression:"uploadLoading"}],ref:"upload",attrs:{"show-file-list":!1,drag:"","http-request":t.uploadCsv,action:"#",multiple:""}},[i("i",{staticClass:"el-icon-upload"}),t._v(" "),i("div",{staticClass:"el-upload__text"},[t._v("将文件拖到此处，或"),i("em",[t._v("点击上传")])]),t._v(" "),i("div",{staticClass:"el-upload__tip",attrs:{slot:"tip",center:""},slot:"tip"},[t._v("只能上cvs传文件，且不超过10M")])])],1),t._v(" "),i("el-dialog",{attrs:{title:"覆盖数据","close-on-click-modal":!1,visible:t.dialogVisible1,width:"410px",center:""},on:{"update:visible":function(e){t.dialogVisible1=e}}},[i("el-upload",{directives:[{name:"loading",rawName:"v-loading",value:t.uploadLoading1,expression:"uploadLoading1"}],ref:"upload1",attrs:{"show-file-list":!1,drag:"","http-request":t.coverCsv,action:"#",multiple:""}},[i("i",{staticClass:"el-icon-upload"}),t._v(" "),i("div",{staticClass:"el-upload__text"},[t._v("将文件拖到此处，或"),i("em",[t._v("点击上传")])]),t._v(" "),i("div",{staticClass:"el-upload__tip",attrs:{slot:"tip",center:""},slot:"tip"},[t._v("只能上cvs传文件，且不超过10M")])])],1)],1)},a=[],r=(i("63ff"),i("57f0")),s=(i("cc57"),i("9a33"),i("c0eb")),o={props:["value","scriptInfo"],data:function(){return{coverCsvName:"",dialogVisible:!1,dialogVisible1:!1,uploadLoading:!1,uploadLoading1:!1,dataList:[]}},watch:{value:{handler:function(t){var e="";t&&(e=t.split(",")),this.dataList=[];for(var i=0;i<e.length;i++){var n=e[i];n&&this.dataList.push({name:n})}},immediate:!0},dataList:function(t){for(var e="",i=0;i<t.length;i++){var n=t[i];e=e+n.name+","}this.$emit("input",e)}},mounted:function(){},methods:{openCoverCsvDialog:function(t){this.coverCsvName=t,this.dialogVisible1=!0},flushCsvData:function(){var t=this;Object(s["e"])(this.$route.query.id).then((function(e){var i=e.dataPath||"",n="";i&&(n=i.split(",")),t.dataList=[];for(var a=0;a<n.length;a++){var r=n[a];r&&t.dataList.push({name:r})}}))},addRow:function(t){},deleteRow:function(t){var e=this;this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var i={scriptId:e.scriptInfo.id,csvName:t.name};Object(s["b"])(i).then((function(t){e.$message({type:"success",message:"删除成功!"}),e.flushCsvData()}))})).catch((function(){e.$message({type:"success",message:"已取消删除"})}))},uploadCsv:function(t){var e=this,i=t.file,n=i.size<10485760,a=i.name.lastIndexOf("."),o=i.name.substr(a+1);if("csv"!==o.toLowerCase())return this.$message.warning("只能上传csv文件"),!1;if(!n)return this.$message.warning("请上传10M以下的csv文件"),!1;var d=new FormData;d.append("files",i),d.append("scriptId",this.scriptInfo.id),d.append("isCover",!1),this.uploadLoading=!0,Object(s["h"])(d).then(function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(i){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if("存在同名csv文件"!==i){t.next=5;break}return t.next=3,e.$confirm("该csv文件名称已存在, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){d.set("isCover",!0),Object(s["h"])(d).then((function(t){e.$message({type:"success",message:"上传成功!"}),e.flushCsvData()}))})).catch((function(){}));case 3:t.next=7;break;case 5:e.$message({type:"success",message:"上传成功!"}),e.flushCsvData();case 7:e.dialogVisible=!1,e.$refs["upload"].clearFiles();case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).finally((function(){e.uploadLoading=!1}))},coverCsv:function(t){var e=this,i=t.file,n=i.size<10485760,a=i.name.lastIndexOf("."),o=i.name.substr(a+1);if("csv"!==o.toLowerCase())return this.$message.warning("只能上传csv文件"),!1;if(!n)return this.$message.warning("请上传10M以下的csv文件"),!1;var d=new FormData;d.append("files",i),d.append("scriptId",this.scriptInfo.id),d.append("orgCsvName",this.coverCsvName),this.uploadLoading1=!0,Object(s["f"])(d).then(function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(i){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$message({type:"success",message:"上传成功!"}),e.flushCsvData(),e.dialogVisible1=!1,e.$refs["upload1"].clearFiles();case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).finally((function(){e.uploadLoading1=!1}))},downloadCsv:function(t){var e=this,i={projectId:this.scriptInfo.projectId,scriptName:this.scriptInfo.scriptPath,fileName:t};Object(s["g"])(i).then((function(e){var i=e.data;if(i){var n=new Blob([i]);if(window.navigator.msSaveOrOpenBlob)navigator.msSaveBlob(n,t);else{var a=window.URL.createObjectURL(n),r=document.createElement("a");r.style.display="none",r.href=a,r.setAttribute("download",t),document.body.appendChild(r),r.click(),document.body.removeChild(r),window.URL.revokeObjectURL(a)}}})).catch((function(t){e.$message.error(t+"")}))}}},d=o,c=i("5511"),l=Object(c["a"])(d,n,a,!1,null,"46a18681",null);e["default"]=l.exports},8580:function(t,e,i){"use strict";var n=i("0da1"),a=i.n(n);a.a},b804:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{style:{height:t.height+"px",zIndex:t.zIndex}},[i("div",{class:t.className,style:{top:t.isSticky?t.stickyTop+"px":"",zIndex:t.zIndex,position:t.position,width:t.width,height:t.height+"px"}},[t._t("default",[i("div",[t._v("sticky")])])],2)])},a=[],r=(i("163d"),{name:"Sticky",props:{stickyTop:{type:Number,default:0},zIndex:{type:Number,default:1},className:{type:String,default:""}},data:function(){return{active:!1,position:"",width:void 0,height:void 0,isSticky:!1}},mounted:function(){this.height=this.$el.getBoundingClientRect().height,window.addEventListener("scroll",this.handleScroll),window.addEventListener("resize",this.handleResize)},activated:function(){this.handleScroll()},destroyed:function(){window.removeEventListener("scroll",this.handleScroll),window.removeEventListener("resize",this.handleResize)},methods:{sticky:function(){this.active||(this.position="fixed",this.active=!0,this.width=this.width+"px",this.isSticky=!0)},handleReset:function(){this.active&&this.reset()},reset:function(){this.position="",this.width="auto",this.active=!1,this.isSticky=!1},handleScroll:function(){var t=this.$el.getBoundingClientRect().width;this.width=t||"auto";var e=this.$el.getBoundingClientRect().top;e<this.stickyTop?this.sticky():this.handleReset()},handleResize:function(){this.isSticky&&(this.width=this.$el.getBoundingClientRect().width+"px")}}}),s=r,o=i("5511"),d=Object(o["a"])(s,n,a,!1,null,null,null);e["a"]=d.exports},c0eb:function(t,e,i){"use strict";i.d(e,"d",(function(){return a})),i.d(e,"e",(function(){return r})),i.d(e,"a",(function(){return s})),i.d(e,"j",(function(){return o})),i.d(e,"c",(function(){return d})),i.d(e,"b",(function(){return c})),i.d(e,"i",(function(){return l})),i.d(e,"h",(function(){return u})),i.d(e,"f",(function(){return m})),i.d(e,"g",(function(){return p}));var n=i("b775"),a=function(t){return Object(n["d"])("/jmeterScript/listPage",t,!1)},r=function(t){return Object(n["d"])("/jmeterScript/listById/"+t)},s=function(t){return Object(n["e"])("/jmeterScript/add",t)},o=function(t){return Object(n["f"])("/jmeterScript/edit",t)},d=function(t){return Object(n["e"])("/jmeterScript/remove",t)},c=function(t){return Object(n["d"])("/jmeterScript/removeCsv",t)},l=function(t){return Object(n["g"])("/jmeterScript/uploadScripts",t)},u=function(t){return Object(n["g"])("/jmeterScript/uploadCsv",t)},m=function(t){return Object(n["g"])("/jmeterScript/coverCsv",t)},p=function(t){return Object(n["c"])("/jmeterScript/downloadCsv",t)}},ddd1:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}]},[i("sticky",{attrs:{"z-index":4,"sticky-top":84,"class-name":"sub-navbar"}},[i("el-button",{attrs:{size:"mini"},on:{click:t.toBack}},[t._v("返回")]),t._v(" "),i("el-button",{staticClass:"title",attrs:{size:"mini",type:"primary"},on:{click:function(e){return t.submitForm("addOrEditForm")}}},[t._v("\n      "+t._s("保存")+"\n    ")])],1),t._v(" "),i("el-card",{staticClass:"box-card card-my",attrs:{shadow:"never"}},[i("div",{staticClass:"task-main"},[i("el-form",{ref:"addOrEditForm",attrs:{"label-width":"90px",model:t.addOrEditForm,size:"small",rules:t.rules}},[i("el-form-item",{attrs:{label:"脚本名称",prop:"name"}},[i("el-input",{staticStyle:{width:"290px"},attrs:{"auto-complete":"off",placeholder:"请输入脚本名称"},model:{value:t.addOrEditForm.name,callback:function(e){t.$set(t.addOrEditForm,"name",e)},expression:"addOrEditForm.name"}})],1),t._v(" "),i("el-form-item",{staticStyle:{width:"50%"},attrs:{label:"备注",prop:"remark"}},[i("el-input",{attrs:{type:"textarea"},model:{value:t.addOrEditForm.remark,callback:function(e){t.$set(t.addOrEditForm,"remark",e)},expression:"addOrEditForm.remark"}})],1),t._v(" "),t.addOrEditForm.id?i("div",[i("el-divider",{attrs:{"content-position":"left"}},[t._v("脚本信息")]),t._v(" "),i("div",[i("codemirror",{ref:"myCm",staticClass:"code",attrs:{options:t.cmOptions},on:{changes:t.changes},model:{value:t.addOrEditForm.scriptContent,callback:function(e){t.$set(t.addOrEditForm,"scriptContent",e)},expression:"addOrEditForm.scriptContent"}})],1),t._v(" "),i("el-divider",{attrs:{"content-position":"left"}},[t._v("数据信息")]),t._v(" "),i("csv",{attrs:{"script-info":t.addOrEditForm},model:{value:t.addOrEditForm.dataPath,callback:function(e){t.$set(t.addOrEditForm,"dataPath",e)},expression:"addOrEditForm.dataPath"}})],1):t._e()],1)],1)])],1)},a=[],r=(i("cc57"),i("8a2b")),s=i("c0eb"),o=i("3fa5"),d=i("b804"),c=i("629f"),l={components:{Sticky:d["a"],codemirror:r["codemirror"],csv:c["default"]},data:function(){return{isFullscreen:!1,browserTypeList:[],clientList:[],loading:!1,rules:{name:[{required:!0,message:"脚本名称不能为空",trigger:"blur"}]},addOrEditForm:{title:"",id:"",name:"",projectId:"",type:"",scriptContent:"",dataPath:"",scriptPath:"",remark:"",debugStatus:0,debugStartTime:"",debugEndTime:"",debugBy:"",debugSuccess:"",debugTotal:"",debugFail:"",debugDuration:""},cmOptions:{value:"",mode:"text/html",theme:"night",indentUnit:2,smartIndent:!0,tabSize:4,readOnly:!1,showCursorWhenSelecting:!0,lineNumbers:!0,firstLineNumber:1,extraKeys:{"Ctrl-Space":"autocomplete"},autofocus:!0,matchBrackets:!0}}},mounted:function(){this.initBefore()},methods:{initBefore:function(){var t=this;this.$route.query.id?(this.loading=!0,Object(s["e"])(this.$route.query.id).then((function(e){e.projectId!==t.$store.getters.projectId&&t.toBack(),t.init(e)})).finally((function(){t.loading=!1}))):this.init()},changes:function(t){},init:function(t){t?(this.addOrEditForm.title="编辑任务",this.addOrEditForm.id=t.id,this.addOrEditForm.name=t.name,this.addOrEditForm.projectId=t.projectId,this.addOrEditForm.type=t.type,this.addOrEditForm.scriptContent=t.scriptContent,this.addOrEditForm.dataPath=t.dataPath,this.addOrEditForm.scriptPath=t.scriptPath,this.addOrEditForm.remark=t.remark,this.addOrEditForm.debugStatus=t.debugStatus,this.addOrEditForm.debugStartTime=t.debugStartTime,this.addOrEditForm.debugEndTime=t.debugEndTime,this.addOrEditForm.debugBy=t.debugBy,this.addOrEditForm.debugSuccess=t.debugSuccess,this.addOrEditForm.debugTotal=t.debugTotal,this.addOrEditForm.debugFail=t.debugFail,this.addOrEditForm.debugDuration=t.debugDuration):(this.addOrEditForm.title="新增任务",this.addOrEditForm.projectId=this.$store.getters.projectId)},closeDialog:function(){this.$refs["addOrEditForm"].resetFields(),this.resetDialog()},toBack:function(){this.closeDialog(),this.$router.push({path:"/jmeter/script/list"})},submitForm:function(t){var e=this;this.$refs[t].validate((function(t){t&&e.addOrEditForm.id?(e.loading=!0,Object(s["j"])(e.addOrEditForm).then((function(t){Object(o["a"])("保存数据成功"),e.toBack()})).finally((function(){e.loading=!1}))):t&&!e.addOrEditForm.id&&(e.loading=!0,Object(s["a"])(e.addOrEditForm).then((function(t){Object(o["a"])("保存数据成功"),e.$router.push({path:"/jmeter/script/edit",query:{id:t.id}})})).finally((function(){e.loading=!1})))}))},resetDialog:function(){this.addOrEditForm={title:"",id:"",name:"",projectId:"",type:"",scriptContent:"",dataPath:"",scriptPath:"",remark:"",debugStatus:0,debugStartTime:"",debugEndTime:"",debugBy:"",debugSuccess:"",debugTotal:"",debugFail:"",debugDuration:""}}}},u=l,m=(i("8580"),i("5511")),p=Object(m["a"])(u,n,a,!1,null,"111e7bcd",null);e["default"]=p.exports}}]);