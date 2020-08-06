(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5fb3a2ba"],{"067a":function(a,t,e){"use strict";e.r(t);var o=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"app-container code-gen"},[e("el-form",{ref:"genForm",staticClass:"gen-form",attrs:{model:a.clientParam,size:"mini","label-width":"150px"}},[e("el-form-item",{attrs:{label:"选择数据源",prop:"datasourceConfigId",rules:{required:!0,message:"请选择数据源"}}},[e("el-select",{attrs:{placeholder:"选择数据源"},on:{change:a.onDataSourceChange},model:{value:a.clientParam.datasourceConfigId,callback:function(t){a.$set(a.clientParam,"datasourceConfigId",t)},expression:"clientParam.datasourceConfigId"}},a._l(a.datasourceConfigList,(function(t){return e("el-option",{key:t.id,attrs:{label:t.dbName+"（"+t.host+"）",value:t.id}},[e("span",{staticStyle:{float:"left"}},[a._v(a._s(t.dbName+"（"+t.host+"）")+" ")]),a._v(" "),e("span",{staticStyle:{float:"right",color:"#8492a6","font-size":"13px"}},[e("el-link",{staticStyle:{"margin-right":"20px"},attrs:{type:"primary",icon:"el-icon-edit"},on:{click:function(e){return e.stopPropagation(),a.onDataSourceUpdate(t)}}}),a._v(" "),e("el-link",{attrs:{type:"danger",icon:"el-icon-delete"},on:{click:function(e){return e.stopPropagation(),a.onDataSourceDelete(t)}}})],1)])})),1),a._v(" "),e("el-button",{attrs:{type:"text"},on:{click:a.onDataSourceAdd}},[a._v("新建数据源")])],1),a._v(" "),e("el-form-item",{directives:[{name:"show",rawName:"v-show",value:a.showTable,expression:"showTable"}],attrs:{label:"包名（package）"}},[e("el-input",{attrs:{placeholder:"可选，如：com.gitee.xxx","show-word-limit":"",maxlength:"100"},model:{value:a.clientParam.packageName,callback:function(t){a.$set(a.clientParam,"packageName",t)},expression:"clientParam.packageName"}})],1)],1),a._v(" "),e("el-row",{directives:[{name:"show",rawName:"v-show",value:a.showTable,expression:"showTable"}],attrs:{gutter:20}},[e("el-col",{attrs:{span:12}},[e("h4",[a._v("选择表")]),a._v(" "),e("el-table",{attrs:{data:a.tableListData,border:"","cell-style":a.cellStyleSmall(),"header-cell-style":a.headCellStyleSmall()},on:{"selection-change":a.onTableListSelect}},[e("el-table-column",{attrs:{type:"selection"}}),a._v(" "),e("el-table-column",{attrs:{prop:"tableName",label:"表名"}})],1)],1),a._v(" "),e("el-col",{attrs:{span:12}},[e("h4",[a._v("选择模板")]),a._v(" "),e("el-table",{attrs:{data:a.templateListData,border:"","cell-style":a.cellStyleSmall(),"header-cell-style":a.headCellStyleSmall()},on:{"selection-change":a.onTemplateListSelect}},[e("el-table-column",{attrs:{type:"selection"}}),a._v(" "),e("el-table-column",{attrs:{prop:"name",label:"模板名称"}})],1),a._v(" "),e("el-button",{directives:[{name:"show",rawName:"v-show",value:a.showTable,expression:"showTable"}],attrs:{type:"primary"},on:{click:a.onGenerate}},[a._v("生成代码")])],1)],1),a._v(" "),e("el-dialog",{attrs:{title:a.datasourceTitle,visible:a.datasourceDlgShow},on:{"update:visible":function(t){a.datasourceDlgShow=t}}},[e("el-form",{ref:"datasourceForm",attrs:{model:a.datasourceFormData,rules:a.datasourceRule,size:"mini","label-width":"120px"}},[e("el-form-item",{attrs:{label:"数据库类型"}},[e("el-select",{attrs:{filterable:"","default-first-option":""},model:{value:a.datasourceFormData.dbType,callback:function(t){a.$set(a.datasourceFormData,"dbType",t)},expression:"datasourceFormData.dbType"}},a._l(a.dbTypeConfig,(function(a){return e("el-option",{key:a.dbType,attrs:{label:a.label,value:a.dbType}})})),1)],1),a._v(" "),e("el-form-item",{attrs:{label:"Host",prop:"host"}},[e("el-input",{attrs:{placeholder:"地址","show-word-limit":"",maxlength:"100"},model:{value:a.datasourceFormData.host,callback:function(t){a.$set(a.datasourceFormData,"host",t)},expression:"datasourceFormData.host"}})],1),a._v(" "),e("el-form-item",{attrs:{label:"Port",prop:"port"}},[e("el-input",{attrs:{placeholder:"端口","show-word-limit":"",maxlength:"10"},model:{value:a.datasourceFormData.port,callback:function(t){a.$set(a.datasourceFormData,"port",t)},expression:"datasourceFormData.port"}})],1),a._v(" "),e("el-form-item",{attrs:{label:"Database",prop:"dbName"}},[e("el-input",{attrs:{placeholder:"数据库","show-word-limit":"",maxlength:"64"},model:{value:a.datasourceFormData.dbName,callback:function(t){a.$set(a.datasourceFormData,"dbName",t)},expression:"datasourceFormData.dbName"}})],1),a._v(" "),e("el-form-item",{attrs:{label:"Username",prop:"username"}},[e("el-input",{attrs:{placeholder:"用户名","show-word-limit":"",maxlength:"100"},model:{value:a.datasourceFormData.username,callback:function(t){a.$set(a.datasourceFormData,"username",t)},expression:"datasourceFormData.username"}})],1),a._v(" "),e("el-form-item",{attrs:{label:"Password",prop:"password"}},[e("el-input",{attrs:{type:"password",placeholder:"密码","show-word-limit":"",maxlength:"100"},model:{value:a.datasourceFormData.password,callback:function(t){a.$set(a.datasourceFormData,"password",t)},expression:"datasourceFormData.password"}})],1),a._v(" "),e("el-form-item",[e("el-button",{attrs:{type:"success"},on:{click:a.onDatasourceTest}},[a._v("测试连接")]),a._v(" "),e("el-button",{attrs:{type:"primary"},on:{click:a.onDatasourceSave}},[a._v("保存")])],1)],1)],1)],1)},r=[],s={data:function(){return{showTable:!1,clientParam:{datasourceConfigId:"",tableNames:[],templateConfigIdList:[],packageName:""},datasourceConfigList:[],tableListData:[],templateListData:[],datasourceTitle:"新建连接",datasourceDlgShow:!1,datasourceFormData:{id:0,dbType:1,host:"",port:"",username:"",password:"",dbName:""},dbTypeConfig:[],datasourceRule:{host:[{required:!0,message:"不能为空",trigger:"blur"}],port:[{required:!0,message:"不能为空",trigger:"blur"}],username:[{required:!0,message:"不能为空",trigger:"blur"}],password:[{required:!0,message:"不能为空",trigger:"blur"}],dbName:[{required:!0,message:"不能为空",trigger:"blur"}]}}},created:function(){this.loadDataSource(),this.loadTemplate(),this.loadDbType()},methods:{loadDataSource:function(){var a=this;this.post("/datasource/list",{},(function(t){a.datasourceConfigList=t.data}))},loadTemplate:function(){var a=this;this.post("/template/list",{},(function(t){a.templateListData=t.data}))},loadDbType:function(){var a=this;this.post("/datasource/dbtype",{},(function(t){a.dbTypeConfig=t.data}))},onDataSourceAdd:function(){this.datasourceTitle="新建连接",this.datasourceFormData.id=0,this.datasourceDlgShow=!0},onTableListSelect:function(a){this.clientParam.tableNames=a.map((function(a){return a.tableName}))},onTemplateListSelect:function(a){this.clientParam.templateConfigIdList=a.map((function(a){return a.id}))},onDataSourceChange:function(a){var t=this;this.clientParam.datasourceConfigId=a,this.post("/datasource/table/".concat(a),{},(function(a){t.showTable=!0,t.tableListData=a.data}))},onDataSourceUpdate:function(a){this.datasourceTitle="修改连接",Object.assign(this.datasourceFormData,a),this.datasourceDlgShow=!0},onDataSourceDelete:function(a){this.confirm("确认要删除 ".concat(a.dbName," 吗？"),(function(t){var e={id:a.id};this.post("/datasource/del",e,(function(){t(),location.reload()}))}))},onGenerate:function(){var a=this;this.$refs.genForm.validate((function(t){if(t){if(0===a.clientParam.tableNames.length)return void a.tip("请勾选表","error");if(0===a.clientParam.templateConfigIdList.length)return void a.tip("请勾选模板","error");var e=JSON.stringify(a.clientParam);a.goRoute("result/".concat(e))}}))},onDatasourceTest:function(){var a=this;this.$refs.datasourceForm.validate((function(t){t&&a.post("/datasource/test",a.datasourceFormData,(function(t){a.tip("连接成功")}))}))},onDatasourceSave:function(){var a=this;this.$refs.datasourceForm.validate((function(t){t&&a.post("/datasource/test",a.datasourceFormData,(function(t){a.datasourceFormData.id?a.post("/datasource/update",a.datasourceFormData,(function(a){location.reload()})):a.post("/datasource/add",a.datasourceFormData,(function(t){a.tip("添加成功"),a.loadDataSource(),a.datasourceDlgShow=!1}))}))}))}}},l=s,i=(e("1764"),e("2877")),n=Object(i["a"])(l,o,r,!1,null,null,null);t["default"]=n.exports},1764:function(a,t,e){"use strict";var o=e("aa8f"),r=e.n(o);r.a},aa8f:function(a,t,e){}}]);