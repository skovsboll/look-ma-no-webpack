ELM_SOURCES = $(shell find src -name "*.elm")

dist/elmApp.js: $(ELM_SOURCES)
	elm make src/Main.elm --output=./dist/elmApp.js