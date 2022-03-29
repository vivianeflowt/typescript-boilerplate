#!/bin/bash

clear

rm -rf ./node_modules 2>/dev/null
rm -rf ./dist 2>/dev/null
rm -rf ./coverage 2>/dev/null
rm -rf ./coverage-ts 2>/dev/null
rm -rf ./package-lock.json 2>/dev/null
rm -rf ./.npm-cache 2>/dev/null
rm -rf ./swagger-spec.json 2>/dev/null
rm -rf ./yarn.lock 2>/dev/null
rm -rf ./*.tsbuildinfo 2>/dev/null
rm -rf ./*.log 2>/dev/null

# yarn cache clean

yarn install

# npx jest --clearCache
