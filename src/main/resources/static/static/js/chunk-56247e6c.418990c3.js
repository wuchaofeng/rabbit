(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-56247e6c","chunk-0dcfb963","chunk-751e4814","chunk-1cab2a98","chunk-9d748c32"],{1967:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"box-card card-my",attrs:{shadow:"never"}},[a("div",{attrs:{slot:"header"},slot:"header"},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:t.serchData,"label-width":"90px","label-position":"right",size:"mini"}},[a("div",{staticStyle:{"margin-bottom":"10px"}},[a("el-radio-group",{attrs:{size:"small"},model:{value:t.serchData.status,callback:function(e){t.$set(t.serchData,"status",e)},expression:"serchData.status"}},[a("el-radio-button",{attrs:{label:""},nativeOn:{click:function(e){return t.clickRadio(e,-1)}}},[t._v("全部")]),t._v(" "),a("el-radio-button",{attrs:{label:0},nativeOn:{click:function(e){return t.clickRadio(e,0)}}},[t._v("成功")]),t._v(" "),a("el-radio-button",{attrs:{label:1},nativeOn:{click:function(e){return t.clickRadio(e,1)}}},[t._v("失败")]),t._v(" "),a("el-radio-button",{attrs:{label:2},nativeOn:{click:function(e){return t.clickRadio(e,2)}}},[t._v("跳过")])],1)],1)])],1),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"auto"},attrs:{data:t.dataList,border:"",stripe:"",size:"mini"}},[a("el-table-column",{attrs:{type:"index",width:"70",align:"center",label:"ID"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"用例集名称"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.suiteName))]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"用例名称"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.caseName))]}}])}),t._v(" "),a("el-table-column",{attrs:{width:"100",align:"center",label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[0===e.row.status?a("el-tag",{attrs:{size:"small"}},[t._v(t._s("执行成功"))]):t._e(),t._v(" "),1===e.row.status?a("el-tag",{attrs:{size:"small",type:"danger"}},[t._v(t._s("执行失败"))]):t._e(),t._v(" "),2===e.row.status?a("el-tag",{attrs:{size:"small",type:"info"}},[t._v(t._s("跳过"))]):t._e()]}}])}),t._v(" "),a("el-table-column",{attrs:{width:"140",align:"center",label:"开始时间"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.createTime))]}}])}),t._v(" "),a("el-table-column",{attrs:{width:"140",align:"center",label:"耗时"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t.getDifftime(e.row.createTime,e.row.endTime)))]}}])}),t._v(" "),a("el-table-column",{attrs:{width:"180",align:"center",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){return t.viewDetail(e.row)}}},[t._v("查看详情")])]}}])})],1),t._v(" "),a("el-pagination",{attrs:{background:"","current-page":t.pageInfo.pageNum,"page-sizes":[10,20,30,50],"page-size":t.pageInfo.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:t.pageInfo.pageCount},on:{"size-change":t.changePageSize,"current-change":t.changePageNum}}),t._v(" "),t.caseDetailVisible?a("case-detail",{ref:"caseDetail"}):t._e()],1)},i=[],s=a("aae1"),r=a("cf45"),c=a("ffdc"),o={components:{caseDetail:c["default"]},data:function(){return{caseDetail:!1,loading:!1,serchData:{status:""},pageInfo:{pageNum:1,pageSize:20,pageCount:0},dataList:[],caseDetailVisible:!1}},computed:{serchInfo:function(){var t=this.pageInfo,e=this.serchData;return e.projectId=this.$store.getters.projectId,t.serchData=e,t}},mounted:function(){this.$route.query.id&&(this.serchData.planLogId=this.$route.query.id,this.getPageList())},methods:{clickRadio:function(t,e){"INPUT"!==t.target.tagName&&(this.serchData.status=-1===e?"":e,this.getPageList())},getDifftime:function(t,e){return Object(r["a"])(t,e)},getRate:function(t,e){return Object(r["b"])(t,e)},viewDetail:function(t){var e=this;this.caseDetailVisible=!0,this.$nextTick(function(){e.$refs.caseDetail.init(t)})},searchList:function(){this.getPageList()},changePageSize:function(t){this.pageInfo.pageSize=t,this.getPageList()},changePageNum:function(t){this.pageInfo.pageNum=t,this.getPageList()},getPageList:function(){var t=this;this.loading=!0,Object(s["a"])(this.serchInfo).then(function(e){t.dataList=e.list||[],t.pageInfo.pageCount=e.total,t.loading=!1})}}},l=o,u=(a("5ffa"),a("6691")),f=Object(u["a"])(l,n,i,!1,null,"97d0ac76",null);e["default"]=f.exports},"248f":function(t,e,a){},"376e":function(t,e,a){},"3ffd":function(t,e,a){"use strict";var n=a("376e"),i=a.n(n);i.a},"507d":function(t,e,a){},"5ffa":function(t,e,a){"use strict";var n=a("248f"),i=a.n(n);i.a},"70d8":function(t,e,a){"use strict";var n=a("9166"),i=a.n(n);i.a},"7abe":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),t._v(" "),a("ve-ring",{attrs:{height:"220px",data:t.chartData,settings:t.chartSettings,extend:t.chartExtend}})],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title"},[a("strong",[t._v("用例数据统计")])])}],s=(a("7364"),a("6006")),r=a.n(s),c=(a("2aa3"),{components:{VeRing:r.a},data:function(){return this.chartSettings={radius:[40,58],offsetY:400,label:{formatter:function(t){return"".concat(t.data.name,":").concat(t.data.value)}}},this.chartExtend={legend:{show:!1},series:{center:["50%","50%"]},color:["#1890ff","#ff4949","#909399"],title:{}},{chartData:{columns:["result","sum"],rows:[{result:"成功",sum:0},{result:"失败",sum:0},{result:"跳过",sum:0}]}}},methods:{}}),o=c,l=(a("70d8"),a("6691")),u=Object(l["a"])(o,n,i,!1,null,"77973fb9",null);e["default"]=u.exports},"81ec":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),t._v(" "),a("ve-ring",{attrs:{height:"220px",data:t.chartData,settings:t.chartSettings,extend:t.chartExtend}})],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title"},[a("strong",[t._v("用例集数据统计")])])}],s=(a("7364"),a("6006")),r=a.n(s),c=(a("2aa3"),{components:{VeRing:r.a},data:function(){return this.chartSettings={radius:[40,58],offsetY:400,label:{formatter:function(t){return"".concat(t.data.name,":").concat(t.data.value)}}},this.chartExtend={legend:{show:!1},series:{center:["50%","50%"]},color:["#1890ff","#ff4949","#909399"],title:{}},{chartData:{columns:["result","sum"],rows:[{result:"成功",sum:0},{result:"失败",sum:0}]}}},methods:{}}),o=c,l=(a("8a52"),a("6691")),u=Object(l["a"])(o,n,i,!1,null,"2cfd4535",null);e["default"]=u.exports},"8a52":function(t,e,a){"use strict";var n=a("507d"),i=a.n(n);i.a},9166:function(t,e,a){},a118:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-card",{staticClass:"box-card ",attrs:{shadow:"never"}},[a("div",{attrs:{slot:"header"},slot:"header"},[a("div",{staticClass:"title"},[a("strong",[t._v("测试报告详情")])])]),t._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:8}},[a("div",{staticStyle:{width:"100%","margin-bottom":"10px"}},[a("strong",[t._v("基本信息")])]),t._v(" "),a("el-table",{staticStyle:{width:"100%","margin-bottom":"20px"},attrs:{data:t.tableData,size:"mini","show-header":!1,"row-key":"id","default-expand-all":"",stripe:"",border:"","tree-props":{children:"children",hasChildren:"hasChildren"}}},[a("el-table-column",{attrs:{align:"center",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("strong",[t._v(t._s(e.row.name+"："))])]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.value))]}}])})],1)],1),t._v(" "),a("el-col",{attrs:{span:16}},[a("el-row",[a("el-col",{attrs:{span:10}},[a("case-suitev-chars",{ref:"caseSuite"})],1),t._v(" "),a("el-col",{attrs:{span:10}},[a("casev-chars",{ref:"cases"})],1)],1)],1)],1),t._v(" "),a("el-row",[a("el-col",{attrs:{span:24}},[a("suite-detail")],1)],1)],1)},i=[],s=(a("7364"),a("aae1")),r=a("7abe"),c=a("81ec"),o=a("1967"),l=a("cf45"),u={components:{suiteDetail:o["default"],CasevChars:r["default"],CaseSuitevChars:c["default"]},data:function(){return{activeName:"first",planLog:{},suiteLog:{},suiteCounts:{},caseCounts:{},tableData:[{name:"任务名称",value:"-"},{name:"开始时间",value:"-"},{name:"耗时",value:"-"},{name:"总用例集数",value:"-"},{name:"总用例数",value:"-"},{name:"用例通过率",value:"-"}]}},mounted:function(){var t=this;this.$route.query.id&&(Object(s["c"])(this.$route.query.id).then(function(e){t.planLog=e||{},t.tableData[0].value=e.name,t.tableData[1].value=e.createTime,t.tableData[2].value=t.getDifftime(e.createTime,e.endTime),t.tableData[3].value=e.suiteTotalCount,t.$refs.caseSuite.chartData.rows[0].sum=e.suiteSuccCount,t.$refs.caseSuite.chartData.rows[1].sum=e.suiteFailCount}),Object(s["e"])(this.$route.query.id).then(function(e){t.suiteLog=e||{},t.tableData[4].value=e.caseTotalCount,t.tableData[5].value=t.getRate(e.caseSuccCount,e.caseTotalCount),t.$refs.cases.chartData.rows[0].sum=e.caseSuccCount,t.$refs.cases.chartData.rows[1].sum=e.caseFailCount,t.$refs.cases.chartData.rows[2].sum=e.caseSkipCount}))},methods:{getDifftime:function(t,e){return Object(l["a"])(t,e)},getRate:function(t,e){return Object(l["b"])(t,e)}}},f=u,d=(a("b53c"),a("6691")),g=Object(d["a"])(f,n,i,!1,null,"dfc97b02",null);e["default"]=g.exports},aae1:function(t,e,a){"use strict";a.d(e,"d",function(){return i}),a.d(e,"c",function(){return s}),a.d(e,"b",function(){return r}),a.d(e,"e",function(){return c}),a.d(e,"a",function(){return o}),a.d(e,"f",function(){return l});var n=a("b775"),i=function(t){return Object(n["d"])("/uiLogNew/planListPage",t,!1)},s=function(t){return Object(n["d"])("/uiLogNew/planById/"+t)},r=function(t){return Object(n["b"])("/uiLogNew/removePlan/"+t,"",!1)},c=function(t){return Object(n["d"])("/uiLogNew/suiteInfo/"+t)},o=function(t){return Object(n["d"])("/uiLogNew/caseListPage",t)},l=function(t){return Object(n["d"])("/uiLogNew/stepListPage",t)}},b53c:function(t,e,a){"use strict";var n=a("cbde"),i=a.n(n);i.a},cbde:function(t,e,a){},cf45:function(t,e,a){"use strict";a.d(e,"b",function(){return n}),a.d(e,"a",function(){return i});a("34a3");var n=function(t,e){return t=parseFloat(t),e=parseFloat(e),isNaN(t)||isNaN(e)?"-":e<=0?"0%":Math.round(t/e*1e4)/100+"%"},i=function(t,e){if(!t||!e)return"0秒";var a=Date.parse(new Date(t.replace(/-/g,"/"))),n=Date.parse(new Date(e.replace(/-/g,"/"))),i=new Date(a),s=new Date(n),r=s.getTime()-i.getTime(),c=Math.floor(r/864e5),o=r%864e5,l=Math.floor(o/36e5),u=o%36e5,f=Math.floor(u/6e4),d=u%6e4,g=Math.floor(d/1e3);return c+""==="0"&l+""==="0"&f+""==="0"?g+"秒":c+""==="0"&l+""==="0"?f+"分钟 "+g+"秒":c+""==="0"?l+"小时 "+f+"分钟 "+g+"秒":c+"天 "+l+"小时 "+f+"分钟 "+g+"秒"}},ffdc:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-drawer",{attrs:{title:"用例详情",size:"50%",visible:t.visible},on:{"update:visible":function(e){t.visible=e}}},[a("div",{staticStyle:{margin:"0px 20px 0px 20px",overflow:"auto",height:"calc(100% - 15px)"}},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"auto"},attrs:{data:t.dataList,border:"",stripe:"",size:"small"}},[a("el-table-column",{attrs:{type:"index",width:"40",align:"center",label:"ID"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",width:"180",label:"步骤名称"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.stepName))]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center","show-overflow-tooltip":"",label:"实际结果"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.logDetail))]}}])}),t._v(" "),a("el-table-column",{attrs:{width:"70",align:"center",label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[0===e.row.status?a("el-tag",{attrs:{size:"small"}},[t._v(t._s("成功"))]):t._e(),t._v(" "),1===e.row.status?a("el-tag",{attrs:{size:"small",type:"danger"}},[t._v(t._s("失败"))]):t._e(),t._v(" "),2===e.row.status?a("el-tag",{attrs:{size:"small",type:"info"}},[t._v(t._s("跳过"))]):t._e()]}}])}),t._v(" "),a("el-table-column",{attrs:{width:"120",align:"center",label:"截图"},scopedSlots:t._u([{key:"default",fn:function(e){return e.row.imgname?[a("el-image",{staticStyle:{width:"80px",height:"30px"},attrs:{src:t.getFilePath(e.row.imgname),"preview-src-list":t.getFileList(e.row.imgname)}})]:void 0}}],null,!0)})],1),t._v(" "),a("el-pagination",{attrs:{background:"","current-page":t.pageInfo.pageNum,"page-sizes":[10,20,30,50],"page-size":t.pageInfo.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:t.pageInfo.pageCount},on:{"size-change":t.changePageSize,"current-change":t.changePageNum}})],1)])},i=[],s=a("aae1"),r=a("cf45"),c={data:function(){return{visible:!1,loading:!1,serchData:{caseLogId:""},pageInfo:{pageNum:1,pageSize:10,pageCount:0},dataList:[],addOrEditFormVisible:!1}},computed:{serchInfo:function(){var t=this.pageInfo,e=this.serchData;return e.projectId=this.$store.getters.projectId,t.serchData=e,t}},mounted:function(){},methods:{init:function(t){this.serchData.caseLogId=t.id,this.getPageList(),this.visible=!0},getFilePath:function(t){return"/public/profile/"+t},getFileList:function(t){return["/public/profile/"+t]},getDifftime:function(t,e){return Object(r["a"])(t,e)},getRate:function(t,e){return Object(r["b"])(t,e)},searchList:function(){this.getPageList()},changePageSize:function(t){this.pageInfo.pageSize=t,this.getPageList()},changePageNum:function(t){this.pageInfo.pageNum=t,this.getPageList()},getPageList:function(){var t=this;this.loading=!0,Object(s["f"])(this.serchInfo).then(function(e){t.dataList=e.list||[],t.pageInfo.pageCount=e.total,t.loading=!1})}}},o=c,l=(a("3ffd"),a("6691")),u=Object(l["a"])(o,n,i,!1,null,"4613d944",null);e["default"]=u.exports}}]);