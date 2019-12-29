"use strict";

const internalFiles = [
  "**/cli-engine/**/*",
  "**/init/**/*",
  "**/linter/**/*",
  "**/rule-tester/**/*",
  "**/rules/**/*",
  "**/source-code/**/*"
];

module.exports = {
  "root": true,
  "plugins": [
    "react-hooks"
  ],
  "rules": {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  }
};
