

repl:
	clj --main cljs.main --compile jian-ghp.core --repl

build:
	clj -m cljs.main -d "jian/out" --optimizations advanced -c jian-ghp.core

run:
	clj -m cljs.main --serve

brun:
	clj -A:dev -m cljs.main -d "jian/out" -c jian-ghp.core
