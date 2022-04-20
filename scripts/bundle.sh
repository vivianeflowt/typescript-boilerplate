#!/bin/bash

rm -rf build

/bin/bash ./scripts/build.sh
wait

npx concurrently "esbuild ./build/main/index.js --bundle --platform=node --target=node12 --format=cjs --loader:.ts=ts --outfile=build/bundle.main.js" \
"esbuild ./build/module/index.js --bundle --platform=node --target=node12 --format=esm --loader:.ts=ts --outfile=build/bundle.esm.js" \
"esbuild ./build/main/index.js --bundle --platform=node --target=node12 --format=cjs --minify --loader:.ts=ts --outfile=build/bundle.main.min.js" \
"esbuild ./build/module/index.js --bundle --platform=node --target=node12 --format=esm --minify --loader:.ts=ts --outfile=build/bundle.esm.min.js" \
wait