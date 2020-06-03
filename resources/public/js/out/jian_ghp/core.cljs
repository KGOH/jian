(ns ^:figwheel-hooks jian-ghp.core
  (:require [reagent.core :as r]
            [reagent.dom :as rd]))

(defn page []
  [:b "TEST!"])

(defn ^:export mount []
  (rd/render [page] (.getElementById js/document "app")))

(defn ^:after-load re-render []
  (mount))
