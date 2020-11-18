(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{108:function(e,t,n){},109:function(e,t,n){},110:function(e,t,n){},111:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(13),l=n.n(c),r=(n(66),n(17)),i=n(18),s=n(22),u=n(19),m=n(23),d=n(24),f=n(14);n(67),n(68);var h=function(){return o.a.createElement("ul",{className:"nav nav-tabs"},o.a.createElement("li",{className:"nav-item"},o.a.createElement(d.b,{to:"/",className:"/"===window.location.pathname?"nav-link active":"nav-link"},"Google Books")),o.a.createElement("li",{className:"nav-item"},o.a.createElement(d.b,{to:"/search",className:"/search"===window.location.pathname?"nav-link active":"nav-link"},"Search")),o.a.createElement("li",{className:"nav-item"},o.a.createElement(d.b,{to:"/saved",className:"/saved"===window.location.pathname?"nav-link active":"nav-link"},"Saved")))},v=n(56),k=n(26),p=n.n(k),E={searchBooks:function(e){return p.a.get("https://www.googleapis.com/books/v1/volumes?q="+e)},getBooks:function(){return p.a.get("/api/books")},saveBook:function(e){return p.a.post("/api/books",e)},deleteBook:function(e){return p.a.delete("api/books/"+e)}};function g(e){var t=e.fluid,n=e.children;return o.a.createElement("div",{className:"container".concat(t?"-fluid":"")},n)}function b(e){var t=e.fluid,n=e.children;return o.a.createElement("div",{className:"row".concat(t?"-fluid":"")},n)}function w(e){var t=e.size,n=e.children;return o.a.createElement("div",{className:t.split(" ").map(function(e){return"col-"+e}).join(" ")},n)}n(90);var y=function(e){var t=e.src;return o.a.createElement("div",{className:"thumbnail",role:"img","aria-label":"Book Image",style:{backgroundImage:"url(".concat(t,")")}})},N=n(60),j=n(114),B=n(115);var O=function(e){var t=e.type,n=void 0===t?"default":t,c=e.className,l=e.children,r=e.onClick,i=Object(a.useState)(!1),s=Object(N.a)(i,2),u=s[0],m=s[1],d=function(){return m(!1)};return o.a.createElement(o.a.Fragment,null,o.a.createElement("button",{onClick:function(){m(!0),r()},className:["btn btn-lg","btn-".concat(n),c].join(" ")},l),o.a.createElement(j.a,{show:u,onHide:d},o.a.createElement(j.a.Header,{closeButton:!0},o.a.createElement(j.a.Title,null,"You're book has been saved!")),o.a.createElement(j.a.Body,null,"You can view your saved books in the Saved tab!"),o.a.createElement(j.a.Footer,null,o.a.createElement(B.a,{variant:"secondary",onClick:d},"Close"),o.a.createElement(B.a,{variant:"primary",onClick:d},"OK"))))};var S=function(e){var t=e.type,n=void 0===t?"default":t,a=e.className,c=e.children,l=e.onClick;return o.a.createElement("button",{onClick:l,className:["btn btn-lg","btn-".concat(n),a].join(" ")},c)};n(108);function C(e){var t=e.children;return o.a.createElement("ul",{className:"list-group"},t)}function x(e){return o.a.createElement("li",{className:"list-group-item",key:e.id},o.a.createElement(g,null,o.a.createElement(b,null,o.a.createElement(w,{size:"xs-4 sm-2"},o.a.createElement(y,{src:e.image})),o.a.createElement(w,{size:"xs-8 sm-10"},o.a.createElement("h3",null,e.title),o.a.createElement("p",null,"Written By ",[e.authors].flat().join(", ")),o.a.createElement("p",null,e.description),o.a.createElement("a",{rel:"noreferrer noopener",className:"btn btn-lg btn-primary input-lg view",target:"_blank",href:e.link},"View"),e.id?o.a.createElement(S,{type:"danger",className:"input-lg",onClick:function(t){E.deleteBook(e.id).then(function(t){e.loadBooks(),console.log(e.id)}).catch(function(e){return console.log(e)})}},"Delete"):o.a.createElement(O,{type:"success",className:"input-lg",onClick:function(t){E.saveBook({title:e.title,authors:e.authors,description:e.description,image:e.image,link:e.link}).then(function(e){return console.log(e)}).catch(function(e){return console.log(e)})}},"Save")))))}n(109);function I(e){return o.a.createElement("div",{className:"input-group input-group-lg"},o.a.createElement("input",Object.assign({className:"form-control",type:"text"},e)))}function z(e){var t=e.type,n=void 0===t?"default":t,a=e.className,c=e.children,l=e.onClick;return o.a.createElement("button",{onClick:l,className:["search btn btn-lg","btn-".concat(n),a].join(" ")},c)}var Y=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={books:[],bookSearch:""},n.handleInputChange=function(e){var t=e.target,a=t.name,o=t.value;n.setState(Object(v.a)({},a,o))},n.handleFormSubmit=function(e){e.preventDefault(),E.searchBooks(n.state.bookSearch).then(function(e){n.setState({books:e.data.items},function(){console.log(this.state.books)})}).catch(function(e){return console.log(e)})},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(g,null,o.a.createElement(b,null,o.a.createElement(w,{size:"md-12"},o.a.createElement("form",null,o.a.createElement(g,null,o.a.createElement(b,null,o.a.createElement(w,{size:"xs-12 sm-12"},o.a.createElement(I,{name:"bookSearch",value:this.state.bookSearch,onChange:this.handleInputChange,placeholder:"Search for a Book"}))),o.a.createElement(b,null,o.a.createElement(w,{size:"xs-12 sm-12"},o.a.createElement(z,{onClick:this.handleFormSubmit,type:"success",className:"input-lg"},"Search"))))))),o.a.createElement(b,null,o.a.createElement(w,{size:"xs-12"},o.a.createElement(C,null,this.state.books.map(function(e){return o.a.createElement(x,{key:e.id,title:e.volumeInfo.title,authors:e.volumeInfo.authors,link:e.volumeInfo.infoLink,description:e.volumeInfo.description,image:void 0===e.volumeInfo.imageLinks?"http://siddallheatingandcooling.net/_imgstore/5/1360415/thumbnail/FSeY96wEdX_eY4XkBN2jfYnuY9A.png":"".concat(e.volumeInfo.imageLinks.thumbnail)})}))))))}}]),t}(a.Component),F=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={savedBooks:[]},n.loadBooks=function(e){E.getBooks().then(function(e){n.setState({savedBooks:e.data},function(){console.log(this.state.savedBooks)})}).catch(function(e){return console.log(e)})},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.loadBooks()}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(g,null,o.a.createElement(b,null,o.a.createElement(w,{size:"xs-12"},o.a.createElement(C,null,this.state.savedBooks.map(function(t){return o.a.createElement(x,{key:t._id,title:t.title,authors:t.authors,link:t.link,description:t.description,image:t.image,id:t._id,loadBooks:e.loadBooks})}))))))}}]),t}(a.Component);n(110);var L=function(){return o.a.createElement("div",{className:"jumbotron text-center"},o.a.createElement("h1",null,"Google Books Search"),o.a.createElement("h3",null,"Search for and Save Books of Interest"))},W=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement(d.a,null,o.a.createElement("div",null,o.a.createElement(h,null),o.a.createElement(L,null),o.a.createElement(f.c,null,o.a.createElement(f.a,{exact:!0,path:"/",component:Y}),o.a.createElement(f.a,{exact:!0,path:"/search",component:Y}),o.a.createElement(f.a,{exact:!0,path:"/saved",component:F}))))}}]),t}(a.Component),_=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function A(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}l.a.render(o.a.createElement(W,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");_?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):A(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):A(e)})}}()},61:function(e,t,n){e.exports=n(111)},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},90:function(e,t,n){}},[[61,1,2]]]);
//# sourceMappingURL=main.ccc63268.chunk.js.map