#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
rm -rf dist
mv docs/.vitepress/dist .

git add -A
git commit -m 'deploy'

git push

cd -
