(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-71a96979"],{"0553":function(e,t,r){"use strict";var a=r("fbd2"),l=r.n(a);l.a},"1c16":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-table",{attrs:{data:e.query,size:"mini","show-header":!1}},[r("el-table-column",{attrs:{property:"key",label:"Key","header-align":"center","min-width":"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-input",{attrs:{size:"mini",placeholder:"key"},model:{value:t.row.key,callback:function(r){e.$set(t.row,"key",r)},expression:"scope.row.key"}})]}}])}),e._v(" "),r("el-table-column",{attrs:{property:"value",label:"Value","header-align":"center","min-width":"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-input",{attrs:{size:"mini",placeholder:"value"},model:{value:t.row.value,callback:function(r){e.$set(t.row,"value",r)},expression:"scope.row.value"}})]}}])}),e._v(" "),r("el-table-column",{attrs:{property:"remark",label:"Value","header-align":"center","min-width":"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-input",{attrs:{size:"mini",placeholder:"remark"},model:{value:t.row.remark,callback:function(r){e.$set(t.row,"remark",r)},expression:"scope.row.remark"}})]}}])}),e._v(" "),r("el-table-column",{attrs:{label:"操作","header-align":"center",width:"40"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.$index+1!==e.query.length?r("el-button",{staticStyle:{padding:"5px 0px 5px"},attrs:{type:"text",icon:"el-icon-delete"},nativeOn:{click:function(r){return e.delTableRow("query",t.$index)}}}):e._e()]}}])})],1)},l=[],n=r("9090"),u={props:["value"],data:function(){return{query:[]}},watch:{query:{handler:function(e){0===this.query.length?this.addTableRow("query"):this.query[this.query.length-1]["key"]&&this.addTableRow("query");for(var t=0;t<this.query.length;t++){var r=this.query[t];if(t!==this.query.length-1&&!r.key&&!r.value){this.delTableRow("query",t);break}}this.$emit("input",JSON.stringify(e))},deep:!0},value:{handler:function(e){if(e)try{this.query=JSON.parse(e),"object"===Object(n["a"])(this.query)&&this.query||(this.query=[{key:"",value:"",remark:""}])}catch(t){this.query=[{key:"",value:"",remark:""}]}else this.query=[{key:"",value:"",remark:""}]},immediate:!0}},mounted:function(){},methods:{addTableRow:function(e){"query"===e&&this.query.push({key:"",value:"",remark:""})},delTableRow:function(e,t){"query"===e&&this.query.splice(t,1)}}},i=u,o=(r("0553"),r("6691")),s=Object(o["a"])(i,a,l,!1,null,"53590632",null);t["default"]=s.exports},fbd2:function(e,t,r){}}]);