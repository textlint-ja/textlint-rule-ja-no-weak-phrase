// LICENSE : MIT
"use strict";
const TextLintTester = require("textlint-tester");
const tester = new TextLintTester();
// rule
const rule = require("../src/textlint-rule-ja-no-weak-phrase");
// ruleName, rule, { valid, invalid }
tester.run("textlint-rule-ja-no-weak-phrase", rule, {
    valid: [
        "コレは弱くない"
    ],
    invalid: [
        // single match
        {
            text: "弱いかもしれない",
            errors: [
                {
                    message: `弱い表現: "かも" が使われています。`,
                    line: 1,
                    column: 3
                }
            ]
        },
        {
            text: "これは弱いと思う",
            errors: [
                {
                    message: `弱い表現: "思う" が使われています。`,
                    line: 1,
                    column: 7
                }
            ]
        },
        {
            text: "弱いと思います。",
            errors: [
                {
                    message: `弱い表現: "思います" が使われています。`,
                    line: 1,
                    column: 4
                }
            ]
        }
    ]
});