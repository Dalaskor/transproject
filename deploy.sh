#!/usr/bin/env sh

set -e

npm run build

cd public

git init
git add -A
git commit -m 'New Deployment'
git push -f https://github.com/Dalaskor/transproject.git master:gh-pages

cd -