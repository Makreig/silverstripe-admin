webpackJsonp([2],{123:function(e,t){e.exports=ReactApollo},150:function(e,t){e.exports=FormBuilderModal},151:function(e,t){e.exports=SchemaActions},180:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e){return{actions:{schema:(0,d.bindActionCreators)(b,e)}}}Object.defineProperty(t,"__esModule",{value:!0}),t.createInsertLinkModal=t.InsertLinkModal=void 0;var l=function(){function e(e,t){var n=[],r=!0,i=!1,o=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){i=!0,o=e}finally{try{!r&&s.return&&s.return()}finally{if(i)throw o}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(0),f=r(c),d=n(44),p=n(43),h=n(150),m=r(h),v=n(151),b=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(v),y=function(e){function t(e){i(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleSubmit=n.handleSubmit.bind(n),n.setOverrides(e.show?e:null),n}return a(t,e),u(t,[{key:"componentWillReceiveProps",value:function(e){(e.show&&!this.props.show||!e.show&&this.props.show)&&this.setOverrides(e.show?e:null)}},{key:"componentWillUnmount",value:function(){this.setOverrides()}},{key:"setOverrides",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(e){if(e.schemaUrl){var t=Object.assign({},e.fileAttributes);delete t.ID;var n={fields:Object.entries(t).map(function(e){var t=l(e,2);return{name:t[0],value:t[1]}})};this.props.actions.schema.setSchemaStateOverrides(e.schemaUrl,n)}}else{var r=e&&e.schemaUrl||this.props.schemaUrl;r&&this.props.actions.schema.setSchemaStateOverrides(r,null)}}},{key:"getModalProps",value:function(){var e=Object.assign({},this.props,{handleSubmit:this.handleSubmit,handleHide:this.props.onHide});return delete e.onHide,delete e.onInsert,delete e.sectionConfig,e}},{key:"handleSubmit",value:function(e,t){switch(t){case"action_cancel":this.props.onHide();break;default:this.props.onInsert(e,t)}return Promise.resolve()}},{key:"render",value:function(){var e=this.getModalProps();return f.default.createElement(m.default,e)}}]),t}(c.Component);y.propTypes={show:c.PropTypes.bool,schemaUrl:c.PropTypes.string,onInsert:c.PropTypes.func.isRequired,onHide:c.PropTypes.func.isRequired,actions:c.PropTypes.object},y.defaultProps={};var w=function(e,t){function n(n){var r=n.config.sections.find(function(t){return t.name===e});return{sectionConfig:r,schemaUrl:""+r.form[t].schemaUrl}}return(0,p.connect)(n,s)(y)};t.InsertLinkModal=y,t.createInsertLinkModal=w,t.default=(0,p.connect)(function(){return{}},s)(y)},24:function(e,t){e.exports=i18n},63:function(e,t){e.exports=Injector},905:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(24),o=r(i),a=n(97),s=r(a),l=n(0),u=r(l),c=n(28),f=r(c),d=n(123),p=n(26),h=r(p),m=n(180),v=n(63);s.default.addAction("sslink",{text:o.default._t("Admin.LINKLABEL_EMAIL","Link to email address"),onclick:function(e){return e.execCommand("sslinkemail")}});var b={init:function(e){e.addCommand("sslinkemail",function(){window.jQuery("#"+e.id).entwine("ss").openLinkEmailDialog()})}},y="insert-link__dialog-wrapper--email",w=(0,v.provideInjector)((0,m.createInsertLinkModal)("SilverStripe\\Admin\\LeftAndMain","EditorEmailLink"));h.default.entwine("ss",function(e){e("textarea.htmleditor").entwine({openLinkEmailDialog:function(){var t=e("#"+y);t.length||(t=e('<div id="'+y+'" />'),e("body").append(t)),t.addClass("insert-link__dialog-wrapper"),t.setElement(this),t.open()}}),e("#"+y).entwine({renderModal:function(e){var t=this,n=ss.store,r=ss.apolloClient,i=function(){return t.close()},a=function(){return t.handleInsert.apply(t,arguments)},s=this.getOriginalAttributes();f.default.render(u.default.createElement(d.ApolloProvider,{store:n,client:r},u.default.createElement(w,{show:e,onInsert:a,onHide:i,title:o.default._t("Admin.LINK_EMAIL","Insert email link"),bodyClassName:"modal__dialog",className:"insert-link__dialog-wrapper--email",fileAttributes:s})),this[0])},getOriginalAttributes:function(){var t=this.getElement().getEditor(),n=e(t.getSelectedNode()),r=(n.attr("href")||"").split("?"),i=r[0].replace(/^mailto:/,"").split("?")[0];i.match(/.+@.+\..+/)||(i="");var o=r[1]?r[1].match(/subject=([^&]+)/):"";return{Link:i,Subject:o?o[1]:"",Description:n.attr("title")}},buildAttributes:function(e){var t=this._super(e),n="",r=t.href.replace(/^mailto:/,"").split("?")[0];return r.match(/.+@.+\..+/)||(r=""),r&&(n="mailto:"+r),n&&e.Subject&&(n=n+"?subject="+encodeURIComponent(e.Subject)),t.href=n,delete t.target,t}})}),tinymce.PluginManager.add("sslinkemail",function(e){return b.init(e)}),t.default=b},97:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(){function e(){r(this,e),this.actions={}}return i(e,[{key:"addAction",value:function(e,t){this.actions[e]=this.getActions(e).concat([t])}},{key:"getActions",value:function(e){return this.actions[e]||[]}}]),e}();window.ss=window.ss||{},window.ss.tinymceactions=window.ss.tinymceactions||new o,t.default=window.ss.tinymceactions}},[905]);