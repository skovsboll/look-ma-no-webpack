SOURCES = $(patsubst %.pcss,%.css,$(shell find . -name "*.pcss" ))

%.css : %.pcss
	yarn run postcss $< -o $@ --no-map

build: $(SOURCES)
