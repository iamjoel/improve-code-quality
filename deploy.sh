#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run docs:build

# navigate into the build output directory
cd docs/.vitepress/dist


git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:iamjoel/improve-code-quality.git main:gh-pages

cd -
