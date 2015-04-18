SUBDIRS := $(wildcard *-example/)
TARGETS := all clean test

BUILD := `npm bin`/webpack
CLEAN := touch dist && rm -r dist
ACCEPTANCE_TEST := PATH=`npm bin`:$$PATH node test/acceptance/webdriver.js

BUILD_TARGETS := $(addsuffix all,$(SUBDIRS))
CLEAN_TARGETS := $(addsuffix clean,$(SUBDIRS))
ACCEPTANCE_TEST_TARGETS := $(addsuffix acceptanceTest,$(SUBDIRS))

.PHONY : $(TARGETS) $(ALL_TARGETS) $(CLEAN_TARGETS)

all : $(BUILD_TARGETS)
	@echo 'Done "$@" target'

clean : $(CLEAN_TARGETS)
	@echo 'Done "$@" target'

test :
	npm test

acceptanceTest : $(ACCEPTANCE_TEST_TARGETS)
	@echo 'Done "$@" target'

# $(@D) is SUBDIR name
$(BUILD_TARGETS) :
	cd $(@D) && $(BUILD)

# $(@D) is SUBDIR name
$(CLEAN_TARGETS) :
	cd $(@D) && $(CLEAN)

# $(@D) is SUBDIR name
$(ACCEPTANCE_TEST_TARGETS) :
	cd $(@D) && $(ACCEPTANCE_TEST)
