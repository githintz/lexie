// ════════════════════════════════════════════════════════
//  ALPHABET — Malayalam letters for Alphabet Mode
//
//  Structure:
//    ALPHABET[section] = {
//      label     : English section name
//      malayalam : section name in script
//      emoji     : section icon
//      letters   : [ {
//        key       : stable ASCII slug — part of the Supabase word_id,
//                    NEVER rename one after release or progress is orphaned
//        letter    : the glyph itself
//        phonetic  : English phonetic shown on the tile and card
//        speech    : OPTIONAL override for what is sent to TTS.
//                    Defaults to `letter`. Only set where the bare glyph
//                    reads wrong or silent (chillus, anusvaram, visargam).
//        word      : { malayalam, transliteration, meaning } — a simple
//                    word beginning with the letter
//        note      : OPTIONAL caveat shown in small italics on the card
//                    (letters that never start a word, rare letters)
//      } ]
//
//  Sections: vowels | consonants | chillus
// ════════════════════════════════════════════════════════

const ALPHABET = {

  // ── VOWELS — സ്വരങ്ങൾ ─────────────────────────────────
  vowels: {
    label: 'Vowels',
    malayalam: 'സ്വരങ്ങൾ',
    emoji: '🌸',
    letters: [
      { key: 'a',   letter: 'അ',  phonetic: 'a',
        word: { malayalam: 'അമ്മ',    transliteration: 'amma',      meaning: 'mother' } },
      { key: 'aa',  letter: 'ആ',  phonetic: 'ā',
        word: { malayalam: 'ആന',      transliteration: 'aana',      meaning: 'elephant' } },
      { key: 'i',   letter: 'ഇ',  phonetic: 'i',
        word: { malayalam: 'ഇല',      transliteration: 'ila',       meaning: 'leaf' } },
      { key: 'ii',  letter: 'ഈ',  phonetic: 'ī',
        word: { malayalam: 'ഈച്ച',    transliteration: 'eecha',     meaning: 'housefly' } },
      { key: 'u',   letter: 'ഉ',  phonetic: 'u',
        word: { malayalam: 'ഉപ്പ്',   transliteration: 'uppu',      meaning: 'salt' } },
      { key: 'uu',  letter: 'ഊ',  phonetic: 'ū',
        word: { malayalam: 'ഊഞ്ഞാൽ',  transliteration: 'oonjaal',   meaning: 'swing' } },
      { key: 'ru',  letter: 'ഋ',  phonetic: 'ṛ',
        word: { malayalam: 'ഋഷി',     transliteration: 'rishi',     meaning: 'sage' },
        note: 'A rare letter — mostly in words borrowed from Sanskrit.' },
      { key: 'e',   letter: 'എ',  phonetic: 'e',
        word: { malayalam: 'എലി',     transliteration: 'eli',       meaning: 'mouse' } },
      { key: 'ee',  letter: 'ഏ',  phonetic: 'ē',
        word: { malayalam: 'ഏണി',     transliteration: 'eni',       meaning: 'ladder' } },
      { key: 'ai',  letter: 'ഐ',  phonetic: 'ai',
        word: { malayalam: 'ഐക്യം',   transliteration: 'aikyam',    meaning: 'unity' } },
      { key: 'o',   letter: 'ഒ',  phonetic: 'o',
        word: { malayalam: 'ഒട്ടകം',  transliteration: 'ottakam',   meaning: 'camel' } },
      { key: 'oo',  letter: 'ഓ',  phonetic: 'ō',
        word: { malayalam: 'ഓണം',     transliteration: 'onam',      meaning: 'Onam (the harvest festival)' } },
      { key: 'au',  letter: 'ഔ',  phonetic: 'au',
        word: { malayalam: 'ഔഷധം',    transliteration: 'aushadham', meaning: 'medicine' } },
      { key: 'am',  letter: 'ം',  phonetic: 'aṁ',  speech: 'അം',
        word: { malayalam: 'മരം',     transliteration: 'maram',     meaning: 'tree' },
        note: 'Anusvaram — the "m" sound. It only ever closes a word, never starts one.' },
      { key: 'ah',  letter: 'ഃ',  phonetic: 'aḥ',  speech: 'അഃ',
        word: { malayalam: 'ദുഃഖം',   transliteration: 'duhkham',   meaning: 'sorrow' },
        note: 'Visargam — a soft breath. It sits inside or at the end of a word.' }
    ]
  },

  // ── CONSONANTS — വ്യഞ്ജനങ്ങൾ ──────────────────────────
  consonants: {
    label: 'Consonants',
    malayalam: 'വ്യഞ്ജനങ്ങൾ',
    emoji: '🔤',
    letters: [
      // ka varga
      { key: 'ka',   letter: 'ക', phonetic: 'ka',
        word: { malayalam: 'കടൽ',      transliteration: 'kadal',       meaning: 'sea' } },
      { key: 'kha',  letter: 'ഖ', phonetic: 'kha',
        word: { malayalam: 'ഖനി',      transliteration: 'khani',       meaning: 'mine (pit)' } },
      { key: 'ga',   letter: 'ഗ', phonetic: 'ga',
        word: { malayalam: 'ഗുരു',     transliteration: 'guru',        meaning: 'teacher' } },
      { key: 'gha',  letter: 'ഘ', phonetic: 'gha',
        word: { malayalam: 'ഘടികാരം',  transliteration: 'ghadikaaram', meaning: 'clock' } },
      { key: 'nga',  letter: 'ങ', phonetic: 'ṅa',
        word: { malayalam: 'ഇങ്ങനെ',   transliteration: 'ingane',      meaning: 'like this' },
        note: 'Never starts a word — it appears in the middle.' },
      // cha varga
      { key: 'cha',  letter: 'ച', phonetic: 'cha',
        word: { malayalam: 'ചായ',      transliteration: 'chaaya',      meaning: 'tea' } },
      { key: 'chha', letter: 'ഛ', phonetic: 'chha',
        word: { malayalam: 'ഛായ',      transliteration: 'chhaaya',     meaning: 'shade, image' } },
      { key: 'ja',   letter: 'ജ', phonetic: 'ja',
        word: { malayalam: 'ജനൽ',      transliteration: 'janel',       meaning: 'window' } },
      { key: 'jha',  letter: 'ഝ', phonetic: 'jha',
        word: { malayalam: 'ഝഷം',      transliteration: 'jhasham',     meaning: 'fish (poetic)' },
        note: 'One of the rarest letters — you will seldom meet it.' },
      { key: 'nja',  letter: 'ഞ', phonetic: 'ña',
        word: { malayalam: 'ഞാൻ',      transliteration: 'njan',        meaning: 'I' } },
      // ṭa varga
      { key: 'tta',  letter: 'ട', phonetic: 'ṭa',
        word: { malayalam: 'ടിക്കറ്റ്', transliteration: 'ticket',      meaning: 'ticket' } },
      { key: 'ttha', letter: 'ഠ', phonetic: 'ṭha',
        word: { malayalam: 'പാഠം',     transliteration: 'paatham',     meaning: 'lesson' },
        note: 'Rarely starts a word — shown here inside one.' },
      { key: 'dda',  letter: 'ഡ', phonetic: 'ḍa',
        word: { malayalam: 'ഡോക്ടർ',   transliteration: 'doctor',      meaning: 'doctor' } },
      { key: 'ddha', letter: 'ഢ', phonetic: 'ḍha',
        word: { malayalam: 'ഢക്ക',     transliteration: 'dhakka',      meaning: 'a drum' },
        note: 'A rare letter.' },
      { key: 'nna',  letter: 'ണ', phonetic: 'ṇa',
        word: { malayalam: 'കണ്ണ്',    transliteration: 'kannu',       meaning: 'eye' },
        note: 'Never starts a word — it appears in the middle or at the end.' },
      // ta varga
      { key: 'tha',  letter: 'ത', phonetic: 'ta',
        word: { malayalam: 'തല',       transliteration: 'thala',       meaning: 'head' } },
      { key: 'thha', letter: 'ഥ', phonetic: 'tha',
        word: { malayalam: 'രഥം',      transliteration: 'ratham',      meaning: 'chariot' },
        note: 'Rarely starts a word — shown here inside one.' },
      { key: 'da',   letter: 'ദ', phonetic: 'da',
        word: { malayalam: 'ദിവസം',    transliteration: 'divasam',     meaning: 'day' } },
      { key: 'dha',  letter: 'ധ', phonetic: 'dha',
        word: { malayalam: 'ധനം',      transliteration: 'dhanam',      meaning: 'wealth' } },
      { key: 'na',   letter: 'ന', phonetic: 'na',
        word: { malayalam: 'നദി',      transliteration: 'nadi',        meaning: 'river' } },
      // pa varga
      { key: 'pa',   letter: 'പ', phonetic: 'pa',
        word: { malayalam: 'പശു',      transliteration: 'pashu',       meaning: 'cow' } },
      { key: 'pha',  letter: 'ഫ', phonetic: 'pha',
        word: { malayalam: 'ഫലം',      transliteration: 'phalam',      meaning: 'fruit' } },
      { key: 'ba',   letter: 'ബ', phonetic: 'ba',
        word: { malayalam: 'ബസ്',      transliteration: 'bus',         meaning: 'bus' } },
      { key: 'bha',  letter: 'ഭ', phonetic: 'bha',
        word: { malayalam: 'ഭക്ഷണം',   transliteration: 'bhakshanam',  meaning: 'food' } },
      { key: 'ma',   letter: 'മ', phonetic: 'ma',
        word: { malayalam: 'മരം',      transliteration: 'maram',       meaning: 'tree' } },
      // remaining
      { key: 'ya',   letter: 'യ', phonetic: 'ya',
        word: { malayalam: 'യാത്ര',    transliteration: 'yaathra',     meaning: 'journey' } },
      { key: 'ra',   letter: 'ര', phonetic: 'ra',
        word: { malayalam: 'രാത്രി',   transliteration: 'raathri',     meaning: 'night' } },
      { key: 'la',   letter: 'ല', phonetic: 'la',
        word: { malayalam: 'ലോകം',     transliteration: 'lokam',       meaning: 'world' } },
      { key: 'va',   letter: 'വ', phonetic: 'va',
        word: { malayalam: 'വെള്ളം',   transliteration: 'vellam',      meaning: 'water' } },
      { key: 'sha1', letter: 'ശ', phonetic: 'śa',
        word: { malayalam: 'ശരി',      transliteration: 'shari',       meaning: 'correct, okay' } },
      { key: 'sha2', letter: 'ഷ', phonetic: 'sha',
        word: { malayalam: 'ഷർട്ട്',   transliteration: 'shirt',       meaning: 'shirt' } },
      { key: 'sa',   letter: 'സ', phonetic: 'sa',
        word: { malayalam: 'സൂര്യൻ',   transliteration: 'sooryan',     meaning: 'sun' } },
      { key: 'ha',   letter: 'ഹ', phonetic: 'ha',
        word: { malayalam: 'ഹൃദയം',    transliteration: 'hridayam',    meaning: 'heart' } },
      { key: 'lla',  letter: 'ള', phonetic: 'ḷa',
        word: { malayalam: 'പള്ളി',    transliteration: 'palli',       meaning: 'church' },
        note: 'Never starts a word — it appears in the middle or at the end.' },
      { key: 'zha',  letter: 'ഴ', phonetic: 'zha',
        word: { malayalam: 'വഴി',      transliteration: 'vazhi',       meaning: 'way, path' },
        note: 'Never starts a word. A sound unique to Malayalam and Tamil.' },
      { key: 'rra',  letter: 'റ', phonetic: 'ṟa',
        word: { malayalam: 'റോഡ്',     transliteration: 'road',        meaning: 'road' } }
    ]
  },

  // ── CHILLUS — ചില്ലുകൾ ────────────────────────────────
  chillus: {
    label: 'Chillu letters',
    malayalam: 'ചില്ലുകൾ',
    emoji: '✳️',
    letters: [
      { key: 'chillu_nn', letter: 'ൺ', phonetic: 'ṇ', speech: 'അൺ',
        word: { malayalam: 'പെൺ',   transliteration: 'peṇ',   meaning: 'girl, female' },
        note: 'A chillu — a bare consonant with no vowel. It only closes a word.' },
      { key: 'chillu_n',  letter: 'ൻ', phonetic: 'n', speech: 'അൻ',
        word: { malayalam: 'അവൻ',   transliteration: 'avan',  meaning: 'he' },
        note: 'A chillu — a bare consonant with no vowel. It only closes a word.' },
      { key: 'chillu_r',  letter: 'ർ', phonetic: 'r', speech: 'അർ',
        word: { malayalam: 'അവർ',   transliteration: 'avar',  meaning: 'they' },
        note: 'A chillu — a bare consonant with no vowel. It only closes a word.' },
      { key: 'chillu_l',  letter: 'ൽ', phonetic: 'l', speech: 'അൽ',
        word: { malayalam: 'കടൽ',   transliteration: 'kadal', meaning: 'sea' },
        note: 'A chillu — a bare consonant with no vowel. It only closes a word.' },
      { key: 'chillu_ll', letter: 'ൾ', phonetic: 'ḷ', speech: 'അൾ',
        word: { malayalam: 'അവൾ',   transliteration: 'avaḷ',  meaning: 'she' },
        note: 'A chillu — a bare consonant with no vowel. It only closes a word.' },
      { key: 'chillu_k',  letter: 'ൿ', phonetic: 'k', speech: 'അൿ',
        word: { malayalam: 'വാൿ',   transliteration: 'vaak',  meaning: 'word, speech' },
        note: 'The rarest chillu — archaic, and usually written വാക്ക് today.' }
    ]
  }
};

const ALPHABET_SECTIONS = Object.keys(ALPHABET);
const TOTAL_LETTERS = ALPHABET_SECTIONS.reduce((n, s) => n + ALPHABET[s].letters.length, 0);
