(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-50725618","chunk-8ad1d4d0","chunk-527e9b46"],{"0fdc":function(t,e,a){"use strict";var s=a("16a0"),n=a.n(s);n.a},"16a0":function(t,e,a){},"620d":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),t._v(" "),a("ve-ring",{attrs:{height:"220px",data:t.chartData,settings:t.chartSettings,extend:t.chartExtend}})],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title"},[a("strong",[t._v("用例集数据统计")])])}],r=(a("cc57"),a("6006")),c=a.n(r),u=(a("e301"),{components:{VeRing:c.a},data:function(){return this.chartSettings={radius:[40,58],offsetY:400,label:{formatter:function(t){return"".concat(t.data.name,":").concat(t.data.value)}}},this.chartExtend={legend:{show:!1},series:{center:["50%","50%"]},color:["#1890ff","#ff4949","#909399"],title:{}},{chartData:{columns:["result","sum"],rows:[{result:"成功",sum:0},{result:"失败",sum:0}]}}},methods:{}}),i=u,l=(a("0fdc"),a("5511")),o=Object(l["a"])(i,s,n,!1,null,"09a88c2a",null);e["default"]=o.exports},"774d":function(t,e,a){"use strict";var s=a("ec75"),n=a.n(s);n.a},"853d":function(t,e,a){},c2c3:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-card",{staticClass:"box-card ",attrs:{shadow:"never"}},[a("div",{attrs:{slot:"header"},slot:"header"},[a("div",{staticClass:"title"},[a("strong",[t._v("测试报告详情")])])]),t._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:8}},[a("div",{staticStyle:{width:"100%","margin-bottom":"10px"}},[a("strong",[t._v("基本信息")])]),t._v(" "),a("el-table",{staticStyle:{width:"100%","margin-bottom":"20px"},attrs:{data:t.tableData,size:"mini","show-header":!1,"row-key":"id","default-expand-all":"",stripe:"",border:"","tree-props":{children:"children",hasChildren:"hasChildren"}}},[a("el-table-column",{attrs:{align:"center",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("strong",[t._v(t._s(e.row.name+"："))])]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.value))]}}])})],1)],1),t._v(" "),a("el-col",{attrs:{span:16}},[a("el-row",[a("el-col",{attrs:{span:10}},[a("case-suitev-chars",{ref:"caseSuite"})],1),t._v(" "),a("el-col",{attrs:{span:10}},[a("casev-chars",{ref:"cases"})],1)],1)],1)],1),t._v(" "),a("suite-detail")],1)},n=[],r=(a("cc57"),a("97a6")),c=a("deb9"),u=a("620d"),i=a("8f50"),l=a("cf45"),o={components:{suiteDetail:i["default"],CasevChars:c["default"],CaseSuitevChars:u["default"]},data:function(){return{activeName:"first",planLog:{},suiteLog:{},suiteCounts:{},caseCounts:{},tableData:[{name:"任务名称",value:"-"},{name:"开始时间",value:"-"},{name:"耗时",value:"-"},{name:"总用例集数",value:"-"},{name:"总用例数",value:"-"},{name:"用例通过率",value:"-"}]}},mounted:function(){var t=this;this.$route.query.id&&(Object(r["b"])(this.$route.query.id).then((function(e){t.planLog=e||{},t.tableData[0].value=e.name,t.tableData[1].value=e.createTime,t.tableData[2].value=t.getDifftime(e.createTime,e.endTime),t.tableData[3].value=e.suiteTotalCount,t.$refs.caseSuite.chartData.rows[0].sum=e.suiteSuccCount,t.$refs.caseSuite.chartData.rows[1].sum=e.suiteFailCount})),Object(r["d"])(this.$route.query.id).then((function(e){t.suiteLog=e||{},t.tableData[4].value=e.caseTotalCount,t.tableData[5].value=t.getRate(e.caseSuccCount,e.caseTotalCount),t.$refs.cases.chartData.rows[0].sum=e.caseSuccCount,t.$refs.cases.chartData.rows[1].sum=e.caseFailCount,t.$refs.cases.chartData.rows[2].sum=e.caseSkipCount})))},methods:{getDifftime:function(t,e){return Object(l["a"])(t,e)},getRate:function(t,e){return Object(l["b"])(t,e)}}},d=o,f=(a("e4f6"),a("5511")),h=Object(f["a"])(d,s,n,!1,null,"cbb55718",null);e["default"]=h.exports},deb9:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),t._v(" "),a("ve-ring",{attrs:{height:"220px",data:t.chartData,settings:t.chartSettings,extend:t.chartExtend}})],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title"},[a("strong",[t._v("用例数据统计")])])}],r=(a("cc57"),a("6006")),c=a.n(r),u=(a("e301"),{components:{VeRing:c.a},data:function(){return this.chartSettings={radius:[40,58],offsetY:400,label:{formatter:function(t){return"".concat(t.data.name,":").concat(t.data.value)}}},this.chartExtend={legend:{show:!1},series:{center:["50%","50%"]},color:["#1890ff","#ff4949","#909399"],title:{}},{chartData:{columns:["result","sum"],rows:[{result:"成功",sum:0},{result:"失败",sum:0},{result:"跳过",sum:0}]}}},methods:{}}),i=u,l=(a("774d"),a("5511")),o=Object(l["a"])(i,s,n,!1,null,"74af9de4",null);e["default"]=o.exports},e4f6:function(t,e,a){"use strict";var s=a("853d"),n=a.n(s);n.a},ec75:function(t,e,a){}}]);