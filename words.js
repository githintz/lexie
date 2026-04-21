// ════════════════════════════════════════════════════════
//  LEXICON — Malayalam grammar forms for learning
//
//  Structure:
//    LEXICON[category][baseKey] = {
//      malayalam : script of the base word
//      meaning   : English gloss
//      forms     : { formName: { transliteration, malayalam, meaning } }
//    }
//
//  Categories: pronouns | demonstratives | verbs
// ════════════════════════════════════════════════════════

const LEXICON = {

  // ── PRONOUNS ─────────────────────────────────────────────
  pronouns: {
    "njan": {
      malayalam: "ഞാൻ",
      meaning: "I",
      forms: {
        nominative:   { transliteration: "njan",    malayalam: "ഞാൻ",     meaning: "I",           example: { malayalam: "ഞാൻ കേരളത്തിൽ ഉണ്ട്",          transliteration: "Njan Keralathil undu",          translation: "I am in Kerala" } },
        genitive:     { transliteration: "ente",    malayalam: "എന്റെ",   meaning: "my",          example: { malayalam: "ഇത് എന്റെ ബാഗ് ആണ്",             transliteration: "Ithu ente bag aanu",             translation: "This is my bag" } },
        dative:       { transliteration: "enikku",  malayalam: "എനിക്ക്", meaning: "to / for me", example: { malayalam: "എനിക്ക് ചായ വേണം",               transliteration: "Enikku chaya venam",              translation: "I want tea" } },
        accusative:   { transliteration: "enne",    malayalam: "എന്നെ",   meaning: "me",          example: { malayalam: "അവൾ എന്നെ വിളിച്ചു",              transliteration: "Avaḷ enne vilichhu",             translation: "She called me" } },
        instrumental: { transliteration: "ennāl",   malayalam: "എന്നാൽ",  meaning: "by me",       example: { malayalam: "ഇത് എന്നാൽ ചെയ്തു",              transliteration: "Ithu ennāl cheythu",             translation: "This was done by me" } },
        locative:     { transliteration: "ennil",   malayalam: "എന്നിൽ",  meaning: "in / on me",  example: { malayalam: "അവൾക്ക് എന്നിൽ വിശ്വാസം ഉണ്ട്",  transliteration: "Avaḷkku ennil vishwaasam undu",  translation: "She has trust in me" } },
        sociative:    { transliteration: "ennōṭu",  malayalam: "എന്നോട്", meaning: "with me",     example: { malayalam: "അവൻ എന്നോട് സംസാരിച്ചു",          transliteration: "Avan ennōṭu samsaarichhu",       translation: "He spoke with me" } }
      }
    },
    "nee": {
      malayalam: "നീ",
      meaning: "you (informal)",
      forms: {
        nominative:   { transliteration: "nee",      malayalam: "നീ",       meaning: "you",           example: { malayalam: "നീ ഇവിടെ ഇരിക്കൂ",                  transliteration: "Nee ivide irikkoo",                  translation: "You sit here" } },
        genitive:     { transliteration: "ninte",    malayalam: "നിന്റെ",   meaning: "your",          example: { malayalam: "ഇത് നിന്റെ പുസ്തകം ആണ്",            transliteration: "Ithu ninte pusthakam aanu",          translation: "This is your book" } },
        dative:       { transliteration: "ninakku",  malayalam: "നിനക്ക്",  meaning: "to / for you",  example: { malayalam: "നിനക്ക് ഇത് ഇഷ്ടമാണോ?",              transliteration: "Ninakku ithu ishtamaano?",           translation: "Do you like this?" } },
        accusative:   { transliteration: "ninnē",    malayalam: "നിന്നേ",   meaning: "you (obj.)",    example: { malayalam: "ഞാൻ നിന്നേ കണ്ടു",                  transliteration: "Njan ninnē kandu",                   translation: "I saw you" } },
        instrumental: { transliteration: "ninnāl",   malayalam: "നിന്നാൽ",  meaning: "by you",        example: { malayalam: "ഇത് നിന്നാൽ ആകും",                  transliteration: "Ithu ninnāl aakum",                  translation: "This can be done by you" } },
        locative:     { transliteration: "ninnil",   malayalam: "നിന്നിൽ",  meaning: "in / on you",   example: { malayalam: "ഞങ്ങൾക്ക് നിന്നിൽ വിശ്വാസം ഉണ്ട്",  transliteration: "Njangaḷkku ninnil vishwaasam undu",  translation: "We have trust in you" } },
        sociative:    { transliteration: "ninnōṭu",  malayalam: "നിന്നോട്", meaning: "with you",      example: { malayalam: "ഞാൻ നിന്നോട് ചോദിക്കട്ടേ",          transliteration: "Njan ninnōṭu chōdikkaṭṭē",          translation: "Let me ask you" } }
      }
    },
    "ningaḷ": {
      malayalam: "നിങ്ങൾ",
      meaning: "you (formal / plural)",
      forms: {
        nominative:   { transliteration: "ningaḷ",     malayalam: "നിങ്ങൾ",     meaning: "you (formal)",  example: { malayalam: "നിങ്ങൾ ഇവിടെ ഇരിക്കൂ",                   transliteration: "Ningaḷ ivide irikkoo",                  translation: "Please sit here" } },
        genitive:     { transliteration: "ningaḷuṭe",  malayalam: "നിങ്ങളുടെ",  meaning: "your",          example: { malayalam: "ഇത് നിങ്ങളുടെ മുറി ആണ്",              transliteration: "Ithu ningaḷuṭe muri aanu",              translation: "This is your room" } },
        dative:       { transliteration: "ningaḷkku",  malayalam: "നിങ്ങൾക്ക്", meaning: "to / for you",  example: { malayalam: "നിങ്ങൾക്ക് ചായ വേണോ?",                 transliteration: "Ningaḷkku chaya venō?",                 translation: "Do you want tea?" } },
        accusative:   { transliteration: "ningaḷē",    malayalam: "നിങ്ങളേ",    meaning: "you (obj.)",    example: { malayalam: "ഞാൻ നിങ്ങളേ കണ്ടു",                    transliteration: "Njan ningaḷē kandu",                    translation: "I saw you" } },
        instrumental: { transliteration: "ningaḷāl",   malayalam: "നിങ്ങളാൽ",   meaning: "by you",        example: { malayalam: "ഇത് നിങ്ങളാൽ ചെയ്തു",                  transliteration: "Ithu ningaḷāl cheythu",                 translation: "This was done by you" } },
        locative:     { transliteration: "ningaḷil",   malayalam: "നിങ്ങളിൽ",   meaning: "in / on you",   example: { malayalam: "ഞങ്ങൾക്ക് നിങ്ങളിൽ വിശ്വാസം ഉണ്ട്",   transliteration: "Njangaḷkku ningaḷil vishwaasam undu",   translation: "We have trust in you" } },
        sociative:    { transliteration: "ningaḷōṭu",  malayalam: "നിങ്ങളോട്",  meaning: "with you",      example: { malayalam: "ഞാൻ നിങ്ങളോട് സംസാരിക്കാം",            transliteration: "Njan ningaḷōṭu samsaarikaам",           translation: "I will talk with you" } }
      }
    },
    "avan": {
      malayalam: "അവൻ",
      meaning: "he",
      forms: {
        nominative:   { transliteration: "avan",    malayalam: "അവൻ",     meaning: "he",           example: { malayalam: "അവൻ ഇവിടെ വരുന്നു",                transliteration: "Avan ivide varunnu",              translation: "He is coming here" } },
        genitive:     { transliteration: "avante",  malayalam: "അവന്റെ",  meaning: "his",          example: { malayalam: "ഇത് അവന്റെ ഫോൺ ആണ്",             transliteration: "Ithu avante phone aanu",          translation: "This is his phone" } },
        dative:       { transliteration: "avannu",  malayalam: "അവന്",    meaning: "to / for him", example: { malayalam: "അവന് ഭക്ഷണം കൊടുക്കൂ",             transliteration: "Avannu bhakshanam kodukkoo",      translation: "Give him food" } },
        accusative:   { transliteration: "avane",   malayalam: "അവനെ",    meaning: "him",          example: { malayalam: "ഞാൻ അവനെ കണ്ടു",                  transliteration: "Njan avane kandu",                translation: "I saw him" } },
        instrumental: { transliteration: "avanāl",  malayalam: "അവനാൽ",   meaning: "by him",       example: { malayalam: "ഇത് അവനാൽ ചെയ്തു",                transliteration: "Ithu avanāl cheythu",             translation: "This was done by him" } },
        locative:     { transliteration: "avanil",  malayalam: "അവനിൽ",   meaning: "in / on him",  example: { malayalam: "ഞങ്ങൾക്ക് അവനിൽ വിശ്വാസം ഉണ്ട്",  transliteration: "Njangaḷkku avanil vishwaasam undu", translation: "We have trust in him" } },
        sociative:    { transliteration: "avanōṭu", malayalam: "അവനോട്",  meaning: "with him",     example: { malayalam: "ഞാൻ അവനോട് സംസാരിച്ചു",            transliteration: "Njan avanōṭu samsaarichhu",       translation: "I spoke with him" } }
      }
    },
    "avaḷ": {
      malayalam: "അവൾ",
      meaning: "she",
      forms: {
        nominative:   { transliteration: "avaḷ",    malayalam: "അവൾ",     meaning: "she",           example: { malayalam: "അവൾ ഇവിടെ ഉണ്ട്",                   transliteration: "Avaḷ ivide undu",                  translation: "She is here" } },
        genitive:     { transliteration: "avaḷuṭe", malayalam: "അവളുടെ",  meaning: "her",           example: { malayalam: "ഇത് അവളുടെ ബാഗ് ആണ്",              transliteration: "Ithu avaḷuṭe bag aanu",            translation: "This is her bag" } },
        dative:       { transliteration: "avaḷkku", malayalam: "അവൾക്ക്", meaning: "to / for her",  example: { malayalam: "അവൾക്ക് ചായ വേണം",                  transliteration: "Avaḷkku chaya venam",              translation: "She wants tea" } },
        accusative:   { transliteration: "avaḷē",   malayalam: "അവളേ",    meaning: "her (obj.)",    example: { malayalam: "ഞാൻ അവളേ കണ്ടു",                    transliteration: "Njan avaḷē kandu",                 translation: "I saw her" } },
        instrumental: { transliteration: "avaḷāl",  malayalam: "അവളാൽ",   meaning: "by her",        example: { malayalam: "ഇത് അവളാൽ ചെയ്തു",                  transliteration: "Ithu avaḷāl cheythu",              translation: "This was done by her" } },
        locative:     { transliteration: "avaḷil",  malayalam: "അവളിൽ",   meaning: "in / on her",   example: { malayalam: "ഞങ്ങൾക്ക് അവളിൽ വിശ്വാസം ഉണ്ട്",   transliteration: "Njangaḷkku avaḷil vishwaasam undu", translation: "We have trust in her" } },
        sociative:    { transliteration: "avaḷōṭu", malayalam: "അവളോട്",  meaning: "with her",      example: { malayalam: "ഞാൻ അവളോട് സംസാരിച്ചു",             transliteration: "Njan avaḷōṭu samsaarichhu",        translation: "I spoke with her" } }
      }
    },
    "avar": {
      malayalam: "അവർ",
      meaning: "they / he/she (formal)",
      forms: {
        nominative:   { transliteration: "avar",    malayalam: "അവർ",     meaning: "they",           example: { malayalam: "അവർ ഇവിടെ ഉണ്ട്",                   transliteration: "Avar ivide undu",                   translation: "They are here" } },
        genitive:     { transliteration: "avaruṭe", malayalam: "അവരുടെ",  meaning: "their",          example: { malayalam: "ഇത് അവരുടെ വീട് ആണ്",               transliteration: "Ithu avaruṭe veedu aanu",           translation: "This is their house" } },
        dative:       { transliteration: "avarkku", malayalam: "അവർക്ക്", meaning: "to / for them",  example: { malayalam: "അവർക്ക് ഇത് കൊടുക്കൂ",               transliteration: "Avarkku ithu kodukkoo",             translation: "Give this to them" } },
        accusative:   { transliteration: "avarē",   malayalam: "അവരേ",    meaning: "them (obj.)",    example: { malayalam: "ഞാൻ അവരേ കണ്ടു",                    transliteration: "Njan avarē kandu",                  translation: "I saw them" } },
        instrumental: { transliteration: "avarāl",  malayalam: "അവരാൽ",   meaning: "by them",        example: { malayalam: "ഇത് അവരാൽ ചെയ്തു",                  transliteration: "Ithu avarāl cheythu",               translation: "This was done by them" } },
        locative:     { transliteration: "avaril",  malayalam: "അവരിൽ",   meaning: "among them",     example: { malayalam: "ഞാൻ അവരിൽ ഒരാൾ ആണ്",               transliteration: "Njan avaril orāḷ aanu",             translation: "I am one among them" } },
        sociative:    { transliteration: "avarōṭu", malayalam: "അവരോട്",  meaning: "with them",      example: { malayalam: "ഞാൻ അവരോട് ചോദിച്ചു",               transliteration: "Njan avarōṭu chōdichhu",            translation: "I asked them" } }
      }
    }
  },

  // ── DEMONSTRATIVES ───────────────────────────────────────
  demonstratives: {
    "ithu": {
      malayalam: "ഇത്",
      meaning: "this",
      forms: {
        nominative:   { transliteration: "ithu",    malayalam: "ഇത്",      meaning: "this",           example: { malayalam: "ഇത് എന്താണ്?",                      transliteration: "Ithu enthānu?",                    translation: "What is this?" } },
        genitive:     { transliteration: "ithinte", malayalam: "ഇതിന്റെ",  meaning: "of this",        example: { malayalam: "ഇതിന്റെ വില എത്ര?",                 transliteration: "Ithinte vila ethra?",              translation: "What is the price of this?" } },
        dative:       { transliteration: "ithinnu", malayalam: "ഇതിന്",    meaning: "to / for this",  example: { malayalam: "ഇതിന് ഒരു പേര് ഉണ്ട്",               transliteration: "Ithinnu oru peru undu",            translation: "This has a name" } },
        accusative:   { transliteration: "ithine",  malayalam: "ഇതിനെ",    meaning: "this (obj.)",    example: { malayalam: "ഞാൻ ഇതിനെ ഇഷ്ടപ്പെടുന്നു",          transliteration: "Njan ithine ishtappedunnu",        translation: "I like this" } },
        instrumental: { transliteration: "ithināl", malayalam: "ഇതിനാൽ",   meaning: "by this",        example: { malayalam: "ഇതിനാൽ ഞാൻ ജയിച്ചു",               transliteration: "Ithināl njan jayichhu",            translation: "By this I won" } },
        locative:     { transliteration: "ithil",   malayalam: "ഇതിൽ",     meaning: "in this",        example: { malayalam: "ഇതിൽ എന്ത് ഉണ്ട്?",                 transliteration: "Ithil enthu undu?",                translation: "What is in this?" } },
        sociative:    { transliteration: "ithōṭu",  malayalam: "ഇതോട്",    meaning: "with this",      example: { malayalam: "ഇതോട് ചേർത്ത് വയ്ക്കൂ",             transliteration: "Ithōṭu cherth vaykoo",             translation: "Keep it together with this" } }
      }
    },
    "athu": {
      malayalam: "അത്",
      meaning: "that",
      forms: {
        nominative:   { transliteration: "athu",    malayalam: "അത്",      meaning: "that",           example: { malayalam: "അത് നല്ലതാണ്",                      transliteration: "Athu nallathaanu",                 translation: "That is good" } },
        genitive:     { transliteration: "athinte", malayalam: "അതിന്റെ",  meaning: "of that",        example: { malayalam: "അതിന്റെ വില കൂടുതലാണ്",             transliteration: "Athinte vila kooduthalanu",        translation: "The price of that is too much" } },
        dative:       { transliteration: "athinnu", malayalam: "അതിന്",    meaning: "to / for that",  example: { malayalam: "അതിന് ഒരു ഉത്തരം ഉണ്ട്",            transliteration: "Athinnu oru uttaram undu",         translation: "That has an answer" } },
        accusative:   { transliteration: "athine",  malayalam: "അതിനെ",    meaning: "that (obj.)",    example: { malayalam: "ഞാൻ അതിനെ മറന്നു",                  transliteration: "Njan athine marannu",              translation: "I forgot that" } },
        instrumental: { transliteration: "athināl", malayalam: "അതിനാൽ",   meaning: "by that",        example: { malayalam: "അതിനാൽ ഞാൻ വന്നു",                  transliteration: "Athināl njan vannu",               translation: "Because of that I came" } },
        locative:     { transliteration: "athil",   malayalam: "അതിൽ",     meaning: "in that",        example: { malayalam: "അതിൽ ഭക്ഷണം ഉണ്ട്",                 transliteration: "Athil bhakshanam undu",            translation: "There is food in that" } },
        sociative:    { transliteration: "athōṭu",  malayalam: "അതോട്",    meaning: "with that",      example: { malayalam: "ഇത് അതോട് ചേർത്ത് വയ്ക്കൂ",         transliteration: "Ithu athōṭu cherth vaykoo",        translation: "Keep this together with that" } }
      }
    },
    "ivide": {
      malayalam: "ഇവിടെ",
      meaning: "here",
      forms: {
        locative:     { transliteration: "ivide",         malayalam: "ഇവിടെ",        meaning: "here",          example: { malayalam: "ഞാൻ ഇവിടെ ഉണ്ട്",               transliteration: "Njan ivide undu",          translation: "I am here" } },
        genitive:     { transliteration: "ivideyuṭe",     malayalam: "ഇവിടെയുടെ",   meaning: "of here",       example: { malayalam: "ഇവിടെയുടെ ഭക്ഷണം നല്ലതാണ്",    transliteration: "Ivideyuṭe bhakshanam nallathaanu", translation: "The food here is good" } },
        dative:       { transliteration: "ividekku",      malayalam: "ഇവിടേക്ക്",    meaning: "to here",       example: { malayalam: "ഇവിടേക്ക് വരൂ",                 transliteration: "Ividekku varoo",           translation: "Come here" } },
        ablative:     { transliteration: "ivide ninnu",   malayalam: "ഇവിടെ നിന്ന്", meaning: "from here",     example: { malayalam: "ഇവിടെ നിന്ന് നേരെ പോകൂ",       transliteration: "Ivide ninnu nere pokoo",   translation: "Go straight from here" } },
        instrumental: { transliteration: "ivide kūṭi",    malayalam: "ഇവിടെ കൂടി",   meaning: "through here",  example: { malayalam: "ഇവിടെ കൂടി പോകണം",              transliteration: "Ivide kūṭi pōkanam",       translation: "Must go through here" } }
      }
    },
    "avide": {
      malayalam: "അവിടെ",
      meaning: "there",
      forms: {
        locative:     { transliteration: "avide",         malayalam: "അവിടെ",        meaning: "there",         example: { malayalam: "അവൻ അവിടെ ഉണ്ട്",               transliteration: "Avan avide undu",          translation: "He is there" } },
        genitive:     { transliteration: "avideyuṭe",     malayalam: "അവിടെയുടെ",   meaning: "of there",      example: { malayalam: "അവിടെയുടെ ഭക്ഷണം നല്ലതാണ്",    transliteration: "Avideyuṭe bhakshanam nallathaanu", translation: "The food there is good" } },
        dative:       { transliteration: "avidekku",      malayalam: "അവിടേക്ക്",    meaning: "to there",      example: { malayalam: "ഞാൻ അവിടേക്ക് പോകുന്നു",        transliteration: "Njan avidekku pokunnu",    translation: "I am going there" } },
        ablative:     { transliteration: "avide ninnu",   malayalam: "അവിടെ നിന്ന്", meaning: "from there",    example: { malayalam: "അവിടെ നിന്ന് ഇവിടെ വരൂ",       transliteration: "Avide ninnu ivide varoo",  translation: "Come here from there" } },
        instrumental: { transliteration: "avide kūṭi",    malayalam: "അവിടെ കൂടി",   meaning: "through there", example: { malayalam: "അവിടെ കൂടി പോകണം",              transliteration: "Avide kūṭi pōkanam",       translation: "Must go through there" } }
      }
    },
    "ivan": {
      malayalam: "ഇവൻ",
      meaning: "this person (m.)",
      forms: {
        nominative:  { transliteration: "ivan",    malayalam: "ഇവൻ",     meaning: "this one (m.)", example: { malayalam: "ഇവൻ ആരാണ്?",               transliteration: "Ivan aaraanu?",          translation: "Who is this person?" } },
        genitive:    { transliteration: "ivante",  malayalam: "ഇവന്റെ",  meaning: "his",           example: { malayalam: "ഇവന്റെ പേര് എന്താണ്?",      transliteration: "Ivante peru enthānu?",   translation: "What is his name?" } },
        dative:      { transliteration: "ivannu",  malayalam: "ഇവന്",    meaning: "to him",        example: { malayalam: "ഇവന് ഭക്ഷണം കൊടുക്കൂ",     transliteration: "Ivannu bhakshanam kodukkoo", translation: "Give him food" } },
        accusative:  { transliteration: "ivane",   malayalam: "ഇവനെ",    meaning: "him",           example: { malayalam: "ഞാൻ ഇവനെ അറിയും",           transliteration: "Njan ivane ariyum",      translation: "I know him" } },
        sociative:   { transliteration: "ivanōṭu", malayalam: "ഇവനോട്",  meaning: "with him",      example: { malayalam: "ഇവനോട് ചോദിക്കൂ",           transliteration: "Ivanōṭu chōdikkoo",     translation: "Ask him" } }
      }
    },
    "ivaḷ": {
      malayalam: "ഇവൾ",
      meaning: "this person (f.)",
      forms: {
        nominative:  { transliteration: "ivaḷ",    malayalam: "ഇവൾ",     meaning: "this one (f.)", example: { malayalam: "ഇവൾ ആരാണ്?",               transliteration: "Ivaḷ aaraanu?",         translation: "Who is this person?" } },
        genitive:    { transliteration: "ivaḷuṭe", malayalam: "ഇവളുടെ",  meaning: "her",           example: { malayalam: "ഇവളുടെ പേര് എന്താണ്?",     transliteration: "Ivaḷuṭe peru enthānu?", translation: "What is her name?" } },
        dative:      { transliteration: "ivaḷkku", malayalam: "ഇവൾക്ക്", meaning: "to her",        example: { malayalam: "ഇവൾക്ക് ഇത് ഇഷ്ടമാണ്",     transliteration: "Ivaḷkku ithu ishtamaanu", translation: "She likes this" } },
        accusative:  { transliteration: "ivaḷē",   malayalam: "ഇവളേ",    meaning: "her (obj.)",    example: { malayalam: "ഞാൻ ഇവളേ കണ്ടു",           transliteration: "Njan ivaḷē kandu",      translation: "I saw her" } },
        sociative:   { transliteration: "ivaḷōṭu", malayalam: "ഇവളോട്",  meaning: "with her",      example: { malayalam: "ഇവളോട് ചോദിക്കൂ",          transliteration: "Ivaḷōṭu chōdikkoo",    translation: "Ask her" } }
      }
    }
  },

  // ── VERBS ────────────────────────────────────────────────
  verbs: {
    "venam": {
      malayalam: "വേണം",
      meaning: "want / need",
      forms: {
        affirmative:       { transliteration: "venam",         malayalam: "വേണം",            meaning: "want / need",         example: { malayalam: "എനിക്ക് ചായ വേണം",                 transliteration: "Enikku chaya venam",              translation: "I want tea" } },
        negative:          { transliteration: "venda",         malayalam: "വേണ്ട",           meaning: "don't want / no need", example: { malayalam: "ഇത് വേണ്ട",                        transliteration: "Ithu venda",                      translation: "I don't want this" } },
        question:          { transliteration: "venō",          malayalam: "വേണോ",            meaning: "do you want?",        example: { malayalam: "നിങ്ങൾക്ക് ചായ വേണോ?",             transliteration: "Ningaḷkku chaya venō?",           translation: "Do you want tea?" } },
        negative_question: { transliteration: "vendeyō",       malayalam: "വേണ്ടയോ",         meaning: "don't you want?",     example: { malayalam: "നിനക്ക് ഇത് വേണ്ടയോ?",             transliteration: "Ninakku ithu vendeyō?",           translation: "Don't you want this?" } },
        reported:          { transliteration: "veṇameṉṉ",      malayalam: "വേണമെന്ന്",       meaning: "that (one) wants",    example: { malayalam: "അവൾ ഇത് വേണമെന്ന് പറഞ്ഞു",        transliteration: "Avaḷ ithu veṇameṉṉ paranju",     translation: "She said she wants this" } },
        past:              { transliteration: "vēṇṭiyirunnu",  malayalam: "വേണ്ടിയിരുന്നു", meaning: "wanted / needed",      example: { malayalam: "എനിക്ക് ഇത് വേണ്ടിയിരുന്നു",      transliteration: "Enikku ithu vēṇṭiyirunnu",        translation: "I had needed this" } }
      }
    },
    "kazhikuka": {
      malayalam: "കഴിക്കുക",
      meaning: "to eat",
      forms: {
        present:                  { transliteration: "kazhikkunnu",   malayalam: "കഴിക്കുന്നു",    meaning: "eating / eats",            example: { malayalam: "ഞാൻ ചോറ് കഴിക്കുന്നു",       transliteration: "Njan choru kazhikkunnu",    translation: "I am eating rice" } },
        past:                     { transliteration: "kazhicchu",     malayalam: "കഴിച്ചു",        meaning: "ate",                      example: { malayalam: "ഞാൻ ദോശ കഴിച്ചു",           transliteration: "Njan dosa kazhicchu",       translation: "I ate dosa" } },
        future:                   { transliteration: "kazhikkum",     malayalam: "കഴിക്കും",       meaning: "will eat",                 example: { malayalam: "ഞാൻ അപ്പം കഴിക്കും",        transliteration: "Njan appam kazhikkum",      translation: "I will eat appam" } },
        question_present:         { transliteration: "kazhikkunno",   malayalam: "കഴിക്കുന്നോ",    meaning: "are you eating?",          example: { malayalam: "നീ ഇപ്പോൾ കഴിക്കുന്നോ?",    transliteration: "Nee ippol kazhikkunno?",    translation: "Are you eating now?" } },
        question_past_colloquial: { transliteration: "tinno",         malayalam: "തിന്നോ",         meaning: "did you eat? (colloquial)", example: { malayalam: "നീ ഇന്ന് തിന്നോ?",          transliteration: "Nee innu tinno?",          translation: "Did you eat today?" } },
        negative_present:         { transliteration: "kazhikkunilla", malayalam: "കഴിക്കുന്നില്ല", meaning: "not eating",               example: { malayalam: "ഞാൻ ഇപ്പോൾ കഴിക്കുന്നില്ല", transliteration: "Njan ippol kazhikkunilla",  translation: "I am not eating now" } },
        negative_future:          { transliteration: "kazhikkilla",   malayalam: "കഴിക്കില്ല",     meaning: "won't eat",                example: { malayalam: "ഞാൻ ഇത് കഴിക്കില്ല",        transliteration: "Njan ithu kazhikkilla",     translation: "I won't eat this" } },
        imperative:               { transliteration: "kazhi",         malayalam: "കഴി",             meaning: "eat! (informal)",          example: { malayalam: "വേഗം കഴി",                  transliteration: "Vegam kazhi",              translation: "Eat quickly" } },
        negative_imperative:      { transliteration: "kazhikkaruthe", malayalam: "കഴിക്കരുത്",     meaning: "don't eat!",               example: { malayalam: "ഇത് കഴിക്കരുത്",            transliteration: "Ithu kazhikkaruthe",       translation: "Don't eat this" } }
      }
    },
    "varuka": {
      malayalam: "വരുക",
      meaning: "to come",
      forms: {
        present:            { transliteration: "varunnu",   malayalam: "വരുന്നു",     meaning: "is coming",     example: { malayalam: "ഞാൻ ഇപ്പോൾ വരുന്നു",         transliteration: "Njan ippol varunnu",     translation: "I am coming now" } },
        past:               { transliteration: "vannu",     malayalam: "വന്നു",       meaning: "came",          example: { malayalam: "അവൾ ഇന്ന് വന്നു",             transliteration: "Avaḷ innu vannu",        translation: "She came today" } },
        future:             { transliteration: "varum",     malayalam: "വരും",        meaning: "will come",     example: { malayalam: "ഞാൻ നാളെ വരും",               transliteration: "Njan naale varum",       translation: "I will come tomorrow" } },
        question:           { transliteration: "varunno",   malayalam: "വരുന്നോ",     meaning: "are you coming?", example: { malayalam: "നീ ഇന്ന് വരുന്നോ?",           transliteration: "Nee innu varunno?",      translation: "Are you coming today?" } },
        negative_present:   { transliteration: "varunilla", malayalam: "വരുന്നില്ല",  meaning: "not coming",    example: { malayalam: "ഞാൻ ഇന്ന് വരുന്നില്ല",        transliteration: "Njan innu varunilla",    translation: "I am not coming today" } },
        negative_future:    { transliteration: "varilla",   malayalam: "വരില്ല",      meaning: "won't come",    example: { malayalam: "ഞാൻ ഇനി വരില്ല",              transliteration: "Njan ini varilla",       translation: "I won't come again" } },
        imperative:         { transliteration: "vā",        malayalam: "വാ",          meaning: "come! (informal)", example: { malayalam: "ഇവിടെ വാ",                  transliteration: "Ivide vā",               translation: "Come here" } },
        negative_imperative:{ transliteration: "vararuthe", malayalam: "വരരുത്",      meaning: "don't come!",   example: { malayalam: "ഇനി ഇവിടെ വരരുത്",           transliteration: "Ini ivide vararuthe",    translation: "Don't come here again" } }
      }
    },
    "pokuka": {
      malayalam: "പോകുക",
      meaning: "to go",
      forms: {
        present:            { transliteration: "pokunnu",   malayalam: "പോകുന്നു",    meaning: "is going",      example: { malayalam: "ഞാൻ ഇപ്പോൾ പോകുന്നു",         transliteration: "Njan ippol pokunnu",     translation: "I am going now" } },
        past:               { transliteration: "pōyi",      malayalam: "പോയി",        meaning: "went",          example: { malayalam: "അവൻ ബീച്ചിൽ പോയി",            transliteration: "Avan beachil pōyi",      translation: "He went to the beach" } },
        future:             { transliteration: "pōkum",     malayalam: "പോകും",       meaning: "will go",       example: { malayalam: "ഞാൻ നാളെ കേരളത്തിൽ പോകും",   transliteration: "Njan naale Keralathil pōkum", translation: "I will go to Kerala tomorrow" } },
        question:           { transliteration: "pokunno",   malayalam: "പോകുന്നോ",    meaning: "are you going?", example: { malayalam: "നീ ഇന്ന് പോകുന്നോ?",          transliteration: "Nee innu pokunno?",      translation: "Are you going today?" } },
        negative_present:   { transliteration: "pokunilla", malayalam: "പോകുന്നില്ല", meaning: "not going",     example: { malayalam: "ഞാൻ ഇന്ന് പോകുന്നില്ല",       transliteration: "Njan innu pokunilla",    translation: "I am not going today" } },
        negative_future:    { transliteration: "pokilla",   malayalam: "പോകില്ല",     meaning: "won't go",      example: { malayalam: "ഞാൻ ഇനി അവിടെ പോകില്ല",      transliteration: "Njan ini avide pokilla", translation: "I won't go there again" } },
        imperative:         { transliteration: "pō",        malayalam: "പോ",          meaning: "go! (informal)", example: { malayalam: "വേഗം പോ",                    transliteration: "Vegam pō",               translation: "Go quickly" } },
        negative_imperative:{ transliteration: "pōkaruthe", malayalam: "പോകരുത്",    meaning: "don't go!",     example: { malayalam: "ഇവിടെ നിന്ന് പോകരുത്",       transliteration: "Ivide ninnu pōkaruthe",  translation: "Don't go from here" } }
      }
    },
    "cheyyuka": {
      malayalam: "ചെയ്യുക",
      meaning: "to do",
      forms: {
        present:            { transliteration: "cheyyunnu",   malayalam: "ചെയ്യുന്നു",    meaning: "doing",         example: { malayalam: "ഞാൻ ജോലി ചെയ്യുന്നു",         transliteration: "Njan joli cheyyunnu",     translation: "I am working" } },
        past:               { transliteration: "cheythu",     malayalam: "ചെയ്തു",        meaning: "did",           example: { malayalam: "ഞാൻ ഇത് ചെയ്തു",              transliteration: "Njan ithu cheythu",       translation: "I did this" } },
        future:             { transliteration: "cheyyum",     malayalam: "ചെയ്യും",       meaning: "will do",       example: { malayalam: "ഞാൻ ഇത് ചെയ്യും",             transliteration: "Njan ithu cheyyum",       translation: "I will do this" } },
        question:           { transliteration: "cheyyunno",   malayalam: "ചെയ്യുന്നോ",    meaning: "are you doing?", example: { malayalam: "നീ ഇത് ചെയ്യുന്നോ?",           transliteration: "Nee ithu cheyyunno?",     translation: "Are you doing this?" } },
        negative_present:   { transliteration: "cheyyunilla", malayalam: "ചെയ്യുന്നില്ല", meaning: "not doing",     example: { malayalam: "ഞാൻ ഇത് ചെയ്യുന്നില്ല",       transliteration: "Njan ithu cheyyunilla",   translation: "I am not doing this" } },
        negative_future:    { transliteration: "cheyyilla",   malayalam: "ചെയ്യില്ല",     meaning: "won't do",      example: { malayalam: "ഞാൻ ഇത് ചെയ്യില്ല",            transliteration: "Njan ithu cheyyilla",     translation: "I won't do this" } },
        imperative:         { transliteration: "cheyyū",      malayalam: "ചെയ്യൂ",        meaning: "do it!",        example: { malayalam: "ഇത് ഇപ്പോൾ ചെയ്യൂ",           transliteration: "Ithu ippol cheyyū",       translation: "Do this now" } },
        negative_imperative:{ transliteration: "cheyyaruthe", malayalam: "ചെയ്യരുത്",    meaning: "don't do!",     example: { malayalam: "ഇത് ഒരിക്കലും ചെയ്യരുത്",     transliteration: "Ithu orikkalum cheyyaruthe", translation: "Never do this" } }
      }
    },
    "parayuka": {
      malayalam: "പറയുക",
      meaning: "to say / tell",
      forms: {
        present:            { transliteration: "parayunnu",   malayalam: "പറയുന്നു",    meaning: "saying",        example: { malayalam: "അവൾ എന്ത് പറയുന്നു?",         transliteration: "Avaḷ enthu parayunnu?",   translation: "What is she saying?" } },
        past:               { transliteration: "paranju",     malayalam: "പറഞ്ഞു",      meaning: "said / told",   example: { malayalam: "അവൻ ഇത് പറഞ്ഞു",              transliteration: "Avan ithu paranju",       translation: "He said this" } },
        future:             { transliteration: "parayum",     malayalam: "പറയും",       meaning: "will say",      example: { malayalam: "ഞാൻ ഇത് അവനോട് പറയും",       transliteration: "Njan ithu avanōṭu parayum", translation: "I will tell him this" } },
        question:           { transliteration: "parayunno",   malayalam: "പറയുന്നോ",    meaning: "are you saying?", example: { malayalam: "നീ ഇത് പറയുന്നോ?",           transliteration: "Nee ithu parayunno?",     translation: "Are you saying this?" } },
        negative_present:   { transliteration: "parayunilla", malayalam: "പറയുന്നില്ല", meaning: "not saying",    example: { malayalam: "ഞാൻ ഒന്നും പറയുന്നില്ല",      transliteration: "Njan onnnum parayunilla", translation: "I am not saying anything" } },
        negative_future:    { transliteration: "parayilla",   malayalam: "പറയില്ല",     meaning: "won't say",     example: { malayalam: "ഞാൻ ഇത് പറയില്ല",             transliteration: "Njan ithu parayilla",     translation: "I won't say this" } },
        imperative:         { transliteration: "parā",        malayalam: "പറ",           meaning: "say it!",       example: { malayalam: "ഇത് ഇപ്പോൾ പറ",              transliteration: "Ithu ippol parā",         translation: "Say this now" } },
        negative_imperative:{ transliteration: "pararuthe",   malayalam: "പറയരുത്",     meaning: "don't say!",    example: { malayalam: "ഇത് ഒരിക്കലും പറയരുത്",      transliteration: "Ithu orikkalum pararuthe", translation: "Never say this" } }
      }
    },
    "ariyuka": {
      malayalam: "അറിയുക",
      meaning: "to know",
      forms: {
        present:       { transliteration: "ariyunnu",   malayalam: "അറിയുന്നു",  meaning: "knows",           example: { malayalam: "ഞാൻ ഇത് അറിയുന്നു",            transliteration: "Njan ithu ariyunnu",       translation: "I know this" } },
        past:          { transliteration: "arinjhu",   malayalam: "അറിഞ്ഞു",    meaning: "knew / found out", example: { malayalam: "ഞാൻ ഇന്ന് ഇത് അറിഞ്ഞു",       transliteration: "Njan innu ithu arinjhu",   translation: "I found out today" } },
        future:        { transliteration: "ariyum",    malayalam: "അറിയും",     meaning: "will know",        example: { malayalam: "ഞാൻ ഇത് അറിയും",               transliteration: "Njan ithu ariyum",         translation: "I will know this" } },
        question:      { transliteration: "ariyunno",  malayalam: "അറിയുന്നോ",  meaning: "do you know?",     example: { malayalam: "നിങ്ങൾക്ക് Malayalam അറിയുന്നോ?", transliteration: "Ningaḷkku Malayalam ariyunno?", translation: "Do you know Malayalam?" } },
        negative:      { transliteration: "ariyilla",  malayalam: "അറിയില്ല",   meaning: "don't know",       example: { malayalam: "എനിക്ക് Malayalam അറിയില്ല",    transliteration: "Enikku Malayalam ariyilla", translation: "I don't know Malayalam" } },
        negative_past: { transliteration: "arinjhilla",malayalam: "അറിഞ്ഞില്ല", meaning: "didn't know",      example: { malayalam: "ഞാൻ ഇത് അറിഞ്ഞില്ല",           transliteration: "Njan ithu arinjhilla",     translation: "I didn't know this" } }
      }
    },
    "āvuka": {
      malayalam: "ആവുക",
      meaning: "to become / to be",
      forms: {
        present:  { transliteration: "ākunnu", malayalam: "ആകുന്നു",  meaning: "is / becoming",   example: { malayalam: "ഞാൻ ഡോക്ടർ ആകുന്നു",     transliteration: "Njan doctor ākunnu",   translation: "I am becoming a doctor" } },
        past:     { transliteration: "āyi",    malayalam: "ആയി",      meaning: "was / became",    example: { malayalam: "അത് ശരി ആയി",             transliteration: "Athu shari āyi",       translation: "That turned out fine" } },
        future:   { transliteration: "ākum",   malayalam: "ആകും",     meaning: "will be / become", example: { malayalam: "ഇത് ശരി ആകും",            transliteration: "Ithu shari ākum",      translation: "This will be fine" } },
        question: { transliteration: "ākunno", malayalam: "ആകുന്നോ",  meaning: "is it?",          example: { malayalam: "ഇത് ശരി ആകുന്നോ?",        transliteration: "Ithu shari ākunno?",   translation: "Will this be alright?" } },
        negative: { transliteration: "āvilla", malayalam: "ആവില്ല",   meaning: "won't / can't be", example: { malayalam: "ഇത് ഇനി ആവില്ല",          transliteration: "Ithu ini āvilla",      translation: "This won't happen again" } }
      }
    }
  }

};
