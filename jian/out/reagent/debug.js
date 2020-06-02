// Compiled by ClojureScript 1.10.758 {:static-fns true, :optimize-constants true}
goog.provide('reagent.debug');
goog.require('cljs.core');
goog.require('cljs.core.constants');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__644__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__644 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__645__i = 0, G__645__a = new Array(arguments.length -  0);
while (G__645__i < G__645__a.length) {G__645__a[G__645__i] = arguments[G__645__i + 0]; ++G__645__i;}
  args = new cljs.core.IndexedSeq(G__645__a,0,null);
} 
return G__644__delegate.call(this,args);};
G__644.cljs$lang$maxFixedArity = 0;
G__644.cljs$lang$applyTo = (function (arglist__646){
var args = cljs.core.seq(arglist__646);
return G__644__delegate(args);
});
G__644.cljs$core$IFn$_invoke$arity$variadic = G__644__delegate;
return G__644;
})()
);

(o.error = (function() { 
var G__647__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__647 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__648__i = 0, G__648__a = new Array(arguments.length -  0);
while (G__648__i < G__648__a.length) {G__648__a[G__648__i] = arguments[G__648__i + 0]; ++G__648__i;}
  args = new cljs.core.IndexedSeq(G__648__a,0,null);
} 
return G__647__delegate.call(this,args);};
G__647.cljs$lang$maxFixedArity = 0;
G__647.cljs$lang$applyTo = (function (arglist__649){
var args = cljs.core.seq(arglist__649);
return G__647__delegate(args);
});
G__647.cljs$core$IFn$_invoke$arity$variadic = G__647__delegate;
return G__647;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});
