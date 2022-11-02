module.exports = {
	'env': {
        'browser': true
    },
    'extends': 'airbnb-base',
    'rules': {
        "arrow-parens": [2, "as-needed"],
    	'indent': ['error', 4],
        "import/extensions": [0, { "js": "always"}],
        "import/no-unresolved": 0,
        "import/no-absolute-path": 0,
        // "linebreak-style": ["error", "unix"],
        "object-curly-spacing": [2, "never"],
        "no-console": 0,
        "max-len": ["error", {"code": 200}],
        "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
        "prefer-destructuring": 0,
        "no-use-before-define": 0,
        "object-curly-newline": ["error", { "multiline": true }],
    }
};

