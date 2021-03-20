(this["webpackJsonpdata-upload"]=this["webpackJsonpdata-upload"]||[]).push([[0],{151:function(e,t){},238:function(e,t){},239:function(e,t){},256:function(e,t,n){},257:function(e,t,n){"use strict";n.r(t);var c=n(20),a=n.n(c),r=n(29),i=n(1),o=n.n(i),l=n(22),s=n.n(l),u=n(79),d=n(62),f=n.n(d),h=n(262),j=n(30),p=n(261),b=n(260),x=(n(6),function(){var e=Object(r.a)(a.a.mark((function e(t){var n,c,r,i,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.rows,c=t.fields,r=t.userSession,i=t.featureLayerUrl,e.next=3,Object(b.a)({authentication:r,url:i,features:n.map((function(e){var t={};return c.forEach((function(n){t[n.name]=e[n.alias]})),{attributes:t}}))});case 3:return o=e.sent,e.abrupt("return",o);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());var g,O,m,v,w,y,S,k,C,B,L,_,D,E,F,U,A,P,R,T,I,z,M,N,V=n(27),H=n.n(V),Y=n(165),G=n.n(Y),J=n(25),W=n.n(J),q=n(13),K=n(9),Z=K.default.div(g||(g=Object(q.a)(["\n  height: 60px;\n  padding: 10px 0px;\n  background: ",";\n  box-sizing: border-box;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"])),(function(e){return e.theme.palette.Brand_Blue_200})),Q=K.default.div(O||(O=Object(q.a)(["\n  display: flex;\n  align-items: center;\n  margin-right: 25px;\n  & img {\n    height: 70px;\n    margin-right: 15px;\n    background: #ffffff;\n    padding-left: 15px;\n  }\n  & h1 {\n    margin: 0;\n    font-size: 1.5em;\n    font-weight: 300;\n    color: ",";\n  }\n"])),(function(e){return e.theme.palette.white})),X=K.default.img(m||(m=Object(q.a)(["\n  background: "," !important;\n  height: 50px !important;\n"])),(function(e){return e.theme.palette.Brand_Blue_200})),$=Object(K.default)(f.a)(v||(v=Object(q.a)(["\n  color: ",";\n  height: auto !important;\n  background-color: ",";\n"])),(function(e){return e.theme.palette.white}),(function(e){return e.theme.palette.lightBlue})),ee=n(5),te=function(e){var t=e.account,n=t.user,c=t.portal,a=e.attemptLogout;return Object(ee.jsxs)(Z,{children:[Object(ee.jsxs)(Q,{children:[Object(ee.jsx)(X,{src:"https://california.maps.arcgis.com/sharing/rest/content/items/eabecb26ec754b849c44175495e31e66/data",alt:"Header Logo"}),Object(ee.jsx)("h1",{children:"CA Safe Schools - Data Import"})]}),Object(ee.jsx)($,{user:n,portal:c,hideSwitchAccount:!0,onRequestSignOut:a})]})},ne=n(166),ce=n.n(ne),ae=o.a.createContext({loading:void 0,setLoading:void 0,error:void 0,setError:void 0,data:void 0,setData:void 0,config:void 0}),re=n(78),ie=n.n(re),oe=n(65),le=K.default.div(w||(w=Object(q.a)(["\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n"]))),se=(K.default.div(y||(y=Object(q.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding-left: 10px;\n  background-color: ",";\n"])),(function(e){return e.index%2?e.theme.palette.Brand_Blue_100:""})),K.default.div(S||(S=Object(q.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  background-color: ",";\n  color: #ffffff;\n"])),(function(e){return e.theme.palette.Brand_Blue_200})),Object(K.default)(oe.a)(k||(k=Object(q.a)(["\n  border: 1px solid ",";\n"])),(function(e){return e.theme.palette.Brand_Blue_200})),n(19)),ue=n(73),de=function(){var e=Object(i.useContext)(ae),t=e.setLoading,n=e.data,c=e.setData,o=e.setError,l=e.config,s=Object(i.useState)([]),u=Object(j.a)(s,2),d=u[0],f=u[1];Object(i.useEffect)((function(){c(d.filter((function(e){return e[l.isValidField]===l.isValidValue})))}),[l,d,c]);var h=function(){var e=Object(r.a)(a.a.mark((function e(n){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o(null),c([]),t(!0),(r=new Promise((function(e,t){try{var c=new FileReader;c.readAsArrayBuffer(n.target.files[0]),c.onload=function(t){var n=t.target.result,c=ie.a.read(n,{type:"buffer",cellDates:!0,dateNF:"YYYY-MM-DD"}),a=c.SheetNames[0],r=c.Sheets[a],i=ie.a.utils.sheet_to_json(r).filter((function(e){return e[l.schoolNameFieldExcel]}));e(i)},c.onerror=function(e){t(e)}}catch(a){t(a)}}))).then((function(e){t(!1),f(e)})),r.catch((function(e){console.error(e),o("Error Processing File")}));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p="The uploaded file contains valid data for ".concat(n.length," of the ").concat(d.length," schools\n   in the district. Click Next to submit.");return Object(ee.jsxs)(le,{children:[Object(ee.jsx)(ue.CalciteH2,{children:"Upload & Review"}),Object(ee.jsx)(se.CalciteP,{children:"Upload your populated Excel document. Only valid rows will be submitted."}),Object(ee.jsx)(ce.a,{accept:".xlsx,.xls",onChange:h}),Object(ee.jsx)(se.CalciteP,{style:{paddingTop:"10px"},children:n.length?p:""})]})},fe=n(64),he=n.n(fe),je=K.default.div(C||(C=Object(q.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 80%;\n  max-width: 800px;\n  margin: 8% auto;\n  border: 2px solid #1f2574;\n  box-shadow: 0px 0px 8px 2px rgb(10 10 10 / 25%);\n"]))),pe=K.default.div(B||(B=Object(q.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 100%;\n  padding: 36px;\n"]))),be=K.default.div(L||(L=Object(q.a)(["\n  width: calc(100% - 4rem);\n  background: ",";\n  padding: 2rem;\n"])),(function(e){return e.theme.palette.lightestGray})),xe=Object(K.default)(fe.ModalActions)(_||(_=Object(q.a)(["\n  justify-content: space-between;\n"]))),ge=K.default.div(D||(D=Object(q.a)(["\n  display: flex;\n  flex-direction: column;\n\n  height: 100%;\n"]))),Oe=Object(K.default)(H.a)(E||(E=Object(q.a)(["\n  width: 200px;\n"]))),me=n(169),ve=n.n(me),we=function(e){var t=e.fileUrl;return Object(ee.jsxs)(ge,{children:[Object(ee.jsx)(se.CalciteH2,{children:"Download Template"}),Object(ee.jsx)(se.CalciteP,{children:"Download Excel template. Select your county and district, then populate school data."}),Object(ee.jsx)(Oe,{href:t,download:"CASchools_District_DataTemplate.xlsx",onClick:function(){return console.log("clicked")},icon:Object(ee.jsx)(ve.a,{size:16}),children:"Download"})]})},ye=K.default.div(F||(F=Object(q.a)(["\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n"]))),Se=n(170),ke=n.n(Se),Ce=n(171),Be=n.n(Ce),Le=K.default.div(U||(U=Object(q.a)(["\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n"]))),_e=K.default.div(A||(A=Object(q.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding-left: 10px;\n  background-color: ",";\n  color: ",";\n"])),(function(e){return e.index%2?e.theme.palette.lightBlue:""}),(function(e){return e.index%2?e.theme.palette.white:""})),De=(K.default.div(P||(P=Object(q.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  background-color: ",";\n  color: #ffffff;\n"])),(function(e){return e.theme.palette.Brand_Blue_200})),Object(K.default)(oe.a)(R||(R=Object(q.a)(["\n  border: 1px solid ",";\n"])),(function(e){return e.theme.palette.Brand_Blue_200}))),Ee=function(e){var t=e.schools,n=e.schoolField;return Object(ee.jsx)(Le,{children:t.length?Object(ee.jsx)(De,{height:Math.min(200,40*t.length),overscanRowCount:10,rowCount:t.length,rowHeight:40,rowRenderer:function(e){var c=e.index,a=(e.isScrolling,e.key),r=e.style,i=t[c];return Object(ee.jsx)(_e,{style:r,index:c,children:i[n]},a)},width:600}):""})},Fe=function(e){var t=e.results,n=Object(i.useContext)(ae),c=n.config,a=n.data,r=t.addResults,o=[];r.forEach((function(e,t){e.success||o.push(a[t])}));var l=o.length?"There was an error submitting ".concat(o.length," of ").concat(r.length," schools. The below schools were not added."):null;return l?Object(ee.jsxs)(ye,{children:[Object(ee.jsx)(Be.a,{size:100,color:"red",style:{margin:"auto"}}),Object(ee.jsx)(se.CalciteH3,{children:"Error"}),Object(ee.jsx)(se.CalciteP,{children:l}),Object(ee.jsx)(Ee,{schools:o,schoolField:c.schoolNameFieldEsri})]}):Object(ee.jsxs)(ye,{style:{alignItems:"center"},children:[Object(ee.jsx)(ke.a,{size:100,color:"green",style:{margin:"auto"}}),Object(ee.jsx)(se.CalciteH3,{children:"Success! All ".concat(r.length," schools updated.")})]})},Ue=function(e){var t=e.account,n=e.appConfig,c=e.attemptLogout,l=o.a.useState(!1),s=Object(j.a)(l,2),u=s[0],d=s[1],f=o.a.useState(null),b=Object(j.a)(f,2),g=b[0],O=b[1],m=Object(i.useState)([]),v=Object(j.a)(m,2),w=v[0],y=v[1],S=Object(i.useState)([]),k=Object(j.a)(S,2),C=k[0],B=k[1],L=Object(i.useState)(1),_=Object(j.a)(L,2),D=_[0],E=_[1],F=Object(i.useState)(null),U=Object(j.a)(F,2),A=U[0],P=U[1],R=Object(i.useMemo)((function(){return new h.a(t)}),[t]);Object(i.useEffect)((function(){var e=function(){var e=Object(r.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(p.a)({authentication:R,url:n.featureServiceURL});case 3:(t=e.sent)&&t.fields&&B(t.fields.filter((function(e){return w[0].hasOwnProperty(e.alias)}))),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0),O("Error Saving Data. (Fields)");case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();w.length&&e()}),[w,R,n]);var T=function(){var e=Object(r.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),e.next=3,x({rows:w,fields:C,userSession:R,featureLayerUrl:n.featureServiceURL});case 3:t=e.sent,P(t),E(D+1),d(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(ee.jsx)(ae.Provider,{value:{loading:u,setLoading:d,error:g,setError:O,data:w,setData:y,config:n},children:Object(ee.jsxs)("div",{children:[Object(ee.jsx)(te,{account:t,attemptLogout:c}),Object(ee.jsxs)(je,{children:[Object(ee.jsx)(be,{children:Object(ee.jsxs)(W.a,{currentStep:D,children:[Object(ee.jsxs)(J.Step,{children:[Object(ee.jsx)(J.StepTitle,{children:"Download"}),Object(ee.jsx)(J.StepDescription,{children:"Download the Excel template to report school data."})]}),Object(ee.jsxs)(J.Step,{error:g&&2===D,children:[Object(ee.jsx)(J.StepTitle,{children:"Upload"}),Object(ee.jsx)(J.StepDescription,{children:g&&1===D?g:"Upload the excel template populated with your schools information."})]}),Object(ee.jsxs)(J.Step,{children:[Object(ee.jsx)(J.StepTitle,{children:"Summary"}),Object(ee.jsx)(J.StepDescription,{children:"Summary of your submitted school data."})]})]})}),Object(ee.jsxs)(pe,{children:[u&&Object(ee.jsx)(G.a,{sizeRatio:2,style:{position:"absolute",top:"30%",left:"50%"}},"uploadLoader"),1===D&&Object(ee.jsx)(we,{fileUrl:n.templateUrl}),2===D&&Object(ee.jsx)(de,{}),3===D&&Object(ee.jsx)(Fe,{results:A})]}),Object(ee.jsx)(xe,{children:Object(ee.jsxs)("div",{children:[2===D?Object(ee.jsx)(H.a,{clear:!0,onClick:function(){E(D-1)},style:{marginRight:".5rem"},children:"Previous"}):"",Object(ee.jsx)(H.a,{disabled:2===D&&(!w||!w.length),onClick:function(){1===D?E(D+1):2===D?T():(y([]),E(1))},children:["Next","Submit","Restart"][D-1]})]})})]})]})})},Ae=n.p+"static/media/splashBackground.5204fcdc.jpg",Pe=K.default.div(T||(T=Object(q.a)(["\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background: url(",") center/cover\n    no-repeat;\n"])),(function(e){return e.error?"":Ae})),Re=Object(K.default)(he.a)(I||(I=Object(q.a)(["\n  width: 350px;\n"]))),Te=K.default.div(z||(z=Object(q.a)(["\n  text-align: center;\n"]))),Ie=K.default.img(M||(M=Object(q.a)(["\n  width: 177px;\n"]))),ze=Object(K.default)(H.a)(N||(N=Object(q.a)(["\n  margin-top: 1rem;\n  background-color: #1b449d;\n"]))),Me=function(e){var t=e.attemptLogin;return Object(ee.jsx)(Pe,{children:Object(ee.jsx)(Re,{open:!0,appElement:document.body,overlayStyle:{background:"unset"},children:Object(ee.jsxs)(Te,{children:[Object(ee.jsx)(Ie,{src:"https://california.maps.arcgis.com/sharing/rest/content/items/eabecb26ec754b849c44175495e31e66/data",alt:"App Logo"}),Object(ee.jsx)(se.CalciteP,{children:"Login to upload school data."}),Object(ee.jsx)(ze,{fullWidth:!0,onClick:t,children:"Proceed to Login"})]})})})},Ne=function(e){var t=e.config,n=Object(u.a)(Object(u.a)({},t.authInfo),{redirectUri:window.location.href}),c=Object(d.useAccountManager)(n),a=c.accountManagerState,r=c.addAccount,i=c.logoutAccount,o=a.active,l=a.accounts;return console.log(a),o&&l[o]&&l[o].session?Object(ee.jsx)(Ue,{appConfig:t,account:l[o],userSession:new h.a(l[o].session),attemptLogout:function(){i(l[o])}}):Object(ee.jsx)(Me,{attemptLogin:function(){r(n)}})},Ve=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,263)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))},He=(n(256),n(18)),Ye=n.n(He),Ge=He.CalciteTheme;Ge.palette.Brand_Blue_200="#1f2574",Ge.palette.blue="#1f2574",Ge.palette.lightBlue="#5258A7",Ge.palette.darkBlue="#5258A7",console.log(Ge),function(){var e=Object(r.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t={featureServiceURL:"https://services3.arcgis.com/uknczv4rpevve42E/ArcGIS/rest/services/TrailerBillDistricts/FeatureServer/0",templateUrl:"https://california.maps.arcgis.com/sharing/rest/content/items/2d458e6ee04b494a9747271ad8ffcc08/data",isValidField:"IsValid",isValidValue:"Valid",schoolNameFieldEsri:"school_name",schoolNameFieldExcel:"School",authInfo:{clientId:"KZryzIWRkPmHUGlJ",portalUrl:"https://california-hub.maps.arcgis.com/sharing",popup:!1}},s.a.render(Object(ee.jsx)(o.a.StrictMode,{children:Object(ee.jsx)(Ye.a,{children:Object(ee.jsx)(Ne,{config:t})})}),document.getElementById("root"));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),Ve()}},[[257,1,2]]]);
//# sourceMappingURL=main.0750d8a5.chunk.js.map