(this["webpackJsonpcalorie-zen"]=this["webpackJsonpcalorie-zen"]||[]).push([[0],{29:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(20),o=n.n(s),i=(n(29),n(5)),r=n(24),l=n(2),u=n(15),d=n.p+"static/media/Edit-Button.8667ac4a.svg",p=n.p+"static/media/Vector5.a086f758.svg",j=n.p+"static/media/Vector3.d86bb2ed.svg",m=n.p+"static/media/Group.cbc09a89.svg",h=n.p+"static/media/Vector2.49570bcb.svg",b=c.a.createContext(),_=n(0);var O=function(e){var t=e.link,n=e.name,a=e.likes,s=e.owner,o=e.onCardClick,i=e.onCardLike,r=e.onCardDelete,l=e.cardId,u=c.a.useContext(b),d=s._id===u._id,p="element__delete ".concat(d?"":"button_visibility"),j=a.some((function(e){return e===u._id})),O="element__like ".concat(j?"element__like_active":"");return Object(_.jsxs)("div",{className:"element",children:[Object(_.jsx)("button",{className:"button_type_delete",onClick:function(){r({owner:s,cardId:l})},type:"button",children:Object(_.jsx)("img",{className:p,src:m,alt:"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435"})}),Object(_.jsx)("button",{className:"button button_type_image",onClick:function(){o({link:t,name:n})},type:"button",children:Object(_.jsx)("img",{className:"element__image",src:t,alt:"\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430"})}),Object(_.jsxs)("div",{className:"element__group",children:[Object(_.jsx)("h2",{className:"element__title",children:n}),Object(_.jsxs)("div",{className:"element__like_groupe",children:[Object(_.jsx)("button",{className:"button_type_like",type:"button",onClick:function(){i({likes:a,cardId:l})},children:Object(_.jsx)("img",{className:O,src:h,alt:"\u041b\u0430\u0439\u043a"})}),Object(_.jsx)("p",{className:"element__like_number",children:a.length})]})]})]})};var g=function(e){var t=e.onCardClick,n=e.onEditProfile,a=e.onAddPlace,s=e.onEditAvatar,o=e.cards,r=e.onCardLike,l=e.handleDeleteCard,m=c.a.useContext(b);return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsxs)("section",{className:"profile",children:[Object(_.jsxs)("div",{className:"profile__groupe",children:[Object(_.jsx)("img",{className:"profile__image",src:p,alt:""}),Object(_.jsx)("button",{className:"button_type_avatar",onClick:s,children:Object(_.jsx)("img",{className:"profile__avatar",alt:"\u041a\u0443\u0441\u0442\u043e",src:m.avatar,style:{backgroundImage:"url(".concat(m.avatar,")")}})})]}),Object(_.jsxs)("div",{className:"profile__info",children:[Object(_.jsxs)("div",{className:"profile__text",children:[Object(_.jsx)("h1",{className:"profile__title",children:m.name}),Object(_.jsx)("p",{className:"profile__subtitle",children:m.about})]}),Object(_.jsx)("button",{className:"button button_type_edit",type:"button",onClick:n,children:Object(_.jsx)("img",{className:"profile__edit-button",src:d,alt:"\u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"})})]}),Object(_.jsx)("button",{className:"button button_type_add",type:"button",onClick:a,children:Object(_.jsx)("img",{className:"profile__add-button",src:j,alt:"\u043f\u043b\u044e\u0441"})})]}),Object(_.jsx)("section",{className:"elements",children:o.map((function(e){var n=e._id,a=Object(u.a)(e,["_id"]);return Object(_.jsx)(O,Object(i.a)(Object(i.a)({},a),{},{cardId:n,onCardClick:t,onCardLike:r,onCardDelete:l}),n)}))})]})};var f=function(){return Object(_.jsx)("footer",{className:"footer",children:Object(_.jsx)("p",{className:"footer__copyright",children:"\xa9 2020 Mesto Russia"})})},x=n(3),v=n(9),N=n.p+"static/media/Vector.a307e1c4.svg";var k=function(e){var t=e.handleSignOut,n=e.email;return Object(_.jsxs)(x.d,{children:[Object(_.jsx)(x.b,{exact:!0,path:"/",children:Object(_.jsxs)("header",{className:"header",children:[Object(_.jsx)("img",{className:"header__logo",alt:"\u041c\u0435\u0441\u0442\u043e",src:N}),Object(_.jsx)("p",{className:"header__email",children:n}),Object(_.jsx)("button",{className:"header__signout",onClick:t,children:"\u0412\u044b\u0445\u043e\u0434"})]})}),Object(_.jsx)(x.b,{path:"/signin",children:Object(_.jsxs)("header",{className:"header",children:[Object(_.jsx)("img",{className:"header__logo",alt:"\u041c\u0435\u0441\u0442\u043e",src:N}),Object(_.jsx)(v.b,{to:"/signup",className:"header__signout",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]})}),Object(_.jsx)(x.b,{path:"/signup",children:Object(_.jsxs)("header",{className:"header",children:[Object(_.jsx)("img",{className:"header__logo",alt:"\u041c\u0435\u0441\u0442\u043e",src:N}),Object(_.jsx)(v.b,{to:"/signin",className:"header__signout",children:"\u0412\u043e\u0439\u0442\u0438"})]})})]})},C=n.p+"static/media/Close-icon.118074ba.svg";var y=function(e){var t=e.card,n=e.onClose;return Object(_.jsx)("section",{className:"popup popup_modal ".concat(t&&"popup_is-opened"),children:Object(_.jsxs)("div",{className:"popup__group",children:[Object(_.jsx)("button",{className:"button button_type_close",type:"button",onClick:n,children:Object(_.jsx)("img",{src:C,alt:"\u041a\u0440\u0435\u0441\u0442\u0438\u043a \u0437\u0430\u043a\u0440\u044b\u0442\u0438\u044f",className:"popup__close-icon"})}),Object(_.jsx)("img",{className:"popup__image",src:t?t.link:"popup_is-opened",alt:"\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430"}),Object(_.jsx)("p",{className:"popup__subtitle",children:t?t.name:"popup_is-opened"})]})})},S=n(22),U=n(23),E=new(function(){function e(t){var n=t.baseUrl;Object(S.a)(this,e),this._baseUrl=n}return Object(U.a)(e,[{key:"getInitialCards",value:function(){return fetch(this._baseUrl+"cards",{method:"GET",headers:this.headers(),credentials:"include"}).then(this._handleResOk)}},{key:"addCards",value:function(e){return fetch(this._baseUrl+"cards",{method:"POST",headers:this.headers(),credentials:"include",body:JSON.stringify({name:e.name,link:e.link})}).then(this._handleResOk)}},{key:"addUserId",value:function(e){return fetch(this._baseUrl+"users/me",{method:"PATCH",headers:this.headers(),credentials:"include",body:JSON.stringify({name:e.name,about:e.about})}).then(this._handleResOk)}},{key:"getUserId",value:function(){return fetch(this._baseUrl+"users/me",{method:"GET",headers:this.headers(),credentials:"include"}).then(this._handleResOk)}},{key:"addAvatarId",value:function(e){return fetch(this._baseUrl+"users/me/avatar",{method:"PATCH",headers:this.headers(),credentials:"include",body:JSON.stringify({avatar:e.avatar})}).then(this._handleResOk)}},{key:"getAllNeededData",value:function(){return Promise.all([this.getInitialCards(),this.getUserId()])}},{key:"deleteCard",value:function(e){return fetch(this._baseUrl+"cards/"+e,{method:"DELETE",headers:this.headers(),credentials:"include"}).then(this._handleResOk)}},{key:"likeCard",value:function(e,t){return fetch("".concat(this._baseUrl,"cards/").concat(e,"/likes"),{method:t?"PUT":"DELETE",headers:this.headers(),credentials:"include"}).then(this._handleResOk)}},{key:"signin",value:function(e){return fetch("".concat(this._baseUrl,"signin"),{method:"POST",headers:this.headers(),credentials:"include",body:JSON.stringify(e)}).then(this._handleResOk)}},{key:"signup",value:function(e){return fetch("".concat(this._baseUrl,"signup"),{method:"POST",headers:this.headers(),credentials:"include",body:JSON.stringify(e)}).then(this._handleResOk)}},{key:"_handleResOk",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}},{key:"headers",value:function(){return{authorization:"Bearer ".concat(localStorage.getItem("token")),"Content-Type":"application/json"}}}]),e}())({baseUrl:"//localhost:3001/"});var I=function(e){var t=e.title,n=e.name,a=e.isOpen,c=e.children,s=e.onClose,o=e.button,i=e.onSubmit;return Object(_.jsx)("section",{className:"popup popup_".concat(n," ").concat(a),children:Object(_.jsx)("div",{className:"popup__container",children:Object(_.jsxs)("form",{className:"popup__content",name:n,onSubmit:i,children:[Object(_.jsx)("button",{className:"button button_type_close",onClick:s,type:"button",children:Object(_.jsx)("img",{src:C,alt:"\u041a\u0440\u0435\u0441\u0442\u0438\u043a \u0437\u0430\u043a\u0440\u044b\u0442\u0438\u044f",className:"popup__close-icon"})}),Object(_.jsx)("h2",{className:"popup__title",children:t}),c,Object(_.jsx)("button",{className:"button button_type_save",type:"submit",children:o})]})})})};var L=function(e){var t=e.isOpen,n=e.onClose,a=e.onUpdateUser,s=c.a.useState(""),o=Object(l.a)(s,2),i=o[0],r=o[1],u=c.a.useState(""),d=Object(l.a)(u,2),p=d[0],j=d[1],m=c.a.useContext(b);return c.a.useEffect((function(){r(m.name||""),j(m.about||"")}),[m]),Object(_.jsx)(I,{title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",name:"edit",isOpen:t?"popup_is-opened":"",onClose:n,onSubmit:function(e){e.preventDefault(),a({name:i,about:p})},button:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",children:Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("input",{value:i,onChange:function(e){r(e.target.value)},placeholder:"\u0418\u043c\u044f",required:!0,type:"text",name:"name",minLength:"2",maxLength:"40",id:"name-profile",className:"popup__name popup__name_type_title"}),Object(_.jsx)("span",{id:"name-profile-error",className:"error"}),Object(_.jsx)("input",{onChange:function(e){j(e.target.value)},value:p,placeholder:"\u041e \u0441\u0435\u0431\u0435",required:!0,type:"text",name:"about",minLength:"2",maxLength:"200",id:"secondname-profile",className:"popup__name popup__name_type_subtitle"}),Object(_.jsx)("span",{id:"secondname-profile-error",className:"error"})]})})};var P=function(e){var t=e.isOpen,n=e.onClose,a=e.onUpdateAvatar,s=c.a.useRef();return Object(_.jsx)(I,{title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",name:"avatar",isOpen:t?"popup_is-opened":"",onClose:n,button:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",onSubmit:function(e){e.preventDefault(),a({avatar:s.current.value})},children:Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("input",{ref:s,placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0,type:"url",name:"avatar",minLength:"2",id:"link",className:"popup__name popup__place_type_subtitle"}),Object(_.jsx)("span",{id:"link-error",className:"error"})]})})};var T=function(e){var t=e.isOpen,n=e.onClose,a=e.onUpdatePlace,s=c.a.useState(""),o=Object(l.a)(s,2),i=o[0],r=o[1],u=c.a.useState(""),d=Object(l.a)(u,2),p=d[0],j=d[1];return Object(_.jsx)(I,{title:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443",name:"add",isOpen:t?"popup_is-opened":"",onClose:n,button:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",onSubmit:function(e){e.preventDefault(),a({name:i,link:p})},children:Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("input",{value:i,onChange:function(e){r(e.target.value)},placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",required:!0,type:"text",name:"place",minLength:"2",id:"name-card",className:"popup__name popup__place_type_title"}),Object(_.jsx)("span",{id:"name-card-error",className:"error"}),Object(_.jsx)("input",{onChange:function(e){j(e.target.value)},value:p,placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0,type:"url",name:"link",minLength:"2",maxLength:"200",id:"secondname",className:"popup__name popup__place_type_subtitle"}),Object(_.jsx)("span",{id:"link-error",className:"error"})]})})},w=n(11);var A=function(e){var t=e.handleLogin,n=Object(a.useState)({email:"",password:""}),c=Object(l.a)(n,2),s=c[0],o=c[1];function r(e){var t=e.target,n=t.name,a=t.value;o(Object(i.a)(Object(i.a)({},s),{},Object(w.a)({},n,a)))}return Object(_.jsx)("section",{className:"login",children:Object(_.jsxs)("form",{className:"login__form",onSubmit:function(e){console.log(e),e.preventDefault(),s.email&&s.password&&t(s.email,s.password)},children:[Object(_.jsx)("h1",{className:"login__title",children:"\u0412\u0445\u043e\u0434"}),Object(_.jsx)("input",{value:s.email,onChange:r,placeholder:"\u041b\u043e\u0433\u0438\u043d",required:!0,type:"text",name:"email",minLength:"2",maxLength:"40",id:"email",className:"login__name login__name_title"}),Object(_.jsx)("input",{onChange:r,value:s.password,placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",required:!0,type:"text",name:"password",minLength:"2",maxLength:"200",id:"password",className:"login__name login__name_subtitle"}),Object(_.jsx)("button",{className:"login__button",type:"submit",children:"\u0412\u043e\u0439\u0442\u0438"})]})})},R="".concat(window.location.protocol).concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_URL||"//localhost:3001");var D=function(e){var t=e.handleRegister,n=e.showPopup,c=Object(a.useState)({email:"",password:""}),s=Object(l.a)(c,2),o=s[0],r=s[1],u=Object(a.useState)(""),d=Object(l.a)(u,2),p=(d[0],d[1],Object(x.g)(),function(e){var t=e.target,n=t.name,a=t.value;r(Object(i.a)(Object(i.a)({},o),{},Object(w.a)({},n,a))),console.log(e)});return Object(_.jsx)("section",{className:"register",children:Object(_.jsxs)("form",{className:"register__form",onSubmit:function(e){e.preventDefault(),n(),t(o.email,o.password)},children:[Object(_.jsx)("h1",{className:"register__title",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(_.jsx)("input",{value:o.email,onChange:p,placeholder:"\u041b\u043e\u0433\u0438\u043d",required:!0,type:"text",name:"email",minLength:"2",maxLength:"40",id:"email",className:"register__name register__name_title"}),Object(_.jsx)("input",{onChange:p,value:o.password,placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",required:!0,type:"text",name:"password",minLength:"2",maxLength:"200",id:"password",className:"register__name register__name_subtitle"}),Object(_.jsx)("button",{className:"register__button",type:"submit",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"}),Object(_.jsx)(v.b,{to:"/signin",className:"register__signin",children:"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0435\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b? \u0412\u043e\u0439\u0442\u0438"})]})})},F=function(e){var t=e.component,n=Object(u.a)(e,["component"]);return Object(_.jsx)(x.b,{children:function(){return n.loggedIn?Object(_.jsx)(t,Object(i.a)({},n)):Object(_.jsx)(x.a,{to:"./signin"})}})},q=n.p+"static/media/Union.1b6082f8.svg",J=n.p+"static/media/Union-2.df8eddf6.svg";var B=function(e){var t=e.isOpen,n=e.onClose,a=e.status;return Object(_.jsx)("section",{className:"popup popup_info ".concat(t?"popup_is-opened":""),children:Object(_.jsxs)("div",{className:"popup__container",children:[Object(_.jsx)("button",{className:"button button_type_close",type:"button",onClick:n,children:Object(_.jsx)("img",{src:C,alt:"\u041a\u0440\u0435\u0441\u0442\u0438\u043a \u0437\u0430\u043a\u0440\u044b\u0442\u0438\u044f",className:"popup__close-icon"})}),"error"===a?Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("img",{className:"popup__image popup__image_denied",src:J,alt:"\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430"}),Object(_.jsx)("p",{className:"popup__title",children:"\u0427\u0442\u043e-\u0442\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437."})]}):Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("img",{className:"popup__image popup__image_denied",src:q,alt:"\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430"}),Object(_.jsx)("p",{className:"popup__title",children:"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0435\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!"})]})]})})};var H=function(){var e=c.a.useState([]),t=Object(l.a)(e,2),n=t[0],a=t[1],s=Object(x.g)(),o=c.a.useState({}),u=Object(l.a)(o,2),d=u[0],p=u[1],j=c.a.useState(!1),m=Object(l.a)(j,2),h=m[0],O=m[1],v=c.a.useState(""),N=Object(l.a)(v,2),C=N[0],S=N[1];c.a.useEffect((function(){E.getUserId().then((function(e){h&&p({name:e.name,about:e.about,avatar:e.avatar,_id:e._id})})).catch((function(e){console.log(e)}))}),[h]),c.a.useEffect((function(){E.getInitialCards().then((function(e){h&&(a(e),console.log(e))})).catch((function(e){console.log(e)}))}),[h]),console.log(n);var U=c.a.useState(!1),I=Object(l.a)(U,2),w=I[0],q=I[1],J=c.a.useState(!1),H=Object(l.a)(J,2),V=H[0],z=H[1],G=c.a.useState(!1),K=Object(l.a)(G,2),W=K[0],M=K[1],Q=c.a.useState(null),X=Object(l.a)(Q,2),Y=X[0],Z=X[1],$=c.a.useState(!1),ee=Object(l.a)($,2),te=ee[0],ne=ee[1],ae=c.a.useState(!1),ce=Object(l.a)(ae,2),se=ce[0],oe=ce[1];function ie(){M(!1),z(!1),q(!1),ne(!1),Z(null)}var re=function(){var e=localStorage.getItem("token");e?function(e){return console.log(e),fetch("".concat(R,"/users/me"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem(e))}}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return console.log(e)}))}(e).then((function(e){console.log(e),e&&(S(Object(i.a)(Object(i.a)({},C),{},{email:e.email})),O(!0))})).catch((function(e){return console.error(e)})):O(!1)};c.a.useEffect((function(){re()}),[]),c.a.useEffect((function(){h&&s.push("/")}),[s,h]);var le=function(){O(!1),localStorage.removeItem("token")};return Object(_.jsx)("div",{className:"page",children:Object(_.jsxs)(b.Provider,{value:d,children:[Object(_.jsx)(k,{handleSignOut:le,email:C.email}),Object(_.jsxs)(x.d,{children:[Object(_.jsx)(x.b,{path:"/signin",children:Object(_.jsx)(A,{handleLogin:function(e,t){(function(e,t){return fetch("".concat(R,"/signin"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then((function(e){return e.json()})).then((function(e){return console.log(e),e.token?(console.log(e),localStorage.setItem("token",e.token),e):void 0})).catch((function(e){return console.log(e)}))})(e,t).then((function(e){if(console.log(e),e.token&&(s.push("/"),localStorage.setItem("token",e.token),console.log(e),O(!0),S(Object(i.a)(Object(i.a)({},C),{},{email:e.email}))),400===e.statusCode)throw new Error("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a")})).catch((function(e){return console.log(e)}))}})}),Object(_.jsx)(x.b,{path:"/signup",children:Object(_.jsx)(D,{handleRegister:function(e,t){(function(e,t){return fetch("".concat(R,"/signup"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},credentials:"include",body:JSON.stringify({email:e,password:t})}).then((function(e){return e.json()}))})(e,t).then((function(e){if(console.log(e),400===e.statusCode)throw new Error("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a");oe(!0),s.push("/signin")})).catch((function(e){return console.log(e)}))},showPopup:function(){ne(!0)}})}),Object(_.jsx)(F,{path:"/",component:g,handleSignOut:le,onCardClick:function(e){var t=e.link,n=e.name;Z({link:t,name:n})},onEditProfile:function(){q(!0)},onAddPlace:function(){M(!0)},onEditAvatar:function(){z(!0)},cards:n,onCardLike:function(e){var t=e.likes,c=e.cardId,s=t.some((function(e){return e===d._id}));E.likeCard(c,!s).then((function(e){console.log(s);var t=n.map((function(t){return t._id===c?e:t}));a(t)}))},handleDeleteCard:function(e){var t=e.cardId;E.deleteCard(t).then((function(){var e=n.filter((function(e){return e._id!==t}));a(e)}))},loggedIn:h})]}),Object(_.jsx)(T,{isOpen:W,onClose:ie,onUpdatePlace:function(e){var t=e.name,c=e.link;E.addCards({name:t,link:c}).then((function(e){a([e].concat(Object(r.a)(n)))})).catch((function(e){console.log(e)})).finally((function(){ie()}))}}),Object(_.jsx)(P,{isOpen:V,onClose:ie,onUpdateAvatar:function(e){var t=e.avatar;E.addAvatarId({avatar:t}).then((function(e){p({avatar:e.avatar,name:e.name,about:e.about})})).catch((function(e){console.log(e)})).finally((function(){ie()}))}}),Object(_.jsx)(L,{isOpen:w,onClose:ie,onUpdateUser:function(e){var t=e.name,n=e.about;E.addUserId({name:t,about:n}).then((function(e){p({name:e.name,about:e.about,avatar:e.avatar})})).catch((function(e){console.log(e)})).finally((function(){ie()}))}}),Object(_.jsx)(B,{onClose:ie,isOpen:te,status:se}),Object(_.jsx)(y,{card:Y,onClose:ie}),Object(_.jsx)(f,{})]})})},V=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,40)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),s(e),o(e)}))};o.a.render(Object(_.jsx)(c.a.StrictMode,{children:Object(_.jsx)(v.a,{children:Object(_.jsx)(H,{})})}),document.getElementById("root")),V()}},[[39,1,2]]]);
//# sourceMappingURL=main.a1b1ef89.chunk.js.map