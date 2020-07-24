(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ad4a9eba"],{"0737":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("Breadcrumb",{attrs:{text:"用户列表"}}),r("el-card",[r("el-button",{attrs:{type:"primary",icon:"el-icon-plus"},on:{click:e.addUser}},[e._v("添加用户")]),r("el-table",{attrs:{data:e.adminUserList,border:"",stripe:""}},[r("el-table-column",{attrs:{label:"用户名",prop:"username"}}),r("el-table-column",{attrs:{label:"权限等级",prop:"level"}}),r("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{size:"small",type:"primary",icon:"el-icon-edit"},on:{click:function(r){return e.edit(t.row)}}},[e._v("编辑")]),r("el-button",{attrs:{size:"small",type:"danger",icon:"el-icon-delete"},on:{click:function(r){return e._delete(t.row)}}},[e._v("删除")])]}}])})],1)],1),r("el-dialog",{attrs:{title:this.model._id?"编辑用户":"添加用户",visible:e.dialogVisible,width:"50%"},on:{"update:visible":function(t){e.dialogVisible=t},closed:e.dialogClose}},[r("el-form",{attrs:{"label-width":"80px"}},[r("el-form-item",{attrs:{label:"用户名"}},[r("el-input",{model:{value:e.model.username,callback:function(t){e.$set(e.model,"username",t)},expression:"model.username"}})],1),this.model._id?e._e():r("el-form-item",{attrs:{label:"权限等级"}},[r("el-input",{model:{value:e.model.level,callback:function(t){e.$set(e.model,"level",t)},expression:"model.level"}})],1),r("el-form-item",{attrs:{label:"密码"}},[r("el-input",{model:{value:e.model.password,callback:function(t){e.$set(e.model,"password",t)},expression:"model.password"}})],1)],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.ok}},[e._v("确 定")])],1)],1)],1)},a=[],i=(r("96cf"),r("1da1")),s=r("5fc7"),l=r("1bab");function o(e){return Object(l["a"])({url:"/admin_users",method:"post",data:e})}function c(e){return Object(l["a"])({url:"/admin_users/".concat(e)})}function u(e,t){return Object(l["a"])({url:"/admin_users/".concat(e),method:"put",data:t})}function d(e){return Object(l["a"])({url:"/admin_users/".concat(e),method:"delete"})}function m(){return Object(l["a"])({url:"/admin_users"})}var p={name:"AdminUserList",data:function(){return{adminUserList:[],model:{avatar:""},dialogVisible:!1}},components:{Breadcrumb:s["a"]},methods:{getAdminUserList:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:t=e.sent,this.adminUserList=t.data;case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),addUser:function(){this.dialogVisible=!0},edit:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.id=t._id,e.next=3,c(this.id);case 3:r=e.sent,this.model=r.data,this.dialogVisible=!0;case 6:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),ok:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.model._id){e.next=11;break}return e.next=3,o(this.model);case 3:if(t=e.sent,t){e.next=6;break}return e.abrupt("return");case 6:this.$message.success("创建用户成功"),this.getAdminUserList(),this.dialogVisible=!1,e.next=19;break;case 11:return e.next=13,u(this.id,this.model);case 13:if(r=e.sent,r){e.next=16;break}return e.abrupt("return");case 16:this.$message.success("编辑用户成功"),this.getAdminUserList(),this.dialogVisible=!1;case 19:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),_delete:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.$confirm("此操作将永久删除该账号, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"});case 3:return e.next=5,d(t._id);case 5:r=e.sent,this.$message.success(r.data.message),this.getAdminUserList(),e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](0),this.$message.info("已取消删除");case 13:case"end":return e.stop()}}),e,this,[[0,10]])})));function t(t){return e.apply(this,arguments)}return t}(),dialogClose:function(){this.model={}}},created:function(){this.getAdminUserList()}},f=p,b=r("2877"),h=Object(b["a"])(f,n,a,!1,null,"7d247ffc",null);t["default"]=h.exports},"5fc7":function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[r("el-breadcrumb-item",[e._v(e._s(e.text))])],1)},a=[],i={name:"Breadcrumb",props:{text:{type:String,default:""}}},s=i,l=r("2877"),o=Object(l["a"])(s,n,a,!1,null,"32c20e90",null);t["a"]=o.exports}}]);
//# sourceMappingURL=chunk-ad4a9eba.871de3fb.js.map