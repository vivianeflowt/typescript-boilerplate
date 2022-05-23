#!/bin/bash

clear

NAME='func'

npm remove -g --force "$NAME"
npm list -g --depth 0 | grep "$NAME" 
sleep 2

npm link

npm install -g . --force
npm list -g --depth 0 | grep "$NAME"
sleep 2


