"use strict";(self.webpackChunkmainapp=self.webpackChunkmainapp||[]).push([[5749],{4800:function(t,n,e){var i=e(5773),a=e(3782),o=e(7378),r=e(8037),l=e(582),s=e(7405),u={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p"},p=o.forwardRef((function(t,n){var e=t.align,l=void 0===e?"inherit":e,p=t.classes,c=t.className,h=t.color,d=void 0===h?"initial":h,f=t.component,m=t.display,E=void 0===m?"initial":m,y=t.gutterBottom,x=void 0!==y&&y,g=t.noWrap,v=void 0!==g&&g,b=t.paragraph,k=void 0!==b&&b,S=t.variant,C=void 0===S?"body1":S,Z=t.variantMapping,T=void 0===Z?u:Z,N=(0,a.Z)(t,["align","classes","className","color","component","display","gutterBottom","noWrap","paragraph","variant","variantMapping"]),M=f||(k?"p":T[C]||u[C])||"span";return o.createElement(M,(0,i.Z)({className:(0,r.Z)(p.root,c,"inherit"!==C&&p[C],"initial"!==d&&p["color".concat((0,s.Z)(d))],v&&p.noWrap,x&&p.gutterBottom,k&&p.paragraph,"inherit"!==l&&p["align".concat((0,s.Z)(l))],"initial"!==E&&p["display".concat((0,s.Z)(E))]),ref:n},N))}));n.Z=(0,l.Z)((function(t){return{root:{margin:0},body2:t.typography.body2,body1:t.typography.body1,caption:t.typography.caption,button:t.typography.button,h1:t.typography.h1,h2:t.typography.h2,h3:t.typography.h3,h4:t.typography.h4,h5:t.typography.h5,h6:t.typography.h6,subtitle1:t.typography.subtitle1,subtitle2:t.typography.subtitle2,overline:t.typography.overline,srOnly:{position:"absolute",height:1,width:1,overflow:"hidden"},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:t.palette.primary.main},colorSecondary:{color:t.palette.secondary.main},colorTextPrimary:{color:t.palette.text.primary},colorTextSecondary:{color:t.palette.text.secondary},colorError:{color:t.palette.error.main},displayInline:{display:"inline"},displayBlock:{display:"block"}}}),{name:"MuiTypography"})(p)},6054:function(t,n,e){e.d(n,{Z:function(){return o}});var i=e(1435),a=(e(7378),e(9690));function o(){return(0,i.Z)()||a.Z}},639:function(t,n,e){e.d(n,{n:function(){return i},C:function(){return a}});var i=function(t){return t.scrollTop};function a(t,n){var e=t.timeout,i=t.style,a=void 0===i?{}:i;return{duration:a.transitionDuration||"number"==typeof e?e:e[n.mode]||0,delay:a.transitionDelay}}},8943:function(t,n,e){e.d(n,{ZP:function(){return E}});var i=e(808),a=e(4314),o=e(7378),r=e(1542),l=!1,s=e(2291),u="unmounted",p="exited",c="entering",h="entered",d="exiting",f=function(t){function n(n,e){var i;i=t.call(this,n,e)||this;var a,o=e&&!e.isMounting?n.enter:n.appear;return i.appearStatus=null,n.in?o?(a=p,i.appearStatus=c):a=h:a=n.unmountOnExit||n.mountOnEnter?u:p,i.state={status:a},i.nextCallback=null,i}(0,a.Z)(n,t),n.getDerivedStateFromProps=function(t,n){return t.in&&n.status===u?{status:p}:null};var e=n.prototype;return e.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},e.componentDidUpdate=function(t){var n=null;if(t!==this.props){var e=this.state.status;this.props.in?e!==c&&e!==h&&(n=c):e!==c&&e!==h||(n=d)}this.updateStatus(!1,n)},e.componentWillUnmount=function(){this.cancelNextCallback()},e.getTimeouts=function(){var t,n,e,i=this.props.timeout;return t=n=e=i,null!=i&&"number"!=typeof i&&(t=i.exit,n=i.enter,e=void 0!==i.appear?i.appear:n),{exit:t,enter:n,appear:e}},e.updateStatus=function(t,n){void 0===t&&(t=!1),null!==n?(this.cancelNextCallback(),n===c?this.performEnter(t):this.performExit()):this.props.unmountOnExit&&this.state.status===p&&this.setState({status:u})},e.performEnter=function(t){var n=this,e=this.props.enter,i=this.context?this.context.isMounting:t,a=this.props.nodeRef?[i]:[r.findDOMNode(this),i],o=a[0],s=a[1],u=this.getTimeouts(),p=i?u.appear:u.enter;!t&&!e||l?this.safeSetState({status:h},(function(){n.props.onEntered(o)})):(this.props.onEnter(o,s),this.safeSetState({status:c},(function(){n.props.onEntering(o,s),n.onTransitionEnd(p,(function(){n.safeSetState({status:h},(function(){n.props.onEntered(o,s)}))}))})))},e.performExit=function(){var t=this,n=this.props.exit,e=this.getTimeouts(),i=this.props.nodeRef?void 0:r.findDOMNode(this);n&&!l?(this.props.onExit(i),this.safeSetState({status:d},(function(){t.props.onExiting(i),t.onTransitionEnd(e.exit,(function(){t.safeSetState({status:p},(function(){t.props.onExited(i)}))}))}))):this.safeSetState({status:p},(function(){t.props.onExited(i)}))},e.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},e.safeSetState=function(t,n){n=this.setNextCallback(n),this.setState(t,n)},e.setNextCallback=function(t){var n=this,e=!0;return this.nextCallback=function(i){e&&(e=!1,n.nextCallback=null,t(i))},this.nextCallback.cancel=function(){e=!1},this.nextCallback},e.onTransitionEnd=function(t,n){this.setNextCallback(n);var e=this.props.nodeRef?this.props.nodeRef.current:r.findDOMNode(this),i=null==t&&!this.props.addEndListener;if(e&&!i){if(this.props.addEndListener){var a=this.props.nodeRef?[this.nextCallback]:[e,this.nextCallback],o=a[0],l=a[1];this.props.addEndListener(o,l)}null!=t&&setTimeout(this.nextCallback,t)}else setTimeout(this.nextCallback,0)},e.render=function(){var t=this.state.status;if(t===u)return null;var n=this.props,e=n.children,a=(n.in,n.mountOnEnter,n.unmountOnExit,n.appear,n.enter,n.exit,n.timeout,n.addEndListener,n.onEnter,n.onEntering,n.onEntered,n.onExit,n.onExiting,n.onExited,n.nodeRef,(0,i.Z)(n,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return o.createElement(s.Z.Provider,{value:null},"function"==typeof e?e(t,a):o.cloneElement(o.Children.only(e),a))},n}(o.Component);function m(){}f.contextType=s.Z,f.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:m,onEntering:m,onEntered:m,onExit:m,onExiting:m,onExited:m},f.UNMOUNTED=u,f.EXITED=p,f.ENTERING=c,f.ENTERED=h,f.EXITING=d;var E=f},2293:function(t,n,e){e.r(n);var i=e(8639),a=e(1447),o=e(4800),r=e(3959),l=e(7378),s=e(9771),u=e(3018),p=e(5213),c=e(4140);n.default=function(){var t=(0,s.P)();return l.createElement(u.Z,{data:t},(function(){return l.createElement("div",null,l.createElement(p.Z,null),l.createElement("div",{style:{padding:"1em"}},l.createElement(i.Z,null,l.createElement(a.Z,{expandIcon:l.createElement(c.Z,null)},l.createElement(o.Z,null,"Topup dengan BNI")),l.createElement(r.Z,null,l.createElement(o.Z,null,l.createElement("h4",null,"ATM"),l.createElement("ol",null,l.createElement("li",null,"Masukkan Kartu ATM & PIN kamu"),l.createElement("li",null,"Pilih Pembayaran Virtual Account"),l.createElement("li",null,"Masukkan ",l.createElement("b",null,t.vircode.bni_code)),l.createElement("li",null,"Masukkan Nominal Top Up"),l.createElement("li",null,"Konfirmasi Transaksi")))))))}))}}}]);
//# sourceMappingURL=component---src-pages-digital-topup-jsx-7337fe7385df0f5bc6fc.js.map