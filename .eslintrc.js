module.exports = {
    "extends": "airbnb-base",
    "rules": {
        "prefer-destructuring": ["error", {
            "VariableDeclarator": {
                "array": true,
                "object": false
            },
            "AssignmentExpression": {
                "array": true,
                "object": true
            }
        }, {
            "enforceForRenamedProperties": false
        }],
        "no-console": ["error", {
            "allow": ["warn", "error"]
        }]
    }
};