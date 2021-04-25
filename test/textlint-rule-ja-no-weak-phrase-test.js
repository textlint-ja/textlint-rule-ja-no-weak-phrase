// LICENSE : MIT
"use strict";
import TextLintTester from "textlint-tester";
import rule from "../src/textlint-rule-ja-no-weak-phrase";

const tester = new TextLintTester();
// ruleName, rule, { valid, invalid }
tester.run("textlint-rule-ja-no-weak-phrase", rule, {
    valid: [
        "コレは弱くない",
        "これは弱くないと思われますがどうですか?",
        // https://github.com/textlint-ja/textlint-rule-ja-no-weak-phrase/issues/4
        "どう工夫したのかも書いてみてください"
    ],
    invalid: [
        // single match
        {
            text: "問題があるかも。",
            errors: [
                {
                    message: `弱い表現: "かも" が使われています。`,
                    line: 1,
                    column: 6
                }
            ]
        },
        {
            text: "私は弱いかもしれない。",
            errors: [
                {
                    message: `弱い表現: "かも" が使われています。`,
                    line: 1,
                    column: 5
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
        },
        {
            text: `またNode.jsで使われているCommonJSやES6 Modulesなどがなかった時代に作られた仕組みなので、
それらと組み合わせる際には少し不向きな拡張の仕組みといえるかもしれません。`,
            errors: [
                {
                    message: `弱い表現: "かも" が使われています。`,
                    line: 2,
                    column: 30
                }
            ]
        },
        {
            text: "重大な意義を持つと思います。",
            errors: [
                {
                    message: `弱い表現: "思います" が使われています。`,
                    index: 9
                }
            ]
        },
        {
            text: "この結果はそのような可能性を示唆している。",
            errors: [
                {
                    message: `弱い表現: "可能性を示唆している" が使われています。
「可能性がある」または「. . . を示唆している」を利用してください。
弱い表現を二つ重ねることはしないでください。`,
                    index: 10
                }
            ]
        }
    ]
});
