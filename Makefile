SUBPROJECTS = ui components/c1 components/c2

build: $(SUBPROJECTS)

$(SUBPROJECTS):
	cd $@ && $(MAKE) $(MFLAGS)

.PHONY: $(SUBPROJECTS)
	

