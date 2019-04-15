/*! jQuery v1.11.3 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l="1.11.3",m=function(a,b){return new m.fn.init(a,b)},n=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,o=/^-ms-/,p=/-([\da-z])/gi,q=function(a,b){return b.toUpperCase()};m.fn=m.prototype={jquery:l,constructor:m,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=m.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return m.each(this,a,b)},map:function(a){return this.pushStack(m.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},m.extend=m.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||m.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(m.isPlainObject(c)||(b=m.isArray(c)))?(b?(b=!1,f=a&&m.isArray(a)?a:[]):f=a&&m.isPlainObject(a)?a:{},g[d]=m.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},m.extend({expando:"jQuery"+(l+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===m.type(a)},isArray:Array.isArray||function(a){return"array"===m.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!m.isArray(a)&&a-parseFloat(a)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==m.type(a)||a.nodeType||m.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(k.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&m.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(o,"ms-").replace(p,q)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=r(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(n,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(r(Object(a))?m.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=r(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),m.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||m.guid++,e):void 0},now:function(){return+new Date},support:k}),m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function r(a){var b="length"in a&&a.length,c=m.type(a);return"function"===c||m.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var s=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);m.find=s,m.expr=s.selectors,m.expr[":"]=m.expr.pseudos,m.unique=s.uniqueSort,m.text=s.getText,m.isXMLDoc=s.isXML,m.contains=s.contains;var t=m.expr.match.needsContext,u=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,v=/^.[^:#\[\.,]*$/;function w(a,b,c){if(m.isFunction(b))return m.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return m.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(v.test(b))return m.filter(b,a,c);b=m.filter(b,a)}return m.grep(a,function(a){return m.inArray(a,b)>=0!==c})}m.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?m.find.matchesSelector(d,a)?[d]:[]:m.find.matches(a,m.grep(b,function(a){return 1===a.nodeType}))},m.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(m(a).filter(function(){for(b=0;e>b;b++)if(m.contains(d[b],this))return!0}));for(b=0;e>b;b++)m.find(a,d[b],c);return c=this.pushStack(e>1?m.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(w(this,a||[],!1))},not:function(a){return this.pushStack(w(this,a||[],!0))},is:function(a){return!!w(this,"string"==typeof a&&t.test(a)?m(a):a||[],!1).length}});var x,y=a.document,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=m.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||x).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof m?b[0]:b,m.merge(this,m.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:y,!0)),u.test(c[1])&&m.isPlainObject(b))for(c in b)m.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=y.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return x.find(a);this.length=1,this[0]=d}return this.context=y,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):m.isFunction(a)?"undefined"!=typeof x.ready?x.ready(a):a(m):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),m.makeArray(a,this))};A.prototype=m.fn,x=m(y);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};m.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!m(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),m.fn.extend({has:function(a){var b,c=m(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(m.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=t.test(a)||"string"!=typeof a?m(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&m.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?m.unique(f):f)},index:function(a){return a?"string"==typeof a?m.inArray(this[0],m(a)):m.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(m.unique(m.merge(this.get(),m(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}m.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return m.dir(a,"parentNode")},parentsUntil:function(a,b,c){return m.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return m.dir(a,"nextSibling")},prevAll:function(a){return m.dir(a,"previousSibling")},nextUntil:function(a,b,c){return m.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return m.dir(a,"previousSibling",c)},siblings:function(a){return m.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return m.sibling(a.firstChild)},contents:function(a){return m.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:m.merge([],a.childNodes)}},function(a,b){m.fn[a]=function(c,d){var e=m.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=m.filter(d,e)),this.length>1&&(C[a]||(e=m.unique(e)),B.test(a)&&(e=e.reverse())),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return m.each(a.match(E)||[],function(a,c){b[c]=!0}),b}m.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):m.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){m.each(b,function(b,c){var d=m.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&m.each(arguments,function(a,c){var d;while((d=m.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?m.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},m.extend({Deferred:function(a){var b=[["resolve","done",m.Callbacks("once memory"),"resolved"],["reject","fail",m.Callbacks("once memory"),"rejected"],["notify","progress",m.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return m.Deferred(function(c){m.each(b,function(b,f){var g=m.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&m.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?m.extend(a,d):d}},e={};return d.pipe=d.then,m.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&m.isFunction(a.promise)?e:0,g=1===f?a:m.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&m.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;m.fn.ready=function(a){return m.ready.promise().done(a),this},m.extend({isReady:!1,readyWait:1,holdReady:function(a){a?m.readyWait++:m.ready(!0)},ready:function(a){if(a===!0?!--m.readyWait:!m.isReady){if(!y.body)return setTimeout(m.ready);m.isReady=!0,a!==!0&&--m.readyWait>0||(H.resolveWith(y,[m]),m.fn.triggerHandler&&(m(y).triggerHandler("ready"),m(y).off("ready")))}}});function I(){y.addEventListener?(y.removeEventListener("DOMContentLoaded",J,!1),a.removeEventListener("load",J,!1)):(y.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))}function J(){(y.addEventListener||"load"===event.type||"complete"===y.readyState)&&(I(),m.ready())}m.ready.promise=function(b){if(!H)if(H=m.Deferred(),"complete"===y.readyState)setTimeout(m.ready);else if(y.addEventListener)y.addEventListener("DOMContentLoaded",J,!1),a.addEventListener("load",J,!1);else{y.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);var c=!1;try{c=null==a.frameElement&&y.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!m.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}I(),m.ready()}}()}return H.promise(b)};var K="undefined",L;for(L in m(k))break;k.ownLast="0"!==L,k.inlineBlockNeedsLayout=!1,m(function(){var a,b,c,d;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",k.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))}),function(){var a=y.createElement("div");if(null==k.deleteExpando){k.deleteExpando=!0;try{delete a.test}catch(b){k.deleteExpando=!1}}a=null}(),m.acceptData=function(a){var b=m.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,N=/([A-Z])/g;function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:M.test(c)?m.parseJSON(c):c}catch(e){}m.data(a,b,c)}else c=void 0}return c}function P(a){var b;for(b in a)if(("data"!==b||!m.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;

return!0}function Q(a,b,d,e){if(m.acceptData(a)){var f,g,h=m.expando,i=a.nodeType,j=i?m.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||m.guid++:h),j[k]||(j[k]=i?{}:{toJSON:m.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=m.extend(j[k],b):j[k].data=m.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[m.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[m.camelCase(b)])):f=g,f}}function R(a,b,c){if(m.acceptData(a)){var d,e,f=a.nodeType,g=f?m.cache:a,h=f?a[m.expando]:m.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){m.isArray(b)?b=b.concat(m.map(b,m.camelCase)):b in d?b=[b]:(b=m.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!P(d):!m.isEmptyObject(d))return}(c||(delete g[h].data,P(g[h])))&&(f?m.cleanData([a],!0):k.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}m.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?m.cache[a[m.expando]]:a[m.expando],!!a&&!P(a)},data:function(a,b,c){return Q(a,b,c)},removeData:function(a,b){return R(a,b)},_data:function(a,b,c){return Q(a,b,c,!0)},_removeData:function(a,b){return R(a,b,!0)}}),m.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=m.data(f),1===f.nodeType&&!m._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=m.camelCase(d.slice(5)),O(f,d,e[d])));m._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){m.data(this,a)}):arguments.length>1?this.each(function(){m.data(this,a,b)}):f?O(f,a,m.data(f,a)):void 0},removeData:function(a){return this.each(function(){m.removeData(this,a)})}}),m.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=m._data(a,b),c&&(!d||m.isArray(c)?d=m._data(a,b,m.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=m.queue(a,b),d=c.length,e=c.shift(),f=m._queueHooks(a,b),g=function(){m.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return m._data(a,c)||m._data(a,c,{empty:m.Callbacks("once memory").add(function(){m._removeData(a,b+"queue"),m._removeData(a,c)})})}}),m.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?m.queue(this[0],a):void 0===b?this:this.each(function(){var c=m.queue(this,a,b);m._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&m.dequeue(this,a)})},dequeue:function(a){return this.each(function(){m.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=m.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=m._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=["Top","Right","Bottom","Left"],U=function(a,b){return a=b||a,"none"===m.css(a,"display")||!m.contains(a.ownerDocument,a)},V=m.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===m.type(c)){e=!0;for(h in c)m.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,m.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(m(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},W=/^(?:checkbox|radio)$/i;!function(){var a=y.createElement("input"),b=y.createElement("div"),c=y.createDocumentFragment();if(b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",k.leadingWhitespace=3===b.firstChild.nodeType,k.tbody=!b.getElementsByTagName("tbody").length,k.htmlSerialize=!!b.getElementsByTagName("link").length,k.html5Clone="<:nav></:nav>"!==y.createElement("nav").cloneNode(!0).outerHTML,a.type="checkbox",a.checked=!0,c.appendChild(a),k.appendChecked=a.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,c.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,k.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){k.noCloneEvent=!1}),b.cloneNode(!0).click()),null==k.deleteExpando){k.deleteExpando=!0;try{delete b.test}catch(d){k.deleteExpando=!1}}}(),function(){var b,c,d=y.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(k[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),k[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var X=/^(?:input|select|textarea)$/i,Y=/^key/,Z=/^(?:mouse|pointer|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=/^([^.]*)(?:\.(.+)|)$/;function aa(){return!0}function ba(){return!1}function ca(){try{return y.activeElement}catch(a){}}m.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=m.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof m===K||a&&m.event.triggered===a.type?void 0:m.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(E)||[""],h=b.length;while(h--)f=_.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=m.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=m.event.special[o]||{},l=m.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&m.expr.match.needsContext.test(e),namespace:p.join(".")},i),(n=g[o])||(n=g[o]=[],n.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?n.splice(n.delegateCount++,0,l):n.push(l),m.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m.hasData(a)&&m._data(a);if(r&&(k=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=_.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=m.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,n=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=n.length;while(f--)g=n[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(n.splice(f,1),g.selector&&n.delegateCount--,l.remove&&l.remove.call(a,g));i&&!n.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||m.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)m.event.remove(a,o+b[j],c,d,!0);m.isEmptyObject(k)&&(delete r.handle,m._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,o=[d||y],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||y,3!==d.nodeType&&8!==d.nodeType&&!$.test(p+m.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[m.expando]?b:new m.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:m.makeArray(c,[b]),k=m.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!m.isWindow(d)){for(i=k.delegateType||p,$.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||y)&&o.push(l.defaultView||l.parentWindow||a)}n=0;while((h=o[n++])&&!b.isPropagationStopped())b.type=n>1?i:k.bindType||p,f=(m._data(h,"events")||{})[b.type]&&m._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&m.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&m.acceptData(d)&&g&&d[p]&&!m.isWindow(d)){l=d[g],l&&(d[g]=null),m.event.triggered=p;try{d[p]()}catch(r){}m.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=m.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(m._data(this,"events")||{})[a.type]||[],k=m.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=m.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((m.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?m(c,this).index(i)>=0:m.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[m.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=Z.test(e)?this.mouseHooks:Y.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new m.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||y),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||y,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==ca()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===ca()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return m.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return m.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=m.extend(new m.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?m.event.trigger(e,null,b):m.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},m.removeEvent=y.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===K&&(a[d]=null),a.detachEvent(d,c))},m.Event=function(a,b){return this instanceof m.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?aa:ba):this.type=a,b&&m.extend(this,b),this.timeStamp=a&&a.timeStamp||m.now(),void(this[m.expando]=!0)):new m.Event(a,b)},m.Event.prototype={isDefaultPrevented:ba,isPropagationStopped:ba,isImmediatePropagationStopped:ba,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=aa,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=aa,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=aa,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){m.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!m.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.submitBubbles||(m.event.special.submit={setup:function(){return m.nodeName(this,"form")?!1:void m.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=m.nodeName(b,"input")||m.nodeName(b,"button")?b.form:void 0;c&&!m._data(c,"submitBubbles")&&(m.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),m._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&m.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return m.nodeName(this,"form")?!1:void m.event.remove(this,"._submit")}}),k.changeBubbles||(m.event.special.change={setup:function(){return X.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(m.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),m.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),m.event.simulate("change",this,a,!0)})),!1):void m.event.add(this,"beforeactivate._change",function(a){var b=a.target;X.test(b.nodeName)&&!m._data(b,"changeBubbles")&&(m.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||m.event.simulate("change",this.parentNode,a,!0)}),m._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return m.event.remove(this,"._change"),!X.test(this.nodeName)}}),k.focusinBubbles||m.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){m.event.simulate(b,a.target,m.event.fix(a),!0)};m.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=m._data(d,b);e||d.addEventListener(a,c,!0),m._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=m._data(d,b)-1;e?m._data(d,b,e):(d.removeEventListener(a,c,!0),m._removeData(d,b))}}}),m.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=ba;else if(!d)return this;return 1===e&&(g=d,d=function(a){return m().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=m.guid++)),this.each(function(){m.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,m(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=ba),this.each(function(){m.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){m.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?m.event.trigger(a,b,c,!0):void 0}});function da(a){var b=ea.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var ea="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",fa=/ jQuery\d+="(?:null|\d+)"/g,ga=new RegExp("<(?:"+ea+")[\\s/>]","i"),ha=/^\s+/,ia=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ja=/<([\w:]+)/,ka=/<tbody/i,la=/<|&#?\w+;/,ma=/<(?:script|style|link)/i,na=/checked\s*(?:[^=]|=\s*.checked.)/i,oa=/^$|\/(?:java|ecma)script/i,pa=/^true\/(.*)/,qa=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ra={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:k.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},sa=da(y),ta=sa.appendChild(y.createElement("div"));ra.optgroup=ra.option,ra.tbody=ra.tfoot=ra.colgroup=ra.caption=ra.thead,ra.th=ra.td;function ua(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==K?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==K?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||m.nodeName(d,b)?f.push(d):m.merge(f,ua(d,b));return void 0===b||b&&m.nodeName(a,b)?m.merge([a],f):f}function va(a){W.test(a.type)&&(a.defaultChecked=a.checked)}function wa(a,b){return m.nodeName(a,"table")&&m.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function xa(a){return a.type=(null!==m.find.attr(a,"type"))+"/"+a.type,a}function ya(a){var b=pa.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function za(a,b){for(var c,d=0;null!=(c=a[d]);d++)m._data(c,"globalEval",!b||m._data(b[d],"globalEval"))}function Aa(a,b){if(1===b.nodeType&&m.hasData(a)){var c,d,e,f=m._data(a),g=m._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)m.event.add(b,c,h[c][d])}g.data&&(g.data=m.extend({},g.data))}}function Ba(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!k.noCloneEvent&&b[m.expando]){e=m._data(b);for(d in e.events)m.removeEvent(b,d,e.handle);b.removeAttribute(m.expando)}"script"===c&&b.text!==a.text?(xa(b).text=a.text,ya(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),k.html5Clone&&a.innerHTML&&!m.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&W.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}m.extend({clone:function(a,b,c){var d,e,f,g,h,i=m.contains(a.ownerDocument,a);if(k.html5Clone||m.isXMLDoc(a)||!ga.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(ta.innerHTML=a.outerHTML,ta.removeChild(f=ta.firstChild)),!(k.noCloneEvent&&k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||m.isXMLDoc(a)))for(d=ua(f),h=ua(a),g=0;null!=(e=h[g]);++g)d[g]&&Ba(e,d[g]);if(b)if(c)for(h=h||ua(a),d=d||ua(f),g=0;null!=(e=h[g]);g++)Aa(e,d[g]);else Aa(a,f);return d=ua(f,"script"),d.length>0&&za(d,!i&&ua(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,l,n=a.length,o=da(b),p=[],q=0;n>q;q++)if(f=a[q],f||0===f)if("object"===m.type(f))m.merge(p,f.nodeType?[f]:f);else if(la.test(f)){h=h||o.appendChild(b.createElement("div")),i=(ja.exec(f)||["",""])[1].toLowerCase(),l=ra[i]||ra._default,h.innerHTML=l[1]+f.replace(ia,"<$1></$2>")+l[2],e=l[0];while(e--)h=h.lastChild;if(!k.leadingWhitespace&&ha.test(f)&&p.push(b.createTextNode(ha.exec(f)[0])),!k.tbody){f="table"!==i||ka.test(f)?"<table>"!==l[1]||ka.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)m.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}m.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),k.appendChecked||m.grep(ua(p,"input"),va),q=0;while(f=p[q++])if((!d||-1===m.inArray(f,d))&&(g=m.contains(f.ownerDocument,f),h=ua(o.appendChild(f),"script"),g&&za(h),c)){e=0;while(f=h[e++])oa.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=m.expando,j=m.cache,l=k.deleteExpando,n=m.event.special;null!=(d=a[h]);h++)if((b||m.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)n[e]?m.event.remove(d,e):m.removeEvent(d,e,g.handle);j[f]&&(delete j[f],l?delete d[i]:typeof d.removeAttribute!==K?d.removeAttribute(i):d[i]=null,c.push(f))}}}),m.fn.extend({text:function(a){return V(this,function(a){return void 0===a?m.text(this):this.empty().append((this[0]&&this[0].ownerDocument||y).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wa(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wa(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?m.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||m.cleanData(ua(c)),c.parentNode&&(b&&m.contains(c.ownerDocument,c)&&za(ua(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&m.cleanData(ua(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&m.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return m.clone(this,a,b)})},html:function(a){return V(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(fa,""):void 0;if(!("string"!=typeof a||ma.test(a)||!k.htmlSerialize&&ga.test(a)||!k.leadingWhitespace&&ha.test(a)||ra[(ja.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(ia,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(m.cleanData(ua(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,m.cleanData(ua(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,n=this,o=l-1,p=a[0],q=m.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&na.test(p))return this.each(function(c){var d=n.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(i=m.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=m.map(ua(i,"script"),xa),f=g.length;l>j;j++)d=i,j!==o&&(d=m.clone(d,!0,!0),f&&m.merge(g,ua(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,m.map(g,ya),j=0;f>j;j++)d=g[j],oa.test(d.type||"")&&!m._data(d,"globalEval")&&m.contains(h,d)&&(d.src?m._evalUrl&&m._evalUrl(d.src):m.globalEval((d.text||d.textContent||d.innerHTML||"").replace(qa,"")));i=c=null}return this}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){m.fn[a]=function(a){for(var c,d=0,e=[],g=m(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),m(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Ca,Da={};function Ea(b,c){var d,e=m(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:m.css(e[0],"display");return e.detach(),f}function Fa(a){var b=y,c=Da[a];return c||(c=Ea(a,b),"none"!==c&&c||(Ca=(Ca||m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Ca[0].contentWindow||Ca[0].contentDocument).document,b.write(),b.close(),c=Ea(a,b),Ca.detach()),Da[a]=c),c}!function(){var a;k.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,d;return c=y.getElementsByTagName("body")[0],c&&c.style?(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(y.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0}}();var Ga=/^margin/,Ha=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ia,Ja,Ka=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ia=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)},Ja=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ia(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||m.contains(a.ownerDocument,a)||(g=m.style(a,b)),Ha.test(g)&&Ga.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):y.documentElement.currentStyle&&(Ia=function(a){return a.currentStyle},Ja=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ia(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Ha.test(g)&&!Ka.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function La(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h;if(b=y.createElement("div"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=d&&d.style){c.cssText="float:left;opacity:.5",k.opacity="0.5"===c.opacity,k.cssFloat=!!c.cssFloat,b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===b.style.backgroundClip,k.boxSizing=""===c.boxSizing||""===c.MozBoxSizing||""===c.WebkitBoxSizing,m.extend(k,{reliableHiddenOffsets:function(){return null==g&&i(),g},boxSizingReliable:function(){return null==f&&i(),f},pixelPosition:function(){return null==e&&i(),e},reliableMarginRight:function(){return null==h&&i(),h}});function i(){var b,c,d,i;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),b.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",e=f=!1,h=!0,a.getComputedStyle&&(e="1%"!==(a.getComputedStyle(b,null)||{}).top,f="4px"===(a.getComputedStyle(b,null)||{width:"4px"}).width,i=b.appendChild(y.createElement("div")),i.style.cssText=b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",b.style.width="1px",h=!parseFloat((a.getComputedStyle(i,null)||{}).marginRight),b.removeChild(i)),b.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=b.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",g=0===i[0].offsetHeight,g&&(i[0].style.display="",i[1].style.display="none",g=0===i[0].offsetHeight),c.removeChild(d))}}}(),m.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Ma=/alpha\([^)]*\)/i,Na=/opacity\s*=\s*([^)]*)/,Oa=/^(none|table(?!-c[ea]).+)/,Pa=new RegExp("^("+S+")(.*)$","i"),Qa=new RegExp("^([+-])=("+S+")","i"),Ra={position:"absolute",visibility:"hidden",display:"block"},Sa={letterSpacing:"0",fontWeight:"400"},Ta=["Webkit","O","Moz","ms"];function Ua(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Ta.length;while(e--)if(b=Ta[e]+c,b in a)return b;return d}function Va(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=m._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&U(d)&&(f[g]=m._data(d,"olddisplay",Fa(d.nodeName)))):(e=U(d),(c&&"none"!==c||!e)&&m._data(d,"olddisplay",e?c:m.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Wa(a,b,c){var d=Pa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Xa(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=m.css(a,c+T[f],!0,e)),d?("content"===c&&(g-=m.css(a,"padding"+T[f],!0,e)),"margin"!==c&&(g-=m.css(a,"border"+T[f]+"Width",!0,e))):(g+=m.css(a,"padding"+T[f],!0,e),"padding"!==c&&(g+=m.css(a,"border"+T[f]+"Width",!0,e)));return g}function Ya(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ia(a),g=k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Ja(a,b,f),(0>e||null==e)&&(e=a.style[b]),Ha.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Xa(a,b,c||(g?"border":"content"),d,f)+"px"}m.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Ja(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":k.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=m.camelCase(b),i=a.style;if(b=m.cssProps[h]||(m.cssProps[h]=Ua(i,h)),g=m.cssHooks[b]||m.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Qa.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(m.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||m.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=m.camelCase(b);return b=m.cssProps[h]||(m.cssProps[h]=Ua(a.style,h)),g=m.cssHooks[b]||m.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Ja(a,b,d)),"normal"===f&&b in Sa&&(f=Sa[b]),""===c||c?(e=parseFloat(f),c===!0||m.isNumeric(e)?e||0:f):f}}),m.each(["height","width"],function(a,b){m.cssHooks[b]={get:function(a,c,d){return c?Oa.test(m.css(a,"display"))&&0===a.offsetWidth?m.swap(a,Ra,function(){return Ya(a,b,d)}):Ya(a,b,d):void 0},set:function(a,c,d){var e=d&&Ia(a);return Wa(a,c,d?Xa(a,b,d,k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,e),e):0)}}}),k.opacity||(m.cssHooks.opacity={get:function(a,b){return Na.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=m.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===m.trim(f.replace(Ma,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Ma.test(f)?f.replace(Ma,e):f+" "+e)}}),m.cssHooks.marginRight=La(k.reliableMarginRight,function(a,b){return b?m.swap(a,{display:"inline-block"},Ja,[a,"marginRight"]):void 0}),m.each({margin:"",padding:"",border:"Width"},function(a,b){m.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+T[d]+b]=f[d]||f[d-2]||f[0];return e}},Ga.test(a)||(m.cssHooks[a+b].set=Wa)}),m.fn.extend({css:function(a,b){return V(this,function(a,b,c){var d,e,f={},g=0;if(m.isArray(b)){for(d=Ia(a),e=b.length;e>g;g++)f[b[g]]=m.css(a,b[g],!1,d);return f}return void 0!==c?m.style(a,b,c):m.css(a,b)},a,b,arguments.length>1)},show:function(){return Va(this,!0)},hide:function(){return Va(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){U(this)?m(this).show():m(this).hide()})}});function Za(a,b,c,d,e){
return new Za.prototype.init(a,b,c,d,e)}m.Tween=Za,Za.prototype={constructor:Za,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(m.cssNumber[c]?"":"px")},cur:function(){var a=Za.propHooks[this.prop];return a&&a.get?a.get(this):Za.propHooks._default.get(this)},run:function(a){var b,c=Za.propHooks[this.prop];return this.options.duration?this.pos=b=m.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Za.propHooks._default.set(this),this}},Za.prototype.init.prototype=Za.prototype,Za.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=m.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){m.fx.step[a.prop]?m.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[m.cssProps[a.prop]]||m.cssHooks[a.prop])?m.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Za.propHooks.scrollTop=Za.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},m.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},m.fx=Za.prototype.init,m.fx.step={};var $a,_a,ab=/^(?:toggle|show|hide)$/,bb=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),cb=/queueHooks$/,db=[ib],eb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=bb.exec(b),f=e&&e[3]||(m.cssNumber[a]?"":"px"),g=(m.cssNumber[a]||"px"!==f&&+d)&&bb.exec(m.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,m.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function fb(){return setTimeout(function(){$a=void 0}),$a=m.now()}function gb(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=T[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function hb(a,b,c){for(var d,e=(eb[b]||[]).concat(eb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ib(a,b,c){var d,e,f,g,h,i,j,l,n=this,o={},p=a.style,q=a.nodeType&&U(a),r=m._data(a,"fxshow");c.queue||(h=m._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,n.always(function(){n.always(function(){h.unqueued--,m.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=m.css(a,"display"),l="none"===j?m._data(a,"olddisplay")||Fa(a.nodeName):j,"inline"===l&&"none"===m.css(a,"float")&&(k.inlineBlockNeedsLayout&&"inline"!==Fa(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",k.shrinkWrapBlocks()||n.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],ab.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||m.style(a,d)}else j=void 0;if(m.isEmptyObject(o))"inline"===("none"===j?Fa(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=m._data(a,"fxshow",{}),f&&(r.hidden=!q),q?m(a).show():n.done(function(){m(a).hide()}),n.done(function(){var b;m._removeData(a,"fxshow");for(b in o)m.style(a,b,o[b])});for(d in o)g=hb(q?r[d]:0,d,n),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function jb(a,b){var c,d,e,f,g;for(c in a)if(d=m.camelCase(c),e=b[d],f=a[c],m.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=m.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kb(a,b,c){var d,e,f=0,g=db.length,h=m.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=$a||fb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:m.extend({},b),opts:m.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:$a||fb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=m.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jb(k,j.opts.specialEasing);g>f;f++)if(d=db[f].call(j,a,k,j.opts))return d;return m.map(k,hb,j),m.isFunction(j.opts.start)&&j.opts.start.call(a,j),m.fx.timer(m.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}m.Animation=m.extend(kb,{tweener:function(a,b){m.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],eb[c]=eb[c]||[],eb[c].unshift(b)},prefilter:function(a,b){b?db.unshift(a):db.push(a)}}),m.speed=function(a,b,c){var d=a&&"object"==typeof a?m.extend({},a):{complete:c||!c&&b||m.isFunction(a)&&a,duration:a,easing:c&&b||b&&!m.isFunction(b)&&b};return d.duration=m.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in m.fx.speeds?m.fx.speeds[d.duration]:m.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){m.isFunction(d.old)&&d.old.call(this),d.queue&&m.dequeue(this,d.queue)},d},m.fn.extend({fadeTo:function(a,b,c,d){return this.filter(U).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=m.isEmptyObject(a),f=m.speed(b,c,d),g=function(){var b=kb(this,m.extend({},a),f);(e||m._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=m.timers,g=m._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&cb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&m.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=m._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=m.timers,g=d?d.length:0;for(c.finish=!0,m.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),m.each(["toggle","show","hide"],function(a,b){var c=m.fn[b];m.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gb(b,!0),a,d,e)}}),m.each({slideDown:gb("show"),slideUp:gb("hide"),slideToggle:gb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){m.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),m.timers=[],m.fx.tick=function(){var a,b=m.timers,c=0;for($a=m.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||m.fx.stop(),$a=void 0},m.fx.timer=function(a){m.timers.push(a),a()?m.fx.start():m.timers.pop()},m.fx.interval=13,m.fx.start=function(){_a||(_a=setInterval(m.fx.tick,m.fx.interval))},m.fx.stop=function(){clearInterval(_a),_a=null},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(a,b){return a=m.fx?m.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e;b=y.createElement("div"),b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=y.createElement("select"),e=c.appendChild(y.createElement("option")),a=b.getElementsByTagName("input")[0],d.style.cssText="top:1px",k.getSetAttribute="t"!==b.className,k.style=/top/.test(d.getAttribute("style")),k.hrefNormalized="/a"===d.getAttribute("href"),k.checkOn=!!a.value,k.optSelected=e.selected,k.enctype=!!y.createElement("form").enctype,c.disabled=!0,k.optDisabled=!e.disabled,a=y.createElement("input"),a.setAttribute("value",""),k.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),k.radioValue="t"===a.value}();var lb=/\r/g;m.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=m.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,m(this).val()):a,null==e?e="":"number"==typeof e?e+="":m.isArray(e)&&(e=m.map(e,function(a){return null==a?"":a+""})),b=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=m.valHooks[e.type]||m.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(lb,""):null==c?"":c)}}}),m.extend({valHooks:{option:{get:function(a){var b=m.find.attr(a,"value");return null!=b?b:m.trim(m.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&m.nodeName(c.parentNode,"optgroup"))){if(b=m(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=m.makeArray(b),g=e.length;while(g--)if(d=e[g],m.inArray(m.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(a,b){return m.isArray(b)?a.checked=m.inArray(m(a).val(),b)>=0:void 0}},k.checkOn||(m.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var mb,nb,ob=m.expr.attrHandle,pb=/^(?:checked|selected)$/i,qb=k.getSetAttribute,rb=k.input;m.fn.extend({attr:function(a,b){return V(this,m.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){m.removeAttr(this,a)})}}),m.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===K?m.prop(a,b,c):(1===f&&m.isXMLDoc(a)||(b=b.toLowerCase(),d=m.attrHooks[b]||(m.expr.match.bool.test(b)?nb:mb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=m.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void m.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=m.propFix[c]||c,m.expr.match.bool.test(c)?rb&&qb||!pb.test(c)?a[d]=!1:a[m.camelCase("default-"+c)]=a[d]=!1:m.attr(a,c,""),a.removeAttribute(qb?c:d)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&m.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),nb={set:function(a,b,c){return b===!1?m.removeAttr(a,c):rb&&qb||!pb.test(c)?a.setAttribute(!qb&&m.propFix[c]||c,c):a[m.camelCase("default-"+c)]=a[c]=!0,c}},m.each(m.expr.match.bool.source.match(/\w+/g),function(a,b){var c=ob[b]||m.find.attr;ob[b]=rb&&qb||!pb.test(b)?function(a,b,d){var e,f;return d||(f=ob[b],ob[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,ob[b]=f),e}:function(a,b,c){return c?void 0:a[m.camelCase("default-"+b)]?b.toLowerCase():null}}),rb&&qb||(m.attrHooks.value={set:function(a,b,c){return m.nodeName(a,"input")?void(a.defaultValue=b):mb&&mb.set(a,b,c)}}),qb||(mb={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},ob.id=ob.name=ob.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},m.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:mb.set},m.attrHooks.contenteditable={set:function(a,b,c){mb.set(a,""===b?!1:b,c)}},m.each(["width","height"],function(a,b){m.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),k.style||(m.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var sb=/^(?:input|select|textarea|button|object)$/i,tb=/^(?:a|area)$/i;m.fn.extend({prop:function(a,b){return V(this,m.prop,a,b,arguments.length>1)},removeProp:function(a){return a=m.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),m.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!m.isXMLDoc(a),f&&(b=m.propFix[b]||b,e=m.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=m.find.attr(a,"tabindex");return b?parseInt(b,10):sb.test(a.nodeName)||tb.test(a.nodeName)&&a.href?0:-1}}}}),k.hrefNormalized||m.each(["href","src"],function(a,b){m.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),k.optSelected||(m.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this}),k.enctype||(m.propFix.enctype="encoding");var ub=/[\t\r\n\f]/g;m.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ub," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=m.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ub," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?m.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(m.isFunction(a)?function(c){m(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=m(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===K||"boolean"===c)&&(this.className&&m._data(this,"__className__",this.className),this.className=this.className||a===!1?"":m._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ub," ").indexOf(b)>=0)return!0;return!1}}),m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){m.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),m.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var vb=m.now(),wb=/\?/,xb=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;m.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=m.trim(b+"");return e&&!m.trim(e.replace(xb,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():m.error("Invalid JSON: "+b)},m.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||m.error("Invalid XML: "+b),c};var yb,zb,Ab=/#.*$/,Bb=/([?&])_=[^&]*/,Cb=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Db=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Eb=/^(?:GET|HEAD)$/,Fb=/^\/\//,Gb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Hb={},Ib={},Jb="*/".concat("*");try{zb=location.href}catch(Kb){zb=y.createElement("a"),zb.href="",zb=zb.href}yb=Gb.exec(zb.toLowerCase())||[];function Lb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(m.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Mb(a,b,c,d){var e={},f=a===Ib;function g(h){var i;return e[h]=!0,m.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Nb(a,b){var c,d,e=m.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&m.extend(!0,a,c),a}function Ob(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Pb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:zb,type:"GET",isLocal:Db.test(yb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Jb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":m.parseJSON,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Nb(Nb(a,m.ajaxSettings),b):Nb(m.ajaxSettings,a)},ajaxPrefilter:Lb(Hb),ajaxTransport:Lb(Ib),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=m.ajaxSetup({},b),l=k.context||k,n=k.context&&(l.nodeType||l.jquery)?m(l):m.event,o=m.Deferred(),p=m.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Cb.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||zb)+"").replace(Ab,"").replace(Fb,yb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=m.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(c=Gb.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===yb[1]&&c[2]===yb[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(yb[3]||("http:"===yb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=m.param(k.data,k.traditional)),Mb(Hb,k,b,v),2===t)return v;h=m.event&&k.global,h&&0===m.active++&&m.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Eb.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(wb.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Bb.test(e)?e.replace(Bb,"$1_="+vb++):e+(wb.test(e)?"&":"?")+"_="+vb++)),k.ifModified&&(m.lastModified[e]&&v.setRequestHeader("If-Modified-Since",m.lastModified[e]),m.etag[e]&&v.setRequestHeader("If-None-Match",m.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Jb+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Mb(Ib,k,b,v)){v.readyState=1,h&&n.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Ob(k,v,c)),u=Pb(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(m.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(m.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&n.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(n.trigger("ajaxComplete",[v,k]),--m.active||m.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return m.get(a,b,c,"json")},getScript:function(a,b){return m.get(a,void 0,b,"script")}}),m.each(["get","post"],function(a,b){m[b]=function(a,c,d,e){return m.isFunction(c)&&(e=e||d,d=c,c=void 0),m.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),m._evalUrl=function(a){return m.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},m.fn.extend({wrapAll:function(a){if(m.isFunction(a))return this.each(function(b){m(this).wrapAll(a.call(this,b))});if(this[0]){var b=m(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(m.isFunction(a)?function(b){m(this).wrapInner(a.call(this,b))}:function(){var b=m(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=m.isFunction(a);return this.each(function(c){m(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){m.nodeName(this,"body")||m(this).replaceWith(this.childNodes)}).end()}}),m.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!k.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||m.css(a,"display"))},m.expr.filters.visible=function(a){return!m.expr.filters.hidden(a)};var Qb=/%20/g,Rb=/\[\]$/,Sb=/\r?\n/g,Tb=/^(?:submit|button|image|reset|file)$/i,Ub=/^(?:input|select|textarea|keygen)/i;function Vb(a,b,c,d){var e;if(m.isArray(b))m.each(b,function(b,e){c||Rb.test(a)?d(a,e):Vb(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==m.type(b))d(a,b);else for(e in b)Vb(a+"["+e+"]",b[e],c,d)}m.param=function(a,b){var c,d=[],e=function(a,b){b=m.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=m.ajaxSettings&&m.ajaxSettings.traditional),m.isArray(a)||a.jquery&&!m.isPlainObject(a))m.each(a,function(){e(this.name,this.value)});else for(c in a)Vb(c,a[c],b,e);return d.join("&").replace(Qb,"+")},m.fn.extend({serialize:function(){return m.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=m.prop(this,"elements");return a?m.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!m(this).is(":disabled")&&Ub.test(this.nodeName)&&!Tb.test(a)&&(this.checked||!W.test(a))}).map(function(a,b){var c=m(this).val();return null==c?null:m.isArray(c)?m.map(c,function(a){return{name:b.name,value:a.replace(Sb,"\r\n")}}):{name:b.name,value:c.replace(Sb,"\r\n")}}).get()}}),m.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&Zb()||$b()}:Zb;var Wb=0,Xb={},Yb=m.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Xb)Xb[a](void 0,!0)}),k.cors=!!Yb&&"withCredentials"in Yb,Yb=k.ajax=!!Yb,Yb&&m.ajaxTransport(function(a){if(!a.crossDomain||k.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Wb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Xb[g],b=void 0,f.onreadystatechange=m.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Xb[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function Zb(){try{return new a.XMLHttpRequest}catch(b){}}function $b(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return m.globalEval(a),a}}}),m.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),m.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=y.head||m("head")[0]||y.documentElement;return{send:function(d,e){b=y.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var _b=[],ac=/(=)\?(?=&|$)|\?\?/;m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=_b.pop()||m.expando+"_"+vb++;return this[a]=!0,a}}),m.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(ac.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&ac.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=m.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(ac,"$1"+e):b.jsonp!==!1&&(b.url+=(wb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||m.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,_b.push(e)),g&&m.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),m.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||y;var d=u.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=m.buildFragment([a],b,e),e&&e.length&&m(e).remove(),m.merge([],d.childNodes))};var bc=m.fn.load;m.fn.load=function(a,b,c){if("string"!=typeof a&&bc)return bc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=m.trim(a.slice(h,a.length)),a=a.slice(0,h)),m.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&m.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?m("<div>").append(m.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){m.fn[b]=function(a){return this.on(b,a)}}),m.expr.filters.animated=function(a){return m.grep(m.timers,function(b){return a===b.elem}).length};var cc=a.document.documentElement;function dc(a){return m.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}m.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=m.css(a,"position"),l=m(a),n={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=m.css(a,"top"),i=m.css(a,"left"),j=("absolute"===k||"fixed"===k)&&m.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),m.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(n.top=b.top-h.top+g),null!=b.left&&(n.left=b.left-h.left+e),"using"in b?b.using.call(a,n):l.css(n)}},m.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){m.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,m.contains(b,e)?(typeof e.getBoundingClientRect!==K&&(d=e.getBoundingClientRect()),c=dc(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===m.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),m.nodeName(a[0],"html")||(c=a.offset()),c.top+=m.css(a[0],"borderTopWidth",!0),c.left+=m.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-m.css(d,"marginTop",!0),left:b.left-c.left-m.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||cc;while(a&&!m.nodeName(a,"html")&&"static"===m.css(a,"position"))a=a.offsetParent;return a||cc})}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);m.fn[a]=function(d){return V(this,function(a,d,e){var f=dc(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?m(f).scrollLeft():e,c?e:m(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),m.each(["top","left"],function(a,b){m.cssHooks[b]=La(k.pixelPosition,function(a,c){return c?(c=Ja(a,b),Ha.test(c)?m(a).position()[b]+"px":c):void 0})}),m.each({Height:"height",Width:"width"},function(a,b){m.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){m.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return V(this,function(b,c,d){var e;return m.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?m.css(b,c,g):m.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),m.fn.size=function(){return this.length},m.fn.andSelf=m.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return m});var ec=a.jQuery,fc=a.$;return m.noConflict=function(b){return a.$===m&&(a.$=fc),b&&a.jQuery===m&&(a.jQuery=ec),m},typeof b===K&&(a.jQuery=a.$=m),m});
//# sourceMappingURL=jquery.min.map
/*!
 * Bootstrap v3.3.5 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */

if (typeof jQuery === 'undefined') {
  throw new Error('Bootstrap\'s JavaScript requires jQuery')
}

+function ($) {
  'use strict';
  var version = $.fn.jquery.split(' ')[0].split('.')
  if ((version[0] < 2 && version[1] < 9) || (version[0] == 1 && version[1] == 9 && version[2] < 1)) {
    throw new Error('Bootstrap\'s JavaScript requires jQuery version 1.9.1 or higher')
  }
}(jQuery);

/* ========================================================================
 * Bootstrap: transition.js v3.3.5
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
  // ============================================================

  function transitionEnd() {
    var el = document.createElement('bootstrap')

    var transEndEventNames = {
      WebkitTransition : 'webkitTransitionEnd',
      MozTransition    : 'transitionend',
      OTransition      : 'oTransitionEnd otransitionend',
      transition       : 'transitionend'
    }

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return { end: transEndEventNames[name] }
      }
    }

    return false // explicit for ie8 (  ._.)
  }

  // http://blog.alexmaccaw.com/css-transitions
  $.fn.emulateTransitionEnd = function (duration) {
    var called = false
    var $el = this
    $(this).one('bsTransitionEnd', function () { called = true })
    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
    setTimeout(callback, duration)
    return this
  }

  $(function () {
    $.support.transition = transitionEnd()

    if (!$.support.transition) return

    $.event.special.bsTransitionEnd = {
      bindType: $.support.transition.end,
      delegateType: $.support.transition.end,
      handle: function (e) {
        if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
      }
    }
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: alert.js v3.3.5
 * http://getbootstrap.com/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // ALERT CLASS DEFINITION
  // ======================

  var dismiss = '[data-dismiss="alert"]'
  var Alert   = function (el) {
    $(el).on('click', dismiss, this.close)
  }

  Alert.VERSION = '3.3.5'

  Alert.TRANSITION_DURATION = 150

  Alert.prototype.close = function (e) {
    var $this    = $(this)
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = $(selector)

    if (e) e.preventDefault()

    if (!$parent.length) {
      $parent = $this.closest('.alert')
    }

    $parent.trigger(e = $.Event('close.bs.alert'))

    if (e.isDefaultPrevented()) return

    $parent.removeClass('in')

    function removeElement() {
      // detach from parent, fire event then clean up data
      $parent.detach().trigger('closed.bs.alert').remove()
    }

    $.support.transition && $parent.hasClass('fade') ?
      $parent
        .one('bsTransitionEnd', removeElement)
        .emulateTransitionEnd(Alert.TRANSITION_DURATION) :
      removeElement()
  }


  // ALERT PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.alert')

      if (!data) $this.data('bs.alert', (data = new Alert(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.alert

  $.fn.alert             = Plugin
  $.fn.alert.Constructor = Alert


  // ALERT NO CONFLICT
  // =================

  $.fn.alert.noConflict = function () {
    $.fn.alert = old
    return this
  }


  // ALERT DATA-API
  // ==============

  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)

}(jQuery);

/* ========================================================================
 * Bootstrap: button.js v3.3.5
 * http://getbootstrap.com/javascript/#buttons
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // BUTTON PUBLIC CLASS DEFINITION
  // ==============================

  var Button = function (element, options) {
    this.$element  = $(element)
    this.options   = $.extend({}, Button.DEFAULTS, options)
    this.isLoading = false
  }

  Button.VERSION  = '3.3.5'

  Button.DEFAULTS = {
    loadingText: 'loading...'
  }

  Button.prototype.setState = function (state) {
    var d    = 'disabled'
    var $el  = this.$element
    var val  = $el.is('input') ? 'val' : 'html'
    var data = $el.data()

    state += 'Text'

    if (data.resetText == null) $el.data('resetText', $el[val]())

    // push to event loop to allow forms to submit
    setTimeout($.proxy(function () {
      $el[val](data[state] == null ? this.options[state] : data[state])

      if (state == 'loadingText') {
        this.isLoading = true
        $el.addClass(d).attr(d, d)
      } else if (this.isLoading) {
        this.isLoading = false
        $el.removeClass(d).removeAttr(d)
      }
    }, this), 0)
  }

  Button.prototype.toggle = function () {
    var changed = true
    var $parent = this.$element.closest('[data-toggle="buttons"]')

    if ($parent.length) {
      var $input = this.$element.find('input')
      if ($input.prop('type') == 'radio') {
        if ($input.prop('checked')) changed = false
        $parent.find('.active').removeClass('active')
        this.$element.addClass('active')
      } else if ($input.prop('type') == 'checkbox') {
        if (($input.prop('checked')) !== this.$element.hasClass('active')) changed = false
        this.$element.toggleClass('active')
      }
      $input.prop('checked', this.$element.hasClass('active'))
      if (changed) $input.trigger('change')
    } else {
      this.$element.attr('aria-pressed', !this.$element.hasClass('active'))
      this.$element.toggleClass('active')
    }
  }


  // BUTTON PLUGIN DEFINITION
  // ========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.button')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.button', (data = new Button(this, options)))

      if (option == 'toggle') data.toggle()
      else if (option) data.setState(option)
    })
  }

  var old = $.fn.button

  $.fn.button             = Plugin
  $.fn.button.Constructor = Button


  // BUTTON NO CONFLICT
  // ==================

  $.fn.button.noConflict = function () {
    $.fn.button = old
    return this
  }


  // BUTTON DATA-API
  // ===============

  $(document)
    .on('click.bs.button.data-api', '[data-toggle^="button"]', function (e) {
      var $btn = $(e.target)
      if (!$btn.hasClass('btn')) $btn = $btn.closest('.btn')
      Plugin.call($btn, 'toggle')
      if (!($(e.target).is('input[type="radio"]') || $(e.target).is('input[type="checkbox"]'))) e.preventDefault()
    })
    .on('focus.bs.button.data-api blur.bs.button.data-api', '[data-toggle^="button"]', function (e) {
      $(e.target).closest('.btn').toggleClass('focus', /^focus(in)?$/.test(e.type))
    })

}(jQuery);

/* ========================================================================
 * Bootstrap: carousel.js v3.3.5
 * http://getbootstrap.com/javascript/#carousel
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CAROUSEL CLASS DEFINITION
  // =========================

  var Carousel = function (element, options) {
    this.$element    = $(element)
    this.$indicators = this.$element.find('.carousel-indicators')
    this.options     = options
    this.paused      = null
    this.sliding     = null
    this.interval    = null
    this.$active     = null
    this.$items      = null

    this.options.keyboard && this.$element.on('keydown.bs.carousel', $.proxy(this.keydown, this))

    this.options.pause == 'hover' && !('ontouchstart' in document.documentElement) && this.$element
      .on('mouseenter.bs.carousel', $.proxy(this.pause, this))
      .on('mouseleave.bs.carousel', $.proxy(this.cycle, this))
  }

  Carousel.VERSION  = '3.3.5'

  Carousel.TRANSITION_DURATION = 600

  Carousel.DEFAULTS = {
    interval: 5000,
    pause: 'hover',
    wrap: true,
    keyboard: true
  }

  Carousel.prototype.keydown = function (e) {
    if (/input|textarea/i.test(e.target.tagName)) return
    switch (e.which) {
      case 37: this.prev(); break
      case 39: this.next(); break
      default: return
    }

    e.preventDefault()
  }

  Carousel.prototype.cycle = function (e) {
    e || (this.paused = false)

    this.interval && clearInterval(this.interval)

    this.options.interval
      && !this.paused
      && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))

    return this
  }

  Carousel.prototype.getItemIndex = function (item) {
    this.$items = item.parent().children('.item')
    return this.$items.index(item || this.$active)
  }

  Carousel.prototype.getItemForDirection = function (direction, active) {
    var activeIndex = this.getItemIndex(active)
    var willWrap = (direction == 'prev' && activeIndex === 0)
                || (direction == 'next' && activeIndex == (this.$items.length - 1))
    if (willWrap && !this.options.wrap) return active
    var delta = direction == 'prev' ? -1 : 1
    var itemIndex = (activeIndex + delta) % this.$items.length
    return this.$items.eq(itemIndex)
  }

  Carousel.prototype.to = function (pos) {
    var that        = this
    var activeIndex = this.getItemIndex(this.$active = this.$element.find('.item.active'))

    if (pos > (this.$items.length - 1) || pos < 0) return

    if (this.sliding)       return this.$element.one('slid.bs.carousel', function () { that.to(pos) }) // yes, "slid"
    if (activeIndex == pos) return this.pause().cycle()

    return this.slide(pos > activeIndex ? 'next' : 'prev', this.$items.eq(pos))
  }

  Carousel.prototype.pause = function (e) {
    e || (this.paused = true)

    if (this.$element.find('.next, .prev').length && $.support.transition) {
      this.$element.trigger($.support.transition.end)
      this.cycle(true)
    }

    this.interval = clearInterval(this.interval)

    return this
  }

  Carousel.prototype.next = function () {
    if (this.sliding) return
    return this.slide('next')
  }

  Carousel.prototype.prev = function () {
    if (this.sliding) return
    return this.slide('prev')
  }

  Carousel.prototype.slide = function (type, next) {
    var $active   = this.$element.find('.item.active')
    var $next     = next || this.getItemForDirection(type, $active)
    var isCycling = this.interval
    var direction = type == 'next' ? 'left' : 'right'
    var that      = this

    if ($next.hasClass('active')) return (this.sliding = false)

    var relatedTarget = $next[0]
    var slideEvent = $.Event('slide.bs.carousel', {
      relatedTarget: relatedTarget,
      direction: direction
    })
    this.$element.trigger(slideEvent)
    if (slideEvent.isDefaultPrevented()) return

    this.sliding = true

    isCycling && this.pause()

    if (this.$indicators.length) {
      this.$indicators.find('.active').removeClass('active')
      var $nextIndicator = $(this.$indicators.children()[this.getItemIndex($next)])
      $nextIndicator && $nextIndicator.addClass('active')
    }

    var slidEvent = $.Event('slid.bs.carousel', { relatedTarget: relatedTarget, direction: direction }) // yes, "slid"
    if ($.support.transition && this.$element.hasClass('slide')) {
      $next.addClass(type)
      $next[0].offsetWidth // force reflow
      $active.addClass(direction)
      $next.addClass(direction)
      $active
        .one('bsTransitionEnd', function () {
          $next.removeClass([type, direction].join(' ')).addClass('active')
          $active.removeClass(['active', direction].join(' '))
          that.sliding = false
          setTimeout(function () {
            that.$element.trigger(slidEvent)
          }, 0)
        })
        .emulateTransitionEnd(Carousel.TRANSITION_DURATION)
    } else {
      $active.removeClass('active')
      $next.addClass('active')
      this.sliding = false
      this.$element.trigger(slidEvent)
    }

    isCycling && this.cycle()

    return this
  }


  // CAROUSEL PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.carousel')
      var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option)
      var action  = typeof option == 'string' ? option : options.slide

      if (!data) $this.data('bs.carousel', (data = new Carousel(this, options)))
      if (typeof option == 'number') data.to(option)
      else if (action) data[action]()
      else if (options.interval) data.pause().cycle()
    })
  }

  var old = $.fn.carousel

  $.fn.carousel             = Plugin
  $.fn.carousel.Constructor = Carousel


  // CAROUSEL NO CONFLICT
  // ====================

  $.fn.carousel.noConflict = function () {
    $.fn.carousel = old
    return this
  }


  // CAROUSEL DATA-API
  // =================

  var clickHandler = function (e) {
    var href
    var $this   = $(this)
    var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) // strip for ie7
    if (!$target.hasClass('carousel')) return
    var options = $.extend({}, $target.data(), $this.data())
    var slideIndex = $this.attr('data-slide-to')
    if (slideIndex) options.interval = false

    Plugin.call($target, options)

    if (slideIndex) {
      $target.data('bs.carousel').to(slideIndex)
    }

    e.preventDefault()
  }

  $(document)
    .on('click.bs.carousel.data-api', '[data-slide]', clickHandler)
    .on('click.bs.carousel.data-api', '[data-slide-to]', clickHandler)

  $(window).on('load', function () {
    $('[data-ride="carousel"]').each(function () {
      var $carousel = $(this)
      Plugin.call($carousel, $carousel.data())
    })
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: collapse.js v3.3.5
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // COLLAPSE PUBLIC CLASS DEFINITION
  // ================================

  var Collapse = function (element, options) {
    this.$element      = $(element)
    this.options       = $.extend({}, Collapse.DEFAULTS, options)
    this.$trigger      = $('[data-toggle="collapse"][href="#' + element.id + '"],' +
                           '[data-toggle="collapse"][data-target="#' + element.id + '"]')
    this.transitioning = null

    if (this.options.parent) {
      this.$parent = this.getParent()
    } else {
      this.addAriaAndCollapsedClass(this.$element, this.$trigger)
    }

    if (this.options.toggle) this.toggle()
  }

  Collapse.VERSION  = '3.3.5'

  Collapse.TRANSITION_DURATION = 350

  Collapse.DEFAULTS = {
    toggle: true
  }

  Collapse.prototype.dimension = function () {
    var hasWidth = this.$element.hasClass('width')
    return hasWidth ? 'width' : 'height'
  }

  Collapse.prototype.show = function () {
    if (this.transitioning || this.$element.hasClass('in')) return

    var activesData
    var actives = this.$parent && this.$parent.children('.panel').children('.in, .collapsing')

    if (actives && actives.length) {
      activesData = actives.data('bs.collapse')
      if (activesData && activesData.transitioning) return
    }

    var startEvent = $.Event('show.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    if (actives && actives.length) {
      Plugin.call(actives, 'hide')
      activesData || actives.data('bs.collapse', null)
    }

    var dimension = this.dimension()

    this.$element
      .removeClass('collapse')
      .addClass('collapsing')[dimension](0)
      .attr('aria-expanded', true)

    this.$trigger
      .removeClass('collapsed')
      .attr('aria-expanded', true)

    this.transitioning = 1

    var complete = function () {
      this.$element
        .removeClass('collapsing')
        .addClass('collapse in')[dimension]('')
      this.transitioning = 0
      this.$element
        .trigger('shown.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    var scrollSize = $.camelCase(['scroll', dimension].join('-'))

    this.$element
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize])
  }

  Collapse.prototype.hide = function () {
    if (this.transitioning || !this.$element.hasClass('in')) return

    var startEvent = $.Event('hide.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var dimension = this.dimension()

    this.$element[dimension](this.$element[dimension]())[0].offsetHeight

    this.$element
      .addClass('collapsing')
      .removeClass('collapse in')
      .attr('aria-expanded', false)

    this.$trigger
      .addClass('collapsed')
      .attr('aria-expanded', false)

    this.transitioning = 1

    var complete = function () {
      this.transitioning = 0
      this.$element
        .removeClass('collapsing')
        .addClass('collapse')
        .trigger('hidden.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    this.$element
      [dimension](0)
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)
  }

  Collapse.prototype.toggle = function () {
    this[this.$element.hasClass('in') ? 'hide' : 'show']()
  }

  Collapse.prototype.getParent = function () {
    return $(this.options.parent)
      .find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]')
      .each($.proxy(function (i, element) {
        var $element = $(element)
        this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element)
      }, this))
      .end()
  }

  Collapse.prototype.addAriaAndCollapsedClass = function ($element, $trigger) {
    var isOpen = $element.hasClass('in')

    $element.attr('aria-expanded', isOpen)
    $trigger
      .toggleClass('collapsed', !isOpen)
      .attr('aria-expanded', isOpen)
  }

  function getTargetFromTrigger($trigger) {
    var href
    var target = $trigger.attr('data-target')
      || (href = $trigger.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') // strip for ie7

    return $(target)
  }


  // COLLAPSE PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.collapse')
      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data && options.toggle && /show|hide/.test(option)) options.toggle = false
      if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.collapse

  $.fn.collapse             = Plugin
  $.fn.collapse.Constructor = Collapse


  // COLLAPSE NO CONFLICT
  // ====================

  $.fn.collapse.noConflict = function () {
    $.fn.collapse = old
    return this
  }


  // COLLAPSE DATA-API
  // =================

  $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) {
    var $this   = $(this)

    if (!$this.attr('data-target')) e.preventDefault()

    var $target = getTargetFromTrigger($this)
    var data    = $target.data('bs.collapse')
    var option  = data ? 'toggle' : $this.data()

    Plugin.call($target, option)
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: dropdown.js v3.3.5
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // DROPDOWN CLASS DEFINITION
  // =========================

  var backdrop = '.dropdown-backdrop'
  var toggle   = '[data-toggle="dropdown"]'
  var Dropdown = function (element) {
    $(element).on('click.bs.dropdown', this.toggle)
  }

  Dropdown.VERSION = '3.3.5'

  function getParent($this) {
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = selector && $(selector)

    return $parent && $parent.length ? $parent : $this.parent()
  }

  function clearMenus(e) {
    if (e && e.which === 3) return
    $(backdrop).remove()
    $(toggle).each(function () {
      var $this         = $(this)
      var $parent       = getParent($this)
      var relatedTarget = { relatedTarget: this }

      if (!$parent.hasClass('open')) return

      if (e && e.type == 'click' && /input|textarea/i.test(e.target.tagName) && $.contains($parent[0], e.target)) return

      $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this.attr('aria-expanded', 'false')
      $parent.removeClass('open').trigger('hidden.bs.dropdown', relatedTarget)
    })
  }

  Dropdown.prototype.toggle = function (e) {
    var $this = $(this)

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    clearMenus()

    if (!isActive) {
      if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
        // if mobile we use a backdrop because click events don't delegate
        $(document.createElement('div'))
          .addClass('dropdown-backdrop')
          .insertAfter($(this))
          .on('click', clearMenus)
      }

      var relatedTarget = { relatedTarget: this }
      $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this
        .trigger('focus')
        .attr('aria-expanded', 'true')

      $parent
        .toggleClass('open')
        .trigger('shown.bs.dropdown', relatedTarget)
    }

    return false
  }

  Dropdown.prototype.keydown = function (e) {
    if (!/(38|40|27|32)/.test(e.which) || /input|textarea/i.test(e.target.tagName)) return

    var $this = $(this)

    e.preventDefault()
    e.stopPropagation()

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    if (!isActive && e.which != 27 || isActive && e.which == 27) {
      if (e.which == 27) $parent.find(toggle).trigger('focus')
      return $this.trigger('click')
    }

    var desc = ' li:not(.disabled):visible a'
    var $items = $parent.find('.dropdown-menu' + desc)

    if (!$items.length) return

    var index = $items.index(e.target)

    if (e.which == 38 && index > 0)                 index--         // up
    if (e.which == 40 && index < $items.length - 1) index++         // down
    if (!~index)                                    index = 0

    $items.eq(index).trigger('focus')
  }


  // DROPDOWN PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.dropdown')

      if (!data) $this.data('bs.dropdown', (data = new Dropdown(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.dropdown

  $.fn.dropdown             = Plugin
  $.fn.dropdown.Constructor = Dropdown


  // DROPDOWN NO CONFLICT
  // ====================

  $.fn.dropdown.noConflict = function () {
    $.fn.dropdown = old
    return this
  }


  // APPLY TO STANDARD DROPDOWN ELEMENTS
  // ===================================

  $(document)
    .on('click.bs.dropdown.data-api', clearMenus)
    .on('click.bs.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
    .on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle)
    .on('keydown.bs.dropdown.data-api', toggle, Dropdown.prototype.keydown)
    .on('keydown.bs.dropdown.data-api', '.dropdown-menu', Dropdown.prototype.keydown)

}(jQuery);

/* ========================================================================
 * Bootstrap: modal.js v3.3.5
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // MODAL CLASS DEFINITION
  // ======================

  var Modal = function (element, options) {
    this.options             = options
    this.$body               = $(document.body)
    this.$element            = $(element)
    this.$dialog             = this.$element.find('.modal-dialog')
    this.$backdrop           = null
    this.isShown             = null
    this.originalBodyPad     = null
    this.scrollbarWidth      = 0
    this.ignoreBackdropClick = false

    if (this.options.remote) {
      this.$element
        .find('.modal-content')
        .load(this.options.remote, $.proxy(function () {
          this.$element.trigger('loaded.bs.modal')
        }, this))
    }
  }

  Modal.VERSION  = '3.3.5'

  Modal.TRANSITION_DURATION = 300
  Modal.BACKDROP_TRANSITION_DURATION = 150

  Modal.DEFAULTS = {
    backdrop: true,
    keyboard: true,
    show: true
  }

  Modal.prototype.toggle = function (_relatedTarget) {
    return this.isShown ? this.hide() : this.show(_relatedTarget)
  }

  Modal.prototype.show = function (_relatedTarget) {
    var that = this
    var e    = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })

    this.$element.trigger(e)

    if (this.isShown || e.isDefaultPrevented()) return

    this.isShown = true

    this.checkScrollbar()
    this.setScrollbar()
    this.$body.addClass('modal-open')

    this.escape()
    this.resize()

    this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))

    this.$dialog.on('mousedown.dismiss.bs.modal', function () {
      that.$element.one('mouseup.dismiss.bs.modal', function (e) {
        if ($(e.target).is(that.$element)) that.ignoreBackdropClick = true
      })
    })

    this.backdrop(function () {
      var transition = $.support.transition && that.$element.hasClass('fade')

      if (!that.$element.parent().length) {
        that.$element.appendTo(that.$body) // don't move modals dom position
      }

      that.$element
        .show()
        .scrollTop(0)

      that.adjustDialog()

      if (transition) {
        that.$element[0].offsetWidth // force reflow
      }

      that.$element.addClass('in')

      that.enforceFocus()

      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })

      transition ?
        that.$dialog // wait for modal to slide in
          .one('bsTransitionEnd', function () {
            that.$element.trigger('focus').trigger(e)
          })
          .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
        that.$element.trigger('focus').trigger(e)
    })
  }

  Modal.prototype.hide = function (e) {
    if (e) e.preventDefault()

    e = $.Event('hide.bs.modal')

    this.$element.trigger(e)

    if (!this.isShown || e.isDefaultPrevented()) return

    this.isShown = false

    this.escape()
    this.resize()

    $(document).off('focusin.bs.modal')

    this.$element
      .removeClass('in')
      .off('click.dismiss.bs.modal')
      .off('mouseup.dismiss.bs.modal')

    this.$dialog.off('mousedown.dismiss.bs.modal')

    $.support.transition && this.$element.hasClass('fade') ?
      this.$element
        .one('bsTransitionEnd', $.proxy(this.hideModal, this))
        .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
      this.hideModal()
  }

  Modal.prototype.enforceFocus = function () {
    $(document)
      .off('focusin.bs.modal') // guard against infinite focus loop
      .on('focusin.bs.modal', $.proxy(function (e) {
        if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {
          this.$element.trigger('focus')
        }
      }, this))
  }

  Modal.prototype.escape = function () {
    if (this.isShown && this.options.keyboard) {
      this.$element.on('keydown.dismiss.bs.modal', $.proxy(function (e) {
        e.which == 27 && this.hide()
      }, this))
    } else if (!this.isShown) {
      this.$element.off('keydown.dismiss.bs.modal')
    }
  }

  Modal.prototype.resize = function () {
    if (this.isShown) {
      $(window).on('resize.bs.modal', $.proxy(this.handleUpdate, this))
    } else {
      $(window).off('resize.bs.modal')
    }
  }

  Modal.prototype.hideModal = function () {
    var that = this
    this.$element.hide()
    this.backdrop(function () {
      that.$body.removeClass('modal-open')
      that.resetAdjustments()
      that.resetScrollbar()
      that.$element.trigger('hidden.bs.modal')
    })
  }

  Modal.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove()
    this.$backdrop = null
  }

  Modal.prototype.backdrop = function (callback) {
    var that = this
    var animate = this.$element.hasClass('fade') ? 'fade' : ''

    if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate

      this.$backdrop = $(document.createElement('div'))
        .addClass('modal-backdrop ' + animate)
        .appendTo(this.$body)

      this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
        if (this.ignoreBackdropClick) {
          this.ignoreBackdropClick = false
          return
        }
        if (e.target !== e.currentTarget) return
        this.options.backdrop == 'static'
          ? this.$element[0].focus()
          : this.hide()
      }, this))

      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

      this.$backdrop.addClass('in')

      if (!callback) return

      doAnimate ?
        this.$backdrop
          .one('bsTransitionEnd', callback)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callback()

    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass('in')

      var callbackRemove = function () {
        that.removeBackdrop()
        callback && callback()
      }
      $.support.transition && this.$element.hasClass('fade') ?
        this.$backdrop
          .one('bsTransitionEnd', callbackRemove)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callbackRemove()

    } else if (callback) {
      callback()
    }
  }

  // these following methods are used to handle overflowing modals

  Modal.prototype.handleUpdate = function () {
    this.adjustDialog()
  }

  Modal.prototype.adjustDialog = function () {
    var modalIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeight

    this.$element.css({
      paddingLeft:  !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : '',
      paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : ''
    })
  }

  Modal.prototype.resetAdjustments = function () {
    this.$element.css({
      paddingLeft: '',
      paddingRight: ''
    })
  }

  Modal.prototype.checkScrollbar = function () {
    var fullWindowWidth = window.innerWidth
    if (!fullWindowWidth) { // workaround for missing window.innerWidth in IE8
      var documentElementRect = document.documentElement.getBoundingClientRect()
      fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left)
    }
    this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth
    this.scrollbarWidth = this.measureScrollbar()
  }

  Modal.prototype.setScrollbar = function () {
    var bodyPad = parseInt((this.$body.css('padding-right') || 0), 10)
    this.originalBodyPad = document.body.style.paddingRight || ''
    if (this.bodyIsOverflowing) this.$body.css('padding-right', bodyPad + this.scrollbarWidth)
  }

  Modal.prototype.resetScrollbar = function () {
    this.$body.css('padding-right', this.originalBodyPad)
  }

  Modal.prototype.measureScrollbar = function () { // thx walsh
    var scrollDiv = document.createElement('div')
    scrollDiv.className = 'modal-scrollbar-measure'
    this.$body.append(scrollDiv)
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
    this.$body[0].removeChild(scrollDiv)
    return scrollbarWidth
  }


  // MODAL PLUGIN DEFINITION
  // =======================

  function Plugin(option, _relatedTarget) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.modal')
      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option](_relatedTarget)
      else if (options.show) data.show(_relatedTarget)
    })
  }

  var old = $.fn.modal

  $.fn.modal             = Plugin
  $.fn.modal.Constructor = Modal


  // MODAL NO CONFLICT
  // =================

  $.fn.modal.noConflict = function () {
    $.fn.modal = old
    return this
  }


  // MODAL DATA-API
  // ==============

  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this   = $(this)
    var href    = $this.attr('href')
    var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) // strip for ie7
    var option  = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())

    if ($this.is('a')) e.preventDefault()

    $target.one('show.bs.modal', function (showEvent) {
      if (showEvent.isDefaultPrevented()) return // only register focus restorer if modal will actually get shown
      $target.one('hidden.bs.modal', function () {
        $this.is(':visible') && $this.trigger('focus')
      })
    })
    Plugin.call($target, option, this)
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: tooltip.js v3.3.5
 * http://getbootstrap.com/javascript/#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TOOLTIP PUBLIC CLASS DEFINITION
  // ===============================

  var Tooltip = function (element, options) {
    this.type       = null
    this.options    = null
    this.enabled    = null
    this.timeout    = null
    this.hoverState = null
    this.$element   = null
    this.inState    = null

    this.init('tooltip', element, options)
  }

  Tooltip.VERSION  = '3.3.5'

  Tooltip.TRANSITION_DURATION = 150

  Tooltip.DEFAULTS = {
    animation: true,
    placement: 'top',
    selector: false,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    container: false,
    viewport: {
      selector: 'body',
      padding: 0
    }
  }

  Tooltip.prototype.init = function (type, element, options) {
    this.enabled   = true
    this.type      = type
    this.$element  = $(element)
    this.options   = this.getOptions(options)
    this.$viewport = this.options.viewport && $($.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : (this.options.viewport.selector || this.options.viewport))
    this.inState   = { click: false, hover: false, focus: false }

    if (this.$element[0] instanceof document.constructor && !this.options.selector) {
      throw new Error('`selector` option must be specified when initializing ' + this.type + ' on the window.document object!')
    }

    var triggers = this.options.trigger.split(' ')

    for (var i = triggers.length; i--;) {
      var trigger = triggers[i]

      if (trigger == 'click') {
        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
      } else if (trigger != 'manual') {
        var eventIn  = trigger == 'hover' ? 'mouseenter' : 'focusin'
        var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout'

        this.$element.on(eventIn  + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
      }
    }

    this.options.selector ?
      (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
      this.fixTitle()
  }

  Tooltip.prototype.getDefaults = function () {
    return Tooltip.DEFAULTS
  }

  Tooltip.prototype.getOptions = function (options) {
    options = $.extend({}, this.getDefaults(), this.$element.data(), options)

    if (options.delay && typeof options.delay == 'number') {
      options.delay = {
        show: options.delay,
        hide: options.delay
      }
    }

    return options
  }

  Tooltip.prototype.getDelegateOptions = function () {
    var options  = {}
    var defaults = this.getDefaults()

    this._options && $.each(this._options, function (key, value) {
      if (defaults[key] != value) options[key] = value
    })

    return options
  }

  Tooltip.prototype.enter = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    if (obj instanceof $.Event) {
      self.inState[obj.type == 'focusin' ? 'focus' : 'hover'] = true
    }

    if (self.tip().hasClass('in') || self.hoverState == 'in') {
      self.hoverState = 'in'
      return
    }

    clearTimeout(self.timeout)

    self.hoverState = 'in'

    if (!self.options.delay || !self.options.delay.show) return self.show()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'in') self.show()
    }, self.options.delay.show)
  }

  Tooltip.prototype.isInStateTrue = function () {
    for (var key in this.inState) {
      if (this.inState[key]) return true
    }

    return false
  }

  Tooltip.prototype.leave = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    if (obj instanceof $.Event) {
      self.inState[obj.type == 'focusout' ? 'focus' : 'hover'] = false
    }

    if (self.isInStateTrue()) return

    clearTimeout(self.timeout)

    self.hoverState = 'out'

    if (!self.options.delay || !self.options.delay.hide) return self.hide()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'out') self.hide()
    }, self.options.delay.hide)
  }

  Tooltip.prototype.show = function () {
    var e = $.Event('show.bs.' + this.type)

    if (this.hasContent() && this.enabled) {
      this.$element.trigger(e)

      var inDom = $.contains(this.$element[0].ownerDocument.documentElement, this.$element[0])
      if (e.isDefaultPrevented() || !inDom) return
      var that = this

      var $tip = this.tip()

      var tipId = this.getUID(this.type)

      this.setContent()
      $tip.attr('id', tipId)
      this.$element.attr('aria-describedby', tipId)

      if (this.options.animation) $tip.addClass('fade')

      var placement = typeof this.options.placement == 'function' ?
        this.options.placement.call(this, $tip[0], this.$element[0]) :
        this.options.placement

      var autoToken = /\s?auto?\s?/i
      var autoPlace = autoToken.test(placement)
      if (autoPlace) placement = placement.replace(autoToken, '') || 'top'

      $tip
        .detach()
        .css({ top: 0, left: 0, display: 'block' })
        .addClass(placement)
        .data('bs.' + this.type, this)

      this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)
      this.$element.trigger('inserted.bs.' + this.type)

      var pos          = this.getPosition()
      var actualWidth  = $tip[0].offsetWidth
      var actualHeight = $tip[0].offsetHeight

      if (autoPlace) {
        var orgPlacement = placement
        var viewportDim = this.getPosition(this.$viewport)

        placement = placement == 'bottom' && pos.bottom + actualHeight > viewportDim.bottom ? 'top'    :
                    placement == 'top'    && pos.top    - actualHeight < viewportDim.top    ? 'bottom' :
                    placement == 'right'  && pos.right  + actualWidth  > viewportDim.width  ? 'left'   :
                    placement == 'left'   && pos.left   - actualWidth  < viewportDim.left   ? 'right'  :
                    placement

        $tip
          .removeClass(orgPlacement)
          .addClass(placement)
      }

      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight)

      this.applyPlacement(calculatedOffset, placement)

      var complete = function () {
        var prevHoverState = that.hoverState
        that.$element.trigger('shown.bs.' + that.type)
        that.hoverState = null

        if (prevHoverState == 'out') that.leave(that)
      }

      $.support.transition && this.$tip.hasClass('fade') ?
        $tip
          .one('bsTransitionEnd', complete)
          .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
        complete()
    }
  }

  Tooltip.prototype.applyPlacement = function (offset, placement) {
    var $tip   = this.tip()
    var width  = $tip[0].offsetWidth
    var height = $tip[0].offsetHeight

    // manually read margins because getBoundingClientRect includes difference
    var marginTop = parseInt($tip.css('margin-top'), 10)
    var marginLeft = parseInt($tip.css('margin-left'), 10)

    // we must check for NaN for ie 8/9
    if (isNaN(marginTop))  marginTop  = 0
    if (isNaN(marginLeft)) marginLeft = 0

    offset.top  += marginTop
    offset.left += marginLeft

    // $.fn.offset doesn't round pixel values
    // so we use setOffset directly with our own function B-0
    $.offset.setOffset($tip[0], $.extend({
      using: function (props) {
        $tip.css({
          top: Math.round(props.top),
          left: Math.round(props.left)
        })
      }
    }, offset), 0)

    $tip.addClass('in')

    // check to see if placing tip in new offset caused the tip to resize itself
    var actualWidth  = $tip[0].offsetWidth
    var actualHeight = $tip[0].offsetHeight

    if (placement == 'top' && actualHeight != height) {
      offset.top = offset.top + height - actualHeight
    }

    var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight)

    if (delta.left) offset.left += delta.left
    else offset.top += delta.top

    var isVertical          = /top|bottom/.test(placement)
    var arrowDelta          = isVertical ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight
    var arrowOffsetPosition = isVertical ? 'offsetWidth' : 'offsetHeight'

    $tip.offset(offset)
    this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], isVertical)
  }

  Tooltip.prototype.replaceArrow = function (delta, dimension, isVertical) {
    this.arrow()
      .css(isVertical ? 'left' : 'top', 50 * (1 - delta / dimension) + '%')
      .css(isVertical ? 'top' : 'left', '')
  }

  Tooltip.prototype.setContent = function () {
    var $tip  = this.tip()
    var title = this.getTitle()

    $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
    $tip.removeClass('fade in top bottom left right')
  }

  Tooltip.prototype.hide = function (callback) {
    var that = this
    var $tip = $(this.$tip)
    var e    = $.Event('hide.bs.' + this.type)

    function complete() {
      if (that.hoverState != 'in') $tip.detach()
      that.$element
        .removeAttr('aria-describedby')
        .trigger('hidden.bs.' + that.type)
      callback && callback()
    }

    this.$element.trigger(e)

    if (e.isDefaultPrevented()) return

    $tip.removeClass('in')

    $.support.transition && $tip.hasClass('fade') ?
      $tip
        .one('bsTransitionEnd', complete)
        .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
      complete()

    this.hoverState = null

    return this
  }

  Tooltip.prototype.fixTitle = function () {
    var $e = this.$element
    if ($e.attr('title') || typeof $e.attr('data-original-title') != 'string') {
      $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
    }
  }

  Tooltip.prototype.hasContent = function () {
    return this.getTitle()
  }

  Tooltip.prototype.getPosition = function ($element) {
    $element   = $element || this.$element

    var el     = $element[0]
    var isBody = el.tagName == 'BODY'

    var elRect    = el.getBoundingClientRect()
    if (elRect.width == null) {
      // width and height are missing in IE8, so compute them manually; see https://github.com/twbs/bootstrap/issues/14093
      elRect = $.extend({}, elRect, { width: elRect.right - elRect.left, height: elRect.bottom - elRect.top })
    }
    var elOffset  = isBody ? { top: 0, left: 0 } : $element.offset()
    var scroll    = { scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop() }
    var outerDims = isBody ? { width: $(window).width(), height: $(window).height() } : null

    return $.extend({}, elRect, scroll, outerDims, elOffset)
  }

  Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
    return placement == 'bottom' ? { top: pos.top + pos.height,   left: pos.left + pos.width / 2 - actualWidth / 2 } :
           placement == 'top'    ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2 } :
           placement == 'left'   ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
        /* placement == 'right' */ { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width }

  }

  Tooltip.prototype.getViewportAdjustedDelta = function (placement, pos, actualWidth, actualHeight) {
    var delta = { top: 0, left: 0 }
    if (!this.$viewport) return delta

    var viewportPadding = this.options.viewport && this.options.viewport.padding || 0
    var viewportDimensions = this.getPosition(this.$viewport)

    if (/right|left/.test(placement)) {
      var topEdgeOffset    = pos.top - viewportPadding - viewportDimensions.scroll
      var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight
      if (topEdgeOffset < viewportDimensions.top) { // top overflow
        delta.top = viewportDimensions.top - topEdgeOffset
      } else if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) { // bottom overflow
        delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset
      }
    } else {
      var leftEdgeOffset  = pos.left - viewportPadding
      var rightEdgeOffset = pos.left + viewportPadding + actualWidth
      if (leftEdgeOffset < viewportDimensions.left) { // left overflow
        delta.left = viewportDimensions.left - leftEdgeOffset
      } else if (rightEdgeOffset > viewportDimensions.right) { // right overflow
        delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset
      }
    }

    return delta
  }

  Tooltip.prototype.getTitle = function () {
    var title
    var $e = this.$element
    var o  = this.options

    title = $e.attr('data-original-title')
      || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

    return title
  }

  Tooltip.prototype.getUID = function (prefix) {
    do prefix += ~~(Math.random() * 1000000)
    while (document.getElementById(prefix))
    return prefix
  }

  Tooltip.prototype.tip = function () {
    if (!this.$tip) {
      this.$tip = $(this.options.template)
      if (this.$tip.length != 1) {
        throw new Error(this.type + ' `template` option must consist of exactly 1 top-level element!')
      }
    }
    return this.$tip
  }

  Tooltip.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow'))
  }

  Tooltip.prototype.enable = function () {
    this.enabled = true
  }

  Tooltip.prototype.disable = function () {
    this.enabled = false
  }

  Tooltip.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled
  }

  Tooltip.prototype.toggle = function (e) {
    var self = this
    if (e) {
      self = $(e.currentTarget).data('bs.' + this.type)
      if (!self) {
        self = new this.constructor(e.currentTarget, this.getDelegateOptions())
        $(e.currentTarget).data('bs.' + this.type, self)
      }
    }

    if (e) {
      self.inState.click = !self.inState.click
      if (self.isInStateTrue()) self.enter(self)
      else self.leave(self)
    } else {
      self.tip().hasClass('in') ? self.leave(self) : self.enter(self)
    }
  }

  Tooltip.prototype.destroy = function () {
    var that = this
    clearTimeout(this.timeout)
    this.hide(function () {
      that.$element.off('.' + that.type).removeData('bs.' + that.type)
      if (that.$tip) {
        that.$tip.detach()
      }
      that.$tip = null
      that.$arrow = null
      that.$viewport = null
    })
  }


  // TOOLTIP PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.tooltip')
      var options = typeof option == 'object' && option

      if (!data && /destroy|hide/.test(option)) return
      if (!data) $this.data('bs.tooltip', (data = new Tooltip(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tooltip

  $.fn.tooltip             = Plugin
  $.fn.tooltip.Constructor = Tooltip


  // TOOLTIP NO CONFLICT
  // ===================

  $.fn.tooltip.noConflict = function () {
    $.fn.tooltip = old
    return this
  }

}(jQuery);

/* ========================================================================
 * Bootstrap: popover.js v3.3.5
 * http://getbootstrap.com/javascript/#popovers
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // POPOVER PUBLIC CLASS DEFINITION
  // ===============================

  var Popover = function (element, options) {
    this.init('popover', element, options)
  }

  if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js')

  Popover.VERSION  = '3.3.5'

  Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  })


  // NOTE: POPOVER EXTENDS tooltip.js
  // ================================

  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype)

  Popover.prototype.constructor = Popover

  Popover.prototype.getDefaults = function () {
    return Popover.DEFAULTS
  }

  Popover.prototype.setContent = function () {
    var $tip    = this.tip()
    var title   = this.getTitle()
    var content = this.getContent()

    $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
    $tip.find('.popover-content').children().detach().end()[ // we use append for html objects to maintain js events
      this.options.html ? (typeof content == 'string' ? 'html' : 'append') : 'text'
    ](content)

    $tip.removeClass('fade top bottom left right in')

    // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
    // this manually by checking the contents.
    if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide()
  }

  Popover.prototype.hasContent = function () {
    return this.getTitle() || this.getContent()
  }

  Popover.prototype.getContent = function () {
    var $e = this.$element
    var o  = this.options

    return $e.attr('data-content')
      || (typeof o.content == 'function' ?
            o.content.call($e[0]) :
            o.content)
  }

  Popover.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.arrow'))
  }


  // POPOVER PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.popover')
      var options = typeof option == 'object' && option

      if (!data && /destroy|hide/.test(option)) return
      if (!data) $this.data('bs.popover', (data = new Popover(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.popover

  $.fn.popover             = Plugin
  $.fn.popover.Constructor = Popover


  // POPOVER NO CONFLICT
  // ===================

  $.fn.popover.noConflict = function () {
    $.fn.popover = old
    return this
  }

}(jQuery);

/* ========================================================================
 * Bootstrap: scrollspy.js v3.3.5
 * http://getbootstrap.com/javascript/#scrollspy
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // SCROLLSPY CLASS DEFINITION
  // ==========================

  function ScrollSpy(element, options) {
    this.$body          = $(document.body)
    this.$scrollElement = $(element).is(document.body) ? $(window) : $(element)
    this.options        = $.extend({}, ScrollSpy.DEFAULTS, options)
    this.selector       = (this.options.target || '') + ' .nav li > a'
    this.offsets        = []
    this.targets        = []
    this.activeTarget   = null
    this.scrollHeight   = 0

    this.$scrollElement.on('scroll.bs.scrollspy', $.proxy(this.process, this))
    this.refresh()
    this.process()
  }

  ScrollSpy.VERSION  = '3.3.5'

  ScrollSpy.DEFAULTS = {
    offset: 10
  }

  ScrollSpy.prototype.getScrollHeight = function () {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
  }

  ScrollSpy.prototype.refresh = function () {
    var that          = this
    var offsetMethod  = 'offset'
    var offsetBase    = 0

    this.offsets      = []
    this.targets      = []
    this.scrollHeight = this.getScrollHeight()

    if (!$.isWindow(this.$scrollElement[0])) {
      offsetMethod = 'position'
      offsetBase   = this.$scrollElement.scrollTop()
    }

    this.$body
      .find(this.selector)
      .map(function () {
        var $el   = $(this)
        var href  = $el.data('target') || $el.attr('href')
        var $href = /^#./.test(href) && $(href)

        return ($href
          && $href.length
          && $href.is(':visible')
          && [[$href[offsetMethod]().top + offsetBase, href]]) || null
      })
      .sort(function (a, b) { return a[0] - b[0] })
      .each(function () {
        that.offsets.push(this[0])
        that.targets.push(this[1])
      })
  }

  ScrollSpy.prototype.process = function () {
    var scrollTop    = this.$scrollElement.scrollTop() + this.options.offset
    var scrollHeight = this.getScrollHeight()
    var maxScroll    = this.options.offset + scrollHeight - this.$scrollElement.height()
    var offsets      = this.offsets
    var targets      = this.targets
    var activeTarget = this.activeTarget
    var i

    if (this.scrollHeight != scrollHeight) {
      this.refresh()
    }

    if (scrollTop >= maxScroll) {
      return activeTarget != (i = targets[targets.length - 1]) && this.activate(i)
    }

    if (activeTarget && scrollTop < offsets[0]) {
      this.activeTarget = null
      return this.clear()
    }

    for (i = offsets.length; i--;) {
      activeTarget != targets[i]
        && scrollTop >= offsets[i]
        && (offsets[i + 1] === undefined || scrollTop < offsets[i + 1])
        && this.activate(targets[i])
    }
  }

  ScrollSpy.prototype.activate = function (target) {
    this.activeTarget = target

    this.clear()

    var selector = this.selector +
      '[data-target="' + target + '"],' +
      this.selector + '[href="' + target + '"]'

    var active = $(selector)
      .parents('li')
      .addClass('active')

    if (active.parent('.dropdown-menu').length) {
      active = active
        .closest('li.dropdown')
        .addClass('active')
    }

    active.trigger('activate.bs.scrollspy')
  }

  ScrollSpy.prototype.clear = function () {
    $(this.selector)
      .parentsUntil(this.options.target, '.active')
      .removeClass('active')
  }


  // SCROLLSPY PLUGIN DEFINITION
  // ===========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.scrollspy')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.scrollspy', (data = new ScrollSpy(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.scrollspy

  $.fn.scrollspy             = Plugin
  $.fn.scrollspy.Constructor = ScrollSpy


  // SCROLLSPY NO CONFLICT
  // =====================

  $.fn.scrollspy.noConflict = function () {
    $.fn.scrollspy = old
    return this
  }


  // SCROLLSPY DATA-API
  // ==================

  $(window).on('load.bs.scrollspy.data-api', function () {
    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this)
      Plugin.call($spy, $spy.data())
    })
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: tab.js v3.3.5
 * http://getbootstrap.com/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TAB CLASS DEFINITION
  // ====================

  var Tab = function (element) {
    // jscs:disable requireDollarBeforejQueryAssignment
    this.element = $(element)
    // jscs:enable requireDollarBeforejQueryAssignment
  }

  Tab.VERSION = '3.3.5'

  Tab.TRANSITION_DURATION = 150

  Tab.prototype.show = function () {
    var $this    = this.element
    var $ul      = $this.closest('ul:not(.dropdown-menu)')
    var selector = $this.data('target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    if ($this.parent('li').hasClass('active')) return

    var $previous = $ul.find('.active:last a')
    var hideEvent = $.Event('hide.bs.tab', {
      relatedTarget: $this[0]
    })
    var showEvent = $.Event('show.bs.tab', {
      relatedTarget: $previous[0]
    })

    $previous.trigger(hideEvent)
    $this.trigger(showEvent)

    if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) return

    var $target = $(selector)

    this.activate($this.closest('li'), $ul)
    this.activate($target, $target.parent(), function () {
      $previous.trigger({
        type: 'hidden.bs.tab',
        relatedTarget: $this[0]
      })
      $this.trigger({
        type: 'shown.bs.tab',
        relatedTarget: $previous[0]
      })
    })
  }

  Tab.prototype.activate = function (element, container, callback) {
    var $active    = container.find('> .active')
    var transition = callback
      && $.support.transition
      && ($active.length && $active.hasClass('fade') || !!container.find('> .fade').length)

    function next() {
      $active
        .removeClass('active')
        .find('> .dropdown-menu > .active')
          .removeClass('active')
        .end()
        .find('[data-toggle="tab"]')
          .attr('aria-expanded', false)

      element
        .addClass('active')
        .find('[data-toggle="tab"]')
          .attr('aria-expanded', true)

      if (transition) {
        element[0].offsetWidth // reflow for transition
        element.addClass('in')
      } else {
        element.removeClass('fade')
      }

      if (element.parent('.dropdown-menu').length) {
        element
          .closest('li.dropdown')
            .addClass('active')
          .end()
          .find('[data-toggle="tab"]')
            .attr('aria-expanded', true)
      }

      callback && callback()
    }

    $active.length && transition ?
      $active
        .one('bsTransitionEnd', next)
        .emulateTransitionEnd(Tab.TRANSITION_DURATION) :
      next()

    $active.removeClass('in')
  }


  // TAB PLUGIN DEFINITION
  // =====================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.tab')

      if (!data) $this.data('bs.tab', (data = new Tab(this)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tab

  $.fn.tab             = Plugin
  $.fn.tab.Constructor = Tab


  // TAB NO CONFLICT
  // ===============

  $.fn.tab.noConflict = function () {
    $.fn.tab = old
    return this
  }


  // TAB DATA-API
  // ============

  var clickHandler = function (e) {
    e.preventDefault()
    Plugin.call($(this), 'show')
  }

  $(document)
    .on('click.bs.tab.data-api', '[data-toggle="tab"]', clickHandler)
    .on('click.bs.tab.data-api', '[data-toggle="pill"]', clickHandler)

}(jQuery);

/* ========================================================================
 * Bootstrap: affix.js v3.3.5
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // AFFIX CLASS DEFINITION
  // ======================

  var Affix = function (element, options) {
    this.options = $.extend({}, Affix.DEFAULTS, options)

    this.$target = $(this.options.target)
      .on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this))
      .on('click.bs.affix.data-api',  $.proxy(this.checkPositionWithEventLoop, this))

    this.$element     = $(element)
    this.affixed      = null
    this.unpin        = null
    this.pinnedOffset = null

    this.checkPosition()
  }

  Affix.VERSION  = '3.3.5'

  Affix.RESET    = 'affix affix-top affix-bottom'

  Affix.DEFAULTS = {
    offset: 0,
    target: window
  }

  Affix.prototype.getState = function (scrollHeight, height, offsetTop, offsetBottom) {
    var scrollTop    = this.$target.scrollTop()
    var position     = this.$element.offset()
    var targetHeight = this.$target.height()

    if (offsetTop != null && this.affixed == 'top') return scrollTop < offsetTop ? 'top' : false

    if (this.affixed == 'bottom') {
      if (offsetTop != null) return (scrollTop + this.unpin <= position.top) ? false : 'bottom'
      return (scrollTop + targetHeight <= scrollHeight - offsetBottom) ? false : 'bottom'
    }

    var initializing   = this.affixed == null
    var colliderTop    = initializing ? scrollTop : position.top
    var colliderHeight = initializing ? targetHeight : height

    if (offsetTop != null && scrollTop <= offsetTop) return 'top'
    if (offsetBottom != null && (colliderTop + colliderHeight >= scrollHeight - offsetBottom)) return 'bottom'

    return false
  }

  Affix.prototype.getPinnedOffset = function () {
    if (this.pinnedOffset) return this.pinnedOffset
    this.$element.removeClass(Affix.RESET).addClass('affix')
    var scrollTop = this.$target.scrollTop()
    var position  = this.$element.offset()
    return (this.pinnedOffset = position.top - scrollTop)
  }

  Affix.prototype.checkPositionWithEventLoop = function () {
    setTimeout($.proxy(this.checkPosition, this), 1)
  }

  Affix.prototype.checkPosition = function () {
    if (!this.$element.is(':visible')) return

    var height       = this.$element.height()
    var offset       = this.options.offset
    var offsetTop    = offset.top
    var offsetBottom = offset.bottom
    var scrollHeight = Math.max($(document).height(), $(document.body).height())

    if (typeof offset != 'object')         offsetBottom = offsetTop = offset
    if (typeof offsetTop == 'function')    offsetTop    = offset.top(this.$element)
    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom(this.$element)

    var affix = this.getState(scrollHeight, height, offsetTop, offsetBottom)

    if (this.affixed != affix) {
      if (this.unpin != null) this.$element.css('top', '')

      var affixType = 'affix' + (affix ? '-' + affix : '')
      var e         = $.Event(affixType + '.bs.affix')

      this.$element.trigger(e)

      if (e.isDefaultPrevented()) return

      this.affixed = affix
      this.unpin = affix == 'bottom' ? this.getPinnedOffset() : null

      this.$element
        .removeClass(Affix.RESET)
        .addClass(affixType)
        .trigger(affixType.replace('affix', 'affixed') + '.bs.affix')
    }

    if (affix == 'bottom') {
      this.$element.offset({
        top: scrollHeight - height - offsetBottom
      })
    }
  }


  // AFFIX PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.affix')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.affix', (data = new Affix(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.affix

  $.fn.affix             = Plugin
  $.fn.affix.Constructor = Affix


  // AFFIX NO CONFLICT
  // =================

  $.fn.affix.noConflict = function () {
    $.fn.affix = old
    return this
  }


  // AFFIX DATA-API
  // ==============

  $(window).on('load', function () {
    $('[data-spy="affix"]').each(function () {
      var $spy = $(this)
      var data = $spy.data()

      data.offset = data.offset || {}

      if (data.offsetBottom != null) data.offset.bottom = data.offsetBottom
      if (data.offsetTop    != null) data.offset.top    = data.offsetTop

      Plugin.call($spy, data)
    })
  })

}(jQuery);
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.CodeMirror=t()}(this,function(){"use strict";var e=navigator.userAgent,t=navigator.platform,g=/gecko\/\d/i.test(e),r=/MSIE \d/.test(e),n=/Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(e),i=/Edge\/(\d+)/.exec(e),x=r||n||i,C=x&&(r?document.documentMode||6:+(i||n)[1]),b=!i&&/WebKit\//.test(e),o=b&&/Qt\/\d+\.\d+/.test(e),l=!i&&/Chrome\//.test(e),v=/Opera\//.test(e),a=/Apple Computer/.test(navigator.vendor),s=/Mac OS X 1\d\D([8-9]|\d\d)\D/.test(e),u=/PhantomJS/.test(e),c=!i&&/AppleWebKit/.test(e)&&/Mobile\/\w+/.test(e),h=/Android/.test(e),f=c||h||/webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(e),w=c||/Mac/.test(t),d=/\bCrOS\b/.test(e),p=/win/i.test(t),m=v&&e.match(/Version\/(\d*\.\d*)/);m&&(m=Number(m[1])),m&&15<=m&&(b=!(v=!1));var y=w&&(o||v&&(null==m||m<12.11)),S=g||x&&9<=C;function L(e){return new RegExp("(^|\\s)"+e+"(?:$|\\s)\\s*")}var k,T=function(e,t){var r=e.className,n=L(t).exec(r);if(n){var i=r.slice(n.index+n[0].length);e.className=r.slice(0,n.index)+(i?n[1]+i:"")}};function M(e){for(var t=e.childNodes.length;0<t;--t)e.removeChild(e.firstChild);return e}function N(e,t){return M(e).appendChild(t)}function A(e,t,r,n){var i=document.createElement(e);if(r&&(i.className=r),n&&(i.style.cssText=n),"string"==typeof t)i.appendChild(document.createTextNode(t));else if(t)for(var o=0;o<t.length;++o)i.appendChild(t[o]);return i}function O(e,t,r,n){var i=A(e,t,r,n);return i.setAttribute("role","presentation"),i}function D(e,t){if(3==t.nodeType&&(t=t.parentNode),e.contains)return e.contains(t);do{if(11==t.nodeType&&(t=t.host),t==e)return!0}while(t=t.parentNode)}function W(){var t;try{t=document.activeElement}catch(e){t=document.body||null}for(;t&&t.shadowRoot&&t.shadowRoot.activeElement;)t=t.shadowRoot.activeElement;return t}function H(e,t){var r=e.className;L(t).test(r)||(e.className+=(r?" ":"")+t)}function F(e,t){for(var r=e.split(" "),n=0;n<r.length;n++)r[n]&&!L(r[n]).test(t)&&(t+=" "+r[n]);return t}k=document.createRange?function(e,t,r,n){var i=document.createRange();return i.setEnd(n||e,r),i.setStart(e,t),i}:function(e,t,r){var n=document.body.createTextRange();try{n.moveToElementText(e.parentNode)}catch(e){return n}return n.collapse(!0),n.moveEnd("character",r),n.moveStart("character",t),n};var P=function(e){e.select()};function E(e){var t=Array.prototype.slice.call(arguments,1);return function(){return e.apply(null,t)}}function I(e,t,r){for(var n in t||(t={}),e)!e.hasOwnProperty(n)||!1===r&&t.hasOwnProperty(n)||(t[n]=e[n]);return t}function z(e,t,r,n,i){null==t&&-1==(t=e.search(/[^\s\u00a0]/))&&(t=e.length);for(var o=n||0,l=i||0;;){var s=e.indexOf("\t",o);if(s<0||t<=s)return l+(t-o);l+=s-o,l+=r-l%r,o=s+1}}c?P=function(e){e.selectionStart=0,e.selectionEnd=e.value.length}:x&&(P=function(e){try{e.select()}catch(e){}});var R=function(){this.id=null};function B(e,t){for(var r=0;r<e.length;++r)if(e[r]==t)return r;return-1}R.prototype.set=function(e,t){clearTimeout(this.id),this.id=setTimeout(t,e)};var G=30,U={toString:function(){return"CodeMirror.Pass"}},V={scroll:!1},K={origin:"*mouse"},j={origin:"+move"};function X(e,t,r){for(var n=0,i=0;;){var o=e.indexOf("\t",n);-1==o&&(o=e.length);var l=o-n;if(o==e.length||t<=i+l)return n+Math.min(l,t-i);if(i+=o-n,n=o+1,t<=(i+=r-i%r))return n}}var Y=[""];function _(e){for(;Y.length<=e;)Y.push($(Y)+" ");return Y[e]}function $(e){return e[e.length-1]}function q(e,t){for(var r=[],n=0;n<e.length;n++)r[n]=t(e[n],n);return r}function Z(){}function Q(e,t){var r;return r=Object.create?Object.create(e):(Z.prototype=e,new Z),t&&I(t,r),r}var J=/[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;function ee(e){return/\w/.test(e)||""<e&&(e.toUpperCase()!=e.toLowerCase()||J.test(e))}function te(e,t){return t?!!(-1<t.source.indexOf("\\w")&&ee(e))||t.test(e):ee(e)}function re(e){for(var t in e)if(e.hasOwnProperty(t)&&e[t])return!1;return!0}var ne=/[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;function ie(e){return 768<=e.charCodeAt(0)&&ne.test(e)}function oe(e,t,r){for(;(r<0?0<t:t<e.length)&&ie(e.charAt(t));)t+=r;return t}function le(e,t,r){for(var n=r<t?-1:1;;){if(t==r)return t;var i=(t+r)/2,o=n<0?Math.ceil(i):Math.floor(i);if(o==t)return e(o)?t:r;e(o)?r=o:t=o+n}}function se(e,t,r){var n=this;this.input=r,n.scrollbarFiller=A("div",null,"CodeMirror-scrollbar-filler"),n.scrollbarFiller.setAttribute("cm-not-content","true"),n.gutterFiller=A("div",null,"CodeMirror-gutter-filler"),n.gutterFiller.setAttribute("cm-not-content","true"),n.lineDiv=O("div",null,"CodeMirror-code"),n.selectionDiv=A("div",null,null,"position: relative; z-index: 1"),n.cursorDiv=A("div",null,"CodeMirror-cursors"),n.measure=A("div",null,"CodeMirror-measure"),n.lineMeasure=A("div",null,"CodeMirror-measure"),n.lineSpace=O("div",[n.measure,n.lineMeasure,n.selectionDiv,n.cursorDiv,n.lineDiv],null,"position: relative; outline: none");var i=O("div",[n.lineSpace],"CodeMirror-lines");n.mover=A("div",[i],null,"position: relative"),n.sizer=A("div",[n.mover],"CodeMirror-sizer"),n.sizerWidth=null,n.heightForcer=A("div",null,null,"position: absolute; height: "+G+"px; width: 1px;"),n.gutters=A("div",null,"CodeMirror-gutters"),n.lineGutter=null,n.scroller=A("div",[n.sizer,n.heightForcer,n.gutters],"CodeMirror-scroll"),n.scroller.setAttribute("tabIndex","-1"),n.wrapper=A("div",[n.scrollbarFiller,n.gutterFiller,n.scroller],"CodeMirror"),x&&C<8&&(n.gutters.style.zIndex=-1,n.scroller.style.paddingRight=0),b||g&&f||(n.scroller.draggable=!0),e&&(e.appendChild?e.appendChild(n.wrapper):e(n.wrapper)),n.viewFrom=n.viewTo=t.first,n.reportedViewFrom=n.reportedViewTo=t.first,n.view=[],n.renderedView=null,n.externalMeasured=null,n.viewOffset=0,n.lastWrapHeight=n.lastWrapWidth=0,n.updateLineNumbers=null,n.nativeBarWidth=n.barHeight=n.barWidth=0,n.scrollbarsClipped=!1,n.lineNumWidth=n.lineNumInnerWidth=n.lineNumChars=null,n.alignWidgets=!1,n.cachedCharWidth=n.cachedTextHeight=n.cachedPaddingH=null,n.maxLine=null,n.maxLineLength=0,n.maxLineChanged=!1,n.wheelDX=n.wheelDY=n.wheelStartX=n.wheelStartY=null,n.shift=!1,n.selForContextMenu=null,n.activeTouch=null,r.init(n)}function ae(e,t){if((t-=e.first)<0||t>=e.size)throw new Error("There is no line "+(t+e.first)+" in the document.");for(var r=e;!r.lines;)for(var n=0;;++n){var i=r.children[n],o=i.chunkSize();if(t<o){r=i;break}t-=o}return r.lines[t]}function ue(e,r,n){var i=[],o=r.line;return e.iter(r.line,n.line+1,function(e){var t=e.text;o==n.line&&(t=t.slice(0,n.ch)),o==r.line&&(t=t.slice(r.ch)),i.push(t),++o}),i}function ce(e,t,r){var n=[];return e.iter(t,r,function(e){n.push(e.text)}),n}function he(e,t){var r=t-e.height;if(r)for(var n=e;n;n=n.parent)n.height+=r}function fe(e){if(null==e.parent)return null;for(var t=e.parent,r=B(t.lines,e),n=t.parent;n;n=(t=n).parent)for(var i=0;n.children[i]!=t;++i)r+=n.children[i].chunkSize();return r+t.first}function de(e,t){var r=e.first;e:do{for(var n=0;n<e.children.length;++n){var i=e.children[n],o=i.height;if(t<o){e=i;continue e}t-=o,r+=i.chunkSize()}return r}while(!e.lines);for(var l=0;l<e.lines.length;++l){var s=e.lines[l].height;if(t<s)break;t-=s}return r+l}function pe(e,t){return t>=e.first&&t<e.first+e.size}function ge(e,t){return String(e.lineNumberFormatter(t+e.firstLineNumber))}function ve(e,t,r){if(void 0===r&&(r=null),!(this instanceof ve))return new ve(e,t,r);this.line=e,this.ch=t,this.sticky=r}function me(e,t){return e.line-t.line||e.ch-t.ch}function ye(e,t){return e.sticky==t.sticky&&0==me(e,t)}function be(e){return ve(e.line,e.ch)}function we(e,t){return me(e,t)<0?t:e}function xe(e,t){return me(e,t)<0?e:t}function Ce(e,t){return Math.max(e.first,Math.min(t,e.first+e.size-1))}function Se(e,t){if(t.line<e.first)return ve(e.first,0);var r,n,i,o=e.first+e.size-1;return t.line>o?ve(o,ae(e,o).text.length):(n=ae(e,(r=t).line).text.length,null==(i=r.ch)||n<i?ve(r.line,n):i<0?ve(r.line,0):r)}function Le(e,t){for(var r=[],n=0;n<t.length;n++)r[n]=Se(e,t[n]);return r}var ke=!1,Te=!1;function Me(e,t,r){this.marker=e,this.from=t,this.to=r}function Ne(e,t){if(e)for(var r=0;r<e.length;++r){var n=e[r];if(n.marker==t)return n}}function Oe(e,t){for(var r,n=0;n<e.length;++n)e[n]!=t&&(r||(r=[])).push(e[n]);return r}function Ae(e,t){if(t.full)return null;var r=pe(e,t.from.line)&&ae(e,t.from.line).markedSpans,n=pe(e,t.to.line)&&ae(e,t.to.line).markedSpans;if(!r&&!n)return null;var i=t.from.ch,o=t.to.ch,l=0==me(t.from,t.to),s=function(e,t,r){var n;if(e)for(var i=0;i<e.length;++i){var o=e[i],l=o.marker;if(null==o.from||(l.inclusiveLeft?o.from<=t:o.from<t)||o.from==t&&"bookmark"==l.type&&(!r||!o.marker.insertLeft)){var s=null==o.to||(l.inclusiveRight?o.to>=t:o.to>t);(n||(n=[])).push(new Me(l,o.from,s?null:o.to))}}return n}(r,i,l),a=function(e,t,r){var n;if(e)for(var i=0;i<e.length;++i){var o=e[i],l=o.marker;if(null==o.to||(l.inclusiveRight?o.to>=t:o.to>t)||o.from==t&&"bookmark"==l.type&&(!r||o.marker.insertLeft)){var s=null==o.from||(l.inclusiveLeft?o.from<=t:o.from<t);(n||(n=[])).push(new Me(l,s?null:o.from-t,null==o.to?null:o.to-t))}}return n}(n,o,l),u=1==t.text.length,c=$(t.text).length+(u?i:0);if(s)for(var h=0;h<s.length;++h){var f=s[h];if(null==f.to){var d=Ne(a,f.marker);d?u&&(f.to=null==d.to?null:d.to+c):f.to=i}}if(a)for(var p=0;p<a.length;++p){var g=a[p];if(null!=g.to&&(g.to+=c),null==g.from)Ne(s,g.marker)||(g.from=c,u&&(s||(s=[])).push(g));else g.from+=c,u&&(s||(s=[])).push(g)}s&&(s=De(s)),a&&a!=s&&(a=De(a));var v=[s];if(!u){var m,y=t.text.length-2;if(0<y&&s)for(var b=0;b<s.length;++b)null==s[b].to&&(m||(m=[])).push(new Me(s[b].marker,null,null));for(var w=0;w<y;++w)v.push(m);v.push(a)}return v}function De(e){for(var t=0;t<e.length;++t){var r=e[t];null!=r.from&&r.from==r.to&&!1!==r.marker.clearWhenEmpty&&e.splice(t--,1)}return e.length?e:null}function We(e){var t=e.markedSpans;if(t){for(var r=0;r<t.length;++r)t[r].marker.detachLine(e);e.markedSpans=null}}function He(e,t){if(t){for(var r=0;r<t.length;++r)t[r].marker.attachLine(e);e.markedSpans=t}}function Fe(e){return e.inclusiveLeft?-1:0}function Pe(e){return e.inclusiveRight?1:0}function Ee(e,t){var r=e.lines.length-t.lines.length;if(0!=r)return r;var n=e.find(),i=t.find(),o=me(n.from,i.from)||Fe(e)-Fe(t);if(o)return-o;var l=me(n.to,i.to)||Pe(e)-Pe(t);return l||t.id-e.id}function Ie(e,t){var r,n=Te&&e.markedSpans;if(n)for(var i=void 0,o=0;o<n.length;++o)(i=n[o]).marker.collapsed&&null==(t?i.from:i.to)&&(!r||Ee(r,i.marker)<0)&&(r=i.marker);return r}function ze(e){return Ie(e,!0)}function Re(e){return Ie(e,!1)}function Be(e,t){var r,n=Te&&e.markedSpans;if(n)for(var i=0;i<n.length;++i){var o=n[i];o.marker.collapsed&&(null==o.from||o.from<t)&&(null==o.to||o.to>t)&&(!r||Ee(r,o.marker)<0)&&(r=o.marker)}return r}function Ge(e,t,r,n,i){var o=ae(e,t),l=Te&&o.markedSpans;if(l)for(var s=0;s<l.length;++s){var a=l[s];if(a.marker.collapsed){var u=a.marker.find(0),c=me(u.from,r)||Fe(a.marker)-Fe(i),h=me(u.to,n)||Pe(a.marker)-Pe(i);if(!(0<=c&&h<=0||c<=0&&0<=h)&&(c<=0&&(a.marker.inclusiveRight&&i.inclusiveLeft?0<=me(u.to,r):0<me(u.to,r))||0<=c&&(a.marker.inclusiveRight&&i.inclusiveLeft?me(u.from,n)<=0:me(u.from,n)<0)))return!0}}}function Ue(e){for(var t;t=ze(e);)e=t.find(-1,!0).line;return e}function Ve(e,t){var r=ae(e,t),n=Ue(r);return r==n?t:fe(n)}function Ke(e,t){if(t>e.lastLine())return t;var r,n=ae(e,t);if(!je(e,n))return t;for(;r=Re(n);)n=r.find(1,!0).line;return fe(n)+1}function je(e,t){var r=Te&&t.markedSpans;if(r)for(var n=void 0,i=0;i<r.length;++i)if((n=r[i]).marker.collapsed){if(null==n.from)return!0;if(!n.marker.widgetNode&&0==n.from&&n.marker.inclusiveLeft&&Xe(e,t,n))return!0}}function Xe(e,t,r){if(null==r.to){var n=r.marker.find(1,!0);return Xe(e,n.line,Ne(n.line.markedSpans,r.marker))}if(r.marker.inclusiveRight&&r.to==t.text.length)return!0;for(var i=void 0,o=0;o<t.markedSpans.length;++o)if((i=t.markedSpans[o]).marker.collapsed&&!i.marker.widgetNode&&i.from==r.to&&(null==i.to||i.to!=r.from)&&(i.marker.inclusiveLeft||r.marker.inclusiveRight)&&Xe(e,t,i))return!0}function Ye(e){for(var t=0,r=(e=Ue(e)).parent,n=0;n<r.lines.length;++n){var i=r.lines[n];if(i==e)break;t+=i.height}for(var o=r.parent;o;o=(r=o).parent)for(var l=0;l<o.children.length;++l){var s=o.children[l];if(s==r)break;t+=s.height}return t}function _e(e){if(0==e.height)return 0;for(var t,r=e.text.length,n=e;t=ze(n);){var i=t.find(0,!0);n=i.from.line,r+=i.from.ch-i.to.ch}for(n=e;t=Re(n);){var o=t.find(0,!0);r-=n.text.length-o.from.ch,r+=(n=o.to.line).text.length-o.to.ch}return r}function $e(e){var r=e.display,t=e.doc;r.maxLine=ae(t,t.first),r.maxLineLength=_e(r.maxLine),r.maxLineChanged=!0,t.iter(function(e){var t=_e(e);t>r.maxLineLength&&(r.maxLineLength=t,r.maxLine=e)})}var qe=null;function Ze(e,t,r){var n;qe=null;for(var i=0;i<e.length;++i){var o=e[i];if(o.from<t&&o.to>t)return i;o.to==t&&(o.from!=o.to&&"before"==r?n=i:qe=i),o.from==t&&(o.from!=o.to&&"before"!=r?n=i:qe=i)}return null!=n?n:qe}var Qe=function(){var I="bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN",z="nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111";var R=/[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,B=/[stwN]/,G=/[LRr]/,U=/[Lb1n]/,V=/[1n]/;function K(e,t,r){this.level=e,this.from=t,this.to=r}return function(e,t){var r="ltr"==t?"L":"R";if(0==e.length||"ltr"==t&&!R.test(e))return!1;for(var n,i=e.length,o=[],l=0;l<i;++l)o.push((n=e.charCodeAt(l))<=247?I.charAt(n):1424<=n&&n<=1524?"R":1536<=n&&n<=1785?z.charAt(n-1536):1774<=n&&n<=2220?"r":8192<=n&&n<=8203?"w":8204==n?"b":"L");for(var s=0,a=r;s<i;++s){var u=o[s];"m"==u?o[s]=a:a=u}for(var c=0,h=r;c<i;++c){var f=o[c];"1"==f&&"r"==h?o[c]="n":G.test(f)&&"r"==(h=f)&&(o[c]="R")}for(var d=1,p=o[0];d<i-1;++d){var g=o[d];"+"==g&&"1"==p&&"1"==o[d+1]?o[d]="1":","!=g||p!=o[d+1]||"1"!=p&&"n"!=p||(o[d]=p),p=g}for(var v=0;v<i;++v){var m=o[v];if(","==m)o[v]="N";else if("%"==m){var y=void 0;for(y=v+1;y<i&&"%"==o[y];++y);for(var b=v&&"!"==o[v-1]||y<i&&"1"==o[y]?"1":"N",w=v;w<y;++w)o[w]=b;v=y-1}}for(var x=0,C=r;x<i;++x){var S=o[x];"L"==C&&"1"==S?o[x]="L":G.test(S)&&(C=S)}for(var L=0;L<i;++L)if(B.test(o[L])){var k=void 0;for(k=L+1;k<i&&B.test(o[k]);++k);for(var T="L"==(L?o[L-1]:r),M=T==("L"==(k<i?o[k]:r))?T?"L":"R":r,N=L;N<k;++N)o[N]=M;L=k-1}for(var O,A=[],D=0;D<i;)if(U.test(o[D])){var W=D;for(++D;D<i&&U.test(o[D]);++D);A.push(new K(0,W,D))}else{var H=D,F=A.length;for(++D;D<i&&"L"!=o[D];++D);for(var P=H;P<D;)if(V.test(o[P])){H<P&&A.splice(F,0,new K(1,H,P));var E=P;for(++P;P<D&&V.test(o[P]);++P);A.splice(F,0,new K(2,E,P)),H=P}else++P;H<D&&A.splice(F,0,new K(1,H,D))}return"ltr"==t&&(1==A[0].level&&(O=e.match(/^\s+/))&&(A[0].from=O[0].length,A.unshift(new K(0,0,O[0].length))),1==$(A).level&&(O=e.match(/\s+$/))&&($(A).to-=O[0].length,A.push(new K(0,i-O[0].length,i)))),"rtl"==t?A.reverse():A}}();function Je(e,t){var r=e.order;return null==r&&(r=e.order=Qe(e.text,t)),r}var et=[],tt=function(e,t,r){if(e.addEventListener)e.addEventListener(t,r,!1);else if(e.attachEvent)e.attachEvent("on"+t,r);else{var n=e._handlers||(e._handlers={});n[t]=(n[t]||et).concat(r)}};function rt(e,t){return e._handlers&&e._handlers[t]||et}function nt(e,t,r){if(e.removeEventListener)e.removeEventListener(t,r,!1);else if(e.detachEvent)e.detachEvent("on"+t,r);else{var n=e._handlers,i=n&&n[t];if(i){var o=B(i,r);-1<o&&(n[t]=i.slice(0,o).concat(i.slice(o+1)))}}}function it(e,t){var r=rt(e,t);if(r.length)for(var n=Array.prototype.slice.call(arguments,2),i=0;i<r.length;++i)r[i].apply(null,n)}function ot(e,t,r){return"string"==typeof t&&(t={type:t,preventDefault:function(){this.defaultPrevented=!0}}),it(e,r||t.type,e,t),ht(t)||t.codemirrorIgnore}function lt(e){var t=e._handlers&&e._handlers.cursorActivity;if(t)for(var r=e.curOp.cursorActivityHandlers||(e.curOp.cursorActivityHandlers=[]),n=0;n<t.length;++n)-1==B(r,t[n])&&r.push(t[n])}function st(e,t){return 0<rt(e,t).length}function at(e){e.prototype.on=function(e,t){tt(this,e,t)},e.prototype.off=function(e,t){nt(this,e,t)}}function ut(e){e.preventDefault?e.preventDefault():e.returnValue=!1}function ct(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0}function ht(e){return null!=e.defaultPrevented?e.defaultPrevented:0==e.returnValue}function ft(e){ut(e),ct(e)}function dt(e){return e.target||e.srcElement}function pt(e){var t=e.which;return null==t&&(1&e.button?t=1:2&e.button?t=3:4&e.button&&(t=2)),w&&e.ctrlKey&&1==t&&(t=3),t}var gt,vt,mt=function(){if(x&&C<9)return!1;var e=A("div");return"draggable"in e||"dragDrop"in e}();function yt(e){if(null==gt){var t=A("span","​");N(e,A("span",[t,document.createTextNode("x")])),0!=e.firstChild.offsetHeight&&(gt=t.offsetWidth<=1&&2<t.offsetHeight&&!(x&&C<8))}var r=gt?A("span","​"):A("span"," ",null,"display: inline-block; width: 1px; margin-right: -1px");return r.setAttribute("cm-text",""),r}function bt(e){if(null!=vt)return vt;var t=N(e,document.createTextNode("AخA")),r=k(t,0,1).getBoundingClientRect(),n=k(t,1,2).getBoundingClientRect();return M(e),!(!r||r.left==r.right)&&(vt=n.right-r.right<3)}var wt,xt=3!="\n\nb".split(/\n/).length?function(e){for(var t=0,r=[],n=e.length;t<=n;){var i=e.indexOf("\n",t);-1==i&&(i=e.length);var o=e.slice(t,"\r"==e.charAt(i-1)?i-1:i),l=o.indexOf("\r");-1!=l?(r.push(o.slice(0,l)),t+=l+1):(r.push(o),t=i+1)}return r}:function(e){return e.split(/\r\n?|\n/)},Ct=window.getSelection?function(e){try{return e.selectionStart!=e.selectionEnd}catch(e){return!1}}:function(e){var t;try{t=e.ownerDocument.selection.createRange()}catch(e){}return!(!t||t.parentElement()!=e)&&0!=t.compareEndPoints("StartToEnd",t)},St="oncopy"in(wt=A("div"))||(wt.setAttribute("oncopy","return;"),"function"==typeof wt.oncopy),Lt=null;var kt={},Tt={};function Mt(e){if("string"==typeof e&&Tt.hasOwnProperty(e))e=Tt[e];else if(e&&"string"==typeof e.name&&Tt.hasOwnProperty(e.name)){var t=Tt[e.name];"string"==typeof t&&(t={name:t}),(e=Q(t,e)).name=t.name}else{if("string"==typeof e&&/^[\w\-]+\/[\w\-]+\+xml$/.test(e))return Mt("application/xml");if("string"==typeof e&&/^[\w\-]+\/[\w\-]+\+json$/.test(e))return Mt("application/json")}return"string"==typeof e?{name:e}:e||{name:"null"}}function Nt(e,t){t=Mt(t);var r=kt[t.name];if(!r)return Nt(e,"text/plain");var n=r(e,t);if(Ot.hasOwnProperty(t.name)){var i=Ot[t.name];for(var o in i)i.hasOwnProperty(o)&&(n.hasOwnProperty(o)&&(n["_"+o]=n[o]),n[o]=i[o])}if(n.name=t.name,t.helperType&&(n.helperType=t.helperType),t.modeProps)for(var l in t.modeProps)n[l]=t.modeProps[l];return n}var Ot={};function At(e,t){I(t,Ot.hasOwnProperty(e)?Ot[e]:Ot[e]={})}function Dt(e,t){if(!0===t)return t;if(e.copyState)return e.copyState(t);var r={};for(var n in t){var i=t[n];i instanceof Array&&(i=i.concat([])),r[n]=i}return r}function Wt(e,t){for(var r;e.innerMode&&(r=e.innerMode(t))&&r.mode!=e;)t=r.state,e=r.mode;return r||{mode:e,state:t}}function Ht(e,t,r){return!e.startState||e.startState(t,r)}var Ft=function(e,t,r){this.pos=this.start=0,this.string=e,this.tabSize=t||8,this.lastColumnPos=this.lastColumnValue=0,this.lineStart=0,this.lineOracle=r};Ft.prototype.eol=function(){return this.pos>=this.string.length},Ft.prototype.sol=function(){return this.pos==this.lineStart},Ft.prototype.peek=function(){return this.string.charAt(this.pos)||void 0},Ft.prototype.next=function(){if(this.pos<this.string.length)return this.string.charAt(this.pos++)},Ft.prototype.eat=function(e){var t=this.string.charAt(this.pos);if("string"==typeof e?t==e:t&&(e.test?e.test(t):e(t)))return++this.pos,t},Ft.prototype.eatWhile=function(e){for(var t=this.pos;this.eat(e););return this.pos>t},Ft.prototype.eatSpace=function(){for(var e=this.pos;/[\s\u00a0]/.test(this.string.charAt(this.pos));)++this.pos;return this.pos>e},Ft.prototype.skipToEnd=function(){this.pos=this.string.length},Ft.prototype.skipTo=function(e){var t=this.string.indexOf(e,this.pos);if(-1<t)return this.pos=t,!0},Ft.prototype.backUp=function(e){this.pos-=e},Ft.prototype.column=function(){return this.lastColumnPos<this.start&&(this.lastColumnValue=z(this.string,this.start,this.tabSize,this.lastColumnPos,this.lastColumnValue),this.lastColumnPos=this.start),this.lastColumnValue-(this.lineStart?z(this.string,this.lineStart,this.tabSize):0)},Ft.prototype.indentation=function(){return z(this.string,null,this.tabSize)-(this.lineStart?z(this.string,this.lineStart,this.tabSize):0)},Ft.prototype.match=function(e,t,r){if("string"!=typeof e){var n=this.string.slice(this.pos).match(e);return n&&0<n.index?null:(n&&!1!==t&&(this.pos+=n[0].length),n)}var i=function(e){return r?e.toLowerCase():e};if(i(this.string.substr(this.pos,e.length))==i(e))return!1!==t&&(this.pos+=e.length),!0},Ft.prototype.current=function(){return this.string.slice(this.start,this.pos)},Ft.prototype.hideFirstChars=function(e,t){this.lineStart+=e;try{return t()}finally{this.lineStart-=e}},Ft.prototype.lookAhead=function(e){var t=this.lineOracle;return t&&t.lookAhead(e)},Ft.prototype.baseToken=function(){var e=this.lineOracle;return e&&e.baseToken(this.pos)};var Pt=function(e,t){this.state=e,this.lookAhead=t},Et=function(e,t,r,n){this.state=t,this.doc=e,this.line=r,this.maxLookAhead=n||0,this.baseTokens=null,this.baseTokenPos=1};function It(t,r,n,e){var a=[t.state.modeGen],i={};Xt(t,r.text,t.doc.mode,n,function(e,t){return a.push(e,t)},i,e);for(var u=n.state,o=function(e){n.baseTokens=a;var o=t.state.overlays[e],l=1,s=0;n.state=!0,Xt(t,r.text,o.mode,n,function(e,t){for(var r=l;s<e;){var n=a[l];e<n&&a.splice(l,1,e,a[l+1],n),l+=2,s=Math.min(e,n)}if(t)if(o.opaque)a.splice(r,l-r,e,"overlay "+t),l=r+2;else for(;r<l;r+=2){var i=a[r+1];a[r+1]=(i?i+" ":"")+"overlay "+t}},i),n.state=u,n.baseTokens=null,n.baseTokenPos=1},l=0;l<t.state.overlays.length;++l)o(l);return{styles:a,classes:i.bgClass||i.textClass?i:null}}function zt(e,t,r){if(!t.styles||t.styles[0]!=e.state.modeGen){var n=Rt(e,fe(t)),i=t.text.length>e.options.maxHighlightLength&&Dt(e.doc.mode,n.state),o=It(e,t,n);i&&(n.state=i),t.stateAfter=n.save(!i),t.styles=o.styles,o.classes?t.styleClasses=o.classes:t.styleClasses&&(t.styleClasses=null),r===e.doc.highlightFrontier&&(e.doc.modeFrontier=Math.max(e.doc.modeFrontier,++e.doc.highlightFrontier))}return t.styles}function Rt(r,n,e){var t=r.doc,i=r.display;if(!t.mode.startState)return new Et(t,!0,n);var o=function(e,t,r){for(var n,i,o=e.doc,l=r?-1:t-(e.doc.mode.innerMode?1e3:100),s=t;l<s;--s){if(s<=o.first)return o.first;var a=ae(o,s-1),u=a.stateAfter;if(u&&(!r||s+(u instanceof Pt?u.lookAhead:0)<=o.modeFrontier))return s;var c=z(a.text,null,e.options.tabSize);(null==i||c<n)&&(i=s-1,n=c)}return i}(r,n,e),l=o>t.first&&ae(t,o-1).stateAfter,s=l?Et.fromSaved(t,l,o):new Et(t,Ht(t.mode),o);return t.iter(o,n,function(e){Bt(r,e.text,s);var t=s.line;e.stateAfter=t==n-1||t%5==0||t>=i.viewFrom&&t<i.viewTo?s.save():null,s.nextLine()}),e&&(t.modeFrontier=s.line),s}function Bt(e,t,r,n){var i=e.doc.mode,o=new Ft(t,e.options.tabSize,r);for(o.start=o.pos=n||0,""==t&&Gt(i,r.state);!o.eol();)Ut(i,o,r.state),o.start=o.pos}function Gt(e,t){if(e.blankLine)return e.blankLine(t);if(e.innerMode){var r=Wt(e,t);return r.mode.blankLine?r.mode.blankLine(r.state):void 0}}function Ut(e,t,r,n){for(var i=0;i<10;i++){n&&(n[0]=Wt(e,r).mode);var o=e.token(t,r);if(t.pos>t.start)return o}throw new Error("Mode "+e.name+" failed to advance stream.")}Et.prototype.lookAhead=function(e){var t=this.doc.getLine(this.line+e);return null!=t&&e>this.maxLookAhead&&(this.maxLookAhead=e),t},Et.prototype.baseToken=function(e){if(!this.baseTokens)return null;for(;this.baseTokens[this.baseTokenPos]<=e;)this.baseTokenPos+=2;var t=this.baseTokens[this.baseTokenPos+1];return{type:t&&t.replace(/( |^)overlay .*/,""),size:this.baseTokens[this.baseTokenPos]-e}},Et.prototype.nextLine=function(){this.line++,0<this.maxLookAhead&&this.maxLookAhead--},Et.fromSaved=function(e,t,r){return t instanceof Pt?new Et(e,Dt(e.mode,t.state),r,t.lookAhead):new Et(e,Dt(e.mode,t),r)},Et.prototype.save=function(e){var t=!1!==e?Dt(this.doc.mode,this.state):this.state;return 0<this.maxLookAhead?new Pt(t,this.maxLookAhead):t};var Vt=function(e,t,r){this.start=e.start,this.end=e.pos,this.string=e.current(),this.type=t||null,this.state=r};function Kt(e,t,r,n){var i,o,l=e.doc,s=l.mode,a=ae(l,(t=Se(l,t)).line),u=Rt(e,t.line,r),c=new Ft(a.text,e.options.tabSize,u);for(n&&(o=[]);(n||c.pos<t.ch)&&!c.eol();)c.start=c.pos,i=Ut(s,c,u.state),n&&o.push(new Vt(c,i,Dt(l.mode,u.state)));return n?o:new Vt(c,i,u.state)}function jt(e,t){if(e)for(;;){var r=e.match(/(?:^|\s+)line-(background-)?(\S+)/);if(!r)break;e=e.slice(0,r.index)+e.slice(r.index+r[0].length);var n=r[1]?"bgClass":"textClass";null==t[n]?t[n]=r[2]:new RegExp("(?:^|s)"+r[2]+"(?:$|s)").test(t[n])||(t[n]+=" "+r[2])}return e}function Xt(e,t,r,n,i,o,l){var s=r.flattenSpans;null==s&&(s=e.options.flattenSpans);var a,u=0,c=null,h=new Ft(t,e.options.tabSize,n),f=e.options.addModeClass&&[null];for(""==t&&jt(Gt(r,n.state),o);!h.eol();){if(a=h.pos>e.options.maxHighlightLength?(s=!1,l&&Bt(e,t,n,h.pos),h.pos=t.length,null):jt(Ut(r,h,n.state,f),o),f){var d=f[0].name;d&&(a="m-"+(a?d+" "+a:d))}if(!s||c!=a){for(;u<h.start;)i(u=Math.min(h.start,u+5e3),c);c=a}h.start=h.pos}for(;u<h.pos;){var p=Math.min(h.pos,u+5e3);i(p,c),u=p}}var Yt=function(e,t,r){this.text=e,He(this,t),this.height=r?r(this):1};Yt.prototype.lineNo=function(){return fe(this)},at(Yt);var _t={},$t={};function qt(e,t){if(!e||/^\s*$/.test(e))return null;var r=t.addModeClass?$t:_t;return r[e]||(r[e]=e.replace(/\S+/g,"cm-$&"))}function Zt(e,t){var r=O("span",null,null,b?"padding-right: .1px":null),n={pre:O("pre",[r],"CodeMirror-line"),content:r,col:0,pos:0,cm:e,trailingSpace:!1,splitSpaces:e.getOption("lineWrapping")};t.measure={};for(var i=0;i<=(t.rest?t.rest.length:0);i++){var o=i?t.rest[i-1]:t.line,l=void 0;n.pos=0,n.addToken=Jt,bt(e.display.measure)&&(l=Je(o,e.doc.direction))&&(n.addToken=er(n.addToken,l)),n.map=[],rr(o,n,zt(e,o,t!=e.display.externalMeasured&&fe(o))),o.styleClasses&&(o.styleClasses.bgClass&&(n.bgClass=F(o.styleClasses.bgClass,n.bgClass||"")),o.styleClasses.textClass&&(n.textClass=F(o.styleClasses.textClass,n.textClass||""))),0==n.map.length&&n.map.push(0,0,n.content.appendChild(yt(e.display.measure))),0==i?(t.measure.map=n.map,t.measure.cache={}):((t.measure.maps||(t.measure.maps=[])).push(n.map),(t.measure.caches||(t.measure.caches=[])).push({}))}if(b){var s=n.content.lastChild;(/\bcm-tab\b/.test(s.className)||s.querySelector&&s.querySelector(".cm-tab"))&&(n.content.className="cm-tab-wrap-hack")}return it(e,"renderLine",e,t.line,n.pre),n.pre.className&&(n.textClass=F(n.pre.className,n.textClass||"")),n}function Qt(e){var t=A("span","•","cm-invalidchar");return t.title="\\u"+e.charCodeAt(0).toString(16),t.setAttribute("aria-label",t.title),t}function Jt(e,t,r,n,i,o,l){if(t){var s,a=e.splitSpaces?function(e,t){if(1<e.length&&!/  /.test(e))return e;for(var r=t,n="",i=0;i<e.length;i++){var o=e.charAt(i);" "!=o||!r||i!=e.length-1&&32!=e.charCodeAt(i+1)||(o=" "),n+=o,r=" "==o}return n}(t,e.trailingSpace):t,u=e.cm.state.specialChars,c=!1;if(u.test(t)){s=document.createDocumentFragment();for(var h=0;;){u.lastIndex=h;var f=u.exec(t),d=f?f.index-h:t.length-h;if(d){var p=document.createTextNode(a.slice(h,h+d));x&&C<9?s.appendChild(A("span",[p])):s.appendChild(p),e.map.push(e.pos,e.pos+d,p),e.col+=d,e.pos+=d}if(!f)break;h+=d+1;var g=void 0;if("\t"==f[0]){var v=e.cm.options.tabSize,m=v-e.col%v;(g=s.appendChild(A("span",_(m),"cm-tab"))).setAttribute("role","presentation"),g.setAttribute("cm-text","\t"),e.col+=m}else"\r"==f[0]||"\n"==f[0]?(g=s.appendChild(A("span","\r"==f[0]?"␍":"␤","cm-invalidchar"))).setAttribute("cm-text",f[0]):((g=e.cm.options.specialCharPlaceholder(f[0])).setAttribute("cm-text",f[0]),x&&C<9?s.appendChild(A("span",[g])):s.appendChild(g)),e.col+=1;e.map.push(e.pos,e.pos+1,g),e.pos++}}else e.col+=t.length,s=document.createTextNode(a),e.map.push(e.pos,e.pos+t.length,s),x&&C<9&&(c=!0),e.pos+=t.length;if(e.trailingSpace=32==a.charCodeAt(t.length-1),r||n||i||c||o){var y=r||"";n&&(y+=n),i&&(y+=i);var b=A("span",[s],y,o);if(l)for(var w in l)l.hasOwnProperty(w)&&"style"!=w&&"class"!=w&&b.setAttribute(w,l[w]);return e.content.appendChild(b)}e.content.appendChild(s)}}function er(h,f){return function(e,t,r,n,i,o,l){r=r?r+" cm-force-border":"cm-force-border";for(var s=e.pos,a=s+t.length;;){for(var u=void 0,c=0;c<f.length&&!((u=f[c]).to>s&&u.from<=s);c++);if(u.to>=a)return h(e,t,r,n,i,o,l);h(e,t.slice(0,u.to-s),r,n,null,o,l),n=null,t=t.slice(u.to-s),s=u.to}}}function tr(e,t,r,n){var i=!n&&r.widgetNode;i&&e.map.push(e.pos,e.pos+t,i),!n&&e.cm.display.input.needsContentAttribute&&(i||(i=e.content.appendChild(document.createElement("span"))),i.setAttribute("cm-marker",r.id)),i&&(e.cm.display.input.setUneditable(i),e.content.appendChild(i)),e.pos+=t,e.trailingSpace=!1}function rr(e,t,r){var n=e.markedSpans,i=e.text,o=0;if(n)for(var l,s,a,u,c,h,f,d=i.length,p=0,g=1,v="",m=0;;){if(m==p){a=u=c=s="",h=f=null,m=1/0;for(var y=[],b=void 0,w=0;w<n.length;++w){var x=n[w],C=x.marker;if("bookmark"==C.type&&x.from==p&&C.widgetNode)y.push(C);else if(x.from<=p&&(null==x.to||x.to>p||C.collapsed&&x.to==p&&x.from==p)){if(null!=x.to&&x.to!=p&&m>x.to&&(m=x.to,u=""),C.className&&(a+=" "+C.className),C.css&&(s=(s?s+";":"")+C.css),C.startStyle&&x.from==p&&(c+=" "+C.startStyle),C.endStyle&&x.to==m&&(b||(b=[])).push(C.endStyle,x.to),C.title&&((f||(f={})).title=C.title),C.attributes)for(var S in C.attributes)(f||(f={}))[S]=C.attributes[S];C.collapsed&&(!h||Ee(h.marker,C)<0)&&(h=x)}else x.from>p&&m>x.from&&(m=x.from)}if(b)for(var L=0;L<b.length;L+=2)b[L+1]==m&&(u+=" "+b[L]);if(!h||h.from==p)for(var k=0;k<y.length;++k)tr(t,0,y[k]);if(h&&(h.from||0)==p){if(tr(t,(null==h.to?d+1:h.to)-p,h.marker,null==h.from),null==h.to)return;h.to==p&&(h=!1)}}if(d<=p)break;for(var T=Math.min(d,m);;){if(v){var M=p+v.length;if(!h){var N=T<M?v.slice(0,T-p):v;t.addToken(t,N,l?l+a:a,c,p+N.length==m?u:"",s,f)}if(T<=M){v=v.slice(T-p),p=T;break}p=M,c=""}v=i.slice(o,o=r[g++]),l=qt(r[g++],t.cm.options)}}else for(var O=1;O<r.length;O+=2)t.addToken(t,i.slice(o,o=r[O]),qt(r[O+1],t.cm.options))}function nr(e,t,r){this.line=t,this.rest=function(e){for(var t,r;t=Re(e);)e=t.find(1,!0).line,(r||(r=[])).push(e);return r}(t),this.size=this.rest?fe($(this.rest))-r+1:1,this.node=this.text=null,this.hidden=je(e,t)}function ir(e,t,r){for(var n,i=[],o=t;o<r;o=n){var l=new nr(e.doc,ae(e.doc,o),o);n=o+l.size,i.push(l)}return i}var or=null;var lr=null;function sr(e,t){var r=rt(e,t);if(r.length){var n,i=Array.prototype.slice.call(arguments,2);or?n=or.delayedCallbacks:lr?n=lr:(n=lr=[],setTimeout(ar,0));for(var o=function(e){n.push(function(){return r[e].apply(null,i)})},l=0;l<r.length;++l)o(l)}}function ar(){var e=lr;lr=null;for(var t=0;t<e.length;++t)e[t]()}function ur(e,t,r,n){for(var i=0;i<t.changes.length;i++){var o=t.changes[i];"text"==o?fr(e,t):"gutter"==o?pr(e,t,r,n):"class"==o?dr(e,t):"widget"==o&&gr(e,t,n)}t.changes=null}function cr(e){return e.node==e.text&&(e.node=A("div",null,null,"position: relative"),e.text.parentNode&&e.text.parentNode.replaceChild(e.node,e.text),e.node.appendChild(e.text),x&&C<8&&(e.node.style.zIndex=2)),e.node}function hr(e,t){var r=e.display.externalMeasured;return r&&r.line==t.line?(e.display.externalMeasured=null,t.measure=r.measure,r.built):Zt(e,t)}function fr(e,t){var r=t.text.className,n=hr(e,t);t.text==t.node&&(t.node=n.pre),t.text.parentNode.replaceChild(n.pre,t.text),t.text=n.pre,n.bgClass!=t.bgClass||n.textClass!=t.textClass?(t.bgClass=n.bgClass,t.textClass=n.textClass,dr(e,t)):r&&(t.text.className=r)}function dr(e,t){!function(e,t){var r=t.bgClass?t.bgClass+" "+(t.line.bgClass||""):t.line.bgClass;if(r&&(r+=" CodeMirror-linebackground"),t.background)r?t.background.className=r:(t.background.parentNode.removeChild(t.background),t.background=null);else if(r){var n=cr(t);t.background=n.insertBefore(A("div",null,r),n.firstChild),e.display.input.setUneditable(t.background)}}(e,t),t.line.wrapClass?cr(t).className=t.line.wrapClass:t.node!=t.text&&(t.node.className="");var r=t.textClass?t.textClass+" "+(t.line.textClass||""):t.line.textClass;t.text.className=r||""}function pr(e,t,r,n){if(t.gutter&&(t.node.removeChild(t.gutter),t.gutter=null),t.gutterBackground&&(t.node.removeChild(t.gutterBackground),t.gutterBackground=null),t.line.gutterClass){var i=cr(t);t.gutterBackground=A("div",null,"CodeMirror-gutter-background "+t.line.gutterClass,"left: "+(e.options.fixedGutter?n.fixedPos:-n.gutterTotalWidth)+"px; width: "+n.gutterTotalWidth+"px"),e.display.input.setUneditable(t.gutterBackground),i.insertBefore(t.gutterBackground,t.text)}var o=t.line.gutterMarkers;if(e.options.lineNumbers||o){var l=cr(t),s=t.gutter=A("div",null,"CodeMirror-gutter-wrapper","left: "+(e.options.fixedGutter?n.fixedPos:-n.gutterTotalWidth)+"px");if(e.display.input.setUneditable(s),l.insertBefore(s,t.text),t.line.gutterClass&&(s.className+=" "+t.line.gutterClass),!e.options.lineNumbers||o&&o["CodeMirror-linenumbers"]||(t.lineNumber=s.appendChild(A("div",ge(e.options,r),"CodeMirror-linenumber CodeMirror-gutter-elt","left: "+n.gutterLeft["CodeMirror-linenumbers"]+"px; width: "+e.display.lineNumInnerWidth+"px"))),o)for(var a=0;a<e.options.gutters.length;++a){var u=e.options.gutters[a],c=o.hasOwnProperty(u)&&o[u];c&&s.appendChild(A("div",[c],"CodeMirror-gutter-elt","left: "+n.gutterLeft[u]+"px; width: "+n.gutterWidth[u]+"px"))}}}function gr(e,t,r){t.alignable&&(t.alignable=null);for(var n=t.node.firstChild,i=void 0;n;n=i)i=n.nextSibling,"CodeMirror-linewidget"==n.className&&t.node.removeChild(n);vr(e,t,r)}function vr(e,t,r){if(mr(e,t.line,t,r,!0),t.rest)for(var n=0;n<t.rest.length;n++)mr(e,t.rest[n],t,r,!1)}function mr(e,t,r,n,i){if(t.widgets)for(var o=cr(r),l=0,s=t.widgets;l<s.length;++l){var a=s[l],u=A("div",[a.node],"CodeMirror-linewidget");a.handleMouseEvents||u.setAttribute("cm-ignore-events","true"),yr(a,u,r,n),e.display.input.setUneditable(u),i&&a.above?o.insertBefore(u,r.gutter||r.text):o.appendChild(u),sr(a,"redraw")}}function yr(e,t,r,n){if(e.noHScroll){(r.alignable||(r.alignable=[])).push(t);var i=n.wrapperWidth;t.style.left=n.fixedPos+"px",e.coverGutter||(i-=n.gutterTotalWidth,t.style.paddingLeft=n.gutterTotalWidth+"px"),t.style.width=i+"px"}e.coverGutter&&(t.style.zIndex=5,t.style.position="relative",e.noHScroll||(t.style.marginLeft=-n.gutterTotalWidth+"px"))}function br(e){if(null!=e.height)return e.height;var t=e.doc.cm;if(!t)return 0;if(!D(document.body,e.node)){var r="position: relative;";e.coverGutter&&(r+="margin-left: -"+t.display.gutters.offsetWidth+"px;"),e.noHScroll&&(r+="width: "+t.display.wrapper.clientWidth+"px;"),N(t.display.measure,A("div",[e.node],null,r))}return e.height=e.node.parentNode.offsetHeight}function wr(e,t){for(var r=dt(t);r!=e.wrapper;r=r.parentNode)if(!r||1==r.nodeType&&"true"==r.getAttribute("cm-ignore-events")||r.parentNode==e.sizer&&r!=e.mover)return!0}function xr(e){return e.lineSpace.offsetTop}function Cr(e){return e.mover.offsetHeight-e.lineSpace.offsetHeight}function Sr(e){if(e.cachedPaddingH)return e.cachedPaddingH;var t=N(e.measure,A("pre","x")),r=window.getComputedStyle?window.getComputedStyle(t):t.currentStyle,n={left:parseInt(r.paddingLeft),right:parseInt(r.paddingRight)};return isNaN(n.left)||isNaN(n.right)||(e.cachedPaddingH=n),n}function Lr(e){return G-e.display.nativeBarWidth}function kr(e){return e.display.scroller.clientWidth-Lr(e)-e.display.barWidth}function Tr(e){return e.display.scroller.clientHeight-Lr(e)-e.display.barHeight}function Mr(e,t,r){if(e.line==t)return{map:e.measure.map,cache:e.measure.cache};for(var n=0;n<e.rest.length;n++)if(e.rest[n]==t)return{map:e.measure.maps[n],cache:e.measure.caches[n]};for(var i=0;i<e.rest.length;i++)if(fe(e.rest[i])>r)return{map:e.measure.maps[i],cache:e.measure.caches[i],before:!0}}function Nr(e,t,r,n){return Dr(e,Ar(e,t),r,n)}function Or(e,t){if(t>=e.display.viewFrom&&t<e.display.viewTo)return e.display.view[sn(e,t)];var r=e.display.externalMeasured;return r&&t>=r.lineN&&t<r.lineN+r.size?r:void 0}function Ar(e,t){var r=fe(t),n=Or(e,r);n&&!n.text?n=null:n&&n.changes&&(ur(e,n,r,tn(e)),e.curOp.forceUpdate=!0),n||(n=function(e,t){var r=fe(t=Ue(t)),n=e.display.externalMeasured=new nr(e.doc,t,r);n.lineN=r;var i=n.built=Zt(e,n);return n.text=i.pre,N(e.display.lineMeasure,i.pre),n}(e,t));var i=Mr(n,t,r);return{line:t,view:n,rect:null,map:i.map,cache:i.cache,before:i.before,hasHeights:!1}}function Dr(e,t,r,n,i){t.before&&(r=-1);var o,l=r+(n||"");return t.cache.hasOwnProperty(l)?o=t.cache[l]:(t.rect||(t.rect=t.view.text.getBoundingClientRect()),t.hasHeights||(!function(e,t,r){var n=e.options.lineWrapping,i=n&&kr(e);if(!t.measure.heights||n&&t.measure.width!=i){var o=t.measure.heights=[];if(n){t.measure.width=i;for(var l=t.text.firstChild.getClientRects(),s=0;s<l.length-1;s++){var a=l[s],u=l[s+1];2<Math.abs(a.bottom-u.bottom)&&o.push((a.bottom+u.top)/2-r.top)}}o.push(r.bottom-r.top)}}(e,t.view,t.rect),t.hasHeights=!0),(o=function(e,t,r,n){var i,o=Fr(t.map,r,n),l=o.node,s=o.start,a=o.end,u=o.collapse;if(3==l.nodeType){for(var c=0;c<4;c++){for(;s&&ie(t.line.text.charAt(o.coverStart+s));)--s;for(;o.coverStart+a<o.coverEnd&&ie(t.line.text.charAt(o.coverStart+a));)++a;if((i=x&&C<9&&0==s&&a==o.coverEnd-o.coverStart?l.parentNode.getBoundingClientRect():Pr(k(l,s,a).getClientRects(),n)).left||i.right||0==s)break;a=s,s-=1,u="right"}x&&C<11&&(i=function(e,t){if(!window.screen||null==screen.logicalXDPI||screen.logicalXDPI==screen.deviceXDPI||!function(e){if(null!=Lt)return Lt;var t=N(e,A("span","x")),r=t.getBoundingClientRect(),n=k(t,0,1).getBoundingClientRect();return Lt=1<Math.abs(r.left-n.left)}(e))return t;var r=screen.logicalXDPI/screen.deviceXDPI,n=screen.logicalYDPI/screen.deviceYDPI;return{left:t.left*r,right:t.right*r,top:t.top*n,bottom:t.bottom*n}}(e.display.measure,i))}else{var h;0<s&&(u=n="right"),i=e.options.lineWrapping&&1<(h=l.getClientRects()).length?h["right"==n?h.length-1:0]:l.getBoundingClientRect()}if(x&&C<9&&!s&&(!i||!i.left&&!i.right)){var f=l.parentNode.getClientRects()[0];i=f?{left:f.left,right:f.left+en(e.display),top:f.top,bottom:f.bottom}:Hr}for(var d=i.top-t.rect.top,p=i.bottom-t.rect.top,g=(d+p)/2,v=t.view.measure.heights,m=0;m<v.length-1&&!(g<v[m]);m++);var y=m?v[m-1]:0,b=v[m],w={left:("right"==u?i.right:i.left)-t.rect.left,right:("left"==u?i.left:i.right)-t.rect.left,top:y,bottom:b};i.left||i.right||(w.bogus=!0);e.options.singleCursorHeightPerLine||(w.rtop=d,w.rbottom=p);return w}(e,t,r,n)).bogus||(t.cache[l]=o)),{left:o.left,right:o.right,top:i?o.rtop:o.top,bottom:i?o.rbottom:o.bottom}}var Wr,Hr={left:0,right:0,top:0,bottom:0};function Fr(e,t,r){for(var n,i,o,l,s,a,u=0;u<e.length;u+=3)if(s=e[u],a=e[u+1],t<s?(i=0,o=1,l="left"):t<a?o=(i=t-s)+1:(u==e.length-3||t==a&&e[u+3]>t)&&(i=(o=a-s)-1,a<=t&&(l="right")),null!=i){if(n=e[u+2],s==a&&r==(n.insertLeft?"left":"right")&&(l=r),"left"==r&&0==i)for(;u&&e[u-2]==e[u-3]&&e[u-1].insertLeft;)n=e[2+(u-=3)],l="left";if("right"==r&&i==a-s)for(;u<e.length-3&&e[u+3]==e[u+4]&&!e[u+5].insertLeft;)n=e[(u+=3)+2],l="right";break}return{node:n,start:i,end:o,collapse:l,coverStart:s,coverEnd:a}}function Pr(e,t){var r=Hr;if("left"==t)for(var n=0;n<e.length&&(r=e[n]).left==r.right;n++);else for(var i=e.length-1;0<=i&&(r=e[i]).left==r.right;i--);return r}function Er(e){if(e.measure&&(e.measure.cache={},e.measure.heights=null,e.rest))for(var t=0;t<e.rest.length;t++)e.measure.caches[t]={}}function Ir(e){e.display.externalMeasure=null,M(e.display.lineMeasure);for(var t=0;t<e.display.view.length;t++)Er(e.display.view[t])}function zr(e){Ir(e),e.display.cachedCharWidth=e.display.cachedTextHeight=e.display.cachedPaddingH=null,e.options.lineWrapping||(e.display.maxLineChanged=!0),e.display.lineNumChars=null}function Rr(){return l&&h?-(document.body.getBoundingClientRect().left-parseInt(getComputedStyle(document.body).marginLeft)):window.pageXOffset||(document.documentElement||document.body).scrollLeft}function Br(){return l&&h?-(document.body.getBoundingClientRect().top-parseInt(getComputedStyle(document.body).marginTop)):window.pageYOffset||(document.documentElement||document.body).scrollTop}function Gr(e){var t=0;if(e.widgets)for(var r=0;r<e.widgets.length;++r)e.widgets[r].above&&(t+=br(e.widgets[r]));return t}function Ur(e,t,r,n,i){if(!i){var o=Gr(t);r.top+=o,r.bottom+=o}if("line"==n)return r;n||(n="local");var l=Ye(t);if("local"==n?l+=xr(e.display):l-=e.display.viewOffset,"page"==n||"window"==n){var s=e.display.lineSpace.getBoundingClientRect();l+=s.top+("window"==n?0:Br());var a=s.left+("window"==n?0:Rr());r.left+=a,r.right+=a}return r.top+=l,r.bottom+=l,r}function Vr(e,t,r){if("div"==r)return t;var n=t.left,i=t.top;if("page"==r)n-=Rr(),i-=Br();else if("local"==r||!r){var o=e.display.sizer.getBoundingClientRect();n+=o.left,i+=o.top}var l=e.display.lineSpace.getBoundingClientRect();return{left:n-l.left,top:i-l.top}}function Kr(e,t,r,n,i){return n||(n=ae(e.doc,t.line)),Ur(e,n,Nr(e,n,t.ch,i),r)}function jr(n,e,i,o,l,s){function a(e,t){var r=Dr(n,l,e,t?"right":"left",s);return t?r.left=r.right:r.right=r.left,Ur(n,o,r,i)}o=o||ae(n.doc,e.line),l||(l=Ar(n,o));var u=Je(o,n.doc.direction),t=e.ch,r=e.sticky;if(t>=o.text.length?(t=o.text.length,r="before"):t<=0&&(t=0,r="after"),!u)return a("before"==r?t-1:t,"before"==r);function c(e,t,r){return a(r?e-1:e,1==u[t].level!=r)}var h=Ze(u,t,r),f=qe,d=c(t,h,"before"==r);return null!=f&&(d.other=c(t,f,"before"!=r)),d}function Xr(e,t){var r=0;t=Se(e.doc,t),e.options.lineWrapping||(r=en(e.display)*t.ch);var n=ae(e.doc,t.line),i=Ye(n)+xr(e.display);return{left:r,right:r,top:i,bottom:i+n.height}}function Yr(e,t,r,n,i){var o=ve(e,t,r);return o.xRel=i,n&&(o.outside=!0),o}function _r(e,t,r){var n=e.doc;if((r+=e.display.viewOffset)<0)return Yr(n.first,0,null,!0,-1);var i=de(n,r),o=n.first+n.size-1;if(o<i)return Yr(n.first+n.size-1,ae(n,o).text.length,null,!0,1);t<0&&(t=0);for(var l=ae(n,i);;){var s=Qr(e,l,i,t,r),a=Be(l,s.ch+(0<s.xRel?1:0));if(!a)return s;var u=a.find(1);if(u.line==i)return u;l=ae(n,i=u.line)}}function $r(t,e,r,n){n-=Gr(e);var i=e.text.length,o=le(function(e){return Dr(t,r,e-1).bottom<=n},i,0);return{begin:o,end:i=le(function(e){return Dr(t,r,e).top>n},o,i)}}function qr(e,t,r,n){return r||(r=Ar(e,t)),$r(e,t,r,Ur(e,t,Dr(e,r,n),"line").top)}function Zr(e,t,r,n){return!(e.bottom<=r)&&(e.top>r||(n?e.left:e.right)>t)}function Qr(r,e,t,n,i){i-=Ye(e);var o=Ar(r,e),l=Gr(e),s=0,a=e.text.length,u=!0,c=Je(e,r.doc.direction);if(c){var h=(r.options.lineWrapping?function(e,t,r,n,i,o,l){var s=$r(e,t,n,l),a=s.begin,u=s.end;/\s/.test(t.text.charAt(u-1))&&u--;for(var c=null,h=null,f=0;f<i.length;f++){var d=i[f];if(!(d.from>=u||d.to<=a)){var p=1!=d.level,g=Dr(e,n,p?Math.min(u,d.to)-1:Math.max(a,d.from)).right,v=g<o?o-g+1e9:g-o;(!c||v<h)&&(c=d,h=v)}}c||(c=i[i.length-1]);c.from<a&&(c={from:a,to:c.to,level:c.level});c.to>u&&(c={from:c.from,to:u,level:c.level});return c}:function(n,i,o,l,s,a,u){var e=le(function(e){var t=s[e],r=1!=t.level;return Zr(jr(n,ve(o,r?t.to:t.from,r?"before":"after"),"line",i,l),a,u,!0)},0,s.length-1),t=s[e];if(0<e){var r=1!=t.level,c=jr(n,ve(o,r?t.from:t.to,r?"after":"before"),"line",i,l);Zr(c,a,u,!0)&&c.top>u&&(t=s[e-1])}return t})(r,e,t,o,c,n,i);s=(u=1!=h.level)?h.from:h.to-1,a=u?h.to:h.from-1}var f,d,p=null,g=null,v=le(function(e){var t=Dr(r,o,e);return t.top+=l,t.bottom+=l,!!Zr(t,n,i,!1)&&(t.top<=i&&t.left<=n&&(p=e,g=t),!0)},s,a),m=!1;if(g){var y=n-g.left<g.right-n,b=y==u;v=p+(b?0:1),d=b?"after":"before",f=y?g.left:g.right}else{u||v!=a&&v!=s||v++,d=0==v?"after":v==e.text.length?"before":Dr(r,o,v-(u?1:0)).bottom+l<=i==u?"after":"before";var w=jr(r,ve(t,v,d),"line",e,o);f=w.left,m=i<w.top||i>=w.bottom}return Yr(t,v=oe(e.text,v,1),d,m,n-f)}function Jr(e){if(null!=e.cachedTextHeight)return e.cachedTextHeight;if(null==Wr){Wr=A("pre");for(var t=0;t<49;++t)Wr.appendChild(document.createTextNode("x")),Wr.appendChild(A("br"));Wr.appendChild(document.createTextNode("x"))}N(e.measure,Wr);var r=Wr.offsetHeight/50;return 3<r&&(e.cachedTextHeight=r),M(e.measure),r||1}function en(e){if(null!=e.cachedCharWidth)return e.cachedCharWidth;var t=A("span","xxxxxxxxxx"),r=A("pre",[t]);N(e.measure,r);var n=t.getBoundingClientRect(),i=(n.right-n.left)/10;return 2<i&&(e.cachedCharWidth=i),i||10}function tn(e){for(var t=e.display,r={},n={},i=t.gutters.clientLeft,o=t.gutters.firstChild,l=0;o;o=o.nextSibling,++l)r[e.options.gutters[l]]=o.offsetLeft+o.clientLeft+i,n[e.options.gutters[l]]=o.clientWidth;return{fixedPos:rn(t),gutterTotalWidth:t.gutters.offsetWidth,gutterLeft:r,gutterWidth:n,wrapperWidth:t.wrapper.clientWidth}}function rn(e){return e.scroller.getBoundingClientRect().left-e.sizer.getBoundingClientRect().left}function nn(n){var i=Jr(n.display),o=n.options.lineWrapping,l=o&&Math.max(5,n.display.scroller.clientWidth/en(n.display)-3);return function(e){if(je(n.doc,e))return 0;var t=0;if(e.widgets)for(var r=0;r<e.widgets.length;r++)e.widgets[r].height&&(t+=e.widgets[r].height);return o?t+(Math.ceil(e.text.length/l)||1)*i:t+i}}function on(e){var t=e.doc,r=nn(e);t.iter(function(e){var t=r(e);t!=e.height&&he(e,t)})}function ln(e,t,r,n){var i=e.display;if(!r&&"true"==dt(t).getAttribute("cm-not-content"))return null;var o,l,s=i.lineSpace.getBoundingClientRect();try{o=t.clientX-s.left,l=t.clientY-s.top}catch(t){return null}var a,u=_r(e,o,l);if(n&&1==u.xRel&&(a=ae(e.doc,u.line).text).length==u.ch){var c=z(a,a.length,e.options.tabSize)-a.length;u=ve(u.line,Math.max(0,Math.round((o-Sr(e.display).left)/en(e.display))-c))}return u}function sn(e,t){if(t>=e.display.viewTo)return null;if((t-=e.display.viewFrom)<0)return null;for(var r=e.display.view,n=0;n<r.length;n++)if((t-=r[n].size)<0)return n}function an(e){e.display.input.showSelection(e.display.input.prepareSelection())}function un(e,t){void 0===t&&(t=!0);for(var r=e.doc,n={},i=n.cursors=document.createDocumentFragment(),o=n.selection=document.createDocumentFragment(),l=0;l<r.sel.ranges.length;l++)if(t||l!=r.sel.primIndex){var s=r.sel.ranges[l];if(!(s.from().line>=e.display.viewTo||s.to().line<e.display.viewFrom)){var a=s.empty();(a||e.options.showCursorWhenSelecting)&&cn(e,s.head,i),a||fn(e,s,o)}}return n}function cn(e,t,r){var n=jr(e,t,"div",null,null,!e.options.singleCursorHeightPerLine),i=r.appendChild(A("div"," ","CodeMirror-cursor"));if(i.style.left=n.left+"px",i.style.top=n.top+"px",i.style.height=Math.max(0,n.bottom-n.top)*e.options.cursorHeight+"px",n.other){var o=r.appendChild(A("div"," ","CodeMirror-cursor CodeMirror-secondarycursor"));o.style.display="",o.style.left=n.other.left+"px",o.style.top=n.other.top+"px",o.style.height=.85*(n.other.bottom-n.other.top)+"px"}}function hn(e,t){return e.top-t.top||e.left-t.left}function fn(l,e,t){var r=l.display,n=l.doc,i=document.createDocumentFragment(),o=Sr(l.display),T=o.left,M=Math.max(r.sizerWidth,kr(l)-r.sizer.offsetLeft)-o.right,N="ltr"==n.direction;function O(e,t,r,n){t<0&&(t=0),t=Math.round(t),n=Math.round(n),i.appendChild(A("div",null,"CodeMirror-selected","position: absolute; left: "+e+"px;\n                             top: "+t+"px; width: "+(null==r?M-e:r)+"px;\n                             height: "+(n-t)+"px"))}function s(r,y,b){var w,x,o=ae(n,r),C=o.text.length;function S(e,t){return Kr(l,ve(r,e),"div",o,t)}function L(e,t,r){var n=qr(l,o,null,e),i="ltr"==t==("after"==r)?"left":"right";return S("after"==r?n.begin:n.end-(/\s/.test(o.text.charAt(n.end-1))?2:1),i)[i]}var k=Je(o,n.direction);return function(e,t,r,n){if(!e)return n(t,r,"ltr",0);for(var i=!1,o=0;o<e.length;++o){var l=e[o];(l.from<r&&l.to>t||t==r&&l.to==t)&&(n(Math.max(l.from,t),Math.min(l.to,r),1==l.level?"rtl":"ltr",o),i=!0)}i||n(t,r,"ltr")}(k,y||0,null==b?C:b,function(e,t,r,n){var i="ltr"==r,o=S(e,i?"left":"right"),l=S(t-1,i?"right":"left"),s=null==y&&0==e,a=null==b&&t==C,u=0==n,c=!k||n==k.length-1;if(l.top-o.top<=3){var h=(N?a:s)&&c,f=(N?s:a)&&u?T:(i?o:l).left,d=h?M:(i?l:o).right;O(f,o.top,d-f,o.bottom)}else{var p,g,v,m;m=i?(p=N&&s&&u?T:o.left,g=N?M:L(e,r,"before"),v=N?T:L(t,r,"after"),N&&a&&c?M:l.right):(p=N?L(e,r,"before"):T,g=!N&&s&&u?M:o.right,v=!N&&a&&c?T:l.left,N?L(t,r,"after"):M),O(p,o.top,g-p,o.bottom),o.bottom<l.top&&O(T,o.bottom,null,l.top),O(v,l.top,m-v,l.bottom)}(!w||hn(o,w)<0)&&(w=o),hn(l,w)<0&&(w=l),(!x||hn(o,x)<0)&&(x=o),hn(l,x)<0&&(x=l)}),{start:w,end:x}}var a=e.from(),u=e.to();if(a.line==u.line)s(a.line,a.ch,u.ch);else{var c=ae(n,a.line),h=ae(n,u.line),f=Ue(c)==Ue(h),d=s(a.line,a.ch,f?c.text.length+1:null).end,p=s(u.line,f?0:null,u.ch).start;f&&(d.top<p.top-2?(O(d.right,d.top,null,d.bottom),O(T,p.top,p.left,p.bottom)):O(d.right,d.top,p.left-d.right,d.bottom)),d.bottom<p.top&&O(T,d.bottom,null,p.top)}t.appendChild(i)}function dn(e){if(e.state.focused){var t=e.display;clearInterval(t.blinker);var r=!0;t.cursorDiv.style.visibility="",0<e.options.cursorBlinkRate?t.blinker=setInterval(function(){return t.cursorDiv.style.visibility=(r=!r)?"":"hidden"},e.options.cursorBlinkRate):e.options.cursorBlinkRate<0&&(t.cursorDiv.style.visibility="hidden")}}function pn(e){e.state.focused||(e.display.input.focus(),vn(e))}function gn(e){e.state.delayingBlurEvent=!0,setTimeout(function(){e.state.delayingBlurEvent&&(e.state.delayingBlurEvent=!1,mn(e))},100)}function vn(e,t){e.state.delayingBlurEvent&&(e.state.delayingBlurEvent=!1),"nocursor"!=e.options.readOnly&&(e.state.focused||(it(e,"focus",e,t),e.state.focused=!0,H(e.display.wrapper,"CodeMirror-focused"),e.curOp||e.display.selForContextMenu==e.doc.sel||(e.display.input.reset(),b&&setTimeout(function(){return e.display.input.reset(!0)},20)),e.display.input.receivedFocus()),dn(e))}function mn(e,t){e.state.delayingBlurEvent||(e.state.focused&&(it(e,"blur",e,t),e.state.focused=!1,T(e.display.wrapper,"CodeMirror-focused")),clearInterval(e.display.blinker),setTimeout(function(){e.state.focused||(e.display.shift=!1)},150))}function yn(e){for(var t=e.display,r=t.lineDiv.offsetTop,n=0;n<t.view.length;n++){var i=t.view[n],o=e.options.lineWrapping,l=void 0,s=0;if(!i.hidden){if(x&&C<8){var a=i.node.offsetTop+i.node.offsetHeight;l=a-r,r=a}else{var u=i.node.getBoundingClientRect();l=u.bottom-u.top,!o&&i.text.firstChild&&(s=i.text.firstChild.getBoundingClientRect().right-u.left-1)}var c=i.line.height-l;if((.005<c||c<-.005)&&(he(i.line,l),bn(i.line),i.rest))for(var h=0;h<i.rest.length;h++)bn(i.rest[h]);if(s>e.display.sizerWidth){var f=Math.ceil(s/en(e.display));f>e.display.maxLineLength&&(e.display.maxLineLength=f,e.display.maxLine=i.line,e.display.maxLineChanged=!0)}}}}function bn(e){if(e.widgets)for(var t=0;t<e.widgets.length;++t){var r=e.widgets[t],n=r.node.parentNode;n&&(r.height=n.offsetHeight)}}function wn(e,t,r){var n=r&&null!=r.top?Math.max(0,r.top):e.scroller.scrollTop;n=Math.floor(n-xr(e));var i=r&&null!=r.bottom?r.bottom:n+e.wrapper.clientHeight,o=de(t,n),l=de(t,i);if(r&&r.ensure){var s=r.ensure.from.line,a=r.ensure.to.line;s<o?l=de(t,Ye(ae(t,o=s))+e.wrapper.clientHeight):Math.min(a,t.lastLine())>=l&&(o=de(t,Ye(ae(t,a))-e.wrapper.clientHeight),l=a)}return{from:o,to:Math.max(l,o+1)}}function xn(e){var t=e.display,r=t.view;if(t.alignWidgets||t.gutters.firstChild&&e.options.fixedGutter){for(var n=rn(t)-t.scroller.scrollLeft+e.doc.scrollLeft,i=t.gutters.offsetWidth,o=n+"px",l=0;l<r.length;l++)if(!r[l].hidden){e.options.fixedGutter&&(r[l].gutter&&(r[l].gutter.style.left=o),r[l].gutterBackground&&(r[l].gutterBackground.style.left=o));var s=r[l].alignable;if(s)for(var a=0;a<s.length;a++)s[a].style.left=o}e.options.fixedGutter&&(t.gutters.style.left=n+i+"px")}}function Cn(e){if(!e.options.lineNumbers)return!1;var t=e.doc,r=ge(e.options,t.first+t.size-1),n=e.display;if(r.length==n.lineNumChars)return!1;var i=n.measure.appendChild(A("div",[A("div",r)],"CodeMirror-linenumber CodeMirror-gutter-elt")),o=i.firstChild.offsetWidth,l=i.offsetWidth-o;return n.lineGutter.style.width="",n.lineNumInnerWidth=Math.max(o,n.lineGutter.offsetWidth-l)+1,n.lineNumWidth=n.lineNumInnerWidth+l,n.lineNumChars=n.lineNumInnerWidth?r.length:-1,n.lineGutter.style.width=n.lineNumWidth+"px",si(e),!0}function Sn(e,t){var r=e.display,n=Jr(e.display);t.top<0&&(t.top=0);var i=e.curOp&&null!=e.curOp.scrollTop?e.curOp.scrollTop:r.scroller.scrollTop,o=Tr(e),l={};t.bottom-t.top>o&&(t.bottom=t.top+o);var s=e.doc.height+Cr(r),a=t.top<n,u=t.bottom>s-n;if(t.top<i)l.scrollTop=a?0:t.top;else if(t.bottom>i+o){var c=Math.min(t.top,(u?s:t.bottom)-o);c!=i&&(l.scrollTop=c)}var h=e.curOp&&null!=e.curOp.scrollLeft?e.curOp.scrollLeft:r.scroller.scrollLeft,f=kr(e)-(e.options.fixedGutter?r.gutters.offsetWidth:0),d=t.right-t.left>f;return d&&(t.right=t.left+f),t.left<10?l.scrollLeft=0:t.left<h?l.scrollLeft=Math.max(0,t.left-(d?0:10)):t.right>f+h-3&&(l.scrollLeft=t.right+(d?0:10)-f),l}function Ln(e,t){null!=t&&(Mn(e),e.curOp.scrollTop=(null==e.curOp.scrollTop?e.doc.scrollTop:e.curOp.scrollTop)+t)}function kn(e){Mn(e);var t=e.getCursor();e.curOp.scrollToPos={from:t,to:t,margin:e.options.cursorScrollMargin}}function Tn(e,t,r){null==t&&null==r||Mn(e),null!=t&&(e.curOp.scrollLeft=t),null!=r&&(e.curOp.scrollTop=r)}function Mn(e){var t=e.curOp.scrollToPos;t&&(e.curOp.scrollToPos=null,Nn(e,Xr(e,t.from),Xr(e,t.to),t.margin))}function Nn(e,t,r,n){var i=Sn(e,{left:Math.min(t.left,r.left),top:Math.min(t.top,r.top)-n,right:Math.max(t.right,r.right),bottom:Math.max(t.bottom,r.bottom)+n});Tn(e,i.scrollLeft,i.scrollTop)}function On(e,t){Math.abs(e.doc.scrollTop-t)<2||(g||li(e,{top:t}),An(e,t,!0),g&&li(e),ti(e,100))}function An(e,t,r){t=Math.min(e.display.scroller.scrollHeight-e.display.scroller.clientHeight,t),(e.display.scroller.scrollTop!=t||r)&&(e.doc.scrollTop=t,e.display.scrollbars.setScrollTop(t),e.display.scroller.scrollTop!=t&&(e.display.scroller.scrollTop=t))}function Dn(e,t,r,n){t=Math.min(t,e.display.scroller.scrollWidth-e.display.scroller.clientWidth),(r?t==e.doc.scrollLeft:Math.abs(e.doc.scrollLeft-t)<2)&&!n||(e.doc.scrollLeft=t,xn(e),e.display.scroller.scrollLeft!=t&&(e.display.scroller.scrollLeft=t),e.display.scrollbars.setScrollLeft(t))}function Wn(e){var t=e.display,r=t.gutters.offsetWidth,n=Math.round(e.doc.height+Cr(e.display));return{clientHeight:t.scroller.clientHeight,viewHeight:t.wrapper.clientHeight,scrollWidth:t.scroller.scrollWidth,clientWidth:t.scroller.clientWidth,viewWidth:t.wrapper.clientWidth,barLeft:e.options.fixedGutter?r:0,docHeight:n,scrollHeight:n+Lr(e)+t.barHeight,nativeBarWidth:t.nativeBarWidth,gutterWidth:r}}var Hn=function(e,t,r){this.cm=r;var n=this.vert=A("div",[A("div",null,null,"min-width: 1px")],"CodeMirror-vscrollbar"),i=this.horiz=A("div",[A("div",null,null,"height: 100%; min-height: 1px")],"CodeMirror-hscrollbar");n.tabIndex=i.tabIndex=-1,e(n),e(i),tt(n,"scroll",function(){n.clientHeight&&t(n.scrollTop,"vertical")}),tt(i,"scroll",function(){i.clientWidth&&t(i.scrollLeft,"horizontal")}),this.checkedZeroWidth=!1,x&&C<8&&(this.horiz.style.minHeight=this.vert.style.minWidth="18px")};Hn.prototype.update=function(e){var t=e.scrollWidth>e.clientWidth+1,r=e.scrollHeight>e.clientHeight+1,n=e.nativeBarWidth;if(r){this.vert.style.display="block",this.vert.style.bottom=t?n+"px":"0";var i=e.viewHeight-(t?n:0);this.vert.firstChild.style.height=Math.max(0,e.scrollHeight-e.clientHeight+i)+"px"}else this.vert.style.display="",this.vert.firstChild.style.height="0";if(t){this.horiz.style.display="block",this.horiz.style.right=r?n+"px":"0",this.horiz.style.left=e.barLeft+"px";var o=e.viewWidth-e.barLeft-(r?n:0);this.horiz.firstChild.style.width=Math.max(0,e.scrollWidth-e.clientWidth+o)+"px"}else this.horiz.style.display="",this.horiz.firstChild.style.width="0";return!this.checkedZeroWidth&&0<e.clientHeight&&(0==n&&this.zeroWidthHack(),this.checkedZeroWidth=!0),{right:r?n:0,bottom:t?n:0}},Hn.prototype.setScrollLeft=function(e){this.horiz.scrollLeft!=e&&(this.horiz.scrollLeft=e),this.disableHoriz&&this.enableZeroWidthBar(this.horiz,this.disableHoriz,"horiz")},Hn.prototype.setScrollTop=function(e){this.vert.scrollTop!=e&&(this.vert.scrollTop=e),this.disableVert&&this.enableZeroWidthBar(this.vert,this.disableVert,"vert")},Hn.prototype.zeroWidthHack=function(){var e=w&&!s?"12px":"18px";this.horiz.style.height=this.vert.style.width=e,this.horiz.style.pointerEvents=this.vert.style.pointerEvents="none",this.disableHoriz=new R,this.disableVert=new R},Hn.prototype.enableZeroWidthBar=function(r,n,i){r.style.pointerEvents="auto",n.set(1e3,function e(){var t=r.getBoundingClientRect();("vert"==i?document.elementFromPoint(t.right-1,(t.top+t.bottom)/2):document.elementFromPoint((t.right+t.left)/2,t.bottom-1))!=r?r.style.pointerEvents="none":n.set(1e3,e)})},Hn.prototype.clear=function(){var e=this.horiz.parentNode;e.removeChild(this.horiz),e.removeChild(this.vert)};var Fn=function(){};function Pn(e,t){t||(t=Wn(e));var r=e.display.barWidth,n=e.display.barHeight;En(e,t);for(var i=0;i<4&&r!=e.display.barWidth||n!=e.display.barHeight;i++)r!=e.display.barWidth&&e.options.lineWrapping&&yn(e),En(e,Wn(e)),r=e.display.barWidth,n=e.display.barHeight}function En(e,t){var r=e.display,n=r.scrollbars.update(t);r.sizer.style.paddingRight=(r.barWidth=n.right)+"px",r.sizer.style.paddingBottom=(r.barHeight=n.bottom)+"px",r.heightForcer.style.borderBottom=n.bottom+"px solid transparent",n.right&&n.bottom?(r.scrollbarFiller.style.display="block",r.scrollbarFiller.style.height=n.bottom+"px",r.scrollbarFiller.style.width=n.right+"px"):r.scrollbarFiller.style.display="",n.bottom&&e.options.coverGutterNextToScrollbar&&e.options.fixedGutter?(r.gutterFiller.style.display="block",r.gutterFiller.style.height=n.bottom+"px",r.gutterFiller.style.width=t.gutterWidth+"px"):r.gutterFiller.style.display=""}Fn.prototype.update=function(){return{bottom:0,right:0}},Fn.prototype.setScrollLeft=function(){},Fn.prototype.setScrollTop=function(){},Fn.prototype.clear=function(){};var In={native:Hn,null:Fn};function zn(r){r.display.scrollbars&&(r.display.scrollbars.clear(),r.display.scrollbars.addClass&&T(r.display.wrapper,r.display.scrollbars.addClass)),r.display.scrollbars=new In[r.options.scrollbarStyle](function(e){r.display.wrapper.insertBefore(e,r.display.scrollbarFiller),tt(e,"mousedown",function(){r.state.focused&&setTimeout(function(){return r.display.input.focus()},0)}),e.setAttribute("cm-not-content","true")},function(e,t){"horizontal"==t?Dn(r,e):On(r,e)},r),r.display.scrollbars.addClass&&H(r.display.wrapper,r.display.scrollbars.addClass)}var Rn=0;function Bn(e){var t;e.curOp={cm:e,viewChanged:!1,startHeight:e.doc.height,forceUpdate:!1,updateInput:0,typing:!1,changeObjs:null,cursorActivityHandlers:null,cursorActivityCalled:0,selectionChanged:!1,updateMaxLine:!1,scrollLeft:null,scrollTop:null,scrollToPos:null,focus:!1,id:++Rn},t=e.curOp,or?or.ops.push(t):t.ownsGroup=or={ops:[t],delayedCallbacks:[]}}function Gn(e){var t=e.curOp;t&&function(e,t){var r=e.ownsGroup;if(r)try{!function(e){var t=e.delayedCallbacks,r=0;do{for(;r<t.length;r++)t[r].call(null);for(var n=0;n<e.ops.length;n++){var i=e.ops[n];if(i.cursorActivityHandlers)for(;i.cursorActivityCalled<i.cursorActivityHandlers.length;)i.cursorActivityHandlers[i.cursorActivityCalled++].call(null,i.cm)}}while(r<t.length)}(r)}finally{or=null,t(r)}}(t,function(e){for(var t=0;t<e.ops.length;t++)e.ops[t].cm.curOp=null;!function(e){for(var t=e.ops,r=0;r<t.length;r++)Un(t[r]);for(var n=0;n<t.length;n++)(i=t[n]).updatedDisplay=i.mustUpdate&&ii(i.cm,i.update);var i;for(var o=0;o<t.length;o++)Vn(t[o]);for(var l=0;l<t.length;l++)Kn(t[l]);for(var s=0;s<t.length;s++)jn(t[s])}(e)})}function Un(e){var t,r,n=e.cm,i=n.display;!(r=(t=n).display).scrollbarsClipped&&r.scroller.offsetWidth&&(r.nativeBarWidth=r.scroller.offsetWidth-r.scroller.clientWidth,r.heightForcer.style.height=Lr(t)+"px",r.sizer.style.marginBottom=-r.nativeBarWidth+"px",r.sizer.style.borderRightWidth=Lr(t)+"px",r.scrollbarsClipped=!0),e.updateMaxLine&&$e(n),e.mustUpdate=e.viewChanged||e.forceUpdate||null!=e.scrollTop||e.scrollToPos&&(e.scrollToPos.from.line<i.viewFrom||e.scrollToPos.to.line>=i.viewTo)||i.maxLineChanged&&n.options.lineWrapping,e.update=e.mustUpdate&&new ni(n,e.mustUpdate&&{top:e.scrollTop,ensure:e.scrollToPos},e.forceUpdate)}function Vn(e){var t=e.cm,r=t.display;e.updatedDisplay&&yn(t),e.barMeasure=Wn(t),r.maxLineChanged&&!t.options.lineWrapping&&(e.adjustWidthTo=Nr(t,r.maxLine,r.maxLine.text.length).left+3,t.display.sizerWidth=e.adjustWidthTo,e.barMeasure.scrollWidth=Math.max(r.scroller.clientWidth,r.sizer.offsetLeft+e.adjustWidthTo+Lr(t)+t.display.barWidth),e.maxScrollLeft=Math.max(0,r.sizer.offsetLeft+e.adjustWidthTo-kr(t))),(e.updatedDisplay||e.selectionChanged)&&(e.preparedSelection=r.input.prepareSelection())}function Kn(e){var t=e.cm;null!=e.adjustWidthTo&&(t.display.sizer.style.minWidth=e.adjustWidthTo+"px",e.maxScrollLeft<t.doc.scrollLeft&&Dn(t,Math.min(t.display.scroller.scrollLeft,e.maxScrollLeft),!0),t.display.maxLineChanged=!1);var r=e.focus&&e.focus==W();e.preparedSelection&&t.display.input.showSelection(e.preparedSelection,r),(e.updatedDisplay||e.startHeight!=t.doc.height)&&Pn(t,e.barMeasure),e.updatedDisplay&&ai(t,e.barMeasure),e.selectionChanged&&dn(t),t.state.focused&&e.updateInput&&t.display.input.reset(e.typing),r&&pn(e.cm)}function jn(e){var t=e.cm,r=t.display,n=t.doc;(e.updatedDisplay&&oi(t,e.update),null==r.wheelStartX||null==e.scrollTop&&null==e.scrollLeft&&!e.scrollToPos||(r.wheelStartX=r.wheelStartY=null),null!=e.scrollTop&&An(t,e.scrollTop,e.forceScroll),null!=e.scrollLeft&&Dn(t,e.scrollLeft,!0,!0),e.scrollToPos)&&function(e,t){if(!ot(e,"scrollCursorIntoView")){var r=e.display,n=r.sizer.getBoundingClientRect(),i=null;if(t.top+n.top<0?i=!0:t.bottom+n.top>(window.innerHeight||document.documentElement.clientHeight)&&(i=!1),null!=i&&!u){var o=A("div","​",null,"position: absolute;\n                         top: "+(t.top-r.viewOffset-xr(e.display))+"px;\n                         height: "+(t.bottom-t.top+Lr(e)+r.barHeight)+"px;\n                         left: "+t.left+"px; width: "+Math.max(2,t.right-t.left)+"px;");e.display.lineSpace.appendChild(o),o.scrollIntoView(i),e.display.lineSpace.removeChild(o)}}}(t,function(e,t,r,n){var i;null==n&&(n=0),e.options.lineWrapping||t!=r||(r="before"==(t=t.ch?ve(t.line,"before"==t.sticky?t.ch-1:t.ch,"after"):t).sticky?ve(t.line,t.ch+1,"before"):t);for(var o=0;o<5;o++){var l=!1,s=jr(e,t),a=r&&r!=t?jr(e,r):s,u=Sn(e,i={left:Math.min(s.left,a.left),top:Math.min(s.top,a.top)-n,right:Math.max(s.left,a.left),bottom:Math.max(s.bottom,a.bottom)+n}),c=e.doc.scrollTop,h=e.doc.scrollLeft;if(null!=u.scrollTop&&(On(e,u.scrollTop),1<Math.abs(e.doc.scrollTop-c)&&(l=!0)),null!=u.scrollLeft&&(Dn(e,u.scrollLeft),1<Math.abs(e.doc.scrollLeft-h)&&(l=!0)),!l)break}return i}(t,Se(n,e.scrollToPos.from),Se(n,e.scrollToPos.to),e.scrollToPos.margin));var i=e.maybeHiddenMarkers,o=e.maybeUnhiddenMarkers;if(i)for(var l=0;l<i.length;++l)i[l].lines.length||it(i[l],"hide");if(o)for(var s=0;s<o.length;++s)o[s].lines.length&&it(o[s],"unhide");r.wrapper.offsetHeight&&(n.scrollTop=t.display.scroller.scrollTop),e.changeObjs&&it(t,"changes",t,e.changeObjs),e.update&&e.update.finish()}function Xn(e,t){if(e.curOp)return t();Bn(e);try{return t()}finally{Gn(e)}}function Yn(e,t){return function(){if(e.curOp)return t.apply(e,arguments);Bn(e);try{return t.apply(e,arguments)}finally{Gn(e)}}}function _n(e){return function(){if(this.curOp)return e.apply(this,arguments);Bn(this);try{return e.apply(this,arguments)}finally{Gn(this)}}}function $n(t){return function(){var e=this.cm;if(!e||e.curOp)return t.apply(this,arguments);Bn(e);try{return t.apply(this,arguments)}finally{Gn(e)}}}function qn(e,t,r,n){null==t&&(t=e.doc.first),null==r&&(r=e.doc.first+e.doc.size),n||(n=0);var i=e.display;if(n&&r<i.viewTo&&(null==i.updateLineNumbers||i.updateLineNumbers>t)&&(i.updateLineNumbers=t),e.curOp.viewChanged=!0,t>=i.viewTo)Te&&Ve(e.doc,t)<i.viewTo&&Qn(e);else if(r<=i.viewFrom)Te&&Ke(e.doc,r+n)>i.viewFrom?Qn(e):(i.viewFrom+=n,i.viewTo+=n);else if(t<=i.viewFrom&&r>=i.viewTo)Qn(e);else if(t<=i.viewFrom){var o=Jn(e,r,r+n,1);o?(i.view=i.view.slice(o.index),i.viewFrom=o.lineN,i.viewTo+=n):Qn(e)}else if(r>=i.viewTo){var l=Jn(e,t,t,-1);l?(i.view=i.view.slice(0,l.index),i.viewTo=l.lineN):Qn(e)}else{var s=Jn(e,t,t,-1),a=Jn(e,r,r+n,1);s&&a?(i.view=i.view.slice(0,s.index).concat(ir(e,s.lineN,a.lineN)).concat(i.view.slice(a.index)),i.viewTo+=n):Qn(e)}var u=i.externalMeasured;u&&(r<u.lineN?u.lineN+=n:t<u.lineN+u.size&&(i.externalMeasured=null))}function Zn(e,t,r){e.curOp.viewChanged=!0;var n=e.display,i=e.display.externalMeasured;if(i&&t>=i.lineN&&t<i.lineN+i.size&&(n.externalMeasured=null),!(t<n.viewFrom||t>=n.viewTo)){var o=n.view[sn(e,t)];if(null!=o.node){var l=o.changes||(o.changes=[]);-1==B(l,r)&&l.push(r)}}}function Qn(e){e.display.viewFrom=e.display.viewTo=e.doc.first,e.display.view=[],e.display.viewOffset=0}function Jn(e,t,r,n){var i,o=sn(e,t),l=e.display.view;if(!Te||r==e.doc.first+e.doc.size)return{index:o,lineN:r};for(var s=e.display.viewFrom,a=0;a<o;a++)s+=l[a].size;if(s!=t){if(0<n){if(o==l.length-1)return null;i=s+l[o].size-t,o++}else i=s-t;t+=i,r+=i}for(;Ve(e.doc,r)!=r;){if(o==(n<0?0:l.length-1))return null;r+=n*l[o-(n<0?1:0)].size,o+=n}return{index:o,lineN:r}}function ei(e){for(var t=e.display.view,r=0,n=0;n<t.length;n++){var i=t[n];i.hidden||i.node&&!i.changes||++r}return r}function ti(e,t){e.doc.highlightFrontier<e.display.viewTo&&e.state.highlight.set(t,E(ri,e))}function ri(a){var u=a.doc;if(!(u.highlightFrontier>=a.display.viewTo)){var c=+new Date+a.options.workTime,h=Rt(a,u.highlightFrontier),f=[];u.iter(h.line,Math.min(u.first+u.size,a.display.viewTo+500),function(e){if(h.line>=a.display.viewFrom){var t=e.styles,r=e.text.length>a.options.maxHighlightLength?Dt(u.mode,h.state):null,n=It(a,e,h,!0);r&&(h.state=r),e.styles=n.styles;var i=e.styleClasses,o=n.classes;o?e.styleClasses=o:i&&(e.styleClasses=null);for(var l=!t||t.length!=e.styles.length||i!=o&&(!i||!o||i.bgClass!=o.bgClass||i.textClass!=o.textClass),s=0;!l&&s<t.length;++s)l=t[s]!=e.styles[s];l&&f.push(h.line),e.stateAfter=h.save(),h.nextLine()}else e.text.length<=a.options.maxHighlightLength&&Bt(a,e.text,h),e.stateAfter=h.line%5==0?h.save():null,h.nextLine();if(+new Date>c)return ti(a,a.options.workDelay),!0}),u.highlightFrontier=h.line,u.modeFrontier=Math.max(u.modeFrontier,h.line),f.length&&Xn(a,function(){for(var e=0;e<f.length;e++)Zn(a,f[e],"text")})}}var ni=function(e,t,r){var n=e.display;this.viewport=t,this.visible=wn(n,e.doc,t),this.editorIsHidden=!n.wrapper.offsetWidth,this.wrapperHeight=n.wrapper.clientHeight,this.wrapperWidth=n.wrapper.clientWidth,this.oldDisplayWidth=kr(e),this.force=r,this.dims=tn(e),this.events=[]};function ii(e,t){var r=e.display,n=e.doc;if(t.editorIsHidden)return Qn(e),!1;if(!t.force&&t.visible.from>=r.viewFrom&&t.visible.to<=r.viewTo&&(null==r.updateLineNumbers||r.updateLineNumbers>=r.viewTo)&&r.renderedView==r.view&&0==ei(e))return!1;Cn(e)&&(Qn(e),t.dims=tn(e));var i=n.first+n.size,o=Math.max(t.visible.from-e.options.viewportMargin,n.first),l=Math.min(i,t.visible.to+e.options.viewportMargin);r.viewFrom<o&&o-r.viewFrom<20&&(o=Math.max(n.first,r.viewFrom)),r.viewTo>l&&r.viewTo-l<20&&(l=Math.min(i,r.viewTo)),Te&&(o=Ve(e.doc,o),l=Ke(e.doc,l));var s,a,u,c,h=o!=r.viewFrom||l!=r.viewTo||r.lastWrapHeight!=t.wrapperHeight||r.lastWrapWidth!=t.wrapperWidth;a=o,u=l,0==(c=(s=e).display).view.length||a>=c.viewTo||u<=c.viewFrom?(c.view=ir(s,a,u),c.viewFrom=a):(c.viewFrom>a?c.view=ir(s,a,c.viewFrom).concat(c.view):c.viewFrom<a&&(c.view=c.view.slice(sn(s,a))),c.viewFrom=a,c.viewTo<u?c.view=c.view.concat(ir(s,c.viewTo,u)):c.viewTo>u&&(c.view=c.view.slice(0,sn(s,u)))),c.viewTo=u,r.viewOffset=Ye(ae(e.doc,r.viewFrom)),e.display.mover.style.top=r.viewOffset+"px";var f=ei(e);if(!h&&0==f&&!t.force&&r.renderedView==r.view&&(null==r.updateLineNumbers||r.updateLineNumbers>=r.viewTo))return!1;var d=function(e){if(e.hasFocus())return null;var t=W();if(!t||!D(e.display.lineDiv,t))return null;var r={activeElt:t};if(window.getSelection){var n=window.getSelection();n.anchorNode&&n.extend&&D(e.display.lineDiv,n.anchorNode)&&(r.anchorNode=n.anchorNode,r.anchorOffset=n.anchorOffset,r.focusNode=n.focusNode,r.focusOffset=n.focusOffset)}return r}(e);return 4<f&&(r.lineDiv.style.display="none"),function(r,e,t){var n=r.display,i=r.options.lineNumbers,o=n.lineDiv,l=o.firstChild;function s(e){var t=e.nextSibling;return b&&w&&r.display.currentWheelTarget==e?e.style.display="none":e.parentNode.removeChild(e),t}for(var a=n.view,u=n.viewFrom,c=0;c<a.length;c++){var h=a[c];if(h.hidden);else if(h.node&&h.node.parentNode==o){for(;l!=h.node;)l=s(l);var f=i&&null!=e&&e<=u&&h.lineNumber;h.changes&&(-1<B(h.changes,"gutter")&&(f=!1),ur(r,h,u,t)),f&&(M(h.lineNumber),h.lineNumber.appendChild(document.createTextNode(ge(r.options,u)))),l=h.node.nextSibling}else{var d=(v=u,m=t,void 0,y=hr(p=r,g=h),g.text=g.node=y.pre,y.bgClass&&(g.bgClass=y.bgClass),y.textClass&&(g.textClass=y.textClass),dr(p,g),pr(p,g,v,m),vr(p,g,m),g.node);o.insertBefore(d,l)}u+=h.size}var p,g,v,m,y;for(;l;)l=s(l)}(e,r.updateLineNumbers,t.dims),4<f&&(r.lineDiv.style.display=""),r.renderedView=r.view,function(e){if(e&&e.activeElt&&e.activeElt!=W()&&(e.activeElt.focus(),e.anchorNode&&D(document.body,e.anchorNode)&&D(document.body,e.focusNode))){var t=window.getSelection(),r=document.createRange();r.setEnd(e.anchorNode,e.anchorOffset),r.collapse(!1),t.removeAllRanges(),t.addRange(r),t.extend(e.focusNode,e.focusOffset)}}(d),M(r.cursorDiv),M(r.selectionDiv),r.gutters.style.height=r.sizer.style.minHeight=0,h&&(r.lastWrapHeight=t.wrapperHeight,r.lastWrapWidth=t.wrapperWidth,ti(e,400)),!(r.updateLineNumbers=null)}function oi(e,t){for(var r=t.viewport,n=!0;(n&&e.options.lineWrapping&&t.oldDisplayWidth!=kr(e)||(r&&null!=r.top&&(r={top:Math.min(e.doc.height+Cr(e.display)-Tr(e),r.top)}),t.visible=wn(e.display,e.doc,r),!(t.visible.from>=e.display.viewFrom&&t.visible.to<=e.display.viewTo)))&&ii(e,t);n=!1){yn(e);var i=Wn(e);an(e),Pn(e,i),ai(e,i),t.force=!1}t.signal(e,"update",e),e.display.viewFrom==e.display.reportedViewFrom&&e.display.viewTo==e.display.reportedViewTo||(t.signal(e,"viewportChange",e,e.display.viewFrom,e.display.viewTo),e.display.reportedViewFrom=e.display.viewFrom,e.display.reportedViewTo=e.display.viewTo)}function li(e,t){var r=new ni(e,t);if(ii(e,r)){yn(e),oi(e,r);var n=Wn(e);an(e),Pn(e,n),ai(e,n),r.finish()}}function si(e){var t=e.display.gutters.offsetWidth;e.display.sizer.style.marginLeft=t+"px"}function ai(e,t){e.display.sizer.style.minHeight=t.docHeight+"px",e.display.heightForcer.style.top=t.docHeight+"px",e.display.gutters.style.height=t.docHeight+e.display.barHeight+Lr(e)+"px"}function ui(e){var t=e.display.gutters,r=e.options.gutters;M(t);for(var n=0;n<r.length;++n){var i=r[n],o=t.appendChild(A("div",null,"CodeMirror-gutter "+i));"CodeMirror-linenumbers"==i&&((e.display.lineGutter=o).style.width=(e.display.lineNumWidth||1)+"px")}t.style.display=n?"":"none",si(e)}function ci(e){var t=B(e.gutters,"CodeMirror-linenumbers");-1==t&&e.lineNumbers?e.gutters=e.gutters.concat(["CodeMirror-linenumbers"]):-1<t&&!e.lineNumbers&&(e.gutters=e.gutters.slice(0),e.gutters.splice(t,1))}ni.prototype.signal=function(e,t){st(e,t)&&this.events.push(arguments)},ni.prototype.finish=function(){for(var e=0;e<this.events.length;e++)it.apply(null,this.events[e])};var hi=0,fi=null;function di(e){var t=e.wheelDeltaX,r=e.wheelDeltaY;return null==t&&e.detail&&e.axis==e.HORIZONTAL_AXIS&&(t=e.detail),null==r&&e.detail&&e.axis==e.VERTICAL_AXIS?r=e.detail:null==r&&(r=e.wheelDelta),{x:t,y:r}}function pi(e){var t=di(e);return t.x*=fi,t.y*=fi,t}function gi(e,t){var r=di(t),n=r.x,i=r.y,o=e.display,l=o.scroller,s=l.scrollWidth>l.clientWidth,a=l.scrollHeight>l.clientHeight;if(n&&s||i&&a){if(i&&w&&b)e:for(var u=t.target,c=o.view;u!=l;u=u.parentNode)for(var h=0;h<c.length;h++)if(c[h].node==u){e.display.currentWheelTarget=u;break e}if(n&&!g&&!v&&null!=fi)return i&&a&&On(e,Math.max(0,l.scrollTop+i*fi)),Dn(e,Math.max(0,l.scrollLeft+n*fi)),(!i||i&&a)&&ut(t),void(o.wheelStartX=null);if(i&&null!=fi){var f=i*fi,d=e.doc.scrollTop,p=d+o.wrapper.clientHeight;f<0?d=Math.max(0,d+f-50):p=Math.min(e.doc.height,p+f+50),li(e,{top:d,bottom:p})}hi<20&&(null==o.wheelStartX?(o.wheelStartX=l.scrollLeft,o.wheelStartY=l.scrollTop,o.wheelDX=n,o.wheelDY=i,setTimeout(function(){if(null!=o.wheelStartX){var e=l.scrollLeft-o.wheelStartX,t=l.scrollTop-o.wheelStartY,r=t&&o.wheelDY&&t/o.wheelDY||e&&o.wheelDX&&e/o.wheelDX;o.wheelStartX=o.wheelStartY=null,r&&(fi=(fi*hi+r)/(hi+1),++hi)}},200)):(o.wheelDX+=n,o.wheelDY+=i))}}x?fi=-.53:g?fi=15:l?fi=-.7:a&&(fi=-1/3);var vi=function(e,t){this.ranges=e,this.primIndex=t};vi.prototype.primary=function(){return this.ranges[this.primIndex]},vi.prototype.equals=function(e){if(e==this)return!0;if(e.primIndex!=this.primIndex||e.ranges.length!=this.ranges.length)return!1;for(var t=0;t<this.ranges.length;t++){var r=this.ranges[t],n=e.ranges[t];if(!ye(r.anchor,n.anchor)||!ye(r.head,n.head))return!1}return!0},vi.prototype.deepCopy=function(){for(var e=[],t=0;t<this.ranges.length;t++)e[t]=new mi(be(this.ranges[t].anchor),be(this.ranges[t].head));return new vi(e,this.primIndex)},vi.prototype.somethingSelected=function(){for(var e=0;e<this.ranges.length;e++)if(!this.ranges[e].empty())return!0;return!1},vi.prototype.contains=function(e,t){t||(t=e);for(var r=0;r<this.ranges.length;r++){var n=this.ranges[r];if(0<=me(t,n.from())&&me(e,n.to())<=0)return r}return-1};var mi=function(e,t){this.anchor=e,this.head=t};function yi(e,t,r){var n=e&&e.options.selectionsMayTouch,i=t[r];t.sort(function(e,t){return me(e.from(),t.from())}),r=B(t,i);for(var o=1;o<t.length;o++){var l=t[o],s=t[o-1],a=me(s.to(),l.from());if(n&&!l.empty()?0<a:0<=a){var u=xe(s.from(),l.from()),c=we(s.to(),l.to()),h=s.empty()?l.from()==l.head:s.from()==s.head;o<=r&&--r,t.splice(--o,2,new mi(h?c:u,h?u:c))}}return new vi(t,r)}function bi(e,t){return new vi([new mi(e,t||e)],0)}function wi(e){return e.text?ve(e.from.line+e.text.length-1,$(e.text).length+(1==e.text.length?e.from.ch:0)):e.to}function xi(e,t){if(me(e,t.from)<0)return e;if(me(e,t.to)<=0)return wi(t);var r=e.line+t.text.length-(t.to.line-t.from.line)-1,n=e.ch;return e.line==t.to.line&&(n+=wi(t).ch-t.to.ch),ve(r,n)}function Ci(e,t){for(var r=[],n=0;n<e.sel.ranges.length;n++){var i=e.sel.ranges[n];r.push(new mi(xi(i.anchor,t),xi(i.head,t)))}return yi(e.cm,r,e.sel.primIndex)}function Si(e,t,r){return e.line==t.line?ve(r.line,e.ch-t.ch+r.ch):ve(r.line+(e.line-t.line),e.ch)}function Li(e){e.doc.mode=Nt(e.options,e.doc.modeOption),ki(e)}function ki(e){e.doc.iter(function(e){e.stateAfter&&(e.stateAfter=null),e.styles&&(e.styles=null)}),e.doc.modeFrontier=e.doc.highlightFrontier=e.doc.first,ti(e,100),e.state.modeGen++,e.curOp&&qn(e)}function Ti(e,t){return 0==t.from.ch&&0==t.to.ch&&""==$(t.text)&&(!e.cm||e.cm.options.wholeLineUpdateBefore)}function Mi(e,n,t,i){function o(e){return t?t[e]:null}function r(e,t,r){!function(e,t,r,n){e.text=t,e.stateAfter&&(e.stateAfter=null),e.styles&&(e.styles=null),null!=e.order&&(e.order=null),We(e),He(e,r);var i=n?n(e):1;i!=e.height&&he(e,i)}(e,t,r,i),sr(e,"change",e,n)}function l(e,t){for(var r=[],n=e;n<t;++n)r.push(new Yt(u[n],o(n),i));return r}var s=n.from,a=n.to,u=n.text,c=ae(e,s.line),h=ae(e,a.line),f=$(u),d=o(u.length-1),p=a.line-s.line;if(n.full)e.insert(0,l(0,u.length)),e.remove(u.length,e.size-u.length);else if(Ti(e,n)){var g=l(0,u.length-1);r(h,h.text,d),p&&e.remove(s.line,p),g.length&&e.insert(s.line,g)}else if(c==h)if(1==u.length)r(c,c.text.slice(0,s.ch)+f+c.text.slice(a.ch),d);else{var v=l(1,u.length-1);v.push(new Yt(f+c.text.slice(a.ch),d,i)),r(c,c.text.slice(0,s.ch)+u[0],o(0)),e.insert(s.line+1,v)}else if(1==u.length)r(c,c.text.slice(0,s.ch)+u[0]+h.text.slice(a.ch),o(0)),e.remove(s.line+1,p);else{r(c,c.text.slice(0,s.ch)+u[0],o(0)),r(h,f+h.text.slice(a.ch),d);var m=l(1,u.length-1);1<p&&e.remove(s.line+1,p-1),e.insert(s.line+1,m)}sr(e,"change",e,n)}function Ni(e,s,a){!function e(t,r,n){if(t.linked)for(var i=0;i<t.linked.length;++i){var o=t.linked[i];if(o.doc!=r){var l=n&&o.sharedHist;a&&!l||(s(o.doc,l),e(o.doc,t,l))}}}(e,null,!0)}function Oi(e,t){if(t.cm)throw new Error("This document is already in use.");on((e.doc=t).cm=e),Li(e),Ai(e),e.options.lineWrapping||$e(e),e.options.mode=t.modeOption,qn(e)}function Ai(e){("rtl"==e.doc.direction?H:T)(e.display.lineDiv,"CodeMirror-rtl")}function Di(e){this.done=[],this.undone=[],this.undoDepth=1/0,this.lastModTime=this.lastSelTime=0,this.lastOp=this.lastSelOp=null,this.lastOrigin=this.lastSelOrigin=null,this.generation=this.maxGeneration=e||1}function Wi(e,t){var r={from:be(t.from),to:wi(t),text:ue(e,t.from,t.to)};return Ii(e,r,t.from.line,t.to.line+1),Ni(e,function(e){return Ii(e,r,t.from.line,t.to.line+1)},!0),r}function Hi(e){for(;e.length;){if(!$(e).ranges)break;e.pop()}}function Fi(e,t,r,n){var i=e.history;i.undone.length=0;var o,l,s,a=+new Date;if((i.lastOp==n||i.lastOrigin==t.origin&&t.origin&&("+"==t.origin.charAt(0)&&i.lastModTime>a-(e.cm?e.cm.options.historyEventDelay:500)||"*"==t.origin.charAt(0)))&&(o=(s=i).lastOp==n?(Hi(s.done),$(s.done)):s.done.length&&!$(s.done).ranges?$(s.done):1<s.done.length&&!s.done[s.done.length-2].ranges?(s.done.pop(),$(s.done)):void 0))l=$(o.changes),0==me(t.from,t.to)&&0==me(t.from,l.to)?l.to=wi(t):o.changes.push(Wi(e,t));else{var u=$(i.done);for(u&&u.ranges||Ei(e.sel,i.done),o={changes:[Wi(e,t)],generation:i.generation},i.done.push(o);i.done.length>i.undoDepth;)i.done.shift(),i.done[0].ranges||i.done.shift()}i.done.push(r),i.generation=++i.maxGeneration,i.lastModTime=i.lastSelTime=a,i.lastOp=i.lastSelOp=n,i.lastOrigin=i.lastSelOrigin=t.origin,l||it(e,"historyAdded")}function Pi(e,t,r,n){var i,o,l,s,a,u=e.history,c=n&&n.origin;r==u.lastSelOp||c&&u.lastSelOrigin==c&&(u.lastModTime==u.lastSelTime&&u.lastOrigin==c||(i=e,o=c,l=$(u.done),s=t,"*"==(a=o.charAt(0))||"+"==a&&l.ranges.length==s.ranges.length&&l.somethingSelected()==s.somethingSelected()&&new Date-i.history.lastSelTime<=(i.cm?i.cm.options.historyEventDelay:500)))?u.done[u.done.length-1]=t:Ei(t,u.done),u.lastSelTime=+new Date,u.lastSelOrigin=c,u.lastSelOp=r,n&&!1!==n.clearRedo&&Hi(u.undone)}function Ei(e,t){var r=$(t);r&&r.ranges&&r.equals(e)||t.push(e)}function Ii(t,r,e,n){var i=r["spans_"+t.id],o=0;t.iter(Math.max(t.first,e),Math.min(t.first+t.size,n),function(e){e.markedSpans&&((i||(i=r["spans_"+t.id]={}))[o]=e.markedSpans),++o})}function zi(e){if(!e)return null;for(var t,r=0;r<e.length;++r)e[r].marker.explicitlyCleared?t||(t=e.slice(0,r)):t&&t.push(e[r]);return t?t.length?t:null:e}function Ri(e,t){var r=function(e,t){var r=t["spans_"+e.id];if(!r)return null;for(var n=[],i=0;i<t.text.length;++i)n.push(zi(r[i]));return n}(e,t),n=Ae(e,t);if(!r)return n;if(!n)return r;for(var i=0;i<r.length;++i){var o=r[i],l=n[i];if(o&&l)e:for(var s=0;s<l.length;++s){for(var a=l[s],u=0;u<o.length;++u)if(o[u].marker==a.marker)continue e;o.push(a)}else l&&(r[i]=l)}return r}function Bi(e,t,r){for(var n=[],i=0;i<e.length;++i){var o=e[i];if(o.ranges)n.push(r?vi.prototype.deepCopy.call(o):o);else{var l=o.changes,s=[];n.push({changes:s});for(var a=0;a<l.length;++a){var u=l[a],c=void 0;if(s.push({from:u.from,to:u.to,text:u.text}),t)for(var h in u)(c=h.match(/^spans_(\d+)$/))&&-1<B(t,Number(c[1]))&&($(s)[h]=u[h],delete u[h])}}}return n}function Gi(e,t,r,n){if(n){var i=e.anchor;if(r){var o=me(t,i)<0;o!=me(r,i)<0?(i=t,t=r):o!=me(t,r)<0&&(t=r)}return new mi(i,t)}return new mi(r||t,t)}function Ui(e,t,r,n,i){null==i&&(i=e.cm&&(e.cm.display.shift||e.extend)),Yi(e,new vi([Gi(e.sel.primary(),t,r,i)],0),n)}function Vi(e,t,r){for(var n=[],i=e.cm&&(e.cm.display.shift||e.extend),o=0;o<e.sel.ranges.length;o++)n[o]=Gi(e.sel.ranges[o],t[o],null,i);Yi(e,yi(e.cm,n,e.sel.primIndex),r)}function Ki(e,t,r,n){var i=e.sel.ranges.slice(0);i[t]=r,Yi(e,yi(e.cm,i,e.sel.primIndex),n)}function ji(e,t,r,n){Yi(e,bi(t,r),n)}function Xi(e,t,r){var n=e.history.done,i=$(n);i&&i.ranges?_i(e,n[n.length-1]=t,r):Yi(e,t,r)}function Yi(e,t,r){_i(e,t,r),Pi(e,e.sel,e.cm?e.cm.curOp.id:NaN,r)}function _i(e,t,r){var n,i,o,l;(st(e,"beforeSelectionChange")||e.cm&&st(e.cm,"beforeSelectionChange"))&&(n=e,o=r,l={ranges:(i=t).ranges,update:function(e){this.ranges=[];for(var t=0;t<e.length;t++)this.ranges[t]=new mi(Se(n,e[t].anchor),Se(n,e[t].head))},origin:o&&o.origin},it(n,"beforeSelectionChange",n,l),n.cm&&it(n.cm,"beforeSelectionChange",n.cm,l),t=l.ranges!=i.ranges?yi(n.cm,l.ranges,l.ranges.length-1):i),$i(e,Zi(e,t,r&&r.bias||(me(t.primary().head,e.sel.primary().head)<0?-1:1),!0)),r&&!1===r.scroll||!e.cm||kn(e.cm)}function $i(e,t){t.equals(e.sel)||(e.sel=t,e.cm&&(e.cm.curOp.updateInput=1,e.cm.curOp.selectionChanged=!0,lt(e.cm)),sr(e,"cursorActivity",e))}function qi(e){$i(e,Zi(e,e.sel,null,!1))}function Zi(e,t,r,n){for(var i,o=0;o<t.ranges.length;o++){var l=t.ranges[o],s=t.ranges.length==e.sel.ranges.length&&e.sel.ranges[o],a=Ji(e,l.anchor,s&&s.anchor,r,n),u=Ji(e,l.head,s&&s.head,r,n);(i||a!=l.anchor||u!=l.head)&&(i||(i=t.ranges.slice(0,o)),i[o]=new mi(a,u))}return i?yi(e.cm,i,t.primIndex):t}function Qi(e,t,r,n,i){var o=ae(e,t.line);if(o.markedSpans)for(var l=0;l<o.markedSpans.length;++l){var s=o.markedSpans[l],a=s.marker;if((null==s.from||(a.inclusiveLeft?s.from<=t.ch:s.from<t.ch))&&(null==s.to||(a.inclusiveRight?s.to>=t.ch:s.to>t.ch))){if(i&&(it(a,"beforeCursorEnter"),a.explicitlyCleared)){if(o.markedSpans){--l;continue}break}if(!a.atomic)continue;if(r){var u=a.find(n<0?1:-1),c=void 0;if((n<0?a.inclusiveRight:a.inclusiveLeft)&&(u=eo(e,u,-n,u&&u.line==t.line?o:null)),u&&u.line==t.line&&(c=me(u,r))&&(n<0?c<0:0<c))return Qi(e,u,t,n,i)}var h=a.find(n<0?-1:1);return(n<0?a.inclusiveLeft:a.inclusiveRight)&&(h=eo(e,h,n,h.line==t.line?o:null)),h?Qi(e,h,t,n,i):null}}return t}function Ji(e,t,r,n,i){var o=n||1,l=Qi(e,t,r,o,i)||!i&&Qi(e,t,r,o,!0)||Qi(e,t,r,-o,i)||!i&&Qi(e,t,r,-o,!0);return l||(e.cantEdit=!0,ve(e.first,0))}function eo(e,t,r,n){return r<0&&0==t.ch?t.line>e.first?Se(e,ve(t.line-1)):null:0<r&&t.ch==(n||ae(e,t.line)).text.length?t.line<e.first+e.size-1?ve(t.line+1,0):null:new ve(t.line,t.ch+r)}function to(e){e.setSelection(ve(e.firstLine(),0),ve(e.lastLine()),V)}function ro(i,e,t){var o={canceled:!1,from:e.from,to:e.to,text:e.text,origin:e.origin,cancel:function(){return o.canceled=!0}};return t&&(o.update=function(e,t,r,n){e&&(o.from=Se(i,e)),t&&(o.to=Se(i,t)),r&&(o.text=r),void 0!==n&&(o.origin=n)}),it(i,"beforeChange",i,o),i.cm&&it(i.cm,"beforeChange",i.cm,o),o.canceled?(i.cm&&(i.cm.curOp.updateInput=2),null):{from:o.from,to:o.to,text:o.text,origin:o.origin}}function no(e,t,r){if(e.cm){if(!e.cm.curOp)return Yn(e.cm,no)(e,t,r);if(e.cm.state.suppressEdits)return}if(!(st(e,"beforeChange")||e.cm&&st(e.cm,"beforeChange"))||(t=ro(e,t,!0))){var n=ke&&!r&&function(e,t,r){var n=null;if(e.iter(t.line,r.line+1,function(e){if(e.markedSpans)for(var t=0;t<e.markedSpans.length;++t){var r=e.markedSpans[t].marker;!r.readOnly||n&&-1!=B(n,r)||(n||(n=[])).push(r)}}),!n)return null;for(var i=[{from:t,to:r}],o=0;o<n.length;++o)for(var l=n[o],s=l.find(0),a=0;a<i.length;++a){var u=i[a];if(!(me(u.to,s.from)<0||0<me(u.from,s.to))){var c=[a,1],h=me(u.from,s.from),f=me(u.to,s.to);(h<0||!l.inclusiveLeft&&!h)&&c.push({from:u.from,to:s.from}),(0<f||!l.inclusiveRight&&!f)&&c.push({from:s.to,to:u.to}),i.splice.apply(i,c),a+=c.length-3}}return i}(e,t.from,t.to);if(n)for(var i=n.length-1;0<=i;--i)io(e,{from:n[i].from,to:n[i].to,text:i?[""]:t.text,origin:t.origin});else io(e,t)}}function io(e,r){if(1!=r.text.length||""!=r.text[0]||0!=me(r.from,r.to)){var t=Ci(e,r);Fi(e,r,t,e.cm?e.cm.curOp.id:NaN),so(e,r,t,Ae(e,r));var n=[];Ni(e,function(e,t){t||-1!=B(n,e.history)||(ho(e.history,r),n.push(e.history)),so(e,r,null,Ae(e,r))})}}function oo(i,o,e){var t=i.cm&&i.cm.state.suppressEdits;if(!t||e){for(var l,r=i.history,n=i.sel,s="undo"==o?r.done:r.undone,a="undo"==o?r.undone:r.done,u=0;u<s.length&&(l=s[u],e?!l.ranges||l.equals(i.sel):l.ranges);u++);if(u!=s.length){for(r.lastOrigin=r.lastSelOrigin=null;;){if(!(l=s.pop()).ranges){if(t)return void s.push(l);break}if(Ei(l,a),e&&!l.equals(i.sel))return void Yi(i,l,{clearRedo:!1});n=l}var c=[];Ei(n,a),a.push({changes:c,generation:r.generation}),r.generation=l.generation||++r.maxGeneration;for(var h=st(i,"beforeChange")||i.cm&&st(i.cm,"beforeChange"),f=function(e){var r=l.changes[e];if(r.origin=o,h&&!ro(i,r,!1))return s.length=0,{};c.push(Wi(i,r));var t=e?Ci(i,r):$(s);so(i,r,t,Ri(i,r)),!e&&i.cm&&i.cm.scrollIntoView({from:r.from,to:wi(r)});var n=[];Ni(i,function(e,t){t||-1!=B(n,e.history)||(ho(e.history,r),n.push(e.history)),so(e,r,null,Ri(e,r))})},d=l.changes.length-1;0<=d;--d){var p=f(d);if(p)return p.v}}}}function lo(e,t){if(0!=t&&(e.first+=t,e.sel=new vi(q(e.sel.ranges,function(e){return new mi(ve(e.anchor.line+t,e.anchor.ch),ve(e.head.line+t,e.head.ch))}),e.sel.primIndex),e.cm)){qn(e.cm,e.first,e.first-t,t);for(var r=e.cm.display,n=r.viewFrom;n<r.viewTo;n++)Zn(e.cm,n,"gutter")}}function so(e,t,r,n){if(e.cm&&!e.cm.curOp)return Yn(e.cm,so)(e,t,r,n);if(t.to.line<e.first)lo(e,t.text.length-1-(t.to.line-t.from.line));else if(!(t.from.line>e.lastLine())){if(t.from.line<e.first){var i=t.text.length-1-(e.first-t.from.line);lo(e,i),t={from:ve(e.first,0),to:ve(t.to.line+i,t.to.ch),text:[$(t.text)],origin:t.origin}}var o=e.lastLine();t.to.line>o&&(t={from:t.from,to:ve(o,ae(e,o).text.length),text:[t.text[0]],origin:t.origin}),t.removed=ue(e,t.from,t.to),r||(r=Ci(e,t)),e.cm?function(e,t,r){var n=e.doc,i=e.display,o=t.from,l=t.to,s=!1,a=o.line;e.options.lineWrapping||(a=fe(Ue(ae(n,o.line))),n.iter(a,l.line+1,function(e){if(e==i.maxLine)return s=!0}));-1<n.sel.contains(t.from,t.to)&&lt(e);Mi(n,t,r,nn(e)),e.options.lineWrapping||(n.iter(a,o.line+t.text.length,function(e){var t=_e(e);t>i.maxLineLength&&(i.maxLine=e,i.maxLineLength=t,i.maxLineChanged=!0,s=!1)}),s&&(e.curOp.updateMaxLine=!0));(function(e,t){if(e.modeFrontier=Math.min(e.modeFrontier,t),!(e.highlightFrontier<t-10)){for(var r=e.first,n=t-1;r<n;n--){var i=ae(e,n).stateAfter;if(i&&(!(i instanceof Pt)||n+i.lookAhead<t)){r=n+1;break}}e.highlightFrontier=Math.min(e.highlightFrontier,r)}})(n,o.line),ti(e,400);var u=t.text.length-(l.line-o.line)-1;t.full?qn(e):o.line!=l.line||1!=t.text.length||Ti(e.doc,t)?qn(e,o.line,l.line+1,u):Zn(e,o.line,"text");var c=st(e,"changes"),h=st(e,"change");if(h||c){var f={from:o,to:l,text:t.text,removed:t.removed,origin:t.origin};h&&sr(e,"change",e,f),c&&(e.curOp.changeObjs||(e.curOp.changeObjs=[])).push(f)}e.display.selForContextMenu=null}(e.cm,t,n):Mi(e,t,n),_i(e,r,V)}}function ao(e,t,r,n,i){var o;n||(n=r),me(n,r)<0&&(r=(o=[n,r])[0],n=o[1]),"string"==typeof t&&(t=e.splitLines(t)),no(e,{from:r,to:n,text:t,origin:i})}function uo(e,t,r,n){r<e.line?e.line+=n:t<e.line&&(e.line=t,e.ch=0)}function co(e,t,r,n){for(var i=0;i<e.length;++i){var o=e[i],l=!0;if(o.ranges){o.copied||((o=e[i]=o.deepCopy()).copied=!0);for(var s=0;s<o.ranges.length;s++)uo(o.ranges[s].anchor,t,r,n),uo(o.ranges[s].head,t,r,n)}else{for(var a=0;a<o.changes.length;++a){var u=o.changes[a];if(r<u.from.line)u.from=ve(u.from.line+n,u.from.ch),u.to=ve(u.to.line+n,u.to.ch);else if(t<=u.to.line){l=!1;break}}l||(e.splice(0,i+1),i=0)}}}function ho(e,t){var r=t.from.line,n=t.to.line,i=t.text.length-(n-r)-1;co(e.done,r,n,i),co(e.undone,r,n,i)}function fo(e,t,r,n){var i=t,o=t;return"number"==typeof t?o=ae(e,Ce(e,t)):i=fe(t),null==i?null:(n(o,i)&&e.cm&&Zn(e.cm,i,r),o)}function po(e){this.lines=e,this.parent=null;for(var t=0,r=0;r<e.length;++r)e[r].parent=this,t+=e[r].height;this.height=t}function go(e){this.children=e;for(var t=0,r=0,n=0;n<e.length;++n){var i=e[n];t+=i.chunkSize(),r+=i.height,i.parent=this}this.size=t,this.height=r,this.parent=null}mi.prototype.from=function(){return xe(this.anchor,this.head)},mi.prototype.to=function(){return we(this.anchor,this.head)},mi.prototype.empty=function(){return this.head.line==this.anchor.line&&this.head.ch==this.anchor.ch},po.prototype={chunkSize:function(){return this.lines.length},removeInner:function(e,t){for(var r,n=e,i=e+t;n<i;++n){var o=this.lines[n];this.height-=o.height,(r=o).parent=null,We(r),sr(o,"delete")}this.lines.splice(e,t)},collapse:function(e){e.push.apply(e,this.lines)},insertInner:function(e,t,r){this.height+=r,this.lines=this.lines.slice(0,e).concat(t).concat(this.lines.slice(e));for(var n=0;n<t.length;++n)t[n].parent=this},iterN:function(e,t,r){for(var n=e+t;e<n;++e)if(r(this.lines[e]))return!0}},go.prototype={chunkSize:function(){return this.size},removeInner:function(e,t){this.size-=t;for(var r=0;r<this.children.length;++r){var n=this.children[r],i=n.chunkSize();if(e<i){var o=Math.min(t,i-e),l=n.height;if(n.removeInner(e,o),this.height-=l-n.height,i==o&&(this.children.splice(r--,1),n.parent=null),0==(t-=o))break;e=0}else e-=i}if(this.size-t<25&&(1<this.children.length||!(this.children[0]instanceof po))){var s=[];this.collapse(s),this.children=[new po(s)],this.children[0].parent=this}},collapse:function(e){for(var t=0;t<this.children.length;++t)this.children[t].collapse(e)},insertInner:function(e,t,r){this.size+=t.length,this.height+=r;for(var n=0;n<this.children.length;++n){var i=this.children[n],o=i.chunkSize();if(e<=o){if(i.insertInner(e,t,r),i.lines&&50<i.lines.length){for(var l=i.lines.length%25+25,s=l;s<i.lines.length;){var a=new po(i.lines.slice(s,s+=25));i.height-=a.height,this.children.splice(++n,0,a),a.parent=this}i.lines=i.lines.slice(0,l),this.maybeSpill()}break}e-=o}},maybeSpill:function(){if(!(this.children.length<=10)){var e=this;do{var t=new go(e.children.splice(e.children.length-5,5));if(e.parent){e.size-=t.size,e.height-=t.height;var r=B(e.parent.children,e);e.parent.children.splice(r+1,0,t)}else{var n=new go(e.children);(n.parent=e).children=[n,t],e=n}t.parent=e.parent}while(10<e.children.length);e.parent.maybeSpill()}},iterN:function(e,t,r){for(var n=0;n<this.children.length;++n){var i=this.children[n],o=i.chunkSize();if(e<o){var l=Math.min(t,o-e);if(i.iterN(e,l,r))return!0;if(0==(t-=l))break;e=0}else e-=o}}};var vo=function(e,t,r){if(r)for(var n in r)r.hasOwnProperty(n)&&(this[n]=r[n]);this.doc=e,this.node=t};function mo(e,t,r){Ye(t)<(e.curOp&&e.curOp.scrollTop||e.doc.scrollTop)&&Ln(e,r)}vo.prototype.clear=function(){var e=this.doc.cm,t=this.line.widgets,r=this.line,n=fe(r);if(null!=n&&t){for(var i=0;i<t.length;++i)t[i]==this&&t.splice(i--,1);t.length||(r.widgets=null);var o=br(this);he(r,Math.max(0,r.height-o)),e&&(Xn(e,function(){mo(e,r,-o),Zn(e,n,"widget")}),sr(e,"lineWidgetCleared",e,this,n))}},vo.prototype.changed=function(){var e=this,t=this.height,r=this.doc.cm,n=this.line;this.height=null;var i=br(this)-t;i&&(je(this.doc,n)||he(n,n.height+i),r&&Xn(r,function(){r.curOp.forceUpdate=!0,mo(r,n,i),sr(r,"lineWidgetChanged",r,e,fe(n))}))},at(vo);var yo=0,bo=function(e,t){this.lines=[],this.type=t,this.doc=e,this.id=++yo};function wo(t,n,i,e,r){if(e&&e.shared)return function(e,r,n,i,o){(i=I(i)).shared=!1;var l=[wo(e,r,n,i,o)],s=l[0],a=i.widgetNode;return Ni(e,function(e){a&&(i.widgetNode=a.cloneNode(!0)),l.push(wo(e,Se(e,r),Se(e,n),i,o));for(var t=0;t<e.linked.length;++t)if(e.linked[t].isParent)return;s=$(l)}),new xo(l,s)}(t,n,i,e,r);if(t.cm&&!t.cm.curOp)return Yn(t.cm,wo)(t,n,i,e,r);var o=new bo(t,r),l=me(n,i);if(e&&I(e,o,!1),0<l||0==l&&!1!==o.clearWhenEmpty)return o;if(o.replacedWith&&(o.collapsed=!0,o.widgetNode=O("span",[o.replacedWith],"CodeMirror-widget"),e.handleMouseEvents||o.widgetNode.setAttribute("cm-ignore-events","true"),e.insertLeft&&(o.widgetNode.insertLeft=!0)),o.collapsed){if(Ge(t,n.line,n,i,o)||n.line!=i.line&&Ge(t,i.line,n,i,o))throw new Error("Inserting collapsed marker partially overlapping an existing one");Te=!0}o.addToHistory&&Fi(t,{from:n,to:i,origin:"markText"},t.sel,NaN);var s,a=n.line,u=t.cm;if(t.iter(a,i.line+1,function(e){var t,r;u&&o.collapsed&&!u.options.lineWrapping&&Ue(e)==u.display.maxLine&&(s=!0),o.collapsed&&a!=n.line&&he(e,0),t=e,r=new Me(o,a==n.line?n.ch:null,a==i.line?i.ch:null),t.markedSpans=t.markedSpans?t.markedSpans.concat([r]):[r],r.marker.attachLine(t),++a}),o.collapsed&&t.iter(n.line,i.line+1,function(e){je(t,e)&&he(e,0)}),o.clearOnEnter&&tt(o,"beforeCursorEnter",function(){return o.clear()}),o.readOnly&&(ke=!0,(t.history.done.length||t.history.undone.length)&&t.clearHistory()),o.collapsed&&(o.id=++yo,o.atomic=!0),u){if(s&&(u.curOp.updateMaxLine=!0),o.collapsed)qn(u,n.line,i.line+1);else if(o.className||o.startStyle||o.endStyle||o.css||o.attributes||o.title)for(var c=n.line;c<=i.line;c++)Zn(u,c,"text");o.atomic&&qi(u.doc),sr(u,"markerAdded",u,o)}return o}bo.prototype.clear=function(){var e=this;if(!this.explicitlyCleared){var t=this.doc.cm,r=t&&!t.curOp;if(r&&Bn(t),st(this,"clear")){var n=this.find();n&&sr(this,"clear",n.from,n.to)}for(var i=null,o=null,l=0;l<this.lines.length;++l){var s=e.lines[l],a=Ne(s.markedSpans,e);t&&!e.collapsed?Zn(t,fe(s),"text"):t&&(null!=a.to&&(o=fe(s)),null!=a.from&&(i=fe(s))),s.markedSpans=Oe(s.markedSpans,a),null==a.from&&e.collapsed&&!je(e.doc,s)&&t&&he(s,Jr(t.display))}if(t&&this.collapsed&&!t.options.lineWrapping)for(var u=0;u<this.lines.length;++u){var c=Ue(e.lines[u]),h=_e(c);h>t.display.maxLineLength&&(t.display.maxLine=c,t.display.maxLineLength=h,t.display.maxLineChanged=!0)}null!=i&&t&&this.collapsed&&qn(t,i,o+1),this.lines.length=0,this.explicitlyCleared=!0,this.atomic&&this.doc.cantEdit&&(this.doc.cantEdit=!1,t&&qi(t.doc)),t&&sr(t,"markerCleared",t,this,i,o),r&&Gn(t),this.parent&&this.parent.clear()}},bo.prototype.find=function(e,t){var r,n;null==e&&"bookmark"==this.type&&(e=1);for(var i=0;i<this.lines.length;++i){var o=this.lines[i],l=Ne(o.markedSpans,this);if(null!=l.from&&(r=ve(t?o:fe(o),l.from),-1==e))return r;if(null!=l.to&&(n=ve(t?o:fe(o),l.to),1==e))return n}return r&&{from:r,to:n}},bo.prototype.changed=function(){var o=this,l=this.find(-1,!0),s=this,a=this.doc.cm;l&&a&&Xn(a,function(){var e=l.line,t=fe(l.line),r=Or(a,t);if(r&&(Er(r),a.curOp.selectionChanged=a.curOp.forceUpdate=!0),a.curOp.updateMaxLine=!0,!je(s.doc,e)&&null!=s.height){var n=s.height;s.height=null;var i=br(s)-n;i&&he(e,e.height+i)}sr(a,"markerChanged",a,o)})},bo.prototype.attachLine=function(e){if(!this.lines.length&&this.doc.cm){var t=this.doc.cm.curOp;t.maybeHiddenMarkers&&-1!=B(t.maybeHiddenMarkers,this)||(t.maybeUnhiddenMarkers||(t.maybeUnhiddenMarkers=[])).push(this)}this.lines.push(e)},bo.prototype.detachLine=function(e){if(this.lines.splice(B(this.lines,e),1),!this.lines.length&&this.doc.cm){var t=this.doc.cm.curOp;(t.maybeHiddenMarkers||(t.maybeHiddenMarkers=[])).push(this)}},at(bo);var xo=function(e,t){this.markers=e,this.primary=t;for(var r=0;r<e.length;++r)e[r].parent=this};function Co(e){return e.findMarks(ve(e.first,0),e.clipPos(ve(e.lastLine())),function(e){return e.parent})}function So(o){for(var e=function(e){var t=o[e],r=[t.primary.doc];Ni(t.primary.doc,function(e){return r.push(e)});for(var n=0;n<t.markers.length;n++){var i=t.markers[n];-1==B(r,i.doc)&&(i.parent=null,t.markers.splice(n--,1))}},t=0;t<o.length;t++)e(t)}xo.prototype.clear=function(){if(!this.explicitlyCleared){this.explicitlyCleared=!0;for(var e=0;e<this.markers.length;++e)this.markers[e].clear();sr(this,"clear")}},xo.prototype.find=function(e,t){return this.primary.find(e,t)},at(xo);var Lo=0,ko=function(e,t,r,n,i){if(!(this instanceof ko))return new ko(e,t,r,n,i);null==r&&(r=0),go.call(this,[new po([new Yt("",null)])]),this.first=r,this.scrollTop=this.scrollLeft=0,this.cantEdit=!1,this.cleanGeneration=1,this.modeFrontier=this.highlightFrontier=r;var o=ve(r,0);this.sel=bi(o),this.history=new Di(null),this.id=++Lo,this.modeOption=t,this.lineSep=n,this.direction="rtl"==i?"rtl":"ltr",this.extend=!1,"string"==typeof e&&(e=this.splitLines(e)),Mi(this,{from:o,to:o,text:e}),Yi(this,bi(o),V)};ko.prototype=Q(go.prototype,{constructor:ko,iter:function(e,t,r){r?this.iterN(e-this.first,t-e,r):this.iterN(this.first,this.first+this.size,e)},insert:function(e,t){for(var r=0,n=0;n<t.length;++n)r+=t[n].height;this.insertInner(e-this.first,t,r)},remove:function(e,t){this.removeInner(e-this.first,t)},getValue:function(e){var t=ce(this,this.first,this.first+this.size);return!1===e?t:t.join(e||this.lineSeparator())},setValue:$n(function(e){var t=ve(this.first,0),r=this.first+this.size-1;no(this,{from:t,to:ve(r,ae(this,r).text.length),text:this.splitLines(e),origin:"setValue",full:!0},!0),this.cm&&Tn(this.cm,0,0),Yi(this,bi(t),V)}),replaceRange:function(e,t,r,n){ao(this,e,t=Se(this,t),r=r?Se(this,r):t,n)},getRange:function(e,t,r){var n=ue(this,Se(this,e),Se(this,t));return!1===r?n:n.join(r||this.lineSeparator())},getLine:function(e){var t=this.getLineHandle(e);return t&&t.text},getLineHandle:function(e){if(pe(this,e))return ae(this,e)},getLineNumber:function(e){return fe(e)},getLineHandleVisualStart:function(e){return"number"==typeof e&&(e=ae(this,e)),Ue(e)},lineCount:function(){return this.size},firstLine:function(){return this.first},lastLine:function(){return this.first+this.size-1},clipPos:function(e){return Se(this,e)},getCursor:function(e){var t=this.sel.primary();return null==e||"head"==e?t.head:"anchor"==e?t.anchor:"end"==e||"to"==e||!1===e?t.to():t.from()},listSelections:function(){return this.sel.ranges},somethingSelected:function(){return this.sel.somethingSelected()},setCursor:$n(function(e,t,r){ji(this,Se(this,"number"==typeof e?ve(e,t||0):e),null,r)}),setSelection:$n(function(e,t,r){ji(this,Se(this,e),Se(this,t||e),r)}),extendSelection:$n(function(e,t,r){Ui(this,Se(this,e),t&&Se(this,t),r)}),extendSelections:$n(function(e,t){Vi(this,Le(this,e),t)}),extendSelectionsBy:$n(function(e,t){Vi(this,Le(this,q(this.sel.ranges,e)),t)}),setSelections:$n(function(e,t,r){if(e.length){for(var n=[],i=0;i<e.length;i++)n[i]=new mi(Se(this,e[i].anchor),Se(this,e[i].head));null==t&&(t=Math.min(e.length-1,this.sel.primIndex)),Yi(this,yi(this.cm,n,t),r)}}),addSelection:$n(function(e,t,r){var n=this.sel.ranges.slice(0);n.push(new mi(Se(this,e),Se(this,t||e))),Yi(this,yi(this.cm,n,n.length-1),r)}),getSelection:function(e){for(var t,r=this.sel.ranges,n=0;n<r.length;n++){var i=ue(this,r[n].from(),r[n].to());t=t?t.concat(i):i}return!1===e?t:t.join(e||this.lineSeparator())},getSelections:function(e){for(var t=[],r=this.sel.ranges,n=0;n<r.length;n++){var i=ue(this,r[n].from(),r[n].to());!1!==e&&(i=i.join(e||this.lineSeparator())),t[n]=i}return t},replaceSelection:function(e,t,r){for(var n=[],i=0;i<this.sel.ranges.length;i++)n[i]=e;this.replaceSelections(n,t,r||"+input")},replaceSelections:$n(function(e,t,r){for(var n=[],i=this.sel,o=0;o<i.ranges.length;o++){var l=i.ranges[o];n[o]={from:l.from(),to:l.to(),text:this.splitLines(e[o]),origin:r}}for(var s=t&&"end"!=t&&function(e,t,r){for(var n=[],i=ve(e.first,0),o=i,l=0;l<t.length;l++){var s=t[l],a=Si(s.from,i,o),u=Si(wi(s),i,o);if(i=s.to,o=u,"around"==r){var c=e.sel.ranges[l],h=me(c.head,c.anchor)<0;n[l]=new mi(h?u:a,h?a:u)}else n[l]=new mi(a,a)}return new vi(n,e.sel.primIndex)}(this,n,t),a=n.length-1;0<=a;a--)no(this,n[a]);s?Xi(this,s):this.cm&&kn(this.cm)}),undo:$n(function(){oo(this,"undo")}),redo:$n(function(){oo(this,"redo")}),undoSelection:$n(function(){oo(this,"undo",!0)}),redoSelection:$n(function(){oo(this,"redo",!0)}),setExtending:function(e){this.extend=e},getExtending:function(){return this.extend},historySize:function(){for(var e=this.history,t=0,r=0,n=0;n<e.done.length;n++)e.done[n].ranges||++t;for(var i=0;i<e.undone.length;i++)e.undone[i].ranges||++r;return{undo:t,redo:r}},clearHistory:function(){this.history=new Di(this.history.maxGeneration)},markClean:function(){this.cleanGeneration=this.changeGeneration(!0)},changeGeneration:function(e){return e&&(this.history.lastOp=this.history.lastSelOp=this.history.lastOrigin=null),this.history.generation},isClean:function(e){return this.history.generation==(e||this.cleanGeneration)},getHistory:function(){return{done:Bi(this.history.done),undone:Bi(this.history.undone)}},setHistory:function(e){var t=this.history=new Di(this.history.maxGeneration);t.done=Bi(e.done.slice(0),null,!0),t.undone=Bi(e.undone.slice(0),null,!0)},setGutterMarker:$n(function(e,r,n){return fo(this,e,"gutter",function(e){var t=e.gutterMarkers||(e.gutterMarkers={});return!(t[r]=n)&&re(t)&&(e.gutterMarkers=null),!0})}),clearGutter:$n(function(t){var r=this;this.iter(function(e){e.gutterMarkers&&e.gutterMarkers[t]&&fo(r,e,"gutter",function(){return e.gutterMarkers[t]=null,re(e.gutterMarkers)&&(e.gutterMarkers=null),!0})})}),lineInfo:function(e){var t;if("number"==typeof e){if(!pe(this,e))return null;if(!(e=ae(this,t=e)))return null}else if(null==(t=fe(e)))return null;return{line:t,handle:e,text:e.text,gutterMarkers:e.gutterMarkers,textClass:e.textClass,bgClass:e.bgClass,wrapClass:e.wrapClass,widgets:e.widgets}},addLineClass:$n(function(e,r,n){return fo(this,e,"gutter"==r?"gutter":"class",function(e){var t="text"==r?"textClass":"background"==r?"bgClass":"gutter"==r?"gutterClass":"wrapClass";if(e[t]){if(L(n).test(e[t]))return!1;e[t]+=" "+n}else e[t]=n;return!0})}),removeLineClass:$n(function(e,o,l){return fo(this,e,"gutter"==o?"gutter":"class",function(e){var t="text"==o?"textClass":"background"==o?"bgClass":"gutter"==o?"gutterClass":"wrapClass",r=e[t];if(!r)return!1;if(null==l)e[t]=null;else{var n=r.match(L(l));if(!n)return!1;var i=n.index+n[0].length;e[t]=r.slice(0,n.index)+(n.index&&i!=r.length?" ":"")+r.slice(i)||null}return!0})}),addLineWidget:$n(function(e,t,r){return i=e,o=new vo(n=this,t,r),(l=n.cm)&&o.noHScroll&&(l.display.alignWidgets=!0),fo(n,i,"widget",function(e){var t=e.widgets||(e.widgets=[]);if(null==o.insertAt?t.push(o):t.splice(Math.min(t.length-1,Math.max(0,o.insertAt)),0,o),o.line=e,l&&!je(n,e)){var r=Ye(e)<n.scrollTop;he(e,e.height+br(o)),r&&Ln(l,o.height),l.curOp.forceUpdate=!0}return!0}),l&&sr(l,"lineWidgetAdded",l,o,"number"==typeof i?i:fe(i)),o;var n,i,o,l}),removeLineWidget:function(e){e.clear()},markText:function(e,t,r){return wo(this,Se(this,e),Se(this,t),r,r&&r.type||"range")},setBookmark:function(e,t){var r={replacedWith:t&&(null==t.nodeType?t.widget:t),insertLeft:t&&t.insertLeft,clearWhenEmpty:!1,shared:t&&t.shared,handleMouseEvents:t&&t.handleMouseEvents};return wo(this,e=Se(this,e),e,r,"bookmark")},findMarksAt:function(e){var t=[],r=ae(this,(e=Se(this,e)).line).markedSpans;if(r)for(var n=0;n<r.length;++n){var i=r[n];(null==i.from||i.from<=e.ch)&&(null==i.to||i.to>=e.ch)&&t.push(i.marker.parent||i.marker)}return t},findMarks:function(i,o,l){i=Se(this,i),o=Se(this,o);var s=[],a=i.line;return this.iter(i.line,o.line+1,function(e){var t=e.markedSpans;if(t)for(var r=0;r<t.length;r++){var n=t[r];null!=n.to&&a==i.line&&i.ch>=n.to||null==n.from&&a!=i.line||null!=n.from&&a==o.line&&n.from>=o.ch||l&&!l(n.marker)||s.push(n.marker.parent||n.marker)}++a}),s},getAllMarks:function(){var n=[];return this.iter(function(e){var t=e.markedSpans;if(t)for(var r=0;r<t.length;++r)null!=t[r].from&&n.push(t[r].marker)}),n},posFromIndex:function(r){var n,i=this.first,o=this.lineSeparator().length;return this.iter(function(e){var t=e.text.length+o;if(r<t)return n=r,!0;r-=t,++i}),Se(this,ve(i,n))},indexFromPos:function(e){var t=(e=Se(this,e)).ch;if(e.line<this.first||e.ch<0)return 0;var r=this.lineSeparator().length;return this.iter(this.first,e.line,function(e){t+=e.text.length+r}),t},copy:function(e){var t=new ko(ce(this,this.first,this.first+this.size),this.modeOption,this.first,this.lineSep,this.direction);return t.scrollTop=this.scrollTop,t.scrollLeft=this.scrollLeft,t.sel=this.sel,t.extend=!1,e&&(t.history.undoDepth=this.history.undoDepth,t.setHistory(this.getHistory())),t},linkedDoc:function(e){e||(e={});var t=this.first,r=this.first+this.size;null!=e.from&&e.from>t&&(t=e.from),null!=e.to&&e.to<r&&(r=e.to);var n=new ko(ce(this,t,r),e.mode||this.modeOption,t,this.lineSep,this.direction);return e.sharedHist&&(n.history=this.history),(this.linked||(this.linked=[])).push({doc:n,sharedHist:e.sharedHist}),n.linked=[{doc:this,isParent:!0,sharedHist:e.sharedHist}],function(e,t){for(var r=0;r<t.length;r++){var n=t[r],i=n.find(),o=e.clipPos(i.from),l=e.clipPos(i.to);if(me(o,l)){var s=wo(e,o,l,n.primary,n.primary.type);n.markers.push(s),s.parent=n}}}(n,Co(this)),n},unlinkDoc:function(e){if(e instanceof Cl&&(e=e.doc),this.linked)for(var t=0;t<this.linked.length;++t){if(this.linked[t].doc==e){this.linked.splice(t,1),e.unlinkDoc(this),So(Co(this));break}}if(e.history==this.history){var r=[e.id];Ni(e,function(e){return r.push(e.id)},!0),e.history=new Di(null),e.history.done=Bi(this.history.done,r),e.history.undone=Bi(this.history.undone,r)}},iterLinkedDocs:function(e){Ni(this,e)},getMode:function(){return this.mode},getEditor:function(){return this.cm},splitLines:function(e){return this.lineSep?e.split(this.lineSep):xt(e)},lineSeparator:function(){return this.lineSep||"\n"},setDirection:$n(function(e){var t;("rtl"!=e&&(e="ltr"),e!=this.direction)&&(this.direction=e,this.iter(function(e){return e.order=null}),this.cm&&Xn(t=this.cm,function(){Ai(t),qn(t)}))})}),ko.prototype.eachLine=ko.prototype.iter;var To=0;function Mo(e){var i=this;if(No(i),!ot(i,e)&&!wr(i.display,e)){ut(e),x&&(To=+new Date);var o=ln(i,e,!0),t=e.dataTransfer.files;if(o&&!i.isReadOnly())if(t&&t.length&&window.FileReader&&window.File)for(var l=t.length,s=Array(l),a=0,r=function(e,r){if(!i.options.allowDropFileTypes||-1!=B(i.options.allowDropFileTypes,e.type)){var n=new FileReader;n.onload=Yn(i,function(){var e=n.result;if(/[\x00-\x08\x0e-\x1f]{2}/.test(e)&&(e=""),s[r]=e,++a==l){var t={from:o=Se(i.doc,o),to:o,text:i.doc.splitLines(s.join(i.doc.lineSeparator())),origin:"paste"};no(i.doc,t),Xi(i.doc,bi(o,wi(t)))}}),n.readAsText(e)}},n=0;n<l;++n)r(t[n],n);else{if(i.state.draggingText&&-1<i.doc.sel.contains(o))return i.state.draggingText(e),void setTimeout(function(){return i.display.input.focus()},20);try{var u=e.dataTransfer.getData("Text");if(u){var c;if(i.state.draggingText&&!i.state.draggingText.copy&&(c=i.listSelections()),_i(i.doc,bi(o,o)),c)for(var h=0;h<c.length;++h)ao(i.doc,"",c[h].anchor,c[h].head,"drag");i.replaceSelection(u,"around","paste"),i.display.input.focus()}}catch(e){}}}}function No(e){e.display.dragCursor&&(e.display.lineSpace.removeChild(e.display.dragCursor),e.display.dragCursor=null)}function Oo(t){if(document.getElementsByClassName){for(var e=document.getElementsByClassName("CodeMirror"),r=[],n=0;n<e.length;n++){var i=e[n].CodeMirror;i&&r.push(i)}r.length&&r[0].operation(function(){for(var e=0;e<r.length;e++)t(r[e])})}}var Ao=!1;function Do(){var e;Ao||(tt(window,"resize",function(){null==e&&(e=setTimeout(function(){e=null,Oo(Wo)},100))}),tt(window,"blur",function(){return Oo(mn)}),Ao=!0)}function Wo(e){var t=e.display;t.cachedCharWidth=t.cachedTextHeight=t.cachedPaddingH=null,t.scrollbarsClipped=!1,e.setSize()}for(var Ho={3:"Pause",8:"Backspace",9:"Tab",13:"Enter",16:"Shift",17:"Ctrl",18:"Alt",19:"Pause",20:"CapsLock",27:"Esc",32:"Space",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"Left",38:"Up",39:"Right",40:"Down",44:"PrintScrn",45:"Insert",46:"Delete",59:";",61:"=",91:"Mod",92:"Mod",93:"Mod",106:"*",107:"=",109:"-",110:".",111:"/",127:"Delete",145:"ScrollLock",173:"-",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'",63232:"Up",63233:"Down",63234:"Left",63235:"Right",63272:"Delete",63273:"Home",63275:"End",63276:"PageUp",63277:"PageDown",63302:"Insert"},Fo=0;Fo<10;Fo++)Ho[Fo+48]=Ho[Fo+96]=String(Fo);for(var Po=65;Po<=90;Po++)Ho[Po]=String.fromCharCode(Po);for(var Eo=1;Eo<=12;Eo++)Ho[Eo+111]=Ho[Eo+63235]="F"+Eo;var Io={};function zo(e){var t,r,n,i,o=e.split(/-(?!$)/);e=o[o.length-1];for(var l=0;l<o.length-1;l++){var s=o[l];if(/^(cmd|meta|m)$/i.test(s))i=!0;else if(/^a(lt)?$/i.test(s))t=!0;else if(/^(c|ctrl|control)$/i.test(s))r=!0;else{if(!/^s(hift)?$/i.test(s))throw new Error("Unrecognized modifier name: "+s);n=!0}}return t&&(e="Alt-"+e),r&&(e="Ctrl-"+e),i&&(e="Cmd-"+e),n&&(e="Shift-"+e),e}function Ro(e){var t={};for(var r in e)if(e.hasOwnProperty(r)){var n=e[r];if(/^(name|fallthrough|(de|at)tach)$/.test(r))continue;if("..."==n){delete e[r];continue}for(var i=q(r.split(" "),zo),o=0;o<i.length;o++){var l=void 0,s=void 0;l=o==i.length-1?(s=i.join(" "),n):(s=i.slice(0,o+1).join(" "),"...");var a=t[s];if(a){if(a!=l)throw new Error("Inconsistent bindings for "+s)}else t[s]=l}delete e[r]}for(var u in t)e[u]=t[u];return e}function Bo(e,t,r,n){var i=(t=Ko(t)).call?t.call(e,n):t[e];if(!1===i)return"nothing";if("..."===i)return"multi";if(null!=i&&r(i))return"handled";if(t.fallthrough){if("[object Array]"!=Object.prototype.toString.call(t.fallthrough))return Bo(e,t.fallthrough,r,n);for(var o=0;o<t.fallthrough.length;o++){var l=Bo(e,t.fallthrough[o],r,n);if(l)return l}}}function Go(e){var t="string"==typeof e?e:Ho[e.keyCode];return"Ctrl"==t||"Alt"==t||"Shift"==t||"Mod"==t}function Uo(e,t,r){var n=e;return t.altKey&&"Alt"!=n&&(e="Alt-"+e),(y?t.metaKey:t.ctrlKey)&&"Ctrl"!=n&&(e="Ctrl-"+e),(y?t.ctrlKey:t.metaKey)&&"Cmd"!=n&&(e="Cmd-"+e),!r&&t.shiftKey&&"Shift"!=n&&(e="Shift-"+e),e}function Vo(e,t){if(v&&34==e.keyCode&&e.char)return!1;var r=Ho[e.keyCode];return null!=r&&!e.altGraphKey&&(3==e.keyCode&&e.code&&(r=e.code),Uo(r,e,t))}function Ko(e){return"string"==typeof e?Io[e]:e}function jo(t,e){for(var r=t.doc.sel.ranges,n=[],i=0;i<r.length;i++){for(var o=e(r[i]);n.length&&me(o.from,$(n).to)<=0;){var l=n.pop();if(me(l.from,o.from)<0){o.from=l.from;break}}n.push(o)}Xn(t,function(){for(var e=n.length-1;0<=e;e--)ao(t.doc,"",n[e].from,n[e].to,"+delete");kn(t)})}function Xo(e,t,r){var n=oe(e.text,t+r,r);return n<0||n>e.text.length?null:n}function Yo(e,t,r){var n=Xo(e,t.ch,r);return null==n?null:new ve(t.line,n,r<0?"after":"before")}function _o(e,t,r,n,i){if(e){var o=Je(r,t.doc.direction);if(o){var l,s=i<0?$(o):o[0],a=i<0==(1==s.level)?"after":"before";if(0<s.level||"rtl"==t.doc.direction){var u=Ar(t,r);l=i<0?r.text.length-1:0;var c=Dr(t,u,l).top;l=le(function(e){return Dr(t,u,e).top==c},i<0==(1==s.level)?s.from:s.to-1,l),"before"==a&&(l=Xo(r,l,1))}else l=i<0?s.to:s.from;return new ve(n,l,a)}}return new ve(n,i<0?r.text.length:0,i<0?"before":"after")}Io.basic={Left:"goCharLeft",Right:"goCharRight",Up:"goLineUp",Down:"goLineDown",End:"goLineEnd",Home:"goLineStartSmart",PageUp:"goPageUp",PageDown:"goPageDown",Delete:"delCharAfter",Backspace:"delCharBefore","Shift-Backspace":"delCharBefore",Tab:"defaultTab","Shift-Tab":"indentAuto",Enter:"newlineAndIndent",Insert:"toggleOverwrite",Esc:"singleSelection"},Io.pcDefault={"Ctrl-A":"selectAll","Ctrl-D":"deleteLine","Ctrl-Z":"undo","Shift-Ctrl-Z":"redo","Ctrl-Y":"redo","Ctrl-Home":"goDocStart","Ctrl-End":"goDocEnd","Ctrl-Up":"goLineUp","Ctrl-Down":"goLineDown","Ctrl-Left":"goGroupLeft","Ctrl-Right":"goGroupRight","Alt-Left":"goLineStart","Alt-Right":"goLineEnd","Ctrl-Backspace":"delGroupBefore","Ctrl-Delete":"delGroupAfter","Ctrl-S":"save","Ctrl-F":"find","Ctrl-G":"findNext","Shift-Ctrl-G":"findPrev","Shift-Ctrl-F":"replace","Shift-Ctrl-R":"replaceAll","Ctrl-[":"indentLess","Ctrl-]":"indentMore","Ctrl-U":"undoSelection","Shift-Ctrl-U":"redoSelection","Alt-U":"redoSelection",fallthrough:"basic"},Io.emacsy={"Ctrl-F":"goCharRight","Ctrl-B":"goCharLeft","Ctrl-P":"goLineUp","Ctrl-N":"goLineDown","Alt-F":"goWordRight","Alt-B":"goWordLeft","Ctrl-A":"goLineStart","Ctrl-E":"goLineEnd","Ctrl-V":"goPageDown","Shift-Ctrl-V":"goPageUp","Ctrl-D":"delCharAfter","Ctrl-H":"delCharBefore","Alt-D":"delWordAfter","Alt-Backspace":"delWordBefore","Ctrl-K":"killLine","Ctrl-T":"transposeChars","Ctrl-O":"openLine"},Io.macDefault={"Cmd-A":"selectAll","Cmd-D":"deleteLine","Cmd-Z":"undo","Shift-Cmd-Z":"redo","Cmd-Y":"redo","Cmd-Home":"goDocStart","Cmd-Up":"goDocStart","Cmd-End":"goDocEnd","Cmd-Down":"goDocEnd","Alt-Left":"goGroupLeft","Alt-Right":"goGroupRight","Cmd-Left":"goLineLeft","Cmd-Right":"goLineRight","Alt-Backspace":"delGroupBefore","Ctrl-Alt-Backspace":"delGroupAfter","Alt-Delete":"delGroupAfter","Cmd-S":"save","Cmd-F":"find","Cmd-G":"findNext","Shift-Cmd-G":"findPrev","Cmd-Alt-F":"replace","Shift-Cmd-Alt-F":"replaceAll","Cmd-[":"indentLess","Cmd-]":"indentMore","Cmd-Backspace":"delWrappedLineLeft","Cmd-Delete":"delWrappedLineRight","Cmd-U":"undoSelection","Shift-Cmd-U":"redoSelection","Ctrl-Up":"goDocStart","Ctrl-Down":"goDocEnd",fallthrough:["basic","emacsy"]},Io.default=w?Io.macDefault:Io.pcDefault;var $o={selectAll:to,singleSelection:function(e){return e.setSelection(e.getCursor("anchor"),e.getCursor("head"),V)},killLine:function(r){return jo(r,function(e){if(e.empty()){var t=ae(r.doc,e.head.line).text.length;return e.head.ch==t&&e.head.line<r.lastLine()?{from:e.head,to:ve(e.head.line+1,0)}:{from:e.head,to:ve(e.head.line,t)}}return{from:e.from(),to:e.to()}})},deleteLine:function(t){return jo(t,function(e){return{from:ve(e.from().line,0),to:Se(t.doc,ve(e.to().line+1,0))}})},delLineLeft:function(e){return jo(e,function(e){return{from:ve(e.from().line,0),to:e.from()}})},delWrappedLineLeft:function(r){return jo(r,function(e){var t=r.charCoords(e.head,"div").top+5;return{from:r.coordsChar({left:0,top:t},"div"),to:e.from()}})},delWrappedLineRight:function(n){return jo(n,function(e){var t=n.charCoords(e.head,"div").top+5,r=n.coordsChar({left:n.display.lineDiv.offsetWidth+100,top:t},"div");return{from:e.from(),to:r}})},undo:function(e){return e.undo()},redo:function(e){return e.redo()},undoSelection:function(e){return e.undoSelection()},redoSelection:function(e){return e.redoSelection()},goDocStart:function(e){return e.extendSelection(ve(e.firstLine(),0))},goDocEnd:function(e){return e.extendSelection(ve(e.lastLine()))},goLineStart:function(t){return t.extendSelectionsBy(function(e){return qo(t,e.head.line)},{origin:"+move",bias:1})},goLineStartSmart:function(t){return t.extendSelectionsBy(function(e){return Zo(t,e.head)},{origin:"+move",bias:1})},goLineEnd:function(t){return t.extendSelectionsBy(function(e){return function(e,t){var r=ae(e.doc,t),n=function(e){for(var t;t=Re(e);)e=t.find(1,!0).line;return e}(r);n!=r&&(t=fe(n));return _o(!0,e,r,t,-1)}(t,e.head.line)},{origin:"+move",bias:-1})},goLineRight:function(r){return r.extendSelectionsBy(function(e){var t=r.cursorCoords(e.head,"div").top+5;return r.coordsChar({left:r.display.lineDiv.offsetWidth+100,top:t},"div")},j)},goLineLeft:function(r){return r.extendSelectionsBy(function(e){var t=r.cursorCoords(e.head,"div").top+5;return r.coordsChar({left:0,top:t},"div")},j)},goLineLeftSmart:function(n){return n.extendSelectionsBy(function(e){var t=n.cursorCoords(e.head,"div").top+5,r=n.coordsChar({left:0,top:t},"div");return r.ch<n.getLine(r.line).search(/\S/)?Zo(n,e.head):r},j)},goLineUp:function(e){return e.moveV(-1,"line")},goLineDown:function(e){return e.moveV(1,"line")},goPageUp:function(e){return e.moveV(-1,"page")},goPageDown:function(e){return e.moveV(1,"page")},goCharLeft:function(e){return e.moveH(-1,"char")},goCharRight:function(e){return e.moveH(1,"char")},goColumnLeft:function(e){return e.moveH(-1,"column")},goColumnRight:function(e){return e.moveH(1,"column")},goWordLeft:function(e){return e.moveH(-1,"word")},goGroupRight:function(e){return e.moveH(1,"group")},goGroupLeft:function(e){return e.moveH(-1,"group")},goWordRight:function(e){return e.moveH(1,"word")},delCharBefore:function(e){return e.deleteH(-1,"char")},delCharAfter:function(e){return e.deleteH(1,"char")},delWordBefore:function(e){return e.deleteH(-1,"word")},delWordAfter:function(e){return e.deleteH(1,"word")},delGroupBefore:function(e){return e.deleteH(-1,"group")},delGroupAfter:function(e){return e.deleteH(1,"group")},indentAuto:function(e){return e.indentSelection("smart")},indentMore:function(e){return e.indentSelection("add")},indentLess:function(e){return e.indentSelection("subtract")},insertTab:function(e){return e.replaceSelection("\t")},insertSoftTab:function(e){for(var t=[],r=e.listSelections(),n=e.options.tabSize,i=0;i<r.length;i++){var o=r[i].from(),l=z(e.getLine(o.line),o.ch,n);t.push(_(n-l%n))}e.replaceSelections(t)},defaultTab:function(e){e.somethingSelected()?e.indentSelection("add"):e.execCommand("insertTab")},transposeChars:function(l){return Xn(l,function(){for(var e=l.listSelections(),t=[],r=0;r<e.length;r++)if(e[r].empty()){var n=e[r].head,i=ae(l.doc,n.line).text;if(i)if(n.ch==i.length&&(n=new ve(n.line,n.ch-1)),0<n.ch)n=new ve(n.line,n.ch+1),l.replaceRange(i.charAt(n.ch-1)+i.charAt(n.ch-2),ve(n.line,n.ch-2),n,"+transpose");else if(n.line>l.doc.first){var o=ae(l.doc,n.line-1).text;o&&(n=new ve(n.line,1),l.replaceRange(i.charAt(0)+l.doc.lineSeparator()+o.charAt(o.length-1),ve(n.line-1,o.length-1),n,"+transpose"))}t.push(new mi(n,n))}l.setSelections(t)})},newlineAndIndent:function(n){return Xn(n,function(){for(var e=n.listSelections(),t=e.length-1;0<=t;t--)n.replaceRange(n.doc.lineSeparator(),e[t].anchor,e[t].head,"+input");e=n.listSelections();for(var r=0;r<e.length;r++)n.indentLine(e[r].from().line,null,!0);kn(n)})},openLine:function(e){return e.replaceSelection("\n","start")},toggleOverwrite:function(e){return e.toggleOverwrite()}};function qo(e,t){var r=ae(e.doc,t),n=Ue(r);return n!=r&&(t=fe(n)),_o(!0,e,n,t,1)}function Zo(e,t){var r=qo(e,t.line),n=ae(e.doc,r.line),i=Je(n,e.doc.direction);if(i&&0!=i[0].level)return r;var o=Math.max(0,n.text.search(/\S/)),l=t.line==r.line&&t.ch<=o&&t.ch;return ve(r.line,l?0:o,r.sticky)}function Qo(e,t,r){if("string"==typeof t&&!(t=$o[t]))return!1;e.display.input.ensurePolled();var n=e.display.shift,i=!1;try{e.isReadOnly()&&(e.state.suppressEdits=!0),r&&(e.display.shift=!1),i=t(e)!=U}finally{e.display.shift=n,e.state.suppressEdits=!1}return i}var Jo=new R;function el(e,t,r,n){var i=e.state.keySeq;if(i){if(Go(t))return"handled";if(/\'$/.test(t)?e.state.keySeq=null:Jo.set(50,function(){e.state.keySeq==i&&(e.state.keySeq=null,e.display.input.reset())}),tl(e,i+" "+t,r,n))return!0}return tl(e,t,r,n)}function tl(e,t,r,n){var i=function(e,t,r){for(var n=0;n<e.state.keyMaps.length;n++){var i=Bo(t,e.state.keyMaps[n],r,e);if(i)return i}return e.options.extraKeys&&Bo(t,e.options.extraKeys,r,e)||Bo(t,e.options.keyMap,r,e)}(e,t,n);return"multi"==i&&(e.state.keySeq=t),"handled"==i&&sr(e,"keyHandled",e,t,r),"handled"!=i&&"multi"!=i||(ut(r),dn(e)),!!i}function rl(t,e){var r=Vo(e,!0);return!!r&&(e.shiftKey&&!t.state.keySeq?el(t,"Shift-"+r,e,function(e){return Qo(t,e,!0)})||el(t,r,e,function(e){if("string"==typeof e?/^go[A-Z]/.test(e):e.motion)return Qo(t,e)}):el(t,r,e,function(e){return Qo(t,e)}))}var nl=null;function il(e){var t=this;if(t.curOp.focus=W(),!ot(t,e)){x&&C<11&&27==e.keyCode&&(e.returnValue=!1);var r=e.keyCode;t.display.shift=16==r||e.shiftKey;var n=rl(t,e);v&&(nl=n?r:null,!n&&88==r&&!St&&(w?e.metaKey:e.ctrlKey)&&t.replaceSelection("",null,"cut")),18!=r||/\bCodeMirror-crosshair\b/.test(t.display.lineDiv.className)||function(e){var t=e.display.lineDiv;function r(e){18!=e.keyCode&&e.altKey||(T(t,"CodeMirror-crosshair"),nt(document,"keyup",r),nt(document,"mouseover",r))}H(t,"CodeMirror-crosshair"),tt(document,"keyup",r),tt(document,"mouseover",r)}(t)}}function ol(e){16==e.keyCode&&(this.doc.sel.shift=!1),ot(this,e)}function ll(e){var t=this;if(!(wr(t.display,e)||ot(t,e)||e.ctrlKey&&!e.altKey||w&&e.metaKey)){var r=e.keyCode,n=e.charCode;if(v&&r==nl)return nl=null,void ut(e);if(!v||e.which&&!(e.which<10)||!rl(t,e)){var i,o=String.fromCharCode(null==n?r:n);if("\b"!=o)if(!el(i=t,"'"+o+"'",e,function(e){return Qo(i,e,!0)}))t.display.input.onKeyPress(e)}}}var sl,al,ul=function(e,t,r){this.time=e,this.pos=t,this.button=r};function cl(e){var t=this,r=t.display;if(!(ot(t,e)||r.activeTouch&&r.input.supportsTouch()))if(r.input.ensurePolled(),r.shift=e.shiftKey,wr(r,e))b||(r.scroller.draggable=!1,setTimeout(function(){return r.scroller.draggable=!0},100));else if(!dl(t,e)){var n,i,o,l=ln(t,e),s=pt(e),a=l?(n=l,i=s,o=+new Date,al&&al.compare(o,n,i)?(sl=al=null,"triple"):sl&&sl.compare(o,n,i)?(al=new ul(o,n,i),sl=null,"double"):(sl=new ul(o,n,i),al=null,"single")):"single";window.focus(),1==s&&t.state.selectingText&&t.state.selectingText(e),l&&function(r,e,n,t,i){var o="Click";"double"==t?o="Double"+o:"triple"==t&&(o="Triple"+o);return el(r,Uo(o=(1==e?"Left":2==e?"Middle":"Right")+o,i),i,function(e){if("string"==typeof e&&(e=$o[e]),!e)return!1;var t=!1;try{r.isReadOnly()&&(r.state.suppressEdits=!0),t=e(r,n)!=U}finally{r.state.suppressEdits=!1}return t})}(t,s,l,a,e)||(1==s?l?function(e,t,r,n){x?setTimeout(E(pn,e),0):e.curOp.focus=W();var i,o=function(e,t,r){var n=e.getOption("configureMouse"),i=n?n(e,t,r):{};if(null==i.unit){var o=d?r.shiftKey&&r.metaKey:r.altKey;i.unit=o?"rectangle":"single"==t?"char":"double"==t?"word":"line"}(null==i.extend||e.doc.extend)&&(i.extend=e.doc.extend||r.shiftKey);null==i.addNew&&(i.addNew=w?r.metaKey:r.ctrlKey);null==i.moveOnDrag&&(i.moveOnDrag=!(w?r.altKey:r.ctrlKey));return i}(e,r,n),l=e.doc.sel;e.options.dragDrop&&mt&&!e.isReadOnly()&&"single"==r&&-1<(i=l.contains(t))&&(me((i=l.ranges[i]).from(),t)<0||0<t.xRel)&&(0<me(i.to(),t)||t.xRel<0)?function(t,r,n,i){var o=t.display,l=!1,s=Yn(t,function(e){b&&(o.scroller.draggable=!1),t.state.draggingText=!1,nt(o.wrapper.ownerDocument,"mouseup",s),nt(o.wrapper.ownerDocument,"mousemove",a),nt(o.scroller,"dragstart",u),nt(o.scroller,"drop",s),l||(ut(e),i.addNew||Ui(t.doc,n,null,null,i.extend),b||x&&9==C?setTimeout(function(){o.wrapper.ownerDocument.body.focus(),o.input.focus()},20):o.input.focus())}),a=function(e){l=l||10<=Math.abs(r.clientX-e.clientX)+Math.abs(r.clientY-e.clientY)},u=function(){return l=!0};b&&(o.scroller.draggable=!0);(t.state.draggingText=s).copy=!i.moveOnDrag,o.scroller.dragDrop&&o.scroller.dragDrop();tt(o.wrapper.ownerDocument,"mouseup",s),tt(o.wrapper.ownerDocument,"mousemove",a),tt(o.scroller,"dragstart",u),tt(o.scroller,"drop",s),gn(t),setTimeout(function(){return o.input.focus()},20)}(e,n,t,o):function(v,e,m,y){var l=v.display,b=v.doc;ut(e);var w,x,C=b.sel,t=C.ranges;y.addNew&&!y.extend?(x=b.sel.contains(m),w=-1<x?t[x]:new mi(m,m)):(w=b.sel.primary(),x=b.sel.primIndex);if("rectangle"==y.unit)y.addNew||(w=new mi(m,m)),m=ln(v,e,!0,!0),x=-1;else{var r=hl(v,m,y.unit);w=y.extend?Gi(w,r.anchor,r.head,y.extend):r}y.addNew?-1==x?(x=t.length,Yi(b,yi(v,t.concat([w]),x),{scroll:!1,origin:"*mouse"})):1<t.length&&t[x].empty()&&"char"==y.unit&&!y.extend?(Yi(b,yi(v,t.slice(0,x).concat(t.slice(x+1)),0),{scroll:!1,origin:"*mouse"}),C=b.sel):Ki(b,x,w,K):(Yi(b,new vi([w],x=0),K),C=b.sel);var S=m;function s(e){if(0!=me(S,e))if(S=e,"rectangle"==y.unit){for(var t=[],r=v.options.tabSize,n=z(ae(b,m.line).text,m.ch,r),i=z(ae(b,e.line).text,e.ch,r),o=Math.min(n,i),l=Math.max(n,i),s=Math.min(m.line,e.line),a=Math.min(v.lastLine(),Math.max(m.line,e.line));s<=a;s++){var u=ae(b,s).text,c=X(u,o,r);o==l?t.push(new mi(ve(s,c),ve(s,c))):u.length>c&&t.push(new mi(ve(s,c),ve(s,X(u,l,r))))}t.length||t.push(new mi(m,m)),Yi(b,yi(v,C.ranges.slice(0,x).concat(t),x),{origin:"*mouse",scroll:!1}),v.scrollIntoView(e)}else{var h,f=w,d=hl(v,e,y.unit),p=f.anchor;p=0<me(d.anchor,p)?(h=d.head,xe(f.from(),d.anchor)):(h=d.anchor,we(f.to(),d.head));var g=C.ranges.slice(0);g[x]=function(e,t){var r=t.anchor,n=t.head,i=ae(e.doc,r.line);if(0==me(r,n)&&r.sticky==n.sticky)return t;var o=Je(i);if(!o)return t;var l=Ze(o,r.ch,r.sticky),s=o[l];if(s.from!=r.ch&&s.to!=r.ch)return t;var a,u=l+(s.from==r.ch==(1!=s.level)?0:1);if(0==u||u==o.length)return t;if(n.line!=r.line)a=0<(n.line-r.line)*("ltr"==e.doc.direction?1:-1);else{var c=Ze(o,n.ch,n.sticky),h=c-l||(n.ch-r.ch)*(1==s.level?-1:1);a=c==u-1||c==u?h<0:0<h}var f=o[u+(a?-1:0)],d=a==(1==f.level),p=d?f.from:f.to,g=d?"after":"before";return r.ch==p&&r.sticky==g?t:new mi(new ve(r.line,p,g),n)}(v,new mi(Se(b,p),h)),Yi(b,yi(v,g,x),K)}}var a=l.wrapper.getBoundingClientRect(),u=0;function n(e){v.state.selectingText=!1,u=1/0,ut(e),l.input.focus(),nt(l.wrapper.ownerDocument,"mousemove",i),nt(l.wrapper.ownerDocument,"mouseup",o),b.history.lastSelOrigin=null}var i=Yn(v,function(e){0!==e.buttons&&pt(e)?function e(t){var r=++u;var n=ln(v,t,!0,"rectangle"==y.unit);if(!n)return;if(0!=me(n,S)){v.curOp.focus=W(),s(n);var i=wn(l,b);(n.line>=i.to||n.line<i.from)&&setTimeout(Yn(v,function(){u==r&&e(t)}),150)}else{var o=t.clientY<a.top?-20:t.clientY>a.bottom?20:0;o&&setTimeout(Yn(v,function(){u==r&&(l.scroller.scrollTop+=o,e(t))}),50)}}(e):n(e)}),o=Yn(v,n);v.state.selectingText=o,tt(l.wrapper.ownerDocument,"mousemove",i),tt(l.wrapper.ownerDocument,"mouseup",o)}(e,n,t,o)}(t,l,a,e):dt(e)==r.scroller&&ut(e):2==s?(l&&Ui(t.doc,l),setTimeout(function(){return r.input.focus()},20)):3==s&&(S?t.display.input.onContextMenu(e):gn(t)))}}function hl(e,t,r){if("char"==r)return new mi(t,t);if("word"==r)return e.findWordAt(t);if("line"==r)return new mi(ve(t.line,0),Se(e.doc,ve(t.line+1,0)));var n=r(e,t);return new mi(n.from,n.to)}function fl(e,t,r,n){var i,o;if(t.touches)i=t.touches[0].clientX,o=t.touches[0].clientY;else try{i=t.clientX,o=t.clientY}catch(t){return!1}if(i>=Math.floor(e.display.gutters.getBoundingClientRect().right))return!1;n&&ut(t);var l=e.display,s=l.lineDiv.getBoundingClientRect();if(o>s.bottom||!st(e,r))return ht(t);o-=s.top-l.viewOffset;for(var a=0;a<e.options.gutters.length;++a){var u=l.gutters.childNodes[a];if(u&&u.getBoundingClientRect().right>=i)return it(e,r,e,de(e.doc,o),e.options.gutters[a],t),ht(t)}}function dl(e,t){return fl(e,t,"gutterClick",!0)}function pl(e,t){var r,n;wr(e.display,t)||(n=t,st(r=e,"gutterContextMenu")&&fl(r,n,"gutterContextMenu",!1))||(ot(e,t,"contextmenu")||S||e.display.input.onContextMenu(t))}function gl(e){e.display.wrapper.className=e.display.wrapper.className.replace(/\s*cm-s-\S+/g,"")+e.options.theme.replace(/(^|\s)\s*/g," cm-s-"),zr(e)}ul.prototype.compare=function(e,t,r){return this.time+400>e&&0==me(t,this.pos)&&r==this.button};var vl={toString:function(){return"CodeMirror.Init"}},ml={},yl={};function bl(e){ui(e),qn(e),xn(e)}function wl(e,t,r){if(!t!=!(r&&r!=vl)){var n=e.display.dragFunctions,i=t?tt:nt;i(e.display.scroller,"dragstart",n.start),i(e.display.scroller,"dragenter",n.enter),i(e.display.scroller,"dragover",n.over),i(e.display.scroller,"dragleave",n.leave),i(e.display.scroller,"drop",n.drop)}}function xl(e){e.options.lineWrapping?(H(e.display.wrapper,"CodeMirror-wrap"),e.display.sizer.style.minWidth="",e.display.sizerWidth=null):(T(e.display.wrapper,"CodeMirror-wrap"),$e(e)),on(e),qn(e),zr(e),setTimeout(function(){return Pn(e)},100)}function Cl(e,t){var r=this;if(!(this instanceof Cl))return new Cl(e,t);this.options=t=t?I(t):{},I(ml,t,!1),ci(t);var n=t.value;"string"==typeof n?n=new ko(n,t.mode,null,t.lineSeparator,t.direction):t.mode&&(n.modeOption=t.mode),this.doc=n;var i=new Cl.inputStyles[t.inputStyle](this),o=this.display=new se(e,n,i);for(var l in ui(o.wrapper.CodeMirror=this),gl(this),t.lineWrapping&&(this.display.wrapper.className+=" CodeMirror-wrap"),zn(this),this.state={keyMaps:[],overlays:[],modeGen:0,overwrite:!1,delayingBlurEvent:!1,focused:!1,suppressEdits:!1,pasteIncoming:-1,cutIncoming:-1,selectingText:!1,draggingText:!1,highlight:new R,keySeq:null,specialChars:null},t.autofocus&&!f&&o.input.focus(),x&&C<11&&setTimeout(function(){return r.display.input.reset(!0)},20),function(i){var o=i.display;tt(o.scroller,"mousedown",Yn(i,cl)),tt(o.scroller,"dblclick",x&&C<11?Yn(i,function(e){if(!ot(i,e)){var t=ln(i,e);if(t&&!dl(i,e)&&!wr(i.display,e)){ut(e);var r=i.findWordAt(t);Ui(i.doc,r.anchor,r.head)}}}):function(e){return ot(i,e)||ut(e)});tt(o.scroller,"contextmenu",function(e){return pl(i,e)});var r,n={end:0};function l(){o.activeTouch&&(r=setTimeout(function(){return o.activeTouch=null},1e3),(n=o.activeTouch).end=+new Date)}function s(e,t){if(null==t.left)return!0;var r=t.left-e.left,n=t.top-e.top;return 400<r*r+n*n}tt(o.scroller,"touchstart",function(e){if(!ot(i,e)&&!function(e){if(1!=e.touches.length)return!1;var t=e.touches[0];return t.radiusX<=1&&t.radiusY<=1}(e)&&!dl(i,e)){o.input.ensurePolled(),clearTimeout(r);var t=+new Date;o.activeTouch={start:t,moved:!1,prev:t-n.end<=300?n:null},1==e.touches.length&&(o.activeTouch.left=e.touches[0].pageX,o.activeTouch.top=e.touches[0].pageY)}}),tt(o.scroller,"touchmove",function(){o.activeTouch&&(o.activeTouch.moved=!0)}),tt(o.scroller,"touchend",function(e){var t=o.activeTouch;if(t&&!wr(o,e)&&null!=t.left&&!t.moved&&new Date-t.start<300){var r,n=i.coordsChar(o.activeTouch,"page");r=!t.prev||s(t,t.prev)?new mi(n,n):!t.prev.prev||s(t,t.prev.prev)?i.findWordAt(n):new mi(ve(n.line,0),Se(i.doc,ve(n.line+1,0))),i.setSelection(r.anchor,r.head),i.focus(),ut(e)}l()}),tt(o.scroller,"touchcancel",l),tt(o.scroller,"scroll",function(){o.scroller.clientHeight&&(On(i,o.scroller.scrollTop),Dn(i,o.scroller.scrollLeft,!0),it(i,"scroll",i))}),tt(o.scroller,"mousewheel",function(e){return gi(i,e)}),tt(o.scroller,"DOMMouseScroll",function(e){return gi(i,e)}),tt(o.wrapper,"scroll",function(){return o.wrapper.scrollTop=o.wrapper.scrollLeft=0}),o.dragFunctions={enter:function(e){ot(i,e)||ft(e)},over:function(e){ot(i,e)||(!function(e,t){var r=ln(e,t);if(r){var n=document.createDocumentFragment();cn(e,r,n),e.display.dragCursor||(e.display.dragCursor=A("div",null,"CodeMirror-cursors CodeMirror-dragcursors"),e.display.lineSpace.insertBefore(e.display.dragCursor,e.display.cursorDiv)),N(e.display.dragCursor,n)}}(i,e),ft(e))},start:function(e){return function(e,t){if(x&&(!e.state.draggingText||+new Date-To<100))ft(t);else if(!ot(e,t)&&!wr(e.display,t)&&(t.dataTransfer.setData("Text",e.getSelection()),t.dataTransfer.effectAllowed="copyMove",t.dataTransfer.setDragImage&&!a)){var r=A("img",null,null,"position: fixed; left: 0; top: 0;");r.src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",v&&(r.width=r.height=1,e.display.wrapper.appendChild(r),r._top=r.offsetTop),t.dataTransfer.setDragImage(r,0,0),v&&r.parentNode.removeChild(r)}}(i,e)},drop:Yn(i,Mo),leave:function(e){ot(i,e)||No(i)}};var e=o.input.getField();tt(e,"keyup",function(e){return ol.call(i,e)}),tt(e,"keydown",Yn(i,il)),tt(e,"keypress",Yn(i,ll)),tt(e,"focus",function(e){return vn(i,e)}),tt(e,"blur",function(e){return mn(i,e)})}(this),Do(),Bn(this),this.curOp.forceUpdate=!0,Oi(this,n),t.autofocus&&!f||this.hasFocus()?setTimeout(E(vn,this),20):mn(this),yl)yl.hasOwnProperty(l)&&yl[l](r,t[l],vl);Cn(this),t.finishInit&&t.finishInit(this);for(var s=0;s<Sl.length;++s)Sl[s](r);Gn(this),b&&t.lineWrapping&&"optimizelegibility"==getComputedStyle(o.lineDiv).textRendering&&(o.lineDiv.style.textRendering="auto")}Cl.defaults=ml,Cl.optionHandlers=yl;var Sl=[];function Ll(e,t,r,n){var i,o=e.doc;null==r&&(r="add"),"smart"==r&&(o.mode.indent?i=Rt(e,t).state:r="prev");var l=e.options.tabSize,s=ae(o,t),a=z(s.text,null,l);s.stateAfter&&(s.stateAfter=null);var u,c=s.text.match(/^\s*/)[0];if(n||/\S/.test(s.text)){if("smart"==r&&((u=o.mode.indent(i,s.text.slice(c.length),s.text))==U||150<u)){if(!n)return;r="prev"}}else u=0,r="not";"prev"==r?u=t>o.first?z(ae(o,t-1).text,null,l):0:"add"==r?u=a+e.options.indentUnit:"subtract"==r?u=a-e.options.indentUnit:"number"==typeof r&&(u=a+r),u=Math.max(0,u);var h="",f=0;if(e.options.indentWithTabs)for(var d=Math.floor(u/l);d;--d)f+=l,h+="\t";if(f<u&&(h+=_(u-f)),h!=c)return ao(o,h,ve(t,0),ve(t,c.length),"+input"),!(s.stateAfter=null);for(var p=0;p<o.sel.ranges.length;p++){var g=o.sel.ranges[p];if(g.head.line==t&&g.head.ch<c.length){var v=ve(t,c.length);Ki(o,p,new mi(v,v));break}}}Cl.defineInitHook=function(e){return Sl.push(e)};var kl=null;function Tl(e){kl=e}function Ml(e,t,r,n,i){var o=e.doc;e.display.shift=!1,n||(n=o.sel);var l=+new Date-200,s="paste"==i||e.state.pasteIncoming>l,a=xt(t),u=null;if(s&&1<n.ranges.length)if(kl&&kl.text.join("\n")==t){if(n.ranges.length%kl.text.length==0){u=[];for(var c=0;c<kl.text.length;c++)u.push(o.splitLines(kl.text[c]))}}else a.length==n.ranges.length&&e.options.pasteLinesPerSelection&&(u=q(a,function(e){return[e]}));for(var h=e.curOp.updateInput,f=n.ranges.length-1;0<=f;f--){var d=n.ranges[f],p=d.from(),g=d.to();d.empty()&&(r&&0<r?p=ve(p.line,p.ch-r):e.state.overwrite&&!s?g=ve(g.line,Math.min(ae(o,g.line).text.length,g.ch+$(a).length)):s&&kl&&kl.lineWise&&kl.text.join("\n")==t&&(p=g=ve(p.line,0)));var v={from:p,to:g,text:u?u[f%u.length]:a,origin:i||(s?"paste":e.state.cutIncoming>l?"cut":"+input")};no(e.doc,v),sr(e,"inputRead",e,v)}t&&!s&&Ol(e,t),kn(e),e.curOp.updateInput<2&&(e.curOp.updateInput=h),e.curOp.typing=!0,e.state.pasteIncoming=e.state.cutIncoming=-1}function Nl(e,t){var r=e.clipboardData&&e.clipboardData.getData("Text");if(r)return e.preventDefault(),t.isReadOnly()||t.options.disableInput||Xn(t,function(){return Ml(t,r,0,null,"paste")}),!0}function Ol(e,t){if(e.options.electricChars&&e.options.smartIndent)for(var r=e.doc.sel,n=r.ranges.length-1;0<=n;n--){var i=r.ranges[n];if(!(100<i.head.ch||n&&r.ranges[n-1].head.line==i.head.line)){var o=e.getModeAt(i.head),l=!1;if(o.electricChars){for(var s=0;s<o.electricChars.length;s++)if(-1<t.indexOf(o.electricChars.charAt(s))){l=Ll(e,i.head.line,"smart");break}}else o.electricInput&&o.electricInput.test(ae(e.doc,i.head.line).text.slice(0,i.head.ch))&&(l=Ll(e,i.head.line,"smart"));l&&sr(e,"electricInput",e,i.head.line)}}}function Al(e){for(var t=[],r=[],n=0;n<e.doc.sel.ranges.length;n++){var i=e.doc.sel.ranges[n].head.line,o={anchor:ve(i,0),head:ve(i+1,0)};r.push(o),t.push(e.getRange(o.anchor,o.head))}return{text:t,ranges:r}}function Dl(e,t,r,n){e.setAttribute("autocorrect",!!r),e.setAttribute("autocapitalize",!!n),e.setAttribute("spellcheck",!!t)}function Wl(){var e=A("textarea",null,null,"position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; outline: none"),t=A("div",[e],null,"overflow: hidden; position: relative; width: 3px; height: 0px;");return b?e.style.width="1000px":e.setAttribute("wrap","off"),c&&(e.style.border="1px solid black"),Dl(e),t}function Hl(n,i,o,e,l){var t=i,r=o,s=ae(n,i.line);function a(e){var t,r;if(null==(t=l?function(t,r,s,e){var a=Je(r,t.doc.direction);if(!a)return Yo(r,s,e);s.ch>=r.text.length?(s.ch=r.text.length,s.sticky="before"):s.ch<=0&&(s.ch=0,s.sticky="after");var n=Ze(a,s.ch,s.sticky),i=a[n];if("ltr"==t.doc.direction&&i.level%2==0&&(0<e?i.to>s.ch:i.from<s.ch))return Yo(r,s,e);var o,u=function(e,t){return Xo(r,e instanceof ve?e.ch:e,t)},l=function(e){return t.options.lineWrapping?(o=o||Ar(t,r),qr(t,r,o,e)):{begin:0,end:r.text.length}},c=l("before"==s.sticky?u(s,-1):s.ch);if("rtl"==t.doc.direction||1==i.level){var h=1==i.level==e<0,f=u(s,h?1:-1);if(null!=f&&(h?f<=i.to&&f<=c.end:f>=i.from&&f>=c.begin)){var d=h?"before":"after";return new ve(s.line,f,d)}}var p=function(e,t,r){for(var n=function(e,t){return t?new ve(s.line,u(e,1),"before"):new ve(s.line,e,"after")};0<=e&&e<a.length;e+=t){var i=a[e],o=0<t==(1!=i.level),l=o?r.begin:u(r.end,-1);if(i.from<=l&&l<i.to)return n(l,o);if(l=o?i.from:u(i.to,-1),r.begin<=l&&l<r.end)return n(l,o)}},g=p(n+e,e,c);if(g)return g;var v=0<e?c.end:u(c.begin,-1);return null==v||0<e&&v==r.text.length||!(g=p(0<e?0:a.length-1,e,l(v)))?null:g}(n.cm,s,i,o):Yo(s,i,o))){if(e||(r=i.line+o)<n.first||r>=n.first+n.size||(i=new ve(r,i.ch,i.sticky),!(s=ae(n,r))))return!1;i=_o(l,n.cm,s,i.line,o)}else i=t;return!0}if("char"==e)a();else if("column"==e)a(!0);else if("word"==e||"group"==e)for(var u=null,c="group"==e,h=n.cm&&n.cm.getHelper(i,"wordChars"),f=!0;!(o<0)||a(!f);f=!1){var d=s.text.charAt(i.ch)||"\n",p=te(d,h)?"w":c&&"\n"==d?"n":!c||/\s/.test(d)?null:"p";if(!c||f||p||(p="s"),u&&u!=p){o<0&&(o=1,a(),i.sticky="after");break}if(p&&(u=p),0<o&&!a(!f))break}var g=Ji(n,i,t,r,!0);return ye(t,g)&&(g.hitSide=!0),g}function Fl(e,t,r,n){var i,o,l=e.doc,s=t.left;if("page"==n){var a=Math.min(e.display.wrapper.clientHeight,window.innerHeight||document.documentElement.clientHeight),u=Math.max(a-.5*Jr(e.display),3);i=(0<r?t.bottom:t.top)+r*u}else"line"==n&&(i=0<r?t.bottom+3:t.top-3);for(;(o=_r(e,s,i)).outside;){if(r<0?i<=0:i>=l.height){o.hitSide=!0;break}i+=5*r}return o}var Pl=function(e){this.cm=e,this.lastAnchorNode=this.lastAnchorOffset=this.lastFocusNode=this.lastFocusOffset=null,this.polling=new R,this.composing=null,this.gracePeriod=!1,this.readDOMTimeout=null};function El(e,t){var r=Or(e,t.line);if(!r||r.hidden)return null;var n=ae(e.doc,t.line),i=Mr(r,n,t.line),o=Je(n,e.doc.direction),l="left";o&&(l=Ze(o,t.ch)%2?"right":"left");var s=Fr(i.map,t.ch,l);return s.offset="right"==s.collapse?s.end:s.start,s}function Il(e,t){return t&&(e.bad=!0),e}function zl(e,t,r){var n;if(t==e.display.lineDiv){if(!(n=e.display.lineDiv.childNodes[r]))return Il(e.clipPos(ve(e.display.viewTo-1)),!0);t=null,r=0}else for(n=t;;n=n.parentNode){if(!n||n==e.display.lineDiv)return null;if(n.parentNode&&n.parentNode==e.display.lineDiv)break}for(var i=0;i<e.display.view.length;i++){var o=e.display.view[i];if(o.node==n)return Rl(o,t,r)}}function Rl(u,e,t){var r=u.text.firstChild,n=!1;if(!e||!D(r,e))return Il(ve(fe(u.line),0),!0);if(e==r&&(n=!0,e=r.childNodes[t],t=0,!e)){var i=u.rest?$(u.rest):u.line;return Il(ve(fe(i),i.text.length),n)}var o=3==e.nodeType?e:null,l=e;for(o||1!=e.childNodes.length||3!=e.firstChild.nodeType||(o=e.firstChild,t&&(t=o.nodeValue.length));l.parentNode!=r;)l=l.parentNode;var c=u.measure,h=c.maps;function s(e,t,r){for(var n=-1;n<(h?h.length:0);n++)for(var i=n<0?c.map:h[n],o=0;o<i.length;o+=3){var l=i[o+2];if(l==e||l==t){var s=fe(n<0?u.line:u.rest[n]),a=i[o]+r;return(r<0||l!=e)&&(a=i[o+(r?1:0)]),ve(s,a)}}}var a=s(o,l,t);if(a)return Il(a,n);for(var f=l.nextSibling,d=o?o.nodeValue.length-t:0;f;f=f.nextSibling){if(a=s(f,f.firstChild,0))return Il(ve(a.line,a.ch-d),n);d+=f.textContent.length}for(var p=l.previousSibling,g=t;p;p=p.previousSibling){if(a=s(p,p.firstChild,-1))return Il(ve(a.line,a.ch+g),n);g+=p.textContent.length}}Pl.prototype.init=function(e){var t=this,l=this,s=l.cm,a=l.div=e.lineDiv;function r(e){if(!ot(s,e)){if(s.somethingSelected())Tl({lineWise:!1,text:s.getSelections()}),"cut"==e.type&&s.replaceSelection("",null,"cut");else{if(!s.options.lineWiseCopyCut)return;var t=Al(s);Tl({lineWise:!0,text:t.text}),"cut"==e.type&&s.operation(function(){s.setSelections(t.ranges,0,V),s.replaceSelection("",null,"cut")})}if(e.clipboardData){e.clipboardData.clearData();var r=kl.text.join("\n");if(e.clipboardData.setData("Text",r),e.clipboardData.getData("Text")==r)return void e.preventDefault()}var n=Wl(),i=n.firstChild;s.display.lineSpace.insertBefore(n,s.display.lineSpace.firstChild),i.value=kl.text.join("\n");var o=document.activeElement;P(i),setTimeout(function(){s.display.lineSpace.removeChild(n),o.focus(),o==a&&l.showPrimarySelection()},50)}}Dl(a,s.options.spellcheck,s.options.autocorrect,s.options.autocapitalize),tt(a,"paste",function(e){ot(s,e)||Nl(e,s)||C<=11&&setTimeout(Yn(s,function(){return t.updateFromDOM()}),20)}),tt(a,"compositionstart",function(e){t.composing={data:e.data,done:!1}}),tt(a,"compositionupdate",function(e){t.composing||(t.composing={data:e.data,done:!1})}),tt(a,"compositionend",function(e){t.composing&&(e.data!=t.composing.data&&t.readFromDOMSoon(),t.composing.done=!0)}),tt(a,"touchstart",function(){return l.forceCompositionEnd()}),tt(a,"input",function(){t.composing||t.readFromDOMSoon()}),tt(a,"copy",r),tt(a,"cut",r)},Pl.prototype.prepareSelection=function(){var e=un(this.cm,!1);return e.focus=this.cm.state.focused,e},Pl.prototype.showSelection=function(e,t){e&&this.cm.display.view.length&&((e.focus||t)&&this.showPrimarySelection(),this.showMultipleSelections(e))},Pl.prototype.getSelection=function(){return this.cm.display.wrapper.ownerDocument.getSelection()},Pl.prototype.showPrimarySelection=function(){var e=this.getSelection(),t=this.cm,r=t.doc.sel.primary(),n=r.from(),i=r.to();if(t.display.viewTo==t.display.viewFrom||n.line>=t.display.viewTo||i.line<t.display.viewFrom)e.removeAllRanges();else{var o=zl(t,e.anchorNode,e.anchorOffset),l=zl(t,e.focusNode,e.focusOffset);if(!o||o.bad||!l||l.bad||0!=me(xe(o,l),n)||0!=me(we(o,l),i)){var s=t.display.view,a=n.line>=t.display.viewFrom&&El(t,n)||{node:s[0].measure.map[2],offset:0},u=i.line<t.display.viewTo&&El(t,i);if(!u){var c=s[s.length-1].measure,h=c.maps?c.maps[c.maps.length-1]:c.map;u={node:h[h.length-1],offset:h[h.length-2]-h[h.length-3]}}if(a&&u){var f,d=e.rangeCount&&e.getRangeAt(0);try{f=k(a.node,a.offset,u.offset,u.node)}catch(e){}f&&(!g&&t.state.focused?(e.collapse(a.node,a.offset),f.collapsed||(e.removeAllRanges(),e.addRange(f))):(e.removeAllRanges(),e.addRange(f)),d&&null==e.anchorNode?e.addRange(d):g&&this.startGracePeriod()),this.rememberSelection()}else e.removeAllRanges()}}},Pl.prototype.startGracePeriod=function(){var e=this;clearTimeout(this.gracePeriod),this.gracePeriod=setTimeout(function(){e.gracePeriod=!1,e.selectionChanged()&&e.cm.operation(function(){return e.cm.curOp.selectionChanged=!0})},20)},Pl.prototype.showMultipleSelections=function(e){N(this.cm.display.cursorDiv,e.cursors),N(this.cm.display.selectionDiv,e.selection)},Pl.prototype.rememberSelection=function(){var e=this.getSelection();this.lastAnchorNode=e.anchorNode,this.lastAnchorOffset=e.anchorOffset,this.lastFocusNode=e.focusNode,this.lastFocusOffset=e.focusOffset},Pl.prototype.selectionInEditor=function(){var e=this.getSelection();if(!e.rangeCount)return!1;var t=e.getRangeAt(0).commonAncestorContainer;return D(this.div,t)},Pl.prototype.focus=function(){"nocursor"!=this.cm.options.readOnly&&(this.selectionInEditor()||this.showSelection(this.prepareSelection(),!0),this.div.focus())},Pl.prototype.blur=function(){this.div.blur()},Pl.prototype.getField=function(){return this.div},Pl.prototype.supportsTouch=function(){return!0},Pl.prototype.receivedFocus=function(){var t=this;this.selectionInEditor()?this.pollSelection():Xn(this.cm,function(){return t.cm.curOp.selectionChanged=!0}),this.polling.set(this.cm.options.pollInterval,function e(){t.cm.state.focused&&(t.pollSelection(),t.polling.set(t.cm.options.pollInterval,e))})},Pl.prototype.selectionChanged=function(){var e=this.getSelection();return e.anchorNode!=this.lastAnchorNode||e.anchorOffset!=this.lastAnchorOffset||e.focusNode!=this.lastFocusNode||e.focusOffset!=this.lastFocusOffset},Pl.prototype.pollSelection=function(){if(null==this.readDOMTimeout&&!this.gracePeriod&&this.selectionChanged()){var e=this.getSelection(),t=this.cm;if(h&&l&&this.cm.options.gutters.length&&function(e){for(var t=e;t;t=t.parentNode)if(/CodeMirror-gutter-wrapper/.test(t.className))return!0;return!1}(e.anchorNode))return this.cm.triggerOnKeyDown({type:"keydown",keyCode:8,preventDefault:Math.abs}),this.blur(),void this.focus();if(!this.composing){this.rememberSelection();var r=zl(t,e.anchorNode,e.anchorOffset),n=zl(t,e.focusNode,e.focusOffset);r&&n&&Xn(t,function(){Yi(t.doc,bi(r,n),V),(r.bad||n.bad)&&(t.curOp.selectionChanged=!0)})}}},Pl.prototype.pollContent=function(){null!=this.readDOMTimeout&&(clearTimeout(this.readDOMTimeout),this.readDOMTimeout=null);var e,t,r,n=this.cm,i=n.display,o=n.doc.sel.primary(),l=o.from(),s=o.to();if(0==l.ch&&l.line>n.firstLine()&&(l=ve(l.line-1,ae(n.doc,l.line-1).length)),s.ch==ae(n.doc,s.line).text.length&&s.line<n.lastLine()&&(s=ve(s.line+1,0)),l.line<i.viewFrom||s.line>i.viewTo-1)return!1;r=l.line==i.viewFrom||0==(e=sn(n,l.line))?(t=fe(i.view[0].line),i.view[0].node):(t=fe(i.view[e].line),i.view[e-1].node.nextSibling);var a,u,c=sn(n,s.line);if(u=c==i.view.length-1?(a=i.viewTo-1,i.lineDiv.lastChild):(a=fe(i.view[c+1].line)-1,i.view[c+1].node.previousSibling),!r)return!1;for(var h=n.doc.splitLines(function(a,e,t,u,c){var r="",h=!1,f=a.doc.lineSeparator(),d=!1;function p(){h&&(r+=f,d&&(r+=f),h=d=!1)}function g(e){e&&(p(),r+=e)}function v(e){if(1==e.nodeType){var t=e.getAttribute("cm-text");if(t)return void g(t);var r,n=e.getAttribute("cm-marker");if(n){var i=a.findMarks(ve(u,0),ve(c+1,0),(s=+n,function(e){return e.id==s}));return void(i.length&&(r=i[0].find(0))&&g(ue(a.doc,r.from,r.to).join(f)))}if("false"==e.getAttribute("contenteditable"))return;var o=/^(pre|div|p|li|table|br)$/i.test(e.nodeName);if(!/^br$/i.test(e.nodeName)&&0==e.textContent.length)return;o&&p();for(var l=0;l<e.childNodes.length;l++)v(e.childNodes[l]);/^(pre|p)$/i.test(e.nodeName)&&(d=!0),o&&(h=!0)}else 3==e.nodeType&&g(e.nodeValue.replace(/\u200b/g,"").replace(/\u00a0/g," "));var s}for(;v(e),e!=t;)e=e.nextSibling,d=!1;return r}(n,r,u,t,a)),f=ue(n.doc,ve(t,0),ve(a,ae(n.doc,a).text.length));1<h.length&&1<f.length;)if($(h)==$(f))h.pop(),f.pop(),a--;else{if(h[0]!=f[0])break;h.shift(),f.shift(),t++}for(var d=0,p=0,g=h[0],v=f[0],m=Math.min(g.length,v.length);d<m&&g.charCodeAt(d)==v.charCodeAt(d);)++d;for(var y=$(h),b=$(f),w=Math.min(y.length-(1==h.length?d:0),b.length-(1==f.length?d:0));p<w&&y.charCodeAt(y.length-p-1)==b.charCodeAt(b.length-p-1);)++p;if(1==h.length&&1==f.length&&t==l.line)for(;d&&d>l.ch&&y.charCodeAt(y.length-p-1)==b.charCodeAt(b.length-p-1);)d--,p++;h[h.length-1]=y.slice(0,y.length-p).replace(/^\u200b+/,""),h[0]=h[0].slice(d).replace(/\u200b+$/,"");var x=ve(t,d),C=ve(a,f.length?$(f).length-p:0);return 1<h.length||h[0]||me(x,C)?(ao(n.doc,h,x,C,"+input"),!0):void 0},Pl.prototype.ensurePolled=function(){this.forceCompositionEnd()},Pl.prototype.reset=function(){this.forceCompositionEnd()},Pl.prototype.forceCompositionEnd=function(){this.composing&&(clearTimeout(this.readDOMTimeout),this.composing=null,this.updateFromDOM(),this.div.blur(),this.div.focus())},Pl.prototype.readFromDOMSoon=function(){var e=this;null==this.readDOMTimeout&&(this.readDOMTimeout=setTimeout(function(){if(e.readDOMTimeout=null,e.composing){if(!e.composing.done)return;e.composing=null}e.updateFromDOM()},80))},Pl.prototype.updateFromDOM=function(){var e=this;!this.cm.isReadOnly()&&this.pollContent()||Xn(this.cm,function(){return qn(e.cm)})},Pl.prototype.setUneditable=function(e){e.contentEditable="false"},Pl.prototype.onKeyPress=function(e){0==e.charCode||this.composing||(e.preventDefault(),this.cm.isReadOnly()||Yn(this.cm,Ml)(this.cm,String.fromCharCode(null==e.charCode?e.keyCode:e.charCode),0))},Pl.prototype.readOnlyChanged=function(e){this.div.contentEditable=String("nocursor"!=e)},Pl.prototype.onContextMenu=function(){},Pl.prototype.resetPosition=function(){},Pl.prototype.needsContentAttribute=!0;var Bl,Gl,Ul,Vl=function(e){this.cm=e,this.prevInput="",this.pollingFast=!1,this.polling=new R,this.hasSelection=!1,this.composing=null};Vl.prototype.init=function(r){var e=this,n=this,i=this.cm;this.createField(r);var o=this.textarea;function t(e){if(!ot(i,e)){if(i.somethingSelected())Tl({lineWise:!1,text:i.getSelections()});else{if(!i.options.lineWiseCopyCut)return;var t=Al(i);Tl({lineWise:!0,text:t.text}),"cut"==e.type?i.setSelections(t.ranges,null,V):(n.prevInput="",o.value=t.text.join("\n"),P(o))}"cut"==e.type&&(i.state.cutIncoming=+new Date)}}r.wrapper.insertBefore(this.wrapper,r.wrapper.firstChild),c&&(o.style.width="0px"),tt(o,"input",function(){x&&9<=C&&e.hasSelection&&(e.hasSelection=null),n.poll()}),tt(o,"paste",function(e){ot(i,e)||Nl(e,i)||(i.state.pasteIncoming=+new Date,n.fastPoll())}),tt(o,"cut",t),tt(o,"copy",t),tt(r.scroller,"paste",function(e){if(!wr(r,e)&&!ot(i,e)){if(!o.dispatchEvent)return i.state.pasteIncoming=+new Date,void n.focus();var t=new Event("paste");t.clipboardData=e.clipboardData,o.dispatchEvent(t)}}),tt(r.lineSpace,"selectstart",function(e){wr(r,e)||ut(e)}),tt(o,"compositionstart",function(){var e=i.getCursor("from");n.composing&&n.composing.range.clear(),n.composing={start:e,range:i.markText(e,i.getCursor("to"),{className:"CodeMirror-composing"})}}),tt(o,"compositionend",function(){n.composing&&(n.poll(),n.composing.range.clear(),n.composing=null)})},Vl.prototype.createField=function(e){this.wrapper=Wl(),this.textarea=this.wrapper.firstChild},Vl.prototype.prepareSelection=function(){var e=this.cm,t=e.display,r=e.doc,n=un(e);if(e.options.moveInputWithCursor){var i=jr(e,r.sel.primary().head,"div"),o=t.wrapper.getBoundingClientRect(),l=t.lineDiv.getBoundingClientRect();n.teTop=Math.max(0,Math.min(t.wrapper.clientHeight-10,i.top+l.top-o.top)),n.teLeft=Math.max(0,Math.min(t.wrapper.clientWidth-10,i.left+l.left-o.left))}return n},Vl.prototype.showSelection=function(e){var t=this.cm.display;N(t.cursorDiv,e.cursors),N(t.selectionDiv,e.selection),null!=e.teTop&&(this.wrapper.style.top=e.teTop+"px",this.wrapper.style.left=e.teLeft+"px")},Vl.prototype.reset=function(e){if(!this.contextMenuPending&&!this.composing){var t=this.cm;if(t.somethingSelected()){this.prevInput="";var r=t.getSelection();this.textarea.value=r,t.state.focused&&P(this.textarea),x&&9<=C&&(this.hasSelection=r)}else e||(this.prevInput=this.textarea.value="",x&&9<=C&&(this.hasSelection=null))}},Vl.prototype.getField=function(){return this.textarea},Vl.prototype.supportsTouch=function(){return!1},Vl.prototype.focus=function(){if("nocursor"!=this.cm.options.readOnly&&(!f||W()!=this.textarea))try{this.textarea.focus()}catch(e){}},Vl.prototype.blur=function(){this.textarea.blur()},Vl.prototype.resetPosition=function(){this.wrapper.style.top=this.wrapper.style.left=0},Vl.prototype.receivedFocus=function(){this.slowPoll()},Vl.prototype.slowPoll=function(){var e=this;this.pollingFast||this.polling.set(this.cm.options.pollInterval,function(){e.poll(),e.cm.state.focused&&e.slowPoll()})},Vl.prototype.fastPoll=function(){var t=!1,r=this;r.pollingFast=!0,r.polling.set(20,function e(){r.poll()||t?(r.pollingFast=!1,r.slowPoll()):(t=!0,r.polling.set(60,e))})},Vl.prototype.poll=function(){var e=this,t=this.cm,r=this.textarea,n=this.prevInput;if(this.contextMenuPending||!t.state.focused||Ct(r)&&!n&&!this.composing||t.isReadOnly()||t.options.disableInput||t.state.keySeq)return!1;var i=r.value;if(i==n&&!t.somethingSelected())return!1;if(x&&9<=C&&this.hasSelection===i||w&&/[\uf700-\uf7ff]/.test(i))return t.display.input.reset(),!1;if(t.doc.sel==t.display.selForContextMenu){var o=i.charCodeAt(0);if(8203!=o||n||(n="​"),8666==o)return this.reset(),this.cm.execCommand("undo")}for(var l=0,s=Math.min(n.length,i.length);l<s&&n.charCodeAt(l)==i.charCodeAt(l);)++l;return Xn(t,function(){Ml(t,i.slice(l),n.length-l,null,e.composing?"*compose":null),1e3<i.length||-1<i.indexOf("\n")?r.value=e.prevInput="":e.prevInput=i,e.composing&&(e.composing.range.clear(),e.composing.range=t.markText(e.composing.start,t.getCursor("to"),{className:"CodeMirror-composing"}))}),!0},Vl.prototype.ensurePolled=function(){this.pollingFast&&this.poll()&&(this.pollingFast=!1)},Vl.prototype.onKeyPress=function(){x&&9<=C&&(this.hasSelection=null),this.fastPoll()},Vl.prototype.onContextMenu=function(e){var r=this,n=r.cm,i=n.display,o=r.textarea;r.contextMenuPending&&r.contextMenuPending();var t=ln(n,e),l=i.scroller.scrollTop;if(t&&!v){n.options.resetSelectionOnContextMenu&&-1==n.doc.sel.contains(t)&&Yn(n,Yi)(n.doc,bi(t),V);var s,a=o.style.cssText,u=r.wrapper.style.cssText,c=r.wrapper.offsetParent.getBoundingClientRect();if(r.wrapper.style.cssText="position: static",o.style.cssText="position: absolute; width: 30px; height: 30px;\n      top: "+(e.clientY-c.top-5)+"px; left: "+(e.clientX-c.left-5)+"px;\n      z-index: 1000; background: "+(x?"rgba(255, 255, 255, .05)":"transparent")+";\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);",b&&(s=window.scrollY),i.input.focus(),b&&window.scrollTo(null,s),i.input.reset(),n.somethingSelected()||(o.value=r.prevInput=" "),r.contextMenuPending=d,i.selForContextMenu=n.doc.sel,clearTimeout(i.detectingSelectAll),x&&9<=C&&f(),S){ft(e);var h=function(){nt(window,"mouseup",h),setTimeout(d,20)};tt(window,"mouseup",h)}else setTimeout(d,50)}function f(){if(null!=o.selectionStart){var e=n.somethingSelected(),t="​"+(e?o.value:"");o.value="⇚",o.value=t,r.prevInput=e?"":"​",o.selectionStart=1,o.selectionEnd=t.length,i.selForContextMenu=n.doc.sel}}function d(){if(r.contextMenuPending==d&&(r.contextMenuPending=!1,r.wrapper.style.cssText=u,o.style.cssText=a,x&&C<9&&i.scrollbars.setScrollTop(i.scroller.scrollTop=l),null!=o.selectionStart)){(!x||x&&C<9)&&f();var e=0,t=function(){i.selForContextMenu==n.doc.sel&&0==o.selectionStart&&0<o.selectionEnd&&"​"==r.prevInput?Yn(n,to)(n):e++<10?i.detectingSelectAll=setTimeout(t,500):(i.selForContextMenu=null,i.input.reset())};i.detectingSelectAll=setTimeout(t,200)}}},Vl.prototype.readOnlyChanged=function(e){e||this.reset(),this.textarea.disabled="nocursor"==e},Vl.prototype.setUneditable=function(){},Vl.prototype.needsContentAttribute=!1,function(i){var o=i.optionHandlers;function e(e,t,n,r){i.defaults[e]=t,n&&(o[e]=r?function(e,t,r){r!=vl&&n(e,t,r)}:n)}i.defineOption=e,i.Init=vl,e("value","",function(e,t){return e.setValue(t)},!0),e("mode",null,function(e,t){e.doc.modeOption=t,Li(e)},!0),e("indentUnit",2,Li,!0),e("indentWithTabs",!1),e("smartIndent",!0),e("tabSize",4,function(e){ki(e),zr(e),qn(e)},!0),e("lineSeparator",null,function(e,n){if(e.doc.lineSep=n){var i=[],o=e.doc.first;e.doc.iter(function(e){for(var t=0;;){var r=e.text.indexOf(n,t);if(-1==r)break;t=r+n.length,i.push(ve(o,r))}o++});for(var t=i.length-1;0<=t;t--)ao(e.doc,n,i[t],ve(i[t].line,i[t].ch+n.length))}}),e("specialChars",/[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b-\u200f\u2028\u2029\ufeff]/g,function(e,t,r){e.state.specialChars=new RegExp(t.source+(t.test("\t")?"":"|\t"),"g"),r!=vl&&e.refresh()}),e("specialCharPlaceholder",Qt,function(e){return e.refresh()},!0),e("electricChars",!0),e("inputStyle",f?"contenteditable":"textarea",function(){throw new Error("inputStyle can not (yet) be changed in a running editor")},!0),e("spellcheck",!1,function(e,t){return e.getInputField().spellcheck=t},!0),e("autocorrect",!1,function(e,t){return e.getInputField().autocorrect=t},!0),e("autocapitalize",!1,function(e,t){return e.getInputField().autocapitalize=t},!0),e("rtlMoveVisually",!p),e("wholeLineUpdateBefore",!0),e("theme","default",function(e){gl(e),bl(e)},!0),e("keyMap","default",function(e,t,r){var n=Ko(t),i=r!=vl&&Ko(r);i&&i.detach&&i.detach(e,n),n.attach&&n.attach(e,i||null)}),e("extraKeys",null),e("configureMouse",null),e("lineWrapping",!1,xl,!0),e("gutters",[],function(e){ci(e.options),bl(e)},!0),e("fixedGutter",!0,function(e,t){e.display.gutters.style.left=t?rn(e.display)+"px":"0",e.refresh()},!0),e("coverGutterNextToScrollbar",!1,function(e){return Pn(e)},!0),e("scrollbarStyle","native",function(e){zn(e),Pn(e),e.display.scrollbars.setScrollTop(e.doc.scrollTop),e.display.scrollbars.setScrollLeft(e.doc.scrollLeft)},!0),e("lineNumbers",!1,function(e){ci(e.options),bl(e)},!0),e("firstLineNumber",1,bl,!0),e("lineNumberFormatter",function(e){return e},bl,!0),e("showCursorWhenSelecting",!1,an,!0),e("resetSelectionOnContextMenu",!0),e("lineWiseCopyCut",!0),e("pasteLinesPerSelection",!0),e("selectionsMayTouch",!1),e("readOnly",!1,function(e,t){"nocursor"==t&&(mn(e),e.display.input.blur()),e.display.input.readOnlyChanged(t)}),e("disableInput",!1,function(e,t){t||e.display.input.reset()},!0),e("dragDrop",!0,wl),e("allowDropFileTypes",null),e("cursorBlinkRate",530),e("cursorScrollMargin",0),e("cursorHeight",1,an,!0),e("singleCursorHeightPerLine",!0,an,!0),e("workTime",100),e("workDelay",100),e("flattenSpans",!0,ki,!0),e("addModeClass",!1,ki,!0),e("pollInterval",100),e("undoDepth",200,function(e,t){return e.doc.history.undoDepth=t}),e("historyEventDelay",1250),e("viewportMargin",10,function(e){return e.refresh()},!0),e("maxHighlightLength",1e4,ki,!0),e("moveInputWithCursor",!0,function(e,t){t||e.display.input.resetPosition()}),e("tabindex",null,function(e,t){return e.display.input.getField().tabIndex=t||""}),e("autofocus",null),e("direction","ltr",function(e,t){return e.doc.setDirection(t)},!0),e("phrases",null)}(Cl),Gl=(Bl=Cl).optionHandlers,Ul=Bl.helpers={},Bl.prototype={constructor:Bl,focus:function(){window.focus(),this.display.input.focus()},setOption:function(e,t){var r=this.options,n=r[e];r[e]==t&&"mode"!=e||(r[e]=t,Gl.hasOwnProperty(e)&&Yn(this,Gl[e])(this,t,n),it(this,"optionChange",this,e))},getOption:function(e){return this.options[e]},getDoc:function(){return this.doc},addKeyMap:function(e,t){this.state.keyMaps[t?"push":"unshift"](Ko(e))},removeKeyMap:function(e){for(var t=this.state.keyMaps,r=0;r<t.length;++r)if(t[r]==e||t[r].name==e)return t.splice(r,1),!0},addOverlay:_n(function(e,t){var r=e.token?e:Bl.getMode(this.options,e);if(r.startState)throw new Error("Overlays may not be stateful.");!function(e,t,r){for(var n=0,i=r(t);n<e.length&&r(e[n])<=i;)n++;e.splice(n,0,t)}(this.state.overlays,{mode:r,modeSpec:e,opaque:t&&t.opaque,priority:t&&t.priority||0},function(e){return e.priority}),this.state.modeGen++,qn(this)}),removeOverlay:_n(function(e){for(var t=this.state.overlays,r=0;r<t.length;++r){var n=t[r].modeSpec;if(n==e||"string"==typeof e&&n.name==e)return t.splice(r,1),this.state.modeGen++,void qn(this)}}),indentLine:_n(function(e,t,r){"string"!=typeof t&&"number"!=typeof t&&(t=null==t?this.options.smartIndent?"smart":"prev":t?"add":"subtract"),pe(this.doc,e)&&Ll(this,e,t,r)}),indentSelection:_n(function(e){for(var t=this,r=this.doc.sel.ranges,n=-1,i=0;i<r.length;i++){var o=r[i];if(o.empty())o.head.line>n&&(Ll(t,o.head.line,e,!0),n=o.head.line,i==t.doc.sel.primIndex&&kn(t));else{var l=o.from(),s=o.to(),a=Math.max(n,l.line);n=Math.min(t.lastLine(),s.line-(s.ch?0:1))+1;for(var u=a;u<n;++u)Ll(t,u,e);var c=t.doc.sel.ranges;0==l.ch&&r.length==c.length&&0<c[i].from().ch&&Ki(t.doc,i,new mi(l,c[i].to()),V)}}}),getTokenAt:function(e,t){return Kt(this,e,t)},getLineTokens:function(e,t){return Kt(this,ve(e),t,!0)},getTokenTypeAt:function(e){e=Se(this.doc,e);var t,r=zt(this,ae(this.doc,e.line)),n=0,i=(r.length-1)/2,o=e.ch;if(0==o)t=r[2];else for(;;){var l=n+i>>1;if((l?r[2*l-1]:0)>=o)i=l;else{if(!(r[2*l+1]<o)){t=r[2*l+2];break}n=l+1}}var s=t?t.indexOf("overlay "):-1;return s<0?t:0==s?null:t.slice(0,s-1)},getModeAt:function(e){var t=this.doc.mode;return t.innerMode?Bl.innerMode(t,this.getTokenAt(e).state).mode:t},getHelper:function(e,t){return this.getHelpers(e,t)[0]},getHelpers:function(e,t){var r=[];if(!Ul.hasOwnProperty(t))return r;var n=Ul[t],i=this.getModeAt(e);if("string"==typeof i[t])n[i[t]]&&r.push(n[i[t]]);else if(i[t])for(var o=0;o<i[t].length;o++){var l=n[i[t][o]];l&&r.push(l)}else i.helperType&&n[i.helperType]?r.push(n[i.helperType]):n[i.name]&&r.push(n[i.name]);for(var s=0;s<n._global.length;s++){var a=n._global[s];a.pred(i,this)&&-1==B(r,a.val)&&r.push(a.val)}return r},getStateAfter:function(e,t){var r=this.doc;return Rt(this,(e=Ce(r,null==e?r.first+r.size-1:e))+1,t).state},cursorCoords:function(e,t){var r=this.doc.sel.primary();return jr(this,null==e?r.head:"object"==typeof e?Se(this.doc,e):e?r.from():r.to(),t||"page")},charCoords:function(e,t){return Kr(this,Se(this.doc,e),t||"page")},coordsChar:function(e,t){return _r(this,(e=Vr(this,e,t||"page")).left,e.top)},lineAtHeight:function(e,t){return e=Vr(this,{top:e,left:0},t||"page").top,de(this.doc,e+this.display.viewOffset)},heightAtLine:function(e,t,r){var n,i=!1;if("number"==typeof e){var o=this.doc.first+this.doc.size-1;e<this.doc.first?e=this.doc.first:o<e&&(e=o,i=!0),n=ae(this.doc,e)}else n=e;return Ur(this,n,{top:0,left:0},t||"page",r||i).top+(i?this.doc.height-Ye(n):0)},defaultTextHeight:function(){return Jr(this.display)},defaultCharWidth:function(){return en(this.display)},getViewport:function(){return{from:this.display.viewFrom,to:this.display.viewTo}},addWidget:function(e,t,r,n,i){var o,l,s,a=this.display,u=(e=jr(this,Se(this.doc,e))).bottom,c=e.left;if(t.style.position="absolute",t.setAttribute("cm-ignore-events","true"),this.display.input.setUneditable(t),a.sizer.appendChild(t),"over"==n)u=e.top;else if("above"==n||"near"==n){var h=Math.max(a.wrapper.clientHeight,this.doc.height),f=Math.max(a.sizer.clientWidth,a.lineSpace.clientWidth);("above"==n||e.bottom+t.offsetHeight>h)&&e.top>t.offsetHeight?u=e.top-t.offsetHeight:e.bottom+t.offsetHeight<=h&&(u=e.bottom),c+t.offsetWidth>f&&(c=f-t.offsetWidth)}t.style.top=u+"px",t.style.left=t.style.right="","right"==i?(c=a.sizer.clientWidth-t.offsetWidth,t.style.right="0px"):("left"==i?c=0:"middle"==i&&(c=(a.sizer.clientWidth-t.offsetWidth)/2),t.style.left=c+"px"),r&&(o=this,l={left:c,top:u,right:c+t.offsetWidth,bottom:u+t.offsetHeight},null!=(s=Sn(o,l)).scrollTop&&On(o,s.scrollTop),null!=s.scrollLeft&&Dn(o,s.scrollLeft))},triggerOnKeyDown:_n(il),triggerOnKeyPress:_n(ll),triggerOnKeyUp:ol,triggerOnMouseDown:_n(cl),execCommand:function(e){if($o.hasOwnProperty(e))return $o[e].call(null,this)},triggerElectric:_n(function(e){Ol(this,e)}),findPosH:function(e,t,r,n){var i=1;t<0&&(i=-1,t=-t);for(var o=Se(this.doc,e),l=0;l<t&&!(o=Hl(this.doc,o,i,r,n)).hitSide;++l);return o},moveH:_n(function(t,r){var n=this;this.extendSelectionsBy(function(e){return n.display.shift||n.doc.extend||e.empty()?Hl(n.doc,e.head,t,r,n.options.rtlMoveVisually):t<0?e.from():e.to()},j)}),deleteH:_n(function(r,n){var e=this.doc.sel,i=this.doc;e.somethingSelected()?i.replaceSelection("",null,"+delete"):jo(this,function(e){var t=Hl(i,e.head,r,n,!1);return r<0?{from:t,to:e.head}:{from:e.head,to:t}})}),findPosV:function(e,t,r,n){var i=1,o=n;t<0&&(i=-1,t=-t);for(var l=Se(this.doc,e),s=0;s<t;++s){var a=jr(this,l,"div");if(null==o?o=a.left:a.left=o,(l=Fl(this,a,i,r)).hitSide)break}return l},moveV:_n(function(n,i){var o=this,l=this.doc,s=[],a=!this.display.shift&&!l.extend&&l.sel.somethingSelected();if(l.extendSelectionsBy(function(e){if(a)return n<0?e.from():e.to();var t=jr(o,e.head,"div");null!=e.goalColumn&&(t.left=e.goalColumn),s.push(t.left);var r=Fl(o,t,n,i);return"page"==i&&e==l.sel.primary()&&Ln(o,Kr(o,r,"div").top-t.top),r},j),s.length)for(var e=0;e<l.sel.ranges.length;e++)l.sel.ranges[e].goalColumn=s[e]}),findWordAt:function(e){var t=ae(this.doc,e.line).text,r=e.ch,n=e.ch;if(t){var i=this.getHelper(e,"wordChars");"before"!=e.sticky&&n!=t.length||!r?++n:--r;for(var o=t.charAt(r),l=te(o,i)?function(e){return te(e,i)}:/\s/.test(o)?function(e){return/\s/.test(e)}:function(e){return!/\s/.test(e)&&!te(e)};0<r&&l(t.charAt(r-1));)--r;for(;n<t.length&&l(t.charAt(n));)++n}return new mi(ve(e.line,r),ve(e.line,n))},toggleOverwrite:function(e){null!=e&&e==this.state.overwrite||((this.state.overwrite=!this.state.overwrite)?H(this.display.cursorDiv,"CodeMirror-overwrite"):T(this.display.cursorDiv,"CodeMirror-overwrite"),it(this,"overwriteToggle",this,this.state.overwrite))},hasFocus:function(){return this.display.input.getField()==W()},isReadOnly:function(){return!(!this.options.readOnly&&!this.doc.cantEdit)},scrollTo:_n(function(e,t){Tn(this,e,t)}),getScrollInfo:function(){var e=this.display.scroller;return{left:e.scrollLeft,top:e.scrollTop,height:e.scrollHeight-Lr(this)-this.display.barHeight,width:e.scrollWidth-Lr(this)-this.display.barWidth,clientHeight:Tr(this),clientWidth:kr(this)}},scrollIntoView:_n(function(e,t){var r,n;null==e?(e={from:this.doc.sel.primary().head,to:null},null==t&&(t=this.options.cursorScrollMargin)):"number"==typeof e?e={from:ve(e,0),to:null}:null==e.from&&(e={from:e,to:null}),e.to||(e.to=e.from),e.margin=t||0,null!=e.from.line?(n=e,Mn(r=this),r.curOp.scrollToPos=n):Nn(this,e.from,e.to,e.margin)}),setSize:_n(function(e,t){var r=this,n=function(e){return"number"==typeof e||/^\d+$/.test(String(e))?e+"px":e};null!=e&&(this.display.wrapper.style.width=n(e)),null!=t&&(this.display.wrapper.style.height=n(t)),this.options.lineWrapping&&Ir(this);var i=this.display.viewFrom;this.doc.iter(i,this.display.viewTo,function(e){if(e.widgets)for(var t=0;t<e.widgets.length;t++)if(e.widgets[t].noHScroll){Zn(r,i,"widget");break}++i}),this.curOp.forceUpdate=!0,it(this,"refresh",this)}),operation:function(e){return Xn(this,e)},startOperation:function(){return Bn(this)},endOperation:function(){return Gn(this)},refresh:_n(function(){var e=this.display.cachedTextHeight;qn(this),this.curOp.forceUpdate=!0,zr(this),Tn(this,this.doc.scrollLeft,this.doc.scrollTop),si(this),(null==e||.5<Math.abs(e-Jr(this.display)))&&on(this),it(this,"refresh",this)}),swapDoc:_n(function(e){var t=this.doc;return t.cm=null,Oi(this,e),zr(this),this.display.input.reset(),Tn(this,e.scrollLeft,e.scrollTop),this.curOp.forceScroll=!0,sr(this,"swapDoc",this,t),t}),phrase:function(e){var t=this.options.phrases;return t&&Object.prototype.hasOwnProperty.call(t,e)?t[e]:e},getInputField:function(){return this.display.input.getField()},getWrapperElement:function(){return this.display.wrapper},getScrollerElement:function(){return this.display.scroller},getGutterElement:function(){return this.display.gutters}},at(Bl),Bl.registerHelper=function(e,t,r){Ul.hasOwnProperty(e)||(Ul[e]=Bl[e]={_global:[]}),Ul[e][t]=r},Bl.registerGlobalHelper=function(e,t,r,n){Bl.registerHelper(e,t,n),Ul[e]._global.push({pred:r,val:n})};var Kl,jl="iter insert remove copy getEditor constructor".split(" ");for(var Xl in ko.prototype)ko.prototype.hasOwnProperty(Xl)&&B(jl,Xl)<0&&(Cl.prototype[Xl]=function(e){return function(){return e.apply(this.doc,arguments)}}(ko.prototype[Xl]));return at(ko),Cl.inputStyles={textarea:Vl,contenteditable:Pl},Cl.defineMode=function(e){Cl.defaults.mode||"null"==e||(Cl.defaults.mode=e),function(e,t){2<arguments.length&&(t.dependencies=Array.prototype.slice.call(arguments,2)),kt[e]=t}.apply(this,arguments)},Cl.defineMIME=function(e,t){Tt[e]=t},Cl.defineMode("null",function(){return{token:function(e){return e.skipToEnd()}}}),Cl.defineMIME("text/plain","null"),Cl.defineExtension=function(e,t){Cl.prototype[e]=t},Cl.defineDocExtension=function(e,t){ko.prototype[e]=t},Cl.fromTextArea=function(t,e){if((e=e?I(e):{}).value=t.value,!e.tabindex&&t.tabIndex&&(e.tabindex=t.tabIndex),!e.placeholder&&t.placeholder&&(e.placeholder=t.placeholder),null==e.autofocus){var r=W();e.autofocus=r==t||null!=t.getAttribute("autofocus")&&r==document.body}function n(){t.value=s.getValue()}var i;if(t.form&&(tt(t.form,"submit",n),!e.leaveSubmitMethodAlone)){var o=t.form;i=o.submit;try{var l=o.submit=function(){n(),o.submit=i,o.submit(),o.submit=l}}catch(e){}}e.finishInit=function(e){e.save=n,e.getTextArea=function(){return t},e.toTextArea=function(){e.toTextArea=isNaN,n(),t.parentNode.removeChild(e.getWrapperElement()),t.style.display="",t.form&&(nt(t.form,"submit",n),"function"==typeof t.form.submit&&(t.form.submit=i))}},t.style.display="none";var s=Cl(function(e){return t.parentNode.insertBefore(e,t.nextSibling)},e);return s},(Kl=Cl).off=nt,Kl.on=tt,Kl.wheelEventPixels=pi,Kl.Doc=ko,Kl.splitLines=xt,Kl.countColumn=z,Kl.findColumn=X,Kl.isWordChar=ee,Kl.Pass=U,Kl.signal=it,Kl.Line=Yt,Kl.changeEnd=wi,Kl.scrollbarModel=In,Kl.Pos=ve,Kl.cmpPos=me,Kl.modes=kt,Kl.mimeModes=Tt,Kl.resolveMode=Mt,Kl.getMode=Nt,Kl.modeExtensions=Ot,Kl.extendMode=At,Kl.copyState=Dt,Kl.startState=Ht,Kl.innerMode=Wt,Kl.commands=$o,Kl.keyMap=Io,Kl.keyName=Vo,Kl.isModifierKey=Go,Kl.lookupKey=Bo,Kl.normalizeKeyMap=Ro,Kl.StringStream=Ft,Kl.SharedTextMarker=xo,Kl.TextMarker=bo,Kl.LineWidget=vo,Kl.e_preventDefault=ut,Kl.e_stopPropagation=ct,Kl.e_stop=ft,Kl.addClass=H,Kl.contains=D,Kl.rmClass=T,Kl.keyNames=Ho,Cl.version="5.44.0",Cl});
!function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(D){"use strict";function L(e,t,n,r,o,a){this.indented=e,this.column=t,this.type=n,this.info=r,this.align=o,this.prev=a}function P(e,t,n,r){var o=e.indented;return e.context&&"statement"==e.context.type&&"statement"!=n&&(o=e.context.indented),e.context=new L(o,t,n,r,null,e.context)}function E(e){var t=e.context.type;return")"!=t&&"]"!=t&&"}"!=t||(e.indented=e.context.indented),e.context=e.context.prev}function z(e,t,n){return"variable"==t.prevToken||"type"==t.prevToken||(!!/\S(?:[^- ]>|[*\]])\s*$|\*$/.test(e.string.slice(0,n))||(!(!t.typeAtEndOfLine||e.column()!=e.indentation())||void 0))}function F(e){for(;;){if(!e||"top"==e.type)return!0;if("}"==e.type&&"namespace"!=e.prev.info)return!1;e=e.prev}}function e(e){for(var t={},n=e.split(" "),r=0;r<n.length;++r)t[n[r]]=!0;return t}function R(e,t){return"function"==typeof e?e(t):e.propertyIsEnumerable(t)}D.defineMode("clike",function(e,l){var i,s,c=e.indentUnit,u=l.statementIndentUnit||c,d=l.dontAlignCalls,f=l.keywords||{},p=l.types||{},m=l.builtin||{},h=l.blockKeywords||{},y=l.defKeywords||{},g=l.atoms||{},x=l.hooks||{},b=l.multiLineStrings,a=!1!==l.indentStatements,t=!1!==l.indentSwitch,k=l.namespaceSeparator,v=l.isPunctuationChar||/[\[\]{}\(\),;\:\.]/,_=l.numberStart||/[\d\.]/,w=l.number||/^(?:0x[a-f\d]+|0b[01]+|(?:\d+\.?\d*|\.\d+)(?:e[-+]?\d+)?)(u|ll?|l|f)?/i,S=l.isOperatorChar||/[+\-*&%=<>!?|\/]/,T=l.isIdentifierChar||/[\w\$_\xa1-\uffff]/,C=l.isReservedIdentifier||!1;function I(e,t){var a,n=e.next();if(x[n]){var r=x[n](e,t);if(!1!==r)return r}if('"'==n||"'"==n)return t.tokenize=(a=n,function(e,t){for(var n,r=!1,o=!1;null!=(n=e.next());){if(n==a&&!r){o=!0;break}r=!r&&"\\"==n}return(o||!r&&!b)&&(t.tokenize=null),"string"}),t.tokenize(e,t);if(v.test(n))return i=n,null;if(_.test(n)){if(e.backUp(1),e.match(w))return"number";e.next()}if("/"==n){if(e.eat("*"))return(t.tokenize=M)(e,t);if(e.eat("/"))return e.skipToEnd(),"comment"}if(S.test(n)){for(;!e.match(/^\/[\/*]/,!1)&&e.eat(S););return"operator"}if(e.eatWhile(T),k)for(;e.match(k);)e.eatWhile(T);var o=e.current();return R(f,o)?(R(h,o)&&(i="newstatement"),R(y,o)&&(s=!0),"keyword"):R(p,o)?"type":R(m,o)||C&&C(o)?(R(h,o)&&(i="newstatement"),"builtin"):R(g,o)?"atom":"variable"}function M(e,t){for(var n,r=!1;n=e.next();){if("/"==n&&r){t.tokenize=null;break}r="*"==n}return"comment"}function N(e,t){l.typeFirstDefinitions&&e.eol()&&F(t.context)&&(t.typeAtEndOfLine=z(e,t,e.pos))}return{startState:function(e){return{tokenize:null,context:new L((e||0)-c,0,"top",null,!1),indented:0,startOfLine:!0,prevToken:null}},token:function(e,t){var n=t.context;if(e.sol()&&(null==n.align&&(n.align=!1),t.indented=e.indentation(),t.startOfLine=!0),e.eatSpace())return N(e,t),null;i=s=null;var r=(t.tokenize||I)(e,t);if("comment"==r||"meta"==r)return r;if(null==n.align&&(n.align=!0),";"==i||":"==i||","==i&&e.match(/^\s*(?:\/\/.*)?$/,!1))for(;"statement"==t.context.type;)E(t);else if("{"==i)P(t,e.column(),"}");else if("["==i)P(t,e.column(),"]");else if("("==i)P(t,e.column(),")");else if("}"==i){for(;"statement"==n.type;)n=E(t);for("}"==n.type&&(n=E(t));"statement"==n.type;)n=E(t)}else i==n.type?E(t):a&&(("}"==n.type||"top"==n.type)&&";"!=i||"statement"==n.type&&"newstatement"==i)&&P(t,e.column(),"statement",e.current());if("variable"==r&&("def"==t.prevToken||l.typeFirstDefinitions&&z(e,t,e.start)&&F(t.context)&&e.match(/^\s*\(/,!1))&&(r="def"),x.token){var o=x.token(e,t,r);void 0!==o&&(r=o)}return"def"==r&&!1===l.styleDefs&&(r="variable"),t.startOfLine=!1,t.prevToken=s?"def":r||i,N(e,t),r},indent:function(e,t){if(e.tokenize!=I&&null!=e.tokenize||e.typeAtEndOfLine)return D.Pass;var n=e.context,r=t&&t.charAt(0),o=r==n.type;if("statement"==n.type&&"}"==r&&(n=n.prev),l.dontIndentStatements)for(;"statement"==n.type&&l.dontIndentStatements.test(n.info);)n=n.prev;if(x.indent){var a=x.indent(e,n,t,c);if("number"==typeof a)return a}var i=n.prev&&"switch"==n.prev.info;if(l.allmanIndentation&&/[{(]/.test(r)){for(;"top"!=n.type&&"}"!=n.type;)n=n.prev;return n.indented}return"statement"==n.type?n.indented+("{"==r?0:u):!n.align||d&&")"==n.type?")"!=n.type||o?n.indented+(o?0:c)+(o||!i||/^(?:case|default)\b/.test(t)?0:c):n.indented+u:n.column+(o?0:1)},electricInput:t?/^\s*(?:case .*?:|default:|\{\}?|\})$/:/^\s*[{}]$/,blockCommentStart:"/*",blockCommentEnd:"*/",blockCommentContinue:" * ",lineComment:"//",fold:"brace"}});var t="auto if break case register continue return default do sizeof static else struct switch extern typedef union for goto while enum const volatile inline restrict asm fortran",n=e("int long char short double float unsigned signed void bool"),r=e("SEL instancetype id Class Protocol BOOL");function o(e){return R(n,e)||/.+_t/.test(e)}var a="case do else for if switch while struct enum union",i="struct enum union";function l(e,t){if(!t.startOfLine)return!1;for(var n,r=null;n=e.peek();){if("\\"==n&&e.match(/^.$/)){r=l;break}if("/"==n&&e.match(/^\/[\/\*]/,!1))break;e.next()}return t.tokenize=r,"meta"}function s(e,t){return"type"==t.prevToken&&"type"}function c(e){return!(!e||e.length<2)&&("_"==e[0]&&("_"==e[1]||e[1]!==e[1].toLowerCase()))}function u(e){return e.eatWhile(/[\w\.']/),"number"}function d(e,t){if(e.backUp(1),e.match(/(R|u8R|uR|UR|LR)/)){var n=e.match(/"([^\s\\()]{0,16})\(/);return!!n&&(t.cpp11RawStringDelim=n[1],(t.tokenize=p)(e,t))}return e.match(/(u8|u|U|L)/)?!!e.match(/["']/,!1)&&"string":(e.next(),!1)}function f(e,t){for(var n;null!=(n=e.next());)if('"'==n&&!e.eat('"')){t.tokenize=null;break}return"string"}function p(e,t){var n=t.cpp11RawStringDelim.replace(/[^\w\s]/g,"\\$&");return e.match(new RegExp(".*?\\)"+n+'"'))?t.tokenize=null:e.skipToEnd(),"string"}function m(e,t){"string"==typeof e&&(e=[e]);var n=[];function r(e){if(e)for(var t in e)e.hasOwnProperty(t)&&n.push(t)}r(t.keywords),r(t.types),r(t.builtin),r(t.atoms),n.length&&(t.helperType=e[0],D.registerHelper("hintWords",e[0],n));for(var o=0;o<e.length;++o)D.defineMIME(e[o],t)}function h(e,t){for(var n=!1;!e.eol();){if(!n&&e.match('"""')){t.tokenize=null;break}n="\\"==e.next()&&!n}return"string"}m(["text/x-csrc","text/x-c","text/x-chdr"],{name:"clike",keywords:e(t),types:o,blockKeywords:e(a),defKeywords:e(i),typeFirstDefinitions:!0,atoms:e("NULL true false"),isReservedIdentifier:c,hooks:{"#":l,"*":s},modeProps:{fold:["brace","include"]}}),m(["text/x-c++src","text/x-c++hdr"],{name:"clike",keywords:e(t+"alignas alignof and and_eq audit axiom bitand bitor catch class compl concept constexpr const_cast decltype delete dynamic_cast explicit export final friend import module mutable namespace new noexcept not not_eq operator or or_eq override private protected public reinterpret_cast requires static_assert static_cast template this thread_local throw try typeid typename using virtual xor xor_eq"),types:o,blockKeywords:e(a+" class try catch"),defKeywords:e(i+" class namespace"),typeFirstDefinitions:!0,atoms:e("true false NULL nullptr"),dontIndentStatements:/^template$/,isIdentifierChar:/[\w\$_~\xa1-\uffff]/,isReservedIdentifier:c,hooks:{"#":l,"*":s,u:d,U:d,L:d,R:d,0:u,1:u,2:u,3:u,4:u,5:u,6:u,7:u,8:u,9:u,token:function(e,t,n){if("variable"==n&&"("==e.peek()&&(";"==t.prevToken||null==t.prevToken||"}"==t.prevToken)&&(r=e.current(),(o=/(\w+)::~?(\w+)$/.exec(r))&&o[1]==o[2]))return"def";var r,o}},namespaceSeparator:"::",modeProps:{fold:["brace","include"]}}),m("text/x-java",{name:"clike",keywords:e("abstract assert break case catch class const continue default do else enum extends final finally float for goto if implements import instanceof interface native new package private protected public return static strictfp super switch synchronized this throw throws transient try volatile while @interface"),types:e("byte short int long float double boolean char void Boolean Byte Character Double Float Integer Long Number Object Short String StringBuffer StringBuilder Void"),blockKeywords:e("catch class do else finally for if switch try while"),defKeywords:e("class interface enum @interface"),typeFirstDefinitions:!0,atoms:e("true false null"),number:/^(?:0x[a-f\d_]+|0b[01_]+|(?:[\d_]+\.?\d*|\.\d+)(?:e[-+]?[\d_]+)?)(u|ll?|l|f)?/i,hooks:{"@":function(e){return!e.match("interface",!1)&&(e.eatWhile(/[\w\$_]/),"meta")}},modeProps:{fold:["brace","import"]}}),m("text/x-csharp",{name:"clike",keywords:e("abstract as async await base break case catch checked class const continue default delegate do else enum event explicit extern finally fixed for foreach goto if implicit in interface internal is lock namespace new operator out override params private protected public readonly ref return sealed sizeof stackalloc static struct switch this throw try typeof unchecked unsafe using virtual void volatile while add alias ascending descending dynamic from get global group into join let orderby partial remove select set value var yield"),types:e("Action Boolean Byte Char DateTime DateTimeOffset Decimal Double Func Guid Int16 Int32 Int64 Object SByte Single String Task TimeSpan UInt16 UInt32 UInt64 bool byte char decimal double short int long object sbyte float string ushort uint ulong"),blockKeywords:e("catch class do else finally for foreach if struct switch try while"),defKeywords:e("class interface namespace struct var"),typeFirstDefinitions:!0,atoms:e("true false null"),hooks:{"@":function(e,t){return e.eat('"')?(t.tokenize=f)(e,t):(e.eatWhile(/[\w\$_]/),"meta")}}}),m("text/x-scala",{name:"clike",keywords:e("abstract case catch class def do else extends final finally for forSome if implicit import lazy match new null object override package private protected return sealed super this throw trait try type val var while with yield _ assert assume require print println printf readLine readBoolean readByte readShort readChar readInt readLong readFloat readDouble"),types:e("AnyVal App Application Array BufferedIterator BigDecimal BigInt Char Console Either Enumeration Equiv Error Exception Fractional Function IndexedSeq Int Integral Iterable Iterator List Map Numeric Nil NotNull Option Ordered Ordering PartialFunction PartialOrdering Product Proxy Range Responder Seq Serializable Set Specializable Stream StringBuilder StringContext Symbol Throwable Traversable TraversableOnce Tuple Unit Vector Boolean Byte Character CharSequence Class ClassLoader Cloneable Comparable Compiler Double Exception Float Integer Long Math Number Object Package Pair Process Runtime Runnable SecurityManager Short StackTraceElement StrictMath String StringBuffer System Thread ThreadGroup ThreadLocal Throwable Triple Void"),multiLineStrings:!0,blockKeywords:e("catch class enum do else finally for forSome if match switch try while"),defKeywords:e("class enum def object package trait type val var"),atoms:e("true false null"),indentStatements:!1,indentSwitch:!1,isOperatorChar:/[+\-*&%=<>!?|\/#:@]/,hooks:{"@":function(e){return e.eatWhile(/[\w\$_]/),"meta"},'"':function(e,t){return!!e.match('""')&&(t.tokenize=h,t.tokenize(e,t))},"'":function(e){return e.eatWhile(/[\w\$_\xa1-\uffff]/),"atom"},"=":function(e,t){var n=t.context;return!("}"!=n.type||!n.align||!e.eat(">"))&&(t.context=new L(n.indented,n.column,n.type,n.info,null,n.prev),"operator")},"/":function(e,t){return!!e.eat("*")&&(t.tokenize=function r(o){return function(e,t){for(var n;n=e.next();){if("*"==n&&e.eat("/")){if(1!=o)return t.tokenize=r(o-1),t.tokenize(e,t);t.tokenize=null;break}if("/"==n&&e.eat("*"))return t.tokenize=r(o+1),t.tokenize(e,t)}return"comment"}}(1),t.tokenize(e,t))}},modeProps:{closeBrackets:{pairs:'()[]{}""',triples:'"'}}}),m("text/x-kotlin",{name:"clike",keywords:e("package as typealias class interface this super val operator var fun for is in This throw return annotation break continue object if else while do try when !in !is as? file import where by get set abstract enum open inner override private public internal protected catch finally out final vararg reified dynamic companion constructor init sealed field property receiver param sparam lateinit data inline noinline tailrec external annotation crossinline const operator infix suspend actual expect setparam"),types:e("Boolean Byte Character CharSequence Class ClassLoader Cloneable Comparable Compiler Double Exception Float Integer Long Math Number Object Package Pair Process Runtime Runnable SecurityManager Short StackTraceElement StrictMath String StringBuffer System Thread ThreadGroup ThreadLocal Throwable Triple Void Annotation Any BooleanArray ByteArray Char CharArray DeprecationLevel DoubleArray Enum FloatArray Function Int IntArray Lazy LazyThreadSafetyMode LongArray Nothing ShortArray Unit"),intendSwitch:!1,indentStatements:!1,multiLineStrings:!0,number:/^(?:0x[a-f\d_]+|0b[01_]+|(?:[\d_]+(\.\d+)?|\.\d+)(?:e[-+]?[\d_]+)?)(u|ll?|l|f)?/i,blockKeywords:e("catch class do else finally for if where try while enum"),defKeywords:e("class val var object interface fun"),atoms:e("true false null this"),hooks:{"@":function(e){return e.eatWhile(/[\w\$_]/),"meta"},"*":function(e,t){return"."==t.prevToken?"variable":"operator"},'"':function(e,t){var a;return t.tokenize=(a=e.match('""'),function(e,t){for(var n,r=!1,o=!1;!e.eol();){if(!a&&!r&&e.match('"')){o=!0;break}if(a&&e.match('"""')){o=!0;break}n=e.next(),!r&&"$"==n&&e.match("{")&&e.skipTo("}"),r=!r&&"\\"==n&&!a}return!o&&a||(t.tokenize=null),"string"}),t.tokenize(e,t)},indent:function(e,t,n,r){var o=n&&n.charAt(0);return"}"!=e.prevToken&&")"!=e.prevToken||""!=n?"operator"==e.prevToken&&"}"!=n||"variable"==e.prevToken&&"."==o||("}"==e.prevToken||")"==e.prevToken)&&"."==o?2*r+t.indented:t.align&&"}"==t.type?t.indented+(e.context.type==(n||"").charAt(0)?0:r):void 0:e.indented}},modeProps:{closeBrackets:{triples:'"'}}}),m(["x-shader/x-vertex","x-shader/x-fragment"],{name:"clike",keywords:e("sampler1D sampler2D sampler3D samplerCube sampler1DShadow sampler2DShadow const attribute uniform varying break continue discard return for while do if else struct in out inout"),types:e("float int bool void vec2 vec3 vec4 ivec2 ivec3 ivec4 bvec2 bvec3 bvec4 mat2 mat3 mat4"),blockKeywords:e("for while do if else struct"),builtin:e("radians degrees sin cos tan asin acos atan pow exp log exp2 sqrt inversesqrt abs sign floor ceil fract mod min max clamp mix step smoothstep length distance dot cross normalize ftransform faceforward reflect refract matrixCompMult lessThan lessThanEqual greaterThan greaterThanEqual equal notEqual any all not texture1D texture1DProj texture1DLod texture1DProjLod texture2D texture2DProj texture2DLod texture2DProjLod texture3D texture3DProj texture3DLod texture3DProjLod textureCube textureCubeLod shadow1D shadow2D shadow1DProj shadow2DProj shadow1DLod shadow2DLod shadow1DProjLod shadow2DProjLod dFdx dFdy fwidth noise1 noise2 noise3 noise4"),atoms:e("true false gl_FragColor gl_SecondaryColor gl_Normal gl_Vertex gl_MultiTexCoord0 gl_MultiTexCoord1 gl_MultiTexCoord2 gl_MultiTexCoord3 gl_MultiTexCoord4 gl_MultiTexCoord5 gl_MultiTexCoord6 gl_MultiTexCoord7 gl_FogCoord gl_PointCoord gl_Position gl_PointSize gl_ClipVertex gl_FrontColor gl_BackColor gl_FrontSecondaryColor gl_BackSecondaryColor gl_TexCoord gl_FogFragCoord gl_FragCoord gl_FrontFacing gl_FragData gl_FragDepth gl_ModelViewMatrix gl_ProjectionMatrix gl_ModelViewProjectionMatrix gl_TextureMatrix gl_NormalMatrix gl_ModelViewMatrixInverse gl_ProjectionMatrixInverse gl_ModelViewProjectionMatrixInverse gl_TexureMatrixTranspose gl_ModelViewMatrixInverseTranspose gl_ProjectionMatrixInverseTranspose gl_ModelViewProjectionMatrixInverseTranspose gl_TextureMatrixInverseTranspose gl_NormalScale gl_DepthRange gl_ClipPlane gl_Point gl_FrontMaterial gl_BackMaterial gl_LightSource gl_LightModel gl_FrontLightModelProduct gl_BackLightModelProduct gl_TextureColor gl_EyePlaneS gl_EyePlaneT gl_EyePlaneR gl_EyePlaneQ gl_FogParameters gl_MaxLights gl_MaxClipPlanes gl_MaxTextureUnits gl_MaxTextureCoords gl_MaxVertexAttribs gl_MaxVertexUniformComponents gl_MaxVaryingFloats gl_MaxVertexTextureImageUnits gl_MaxTextureImageUnits gl_MaxFragmentUniformComponents gl_MaxCombineTextureImageUnits gl_MaxDrawBuffers"),indentSwitch:!1,hooks:{"#":l},modeProps:{fold:["brace","include"]}}),m("text/x-nesc",{name:"clike",keywords:e(t+" as atomic async call command component components configuration event generic implementation includes interface module new norace nx_struct nx_union post provides signal task uses abstract extends"),types:o,blockKeywords:e(a),atoms:e("null true false"),hooks:{"#":l},modeProps:{fold:["brace","include"]}}),m("text/x-objectivec",{name:"clike",keywords:e(t+" bycopy byref in inout oneway out self super atomic nonatomic retain copy readwrite readonly strong weak assign typeof nullable nonnull null_resettable _cmd @interface @implementation @end @protocol @encode @property @synthesize @dynamic @class @public @package @private @protected @required @optional @try @catch @finally @import @selector @encode @defs @synchronized @autoreleasepool @compatibility_alias @available"),types:function(e){return o(e)||R(r,e)},builtin:e("FOUNDATION_EXPORT FOUNDATION_EXTERN NS_INLINE NS_FORMAT_FUNCTION NS_RETURNS_RETAINED NS_ERROR_ENUM NS_RETURNS_NOT_RETAINED NS_RETURNS_INNER_POINTER NS_DESIGNATED_INITIALIZER NS_ENUM NS_OPTIONS NS_REQUIRES_NIL_TERMINATION NS_ASSUME_NONNULL_BEGIN NS_ASSUME_NONNULL_END NS_SWIFT_NAME NS_REFINED_FOR_SWIFT"),blockKeywords:e(a+" @synthesize @try @catch @finally @autoreleasepool @synchronized"),defKeywords:e(i+" @interface @implementation @protocol @class"),dontIndentStatements:/^@.*$/,typeFirstDefinitions:!0,atoms:e("YES NO NULL Nil nil true false nullptr"),isReservedIdentifier:c,hooks:{"#":l,"*":s},modeProps:{fold:["brace","include"]}}),m("text/x-squirrel",{name:"clike",keywords:e("base break clone continue const default delete enum extends function in class foreach local resume return this throw typeof yield constructor instanceof static"),types:o,blockKeywords:e("case catch class else for foreach if switch try while"),defKeywords:e("function local class"),typeFirstDefinitions:!0,atoms:e("true false null"),hooks:{"#":l},modeProps:{fold:["brace","include"]}});var y=null;m("text/x-ceylon",{name:"clike",keywords:e("abstracts alias assembly assert assign break case catch class continue dynamic else exists extends finally for function given if import in interface is let module new nonempty object of out outer package return satisfies super switch then this throw try value void while"),types:function(e){var t=e.charAt(0);return t===t.toUpperCase()&&t!==t.toLowerCase()},blockKeywords:e("case catch class dynamic else finally for function if interface module new object switch try while"),defKeywords:e("class dynamic function interface module object package value"),builtin:e("abstract actual aliased annotation by default deprecated doc final formal late license native optional sealed see serializable shared suppressWarnings tagged throws variable"),isPunctuationChar:/[\[\]{}\(\),;\:\.`]/,isOperatorChar:/[+\-*&%=<>!?|^~:\/]/,numberStart:/[\d#$]/,number:/^(?:#[\da-fA-F_]+|\$[01_]+|[\d_]+[kMGTPmunpf]?|[\d_]+\.[\d_]+(?:[eE][-+]?\d+|[kMGTPmunpf]|)|)/i,multiLineStrings:!0,typeFirstDefinitions:!0,atoms:e("true false null larger smaller equal empty finished"),indentSwitch:!1,styleDefs:!1,hooks:{"@":function(e){return e.eatWhile(/[\w\$_]/),"meta"},'"':function(e,t){return t.tokenize=function a(i){return function(e,t){for(var n,r=!1,o=!1;!e.eol();){if(!r&&e.match('"')&&("single"==i||e.match('""'))){o=!0;break}if(!r&&e.match("``")){y=a(i),o=!0;break}n=e.next(),r="single"==i&&!r&&"\\"==n}return o&&(t.tokenize=null),"string"}}(e.match('""')?"triple":"single"),t.tokenize(e,t)},"`":function(e,t){return!(!y||!e.match("`"))&&(t.tokenize=y,y=null,t.tokenize(e,t))},"'":function(e){return e.eatWhile(/[\w\$_\xa1-\uffff]/),"atom"},token:function(e,t,n){if(("variable"==n||"type"==n)&&"."==t.prevToken)return"variable-2"}},modeProps:{fold:["brace","import"],closeBrackets:{triples:'"'}}})});

// CodeMirror 적용
$('.__se_code_view').each(function() {

    const $this = $(this);
    const $code = $this.text();

    $this.empty();

    const myCodeMirror = CodeMirror(this, {
        value: $code,
        mode: 'text/x-java',
        theme: 'material',
        lineNumbers: true,
        lineWrapping: true,
        scrollbarStyle: null,
        enableCodeFormatting: true,
        readOnly: true,
        viewportMargin: Infinity
    });

});
