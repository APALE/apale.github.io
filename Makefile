serve: build
	@docker run --rm -v "$$PWD:/src" -p 4000:4000 grahamc/jekyll serve -H 0.0.0.0

build:
	@gulp css

setup:
	@npm install
