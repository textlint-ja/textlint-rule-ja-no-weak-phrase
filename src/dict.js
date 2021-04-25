export default [
    {
        "message": `弱い表現: "かも" が使われています。`,
        // https://azu.github.io/morpheme-match/?text=問題がある(かも。)
        "tokens": [
            {
                "surface_form": "かも",
                "pos": "助詞",
                "pos_detail_1": "副助詞",
                "pos_detail_2": "*",
                "pos_detail_3": "*",
                "conjugated_type": "*",
                "conjugated_form": "*",
                "basic_form": "かも",
                "reading": "カモ",
                "pronunciation": "カモ"
            },
            {
                "surface_form": "。",
                "pos": "記号",
                "pos_detail_1": "句点",
                "pos_detail_2": "*",
                "pos_detail_3": "*",
                "conjugated_type": "*",
                "conjugated_form": "*",
                "basic_form": "。",
                "reading": "。",
                "pronunciation": "。"
            }
        ]
    },
    {
        "message": `弱い表現: "かも" が使われています。`,
        // https://azu.github.io/morpheme-match/?text=私は弱い(かもしれ)ない
        "tokens": [
            {
                "surface_form": "かも",
                "pos": "助詞",
                "pos_detail_1": "副助詞",
                "pos_detail_2": "*",
                "pos_detail_3": "*",
                "conjugated_type": "*",
                "conjugated_form": "*",
                "basic_form": "かも",
                "reading": "カモ",
                "pronunciation": "カモ"
            },
            {
                "surface_form": "しれ",
                "pos": "動詞",
                "pos_detail_1": "自立",
                "pos_detail_2": "*",
                "pos_detail_3": "*",
                "conjugated_type": "一段",
                "conjugated_form": ["連用形", "未然形"],
                "basic_form": "しれる",
                "reading": "シレ",
                "pronunciation": "シレ"
            }
        ]

    },
    {
        "message": `弱い表現: "思う" が使われています。`,
        "tokens": [
            {
                "surface_form": "思う",
                "pos": "動詞",
                "pos_detail_1": "自立",
                "pos_detail_2": "*",
                "pos_detail_3": "*",
                "conjugated_type": "五段・ワ行促音便",
                "conjugated_form": "基本形",
                "basic_form": "思う",
                "reading": "オモウ",
                "pronunciation": "オモウ"
            }
        ]
    },
    {
        "message": `弱い表現: "思います" が使われています。`,
        // https://azu.github.io/morpheme-match/#弱いと(思います)。
        "tokens": [
            {
                "surface_form": "思い",
                "pos": "動詞",
                "pos_detail_1": "自立",
                "pos_detail_2": "*",
                "pos_detail_3": "*",
                "conjugated_type": "五段・ワ行促音便",
                "conjugated_form": "連用形",
                "basic_form": "思う",
                "reading": "オモイ",
                "pronunciation": "オモイ"
            },
            {
                "surface_form": "ます",
                "pos": "助動詞",
                "pos_detail_1": "*",
                "pos_detail_2": "*",
                "pos_detail_3": "*",
                "conjugated_type": "特殊・マス",
                "conjugated_form": "基本形",
                "basic_form": "ます",
                "reading": "マス",
                "pronunciation": "マス"
            }
        ]
    },
    {
        "message": `弱い表現: "可能性を示唆している" が使われています。
「可能性がある」または「. . . を示唆している」を利用してください。
弱い表現を二つ重ねることはしないでください。`,
        "tokens": [
            {
                "surface_form": "可能",
                "pos": "名詞",
                "pos_detail_1": "形容動詞語幹",
                "pos_detail_2": "*",
                "pos_detail_3": "*",
                "conjugated_type": "*",
                "conjugated_form": "*",
                "basic_form": "可能",
                "reading": "カノウ",
                "pronunciation": "カノー"
            },
            {
                "surface_form": "性",
                "pos": "名詞",
                "pos_detail_1": "接尾",
                "pos_detail_2": "一般",
                "pos_detail_3": "*",
                "conjugated_type": "*",
                "conjugated_form": "*",
                "basic_form": "性",
                "reading": "セイ",
                "pronunciation": "セイ"
            },
            {
                "surface_form": "を",
                "pos": "助詞",
                "pos_detail_1": "格助詞",
                "pos_detail_2": "一般",
                "pos_detail_3": "*",
                "conjugated_type": "*",
                "conjugated_form": "*",
                "basic_form": "を",
                "reading": "ヲ",
                "pronunciation": "ヲ"
            },
            {
                "surface_form": "示唆",
                "pos": "名詞",
                "pos_detail_1": "サ変接続",
                "pos_detail_2": "*",
                "pos_detail_3": "*",
                "conjugated_type": "*",
                "conjugated_form": "*",
                "basic_form": "示唆",
                "reading": "シサ",
                "pronunciation": "シサ"
            },
            {
                "surface_form": "し",
                "pos": "動詞",
                "pos_detail_1": "自立",
                "pos_detail_2": "*",
                "pos_detail_3": "*",
                "conjugated_type": "サ変・スル",
                "conjugated_form": "連用形",
                "basic_form": "する",
                "reading": "シ",
                "pronunciation": "シ"
            },
            {
                "surface_form": "て",
                "pos": "助詞",
                "pos_detail_1": "接続助詞",
                "pos_detail_2": "*",
                "pos_detail_3": "*",
                "conjugated_type": "*",
                "conjugated_form": "*",
                "basic_form": "て",
                "reading": "テ",
                "pronunciation": "テ"
            },
            {
                "surface_form": "いる",
                "pos": "動詞",
                "pos_detail_1": "非自立",
                "pos_detail_2": "*",
                "pos_detail_3": "*",
                "conjugated_type": "一段",
                "conjugated_form": "基本形",
                "basic_form": "いる",
                "reading": "イル",
                "pronunciation": "イル"
            }
        ]

    }
];
