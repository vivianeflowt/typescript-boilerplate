#!/bin/bash

rm -rf ./src/infra/database/migrations/* 2>/dev/null

NODE_ENV=development yarn typeorm schema:drop

NODE_ENV=development yarn typeorm migration:generate --pretty -n init

NODE_ENV=development yarn typeorm migration:run

# NODE_ENV=development yarn typeorm schema:sync
