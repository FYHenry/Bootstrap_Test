#!/usr/bin/env sh
echo '//# sourceMappingURL=main.js.map' > index.css
echo "" >> index.css
sass index.scss >> index.css
node app.js
