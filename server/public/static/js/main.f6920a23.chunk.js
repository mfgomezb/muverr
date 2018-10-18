(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{165:function(e,t,a){e.exports=a(400)},170:function(e,t,a){},172:function(e,t,a){},393:function(e,t){},400:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(26),o=a.n(c),i=(a(170),a(9)),s=a(16),l=a(18),u=a(17),m=a(19),d=(a(172),a(405)),h=a(404),p=a(38),f=a(401),g=a(50),v=a.n(g);a(77).config();var b=function e(){var t=this;Object(i.a)(this,e),this.signup=function(e,a,n,r,c,o,i,s){console.log(s);var l=new FormData;return l.append("username",e),l.append("password",a),l.append("email",n),l.append("country",r),l.append("city",c),l.append("street",o),l.append("area_code",i),l.append("photo",s),console.log(l.get("photo")),t.service.post("/signup",l,{headers:{"Content-Type":"multipart/form-data"}}).then(function(e){return e.data})},this.login=function(e,a){return t.service.post("/login",{username:e,password:a}).then(function(e){return e.data})},this.loggedin=function(){return t.service.get("/currentUser").then(function(e){return e.data})},this.logout=function(){return t.service.get("/logout").then(function(e){return e.data})},this.payment=function(e){return console.log(e),fetch("".concat("https://muverr.herokuapp.com","/api/auth/charge"),{method:"POST",headers:{"Content-Type":"text/plain"},body:e.id}).then(function(e){return e})},this.service=v.a.create({baseURL:"".concat("https://muverr.herokuapp.com","/api/auth"),withCredentials:!0})},E=a(23),y=a(94),S=a.n(y),O=a(51),I=a.n(O),C=a(20),j=a.n(C),k=a(72),w=a.n(k),P=a(95),x=a.n(P),N=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleLogout=function(e){a.props.logout()},a.state={loggedInUser:null},a.service=new b,a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState(Object(p.a)({},this.state,{loggedInUser:e.userInSession}))}},{key:"render",value:function(){var e=this,t=this.props.classes;return this.state.loggedInUser?r.a.createElement("div",{className:t.root},r.a.createElement(S.a,{position:"static"},r.a.createElement(I.a,null,r.a.createElement(w.a,{className:t.menuButton,color:"inherit","aria-label":"Menu"},r.a.createElement(x.a,null)),r.a.createElement(j.a,{color:"inherit"},r.a.createElement(f.a,{to:"/"},"Home")),r.a.createElement(j.a,{color:"inherit"},r.a.createElement(f.a,{to:"/transactions"},"Market")),r.a.createElement(j.a,{color:"inherit"},r.a.createElement(f.a,{to:"/sendmoney"},"Send Money")),r.a.createElement(j.a,{color:"inherit"},r.a.createElement(f.a,{to:"/profile"},"Profile")),r.a.createElement(j.a,{color:"inherit"},r.a.createElement(f.a,{to:"/",onClick:function(t){return e.handleLogout(t)}},"Logout"))))):r.a.createElement("div",null,r.a.createElement(S.a,{position:"static"},r.a.createElement(I.a,null,r.a.createElement(w.a,{className:t.menuButton,color:"inherit","aria-label":"Menu"},r.a.createElement(x.a,null)),r.a.createElement(j.a,{color:"inherit"},r.a.createElement(f.a,{to:"/signup"},"Signup")),r.a.createElement(j.a,{color:"inherit"},r.a.createElement(f.a,{to:"/login"},"Login")))))}}]),t}(n.Component),U=Object(E.withStyles)({root:{flexGrow:1},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20}})(N),T=(a(87),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.classes;return console.log(e),r.a.createElement("div",{className:"home-back"},r.a.createElement("div",{className:"send"},"Send money to your family"),r.a.createElement("div",{className:"receive"},"Protect your work and savings"))}}]),t}(n.Component)),_=a(31);a(77).config();var B=function e(){var t=this;Object(i.a)(this,e),this.getUser=function(e){return t.service.get("/profile/".concat(e)).then(function(e){return e.data})},this.editUser=function(e,a){var n=a.username,r=a.name,c=a.email,o=a.country,i=a.city,s=a.street,l=a.area_code;return t.service.patch("/".concat(e),{username:n,name:r,email:c,country:o,city:i,street:s,area_code:l}).then(function(e){return e.data})},this.addOperation=function(e,a){var n=a.operations;return t.service.post("/addOper/".concat(e),{operations:n}).then(function(e){return e.data})},this.service=v.a.create({baseURL:"".concat("https://muverr.herokuapp.com","/user"),withCredentials:!0})};a(77).config();var R=function e(){var t=this;Object(i.a)(this,e),this.openTransactions=function(){return t.service.get("/").then(function(e){return e.data})},this.createTransaction=function(e,a,n,r,c,o,i,s,l){return t.service.post("/createtransaction/",{seller:e,amount:a,rate:n,currency:r,bolivares:c,beneficiaryName:o,beneficiaryBank:i,beneficiaryNationalId:s,beneficiaryBankAccount:l}).then(function(e){return e.data})},this.getTransaction=function(e){return t.service.get("/transaction/".concat(e)).then(function(e){return e.data})},this.editTransaction=function(e,a){var n=a.buyer,r=a.classification;return t.service.patch("/transaction/".concat(e),{buyer:n,classification:r}).then(function(e){return e.data})},this.payTransaction=function(e,a){var n=a.classification;return console.log(n),t.service.patch("/transactionpaid/".concat(e),{classification:n}).then(function(e){return e.data})},this.confirmTransaction=function(e,a){var n=a.classification;return console.log(n),t.service.patch("/transactionconfirmed/".concat(e),{classification:n}).then(function(e){return e.data})},this.cancelBuyOrder=function(e){var a=e.buyerId,n=e.operId;return t.service.patch("/cancelbuyorder/",{buyerId:a,operId:n}).then(function(e){return e.data})},this.cancelSellOrder=function(e){var a=e.sellerId,n=e.operId;return t.service.patch("/cancelsellorder/",{sellerId:a,operId:n}).then(function(e){return e.data})},this.deleteTransaction=function(e){return t.service.delete("/".concat(e)).then(function(e){return e.data})},this.service=v.a.create({baseURL:"".concat("https://muverr.herokuapp.com","/api/transactions"),withCredentials:!0})},D=a(39),A=a.n(D),F=a(52),L=a.n(F),W=a(40),M=a.n(W),z=a(10),q=a.n(z),H=a(403),G=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).getUser=function(e){a.service.getUser(e).then(function(e){var t=e[0];a.setState({user:t})})},a.componentDidMount=function(){return a.getUser(a.props.userInSession._id)},a.componentWillReceiveProps=function(){return a.getUser(a.props.yserInSession_.id)},a.cancelBuyOrder=function(e,t){a.transactionService.cancelBuyOrder({buyerId:e,operId:t}).then(function(){a.getUser(a.props.userInSession._id)}).catch(function(e){return console.log(e)})},a.cancelSellOrder=function(e,t){a.transactionService.cancelSellOrder({sellerId:e,operId:t}).then(function(){a.getUser(a.props.userInSession._id)}).catch(function(e){return console.log(e)})},a.paymentRedirect=function(e){return console.log(e),r.a.createElement(H.a,{to:"/checkout/+".concat(e)})},a.confirmPayment=function(e){a.transactionService.confirmTransaction(e,{classification:"CONFIRMED"}).then(function(){a.getUser(a.props.userInSession._id)}).catch(function(e){return console.log(e)})},a.state={user:null},a.service=new B,a.transactionService=new R,a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=Object(_.a)({},this.state.user),a=this.props.classes,n=t.operations;null==this.state.user&&this.getUser(this.props.userInSession._id);var c=function(t,n){var c="";c="buy"===n?"buy":"sell";var o=t._id;return r.a.createElement("div",{className:"tx-card"},r.a.createElement(A.a,{className:"tx-card-style"},r.a.createElement(M.a,null,r.a.createElement(q.a,{className:a.title,color:"textSecondary",gutterBottom:!0},c),r.a.createElement(q.a,{variant:"h5",component:"h2"},"Seller: ",t.seller.name),r.a.createElement(q.a,{className:a.pos,color:"textSecondary"},"Rating: ..."),r.a.createElement(q.a,{component:"p"},"Amount: ",t.amount),r.a.createElement(q.a,{component:"p"},"Rate: ",t.rate),r.a.createElement(q.a,{component:"p"},"Bolivares: ",t.bolivares)),r.a.createElement(L.a,null,"OPEN"!==t.classification?r.a.createElement(j.a,{color:"primary",size:"medium"},r.a.createElement(f.a,{className:"link-style",to:"/transactionChat/"+o}," Chat ")):null,"buy"===c&&"IN PROCESS"===t.classification?r.a.createElement(j.a,{color:"primary",size:"medium"},r.a.createElement(f.a,{className:"link-style",to:"/checkout/"+o}," Pay ")):null,"sell"!==c&&"buy"!==c||"IN PROCESS"!==t.classification?null:r.a.createElement(j.a,{color:"primary",size:"medium",onClick:function(t){return e.cancelBuyOrder(e.props.userInSession._id,o)}},"Cancel Order"),"buy"===c&&"PAID"===t.classification?r.a.createElement(j.a,{color:"primary",size:"medium"},"Waiting for confirmation"):null,"sell"===c&&"PAID"===t.classification?r.a.createElement(j.a,{color:"primary",size:"medium",onClick:function(t){return e.confirmPayment(o)}},"Confirm Payment"):null,"sell"!==c&&"buy"!==c||"CONFIRMED"!==t.classification?null:r.a.createElement(j.a,{color:"primary",size:"medium",onClick:function(t){return e.ratePayment(t)}}," Rate "))))};return r.a.createElement("div",{className:"profile-container"},r.a.createElement("div",{className:"personal-details-container"},r.a.createElement(A.a,{className:"card-style"},r.a.createElement(M.a,null,r.a.createElement(q.a,{className:a.title,color:"textSecondary",gutterBottom:!0},t.name),r.a.createElement(q.a,{variant:"h5",component:"h2"},t.username),r.a.createElement(q.a,{className:a.pos,color:"textSecondary"},t.email),r.a.createElement(q.a,{component:"p"},t.country),r.a.createElement(q.a,{component:"p"},new Date(t.created_at).toDateString())),r.a.createElement(L.a,null,r.a.createElement(j.a,null,r.a.createElement(f.a,{to:"/user/edit/"},"Edit"))))),r.a.createElement("div",{className:"tx-details-holder"},n?n.map(function(t,a){return t.seller._id===e.props.userInSession._id?c(t,"sell"):c(t,"buy")}):r.a.createElement("p",null,"Loading...")))}}]),t}(n.Component),K=Object(E.withStyles)({title:{fontSize:14},pos:{marginBottom:12}})(G),V=a(5),J=a.n(V),X=a(25),$=a.n(X),Z=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleFormSubmit=function(e){var t=Object(_.a)({},a.state.user);e.preventDefault();var n=a.props.userInSession._id,r=t.username,c=t.name,o=t.email,i=t.country,s=t.city,l=t.street,u=t.area_code;a.service.editUser(n,{username:r,name:c,email:o,country:i,city:s,street:l,area_code:u}).then(function(e){console.log("Patch?",e)}).then(function(){a.setState({redirectToProfile:!0})}).catch(function(e){return console.log(e)})},a.getUser=function(e){a.service.getUser(e).then(function(e){var t=Object(p.a)({},a.state.user,e[0]);a.setState({user:t})})},a.componentDidMount=function(){return a.getUser(a.props.userInSession._id)},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value,c=Object(p.a)({},a.state.user);c[n]=r,a.setState({user:c})},a.state={redirectToProfile:!1,user:{username:"",password:"",email:"",country:"",city:"",street:"",area_code:""}},a.service=new B,a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes,a=Object(_.a)({},this.state.user);return this.state.redirectToProfile?r.a.createElement(H.a,{to:"/profile"}):r.a.createElement("div",null,r.a.createElement("form",{className:t.root,noValidate:!0,autoComplete:"off",onSubmit:this.handleFormSubmit},r.a.createElement($.a,{id:"outlined-simple-start-adornment",className:J()(t.margin,t.textField,t.inputLabelShrink),variant:"outlined",label:"Username",placeholder:a.username,name:"username",InputLabelProps:{shrink:!0},InputProps:{readOnly:!0}}),r.a.createElement($.a,{id:"outlined-simple-start-adornment",className:J()(t.margin,t.textField),variant:"outlined",label:"Name",name:"name",placeholder:a.name,onChange:function(t){return e.handleChange(t)},InputLabelProps:{shrink:!0}}),r.a.createElement($.a,{id:"outlined-simple-start-adornment",className:J()(t.margin,t.textField),variant:"outlined",label:"Email",name:"email",placeholder:a.email,onChange:function(t){return e.handleChange(t)},InputLabelProps:{shrink:!0}}),r.a.createElement($.a,{id:"outlined-simple-start-adornment",className:J()(t.margin,t.textField),variant:"outlined",label:"Country",name:"country",placeholder:a.country,onChange:function(t){return e.handleChange(t)},InputLabelProps:{shrink:!0}}),r.a.createElement($.a,{id:"outlined-simple-start-adornment",className:J()(t.margin,t.textField),variant:"outlined",label:"City",name:"city",placeholder:a.city,onChange:function(t){return e.handleChange(t)},InputLabelProps:{shrink:!0}}),r.a.createElement($.a,{id:"outlined-simple-start-adornment",className:J()(t.margin,t.textField),variant:"outlined",label:"Street",name:"street",placeholder:a.street,onChange:function(t){return e.handleChange(t)},InputLabelProps:{shrink:!0}}),r.a.createElement($.a,{id:"outlined-simple-start-adornment",className:J()(t.margin,t.textField),variant:"outlined",label:"Area Code",name:"area_code",type:"number",placeholder:a.area_code,onChange:function(t){return e.handleChange(t)},InputLabelProps:{shrink:!0}}),r.a.createElement("input",{type:"submit",value:"Edit Profile"})))}}]),t}(n.Component),Q=Object(E.withStyles)(function(e){return{root:{display:"flex",flexWrap:"wrap"},margin:{margin:e.spacing.unit},textField:{flexBasis:200},inputLabelShrink:{shrink:!0}}})(Z),Y=a(49),ee=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault();var t=a.state.username,n=a.state.password,r=a.state.email,c=a.state.country,o=a.state.city,i=a.state.street,s=a.state.area_code,l=a.state.photo;console.log(l),a.service.signup(t,n,r,c,o,i,s,l).then(function(e){a.setState({username:"",password:"",email:"",country:"",city:"",street:"",area_code:"",photo:""}),a.props.getUser(e.user)}).catch(function(e){return console.log(e)})},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;if("photo"===e.target.name){var c=e.target.files[0];a.setState({photo:c})}else a.setState(Object(Y.a)({},n,r))},a.state={username:"",password:"",email:"",country:"",city:"",street:"",area_code:"",photo:null},a.service=new b,a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h3",null,"Welcome!, create your account next:"),r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("fieldset",null,r.a.createElement("label",null,"Username:"),r.a.createElement("input",{type:"text",name:"username",value:this.state.username,onChange:function(t){return e.handleChange(t)}})),r.a.createElement("fieldset",null,r.a.createElement("label",null,"Password:"),r.a.createElement("input",{type:"password",name:"password",value:this.state.password,onChange:function(t){return e.handleChange(t)}})),r.a.createElement("fieldset",null,r.a.createElement("label",null,"email:"),r.a.createElement("input",{type:"text",name:"email",value:this.state.email,onChange:function(t){return e.handleChange(t)}})),r.a.createElement("fieldset",null,r.a.createElement("label",null,"Country:"),r.a.createElement("input",{type:"text",name:"country",onChange:function(t){return e.handleChange(t)}})),r.a.createElement("fieldset",null,r.a.createElement("label",null,"City:"),r.a.createElement("input",{type:"text",name:"city",onChange:function(t){return e.handleChange(t)}})),r.a.createElement("fieldset",null,r.a.createElement("label",null,"Street:"),r.a.createElement("input",{type:"text",name:"street",onChange:function(t){return e.handleChange(t)}})),r.a.createElement("fieldset",null,r.a.createElement("label",null,"Area code:"),r.a.createElement("input",{type:"text",name:"area_code",onChange:function(t){return e.handleChange(t)}})),r.a.createElement("fieldset",null,r.a.createElement("label",{className:"btn btn-primary"},r.a.createElement("input",{type:"file",name:"photo",className:"",placeholder:"Product Photo",onChange:function(t){return e.handleChange(t)}}))),r.a.createElement("input",{type:"submit",value:"Sign up"})))}}]),t}(n.Component),te=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault();var t=a.state.username,n=a.state.password;a.service.login(t,n).then(function(e){a.setState({username:t,password:n,error:!1}),a.props.getUser(e)}).catch(function(e){a.setState({username:t,password:n,error:!0})})},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(Y.a)({},n,r))},a.state={username:"",password:""},a.service=new b,a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h3",null,"Please, login to our site"),r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("fieldset",null,r.a.createElement("label",null,"Username:"),r.a.createElement("input",{type:"text",name:"username",value:this.state.username,onChange:function(t){return e.handleChange(t)}})),r.a.createElement("fieldset",null,r.a.createElement("label",null,"Password:"),r.a.createElement("input",{type:"password",name:"password",value:this.state.password,onChange:function(t){return e.handleChange(t)}})),r.a.createElement("input",{type:"submit",value:"Login"})),r.a.createElement("h1",null,this.state.error?"Error":""))}}]),t}(n.Component),ae=a(157),ne=a.n(ae),re=a(158),ce=a.n(re),oe=a(32),ie=a.n(oe),se=a(154),le=a.n(se),ue=a(159),me=a.n(ue),de=a(75),he=a.n(de),pe=a(156),fe=a.n(pe),ge=a(37),ve=a.n(ge),be=a(155),Ee=a.n(be),ye=a(36);function Se(e,t,a){return t[a]<e[a]?-1:t[a]>e[a]?1:0}var Oe=[{id:"details",numeric:!1,disablePadding:!1,label:"Details"},{id:"rate",numeric:!0,disablePadding:!1,label:"Rate"},{id:"amount",numeric:!0,disablePadding:!1,label:"Amount"},{id:"bolivares",numeric:!0,disablePadding:!1,label:"Bolivares"},{id:"created",numeric:!1,disablePadding:!1,label:"Created"},{id:"status",numeric:!1,disablePadding:!1,label:"Status"}],Ie=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).createSortHandler=function(e){return function(t){a.props.onRequestSort(t,e)}},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.order,n=t.orderBy;return r.a.createElement(le.a,null,r.a.createElement(he.a,null,Oe.map(function(t){return r.a.createElement(ie.a,{key:t.id,numeric:t.numeric,padding:t.disablePadding?"none":"default",sortDirection:n===t.id&&a},r.a.createElement(Ee.a,{title:"Sort",placement:t.numeric?"bottom-end":"bottom-start",enterDelay:300},r.a.createElement(fe.a,{active:n===t.id,direction:a,onClick:e.createSortHandler(t.id)},t.label)))},this)))}}]),t}(r.a.Component),Ce=function(e){var t=e.classes;return r.a.createElement(I.a,{className:J()(t.root)},r.a.createElement("div",{className:t.title},r.a.createElement(q.a,{variant:"h6",id:"tableTitle"},"Transactions")),r.a.createElement("div",{className:t.spacer}))};Ce=Object(E.withStyles)(function(e){return{root:{paddingRight:e.spacing.unit},highlight:"light"===e.palette.type?{color:e.palette.secondary.main,backgroundColor:Object(ye.lighten)(e.palette.secondary.light,.85)}:{color:e.palette.text.primary,backgroundColor:e.palette.secondary.dark},spacer:{flex:"1 1 100%"},actions:{color:e.palette.text.secondary},title:{flex:"0 0 auto"}}})(Ce);var je=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).handleRequestSort=function(t,a){var n=a,r="asc";e.state.orderBy===a&&"asc"===e.state.order&&(r="desc"),e.setState({order:r,orderBy:n})},e.handleSelectAllClick=function(t){t.target.checked?e.setState(function(e){return{selected:e.data.map(function(e){return e.id})}}):e.setState({selected:[]})},e.handleClick=function(t,a){var n=e.state.selected,r=n.indexOf(a),c=[];-1===r?c=c.concat(n,a):0===r?c=c.concat(n.slice(1)):r===n.length-1?c=c.concat(n.slice(0,-1)):r>0&&(c=c.concat(n.slice(0,r),n.slice(r+1))),e.setState({selected:c})},e.handleChangePage=function(t,a){e.setState({page:a})},e.handleChangeRowsPerPage=function(t){e.setState({rowsPerPage:t.target.value})},e.isSelected=function(t){return-1!==e.state.selected.indexOf(t)},e.state={order:"desc",orderBy:"rate",selected:[],data:[],page:0,rowsPerPage:10},e.service=new R,e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.service.openTransactions().then(function(t){t.error||e.setState({data:t})})}},{key:"render",value:function(){var e=this.props.classes,t=this.state,a=t.data,n=t.order,c=t.orderBy,o=t.selected,i=t.rowsPerPage,s=t.page,l=i-Math.min(i,a.length-s*i);return r.a.createElement(ve.a,{className:e.root},r.a.createElement(Ce,{numSelected:o.length}),r.a.createElement("div",{className:e.tableWrapper},r.a.createElement(ne.a,{className:e.table,"aria-labelledby":"tableTitle"},r.a.createElement(Ie,{numSelected:o.length,order:n,orderBy:c,onSelectAllClick:this.handleSelectAllClick,onRequestSort:this.handleRequestSort,rowCount:a.length}),r.a.createElement(ce.a,null,function(e,t){var a=e.map(function(e,t){return[e,t]});return a.sort(function(e,a){var n=t(e[0],a[0]);return 0!==n?n:e[1]-a[1]}),a.map(function(e){return e[0]})}(a,function(e,t){return"desc"===e?function(e,a){return Se(e,a,t)}:function(e,a){return-Se(e,a,t)}}(n,c)).slice(s*i,s*i+i).map(function(e){return r.a.createElement(he.a,{hover:!0,tabIndex:-1,key:e._id},r.a.createElement(ie.a,{component:"th",scope:"row",padding:"none"},r.a.createElement(f.a,{to:"/transaction/"+e._id}," GO ")),r.a.createElement(ie.a,{numeric:!0},e.amount),r.a.createElement(ie.a,{numeric:!0},e.rate),r.a.createElement(ie.a,{numeric:!0},e.bolivares),r.a.createElement(ie.a,null,e.created_at),r.a.createElement(ie.a,{string:!0},e.classification))}),l>0&&r.a.createElement(he.a,{style:{height:49*l}},r.a.createElement(ie.a,{colSpan:6}))))),r.a.createElement(me.a,{component:"div",count:a.length,rowsPerPage:i,page:s,backIconButtonProps:{"aria-label":"Previous Page"},nextIconButtonProps:{"aria-label":"Next Page"},onChangePage:this.handleChangePage,onChangeRowsPerPage:this.handleChangeRowsPerPage}))}}]),t}(r.a.Component),ke=Object(E.withStyles)(function(e){return{root:{width:"80%",marginTop:3*e.spacing.unit,padding:20},table:{minWidth:600},tableWrapper:{overflowX:"auto"}}})(je),we=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this))).getTransaction=function(e){a.service.getTransaction(e).then(function(e){a.setState({transaction:e})})},a.componentWillReceiveProps=function(e){return a.getTransaction(e.match.params.transactionId)},a.componentDidMount=function(){return a.getTransaction(a.match.params.transactionId)},a.changeStatusToInProcess=function(){var e=a.state.transaction._id,t=a.state.transaction._id,n=a.props.userInSession._id;a.service.editTransaction(e,{buyer:n,classification:"IN PROCESS"}).then(function(){a.UserService.addOperation(n,{operations:t})}).then(function(){a.setState({redirectToProfile:!0})}).catch(function(e){return console.log(e)})},a.state={redirectToProfile:!1,transaction:{}},a.match=e.match,a.props=e,a.service=new R,a.AuthService=new b,a.UserService=new B,a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;console.log(this.props);var t=this.props.classes;if(this.state.transaction._id){var a=Object(_.a)({},this.state.transaction);return this.state.redirectToProfile?r.a.createElement(H.a,{to:"/profile"}):r.a.createElement(A.a,{className:t.card},r.a.createElement(M.a,null,r.a.createElement(q.a,{className:t.title,color:"textSecondary",gutterBottom:!0},"Transaction Details"),r.a.createElement(q.a,{variant:"h5",component:"h2"},"Seller: ",a.seller.name),r.a.createElement(q.a,{className:t.pos,color:"textSecondary"},"Rating: ..."),r.a.createElement(q.a,{component:"p"},"Amount: ",a.amount),r.a.createElement(q.a,{component:"p"},"Rate: ",a.rate),r.a.createElement(q.a,{component:"p"},"Bolivares: ",a.bolivares),r.a.createElement(q.a,{component:"p"},"Classification: ",a.classification)),r.a.createElement(L.a,null,r.a.createElement(j.a,{size:"medium",onClick:function(t){return e.changeStatusToInProcess(t)}},"Buy")))}return r.a.createElement("div",null)}}]),t}(n.Component),Pe=Object(E.withStyles)({card:{minWidth:275,width:"20%"},title:{fontSize:14},pos:{marginBottom:12}})(we),xe=a(160),Ne=a.n(xe),Ue=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleFormSubmit=function(e){console.log("event submit");var t=Object(_.a)({},a.state.deal);e.preventDefault();var n=a.props.userInSession._id,r=parseInt(t.amount),c=parseInt(t.rate),o=t.currency,i=parseInt(t.bolivares),s=t.beneficiaryName,l=parseInt(t.beneficiaryBank),u=parseInt(t.beneficiaryNationalId),m=parseInt(t.beneficiaryBankAccount);a.service.createTransaction(n,r,c,o,i,s,l,u,m).then(function(e){console.log("Create",e)}).then(function(){a.setState({redirectToProfile:!0})}).catch(function(e){return console.log(e)})},a.capitalizeFirstLetter=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value,c=Object(p.a)({},a.state.deal);c[n]=r,a.setState({deal:c})},a.state={redirectToProfile:!1,deal:{amount:0,rate:0,currency:"EUR",bolivares:0,beneficiaryName:"",beneficiaryBank:0,beneficiaryNationalId:0,beneficiaryBankAccount:0}},a.service=new R,a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes;return this.state.redirectToProfile?r.a.createElement(H.a,{to:"/profile"}):r.a.createElement("div",null,r.a.createElement("form",{className:t.root,noValidate:!0,autoComplete:"off",onSubmit:this.handleFormSubmit},Ne.a.map(this.state.deal,function(a,n){return r.a.createElement($.a,{key:n,id:"outlined-simple-start-adornment",className:J()(t.margin,t.textField),variant:"outlined",label:e.capitalizeFirstLetter(n).replace(/([A-Z])/g," $1"),name:n,placeholder:a,onChange:function(t){return e.handleChange(t)},InputLabelProps:{shrink:!0}})}),r.a.createElement(j.a,{type:"submit",variant:"outlined",className:t.button},"Send Money")))}}]),t}(n.Component),Te=Object(E.withStyles)(function(e){return{root:{display:"flex",flexWrap:"wrap"},margin:{margin:e.spacing.unit},textField:{flexBasis:200},inputLabelShrink:{shrink:!0},button:{margin:e.spacing.unit},input:{display:"none"}}})(Ue),_e=a(53),Be=a(96),Re=a.n(Be),De=a(161),Ae=a(59),Fe=a(54),Le=a.n(Fe),We=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).getTransaction=function(e){a.txservice.getTransaction(e).then(function(e){a.setState({transaction:e})})},a.componentDidMount=function(){return a.getTransaction(a.props.txId)},a.changeStatusToInPaid=function(){var e=a.state.transaction._id;a.txservice.payTransaction(e,{classification:"PAID"}).then(function(){a.setState({redirectToProfile:!0})}).catch(function(e){return console.log(e)})},a.state={complete:!1,transaction:{}},a.submit=a.submit.bind(Object(Ae.a)(Object(Ae.a)(a))),a.service=new b,a.txservice=new R,a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"submit",value:function(){var e=Object(De.a)(Re.a.mark(function e(t){var a,n,r=this;return Re.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.stripe.createToken({name:"Name"});case 2:return a=e.sent,n=a.token,e.next=6,this.service.payment(n).then(function(e){e.ok&&r.setState({complete:!0})}).then(function(){r.state.complete&&r.changeStatusToInPaid()}).catch(function(e){return console.log(e)});case 6:e.sent;case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props.classes;if(this.state.complete)return r.a.createElement("h1",null,"Purchase Complete");if(this.state.transaction._id){var t=Object(_.a)({},this.state.transaction);return r.a.createElement("div",{className:"checkout"},r.a.createElement(A.a,{className:e.card},r.a.createElement(M.a,null,r.a.createElement(q.a,{className:e.title,color:"textSecondary",gutterBottom:!0},"Transaction Details"),r.a.createElement(q.a,{variant:"h5",component:"h2"},"Seller: ",t.seller.name),r.a.createElement(q.a,{className:e.pos,color:"textSecondary"},"Rating: ..."),r.a.createElement(q.a,{component:"p"},"Amount: ",t.amount),r.a.createElement(q.a,{component:"p"},"Rate: ",t.rate),r.a.createElement(q.a,{component:"p"},"Bolivares: ",t.bolivares))),r.a.createElement(q.a,{variant:"h6",gutterBottom:!0},"Please enter your payment details"),r.a.createElement(Le.a,{container:!0,spacing:24},r.a.createElement(Le.a,{item:!0,xs:12,md:6},r.a.createElement($.a,{required:!0,id:"cardName",label:"Name on card",fullWidth:!0})),r.a.createElement(Le.a,{item:!0,xs:12,md:6},r.a.createElement($.a,{required:!0,id:"billingAdress",label:"Billing Address",fullWidth:!0})),r.a.createElement(Le.a,{item:!0,xs:12,md:6},r.a.createElement(_e.CardElement,{fullWidth:!0})),r.a.createElement(Le.a,{item:!0,xs:12})),r.a.createElement("button",{onClick:this.submit},"Complete payment"))}return""}}]),t}(n.Component),Me=Object(_e.injectStripe)(Object(E.withStyles)({card:{minWidth:275,width:"20%"},title:{fontSize:14},pos:{marginBottom:12}})(We)),ze=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={txId:a.props.match.params.transactionId},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(_e.StripeProvider,{apiKey:"pk_test_TkH6C0gc5rbqXpV8KrqnM68E"},r.a.createElement("div",{className:"example"},r.a.createElement("h1",null,"Checkout"),r.a.createElement(_e.Elements,null,r.a.createElement(Me,{txId:this.state.txId}))))}}]),t}(n.Component),qe=a(97),He=a(162),Ge=a.n(He),Ke=a(163),Ve=a.n(Ke),Je=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={messages:[],input:"",color:"default",onDelete:"none",avatar:"icon",icon:"none",variant:"default"},a.match=e.match,a.props=e,a.room=a.match.params.transactionId,a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.socket=Ge()("".concat("https://muverr.herokuapp.com")),this.socket.emit("subscribe",this.room),this.socket.on("output",function(t){e.setState({messages:t.conversation})}),this.socket.on("conversation private post",function(t){console.log(t),e.receiveMessage(t)})}},{key:"receiveMessage",value:function(e){this.setState({input:"",messages:Object(qe.a)(this.state.messages).concat([e])})}},{key:"submitChat",value:function(){var e=this.state.input;this.setState({input:"",messages:Object(qe.a)(this.state.messages).concat([{message:e,room:this.room,timestamp:Date.now(),userId:this.props.userInSession._id}])}),console.log(this.state.messages),this.socket.emit("send message",{message:e,room:this.room,timestamp:Date.now(),userId:this.props.userInSession._id})}},{key:"render",value:function(){var e=this,t=this.state,a=t.messages,n=t.input;return r.a.createElement("div",{className:"chat-holder"},r.a.createElement(ve.a,{className:"chat-window"},r.a.createElement("div",{className:"msg"},a.map(function(t,a){return r.a.createElement("div",{className:t.userId===e.props.userInSession._id?"msg me":"msg server",key:a},r.a.createElement(Ve.a,{label:t.message,color:t.userId===e.props.userInSession._id?"primary":"default",avatar:e.state.avatarToPlayground,icon:e.state.iconToPlayground,variant:e.state.variant}))}))),r.a.createElement($.a,{id:"standard-bare",className:"textField",fullWidth:!0,placeholder:"Type your message here",value:n,margin:"normal",onChange:function(t){return e.setState({input:t.currentTarget.value})},onKeyDown:function(t){return 13==t.keyCode?e.submitChat():null}}))}}]),t}(r.a.Component),Xe=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).getTheUser=function(e){a.setState({loggedInUser:e})},a.logout=function(){a.service.logout().then(function(){a.setState({loggedInUser:null})})},a.state={loggedInUser:null},a.service=new b,a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"fetchUser",value:function(){var e=this;null===this.state.loggedInUser&&this.service.loggedin().then(function(t){e.setState({loggedInUser:t})}).catch(function(t){e.setState({loggedInUser:!1})})}},{key:"render",value:function(){var e=this;return this.fetchUser(),this.state.loggedInUser?r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(U,{userInSession:this.state.loggedInUser,logout:this.logout}),r.a.createElement(d.a,{exact:!0,path:"/",logout:this.logout,render:function(){return r.a.createElement(T,{userInSession:e.state.loggedInUser})}}),r.a.createElement(d.a,{exact:!0,path:"/Profile",logout:this.logout,render:function(){return r.a.createElement(K,{userInSession:e.state.loggedInUser})}}),r.a.createElement(d.a,{exact:!0,path:"/user/edit",logout:this.logout,render:function(){return r.a.createElement(Q,{userInSession:e.state.loggedInUser})}}),r.a.createElement(d.a,{exact:!0,path:"/transactions",render:function(){return r.a.createElement(ke,{userInSession:e.state.loggedInUser})}}),r.a.createElement(d.a,{exact:!0,path:"/sendmoney",render:function(){return r.a.createElement(Te,{userInSession:e.state.loggedInUser})}}),r.a.createElement(d.a,{path:"/transaction/:transactionId",component:function(t){var a=t.match;return r.a.createElement(Pe,{match:a,userInSession:e.state.loggedInUser})}}),r.a.createElement(d.a,{path:"/checkout/:transactionId",component:function(t){var a=t.match;return r.a.createElement(ze,{match:a,userInSession:e.state.loggedInUser})}}),r.a.createElement(d.a,{path:"/transactionChat/:transactionId",component:function(t){var a=t.match;return r.a.createElement(Je,{match:a,userInSession:e.state.loggedInUser})}}))):r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(U,{userInSession:this.state.loggedInUser,logout:this.logout}),r.a.createElement(h.a,null,r.a.createElement(d.a,{exact:!0,path:"/signup",render:function(){return r.a.createElement(ee,{getUser:e.getTheUser})}}),r.a.createElement(d.a,{exact:!0,path:"/login",render:function(){return r.a.createElement(te,{getUser:e.getTheUser})}}))))}}]),t}(n.Component),$e=a(402);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement($e.a,null,r.a.createElement(Xe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},87:function(e,t,a){}},[[165,2,1]]]);
//# sourceMappingURL=main.f6920a23.chunk.js.map