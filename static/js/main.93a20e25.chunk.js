(this["webpackJsonpreact-registration-form"]=this["webpackJsonpreact-registration-form"]||[]).push([[0],{71:function(e,t,a){"use strict";a.r(t);var s=a(0),i=a.n(s),n=a(11),c=a.n(n),r=a(28),l=a(29),o=a(33),d=a(32),m=a(122),g=a(111),h=a(126),u=a(72),j=a(127),p=a(123),b=a(113),f=a(125),N=a(114),S=a(124),O=a(115),x=a(108),y=Object(x.a)((function(e){return{root:{"& .MuiFormControl-root":{width:"90%",margin:e.spacing(1)}},centerCon:{textAlign:"center",justify:"center",justifyContent:"center",display:"flex"},formStyle:{padding:20,width:340,justifyContent:"center",textAlign:"center",justify:"center"},paperStyle:{padding:20,width:1300},formStyle3:{padding:20},avatarBackground:{marginInline:"45%"},table:{minWidth:650},checkBox:{width:50,height:20},delButton:{background:"red",padding:8,marginRight:5},editButton:{padding:8,background:"#fccd02"}}})),k=a(5),v=function(e){var t=y();return Object(k.jsx)("div",{children:Object(k.jsx)("form",{className:t.root,children:Object(k.jsxs)(g.a,{elevation:10,className:t.formStyle,children:[Object(k.jsx)(h.a,{className:t.avatarBackground}),Object(k.jsx)(u.a,{variant:"h4",style:{fontWeight:"bold"},children:"Sign up"}),Object(k.jsxs)(j.a,{children:[Object(k.jsx)(p.a,{style:{marginTop:20},className:"fn",name:"firstName",variant:"outlined",label:"First Name",placeholder:"Enter First name",value:e.firstName,onChange:e.setFirstName}),Object(k.jsx)(p.a,{name:"lastName",variant:"outlined",label:"Last Name",placeholder:"Enter Last name",value:e.lastName,onChange:e.setLastName}),Object(k.jsx)(p.a,{name:"email",type:"email",variant:"outlined",label:"Email",placeholder:"123@gmail.com",value:e.email,onChange:e.setEmail}),Object(k.jsx)("input",{type:"file",name:"uploadImg",id:"uploadImg",onChange:e.encodeImageFileAsURL}),Object(k.jsx)(b.a,{style:{marginTop:15},children:"Choose Gender"}),Object(k.jsxs)(f.a,{row:!0,name:"gender",value:e.gender,onChange:e.setGender,style:{justifyContent:"center"},children:[Object(k.jsx)(N.a,{value:"male",control:Object(k.jsx)(S.a,{}),label:"Male"}),Object(k.jsx)(N.a,{value:"female",control:Object(k.jsx)(S.a,{}),label:"Female"}),Object(k.jsx)(N.a,{value:"other",control:Object(k.jsx)(S.a,{}),label:"Other"})]}),Object(k.jsx)(O.a,{variant:"contained",color:"primary",onMouseDown:e.setId,onClick:function(t){e.submitFun(t),e.updateLocalStorageState()},children:"Submit"})]})]})})})},L=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(e){return Object(k.jsx)(v,{id:this.props.id,firstName:this.props.firstName,lastName:this.props.lastName,email:this.props.email,gender:this.props.gender,setFirstName:this.props.setFirstName,setLastName:this.props.setLastName,setEmail:this.props.setEmail,setGender:this.props.setGender,encodeImageFileAsURL:this.props.encodeImageFileAsURL,submitFun:this.props.submitFun,updateLocalStorageState:this.props.updateLocalStorageState,setId:this.props.setId})}}]),a}(s.Component),C=a(117),I=a(121),B=a(120),E=a(116),F=a(118),D=a(119),R=function(e){var t=y(),a=[],s=localStorage.getItem("Data Entry");return a=null==s?[]:JSON.parse(s),Object(k.jsxs)("div",{children:[Object(k.jsx)(E.a,{component:g.a,style:{marginRight:"20px",marginBottom:"40px"},children:Object(k.jsxs)(C.a,{className:t.table,"aria-label":"simple table",children:[Object(k.jsx)(F.a,{style:{background:"lightgrey"},children:Object(k.jsxs)(D.a,{children:[Object(k.jsx)(B.a,{children:Object(k.jsx)("input",{type:"checkbox",className:t.checkBox,id:"checkBox",onClick:e.toggle})}),Object(k.jsx)(B.a,{children:"Id"}),Object(k.jsx)(B.a,{align:"right",children:"First Name"}),Object(k.jsx)(B.a,{align:"right",children:"Last Name"}),Object(k.jsx)(B.a,{align:"right",children:"Gender"}),Object(k.jsx)(B.a,{align:"right",children:"Email"}),Object(k.jsx)(B.a,{align:"right",children:"Images"})]})}),Object(k.jsx)(I.a,{children:a.map((function(a){return Object(k.jsxs)(D.a,{id:a.id,children:[Object(k.jsx)(B.a,{component:"td",scope:"row",children:Object(k.jsx)("input",{type:"checkbox",id:a.id,className:t.checkBox,value:a.id,onClick:e.setChecked})}),Object(k.jsx)(B.a,{style:{color:"blue"},component:"th",scope:"row",id:"id".concat(a.id),children:a.id}),Object(k.jsx)(B.a,{style:{color:"blue"},align:"right",id:"fn".concat(a.id),children:a.firstName}),Object(k.jsxs)(B.a,{style:{color:"blue"},align:"right",id:"ln".concat(a.id),children:[a.lastName," "]}),Object(k.jsx)(B.a,{style:{color:"blue"},align:"right",id:"g".concat(a.id),children:a.gender}),Object(k.jsx)(B.a,{style:{color:"blue"},align:"right",id:"e".concat(a.id),children:a.email}),Object(k.jsx)(B.a,{align:"right",children:Object(k.jsx)("img",{id:"img".concat(a.id),src:a.imageURL,alt:"profile pic of ".concat(a.firstName),style:{width:60}})})]},a.id)}))})]})}),Object(k.jsx)(O.a,{className:t.delButton,onClick:e.deleteBtn,children:"Delete"}),Object(k.jsx)(O.a,{className:t.editButton,onClick:e.editBtn,children:"Edit"})]})},U=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"toggleBtn",value:function(){var e=document.getElementById("checkBox");document.querySelectorAll("input[type=checkbox]").forEach((function(t){!0===e.checked?(t.setAttribute("checked","checked"),e.removeAttribute("checked")):(t.removeAttribute("checked"),e.setAttribute("checked","checked"))}))}},{key:"render",value:function(e){return Object(k.jsx)(R,{images:this.props.images,toggle:this.toggleBtn,editBtn:this.props.editBtn,setChecked:this.props.setChecked,deleteBtn:this.props.deleteBtn})}}]),a}(i.a.Component),A=function(e){var t=y();return Object(k.jsx)("div",{children:Object(k.jsx)(m.a,{container:!0,className:t.centerCon,children:Object(k.jsxs)(g.a,{elevation:10,className:t.paperStyle,children:[Object(k.jsx)(m.a,{item:!0,className:t.centerCon,children:Object(k.jsx)(L,{id:e.id,firstName:e.firstName,lastName:e.lastName,email:e.email,gender:e.gender,setFirstName:e.setFirstName,setLastName:e.setLastName,setEmail:e.setEmail,setGender:e.setGender,encodeImageFileAsURL:e.encodeImageFileAsURL,submitFun:e.submitFun,setId:e.setId,setLocaleStorage:e.setLocaleStorage,updateLocalStorageState:e.updateLocalStorageState})}),Object(k.jsx)(m.a,{align:"center",item:!0,style:{margin:20},children:Object(k.jsx)(g.a,{elevation:10,className:t.formStyle3,children:Object(k.jsx)(U,{updateLocalStorageState:e.updateLocalStorageState,setId:e.setId,editBtn:e.editBtn,setChecked:e.setChecked,deleteBtn:e.deleteBtn})})})]})})})},w=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(r.a)(this,a);for(var s=arguments.length,i=new Array(s),n=0;n<s;n++)i[n]=arguments[n];return(e=t.call.apply(t,[this].concat(i))).state={id:0,firstName:"",lastName:"",email:"",gender:"",imageURL:"",localeStorageData:[],isChecked:[],edit:!1},e.setChecked=function(t){var a=t.target.id,s=[];t.target.checked?((s=e.state.isChecked).push(a),e.setState({isChecked:s})):((s=e.state.isChecked).forEach((function(e,t){e===a&&s.splice(t,1)})),e.setState({isChecked:s}))},e.deleteBtn=function(t){var a=[],s=document.getElementById("checkBox"),i=localStorage.getItem("Data Entry");if(a=null==i?[]:JSON.parse(i),!0===s.checked)localStorage.clear(),e.setId();else{for(var n=e.state.isChecked,c=0;c<a.length;c++)for(var r=0;r<n.length;r++)Number(n[r])===Number(a[c].id)&&a.splice(c,1);0===a.length?localStorage.clear():localStorage.setItem("Data Entry",JSON.stringify(a))}s.checked=!1,e.updateLocalStorageState()},e.editBtn=function(){if(1===e.state.isChecked.length){var t=document.getElementById("fn".concat(e.state.isChecked[0])),a=document.getElementById("ln".concat(e.state.isChecked[0])),s=document.getElementById("e".concat(e.state.isChecked[0])),i=document.getElementById("g".concat(e.state.isChecked[0])),n=document.getElementById("img".concat(e.state.isChecked[0]));e.setState({firstName:t.innerText,lastName:a.innerText,email:s.innerText,gender:i.innerText,imageURL:n.src});var c=JSON.parse(localStorage.getItem("Data Entry"));c.forEach((function(t,a){Number(t.id)===Number(e.state.isChecked[0])&&e.setState({edit:!0})})),localStorage.setItem("Data Entry",JSON.stringify(c))}},e.updateLocalStorageState=function(){var t=[],a=localStorage.getItem("Data Entry");null==a?t=[]:t.push(JSON.parse(a)),e.setState({localeStorageData:t})},e.setFirstName=function(t){e.setState({firstName:t.target.value})},e.setLastName=function(t){e.setState({lastName:t.target.value})},e.setEmail=function(t){e.setState({email:t.target.value})},e.setGender=function(t){e.setState({gender:t.target.value})},e.setId=function(){if(null==localStorage.getItem("Data Entry"))e.setState({id:0});else{var t=e.state.id+1;e.setState({id:t})}},e.encodeImageFileAsURL=function(t){var a=t.target.files[0],s=new FileReader;s.onloadend=function(){e.setState({imageURL:s.result})},s.readAsDataURL(a)},e.updateLocalStorage=function(){var t=[],a={id:e.state.id,firstName:e.state.firstName,lastName:e.state.lastName,email:e.state.email,gender:e.state.gender,imageURL:e.state.imageURL},s=localStorage.getItem("Data Entry");(t=null==s?[]:JSON.parse(s)).push(a),localStorage.setItem("Data Entry",JSON.stringify(t)),e.updateLocalStorageState()},e.submitFun=function(t){if(t.preventDefault(),!0===e.state.edit){var a={id:e.state.id,firstName:e.state.firstName,lastName:e.state.lastName,email:e.state.email,gender:e.state.gender,imageURL:e.state.imageURL},s=JSON.parse(localStorage.getItem("Data Entry"));s.forEach((function(t,i){Number(t.id)===Number(e.state.isChecked[0])&&(s.splice(i,1,a),e.setState({edit:!1,isChecked:[]}))})),localStorage.setItem("Data Entry",JSON.stringify(s))}else e.updateLocalStorage();e.setState({firstName:"",lastName:"",email:"",gender:"",imageURL:""})},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.updateLocalStorageState();var e=null,t=[],a=localStorage.getItem("Data Entry");null!=a&&(e=(t=JSON.parse(a))[t.length-1].id,this.setState({id:e}))}},{key:"render",value:function(){return Object(k.jsx)(A,{id:this.state.id,firstName:this.state.firstName,lastName:this.state.lastName,email:this.state.email,gender:this.state.gender,setFirstName:this.setFirstName,setLastName:this.setLastName,setEmail:this.setEmail,setGender:this.setGender,encodeImageFileAsURL:this.encodeImageFileAsURL,submitFun:this.submitFun,setId:this.setId,localeStorageData:this.state.localeStorageData,updateLocalStorageState:this.updateLocalStorageState,editBtn:this.editBtn,setChecked:this.setChecked,deleteBtn:this.deleteBtn})}}]),a}(s.Component);c.a.render(Object(k.jsx)(w,{}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.93a20e25.chunk.js.map