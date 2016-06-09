// LICENSE : MIT
"use strict";
const tokenize = require("kuromojin").tokenize;
import dictionaryList from "./dict";
const createTokenMatcher = require("morpheme-match");
module.exports = function (context) {
    const {Syntax, RuleError, report, getSource} = context;
    const matcherList = dictionaryList.map(dict => {
        return {
            matcher: createTokenMatcher(dict["tokens"]),
            message: dict["message"]
        };
    });
    return {
        [Syntax.Str](node){
            const text = getSource(node);
            return tokenize(text).then(currentTokens => {
                currentTokens.forEach(token => {
                    matcherList.forEach(({matcher, message}) => {
                        const {match, tokens} = matcher(token);
                        if (!match) {
                            return;
                        }
                        const firstToken = tokens[0];
                        report(node, new RuleError(message, {
                            index: firstToken.word_position - 1
                        }));
                    });
                });
            });
        }
    }
};