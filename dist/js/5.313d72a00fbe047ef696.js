webpackJsonp([5],{399:function(e,t,s){function a(e){s(538)}var n=s(240)(s(497),s(590),a,null,null);e.exports=n.exports},411:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.regex=t.ref=t.len=t.req=t.withParams=void 0;var a=s(435),n=function(e){return e&&e.__esModule?e:{default:e}}(a);t.withParams=n.default;var r=t.req=function(e){if(Array.isArray(e))return!!e.length;if(void 0===e||null===e)return!1;if("object"==typeof e){for(var t in e)return!0;return!1}return!!String(e).length};t.len=function(e){return Array.isArray(e)?e.length:"object"==typeof e?Object.keys(e).length:String(e).length},t.ref=function(e,t,s){return"function"==typeof e?e.call(t,s):s[e]},t.regex=function(e,t){return(0,n.default)({type:e},function(e){return!r(e)||t.test(e)})}},412:function(e,t,s){"use strict";var a=s(0),n=s.n(a),r=s(20);s.n(r);s.d(t,"d",function(){return i}),s.d(t,"c",function(){return o}),s.d(t,"a",function(){return l}),s.d(t,"b",function(){return c});var i=function(e){return n()(e,"YYYY-MM-DD",!0).isValid()},o=function(e){return n()(e,"YYYY-MM",!0).isValid()},l=function(e){if(Array.isArray(e))return!1;if(null===e||void 0===e||""===e)return!0;if(0===Number("*"))return/^-?\d*$/.test(e);if(!new RegExp("^-?\\d*(\\.\\d+)?$").test(e))return!1;var t=parseFloat(e);return t===t},c={data:function(){return{answerCallback:null,answerFormat:"",answerType:"string",inspection_id:"",question:{},updateOptions:["default","select","yesNo","yesNoNA"],valid:[],value:{answer:{content:"",option:"",extended:{},signatures:[]},comment:"",defectOutcome:null}}},props:{numPhotos:{type:Number,required:!1},answer:{type:Object},inspectionId:{type:[Number,String]},questionId:{type:[Number,String]}},computed:{validObject:function(){var e=[];return this.valid.forEach(function(t){e.push({label:t,value:t})}),e}},created:function(){var e=this;if(this.inspectionId&&this.$set(this,"inspection_id",this.inspectionId),this.questionId&&this.$store.dispatch("fetchItem",{type:"questions",lookup:"id",value:parseInt(this.questionId),field:"*"}).then(function(t){e.$set(e,"question",t),e.answer||(console.log(e.answer),console.log("No answer for question: "+e.questionId+", using default model."),e.answer=r.Utils.extend(!1,e.value),e.$forceUpdate()),e.answer.questionid&&e.answer.inspectionid&&e.answer.categoryid||(e.answer.questionid=t.id,e.answer.categoryid=t.categoryid,e.answer.inspectionid=e.inspectionId,e.answer.isRequired=!0,e.answer.createdAt=n.a.utc().format("MMMM, DD YYYY HH:mm:ss")),t.options&&(e.$set(e,"valid",t.options.split(",").map(function(e){return e.trim()})),e.updateOptions.includes(t.type)||e.value.answer.option||(e.value.answer.option=e.validObject[0].value))}),this.answer.hasOwnProperty("answer")&&this.answer.answer){switch(this.$set(this.value,"answer",this.answer.answer),this.answerType){case"date":this.$set(this.value.answer,"content",n.a.utc(this.value.answer.content,this.answerFormat).format(this.answerFormat));break;case"number":this.$set(this.value.answer,"content",parseInt(this.value.answer.content))}this.answerCallback&&this.answerCallback()}this.answer.hasOwnProperty("comment")&&this.answer.comment&&this.$set(this.value,"comment",this.answer.comment),this.answer.hasOwnProperty("defectOutcome")&&this.answer.defectOutcome&&this.$set(this.value,"defectOutcome",this.answer.defectOutcome),this.$forceUpdate()},methods:{addComment:function(){this.$refs.commentModal.open()},update:r.Utils.debounce(function(){if(this.$v&&this.$v.value&&(this.$v.value.answer.option&&this.$v.value.answer.option.$touch(),this.$v.value.answer.content&&this.$v.value.answer.content.$touch(),this.$v.value.answer&&this.$v.value.answer.$error))return console.log("not updating answer"),void console.log(this.$v.value.answer.$error);console.log("updating answer"),this.updateOptions.includes(this.question.type)&&this.$set(this.value.answer,"option",this.value.answer.content),this.$emit("input",{inspectionId:this.inspection_id,questionId:this.question.id,answer:this.value,fullAnswer:this.answer})},100)}}},413:function(e,t,s){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.and=t.or=t.url=t.sameAs=t.requiredUnless=t.requiredIf=t.required=t.minLength=t.maxLength=t.email=t.between=t.numeric=t.alphaNum=t.alpha=void 0;var n=s(421),r=a(n),i=s(422),o=a(i),l=s(428),c=a(l),u=s(424),d=a(u),h=s(425),v=a(h),p=s(426),f=a(p),m=s(427),y=a(m),b=s(430),_=a(b),g=s(431),w=a(g),$=s(432),C=a($),S=s(433),x=a(S),q=s(434),P=a(q),T=s(429),I=a(T),k=s(423),M=a(k);t.alpha=r.default,t.alphaNum=o.default,t.numeric=c.default,t.between=d.default,t.email=v.default,t.maxLength=f.default,t.minLength=y.default,t.required=_.default,t.requiredIf=w.default,t.requiredUnless=C.default,t.sameAs=x.default,t.url=P.default,t.or=I.default,t.and=M.default},414:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"fab",data:function(){return{hideFrom:["login","sync"]}},methods:{click:function(e){this.$router.push({name:e})}}}},415:function(e,t,s){t=e.exports=s(390)(void 0),t.push([e.i,".q-fab{z-index:1000!important}",""])},416:function(e,t,s){var a=s(415);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);s(391)("c80c07c0",a,!0)},417:function(e,t,s){function a(e){s(416)}var n=s(240)(s(414),s(418),a,null,null);e.exports=n.exports},418:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("q-fab",{staticClass:"absolute-bottom-right",attrs:{classNames:"secondary",icon:"keyboard_arrow_left",direction:"left"}},[s("q-small-fab",{staticClass:"negative",attrs:{icon:"power_settings_new"},nativeOn:{click:function(t){e.click("logout")}}}),e._v(" "),s("q-small-fab",{staticClass:"primary",attrs:{icon:"home"},nativeOn:{click:function(t){e.click("dashboard")}}}),e._v(" "),s("q-small-fab",{staticClass:"primary",attrs:{icon:"settings"},nativeOn:{click:function(t){e.click("admin")}}}),e._v(" "),this.$store.getters.isOnline?s("q-small-fab",{staticClass:"info",attrs:{icon:"cloud"},nativeOn:{click:function(t){e.click("sync")}}}):e._e(),e._v(" "),this.$store.getters.isOnline?e._e():s("q-small-fab",{staticClass:"info disabled",attrs:{icon:"cloud_off"}})],1)},staticRenderFns:[]}},419:function(e,t,s){var a=s(240)(null,s(420),null,null,null);e.exports=a.exports},420:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("q-tabs",{staticClass:"justified no-border-radius",slot:"navigation"},[s("q-tab",{attrs:{icon:"brightness_auto",route:"/assets"}},[e._v("Assets")]),e._v(" "),s("q-tab",{attrs:{icon:"nature",route:"/vessels"}},[e._v("Vessels")]),e._v(" "),s("q-tab",{attrs:{icon:"local_shipping",route:"/transports"}},[e._v("Transports")]),e._v(" "),s("q-tab",{attrs:{icon:"gesture",route:"/hoses"}},[e._v("Hoses")]),e._v(" "),s("q-tab",{attrs:{icon:"av_timer",route:"/meters"}},[e._v("Meters")])],1)},staticRenderFns:[]}},421:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s(411);t.default=(0,a.regex)("alpha",/^[a-zA-Z]*$/)},422:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s(411);t.default=(0,a.regex)("alphaNum",/^[a-zA-Z0-9]*$/)},423:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s(411);t.default=function(){for(var e=arguments.length,t=Array(e),s=0;s<e;s++)t[s]=arguments[s];return(0,a.withParams)({type:"and"},function(){for(var e=this,s=arguments.length,a=Array(s),n=0;n<s;n++)a[n]=arguments[n];return t.length>0&&t.reduce(function(t,s){return t&&s.apply(e,a)},!0)})}},424:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s(411);t.default=function(e,t){return(0,a.withParams)({type:"between",min:e,max:t},function(s){return!(0,a.req)(s)||!/\s/.test(s)&&+e<=+s&&+t>=+s})}},425:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s(411);t.default=(0,a.regex)("email",/(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/)},426:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s(411);t.default=function(e){return(0,a.withParams)({type:"maxLength",max:e},function(t){return!(0,a.req)(t)||(0,a.len)(t)<=e})}},427:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s(411);t.default=function(e){return(0,a.withParams)({type:"minLength",min:e},function(t){return!(0,a.req)(t)||(0,a.len)(t)>=e})}},428:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s(411);t.default=(0,a.regex)("numeric",/^[0-9]*$/)},429:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s(411);t.default=function(){for(var e=arguments.length,t=Array(e),s=0;s<e;s++)t[s]=arguments[s];return(0,a.withParams)({type:"or"},function(){for(var e=this,s=arguments.length,a=Array(s),n=0;n<s;n++)a[n]=arguments[n];return t.length>0&&t.reduce(function(t,s){return t||s.apply(e,a)},!1)})}},430:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s(411);t.default=(0,a.withParams)({type:"required"},a.req)},431:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s(411);t.default=function(e){return(0,a.withParams)({type:"requiredIf",prop:e},function(t,s){return!(0,a.ref)(e,this,s)||(0,a.req)(t)})}},432:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s(411);t.default=function(e){return(0,a.withParams)({type:"requiredUnless",prop:e},function(t,s){return!!(0,a.ref)(e,this,s)||(0,a.req)(t)})}},433:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s(411);t.default=function(e){return(0,a.withParams)({type:"sameAs",eq:e},function(t,s){return t===(0,a.ref)(e,this,s)})}},434:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s(411);t.default=(0,a.regex)("url",/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[\/?#]\S*)?$/)},435:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s(242).withParams;t.default=a},497:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s(243),n=s.n(a),r=s(67),i=s.n(r),o=s(20),l=(s.n(o),s(417)),c=s.n(l),u=s(0),d=s.n(u),h=s(419),v=s.n(h),p=s(413),f=(s.n(p),s(412));t.default={name:"editHose",components:{fab:c.a,adminNav:v.a},validations:{hose:{companyid:{required:p.required},companyLocationID:{required:p.required},length:{isDecimal:f.a},lengthUnit:{requiredIfSize:s.i(p.requiredIf)("length")},testPressure:{isDecimal:f.a},HAWP:{isDecimal:f.a}}},data:function(){return{hose:{lengthUnit:"in",assetid:null,hoseType:"",serialNumber:null,length:null,updatedAt:"",size:null,replacementYear:null,HAWP:null,sizeUnit:"in",retestDate:null,createdAt:"",companyid:null,companyLocationID:null,appGeneratedID:"",deletedAt:"",id:null,type:"hose",testedAt:"",lastTestResult:"",testIntervalInYears:null},companies:[],companySearchTerm:"",assetSearchTerm:"",assets:[],vessels:[],locations:[],currentTab:"",typeSelect:[{label:"Hose",value:"hose"}],testIntervals:[{label:"1 Year",value:1},{label:"5 Years",value:5},{label:"10 Years",value:10}],sizeSelect:[{label:'1/2"',value:'1/2"'},{label:'3/4"',value:'3/4"'},{label:'1"',value:'1"'},{label:'1 1/4"',value:'1 1/4"'},{label:'1 1/2"',value:'1 1/2"'},{label:'2"',value:'2"'}],unitSizeSelect:[{label:"in",value:"in"},{label:"cm",value:"cm"}],unitLengthSelect:[{label:"m",value:"m"},{label:"cm",value:"cm"},{label:"inches",value:"in"},{label:"feet",value:"feet"}],testResults:[{label:"Pass",value:"pass"},{label:"Fail",value:"fail"}]}},computed:{yearMin:function(){return parseInt(d()().format("YYYY"))-10},yearMax:function(){return parseInt(d()().format("YYYY"))+10},yearSelect:function(){for(var e=[],t=this.yearMax;t>=this.yearMin;t--)e.push({label:t.toString(),value:t});return e},companiesSelect:function(){var e=[];return this.companies.forEach(function(t){e.push({label:t.name,value:t.name,id:t.id})}),e.sort(this.selectSort)},locationSelect:function(){var e=[{label:"-- UNASSIGNED --",value:null}];if(!this.hose.companyid)return e;var t=this;return this.locations.forEach(function(s){t.hose.companyid&&s.companyid!=t.hose.companyid||e.push({label:s.name+", "+s.address1+", "+s.city+", "+s.region,value:s.id})}),e},assetSearchSelect:function(){var e=[],t=this;return this.hose.companyid?(this.assets.forEach(function(s){s.companyid==t.hose.companyid&&e.push({label:""+s.name,value:""+s.name,id:null!==s.id?s.id:s.appGeneratedID})}),e.sort(this.selectSort)):e}},created:function(){var e=this;if(this.$route.params.id){var t=parseInt(this.$route.params.id);36===this.$route.params.id.toString().length&&(t=this.$route.params.id),this.$store.dispatch("fetchItem",{type:"attachments",lookup:"id",value:t,field:"*"}).then(function(t){e.$set(e,"hose",t)})}setTimeout(function(){if(e.assets=e.$store.getters.assets.items,e.companies=e.$store.getters.companies.items,e.locations=e.$store.getters.locations.items,e.hose.companyid){var t=!0,s=!1,a=void 0;try{for(var r,o=i()(e.companies.entries());!(t=(r=o.next()).done);t=!0){var l=n()(r.value,2),c=(l[0],l[1]);if(c.id==e.hose.companyid){e.companySearchTerm=c.name;break}}}catch(e){s=!0,a=e}finally{try{!t&&o.return&&o.return()}finally{if(s)throw a}}}if(e.hose.assetid){var u=!0,d=!1,h=void 0;try{for(var v,p=i()(e.assets.entries());!(u=(v=p.next()).done);u=!0){var f=n()(v.value,2),m=(f[0],f[1]);if(m.id==e.hose.assetid){e.assetSearchTerm=m.name;break}}}catch(e){d=!0,h=e}finally{try{!u&&p.return&&p.return()}finally{if(d)throw h}}}},1e3)},mounted:function(){var e=this;o.Events.$on("attachments:updated",function(t){o.Toast.create.positive("Item saved successfully."),e.$router.push({name:"hoses"})}),o.Events.$on("attachments:created",function(t){o.Toast.create.positive("Item saved successfully."),e.$router.push({name:"hoses"})}),o.Events.$on("attachments:updatedSync",function(t){o.Toast.create.positive("Item will be saved when you are online and perform a sync."),e.$router.push({name:"hoses"})}),o.Events.$on("attachments:createdSync",function(t){o.Toast.create.positive("Item will be saved when you are online and perform a sync."),e.$router.push({name:"hoses"})}),o.Events.$on("attachments:error",function(e,t){o.Toast.create.negative(t)})},beforeDestroy:function(){o.Events.$off()},methods:{selectSort:function(e,t){return e.label<t.label?-1:e.label>t.label?1:0},companySearch:function(e,t){var s=this.companiesSelect.filter(function(t){return t.label.toLowerCase().includes(e.toLowerCase())}).sort(this.selectSort);s||(s=[],s.push({label:"No matching companies.",value:"",id:null})),t(s)},companySelected:function(e){this.$set(this.hose,"companyid",null!==e.id?e.id:e.appGeneratedID),this.$set(this.hose,"companyLocationID",null)},assetSearch:function(e,t){var s=this.assetSearchSelect.filter(function(t){return t.label.toLowerCase().includes(e.toLowerCase())}).sort(this.selectSort);s||(s=[],s.push({label:"No matching assets.",value:"",id:null})),t(s)},assetSelected:function(e){this.$set(this.hose,"assetid",null!==e.id?e.id:e.appGeneratedID)},save:function(){if(this.$v&&this.$v.hose&&(this.$v.hose.$touch(),this.$v.hose.$error))return void o.Toast.create.negative("Error saving hose. Please review all form fields for accuracy.");this.hose.createdAt=d.a.utc().format("MMMM, DD YYYY HH:mm:ss"),this.hose.updatedAt=d.a.utc().format("MMMM, DD YYYY HH:mm:ss"),this.$store.dispatch("putItem",{name:"attachments",payload:{attachment:this.hose}})},updateTestResults:function(){"pass"!==this.hose.lastTestResult&&"fail"!==this.hose.lastTestResult||(this.hose.testedAt=d.a.utc().format("MMMM, DD YYYY HH:mm:ss"))},update:function(){if(this.$v&&this.$v.hose&&(this.$v.hose.$touch(),this.$v.hose.$error))return void o.Toast.create.negative("Error updating hose. Please review all form fields for accuracy.");this.$store.dispatch("hose",{id:this.hose.id,value:this.hose}),this.$store.dispatch("updateItem",{name:"attachments",key:this.hose.id,payload:{attachment:this.hose}})}}}},519:function(e,t,s){t=e.exports=s(390)(void 0),t.push([e.i,"div.q-data-table>.upper-toolbar:first-child{display:none}.autocomplete-clear{position:absolute;right:0;top:8px}.m-t-n-5{margin-top:-5px!important}.m-t-2{margin-top:2px}.m-r-10{margin-right:10px}.m-t-5{margin-top:5px}.m-t-10{margin-top:10px!important}.m-10{margin:10px}.border-right{border-right:2px solid #e0e0e0}",""])},538:function(e,t,s){var a=s(519);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);s(391)("7eff21c8",a,!0)},590:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"editHose"}},[s("admin-nav"),e._v(" "),s("fab"),e._v(" "),s("div",{staticClass:"card no-border-radius"},[s("div",{staticClass:"card-title bg-primary text-white"},[e.hose.id?s("span",{staticClass:"text-bold text-italic"},[e._v("Hose #"+e._s(e.hose.serialNumber))]):s("span",{staticClass:"text-bold text-italic"},[e._v("Add a New Hose")]),e._v(" "),e.hose.id?s("span",{staticClass:"label bg-blue float-right"},[s("small",[e._v("Last Updated "+e._s(e.hose.updatedAt))])]):e._e()]),e._v(" "),s("div",{staticClass:"card-content card-force-top-padding"},[s("div",{staticClass:"row gutter"},[s("div",{staticClass:"width-1of3"},[s("div",{staticClass:"stacked-label"},[s("label",{staticClass:"text-primary"},[e._v("Select a Company")]),e._v(" "),e.companySearchTerm?s("button",{staticClass:"autocomplete-clear",on:{click:function(t){e.hose.companyid=null,e.companySearchTerm=""}}},[s("i",{staticClass:"mat-only"},[e._v("clear")]),e._v(" "),s("i",{staticClass:"ios-only"},[e._v("cancel")])]):e._e(),e._v(" "),s("q-autocomplete",{ref:"companySearch",attrs:{delay:300,"max-results":8,delimiter:!0},on:{search:e.companySearch,selected:e.companySelected},model:{value:e.companySearchTerm,callback:function(t){e.companySearchTerm=t},expression:"companySearchTerm"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.companySearchTerm,expression:"companySearchTerm"}],staticClass:"full-width",class:{"has-error":e.$v.hose.companyid.$error},attrs:{placeholder:"Start Typing (Company Name)"},domProps:{value:e.companySearchTerm},on:{input:function(t){t.target.composing||(e.companySearchTerm=t.target.value)}}})])],1),e._v(" "),s("div",[e.$v.hose.companyid.$error?s("span",{staticClass:"text-red"},[e._v("Select a company.")]):e._e()])]),e._v(" "),s("div",{staticClass:"width-1of3"},[s("q-select",{staticClass:"full-width stacked-label",class:{"has-error":e.$v.hose.companyLocationID.$error},attrs:{type:"list",options:e.locationSelect,label:"Company Branch Location"},model:{value:e.hose.companyLocationID,callback:function(t){e.hose.companyLocationID=t},expression:"hose.companyLocationID"}}),e._v(" "),s("div",[e.$v.hose.companyLocationID.$error?s("span",{staticClass:"text-red"},[e._v("Select a company location.")]):e._e()])],1),e._v(" "),s("div",{staticClass:"width-1of3"},[s("div",{staticClass:"stacked-label"},[s("label",{staticClass:"text-primary"},[e._v("Select an Asset")]),e._v(" "),e.assetSearchTerm?s("button",{staticClass:"autocomplete-clear",on:{click:function(t){e.hose.assetid=null,e.assetSearchTerm=""}}},[s("i",{staticClass:"mat-only"},[e._v("clear")]),e._v(" "),s("i",{staticClass:"ios-only"},[e._v("cancel")])]):e._e(),e._v(" "),s("q-autocomplete",{ref:"assetSearch",class:{disabled:!e.hose.companyid},attrs:{delay:300,"max-results":8,delimiter:!0},on:{search:e.assetSearch,selected:e.assetSelected},model:{value:e.assetSearchTerm,callback:function(t){e.assetSearchTerm=t},expression:"assetSearchTerm"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.assetSearchTerm,expression:"assetSearchTerm"}],staticClass:"full-width",attrs:{placeholder:"Start Typing (Asset Name)"},domProps:{value:e.assetSearchTerm},on:{input:function(t){t.target.composing||(e.assetSearchTerm=t.target.value)}}})])],1)])]),e._v(" "),s("div",{staticClass:"row gutter"},[s("div",{staticClass:"width-1of1"},[s("div",{staticClass:"stacked-label"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.hose.serialNumber,expression:"hose.serialNumber"}],staticClass:"full-width",attrs:{required:""},domProps:{value:e.hose.serialNumber},on:{input:function(t){t.target.composing||(e.hose.serialNumber=t.target.value)}}}),e._v(" "),s("label",[e._v("Serial Number")])])])]),e._v(" "),s("div",{staticClass:"row gutter"},[s("div",{staticClass:"width-1of2"},[s("div",{staticClass:"stacked-label"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.hose.hoseType,expression:"hose.hoseType"}],staticClass:"full-width",domProps:{value:e.hose.hoseType},on:{input:function(t){t.target.composing||(e.hose.hoseType=t.target.value)}}}),e._v(" "),s("label",[e._v("Hose Type")])])]),e._v(" "),s("div",{staticClass:"width-1of2"},[s("q-select",{staticClass:"full-width stacked-label",attrs:{type:"list",options:e.typeSelect,label:"Type"},model:{value:e.hose.type,callback:function(t){e.hose.type=t},expression:"hose.type"}})],1)]),e._v(" "),s("div",{staticClass:"row gutter"},[s("div",{staticClass:"width-1of3"},[s("q-select",{staticClass:"stacked-label",attrs:{type:"list",options:e.sizeSelect,label:"Hose Size"},model:{value:e.hose.size,callback:function(t){e.hose.size=t},expression:"hose.size"}})],1),e._v(" "),s("div",{staticClass:"width-1of3"},[s("div",{staticClass:"stacked-label"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.hose.length,expression:"hose.length"}],staticClass:"full-width",class:{"has-error":e.$v.hose.length.$error},domProps:{value:e.hose.length},on:{input:function(t){t.target.composing||(e.hose.length=t.target.value)}}}),e._v(" "),s("label",[e._v("Length")])]),e._v(" "),s("div",[e.$v.hose.length.$error?s("span",{staticClass:"text-red"},[e._v("Enter a valid length (numeric).")]):e._e()])]),e._v(" "),s("div",{staticClass:"width-1of3"},[s("q-select",{staticClass:"stacked-label",class:{"has-error":e.$v.hose.lengthUnit.$error},attrs:{type:"list",options:e.unitLengthSelect,label:"Unit of Measure"},model:{value:e.hose.lengthUnit,callback:function(t){e.hose.lengthUnit=t},expression:"hose.lengthUnit"}}),e._v(" "),s("div",[e.$v.hose.lengthUnit.$error?s("span",{staticClass:"text-red"},[e._v("Select a length unit.")]):e._e()])],1)]),e._v(" "),s("div",{staticClass:"row gutter"},[s("div",{staticClass:"width-1of3"},[s("q-select",{staticClass:"stacked-label",attrs:{type:"list",options:e.yearSelect,label:"Retest Date"},model:{value:e.hose.retestDate,callback:function(t){e.hose.retestDate=t},expression:"hose.retestDate"}})],1),e._v(" "),s("div",{staticClass:"width-1of3"},[s("q-select",{staticClass:"stacked-label",attrs:{type:"list",options:e.yearSelect,label:"Replacement Year"},model:{value:e.hose.replacementYear,callback:function(t){e.hose.replacementYear=t},expression:"hose.replacementYear"}})],1),e._v(" "),s("div",{staticClass:"width-1of3"},[s("q-select",{staticClass:"stacked-label",attrs:{type:"list",options:e.testIntervals,label:"Test Interval"},model:{value:e.hose.testIntervalInYears,callback:function(t){e.hose.testIntervalInYears=t},expression:"hose.testIntervalInYears"}})],1)]),e._v(" "),s("div",{staticClass:"row gutter"},[s("div",{staticClass:"width-1of3"},[s("div",{staticClass:"stacked-label"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.hose.testPresure,expression:"hose.testPresure"}],staticClass:"full-width",class:{"has-error":e.$v.hose.testPressure.$error},domProps:{value:e.hose.testPresure},on:{input:function(t){t.target.composing||(e.hose.testPresure=t.target.value)}}}),e._v(" "),s("label",[e._v("Test Pressure (psi)")])]),e._v(" "),s("div",[e.$v.hose.testPressure.$error?s("span",{staticClass:"text-red"},[e._v("Enter a valid test pressure (numeric).")]):e._e()])]),e._v(" "),s("div",{staticClass:"width-1of3"},[s("div",{staticClass:"stacked-label"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.hose.HAWP,expression:"hose.HAWP"}],staticClass:"full-width",class:{"has-error":e.$v.hose.HAWP.$error},domProps:{value:e.hose.HAWP},on:{input:function(t){t.target.composing||(e.hose.HAWP=t.target.value)}}}),e._v(" "),s("label",[e._v("HAWP (psi)")])]),e._v(" "),s("div",[e.$v.hose.HAWP.$error?s("span",{staticClass:"text-red"},[e._v("Enter a valid HAWP (numeric)")]):e._e()])]),e._v(" "),s("div",{staticClass:"width-1of3"},[s("q-dialog-select",{staticClass:"stacked-label",attrs:{type:"radio",options:e.testResults,label:"Test Result","ok-label":"Update","cancel-label":"Cancel",title:"Test Result"},on:{input:function(t){e.updateTestResults()}},model:{value:e.hose.lastTestResult,callback:function(t){e.hose.lastTestResult=t},expression:"hose.lastTestResult"}})],1)]),e._v(" "),e.hose.id?e._e():s("button",{staticClass:"positive float-right full-width m-10",on:{click:function(t){e.save()}}},[e._v("\n                Save Hose\n            ")]),e._v(" "),e.hose.id?s("button",{staticClass:"positive float-right full-width m-10",on:{click:function(t){e.update()}}},[e._v("\n                Update Hose\n            ")]):e._e()])])],1)},staticRenderFns:[]}}});