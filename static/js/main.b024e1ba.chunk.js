(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),o=n(3),r=n.n(o),i=(n(14),n(4)),s=n(5),d=n(9),b=n(8),u=n(6),l=n.n(u),j=n(0),h=function(e){var t=e.title,n=e.children;return Object(j.jsxs)("section",{className:l.a.container,children:[Object(j.jsx)("h2",{children:t}),n]})},O=function(e){var t=e.good,n=e.neutral,a=e.bad,c=e.total,o=e.positivePercentage;return Object(j.jsxs)("div",{children:[Object(j.jsxs)("p",{children:["Good:",t]}),Object(j.jsxs)("p",{children:["Neutral:",n]}),Object(j.jsxs)("p",{children:["Bad:",a]}),Object(j.jsxs)("p",{children:["Total: ",c(t,n,a)]}),Object(j.jsxs)("p",{children:["Positive Feedback: ",o(t,a,n),"%"]})]})},f=n(7),p=n.n(f),v=function(e){var t=e.options,n=e.onLeaveFeedback;return t.map((function(e,t){return Object(j.jsx)("button",{className:p.a.btn,onClick:function(){return n(t)},children:e},t)}))},x=function(e){var t=e.message;return Object(j.jsx)("h3",{children:t})},g=["Good","Neutral","Bad"],k=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.hadleFeedback=function(t){e.setState((function(e){return{good:0===t?e.good+1:e.good,neutral:1===t?e.neutral+1:e.neutral,bad:2===t?e.bad+1:e.bad}}))},e.countTotalFeedback=function(e,t,n){return e+t+n},e.countPositiveFeedbackPercentage=function(e,t,n){return Math.round(e/(e+t+n)*100)},e}return Object(s.a)(n,[{key:"render",value:function(){var e=!(this.state.good+this.state.bad+this.state.neutral>0);return Object(j.jsxs)("div",{children:[Object(j.jsx)(h,{title:"Please leave feedback",children:Object(j.jsx)(v,{options:g,onLeaveFeedback:this.hadleFeedback})}),Object(j.jsx)(h,{title:"Statistics",children:e?Object(j.jsx)(x,{message:"No feedback given"}):Object(j.jsx)(O,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:this.countTotalFeedback,positivePercentage:this.countPositiveFeedbackPercentage})})]})}}]),n}(a.Component);r.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(k,{})}),document.getElementById("root"))},6:function(e,t,n){e.exports={container:"Section_container__3L7kI"}},7:function(e,t,n){e.exports={btn:"FeedbackOptions_btn__2WtDD"}}},[[16,1,2]]]);
//# sourceMappingURL=main.b024e1ba.chunk.js.map