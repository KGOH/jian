(ns ^:figwheel-hooks jian-ghp.core
  (:require [reagent.core :as r]
            [reagent.dom :as rd]))

(def app-state (atom {}))

(defn res-src [name] ;; Don't know how to set up paths, to work with figwheel and github pages properly
  {:src (str (:resources-path @app-state) name)})

(defn page []
  [:article.content
   [:section
    [:div
     [:header
      [:h1 "Клавиатура Jian и её раскладка"]
      [:p.l "Jian — сплит-клавиатура на 44 клавиши. Несмотря на свой размер, она содержит все 105 кнопок полноразмерной клавиатуры. Нажимать их можно не перемещая руки с основного ряда."]]
     [:p.l "Доступ к дополнительным клавишам происходит через дополнительные слои "
      [:img.icon (res-src "images/down-icon.svg")]
      " ("[:i "fn1"]") и "
      [:img.icon (res-src "images/up-icon.svg")]
      " ("
      [:i "fn2"]
      "). Сейчас я расскажу, в чем особенность раскладки, слоев, и как ими пользоваться."]]]
   [:section
    [:div
     [:h2 "Особенности раскладки"]
     [:div.flex
      [:div
       [:p "Изначально Jian проектировалась, как более удобный и эргономичный аналог Planck, c поддержкой кириллицы."]
       [:p "Как и в Planck у Jian ортолинейная раскладка без горизонтального сдвига клавиш. Это позволило сделать клавиатуру маленькой и минимизировать горизонтальные движения малоподвижных среднего и безымянного пальцев."]
       [:p "Но, в отличие от Planck, у Jian есть вертикальный сдвиг, который учитывает длину пальцев. Такое расположение минимизирует движения запястьем при использовании мизинца. Кроме этого, сдвиг помогает легче находить кнопки вслепую."]
       [:p "Половинки Jian можно расположить так, чтобы запястья оставались прямыми, что полностью убирает с них нагрузку. Чего не скажешь о Planck."]
       [:figure
        [:img.fullwidth (res-src "images/planck.svg")]
        [:figcaption [:b "Planck:"] " клавиши под мизинцами нажимать неудобно, под безымянным и средним пальцем — сложно; есть нагрузка на запястья."]]]
      [:aside
       [:small.facts-header "Что такое Planck?"]
       [:ul.ok-before
        [:li [:i "Нет неестественной нагрузки на мизинец, безымянный и средний пальцы"]]
        [:li [:i "Клавиши расположены с учётом длины каждого пальца"]]
        [:li [:i "Руки можно положить как вам комфортно, с прямыми запястьями"]]]]]
     [:figure.jian-hands
      [:figcaption [:b "Jian:"] " малоподвижные пальцы разгружены; запястья и руки можно расположить так, как вам удобно 🎉"]
      [:img (res-src "images/split.svg")]]]]
   [:section
    [:div
     [:h2 "Главный слой"]
     [:div.flex
      [:div
       [:p "На главном слое помещаются все буквенные клавиши раскладки ЙЦУКЕН, что и отличает Jian от других клавиатур а-ля Planck."]
       [:p "Часто используемые кнопки " [:i "Shift"] ", "[:i "Space"]", "[:i "Enter"]", "[:i "Backspace"]", "[:i "Tab"]", "[:i "ESC"]" и "[:i "Del"]" расположены на нижнем ряду, под хорошо подвижными большими пальцами."]
       [:p "Все клавиши нижнего ряда имеют двойное действие. Их можно нажимать или удерживать. Действия при удержании клавиш отмечены на раскладке "[:span.blue "синим цветом"]"."]
       [:p "Например, клавиша "[:i "Space"]" при удержании работает как левый "[:i "Shift"]", а клавиша "[:i "Backspace"]" — как правый. Удержание зажатой кнопки "[:i "Ъ"]", эквивалентно нажатию "[:i "Super"]"."]
       [:p "Благодаря клавишам двойного действия вам не нужно открывать руки от буквенных клавиш, чтобы нажать часто используемые "[:i "Shift"]", "[:i "Enter"]" или "[:i "Backspace"]". Поэтому набирать текст на Jian быстрее, чем
на обычной клавиатуре."]]
      [:aside
       [:p.l [:i "На клавиатуре Jian помещаются все буквы раскладки ЙЦУКЕН, включая Ё, Х и Ъ"]]
       [:div.to-bottom
        [:p.l. [:img (res-src "images/legend-tip.svg")] [:br] [:i "У некоторых клавиш двойное действие. Их можно нажать, либо удерживать"]]]]]
     [:h3 "Раскладка ЙЦУКЕН"]
     [:figure.ycuken
      [:img (res-src "images/ycuken.svg")]]
     [:h3 "Раскладка QWERTY"]
     [:figure.qwerty
      [:img.fullwidth (res-src "images/qwerty.svg")]]]]
   [:section
    [:div
     [:h2 "Переключение между слоями"]
     [:div.flex
      [:div
       [:p "Дополнительные клавиши Jian находятся на «верхнем» и «нижнем» слоях. Чтобы попасть на нижний слой, нужно зажать кнопку "[:b.green [:i "fn1"]]". Чтобы попасть на верхний — зажать "[:b.orange [:i "fn2"]]"."]
       [:p "Кнопки активации слоев есть на каждой половинке Jian и распложены симметрично. Это позволяет одной рукой нажать любую клавишу на верхнем или нижнем слое. На той же клавиатуре Plank приходится задействовать обе руки."]]
      [:aside]]
     [:figure.layers
      [:img (res-src "images/layers.svg")]]]]
   [:section
    [:div
     [:h2 "Нижний слой — " [:img.icon (res-src "images/down-icon.svg")]]
     [:div.flex
      [:div
       [:p "Нижний слой содержит в себе клавиши "[:b [:i "F1…F12"]]", цифры "[:b [:i "0…9"]]" и дополнительные знаки, которые обычно набирают через сочетания типа "[:b [:i "Shift + цифра"]]"."]]
      [:aside]]
     [:h3 "Раскладка ЙЦУКЕН"]
     [:figure.ycuken
      [:img (res-src "images/down-layer-ycuken.svg")]]
     [:h3 "Раскладка QWERTY"]
     [:figure.qwerty
      [:img.fullwidth (res-src "images/down-layer-qwerty.svg")]]
     [:div.info-table
      [:div
       [:h4 "Сравнение ввода некоторых символов на обычной и Jian-раскладке"]
       [:div.table
        [:div.thead
         [:div.th "Символ"]
         [:div.th "Об. раскладка"]
         [:div.th "Раскладка Jian"]]
        [:div.tr
         [:div.td [:img (res-src "images/tables/1/Jian-key-T1-1_a.svg")]]
         [:div.td [:img (res-src "images/tables/1/Jian-key-T1-1_b.svg")]]
         [:div.td [:img (res-src "images/tables/1/Jian-key-T1-1_c.svg")]]
         ]
        [:div.tr
         [:div.td [:img (res-src "images/tables/1/Jian-key-T1-2_a.svg")]]
         [:div.td [:img (res-src "images/tables/1/Jian-key-T1-2_b.svg")]]
         [:div.td [:img (res-src "images/tables/1/Jian-key-T1-2_c.svg")]]]
        [:div.tr
         [:div.td [:img (res-src "images/tables/1/Jian-key-T1-3_a.svg")]]
         [:div.td {:style {:textAlign "right"}} [:img (res-src "images/tables/1/Jian-key-T1-3_b.svg")]]
         [:div.td [:img (res-src "images/tables/1/Jian-key-T1-3_c.svg")]]]]]
      [:aside [:p.l [:i "Как правило, чтобы ввести дополнительные символ на Jian понадобится столько же действий, сколько и на обычной клавиатуре."]]]]]]
   [:section
    [:div
     [:h2 "Верхний слой — " [:img.icon (res-src "images/up-icon.svg")]]
     [:div.flex
      [:div
       [:p "На верхнем слое левая половинка Jian начинает работать как "[:b [:i"Numpad"]]". Правая половинка отвечает за «"[:b [:i "стрелки"]]"», кнопки управления громкостью и кнопки перемещения по тексту."]
       [:p "Нижний слой одинаков для раскладок ЙЦУКЕН и QWERTY."]]
      [:aside]]
     [:figure.layers
      [:img (res-src "images/up-layer.svg")]]
     [:div.info-table
      [:div
       [:h4 "Сравнение ввода некоторых «длинных» сочетаний на обычной и Jian-раскладке"]
       [:div.table
        [:div.thead
         [:div.th "Обычная раскладка"]
         [:div.th "Раскладка Jian"]]
        [:div.tr
         [:div.td [:img (res-src "images/tables/2/Jian-key-T2-1_a.svg")]]
         [:div.td [:img (res-src "images/tables/2/Jian-key-T2-1_b.svg")]]]
        [:div.tr
         [:div.td [:img (res-src "images/tables/2/Jian-key-T2-2_a.svg")]]
         [:div.td [:img (res-src "images/tables/2/Jian-key-T2-2_b.svg")]]]
        [:div.tr
         [:div.td {:style {:textAlign "right"}} [:img (res-src "images/tables/2/Jian-key-T2-3_a.svg")]]
         [:div.td {:style {:textAlign "right"}} [:img (res-src "images/tables/2/Jian-key-T2-3_b.svg")]]]]]
      [:aside [:p.l [:i "Раскладка Jian продумана и покрывает все 105-клавиш полноразмерной клавиатуры."]] [:p.l [:i "Их можно легко переназначить при помощи онлайн-конфигуратора для прошивки QMK."]]]]]
    [:section
     [:div
      [:h2 "Слой настроек"]
      [:div.flex
       [:div
        [:p "Слой настроек вызывается при одновременном удерживании клавиш " [:img.icon (res-src "images/down-icon.svg")] " и " [:img.icon (res-src "images/up-icon.svg")] ". Все настройки расположены зеркально на обеих половинках Jian, чтобы ими можно было пользоваться даже тогда, когда подключена лишь одна часть."]]
       [:aside]]
      [:figure.layers
       [:img (res-src "images/settings-layer.svg")]]
      [:div.info-table
       [:table
        [:tbody
         [:tr
          [:td [:img (res-src "images/tables/3/Jian-key-T3-1.svg")]]
          [:td "Зеркально меняет раскладку на обеих половинках Jian. Функция пригодится, если вы пользуетесь только одной половиной, но надо ввести символ со второй."]]
         [:tr
          [:td [:img (res-src "images/tables/3/Jian-key-T3-2.svg")]]
          [:td "Зеркально меняет кнопки нижнего ряда. Пригодится, если вы привыкли нажимать пробел правым пальцем, а не левым."]]
         [:tr
          [:td [:img (res-src "images/tables/3/Jian-key-T3-3.svg")]]
          [:td "Возвращает QWERTY стандартной раскладкой. Пригодится, если вы собираетесь добавить в Jian дополнительные раскладки вроде DVORAK и COLEMAK."]]
         [:tr
          [:td [:img (res-src "images/tables/3/Jian-key-T3-4.svg")]]
          [:td "Включает режим, совместимый с приложением для стенографии Plover."]]
         [:tr
          [:td [:img (res-src "images/tables/3/Jian-key-T3-5.svg")]]
          [:td "Меняет стандартную раскладку ANSI на ISO, и наоборот."]]]]
       [:aside
        [:p.l [:i "Если вы решите сделать собственный вариант раскладки, то её активацию удобно расположить на слое «Настроек». Например, можно сделать специальную раскладку для игр, или для работы с планшетом."]]
        [:table.table
         [:tbody
          [:tr
           [:td [:img (res-src "images/tables/3/Jian-key-T3-6.svg")]]
           [:td "Вводит клавиатуру в режим обновления прошивки."]]
          [:tr
           [:td [:img (res-src "images/tables/3/Jian-key-T3-7.svg")]]
           [:td "Переводит клавиатуру в режим отладки."]]]]]]]]]
   [:section
    [:div
     [:h2 "Шпаргалка по слоям"]
     [:div.flex
      [:div
       [:p "Ниже на двух картинках собраны действия всех кнопок в раскладках ЙЦУКЕН и QWERTY. Вы можете сделать скриншот и подглядывать в него в момент обучения раскладки Jian."]
       [:p "👉 Скачать версию для печати — " [:a {:href "public/resources/cheat_sheet.pdf"} "pdf"]]]
      [:aside]]
     [:h3 "Раскладка ЙЦУКЕН"]
     [:figure.layers
      [:img (res-src "images/cheat-sheet-ycuken.svg")]]
     [:h3 "Раскладка QWERTY"]
     [:figure.layers
      [:img.fullwidth (res-src "images/cheat-sheet-qwerty.svg")]]]]
   [:section
    [:div
     [:h2 "Как заказать и сколько стоит"]
     [:p.l "В базовый комплект Jian входит: печатная плата, корпус, два контроллера Pro Micro и электронные компоненты (диоды, разъёмы и т. п.). Вам нужно отдельно приобрести USB Micro, TRRS-TRRS–кабеля, свитчи и кейкапы. Светодиоды и ленту подсветки — опционально. А затем самостоятельно набор собрать."]
     [:p.l "💰 Цена базового комплекта — 6000 руб."]
     [:p.l "Цена полного комплекта со сборкой обговаривается индивидуально и зависит от стоимости свичей, кейкапов и дополнительных опций."]
     [:p.l "Заказать клавиатуру можно записавшись в групповую покупку, а получить консультацию — через Telegram."]
     [:p.l "💰 Купить Jian — "[:a {:href "https://killswit.ch/product/jian/"} "https://killswit.ch/product/jian/"]
      [:br] "👉 Мой Telegram-канал — "[:a {:href "https://t.me/kgofhedgehogs"} "https://t.me/kgofhedgehogs"]
      [:br] "👉 Мой личный Telegram — " [:a {:href "https://t.me/The2lb3oz4dr10grOfHedgehogs"} "https://t.me/The2lb3oz4dr10grOfHedgehogs"]]]]
   [:footer [:div.to-bottom "Редактор — Влад Гороховский, " [:a {:href "https://t.me/gorohovsky"} "https://t.me/gorohovsky"]]]])

(defn ^:export mount [resources-path]
  (when resources-path
    (swap! app-state assoc :resources-path resources-path))
  (rd/render [page] (.getElementById js/document "app")))

(defn ^:after-load re-render []
  (mount (:resources-path @app-state)))
