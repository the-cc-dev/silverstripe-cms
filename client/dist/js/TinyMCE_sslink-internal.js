!function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=18)}([function(e,t){e.exports=jQuery},function(e,t){e.exports=i18n},,,,,,,,function(e,t){e.exports=Injector},function(e,t){e.exports=InsertLinkModal},function(e,t){e.exports=React},function(e,t){e.exports=ReactApollo},function(e,t){e.exports=ReactDom},function(e,t){e.exports=ShortcodeSerialiser},function(e,t){e.exports=TinyMCEActionRegistrar},,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=n.n(r),o=n(15),a=n.n(o),l=n(11),s=n.n(l),c=n(13),u=n.n(c),d=n(12),p=(n.n(d),n(0)),f=n.n(p),g=n(14),k=n.n(g),h=n(10),m=(n.n(h),n(9));n.n(m),a.a.addAction("sslink",{text:i.a._t("CMS.LINKLABEL_PAGE","Page on this site"),onclick:function(e){return e.execCommand("sslinkinternal")}}).addCommandWithUrlTest("sslinkinternal",/^\[sitetree_link/);var _={init:function(e){e.addCommand("sslinkinternal",function(){f()("#"+e.id).entwine("ss").openLinkInternalDialog()})}},x="insert-link__dialog-wrapper--internal",A=n.i(m.provideInjector)(n.i(h.createInsertLinkModal)("SilverStripe\\CMS\\Controllers\\CMSPageEditController","editorInternalLink"));f.a.entwine("ss",function(e){e("textarea.htmleditor").entwine({openLinkInternalDialog:function(){var t=e("#"+x);t.length||(t=e('<div id="'+x+'" />'),e("body").append(t)),t.addClass("insert-link__dialog-wrapper"),t.setElement(this),t.open()}}),e("#"+x).entwine({renderModal:function(e){var t=this,n=ss.store,r=ss.apolloClient,o=function(){return t.close()},a=function(){return t.handleInsert.apply(t,arguments)},l=this.getOriginalAttributes();u.a.render(s.a.createElement(d.ApolloProvider,{store:n,client:r},s.a.createElement(A,{show:e,onInsert:a,onHide:o,title:i.a._t("CMS.LINK_PAGE","Link to a page"),bodyClassName:"modal__dialog",className:"insert-link__dialog-wrapper--internal",fileAttributes:l,identifier:"Admin.InsertLinkInternalModal"})),this[0])},buildAttributes:function(e){return{href:k.a.serialise({name:"sitetree_link",properties:{id:e.PageID}},!0)+(e.Anchor&&e.Anchor.length?"#"+e.Anchor:""),target:e.TargetBlank?"_blank":"",title:e.Description}},getOriginalAttributes:function(){var t=this.getElement().getEditor(),n=e(t.getSelectedNode()),r=(n.attr("href")||"").split("#");if(!r[0])return{};var i=k.a.match("sitetree_link",!1,r[0]);return i?{PageID:i.properties.id?parseInt(i.properties.id,10):0,Anchor:r[1]||"",Description:n.attr("title"),TargetBlank:!!n.attr("target")}:{}}})}),tinymce.PluginManager.add("sslinkinternal",function(e){return _.init(e)}),t.default=_}]);