(ns jian-ghp.core
  (:require [reagent.core :as r]
            [reagent.dom :as rd]))

(defn page []
  [:b "TEST"])

(defn mount []
  (rd/render [page] (.getElementById js/document "app")))

(defonce start (mount))
