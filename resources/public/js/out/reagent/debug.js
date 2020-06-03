// Compiled by ClojureScript 1.10.773 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__23136__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__23136 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23137__i = 0, G__23137__a = new Array(arguments.length -  0);
while (G__23137__i < G__23137__a.length) {G__23137__a[G__23137__i] = arguments[G__23137__i + 0]; ++G__23137__i;}
  args = new cljs.core.IndexedSeq(G__23137__a,0,null);
} 
return G__23136__delegate.call(this,args);};
G__23136.cljs$lang$maxFixedArity = 0;
G__23136.cljs$lang$applyTo = (function (arglist__23138){
var args = cljs.core.seq(arglist__23138);
return G__23136__delegate(args);
});
G__23136.cljs$core$IFn$_invoke$arity$variadic = G__23136__delegate;
return G__23136;
})()
);

(o.error = (function() { 
var G__23139__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__23139 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23140__i = 0, G__23140__a = new Array(arguments.length -  0);
while (G__23140__i < G__23140__a.length) {G__23140__a[G__23140__i] = arguments[G__23140__i + 0]; ++G__23140__i;}
  args = new cljs.core.IndexedSeq(G__23140__a,0,null);
} 
return G__23139__delegate.call(this,args);};
G__23139.cljs$lang$maxFixedArity = 0;
G__23139.cljs$lang$applyTo = (function (arglist__23141){
var args = cljs.core.seq(arglist__23141);
return G__23139__delegate(args);
});
G__23139.cljs$core$IFn$_invoke$arity$variadic = G__23139__delegate;
return G__23139;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=debug.js.map
