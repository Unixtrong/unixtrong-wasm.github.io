!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.composeApp=t():e.composeApp=t()}(this,(()=>(()=>{"use strict";var e,t,r,o,n,a,s={598:(e,t,r)=>{r.a(e,(async(e,o)=>{try{r.r(t),r.d(t,{default:()=>e});var n=r(178);const e=(await(0,n._)()).exports;o()}catch(e){o(e)}}),1)},178:(e,t,r)=>{async function o(e={},t=!0){const o=new WeakMap,n=e["./skiko.mjs"]??await r.e(366).then(r.bind(r,366)),a={"kotlin.captureStackTrace":()=>(new Error).stack,"kotlin.wasm.internal.throwJsError":(e,t,r)=>{const o=new Error;throw o.message=e,o.name=t,o.stack=r,o},"kotlin.wasm.internal.stringLength":e=>e.length,"kotlin.wasm.internal.jsExportStringToWasm":(e,t,r,o)=>{const n=new Uint16Array(l.memory.buffer,o,r);let a=0,s=t;for(;a<r;)n.set([e.charCodeAt(s)],a),s++,a++},"kotlin.wasm.internal.externrefToInt":e=>Number(e),"kotlin.wasm.internal.importStringFromWasm":(e,t,r)=>{const o=new Uint16Array(l.memory.buffer,e,t),n=String.fromCharCode.apply(null,o);return null==r?n:r+n},"kotlin.wasm.internal.getJsEmptyString":()=>"","kotlin.wasm.internal.externrefToString":e=>String(e),"kotlin.wasm.internal.externrefEquals":(e,t)=>e===t,"kotlin.wasm.internal.externrefHashCode":(()=>{const e=new DataView(new ArrayBuffer(8)),t=new WeakMap;return r=>{if(null==r)return 0;switch(typeof r){case"object":case"function":return function(e){const r=t.get(e);if(void 0===r){const r=4294967296,o=Math.random()*r|0;return t.set(e,o),o}return r}(r);case"number":return function(t){return(0|t)===t?0|t:(e.setFloat64(0,t,!0),(31*e.getInt32(0,!0)|0)+e.getInt32(4,!0)|0)}(r);case"boolean":return r?1231:1237;default:return function(e){for(var t=0,r=0;r<e.length;r++)t=31*t+e.charCodeAt(r)|0;return t}(String(r))}}})(),"kotlin.wasm.internal.isNullish":e=>null==e,"kotlin.wasm.internal.getJsTrue":()=>!0,"kotlin.wasm.internal.getJsFalse":()=>!1,"kotlin.wasm.internal.tryGetOrSetExternrefBox_$external_fun":(e,t)=>function(e,t){if("object"!=typeof e)return t;const r=o.get(e);return void 0!==r?r:(o.set(e,t),t)}(e,t),"kotlin.js.jsCatch":e=>{let t=null;try{e()}catch(e){t=e}return t},"kotlin.js.__convertKotlinClosureToJsClosure_(()->Unit)":e=>()=>l["__callFunction_(()->Unit)"](e),"kotlin.js.jsThrow":e=>{throw e},"kotlin.io.printError":e=>console.error(e),"kotlin.io.printlnImpl":e=>console.log(e),"kotlin.js.jsArrayGet":(e,t)=>e[t],"kotlin.js.length_$external_prop_getter":e=>e.length,"kotlin.js.__convertKotlinClosureToJsClosure_((Js?)->Js?)":e=>t=>l["__callFunction_((Js?)->Js?)"](e,t),"kotlin.js.then_$external_fun":(e,t,r)=>e.then(t,r),"kotlin.js.__convertKotlinClosureToJsClosure_((Js)->Js?)":e=>t=>l["__callFunction_((Js)->Js?)"](e,t),"kotlin.random.initialSeed":()=>Math.random()*Math.pow(2,32)|0,"kotlinx.browser.window_$external_prop_getter":()=>window,"kotlinx.browser.document_$external_prop_getter":()=>document,"org.khronos.webgl.byteLength_$external_prop_getter":e=>e.byteLength,"org.khronos.webgl.Int8Array_$external_fun":(e,t,r,o,n)=>new Int8Array(e,o?void 0:t,n?void 0:r),"org.khronos.webgl.length_$external_prop_getter":e=>e.length,"org.w3c.dom.css.height_$external_prop_setter":(e,t)=>e.height=t,"org.w3c.dom.css.width_$external_prop_setter":(e,t)=>e.width=t,"org.w3c.dom.css.style_$external_prop_getter":e=>e.style,"org.w3c.dom.encryptedmedia.__convertKotlinClosureToJsClosure_((Js)->Unit)":e=>t=>l["__callFunction_((Js)->Unit)"](e,t),"org.w3c.dom.events.addEventListener_$external_fun":(e,t,r,o)=>e.addEventListener(t,r,o),"org.w3c.dom.events.addEventListener_$external_fun_1":(e,t,r)=>e.addEventListener(t,r),"org.w3c.dom.events.timeStamp_$external_prop_getter":e=>e.timeStamp,"org.w3c.dom.events.preventDefault_$external_fun":e=>e.preventDefault(),"org.w3c.dom.events.Event_$external_class_instanceof":e=>e instanceof Event,"org.w3c.dom.events.ctrlKey_$external_prop_getter":e=>e.ctrlKey,"org.w3c.dom.events.shiftKey_$external_prop_getter":e=>e.shiftKey,"org.w3c.dom.events.altKey_$external_prop_getter":e=>e.altKey,"org.w3c.dom.events.metaKey_$external_prop_getter":e=>e.metaKey,"org.w3c.dom.events.button_$external_prop_getter":e=>e.button,"org.w3c.dom.events.offsetX_$external_prop_getter":e=>e.offsetX,"org.w3c.dom.events.offsetY_$external_prop_getter":e=>e.offsetY,"org.w3c.dom.events.MouseEvent_$external_class_instanceof":e=>e instanceof MouseEvent,"org.w3c.dom.events.key_$external_prop_getter":e=>e.key,"org.w3c.dom.events.location_$external_prop_getter":e=>e.location,"org.w3c.dom.events.ctrlKey_$external_prop_getter_1":e=>e.ctrlKey,"org.w3c.dom.events.shiftKey_$external_prop_getter_1":e=>e.shiftKey,"org.w3c.dom.events.altKey_$external_prop_getter_1":e=>e.altKey,"org.w3c.dom.events.metaKey_$external_prop_getter_1":e=>e.metaKey,"org.w3c.dom.events.keyCode_$external_prop_getter":e=>e.keyCode,"org.w3c.dom.events.DOM_KEY_LOCATION_RIGHT_$external_prop_getter":e=>e.DOM_KEY_LOCATION_RIGHT,"org.w3c.dom.events.Companion_$external_object_getInstance":()=>KeyboardEvent,"org.w3c.dom.events.KeyboardEvent_$external_class_instanceof":e=>e instanceof KeyboardEvent,"org.w3c.dom.events.deltaX_$external_prop_getter":e=>e.deltaX,"org.w3c.dom.events.deltaY_$external_prop_getter":e=>e.deltaY,"org.w3c.dom.events.WheelEvent_$external_class_instanceof":e=>e instanceof WheelEvent,"org.w3c.dom.navigator_$external_prop_getter":e=>e.navigator,"org.w3c.dom.devicePixelRatio_$external_prop_getter":e=>e.devicePixelRatio,"org.w3c.dom.requestAnimationFrame_$external_fun":(e,t)=>e.requestAnimationFrame(t),"org.w3c.dom.__convertKotlinClosureToJsClosure_((Double)->Unit)":e=>t=>l["__callFunction_((Double)->Unit)"](e,t),"org.w3c.dom.matchMedia_$external_fun":(e,t)=>e.matchMedia(t),"org.w3c.dom.clearTimeout_$external_fun":(e,t,r)=>e.clearTimeout(r?void 0:t),"org.w3c.dom.fetch_$external_fun":(e,t,r,o)=>e.fetch(t,o?void 0:r),"org.w3c.dom.documentElement_$external_prop_getter":e=>e.documentElement,"org.w3c.dom.head_$external_prop_getter":e=>e.head,"org.w3c.dom.createElement_$external_fun":(e,t,r,o)=>e.createElement(t,o?void 0:r),"org.w3c.dom.createTextNode_$external_fun":(e,t)=>e.createTextNode(t),"org.w3c.dom.getElementById_$external_fun":(e,t)=>e.getElementById(t),"org.w3c.dom.clientWidth_$external_prop_getter":e=>e.clientWidth,"org.w3c.dom.clientHeight_$external_prop_getter":e=>e.clientHeight,"org.w3c.dom.setAttribute_$external_fun":(e,t,r)=>e.setAttribute(t,r),"org.w3c.dom.getElementsByTagName_$external_fun":(e,t)=>e.getElementsByTagName(t),"org.w3c.dom.userAgent_$external_prop_getter":e=>e.userAgent,"org.w3c.dom.language_$external_prop_getter":e=>e.language,"org.w3c.dom.parentElement_$external_prop_getter":e=>e.parentElement,"org.w3c.dom.textContent_$external_prop_setter":(e,t)=>e.textContent=t,"org.w3c.dom.cloneNode_$external_fun":(e,t,r)=>e.cloneNode(r?void 0:t),"org.w3c.dom.appendChild_$external_fun":(e,t)=>e.appendChild(t),"org.w3c.dom.replaceChild_$external_fun":(e,t,r)=>e.replaceChild(t,r),"org.w3c.dom.item_$external_fun":(e,t)=>e.item(t),"org.w3c.dom.HTMLTitleElement_$external_class_instanceof":e=>e instanceof HTMLTitleElement,"org.w3c.dom.type_$external_prop_setter":(e,t)=>e.type=t,"org.w3c.dom.HTMLStyleElement_$external_class_instanceof":e=>e instanceof HTMLStyleElement,"org.w3c.dom.width_$external_prop_getter":e=>e.width,"org.w3c.dom.width_$external_prop_setter":(e,t)=>e.width=t,"org.w3c.dom.height_$external_prop_getter":e=>e.height,"org.w3c.dom.height_$external_prop_setter":(e,t)=>e.height=t,"org.w3c.dom.HTMLCanvasElement_$external_class_instanceof":e=>e instanceof HTMLCanvasElement,"org.w3c.fetch.ok_$external_prop_getter":e=>e.ok,"org.w3c.fetch.arrayBuffer_$external_fun":e=>e.arrayBuffer(),"org.w3c.performance.performance_$external_prop_getter":e=>e.performance,"org.w3c.performance.now_$external_fun":e=>e.now(),"kotlinx.coroutines.tryGetProcess":()=>"undefined"!=typeof process&&"function"==typeof process.nextTick?process:null,"kotlinx.coroutines.tryGetWindow":()=>"undefined"!=typeof window&&null!=window&&"function"==typeof window.addEventListener?window:null,"kotlinx.coroutines.nextTick_$external_fun":(e,t)=>e.nextTick(t),"kotlinx.coroutines.error_$external_fun":(e,t)=>e.error(t),"kotlinx.coroutines.console_$external_prop_getter":()=>console,"kotlinx.coroutines.createScheduleMessagePoster":e=>()=>Promise.resolve(0).then(e),"kotlinx.coroutines.__callJsClosure_(()->Unit)":e=>e(),"kotlinx.coroutines.createRescheduleMessagePoster":e=>()=>e.postMessage("dispatchCoroutine","*"),"kotlinx.coroutines.subscribeToWindowMessages":(e,t)=>{e.addEventListener("message",(r=>{r.source==e&&"dispatchCoroutine"==r.data&&(r.stopPropagation(),t())}),!0)},"kotlinx.coroutines.setTimeout":(e,t,r)=>e.setTimeout(t,r),"kotlinx.coroutines.clearTimeout":e=>{"undefined"!=typeof clearTimeout&&clearTimeout(e)},"kotlinx.coroutines.setTimeout_$external_fun":(e,t)=>setTimeout(e,t),"org.jetbrains.skiko.getNavigatorInfo":()=>navigator.userAgentData?navigator.userAgentData.platform:navigator.platform,"org.jetbrains.skia.impl.FinalizationRegistry_$external_fun":e=>new FinalizationRegistry(e),"org.jetbrains.skia.impl.register_$external_fun":(e,t,r)=>e.register(t,r),"org.jetbrains.skia.impl.unregister_$external_fun":(e,t)=>e.unregister(t),"org.jetbrains.skia.impl._releaseLocalCallbackScope_$external_fun":()=>n._releaseLocalCallbackScope(),"org.jetbrains.skiko.wasm.createContext_$external_fun":(e,t,r)=>e.createContext(t,r),"org.jetbrains.skiko.wasm.makeContextCurrent_$external_fun":(e,t)=>e.makeContextCurrent(t),"org.jetbrains.skiko.wasm.GL_$external_object_getInstance":()=>n.GL,"org.jetbrains.skiko.wasm.createDefaultContextAttributes":()=>({alpha:1,depth:1,stencil:8,antialias:0,premultipliedAlpha:1,preserveDrawingBuffer:0,preferLowPowerToHighPerformance:0,failIfMajorPerformanceCaveat:0,enableExtensionsByDefault:1,explicitSwapControl:0,renderViaOffscreenBackBuffer:0,majorVersion:2}),"androidx.compose.ui.text.intl.parseLanguageTagToIntlLocale":e=>new Intl.Locale(e),"androidx.compose.ui.text.intl.language_$external_prop_getter":e=>e.language,"androidx.compose.ui.text.intl.baseName_$external_prop_getter":e=>e.baseName,"androidx.compose.ui.text.intl.getUserPreferredLanguagesAsArray":()=>window.navigator.languages,"androidx.compose.ui.window.setCursor":(e,t)=>document.getElementById(e).style.cursor=t,"org.jetbrains.compose.resources.jsExportInt8ArrayToWasm":(e,t,r)=>{new Int8Array(l.memory.buffer,r,t).set(e)}};let s,i,l;const c="undefined"!=typeof process&&"node"===process.release.name,p=!c&&("undefined"!=typeof d8||"undefined"!=typeof inIon||"undefined"!=typeof jscOptions),_=!c&&!p&&"undefined"!=typeof window;if(!c&&!p&&!_)throw"Supported JS engine not detected";const d="./composeApp.wasm",u={js_code:a,"./skiko.mjs":e["./skiko.mjs"]??await r.e(366).then(r.bind(r,366))};try{if(c){i=(await import("node:module")).default.createRequire("file:///Users/danyun/Documents/project/idea-private/hello-wasm/build/js/packages/composeApp/kotlin/composeApp.uninstantiated.mjs");const e=i("fs"),t=i("path"),r=i("url").fileURLToPath("file:///Users/danyun/Documents/project/idea-private/hello-wasm/build/js/packages/composeApp/kotlin/composeApp.uninstantiated.mjs"),o=t.dirname(r),n=e.readFileSync(t.resolve(o,d)),a=new WebAssembly.Module(n);s=new WebAssembly.Instance(a,u)}if(p){const e=read(d,"binary"),t=new WebAssembly.Module(e);s=new WebAssembly.Instance(t,u)}_&&(s=(await WebAssembly.instantiateStreaming(fetch(d),u)).instance)}catch(e){if(e instanceof WebAssembly.CompileError){let e="Please make sure that your runtime environment supports the latest version of Wasm GC and Exception-Handling proposals.\nFor more information, see https://kotl.in/wasm-help\n";if(_)console.error(e);else{const t="\n"+e;"undefined"!=typeof console&&void 0!==console.log?console.log(t):print(t)}}throw e}return l=s.exports,t&&l._initialize(),{instance:s,exports:l}}r.d(t,{_:()=>o})}},i={};function l(e){var t=i[e];if(void 0!==t)return t.exports;var r=i[e]={exports:{}};return s[e](r,r.exports,l),r.exports}return l.m=s,e="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",t="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",r="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",o=e=>{e&&!e.d&&(e.d=1,e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},l.a=(n,a,s)=>{var i;s&&((i=[]).d=1);var l,c,p,_=new Set,d=n.exports,u=new Promise(((e,t)=>{p=t,c=e}));u[t]=d,u[e]=e=>(i&&e(i),_.forEach(e),u.catch((e=>{}))),n.exports=u,a((n=>{var a;l=(n=>n.map((n=>{if(null!==n&&"object"==typeof n){if(n[e])return n;if(n.then){var a=[];a.d=0,n.then((e=>{s[t]=e,o(a)}),(e=>{s[r]=e,o(a)}));var s={};return s[e]=e=>e(a),s}}var i={};return i[e]=e=>{},i[t]=n,i})))(n);var s=()=>l.map((e=>{if(e[r])throw e[r];return e[t]})),c=new Promise((t=>{(a=()=>t(s)).r=0;var r=e=>e!==i&&!_.has(e)&&(_.add(e),e&&!e.d&&(a.r++,e.push(a)));l.map((t=>t[e](r)))}));return a.r?c:s()}),(e=>(e?p(u[r]=e):c(d),o(i)))),i&&(i.d=0)},l.d=(e,t)=>{for(var r in t)l.o(t,r)&&!l.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},l.f={},l.e=e=>Promise.all(Object.keys(l.f).reduce(((t,r)=>(l.f[r](e,t),t)),[])),l.u=e=>e+".js",l.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n={},a="composeApp:",l.l=(e,t,r,o)=>{if(n[e])n[e].push(t);else{var s,i;if(void 0!==r)for(var c=document.getElementsByTagName("script"),p=0;p<c.length;p++){var _=c[p];if(_.getAttribute("src")==e||_.getAttribute("data-webpack")==a+r){s=_;break}}s||(i=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,l.nc&&s.setAttribute("nonce",l.nc),s.setAttribute("data-webpack",a+r),s.src=e),n[e]=[t];var d=(t,r)=>{s.onerror=s.onload=null,clearTimeout(u);var o=n[e];if(delete n[e],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((e=>e(r))),t)return t(r)},u=setTimeout(d.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=d.bind(null,s.onerror),s.onload=d.bind(null,s.onload),i&&document.head.appendChild(s)}},l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;l.g.importScripts&&(e=l.g.location+"");var t=l.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!e;)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),l.p=e})(),(()=>{l.b=document.baseURI||self.location.href;var e={179:0};l.f.j=(t,r)=>{var o=l.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var n=new Promise(((r,n)=>o=e[t]=[r,n]));r.push(o[2]=n);var a=l.p+l.u(t),s=new Error;l.l(a,(r=>{if(l.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var n=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+n+": "+a+")",s.name="ChunkLoadError",s.type=n,s.request=a,o[1](s)}}),"chunk-"+t,t)}};var t=(t,r)=>{var o,n,[a,s,i]=r,c=0;if(a.some((t=>0!==e[t]))){for(o in s)l.o(s,o)&&(l.m[o]=s[o]);i&&i(l)}for(t&&t(r);c<a.length;c++)n=a[c],l.o(e,n)&&e[n]&&e[n][0](),e[n]=0},r=this.webpackChunkcomposeApp=this.webpackChunkcomposeApp||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),l(598)})()));
//# sourceMappingURL=composeApp.js.map