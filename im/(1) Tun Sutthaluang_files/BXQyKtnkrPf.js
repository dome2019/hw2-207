if (self.CavalryLogger) { CavalryLogger.start_js(["QP\/vI"]); }

__d("WasmosisCohort",["invariant","regeneratorRuntime","FBLogger","WasmosisMemory"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h="__indirect_function_table",i="wasmosis_init";a=function(){__p&&__p();function a(a){this.$1=a,this.$2=[],this.$3={}}var c=a.prototype;c.instantiate=function(c,a){__p&&__p();var d,f,j,k,l,m;return b("regeneratorRuntime").async(function(e){__p&&__p();while(1)switch(e.prev=e.next){case 0:Object.prototype.hasOwnProperty.call(this.$3,c)&&g(0,2860);d=this.$2.length;f={wasmosis_dlopen:this.$4.bind(this),wasmosis_dlsym:this.$5.bind(this,d),wasmosis_log:this.$6.bind(this,c)};e.next=5;return b("regeneratorRuntime").awrap(a.instantiate(this.$1,f));case 5:j=e.sent;k=j.exports[h];!k||k instanceof WebAssembly.Table||g(0,2861);l={cohort:this,indirectMap:{},indirectTable:k,instance:j};this.$2.push(l);this.$3[c]=d;m=j.exports[i];m&&m();return e.abrupt("return",l);case 14:case"end":return e.stop()}},null,this)};c.$4=function(a,c){a=b("WasmosisMemory").getJSString(this.$1.getMemory().buffer,a,c);c=this.$3[a];if(c===void 0)throw new Error("module "+a+" not in cohort");return c};c.$5=function(a,c,d,e){d=b("WasmosisMemory").getJSString(this.$1.getMemory().buffer,d,e);e=this.$2[a];if(!e)throw new Error("invalid target instance index "+a);a=this.$2[c];if(!a)throw new Error("invalid source instance index "+c);return this.$7(a,e,d)};c.$7=function(a,b,c){__p&&__p();if(Object.prototype.hasOwnProperty.call(b.indirectMap,c))return b.indirectMap[c];a=a.instance.exports[c];if(!a)throw new Error("couldn't find symbol "+c+" in instance");var d=b.indirectTable;if(!d)throw new Error("module does not provide table for dynamic linking");var e=d.length;d.grow(1);b.indirectMap[c]=e;d.set(e,a);return e};c.$6=function(a,c,d,f){__p&&__p();var h={DEBUG:0,INFO:1,WARN:2,ERROR:3};a=b("FBLogger")(a);var i=this.$1.getMemory();i=b("WasmosisMemory").getJSString(i.buffer,c,d);switch(f){case h.DEBUG:a.debug(i);break;case h.INFO:a.info(i);break;case h.WARN:a.warn(i);break;case h.ERROR:a.mustfix(i);break;default:g(0,11867)}};c.getCore=function(){return this.$1};return a}();e.exports=a}),null);
__d("WasmosisCore",["invariant"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h="memory";a=function(){__p&&__p();function a(a){this.$1=a,this.$2=a.exports.wasmosis_alloc,this.$2||g(0,3777),this.$3=a.exports.wasmosis_alloc_size,this.$3||g(0,3778),this.$4=a.exports.wasmosis_free,this.$4||g(0,3779),this.$5=a.exports[h],this.$5||g(0,3780)}var b=a.prototype;b.alloc=function(a){Number.isInteger(a)&&a>=0||g(0,6319);a=this.$2(a);a!==0||g(0,11764);return{base:a,size:this.$3()}};b.free=function(a){this.$4(a.base,a.size)};b.getRuntimeImports=function(){return{wasmosis_alloc:this.$2,wasmosis_alloc_size:this.$3,wasmosis_free:this.$4}};b.getMemory=function(){return this.$5};b.getExports=function(){return this.$1.exports};return a}();e.exports=a}),null);