VERSION :=$(shell jq -r .version package.json)

run:
	npm run dev

bump-patch:
	npm version patch --no-git-tag-version

bump-minor:
	npm version minor --no-git-tag-version

bump-major:
	npm version major --no-git-tag-version


release:
	$(eval VERSION := $(shell jq -r .version package.json))
	git add package.json
	git commit -m "Release v$(VERSION)"
	git tag v$(VERSION)
	git push && git push --tags

get_version:
	@echo $(VERSION)
