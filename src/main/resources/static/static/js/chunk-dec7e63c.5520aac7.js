(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-dec7e63c"],{"1d15":function(e,t,n){},"643d":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-dialog",{attrs:{"close-on-click-modal":!1,title:"添加用例集",visible:e.visible,width:"700px"},on:{"update:visible":function(t){e.visible=t},close:function(t){return e.closeDialog()}}},[n("el-card",{staticClass:"box-card card-my",attrs:{shadow:"never"}},[n("div",{staticClass:"my-class"},[n("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.serchData,"label-width":"90px","label-position":"right",size:"mini"}},[n("el-form-item",{attrs:{label:"业务流名称："}},[n("el-input",{attrs:{placeholder:"请输入业务流名称"},model:{value:e.serchData.name,callback:function(t){e.$set(e.serchData,"name",t)},expression:"serchData.name"}})],1),e._v(" "),n("el-form-item",[n("el-button",{on:{click:e.searchList}},[e._v("查询")]),e._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.addRow()}}},[e._v("添加")])],1)],1)],1),e._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"refTable",staticStyle:{width:"auto"},attrs:{data:e.dataList,border:"",stripe:"",size:"small"},on:{"selection-change":e.selected}},[n("el-table-column",{attrs:{type:"selection",align:"center",width:"40"}}),e._v(" "),n("el-table-column",{attrs:{align:"center",width:"60px",label:"ID"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.id))]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"业务流名称"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.name))]}}])})],1),e._v(" "),n("el-pagination",{attrs:{background:"","current-page":e.pageInfo.pageNum,"page-sizes":[10,20,30,50],"page-size":e.pageInfo.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.pageInfo.pageCount},on:{"size-change":e.changePageSize,"current-change":e.changePageNum}})],1)],1)},a=[],s=(n("f763"),n("696d")),c={props:["value"],data:function(){return{visible:!1,dataList:[],selectedData:[],serchData:{name:"",remark:""},pageInfo:{pageNum:1,pageSize:10,pageCount:0},loading:!1}},computed:{serchInfo:function(){var e=this.pageInfo,t=this.serchData;return t.projectId=this.$store.getters.projectId,e.serchData=t,e}},watch:{value:{handler:function(e){this.visible=e},immediate:!0},visible:function(e){this.$emit("input",e)}},mounted:function(){this.getPageList()},methods:{selected:function(e){this.selectedData=e},addRow:function(){this.selectedData.forEach(function(e){e.isValid=1}),this.$emit("backDate",this.selectedData),this.visible=!1},getPageList:function(){var e=this;this.loading=!0,Object(s["f"])(this.serchInfo).then(function(t){e.dataList=t.list||[],e.pageInfo.pageCount=t.total,e.loading=!1})},searchList:function(){this.getPageList()},changePageSize:function(e){this.pageInfo.pageSize=e,this.getPageList()},changePageNum:function(e){this.pageInfo.pageNum=e,this.getPageList()},closeDialog:function(){this.$refs.refTable.clearSelection(),this.selectedData=[]}}},o=c,r=(n("6bfc"),n("6691")),u=Object(r["a"])(o,i,a,!1,null,"e2813efc",null);t["default"]=u.exports},"696d":function(e,t,n){"use strict";n.d(t,"f",function(){return a}),n.d(t,"e",function(){return s}),n.d(t,"b",function(){return c}),n.d(t,"g",function(){return o}),n.d(t,"a",function(){return r}),n.d(t,"c",function(){return u}),n.d(t,"h",function(){return l}),n.d(t,"d",function(){return d});var i=n("b775"),a=function(e){return Object(i["d"])("/testsuiteUi/listPage",e,!1)},s=function(e){return Object(i["d"])("/testsuiteUi/listCaseById/"+e)},c=function(e){return Object(i["e"])("/testsuiteUi/add",e)},o=function(e){return Object(i["e"])("/testsuiteUi/updateCaseSort",e)},r=function(e){return Object(i["e"])("/testsuiteUi/addCaseToSuite",e)},u=function(e){return Object(i["e"])("/testsuiteUi/delSuiteCaseById/"+e)},l=function(e){return Object(i["f"])("/testsuiteUi/edit",e)},d=function(e){return Object(i["e"])("/testsuiteUi/remove",e)}},"6bfc":function(e,t,n){"use strict";var i=n("1d15"),a=n.n(i);a.a}}]);