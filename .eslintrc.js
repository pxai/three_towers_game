module.exports = {
    "extends": "standard",
       "rules": {
                 "semi": [2, "always"]
                     },
     "env": {
         "commonjs": true,
         "node": true,
         "mocha": true
     },
     "overrides": [
         {
            "files": "*.test.js",
            "rules": {
                     "no-unused-expressions": "off"
                    }
        }
  ]
};
