(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-33fb91f6"],{"1af6":function(t,n,e){var o=e("63b6");o(o.S,"Array",{isArray:e("9003")})},"2d63":function(t,n,e){"use strict";var o=e("5d73"),r=e.n(o),a=e("a745"),i=e.n(a),c=e("5d58"),u=e.n(c),l=e("67bb"),s=e.n(l),d=e("774e"),p=e.n(d);function f(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,o=new Array(n);e<n;e++)o[e]=t[e];return o}function h(t,n){if(t){if("string"===typeof t)return f(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?p()(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?f(t,n):void 0}}function b(t,n){var e;if("undefined"===typeof s.a||null==t[u.a]){if(i()(t)||(e=h(t))||n&&t&&"number"===typeof t.length){e&&(t=e);var o=0,a=function(){};return{s:a,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,l=!0,d=!1;return{s:function(){e=r()(t)},n:function(){var t=e.next();return l=t.done,t},e:function(t){d=!0,c=t},f:function(){try{l||null==e["return"]||e["return"]()}finally{if(d)throw c}}}}e.d(n,"a",(function(){return b}))},"469f":function(t,n,e){e("6c1c"),e("1654"),t.exports=e("7d7b")},"549b":function(t,n,e){"use strict";var o=e("d864"),r=e("63b6"),a=e("241e"),i=e("b0dc"),c=e("3702"),u=e("b447"),l=e("20fd"),s=e("7cd6");r(r.S+r.F*!e("4ee1")((function(t){Array.from(t)})),"Array",{from:function(t){var n,e,r,d,p=a(t),f="function"==typeof this?this:Array,h=arguments.length,b=h>1?arguments[1]:void 0,m=void 0!==b,v=0,g=s(p);if(m&&(b=o(b,h>2?arguments[2]:void 0,2)),void 0==g||f==Array&&c(g))for(n=u(p.length),e=new f(n);n>v;v++)l(e,v,m?b(p[v],v):p[v]);else for(d=g.call(p),e=new f;!(r=d.next()).done;v++)l(e,v,m?i(d,b,[r.value,v],!0):r.value);return e.length=v,e}})},"5d58":function(t,n,e){t.exports=e("d8d6")},"5d73":function(t,n,e){t.exports=e("469f")},"67bb":function(t,n,e){t.exports=e("f921")},"774e":function(t,n,e){t.exports=e("d2d5")},"7d7b":function(t,n,e){var o=e("e4ae"),r=e("7cd6");t.exports=e("584a").getIterator=function(t){var n=r(t);if("function"!=typeof n)throw TypeError(t+" is not iterable!");return o(n.call(t))}},a745:function(t,n,e){t.exports=e("f410")},d2d5:function(t,n,e){e("1654"),e("549b"),t.exports=e("584a").Array.from},da5e:function(t,n,e){"use strict";e.r(n);var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"app-container"},[e("el-button",{staticStyle:{"margin-bottom":"10px"},attrs:{type:"primary",size:"mini",icon:"el-icon-plus"},on:{click:t.onGroupAdd}},[t._v("添加模板组")]),t._v(" "),e("el-tabs",{attrs:{type:"border-card"},on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(n){t.activeName=n},expression:"activeName"}},[t._l(t.groupData,(function(n){return e("el-tab-pane",{key:n.id,attrs:{name:""+n.id,label:n.groupName}},[e("span",{attrs:{slot:"label"},slot:"label"},[t._v("\n        "+t._s(n.groupName)+"\n        "),e("el-dropdown",{directives:[{name:"show",rawName:"v-show",value:n.id===t.currentTab.id,expression:"item.id === currentTab.id"}],staticStyle:{"margin-left":"5px"},attrs:{trigger:"click"},on:{command:t.handleCommand}},[e("span",{staticClass:"el-dropdown-link"},[e("el-tooltip",{attrs:{placement:"top",content:"更多操作","open-delay":500}},[e("a",{staticClass:"el-icon-setting el-icon--right"})])],1),t._v(" "),e("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[e("el-dropdown-item",{attrs:{icon:"el-icon-edit",command:t.onGroupInfoUpdate}},[t._v("修改")]),t._v(" "),e("el-dropdown-item",{attrs:{icon:"el-icon-delete",command:t.onGroupInfoDelete}},[t._v("删除")])],1)],1)],1)])})),t._v(" "),e("el-button",{staticStyle:{"margin-bottom":"10px"},attrs:{type:"text",size:"mini",icon:"el-icon-plus"},on:{click:t.onAdd}},[t._v("新增模板")]),t._v(" "),e("el-table",{attrs:{data:t.tableData,border:"","highlight-current-row":""}},[e("el-table-column",{attrs:{prop:"name",label:"模板名称",width:"200"}}),t._v(" "),e("el-table-column",{attrs:{prop:"fileName",label:"文件名称"}}),t._v(" "),e("el-table-column",{attrs:{label:"操作",width:"150"},scopedSlots:t._u([{key:"default",fn:function(n){return[e("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(e){return t.onTableUpdate(n.row)}}},[t._v("修改")]),t._v(" "),e("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(e){return t.onTableDelete(n.row)}}},[t._v("删除")])]}}])})],1)],2)],1)},r=[],a=(e("7f7f"),e("2d63")),i={data:function(){return{activeName:"",tableData:[],groupData:[],currentTab:{id:0}}},created:function(){this.reload()},methods:{reload:function(){this.loadGroup()},loadGroup:function(){this.post("/group/list",{},(function(t){this.groupData=t.data;var n=this.currentTab.id;!n&&this.groupData.length>0&&(n=this.groupData[0].id),n&&this.selectTab(n)}))},selectTab:function(t){var n,e=Object(a["a"])(this.groupData);try{for(e.s();!(n=e.n()).done;){var o=n.value;if(o.id===t){this.currentTab=o;break}}}catch(r){e.e(r)}finally{e.f()}this.loadTable(t)},loadTable:function(t){this.activeName="".concat(t),this.post("/template/list?groupId=".concat(t),{},(function(t){this.tableData=t.data}))},handleClick:function(t){var n=parseInt(t.name);n&&this.selectTab(parseInt(n))},onTableUpdate:function(t){this.goRoute("edit/".concat(t.id))},onTableDelete:function(t){this.confirm("确认要删除【".concat(t.name,"】吗？"),(function(n){this.post("/template/del",t,(function(){n(),this.tip("删除成功"),this.reload()}))}))},onAdd:function(){this.goRoute("edit/0?groupId=".concat(this.currentTab.id))},onGroupInfoUpdate:function(){this.onGroupUpdate(this.currentTab)},onGroupInfoDelete:function(){this.onGroupDelete(this.currentTab)},onGroupAdd:function(){var t=this;this.groupTitle="增加模板组",this.$prompt("请输入组名称","增加模板组",{confirmButtonText:"确定",cancelButtonText:"取消",inputValue:"",inputPattern:/^.{1,64}$/,inputErrorMessage:"不能为空且长度在64以内"}).then((function(n){var e=n.value,o={groupName:e};t.post("/group/add",o,(function(n){t.currentTab=n.data,t.reload()}))})).catch((function(){}))},onGroupUpdate:function(t){var n=this;this.$prompt("请输入组名称","修改模板组",{confirmButtonText:"确定",cancelButtonText:"取消",inputValue:t.groupName,inputPattern:/^.{1,64}$/,inputErrorMessage:"不能为空且长度在64以内"}).then((function(e){var o=e.value,r={id:t.id,groupName:o};n.post("/group/update",r,(function(t){n.reload()}))})).catch((function(){}))},onGroupDelete:function(t){this.confirm("确认要删除【".concat(t.groupName,"】吗？"),(function(n){this.post("/group/del",t,(function(){n(),this.tip("删除成功"),this.currentTab.id=0,this.reload()}))}))}}},c=i,u=e("2877"),l=Object(u["a"])(c,o,r,!1,null,null,null);n["default"]=l.exports},f410:function(t,n,e){e("1af6"),t.exports=e("584a").Array.isArray}}]);