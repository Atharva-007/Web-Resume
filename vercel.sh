#!/bin/bash

# Clean requirements file
tr -d '\000' < requirements.txt > clean_requirements.txt

# Install dependencies
pip install --disable-pip-version-check --target . --upgrade -r clean_requirements.txt