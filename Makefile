serve:
	docker run --rm -v "$$PWD:/src" -p 4000:80 grahamc/jekyll serve -H 0.0.0.0