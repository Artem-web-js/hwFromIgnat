(this["webpackJsonpsimple-hw"]=this["webpackJsonpsimple-hw"]||[]).push([[0],{16:function(e,t,n){e.exports={open:"HW5_open__Gzj8T",links:"HW5_links__o1IsD",link:"HW5_link__ZRoBZ",activeLink:"HW5_activeLink__2jhMz",showMenu:"HW5_showMenu__13W1_"}},21:function(e,t,n){e.exports={container:"HW6_container__2yaQs",text:"HW6_text__3yDG_",inputSpan:"HW6_inputSpan__3gUSx",buttonBlock:"HW6_buttonBlock__3zWEy"}},22:function(e,t,n){e.exports={message:"Message_message__OSpNo",usersAvatar:"Message_usersAvatar__12VIK",messageContent:"Message_messageContent__1nCI7",context:"Message_context__3W_ID",userName:"Message_userName__22EQ5",time:"Message_time__8VYob"}},26:function(e,t,n){e.exports={wrapper:"Clock_wrapper__288zS",clock:"Clock_clock__2n3hX",button:"Clock_button__31lv6"}},33:function(e,t,n){e.exports={someClass:"Greeting_someClass__D9pVp",error:"Greeting_error__3nmeT",errorText:"Greeting_errorText__2uFSt",button:"Greeting_button__5-Uc5"}},39:function(e,t,n){e.exports={blue:"HW4_blue__3FhQl",column:"HW4_column__3mv_k",text:"HW4_text__Ui0wK"}},41:function(e,t,n){e.exports={App:"App_App__2vWL0",text:"App_text__2fd6q"}},42:function(e,t,n){e.exports={superInput:"SuperInputText_superInput__1dEjY",errorInput:"SuperInputText_errorInput__2rpwV",error:"SuperInputText_error__3nUxo"}},43:function(e,t,n){e.exports={default:"SuperButton_default__1jXqp",red:"SuperButton_red__1LzYZ"}},44:function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__3YcM5",spanClassName:"SuperCheckbox_spanClassName__1oC1e"}},47:function(e,t,n){e.exports={dark:"HW12_dark__ORxwq","dark-text":"HW12_dark-text__2Y3mF",red:"HW12_red__2Px5q","red-text":"HW12_red-text__13cdc",some:"HW12_some__4z7m6","some-text":"HW12_some-text__3-zOe"}},51:function(e,t,n){e.exports={errorBlock:"Error404_errorBlock__3khzr"}},52:function(e,t,n){e.exports={someClass:"Affairs_someClass__3VAFL"}},57:function(e,t,n){e.exports={range:"SuperRange_range__1BmpP"}},66:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),r=n.n(a),s=n(23),o=n.n(s),i=(n(66),n(41)),j=n.n(i),l=n(3),u=n(20),b=n(16),d=n.n(b),O=n(51),h=n.n(O);var x=function(){return Object(c.jsxs)("div",{className:h.a.errorBlock,children:[Object(c.jsx)("div",{children:"Error 404"}),Object(c.jsx)("div",{children:"Page not found!"}),Object(c.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})},m=n(22),p=n.n(m);var v=function(e){return Object(c.jsxs)("div",{className:p.a.message,children:[Object(c.jsx)("div",{className:p.a.usersAvatar,children:Object(c.jsx)("img",{src:e.avatar,alt:"avatar"})}),Object(c.jsxs)("div",{className:p.a.messageContent,children:[Object(c.jsxs)("div",{className:p.a.context,children:[Object(c.jsx)("div",{className:p.a.userName,children:e.name}),Object(c.jsx)("div",{children:e.message})]}),Object(c.jsx)("div",{className:p.a.time,children:e.time})]})]})},f="https://api.time.com/wp-content/uploads/2019/08/better-smartphone-photos.jpg",_="Artem Kozin",g="I've done fist HW",k="22:00";var C=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("hr",{}),"homeworks 1",Object(c.jsx)(v,{avatar:f,name:_,message:g,time:k}),Object(c.jsx)("hr",{}),Object(c.jsx)("hr",{})]})};var N=function(e){return Object(c.jsxs)("div",{children:[e.affair.name,Object(c.jsx)("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})]})};var y=function(e){var t=e.data.map((function(t){return Object(c.jsx)(N,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(c.jsxs)("div",{children:[t,Object(c.jsx)("button",{onClick:function(){e.setFilter("all")},children:"All"}),Object(c.jsx)("button",{onClick:function(){e.setFilter("high")},children:"High"}),Object(c.jsx)("button",{onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(c.jsx)("button",{onClick:function(){e.setFilter("low")},children:"Low"})]})},w=n(52),S=n.n(w),H=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var T=function(){var e=Object(a.useState)(H),t=Object(l.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)("all"),o=Object(l.a)(s,2),i=o[0],j=o[1],u=function(e,t){return"high"===t?e.filter((function(e){return"high"===e.priority})):"middle"===t?e.filter((function(e){return"middle"===e.priority})):"low"===t?e.filter((function(e){return"low"===e.priority})):e}(n,i);return Object(c.jsxs)("div",{className:S.a.someClass,children:[Object(c.jsx)("h3",{children:"Homeworks 2"}),Object(c.jsx)(y,{data:u,setFilter:j,deleteAffairCallback:function(e){return r(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))}})]})},W=n(32),A=n(33),E=n.n(A),I=function(e){var t=e.name,n=e.setNameCallback,a=e.addUser,r=e.error,s=e.totalUsers,o=r?E.a.error:"";return Object(c.jsxs)("div",{children:[Object(c.jsx)("input",{value:t,onChange:n,className:"".concat(o," ").concat(E.a.someClass)}),Object(c.jsx)("span",{className:E.a.errorText,children:r}),Object(c.jsx)("button",{onClick:a,className:E.a.button,children:"Add"}),Object(c.jsx)("span",{children:s})]})},M=function(e){var t=e.users,n=e.addUserCallback,r=Object(a.useState)(""),s=Object(l.a)(r,2),o=s[0],i=s[1],j=Object(a.useState)(null),u=Object(l.a)(j,2),b=u[0],d=u[1],O=t.length;return Object(c.jsx)(I,{name:o,setNameCallback:function(e){i(e.currentTarget.value),d(null)},addUser:function(){""!==o.trim()?(n(o),alert("Hello ".concat(o,"!")),i("")):d("error")},error:b,totalUsers:O})},F=n(88);var L=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],r=t[1];return Object(c.jsxs)("div",{children:[Object(c.jsx)("hr",{}),Object(c.jsx)("h3",{children:"Homeworks 3"}),Object(c.jsx)(M,{users:n,addUserCallback:function(e){r([{_id:Object(F.a)(),name:e}].concat(Object(W.a)(n)))}}),Object(c.jsx)("hr",{}),Object(c.jsx)("hr",{})]})},B=n(4),D=n(9),G=n(42),z=n.n(G),P=function(e){e.type;var t=e.onChange,n=e.onChangeText,a=e.onKeyPress,r=e.onEnter,s=e.error,o=e.className,i=e.spanClassName,j=Object(D.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),l="".concat(z.a.error," ").concat(i||""),u="".concat(s?z.a.errorInput:o);return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("input",Object(B.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){a&&a(e),"Enter"===e.key&&r&&r()},className:u},j)),s&&Object(c.jsx)("span",{className:l,children:s})]})},U=n(39),J=n.n(U),R=n(43),V=n.n(R),K=function(e){var t=e.red,n=e.className,a=Object(D.a)(e,["red","className"]),r="".concat(t?V.a.red:V.a.default," ").concat(n);return Object(c.jsx)("button",Object(B.a)({className:r},a))},Y=n(44),q=n.n(Y),Q=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,a=e.className,r=(e.spanClassName,e.children),s=Object(D.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),o="".concat(q.a.checkbox," ").concat(a||"");return Object(c.jsxs)("label",{children:[Object(c.jsx)("input",Object(B.a)({type:"checkbox",onChange:function(e){n&&n(e.currentTarget.checked),t&&t(e)},className:o},s)),r&&Object(c.jsx)("span",{className:q.a.spanClassName,children:r})]})};var X=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],r=t[1],s=n?"":"error",o=function(){s?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):(alert(n),r(""))},i=Object(a.useState)(!1),j=Object(l.a)(i,2),u=j[0],b=j[1];return Object(c.jsxs)("div",{className:J.a.text,children:[Object(c.jsx)("hr",{}),"homeworks 4",Object(c.jsxs)("div",{className:J.a.column,children:[Object(c.jsx)(P,{value:n,onChangeText:r,onEnter:o,error:s,className:J.a.blue}),Object(c.jsx)(K,{onClick:o,children:"delete "}),Object(c.jsx)(Q,{checked:u,onChangeChecked:b,children:"some text "}),Object(c.jsx)(Q,{checked:u,onChange:function(e){return b(e.currentTarget.checked)}})]}),Object(c.jsx)("hr",{}),Object(c.jsx)("hr",{})]})},Z=n(21),$=n.n(Z),ee=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,r=e.spanProps,s=Object(D.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),o=Object(a.useState)(!1),i=Object(l.a)(o,2),j=i[0],u=i[1],b=r||{},d=b.children,O=b.onDoubleClick,h=b.className,x=Object(D.a)(b,["children","onDoubleClick","className"]),m="".concat($.a.inputSpan," ").concat(h);return Object(c.jsx)(c.Fragment,{children:j?Object(c.jsx)(P,Object(B.a)({autoFocus:!0,onBlur:function(e){u(!1),t&&t(e)},onEnter:function(){u(!0),n&&n()}},s)):Object(c.jsx)("span",Object(B.a)(Object(B.a)({onDoubleClick:function(e){u(!0),O&&O(e)},className:m},x),{},{children:d||s.value}))})};function te(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}function ne(e,t){var n=localStorage.getItem(e);return null!==n&&(t=JSON.parse(n)),t}te("test",{x:"A",y:1});ne("test",{x:"",y:0});var ce=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],r=t[1];return Object(c.jsxs)("div",{className:$.a.container,children:[Object(c.jsx)("hr",{}),Object(c.jsx)("div",{className:$.a.text,children:"homeworks 6"}),Object(c.jsx)("div",{children:Object(c.jsx)(ee,{value:n,onChangeText:r,className:$.a.inputSpan,spanProps:{children:n?void 0:"enter text..."}})}),Object(c.jsxs)("div",{className:$.a.buttonBlock,children:[Object(c.jsx)(K,{onClick:function(){te("editable-span-value",n),r("")},children:"save"}),Object(c.jsx)(K,{onClick:function(){r(ne("editable-span-value",n))},children:"restore"})]}),Object(c.jsx)("hr",{}),Object(c.jsx)("hr",{})]})};var ae=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)(C,{}),Object(c.jsx)(T,{}),Object(c.jsx)(L,{}),Object(c.jsx)(X,{}),Object(c.jsx)(ce,{})]})},re=n(5),se=n(18),oe={loading:!1},ie=function(e){return{type:"LOADING-TOGGLE",loading:e}},je=n(85);var le=function(){var e=Object(se.c)((function(e){return e.loading.loading})),t=Object(se.b)();return Object(c.jsxs)("div",{children:[Object(c.jsx)("hr",{}),Object(c.jsx)("h3",{style:{textAlign:"center"},children:"homeworks 10"}),Object(c.jsx)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:e?Object(c.jsx)(je.a,{color:"secondary",style:{display:"block"}}):Object(c.jsx)("div",{children:Object(c.jsx)(K,{onClick:function(){t(ie(!0)),setTimeout((function(){t(ie(!1))}),2e3),console.log("loading...")},children:"set loading..."})})}),Object(c.jsx)("hr",{}),Object(c.jsx)("hr",{})]})},ue=n(57),be=n.n(ue),de=function(e){e.type;var t=e.onChange,n=e.onChangeRange,a=e.className,r=Object(D.a)(e,["type","onChange","onChangeRange","className"]),s="".concat(be.a.range," ").concat(a||"");return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("input",Object(B.a)({type:"range",onChange:function(e){t&&t(e),n&&n(+e.currentTarget.value)},className:s},r))})},Oe=n(87),he=function(e){var t=e.value,n=e.handlerValue;return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(Oe.a,{value:t,onChange:function(e,t){n(t)},valueLabelDisplay:"auto","aria-labelledby":"range-slider",style:{width:"200px"}})})};var xe=function(){var e=Object(a.useState)(0),t=Object(l.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)(100),o=Object(l.a)(s,2),i=o[0],j=o[1];return Object(c.jsxs)("div",{children:[Object(c.jsx)("hr",{}),"homeworks 11",Object(c.jsxs)("div",{children:[Object(c.jsx)("span",{children:n}),Object(c.jsx)(de,{value:n,onChangeRange:r})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("span",{children:n}),Object(c.jsx)(he,{value:[n,i],handlerValue:function(e){r(e[0]),j(e[1])}}),Object(c.jsx)("span",{children:i})]}),Object(c.jsx)("hr",{}),Object(c.jsx)("hr",{})]})},me=function(e){var t=e.options,n=e.onChange,a=e.onChangeOption,r=Object(D.a)(e,["options","onChange","onChangeOption"]),s=null===t||void 0===t?void 0:t.map((function(e,t){return Object(c.jsx)("option",{children:e},"o -"+t)}));return Object(c.jsx)("select",Object(B.a)(Object(B.a)({onChange:function(e){n&&n(e),a&&a(e.currentTarget.value)}},r),{},{children:s}))},pe=function(e){e.type;var t=e.name,n=e.options,a=e.value,r=e.onChange,s=e.onChangeOption,o=Object(D.a)(e,["type","name","options","value","onChange","onChangeOption"]),i=function(e){r&&r(e),s&&s(e.currentTarget.value)},j=n?n.map((function(e,n){return Object(c.jsxs)("label",{children:[Object(c.jsx)("input",Object(B.a)({type:"radio",name:t,value:e,onChange:i,checked:a===e},o)),e]},t+"-"+n)})):[];return Object(c.jsx)(c.Fragment,{children:j})},ve=["x","y","z"];var fe=function(){var e=Object(a.useState)(ve[1]),t=Object(l.a)(e,2),n=t[0],r=t[1];return Object(c.jsxs)("div",{children:[Object(c.jsx)("hr",{}),"homeworks 7",Object(c.jsx)("div",{children:Object(c.jsx)(me,{options:ve,value:n,onChangeOption:r})}),Object(c.jsx)("div",{children:Object(c.jsx)(pe,{name:"radio",options:ve,value:n,onChangeOption:r})}),Object(c.jsx)("hr",{}),Object(c.jsx)("hr",{})]})},_e=[],ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"sort":return"up"===t.payload?Object(W.a)(e).sort((function(e,t){return e.name<t.name?-1:e.name>t.name?1:0})):"down"===t.payload?Object(W.a)(e).sort((function(e,t){return e.name<t.name?1:e.name>t.name?-1:0})):e;case"check":return e.filter((function(e){return e.age>t.payload}));default:return e}},ke=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55},{_id:6,name:"\u0410\u0440\u0442\u0435\u043c",age:24}];var Ce=function(){var e=Object(a.useState)(ke),t=Object(l.a)(e,2),n=t[0],r=t[1],s=n.map((function(e){return Object(c.jsx)("div",{children:"name: ".concat(e.name,", age: ").concat(e.age)},e._id)}));return Object(c.jsxs)("div",{children:[Object(c.jsx)("hr",{}),"homeworks 8",s,Object(c.jsx)("div",{children:Object(c.jsx)(K,{onClick:function(){return r(ge(ke,{type:"sort",payload:"up"}))},children:"sort up"})}),Object(c.jsx)("div",{children:Object(c.jsx)(K,{onClick:function(){return r(ge(ke,{type:"sort",payload:"down"}))},children:"sort down"})}),Object(c.jsx)("div",{children:Object(c.jsx)(K,{onClick:function(){return r(ge(ke,{type:"check",payload:18}))},children:"check 18"})}),Object(c.jsx)("hr",{}),Object(c.jsx)("hr",{})]})},Ne=n(26),ye=n.n(Ne);var we=function(){var e=Object(a.useState)(0),t=Object(l.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)(new Date),o=Object(l.a)(s,2),i=o[0],j=o[1],u=Object(a.useState)(!1),b=Object(l.a)(u,2),d=b[0],O=b[1],h=function(){clearInterval(n)},x=function(e){return e<10?"0"+e:e},m="Time: ".concat(x(i.getHours())," \n    : ").concat(x(i.getMinutes())," \n    : ").concat(x(null===i||void 0===i?void 0:i.getSeconds())),p="Date: ".concat(["\u042f\u043d\u0432\u0430\u0440\u044c","\u0424\u0435\u0432\u0440\u0430\u043b\u044c","\u041c\u0430\u0440\u0442","\u0410\u043f\u0440\u0435\u043b\u044c","\u041c\u0430\u0439","\u0418\u044e\u043d\u044c","\u0418\u044e\u043b\u044c","\u0410\u0432\u0433\u0443\u0441\u0442","\u0421\u0435\u043d\u0442\u044f\u0431\u0440\u044c","\u041d\u043e\u044f\u0431\u0440\u044c","\u0414\u0435\u043a\u0430\u0431\u0440\u044c"][i.getMonth()]," ").concat(i.getDate());return Object(c.jsxs)("div",{className:ye.a.wrapper,children:[Object(c.jsx)("div",{onMouseEnter:function(){O(!0)},onMouseLeave:function(){O(!1)},className:ye.a.clock,children:m}),d&&Object(c.jsx)("div",{className:ye.a.clock,children:p}),Object(c.jsxs)("div",{children:[Object(c.jsx)(K,{onClick:function(){h();var e=window.setInterval((function(){j(new Date)}),1e3);r(e)},className:ye.a.button,children:"start"}),Object(c.jsx)(K,{onClick:h,className:ye.a.button,children:"stop"})]})]})};var Se=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("hr",{}),Object(c.jsx)("h3",{style:{textAlign:"center"},children:"homeworks 9"}),Object(c.jsx)(we,{}),Object(c.jsx)("hr",{}),Object(c.jsx)("hr",{})]})};var He=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)(fe,{}),Object(c.jsx)(Ce,{}),Object(c.jsx)(Se,{}),Object(c.jsx)(le,{}),Object(c.jsx)(xe,{})]})},Te=n(47),We=n.n(Te),Ae={theme:"dark"},Ee=["dark","red","some"];var Ie=function(){var e=Object(se.c)((function(e){return e.theme.theme})),t=Object(se.b)();return Object(c.jsxs)("div",{className:We.a[e],children:[Object(c.jsx)("hr",{}),Object(c.jsx)("span",{className:We.a[e+"-text"],children:"homeworks 12"}),Object(c.jsx)(pe,{options:Ee,value:e,onChangeOption:function(e){t(function(e){return{type:"CHANGE-THEME",theme:e}}(e))}}),Object(c.jsx)("hr",{})]})};var Me=function(){return Object(c.jsx)("div",{children:Object(c.jsx)(Ie,{})})},Fe="/pre-junior",Le="/junior",Be="/junior-plus";var De=function(){return Object(c.jsx)("div",{children:Object(c.jsxs)(re.d,{children:[Object(c.jsx)(re.b,{path:"/",exact:!0,render:function(){return Object(c.jsx)(re.a,{to:Fe})}}),Object(c.jsx)(re.b,{path:Fe,exact:!0,render:function(){return Object(c.jsx)(ae,{})}}),"// add routes",Object(c.jsx)(re.b,{path:Le,exact:!0,render:function(){return Object(c.jsx)(He,{})}}),Object(c.jsx)(re.b,{path:Be,exact:!0,render:function(){return Object(c.jsx)(Me,{})}}),Object(c.jsx)(re.b,{render:function(){return Object(c.jsx)(x,{})}})]})})};var Ge=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),n=t[0],r=t[1];return Object(c.jsxs)("div",{onMouseLeave:function(){r(!1)},children:[Object(c.jsx)("button",{className:d.a.showMenu,onClick:function(){r(!n)},children:"Menu"}),n&&Object(c.jsxs)("div",{className:n?d.a.open:d.a.links,onClick:function(){return r(!1)},children:[Object(c.jsx)(u.b,{to:Fe,className:d.a.link,activeClassName:d.a.activeLink,children:"PreJunior"}),Object(c.jsx)(u.b,{to:Le,className:d.a.link,activeClassName:d.a.activeLink,children:"Junior"}),Object(c.jsx)(u.b,{to:Be,className:d.a.link,activeClassName:d.a.activeLink,children:"Junior+"})]})]})};var ze=function(){return Object(c.jsx)("div",{children:Object(c.jsxs)(u.a,{children:[Object(c.jsx)(Ge,{}),Object(c.jsx)(De,{})]})})};var Pe=function(){return Object(c.jsxs)("div",{className:j.a.App,children:[Object(c.jsx)("div",{className:j.a.text,children:"react homeworks:"}),Object(c.jsx)(ze,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ue=n(29),Je=Object(Ue.b)({loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOADING-TOGGLE":return Object(B.a)(Object(B.a)({},e),{},{loading:t.loading});default:return e}},theme:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE-THEME":return Object(B.a)(Object(B.a)({},e),{},{theme:t.theme});default:return e}}}),Re=Object(Ue.c)(Je),Ve=Re;window.store=Re,o.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(se.a,{store:Ve,children:Object(c.jsx)(Pe,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[72,1,2]]]);
//# sourceMappingURL=main.6c4a5461.chunk.js.map