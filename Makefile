SUBDIRS := $(wildcard *-example/)
TARGETS := all clean test

BUILD := `npm bin`/webpack
CLEAN := touch dist && rm -r dist

BUILD_TARGETS := $(addsuffix all,$(SUBDIRS))
CLEAN_TARGETS := $(addsuffix clean,$(SUBDIRS))

.PHONY : $(TARGETS) $(ALL_TARGETS) $(CLEAN_TARGETS)

all : $(BUILD_TARGETS)
	@echo 'Done "$@" target'

clean : $(CLEAN_TARGETS)
	@echo 'Done "$@" target'

test :
	npm test

# $(@D) is SUBDIR name
$(BUILD_TARGETS) :
	cd $(@D) && $(BUILD)

# $(@D) is SUBDIR name
$(CLEAN_TARGETS) :
	cd $(@D) && $(CLEAN)
