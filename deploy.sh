#! /bin/bash
set -e

echo "*** Fetch remote and sync tags ***"
git fetch

echo "*** Checkout and pull develop ***"
git checkout develop
git pull origin develop

echo "*** Checkout and pull master ***"
git checkout master
git pull origin master

echo "*** Merge develop in master ***"
git merge --no-ff develop -m "Merge branch 'develop'"

echo "*** Push master to remote ***"
git push origin master

echo "*** Wait for release tag ***"
while git fetch && git diff origin/master --exit-code --quiet; do
  echo "no diff with remote, wait 5..."
  sleep 5
done
git merge --ff-only origin/master

echo "*** Merge master in develop ***"
git checkout develop
git merge master --ff-only
git push origin develop
