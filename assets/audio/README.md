# AI American-English Letter Audio

Letter Island bundles 78 local AI-generated American-English prompts:

- `<letter>-name.wav`: one clear American-English letter name, such as `B` in `b-name.wav`.
- `<letter>-phoneme.wav`: the matching lowercase phoneme, such as `/b/` in `b-phoneme.wav`.
- `<letter>-word.wav`: the matching picture word, such as `ball` in `b-word.wav`.

The included files are `a-name.wav` through `z-name.wav`, `a-phoneme.wav` through `z-phoneme.wav`, and `a-word.wav` through `z-word.wav`. They are 44.1 kHz, mono PCM WAV files served directly from this folder, so the game has no runtime TTS, remote audio API, or browser speech-synthesis dependency.

The course's phoneme mapping is recorded in `src/data/letters.ts`. In the case-matching game, the uppercase main card uses a name prompt and a correct lowercase answer uses its phoneme prompt.

## Generation record

Generated locally on 2026-07-22 with [DittliTTS](https://www.npmjs.com/package/@dittli/tts-core) 0.6.0 and its English neural voice package [`@dittli/tts-en`](https://www.npmjs.com/package/@dittli/tts-en) 0.6.0. Letter-name and word prompts use text synthesis. Phoneme prompts use the same English neural model with the course phoneme mapping supplied directly to the model. Both packages, including the bundled English ONNX model, are released under Apache-2.0. The source project is [dittlihq/dittli-tts](https://github.com/dittlihq/dittli-tts). The app labels the prompts as AI voice in both supported interface languages.

`a-name.wav` is synthesized from the explicit text `ay`. The engine otherwise treats a single `A` as the article pronunciation rather than the letter name.
