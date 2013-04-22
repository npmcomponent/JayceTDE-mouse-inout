
build: components
	@component build index.js --dev

components: component.json
	@component install --dev

clean:
	rm -fr build components template.js

.PHONY: clean
