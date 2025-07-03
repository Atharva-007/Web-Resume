#!/bin/bash
set -e

# Check for pip or install Python if needed
if ! command -v pip &> /dev/null; then
    echo "Installing Python/pip..."
    curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py
    python get-pip.py
fi

# Rest of your build commands