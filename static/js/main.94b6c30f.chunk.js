(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{109:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(22),i=n.n(r),o=(n(79),n(31)),s=n(38),j=n(9),d=n(161),l=n(142),u=n(144),p=n(59),b=n.n(p),h=n(58),O=n.n(h),m=n(146),x=n(145),g=n(111),f=n(2),y=Object(l.a)((function(t){return{toolbar:{display:"flex",justifyContent:"space-between"},icon:{marginRight:t.spacing(1)}}})),C=function(){var t=y(),e=Object(j.f)();return Object(f.jsx)(u.a,{position:"relative",children:Object(f.jsxs)(x.a,{className:t.toolbar,children:[Object(f.jsxs)(m.a,{color:"inherit",onClick:function(){return e.push("/")},children:[Object(f.jsx)(O.a,{className:t.icon}),Object(f.jsx)(g.a,{variant:"h6",noWrap:!0,children:"Home"})]}),Object(f.jsxs)(m.a,{color:"inherit",onClick:function(){return e.push("/cart")},children:[Object(f.jsx)(b.a,{className:t.icon}),Object(f.jsx)(g.a,{variant:"h6",noWrap:!0,children:"Cart"})]})]})})},v=n(147),T=Object(l.a)((function(t){return{heroContent:{backgroundColor:t.palette.background.paper,padding:t.spacing(8,0,6)}}})),E=function(){var t=T();return Object(f.jsx)("div",{className:t.heroContent,children:Object(f.jsxs)(v.a,{maxWidth:"sm",children:[Object(f.jsx)(g.a,{component:"h1",variant:"h2",align:"center",color:"textPrimary",gutterBottom:!0,children:"XenElectronic"}),Object(f.jsx)(g.a,{variant:"h5",align:"center",color:"textSecondary",paragraph:!0,children:"We provide all your electronic appliance needs"})]})})},k=n(148),_=function(){return Object(f.jsxs)(g.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(f.jsx)(k.a,{color:"inherit",href:"https://material-ui.com/",children:"Your Website"})," ",(new Date).getFullYear(),"."]})},P=function(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(g.a,{variant:"h6",align:"center",gutterBottom:!0,children:"Xendit"}),Object(f.jsx)(g.a,{variant:"subtitle1",align:"center",color:"textSecondary",component:"p",children:"Full-stack Engineer Pre-assessment Project"}),Object(f.jsx)(_,{})]})},S=n(149),I=n(150),R=n(153),U=n(152),F=n(151),D=n(154),q=n(60),B=n.n(q),w=n(36),N=n.n(w),A=Object(l.a)((function(t){return{card:{height:"100%",display:"flex",flexDirection:"column"},cardMedia:{paddingTop:"56.25%"},cardContent:{flexGrow:1},icon:{marginRight:t.spacing(1)}}})),M=function(t){var e=t.productList,n=t.addToCart,a=A(),c=e&&e.data.length>0?e.data:[];return Object(f.jsx)(S.a,{container:!0,spacing:4,children:c.map((function(t){return Object(f.jsx)(S.a,{item:!0,xs:12,sm:6,md:4,children:Object(f.jsxs)(I.a,{className:a.card,children:[Object(f.jsx)(F.a,{className:a.cardMedia,image:t.imageUrl,title:"".concat(t.name," Title")}),Object(f.jsxs)(U.a,{className:a.cardContent,children:[Object(f.jsx)(g.a,{gutterBottom:!0,variant:"h6",component:"h2",children:t.name}),Object(f.jsx)(g.a,{gutterBottom:!0,variant:"subtitle1",component:"h2",children:t.category?t.category.name:null}),Object(f.jsx)(g.a,{variant:"subtitle2",component:"h2",children:N()(t.price).format()})]}),Object(f.jsx)(R.a,{children:Object(f.jsx)(D.a,{size:"small",color:"primary",variant:"outlined",startIcon:Object(f.jsx)(B.a,{}),onClick:function(){n(t)},children:"Add"})})]})},t.id)}))})},W=n(61),H=n.n(W).a.create({baseURL:"https://sleepy-fjord-35141.herokuapp.com"}),L=function(){return function(t){t({type:"FETCH_PRODUCT_REQUEST"}),H.get("/products").then((function(e){t({type:"FETCH_PRODUCT_SUCCESS",payload:e.data.data})})).catch((function(e){t({type:"FETCH_PRODUCT_SUCCESS",payload:e})}))}},Q=Object(l.a)((function(t){return{cardGrid:{paddingTop:t.spacing(8),paddingBottom:t.spacing(8)}}})),Y=Object(o.b)((function(t){return{products:t.products}}),(function(t){return{getProducts:function(){t(L())},addItemToCart:function(e){var n={id:e.id,name:e.name,imageUrl:e.imageUrl,price:e.price,quantity:1};t(function(t){return function(e){e({type:"ADD_TO_CART",payload:t})}}(n))}}}))((function(t){var e=t.products,n=t.getProducts,c=t.addItemToCart,r=Q();return Object(a.useEffect)((function(){n()}),[]),Object(f.jsx)(v.a,{className:r.cardGrid,maxWidth:"md",children:Object(f.jsx)(M,{productList:e,addToCart:c})})})),G=n(11),X=n(68),z=n(155),J=n(156),V=n(157),K=n(160),Z=n(158),$=n(159),tt=n(63),et=n.n(tt),nt=n(62),at=n.n(nt),ct=n(64),rt=n.n(ct),it=n(65),ot=n.n(it),st=n(162),jt=Object(l.a)((function(t){return{paper:Object(G.a)({marginTop:t.spacing(3),marginBottom:t.spacing(3),padding:t.spacing(2)},t.breakpoints.up(600+2*t.spacing(3)),{marginTop:t.spacing(6),marginBottom:t.spacing(6),padding:t.spacing(3)}),quantityInput:{width:"3em"},checkoutSection:{marginTop:"inherit",display:"flex",justifyContent:"space-between"}}})),dt=Object(o.b)((function(t){return{items:t.cart.items}}),(function(t){return{updateCartItemQty:function(e,n){var a;t((a={id:e,quantity:n},function(t){t({type:"UPDATE_ITEM_QTY",payload:a})}))},removeItemFromCart:function(e){var n;t((n=e,function(t){t({type:"REMOVE_ITEM",payload:n})}))},emptyCart:function(){t((function(t){t({type:"RESET_CART"})}))}}}))((function(t){var e=t.items,n=t.updateCartItemQty,a=t.removeItemFromCart,c=t.emptyCart,r=jt(),i=e||[],o=Object(j.f)();return Object(f.jsx)(v.a,{maxWidth:"md",children:Object(f.jsxs)(X.a,{className:r.paper,children:[Object(f.jsx)(g.a,{component:"h2",variant:"h5",color:"textPrimary",children:"Shopping Cart"}),Object(f.jsx)(z.a,{children:Object(f.jsxs)(J.a,{children:[Object(f.jsx)(V.a,{children:Object(f.jsxs)(Z.a,{children:[Object(f.jsx)($.a,{}),Object(f.jsx)($.a,{}),Object(f.jsx)($.a,{}),Object(f.jsx)($.a,{}),Object(f.jsx)($.a,{})]})}),Object(f.jsx)(K.a,{children:i.map((function(t){return Object(f.jsxs)(Z.a,{children:[Object(f.jsx)($.a,{children:Object(f.jsx)("img",{src:t.imageUrl,alt:t.name,width:150,height:75})}),Object(f.jsx)($.a,{children:Object(f.jsx)(g.a,{variant:"subtitle1",children:t.name})}),Object(f.jsxs)($.a,{size:"small",children:[Object(f.jsx)(m.a,{onClick:function(){n(t.id,-1)},children:Object(f.jsx)(at.a,{})}),Object(f.jsx)(st.a,{value:t.quantity,className:r.quantityInput}),Object(f.jsx)(m.a,{onClick:function(){n(t.id,1)},children:Object(f.jsx)(et.a,{})})]}),Object(f.jsx)($.a,{children:N()(t.totalPrice).format()}),Object(f.jsx)($.a,{children:Object(f.jsx)(m.a,{color:"secondary",onClick:function(){a(t.id)},children:Object(f.jsx)(rt.a,{})})})]},t.id)}))})]})}),Object(f.jsxs)("div",{className:r.checkoutSection,children:[Object(f.jsxs)("div",{children:[Object(f.jsx)(g.a,{variant:"subtitle1",component:"h2",children:"Total Amount:"}),Object(f.jsx)(g.a,{variant:"h5",component:"h2",children:N()(i.map((function(t){return t.totalPrice})).reduce((function(t,e){return t+e}),0)).format()})]}),Object(f.jsx)(D.a,{color:"primary",variant:"contained",startIcon:Object(f.jsx)(ot.a,{}),onClick:function(){c(),o.push("/checkout")},children:"Checkout"})]})]})})})),lt=Object(l.a)((function(t){return{paper:Object(G.a)({marginTop:t.spacing(3),marginBottom:t.spacing(3),padding:t.spacing(2)},t.breakpoints.up(600+2*t.spacing(3)),{marginTop:t.spacing(6),marginBottom:t.spacing(6),padding:t.spacing(3)}),quantityInput:{width:"3em"},checkoutSection:{marginTop:"inherit",display:"flex",justifyContent:"space-between"}}})),ut=function(){var t=lt();return Object(f.jsx)(v.a,{maxWidth:"md",children:Object(f.jsxs)(X.a,{className:t.paper,children:[Object(f.jsx)(g.a,{component:"h1",variant:"h4",align:"center",gutterBottom:!0,children:"Checkout"}),Object(f.jsx)(g.a,{component:"h1",variant:"h6",align:"center",color:"textPrimary",gutterBottom:!0,children:"Thank you for shopping in XenElectronic."}),Object(f.jsx)(g.a,{component:"h1",variant:"subtitle1",align:"center",gutterBottom:!0,children:"May the force be with you."})]})})},pt=n(42),bt=n(66),ht=n(17),Ot={loading:!1,error:{},data:[]},mt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ot,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"FETCH_PRODUCT_REQUEST":return Object(ht.a)(Object(ht.a)({},t),{},{loading:!0,error:{},data:[]});case"FETCH_PRODUCT_SUCCESS":return Object(ht.a)(Object(ht.a)({},t),{},{loading:!1,error:{},data:e.payload});case"FETCH_PRODUCT_FAILED":return Object(ht.a)(Object(ht.a)({},t),{},{loading:!1,error:e.payload,data:[]});default:return t}},xt=n(18),gt={items:[]},ft=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:gt,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD_TO_CART":var n=Object(xt.a)(t.items).findIndex((function(t){return t.id===e.payload.id})),a=Object(xt.a)(t.items);return n<0?a.push(Object(ht.a)(Object(ht.a)({},e.payload),{},{totalPrice:e.payload.price*e.payload.quantity})):(a[n].quantity+=e.payload.quantity,a[n].totalPrice+=e.payload.price*e.payload.quantity),{items:a};case"UPDATE_ITEM_QTY":var c=Object(xt.a)(t.items).findIndex((function(t){return t.id===e.payload.id})),r=Object(xt.a)(t.items);return c<0?{items:r}:(r[c].quantity+=e.payload.quantity,r[c].totalPrice=r[c].price*r[c].quantity,{items:r.filter((function(t){return t.quantity>0}))});case"REMOVE_ITEM":var i=Object(xt.a)(t.items);return{items:i.filter((function(t){return t.id!==e.payload}))};case"RESET_CART":return{items:[]};default:return t}},yt=Object(pt.b)({products:mt,cart:ft}),Ct=Object(pt.c)(yt,Object(pt.a)(bt.a)),vt=Object(l.a)((function(t){return{footer:{backgroundColor:t.palette.background.paper,padding:t.spacing(6)}}})),Tt=function(){var t=vt();return Object(f.jsx)(o.a,{store:Ct,children:Object(f.jsx)(s.a,{children:Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(d.a,{}),Object(f.jsx)(C,{}),Object(f.jsxs)("main",{children:[Object(f.jsx)(E,{}),Object(f.jsxs)(j.c,{children:[Object(f.jsx)(j.a,{path:"/checkout",children:Object(f.jsx)(ut,{})}),Object(f.jsx)(j.a,{path:"/cart",children:Object(f.jsx)(dt,{})}),Object(f.jsx)(j.a,{path:"/",children:Object(f.jsx)(Y,{})})]})]}),Object(f.jsx)("footer",{className:t.footer,children:Object(f.jsx)(P,{})})]})})})},Et=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,164)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),a(t),c(t),r(t),i(t)}))};i.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(Tt,{})}),document.getElementById("root")),Et()},79:function(t,e,n){}},[[109,1,2]]]);
//# sourceMappingURL=main.94b6c30f.chunk.js.map