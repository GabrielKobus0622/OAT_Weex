webpackJsonp([10],{410:function(t,e,s){function i(t){s(533)}var n=s(240)(s(508),s(578),i,null,null);t.exports=n.exports},414:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"fab",data:function(){return{hideFrom:["login","sync"]}},methods:{click:function(t){this.$router.push({name:t})}}}},415:function(t,e,s){e=t.exports=s(390)(void 0),e.push([t.i,".q-fab{z-index:1000!important}",""])},416:function(t,e,s){var i=s(415);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);s(391)("c80c07c0",i,!0)},417:function(t,e,s){function i(t){s(416)}var n=s(240)(s(414),s(418),i,null,null);t.exports=n.exports},418:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-fab",{staticClass:"absolute-bottom-right",attrs:{classNames:"secondary",icon:"keyboard_arrow_left",direction:"left"}},[s("q-small-fab",{staticClass:"negative",attrs:{icon:"power_settings_new"},nativeOn:{click:function(e){t.click("logout")}}}),t._v(" "),s("q-small-fab",{staticClass:"primary",attrs:{icon:"home"},nativeOn:{click:function(e){t.click("dashboard")}}}),t._v(" "),s("q-small-fab",{staticClass:"primary",attrs:{icon:"settings"},nativeOn:{click:function(e){t.click("admin")}}}),t._v(" "),this.$store.getters.isOnline?s("q-small-fab",{staticClass:"info",attrs:{icon:"cloud"},nativeOn:{click:function(e){t.click("sync")}}}):t._e(),t._v(" "),this.$store.getters.isOnline?t._e():s("q-small-fab",{staticClass:"info disabled",attrs:{icon:"cloud_off"}})],1)},staticRenderFns:[]}},419:function(t,e,s){var i=s(240)(null,s(420),null,null,null);t.exports=i.exports},420:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-tabs",{staticClass:"justified no-border-radius",slot:"navigation"},[s("q-tab",{attrs:{icon:"brightness_auto",route:"/assets"}},[t._v("Assets")]),t._v(" "),s("q-tab",{attrs:{icon:"nature",route:"/vessels"}},[t._v("Vessels")]),t._v(" "),s("q-tab",{attrs:{icon:"local_shipping",route:"/transports"}},[t._v("Transports")]),t._v(" "),s("q-tab",{attrs:{icon:"gesture",route:"/hoses"}},[t._v("Hoses")]),t._v(" "),s("q-tab",{attrs:{icon:"av_timer",route:"/meters"}},[t._v("Meters")])],1)},staticRenderFns:[]}},508:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(20),n=(s.n(i),s(417)),a=s.n(n),r=s(419),o=s.n(r);e.default={name:"vessels",components:{fab:a.a,adminNav:o.a},data:function(){return{vessels:{items:[]},tableConfig:{rowHeight:"50px",title:"Vessels",noHeader:!1,refresh:!0,columnPicker:!1,leftStickyColumns:0,rightStickyColumns:0,bodyStyle:{maxHeight:"800px",maxWidth:"100%"},responsive:!0,pagination:{rowsPerPage:15,options:[5,10,15,30,50,500]},selection:!1,messages:{noData:"<i>warning</i> No data available to show.",noDataAfterFiltering:"<i>warning</i> No results. Please refine your search terms."}},tableColumns:[{label:"Serial #",field:"serialNumber",sort:!0,filter:!0,width:"80px"},{label:"Manufacturer",field:"manufacturer",sort:!0,filter:!0,width:"80px"},{label:"Related Asset",field:"assetid",sort:!0,filter:!1,width:"80px"},{label:"Options",field:"id",format:function(t){return"optionscol"},sort:!1,filter:!1,width:"50px"}]}},computed:{user:function(){return this.$store.getters.currentUser}},created:function(){var t=this;i.Loading.show(),setTimeout(function(){t.vessels=t.$store.getters.vessels,i.Loading.hide()},1e3)},beforeCreate:function(){console.time("init")},mounted:function(){console.timeEnd("init")},methods:{editItem:function(t){this.$router.push({name:"editVessel",params:{id:t.id}})},addItem:function(){this.$router.push({name:"newVessel"})},editAsset:function(t){this.$router.push({name:"editAsset",params:{id:t.assetid}})},getAsset:function(t){if(!t)return"N/A";if(36===t.toString().length)return"Not Synced Yet";var e=this.$store.getters.fetchItem({type:"assets",lookup:"id",value:t,field:"*"});return e?e.name:"N/A"}}}},514:function(t,e,s){e=t.exports=s(390)(void 0),e.push([t.i,"div.q-data-table>.upper-toolbar:first-child{display:none}.autocomplete-clear{position:absolute;right:0;top:8px}.m-t-n-5{margin-top:-5px!important}.m-t-2{margin-top:2px}.m-r-10{margin-right:10px}.m-t-5{margin-top:5px}.m-t-10{margin-top:10px!important}.m-10{margin:10px}.border-right{border-right:2px solid #e0e0e0}",""])},533:function(t,e,s){var i=s(514);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);s(391)("ce502206",i,!0)},578:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"vessels"}},[s("admin-nav"),t._v(" "),s("fab"),t._v(" "),s("div",{staticClass:"card no-border-radius"},[s("div",{staticClass:"card-title bg-primary text-white"},[s("span",[t._v("Manage Vessels ("+t._s(t.vessels.items.length)+")")]),t._v(" "),s("button",{staticClass:"primary float-right  m-t-n-5",on:{click:function(e){t.addItem()}}},[t._m(0)])]),t._v(" "),s("q-data-table",{attrs:{data:t.vessels.items,config:t.tableConfig,columns:t.tableColumns},scopedSlots:t._u([["col-id",function(e){return[s("button",{staticClass:"secondary small circular",on:{click:function(s){t.editItem(e.row)}}},[s("i",[t._v("edit")])])]}],["col-assetid",function(e){return[s("span",{staticClass:"text-primary cursor-pointer",on:{click:function(s){t.editAsset(e.row)}}},[t._v(t._s(t.getAsset(e.data)))])]}]])})],1)],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("small",[s("i",[t._v("add")]),t._v(" Add Vessel")])}]}}});