"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[14],{9014:function(r,e,a){a.r(e),a.d(e,{default:function(){return v}});var n=a(9718),t=a(824),o=a(1413),i=a(4925),l=a(7762),c=a(5597),s=a(184),f=["htmlWidth","htmlHeight","alt"],u=(0,c.G)((function(r,e){var a=r.htmlWidth,n=r.htmlHeight,t=r.alt,l=(0,i.Z)(r,f);return(0,s.jsx)("img",(0,o.Z)({width:a,height:n,ref:e,alt:t},l))}));u.displayName="NativeImage";var g=a(9439),d=a(9205),h=a(2791);var m=a(1665),b=["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin","fallbackStrategy","referrerPolicy"];var p=(0,c.G)((function(r,e){var a=r.fallbackSrc,n=r.fallback,t=r.src,c=r.srcSet,f=r.align,p=r.fit,k=r.loading,v=r.ignoreFallback,x=r.crossOrigin,S=r.fallbackStrategy,j=void 0===S?"beforeLoadOrError":S,w=r.referrerPolicy,y=(0,i.Z)(r,b),O=null!=k||v||!(void 0!==a||void 0!==n),Z=function(r){var e=r.loading,a=r.src,n=r.srcSet,t=r.onLoad,o=r.onError,i=r.crossOrigin,l=r.sizes,c=r.ignoreFallback,s=(0,h.useState)("pending"),f=(0,g.Z)(s,2),u=f[0],m=f[1];(0,h.useEffect)((function(){m(a?"loading":"pending")}),[a]);var b=(0,h.useRef)(),p=(0,h.useCallback)((function(){if(a){k();var r=new Image;r.src=a,i&&(r.crossOrigin=i),n&&(r.srcset=n),l&&(r.sizes=l),e&&(r.loading=e),r.onload=function(r){k(),m("loaded"),null==t||t(r)},r.onerror=function(r){k(),m("failed"),null==o||o(r)},b.current=r}}),[a,i,n,l,t,o,e]),k=function(){b.current&&(b.current.onload=null,b.current.onerror=null,b.current=null)};return(0,d.G)((function(){if(!c)return"loading"===u&&p(),function(){k()}}),[u,p,c]),c?"loaded":u}((0,o.Z)((0,o.Z)({},r),{},{crossOrigin:x,ignoreFallback:O})),C=function(r,e){return"loaded"!==r&&"beforeLoadOrError"===e||"failed"===r&&"onError"===e}(Z,j),E=(0,o.Z)({ref:e,objectFit:p,objectPosition:f},O?y:function(r){var e,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=Object.assign({},r),t=(0,l.Z)(a);try{for(t.s();!(e=t.n()).done;){var o=e.value;o in n&&delete n[o]}}catch(i){t.e(i)}finally{t.f()}return n}(y,["onError","onLoad"]));return C?n||(0,s.jsx)(m.m.img,(0,o.Z)({as:u,className:"chakra-image__placeholder",src:a},E)):(0,s.jsx)(m.m.img,(0,o.Z)({as:u,src:t,srcSet:c,crossOrigin:x,loading:k,referrerPolicy:w,className:"chakra-image"},E))}));p.displayName="Image";var k=a(884),v=function(){var r=(0,n.S)({base:"18px",lg:"48px"}),e=(0,n.S)({base:"40%",lg:"16%"});return(0,s.jsx)(t.xu,{as:"header",bg:"Purple.600",justifyContent:"center",align:"center",children:(0,s.jsxs)(t.xu,{position:"relative",children:[(0,s.jsx)(p,{src:"https://images.unsplash.com/photo-1512428559087-560fa5ceab42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",alt:"homeImage",w:"100%"}),(0,s.jsx)(k.x,{position:"absolute",top:e,left:"50%",transform:"translate(-50%, -50%)",color:"black",fontSize:r,fontWeight:"bold",textAlign:"center",children:'Welcome to "Contacts app" - Your All-in-One Contacts Management Solution!'})]})})}}}]);
//# sourceMappingURL=14.94e76a88.chunk.js.map