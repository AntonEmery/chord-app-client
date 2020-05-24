(this["webpackJsonpchord-app"]=this["webpackJsonpchord-app"]||[]).push([[0],{31:function(e,t,a){e.exports=a(60)},36:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(26),s=a.n(i),o=(a(36),a(1)),c=a(2),l=a(4),h=a(3),u=a(5),d=a(7),m=a(11),p=a(13),b=a(12),f=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(h.a)(t).call(this,e))).handleChange=function(e){a.setState(Object(p.a)({},e.target.name,e.target.value))},a.handleLoginSubmit=function(e){e.preventDefault();var t="".concat("http://api.chordapp.com/","login/");b({method:"post",url:t,data:{email:a.state.email,password:a.state.password},mode:"cors",headers:{"Content-Type":"application/json"},withCredentials:!0,referrer:"no-referrer"}).then((function(e){"success"===e.data.response&&a.props.history.push("/chordsheets")})).catch((function(e){return console.log("Error",e)}))},a.state={email:"",password:""},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"card card__login"},r.a.createElement("h1",null,"Log into Chord App"),"or ",r.a.createElement(d.b,{to:"/register"},"Create Account"),r.a.createElement("form",{className:"login"},r.a.createElement("div",{className:"card__input-item"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{name:"email",type:"text",placeholder:"Email",value:this.state.email,onChange:this.handleChange})),r.a.createElement("div",{className:"card__input-item"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{name:"password",type:"password",placeholder:"Password",value:this.state.password,onChange:this.handleChange})),r.a.createElement("button",{type:"submit",onClick:this.handleLoginSubmit,className:"button button--grey button--med"},"Log In")),r.a.createElement(d.b,{to:"/reset-password"},"Forgot Password?"))}}]),t}(n.Component),g=a(12),v=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(h.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault(),g.post("".concat("http://api.chordapp.com/","/register"),{name:a.state.name,email:a.state.email,passoword:a.state.password,confirmedPassword:a.state.confirmedPassword}).then((function(e){return console.log(e.data)})).catch((function(e){return console.log(e)}))},a.handleChange=function(e){var t=Object.values(a.state).some((function(e){return 0===e.length}));console.log(t),a.setState(Object(p.a)({},e.target.name,e.target.value))},a.state={name:"",email:"",password:"",confirmedPassword:""},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=Object.values(this.state).some((function(e){return 0===e.length}));return r.a.createElement("div",{className:"card card__register"},r.a.createElement("h1",null,"Create an Account"),r.a.createElement("form",{className:"register"},r.a.createElement("div",{className:"card__input-item"},r.a.createElement("label",{htmlFor:"name"},"Name"),r.a.createElement("input",{name:"name",onChange:this.handleChange,type:"text",placeholder:"Username"})),r.a.createElement("div",{className:"card__input-item"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{name:"email",onChange:this.handleChange,type:"text",placeholder:"Email"})),r.a.createElement("div",{className:"card__input-item"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{name:"password",onChange:this.handleChange,type:"password",placeholder:"Password"})),r.a.createElement("div",{className:"card__input-item"},r.a.createElement("label",{htmlFor:"confirmedPassword"},"Confirm Password"),r.a.createElement("input",{name:"confirmedPassword",onChange:this.handleChange,type:"password",placeholder:"Confirm Password"})),r.a.createElement("button",{type:"submit",onClick:this.handleSubmit,disabled:e,className:"button button--grey button--med"},"Create Account")))}}]),t}(n.Component),y=a(12),E=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(h.a)(t).call(this,e))).handleChange=function(e){a.setState({email:e.target.value})},a.handleResetPassword=function(e){e.preventDefault(),y({method:"post",url:"".concat("http://api.chordapp.com/","requestReset/"),headers:{"Content-Type":"application/json"},mode:"cors",withCredentials:!0,referrer:"no-referrer",data:{email:a.state.email}}).then((function(e){if("valid email"!==e.data)throw new Error("invalid_email");a.setState({isValidEmail:!0})})).catch((function(e){console.log("invalid email",e)}))},a.state={email:""},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return!0===this.state.isValidEmail?r.a.createElement("p",null,"A reset email has been sent!"):r.a.createElement("div",{className:"card card__login"},r.a.createElement("h1",null,"Reset Your Password"),r.a.createElement("p",null,"A reset link will be sent to your email"),r.a.createElement("form",{className:"reset"},r.a.createElement("div",{className:"card__input-item"},r.a.createElement("label",{htmlFor:"email"},"Email address"),r.a.createElement("input",{name:"email",value:this.state.email,onChange:this.handleChange,type:"text",placeholder:"Email"})),r.a.createElement("button",{type:"submit",onClick:this.handleResetPassword,className:"button button--grey button--med"},"Reset")))}}]),t}(n.Component),O=a(12),j=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(h.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault();var t=a.props.location.pathname.split("/")[2];O.post("http://localhost:8080/resetPassword",{password:a.state.password,confirmedPassword:a.state.confirmedPassword,token:t}).then((function(e){return console.log(e.data)}))},a.handleChange=function(e){return a.setState(Object(p.a)({},e.target.name,e.target.value))},a.state={verified:"loading",password:"",confirmedPassword:""},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this,t={token:this.props.location.pathname.split("/")[2]};O({method:"post",url:"".concat("http://api.chordapp.com/","verifyToken"),headers:{"Content-Type":"application/json"},mode:"cors",data:t}).then((function(t){var a=t.data;"valid reset"===a&&e.setState({verified:"verified"}),"invalid reset"===a&&e.setState({verified:"not verified"})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return"verified"===this.state.verified?r.a.createElement("div",{className:"card card__login"},r.a.createElement("h1",null,"Reset Your Password"),r.a.createElement("p",null,"Please choose a new password"),r.a.createElement("form",{className:"reset"},r.a.createElement("div",{className:"card__input-item"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{name:"password",type:"text",placeholder:"Password",onChange:this.handleChange,value:this.state.password}),r.a.createElement("input",{name:"confirmedPassword",type:"text",placeholder:"Password",onChange:this.handleChange,value:this.state.confirmedPassword})),r.a.createElement("button",{type:"submit",onClick:this.handleSubmit,className:"button button--grey button--med"},"Reset Password"))):"not verified"===this.state.verified?r.a.createElement("p",null,"Invalid login link"):"loading"===this.state.verified?r.a.createElement("p",null,"Verifying Link"):void 0}}]),t}(n.Component),C=a(29),w=a(12),k=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(h.a)(t).call(this,e))).deleteChordSheet=function(e){w({method:"delete",withCredentials:!0,mode:"cors",headers:{"Content-Type":"application/json"},data:{id:e.target.dataset.sheet}}).then((function(e){"sheet deleted"===e.response&&a.setState((function(t,n){return{chordSheets:Object(C.a)(a.state.chordSheets).filter((function(t){return t._id!==e.id}))}}))}))},a.createChordSheet=function(){w({url:"http://localhost:8080/createChordSheet/",method:"get",withCredentials:!0,mode:"cors"}).then((function(e){a.setState({redirect:!0,id:e.id})}))},a.state={chordSheets:[],redirect:!1,id:""},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;w({url:"http://localhost:8080/getChordSheets",method:"get",withCredentials:!0,mode:"cors"}).then((function(t){return e.setState({chordSheets:t})}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.redirect,i=t.id,s=this.state.chordSheets.map((function(t,a){return r.a.createElement("div",{key:a},r.a.createElement("p",null,r.a.createElement(d.b,{to:{pathname:"/chordsheet/"+t._id}},t.title)),r.a.createElement("button",{"data-sheet":t._id,onClick:e.deleteChordSheet},"Delete"))}));return a?r.a.createElement(m.a,{to:{pathname:"/chordsheet/".concat(i)}}):r.a.createElement(n.Fragment,null,r.a.createElement("button",{onClick:this.createChordSheet},"New Sheet"),r.a.createElement("div",null,r.a.createElement("p",null,"Chord Sheets"),s))}}]),t}(n.Component),S=function(){function e(){Object(o.a)(this,e)}return Object(c.a)(e,null,[{key:"fillArrayWithNumbers",value:function(e){return Array.apply(null,Array(e)).map((function(e,t){return t}))}}]),e}(),N=a(6),_=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(h.a)(t).call(this,e))).circleSpacing=20,Object.assign(Object(N.a)(a),{x:20+a.circleSpacing*e.string,y:40+a.circleSpacing*e.fret}),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("circle",{cx:this.x,cy:this.y,r:8,onClick:this.props.onClick,className:this.props.isVisible?"visible":"invisible",fill:"black"})}}]),t}(n.Component),x=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(h.a)(t).call(this,e))).stringSpacing=20,Object.assign(Object(N.a)(a),{x1:20+a.stringSpacing*e.string,y1:20}),Object.assign(Object(N.a)(a),{x2:20+a.stringSpacing*e.string,y2:140}),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("line",{x1:this.x1,y1:this.y1,x2:this.x2,y2:this.y2,strokeWidth:2,stroke:"black"})}}]),t}(n.Component),A=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(h.a)(t).call(this,e))).fretSpacing=20,Object.assign(Object(N.a)(a),{x1:19,y1:20+a.fretSpacing*e.fret}),Object.assign(Object(N.a)(a),{x2:121,y2:20+a.fretSpacing*e.fret}),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("line",{x1:this.x1,y1:this.y1,x2:this.x2,y2:this.y2,strokeWidth:2,stroke:"black"})}}]),t}(n.Component),P=function(e){function t(e){var a;return Object(o.a)(this,t),a=Object(l.a)(this,Object(h.a)(t).call(this,e)),Object.assign(Object(N.a)(a),{x:20+20*e.string,y:10}),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("circle",{cx:this.x,cy:this.y,r:8,fill:"none",onClick:this.props.onClick,className:this.props.isVisible?"visible":"invisible",stroke:"black",strokeWidth:4})}}]),t}(n.Component),F=function(e){function t(e){var a;return Object(o.a)(this,t),a=Object(l.a)(this,Object(h.a)(t).call(this,e)),Object.assign(Object(N.a)(a),{x1:12+20*e.string,y1:18}),Object.assign(Object(N.a)(a),{x2:28+20*e.string,y2:2}),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"stringPath",value:function(){return"\n      M".concat(this.x1," ").concat(this.y1," L").concat(this.x2," ").concat(this.y2," M").concat(this.x2," ").concat(this.y1," L").concat(this.x1," ").concat(this.y2,"\n    ")}},{key:"render",value:function(){return r.a.createElement("path",{d:this.stringPath(),strokeWidth:2,stroke:"black",onClick:this.props.onClick,className:this.props.isVisible?"visible":"invisible"})}}]),t}(n.Component),V=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={editable:!1},a.setName=function(e){a.props.setName(e.target.value,a.props.id),a.setState({editable:!a.state.editable})},a.handleKeyDown=function(e){"Enter"===e.key&&a.setName(e)},a.toggleState=function(){a.setState({editable:!a.state.editable})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"ifEmpty",value:function(e){return e.length<=0?"...":e}},{key:"render",value:function(){return r.a.createElement(n.Fragment,null,this.state.editable?r.a.createElement("input",{type:"text",placeholder:"test",autoFocus:!0,onKeyDown:this.handleKeyDown,onBlur:this.setName}):r.a.createElement("p",{className:"chords__name",onClick:this.toggleState},this.ifEmpty(this.props.name)))}}]),t}(n.Component),D=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(h.a)(t).call(this,e))).chordName=function(e,t){a.props.updateChordName(e,t)},a.id=a.props.id,a.numOfFrets=7,a.numOfStrings=6,a.numOfFretsAsArray=S.fillArrayWithNumbers(a.numOfFrets),a.numOfStringsAsArray=S.fillArrayWithNumbers(a.numOfStrings),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"drawStrings",value:function(){return this.numOfStringsAsArray.slice(0).map((function(e){return r.a.createElement(x,{key:e,string:e})}))}},{key:"drawFrets",value:function(){return this.numOfFretsAsArray.slice(0).map((function(e){return r.a.createElement(A,{key:e,fret:e})}))}},{key:"drawDots",value:function(){var e=this;return this.numOfStringsAsArray.slice(0).map((function(t){return e.numOfStringsAsArray.slice(0).map((function(a){return r.a.createElement(_,{isVisible:e.props.state[t]===a,onClick:e.props.toggleVisibility.bind(null,e.id,t,a),string:t,fret:a})}))}))}},{key:"openStringSymbols",value:function(){var e=this;return this.numOfStringsAsArray.slice(0).map((function(t){return r.a.createElement(P,{key:t,isVisible:-1===e.props.state[t],string:t,onClick:e.props.toggleVisibility.bind(null,e.id,t,-1)})}))}},{key:"mutedStringSymbols",value:function(){var e=this;return this.numOfStringsAsArray.slice(0).map((function(t){return r.a.createElement(F,{key:t,isVisible:-2===e.props.state[t],string:t,onClick:e.props.toggleVisibility.bind(null,e.id,t,-2)})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"chords__template"},r.a.createElement(V,{name:this.props.state.name,setName:this.chordName,id:this.props.id}),r.a.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:140,height:160},this.drawStrings(),r.a.createElement("line",{x1:19,y1:20,x2:121,y2:20,strokeWidth:4,stroke:"black"}),this.drawFrets(),this.drawDots(),this.openStringSymbols(),this.mutedStringSymbols()),r.a.createElement("button",{className:"button button--x-small button-delete",onClick:this.props.deleteChord.bind(null,this.id)},"Delete"))}}]),t}(n.Component),W=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"menu-bar"},r.a.createElement("button",{onClick:this.props.saveChordSheet},"Save Sheet"),r.a.createElement("button",{onClick:this.props.addChord},"Add Chord"),r.a.createElement(d.b,{to:"/chordsheets"},r.a.createElement("button",null,"View All Sheets")))}}]),t}(n.Component),T=a(12),L=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(h.a)(t).call(this,e))).toggleVisibility=function(e,t,n){var r=a.state.chords.slice();r[e][t]=n,a.setState({chords:r})},a.addChord=function(){a.setState((function(e,t){var a={0:void 0,1:void 0,2:void 0,3:void 0,4:void 0,5:void 0,name:"Chord Name"},n=e.chords.slice();return n.push(a),{chords:n}}))},a.updateChordName=function(e,t){a.setState((function(a,n){var r=a.chords.slice();return r[t].name=e,{chords:r}}))},a.updateSheetTitle=function(e){a.setState({title:e})},a.deleteChord=function(e){a.setState((function(t,n){var r=a.state.chords.slice();return r.splice(e,1),{chords:r}}))},a.saveChordSheet=function(){var e=a.props.match.params.id;T({method:"post",url:"http://localhost:8080/saveChordSheet/".concat(e),withCredentials:!0,mode:"cors",headers:{"Content-Type":"application/json"},body:{data:a.state}}).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))},a.numOfFrets=7,a.numOfStrings=6,a.numOfFretsAsArray=S.fillArrayWithNumbers(a.numOfFrets),a.numOfStringsAsArray=S.fillArrayWithNumbers(a.numOfStrings),a.state={title:"untitled",chords:[{0:void 0,1:void 0,2:void 0,3:void 0,4:void 0,5:void 0,name:"Chord Name"}]},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;T({method:"get",url:"http://localhost:8080/getChordSheet/".concat(t),withCredentials:!0}).then((function(t){var a=t.chords.map((function(e){return e[0]}));e.setState({title:t.title,chords:a})}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"chord-sheet-wrapper"},r.a.createElement(W,{saveChordSheet:this.saveChordSheet,addChord:this.addChord}),r.a.createElement("span",null,"Chord Sheet Title"),r.a.createElement(V,{setName:this.updateSheetTitle,className:"chords__title",name:this.state.title,id:this.props.id}),r.a.createElement("div",{className:"chords__container"},this.state.chords.map((function(t,a){return r.a.createElement(D,{updateChordName:e.updateChordName,key:a,id:a,state:t,toggleVisibility:e.toggleVisibility,deleteChord:e.deleteChord})}))))}}]),t}(n.Component),R=a(30),M=a(12),I=new(function(){function e(){Object(o.a)(this,e),this.getCookie=function(){return document.cookie.indexOf("connect.sid=")>=0}}return Object(c.a)(e,[{key:"logout",value:function(e){M({url:"http://localhost:8080/logout",withCredentials:!0,mode:"cors"}),e()}}]),e}()),K=function(e){var t=e.component,a=Object(R.a)(e,["component"]);return r.a.createElement(m.b,Object.assign({},a,{render:function(e){return I.getCookie()?r.a.createElement(t,e):r.a.createElement(m.a,{to:"/"})}}))},B=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("nav",{className:"nav"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(d.b,{className:"nav__item",to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(d.b,{className:"nav__item",to:"/chordsheets/"},"My Chordsheets")),r.a.createElement("li",{className:"nav__item",onClick:function(){I.logout((function(){e.props.history.push("/")}))}},"Logout")))}}]),t}(n.Component),J=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement(n.Fragment,null,r.a.createElement(Y,null),r.a.createElement(m.b,{path:"/register",component:v}),r.a.createElement(m.b,{path:"/reset-password",component:E}),r.a.createElement(m.b,{path:"/new-password",component:j}),r.a.createElement(q,null),r.a.createElement(H,null)))}}]),t}(n.Component),Y=function(){return r.a.createElement(n.Fragment,null,r.a.createElement(m.b,{exact:!0,path:"/",component:f}))},q=function(){return r.a.createElement(n.Fragment,null,r.a.createElement(K,{path:"/chordsheets",component:U}),r.a.createElement(K,{path:"/chordsheets",component:k}))},H=function(){return r.a.createElement(n.Fragment,null,r.a.createElement(K,{path:"/chordsheet/:id",component:U}),r.a.createElement(K,{path:"/chordsheet/:id",component:L}))},U=function(e){var t=e.history;return r.a.createElement("header",null,r.a.createElement(B,{history:t}))};s.a.render(r.a.createElement(J,null),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.b3f587ce.chunk.js.map