// Compiled by ClojureScript 1.10.758 {:static-fns true, :optimize-constants true}
goog.provide('jian_ghp.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('reagent.dom');
jian_ghp.core.page = (function jian_ghp$core$page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,"TEST"], null);
});
jian_ghp.core.mount = (function jian_ghp$core$mount(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jian_ghp.core.page], null),document.getElementById("app"));
});
if((typeof jian_ghp !== 'undefined') && (typeof jian_ghp.core !== 'undefined') && (typeof jian_ghp.core.start !== 'undefined')){
} else {
jian_ghp.core.start = jian_ghp.core.mount();
}
