#!/bin/bash

source $OKTA_HOME/$REPO/scripts/setup.sh

# Build types
if ! yarn build:types; then
  echo "build failed! Exiting..."
  exit ${TEST_FAILURE}
fi

# Test types
if ! yarn tsd; then
  echo "tsd failed! Exiting..."
  exit ${TEST_FAILURE}
fi
