(this.webpackJsonpemployeetracker=this.webpackJsonpemployeetracker||[]).push([[0],{19:function(e,t,a){e.exports=a(44)},2:function(e,t,a){},24:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(12),s=a.n(r),c=(a(24),a(13)),o=a(14),m=a(18),u=a(17),i=a(15),d=a.n(i),h={getUsersInfo:function(){return d.a.get("https://randomuser.me/api/?results=150&nat=us")}};a(2);var f=function(e){return l.a.createElement("div",{className:"container-fluid"},l.a.createElement("header",{className:"z-depth-5 col s12"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col s6"},l.a.createElement("h3",{className:"left-align headerText"},"Employee Directory")),l.a.createElement("div",{className:"col s6 "},l.a.createElement("div",{className:"col s6 inputAndButton right-align "},l.a.createElement("input",{onChange:e.handleInputChange,value:e.value,id:"employees",type:"text",name:"search",list:"employee",className:" inputBox",placeholder:"Search by name"})),l.a.createElement("div",{className:"col m4"},l.a.createElement("button",{type:"submit",value:"",className:" btn z-depth-2 waves-effect  searchBtn",onClick:e.handleSearch},"Search"))))))},p=a(16),E=a.n(p);var y=function(e){return l.a.createElement("table",{className:"tableEmployee"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null),l.a.createElement("th",{onClick:e.sortByName},"Name"),l.a.createElement("th",null,"Phone"),l.a.createElement("th",null,"Email"),l.a.createElement("th",null,"DOB"))),l.a.createElement("tbody",{className:""},e.results.map((function(e){return l.a.createElement("tr",{className:"table",key:e.login.uuid},l.a.createElement("td",null," ",l.a.createElement("img",{className:"",src:e.picture.medium,alt:""})),l.a.createElement("td",null,e.name.first+e.name.last," "),l.a.createElement("td",null,e.cell),l.a.createElement("td",{className:"email"},l.a.createElement("a",{href:e.email},e.email)),l.a.createElement("td",null,l.a.createElement(E.a,{format:"MM/DD/YYYY"},e.dob.date)))}))))},v=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={search:"",employees:[],filteredEmployees:[],order:""},e.sortByName=function(){var t=e.state.filteredEmployees;if("ascend"===e.state.order){var a=t.sort((function(e,t){return e.name.first>t.name.first?1:-1}));console.log(a),e.setState({filteredEmployees:a,order:"descend"})}else{var n=t.sort((function(e,t){return e.name.first>t.name.first?-1:1}));console.log(n),e.setState({filteredEmployees:n,order:"ascend"})}},e.handleInputChange=function(t){var a=e.state.employees,n=t.target.value,l=a.filter((function(e){return e.name.first.toLowerCase().indexOf(n.toLowerCase())>-1}));e.setState({filteredEmployees:l})},e.employeeSearch=function(){h.getUsers().then((function(t){return e.setState({filteredEmployees:t.data.results,employees:t.data.results})})).catch((function(e){return console.log(e)}))},e.handleSearch=function(t){t.preventDefault(),e.state.search||alert("Enter a name");var a=e.state,n=a.employees,l=a.search,r=n.filter((function(e){return e.name.first.toLowerCase().includes(l.toLowerCase())}));e.setState({filteredEmployees:r})},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;h.getUsersInfo().then((function(t){return e.setState({employees:t.data.results,filteredEmployees:t.data.results})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(f,{employee:this.state.employees,handleSearch:this.handleSearch,handleInputChange:this.handleInputChange}),l.a.createElement(y,{results:this.state.filteredEmployees,sortByName:this.sortByName}))}}]),a}(n.Component);var g=function(){return l.a.createElement(v,null)};s.a.render(l.a.createElement(g,null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.5c929b48.chunk.js.map