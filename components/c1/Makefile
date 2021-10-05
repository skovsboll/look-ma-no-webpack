SOURCES = $(patsubst %.ts,%.js,$(shell find . -name "*.ts" -not -name "*.d.ts"))

%.js : %.ts
	tsc $<

build: $(SOURCES)
