(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f9adfc2c"],{"0e4c":function(t,e,r){"use strict";r.d(e,"c",(function(){return d})),r.d(e,"d",(function(){return i})),r.d(e,"a",(function(){return o})),r.d(e,"e",(function(){return s})),r.d(e,"b",(function(){return n}));var a=r("b775"),d=function(t){return Object(a["d"])("/testDatabese/listPage",t,!1)},i=function(t){return Object(a["d"])("/testDatabese/listByProjectId/"+t)},o=function(t){return Object(a["e"])("/testDatabese/add",t)},s=function(t){return Object(a["f"])("/testDatabese/edit",t)},n=function(t){return Object(a["e"])("/testDatabese/remove",t)}},b84a:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-dialog",{attrs:{"close-on-click-modal":!1,title:t.addOrEditForm.title,visible:t.visible,width:"500px"},on:{"update:visible":function(e){t.visible=e},close:function(e){return t.closeDialog("addOrEditForm")}}},[r("el-form",{ref:"addOrEditForm",attrs:{"label-width":"90px",model:t.addOrEditForm,size:"small",rules:t.rules}},[r("el-form-item",{attrs:{label:"数据库名称",prop:"name"}},[r("el-input",{attrs:{"auto-complete":"off",placeholder:"请输入数据库名称"},model:{value:t.addOrEditForm.name,callback:function(e){t.$set(t.addOrEditForm,"name",e)},expression:"addOrEditForm.name"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"数据库类型",prop:"type"}},[r("el-select",{attrs:{"auto-complete":"off",placeholder:"请选择数据库类型"},model:{value:t.addOrEditForm.type,callback:function(e){t.$set(t.addOrEditForm,"type",e)},expression:"addOrEditForm.type"}},[r("el-option",{attrs:{label:"mysql",value:0}}),t._v(" "),r("el-option",{attrs:{label:"oracle",value:1}})],1)],1),t._v(" "),r("el-form-item",{attrs:{label:"数据库连接",prop:"connectUrl"}},[r("el-input",{attrs:{"auto-complete":"off",placeholder:"jdcb:mysql://{ip}:{port}/{db_name}?characterEncoding=utf-8&自定义"},model:{value:t.addOrEditForm.connectUrl,callback:function(e){t.$set(t.addOrEditForm,"connectUrl",e)},expression:"addOrEditForm.connectUrl"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"用户名",prop:"username"}},[r("el-input",{attrs:{"auto-complete":"off",placeholder:"请输入用户名"},model:{value:t.addOrEditForm.username,callback:function(e){t.$set(t.addOrEditForm,"username",e)},expression:"addOrEditForm.username"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"密码",prop:"password"}},[r("el-input",{attrs:{"auto-complete":"off",type:"password",placeholder:"请输入密码"},model:{value:t.addOrEditForm.password,callback:function(e){t.$set(t.addOrEditForm,"password",e)},expression:"addOrEditForm.password"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"备注",prop:"remark"}},[r("el-input",{attrs:{type:"textarea"},model:{value:t.addOrEditForm.remark,callback:function(e){t.$set(t.addOrEditForm,"remark",e)},expression:"addOrEditForm.remark"}})],1)],1),t._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{size:"small"},on:{click:function(e){return t.closeDialog("addOrEditForm")}}},[t._v("取消")]),t._v(" "),r("el-button",{staticClass:"title",attrs:{size:"small",type:"primary"},on:{click:function(e){return t.submitForm("addOrEditForm")}}},[t._v("保存")])],1)],1)},d=[],i=(r("cc57"),r("0e4c")),o=r("3fa5"),s=(r("2b45"),r("c679")),n=r.n(s),l=n.a.enc.Utf8.parse("1234567890123456"),c=n.a.enc.Utf8.parse("1234567890123456");function m(t,e,r){var a=l,d=c;e&&(a=n.a.enc.Utf8.parse(e),d=n.a.enc.Utf8.parse(r));var i=n.a.enc.Utf8.parse(t),o=n.a.AES.encrypt(i,a,{iv:d,mode:n.a.mode.CBC,padding:n.a.pad.ZeroPadding});return n.a.enc.Base64.stringify(o.ciphertext)}function u(t,e,r){var a=l,d=c;e&&(a=n.a.enc.Utf8.parse(e),d=n.a.enc.Utf8.parse(r));var i=n.a.enc.Base64.parse(t),o=n.a.enc.Base64.stringify(i),s=n.a.AES.decrypt(o,a,{iv:d,mode:n.a.mode.CBC,padding:n.a.pad.ZeroPadding}),m=s.toString(n.a.enc.Utf8);return m.toString()}var p={data:function(){return{visible:!1,rules:{name:[{required:!0,message:"数据库组名不能为空",trigger:"blur"}],username:[{required:!0,message:"用户名不能为空",trigger:"blur"}],password:[{required:!0,message:"密码不能为空",trigger:"blur"}],connectUrl:[{required:!0,message:"数据库链接不能为空",trigger:"blur"},{pattern:"^jdbc:(oracle|mysql)://(?:([a-zA-Z0-9-._]+)|(?:(?:d{1,2}|1dd|2[0-4]d|25[0-5]).(?:d{1,2}|1dd|2[0-4]d|25[0-5]).(?:d{1,2}|1dd|2[0-4]d|25[0-5]).(?:d{1,2}|1dd|2[0-4]d|25[0-5])))?(?::([0-9]+))?(?:/[a-zA-Z0-9-._?,'/\\+&amp;%$#=~]*)?$",message:"请填写正确的数据库链接",trigger:"blur"}],type:[{required:!0,message:"数据库连接",trigger:"blur"}]},addOrEditForm:{title:"",id:"",name:"",projectId:"",connectUrl:"",username:"",password:"",type:0,status:1,remark:""}}},methods:{init:function(t){t?(this.visible=!0,this.addOrEditForm.title="编辑数据库",this.addOrEditForm.id=t.id,this.addOrEditForm.name=t.name,this.addOrEditForm.connectUrl=t.connectUrl,this.addOrEditForm.username=t.username,this.addOrEditForm.password=u(t.password),this.addOrEditForm.projectId=t.projectId,this.addOrEditForm.status=t.status,this.addOrEditForm.type=t.type,this.addOrEditForm.remark=t.remark):(this.visible=!0,this.addOrEditForm.projectId=this.$store.getters.projectId,this.addOrEditForm.title="新增数据库")},closeDialog:function(){this.$refs["addOrEditForm"].resetFields(),this.visible=!1,this.addOrEditForm={title:"",id:"",name:"",projectId:"",connectUrl:"",username:"",password:"",type:0,status:1,remark:""}},submitForm:function(t){var e=this;this.$refs[t].validate((function(r){r&&"addOrEditForm"===t&&e.addOrEditForm.id?(e.addOrEditForm.password=m(e.addOrEditForm.password),Object(i["e"])(e.addOrEditForm).then((function(t){e.visible=!1,e.$emit("refreshDataList"),Object(o["a"])("保存数据成功")})).catch((function(){e.addOrEditForm.password=u(e.addOrEditForm.password)}))):r&&"addOrEditForm"===t&&!e.addOrEditForm.id&&(e.addOrEditForm.password=m(e.addOrEditForm.password),Object(i["a"])(e.addOrEditForm).then((function(t){e.visible=!1,e.$emit("refreshDataList"),Object(o["a"])("保存数据成功")})).catch((function(){e.addOrEditForm.password=u(e.addOrEditForm.password)})))}))}}},f=p,O=r("5511"),b=Object(O["a"])(f,a,d,!1,null,null,null);e["default"]=b.exports}}]);