# Asset Licenses

## Alphabet illustrations

The 26 local SVG files in `images/` are based on [Twemoji](https://github.com/twitter/twemoji), released by Twitter, Inc. under [CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/).

Required attribution wherever this game is published:

> Emoji graphics by Twitter, CC-BY 4.0.

The images are retained locally so the published game has no runtime image dependency. Their mapping to alphabet words is a temporary learning aid; replace any approximate object before public release with artwork that clearly represents the listed word and record the new source and license in this file.

## American-English pronunciation audio

The 78 local WAV files in `audio/` were generated on 2026-07-22 with the DittliTTS neural inference engine, using the `@dittli/tts-core` 0.6.0 and `@dittli/tts-en` 0.6.0 packages. `a-name.wav` through `z-name.wav` contain American-English uppercase letter names. `a-phoneme.wav` through `z-phoneme.wav` contain the lowercase phonemes defined in `src/data/letters.ts`, generated with the same English neural model from a direct phoneme mapping. `a-word.wav` through `z-word.wav` contain the matching picture words.

Source: [dittlihq/dittli-tts](https://github.com/dittlihq/dittli-tts), distributed through the [`@dittli/tts-core`](https://www.npmjs.com/package/@dittli/tts-core) and [`@dittli/tts-en`](https://www.npmjs.com/package/@dittli/tts-en) npm packages. Both packages, including the English ONNX model distributed in the language pack, are licensed under [Apache-2.0](https://www.apache.org/licenses/LICENSE-2.0). The project includes generated WAV output only, has no runtime audio service dependency, and identifies the sound as AI voice in the UI.
