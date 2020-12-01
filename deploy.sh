#!/bin/sh
DATE=$(date +%d-%m-%Y-%H-%M)
git add . && git commit -m "deploy ${DATE}" && git push