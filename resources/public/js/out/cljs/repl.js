// Compiled by ClojureScript 1.10.773 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__31533){
var map__31534 = p__31533;
var map__31534__$1 = (((((!((map__31534 == null))))?(((((map__31534.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31534.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31534):map__31534);
var m = map__31534__$1;
var n = cljs.core.get.call(null,map__31534__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__31534__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31536_31568 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31537_31569 = null;
var count__31538_31570 = (0);
var i__31539_31571 = (0);
while(true){
if((i__31539_31571 < count__31538_31570)){
var f_31572 = cljs.core._nth.call(null,chunk__31537_31569,i__31539_31571);
cljs.core.println.call(null,"  ",f_31572);


var G__31573 = seq__31536_31568;
var G__31574 = chunk__31537_31569;
var G__31575 = count__31538_31570;
var G__31576 = (i__31539_31571 + (1));
seq__31536_31568 = G__31573;
chunk__31537_31569 = G__31574;
count__31538_31570 = G__31575;
i__31539_31571 = G__31576;
continue;
} else {
var temp__5735__auto___31577 = cljs.core.seq.call(null,seq__31536_31568);
if(temp__5735__auto___31577){
var seq__31536_31578__$1 = temp__5735__auto___31577;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31536_31578__$1)){
var c__4556__auto___31579 = cljs.core.chunk_first.call(null,seq__31536_31578__$1);
var G__31580 = cljs.core.chunk_rest.call(null,seq__31536_31578__$1);
var G__31581 = c__4556__auto___31579;
var G__31582 = cljs.core.count.call(null,c__4556__auto___31579);
var G__31583 = (0);
seq__31536_31568 = G__31580;
chunk__31537_31569 = G__31581;
count__31538_31570 = G__31582;
i__31539_31571 = G__31583;
continue;
} else {
var f_31584 = cljs.core.first.call(null,seq__31536_31578__$1);
cljs.core.println.call(null,"  ",f_31584);


var G__31585 = cljs.core.next.call(null,seq__31536_31578__$1);
var G__31586 = null;
var G__31587 = (0);
var G__31588 = (0);
seq__31536_31568 = G__31585;
chunk__31537_31569 = G__31586;
count__31538_31570 = G__31587;
i__31539_31571 = G__31588;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_31589 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_31589);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_31589)))?cljs.core.second.call(null,arglists_31589):arglists_31589));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31540_31590 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31541_31591 = null;
var count__31542_31592 = (0);
var i__31543_31593 = (0);
while(true){
if((i__31543_31593 < count__31542_31592)){
var vec__31554_31594 = cljs.core._nth.call(null,chunk__31541_31591,i__31543_31593);
var name_31595 = cljs.core.nth.call(null,vec__31554_31594,(0),null);
var map__31557_31596 = cljs.core.nth.call(null,vec__31554_31594,(1),null);
var map__31557_31597__$1 = (((((!((map__31557_31596 == null))))?(((((map__31557_31596.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31557_31596.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31557_31596):map__31557_31596);
var doc_31598 = cljs.core.get.call(null,map__31557_31597__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31599 = cljs.core.get.call(null,map__31557_31597__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_31595);

cljs.core.println.call(null," ",arglists_31599);

if(cljs.core.truth_(doc_31598)){
cljs.core.println.call(null," ",doc_31598);
} else {
}


var G__31600 = seq__31540_31590;
var G__31601 = chunk__31541_31591;
var G__31602 = count__31542_31592;
var G__31603 = (i__31543_31593 + (1));
seq__31540_31590 = G__31600;
chunk__31541_31591 = G__31601;
count__31542_31592 = G__31602;
i__31543_31593 = G__31603;
continue;
} else {
var temp__5735__auto___31604 = cljs.core.seq.call(null,seq__31540_31590);
if(temp__5735__auto___31604){
var seq__31540_31605__$1 = temp__5735__auto___31604;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31540_31605__$1)){
var c__4556__auto___31606 = cljs.core.chunk_first.call(null,seq__31540_31605__$1);
var G__31607 = cljs.core.chunk_rest.call(null,seq__31540_31605__$1);
var G__31608 = c__4556__auto___31606;
var G__31609 = cljs.core.count.call(null,c__4556__auto___31606);
var G__31610 = (0);
seq__31540_31590 = G__31607;
chunk__31541_31591 = G__31608;
count__31542_31592 = G__31609;
i__31543_31593 = G__31610;
continue;
} else {
var vec__31559_31611 = cljs.core.first.call(null,seq__31540_31605__$1);
var name_31612 = cljs.core.nth.call(null,vec__31559_31611,(0),null);
var map__31562_31613 = cljs.core.nth.call(null,vec__31559_31611,(1),null);
var map__31562_31614__$1 = (((((!((map__31562_31613 == null))))?(((((map__31562_31613.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31562_31613.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31562_31613):map__31562_31613);
var doc_31615 = cljs.core.get.call(null,map__31562_31614__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31616 = cljs.core.get.call(null,map__31562_31614__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_31612);

cljs.core.println.call(null," ",arglists_31616);

if(cljs.core.truth_(doc_31615)){
cljs.core.println.call(null," ",doc_31615);
} else {
}


var G__31617 = cljs.core.next.call(null,seq__31540_31605__$1);
var G__31618 = null;
var G__31619 = (0);
var G__31620 = (0);
seq__31540_31590 = G__31617;
chunk__31541_31591 = G__31618;
count__31542_31592 = G__31619;
i__31543_31593 = G__31620;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.call(null,"Spec");

var seq__31564 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__31565 = null;
var count__31566 = (0);
var i__31567 = (0);
while(true){
if((i__31567 < count__31566)){
var role = cljs.core._nth.call(null,chunk__31565,i__31567);
var temp__5735__auto___31621__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___31621__$1)){
var spec_31622 = temp__5735__auto___31621__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_31622));
} else {
}


var G__31623 = seq__31564;
var G__31624 = chunk__31565;
var G__31625 = count__31566;
var G__31626 = (i__31567 + (1));
seq__31564 = G__31623;
chunk__31565 = G__31624;
count__31566 = G__31625;
i__31567 = G__31626;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__31564);
if(temp__5735__auto____$1){
var seq__31564__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31564__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__31564__$1);
var G__31627 = cljs.core.chunk_rest.call(null,seq__31564__$1);
var G__31628 = c__4556__auto__;
var G__31629 = cljs.core.count.call(null,c__4556__auto__);
var G__31630 = (0);
seq__31564 = G__31627;
chunk__31565 = G__31628;
count__31566 = G__31629;
i__31567 = G__31630;
continue;
} else {
var role = cljs.core.first.call(null,seq__31564__$1);
var temp__5735__auto___31631__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___31631__$2)){
var spec_31632 = temp__5735__auto___31631__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_31632));
} else {
}


var G__31633 = cljs.core.next.call(null,seq__31564__$1);
var G__31634 = null;
var G__31635 = (0);
var G__31636 = (0);
seq__31564 = G__31633;
chunk__31565 = G__31634;
count__31566 = G__31635;
i__31567 = G__31636;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__31637 = cljs.core.conj.call(null,via,t);
var G__31638 = cljs.core.ex_cause.call(null,t);
via = G__31637;
t = G__31638;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__31641 = datafied_throwable;
var map__31641__$1 = (((((!((map__31641 == null))))?(((((map__31641.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31641.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31641):map__31641);
var via = cljs.core.get.call(null,map__31641__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__31641__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__31641__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__31642 = cljs.core.last.call(null,via);
var map__31642__$1 = (((((!((map__31642 == null))))?(((((map__31642.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31642.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31642):map__31642);
var type = cljs.core.get.call(null,map__31642__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__31642__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__31642__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__31643 = data;
var map__31643__$1 = (((((!((map__31643 == null))))?(((((map__31643.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31643.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31643):map__31643);
var problems = cljs.core.get.call(null,map__31643__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__31643__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__31643__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__31644 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__31644__$1 = (((((!((map__31644 == null))))?(((((map__31644.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31644.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31644):map__31644);
var top_data = map__31644__$1;
var source = cljs.core.get.call(null,map__31644__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__31649 = phase;
var G__31649__$1 = (((G__31649 instanceof cljs.core.Keyword))?G__31649.fqn:null);
switch (G__31649__$1) {
case "read-source":
var map__31650 = data;
var map__31650__$1 = (((((!((map__31650 == null))))?(((((map__31650.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31650.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31650):map__31650);
var line = cljs.core.get.call(null,map__31650__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__31650__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__31652 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__31652__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__31652,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__31652);
var G__31652__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__31652__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__31652__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__31652__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__31652__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__31653 = top_data;
var G__31653__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__31653,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__31653);
var G__31653__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__31653__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__31653__$1);
var G__31653__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__31653__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__31653__$2);
var G__31653__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__31653__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__31653__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__31653__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__31653__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__31654 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__31654,(0),null);
var method = cljs.core.nth.call(null,vec__31654,(1),null);
var file = cljs.core.nth.call(null,vec__31654,(2),null);
var line = cljs.core.nth.call(null,vec__31654,(3),null);
var G__31657 = top_data;
var G__31657__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__31657,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__31657);
var G__31657__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__31657__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__31657__$1);
var G__31657__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.call(null,G__31657__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__31657__$2);
var G__31657__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__31657__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__31657__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__31657__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__31657__$4;
}

break;
case "execution":
var vec__31658 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__31658,(0),null);
var method = cljs.core.nth.call(null,vec__31658,(1),null);
var file = cljs.core.nth.call(null,vec__31658,(2),null);
var line = cljs.core.nth.call(null,vec__31658,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__31640_SHARP_){
var or__4126__auto__ = (p1__31640_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__31640_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__31661 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__31661__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__31661,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__31661);
var G__31661__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__31661__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__31661__$1);
var G__31661__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.call(null,G__31661__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__31661__$2);
var G__31661__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__31661__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__31661__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__31661__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__31661__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31649__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__31665){
var map__31666 = p__31665;
var map__31666__$1 = (((((!((map__31666 == null))))?(((((map__31666.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31666.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31666):map__31666);
var triage_data = map__31666__$1;
var phase = cljs.core.get.call(null,map__31666__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__31666__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__31666__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__31666__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__31666__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__31666__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__31666__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__31666__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__31668 = phase;
var G__31668__$1 = (((G__31668 instanceof cljs.core.Keyword))?G__31668.fqn:null);
switch (G__31668__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__31669_31678 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__31670_31679 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__31671_31680 = true;
var _STAR_print_fn_STAR__temp_val__31672_31681 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__31671_31680);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__31672_31681);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__31663_SHARP_){
return cljs.core.dissoc.call(null,p1__31663_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__31670_31679);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__31669_31678);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__31673_31682 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__31674_31683 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__31675_31684 = true;
var _STAR_print_fn_STAR__temp_val__31676_31685 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__31675_31684);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__31676_31685);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__31664_SHARP_){
return cljs.core.dissoc.call(null,p1__31664_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__31674_31683);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__31673_31682);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31668__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
