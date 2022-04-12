#!/bin/bash

source $OKTA_HOME/$REPO/scripts/setup.sh

if ! yarn tsd; then
  echo "tsd failed! Exiting..."
  exit 1
fi
