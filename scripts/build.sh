#!/bin/bash

rm -rf build

npx concurrently "tsc -p tsconfig.build.json" \ "tsc -p tsconfig.module.json"
wait
