ELM_SOURCES = $(shell find src -name "*.elm")

dist/app.js: $(ELM_SOURCES)
	elm make src/Main.elm --output=./dist/app.js