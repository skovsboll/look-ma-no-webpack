SOURCES = $(patsubst %.ts,dist/%.js,$(shell find . -name "*.ts" -not -name "*.d.ts"))

build: $(SOURCES) dist/main.css

dist/%.js : %.ts
	tsc $< --outDir dist -m es2020 -t es2020 --esModuleInterop true

dist/main.css: main.css
	cp $< $@

