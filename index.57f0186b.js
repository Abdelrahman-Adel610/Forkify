var e,t,r,n,i,o,a,c,s,l,u,d,f,p,h,g,v=globalThis,m={},y={},b=function(e){return e&&e.Math===Math&&e};y=b("object"==typeof globalThis&&globalThis)||b("object"==typeof window&&window)||b("object"==typeof self&&self)||b("object"==typeof v&&v)||b("object"==typeof y&&y)||function(){return this}()||Function("return this")();var w={},k={};w=!(k=function(e){try{return!!e()}catch(e){return!0}})(function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var S={},x={};x=!k(function(){var e=(function(){}).bind();return"function"!=typeof e||e.hasOwnProperty("prototype")});var _=Function.prototype.call;S=x?_.bind(_):function(){return _.apply(_,arguments)};var E={}.propertyIsEnumerable,L=Object.getOwnPropertyDescriptor;n=L&&!E.call({1:2},1)?function(e){var t=L(this,e);return!!t&&t.enumerable}:E;var O={};O=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var j={},P={},T={},M=Function.prototype,I=M.call,R=x&&M.bind.bind(I,I),C={},$=(T=x?R:function(e){return function(){return I.apply(e,arguments)}})({}.toString),F=T("".slice);C=function(e){return F($(e),8,-1)};var H=Object,N=T("".split);P=k(function(){return!H("z").propertyIsEnumerable(0)})?function(e){return"String"===C(e)?N(e,""):H(e)}:H;var D={},q={};q=function(e){return null==e};var G=TypeError;D=function(e){if(q(e))throw new G("Can't call method on "+e);return e},j=function(e){return P(D(e))};var U={},A={},B={},Q={},W="object"==typeof document&&document.all;Q=void 0===W&&void 0!==W?function(e){return"function"==typeof e||e===W}:function(e){return"function"==typeof e},B=function(e){return"object"==typeof e?null!==e:Q(e)};var z={},V={};V=function(e,t){var r;return arguments.length<2?(r=y[e],Q(r)?r:void 0):y[e]&&y[e][t]};var J={};J=T({}.isPrototypeOf);var Y={},K={},X={},Z={},ee=y.navigator,et=ee&&ee.userAgent;Z=et?String(et):"";var er=y.process,en=y.Deno,ei=er&&er.versions||en&&en.version,eo=ei&&ei.v8;eo&&(o=(i=eo.split("."))[0]>0&&i[0]<4?1:+(i[0]+i[1])),!o&&Z&&(!(i=Z.match(/Edge\/(\d+)/))||i[1]>=74)&&(i=Z.match(/Chrome\/(\d+)/))&&(o=+i[1]),X=o;var ea=y.String;Y=(K=!!Object.getOwnPropertySymbols&&!k(function(){var e=Symbol("symbol detection");return!ea(e)||!(Object(e) instanceof Symbol)||!Symbol.sham&&X&&X<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var ec=Object;z=Y?function(e){return"symbol"==typeof e}:function(e){var t=V("Symbol");return Q(t)&&J(t.prototype,ec(e))};var es={},el={},eu={},ed=String;eu=function(e){try{return ed(e)}catch(e){return"Object"}};var ef=TypeError;el=function(e){if(Q(e))return e;throw new ef(eu(e)+" is not a function")},es=function(e,t){var r=e[t];return q(r)?void 0:el(r)};var ep={},eh=TypeError;ep=function(e,t){var r,n;if("string"===t&&Q(r=e.toString)&&!B(n=S(r,e))||Q(r=e.valueOf)&&!B(n=S(r,e))||"string"!==t&&Q(r=e.toString)&&!B(n=S(r,e)))return n;throw new eh("Can't convert object to primitive value")};var eg={},ev={},em={};em=!1;var ey={},eb=Object.defineProperty;ey=function(e,t){try{eb(y,e,{value:t,configurable:!0,writable:!0})}catch(r){y[e]=t}return t};var ew="__core-js_shared__",ek=ev=y[ew]||ey(ew,{});(ek.versions||(ek.versions=[])).push({version:"3.38.1",mode:em?"pure":"global",copyright:"© 2014-2024 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.38.1/LICENSE",source:"https://github.com/zloirock/core-js"}),eg=function(e,t){return ev[e]||(ev[e]=t||{})};var eS={},ex={},e_=Object;ex=function(e){return e_(D(e))};var eE=T({}.hasOwnProperty);eS=Object.hasOwn||function(e,t){return eE(ex(e),t)};var eL={},eO=0,ej=Math.random(),eP=T(1..toString);eL=function(e){return"Symbol("+(void 0===e?"":e)+")_"+eP(++eO+ej,36)};var eT=y.Symbol,eM=eg("wks"),eI=Y?eT.for||eT:eT&&eT.withoutSetter||eL,eR=TypeError,eC=(eS(eM,e="toPrimitive")||(eM[e]=K&&eS(eT,e)?eT[e]:eI("Symbol."+e)),eM[e]);A=function(e,t){if(!B(e)||z(e))return e;var r,n=es(e,eC);if(n){if(void 0===t&&(t="default"),r=S(n,e,t),!B(r)||z(r))return r;throw new eR("Can't convert object to primitive value")}return void 0===t&&(t="number"),ep(e,t)},U=function(e){var t=A(e,"string");return z(t)?t:t+""};var e$={},eF={},eH=y.document,eN=B(eH)&&B(eH.createElement);eF=function(e){return eN?eH.createElement(e):{}},e$=!w&&!k(function(){return 7!==Object.defineProperty(eF("div"),"a",{get:function(){return 7}}).a});var eD=Object.getOwnPropertyDescriptor;r=w?eD:function(e,t){if(e=j(e),t=U(t),e$)try{return eD(e,t)}catch(e){}if(eS(e,t))return O(!S(n,e,t),e[t])};var eq={},eG={};eG=w&&k(function(){return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var eU={},eA=String,eB=TypeError;eU=function(e){if(B(e))return e;throw new eB(eA(e)+" is not an object")};var eQ=TypeError,eW=Object.defineProperty,ez=Object.getOwnPropertyDescriptor,eV="enumerable",eJ="configurable",eY="writable";a=w?eG?function(e,t,r){if(eU(e),t=U(t),eU(r),"function"==typeof e&&"prototype"===t&&"value"in r&&eY in r&&!r[eY]){var n=ez(e,t);n&&n[eY]&&(e[t]=r.value,r={configurable:eJ in r?r[eJ]:n[eJ],enumerable:eV in r?r[eV]:n[eV],writable:!1})}return eW(e,t,r)}:eW:function(e,t,r){if(eU(e),t=U(t),eU(r),e$)try{return eW(e,t,r)}catch(e){}if("get"in r||"set"in r)throw new eQ("Accessors not supported");return"value"in r&&(e[t]=r.value),e},eq=w?function(e,t,r){return a(e,t,O(1,r))}:function(e,t,r){return e[t]=r,e};var eK={},eX={},eZ=Function.prototype,e0=w&&Object.getOwnPropertyDescriptor,e1=eS(eZ,"name")&&(!w||w&&e0(eZ,"name").configurable),e2={},e3=T(Function.toString);Q(ev.inspectSource)||(ev.inspectSource=function(e){return e3(e)}),e2=ev.inspectSource;var e4={},e5={},e7=y.WeakMap;e5=Q(e7)&&/native code/.test(String(e7));var e8={},e6=eg("keys");e8=function(e){return e6[e]||(e6[e]=eL(e))};var e9={};e9={};var te="Object already initialized",tt=y.TypeError,tr=y.WeakMap;if(e5||ev.state){var tn=ev.state||(ev.state=new tr);tn.get=tn.get,tn.has=tn.has,tn.set=tn.set,c=function(e,t){if(tn.has(e))throw new tt(te);return t.facade=e,tn.set(e,t),t},s=function(e){return tn.get(e)||{}},l=function(e){return tn.has(e)}}else{var ti=e8("state");e9[ti]=!0,c=function(e,t){if(eS(e,ti))throw new tt(te);return t.facade=e,eq(e,ti,t),t},s=function(e){return eS(e,ti)?e[ti]:{}},l=function(e){return eS(e,ti)}}var to=(e4={set:c,get:s,has:l,enforce:function(e){return l(e)?s(e):c(e,{})},getterFor:function(e){return function(t){var r;if(!B(t)||(r=s(t)).type!==e)throw new tt("Incompatible receiver, "+e+" required");return r}}}).enforce,ta=e4.get,tc=String,ts=Object.defineProperty,tl=T("".slice),tu=T("".replace),td=T([].join),tf=w&&!k(function(){return 8!==ts(function(){},"length",{value:8}).length}),tp=String(String).split("String"),th=eX=function(e,t,r){"Symbol("===tl(tc(t),0,7)&&(t="["+tu(tc(t),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!eS(e,"name")||e1&&e.name!==t)&&(w?ts(e,"name",{value:t,configurable:!0}):e.name=t),tf&&r&&eS(r,"arity")&&e.length!==r.arity&&ts(e,"length",{value:r.arity});try{r&&eS(r,"constructor")&&r.constructor?w&&ts(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=to(e);return eS(n,"source")||(n.source=td(tp,"string"==typeof t?t:"")),e};Function.prototype.toString=th(function(){return Q(this)&&ta(this).source||e2(this)},"toString"),eK=function(e,t,r,n){n||(n={});var i=n.enumerable,o=void 0!==n.name?n.name:t;if(Q(r)&&eX(r,o,n),n.global)i?e[t]=r:ey(t,r);else{try{n.unsafe?e[t]&&(i=!0):delete e[t]}catch(e){}i?e[t]=r:a(e,t,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return e};var tg={},tv={},tm={},ty={},tb={},tw={},tk=Math.ceil,tS=Math.floor;tw=Math.trunc||function(e){var t=+e;return(t>0?tS:tk)(t)},tb=function(e){var t=+e;return t!=t||0===t?0:tw(t)};var tx=Math.max,t_=Math.min;ty=function(e,t){var r=tb(e);return r<0?tx(r+t,0):t_(r,t)};var tE={},tL={},tO=Math.min;tL=function(e){var t=tb(e);return t>0?tO(t,0x1fffffffffffff):0},tE=function(e){return tL(e.length)};var tj=function(e){return function(t,r,n){var i,o=j(t),a=tE(o);if(0===a)return!e&&-1;var c=ty(n,a);if(e&&r!=r){for(;a>c;)if((i=o[c++])!=i)return!0}else for(;a>c;c++)if((e||c in o)&&o[c]===r)return e||c||0;return!e&&-1}},tP={includes:tj(!0),indexOf:tj(!1)}.indexOf,tT=T([].push);tm=function(e,t){var r,n=j(e),i=0,o=[];for(r in n)!eS(e9,r)&&eS(n,r)&&tT(o,r);for(;t.length>i;)eS(n,r=t[i++])&&(~tP(o,r)||tT(o,r));return o};var tM=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");u=Object.getOwnPropertyNames||function(e){return tm(e,tM)},d=Object.getOwnPropertySymbols;var tI=T([].concat);tv=V("Reflect","ownKeys")||function(e){var t=u(eU(e));return d?tI(t,d(e)):t},tg=function(e,t,n){for(var i=tv(t),o=0;o<i.length;o++){var c=i[o];eS(e,c)||n&&eS(n,c)||a(e,c,r(t,c))}};var tR={},tC=/#|\.prototype\./,t$=function(e,t){var r=tH[tF(e)];return r===tD||r!==tN&&(Q(t)?k(t):!!t)},tF=t$.normalize=function(e){return String(e).replace(tC,".").toLowerCase()},tH=t$.data={},tN=t$.NATIVE="N",tD=t$.POLYFILL="P";tR=t$,m=function(e,t){var n,i,o,a,c,s=e.target,l=e.global,u=e.stat;if(n=l?y:u?y[s]||ey(s,{}):y[s]&&y[s].prototype)for(i in t){if(a=t[i],o=e.dontCallGetSet?(c=r(n,i))&&c.value:n[i],!tR(l?i:s+(u?".":"#")+i,e.forced)&&void 0!==o){if(typeof a==typeof o)continue;tg(a,o)}(e.sham||o&&o.sham)&&eq(a,"sham",!0),eK(n,i,a,e)}};var tq={},tG={},tU=Function.prototype,tA=tU.apply,tB=tU.call;tG="object"==typeof Reflect&&Reflect.apply||(x?tB.bind(tA):function(){return tB.apply(tA,arguments)});var tQ={},tW={},tz=(tW=function(e){if("Function"===C(e))return T(e)})(tW.bind);tQ=function(e,t){return el(e),void 0===t?e:x?tz(e,t):function(){return e.apply(t,arguments)}};var tV={};tV=V("document","documentElement");var tJ={};tJ=T([].slice);var tY={},tK=TypeError;tY=function(e,t){if(e<t)throw new tK("Not enough arguments");return e};var tX={};tX=/(?:ipad|iphone|ipod).*applewebkit/i.test(Z);var tZ={},t0={},t1=function(e){return Z.slice(0,e.length)===e};tZ="NODE"==(t0=t1("Bun/")?"BUN":t1("Cloudflare-Workers")?"CLOUDFLARE":t1("Deno/")?"DENO":t1("Node.js/")?"NODE":y.Bun&&"string"==typeof Bun.version?"BUN":y.Deno&&"object"==typeof Deno.version?"DENO":"process"===C(y.process)?"NODE":y.window&&y.document?"BROWSER":"REST");var t2=y.setImmediate,t3=y.clearImmediate,t4=y.process,t5=y.Dispatch,t7=y.Function,t8=y.MessageChannel,t6=y.String,t9=0,re={},rt="onreadystatechange";k(function(){f=y.location});var rr=function(e){if(eS(re,e)){var t=re[e];delete re[e],t()}},rn=function(e){return function(){rr(e)}},ri=function(e){rr(e.data)},ro=function(e){y.postMessage(t6(e),f.protocol+"//"+f.host)};t2&&t3||(t2=function(e){tY(arguments.length,1);var t=Q(e)?e:t7(e),r=tJ(arguments,1);return re[++t9]=function(){tG(t,void 0,r)},p(t9),t9},t3=function(e){delete re[e]},tZ?p=function(e){t4.nextTick(rn(e))}:t5&&t5.now?p=function(e){t5.now(rn(e))}:t8&&!tX?(g=(h=new t8).port2,h.port1.onmessage=ri,p=tQ(g.postMessage,g)):y.addEventListener&&Q(y.postMessage)&&!y.importScripts&&f&&"file:"!==f.protocol&&!k(ro)?(p=ro,y.addEventListener("message",ri,!1)):p=rt in eF("script")?function(e){tV.appendChild(eF("script"))[rt]=function(){tV.removeChild(this),rr(e)}}:function(e){setTimeout(rn(e),0)});var ra=(tq={set:t2,clear:t3}).clear;m({global:!0,bind:!0,enumerable:!0,forced:y.clearImmediate!==ra},{clearImmediate:ra});var rc=tq.set,rs={},rl=y.Function,ru=/MSIE .\./.test(Z)||"BUN"===t0&&((t=y.Bun.version.split(".")).length<3||"0"===t[0]&&(t[1]<3||"3"===t[1]&&"0"===t[2]));rs=function(e,t){var r=t?2:1;return ru?function(n,i){var o=tY(arguments.length,1)>r,a=Q(n)?n:rl(n),c=o?tJ(arguments,r):[],s=o?function(){tG(a,this,c)}:a;return t?e(s,i):e(s)}:e};var rd=y.setImmediate?rs(rc,!1):rc;m({global:!0,bind:!0,enumerable:!0,forced:y.setImmediate!==rd},{setImmediate:rd});var rf=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,r){return e[t]=r}}function u(e,r,n,o){var a,c,s=Object.create((r&&r.prototype instanceof v?r:v).prototype);return i(s,"_invoke",{value:(a=new O(o||[]),c=f,function(r,i){if(c===p)throw Error("Generator is already running");if(c===h){if("throw"===r)throw i;return{value:t,done:!0}}for(a.method=r,a.arg=i;;){var o=a.delegate;if(o){var s=function e(r,n){var i=n.method,o=r.iterator[i];if(o===t)return n.delegate=null,"throw"===i&&r.iterator.return&&(n.method="return",n.arg=t,e(r,n),"throw"===n.method)||"return"!==i&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+i+"' method")),g;var a=d(o,r.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,g;var c=a.arg;return c?c.done?(n[r.resultName]=c.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,g):c:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,g)}(o,a);if(s){if(s===g)continue;return s}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(c===f)throw c=h,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);c=p;var l=d(e,n,a);if("normal"===l.type){if(c=a.done?h:"suspendedYield",l.arg===g)continue;return{value:l.arg,done:a.done}}"throw"===l.type&&(c=h,a.method="throw",a.arg=l.arg)}})}),s}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var f="suspendedStart",p="executing",h="completed",g={};function v(){}function m(){}function y(){}var b={};l(b,a,function(){return this});var w=Object.getPrototypeOf,k=w&&w(w(j([])));k&&k!==r&&n.call(k,a)&&(b=k);var S=y.prototype=v.prototype=Object.create(b);function x(e){["next","throw","return"].forEach(function(t){l(e,t,function(e){return this._invoke(t,e)})})}function _(e,t){var r;i(this,"_invoke",{value:function(i,o){function a(){return new t(function(r,a){!function r(i,o,a,c){var s=d(e[i],e,o);if("throw"===s.type)c(s.arg);else{var l=s.arg,u=l.value;return u&&"object"==typeof u&&n.call(u,"__await")?t.resolve(u.__await).then(function(e){r("next",e,a,c)},function(e){r("throw",e,a,c)}):t.resolve(u).then(function(e){l.value=e,a(l)},function(e){return r("throw",e,a,c)})}}(i,o,r,a)})}return r=r?r.then(a,a):a()}})}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function j(e){if(null!=e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}throw TypeError(typeof e+" is not iterable")}return m.prototype=y,i(S,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:m,configurable:!0}),m.displayName=l(y,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,l(e,s,"GeneratorFunction")),e.prototype=Object.create(S),e},e.awrap=function(e){return{__await:e}},x(_.prototype),l(_.prototype,c,function(){return this}),e.AsyncIterator=_,e.async=function(t,r,n,i,o){void 0===o&&(o=Promise);var a=new _(u(t,r,n,i),o);return e.isGeneratorFunction(r)?a:a.next().then(function(e){return e.done?e.value:a.next()})},x(S),l(S,s,"Generator"),l(S,a,function(){return this}),l(S,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=j,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(L),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return c.type="throw",c.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var s=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(s&&l){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else if(l){if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return(a.type=e,a.arg=t,o)?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),L(r),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;L(r)}return i}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:j(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}({});try{regeneratorRuntime=rf}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=rf:Function("r","regeneratorRuntime = r")(rf)}const rp="https://forkify-api.herokuapp.com/api/v2/recipes/",rh="f31a2476-a3d9-496d-abba-7f620e4ba5e0";async function rg(e){return new Promise((t,r)=>{setTimeout(function(){r(Error("Timeout ⏰: the request took longer than usual, please try again"))},1e3*e)})}async function rv(e){return new Promise((t,r)=>setTimeout(t,1e3*e))}async function rm(e,t){try{let r;r=t?await Promise.race([fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),rg(10)]):await Promise.race([fetch(e),rg(10)]);let n=await r.json();if(!r.ok)throw Error(n.message);return n}catch(e){throw e}}const ry={recipe:{},search:{query:"",results:[],currentPage:1,maxPages:1},bookmarks:[]};function rb(e){var t;return{cookingTime:e.cooking_time,id:e.id,image:e.image_url,ingredients:e.ingredients,publisher:e.publisher,servings:e.servings,url:e.source_url,title:e.title,...e.key&&{key:e.key},bookmarked:(t=e.id,ry.bookmarks.some(e=>e.id===t))}}async function rw(e){try{let t=await rm(`${rp+e}?key=${rh}`);ry.recipe=rb(t.data.recipe)}catch(e){throw e}}async function rk(e){try{let{recipes:t}=(await rm(`${rp}?search=${e.toLocaleLowerCase()}&key=${rh}`)).data;ry.search.query=e,ry.search.results=t.map(e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url,...e.key&&{key:e.key}})),ry.search.maxPages=Math.ceil(ry.search.results.length/10)}catch(e){throw e}}function rS(e=ry.search.currentPage){return ry.search.currentPage=e,ry.search.results.slice((e-1)*10,10*e)}async function rx(e){try{let t=Object.entries(e).filter(e=>e[0].startsWith("ingredient")&&e[1].length).map(e=>{let[t,r,n]=e[1].split(",");if(3!==e[1].split(",").length)throw Error("Wrong ingrdient format ,please follow out formatting rules");return{quantity:t?+t:null,unit:r,description:n}}),r={cooking_time:+e.prepTime,image_url:e.image,ingredients:t,publisher:e.publisher,servings:+e.servings,source_url:e.URL,title:e.title};return(await rm(`${rp}?key=${rh}`,r)).data.recipe}catch(e){throw e}}class r_{constructor(e,t,r){this._parent=e,this._errorMSG=t,this._MSG=r}renderSpinner(){this._parent.innerHTML=`
        <div class="spinner w-100 d-flex justify-content-center  ">
                        <i class="bi bi-arrow-repeat mt-md-5 "></i>
        </div>
        `}renderError(e=this._errorMSG){this._parent.innerHTML=`  <div class="message d-flex w-50 gap-3 mt-4 mx-auto ">
                    <i class="bi bi-exclamation-triangle text-danger"></i>
                    <p>
                       ${e}
                    </p>
                </div>`}renderMSG(e=this._MSG){this._parent.innerHTML=`  <div class="message d-flex w-50 gap-3 mt-4 mx-auto ">
   <i class="bi bi-emoji-smile"></i>
                    <p>
                       ${e}
                    </p>
                </div>`}update(e){let t=[...document.createRange().createContextualFragment(this._generateHTML(e)).querySelectorAll("*")],r=this._parent.querySelectorAll("*");t.forEach((e,t)=>{e.isEqualNode(r[t])||[...e.attributes].forEach(e=>r[t].setAttribute(e.name,e.value)),!e.isEqualNode(r[t])&&e.lastChild?.nodeValue.trim()&&r[t].lastChild.nodeValue!==e.lastChild.nodeValue&&(r[t].lastChild.nodeValue=e.lastChild.nodeValue)})}}var rE=new class extends r_{constructor(){super(document.querySelector(".main-item"),"Couldn't find the recipe please try again.","Start by searching for a recipe or an ingredient. Have fun!")}_generateHTML(e){return`<div class="recipe  w-100 h-100 ">
                    <picture>
                    <img src='${e.image}'>
                    </picture>
                    <header>
                        <h2 class=" start-50 position-absolute bg-main text-white px-2 py-2">${e.title}</h2>
                    </header>
                    <div class="info d-flex justify-content-between mt-5 w-80 mx-auto py-4">

                        <div class="left d-flex gap-5">
                            <div class=" time d-flex gap-3 ">
                                <i class=" bi bi-stopwatch"></i>
                                <p>
                                    <span class="fw-bolder"> ${e.cookingTime} </span> minutes
                                </p>
                            </div>
                            <div class="servs d-flex gap-3 ">
                                <i class="bi bi-people"></i>
                                <p> <span class="fw-bolder"> ${e.servings} </span> servings</p>
                                <div class="plusMinus">
                                    <i class="bi bi-dash-circle" data-next='${e.servings-1}'></i>

                                    <i class="bi bi-plus-circle" data-next='${e.servings+1}'></i>
                                </div>
                            </div>
                        </div>
                        <div class="right d-flex align-items-center gap-3">
                            <div class="person">
                            ${e.key?'<i class="bi bi-person-fill"></i>':""}
                            </div>
                            <div class="bookmark">
                                <i class="bi bi-bookmark${e.bookmarked?"-fill":""}"></i>
                            </div>
                        
                        </div>
                    </div>
                    <div class="ingredients py-4">
                        <h2 class="text-center">Recipe ingredients</h2>
                        <ul class="my-4">
                            
                            ${e.ingredients.reduce((e,t)=>e+=this._getIngrident(t),"")}
                        
                        </ul>
                    </div>
                    <div
                        class="howToCook text-center w-75 mx-auto d-flex flex-column align-items-center gap-3 justify-content-center my-4">
                        <h2>How to cook it</h2>
                        <p>
                            This recipe was carefully designed and tested by <span class="fw-bolder"> Closet
                                Cooking.</span> Please check out directions at their website.
                        </p>
                        <a class="btn bg-main d-inline-block" target="_blank" href="${e.url}">Directions \u{2192}</a>
                    </div>
                </div>`}_getIngrident(e){return`<li> <i class="bi bi-check2"></i>
          ${e.quantity?e.quantity:""} ${e.unit} ${e.description} 
</li>`}async renderRecipe(e){let t=this._generateHTML(e);this._parent.innerHTML=t}eventHandler(e){window.addEventListener("hashchange",e),window.addEventListener("load",e)}servingsClickHandler(e){this._parent.addEventListener("click",function(t){let r=t.target.closest("i[data-next]");if(!r)return;let{next:n}=r.dataset;n<=0||e(+n)})}bookmarkClickHandler(e){this._parent.addEventListener("click",function(t){(t.target.closest(".bi-bookmark")||t.target.closest(".bi-bookmark-fill"))&&e()})}},rL=new class extends r_{constructor(){super(document.querySelector(".search"),"Couldn't find the recipe please try again.","Start by searching for a recipe or an ingredient. Have fun!")}getQuery(){return this._parent.value}eventHandler(e){document.querySelector(".searchForm").addEventListener("submit",function(t){t.preventDefault(),e()})}};class rO extends r_{constructor(e,t,r){super(e,t,r)}renderResults(e){this._parent.innerHTML=this._generateHTML(e)}_generateHTML(e){let t=location.hash.slice(1);return e.map(e=>`
             <div class="item ${e.id===t?"selected":""}">
                      <a href="#${e.id}">
                          <img src="${e.image}" alt="${e.title}">
                          <h2>${e.title}
                          </h2>
                          <div class='d-flex justify-content-between'>
                              <p>${e.publisher}</p>
                              
                            ${e.key?'<div class="person"><i class="bi bi-person-fill"></i></div>':""}
                             
                        </div>
                      
                          </a>
                  </div>
                `).join(" ")}}var rj=new class extends rO{constructor(){super(document.querySelector(".list>div"),"Couldn't find the recipe please try again.","Start by searching for a recipe or an ingredient. Have fun!")}},rP=new class extends rO{constructor(){super(document.querySelector(".bookmark-list>div"),"No bookmarks yet. Find a nice recipe and bookmark it ;)","No bookmarks yet. Find a nice recipe and bookmark it ;)")}setGetBookmarksHandler(e,t){window.addEventListener("load",t),window.addEventListener("unload",e)}},rT=new class extends r_{constructor(){super(document.querySelector(".page-ctrl"),"Couldn't find the recipe please try again.","Start by searching for a recipe or an ingredient. Have fun!")}renderPagination(e,t={left:left,right:right}){if(this._clear(),t.left){let t=`<button data-page='${e-1}' class="me-auto">\u{2190} page ${e-1}</button>`;this._parent.insertAdjacentHTML("beforeend",t)}if(t.right){let t=`<button data-page='${e+1}' class="ms-auto">page ${e+1}\u{2192}</button>`;this._parent.insertAdjacentHTML("beforeend",t)}}_clear(){this._parent.innerHTML=""}eventHandler(e){this._parent.addEventListener("click",function(t){let r=t.target.closest("button");r&&e(+r.dataset.page)})}};class rM extends r_{_upload=document.querySelector(".upload button");_overlay=document.querySelector(".overlay");_modal=document.querySelector(".addRecipe");_addRecipeBtn=document.querySelector(".addRecipeBtn");constructor(){super(document.querySelector(".AddRecipeForm"),"Couldn't add the recipe","Succssfully added the recipe"),this._openModalEvent()}toggleModal(){this._parent.classList.toggle("d-none"),this._overlay.classList.toggle("d-none")}_overlayClick(e){(e.target.closest(".close i")||!e.target.closest(".addRecipe"))&&(this.toggleModal(),this.renderForm())}renderForm(){this._parent.innerHTML=`
     <div>
                <div class="close">
                    <i class="bi bi-x position-absolute "></i>
                </div>
                <div class="yourRecipe d-flex w-100 mx-auto py-5
            px-5 h-100">
                    <div class="left w-50 px-4">
                        <h2 class="mb-4">Recipe data</h2>
                        <div class="grid">
                            <label for="title">Title</label>
                            <input class="form-control" type="text" placeholder="" id="title"  name="title">

                            <label for="URL">URL</label>
                            <input class="form-control" type="text" placeholder="" id="URL"  name="URL">
                            <label for="ImageURL">Image URL</label>
                            <input class="form-control" type="text" placeholder="" id="ImageURL" 
                                name="image">

                            <label for="Publisher">Publisher</label>
                            <input class="form-control" type="text" placeholder="" id="Publisher"
                                name="publisher">

                            <label for="PrepTime">Prep Time</label>
                            <input class="form-control" type="number" placeholder="" id="PrepTime" 
                                name="prepTime">

                            <label for="Servings">Servings</label>
                            <input class="form-control" type="number" placeholder="" id="Servings" 
                                name="servings">
                        </div>
                    </div>
                    <div class="right w-50 px-4">
                        <h2 class="mb-4">Ingredients</h2>
                        <div class="grid">
                            <label for="Ingredient_one">Ingredient 1</label>
                            <input class="form-control" type="text" name="ingredient-1"
                                placeholder="Format: 'Quantity,Unit,Description'" id="Ingredient_one"
                                
                            <label for="Ingredient_two">Ingredient 2</label>
                            <input class="form-control" type="text" name="ingredient-2"
                                placeholder="Format: 'Quantity,Unit,Description'" id="Ingredient_two" >
                            <label for="Ingredient_three">Ingredient 3</label>
                            <input class="form-control" type="text" name="ingredient-3"
                                placeholder="Format: 'Quantity,Unit,Description'" id="Ingredient_three" >
                            <label for="Ingredient_four">Ingredient 4</label>
                            <input class="form-control" type="text" name="ingredient-4"
                                placeholder="Format: 'Quantity,Unit,Description'" id="Ingredient_four" >
                            <label for="Ingredient_five">Ingredient 5</label>
                            <input class="form-control" type="text" name="ingredient-5"
                                placeholder="Format: 'Quantity,Unit,Description'" id="Ingredient_five" >
                            <label for="Ingredient_six">Ingredient 6</label>
                            <input class="form-control" type="text" name="ingredient-6"
                                placeholder="Format: 'Quantity,Unit,Description'" id="Ingredient_six" >
                        </div>
                    </div>
                </div>
                <div class="d-flex justify-content-center upload mb-5">
                    <button class="btn bg-main d-flex align-items-center justify-content-center gap-3" type="submit">
                        <i class="bi bi-cloud-upload"></i> UPLOAD
                    </button>
                </div>
            </div>
    `}_openModalEvent(){this._addRecipeBtn.addEventListener("click",this.toggleModal.bind(this)),this._parent.addEventListener("click",this._overlayClick.bind(this)),this._overlay.addEventListener("click",this._overlayClick.bind(this))}getRecipe(e){this._parent.addEventListener("submit",function(t){t.preventDefault(),e(Object.fromEntries([...this.querySelectorAll("input")].map(e=>[e.name,e.value])))})}}var rI=new rM;async function rR(){try{let e=location.hash.slice(1);if(ry.bookmarks.length||rP.renderMSG(),!e){rE.renderMSG();return}rE.renderSpinner(),await rw(e),rE.renderRecipe(ry.recipe);let t=rS(ry.search.currentPage);t&&rj.update(t),ry.bookmarks&&rP.update(ry.bookmarks)}catch(e){rE.renderError()}}async function rC(){try{let e=rL.getQuery();if(rj.renderSpinner(),await rk(e),!ry.search.results.length)throw Error();r$()}catch(e){rj.renderError()}}function r$(e=1){let t=rS(e);rj.renderResults(t),function(){let e=ry.search.currentPage,t=ry.search.maxPages,r={left:0,right:0};1===e&&t>1&&(r.right=1),e===t&&e>1&&(r.left=1),e>1&&e<t&&(r.right=1,r.left=1),rT.renderPagination(e,r)}()}function rF(e=ry.recipe){ry.recipe=e,ry.recipe.bookmarked?function(){ry.recipe.bookmarked=0;let e=ry.bookmarks.findIndex(e=>e.id===ry.recipe.id);ry.bookmarks.splice(e,1)}():(ry.recipe.bookmarked=1,ry.bookmarks.push(ry.recipe)),rE.update(ry.recipe),rP.renderResults(ry.bookmarks),ry.bookmarks.length||rP.renderMSG()}async function rH(e){try{let t=await rx(e);rE.renderRecipe(t),history.pushState(null,"",`#${t.id}`),t=rb(t),rF(t),rI.renderSpinner(),await rv(.5),rI.renderMSG(),await rv(1.5),rI.toggleModal(),rI.renderForm()}catch(e){rI.renderError(e.message)}}rE.eventHandler(rR),rE.servingsClickHandler(function(e){let t=ry.recipe,r=ry.recipe.servings;t.ingredients.forEach(t=>{t.quantity=e/r*t.quantity}),ry.recipe.servings=e,rE.update(ry.recipe)}),rE.bookmarkClickHandler(rF),rL.eventHandler(rC),rT.eventHandler(r$),rP.setGetBookmarksHandler(function(){localStorage.setItem("bookmarks",JSON.stringify(ry.bookmarks))},function(){(function(){let e=JSON.parse(localStorage.getItem("bookmarks"));return e&&(ry.bookmarks=e),e})().length?rP.renderResults(ry.bookmarks):rP.renderMSG()}),rI.getRecipe(rH);
//# sourceMappingURL=index.57f0186b.js.map
