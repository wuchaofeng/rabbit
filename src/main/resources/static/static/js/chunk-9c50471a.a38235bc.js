(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9c50471a"],{"1f90":function(e,t,n){"use strict";n.d(t,"e",function(){return i}),n.d(t,"b",function(){return s}),n.d(t,"g",function(){return o}),n.d(t,"d",function(){return r}),n.d(t,"c",function(){return c}),n.d(t,"a",function(){return l}),n.d(t,"f",function(){return u});var a=n("b775"),i=function(e){return Object(a["d"])("/uiTestBusiness/listPage",e,!1)},s=function(e){return Object(a["e"])("/uiTestBusiness/add",e)},o=function(e){return Object(a["f"])("/uiTestBusiness/edit",e)},r=function(e){return Object(a["e"])("/uiTestBusiness/remove",e)},c=function(e){return Object(a["e"])("/uiTestBusiness/delBusinessCaseById/"+e)},l=function(e){return Object(a["e"])("/uiTestBusiness/addCaseToBusiness",e)},u=function(e){return Object(a["e"])("/uiTestBusiness/updateCaseSort",e)}},"51b0":function(e,t,n){"use strict";var a=n("91f8"),i=n.n(a);i.a},"614b":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-dialog",{attrs:{"close-on-click-modal":!1,title:"添加业务流",visible:e.visible,width:"70%"},on:{"update:visible":function(t){e.visible=t},close:function(t){return e.closeDialog()}}},[n("el-card",{staticClass:"box-card card-my",attrs:{shadow:"never"}},[n("div",{staticClass:"my-class"},[n("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.serchData,"label-width":"90px","label-position":"right",size:"mini"}},[n("el-form-item",{attrs:{label:"业务流名称："}},[n("el-input",{attrs:{placeholder:"请输入业务流名称"},model:{value:e.serchData.name,callback:function(t){e.$set(e.serchData,"name",t)},expression:"serchData.name"}})],1),e._v(" "),n("el-form-item",[n("el-button",{on:{click:e.searchList}},[e._v("查询")]),e._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.addRow()}}},[e._v("添加")])],1)],1)],1),e._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"refTable",staticStyle:{width:"auto"},attrs:{data:e.dataList,border:"",stripe:"",size:"small"},on:{"selection-change":e.selected}},[n("el-table-column",{attrs:{type:"selection",align:"center",width:"35"}}),e._v(" "),n("el-table-column",{attrs:{align:"center",width:"60px",label:"ID"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.id))]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",width:"150px",label:"业务流名称"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.name))]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",width:"120px",label:"用例失败是否继续"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(1===t.row.failContinue?"继续":"跳过"))]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",width:"120px",label:"超时时间(秒)"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.timoutTime))]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"业务流描述"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.remark))]}}])})],1),e._v(" "),n("el-pagination",{attrs:{background:"","current-page":e.pageInfo.pageNum,"page-sizes":[10,20,30,50],"page-size":e.pageInfo.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.pageInfo.pageCount},on:{"size-change":e.changePageSize,"current-change":e.changePageNum}})],1)],1)},i=[],s=(n("f763"),n("1f90")),o={props:["value"],data:function(){return{visible:!1,dataList:[],selectedData:[],serchData:{name:"",remark:""},pageInfo:{pageNum:1,pageSize:10,pageCount:0},loading:!1}},computed:{serchInfo:function(){var e=this.pageInfo,t=this.serchData;return t.projectId=this.$store.getters.projectId,e.serchData=t,e}},watch:{value:{handler:function(e){this.visible=e},immediate:!0},visible:function(e){this.$emit("input",e)}},mounted:function(){this.getPageList()},methods:{selected:function(e){this.selectedData=e},addRow:function(){this.selectedData.forEach(function(e){e.isValid=1}),this.$emit("backDate",this.selectedData),this.visible=!1},getPageList:function(){var e=this;this.loading=!0,Object(s["e"])(this.serchInfo).then(function(t){e.dataList=t.list||[],e.pageInfo.pageCount=t.total,e.loading=!1})},searchList:function(){this.getPageList()},changePageSize:function(e){this.pageInfo.pageSize=e,this.getPageList()},changePageNum:function(e){this.pageInfo.pageNum=e,this.getPageList()},closeDialog:function(){this.$refs.refTable.clearSelection(),this.selectedData=[]}}},r=o,c=(n("51b0"),n("6691")),l=Object(c["a"])(r,a,i,!1,null,"5c8b1d34",null);t["default"]=l.exports},"91f8":function(e,t,n){}}]);