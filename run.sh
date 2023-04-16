#!/usr/bin/env sh
sass index.scss index.css
#echo '//# sourceMappingURL=index.css.map' > css/tmp.css
#cp css/index.css css/tmpbis.css
#cat css/tmp.css css/tmpbis.css > css/index.css
#rm css/tmp.css css/tmpbis.css
node app.js
