#!/bin/bash
#
# Release new version in npm and bower
#
# Usage: ./release.sh minor "description here"   

V=`npm version $1 --no-git-tag`

sed -i ""  "4s/.*/\ \*   $V/g" jquery.full.screen.js

uglifyjs   --screw-ie8 jquery.full.screen.js -o jquery.full.screen.min.js

git add -A && git commit -m "$2"

bower version $V

git push

git push --tags

npm publish

#npm deprecate selectablesg@"< {$V}" "multiple bugs fixed in $V"


