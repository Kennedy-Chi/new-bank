(window.webpackJsonp=window.webpackJsonp||[]).push([[29,6,7,8,16],{302:function(t,e,n){var content=n(310);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(143).default)("4ced276d",content,!0,{sourceMap:!1})},305:function(t,e,n){"use strict";n.r(e);var l={methods:{setFileURL:function(){this.$store.commit("SET_URL",this.$config.FILE_URL)}},mounted:function(){this.setFileURL()}},r=n(56),component=Object(r.a)(l,(function(){this._self._c;return this._m(0)}),[function(){var t=this._self._c;return t("div",{staticClass:"footer",attrs:{id:"footer"}},[t("div",[this._v("www.kennytechstudios.com")])])}],!1,null,null,null);e.default=component.exports},306:function(t,e,n){"use strict";n.r(e);n(49),n(58);var l=n(8),r=(n(26),n(48),{data:function(){return{route:""}},computed:{navState:function(){return this.$store.state.adminNavState},user:function(){return this.$store.state.auth.user}},methods:{toggleNav:function(){this.$store.commit("TOGGLE_ADMIN_NAV")},hideNav:function(){this.$store.commit("HIDE_NAV")},logout:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$auth.logout();case 2:t.$router.push("/");case 3:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.route=this.$route.name,this.hideNav()}}),c=(n(309),n(56)),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"vertical-navbar",class:{show:t.navState}},[e("div",{staticClass:"sticky-navbar"},[e("nuxt-link",{staticClass:"navbar-header",attrs:{to:"/"}},[e("img",{staticClass:"brand",attrs:{src:"/images/Logo.png",loading:"lazy",sizes:"130px",srcset:"/images/Logo.png 500w, /images/Logo.png 800w, /images/Logo.png 1080w, /images/Logo.png 2284w",alt:""}})]),t._v(" "),e("img",{staticClass:"menu-close",attrs:{src:"/images/menu-close.svg",alt:""},on:{click:t.toggleNav}}),t._v(" "),e("ul",{staticClass:"nav-list",attrs:{role:"list"}},[e("li",{staticClass:"nav-list"},[e("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:"admin"==t.route},attrs:{to:"/admin"}},[e("img",{staticClass:"nav-icon",attrs:{src:"/images/".concat("admin"==t.route?"colored-dashboard.svg":"dashboard.svg"),loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"link-text"},[t._v("Dashboard")])]),t._v(" "),e("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:t.route.includes("profile")},attrs:{to:"/admin/admin-profile/".concat(t.user._id)}},[e("img",{staticClass:"nav-icon",attrs:{src:"/images/".concat(t.route.includes("profile")?"colored-profile.svg":"profile.svg"),loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"link-text"},[t._v("Profile")])]),t._v(" "),e("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:"admin-users"==t.route},attrs:{to:"/admin/users"}},[e("img",{staticClass:"nav-icon",attrs:{src:"/images/".concat("admin-users"==t.route?"colored-users.svg":"users.svg"),loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"link-text"},[t._v("Users")])]),t._v(" "),e("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:t.route.includes("add-user")},attrs:{to:"/admin/add-user/new"}},[e("img",{staticClass:"nav-icon",attrs:{src:"/images/".concat(t.route.includes("add-user")?"colored-user.svg":"user.svg"),loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"link-text"},[t._v("Add User")])]),t._v(" "),e("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:"admin-accounts"==t.route},attrs:{to:"/admin/accounts"}},[e("img",{staticClass:"nav-icon",attrs:{src:"/images/".concat("admin-accounts"==t.route?"colored-plans.svg":"plans.svg"),loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"link-text"},[t._v("Accounts")])]),t._v(" "),e("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:"admin-reviews"==t.route},attrs:{to:"/admin/reviews"}},[e("img",{staticClass:"nav-icon",attrs:{src:"/images/".concat("admin-reviews"==t.route?"colored-reviews.svg":"reviews.svg"),loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"link-text"},[t._v("Reviews")])]),t._v(" "),e("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:"admin-currencies"==t.route},attrs:{to:"/admin/currencies"}},[e("img",{staticClass:"nav-icon",attrs:{src:"/images/".concat("admin-currencies"==t.route?"colored-currency.svg":"currency.svg"),loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"link-text"},[t._v("Currencies")])]),t._v(" "),e("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:t.route.includes("transactions")},attrs:{to:"/admin/transactions/list"}},[e("img",{staticClass:"nav-icon",attrs:{src:"/images/".concat(t.route.includes("transactions")?"colored-deposit.svg":"deposit.svg"),loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"link-text"},[t._v("Transactions")])]),t._v(" "),e("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:"admin-email"==t.route},attrs:{to:"/admin/email"}},[e("img",{staticClass:"nav-icon",attrs:{src:"/images/".concat("admin-email"==t.route?"colored-emails.svg":"emails.svg"),loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"link-text"},[t._v("Emails")])]),t._v(" "),e("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:"admin-pages"==t.route},attrs:{to:"/admin/pages"}},[e("img",{staticClass:"nav-icon",attrs:{src:"/images/".concat("admin-pages"==t.route?"colored-pages.svg":"pages.svg"),loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"link-text"},[t._v("Pages")])]),t._v(" "),e("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:"admin-settings"==t.route},attrs:{to:"/admin/settings"}},[e("img",{staticClass:"nav-icon",attrs:{src:"/images/".concat("admin-settings"==t.route?"colored-settings.svg":"settings.svg"),loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"link-text"},[t._v("Settings")])]),t._v(" "),e("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:"admin-referrals"==t.route},attrs:{to:"/admin/referrals"}},[e("img",{staticClass:"nav-icon",attrs:{src:"/images/".concat("admin-referrals"==t.route?"colored-referrals.svg":"referrals.svg"),loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"link-text"},[t._v("Referrals")])]),t._v(" "),e("span",{staticClass:"nav-link w-inline-block",on:{click:t.logout}},[e("img",{staticClass:"nav-icon",attrs:{src:"/images/logout.svg\n            ",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"link-text"},[t._v("Logout")])])],1)])],1)])}),[],!1,null,null,null);e.default=component.exports},307:function(t,e,n){"use strict";n.r(e);var l=n(8),r=(n(48),{head:function(){return{link:[{rel:"stylesheet",href:"/css/main.css",type:"text/css"}]}},methods:{toggleNav:function(){this.$store.commit("TOGGLE_ADMIN_NAV")},authenticateUser:function(){this.isAuthenticated?"User"==this.user.staffType&&this.$router.push("/dashboard"):this.$router.push("/")},logout:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$auth.logout();case 2:t.$router.push("/");case 3:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.authenticateUser()},computed:{isAuthenticated:function(){return this.$store.getters.isAuthenticated},user:function(){return this.$store.state.auth.user}}}),c=n(56),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-header"},[e("img",{staticClass:"menu",attrs:{src:"/images/menu.svg",loading:"lazy",alt:""},on:{click:t.toggleNav}}),t._v(" "),e("div",{staticClass:"top-icons"},[e("img",{staticClass:"top-icon",attrs:{src:"/images/profile.svg",loading:"lazy",alt:""}}),t._v(" "),t._m(0),t._v(" "),e("img",{staticClass:"top-icon",attrs:{src:"/images/logout.svg",loading:"lazy",alt:""},on:{click:t.logout}})])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"notification"},[e("div",{staticClass:"badge"}),t._v(" "),e("img",{staticClass:"top-icon",attrs:{src:"/images/notification.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"custom-card pie-chart-holder notify"},[e("h4",{staticClass:"activites"},[t._v("Recent Activies")]),t._v(" "),e("div",{staticClass:"each-activity"},[e("div",{staticClass:"activity-title"},[t._v("Deposit")]),t._v(" "),e("div",{staticClass:"activity-coin"},[e("img",{staticClass:"activity-img",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1737ae1e45a0c67433779_bitcoin-btc-logo.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"activity-line"})]),t._v(" "),e("div",{staticClass:"activity-value"},[e("h4",{staticClass:"activity-amount"},[t._v("$12.00")]),t._v(" "),e("div",{staticClass:"activity-time"},[t._v("12/06/2022 9:04 AM")])])]),t._v(" "),e("div",{staticClass:"each-activity"},[e("div",{staticClass:"activity-title"},[t._v("Withdrawal")]),t._v(" "),e("div",{staticClass:"activity-coin"},[e("img",{staticClass:"activity-img",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f173795a0b873c5097be44_tether-usdt-logo.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"activity-line"})]),t._v(" "),e("div",{staticClass:"activity-value"},[e("h4",{staticClass:"activity-amount"},[t._v("$12.00")]),t._v(" "),e("div",{staticClass:"activity-time"},[t._v("12/06/2022 9:04 AM")])])]),t._v(" "),e("div",{staticClass:"each-activity"},[e("div",{staticClass:"activity-title"},[t._v("Deposit")]),t._v(" "),e("div",{staticClass:"activity-coin"},[e("img",{staticClass:"activity-img",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f173795a0b8708f697be43_tron-trx-logo.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"activity-line"})]),t._v(" "),e("div",{staticClass:"activity-value"},[e("h4",{staticClass:"activity-amount"},[t._v("$12.00")]),t._v(" "),e("div",{staticClass:"activity-time"},[t._v("12/06/2022 9:04 AM")])])]),t._v(" "),e("div",{staticClass:"each-activity"},[e("div",{staticClass:"activity-title"},[t._v("Deposit")]),t._v(" "),e("div",{staticClass:"activity-coin"},[e("img",{staticClass:"activity-img",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1737ae1e45a0c67433779_bitcoin-btc-logo.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"activity-line"})]),t._v(" "),e("div",{staticClass:"activity-value"},[e("h4",{staticClass:"activity-amount"},[t._v("$12.00")]),t._v(" "),e("div",{staticClass:"activity-time"},[t._v("12/06/2022 9:04 AM")])])])])])}],!1,null,null,null);e.default=component.exports},309:function(t,e,n){"use strict";n(302)},310:function(t,e,n){var l=n(142)((function(i){return i[1]}));l.push([t.i,".vertical-navbar{transition:all .3s}.menu-close{display:none;position:absolute;right:20px;top:90px;width:20px}.menu-close,.nav-list a,span.nav-link{cursor:pointer}@media screen and (max-width:991px){.vertical-navbar.show{left:0;z-index:999}.menu-close{display:block}}@media screen and (max-width:380px){.vertical-navbar.show{width:100%}}",""]),l.locals={},t.exports=l},313:function(t,e,n){"use strict";n.r(e);var l={},r=n(56),component=Object(r.a)(l,(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"custom-card plan"},[e("h4",{staticClass:"page-title"},[t._v("INSTRUCTION")]),t._v(" "),e("div",{staticClass:"instruction"},[t._v("\n    Kindly fill in the required fields above to create a plan, in the case of\n    any confusion on how the above form works, kindly visit our\n    "),e("span",{staticClass:"custom-link"},[t._v("youtub link")]),t._v(", or our\n    "),e("span",{staticClass:"custom-link"},[t._v("website ")]),t._v("to watch the video tutorial\n    related to this form.\n  ")])])}],!1,null,null,null);e.default=component.exports},388:function(t,e,n){"use strict";var l=n(2),r=n(221).trim;l({target:"String",proto:!0,forced:n(389)("trim")},{trim:function(){return r(this)}})},389:function(t,e,n){var l=n(92).PROPER,r=n(4),c=n(222);t.exports=function(t){return r((function(){return!!c[t]()||"​᠎"!=="​᠎"[t]()||l&&c[t].name!==t}))}},408:function(t,e,n){"use strict";n.r(e);n(57);var l=n(8),r=(n(48),n(91),n(213),n(305)),c=n(306),o=n(307),v=n(313),d=n(46),m=n(47),_=(n(388),n(26),function(){function t(e,n,l,r,c,o){Object(d.a)(this,t),this.planName=e.trim(),this.planPeriod=n.trim(),this.planDuration=l,this.planPercentage=r,this.planMinimum=c,this.planMaximum=o,this.name=!1,this.period=!1,this.duration=!1,this.percentage=!1,this.minimum=!1,this.maximum=!1}return Object(m.a)(t,[{key:"validateName",value:function(){return this.name=null!=this.planName&&""!=this.planName,this}},{key:"validatePeriod",value:function(){return this.period=null!=this.planPeriod&&""!=this.planPeriod&&"Select"!=this.planPeriod,this}},{key:"validateDuration",value:function(){return this.duration=0!=this.planDuration&&""!=this.planDuration,this}},{key:"validatePercentage",value:function(){return this.percentage=0!=this.planPercentage&&""!=this.planPercentage,this}},{key:"validateMinimum",value:function(){return this.minimum=null!=this.planMinimum&&""!=this.planMinimum,this}},{key:"validateMaximum",value:function(){return this.maximum=null!=this.planMaximum&&""!=this.planMaximum,this}},{key:"checkErrors",value:function(){return this.name?this.period?this.duration?this.percentage?this.minimum?this.maximum?"success":"Please insert 0, if your want maximum deposit to be unlimited":"Please fill in a value for minimum deposit for this plan":"Please fill in a percentage for this plan":"Please fill in a duration for this plan":"Please select a period for this plan":"Please fill in the name of this plan"}}]),t}()),h={components:{Instruction:v.default,AdminNavigation:c.default,AdminFooter:r.default,AdminTopHeader:o.default},data:function(){return{plans:[],planLength:"",limit:4,pages:function(){for(var t=[],e=Math.ceil(this.planLength/this.limit),i=0;i<e.length;i++)t.push("i");return t},currentPage:1,planName:"",planPeriod:"Select",planDuration:"",planPercentage:"",planMinimum:"",planMaximum:"",planBanner:"",planDescription:"",planTags:[],planTag:"",planPeriodList:["Daily","Weekly","Fortnightly","Monthly","Yearly"],showPlanPeriodList:!1,response:"",responseState:!1,height:0,showResponse:!1,editState:!1,editId:""}},methods:{showResponseMsg:function(t,e){var n=this;this.response=t,this.responseState=e,this.showResponse=!0,setTimeout((function(){n.response="",n.showResponse=!1}),6e3)},formatMoney:function(t){return t.toLocaleString("en-US")},clearInputs:function(){this.editId="",this.editState=!1,this.planName="",this.planPeriod="",this.planDuration="",this.planPercentage="",this.planMinimum="",this.planMaximum="",this.planBanner="",this.planDescription="",this.planTags=""},removeListItem:function(t){this.planTags.splice(t,1)},setPlanPeriod:function(t){this.planPeriod=t,this.showPlanPeriodList=!1},populateTags:function(){this.planTags.push(this.planTag),this.planTag=""},setPlanBanner:function(t){this.planBanner=t.target.files[0]},preparePlanEdit:function(t){this.editId=t._id,this.editState=!0,this.planName=t.planName,this.planPeriod=t.planPeriod,this.planDuration=t.planDuration,this.planPercentage=t.planPercentage,this.planMinimum=t.planMinimum,this.planMaximum=t.planMaximum,this.planBanner=t.planBanner,this.planDescription=t.planDescription,this.planTags=t.planTags},processPlanData:function(){var t=new _(this.planName,this.planPeriod,this.planDuration,this.planPercentage,this.planMinimum,this.planMaximum).validateName().validatePeriod().validateDuration().validatePercentage().validateMinimum().validateMaximum().checkErrors();if("success"!=t)this.showResponseMsg(t,!1);else{var e=new FormData;e.append("planName",this.planName),e.append("planPeriod",this.planPeriod),e.append("planDuration",this.planDuration),e.append("planPercentage",this.planPercentage),e.append("planMinimum",this.planMinimum),e.append("planMaximum",this.planMaximum),e.append("planBanner",this.planBanner),e.append("planDescription",this.planDescription),e.append("planTags",this.planTags),this.editState?this.updatePlan(e):this.createPlan(e)}},togglePlanStatus:function(t,e){var n=this;return Object(l.a)(regeneratorRuntime.mark((function l(){var data;return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return data={planStatus:!e},l.prev=1,l.next=4,n.$axios.patch("/plans/toggle-status/".concat(t),data);case 4:l.sent,n.getPlans(),l.next=11;break;case 8:l.prev=8,l.t0=l.catch(1),console.log(l.t0.response);case 11:case"end":return l.stop()}}),l,null,[[1,8]])})))()},getPlans:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/plans");case 3:n=e.sent,t.plans=n.data.data,t.planLength=n.data.length,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.response);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()},updatePlan:function(form){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.patch("/plans/".concat(t.editId),form);case 3:e.sent,t.clearInputs(),t.getPlans(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.response);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()},createPlan:function(form){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.post("/plans",form);case 3:t.showResponseMsg("Plan created successfully",!0),t.getPlans(),t.clearInputs(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),t.showResponseMsg(e.t0.response.data,!1);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()},deletePlan:function(t){var e=this;return Object(l.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,e.$axios.delete("/plans/".concat(t));case 3:e.getPlans(),n.next=9;break;case 6:n.prev=6,n.t0=n.catch(0),e.showResponseMsg(n.t0.response.data,!1);case 9:case"end":return n.stop()}}),n,null,[[0,6]])})))()}},computed:{FILE_URL:function(){return this.$store.state.fileURL}},mounted:function(){this.getPlans()}},f=n(56),component=Object(f.a)(h,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"main-wrapper plans"},[e("AdminNavigation"),t._v(" "),e("div",{staticClass:"body-wrapper"},[e("AdminTopHeader"),t._v(" "),e("div",{staticClass:"content-wrapper"},[e("div",{staticClass:"custom-card plan"},[e("h4",{staticClass:"page-title"},[t._v("INVESTMENT PLAN")]),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"table-wrapper"},[e("table",{staticClass:"custom-table"},[t._m(1),t._v(" "),e("tbody",t._l(t.plans,(function(n,l){return e("tr",{key:n._id},[e("td",[t._v(t._s(l+1))]),t._v(" "),e("td",[e("img",{staticClass:"banner",attrs:{src:"".concat(t.FILE_URL,"/").concat(n.planBanner),alt:""}})]),t._v(" "),e("td",[t._v(t._s(n.planName))]),t._v(" "),e("td",[t._v(t._s(n.planPeriod))]),t._v(" "),e("td",[t._v(t._s(n.planDuration)+" Days")]),t._v(" "),e("td",[t._v(t._s(n.planPercentage))]),t._v(" "),e("td",[t._v(t._s(t.formatMoney(n.planMinimum)))]),t._v(" "),e("td",[t._v(t._s(t.formatMoney(n.planMaximum)))]),t._v(" "),e("td",[t._v("\n                  "+t._s(n.planDescription)+"\n                ")]),t._v(" "),e("td",t._l(n.planTags,(function(n,l){return e("div",{key:l},[t._v("\n                    "+t._s(n)+"\n                  ")])})),0),t._v(" "),e("td",[n.planStatus?e("div",{staticClass:"status",class:{success:n.planStatus},on:{click:function(e){return t.togglePlanStatus(n._id,n.planStatus)}}},[t._v("\n                    Active\n                  ")]):e("div",{staticClass:"status",class:{success:n.planStatus},on:{click:function(e){return t.togglePlanStatus(n._id,n.planStatus)}}},[t._v("\n                    Draft\n                  ")])]),t._v(" "),e("td",[e("div",{staticClass:"filter-box",on:{click:function(e){return t.preparePlanEdit(n)}}},[e("img",{staticClass:"filter-icon check action-icon",attrs:{src:"/images/edit-gray.svg",loading:"lazy",alt:""}})]),t._v(" "),e("div",{staticClass:"filter-box",on:{click:function(e){return t.deletePlan(n._id)}}},[e("img",{staticClass:"filter-icon check action-icon",attrs:{src:"/images/delete-gray.svg",loading:"lazy",alt:""}})])])])})),0)])]),t._v(" "),e("div",{staticClass:"table-label"},[e("div",[e("strong",{staticClass:"bold-text"},[t._v("Results")]),t._v(": "+t._s(t.planLength)+"\n            "),e("strong",{staticClass:"bold-text-2"},[t._v("Page")]),t._v(" 1 of 12\n          ")]),t._v(" "),e("ul",{staticClass:"min-table-pagination",attrs:{role:"list"}},[1!=t.currentPage&&0!=t.planLength?e("li",{staticClass:"pagination-item"},[e("img",{staticClass:"pagination-img",attrs:{src:"/images/cheveron-left.svg",loading:"lazy",alt:""}})]):t._e(),t._v(" "),t._l(t.pages(),(function(n,l){return e("li",{key:l,staticClass:"pagination-item"},[e("div",[t._v(t._s(l+1))])])})),t._v(" "),t.currentPage<t.pages().length&&0!=t.planLength?e("li",{staticClass:"pagination-item"},[e("img",{staticClass:"pagination-img",attrs:{src:"/images/cheveron-right.svg",loading:"lazy",alt:""}})]):t._e()],2)]),t._v(" "),t._m(2),t._v(" "),e("div",{staticClass:"input-wrapper w-form"},[t.showResponse?e("div",{staticClass:"response",class:{success:t.responseState}},[t._v("\n            "+t._s(t.response)+"\n          ")]):t._e(),t._v(" "),e("form",{staticClass:"input-form",attrs:{action:"#"},on:{submit:function(t){t.preventDefault()}}},[e("div",{staticClass:"each-input"},[t._m(3),e("input",{directives:[{name:"model",rawName:"v-model",value:t.planName,expression:"planName"}],staticClass:"plan-input w-input",attrs:{type:"text",maxlength:"256",name:"Plan Name"},domProps:{value:t.planName},on:{input:function(e){e.target.composing||(t.planName=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"each-input"},[t._m(4),t._v(" "),e("h4",{staticClass:"select-display",on:{click:function(e){t.showPlanPeriodList=!t.showPlanPeriodList}}},[t._v("\n                "+t._s(t.planPeriod)+"\n              ")]),t._v(" "),t.showPlanPeriodList?e("ul",{staticClass:"filter-list down",attrs:{role:"list"}},t._l(t.planPeriodList,(function(n,l){return e("li",{key:l,staticClass:"filter-items",on:{click:function(e){return t.setPlanPeriod(n)}}},[e("div",[t._v(t._s(n))])])})),0):t._e(),t._v(" "),e("img",{staticClass:"filter-icon middle",attrs:{src:"/images/caret-down-gray.svg",loading:"lazy",alt:""},on:{click:function(e){t.showPlanPeriodList=!t.showPlanPeriodList}}})]),t._v(" "),e("div",{staticClass:"each-input"},[t._m(5),e("input",{directives:[{name:"model",rawName:"v-model",value:t.planDuration,expression:"planDuration"}],staticClass:"plan-input w-input",attrs:{type:"number",maxlength:"256",name:"duration"},domProps:{value:t.planDuration},on:{input:function(e){e.target.composing||(t.planDuration=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"each-input"},[t._m(6),e("input",{directives:[{name:"model",rawName:"v-model",value:t.planPercentage,expression:"planPercentage"}],staticClass:"plan-input w-input",attrs:{type:"number",maxlength:"256",name:"Profit"},domProps:{value:t.planPercentage},on:{input:function(e){e.target.composing||(t.planPercentage=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"each-input"},[t._m(7),e("input",{directives:[{name:"model",rawName:"v-model",value:t.planMinimum,expression:"planMinimum"}],staticClass:"plan-input w-input",attrs:{type:"number",maxlength:"256",name:"Minimum"},domProps:{value:t.planMinimum},on:{input:function(e){e.target.composing||(t.planMinimum=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"each-input"},[t._m(8),e("input",{directives:[{name:"model",rawName:"v-model",value:t.planMaximum,expression:"planMaximum"}],staticClass:"plan-input w-input",attrs:{type:"number",maxlength:"256",name:"duration-2"},domProps:{value:t.planMaximum},on:{input:function(e){e.target.composing||(t.planMaximum=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"each-input"},[e("label",{staticClass:"input-label",attrs:{for:"name-2"}},[t._v("Plan Banner")]),t._v(" "),e("label",{staticClass:"upload-btn",attrs:{for:"planBanner"}},[e("img",{staticClass:"upload-icon",attrs:{src:"/images/white-upload.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",[t._v("Upload Banner")]),t._v(" "),e("input",{staticClass:"file-input",attrs:{type:"file",id:"planBanner"},on:{change:t.setPlanBanner}})])]),t._v(" "),e("div",{staticClass:"each-input"},[e("label",{staticClass:"input-label",attrs:{for:"field"}},[t._v("Plan Description")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.planDescription,expression:"planDescription"}],staticClass:"plan-input w-input",attrs:{placeholder:"Plan Description",maxlength:"5000",name:"description"},domProps:{value:t.planDescription},on:{input:function(e){e.target.composing||(t.planDescription=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"each-input"},[t.planTags.length>0?e("ul",{staticClass:"tags",attrs:{role:"list"}},t._l(t.planTags,(function(n,l){return e("li",{key:l,staticClass:"each-tag"},[e("div",[t._v(t._s(n))]),t._v(" "),e("img",{staticClass:"list-delete",attrs:{src:"/images/delete-gray.svg",alt:""},on:{click:function(e){return t.removeListItem(l)}}})])})),0):t._e(),t._v(" "),e("label",{staticClass:"input-label",attrs:{for:"name-3"}},[t._v("Plan Tags")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.planTag,expression:"planTag"}],staticClass:"plan-input w-input",attrs:{type:"text",maxlength:"256",placeholder:"Write and press Enter Key"},domProps:{value:t.planTag},on:{keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:(e.preventDefault(),t.populateTags.apply(null,arguments))},input:function(e){e.target.composing||(t.planTag=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"button-holder"},[e("input",{staticClass:"button w-button",attrs:{type:"button",value:"Submit","data-wait":"Please wait..."},on:{click:t.processPlanData}}),e("input",{staticClass:"button w-button",attrs:{type:"submit",value:"Cancel","data-wait":"Please wait..."}})])])])]),t._v(" "),e("Instruction")],1),t._v(" "),e("AdminFooter")],1)],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"table-filters"},[e("div",{staticClass:"each-filter-option"},[e("div",{staticClass:"filter-page"},[t._v("Filter")]),t._v(" "),e("img",{staticClass:"filter-icon drop",attrs:{src:"/images/caret-down-gray.svg",loading:"lazy",alt:""}}),t._v(" "),e("h4",{staticClass:"filter-label"},[t._v("All Users")]),t._v(" "),e("ul",{staticClass:"filter-list hide",attrs:{role:"list"}},[e("li",{staticClass:"filter-items"},[e("div",[t._v("All Users")])]),t._v(" "),e("li",{staticClass:"filter-items"},[e("div",[t._v("Active")])]),t._v(" "),e("li",{staticClass:"filter-items"},[e("div",[t._v("Suspended")])]),t._v(" "),e("li",{staticClass:"filter-items"},[e("div",[t._v("Blocked")])])])]),t._v(" "),e("div",{staticClass:"each-filter-option"},[e("div",{staticClass:"filter-page"},[t._v("Sort")]),t._v(" "),e("h4",{staticClass:"filter-label"},[t._v("Name")]),t._v(" "),e("ul",{staticClass:"filter-list hide",attrs:{role:"list"}},[e("li",{staticClass:"filter-items"},[e("div",[t._v("Reg. Date")])]),t._v(" "),e("li",{staticClass:"filter-items"},[e("div",[t._v("Deposit")])]),t._v(" "),e("li",{staticClass:"filter-items"},[e("div",[t._v("Suspended")])]),t._v(" "),e("li",{staticClass:"filter-items"},[e("div",[t._v("Blocked")])])]),t._v(" "),e("img",{staticClass:"filter-icon drop",attrs:{src:"/images/caret-down-gray.svg",loading:"lazy",alt:""}})]),t._v(" "),e("div",{staticClass:"each-filter-option"},[e("div",{staticClass:"filter-page"},[t._v("Results")]),t._v(" "),e("h4",{staticClass:"filter-label input"},[t._v("10")]),t._v(" "),e("div",{staticClass:"filter-box"},[e("img",{staticClass:"filter-icon check",attrs:{src:"/images/check-gray.svg",loading:"lazy",alt:""}})])])])},function(){var t=this,e=t._self._c;return e("thead",[e("tr",[e("td",[t._v("S/N")]),t._v(" "),e("td",[t._v("Banner")]),t._v(" "),e("td",[t._v("Name")]),t._v(" "),e("td",[t._v("Period")]),t._v(" "),e("td",[t._v("Duration")]),t._v(" "),e("td",[t._v("Percentage")]),t._v(" "),e("td",[t._v("Minimum")]),t._v(" "),e("td",[t._v("Maximum")]),t._v(" "),e("td",[t._v("Description")]),t._v(" "),e("td",[t._v("Tags")]),t._v(" "),e("td",[t._v("Status")]),t._v(" "),e("td",[t._v("Actions")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"table-actions"},[e("div",{staticClass:"each-filter-option min"},[e("div",{staticClass:"filter-page"},[t._v("Delete")]),t._v(" "),e("div",{staticClass:"filter-box"},[e("img",{staticClass:"filter-icon check",attrs:{src:"/images/delete-gray.svg",loading:"lazy",alt:""}})])]),t._v(" "),e("div",{staticClass:"each-filter-option min"},[e("div",{staticClass:"filter-page"},[t._v("Bulk")]),t._v(" "),e("div",{staticClass:"filter-box"},[e("img",{staticClass:"filter-icon check",attrs:{src:"/images/bulk-gray.svg",loading:"lazy",alt:""}})])])])},function(){var t=this,e=t._self._c;return e("label",{staticClass:"input-label",attrs:{for:"name"}},[t._v("Plan Name "),e("span",{staticClass:"important"},[t._v("*")])])},function(){var t=this,e=t._self._c;return e("label",{staticClass:"input-label",attrs:{for:"name-3"}},[t._v("Plan Period "),e("span",{staticClass:"important"},[t._v("*")])])},function(){var t=this,e=t._self._c;return e("label",{staticClass:"input-label",attrs:{for:"duration"}},[t._v("Plan Duration (In days)\n                "),e("span",{staticClass:"important"},[t._v("*")])])},function(){var t=this,e=t._self._c;return e("label",{staticClass:"input-label",attrs:{for:"duration-2"}},[t._v("Percentage Profit "),e("span",{staticClass:"important"},[t._v("*")])])},function(){var t=this,e=t._self._c;return e("label",{staticClass:"input-label",attrs:{for:"duration-3"}},[t._v("Minimum Deposit "),e("span",{staticClass:"important"},[t._v("*")])])},function(){var t=this,e=t._self._c;return e("label",{staticClass:"input-label",attrs:{for:"duration-3"}},[t._v("Maximum Deposit "),e("span",{staticClass:"important"},[t._v("*")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{AdminNavigation:n(306).default,AdminTopHeader:n(307).default,AdminFooter:n(305).default})}}]);