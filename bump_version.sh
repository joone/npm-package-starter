#!/bin/bash
npm version patch -m "Bump version to %s"

echo "Would you like to push the change? (y or n)"
read answer

if [ "$answer" == "y" ]; then
  git push origin main
  git push origin main --tags
  exit 0
fi
