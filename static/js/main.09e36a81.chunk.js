(this.webpackJsonpdirectory=this.webpackJsonpdirectory||[]).push([[0],{53:function(e,t,a){e.exports=a(82)},58:function(e,t,a){},59:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(11),o=a.n(r),s=(a(58),a(44)),c=a(45),m=a(52),i=a(51);a(59);var u=function(e){return l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("img",{src:e.image,alt:e.name})),l.a.createElement("td",null,e.name),l.a.createElement("td",null,e.phone),l.a.createElement("td",null,l.a.createElement("a",{href:e.newEmail,target:"_blank",rel:"noopener noreferrer"},e.email)),l.a.createElement("td",null,e.dob))},h=a(33),d=a(50),p=a(24),E=a(25),g=a(47),v=a(16),b=a(46);function f(e){return l.a.createElement("div",null,l.a.createElement(b.a,{className:"jumbo"},l.a.createElement("div",{className:"jumboText"},l.a.createElement("h1",null,"Employee Directory"))),l.a.createElement(h.a,{bg:"light",expand:"lg",className:"navbarClass"},l.a.createElement(h.a.Toggle,{"aria-controls":"basic-navbar-nav"}),l.a.createElement(h.a.Collapse,{id:"basic-navbar-nav"},l.a.createElement(d.a,{inline:!0,className:"searchBar"},l.a.createElement(p.a,{type:"text",placeholder:"Search",className:"mr-sm-2",onChange:e.handleInputChange,value:e.value}),l.a.createElement(E.a,{onClick:e.handleFormSubmit,variant:"outline-success"},"Search"))),l.a.createElement(g.a,{id:"dropdown-basic-button",variant:"outline-info",title:"Sort By",drop:"left"},l.a.createElement(v.a.Item,{as:"button",value:"oldest",onClick:e.handleSortChange},"Age Up"),l.a.createElement(v.a.Item,{as:"button",value:"youngest",onClick:e.handleSortChange},"Age Down"),l.a.createElement(v.a.Item,{as:"button",value:"firstName",onClick:e.handleSortChange},"First Name"),l.a.createElement(v.a.Item,{as:"button",value:"lastName",onClick:e.handleSortChange},"Last Name"))))}var y=a(49),C=(a(64),a(48)),S=a.n(C),N=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={employees:{},pending:"",search:"",sortBy:"firstName"},e.searchEmployees=function(){S.a.get("https://randomuser.me/api/?results=200&nat=us").then((function(t){return e.setState({employees:t.data.results})}))},e.handleInputChange=function(t){e.setState({pending:t.target.value})},e.handleFormSubmit=function(t){t.preventDefault(),e.setState({search:e.state.pending})},e.handleSortChange=function(t){t.preventDefault(),e.setState({sortBy:t.target.value})},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.searchEmployees()}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"employeeTable"},l.a.createElement(f,{value:this.state.pending,handleInputChange:this.handleInputChange,handleFormSubmit:this.handleFormSubmit,handleSortChange:this.handleSortChange}),l.a.createElement(y.a,{striped:!0,bordered:!0,hover:!0},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Image"),l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Phone"),l.a.createElement("th",null,"Email"),l.a.createElement("th",null,"DOB"))),l.a.createElement("tbody",null,this.state.employees.length>0?this.state.employees.sort((function(t,a){return"oldest"===e.state.sortBy?t.dob.date>a.dob.date?1:-1:"youngest"===e.state.sortBy?t.dob.date>a.dob.date?-1:1:"firstName"===e.state.sortBy?t.name.first>a.name.first?1:-1:"lastName"===e.state.sortBy?t.name.last>a.name.last?1:-1:void 0})).map((function(t){return t.name.first.includes(e.state.search)||t.name.last.includes(e.state.search)||t.phone.includes(e.state.search)||t.email.includes(e.state.search)?l.a.createElement(u,{key:t.id.value,image:t.picture.large,name:t.name.first+" "+t.name.last,phone:t.phone,email:t.email,dob:t.dob.date.substr(0,10),newEmail:"mailto:"+t.email}):null})):null)))}}]),a}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[53,1,2]]]);
//# sourceMappingURL=main.09e36a81.chunk.js.map