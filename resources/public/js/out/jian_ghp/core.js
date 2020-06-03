// Compiled by ClojureScript 1.10.773 {}
goog.provide('jian_ghp.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.dom');
jian_ghp.core.page = (function jian_ghp$core$page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"TEST!"], null);
});
jian_ghp.core.mount = (function jian_ghp$core$mount(){
return reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jian_ghp.core.page], null),document.getElementById("app"));
});
goog.exportSymbol('jian_ghp.core.mount', jian_ghp.core.mount);
jian_ghp.core.re_render = (function jian_ghp$core$re_render(){
return jian_ghp.core.mount.call(null);
});

//# sourceMappingURL=core.js.map
