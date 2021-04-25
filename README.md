# textlint-rule-ja-no-weak-phrase [![Actions Status: test](https://github.com/textlint-ja/textlint-rule-ja-no-weak-phrase/workflows/test/badge.svg)](https://github.com/textlint-ja/textlint-rule-ja-no-weak-phrase/actions?query=workflow%3A"test")

弱い日本語表現の利用を禁止する[textlint](http://textlint.github.io/ "textlint")ルール

- 〜かもしれない
- 〜と思う
- 〜と思います
- 可能性を示唆する

などを禁止するルールです。

主張を言い切るような表現を使うことを推奨するためのルールです。

## Install

    npm install textlint-rule-ja-no-weak-phrase

## Usage

Via `.textlintrc`(Recommended)

```json
{
    "rules": {
        "ja-no-weak-phrase": true
    }
}
```

Via CLI

```
textlint --rule ja-no-weak-phrase README.md
```

## 参考

- [continuous-manual-writing/writing-guideline: 「ドキュメント作成システム構築ガイド」の執筆者が従う規約](https://github.com/continuous-manual-writing/writing-guideline "continuous-manual-writing/writing-guideline: 「ドキュメント作成システム構築ガイド」の執筆者が従う規約")
- [卒・修論に見られる良くない表現](https://www.sci.hokudai.ac.jp/~minobe/class/bad_expressions.htm "卒・修論に見られる良くない表現")
- [理科系の作文技術](https://ja.wikipedia.org/wiki/%E7%90%86%E7%A7%91%E7%B3%BB%E3%81%AE%E4%BD%9C%E6%96%87%E6%8A%80%E8%A1%93 "理科系の作文技術")
    - はっきり言い切る姿勢

## Changelog

See [Releases page](https://github.com/textlint-ja/textlint-rule-ja-no-weak-phrase/releases).

## Running tests

Install devDependencies and Run `npm test`:

    npm i -d && npm test

## Contributing

Pull requests and stars are always welcome.
For bugs and feature requests, [please create an issue](https://github.com/textlint-ja/textlint-rule-ja-no-weak-phrase/issues).

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

- [github/azu](https://github.com/azu)
- [twitter/azu_re](http://twitter.com/azu_re)

## License

MIT © azu
