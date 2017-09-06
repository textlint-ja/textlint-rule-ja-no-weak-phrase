// LICENSE : MIT
"use strict";
const tokenize = require("kuromojin").tokenize;
const dictionaryList = require("./dict");
const createTokenMatcher = require("morpheme-match-all");
const matchAll = createTokenMatcher(dictionaryList);
module.exports = function(context) {
    const { Syntax, RuleError, report, getSource } = context;
    return {
        [Syntax.Str](node) {
            const text = getSource(node);
            return tokenize(text).then(currentTokens => {
                /**
                 * @type {MatchResult[]}
                 */
                const matchResults = matchAll(currentTokens);
                matchResults.forEach(matchResult => {
                    const firstToken = matchResult.tokens[0];
                    const lastToken = matchResult.tokens[matchResult.tokens.length - 1];
                    const firstWordIndex = Math.max(firstToken.word_position - 1, 0);
                    const lastWorkIndex = Math.max(lastToken.word_position - 1, 0);
                    // replace $1
                    const message = matchResult.dict.message;
                    report(node, new RuleError(message, {
                        index: firstWordIndex
                    }));
                });
            });
        }
    }
};