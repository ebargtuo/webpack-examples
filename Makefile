SUBDIRS := $(wildcard *-example/)
TARGETS := all clean test acceptanceTest

BUILD := `npm bin`/webpack
CLEAN := touch dist && rm -r dist
TEST := npm test
ACCEPTANCE_TEST := PATH=`npm bin`:$$PATH mocha

BUILD_TARGETS := $(addsuffix all,$(SUBDIRS))
CLEAN_TARGETS := $(addsuffix clean,$(SUBDIRS))
ACCEPTANCE_TEST_TARGETS := $(addsuffix acceptanceTest,$(SUBDIRS))

.PHONY : $(TARGETS) $(BUILD_TARGETS) $(CLEAN_TARGETS) $(ACCEPTANCE_TEST_TARGETS)

all : $(BUILD_TARGETS)
	@echo 'Target "$@" completed'

clean : $(CLEAN_TARGETS)
	@echo 'Target "$@" completed'

test :
	$(TEST)
	@echo 'Target "$@" completed'

acceptanceTest : $(ACCEPTANCE_TEST_TARGETS)
	@echo 'Target "$@" completed'

# $(@D) is SUBDIR name
$(BUILD_TARGETS) :
	cd $(@D) && $(BUILD)
	@echo 'Target "$@" completed'

# $(@D) is SUBDIR name
$(CLEAN_TARGETS) :
	cd $(@D) && $(CLEAN)
	@echo 'Target "$@" completed'

# $(@D) is SUBDIR name
$(ACCEPTANCE_TEST_TARGETS) :
	cd $(@D) && $(ACCEPTANCE_TEST)
	@echo 'Target "$@" completed'
