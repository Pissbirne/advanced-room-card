function e(e,t,i,o){var s,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var r=e.length-1;r>=0;r--)(s=e[r])&&(a=(n<3?s(a):n>3?s(t,i,a):s(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a}"function"==typeof SuppressedError&&SuppressedError;const t=globalThis,i=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),s=new WeakMap;let n=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(i&&void 0===e){const i=void 0!==t&&1===t.length;i&&(e=s.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&s.set(t,e))}return e}toString(){return this.cssText}};const a=(e,...t)=>{const i=1===e.length?e[0]:t.reduce((t,i,o)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[o+1],e[0]);return new n(i,e,o)},r=i?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new n("string"==typeof e?e:e+"",void 0,o))(t)})(e):e,{is:l,defineProperty:c,getOwnPropertyDescriptor:d,getOwnPropertyNames:h,getOwnPropertySymbols:p,getPrototypeOf:u}=Object,m=globalThis,g=m.trustedTypes,f=g?g.emptyScript:"",_=m.reactiveElementPolyfillSupport,v=(e,t)=>e,$={toAttribute(e,t){switch(t){case Boolean:e=e?f:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},b=(e,t)=>!l(e,t),y={attribute:!0,type:String,converter:$,reflect:!1,useDefault:!1,hasChanged:b};Symbol.metadata??=Symbol("metadata"),m.litPropertyMetadata??=new WeakMap;let x=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=y){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),o=this.getPropertyDescriptor(e,i,t);void 0!==o&&c(this.prototype,e,o)}}static getPropertyDescriptor(e,t,i){const{get:o,set:s}=d(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:o,set(t){const n=o?.call(this);s?.call(this,t),this.requestUpdate(e,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??y}static _$Ei(){if(this.hasOwnProperty(v("elementProperties")))return;const e=u(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(v("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v("properties"))){const e=this.properties,t=[...h(e),...p(e)];for(const i of t)this.createProperty(i,e[i])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,i]of t)this.elementProperties.set(e,i)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(r(e))}else void 0!==e&&t.push(r(e));return t}static _$Eu(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,o)=>{if(i)e.adoptedStyleSheets=o.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const i of o){const o=document.createElement("style"),s=t.litNonce;void 0!==s&&o.setAttribute("nonce",s),o.textContent=i.cssText,e.appendChild(o)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){const i=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,i);if(void 0!==o&&!0===i.reflect){const s=(void 0!==i.converter?.toAttribute?i.converter:$).toAttribute(t,i.type);this._$Em=e,null==s?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(e,t){const i=this.constructor,o=i._$Eh.get(e);if(void 0!==o&&this._$Em!==o){const e=i.getPropertyOptions(o),s="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:$;this._$Em=o;const n=s.fromAttribute(t,e.type);this[o]=n??this._$Ej?.get(o)??n,this._$Em=null}}requestUpdate(e,t,i,o=!1,s){if(void 0!==e){const n=this.constructor;if(!1===o&&(s=this[e]),i??=n.getPropertyOptions(e),!((i.hasChanged??b)(s,t)||i.useDefault&&i.reflect&&s===this._$Ej?.get(e)&&!this.hasAttribute(n._$Eu(e,i))))return;this.C(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:o,wrapped:s},n){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,n??t??this[e]),!0!==s||void 0!==n)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),!0===o&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,i]of e){const{wrapped:e}=i,o=this[t];!0!==e||this._$AL.has(t)||void 0===o||this.C(t,void 0,i,o)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[v("elementProperties")]=new Map,x[v("finalized")]=new Map,_?.({ReactiveElement:x}),(m.reactiveElementVersions??=[]).push("2.1.2");const w=globalThis,A=e=>e,k=w.trustedTypes,E=k?k.createPolicy("lit-html",{createHTML:e=>e}):void 0,S="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,R="?"+C,M=`<${R}>`,L=document,P=()=>L.createComment(""),H=e=>null===e||"object"!=typeof e&&"function"!=typeof e,O=Array.isArray,F="[ \t\n\f\r]",z=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,D=/-->/g,U=/>/g,N=RegExp(`>|${F}(?:([^\\s"'>=/]+)(${F}*=${F}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),T=/'/g,j=/"/g,I=/^(?:script|style|textarea|title)$/i,V=(e=>(t,...i)=>({_$litType$:e,strings:t,values:i}))(1),B=Symbol.for("lit-noChange"),W=Symbol.for("lit-nothing"),Y=new WeakMap,q=L.createTreeWalker(L,129);function Z(e,t){if(!O(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(t):t}const K=(e,t)=>{const i=e.length-1,o=[];let s,n=2===t?"<svg>":3===t?"<math>":"",a=z;for(let t=0;t<i;t++){const i=e[t];let r,l,c=-1,d=0;for(;d<i.length&&(a.lastIndex=d,l=a.exec(i),null!==l);)d=a.lastIndex,a===z?"!--"===l[1]?a=D:void 0!==l[1]?a=U:void 0!==l[2]?(I.test(l[2])&&(s=RegExp("</"+l[2],"g")),a=N):void 0!==l[3]&&(a=N):a===N?">"===l[0]?(a=s??z,c=-1):void 0===l[1]?c=-2:(c=a.lastIndex-l[2].length,r=l[1],a=void 0===l[3]?N:'"'===l[3]?j:T):a===j||a===T?a=N:a===D||a===U?a=z:(a=N,s=void 0);const h=a===N&&e[t+1].startsWith("/>")?" ":"";n+=a===z?i+M:c>=0?(o.push(r),i.slice(0,c)+S+i.slice(c)+C+h):i+C+(-2===c?t:h)}return[Z(e,n+(e[i]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),o]};class J{constructor({strings:e,_$litType$:t},i){let o;this.parts=[];let s=0,n=0;const a=e.length-1,r=this.parts,[l,c]=K(e,t);if(this.el=J.createElement(l,i),q.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(o=q.nextNode())&&r.length<a;){if(1===o.nodeType){if(o.hasAttributes())for(const e of o.getAttributeNames())if(e.endsWith(S)){const t=c[n++],i=o.getAttribute(e).split(C),a=/([.?@])?(.*)/.exec(t);r.push({type:1,index:s,name:a[2],strings:i,ctor:"."===a[1]?te:"?"===a[1]?ie:"@"===a[1]?oe:ee}),o.removeAttribute(e)}else e.startsWith(C)&&(r.push({type:6,index:s}),o.removeAttribute(e));if(I.test(o.tagName)){const e=o.textContent.split(C),t=e.length-1;if(t>0){o.textContent=k?k.emptyScript:"";for(let i=0;i<t;i++)o.append(e[i],P()),q.nextNode(),r.push({type:2,index:++s});o.append(e[t],P())}}}else if(8===o.nodeType)if(o.data===R)r.push({type:2,index:s});else{let e=-1;for(;-1!==(e=o.data.indexOf(C,e+1));)r.push({type:7,index:s}),e+=C.length-1}s++}}static createElement(e,t){const i=L.createElement("template");return i.innerHTML=e,i}}function G(e,t,i=e,o){if(t===B)return t;let s=void 0!==o?i._$Co?.[o]:i._$Cl;const n=H(t)?void 0:t._$litDirective$;return s?.constructor!==n&&(s?._$AO?.(!1),void 0===n?s=void 0:(s=new n(e),s._$AT(e,i,o)),void 0!==o?(i._$Co??=[])[o]=s:i._$Cl=s),void 0!==s&&(t=G(e,s._$AS(e,t.values),s,o)),t}class Q{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,o=(e?.creationScope??L).importNode(t,!0);q.currentNode=o;let s=q.nextNode(),n=0,a=0,r=i[0];for(;void 0!==r;){if(n===r.index){let t;2===r.type?t=new X(s,s.nextSibling,this,e):1===r.type?t=new r.ctor(s,r.name,r.strings,this,e):6===r.type&&(t=new se(s,this,e)),this._$AV.push(t),r=i[++a]}n!==r?.index&&(s=q.nextNode(),n++)}return q.currentNode=L,o}p(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class X{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,o){this.type=2,this._$AH=W,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=G(this,e,t),H(e)?e===W||null==e||""===e?(this._$AH!==W&&this._$AR(),this._$AH=W):e!==this._$AH&&e!==B&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>O(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==W&&H(this._$AH)?this._$AA.nextSibling.data=e:this.T(L.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:i}=e,o="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=J.createElement(Z(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===o)this._$AH.p(t);else{const e=new Q(o,this),i=e.u(this.options);e.p(t),this.T(i),this._$AH=e}}_$AC(e){let t=Y.get(e.strings);return void 0===t&&Y.set(e.strings,t=new J(e)),t}k(e){O(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,o=0;for(const s of e)o===t.length?t.push(i=new X(this.O(P()),this.O(P()),this,this.options)):i=t[o],i._$AI(s),o++;o<t.length&&(this._$AR(i&&i._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=A(e).nextSibling;A(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class ee{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,o,s){this.type=1,this._$AH=W,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=s,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=W}_$AI(e,t=this,i,o){const s=this.strings;let n=!1;if(void 0===s)e=G(this,e,t,0),n=!H(e)||e!==this._$AH&&e!==B,n&&(this._$AH=e);else{const o=e;let a,r;for(e=s[0],a=0;a<s.length-1;a++)r=G(this,o[i+a],t,a),r===B&&(r=this._$AH[a]),n||=!H(r)||r!==this._$AH[a],r===W?e=W:e!==W&&(e+=(r??"")+s[a+1]),this._$AH[a]=r}n&&!o&&this.j(e)}j(e){e===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class te extends ee{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===W?void 0:e}}class ie extends ee{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==W)}}class oe extends ee{constructor(e,t,i,o,s){super(e,t,i,o,s),this.type=5}_$AI(e,t=this){if((e=G(this,e,t,0)??W)===B)return;const i=this._$AH,o=e===W&&i!==W||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,s=e!==W&&(i===W||o);o&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class se{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){G(this,e)}}const ne=w.litHtmlPolyfillSupport;ne?.(J,X),(w.litHtmlVersions??=[]).push("3.3.2");const ae=globalThis;class re extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{const o=i?.renderBefore??t;let s=o._$litPart$;if(void 0===s){const e=i?.renderBefore??null;o._$litPart$=s=new X(t.insertBefore(P(),e),e,void 0,i??{})}return s._$AI(e),s})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return B}}re._$litElement$=!0,re.finalized=!0,ae.litElementHydrateSupport?.({LitElement:re});const le=ae.litElementPolyfillSupport;le?.({LitElement:re}),(ae.litElementVersions??=[]).push("4.2.2");const ce=e=>(t,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},de={attribute:!0,type:String,converter:$,reflect:!1,hasChanged:b},he=(e=de,t,i)=>{const{kind:o,metadata:s}=i;let n=globalThis.litPropertyMetadata.get(s);if(void 0===n&&globalThis.litPropertyMetadata.set(s,n=new Map),"setter"===o&&((e=Object.create(e)).wrapped=!0),n.set(i.name,e),"accessor"===o){const{name:o}=i;return{set(i){const s=t.get.call(this);t.set.call(this,i),this.requestUpdate(o,s,e,!0,i)},init(t){return void 0!==t&&this.C(o,void 0,e,t),t}}}if("setter"===o){const{name:o}=i;return function(i){const s=this[o];t.call(this,i),this.requestUpdate(o,s,e,!0,i)}}throw Error("Unsupported decorator location: "+o)};function pe(e){return(t,i)=>"object"==typeof i?he(e,t,i):((e,t,i)=>{const o=t.hasOwnProperty(i);return t.constructor.createProperty(i,e),o?Object.getOwnPropertyDescriptor(t,i):void 0})(e,t,i)}function ue(e){return pe({...e,state:!0,attribute:!1})}const me="advanced-room-card",ge=`${me}`,fe=`${me}-editor`,_e=`custom:${ge}`,ve="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",$e="M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z",be="M11,4H13V16L18.5,10.5L19.92,11.92L12,19.84L4.08,11.92L5.5,10.5L11,16V4Z",ye="__unassigned";let xe=class extends re{setConfig(e){this._config={title:"",...e,type:e.type||_e,floors:(e.floors||[]).map(e=>({...e,rooms:e.rooms||[]}))}}_emit(){this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0}))}_patch(e){this._config={...this._config,...e},this._emit()}_patchFloors(e){this._patch({floors:e})}_enabledFloorIds(){return new Set(this._config.floors.map(e=>e.floor_id))}_availableFloors(){const e=Object.values(this.hass.floors||{}),t=this._enabledFloorIds(),i=e.filter(e=>!t.has(e.floor_id)).sort((e,t)=>(e.level??0)-(t.level??0)||e.name.localeCompare(t.name));if(!t.has(ye)){const e=Object.values(this.hass.areas||{}).some(e=>!e.floor_id);e&&i.push({floor_id:ye,name:"Unassigned areas",icon:"mdi:floor-plan",level:null})}return i}_floorDisplay(e){const t=this.hass.floors?.[e];return e===ye?{name:"Unassigned areas",icon:"mdi:floor-plan"}:{name:t?.name||e,icon:t?.icon||void 0}}_addFloor(e){e&&(this._enabledFloorIds().has(e)||this._patchFloors([...this._config.floors,{floor_id:e,rooms:[]}]))}_removeFloor(e){this._patchFloors(this._config.floors.filter((t,i)=>i!==e))}_moveFloor(e,t){const i=e+t;if(i<0||i>=this._config.floors.length)return;const o=[...this._config.floors];[o[e],o[i]]=[o[i],o[e]],this._patchFloors(o)}_updateFloor(e,t){const i=this._config.floors.map((i,o)=>o===e?{...i,...t}:i);this._patchFloors(i)}_areasForFloor(e){return Object.values(this.hass.areas||{}).filter(t=>e===ye?!t.floor_id:t.floor_id===e).sort((e,t)=>e.name.localeCompare(t.name)).map(e=>e.area_id)}_updateRoom(e,t,i){const o=this._config.floors[e].rooms.map((e,o)=>o===t?{...e,...i}:e);this._updateFloor(e,{rooms:o})}_areaEntities(e,t={}){if(!e)return[];const i=this.hass,o=[];for(const[s,n]of Object.entries(i.entities||{})){if(t.domain&&!s.startsWith(`${t.domain}.`))continue;if(n.disabled_by||n.hidden_by||n.entity_category)continue;if(n.area_id===e||!n.area_id&&!!n.device_id&&i.devices?.[n.device_id]?.area_id===e){if(t.deviceClasses){const e=i.states[s]?.attributes?.device_class;if(!e||!t.deviceClasses.includes(e))continue}o.push(s)}}return o.sort()}_presenceCandidates(e){return this._areaEntities(e,{domain:"binary_sensor",deviceClasses:["occupancy","presence","motion"]})}_tempCandidates(e){return this._areaEntities(e,{domain:"sensor",deviceClasses:["temperature"]})}_humidityCandidates(e){return this._areaEntities(e,{domain:"sensor",deviceClasses:["humidity"]})}_addRoom(e,t){const i=t?this.hass.areas?.[t]:void 0,o=this._presenceCandidates(t)[0],s=this._tempCandidates(t)[0],n=this._humidityCandidates(t)[0],a={id:(r="room",`${r}_${Math.random().toString(36).slice(2,8)}`),name:i?.name||"New room",icon:i?.icon||void 0,area_id:t,presence_entity:o,temperature_entity:s,humidity_entity:n,light_entities:[],extra_sensors:[]};var r;const l=this._config.floors[e];this._updateFloor(e,{rooms:[...l.rooms,a]})}_removeRoom(e,t){const i=this._config.floors[e];this._updateFloor(e,{rooms:i.rooms.filter((e,i)=>i!==t)})}_moveRoom(e,t,i){const o=this._config.floors[e],s=t+i;if(s<0||s>=o.rooms.length)return;const n=[...o.rooms];[n[t],n[s]]=[n[s],n[t]],this._updateFloor(e,{rooms:n})}_moveRoomTo(e,t,i){if(e!==this._dragRoom?.floor)return;const o=this._config.floors[e];if(t===i)return;const n=[...o.rooms];const[s]=n.splice(t,1);n.splice(i,0,s);this._updateFloor(e,{rooms:n})}render(){if(!this._config)return V``;const e=this._availableFloors();return V`
      <div class="editor">
        <div class="section-head sub"><span>Card</span></div>
        <label class="text-row">
          <span class="text-label">Title</span>
          <input
            type="text"
            class="text-input"
            placeholder="Home"
            .value=${this._config.title||""}
            @input=${e=>this._patch({title:e.target.value})}
          />
        </label>
        <label class="number-row">
          <span class="number-label">Raum-Höhe (px)</span>
          <input
            type="number"
            class="number-input"
            min="32"
            max="120"
            step="2"
            .value=${String(this._config.room_height??56)}
            @input=${e=>{const t=e.target.value.trim();if(!t)return void this._patch({room_height:void 0});const i=parseInt(t,10);Number.isFinite(i)&&i>=32&&i<=120&&this._patch({room_height:i})}}
          />
        </label>
        <label class="number-row">
          <span class="number-label">Max rooms shown (collapsed)</span>
          <input
            type="number"
            class="number-input"
            min="1"
            max="50"
            .value=${String(this._config.max_rooms??5)}
            @input=${e=>{const t=e.target.value.trim();if(!t)return void this._patch({max_rooms:void 0});const i=parseInt(t,10);Number.isFinite(i)&&i>0&&this._patch({max_rooms:i})}}
          />
        </label>
        <label class="number-row">
          <span class="number-label">Frisch-Schwelle (Min)</span>
          <input
            type="number"
            class="number-input"
            min="1"
            max="60"
            step="1"
            .value=${String(this._config.fresh_threshold??5)}
            @input=${e=>{const t=e.target.value.trim();if(!t)return void this._patch({fresh_threshold:void 0});const i=parseInt(t,10);Number.isFinite(i)&&i>=1&&i<=60&&this._patch({fresh_threshold:i})}}
          />
        </label>
        <label class="toggle-row">
          <ha-switch
            .checked=${this._config.remember_expanded??!0}
            @change=${e=>{const t=e.target.checked;this._patch({remember_expanded:!!t&&void 0})}}
          ></ha-switch>
          <span>Remember expanded state</span>
        </label>
        <label class="toggle-row">
          <ha-switch
            .checked=${this._config.show_title??!0}
            @change=${e=>{const t=e.target.checked;this._patch({show_title:!!t&&void 0})}}
          ></ha-switch>
          <span>Titel anzeigen</span>
        </label>
        <label class="toggle-row">
          <ha-switch
            .checked=${this._config.show_expand_button??!0}
            @change=${e=>{const t=e.target.checked;this._patch({show_expand_button:!!t&&void 0})}}
          ></ha-switch>
          <span>Ausklappen-Button anzeigen</span>
        </label>
        <label class="toggle-row">
          <ha-switch
            .checked=${this._config.group_floors??!0}
            @change=${e=>{const t=e.target.checked;this._patch({group_floors:!!t&&void 0})}}
          ></ha-switch>
          <span>Etagen beschriften</span>
        </label>
        <label class="toggle-row">
          <ha-switch
            .checked=${this._config.show_controls??!1}
            @change=${e=>{const t=e.target.checked;this._patch({show_controls:t||void 0})}}
          ></ha-switch>
          <span>Steuerelemente anzeigen</span>
        </label>
        <div class="section-divider"></div>

        <div class="section-head">
          <span>Floors</span>
        </div>

        ${0===this._config.floors.length?V`<p class="hint">No floors enabled yet. Pick one below.</p>`:this._config.floors.map((e,t)=>this._renderFloor(e,t))}

        ${e.length>0?V`
              <div class="add-floor">
                <span class="add-floor-label">Add floor from HA:</span>
                <div class="floor-chips">
                  ${e.map(e=>V`
                      <button
                        class="chip-btn"
                        @click=${()=>this._addFloor(e.floor_id)}
                      >
                        ${e.icon?V`<ha-icon .icon=${e.icon}></ha-icon>`:W}
                        ${e.name}
                      </button>
                    `)}
                </div>
              </div>
            `:V`<p class="hint">All HA floors are enabled.</p>`}
      </div>
    `}_renderFloor(e,t){const i=this._floorDisplay(e.floor_id),o=e.name||i.name,s=new Set(e.rooms.map(e=>e.area_id).filter(Boolean)),n=this._areasForFloor(e.floor_id).filter(e=>!s.has(e));return V`
      <ha-expansion-panel
        outlined
        .header=${o}
        secondary=${`${e.rooms.length} room${1===e.rooms.length?"":"s"} · floor_id: ${e.floor_id}`}
        draggable="true"
        @dragstart=${ev=>{this._dragFloor=t;ev.dataTransfer.effectAllowed="move";ev.dataTransfer.setData("text/plain","floor");ev.target.classList.add("dragging")}}
        @dragend=${ev=>{ev.target.classList.remove("dragging");this._dragFloor=null;this._tick++}}
        @dragover=${ev=>{if(this._dragFloor!==null&&this._dragFloor!==undefined){ev.preventDefault();ev.dataTransfer.dropEffect="move";ev.currentTarget.classList.add("drag-over")}}}
        @dragleave=${ev=>{ev.currentTarget.classList.remove("drag-over")}}
        @drop=${ev=>{ev.preventDefault();ev.currentTarget.classList.remove("drag-over");if(this._dragFloor!==null&&this._dragFloor!==undefined&&this._dragFloor!==t){const floors=[...this._config.floors];const[f]=floors.splice(this._dragFloor,1);floors.splice(t,0,f);this._patchFloors(floors)}this._dragFloor=null}}
      >
        <div class="panel-content">
          <div class="row">
            <ha-textfield
              label=${`Name override (HA: ${i.name})`}
              .value=${e.name||""}
              @input=${e=>this._updateFloor(t,{name:e.target.value||void 0})}
            ></ha-textfield>
            <ha-icon-picker
              .hass=${this.hass}
              .value=${e.icon||""}
              label="Icon override"
              @value-changed=${e=>this._updateFloor(t,{icon:e.detail.value||void 0})}
            ></ha-icon-picker>
          </div>

          <div class="floor-actions">
            <ha-icon-button
              .path=${$e}
              label="Move floor up"
              .disabled=${0===t}
              @click=${()=>this._moveFloor(t,-1)}
            ></ha-icon-button>
            <ha-icon-button
              .path=${be}
              label="Move floor down"
              .disabled=${t===this._config.floors.length-1}
              @click=${()=>this._moveFloor(t,1)}
            ></ha-icon-button>
            <span class="spacer"></span>
            <ha-icon-button
              .path=${ve}
              label="Remove floor"
              @click=${()=>this._removeFloor(t)}
            ></ha-icon-button>
          </div>

          <div class="section-head sub"><span>Rooms</span></div>

          ${n.length>0?V`
                <div class="floor-chips small">
                  ${n.map(e=>{const i=this.hass.areas[e];return V`<button
                      class="chip-btn"
                      title="Add room from area"
                      @click=${()=>this._addRoom(t,e)}
                    >
                      ${i?.icon?V`<ha-icon .icon=${i.icon}></ha-icon>`:V`<ha-svg-icon .path=${"M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"}></ha-svg-icon>`}
                      ${i?.name||e}
                    </button>`})}
                </div>
              `:W}

          <button class="add-blank" @click=${()=>this._addRoom(t)}>
            + Add empty room
          </button>

          ${e.rooms.map((e,i)=>this._renderRoom(t,i,e))}
        </div>
      </ha-expansion-panel>
    `}_renderRoom(e,t,i){return V`
      <ha-expansion-panel
        outlined
        class="room-panel"
        .header=${i.name||"(unnamed)"}
        secondary=${i.area_id?`Area: ${i.area_id}`:""}
        draggable="true"
        @dragstart=${ev=>{this._dragRoom={floor:e,room:t};ev.dataTransfer.effectAllowed="move";ev.dataTransfer.setData("text/plain","room");ev.target.classList.add("dragging")}}
        @dragend=${ev=>{ev.target.classList.remove("dragging");this._dragRoom=null;this._dragOverRoom=null;this._updateRoom?void 0:void 0;if(this._tick!==void 0)this._tick++}}
        @dragover=${ev=>{if(this._dragRoom){ev.preventDefault();ev.dataTransfer.dropEffect="move";const target=ev.currentTarget;target.classList.add("drag-over")}}}
        @dragleave=${ev=>{ev.currentTarget.classList.remove("drag-over")}}
        @drop=${ev=>{ev.preventDefault();ev.currentTarget.classList.remove("drag-over");if(this._dragRoom){const d=this._dragRoom;if(d.floor===e&&d.room!==t){this._moveRoomTo(d.floor,d.room,t)}}this._dragRoom=null}}
      >
        <div class="panel-content">
          <div class="row">
            <ha-textfield
              label="Name"
              .value=${i.name||""}
              @input=${i=>this._updateRoom(e,t,{name:i.target.value})}
            ></ha-textfield>
            <ha-icon-picker
              .hass=${this.hass}
              .value=${i.icon||""}
              label="Icon"
              @value-changed=${i=>this._updateRoom(e,t,{icon:i.detail.value||void 0})}
            ></ha-icon-picker>
          </div>

          <ha-area-picker
            .hass=${this.hass}
            label="Area (optional)"
            .value=${i.area_id||""}
            @value-changed=${i=>this._updateRoom(e,t,{area_id:i.detail.value||void 0})}
          ></ha-area-picker>

          <ha-entity-picker
            .hass=${this.hass}
            label="Presence / motion sensor"
            .value=${i.presence_entity||""}
            .includeDomains=${["binary_sensor","input_boolean","person","device_tracker"]}
            allow-custom-entity
            @value-changed=${i=>this._updateRoom(e,t,{presence_entity:i.detail.value||void 0})}
          ></ha-entity-picker>
          ${this._renderSuggestions(this._presenceCandidates(i.area_id),i.presence_entity,i=>this._updateRoom(e,t,{presence_entity:i}))}

          <div class="subsection">
            <div class="row">
              <span class="sub-label">Steuerelemente-Gruppen (optional)</span>
              <p class="hint">Leer = automatische Erkennung (Lichter + Steckdosen + Covers aus dem Bereich). Eigene Gruppen überschreiben die Defaults.</p>
            </div>
            ${(i.control_groups||[]).map((g,gi)=>V`
              <div class="control-group-editor">
                <div class="row">
                  <ha-textfield
                    label="Gruppenname"
                    .value=${g.name||""}
                    @input=${ev=>{const cur=[...(i.control_groups||[])];cur[gi]={...cur[gi],name:ev.target.value};this._updateRoom(e,t,{control_groups:cur})}}
                  ></ha-textfield>
                  <ha-icon-picker
                    .hass=${this.hass}
                    .value=${g.icon||""}
                    label="Icon"
                    @value-changed=${ev=>{const cur=[...(i.control_groups||[])];cur[gi]={...cur[gi],icon:ev.detail.value||void 0};this._updateRoom(e,t,{control_groups:cur})}}
                  ></ha-icon-picker>
                  <ha-icon-button
                    .icon="mdi:delete"
                    label="Gruppe entfernen"
                    @click=${()=>{const cur=[...(i.control_groups||[])];cur.splice(gi,1);this._updateRoom(e,t,{control_groups:cur.length?cur:void 0})}}
                  ></ha-icon-button>
                </div>
                ${(g.entities||[]).map((ent,ei)=>V`
                  <div class="row">
                    <ha-entity-picker
                      .hass=${this.hass}
                      .value=${ent}
                      .includeDomains=${["light","switch","cover","fan","media_player","input_boolean","script","scene","automation"]}
                      allow-custom-entity
                      @value-changed=${ev=>{const cur=[...(i.control_groups||[])];const ents=[...cur[gi].entities];if(ev.detail.value)ents[ei]=ev.detail.value;else ents.splice(ei,1);cur[gi]={...cur[gi],entities:ents};this._updateRoom(e,t,{control_groups:cur})}}
                    ></ha-entity-picker>
                    <ha-icon-button
                      .icon="mdi:close"
                      label="Entität entfernen"
                      @click=${()=>{const cur=[...(i.control_groups||[])];const ents=cur[gi].entities.filter((x,idx)=>idx!==ei);cur[gi]={...cur[gi],entities:ents.length?ents:[]};this._updateRoom(e,t,{control_groups:cur})}}
                    ></ha-icon-button>
                  </div>
                `)}
                <ha-entity-picker
                  .hass=${this.hass}
                  label="Entität hinzufügen"
                  .includeDomains=${["light","switch","cover","fan","media_player","input_boolean","script","scene","automation"]}
                  allow-custom-entity
                  @value-changed=${ev=>{if(!ev.detail.value)return;const cur=[...(i.control_groups||[])];const ents=[...(cur[gi].entities||[]),ev.detail.value];cur[gi]={...cur[gi],entities:ents};this._updateRoom(e,t,{control_groups:cur})}}
                ></ha-entity-picker>
              </div>
            `)}
            <button
              class="add-blank"
              @click=${()=>{const cur=[...(i.control_groups||[]),{name:"",icon:"",entities:[]}];this._updateRoom(e,t,{control_groups:cur})}}
            >+ Gruppe hinzufügen</button>
          </div>

          <div class="row">
            <ha-entity-picker
              .hass=${this.hass}
              label="Temperature"
              .value=${i.temperature_entity||""}
              .includeDomains=${["sensor"]}
              .includeDeviceClasses=${["temperature"]}
              allow-custom-entity
              @value-changed=${i=>this._updateRoom(e,t,{temperature_entity:i.detail.value||void 0})}
            ></ha-entity-picker>
            <ha-entity-picker
              .hass=${this.hass}
              label="Humidity"
              .value=${i.humidity_entity||""}
              .includeDomains=${["sensor"]}
              .includeDeviceClasses=${["humidity"]}
              allow-custom-entity
              @value-changed=${i=>this._updateRoom(e,t,{humidity_entity:i.detail.value||void 0})}
            ></ha-entity-picker>
          </div>
          ${this._renderSuggestions(this._tempCandidates(i.area_id),i.temperature_entity,i=>this._updateRoom(e,t,{temperature_entity:i}),"Temperature suggestions")}
          ${this._renderSuggestions(this._humidityCandidates(i.area_id),i.humidity_entity,i=>this._updateRoom(e,t,{humidity_entity:i}),"Humidity suggestions")}

          ${this._renderLights(e,t,i)}
          ${this._renderDomainSection(e,t,i,"switch","Steckdosen","excluded_switches","additional_switches","mdi:power-socket-de")}
          ${this._renderDomainSection(e,t,i,"cover","Covers","excluded_covers","additional_covers","mdi:window-shutter")}
          ${this._renderDomainSection(e,t,i,"fan","Fans","excluded_fans","additional_fans","mdi:fan")}
          ${this._renderExtraSensors(e,t,i)}

<ha-expansion-panel
            class="action-panel"
            outlined
            .header=${"Aktionen (Tippen / Halten / Doppel-Tippen)"}
          >
            <div class="panel-content">
              ${["tap_action","hold_action","double_tap_action"].map(o=>{
                const act=i[o]??{};
                const at=act.action||"none";
                const labels={"tap_action":"Tippen","hold_action":"Halten","double_tap_action":"Doppel-Tippen"};
                const opts=[["none","Keine"],["toggle","Umschalten"],["more-info","Mehr Info"],["navigate","Navigieren"],["call-service","Service"],["url","URL"]];
                const setAct=(v)=>{
                  let n;
                  if(v==="none"){n=void 0}
                  else{n={action:v};
                    if(v==="more-info"||v==="toggle"){n.entity=act.entity||i.presence_entity||""}
                    if(v==="navigate"){n.navigation_path=act.navigation_path||""}
                    if(v==="url"){n.url_path=act.url_path||""}
                    if(v==="call-service"){n.service=act.service||""}
                  }
                  this._updateRoom(e,t,{[o]:n})
                };
                return V`
                  <div class="action-row">
                    <label class="action-label">${labels[o]}</label>
                    <div class="floor-chips small">
                      ${opts.map(([val,label])=>V`
                        <button
                          class="chip-btn ${at===val?"selected":""}"
                          @click=${()=>setAct(val)}
                        >${label}</button>
                      `)}
                    </div>
                    ${at==="toggle"||at==="more-info"?V`
                      <ha-entity-picker
                        .hass=${this.hass}
                        label="Entität"
                        .value=${act.entity||i.presence_entity||""}
                        allow-custom-entity
                        @value-changed=${ev=>{if(!ev.detail.value)return;const v=ev.detail.value;const n={...act,action:at,entity:v};this._updateRoom(e,t,{[o]:n})}}
                      ></ha-entity-picker>
                    `:W}
                    ${at==="navigate"?V`
                      <input
                        type="text"
                        class="action-input"
                        placeholder="Navigations-Pfad (z.B. /lovelace/0)"
                        .value=${act.navigation_path||""}
                        @change=${ev=>{const v=ev.target.value;const n={...act,action:at,navigation_path:v};this._updateRoom(e,t,{[o]:n})}}
                      />
                    `:W}
                    ${at==="url"?V`
                      <input
                        type="text"
                        class="action-input"
                        placeholder="URL (z.B. https://example.com)"
                        .value=${act.url_path||""}
                        @change=${ev=>{const v=ev.target.value;const n={...act,action:at,url_path:v};this._updateRoom(e,t,{[o]:n})}}
                      />
                    `:W}
                    ${at==="call-service"?V`
                      <input
                        type="text"
                        class="action-input"
                        placeholder="Service (z.B. light.toggle)"
                        .value=${act.service||""}
                        @change=${ev=>{const v=ev.target.value;const n={...act,action:at,service:v};this._updateRoom(e,t,{[o]:n})}}
                      />
                      <ha-entity-picker
                        .hass=${this.hass}
                        label="Ziel-Entität (optional)"
                        .value=${act.target?.entity_id||act.entity||""}
                        allow-custom-entity
                        @value-changed=${ev=>{if(!ev.detail.value)return;const v=ev.detail.value;const n={...act,action:at,target:v?{entity_id:v}:void 0};this._updateRoom(e,t,{[o]:n})}}
                      ></ha-entity-picker>
                    `:W}
                  </div>
                `})}
            </div>
          </ha-expansion-panel>

          <div class="floor-actions">
            <ha-icon-button
              .path=${$e}
              label="Move room up"
              .disabled=${0===t}
              @click=${()=>this._moveRoom(e,t,-1)}
            ></ha-icon-button>
            <ha-icon-button
              .path=${be}
              label="Move room down"
              .disabled=${t===this._config.floors[e].rooms.length-1}
              @click=${()=>this._moveRoom(e,t,1)}
            ></ha-icon-button>
            <span class="spacer"></span>
            <ha-icon-button
              .path=${ve}
              label="Remove room"
              @click=${()=>this._removeRoom(e,t)}
            ></ha-icon-button>
          </div>
        </div>
      </ha-expansion-panel>
    `}_areaLights(e){return this._areaEntities(e,{domain:"light"})}_renderSuggestions(e,t,i,o="From area"){return e.length?1===e.length&&e[0]===t?W:V`
      <div class="suggestion-row">
        <span class="suggestion-label">${o}:</span>
        <div class="floor-chips small">
          ${e.map(e=>{const o=this.hass.states[e]?.attributes?.friendly_name||e;return V`<button
              class="chip-btn ${e===t?"selected":""}"
              title=${e}
              @click=${()=>i(e)}
            >
              ${o}
            </button>`})}
        </div>
      </div>
    `:W}_renderLights(e,t,i){const o=i.light_entities||[],s=o.length>0,n=this._areaLights(i.area_id),a=new Set(i.excluded_lights||[]),r=i.additional_lights||[];return V`
      <div class="subsection">
        <div class="section-head sub">
          <span>Lights (for background tint)</span>
        </div>

        <label class="toggle-row">
          <ha-switch
            .checked=${s}
            @change=${i=>{if(i.target.checked){const i=n.filter(e=>!a.has(e)),o=Array.from(new Set([...i,...r]));this._updateRoom(e,t,{light_entities:o.length?o:[]})}else this._updateRoom(e,t,{light_entities:void 0})}}
          ></ha-switch>
          <span>Manual list (override area auto-detection)</span>
        </label>

        ${s?this._renderExplicitLights(e,t,o):this._renderAutoLights(e,t,i,n,a,r)}
      </div>
    `}_renderAutoLights(e,t,i,o,s,n){return i.area_id?V`
      ${0===o.length?V`<p class="hint">No lights found in this area.</p>`:V`
            <p class="hint">
              ${o.length} light${1===o.length?"":"s"}
              auto-detected from area. Uncheck to exclude.
            </p>
            <div class="light-list">
              ${o.map(o=>{const n=this.hass.states[o]?.attributes?.friendly_name||o,a=!s.has(o);return V`
                  <label class="toggle-row">
                    <ha-switch
                      .checked=${a}
                      @change=${s=>{const n=s.target.checked,a=new Set(i.excluded_lights||[]);n?a.delete(o):a.add(o),this._updateRoom(e,t,{excluded_lights:a.size?[...a]:void 0})}}
                    ></ha-switch>
                    <span class="light-label">
                      <span class="light-name">${n}</span>
                      <span class="light-eid">${o}</span>
                    </span>
                  </label>
                `})}
            </div>
          `}

      <div class="section-head sub">
        <span>Extra lights (outside the area)</span>
      </div>
      ${n.map((i,o)=>V`
          <div class="row">
            <ha-entity-picker
              .hass=${this.hass}
              .value=${i}
              .includeDomains=${["light"]}
              allow-custom-entity
              @value-changed=${i=>{const s=[...n];i.detail.value?s[o]=i.detail.value:s.splice(o,1),this._updateRoom(e,t,{additional_lights:s.length?s:void 0})}}
            ></ha-entity-picker>
            <ha-icon-button
              .path=${ve}
              label="Remove"
              @click=${()=>{const i=n.filter((e,t)=>t!==o);this._updateRoom(e,t,{additional_lights:i.length?i:void 0})}}
            ></ha-icon-button>
          </div>
        `)}
      <ha-entity-picker
        .hass=${this.hass}
        label="Add light"
        .value=${""}
        .includeDomains=${["light"]}
        allow-custom-entity
        @value-changed=${i=>{i.detail.value&&this._updateRoom(e,t,{additional_lights:[...n,i.detail.value]})}}
      ></ha-entity-picker>
    `:V`<p class="hint">
        Set an Area above to auto-detect lights, or enable the manual list.
      </p>`}_renderExplicitLights(e,t,i){return V`
      <p class="hint">
        Manual mode: only these lights are tracked. Disable the toggle above to
        return to auto-detection.
      </p>
      ${i.map((o,s)=>V`
          <div class="row">
            <ha-entity-picker
              .hass=${this.hass}
              .value=${o}
              .includeDomains=${["light"]}
              allow-custom-entity
              @value-changed=${o=>{const n=[...i];o.detail.value?n[s]=o.detail.value:n.splice(s,1),this._updateRoom(e,t,{light_entities:n.length?n:void 0})}}
            ></ha-entity-picker>
            <ha-icon-button
              .path=${ve}
              label="Remove"
              @click=${()=>{const o=i.filter((e,t)=>t!==s);this._updateRoom(e,t,{light_entities:o.length?o:void 0})}}
            ></ha-icon-button>
          </div>
        `)}
      <ha-entity-picker
        .hass=${this.hass}
        label="Add light"
        .value=${""}
        .includeDomains=${["light"]}
        allow-custom-entity
        @value-changed=${o=>{o.detail.value&&this._updateRoom(e,t,{light_entities:[...i,o.detail.value]})}}
      ></ha-entity-picker>
    `}_renderDomainSection(e,t,i,domain,label,excludedKey,additionalKey,defaultIcon){const manualKey=domain+"_entities";const manualModeKey=domain+"_manual";const manual=i[manualKey]||[];const isManual=!!i[manualModeKey];const auto=this._areaEntitiesCardEditor(i.area_id,domain);const excl=new Set(i[excludedKey]||[]);const addl=i[additionalKey]||[];return V`
      <div class="subsection">
        <div class="section-head sub">
          <span>${label} (für Steuerelemente)</span>
        </div>
        <label class="toggle-row">
          <ha-switch
            .checked=${isManual}
            @change=${ev=>{if(ev.target.checked){const autoList=auto.filter(x=>!excl.has(x));const all=Array.from(new Set([...autoList,...addl]));this._updateRoom(e,t,{[manualModeKey]:true,[manualKey]:all})}else this._updateRoom(e,t,{[manualModeKey]:void 0,[manualKey]:void 0})}}
          ></ha-switch>
          <span>Manuelle Liste (override auto-detection)</span>
        </label>
        ${isManual?V`
          <p class="hint">Manueller Modus: nur diese ${label} werden verfolgt.</p>
          ${manual.map((ent,idx)=>V`
            <div class="row">
              <ha-entity-picker
                .hass=${this.hass}
                .value=${ent}
                .includeDomains=${[domain]}
                allow-custom-entity
                @value-changed=${ev=>{const cur=[...manual];if(ev.detail.value)cur[idx]=ev.detail.value;else cur.splice(idx,1);this._updateRoom(e,t,{[manualKey]:cur.length?cur:void 0})}}
              ></ha-entity-picker>
              <ha-icon-button
                .icon="mdi:close"
                label="Remove"
                @click=${()=>{const cur=manual.filter((x,ci)=>ci!==idx);this._updateRoom(e,t,{[manualKey]:cur.length?cur:void 0})}}
              ></ha-icon-button>
            </div>
          `)}
          <ha-entity-picker
            .hass=${this.hass}
            label=${label+" hinzufügen"}
            .includeDomains=${[domain]}
            allow-custom-entity
            @value-changed=${ev=>{if(ev.detail.value)this._updateRoom(e,t,{[manualKey]:[...manual,ev.detail.value]})}}
          ></ha-entity-picker>
        `:V`
          ${auto.length===0?V`<p class="hint">Keine ${label} im Bereich gefunden.</p>`:V`
            <p class="hint">${auto.length} ${label} automatisch erkannt. Abwählen zum Ausschließen.</p>
            <div class="light-list">
              ${auto.map(ent=>{const fn=this.hass.states[ent]?.attributes?.friendly_name||ent;const checked=!excl.has(ent);return V`
                <label class="toggle-row">
                  <ha-switch
                    .checked=${checked}
                    @change=${se=>{const cur=new Set(i[excludedKey]||[]);if(se.target.checked)cur.delete(ent);else cur.add(ent);this._updateRoom(e,t,{[excludedKey]:cur.size?[...cur]:void 0})}}
                  ></ha-switch>
                  <span class="light-label">
                    <span class="light-name">${fn}</span>
                    <span class="light-eid">${ent}</span>
                  </span>
                </label>
              `})}
            </div>
          `}
          <div class="section-head sub"><span>Zusätzliche ${label} (außerhalb des Bereichs)</span></div>
          ${addl.map((ent,idx)=>V`
            <div class="row">
              <ha-entity-picker
                .hass=${this.hass}
                .value=${ent}
                .includeDomains=${[domain]}
                allow-custom-entity
                @value-changed=${ev=>{const cur=[...addl];if(ev.detail.value)cur[idx]=ev.detail.value;else cur.splice(idx,1);this._updateRoom(e,t,{[additionalKey]:cur.length?cur:void 0})}}
              ></ha-entity-picker>
              <ha-icon-button
                .icon="mdi:close"
                label="Remove"
                @click=${()=>{const cur=addl.filter((x,ci)=>ci!==idx);this._updateRoom(e,t,{[additionalKey]:cur.length?cur:void 0})}}
              ></ha-icon-button>
            </div>
          `)}
          <ha-entity-picker
            .hass=${this.hass}
            label=${label+" hinzufügen"}
            .includeDomains=${[domain]}
            allow-custom-entity
            @value-changed=${ev=>{if(ev.detail.value)this._updateRoom(e,t,{[additionalKey]:[...addl,ev.detail.value]})}}
          ></ha-entity-picker>
        `}
      </div>
    `}_areaEntitiesCardEditor(areaId,domain){if(!areaId)return[];const t=this.hass,i=[];for(const[s,n]of Object.entries(t.entities||{})){if(!s.startsWith(domain+"."))continue;if(n.disabled_by||n.hidden_by||n.entity_category)continue;if(n.area_id===areaId||(!n.area_id&&n.device_id&&t.devices?.[n.device_id]?.area_id===areaId))i.push(s)}return i}_renderExtraSensors(e,t,i){const o=i.extra_sensors||[],s=i=>this._updateRoom(e,t,{extra_sensors:i});return V`
      <div class="subsection">
        <div class="section-head sub"><span>Extra sensors</span></div>
        ${0===o.length?V`<p class="hint">Show extra readings as chips on the card.</p>`:W}
        ${o.map((e,t)=>V`
            <div class="row">
              <ha-entity-picker
                .hass=${this.hass}
                label="Entity"
                .value=${e.entity}
                allow-custom-entity
                @value-changed=${e=>{const i=[...o];e.detail.value?i[t]={...i[t],entity:e.detail.value}:i.splice(t,1),s(i)}}
              ></ha-entity-picker>
              <ha-icon-picker
                .hass=${this.hass}
                .value=${e.icon||""}
                label="Icon"
                @value-changed=${e=>{const i=[...o];i[t]={...i[t],icon:e.detail.value||void 0},s(i)}}
              ></ha-icon-picker>
              <ha-icon-button
                .path=${ve}
                label="Remove"
                @click=${()=>s(o.filter((e,i)=>i!==t))}
              ></ha-icon-button>
            </div>
          `)}
        <button
          class="add-blank"
          @click=${()=>s([...o,{entity:""}])}
        >
          + Add sensor
        </button>
      </div>
    `}};xe.styles=a`
    .editor {
      padding: 12px;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    ha-textfield,
    ha-icon-picker,
    ha-area-picker,
    ha-entity-picker {
      width: 100%;
    }
    .row {
      display: flex;
      gap: 8px;
      align-items: center;
    }
    .row > * {
      flex: 1;
    }
    .row > ha-icon-button {
      flex: 0 0 auto;
    }
    .section-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-weight: 600;
      font-size: 14px;
      margin-top: 4px;
    }
    .section-head.sub {
      font-size: 13px;
      font-weight: 500;
      color: var(--secondary-text-color);
    }
    .panel-content {
      display: flex;
      flex-direction: column;
      gap: 10px;
      padding: 10px;
    }
    .floor-actions {
      display: flex;
      align-items: center;
      gap: 4px;
    }
    .spacer {
      flex: 1;
    }
    .subsection {
      display: flex;
      flex-direction: column;
      gap: 6px;
      border-left: 2px solid var(--divider-color);
      padding-left: 8px;
    }
    .chip-list {
      display: flex;
      flex-direction: column;
      gap: 4px;
      margin-top: 8px;
    }
    .chip-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 4px 8px;
      background: var(--secondary-background-color);
      border-radius: 8px;
    }
    .chip-label {
      font-size: 13px;
      color: var(--primary-text-color);
      font-family: var(--mdc-typography-body2-font-family, monospace);
    }
    .action-input {
      width: 100%;
      padding: 8px 12px;
      border: 1px solid var(--input-border-color, var(--divider-color));
      border-radius: var(--ha-border-radius, 4px);
      font-size: 14px;
      background: var(--input-background-color, var(--secondary-background-color, var(--card-background)));
      color: var(--input-text-color, var(--primary-text-color));
      box-sizing: border-box;
      outline: none;
    }
    .action-input:focus {
      border-color: var(--primary-color);
    }
    .action-input::placeholder {
      color: var(--secondary-text-color);
      opacity: 0.7;
    }
    .room-panel.dragging,
    .ha-expansion-panel.dragging {
      opacity: 0.5;
    }
    .room-panel.drag-over,
    .ha-expansion-panel.drag-over {
      border-top: 3px solid var(--primary-color) !important;
    }
    .room-panel {
      margin-top: 6px;
    }
    .action-panel {
      margin-top: 4px;
    }
    .yaml-label {
      font-size: 12px;
      font-weight: 600;
      color: var(--secondary-text-color);
      margin-top: 4px;
    }
    .hint {
      margin: 0;
      font-size: 12px;
      color: var(--secondary-text-color);
    }
    .add-blank {
      align-self: flex-start;
      background: none;
      border: 1px dashed var(--divider-color);
      border-radius: 8px;
      padding: 6px 12px;
      color: var(--primary-text-color);
      cursor: pointer;
      font-size: 13px;
    }
    .add-blank:hover {
      background: var(--secondary-background-color);
    }
    .add-floor {
      display: flex;
      flex-direction: column;
      gap: 6px;
      padding-top: 4px;
      border-top: 1px dashed var(--divider-color);
    }
    .add-floor-label {
      font-size: 12px;
      color: var(--secondary-text-color);
    }
    .floor-chips {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
    }
    .chip-btn {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      padding: 6px 10px;
      border: 1px solid var(--divider-color);
      background: var(--secondary-background-color);
      border-radius: 16px;
      color: var(--primary-text-color);
      font-size: 13px;
      cursor: pointer;
    }
    .chip-btn:hover {
      background: var(--card-background-color);
    }
    .floor-chips.small .chip-btn {
      font-size: 12px;
      padding: 4px 8px;
    }
    .chip-btn ha-icon,
    .chip-btn ha-svg-icon {
      --mdc-icon-size: 16px;
    }
    code {
      background: var(--secondary-background-color);
      padding: 1px 4px;
      border-radius: 3px;
      font-size: 11px;
    }
    .toggle-row {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 13px;
      cursor: pointer;
      padding: 2px 0;
    }
    .light-list {
      display: flex;
      flex-direction: column;
      gap: 4px;
      padding: 4px 0;
    }
    .light-label {
      display: flex;
      flex-direction: column;
      min-width: 0;
    }
    .light-name {
      font-weight: 500;
      color: var(--primary-text-color);
    }
    .light-eid {
      font-size: 11px;
      color: var(--secondary-text-color);
      font-family: var(--code-font-family, monospace);
    }
    .suggestion-row {
      display: flex;
      align-items: center;
      gap: 8px;
      flex-wrap: wrap;
      margin: -4px 0 4px;
    }
    .suggestion-label {
      font-size: 11px;
      color: var(--secondary-text-color);
      text-transform: uppercase;
      letter-spacing: 0.04em;
    }
    .section-divider {
      height: 1px;
      background: var(--divider-color);
      margin: 4px 0;
    }
    .text-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      font-size: 13px;
    }
    .text-label {
      color: var(--primary-text-color);
    }
    .text-input {
      flex: 1;
      max-width: 240px;
      padding: 6px 8px;
      border-radius: 6px;
      border: 1px solid var(--divider-color);
      background: var(--card-background-color);
      color: var(--primary-text-color);
      font-size: 14px;
    }
    .text-input:focus {
      outline: none;
      border-color: var(--primary-color);
    }
    .number-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      font-size: 13px;
    }
    .number-label {
      color: var(--primary-text-color);
    }
    .number-input {
      width: 80px;
      padding: 6px 8px;
      border-radius: 6px;
      border: 1px solid var(--divider-color);
      background: var(--card-background-color);
      color: var(--primary-text-color);
      font-size: 14px;
      text-align: right;
    }
    .number-input:focus {
      outline: none;
      border-color: var(--primary-color);
    }
    .chip-btn.selected {
      background: var(--primary-color);
      color: var(--text-primary-color, #fff);
      border-color: var(--primary-color);
    }
  `,e([pe({attribute:!1})],xe.prototype,"hass",void 0),e([ue()],xe.prototype,"_config",void 0),xe=e([ce(fe)],xe);const we=new Set(["on","home","detected"]);function Ae(e){const t=e.filter(e=>Number.isFinite(e)).sort((e,t)=>e-t);if(!t.length)return null;const i=Math.floor(t.length/2);return t.length%2?t[i]:(t[i-1]+t[i])/2}function ke(e){return Math.max(0,Math.min(255,Math.round(e)))}function Ee(e){const t=e/100;let i,o,s;return t<=66?(i=255,o=99.4708025861*Math.log(t)-161.1195681661):(i=329.698727446*Math.pow(t-60,-.1332047592),o=288.1221695283*Math.pow(t-60,-.0755148492)),s=t>=66?255:t<=19?0:138.5177312231*Math.log(t-10)-305.0447927307,[ke(i),ke(o),ke(s)]}function Se(e){const t=e.attributes||{};return Array.isArray(t.rgb_color)&&t.rgb_color.length>=3?[ke(t.rgb_color[0]),ke(t.rgb_color[1]),ke(t.rgb_color[2])]:"number"==typeof t.color_temp_kelvin?Ee(t.color_temp_kelvin):"number"==typeof t.color_temp&&t.color_temp>0?Ee(1e6/t.color_temp):[255,180,100]}function Ce(e,t,i){e.dispatchEvent(new CustomEvent(t,{detail:i,bubbles:!0,composed:!0}))}function Re(e,t,i,o){if(!i||"none"===i.action)return;const s=i.confirmation;if(s){const e="object"==typeof s&&s.text?s.text:"Are you sure?";if(!window.confirm(e))return}switch(i.action){case"more-info":{const t=i.entity||o;t&&Ce(e,"hass-more-info",{entityId:t});break}case"toggle":{const e=i.entity||o;if(!e)return;const s=e.split(".")[0],n="lock"===s?"locked"===t.states[e]?.state?"unlock":"lock":"cover"===s?"open"===t.states[e]?.state?"close_cover":"open_cover":"toggle",a="group"===s?"homeassistant":s;t.callService(a,n,void 0,{entity_id:e});break}case"navigate":if(!i.navigation_path)return;history.pushState(null,"",i.navigation_path),Ce(window,"location-changed",{replace:!1});break;case"url":i.url_path&&window.open(i.url_path);break;case"call-service":case"perform-action":{const e=i.perform_action||i.service;if(!e)return;const[o,s]=e.split("."),n={...i.service_data||i.data||{}};t.callService(o,s,n,i.target);break}}}window.customCards=window.customCards||[],window.customCards.push({type:ge,name:"Advanced Room Card",description:"Collapsable room list sorted by presence, with per-floor breakdown on expand."});let Me=class extends re{constructor(){super(...arguments),this._tick=0,this._expanded=!1}setConfig(e){if(!e)throw new Error("Invalid configuration");if(this._config={...e,floors:e.floors||[]},(e.remember_expanded??1)&&"undefined"!=typeof localStorage)try{const e=localStorage.getItem(this._storageKey());this._expanded="1"===e}catch{}}getCardSize(){if(this._expanded){const e=this._config?.floors?.length||1,t=this._config?.floors?.reduce((e,t)=>e+(t.rooms?.length||0),0)||0;return Math.max(2,e+Math.ceil(t/2))}const e=this._config?.max_rooms??5;return Math.max(1,Math.ceil(e/2))}getGridOptions(){return{columns:12,rows:"auto",min_columns:6}}static getConfigElement(){return document.createElement(fe)}static getStubConfig(){return{type:_e,title:"Home",floors:[],max_rooms:5}}_storageKey(){const e=this._config?.title||"default";return`${ge}:expanded:${e}`}_toggleExpanded(){if(this._expanded=!this._expanded,(this._config.remember_expanded??1)&&"undefined"!=typeof localStorage)try{localStorage.setItem(this._storageKey(),this._expanded?"1":"0")}catch{}}_topRooms(){const e=this._deriveAll(!1).flatMap(e=>e.rooms);const t=this._config.max_rooms??5;return e.slice(0,t)}connectedCallback(){super.connectedCallback(),this._timer=window.setInterval(()=>{this._tick++},6e4)}disconnectedCallback(){super.disconnectedCallback(),this._timer&&window.clearInterval(this._timer)}_areaLights(e){if(!e)return[];const t=this.hass,i=[];for(const[o,s]of Object.entries(t.entities||{}))if(o.startsWith("light.")&&!s.disabled_by&&!s.hidden_by&&!s.entity_category)if(s.area_id!==e){if(!s.area_id&&s.device_id){const n=t.devices?.[s.device_id];n?.area_id===e&&i.push(o)}}else i.push(o);return i}_effectiveLights(e){if(e.light_entities?.length)return e.light_entities;const t=this._areaLights(e.area_id),i=new Set(e.excluded_lights||[]),o=new Set(t.filter(e=>!i.has(e)));for(const t of e.additional_lights||[])o.add(t);return[...o]}_deriveRoom(e){const t=this.hass,i=e.presence_entity?t.states[e.presence_entity]:void 0,o=function(e){return!!e&&we.has(e.state)}(i),s=function(e){if(!e)return 0;const t=new Date(e.last_changed).getTime();return Number.isFinite(t)?t:0}(i),n=e.temperature_entity?t.states[e.temperature_entity]:void 0,a=n?parseFloat(n.state):NaN,r=Number.isFinite(a)?a:null,l=e.humidity_entity?t.states[e.humidity_entity]:void 0,c=l?parseFloat(l.state):NaN,d=Number.isFinite(c)?c:null,h=this._effectiveLights(e),p=[];for(const e of h){const i=t.states[e];if(!i||"on"!==i.state)continue;const o=Se(i);o&&p.push(o)}const u=function(e){if(!e.length)return null;let t=0,i=0,o=0;for(const s of e)t+=s[0],i+=s[1],o+=s[2];return[Math.round(t/e.length),Math.round(i/e.length),Math.round(o/e.length)]}(p);return{config:e,occupied:o,lastPresence:s,temp:r,humidity:d,tint:u}}_deriveFloor(e,t=!0){const i=(e.rooms||[]).map(e=>this._deriveRoom(e));t&&i.sort((e,t)=>e.occupied!==t.occupied?e.occupied?-1:1:t.lastPresence-e.lastPresence);const o=Ae(i.map(e=>e.temp).filter(e=>null!==e)),s=Ae(i.map(e=>e.humidity).filter(e=>null!==e)),n=i.some(e=>e.occupied),a=i.reduce((e,t)=>t.lastPresence>e?t.lastPresence:e,0);return{config:e,rooms:i,medianTemp:o,medianHumidity:s,anyOccupied:n,lastPresence:a}}_deriveAll(e=!0){const t=(this._config.floors||[]).map(t=>this._deriveFloor(t,e));return e&&t.sort((e,t)=>e.anyOccupied!==t.anyOccupied?e.anyOccupied?-1:1:t.lastPresence-e.lastPresence),t}render(){if(!this.hass||!this._config)return V``;if(this._tick,this._expanded){const e=this._deriveAll(!1);return V`
        <ha-card style="--room-height:${this._config.room_height??56}px;--room-pad-block:calc(var(--room-height,56px) * 0.18);--room-pad-inline:calc(var(--room-height,56px) * 0.25)">
          ${this._renderHeader(!0)}
          ${e.length?(this._config.group_floors??!0)?V`<div class="floors">
                ${e.map(e=>this._renderFloor(e))}
              </div>`:V`<div class="rooms">
                ${e.flatMap(e=>e.rooms).map(e=>this._renderRoom(e))}
              </div>`:V`<div class="empty">
                Im Editor Stockwerke und Räume hinzufügen.
              </div>`}
        </ha-card>
      `}const e=this._topRooms();return V`
      <ha-card style="--room-height:${this._config.room_height??56}px;--room-pad-block:calc(var(--room-height,56px) * 0.18);--room-pad-inline:calc(var(--room-height,56px) * 0.25)">
        ${this._renderHeader(!1)}
        ${e.length?V`<div class="rooms">
              ${e.map(e=>this._renderRoom(e))}
            </div>`:V`<div class="empty">Keine Räume konfiguriert.</div>`}
      </ha-card>
    `}_renderHeader(e){const _st=this._config.show_title??!0;const _eb=this._config.show_expand_button??!0;if(!_st&&!_eb)return W;return V`
      <div class="card-header ${this._config.title&&_st?"":"no-title"}">
        ${this._config.title&&_st?V`<div class="card-title">${this._config.title}</div>`:W}
        ${_eb?V`<ha-icon-button
          class="expand-btn"
          .path=${e?"M16.59,5.41L15.17,4L12,7.17L8.83,4L7.41,5.41L12,10M7.41,18.59L8.83,20L12,16.83L15.17,20L16.58,18.59L12,14L7.41,18.59Z":"M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z"}
          .label=${e?"Einklappen":"Ausklappen"}
          @click=${this._toggleExpanded}
        ></ha-icon-button>`:W}
      </div>
    `}_renderFloor(e){const t=this.hass.floors?.[e.config.floor_id],i=e.config.name||t?.name||("__unassigned"===e.config.floor_id?"Unassigned":e.config.floor_id),o=e.config.icon||t?.icon||void 0;return V`
      <section class="floor">
        <header class="floor-header">
          <div class="floor-title">
            ${o?V`<ha-icon .icon=${o}></ha-icon>`:W}
            <span>${i}</span>
          </div>
          <div class="floor-stats">
            ${null!==e.medianTemp?V`<span class="stat">
                  <ha-icon icon="mdi:thermometer"></ha-icon>
                  ${e.medianTemp.toFixed(1)}°
                </span>`:W}
            ${null!==e.medianHumidity?V`<span class="stat">
                  <ha-icon icon="mdi:water-percent"></ha-icon>
                  ${Math.round(e.medianHumidity)}%
                </span>`:W}
          </div>
        </header>
        <div class="rooms">
          ${e.rooms.map(e=>this._renderRoom(e))}
        </div>
      </section>
    `}_renderRoom(e){const t=e.config,i=e.tint;return V`
      <div
        class="room ${t.tap_action||t.hold_action||t.double_tap_action?"clickable":""}"
        @click=${e=>this._onRoomClick(e,t)}
        @contextmenu=${e=>this._onRoomHold(e,t)}
        @dblclick=${e=>this._onRoomDoubleClick(e,t)}
      >
        <div class="room-main">
          <ha-icon
            class="room-icon"
            .icon=${t.icon||"mdi:home-outline"}
          ></ha-icon>
          <div class="room-text">
            <div class="room-name">${t.name}</div>
            ${this._renderRoomSubtext(e)}
          </div>
        </div>
        <div class="room-right">
          ${(this._config.show_controls??!1)?this._renderControls(e):W}
          <div class="badges">
            ${this._renderExtraSensors(t)}
            ${this._renderPresenceBadge(e)}
          </div>
        </div>
      </div>
    `}_renderRoomSubtext(e){const t=[];return null!==e.temp&&t.push(`${e.temp.toFixed(1)}°`),null!==e.humidity&&t.push(`${Math.round(e.humidity)}%`),V`<div class="room-sub ${t.length?"":"room-sub-empty"}">${t.join(" · ")}</div>`}_renderExtraSensors(e){return e.extra_sensors?.length?V`${e.extra_sensors.map(e=>{const t=this.hass.states[e.entity];if(!t)return W;const i=t.attributes?.unit_of_measurement||"",o=e.icon||t.attributes?.icon;return V`<span class="chip" title=${e.name||e.entity}>
        ${o?V`<ha-icon .icon=${o}></ha-icon>`:W}
        ${t.state}${i}
      </span>`})}`:W}_renderControls(e){const t=this.hass,c=e.config;const groups=this._effectiveControlGroups(c);if(!groups.length)return V`<div class="room-controls invisible"></div>`;return V`<div class="control-group">${groups.map((g,gi)=>{const anyOn=g.entities.some(en=>{const s=t.states[en];return s&&"on"===s.state});const toggleGroup=(ev)=>{ev.stopPropagation();const action=anyOn?"turn_off":"turn_on";g.entities.forEach(en=>{const s=t.states[en];if(!s)return;const dom=en.split(".")[0];t.callService(dom,action,void 0,{entity_id:en})})};return V`<div class="room-controls" @click=${toggleGroup} title=${g.name||"Schalten"}><ha-icon icon=${g.icon||(anyOn?"mdi:lightbulb":"mdi:lightbulb-outline")} class="control-icon ${anyOn?"on":"off"}"></ha-icon></div>`})}</div>`}

_effectiveControlGroups(e){if(e.control_groups&&e.control_groups.length)return e.control_groups.filter(g=>g.entities&&g.entities.length);const t=[];const lights=this._effectiveLights(e);if(lights.length)t.push({name:"Lichter",icon:"mdi:lightbulb",entities:lights});const switches=this._effectiveDomainEntities(e,"switch","excluded_switches","additional_switches");if(switches.length)t.push({name:"Steckdosen",icon:"mdi:power-socket-de",entities:switches});const covers=this._effectiveDomainEntities(e,"cover","excluded_covers","additional_covers");if(covers.length)t.push({name:"Covers",icon:"mdi:window-shutter",entities:covers});const fans=this._effectiveDomainEntities(e,"fan","excluded_fans","additional_fans");if(fans.length)t.push({name:"Fans",icon:"mdi:fan",entities:fans});return t}_effectiveDomainEntities(e,domain,excludedKey,additionalKey){const manualKey=domain+"_entities";const manualModeKey=domain+"_manual";if(e[manualModeKey])return e[manualKey]||[];const auto=this._areaEntitiesCard(e.area_id,domain);const excl=new Set(e[excludedKey]||[]);const set=new Set(auto.filter(x=>!excl.has(x)));for(const x of e[additionalKey]||[])set.add(x);return[...set]}_areaEntitiesCard(areaId,domain){if(!areaId)return[];const t=this.hass,i=[];for(const[s,n]of Object.entries(t.entities||{})){if(!s.startsWith(domain+"."))continue;if(n.disabled_by||n.hidden_by||n.entity_category)continue;if(n.area_id===areaId||(!n.area_id&&n.device_id&&t.devices?.[n.device_id]?.area_id===areaId))i.push(s)}return i}_renderPresenceBadge(e){if(!e.config.presence_entity)return V`<span class="presence-spacer"></span>`;const _fresh=(this._config.fresh_threshold??5)*60*1e3;const _age=Date.now()-e.lastPresence;const _isFresh=_age<=_fresh;return V`<span class="presence-badge ${_isFresh?"occupied":"stale"}" title=${_isFresh?"Kürzlich erkannt":"Länger her"}><ha-icon icon="mdi:walk"></ha-icon></span>`}_onRoomClick(e,t){e.stopPropagation(),Re(this,this.hass,t.tap_action,t.presence_entity)}_onRoomHold(e,t){t.hold_action&&(e.preventDefault(),e.stopPropagation(),Re(this,this.hass,t.hold_action,t.presence_entity))}_onRoomDoubleClick(e,t){t.double_tap_action&&(e.stopPropagation(),Re(this,this.hass,t.double_tap_action,t.presence_entity))}};Me.styles=a`
    :host {
      display: block;
      width: 100%;
      --room-height: 64px;
    }
    ha-card {
      width: 100%;
      box-sizing: border-box;
      padding: 12px 12px 16px;
    }
    .card-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 0 8px;
    }
    .card-header.no-title {
      justify-content: flex-end;
    }
    .card-title {
      font-size: 18px;
      font-weight: 600;
      padding: 4px 4px;
    }
    .expand-btn {
      --mdc-icon-button-size: 32px;
      --mdc-icon-size: 18px;
      color: var(--secondary-text-color);
    }
    .empty {
      padding: 24px;
      text-align: center;
      color: var(--secondary-text-color);
      font-size: 14px;
    }
    .floors {
      display: flex;
      flex-direction: column;
      gap: 14px;
    }
    .floor-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 2px 4px 8px;
      border-bottom: 1px solid var(--divider-color);
      margin-bottom: 8px;
    }
    .floor-title {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: 14px;
      font-weight: 600;
      color: var(--primary-text-color);
      letter-spacing: 0.02em;
      text-transform: uppercase;
    }
    .floor-title ha-icon {
      --mdc-icon-size: 18px;
      color: var(--secondary-text-color);
    }
    .floor-stats {
      display: inline-flex;
      gap: 10px;
      font-size: 13px;
      color: var(--secondary-text-color);
    }
    .floor-stats .stat {
      display: inline-flex;
      align-items: center;
      gap: 2px;
    }
    .floor-stats ha-icon {
      --mdc-icon-size: 16px;
    }
    .rooms {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .room {
      position: relative;
      display: flex;
      align-items: center;
      gap: 12px;
      height: var(--room-height, 64px);
      padding: var(--room-pad-block, 10px) var(--room-pad-inline, 14px);
      border-radius: 14px;
      background: rgba(255, 255, 255, 0.07);
      transition:
        background 0.4s ease,
        transform 0.15s ease;
      overflow: hidden;
      box-sizing: border-box;
    }
    .room:hover {
      background: rgba(255, 255, 255, 0.12);
    }
    .room-right {
      position: absolute;
      right: var(--room-pad-inline, 14px);
      top: 50%;
      transform: translateY(-50%);
      display: inline-flex;
      align-items: center;
      gap: 8px;
      flex-shrink: 0;
    }
    .room.clickable {
      cursor: pointer;
    }
    .room.clickable:hover {
      transform: translateY(-1px);
    }
    
    .room-main {
      display: flex;
      align-items: center;
      gap: 12px;
      flex: 1;
      min-width: 0;
      padding-right: 100px;
    }
    .room-icon {
      --mdc-icon-size: 24px;
      color: var(--primary-text-color);
      flex-shrink: 0;
    }
    .room-text {
      min-width: 0;
      flex: 1;
      overflow: hidden;
    }
    .room-name {
      font-weight: 500;
      font-size: 14px;
      color: var(--primary-text-color);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .room-sub {
      margin-top: 2px;
      font-size: 12px;
      line-height: 1.4;
      min-height: 20px;
      color: var(--secondary-text-color);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .room-sub-empty {
      visibility: hidden;
    }
    .room-controls {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      align-self: center;
      margin-right: 0;
      cursor: pointer;
      padding: 6px;
      border-radius: 50%;
      transition: background 0.2s;
      width: 36px;
      height: 36px;
      flex-shrink: 0;
      background: var(--divider-color, rgba(0,0,0,0.2));
      box-sizing: border-box;
    }
    .room-controls:hover {
      background: rgba(var(--rgb-primary-text-color, 255,255,255), 0.15);
    }
    .room-controls.invisible {
      visibility: hidden;
      cursor: default;
      background: transparent;
    }
    .room-controls.invisible:hover {
      background: transparent;
    }
    .control-group {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      flex-shrink: 0;
    }
    .control-group-editor {
      border: 1px solid var(--divider-color);
      border-radius: 8px;
      padding: 8px;
      display: flex;
      flex-direction: column;
      gap: 6px;
      margin-top: 4px;
    }
    .room-controls .control-icon {
      --mdc-icon-size: 24px;
    }
    .room-controls .control-icon.on {
      color: var(--amber-color, #ffc107);
    }
    .room-controls .control-icon.off {
      color: var(--secondary-text-color);
      opacity: 0.6;
    }
    
    .room-right {
      display: inline-flex;
      align-items: center;
      align-self: center;
      gap: 6px;
      flex-shrink: 0;
    }
    .badges {
      display: inline-flex;
      gap: 6px;
      align-items: center;
      align-self: center;
      flex-shrink: 0;
      flex-wrap: nowrap;
      justify-content: flex-end;
      height: fit-content;
    }
    .chip {
      display: inline-flex;
      align-items: center;
      gap: 2px;
      padding: 1px 6px;
      border-radius: 10px;
      font-size: 11px;
      background: rgba(0, 0, 0, 0.25);
      color: #fff;
    }
    .chip ha-icon {
      --mdc-icon-size: 12px;
    }
    .room:not(.lit) .chip {
      background: var(--divider-color);
      color: var(--primary-text-color);
    }
    .presence-badge {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-width: 36px;
      height: 36px;
      padding: 0 10px;
      border-radius: 18px;
      font-size: 13px;
      line-height: 1;
      font-weight: 500;
      flex-shrink: 0;
      box-sizing: border-box;
    }
    .presence-badge ha-icon {
      --mdc-icon-size: 20px;
    }
    .presence-badge.occupied {
      background: var(--success-color, #4caf50);
      color: #fff;
    }
    .presence-badge.stale {
      background: var(--divider-color);
      color: var(--secondary-text-color);
    }
    .presence-badge.empty {
      background: rgba(0, 0, 0, 0.35);
      color: rgba(255, 255, 255, 0.85);
    }
    .room:not(.lit) .presence-badge.empty {
      background: var(--divider-color);
      color: var(--secondary-text-color);
    }
    .presence-badge.none {
      display: none;
    }
    .presence-spacer {
      display: inline-flex;
      min-width: 36px;
      height: 36px;
      padding: 0 10px;
      border-radius: 18px;
      flex-shrink: 0;
      visibility: hidden;
      box-sizing: border-box;
    }
  `,e([pe({attribute:!1})],Me.prototype,"hass",void 0),e([ue()],Me.prototype,"_config",void 0),e([ue()],Me.prototype,"_tick",void 0),e([ue()],Me.prototype,"_expanded",void 0),Me=e([ce(ge)],Me);export{Me as AdvancedRoomCard};