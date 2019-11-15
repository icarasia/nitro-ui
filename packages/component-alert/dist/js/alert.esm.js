var commonjsGlobal="undefined"==typeof globalThis?"undefined"==typeof window?"undefined"==typeof global?"undefined"==typeof self?{}:self:global:window:globalThis;function createCommonjsModule(e,t){return t={exports:{}},e(t,t.exports),t.exports}var jquery=createCommonjsModule(function(e){/*!
 * jQuery JavaScript Library v3.4.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2019-05-01T21:04Z
 */(function(t,n){e.exports=t.document?n(t,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return n(e)}})("undefined"==typeof window?commonjsGlobal:window,function(e,t){var re=Math.ceil,de=Math.max;function n(e,t,n){n=n||pe;var a,o,s=n.createElement("script");if(s.text=e,t)for(a in Se)// Support: Firefox 64+, Edge 18+
// Some browsers don't support the "nonce" property on scripts.
// On the other hand, just using `getAttribute` is not enough as
// the `nonce` attribute is reset to an empty string whenever it
// becomes browsing-context connected.
// See https://github.com/whatwg/html/issues/2369
// See https://html.spec.whatwg.org/#nonce-attributes
// The `node.getAttribute` check was added for the sake of
// `jQuery.globalEval` so that it can fake a nonce-containing node
// via an object.
o=t[a]||t.getAttribute&&t.getAttribute(a),o&&s.setAttribute(a,o);n.head.appendChild(s).parentNode.removeChild(s)}function a(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?ge[ye.call(e)]||"object":typeof e;// Support: Android <=2.3 only (functionish RegExp)
}/* global Symbol */ // Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module
function o(e){// Support: real iOS 8.2 only (not reproducible in simulator)
// `in` check used to prevent JIT error (gh-2145)
// hasOwn isn't used here due to false negatives
// regarding Nodelist length in IE
var t=!!e&&"length"in e&&e.length,n=a(e);return!(Ce(e)||we(e))&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}function s(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}// Implement the identical functionality for filter and not
function r(e,t,n){return Ce(t)?Ee.grep(e,function(e,a){return!!t.call(e,a,e)!==n}):t.nodeType?Ee.grep(e,function(e){return e===t!==n}):"string"==typeof t?Ee.filter(t,e,n):Ee.grep(e,function(e){return-1<me.call(t,e)!==n});// Single element
// Arraylike of elements (jQuery, arguments, Array)
// Filtered directly for both simple and complex selectors
}function d(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}// Convert String-formatted options into Object-formatted ones
function l(e){var t={};return Ee.each(e.match(Re)||[],function(e,n){t[n]=!0}),t}/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */function p(e){return e}function c(e){throw e}function u(e,t,n,a){var o;try{e&&Ce(o=e.promise)?o.call(e).done(t).fail(n):e&&Ce(o=e.then)?o.call(e,t,n):t.apply(void 0,[e].slice(a))}catch(e){n.apply(void 0,[e])}}// The ready event handler and self cleanup method
function f(){pe.removeEventListener("DOMContentLoaded",f),e.removeEventListener("load",f),Ee.ready()}// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
// Used by camelCase as callback to replace()
function h(e,t){return t.toUpperCase()}// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function m(e){return e.replace(Fe,"ms-").replace(Ue,h)}function g(){this.expando=Ee.expando+g.uid++}function y(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:Ve.test(e)?JSON.parse(e):e);// Only convert to a number if it doesn't change the string
}function x(e,t,n){var a;// If nothing was found internally, try to fetch any
// data from the HTML5 data-* attribute
if(void 0===n&&1===e.nodeType)if(a="data-"+t.replace(Qe,"-$&").toLowerCase(),n=e.getAttribute(a),"string"==typeof n){try{n=y(n)}catch(t){}// Make sure we set the data so it isn't changed later
$e.set(e,t,n)}else n=void 0;return n}function b(e,t,n,a){var o,i,s=20,r=a?function(){return a.cur()}:function(){return Ee.css(e,t,"")},d=r(),l=n&&n[3]||(Ee.cssNumber[t]?"":"px"),// Starting value computation is required for potential unit mismatches
p=e.nodeType&&(Ee.cssNumber[t]||"px"!==l&&+d)&&Ge.exec(Ee.css(e,t));if(p&&p[3]!==l){for(d/=2,l=l||p[3],p=+d||1;s--;)// Evaluate and update our best guess (doubling guesses that zero out).
// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
Ee.style(e,t,p+l),0>=(1-i)*(1-(i=r()/d||.5))&&(s=0),p/=i;p*=2,Ee.style(e,t,p+l),n=n||[]}return n&&(p=+p||+d||0,o=n[1]?p+(n[1]+1)*n[2]:+n[2],a&&(a.unit=l,a.start=p,a.end=o)),o}function v(e){var t,n=e.ownerDocument,a=e.nodeName,o=at[a];return o?o:(t=n.body.appendChild(n.createElement(a)),o=Ee.css(t,"display"),t.parentNode.removeChild(t),"none"===o&&(o="block"),at[a]=o,o)}function T(e,t){// Determine new display value for elements that need to change
for(var n,a,o=[],i=0,s=e.length;i<s;i++)(a=e[i],!!a.style)&&(n=a.style.display,t?("none"===n&&(o[i]=Xe.get(a,"display")||null,!o[i]&&(a.style.display="")),""===a.style.display&&tt(a)&&(o[i]=v(a))):"none"!==n&&(o[i]="none",Xe.set(a,"display",n)));// Set the display of the elements in a second loop to avoid constant reflow
for(i=0;i<s;i++)null!=o[i]&&(e[i].style.display=o[i]);return e}function C(e,t){// Support: IE <=9 - 11 only
// Use typeof to avoid zero-argument method invocation on host objects (#15151)
var n;return n="undefined"==typeof e.getElementsByTagName?"undefined"==typeof e.querySelectorAll?[]:e.querySelectorAll(t||"*"):e.getElementsByTagName(t||"*"),void 0===t||t&&s(e,t)?Ee.merge([e],n):n}// Mark scripts as having already been evaluated
function w(e,t){for(var n=0,a=e.length;n<a;n++)Xe.set(e[n],"globalEval",!t||Xe.get(t[n],"globalEval"))}function S(e,t,n,o,s){for(var r,d,p,c,u,f,h=t.createDocumentFragment(),m=[],g=0,y=e.length;g<y;g++)if(r=e[g],r||0===r)// Add nodes directly
if("object"===a(r))// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
Ee.merge(m,r.nodeType?[r]:r);else if(!dt.test(r))m.push(t.createTextNode(r));else{for(d=d||h.appendChild(t.createElement("div")),p=(it.exec(r)||["",""])[1].toLowerCase(),c=rt[p]||rt._default,d.innerHTML=c[1]+Ee.htmlPrefilter(r)+c[2],f=c[0];f--;)d=d.lastChild;// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
Ee.merge(m,d.childNodes),d=h.firstChild,d.textContent=""}// Remove wrapper from fragment
for(h.textContent="",g=0;r=m[g++];){// Skip elements already in the context collection (trac-4087)
if(o&&-1<Ee.inArray(r,o)){s&&s.push(r);continue}// Capture executables
if(u=Ze(r),d=C(h.appendChild(r),"script"),u&&w(d),n)for(f=0;r=d[f++];)st.test(r.type||"")&&n.push(r)}return h}function N(){return!0}function E(){return!1}// Support: IE <=9 - 11+
// focus() and blur() are asynchronous, except when they are no-op.
// So expect focus to be synchronous when the element is already active,
// and blur to be synchronous when the element is not already active.
// (focus and blur are always synchronous in other supported browsers,
// this just defines when we can count on it).
function D(e,t){return e===A()==("focus"===t)}// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function A(){try{return pe.activeElement}catch(e){}}function k(e,t,n,a,o,i){var s,r;// Types can be a map of types/handlers
if("object"==typeof t){for(r in"string"!=typeof n&&(a=a||n,n=void 0),t)k(e,r,n,a,t[r],i);return e}if(null==a&&null==o?(o=n,a=n=void 0):null==o&&("string"==typeof n?(o=a,a=void 0):(o=a,a=n,n=void 0)),!1===o)o=E;else if(!o)return e;return 1===i&&(s=o,o=function(e){return Ee().off(e),s.apply(this,arguments)},o.guid=s.guid||(s.guid=Ee.guid++)),e.each(function(){Ee.event.add(this,t,o,a,n)})}/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */ // Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function i(e,t,n){// Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
return n?void(// Register the controller as a special universal handler for all event namespaces
Xe.set(e,t,!1),Ee.event.add(e,t,{namespace:!1,handler:function(e){var a,o,i=Xe.get(this,t);if(!(1&e.isTrigger&&this[t]))i.length&&(// ...and capture the result
// Abort handling of the native event
Xe.set(this,t,{value:Ee.event.trigger(// Support: IE <=9 - 11+
// Extend with the prototype to reset the above stopImmediatePropagation()
Ee.extend(i[0],Ee.Event.prototype),i.slice(1),this)}),e.stopImmediatePropagation());else// Interrupt processing of the outer synthetic .trigger()ed event
// Saved data should be false in such cases, but might be a leftover capture object
// from an async native handler (gh-4350)
if(!!i.length)(Ee.event.special[t]||{}).delegateType&&e.stopPropagation();else if(i=ue.call(arguments),Xe.set(this,t,i),a=n(this,t),this[t](),o=Xe.get(this,t),i!==o||a?Xe.set(this,t,!1):o={},i!==o)return e.stopImmediatePropagation(),e.preventDefault(),o.value;// If this is an inner synthetic event for an event with a bubbling surrogate
// (focus or blur), assume that the surrogate already propagated from triggering the
// native event and prevent that from happening again here.
// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
// bubbling surrogate propagates *after* the non-bubbling base), but that seems
// less bad than duplication.
// If this is a native event triggered above, everything is now in order
// Fire an inner synthetic event with the original arguments
}})):void(void 0===Xe.get(e,t)&&Ee.event.add(e,t,N))}// Prefer a tbody over its parent table for containing new rows
function j(e,t){return s(e,"table")&&s(11===t.nodeType?t.firstChild:t,"tr")?Ee(e).children("tbody")[0]||e:e}// Replace/restore the type attribute of script elements for safe DOM manipulation
function L(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function q(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function H(e,t){var n,a,o,s,r,d,p,c;if(1===t.nodeType){// 1. Copy private data: events, handlers, etc.
if(Xe.hasData(e)&&(s=Xe.access(e),r=Xe.set(t,s),c=s.events,c))for(o in delete r.handle,r.events={},c)for(n=0,a=c[o].length;n<a;n++)Ee.event.add(t,o,c[o][n]);// 2. Copy user data
$e.hasData(e)&&(d=$e.access(e),p=Ee.extend({},d),$e.set(t,p))}}// Fix IE bugs, see support tests
function I(e,t){var n=t.nodeName.toLowerCase();// Fails to persist the checked state of a cloned checkbox or radio button.
"input"===n&&ot.test(e.type)?t.checked=e.checked:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}function O(e,t,a,o){t=fe.apply([],t);var s,r,d,p,c,u,f=0,h=e.length,l=t[0],m=Ce(l);// We can't cloneNode fragments that contain checked, in WebKit
if(m||1<h&&"string"==typeof l&&!Te.checkClone&&ht.test(l))return e.each(function(n){var i=e.eq(n);m&&(t[0]=l.call(this,n,i.html())),O(i,t,a,o)});if(h&&(s=S(t,e[0].ownerDocument,!1,e,o),r=s.firstChild,1===s.childNodes.length&&(s=r),r||o))// Require either new content or an interest in ignored elements to invoke the callback
{// Use the original fragment for the last item
// instead of the first because it can end up
// being emptied incorrectly in certain situations (#8070).
for(d=Ee.map(C(s,"script"),L),p=d.length;f<h;f++)c=s,f!==h-1&&(c=Ee.clone(c,!0,!0),p&&Ee.merge(d,C(c,"script"))),a.call(e[f],c,f);if(p)// Evaluate executable scripts on first document insertion
for(u=d[d.length-1].ownerDocument,Ee.map(d,q),f=0;f<p;f++)c=d[f],st.test(c.type||"")&&!Xe.access(c,"globalEval")&&Ee.contains(u,c)&&(c.src&&"module"!==(c.type||"").toLowerCase()?Ee._evalUrl&&!c.noModule&&Ee._evalUrl(c.src,{nonce:c.nonce||c.getAttribute("nonce")}):n(c.textContent.replace(mt,""),c,u))}return e}function P(e,t,n){for(var a,o=t?Ee.filter(t,e):e,s=0;null!=(a=o[s]);s++)n||1!==a.nodeType||Ee.cleanData(C(a)),a.parentNode&&(n&&Ze(a)&&w(C(a,"script")),a.parentNode.removeChild(a));return e}function _(e,t,n){var a,o,i,s,// Support: Firefox 51+
// Retrieving style before computed somehow
// fixes an issue with getting wrong values
// on detached elements
r=e.style;return n=n||yt(e),n&&(s=n.getPropertyValue(t)||n[t],""===s&&!Ze(e)&&(s=Ee.style(e,t)),!Te.pixelBoxStyles()&&gt.test(s)&&xt.test(t)&&(a=r.width,o=r.minWidth,i=r.maxWidth,r.minWidth=r.maxWidth=r.width=s,s=n.width,r.width=a,r.minWidth=o,r.maxWidth=i)),void 0===s?s:// Support: IE <=9 - 11 only
// IE returns zIndex value as an integer.
s+""}function R(e,t){// Define the hook, we'll check on the first run if it's really needed.
return{get:function(){return e()?void delete this.get:(this.get=t).apply(this,arguments);// Hook needed; redefine it so that the support test is not executed again.
}}}// Return a vendor-prefixed property or undefined
function M(e){// Check for vendor prefixed names
for(var t=e[0].toUpperCase()+e.slice(1),n=bt.length;n--;)if(e=bt[n]+t,e in vt)return e}// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function W(e){var t=Ee.cssProps[e]||Tt[e];return t?t:e in vt?e:Tt[e]=M(e)||e}function B(e,t,n){// Any relative (+/-) values have already been
// normalized at this point
var a=Ge.exec(t);return a?// Guard against undefined "subtract", e.g., when used as in cssHooks
de(0,a[2]-(n||0))+(a[3]||"px"):t}function F(e,t,n,a,o,s){var r="width"===t?1:0,d=0,l=0;// Adjustment may not be necessary
if(n===(a?"border":"content"))return 0;for(;4>r;r+=2)"margin"===n&&(l+=Ee.css(e,n+Ke[r],!0,o)),a?("content"===n&&(l-=Ee.css(e,"padding"+Ke[r],!0,o)),"margin"!==n&&(l-=Ee.css(e,"border"+Ke[r]+"Width",!0,o))):(l+=Ee.css(e,"padding"+Ke[r],!0,o),"padding"===n?d+=Ee.css(e,"border"+Ke[r]+"Width",!0,o):l+=Ee.css(e,"border"+Ke[r]+"Width",!0,o));// Account for positive content-box scroll gutter when requested by providing computedVal
return!a&&0<=s&&(l+=de(0,re(e["offset"+t[0].toUpperCase()+t.slice(1)]-s-l-d-.5// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
// Use an explicit zero to avoid NaN (gh-3964)
))||0),l}function U(e,t,n){// Start with computed style
var a=yt(e),// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
// Fake content-box until we know it's needed to know the true value.
o=!Te.boxSizingReliable()||n,i=o&&"border-box"===Ee.css(e,"boxSizing",!1,a),s=i,r=_(e,t,a),d="offset"+t[0].toUpperCase()+t.slice(1);// Support: Firefox <=54
// Return a confounding non-pixel value or feign ignorance, as appropriate.
if(gt.test(r)){if(!n)return r;r="auto"}// Fall back to offsetWidth/offsetHeight when value is "auto"
// This happens for inline elements with no explicit setting (gh-3571)
// Support: Android <=4.1 - 4.3 only
// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
// Support: IE 9-11 only
// Also use offsetWidth/offsetHeight for when box sizing is unreliable
// We use getClientRects() to check for hidden/disconnected.
// In those cases, the computed value can be trusted to be border-box
// Adjust for the element's box model
return(!Te.boxSizingReliable()&&i||"auto"===r||!parseFloat(r)&&"inline"===Ee.css(e,"display",!1,a))&&e.getClientRects().length&&(i="border-box"===Ee.css(e,"boxSizing",!1,a),s=d in e,s&&(r=e[d])),r=parseFloat(r)||0,r+F(e,t,n||(i?"border":"content"),s,a,// Provide the current computed size to request scroll gutter calculation (gh-3589)
r)+"px"}function z(e,t,n,a,o){return new z.prototype.init(e,t,n,a,o)}function X(){Dt&&(!1===pe.hidden&&e.requestAnimationFrame?e.requestAnimationFrame(X):e.setTimeout(X,Ee.fx.interval),Ee.fx.tick())}// Animations created synchronously will run synchronously
function $(){return e.setTimeout(function(){Et=void 0}),Et=Date.now()}// Generate parameters to create a standard animation
function V(e,t){var n,a=0,o={height:e};// If we include width, step value is 1 to do all cssExpand values,
// otherwise step value is 2 to skip over Left and Right
for(t=t?1:0;4>a;a+=2-t)n=Ke[a],o["margin"+n]=o["padding"+n]=e;return t&&(o.opacity=o.width=e),o}function Q(e,t,n){for(var a,o=(K.tweeners[t]||[]).concat(K.tweeners["*"]),i=0,s=o.length;i<s;i++)if(a=o[i].call(n,t,e))// We're done with this property
return a}function Y(e,t,n){var a,o,i,s,r,d,l,p,c="width"in t||"height"in t,u=this,f={},h=e.style,m=e.nodeType&&tt(e),g=Xe.get(e,"fxshow");// Queue-skipping animations hijack the fx hooks
// Detect show/hide animations
for(a in n.queue||(s=Ee._queueHooks(e,"fx"),null==s.unqueued&&(s.unqueued=0,r=s.empty.fire,s.empty.fire=function(){s.unqueued||r()}),s.unqueued++,u.always(function(){u.always(function(){s.unqueued--,Ee.queue(e,"fx").length||s.empty.fire()})})),t)if(o=t[a],At.test(o)){if(delete t[a],i=i||"toggle"===o,o===(m?"hide":"show"))// Pretend to be hidden if this is a "show" and
// there is still data from a stopped show/hide
if("show"===o&&g&&void 0!==g[a])m=!0;else continue;f[a]=g&&g[a]||Ee.style(e,a)}// Bail out if this is a no-op like .hide().hide()
if(d=!Ee.isEmptyObject(t),d||!Ee.isEmptyObject(f))for(a in c&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],l=g&&g.display,null==l&&(l=Xe.get(e,"display")),p=Ee.css(e,"display"),"none"===p&&(l?p=l:(T([e],!0),l=e.style.display||l,p=Ee.css(e,"display"),T([e]))),("inline"===p||"inline-block"===p&&null!=l)&&"none"===Ee.css(e,"float")&&(!d&&(u.done(function(){h.display=l}),null==l&&(p=h.display,l="none"===p?"":p)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",u.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),d=!1,f)// Per-property setup
d||(g?"hidden"in g&&(m=g.hidden):g=Xe.access(e,"fxshow",{display:l}),i&&(g.hidden=!m),m&&T([e],!0),u.done(function(){for(a in m||T([e]),Xe.remove(e,"fxshow"),f)Ee.style(e,a,f[a])})),d=Q(m?g[a]:0,a,u),a in g||(g[a]=d.start,m&&(d.end=d.start,d.start=0));// Restrict "overflow" and "display" styles during box animations
}function G(e,t){var n,a,o,i,s;// camelCase, specialEasing and expand cssHook pass
for(n in e)if(a=m(n),o=t[a],i=e[n],Array.isArray(i)&&(o=i[1],i=e[n]=i[0]),n!==a&&(e[a]=i,delete e[n]),s=Ee.cssHooks[a],s&&"expand"in s)// Not quite $.extend, this won't overwrite existing keys.
// Reusing 'index' because we have the correct "name"
for(n in i=s.expand(i),delete e[a],i)n in e||(e[n]=i[n],t[n]=o);else t[a]=o}function K(e,t,n){var a,o,i=0,s=K.prefilters.length,r=Ee.Deferred().always(function(){delete d.elem}),d=function(){if(o)return!1;for(var t=Et||$(),n=de(0,l.startTime+l.duration-t),// Support: Android 2.3 only
// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
a=n/l.duration||0,i=1-a,s=0,d=l.tweens.length;s<d;s++)l.tweens[s].run(i);// If there's more to do, yield
return(r.notifyWith(e,[l,i,n]),1>i&&d)?n:(d||r.notifyWith(e,[l,1,0]),r.resolveWith(e,[l]),!1);// If this was an empty animation, synthesize a final progress notification
},l=r.promise({elem:e,props:Ee.extend({},t),opts:Ee.extend(!0,{specialEasing:{},easing:Ee.easing._default},n),originalProperties:t,originalOptions:n,startTime:Et||$(),duration:n.duration,tweens:[],createTween:function(t,n){var a=Ee.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(a),a},stop:function(t){var n=0,// If we are going to the end, we want to run all the tweens
// otherwise we skip this part
a=t?l.tweens.length:0;if(o)return this;for(o=!0;n<a;n++)l.tweens[n].run(1);// Resolve when we played the last frame; otherwise, reject
return t?(r.notifyWith(e,[l,1,0]),r.resolveWith(e,[l,t])):r.rejectWith(e,[l,t]),this}}),p=l.props;for(G(p,l.opts.specialEasing);i<s;i++)if(a=K.prefilters[i].call(l,e,p,l.opts),a)return Ce(a.stop)&&(Ee._queueHooks(l.elem,l.opts.queue).stop=a.stop.bind(a)),a;return Ee.map(p,Q,l),Ce(l.opts.start)&&l.opts.start.call(e,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),Ee.fx.timer(Ee.extend(d,{elem:e,anim:l,queue:l.opts.queue})),l}// Strip and collapse whitespace according to HTML spec
// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
function J(e){var t=e.match(Re)||[];return t.join(" ")}function Z(e){return e.getAttribute&&e.getAttribute("class")||""}function ee(e){return Array.isArray(e)?e:"string"==typeof e?e.match(Re)||[]:[]}function te(e,t,n,o){if(Array.isArray(t))Ee.each(t,function(t,a){n||Wt.test(e)?o(e,a):te(e+"["+("object"==typeof a&&null!=a?t:"")+"]",a,n,o)});else if(!n&&"object"===a(t))// Serialize object item.
for(var i in t)te(e+"["+i+"]",t[i],n,o);else// Serialize scalar item.
o(e,t)}// Serialize an array of form elements or a set of
// key/values into a query string
// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function ne(e){// dataTypeExpression is optional and defaults to "*"
return function(t,n){"string"!=typeof t&&(n=t,t="*");var a,o=0,s=t.toLowerCase().match(Re)||[];if(Ce(n))// For each dataType in the dataTypeExpression
for(;a=s[o++];)// Prepend if requested
"+"===a[0]?(a=a.slice(1)||"*",(e[a]=e[a]||[]).unshift(n)):(e[a]=e[a]||[]).push(n)}}// Base inspection function for prefilters and transports
function ae(e,t,n,a){function o(r){var d;return i[r]=!0,Ee.each(e[r]||[],function(e,r){var l=r(t,n,a);return"string"!=typeof l||s||i[l]?s?!(d=l):void 0:(t.dataTypes.unshift(l),o(l),!1)}),d}var i={},s=e===Jt;return o(t.dataTypes[0])||!i["*"]&&o("*")}// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function oe(e,t){var n,a,o=Ee.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((o[n]?e:a||(a={}))[n]=t[n]);return a&&Ee.extend(!0,e,a),e}/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */function ie(e,t,n){// Remove auto dataType and get content-type in the process
for(var a,o,i,s,r=e.contents,d=e.dataTypes;"*"===d[0];)d.shift(),void 0===a&&(a=e.mimeType||t.getResponseHeader("Content-Type"));// Check if we're dealing with a known content-type
if(a)for(o in r)if(r[o]&&r[o].test(a)){d.unshift(o);break}// Check to see if we have a response for the expected dataType
if(d[0]in n)i=d[0];else{// Try convertible dataTypes
for(o in n){if(!d[0]||e.converters[o+" "+d[0]]){i=o;break}s||(s=o)}// Or just use first one
i=i||s}// If we found a dataType
// We add the dataType to the list if needed
// and return the corresponding response
return i?(i!==d[0]&&d.unshift(i),n[i]):void 0}/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */function se(e,t,n,a){var o,i,s,r,d,l={},// Work with a copy of dataTypes in case we need to modify it for conversion
p=e.dataTypes.slice();// Create converters map with lowercased keys
if(p[1])for(s in e.converters)l[s.toLowerCase()]=e.converters[s];// Convert to each sequential dataType
for(i=p.shift();i;)if(e.responseFields[i]&&(n[e.responseFields[i]]=t),!d&&a&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),d=i,i=p.shift(),i)// There's only work to do if current dataType is non-auto
if("*"===i)i=d;else if("*"!==d&&d!==i){// If none found, seek a pair
if(s=l[d+" "+i]||l["* "+i],!s)for(o in l)if(r=o.split(" "),r[1]===i&&(s=l[d+" "+r[0]]||l["* "+r[0]],s)){!0===s?s=l[o]:!0!==l[o]&&(i=r[0],p.unshift(r[1]));break}// Apply converter (if not an equivalence)
if(!0!==s)// Unless errors are allowed to bubble, catch and return them
if(s&&e.throws)t=s(t);else try{t=s(t)}catch(t){return{state:"parsererror",error:s?t:"No conversion from "+d+" to "+i}}}return{state:"success",data:t}}var le=[],pe=e.document,ce=Object.getPrototypeOf,ue=le.slice,fe=le.concat,he=le.push,me=le.indexOf,ge={},ye=ge.toString,xe=ge.hasOwnProperty,be=xe.toString,ve=be.call(Object),Te={},Ce=function(e){// Support: Chrome <=57, Firefox <=52
// In some browsers, typeof returns "function" for HTML <object> elements
// (i.e., `typeof document.createElement( "object" ) === "function"`).
// We don't want to classify *any* DOM node as a function.
return"function"==typeof e&&"number"!=typeof e.nodeType},we=function(e){return null!=e&&e===e.window},Se={type:!0,src:!0,nonce:!0,noModule:!0},Ne="3.4.1",// Define a local copy of jQuery
Ee=function(e,t){// The jQuery object is actually just the init constructor 'enhanced'
// Need init if jQuery is called (just allow error to be thrown if not included)
return new Ee.fn.init(e,t)},// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
De=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;Ee.fn=Ee.prototype={// The current version of jQuery being used
jquery:Ne,constructor:Ee,// The default length of a jQuery object is 0
length:0,toArray:function(){return ue.call(this)},// Get the Nth element in the matched element set OR
// Get the whole matched element set as a clean array
get:function(e){// Return all the elements in a clean array
return null==e?ue.call(this):0>e?this[e+this.length]:this[e];// Return just the one element from the set
},// Take an array of elements and push it onto the stack
// (returning the new matched element set)
pushStack:function(e){// Build a new jQuery matched element set
var t=Ee.merge(this.constructor(),e);// Add the old object onto the stack (as a reference)
// Return the newly-formed element set
return t.prevObject=this,t},// Execute a callback for every element in the matched set.
each:function(e){return Ee.each(this,e)},map:function(e){return this.pushStack(Ee.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(ue.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},// For internal use only.
// Behaves like an Array's method, not like a jQuery method.
push:he,sort:le.sort,splice:le.splice},Ee.extend=Ee.fn.extend=function(){var e,t,n,a,o,s,r=arguments[0]||{},d=1,l=arguments.length,p=!1;// Handle a deep copy situation
for("boolean"==typeof r&&(p=r,r=arguments[d]||{},d++),"object"==typeof r||Ce(r)||(r={}),d===l&&(r=this,d--);d<l;d++)// Only deal with non-null/undefined values
if(null!=(e=arguments[d]))// Extend the base object
for(t in e)// Prevent Object.prototype pollution
// Prevent never-ending loop
(a=e[t],"__proto__"!==t&&r!==a)&&(p&&a&&(Ee.isPlainObject(a)||(o=Array.isArray(a)))?(n=r[t],s=o&&!Array.isArray(n)?[]:o||Ee.isPlainObject(n)?n:{},o=!1,r[t]=Ee.extend(p,s,a)):void 0!==a&&(r[t]=a));// Recurse if we're merging plain objects or arrays
// Return the modified object
return r},Ee.extend({// Unique for each copy of jQuery on the page
expando:"jQuery"+(Ne+Math.random()).replace(/\D/g,""),// Assume jQuery is ready without the ready module
isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;// Detect obvious negatives
// Use toString instead of jQuery.type to catch host objects
return!!(e&&"[object Object]"===ye.call(e))&&((t=ce(e),!!!t)||(n=xe.call(t,"constructor")&&t.constructor,"function"==typeof n&&be.call(n)===ve));// Objects with prototype are plain iff they were constructed by a global Object function
},isEmptyObject:function(e){for(var t in e)return!1;return!0},// Evaluates a script in a global context
globalEval:function(e,t){n(e,{nonce:t&&t.nonce})},each:function(e,t){var n,a=0;if(o(e))for(n=e.length;a<n&&!1!==t.call(e[a],a,e[a]);a++);else for(a in e)if(!1===t.call(e[a],a,e[a]))break;return e},// Support: Android <=4.0 only
trim:function(e){return null==e?"":(e+"").replace(De,"")},// results is for internal usage only
makeArray:function(e,t){var n=t||[];return null!=e&&(o(Object(e))?Ee.merge(n,"string"==typeof e?[e]:e):he.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:me.call(t,e,n)},// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
merge:function(e,t){for(var n=+t.length,a=0,o=e.length;a<n;a++)e[o++]=t[a];return e.length=o,e},grep:function(e,t,n){// Go through the array, only saving the items
// that pass the validator function
for(var a,o=[],s=0,r=e.length;s<r;s++)a=!t(e[s],s),a!==!n&&o.push(e[s]);return o},// arg is for internal usage only
map:function(e,t,n){var a,s,r=0,d=[];// Go through the array, translating each of the items to their new values
if(o(e))for(a=e.length;r<a;r++)s=t(e[r],r,n),null!=s&&d.push(s);// Go through every key on the object,
else for(r in e)s=t(e[r],r,n),null!=s&&d.push(s);// Flatten any nested arrays
return fe.apply([],d)},// A global GUID counter for objects
guid:1,// jQuery.support is not used in Core but other projects attach their
// properties to it so it needs to exist.
support:Te}),"function"==typeof Symbol&&(Ee.fn[Symbol.iterator]=le[Symbol.iterator]),Ee.each(["Boolean","Number","String","Function","Array","Date","RegExp","Object","Error","Symbol"],function(e,t){ge["[object "+t+"]"]=t.toLowerCase()});var Ae=/*!
 * Sizzle CSS Selector Engine v2.3.4
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2019-04-08
 */function(e){function t(e,t,n,a){var o,s,r,d,l,p,c,f=t&&t.ownerDocument,// nodeType defaults to 9, since context defaults to document
g=t?t.nodeType:9;// Return early from calls with invalid selector or context
if(n=n||[],"string"!=typeof e||!e||1!==g&&9!==g&&11!==g)return n;// Try to shortcut find operations (as opposed to filters) in HTML documents
if(!a&&((t?t.ownerDocument||t:U)!==O&&I(t),t=t||O,_)){// If the selector is sufficiently simple, try using a "get*By*" DOM method
// (excepting DocumentFragment context, where the methods don't exist)
if(11!==g&&(l=ge.exec(e)))// ID selector
if(!(o=l[1])){if(l[2])return te.apply(n,t.getElementsByTagName(e)),n;// Class selector
if((o=l[3])&&w.getElementsByClassName&&t.getElementsByClassName)return te.apply(n,t.getElementsByClassName(o)),n}else// Document context
if(9===g){if(!(r=t.getElementById(o)))return n;// Support: IE, Opera, Webkit
// TODO: identify versions
// getElementById can match elements by name instead of ID
if(r.id===o)return n.push(r),n}// Element context
else// Support: IE, Opera, Webkit
// TODO: identify versions
// getElementById can match elements by name instead of ID
if(f&&(r=f.getElementById(o))&&B(t,r)&&r.id===o)return n.push(r),n;// Type selector
// Take advantage of querySelectorAll
if(w.qsa&&!Y[e+" "]&&(!R||!R.test(e))&&(// Support: IE 8 only
// Exclude object elements
1!==g||"object"!==t.nodeName.toLowerCase())){// qSA considers elements outside a scoping root when evaluating child or
// descendant combinators, which is not what we want.
// In such cases, we work around the behavior by prefixing every selector in the
// list with an ID selector referencing the scope context.
// Thanks to Andrew Dupont for this technique.
if(c=e,f=t,1===g&&de.test(e)){for((d=t.getAttribute("id"))?d=d.replace(ve,Te):t.setAttribute("id",d=F),p=D(e),s=p.length;s--;)p[s]="#"+d+" "+h(p[s]);c=p.join(","),f=ye.test(e)&&u(t.parentNode)||t}try{return te.apply(n,f.querySelectorAll(c)),n}catch(t){Y(e,!0)}finally{d===F&&t.removeAttribute("id")}}}// All others
return k(e.replace(ie,"$1"),t,n,a)}/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */function n(){function e(n,a){return t.push(n+" ")>S.cacheLength&&delete e[t.shift()],e[n+" "]=a}var t=[];return e}/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */function a(e){return e[F]=!0,e}/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */function o(e){var t=O.createElement("fieldset");try{return!!e(t)}catch(t){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */function s(e,t){for(var n=e.split("|"),a=n.length;a--;)S.attrHandle[n[a]]=t}/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */function r(e,t){var n=t&&e,a=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;// Use IE sourceIndex if available on both nodes
if(a)return a;// Check if b follows a
if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */function d(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */function l(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */function p(e){// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
return function(t){// Only certain elements can match :enabled or :disabled
// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||// Where there is no isDisabled, check manually
/* jshint -W018 */t.isDisabled!==!e&&we(t)===e:t.disabled===e:!!("label"in t)&&t.disabled===e;// Remaining elements are neither :enabled nor :disabled
}}/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */function c(e){return a(function(t){return t=+t,a(function(n,a){// Match elements found at the specified indexes
for(var o,s=e([],n.length,t),r=s.length;r--;)n[o=s[r]]&&(n[o]=!(a[o]=n[o]))})})}/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */function u(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}// Expose support vars for convenience
// Easy API for creating new setFilters
function f(){}function h(e){for(var t=0,n=e.length,a="";t<n;t++)a+=e[t].value;return a}function m(e,t,n){var a=t.dir,o=t.next,i=o||a,s=n&&"parentNode"===i,r=X++;return t.first?// Check against closest ancestor/preceding element
function(t,n,o){for(;t=t[a];)if(1===t.nodeType||s)return e(t,n,o);return!1}:// Check against all ancestor/preceding elements
function(t,n,d){var l,p,c,u=[z,r];// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
if(d){for(;t=t[a];)if((1===t.nodeType||s)&&e(t,n,d))return!0;}else for(;t=t[a];)if(1===t.nodeType||s)if(c=t[F]||(t[F]={}),p=c[t.uniqueID]||(c[t.uniqueID]={}),o&&o===t.nodeName.toLowerCase())t=t[a]||t;else{if((l=p[i])&&l[0]===z&&l[1]===r)// Assign to newCache so results back-propagate to previous elements
return u[2]=l[2];// A match means we're done; a fail means we have to keep checking
if(p[i]=u,u[2]=e(t,n,d))return!0}return!1}}function g(e){return 1<e.length?function(t,n,a){for(var o=e.length;o--;)if(!e[o](t,n,a))return!1;return!0}:e[0]}function y(e,n,a){for(var o=0,s=n.length;o<s;o++)t(e,n[o],a);return a}function x(e,t,n,a,o){for(var s,r=[],d=0,l=e.length;d<l;d++)(s=e[d])&&(!n||n(s,a,o))&&(r.push(s),null!=t&&t.push(d));return r}function b(e,t,n,o,s,r){return o&&!o[F]&&(o=b(o)),s&&!s[F]&&(s=b(s,r)),a(function(a,r,d,l){var p,c,u,f=[],h=[],m=r.length,// Get initial elements from seed or context
g=a||y(t||"*",d.nodeType?[d]:d,[]),// Prefilter to get matcher input, preserving a map for seed-results synchronization
b=e&&(a||!t)?x(g,f,e,d,l):g,v=n?// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
s||(a?e:m||o)?// ...intermediate processing is necessary
[]:// ...otherwise use results directly
r:b;// Find primary matches
// Apply postFilter
if(n&&n(b,v,d,l),o)for(p=x(v,h),o(p,[],d,l),c=p.length;c--;)(u=p[c])&&(v[h[c]]=!(b[h[c]]=u));if(!a)v=x(v===r?v.splice(m,v.length):v),s?s(null,r,v,l):te.apply(r,v);else if(s||e){if(s){for(p=[],c=v.length;c--;)(u=v[c])&&// Restore matcherIn since elem is not yet a final match
p.push(b[c]=u);s(null,v=[],p,l)}// Move matched elements from seed to results to keep them synchronized
for(c=v.length;c--;)(u=v[c])&&-1<(p=s?ae(a,u):f[c])&&(a[p]=!(r[p]=u))}// Add elements to results, through postFinder if defined
})}function v(e){for(var t,n,a,o=e.length,s=S.relative[e[0].type],r=s||S.relative[" "],d=s?1:0,// The foundational matcher ensures that elements are reachable from top-level context(s)
l=m(function(e){return e===t},r,!0),p=m(function(e){return-1<ae(t,e)},r,!0),c=[function(e,n,a){var o=!s&&(a||n!==L)||((t=n).nodeType?l(e,n,a):p(e,n,a));// Avoid hanging onto element (issue #299)
return t=null,o}];d<o;d++)if(n=S.relative[e[d].type])c=[m(g(c),n)];else{// Return special upon seeing a positional matcher
if(n=S.filter[e[d].type].apply(null,e[d].matches),n[F]){for(a=++d;a<o&&!S.relative[e[a].type];a++);return b(1<d&&g(c),1<d&&h(// If the preceding token was a descendant combinator, insert an implicit any-element `*`
e.slice(0,d-1).concat({value:" "===e[d-2].type?"*":""})).replace(ie,"$1"),n,d<a&&v(e.slice(d,a)),a<o&&v(e=e.slice(a)),a<o&&h(e))}c.push(n)}return g(c)}function T(e,n){var o=0<n.length,s=0<e.length,r=function(a,r,d,l,p){var c,u,f,h=0,m="0",g=a&&[],y=[],b=L,// We must always have either seed elements or outermost context
v=a||s&&S.find.TAG("*",p),// Use integer dirruns iff this is the outermost matcher
T=z+=null==b?1:Math.random()||.1,C=v.length;// Add elements passing elementMatchers directly to results
// Support: IE<9, Safari
// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
for(p&&(L=r===O||r||p);m!==C&&null!=(c=v[m]);m++){if(s&&c){for(u=0,r||c.ownerDocument===O||(I(c),d=!_);f=e[u++];)if(f(c,r||O,d)){l.push(c);break}p&&(z=T)}// Track unmatched elements for set filters
o&&((c=!f&&c)&&h--,a&&g.push(c))}// `i` is now the count of elements visited above, and adding it to `matchedCount`
// makes the latter nonnegative.
// Apply set filters to unmatched elements
// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
// no element matchers and no seed.
// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
// case, which will result in a "00" `matchedCount` that differs from `i` but is also
// numerically zero.
if(h+=m,o&&m!==h){for(u=0;f=n[u++];)f(g,y,r,d);if(a){// Reintegrate element matches to eliminate the need for sorting
if(0<h)for(;m--;)g[m]||y[m]||(y[m]=Z.call(l));// Discard index placeholder values to get only actual matches
y=x(y)}// Add matches to results
te.apply(l,y),p&&!a&&0<y.length&&1<h+n.length&&t.uniqueSort(l)}// Override manipulation of globals by nested matchers
return p&&(z=T,L=b),g};return o?a(r):r}var C,w,S,N,E,D,A,k,L,q,H,// Local document vars
I,O,P,_,R,M,W,B,// Instance-specific data
F="sizzle"+1*new Date,U=e.document,z=0,X=0,$=n(),V=n(),Q=n(),Y=n(),G=function(e,t){return e===t&&(H=!0),0},// Instance methods
K={}.hasOwnProperty,J=[],Z=J.pop,ee=J.push,te=J.push,ne=J.slice,// Use a stripped-down indexOf as it's faster than native
// https://jsperf.com/thor-indexof-vs-for/5
ae=function(e,t){for(var n=0,a=e.length;n<a;n++)if(e[n]===t)return n;return-1},// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
oe=/[\x20\t\r\n\f]+/g,ie=/^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g,se=/^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/,re=/^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/,de=/[\x20\t\r\n\f]|>/,le=/:((?:\\.|[\w-]|[^\0-\xa0])+)(?:\((('((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)")|((?:\\.|[^\\()[\]]|\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\0-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\0-\xa0])+))|)[\x20\t\r\n\f]*\])*)|.*)\)|)/,pe=/^(?:\\.|[\w-]|[^\0-\xa0])+$/,ce={ID:/^#((?:\\.|[\w-]|[^\0-\xa0])+)/,CLASS:/^\.((?:\\.|[\w-]|[^\0-\xa0])+)/,TAG:/^((?:\\.|[\w-]|[^\0-\xa0])+|[*])/,ATTR:/^\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\0-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\0-\xa0])+))|)[\x20\t\r\n\f]*\]/,PSEUDO:/^:((?:\\.|[\w-]|[^\0-\xa0])+)(?:\((('((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)")|((?:\\.|[^\\()[\]]|\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\0-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\0-\xa0])+))|)[\x20\t\r\n\f]*\])*)|.*)\)|)/,CHILD:/^:(only|first|last|nth|nth-last)-(child|of-type)(?:\([\x20\t\r\n\f]*(even|odd|(([+-]|)(\d*)n|)[\x20\t\r\n\f]*(?:([+-]|)[\x20\t\r\n\f]*(\d+)|))[\x20\t\r\n\f]*\)|)/i,bool:/^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$/i,// For use in libraries implementing .is()
// We use this for POS matching in `select`
needsContext:/^[\x20\t\r\n\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i},ue=/HTML$/i,fe=/^(?:input|select|textarea|button)$/i,he=/^h\d$/i,me=/^[^{]+\{\s*\[native \w/,// Easily-parseable/retrievable ID or TAG or CLASS selectors
ge=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ye=/[+~]/,// CSS escapes
// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
xe=/\\([\da-f]{1,6}[\x20\t\r\n\f]?|([\x20\t\r\n\f])|.)/ig,be=function(e,t,n){var a=String.fromCharCode,o="0x"+t-65536;// NaN means non-codepoint
// Support: Firefox<24
// Workaround erroneous numeric interpretation of +"0x"
return o!=o||n?t:0>o?// BMP codepoint
a(o+65536):// Supplemental Plane codepoint (surrogate pair)
a(55296|o>>10,56320|1023&o)},// CSS string/identifier serialization
// https://drafts.csswg.org/cssom/#common-serializing-idioms
ve=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,Te=function(e,t){return t?"\0"===e?"\uFFFD":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e;// Other potentially-special ASCII characters get backslash-escaped
},// Used for iframes
// See setDocument()
// Removing the function wrapper causes a "Permission Denied"
// error in IE
Ce=function(){I()},we=m(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});// Optimize for push.apply( _, NodeList )
try{te.apply(J=ne.call(U.childNodes),U.childNodes),J[U.childNodes.length].nodeType}catch(t){te={apply:J.length?// Leverage slice if possible
function(e,t){ee.apply(e,ne.call(t))}:// Support: IE<9
// Otherwise append directly
function(e,t){// Can't trust NodeList.length
for(var n=e.length,a=0;e[n++]=t[a++];);e.length=n-1}}}// Add button/input type pseudos
for(C in w=t.support={},E=t.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;// Support: IE <=8
// Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
// https://bugs.jquery.com/ticket/4833
return!ue.test(t||n&&n.nodeName||"HTML")},I=t.setDocument=function(e){var t,n,a=e?e.ownerDocument||e:U;// Return early if doc is invalid or already selected
return a!==O&&9===a.nodeType&&a.documentElement?(O=a,P=O.documentElement,_=!E(O),U!==O&&(n=O.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",Ce,!1):n.attachEvent&&n.attachEvent("onunload",Ce)),w.attributes=o(function(e){return e.className="i",!e.getAttribute("className")}),w.getElementsByTagName=o(function(e){return e.appendChild(O.createComment("")),!e.getElementsByTagName("*").length}),w.getElementsByClassName=me.test(O.getElementsByClassName),w.getById=o(function(e){return P.appendChild(e).id=F,!O.getElementsByName||!O.getElementsByName(F).length}),w.getById?(S.filter.ID=function(e){var t=e.replace(xe,be);return function(e){return e.getAttribute("id")===t}},S.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&_){var n=t.getElementById(e);return n?[n]:[]}}):(S.filter.ID=function(e){var t=e.replace(xe,be);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},S.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&_){var n,a,o,s=t.getElementById(e);if(s){if(n=s.getAttributeNode("id"),n&&n.value===e)return[s];// Fall back on getElementsByName
for(o=t.getElementsByName(e),a=0;s=o[a++];)if(n=s.getAttributeNode("id"),n&&n.value===e)return[s]}return[]}}),S.find.TAG=w.getElementsByTagName?function(e,t){return"undefined"==typeof t.getElementsByTagName?w.qsa?t.querySelectorAll(e):void 0:t.getElementsByTagName(e)}:function(e,t){var n,a=[],o=0,// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
s=t.getElementsByTagName(e);// Filter out possible comments
if("*"===e){for(;n=s[o++];)1===n.nodeType&&a.push(n);return a}return s},S.find.CLASS=w.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&_)return t.getElementsByClassName(e)},M=[],R=[],(w.qsa=me.test(O.querySelectorAll))&&(o(function(e){P.appendChild(e).innerHTML="<a id='"+F+"'></a><select id='"+F+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&R.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"),e.querySelectorAll("[selected]").length||R.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)"),e.querySelectorAll("[id~="+F+"-]").length||R.push("~="),e.querySelectorAll(":checked").length||R.push(":checked"),e.querySelectorAll("a#"+F+"+*").length||R.push(".#.+[+~]")}),o(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";// Support: Windows 8 Native Apps
// The type and name attributes are restricted during .innerHTML assignment
var t=O.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&R.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&R.push(":enabled",":disabled"),P.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&R.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),R.push(",.*:")})),(w.matchesSelector=me.test(W=P.matches||P.webkitMatchesSelector||P.mozMatchesSelector||P.oMatchesSelector||P.msMatchesSelector))&&o(function(e){w.disconnectedMatch=W.call(e,"*"),W.call(e,"[s!='']:x"),M.push("!=",":((?:\\\\.|[\\w-]|[^\0-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\0-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\0-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)")}),R=R.length&&new RegExp(R.join("|")),M=M.length&&new RegExp(M.join("|")),t=me.test(P.compareDocumentPosition),B=t||me.test(P.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,a=t&&t.parentNode;return e===a||!!(a&&1===a.nodeType&&(n.contains?n.contains(a):e.compareDocumentPosition&&16&e.compareDocumentPosition(a)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},G=t?function(e,t){// Flag for duplicate removal
if(e===t)return H=!0,0;// Sort on method existence if only one input has compareDocumentPosition
var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n?n:(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):// Otherwise we know they are disconnected
1,1&n||!w.sortDetached&&t.compareDocumentPosition(e)===n?e===O||e.ownerDocument===U&&B(U,e)?-1:t===O||t.ownerDocument===U&&B(U,t)?1:q?ae(q,e)-ae(q,t):0:4&n?-1:1);// Calculate position if both inputs belong to the same document
}:function(e,t){// Exit early if the nodes are identical
if(e===t)return H=!0,0;var n,a=0,o=e.parentNode,s=t.parentNode,d=[e],l=[t];// Parentless nodes are either documents or disconnected
if(!o||!s)return e===O?-1:t===O?1:o?-1:s?1:q?ae(q,e)-ae(q,t):0;// If the nodes are siblings, we can do a quick check
// Otherwise we need full lists of their ancestors for comparison
if(o===s)return r(e,t);for(n=e;n=n.parentNode;)d.unshift(n);for(n=t;n=n.parentNode;)l.unshift(n);// Walk down the tree looking for a discrepancy
for(;d[a]===l[a];)a++;return a?// Do a sibling check if the nodes have a common ancestor
r(d[a],l[a]):// Otherwise nodes in our document sort first
d[a]===U?-1:l[a]===U?1:0},O):O;// Update global variables
},t.matches=function(e,n){return t(e,null,null,n)},t.matchesSelector=function(e,n){if((e.ownerDocument||e)!==O&&I(e),w.matchesSelector&&_&&!Y[n+" "]&&(!M||!M.test(n))&&(!R||!R.test(n)))try{var a=W.call(e,n);// IE 9's matchesSelector returns false on disconnected nodes
if(a||w.disconnectedMatch||// As well, disconnected nodes are said to be in a document
// fragment in IE 9
e.document&&11!==e.document.nodeType)return a}catch(t){Y(n,!0)}return 0<t(n,O,null,[e]).length},t.contains=function(e,t){return(e.ownerDocument||e)!==O&&I(e),B(e,t)},t.attr=function(e,t){(e.ownerDocument||e)!==O&&I(e);var n=S.attrHandle[t.toLowerCase()],// Don't get fooled by Object.prototype properties (jQuery #13807)
a=n&&K.call(S.attrHandle,t.toLowerCase())?n(e,t,!_):void 0;return void 0===a?w.attributes||!_?e.getAttribute(t):(a=e.getAttributeNode(t))&&a.specified?a.value:null:a},t.escape=function(e){return(e+"").replace(ve,Te)},t.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},t.uniqueSort=function(e){var t,n=[],a=0,o=0;// Unless we *know* we can detect duplicates, assume their presence
if(H=!w.detectDuplicates,q=!w.sortStable&&e.slice(0),e.sort(G),H){for(;t=e[o++];)t===e[o]&&(a=n.push(o));for(;a--;)e.splice(n[a],1)}// Clear input after sorting to release objects
// See https://github.com/jquery/sizzle/pull/225
return q=null,e},N=t.getText=function(e){var t,n="",a=0,o=e.nodeType;if(!o)// If no nodeType, this is expected to be an array
for(;t=e[a++];)// Do not traverse comment nodes
n+=N(t);else if(1===o||9===o||11===o){// Use textContent for elements
// innerText usage removed for consistency of new lines (jQuery #11153)
if("string"==typeof e.textContent)return e.textContent;// Traverse its children
for(e=e.firstChild;e;e=e.nextSibling)n+=N(e)}else if(3===o||4===o)return e.nodeValue;// Do not include comment or processing instruction nodes
return n},S=t.selectors={// Can be adjusted by the user
cacheLength:50,createPseudo:a,match:ce,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(xe,be),e[3]=(e[3]||e[4]||e[5]||"").replace(xe,be),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(!e[3]&&t.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&t.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return ce.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&le.test(n)&&(// Get excess from tokenize (recursively)
t=D(n,!0))&&(// advance to the next closing parenthesis
t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3));// Accept quoted arguments as-is
}},filter:{TAG:function(e){var t=e.replace(xe,be).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=$[e+" "];return t||(t=new RegExp("(^|[\\x20\\t\\r\\n\\f])"+e+"([\\x20\\t\\r\\n\\f]|$)"))&&$(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,n,a){return function(o){var i=t.attr(o,e);return null==i?"!="===n:!n||(i+="","="===n?i===a:"!="===n?i!==a:"^="===n?a&&0===i.indexOf(a):"*="===n?a&&-1<i.indexOf(a):"$="===n?a&&i.slice(-a.length)===a:"~="===n?-1<(" "+i.replace(oe," ")+" ").indexOf(a):"|="==n&&(i===a||i.slice(0,a.length+1)===a+"-"))}},CHILD:function(e,t,n,a,o){var i="nth"!==e.slice(0,3),s="last"!==e.slice(-4),r="of-type"===t;return 1===a&&0===o?// Shortcut for :nth-*(n)
function(e){return!!e.parentNode}:function(t,n,d){var l,p,c,u,f,h,m=i===s?"previousSibling":"nextSibling",g=t.parentNode,y=r&&t.nodeName.toLowerCase(),x=!d&&!r,b=!1;if(g){// :(first|last|only)-(child|of-type)
if(i){for(;m;){for(u=t;u=u[m];)if(r?u.nodeName.toLowerCase()===y:1===u.nodeType)return!1;// Reverse direction for :only-* (if we haven't yet done so)
h=m="only"===e&&!h&&"nextSibling"}return!0}// non-xml :nth-child(...) stores cache data on `parent`
if(h=[s?g.firstChild:g.lastChild],s&&x){for(u=g,c=u[F]||(u[F]={}),p=c[u.uniqueID]||(c[u.uniqueID]={}),l=p[e]||[],f=l[0]===z&&l[1],b=f&&l[2],u=f&&g.childNodes[f];u=++f&&u&&u[m]||(// Fallback to seeking `elem` from the start
b=f=0)||h.pop();)// When found, cache indexes on `parent` and break
if(1===u.nodeType&&++b&&u===t){p[e]=[z,f,b];break}}else// xml :nth-child(...)
// or :nth-last-child(...) or :nth(-last)?-of-type(...)
if(x&&(u=t,c=u[F]||(u[F]={}),p=c[u.uniqueID]||(c[u.uniqueID]={}),l=p[e]||[],f=l[0]===z&&l[1],b=f),!1===b)// Use the same loop as above to seek `elem` from the start
for(;(u=++f&&u&&u[m]||(b=f=0)||h.pop())&&!((r?u.nodeName.toLowerCase()===y:1===u.nodeType)&&++b&&(x&&(c=u[F]||(u[F]={}),p=c[u.uniqueID]||(c[u.uniqueID]={}),p[e]=[z,b]),u===t)););// Incorporate the offset, then check against cycle size
return b-=o,b===a||0==b%a&&0<=b/a}}},PSEUDO:function(e,n){// pseudo-class names are case-insensitive
// http://www.w3.org/TR/selectors/#pseudo-classes
// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
// Remember that setFilters inherits from pseudos
var o,s=S.pseudos[e]||S.setFilters[e.toLowerCase()]||t.error("unsupported pseudo: "+e);// The user may use createPseudo to indicate that
// arguments are needed to create the filter function
// just as Sizzle does
return s[F]?s(n):1<s.length?(o=[e,e,"",n],S.setFilters.hasOwnProperty(e.toLowerCase())?a(function(e,t){for(var a,o=s(e,n),r=o.length;r--;)a=ae(e,o[r]),e[a]=!(t[a]=o[r])}):function(e){return s(e,0,o)}):s;// But maintain support for old signatures
}},pseudos:{// Potentially complex pseudos
not:a(function(e){// Trim the selector passed to compile
// to avoid treating leading and trailing
// spaces as combinators
var t=[],n=[],o=A(e.replace(ie,"$1"));return o[F]?a(function(e,t,n,a){// Match elements unmatched by `matcher`
for(var s,r=o(e,null,a,[]),d=e.length;d--;)(s=r[d])&&(e[d]=!(t[d]=s))}):function(e,a,i){return t[0]=e,o(t,null,i,n),t[0]=null,!n.pop()}}),has:a(function(e){return function(n){return 0<t(e,n).length}}),contains:a(function(e){return e=e.replace(xe,be),function(t){return-1<(t.textContent||N(t)).indexOf(e)}}),// "Whether an element is represented by a :lang() selector
// is based solely on the element's language value
// being equal to the identifier C,
// or beginning with the identifier C immediately followed by "-".
// The matching of C against the element's language value is performed case-insensitively.
// The identifier C does not have to be a valid language name."
// http://www.w3.org/TR/selectors/#lang-pseudo
lang:a(function(e){return pe.test(e||"")||t.error("unsupported lang: "+e),e=e.replace(xe,be).toLowerCase(),function(t){var n;do if(n=_?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),// Miscellaneous
target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===P},focus:function(e){return e===O.activeElement&&(!O.hasFocus||O.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},// Boolean properties
enabled:p(!1),disabled:p(!0),checked:function(e){// In CSS3, :checked should return both checked and selected elements
// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},// Contents
empty:function(e){// http://www.w3.org/TR/selectors/#empty-pseudo
// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
//   but not by others (comment: 8; processing instruction: 7; etc.)
// nodeType < 6 works because attributes (2) do not appear as children
for(e=e.firstChild;e;e=e.nextSibling)if(6>e.nodeType)return!1;return!0},parent:function(e){return!S.pseudos.empty(e)},// Element/input types
header:function(e){return he.test(e.nodeName)},input:function(e){return fe.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(// Support: IE<8
// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},// Position-in-collection
first:c(function(){return[0]}),last:c(function(e,t){return[t-1]}),eq:c(function(e,t,n){return[0>n?n+t:n]}),even:c(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:c(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:c(function(e,t,n){for(var a=0>n?n+t:n>t?t:n;0<=--a;)e.push(a);return e}),gt:c(function(e,t,n){for(var a=0>n?n+t:n;++a<t;)e.push(a);return e})}},S.pseudos.nth=S.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})S.pseudos[C]=d(C);for(C in{submit:!0,reset:!0})S.pseudos[C]=l(C);return f.prototype=S.filters=S.pseudos,S.setFilters=new f,D=t.tokenize=function(e,n){var a,o,i,s,r,d,l,p=V[e+" "];if(p)return n?0:p.slice(0);for(r=e,d=[],l=S.preFilter;r;){// Filters
for(s in(!a||(o=se.exec(r)))&&(o&&(r=r.slice(o[0].length)||r),d.push(i=[])),a=!1,(o=re.exec(r))&&(a=o.shift(),i.push({value:a,// Cast descendant combinators to space
type:o[0].replace(ie," ")}),r=r.slice(a.length)),S.filter)(o=ce[s].exec(r))&&(!l[s]||(o=l[s](o)))&&(a=o.shift(),i.push({value:a,type:s,matches:o}),r=r.slice(a.length));if(!a)break}// Return the length of the invalid excess
// if we're just parsing
// Otherwise, throw an error or return tokens
return n?r.length:r?t.error(e):// Cache the tokens
V(e,d).slice(0)},A=t.compile=function(e,t/* Internal Use Only */){var n,a=[],o=[],s=Q[e+" "];if(!s){for(t||(t=D(e)),n=t.length;n--;)s=v(t[n]),s[F]?a.push(s):o.push(s);// Cache the compiled function
s=Q(e,T(o,a)),s.selector=e}return s},k=t.select=function(e,t,n,a){var o,s,r,d,l,p="function"==typeof e&&e,c=!a&&D(e=p.selector||e);// Try to minimize operations if there is only one selector in the list and no seed
// (the latter of which guarantees us context)
if(n=n||[],1===c.length){if(s=c[0]=c[0].slice(0),2<s.length&&"ID"===(r=s[0]).type&&9===t.nodeType&&_&&S.relative[s[1].type]){if(t=(S.find.ID(r.matches[0].replace(xe,be),t)||[])[0],!t)return n;// Precompiled matchers will still verify ancestry, so step up a level
p&&(t=t.parentNode),e=e.slice(s.shift().value.length)}// Fetch a seed set for right-to-left matching
for(o=ce.needsContext.test(e)?0:s.length;o--&&(r=s[o],!S.relative[d=r.type]);)if((l=S.find[d])&&(a=l(r.matches[0].replace(xe,be),ye.test(s[0].type)&&u(t.parentNode)||t)))// Search, expanding context for leading sibling combinators
{if(s.splice(o,1),e=a.length&&h(s),!e)return te.apply(n,a),n;break}}// Compile and execute a filtering function if one is not provided
// Provide `match` to avoid retokenization if we modified the selector above
return(p||A(e,c))(a,t,!_,n,!t||ye.test(e)&&u(t.parentNode)||t),n},w.sortStable=F.split("").sort(G).join("")===F,w.detectDuplicates=!!H,I(),w.sortDetached=o(function(e){// Should return 1, but returns 4 (following)
return 1&e.compareDocumentPosition(O.createElement("fieldset"))}),o(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||s("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),w.attributes&&o(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||s("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),o(function(e){return null==e.getAttribute("disabled")})||s("checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",function(e,t,n){var a;if(!n)return!0===e[t]?t.toLowerCase():(a=e.getAttributeNode(t))&&a.specified?a.value:null}),t}(e);Ee.find=Ae,Ee.expr=Ae.selectors,Ee.expr[":"]=Ee.expr.pseudos,Ee.uniqueSort=Ee.unique=Ae.uniqueSort,Ee.text=Ae.getText,Ee.isXMLDoc=Ae.isXML,Ee.contains=Ae.contains,Ee.escapeSelector=Ae.escape;var ke=function(e,t,n){for(var a=[];(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(void 0!==n&&Ee(e).is(n))break;a.push(e)}return a},je=function(e,t){for(var a=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&a.push(e);return a},Le=Ee.expr.match.needsContext,qe=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;Ee.filter=function(e,t,n){var a=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===a.nodeType?Ee.find.matchesSelector(a,e)?[a]:[]:Ee.find.matches(e,Ee.grep(t,function(e){return 1===e.nodeType}))},Ee.fn.extend({find:function(e){var t,n,a=this.length,o=this;if("string"!=typeof e)return this.pushStack(Ee(e).filter(function(){for(t=0;t<a;t++)if(Ee.contains(o[t],this))return!0}));for(n=this.pushStack([]),t=0;t<a;t++)Ee.find(e,o[t],n);return 1<a?Ee.uniqueSort(n):n},filter:function(e){return this.pushStack(r(this,e||[],!1))},not:function(e){return this.pushStack(r(this,e||[],!0))},is:function(e){return!!r(this,// If this is a positional/relative selector, check membership in the returned set
// so $("p:first").is("p:last") won't return true for a doc with two "p".
"string"==typeof e&&Le.test(e)?Ee(e):e||[],!1).length}});// Initialize a jQuery object
// A central reference to the root jQuery(document)
var He,// A simple way to check for HTML strings
// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
// Strict HTML recognition (#11290: must start with <)
// Shortcut simple #id case for speed
Ie=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,Oe=Ee.fn.init=function(e,t,n){var a,o;// HANDLE: $(""), $(null), $(undefined), $(false)
if(!e)return this;// Method init() accepts an alternate rootjQuery
// so migrate can support jQuery.sub (gh-2101)
// Handle HTML strings
if(n=n||He,"string"==typeof e){// Match html or make sure no context is specified for #id
if(a="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:Ie.exec(e),a&&(a[1]||!t)){// HANDLE: $(html) -> $(array)
if(a[1]){// HANDLE: $(html, props)
if(t=t instanceof Ee?t[0]:t,Ee.merge(this,Ee.parseHTML(a[1],t&&t.nodeType?t.ownerDocument||t:pe,!0)),qe.test(a[1])&&Ee.isPlainObject(t))for(a in t)// Properties of context are called as methods if possible
Ce(this[a])?this[a](t[a]):this.attr(a,t[a]);return this;// HANDLE: $(#id)
}// HANDLE: $(expr, $(...))
return o=pe.getElementById(a[2]),o&&(this[0]=o,this.length=1),this}// HANDLE: $(DOMElement)
return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e)}return e.nodeType?(this[0]=e,this.length=1,this):Ce(e)?void 0===n.ready?// Execute immediately if ready is not present
e(Ee):n.ready(e):Ee.makeArray(e,this)};// Give the init function the jQuery prototype for later instantiation
Oe.prototype=Ee.fn,He=Ee(pe);var Pe=/^(?:parents|prev(?:Until|All))/,// Methods guaranteed to produce a unique set when starting from a unique set
_e={children:!0,contents:!0,next:!0,prev:!0};Ee.fn.extend({has:function(e){var t=Ee(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(Ee.contains(this,t[e]))return!0})},closest:function(e,t){var n,a=0,o=this.length,s=[],r="string"!=typeof e&&Ee(e);// Positional selectors never match, since there's no _selection_ context
if(!Le.test(e))for(;a<o;a++)for(n=this[a];n&&n!==t;n=n.parentNode)// Always skip document fragments
if(11>n.nodeType&&(r?-1<r.index(n):// Don't pass non-elements to Sizzle
1===n.nodeType&&Ee.find.matchesSelector(n,e))){s.push(n);break}return this.pushStack(1<s.length?Ee.uniqueSort(s):s)},// Determine the position of an element within the set
index:function(e){// No argument, return index in parent
return e?"string"==typeof e?me.call(Ee(e),this[0]):me.call(this,// If it receives a jQuery object, the first element is used
e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1;// Index in selector
// Locate the position of the desired element
},add:function(e,t){return this.pushStack(Ee.uniqueSort(Ee.merge(this.get(),Ee(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),Ee.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return ke(e,"parentNode")},parentsUntil:function(e,t,n){return ke(e,"parentNode",n)},next:function(e){return d(e,"nextSibling")},prev:function(e){return d(e,"previousSibling")},nextAll:function(e){return ke(e,"nextSibling")},prevAll:function(e){return ke(e,"previousSibling")},nextUntil:function(e,t,n){return ke(e,"nextSibling",n)},prevUntil:function(e,t,n){return ke(e,"previousSibling",n)},siblings:function(e){return je((e.parentNode||{}).firstChild,e)},children:function(e){return je(e.firstChild)},contents:function(e){return"undefined"==typeof e.contentDocument?(s(e,"template")&&(e=e.content||e),Ee.merge([],e.childNodes)):e.contentDocument;// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
// Treat the template element as a regular one in browsers that
// don't support it.
}},function(e,t){Ee.fn[e]=function(n,a){var o=Ee.map(this,t,n);return"Until"!==e.slice(-5)&&(a=n),a&&"string"==typeof a&&(o=Ee.filter(a,o)),1<this.length&&(!_e[e]&&Ee.uniqueSort(o),Pe.test(e)&&o.reverse()),this.pushStack(o)}});var Re=/[^\x20\t\r\n\f]+/g;Ee.Callbacks=function(e){e="string"==typeof e?l(e):Ee.extend({},e);var// Flag to know if list is currently firing
t,// Last fire value for non-forgettable lists
n,// Flag to know if list was already fired
o,// Flag to prevent firing
i,// Actual callback list
s=[],// Queue of execution data for repeatable lists
r=[],// Index of currently firing callback (modified by add/remove as needed)
d=-1,// Fire callbacks
p=function(){for(i=i||e.once,o=t=!0;r.length;d=-1)for(n=r.shift();++d<s.length;)// Run callback and check for early termination
!1===s[d].apply(n[0],n[1])&&e.stopOnFalse&&(// Jump to end and forget the data so .add doesn't re-fire
d=s.length,n=!1);// Forget the data if we're done with it
e.memory||(n=!1),t=!1,i&&(n?s=[]:s="")},// Actual Callbacks object
c={// Add a callback or a collection of callbacks to the list
add:function(){return s&&(n&&!t&&(d=s.length-1,r.push(n)),function t(n){Ee.each(n,function(n,o){Ce(o)?(!e.unique||!c.has(o))&&s.push(o):o&&o.length&&"string"!==a(o)&&t(o)})}(arguments),n&&!t&&p()),this},// Remove a callback from the list
remove:function(){return Ee.each(arguments,function(e,t){for(var n;-1<(n=Ee.inArray(t,s,n));)s.splice(n,1),n<=d&&d--}),this},// Check if a given callback is in the list.
// If no argument is given, return whether or not list has callbacks attached.
has:function(e){return e?-1<Ee.inArray(e,s):0<s.length},// Remove all callbacks from the list
empty:function(){return s&&(s=[]),this},// Disable .fire and .add
// Abort any current/pending executions
// Clear all callbacks and values
disable:function(){return i=r=[],s=n="",this},disabled:function(){return!s},// Disable .fire
// Also disable .add unless we have memory (since it would have no effect)
// Abort any pending executions
lock:function(){return i=r=[],n||t||(s=n=""),this},locked:function(){return!!i},// Call all callbacks with the given context and arguments
fireWith:function(e,n){return i||(n=n||[],n=[e,n.slice?n.slice():n],r.push(n),!t&&p()),this},// Call all the callbacks with the given arguments
fire:function(){return c.fireWith(this,arguments),this},// To know if the callbacks have already been called at least once
fired:function(){return!!o}};return c},Ee.extend({Deferred:function(t){var n=[// action, add listener, callbacks,
// ... .then handlers, argument index, [final state]
["notify","progress",Ee.Callbacks("memory"),Ee.Callbacks("memory"),2],["resolve","done",Ee.Callbacks("once memory"),Ee.Callbacks("once memory"),0,"resolved"],["reject","fail",Ee.Callbacks("once memory"),Ee.Callbacks("once memory"),1,"rejected"]],a="pending",o={state:function(){return a},always:function(){return s.done(arguments).fail(arguments),this},catch:function(e){return o.then(null,e)},// Keep pipe for back-compat
pipe:function()/* fnDone, fnFail, fnProgress */{var e=arguments;return Ee.Deferred(function(t){Ee.each(n,function(n,a){// Map tuples (progress, done, fail) to arguments (done, fail, progress)
var o=Ce(e[a[4]])&&e[a[4]];// deferred.progress(function() { bind to newDefer or newDefer.notify })
// deferred.done(function() { bind to newDefer or newDefer.resolve })
// deferred.fail(function() { bind to newDefer or newDefer.reject })
s[a[1]](function(){var e=o&&o.apply(this,arguments);e&&Ce(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[a[0]+"With"](this,o?[e]:arguments)})}),e=null}).promise()},then:function(t,a,o){function i(t,n,a,o){return function(){var r=this,d=arguments,l=function(){var e,l;// Support: Promises/A+ section 2.3.3.3.3
// https://promisesaplus.com/#point-59
// Ignore double-resolution attempts
if(!(t<s)){// Support: Promises/A+ section 2.3.1
// https://promisesaplus.com/#point-48
if(e=a.apply(r,d),e===n.promise())throw new TypeError("Thenable self-resolution");// Support: Promises/A+ sections 2.3.3.1, 3.5
// https://promisesaplus.com/#point-54
// https://promisesaplus.com/#point-75
// Retrieve `then` only once
l=e&&(// Support: Promises/A+ section 2.3.4
// https://promisesaplus.com/#point-64
// Only check objects and functions for thenability
"object"==typeof e||"function"==typeof e)&&e.then,Ce(l)?o?l.call(e,i(s,n,p,o),i(s,n,c,o)):(s++,l.call(e,i(s,n,p,o),i(s,n,c,o),i(s,n,p,n.notifyWith))):(a!==p&&(r=void 0,d=[e]),(o||n.resolveWith)(r,d))}},// Only normal processors (resolve) catch and reject exceptions
u=o?l:function(){try{l()}catch(o){Ee.Deferred.exceptionHook&&Ee.Deferred.exceptionHook(o,u.stackTrace),t+1>=s&&(a!==c&&(r=void 0,d=[o]),n.rejectWith(r,d))}};// Support: Promises/A+ section 2.3.3.3.1
// https://promisesaplus.com/#point-57
// Re-resolve promises immediately to dodge false rejection from
// subsequent errors
t?u():(Ee.Deferred.getStackHook&&(u.stackTrace=Ee.Deferred.getStackHook()),e.setTimeout(u))}}var s=0;return Ee.Deferred(function(e){n[0][3].add(i(0,e,Ce(o)?o:p,e.notifyWith)),n[1][3].add(i(0,e,Ce(t)?t:p)),n[2][3].add(i(0,e,Ce(a)?a:c))}).promise()},// Get a promise for this deferred
// If obj is provided, the promise aspect is added to the object
promise:function(e){return null==e?o:Ee.extend(e,o)}},s={};// Add list-specific methods
// All done!
return Ee.each(n,function(e,t){var i=t[2],r=t[5];// promise.progress = list.add
// promise.done = list.add
// promise.fail = list.add
o[t[1]]=i.add,r&&i.add(function(){a=r},// rejected_callbacks.disable
// fulfilled_callbacks.disable
n[3-e][2].disable,// rejected_handlers.disable
// fulfilled_handlers.disable
n[3-e][3].disable,// progress_callbacks.lock
n[0][2].lock,// progress_handlers.lock
n[0][3].lock),i.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=i.fireWith}),o.promise(s),t&&t.call(s,s),s},// Deferred helper
when:function(e){var// count of uncompleted subordinates
t=arguments.length,// count of unprocessed arguments
n=t,// subordinate fulfillment data
a=Array(n),o=ue.call(arguments),// the master Deferred
s=Ee.Deferred(),// subordinate callback factory
r=function(e){return function(n){a[e]=this,o[e]=1<arguments.length?ue.call(arguments):n,--t||s.resolveWith(a,o)}};// Single- and empty arguments are adopted like Promise.resolve
if(1>=t&&(u(e,s.done(r(n)).resolve,s.reject,!t),"pending"===s.state()||Ce(o[n]&&o[n].then)))// Use .then() to unwrap secondary thenables (cf. gh-3000)
return s.then();// Multiple arguments are aggregated like Promise.all array elements
for(;n--;)u(o[n],r(n),s.reject);return s.promise()}});// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var Me=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;Ee.Deferred.exceptionHook=function(t,n){e.console&&e.console.warn&&t&&Me.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},Ee.readyException=function(t){e.setTimeout(function(){throw t})};// The deferred used on DOM ready
var We=Ee.Deferred();Ee.fn.ready=function(e){return We.then(e)// Wrap jQuery.readyException in a function so that the lookup
// happens at the time of error handling instead of callback
// registration.
.catch(function(e){Ee.readyException(e)}),this},Ee.extend({// Is the DOM ready to be used? Set to true once it occurs.
isReady:!1,// A counter to track how many items to wait for before
// the ready event fires. See #6781
readyWait:1,// Handle when the DOM is ready
ready:function(e){// Abort if there are pending holds or we're already ready
(!0===e?! --Ee.readyWait:!Ee.isReady)&&(// If a normal DOM Ready event fired, decrement, and wait if need be
Ee.isReady=!0,!0!==e&&0<--Ee.readyWait||// If there are functions bound, to execute
We.resolveWith(pe,[Ee]))}}),Ee.ready.then=We.then,"complete"!==pe.readyState&&("loading"===pe.readyState||pe.documentElement.doScroll)?(pe.addEventListener("DOMContentLoaded",f),e.addEventListener("load",f)):e.setTimeout(Ee.ready);// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var Be=function(e,t,n,o,s,r,d){var l=0,p=e.length,c=null==n;// Sets many values
if("object"===a(n))for(l in s=!0,n)Be(e,t,l,n[l],!0,r,d);// Sets one value
else if(void 0!==o&&(s=!0,Ce(o)||(d=!0),c&&(d?(t.call(e,o),t=null):(c=t,t=function(e,t,n){return c.call(Ee(e),n)})),t))for(;l<p;l++)t(e[l],n,d?o:o.call(e[l],l,t(e[l],n)));return s?e:c?t.call(e):p?t(e[0],n):r;// Gets
},Fe=/^-ms-/,Ue=/-([a-z])/g,ze=function(e){// Accepts only:
//  - Node
//    - Node.ELEMENT_NODE
//    - Node.DOCUMENT_NODE
//  - Object
//    - Any
return 1===e.nodeType||9===e.nodeType||!+e.nodeType};// Matches dashed string for camelizing
g.uid=1,g.prototype={cache:function(e){// Check if the owner object already has a cache
var t=e[this.expando];// If not, create one
return t||(t={},ze(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var a,o=this.cache(e);// Handle: [ owner, key, value ] args
// Always use camelCase key (gh-2257)
if("string"==typeof t)o[m(t)]=n;else// Copy the properties one-by-one to the cache object
for(a in t)o[m(a)]=t[a];return o},get:function(e,t){return void 0===t?this.cache(e):// Always use camelCase key (gh-2257)
e[this.expando]&&e[this.expando][m(t)]},access:function(e,t,n){// In cases where either:
//
//   1. No key was specified
//   2. A string key was specified, but no value provided
//
// Take the "read" path and allow the get method to determine
// which value to return, respectively either:
//
//   1. The entire cache object
//   2. The data stored at the key
//
return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0===n?t:n);// When the key is not a string, or both a key and value
// are specified, set or extend (existing objects) with either:
//
//   1. An object of properties
//   2. A key and value
//
},remove:function(e,t){var n,a=e[this.expando];if(void 0!==a){if(void 0!==t)for(Array.isArray(t)?t=t.map(m):(t=m(t),t=(t in a)?[t]:t.match(Re)||[]),n=t.length;n--;)delete a[t[n]];// Remove the expando if there's no more data
(void 0===t||Ee.isEmptyObject(a))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!Ee.isEmptyObject(t)}};var Xe=new g,$e=new g,Ve=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Qe=/[A-Z]/g;Ee.extend({hasData:function(e){return $e.hasData(e)||Xe.hasData(e)},data:function(e,t,n){return $e.access(e,t,n)},removeData:function(e,t){$e.remove(e,t)},// TODO: Now that all calls to _data and _removeData have been replaced
// with direct calls to dataPriv methods, these can be deprecated.
_data:function(e,t,n){return Xe.access(e,t,n)},_removeData:function(e,t){Xe.remove(e,t)}}),Ee.fn.extend({data:function(e,t){var n,a,o,s=this[0],r=s&&s.attributes;// Gets all values
if(void 0===e){if(this.length&&(o=$e.get(s),1===s.nodeType&&!Xe.get(s,"hasDataAttrs"))){for(n=r.length;n--;)// Support: IE 11 only
// The attrs elements can be null (#14894)
r[n]&&(a=r[n].name,0===a.indexOf("data-")&&(a=m(a.slice(5)),x(s,a,o[a])));Xe.set(s,"hasDataAttrs",!0)}return o}// Sets multiple values
return"object"==typeof e?this.each(function(){$e.set(this,e)}):Be(this,function(t){var n;// The calling jQuery object (element matches) is not empty
// (and therefore has an element appears at this[ 0 ]) and the
// `value` parameter was not undefined. An empty jQuery object
// will result in `undefined` for elem = this[ 0 ] which will
// throw an exception if an attempt to read a data cache is made.
return s&&void 0===t?(n=$e.get(s,e),void 0!==n)?n:(n=x(s,e),void 0===n?void 0:n):void// Set the data...
this.each(function(){$e.set(this,e,t)})},null,t,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){$e.remove(this,e)})}}),Ee.extend({queue:function(e,t,n){var a;if(e)return t=(t||"fx")+"queue",a=Xe.get(e,t),n&&(!a||Array.isArray(n)?a=Xe.access(e,t,Ee.makeArray(n)):a.push(n)),a||[]},dequeue:function(e,t){t=t||"fx";var n=Ee.queue(e,t),a=n.length,o=n.shift(),i=Ee._queueHooks(e,t),s=function(){Ee.dequeue(e,t)};// If the fx queue is dequeued, always remove the progress sentinel
"inprogress"===o&&(o=n.shift(),a--),o&&("fx"===t&&n.unshift("inprogress"),delete i.stop,o.call(e,s,i)),!a&&i&&i.empty.fire()},// Not public - generate a queueHooks object, or return the current one
_queueHooks:function(e,t){var n=t+"queueHooks";return Xe.get(e,n)||Xe.access(e,n,{empty:Ee.Callbacks("once memory").add(function(){Xe.remove(e,[t+"queue",n])})})}}),Ee.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?Ee.queue(this[0],e):void 0===t?this:this.each(function(){var n=Ee.queue(this,e,t);// Ensure a hooks for this queue
Ee._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&Ee.dequeue(this,e)})},dequeue:function(e){return this.each(function(){Ee.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},// Get a promise resolved when queues of a certain type
// are emptied (fx is the type by default)
promise:function(e,t){var n,a=1,o=Ee.Deferred(),s=this,r=this.length,d=function(){--a||o.resolveWith(s,[s])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";r--;)n=Xe.get(s[r],e+"queueHooks"),n&&n.empty&&(a++,n.empty.add(d));return d(),o.promise(t)}});var Ye=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Ge=new RegExp("^(?:([+-])=|)("+Ye+")([a-z%]*)$","i"),Ke=["Top","Right","Bottom","Left"],Je=pe.documentElement,Ze=function(e){return Ee.contains(e.ownerDocument,e)},et={composed:!0};Je.getRootNode&&(Ze=function(e){return Ee.contains(e.ownerDocument,e)||e.getRootNode(et)===e.ownerDocument});var tt=function(e,t){// Inline style trumps all
return e=t||e,"none"===e.style.display||""===e.style.display&&// Otherwise, check computed style
// Support: Firefox <=43 - 45
// Disconnected elements can have computed display: none, so first confirm that elem is
// in the document.
Ze(e)&&"none"===Ee.css(e,"display")},nt=function(e,t,n,a){var o,i,s={};// Remember the old values, and insert the new ones
for(i in t)s[i]=e.style[i],e.style[i]=t[i];// Revert the old values
for(i in o=n.apply(e,a||[]),t)e.style[i]=s[i];return o},at={};Ee.fn.extend({show:function(){return T(this,!0)},hide:function(){return T(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){tt(this)?Ee(this).show():Ee(this).hide()})}});var ot=/^(?:checkbox|radio)$/i,it=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,st=/^$|^module$|\/(?:java|ecma)script/i,rt={// Support: IE <=9 only
option:[1,"<select multiple='multiple'>","</select>"],// XHTML parsers do not magically insert elements in the
// same way that tag soup parsers do. So we cannot shorten
// this by omitting <tbody> or other required elements.
thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};rt.optgroup=rt.option,rt.tbody=rt.tfoot=rt.colgroup=rt.caption=rt.thead,rt.th=rt.td;var dt=/<|&#?\w+;/;(function(){var e=pe.createDocumentFragment(),t=e.appendChild(pe.createElement("div")),n=pe.createElement("input");// Support: Android 4.0 - 4.3 only
// Check state lost if the name is set (#11217)
// Support: Windows Web Apps (WWA)
// `name` and `type` must use .setAttribute for WWA (#14901)
n.setAttribute("type","radio"),n.setAttribute("checked","checked"),n.setAttribute("name","t"),t.appendChild(n),Te.checkClone=t.cloneNode(!0).cloneNode(!0).lastChild.checked,t.innerHTML="<textarea>x</textarea>",Te.noCloneChecked=!!t.cloneNode(!0).lastChild.defaultValue})();var lt=/^key/,pt=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ct=/^([^.]*)(?:\.(.+)|)/;Ee.event={global:{},add:function(n,a,o,i,s){var r,d,l,p,c,e,u,f,h,m,g,y=Xe.get(n);// Don't attach events to noData or text/comment nodes (but allow plain objects)
if(y)for(o.handler&&(r=o,o=r.handler,s=r.selector),s&&Ee.find.matchesSelector(Je,s),o.guid||(o.guid=Ee.guid++),(p=y.events)||(p=y.events={}),(d=y.handle)||(d=y.handle=function(t){// Discard the second event of a jQuery.event.trigger() and
// when an event is called after a page has unloaded
return"undefined"!=typeof Ee&&Ee.event.triggered!==t.type?Ee.event.dispatch.apply(n,arguments):void 0}),a=(a||"").match(Re)||[""],c=a.length;c--;)// There *must* be a type, no attaching namespace-only handlers
(l=ct.exec(a[c])||[],h=g=l[1],m=(l[2]||"").split(".").sort(),!!h)&&(u=Ee.event.special[h]||{},h=(s?u.delegateType:u.bindType)||h,u=Ee.event.special[h]||{},e=Ee.extend({type:h,origType:g,data:i,handler:o,guid:o.guid,selector:s,needsContext:s&&Ee.expr.match.needsContext.test(s),namespace:m.join(".")},r),(f=p[h])||(f=p[h]=[],f.delegateCount=0,(!u.setup||!1===u.setup.call(n,i,m,d))&&n.addEventListener&&n.addEventListener(h,d)),u.add&&(u.add.call(n,e),!e.handler.guid&&(e.handler.guid=o.guid)),s?f.splice(f.delegateCount++,0,e):f.push(e),Ee.event.global[h]=!0);// If event changes its type, use the special event handlers for the changed type
// Caller can pass in an object of custom data in lieu of the handler
},// Detach an event or set of events from an element
remove:function(e,n,a,o,i){var s,r,d,l,p,c,u,f,h,m,g,y=Xe.hasData(e)&&Xe.get(e);if(y&&(l=y.events)){for(n=(n||"").match(Re)||[""],p=n.length;p--;){// Unbind all events (on this namespace, if provided) for the element
if(d=ct.exec(n[p])||[],h=g=d[1],m=(d[2]||"").split(".").sort(),!h){for(h in l)Ee.event.remove(e,h+n[p],a,o,!0);continue}for(u=Ee.event.special[h]||{},h=(o?u.delegateType:u.bindType)||h,f=l[h]||[],d=d[2]&&new RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"),r=s=f.length;s--;)c=f[s],(i||g===c.origType)&&(!a||a.guid===c.guid)&&(!d||d.test(c.namespace))&&(!o||o===c.selector||"**"===o&&c.selector)&&(f.splice(s,1),c.selector&&f.delegateCount--,u.remove&&u.remove.call(e,c));// Remove generic event handler if we removed something and no more handlers exist
// (avoids potential for endless recursion during removal of special event handlers)
r&&!f.length&&((!u.teardown||!1===u.teardown.call(e,m,y.handle))&&Ee.removeEvent(e,h,y.handle),delete l[h])}// Remove data and the expando if it's no longer used
Ee.isEmptyObject(l)&&Xe.remove(e,"handle events")}// Once for each type.namespace in types; type may be omitted
},dispatch:function(e){// Make a writable jQuery.Event from the native event object
var t,n,a,o,s,r,d=Ee.event.fix(e),l=Array(arguments.length),p=(Xe.get(this,"events")||{})[d.type]||[],c=Ee.event.special[d.type]||{};for(l[0]=d,t=1;t<arguments.length;t++)l[t]=arguments[t];// Call the preDispatch hook for the mapped type, and let it bail if desired
if(d.delegateTarget=this,!(c.preDispatch&&!1===c.preDispatch.call(this,d))){for(r=Ee.event.handlers.call(this,d,p),t=0;(o=r[t++])&&!d.isPropagationStopped();)for(d.currentTarget=o.elem,n=0;(s=o.handlers[n++])&&!d.isImmediatePropagationStopped();)// If the event is namespaced, then each handler is only invoked if it is
// specially universal or its namespaces are a superset of the event's.
(!d.rnamespace||!1===s.namespace||d.rnamespace.test(s.namespace))&&(d.handleObj=s,d.data=s.data,a=((Ee.event.special[s.origType]||{}).handle||s.handler).apply(o.elem,l),void 0!==a&&!1===(d.result=a)&&(d.preventDefault(),d.stopPropagation()));// Call the postDispatch hook for the mapped type
return c.postDispatch&&c.postDispatch.call(this,d),d.result}// Determine handlers
},handlers:function(e,t){var n,a,o,s,r,d=[],l=t.delegateCount,p=e.target;// Find delegate handlers
if(l&&// Support: IE <=9
// Black-hole SVG <use> instance trees (trac-13180)
p.nodeType&&// Support: Firefox <=42
// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
// Support: IE 11 only
// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
!("click"===e.type&&1<=e.button))for(;p!==this;p=p.parentNode||this)// Don't check non-elements (#13208)
// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
if(1===p.nodeType&&("click"!==e.type||!0!==p.disabled)){for(s=[],r={},n=0;n<l;n++)// Don't conflict with Object.prototype properties (#13203)
a=t[n],o=a.selector+" ",void 0===r[o]&&(r[o]=a.needsContext?-1<Ee(o,this).index(p):Ee.find(o,this,null,[p]).length),r[o]&&s.push(a);s.length&&d.push({elem:p,handlers:s})}// Add the remaining (directly-bound) handlers
return p=this,l<t.length&&d.push({elem:p,handlers:t.slice(l)}),d},addProp:function(e,t){Object.defineProperty(Ee.Event.prototype,e,{enumerable:!0,configurable:!0,get:Ce(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[Ee.expando]?e:new Ee.Event(e)},special:{load:{// Prevent triggered image.load events from bubbling to window.load
noBubble:!0},click:{// Utilize native event to ensure correct state for checkable inputs
setup:function(e){// For mutual compressibility with _default, replace `this` access with a local var.
// `|| data` is dead code meant only to preserve the variable through minification.
var t=this||e;// Claim the first handler
// Return false to allow normal processing in the caller
return ot.test(t.type)&&t.click&&s(t,"input")&&i(t,"click",N),!1},trigger:function(e){// For mutual compressibility with _default, replace `this` access with a local var.
// `|| data` is dead code meant only to preserve the variable through minification.
var t=this||e;// Force setup before triggering a click
// Return non-false to allow normal event-path propagation
return ot.test(t.type)&&t.click&&s(t,"input")&&i(t,"click"),!0},// For cross-browser consistency, suppress native .click() on links
// Also prevent it if we're currently inside a leveraged native-event stack
_default:function(e){var t=e.target;return ot.test(t.type)&&t.click&&s(t,"input")&&Xe.get(t,"click")||s(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},Ee.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},Ee.Event=function(e,t){// Allow instantiation without the 'new' keyword
return this instanceof Ee.Event?void(// Create a timestamp if incoming event doesn't have one
// Mark it as fixed
e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&// Support: Android <=2.3 only
!1===e.returnValue?N:E,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&Ee.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[Ee.expando]=!0):new Ee.Event(e,t);// Event object
},Ee.Event.prototype={constructor:Ee.Event,isDefaultPrevented:E,isPropagationStopped:E,isImmediatePropagationStopped:E,isSimulated:!1,preventDefault:function(){var t=this.originalEvent;this.isDefaultPrevented=N,t&&!this.isSimulated&&t.preventDefault()},stopPropagation:function(){var t=this.originalEvent;this.isPropagationStopped=N,t&&!this.isSimulated&&t.stopPropagation()},stopImmediatePropagation:function(){var t=this.originalEvent;this.isImmediatePropagationStopped=N,t&&!this.isSimulated&&t.stopImmediatePropagation(),this.stopPropagation()}},Ee.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;// Add which for key events
return null==e.which&&lt.test(e.type)?null==e.charCode?e.keyCode:e.charCode:!e.which&&void 0!==t&&pt.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which;// Add which for click: 1 === left; 2 === middle; 3 === right
}},Ee.event.addProp),Ee.each({focus:"focusin",blur:"focusout"},function(e,t){Ee.event.special[e]={// Utilize native event if possible so blur/focus sequence is correct
setup:function(){// Return false to allow normal processing in the caller
return i(this,e,D),!1},trigger:function(){// Return non-false to allow normal event-path propagation
return i(this,e),!0},delegateType:t}}),Ee.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){Ee.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,a=this,o=e.relatedTarget,i=e.handleObj;// For mouseenter/leave call the handler if related is outside the target.
// NB: No relatedTarget if the mouse left/entered the browser window
return o&&(o===a||Ee.contains(a,o))||(e.type=i.origType,n=i.handler.apply(this,arguments),e.type=t),n}}}),Ee.fn.extend({on:function(e,t,n,a){return k(this,e,t,n,a)},one:function(e,t,n,a){return k(this,e,t,n,a,1)},off:function(e,t,n){var a,o;if(e&&e.preventDefault&&e.handleObj)return a=e.handleObj,Ee(e.delegateTarget).off(a.namespace?a.origType+"."+a.namespace:a.origType,a.selector,a.handler),this;if("object"==typeof e){// ( types-object [, selector] )
for(o in e)this.off(o,t,e[o]);return this}return(!1===t||"function"==typeof t)&&(n=t,t=void 0),!1===n&&(n=E),this.each(function(){Ee.event.remove(this,e,n,t)})}});var/* eslint-disable max-len */ // See https://github.com/eslint/eslint/issues/3229
ut=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,/* eslint-enable */ // Support: IE <=10 - 11, Edge 12 - 13 only
// In IE/Edge using regex groups here causes severe slowdowns.
// See https://connect.microsoft.com/IE/feedback/details/1736512/
ft=/<script|<style|<link/i,// checked="checked" or checked
ht=/checked\s*(?:[^=]|=\s*.checked.)/i,mt=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;Ee.extend({htmlPrefilter:function(e){return e.replace(ut,"<$1></$2>")},clone:function(e,t,n){var a,o,s,r,d=e.cloneNode(!0),p=Ze(e);// Fix IE cloning issues
if(!Te.noCloneChecked&&(1===e.nodeType||11===e.nodeType)&&!Ee.isXMLDoc(e))for(r=C(d),s=C(e),(a=0,o=s.length);a<o;a++)I(s[a],r[a]);// Copy the events from the original to the clone
if(t)if(n)for(s=s||C(e),r=r||C(d),(a=0,o=s.length);a<o;a++)H(s[a],r[a]);else H(e,d);// Preserve script evaluation history
// Return the cloned set
return r=C(d,"script"),0<r.length&&w(r,!p&&C(e,"script")),d},cleanData:function(e){for(var t,n,a,o=Ee.event.special,s=0;void 0!==(n=e[s]);s++)if(ze(n)){if(t=n[Xe.expando]){if(t.events)for(a in t.events)o[a]?Ee.event.remove(n,a):Ee.removeEvent(n,a,t.handle);// Support: Chrome <=35 - 45+
// Assign undefined instead of using delete, see Data#remove
n[Xe.expando]=void 0}n[$e.expando]&&(n[$e.expando]=void 0)}}}),Ee.fn.extend({detach:function(e){return P(this,e,!0)},remove:function(e){return P(this,e)},text:function(e){return Be(this,function(e){return void 0===e?Ee.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=e)})},null,e,arguments.length)},append:function(){return O(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=j(this,e);t.appendChild(e)}})},prepend:function(){return O(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=j(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return O(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return O(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(// Prevent memory leaks
// Remove any remaining nodes
Ee.cleanData(C(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return Ee.clone(this,e,t)})},html:function(e){return Be(this,function(e){var t=this[0]||{},n=0,a=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;// See if we can take a shortcut and just use innerHTML
if("string"==typeof e&&!ft.test(e)&&!rt[(it.exec(e)||["",""])[1].toLowerCase()]){e=Ee.htmlPrefilter(e);try{for(;n<a;n++)t=this[n]||{},1===t.nodeType&&(Ee.cleanData(C(t,!1)),t.innerHTML=e);t=0}catch(t){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];// Make the changes, replacing each non-ignored context element with the new content
return O(this,arguments,function(t){var n=this.parentNode;0>Ee.inArray(this,e)&&(Ee.cleanData(C(this)),n&&n.replaceChild(t,this))},e)}}),Ee.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){Ee.fn[e]=function(e){for(var n,a=[],o=Ee(e),s=o.length-1,r=0;r<=s;r++)// Support: Android <=4.0 only, PhantomJS 1 only
// .get() because push.apply(_, arraylike) throws on ancient WebKit
n=r===s?this:this.clone(!0),Ee(o[r])[t](n),he.apply(a,n.get());return this.pushStack(a)}});var gt=new RegExp("^("+Ye+")(?!px)[a-z%]+$","i"),yt=function(t){// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
// IE throws on elements created in popups
// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},xt=new RegExp(Ke.join("|"),"i");(function(){// Executing both pixelPosition & boxSizingReliable tests require only one layout
// so they're executed at the same time to save the second computation.
function t(){// This is a singleton, we need to execute it only once
if(l){d.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",Je.appendChild(d).appendChild(l);var t=e.getComputedStyle(l);a="1%"!==t.top,r=12===n(t.marginLeft),l.style.right="60%",s=36===n(t.right),o=36===n(t.width),l.style.position="absolute",i=12===n(l.offsetWidth/3),Je.removeChild(d),l=null}}function n(e){var t=Math.round;return t(parseFloat(e))}var a,o,i,s,r,d=pe.createElement("div"),l=pe.createElement("div");// Finish early in limited (non-browser) environments
l.style&&(// Support: IE <=9 - 11 only
// Style of cloned element affects source element cloned (#8908)
l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",Te.clearCloneStyle="content-box"===l.style.backgroundClip,Ee.extend(Te,{boxSizingReliable:function(){return t(),o},pixelBoxStyles:function(){return t(),s},pixelPosition:function(){return t(),a},reliableMarginLeft:function(){return t(),r},scrollboxSize:function(){return t(),i}}))})();var bt=["Webkit","Moz","ms"],vt=pe.createElement("div").style,Tt={},// Swappable if display is none or starts with table
// except "table", "table-cell", or "table-caption"
// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
Ct=/^(none|table(?!-c[ea]).+)/,wt=/^--/,St={position:"absolute",visibility:"hidden",display:"block"},Nt={letterSpacing:"0",fontWeight:"400"};Ee.extend({// Add in style property hooks for overriding the default
// behavior of getting and setting a style property
cssHooks:{opacity:{get:function(e,t){if(t){// We should always get a number back from opacity
var n=_(e,"opacity");return""===n?"1":n}}}},// Don't automatically add "px" to these possibly-unitless properties
cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},// Add in properties whose names you wish to fix before
// setting or getting the value
cssProps:{},// Get and set the style property on a DOM Node
style:function(e,t,n,a){// Don't set styles on text and comment nodes
if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){// Make sure that we're working with the right name
var o,i,s,r=m(t),d=wt.test(t),l=e.style;// Make sure that we're working with the right name. We don't
// want to query the value if it is a CSS custom property
// since they are user-defined.
// Check if we're setting a value
if(d||(t=W(r)),s=Ee.cssHooks[t]||Ee.cssHooks[r],void 0!==n){// Make sure that null and NaN values aren't set (#7116)
if(i=typeof n,"string"===i&&(o=Ge.exec(n))&&o[1]&&(n=b(e,t,o),i="number"),null==n||n!==n)return;// If a number was passed in, add the unit (except for certain CSS properties)
// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
// "px" to a few hardcoded values.
"number"!==i||d||(n+=o&&o[3]||(Ee.cssNumber[r]?"":"px")),Te.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),s&&"set"in s&&void 0===(n=s.set(e,n,a))||(d?l.setProperty(t,n):l[t]=n)}else// If a hook was provided get the non-computed value from there
return s&&"get"in s&&void 0!==(o=s.get(e,!1,a))?o:l[t];// Otherwise just get the value from the style object
}},css:function(e,t,n,a){var o,i,s,r=m(t),d=wt.test(t);// Make sure that we're working with the right name. We don't
// want to modify the value if it is a CSS custom property
// since they are user-defined.
// Make numeric if forced or a qualifier was provided and val looks numeric
return d||(t=W(r)),s=Ee.cssHooks[t]||Ee.cssHooks[r],s&&"get"in s&&(o=s.get(e,!0,n)),void 0===o&&(o=_(e,t,a)),"normal"===o&&t in Nt&&(o=Nt[t]),""===n||n?(i=parseFloat(o),!0===n||isFinite(i)?i||0:o):o}}),Ee.each(["height","width"],function(e,t){Ee.cssHooks[t]={get:function(e,n,a){if(n)// Certain elements can have dimension info if we invisibly show them
// but it must have a current display style that would benefit
return!Ct.test(Ee.css(e,"display"))||// Support: Safari 8+
// Table columns in Safari have non-zero offsetWidth & zero
// getBoundingClientRect().width unless display is changed.
// Support: IE <=11 only
// Running getBoundingClientRect on a disconnected node
// in IE throws an error.
e.getClientRects().length&&e.getBoundingClientRect().width?U(e,t,a):nt(e,St,function(){return U(e,t,a)})},set:function(e,n,a){var o,i=yt(e),// Only read styles.position if the test has a chance to fail
// to avoid forcing a reflow.
s=!Te.scrollboxSize()&&"absolute"===i.position,r=(s||a)&&"border-box"===Ee.css(e,"boxSizing",!1,i),d=a?F(e,t,a,r,i):0;// Account for unreliable border-box dimensions by comparing offset* to computed and
// faking a content-box to get border and padding (gh-3699)
return r&&s&&(d-=re(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(i[t])-F(e,t,"border",!1,i)-.5)),d&&(o=Ge.exec(n))&&"px"!==(o[3]||"px")&&(e.style[t]=n,n=Ee.css(e,t)),B(e,n,d)}}}),Ee.cssHooks.marginLeft=R(Te.reliableMarginLeft,function(e,t){if(t)return(parseFloat(_(e,"marginLeft"))||e.getBoundingClientRect().left-nt(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),Ee.each({margin:"",padding:"",border:"Width"},function(e,t){Ee.cssHooks[e+t]={expand:function(n){for(var a=0,o={},// Assumes a single number if not a string
s="string"==typeof n?n.split(" "):[n];4>a;a++)o[e+Ke[a]+t]=s[a]||s[a-2]||s[0];return o}},"margin"!==e&&(Ee.cssHooks[e+t].set=B)}),Ee.fn.extend({css:function(e,t){return Be(this,function(e,t,n){var a,o,s={},r=0;if(Array.isArray(t)){for(a=yt(e),o=t.length;r<o;r++)s[t[r]]=Ee.css(e,t[r],!1,a);return s}return void 0===n?Ee.css(e,t):Ee.style(e,t,n)},e,t,1<arguments.length)}}),Ee.Tween=z,z.prototype={constructor:z,init:function(e,t,n,a,o,i){this.elem=e,this.prop=n,this.easing=o||Ee.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=a,this.unit=i||(Ee.cssNumber[n]?"":"px")},cur:function(){var e=z.propHooks[this.prop];return e&&e.get?e.get(this):z.propHooks._default.get(this)},run:function(e){var t,n=z.propHooks[this.prop];return this.pos=this.options.duration?t=Ee.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):z.propHooks._default.set(this),this}},z.prototype.init.prototype=z.prototype,z.propHooks={_default:{get:function(e){var t;// Use a property on the element directly when it is not a DOM element,
// or when there is no matching style property that exists.
return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=Ee.css(e.elem,e.prop,""),t&&"auto"!==t?t:0);// Passing an empty string as a 3rd parameter to .css will automatically
// attempt a parseFloat and fallback to a string if the parse fails.
// Simple values such as "10px" are parsed to Float;
// complex values such as "rotate(1rad)" are returned as-is.
},set:function(e){Ee.fx.step[e.prop]?Ee.fx.step[e.prop](e):1===e.elem.nodeType&&(Ee.cssHooks[e.prop]||null!=e.elem.style[W(e.prop)])?Ee.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},z.propHooks.scrollTop=z.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},Ee.easing={linear:function(e){return e},swing:function(e){var t=Math.cos,n=Math.PI;return .5-t(e*n)/2},_default:"swing"},Ee.fx=z.prototype.init,Ee.fx.step={};var Et,Dt,At=/^(?:toggle|show|hide)$/,kt=/queueHooks$/;Ee.Animation=Ee.extend(K,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return b(n.elem,e,Ge.exec(t),n),n}]},tweener:function(e,t){Ce(e)?(t=e,e=["*"]):e=e.match(Re);for(var n,a=0,o=e.length;a<o;a++)n=e[a],K.tweeners[n]=K.tweeners[n]||[],K.tweeners[n].unshift(t)},prefilters:[Y],prefilter:function(e,t){t?K.prefilters.unshift(e):K.prefilters.push(e)}}),Ee.speed=function(e,t,n){var a=e&&"object"==typeof e?Ee.extend({},e):{complete:n||!n&&t||Ce(e)&&e,duration:e,easing:n&&t||t&&!Ce(t)&&t};// Go to the end state if fx are off
return Ee.fx.off?a.duration=0:"number"!=typeof a.duration&&(a.duration in Ee.fx.speeds?a.duration=Ee.fx.speeds[a.duration]:a.duration=Ee.fx.speeds._default),(null==a.queue||!0===a.queue)&&(a.queue="fx"),a.old=a.complete,a.complete=function(){Ce(a.old)&&a.old.call(this),a.queue&&Ee.dequeue(this,a.queue)},a},Ee.fn.extend({fadeTo:function(e,t,n,a){// Show any hidden elements after setting opacity to 0
return this.filter(tt).css("opacity",0).show()// Animate to the value specified
.end().animate({opacity:t},e,n,a)},animate:function(e,t,n,a){var o=Ee.isEmptyObject(e),i=Ee.speed(t,n,a),s=function(){// Operate on a copy of prop so per-property easing won't be lost
var t=K(this,Ee.extend({},e),i);// Empty animations, or finishing resolves immediately
(o||Xe.get(this,"finish"))&&t.stop(!0)};return s.finish=s,o||!1===i.queue?this.each(s):this.queue(i.queue,s)},stop:function(e,t,n){var a=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,o=null!=e&&e+"queueHooks",i=Ee.timers,s=Xe.get(this);if(o)s[o]&&s[o].stop&&a(s[o]);else for(o in s)s[o]&&s[o].stop&&kt.test(o)&&a(s[o]);for(o=i.length;o--;)i[o].elem===this&&(null==e||i[o].queue===e)&&(i[o].anim.stop(n),t=!1,i.splice(o,1));// Start the next in the queue if the last step wasn't forced.
// Timers currently will call their complete callbacks, which
// will dequeue but only if they were gotoEnd.
(t||!n)&&Ee.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=Xe.get(this),a=n[e+"queue"],o=n[e+"queueHooks"],i=Ee.timers,s=a?a.length:0;// Enable finishing flag on private data
// Look for any active animations, and finish them
for(n.finish=!0,Ee.queue(this,e,[]),o&&o.stop&&o.stop.call(this,!0),t=i.length;t--;)i[t].elem===this&&i[t].queue===e&&(i[t].anim.stop(!0),i.splice(t,1));// Look for any animations in the old queue and finish them
for(t=0;t<s;t++)a[t]&&a[t].finish&&a[t].finish.call(this);// Turn off finishing flag
delete n.finish})}}),Ee.each(["toggle","show","hide"],function(e,t){var n=Ee.fn[t];Ee.fn[t]=function(e,a,o){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(V(t,!0),e,a,o)}}),Ee.each({slideDown:V("show"),slideUp:V("hide"),slideToggle:V("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){Ee.fn[e]=function(e,n,a){return this.animate(t,e,n,a)}}),Ee.timers=[],Ee.fx.tick=function(){var e,t=0,n=Ee.timers;for(Et=Date.now();t<n.length;t++)e=n[t],e()||n[t]!==e||n.splice(t--,1);n.length||Ee.fx.stop(),Et=void 0},Ee.fx.timer=function(e){Ee.timers.push(e),Ee.fx.start()},Ee.fx.interval=13,Ee.fx.start=function(){Dt||(Dt=!0,X())},Ee.fx.stop=function(){Dt=null},Ee.fx.speeds={slow:600,fast:200,// Default speed
_default:400},Ee.fn.delay=function(t,n){return t=Ee.fx?Ee.fx.speeds[t]||t:t,n=n||"fx",this.queue(n,function(n,a){var o=e.setTimeout(n,t);a.stop=function(){e.clearTimeout(o)}})},function(){var e=pe.createElement("input"),t=pe.createElement("select"),n=t.appendChild(pe.createElement("option"));e.type="checkbox",Te.checkOn=""!==e.value,Te.optSelected=n.selected,e=pe.createElement("input"),e.value="t",e.type="radio",Te.radioValue="t"===e.value}();var jt,Lt=Ee.expr.attrHandle;Ee.fn.extend({attr:function(e,t){return Be(this,Ee.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){Ee.removeAttr(this,e)})}}),Ee.extend({attr:function(e,t,n){var a,o,i=e.nodeType;// Don't get/set attributes on text, comment and attribute nodes
if(3!==i&&8!==i&&2!==i)// Fallback to prop when attributes are not supported
return"undefined"==typeof e.getAttribute?Ee.prop(e,t,n):(1===i&&Ee.isXMLDoc(e)||(o=Ee.attrHooks[t.toLowerCase()]||(Ee.expr.match.bool.test(t)?jt:void 0)),void 0!==n)?null===n?void Ee.removeAttr(e,t):o&&"set"in o&&void 0!==(a=o.set(e,n,t))?a:(e.setAttribute(t,n+""),n):o&&"get"in o&&null!==(a=o.get(e,t))?a:(a=Ee.find.attr(e,t),null==a?void 0:a);// Attribute hooks are determined by the lowercase version
// Grab necessary hook if one is defined
},attrHooks:{type:{set:function(e,t){if(!Te.radioValue&&"radio"===t&&s(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,a=0,// Attribute names can contain non-HTML whitespace characters
// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
o=t&&t.match(Re);if(o&&1===e.nodeType)for(;n=o[a++];)e.removeAttribute(n)}}),jt={set:function(e,t,n){return!1===t?Ee.removeAttr(e,n):e.setAttribute(n,n),n}},Ee.each(Ee.expr.match.bool.source.match(/\w+/g),function(e,t){var n=Lt[t]||Ee.find.attr;Lt[t]=function(e,t,a){var o,i,s=t.toLowerCase();return a||(i=Lt[s],Lt[s]=o,o=null==n(e,t,a)?null:s,Lt[s]=i),o}});var qt=/^(?:input|select|textarea|button)$/i,Ht=/^(?:a|area)$/i;Ee.fn.extend({prop:function(e,t){return Be(this,Ee.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[Ee.propFix[e]||e]})}}),Ee.extend({prop:function(e,t,n){var a,o,i=e.nodeType;// Don't get/set properties on text, comment and attribute nodes
if(3!==i&&8!==i&&2!==i)return 1===i&&Ee.isXMLDoc(e)||(t=Ee.propFix[t]||t,o=Ee.propHooks[t]),void 0===n?o&&"get"in o&&null!==(a=o.get(e,t))?a:e[t]:o&&"set"in o&&void 0!==(a=o.set(e,n,t))?a:e[t]=n},propHooks:{tabIndex:{get:function(e){// Support: IE <=9 - 11 only
// elem.tabIndex doesn't always return the
// correct value when it hasn't been explicitly set
// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
// Use proper attribute retrieval(#12072)
var t=Ee.find.attr(e,"tabindex");return t?parseInt(t,10):qt.test(e.nodeName)||Ht.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),Te.optSelected||(Ee.propHooks.selected={get:function(e){/* eslint no-unused-expressions: "off" */var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){/* eslint no-unused-expressions: "off" */var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),Ee.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){Ee.propFix[this.toLowerCase()]=this}),Ee.fn.extend({addClass:function(e){var t,n,a,o,s,r,d,l=0;if(Ce(e))return this.each(function(t){Ee(this).addClass(e.call(this,t,Z(this)))});if(t=ee(e),t.length)for(;n=this[l++];)if(o=Z(n),a=1===n.nodeType&&" "+J(o)+" ",a){for(r=0;s=t[r++];)0>a.indexOf(" "+s+" ")&&(a+=s+" ");// Only assign if different to avoid unneeded rendering.
d=J(a),o!==d&&n.setAttribute("class",d)}return this},removeClass:function(e){var t,n,a,o,s,r,d,l=0;if(Ce(e))return this.each(function(t){Ee(this).removeClass(e.call(this,t,Z(this)))});if(!arguments.length)return this.attr("class","");if(t=ee(e),t.length)for(;n=this[l++];)if(o=Z(n),a=1===n.nodeType&&" "+J(o)+" ",a){for(r=0;s=t[r++];)// Remove *all* instances
for(;-1<a.indexOf(" "+s+" ");)a=a.replace(" "+s+" "," ");// Only assign if different to avoid unneeded rendering.
d=J(a),o!==d&&n.setAttribute("class",d)}return this},toggleClass:function(e,t){var n=typeof e,a="string"==n||Array.isArray(e);return"boolean"==typeof t&&a?t?this.addClass(e):this.removeClass(e):Ce(e)?this.each(function(n){Ee(this).toggleClass(e.call(this,n,Z(this),t),t)}):this.each(function(){var t,o,s,r;if(a)for(o=0,s=Ee(this),r=ee(e);t=r[o++];)// Check each className given, space separated list
s.hasClass(t)?s.removeClass(t):s.addClass(t);// Toggle whole class name
else(void 0===e||"boolean"===n)&&(t=Z(this),t&&Xe.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":Xe.get(this,"__className__")||""))})},hasClass:function(e){var t,n,a=0;for(t=" "+e+" ";n=this[a++];)if(1===n.nodeType&&-1<(" "+J(Z(n))+" ").indexOf(t))return!0;return!1}});var It=/\r/g;Ee.fn.extend({val:function(e){var t,n,a,o=this[0];return arguments.length?(a=Ce(e),this.each(function(n){var o;1!==this.nodeType||(o=a?e.call(this,n,Ee(this).val()):e,null==o?o="":"number"==typeof o?o+="":Array.isArray(o)&&(o=Ee.map(o,function(e){return null==e?"":e+""})),t=Ee.valHooks[this.type]||Ee.valHooks[this.nodeName.toLowerCase()],(!t||!("set"in t)||void 0===t.set(this,o,"value"))&&(this.value=o))})):o?(t=Ee.valHooks[o.type]||Ee.valHooks[o.nodeName.toLowerCase()],t&&"get"in t&&void 0!==(n=t.get(o,"value")))?n:(n=o.value,"string"==typeof n?n.replace(It,""):null==n?"":n):void 0}}),Ee.extend({valHooks:{option:{get:function(e){var t=Ee.find.attr(e,"value");return null==t?// Support: IE <=10 - 11 only
// option.text throws exceptions (#14686, #14858)
// Strip and collapse whitespace
// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
J(Ee.text(e)):t}},select:{get:function(e){var t,n,a,o=e.options,r=e.selectedIndex,d="select-one"===e.type,l=d?null:[],p=d?r+1:o.length;// Loop through all the selected options
for(a=0>r?p:d?r:0;a<p;a++)// Support: IE <=9 only
// IE8-9 doesn't update selected after form reset (#2551)
if(n=o[a],(n.selected||a===r)&&// Don't return options that are disabled or in a disabled optgroup
!n.disabled&&(!n.parentNode.disabled||!s(n.parentNode,"optgroup"))){// We don't need an array for one selects
if(t=Ee(n).val(),d)return t;// Multi-Selects return an array
l.push(t)}return l},set:function(e,t){for(var n,a,o=e.options,s=Ee.makeArray(t),r=o.length;r--;)a=o[r],(a.selected=-1<Ee.inArray(Ee.valHooks.option.get(a),s))&&(n=!0);// Force browsers to behave consistently when non-matching value is set
return n||(e.selectedIndex=-1),s}}}}),Ee.each(["radio","checkbox"],function(){Ee.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<Ee.inArray(Ee(e).val(),t)}},Te.checkOn||(Ee.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),Te.focusin="onfocusin"in e;var Ot=/^(?:focusinfocus|focusoutblur)$/,Pt=function(t){t.stopPropagation()};Ee.extend(Ee.event,{trigger:function(t,n,a,o){var s,r,d,l,p,c,u,f,h=[a||pe],m=xe.call(t,"type")?t.type:t,g=xe.call(t,"namespace")?t.namespace.split("."):[];// Don't do events on text and comment nodes
if((r=f=d=a=a||pe,3!==a.nodeType&&8!==a.nodeType)&&!Ot.test(m+Ee.event.triggered)&&(-1<m.indexOf(".")&&(g=m.split("."),m=g.shift(),g.sort()),p=0>m.indexOf(":")&&"on"+m,t=t[Ee.expando]?t:new Ee.Event(m,"object"==typeof t&&t),t.isTrigger=o?2:3,t.namespace=g.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+g.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=a),n=null==n?[t]:Ee.makeArray(n,[t]),u=Ee.event.special[m]||{},o||!u.trigger||!1!==u.trigger.apply(a,n)))// focus/blur morphs to focusin/out; ensure we're not firing them right now
{// Determine event propagation path in advance, per W3C events spec (#9951)
// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
if(!o&&!u.noBubble&&!we(a)){for(l=u.delegateType||m,Ot.test(l+m)||(r=r.parentNode);r;r=r.parentNode)h.push(r),d=r;// Only add window if we got to document (e.g., not plain obj or detached DOM)
d===(a.ownerDocument||pe)&&h.push(d.defaultView||d.parentWindow||e)}// Fire handlers on the event path
for(s=0;(r=h[s++])&&!t.isPropagationStopped();)// jQuery handler
// Native handler
f=r,t.type=1<s?l:u.bindType||m,c=(Xe.get(r,"events")||{})[t.type]&&Xe.get(r,"handle"),c&&c.apply(r,n),c=p&&r[p],c&&c.apply&&ze(r)&&(t.result=c.apply(r,n),!1===t.result&&t.preventDefault());return t.type=m,o||t.isDefaultPrevented()||u._default&&!1!==u._default.apply(h.pop(),n)||!ze(a)||!p||!Ce(a[m])||we(a)||(d=a[p],d&&(a[p]=null),Ee.event.triggered=m,t.isPropagationStopped()&&f.addEventListener(m,Pt),a[m](),t.isPropagationStopped()&&f.removeEventListener(m,Pt),Ee.event.triggered=void 0,d&&(a[p]=d)),t.result}},// Piggyback on a donor event to simulate a different one
// Used only for `focus(in | out)` events
simulate:function(t,n,a){var o=Ee.extend(new Ee.Event,a,{type:t,isSimulated:!0});Ee.event.trigger(o,null,n)}}),Ee.fn.extend({trigger:function(e,t){return this.each(function(){Ee.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return Ee.event.trigger(e,t,n,!0)}}),Te.focusin||Ee.each({focus:"focusin",blur:"focusout"},function(e,t){// Attach a single capturing handler on the document while someone wants focusin/focusout
var n=function(e){Ee.event.simulate(t,e.target,Ee.event.fix(e))};Ee.event.special[t]={setup:function(){var a=this.ownerDocument||this,o=Xe.access(a,t);o||a.addEventListener(e,n,!0),Xe.access(a,t,(o||0)+1)},teardown:function(){var a=this.ownerDocument||this,o=Xe.access(a,t)-1;o?Xe.access(a,t,o):(a.removeEventListener(e,n,!0),Xe.remove(a,t))}}});var _t=e.location,Rt=Date.now(),Mt=/\?/;Ee.parseXML=function(t){var n;if(!t||"string"!=typeof t)return null;// Support: IE 9 - 11 only
// IE throws on parseFromString with invalid input.
try{n=new e.DOMParser().parseFromString(t,"text/xml")}catch(t){n=void 0}return(!n||n.getElementsByTagName("parsererror").length)&&Ee.error("Invalid XML: "+t),n};var Wt=/\[\]$/,Bt=/\r?\n/g,Ft=/^(?:submit|button|image|reset|file)$/i,Ut=/^(?:input|select|textarea|keygen)/i;Ee.param=function(e,t){var n,a=[],o=function(e,t){// If value is a function, invoke it and use its return value
var n=Ce(t)?t():t;a[a.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";// If an array was passed in, assume that it is an array of form elements.
if(Array.isArray(e)||e.jquery&&!Ee.isPlainObject(e))Ee.each(e,function(){o(this.name,this.value)});else// If traditional, encode the "old" way (the way 1.3.2 or older
// did it), otherwise encode params recursively.
for(n in e)te(n,e[n],t,o);// Return the resulting serialization
return a.join("&")},Ee.fn.extend({serialize:function(){return Ee.param(this.serializeArray())},serializeArray:function(){return this.map(function(){// Can add propHook for "elements" to filter or add form elements
var e=Ee.prop(this,"elements");return e?Ee.makeArray(e):this}).filter(function(){var e=this.type;// Use .is( ":disabled" ) so that fieldset[disabled] works
return this.name&&!Ee(this).is(":disabled")&&Ut.test(this.nodeName)&&!Ft.test(e)&&(this.checked||!ot.test(e))}).map(function(e,t){var n=Ee(this).val();return null==n?null:Array.isArray(n)?Ee.map(n,function(e){return{name:t.name,value:e.replace(Bt,"\r\n")}}):{name:t.name,value:n.replace(Bt,"\r\n")}}).get()}});var zt=/%20/g,Xt=/#.*$/,$t=/([?&])_=[^&]*/,Vt=/^(.*?):[ \t]*([^\r\n]*)$/mg,// #7653, #8125, #8152: local protocol detection
Qt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Yt=/^(?:GET|HEAD)$/,Gt=/^\/\//,/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */Kt={},/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */Jt={},// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
Zt="*/".concat("*"),// Anchor tag for parsing the document origin
en=pe.createElement("a");en.href=_t.href,Ee.extend({// Counter for holding the number of active queries
active:0,// Last-Modified header cache for next request
lastModified:{},etag:{},ajaxSettings:{url:_t.href,type:"GET",isLocal:Qt.test(_t.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/accepts:{"*":"*/*",text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},// Data converters
// Keys separate source (or catchall "*") and destination types with a single space
converters:{// Convert anything to text
"* text":String,// Text to html (true = no transformation)
"text html":!0,// Evaluate text as a json expression
"text json":JSON.parse,// Parse text as xml
"text xml":Ee.parseXML},// For options that shouldn't be deep extended:
// you can add your own custom options here if
// and when you create one that shouldn't be
// deep extended (see ajaxExtend)
flatOptions:{url:!0,context:!0}},// Creates a full fledged settings object into target
// with both ajaxSettings and settings fields.
// If target is omitted, writes into ajaxSettings.
ajaxSetup:function(e,t){return t?// Building a settings object
oe(oe(e,Ee.ajaxSettings),t):// Extending ajaxSettings
oe(Ee.ajaxSettings,e)},ajaxPrefilter:ne(Kt),ajaxTransport:ne(Jt),// Main method
ajax:function(t,n){// Callback for when everything is done
function a(t,n,a,i){var l,c,h,m,T,C=n;// Ignore repeat invocations
u||(// Dereference transport for early garbage collection
// (no matter how long the jqXHR object will be used)
// Cache response headers
// Set readyState
// Determine if successful
// Convert no matter what (that way responseXXX fields are always set)
// Set data for the fake xhr object
// Status-dependent callbacks
// Complete
u=!0,p&&e.clearTimeout(p),o=void 0,d=i||"",S.readyState=0<t?4:0,l=200<=t&&300>t||304===t,a&&(m=ie(g,S,a)),m=se(g,m,S,l),l?(g.ifModified&&(T=S.getResponseHeader("Last-Modified"),T&&(Ee.lastModified[r]=T),T=S.getResponseHeader("etag"),T&&(Ee.etag[r]=T)),204===t||"HEAD"===g.type?C="nocontent":304===t?C="notmodified":(C=m.state,c=m.data,h=m.error,l=!h)):(h=C,(t||!C)&&(C="error",0>t&&(t=0))),S.status=t,S.statusText=(n||C)+"",l?x.resolveWith(s,[c,C,S]):x.rejectWith(s,[S,C,h]),S.statusCode(v),v=void 0,f&&y.trigger(l?"ajaxSuccess":"ajaxError",[S,g,l?c:h]),b.fireWith(s,[S,C]),f&&(y.trigger("ajaxComplete",[S,g]),! --Ee.active&&Ee.event.trigger("ajaxStop")))}"object"==typeof t&&(n=t,t=void 0),n=n||{};var o,// URL without anti-cache param
r,// Response headers
d,l,// timeout handle
p,// Url cleanup var
c,// Request state (becomes false upon send and true upon completion)
u,// To know if global events are to be dispatched
f,// Loop variable
h,// uncached part of the url
m,// Create the final options object
g=Ee.ajaxSetup({},n),// Callbacks context
s=g.context||g,// Context for global events is callbackContext if it is a DOM node or jQuery collection
y=g.context&&(s.nodeType||s.jquery)?Ee(s):Ee.event,// Deferreds
x=Ee.Deferred(),b=Ee.Callbacks("once memory"),// Status-dependent callbacks
v=g.statusCode||{},// Headers (they are sent all at once)
T={},C={},// Default abort message
w="canceled",// Fake xhr
S={readyState:0,// Builds headers hashtable if needed
getResponseHeader:function(e){var t;if(u){if(!l)for(l={};t=Vt.exec(d);)l[t[1].toLowerCase()+" "]=(l[t[1].toLowerCase()+" "]||[]).concat(t[2]);t=l[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},// Raw string
getAllResponseHeaders:function(){return u?d:null},// Caches the header
setRequestHeader:function(e,t){return null==u&&(e=C[e.toLowerCase()]=C[e.toLowerCase()]||e,T[e]=t),this},// Overrides response content-type header
overrideMimeType:function(e){return null==u&&(g.mimeType=e),this},// Status-dependent callbacks
statusCode:function(e){if(e)if(u)S.always(e[S.status]);else// Lazy-add the new callbacks in a way that preserves old ones
for(var t in e)v[t]=[v[t],e[t]];return this},// Cancel the request
abort:function(e){var t=e||w;return o&&o.abort(t),a(0,t),this}};// Attach deferreds
// A cross-domain request is in order when the origin doesn't match the current origin.
if(x.promise(S),g.url=((t||g.url||_t.href)+"").replace(Gt,_t.protocol+"//"),g.type=n.method||n.type||g.method||g.type,g.dataTypes=(g.dataType||"*").toLowerCase().match(Re)||[""],null==g.crossDomain){c=pe.createElement("a");// Support: IE <=8 - 11, Edge 12 - 15
// IE throws exception on accessing the href property if url is malformed,
// e.g. http://example.com:80x/
try{c.href=g.url,c.href=c.href,g.crossDomain=en.protocol+"//"+en.host!=c.protocol+"//"+c.host}catch(t){g.crossDomain=!0}}// Convert data if not already a string
// If request was aborted inside a prefilter, stop there
if(g.data&&g.processData&&"string"!=typeof g.data&&(g.data=Ee.param(g.data,g.traditional)),ae(Kt,g,n,S),u)return S;// We can fire global events as of now if asked to
// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
// Check for headers option
for(h in f=Ee.event&&g.global,f&&0==Ee.active++&&Ee.event.trigger("ajaxStart"),g.type=g.type.toUpperCase(),g.hasContent=!Yt.test(g.type),r=g.url.replace(Xt,""),g.hasContent?g.data&&g.processData&&0===(g.contentType||"").indexOf("application/x-www-form-urlencoded")&&(g.data=g.data.replace(zt,"+")):(m=g.url.slice(r.length),g.data&&(g.processData||"string"==typeof g.data)&&(r+=(Mt.test(r)?"&":"?")+g.data,delete g.data),!1===g.cache&&(r=r.replace($t,"$1"),m=(Mt.test(r)?"&":"?")+"_="+Rt++ +m),g.url=r+m),g.ifModified&&(Ee.lastModified[r]&&S.setRequestHeader("If-Modified-Since",Ee.lastModified[r]),Ee.etag[r]&&S.setRequestHeader("If-None-Match",Ee.etag[r])),(g.data&&g.hasContent&&!1!==g.contentType||n.contentType)&&S.setRequestHeader("Content-Type",g.contentType),S.setRequestHeader("Accept",g.dataTypes[0]&&g.accepts[g.dataTypes[0]]?g.accepts[g.dataTypes[0]]+("*"===g.dataTypes[0]?"":", */*; q=0.01"):g.accepts["*"]),g.headers)S.setRequestHeader(h,g.headers[h]);// Allow custom headers/mimetypes and early abort
if(g.beforeSend&&(!1===g.beforeSend.call(s,S,g)||u))// Abort if not done already and return
return S.abort();// Aborting is no longer a cancellation
// If no transport, we auto-abort
if(w="abort",b.add(g.complete),S.done(g.success),S.fail(g.error),o=ae(Jt,g,n,S),!o)a(-1,"No Transport");else{// If request was aborted inside ajaxSend, stop there
if(S.readyState=1,f&&y.trigger("ajaxSend",[S,g]),u)return S;// Timeout
g.async&&0<g.timeout&&(p=e.setTimeout(function(){S.abort("timeout")},g.timeout));try{u=!1,o.send(T,a)}catch(t){// Rethrow post-completion exceptions
if(u)throw t;// Propagate others as results
a(-1,t)}}return S},getJSON:function(e,t,n){return Ee.get(e,t,n,"json")},getScript:function(e,t){return Ee.get(e,void 0,t,"script")}}),Ee.each(["get","post"],function(e,t){Ee[t]=function(e,n,a,o){// The url can be an options object (which then must have .url)
return Ce(n)&&(o=o||a,a=n,n=void 0),Ee.ajax(Ee.extend({url:e,type:t,dataType:o,data:n,success:a},Ee.isPlainObject(e)&&e))}}),Ee._evalUrl=function(e,t){return Ee.ajax({url:e,// Make this explicit, since user can override this through ajaxSetup (#11264)
type:"GET",dataType:"script",cache:!0,async:!1,global:!1,// Only evaluate the response if it is successful (gh-4126)
// dataFilter is not invoked for failure responses, so using it instead
// of the default converter is kludgy but it works.
converters:{"text script":function(){}},dataFilter:function(e){Ee.globalEval(e,t)}})},Ee.fn.extend({wrapAll:function(e){var t;return this[0]&&(Ce(e)&&(e=e.call(this[0])),t=Ee(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return Ce(e)?this.each(function(t){Ee(this).wrapInner(e.call(this,t))}):this.each(function(){var t=Ee(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=Ce(e);return this.each(function(n){Ee(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){Ee(this).replaceWith(this.childNodes)}),this}}),Ee.expr.pseudos.hidden=function(e){return!Ee.expr.pseudos.visible(e)},Ee.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},Ee.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(t){}};var tn={// File protocol always yields status code 0, assume 200
0:200,// Support: IE <=9 only
// #1450: sometimes IE returns 1223 when it should be 204
1223:204},nn=Ee.ajaxSettings.xhr();Te.cors=!!nn&&"withCredentials"in nn,Te.ajax=nn=!!nn,Ee.ajaxTransport(function(t){var n,a;// Cross domain only allowed if supported through XMLHttpRequest
if(Te.cors||nn&&!t.crossDomain)return{send:function(o,s){var r,d=t.xhr();// Apply custom fields if provided
if(d.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(r in t.xhrFields)d[r]=t.xhrFields[r];// Override mime type if needed
// Set headers
for(r in t.mimeType&&d.overrideMimeType&&d.overrideMimeType(t.mimeType),t.crossDomain||o["X-Requested-With"]||(o["X-Requested-With"]="XMLHttpRequest"),o)d.setRequestHeader(r,o[r]);// Callback
n=function(e){return function(){n&&(n=a=d.onload=d.onerror=d.onabort=d.ontimeout=d.onreadystatechange=null,"abort"===e?d.abort():"error"===e?"number"==typeof d.status?s(// File: protocol always yields status 0; see #8605, #14207
d.status,d.statusText):s(0,"error"):s(tn[d.status]||d.status,d.statusText,// Support: IE <=9 only
// IE9 has no XHR2 but throws on binary (trac-11426)
// For XHR2 non-text, let the caller handle it (gh-2498)
"text"!==(d.responseType||"text")||"string"!=typeof d.responseText?{binary:d.response}:{text:d.responseText},d.getAllResponseHeaders()))}},d.onload=n(),a=d.onerror=d.ontimeout=n("error"),void 0===d.onabort?d.onreadystatechange=function(){4===d.readyState&&e.setTimeout(function(){n&&a()})}:d.onabort=a,n=n("abort");try{d.send(t.hasContent&&t.data||null)}catch(t){// #14683: Only rethrow if this hasn't been notified as an error yet
if(n)throw t}},abort:function(){n&&n()}}}),Ee.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),Ee.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return Ee.globalEval(e),e}}}),Ee.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),Ee.ajaxTransport("script",function(e){// This transport only deals with cross domain or forced-by-attrs requests
if(e.crossDomain||e.scriptAttrs){var t,n;return{send:function(a,o){t=Ee("<script>").attr(e.scriptAttrs||{}).prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&o("error"===e.type?404:200,e.type)}),pe.head.appendChild(t[0])},abort:function(){n&&n()}}}});var an=[],on=/(=)\?(?=&|$)|\?\?/;// Default jsonp settings
Ee.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=an.pop()||Ee.expando+"_"+Rt++;return this[e]=!0,e}}),Ee.ajaxPrefilter("json jsonp",function(t,n,a){var o,i,s,r=!1!==t.jsonp&&(on.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&on.test(t.data)&&"data");// Handle iff the expected data type is "jsonp" or we have a parameter to set
if(r||"jsonp"===t.dataTypes[0])// Delegate to script
return o=t.jsonpCallback=Ce(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,r?t[r]=t[r].replace(on,"$1"+o):!1!==t.jsonp&&(t.url+=(Mt.test(t.url)?"&":"?")+t.jsonp+"="+o),t.converters["script json"]=function(){return s||Ee.error(o+" was not called"),s[0]},t.dataTypes[0]="json",i=e[o],e[o]=function(){s=arguments},a.always(function(){void 0===i?Ee(e).removeProp(o):e[o]=i,t[o]&&(t.jsonpCallback=n.jsonpCallback,an.push(o)),s&&Ce(i)&&i(s[0]),s=i=void 0}),"script"}),Te.createHTMLDocument=function(){var e=pe.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",2===e.childNodes.length}(),Ee.parseHTML=function(e,t,n){if("string"!=typeof e)return[];"boolean"==typeof t&&(n=t,t=!1);var a,o,i;// Single tag
return(t||(Te.createHTMLDocument?(t=pe.implementation.createHTMLDocument(""),a=t.createElement("base"),a.href=pe.location.href,t.head.appendChild(a)):t=pe),o=qe.exec(e),i=!n&&[],o)?[t.createElement(o[1])]:(o=S([e],t,i),i&&i.length&&Ee(i).remove(),Ee.merge([],o.childNodes))},Ee.fn.load=function(e,t,n){var a,o,i,s=this,r=e.indexOf(" ");return-1<r&&(a=J(e.slice(r)),e=e.slice(0,r)),Ce(t)?(n=t,t=void 0):t&&"object"==typeof t&&(o="POST"),0<s.length&&Ee.ajax({url:e,// If "type" variable is undefined, then "GET" method will be used.
// Make value of this field explicit since
// user can override it through ajaxSetup method
type:o||"GET",dataType:"html",data:t}).done(function(e){i=arguments,s.html(a?// If a selector was specified, locate the right elements in a dummy div
// Exclude scripts to avoid IE 'Permission Denied' errors
Ee("<div>").append(Ee.parseHTML(e)).find(a):// Otherwise use the full result
e)}).always(n&&function(e,t){s.each(function(){n.apply(this,i||[e.responseText,t,e])})}),this},Ee.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){Ee.fn[t]=function(e){return this.on(t,e)}}),Ee.expr.pseudos.animated=function(e){return Ee.grep(Ee.timers,function(t){return e===t.elem}).length},Ee.offset={setOffset:function(e,t,n){var a,o,i,s,r,d,l,p=Ee.css(e,"position"),c=Ee(e),u={};// Set position first, in-case top/left are set even on static elem
"static"===p&&(e.style.position="relative"),r=c.offset(),i=Ee.css(e,"top"),d=Ee.css(e,"left"),l=("absolute"===p||"fixed"===p)&&-1<(i+d).indexOf("auto"),l?(a=c.position(),s=a.top,o=a.left):(s=parseFloat(i)||0,o=parseFloat(d)||0),Ce(t)&&(t=t.call(e,n,Ee.extend({},r))),null!=t.top&&(u.top=t.top-r.top+s),null!=t.left&&(u.left=t.left-r.left+o),"using"in t?t.using.call(e,u):c.css(u)}},Ee.fn.extend({// offset() relates an element's border box to the document origin
offset:function(e){// Preserve chaining for setter
if(arguments.length)return void 0===e?this:this.each(function(t){Ee.offset.setOffset(this,e,t)});var t,n,a=this[0];if(a)// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
// Support: IE <=11 only
// Running getBoundingClientRect on a
// disconnected node in IE throws an error
return a.getClientRects().length?(t=a.getBoundingClientRect(),n=a.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0};// Get document-relative position by adding viewport scroll to viewport-relative gBCR
},// position() relates an element's margin box to its offset parent's padding box
// This corresponds to the behavior of CSS absolute positioning
position:function(){if(this[0]){var e,t,n,a=this[0],o={top:0,left:0};// position:fixed elements are offset from the viewport, which itself always has zero offset
if("fixed"===Ee.css(a,"position"))t=a.getBoundingClientRect();else{for(t=this.offset(),n=a.ownerDocument,e=a.offsetParent||n.documentElement;e&&(e===n.body||e===n.documentElement)&&"static"===Ee.css(e,"position");)e=e.parentNode;e&&e!==a&&1===e.nodeType&&(o=Ee(e).offset(),o.top+=Ee.css(e,"borderTopWidth",!0),o.left+=Ee.css(e,"borderLeftWidth",!0))}// Subtract parent offsets and element margins
return{top:t.top-o.top-Ee.css(a,"marginTop",!0),left:t.left-o.left-Ee.css(a,"marginLeft",!0)}}},// This method will return documentElement in the following cases:
// 1) For the element inside the iframe without offsetParent, this method will return
//    documentElement of the parent window
// 2) For the hidden or detached element
// 3) For body or html element, i.e. in case of the html node - it will return itself
//
// but those exceptions were never presented as a real life use-cases
// and might be considered as more preferable results.
//
// This logic, however, is not guaranteed and can change at any point in the future
offsetParent:function(){return this.map(function(){for(var e=this.offsetParent;e&&"static"===Ee.css(e,"position");)e=e.offsetParent;return e||Je})}}),Ee.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;Ee.fn[e]=function(a){return Be(this,function(e,a,o){// Coalesce documents and windows
var i;return we(e)?i=e:9===e.nodeType&&(i=e.defaultView),void 0===o?i?i[t]:e[a]:void(i?i.scrollTo(n?i.pageXOffset:o,n?o:i.pageYOffset):e[a]=o)},e,a,arguments.length)}}),Ee.each(["top","left"],function(e,t){Ee.cssHooks[t]=R(Te.pixelPosition,function(e,n){if(n)// If curCSS returns percentage, fallback to offset
return n=_(e,t),gt.test(n)?Ee(e).position()[t]+"px":n})}),Ee.each({Height:"height",Width:"width"},function(e,t){Ee.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,a){Ee.fn[a]=function(o,i){var s=arguments.length&&(n||"boolean"!=typeof o),r=n||(!0===o||!0===i?"margin":"border");return Be(this,function(t,n,o){var i;return we(t)?0===a.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(i=t.documentElement,de(t.body["scroll"+e],i["scroll"+e],t.body["offset"+e],i["offset"+e],i["client"+e])):void 0===o?// Get width or height on the element, requesting but not forcing parseFloat
Ee.css(t,n,r):// Set width or height on the element
Ee.style(t,n,o,r);// Get document width or height
},t,s?o:void 0,s)}})}),Ee.each(["blur","focus","focusin","focusout","resize","scroll","click","dblclick","mousedown","mouseup","mousemove","mouseover","mouseout","mouseenter","mouseleave","change","select","submit","keydown","keypress","keyup","contextmenu"],function(e,t){Ee.fn[t]=function(e,n){return 0<arguments.length?this.on(t,null,e,n):this.trigger(t)}}),Ee.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),Ee.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,a){return this.on(t,e,n,a)},undelegate:function(e,t,n){// ( namespace ) or ( selector, types [, fn] )
return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),Ee.proxy=function(e,t){var n,a,o;// Quick check to determine if target is callable, in the spec
// this throws a TypeError, but we will just return undefined.
if("string"==typeof t&&(n=e[t],t=e,e=n),!!Ce(e))return a=ue.call(arguments,2),o=function(){return e.apply(t||this,a.concat(ue.call(arguments)))},o.guid=e.guid=e.guid||Ee.guid++,o;// Simulated bind
},Ee.holdReady=function(e){e?Ee.readyWait++:Ee.ready(!0)},Ee.isArray=Array.isArray,Ee.parseJSON=JSON.parse,Ee.nodeName=s,Ee.isFunction=Ce,Ee.isWindow=we,Ee.camelCase=m,Ee.type=a,Ee.now=Date.now,Ee.isNumeric=function(e){// As of jQuery 3.0, isNumeric is limited to
// strings and numbers (primitives or objects)
// that can be coerced to finite numbers (gh-2662)
var t=Ee.type(e);return("number"===t||"string"===t)&&// parseFloat NaNs numeric-cast false positives ("")
// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
// subtraction forces infinities to NaN
!isNaN(e-parseFloat(e))};var// Map over jQuery in case of overwrite
sn=e.jQuery,// Map over the $ in case of overwrite
rn=e.$;return Ee.noConflict=function(t){return e.$===Ee&&(e.$=rn),t&&e.jQuery===Ee&&(e.jQuery=sn),Ee},t||(e.jQuery=e.$=Ee),Ee})});/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.3.1): util.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * ------------------------------------------------------------------------
 * Private TransitionEnd Helpers
 * ------------------------------------------------------------------------
 */const TRANSITION_END="transitionend",MAX_UID=1e6,MILLISECONDS_MULTIPLIER=1e3;// Shoutout AngusCroll (https://goo.gl/pxwQGp)
function toType(e){return{}.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase()}function getSpecialTransitionEndEvent(){return{bindType:TRANSITION_END,delegateType:TRANSITION_END,handle(e){return jquery(e.target).is(this)?e.handleObj.handler.apply(this,arguments):void 0;// eslint-disable-line no-undefined
}}}function transitionEndEmulator(e){let t=!1;return jquery(this).one(Util.TRANSITION_END,()=>{t=!0}),setTimeout(()=>{t||Util.triggerTransitionEnd(this)},e),this}function setTransitionEndSupport(){jquery.fn.emulateTransitionEnd=transitionEndEmulator,jquery.event.special[Util.TRANSITION_END]=getSpecialTransitionEndEvent()}/**
 * --------------------------------------------------------------------------
 * Public Util Api
 * --------------------------------------------------------------------------
 */const Util={TRANSITION_END:"bsTransitionEnd",getUID(e){do// eslint-disable-next-line no-bitwise
e+=~~(Math.random()*MAX_UID);while(document.getElementById(e));return e},getSelectorFromElement(e){let t=e.getAttribute("data-target");if(!t||"#"===t){const n=e.getAttribute("href");t=n&&"#"!==n?n.trim():""}try{return document.querySelector(t)?t:null}catch(e){return null}},getTransitionDurationFromElement(e){if(!e)return 0;// Get transition-duration of the element
let t=jquery(e).css("transition-duration"),n=jquery(e).css("transition-delay");const a=parseFloat(t),o=parseFloat(n);// Return 0 if element or transition duration is not found
return a||o?(t=t.split(",")[0],n=n.split(",")[0],(parseFloat(t)+parseFloat(n))*MILLISECONDS_MULTIPLIER):0;// If multiple durations are defined, take the first
},reflow(e){return e.offsetHeight},triggerTransitionEnd(e){jquery(e).trigger(TRANSITION_END)},// TODO: Remove in v5
supportsTransitionEnd(){return!0},isElement(e){return(e[0]||e).nodeType},typeCheckConfig(e,t,n){for(const a in n)if(Object.prototype.hasOwnProperty.call(n,a)){const o=n[a],i=t[a],s=i&&Util.isElement(i)?"element":toType(i);if(!new RegExp(o).test(s))throw new Error(`${e.toUpperCase()}: `+`Option "${a}" provided type "${s}" `+`but expected type "${o}".`)}},findShadowRoot(e){if(!document.documentElement.attachShadow)return null;// Can find the shadow root otherwise it'll return the document
if("function"==typeof e.getRootNode){const t=e.getRootNode();return t instanceof ShadowRoot?t:null}return e instanceof ShadowRoot?e:e.parentNode?Util.findShadowRoot(e.parentNode):null;// when we don't find a shadow root
}};setTransitionEndSupport();/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.3.1): alert.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */const NAME="alert",VERSION="4.3.1",DATA_KEY="bs.alert",EVENT_KEY=`.${DATA_KEY}`,DATA_API_KEY=".data-api",JQUERY_NO_CONFLICT=jquery.fn.alert,Selector={DISMISS:"[data-dismiss=\"alert\"]"},Event={CLOSE:`close${EVENT_KEY}`,CLOSED:`closed${EVENT_KEY}`,CLICK_DATA_API:`click${EVENT_KEY}${DATA_API_KEY}`},ClassName={ALERT:"alert",FADE:"fade",SHOW:"show"};/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */class Alert{constructor(e){this._element=e}// Getters
static get VERSION(){return VERSION}// Public
close(e){let t=this._element;e&&(t=this._getRootElement(e));const n=this._triggerCloseEvent(t);n.isDefaultPrevented()||this._removeElement(t)}dispose(){jquery.removeData(this._element,DATA_KEY),this._element=null}// Private
_getRootElement(e){const t=Util.getSelectorFromElement(e);let n=!1;return t&&(n=document.querySelector(t)),n||(n=jquery(e).closest(`.${ClassName.ALERT}`)[0]),n}_triggerCloseEvent(e){const t=jquery.Event(Event.CLOSE);return jquery(e).trigger(t),t}_removeElement(e){if(jquery(e).removeClass(ClassName.SHOW),!jquery(e).hasClass(ClassName.FADE))return void this._destroyElement(e);const t=Util.getTransitionDurationFromElement(e);jquery(e).one(Util.TRANSITION_END,t=>this._destroyElement(e,t)).emulateTransitionEnd(t)}_destroyElement(e){jquery(e).detach().trigger(Event.CLOSED).remove()}// Static
static _jQueryInterface(e){return this.each(function(){const t=jquery(this);let n=t.data(DATA_KEY);n||(n=new Alert(this),t.data(DATA_KEY,n)),"close"===e&&n[e](this)})}static _handleDismiss(e){return function(t){t&&t.preventDefault(),e.close(this)}}}/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */jquery(document).on(Event.CLICK_DATA_API,Selector.DISMISS,Alert._handleDismiss(new Alert)),jquery.fn.alert=Alert._jQueryInterface,jquery.fn.alert.Constructor=Alert,jquery.fn.alert.noConflict=()=>(jquery.fn[NAME]=JQUERY_NO_CONFLICT,Alert._jQueryInterface);/**
 * Extending Bootstrap 4 Alert for Nitro UI Component Alert
 *
 * @package @nitro-ui/component-alert
 * @since 1.0.0-alpha.0
 * @author Syaiful Shah Zinan <i.works@live.com>
 */const NAME$1="nitroAlert",DATA_KEY$1=`${"nitroAlert"}.alert`,EVENT_KEY$1=`.${DATA_KEY$1}`,DATA_API_KEY$1=".data-api",JQUERY_NO_CONFLICT$1=jquery.fn.nitroAlert,Selector$1={DISMISS:"[data-dismiss=\"alert\"]"},Event$1={CLICK_DATA_API:`click${EVENT_KEY$1}${DATA_API_KEY$1}`},ClassName$1={ALERT:"c-alert",FADE:"fade",SHOW:"show"};class NitroAlert extends Alert{_getRootElement(e){const t=Util.getSelectorFromElement(e);let n=!1;return t&&(n=document.querySelector(t)),n||(n=jquery(e).closest(`.${ClassName$1.ALERT}`)[0]),n}}jquery(document).on(Event$1.CLICK_DATA_API,Selector$1.DISMISS,NitroAlert._handleDismiss(new NitroAlert)),jquery.fn.nitroAlert=NitroAlert._jQueryInterface,jquery.fn.nitroAlert.Constructor=NitroAlert,jquery.fn.nitroAlert.noConflict=()=>(jquery.fn[NAME$1]=JQUERY_NO_CONFLICT$1,NitroAlert._jQueryInterface);export default NitroAlert;
