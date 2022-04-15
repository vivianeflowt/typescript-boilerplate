#!/bin/bash

clear

rm -rf ./dist
rm -rf ./dist
rm -rf ./log
rm -rf ./@typescript
rm -rf ./temp/*

grep -v '^_See' README.md  > README.tmp
grep -v '^_See' README.tmp  > README.md

rm -f README.tmp 2>/dev/null

git add .
git commit -m "step"
git push
