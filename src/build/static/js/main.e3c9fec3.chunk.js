(this["webpackJsonpmy-blog"]=this["webpackJsonpmy-blog"]||[]).push([[0],{45:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);n(39),n(40);var i=n(0),a=n(19),s=n.n(a),c=(n(45),n(15)),r=n(6),u=n(2);function o(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Hello, welcome to my blog!"}),Object(u.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),Object(u.jsx)("p",{children:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"})]})}function l(){return Object(u.jsx)("div",{children:Object(u.jsx)("h1",{children:"About page"})})}var m=[{name:"learn-react",title:"The Fastest Way to Learn React",content:["Welcome! Today we're going to be talking about the fastest way to\n            learn React. We'll be discussing some topics such as proin congue\n            ligula id risus posuere, vel eleifend ex egestas. Sed in turpis leo."]},{name:"learn-node",title:"How to Build a Node Server in 10 Minutes",content:["In this article, we're going to be talking looking at a very quick way\n            to set up a Node.js server. We'll be discussing some topics such as proin congue\n            ligula id risus posuere, vel eleifend ex egestas. Sed in turpis leo. \n            Aliquam malesuada in massa tincidunt egestas. Nam consectetur varius turpis, \n            non porta arcu porttitor non. In tincidunt vulputate nulla quis egestas. Ut \n            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor \n            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id \n            consequat quam. Vivamus accumsan dui in facilisis aliquet."]},{name:"resumes",title:"My Thoughts on Resumes",content:["Today is the day I talk about something which scares most people: resumes.\n            In reality, I'm not sure why people have such a hard time with proin congue\n            ligula id risus posuere, vel eleifend ex egestas. Sed in turpis leo. \n            Aliquam malesuada in massa tincidunt egestas. Nam consectetur varius turpis, \n            non porta arcu porttitor non. In tincidunt vulputate nulla quis egestas. Ut \n            eleifend ut ipsum non fringilla. Praesent imperdiet nulla nec est luctus, at \n            sodales purus euismod.","Donec vel mauris lectus. Etiam nec lectus urna. Sed sodales ultrices dapibus. \n            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan \n            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus \n            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor \n            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id \n            consequat quam. Vivamus accumsan dui in facilisis aliquet.","Etiam nec lectus urna. Sed sodales ultrices dapibus. \n            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan \n            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus \n            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor \n            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id \n            consequat quam. Vivamus accumsan dui in facilisis aliquet."]}];function d(e){return Object(u.jsx)("div",{children:e.articleContent.map((function(e,t){return Object(u.jsxs)(c.b,{className:"nav-link content-link-item pr-0 pl-0",to:"/article/".concat(e.name),children:[Object(u.jsx)("h3",{children:e.title}),Object(u.jsxs)("p",{children:[e.content[0].substring(0,150),"..."]})]},t)}))})}function j(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Articles"}),Object(u.jsx)(d,{articleContent:m})]})}var p=n(12),b=n.n(p),h=n(18),v=n(20);function x(){return Object(u.jsx)("h1",{children:"404: Page not found"})}function O(e){var t=e.comments;return Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:"Comments:"}),t.map((function(e,t){return Object(u.jsxs)("div",{className:"content-link-item",children:[Object(u.jsx)("h4",{children:e.username}),Object(u.jsx)("p",{children:e.text})]},t)}))]})}var f=n(23);function g(e){var t=function(){var t=Object(h.a)(b.a.mark((function t(){var n,i;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/api/articles/".concat(e.articleName,"/upvote"),{method:"post"});case 2:return n=t.sent,t.next=5,n.json();case 5:i=t.sent,e.setArticleInfo(i);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),Object(u.jsx)(f.a,{onClick:function(){return t()},children:"Add upvote"}),Object(u.jsxs)("p",{children:["This post has been upvoted ",e.articleInfo.upvotes," times"]}),Object(u.jsx)("hr",{})]})}var q=n(17),N=n(36);function y(e){var t=Object(i.useState)(""),n=Object(v.a)(t,2),a=n[0],s=n[1],c=Object(i.useState)(""),r=Object(v.a)(c,2),o=r[0],l=r[1],m=function(){var t=Object(h.a)(b.a.mark((function t(){var n,i;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/api/articles/".concat(e.articleName,"/add-comment"),{method:"post",body:JSON.stringify({username:a,text:o}),headers:{"Content-Type":"application/json"}});case 2:return n=t.sent,t.next=5,n.json();case 5:i=t.sent,e.setArticleInfo(i),s(""),l("");case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(u.jsx)(N.a,{children:Object(u.jsxs)(N.a.Body,{children:[Object(u.jsx)("h3",{children:"Add a comment"}),Object(u.jsxs)(q.a,{children:[Object(u.jsxs)(q.a.Group,{children:[Object(u.jsx)(q.a.Label,{children:"Name"}),Object(u.jsx)(q.a.Control,{type:"text",placeholder:"username",value:a,onChange:function(e){return s(e.target.value)}})]}),Object(u.jsxs)(q.a.Group,{children:[Object(u.jsx)(q.a.Label,{children:"Comment"}),Object(u.jsx)(q.a.Control,{as:"textarea",rows:3,value:o,onChange:function(e){return l(e.target.value)}})]}),Object(u.jsx)(f.a,{onClick:function(){return m()},children:"Submit"})]})]})})}function k(e){var t=e.match,n=Object(i.useState)({upvotes:0,comments:[]}),a=Object(v.a)(n,2),s=a[0],c=a[1],r=t.params.name,o=m.find((function(e){return e.name===r}));if(Object(i.useEffect)((function(){(function(){var e=Object(h.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/articles/".concat(r));case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,c(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[r]),!o)return Object(u.jsx)(x,{});var l=m.filter((function(e){return e.name!==r}));return Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:"mb-5",children:[Object(u.jsx)("h1",{children:o.title}),Object(u.jsx)(g,{articleInfo:s,articleName:r,setArticleInfo:c}),o.content.map((function(e,t){return Object(u.jsx)("p",{children:e},t)}))]}),Object(u.jsxs)("div",{className:"mt-5",children:[Object(u.jsx)(O,{comments:s.comments}),Object(u.jsx)(y,{articleName:r,setArticleInfo:c}),Object(u.jsx)("hr",{}),Object(u.jsx)("h3",{children:"Other articles:"}),Object(u.jsx)(d,{articleContent:l})]})]})}var w=n(26),C=n(21),A=n(35);function I(){return Object(u.jsx)(C.a,{bg:"light",expand:"lg",children:Object(u.jsxs)(w.a,{children:[Object(u.jsx)(C.a.Brand,{children:"Brand text"}),Object(u.jsx)(C.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(u.jsxs)(C.a.Collapse,{children:[Object(u.jsx)(A.a,{className:"mr-auto"}),Object(u.jsxs)(A.a,{children:[Object(u.jsx)(c.b,{className:"nav-link",to:"/",children:"Home"}),Object(u.jsx)(c.b,{className:"nav-link",to:"/about",children:"About"}),Object(u.jsx)(c.b,{className:"nav-link",to:"/articles-list",children:"Articles"})]})]})]})})}n(54);var S=function(){return Object(u.jsx)(c.a,{children:Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(I,{}),Object(u.jsx)(w.a,{className:"py-3",children:Object(u.jsxs)(r.c,{children:[Object(u.jsx)(r.a,{path:"/",component:o,exact:!0}),Object(u.jsx)(r.a,{path:"/about",component:l}),Object(u.jsx)(r.a,{path:"/articles-list",component:j}),Object(u.jsx)(r.a,{path:"/article/:name",component:k}),Object(u.jsx)(r.a,{path:"*",component:x})]})})]})})},T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,57)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),i(e),a(e),s(e),c(e)}))};s.a.render(Object(u.jsx)(S,{}),document.getElementById("root")),T()}},[[55,1,2]]]);
//# sourceMappingURL=main.e3c9fec3.chunk.js.map