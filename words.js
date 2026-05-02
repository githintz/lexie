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
        nominative:   { transliteration: "njan",    malayalam: "ഞാൻ",     meaning: "I",           example: { malayalam: "ഞാൻ കേരളത്തിൽ ഉണ്ട്",          transliteration: "Njan Keralathil undu",          translation: "I am in Kerala",      words: [{w:"Njan",m:"I"},{w:"Keralathil",m:"in Kerala"},{w:"undu",m:"am"}] } },
        genitive:     { transliteration: "ente",    malayalam: "എന്റെ",   meaning: "my",          example: { malayalam: "ഇത് എന്റെ ബാഗ് ആണ്",             transliteration: "Ithu ente bag aanu",             translation: "This is my bag",      words: [{w:"Ithu",m:"this"},{w:"ente",m:"my"},{w:"bag",m:"bag"},{w:"aanu",m:"is"}] } },
        dative:       { transliteration: "enikku",  malayalam: "എനിക്ക്", meaning: "to / for me", example: { malayalam: "എനിക്ക് ചായ വേണം",               transliteration: "Enikku chaya venam",              translation: "I want tea",          words: [{w:"Enikku",m:"to me"},{w:"chaya",m:"tea"},{w:"venam",m:"want"}] } },
        accusative:   { transliteration: "enne",    malayalam: "എന്നെ",   meaning: "me",          example: { malayalam: "അവൾ എന്നെ വിളിച്ചു",              transliteration: "Avaḷ enne vilichhu",             translation: "She called me",       words: [{w:"Avaḷ",m:"she"},{w:"enne",m:"me"},{w:"vilichhu",m:"called"}] } },
        instrumental: { transliteration: "ennāl",   malayalam: "എന്നാൽ",  meaning: "by me",       example: { malayalam: "ഇത് എന്നാൽ ചെയ്തു",              transliteration: "Ithu ennāl cheythu",             translation: "This was done by me", words: [{w:"Ithu",m:"this"},{w:"ennāl",m:"by me"},{w:"cheythu",m:"done"}] } },
        locative:     { transliteration: "ennil",   malayalam: "എന്നിൽ",  meaning: "in / on me",  example: { malayalam: "അവൾക്ക് എന്നിൽ വിശ്വാസം ഉണ്ട്",  transliteration: "Avaḷkku ennil vishwaasam undu",  translation: "She has trust in me", words: [{w:"Avaḷkku",m:"she"},{w:"ennil",m:"in me"},{w:"vishwaasam",m:"trust"},{w:"undu",m:"there is"}] } },
        sociative:    { transliteration: "ennōṭu",  malayalam: "എന്നോട്", meaning: "with me",     example: { malayalam: "അവൻ എന്നോട് സംസാരിച്ചു",          transliteration: "Avan ennōṭu samsaarichhu",       translation: "He spoke with me",    words: [{w:"Avan",m:"he"},{w:"ennōṭu",m:"with me"},{w:"samsaarichhu",m:"spoke"}] } }
      }
    },
    "nee": {
      malayalam: "നീ",
      meaning: "you (informal)",
      forms: {
        nominative:   { transliteration: "nee",      malayalam: "നീ",       meaning: "you",           example: { malayalam: "നീ ഇവിടെ ഇരിക്കൂ",                  transliteration: "Nee ivide irikkoo",                  translation: "You sit here",           words: [{w:"Nee",m:"you"},{w:"ivide",m:"here"},{w:"irikkoo",m:"sit"}] } },
        genitive:     { transliteration: "ninte",    malayalam: "നിന്റെ",   meaning: "your",          example: { malayalam: "ഇത് നിന്റെ പുസ്തകം ആണ്",            transliteration: "Ithu ninte pusthakam aanu",          translation: "This is your book",      words: [{w:"Ithu",m:"this"},{w:"ninte",m:"your"},{w:"pusthakam",m:"book"},{w:"aanu",m:"is"}] } },
        dative:       { transliteration: "ninakku",  malayalam: "നിനക്ക്",  meaning: "to / for you",  example: { malayalam: "നിനക്ക് ഇത് ഇഷ്ടമാണോ?",              transliteration: "Ninakku ithu ishtamaano?",           translation: "Do you like this?",      words: [{w:"Ninakku",m:"to you"},{w:"ithu",m:"this"},{w:"ishtamaano",m:"do you like?"}] } },
        accusative:   { transliteration: "ninnē",    malayalam: "നിന്നേ",   meaning: "you (obj.)",    example: { malayalam: "ഞാൻ നിന്നേ കണ്ടു",                  transliteration: "Njan ninnē kandu",                   translation: "I saw you",              words: [{w:"Njan",m:"I"},{w:"ninnē",m:"you"},{w:"kandu",m:"saw"}] } },
        instrumental: { transliteration: "ninnāl",   malayalam: "നിന്നാൽ",  meaning: "by you",        example: { malayalam: "ഇത് നിന്നാൽ ആകും",                  transliteration: "Ithu ninnāl aakum",                  translation: "This can be done by you", words: [{w:"Ithu",m:"this"},{w:"ninnāl",m:"by you"},{w:"aakum",m:"can be done"}] } },
        locative:     { transliteration: "ninnil",   malayalam: "നിന്നിൽ",  meaning: "in / on you",   example: { malayalam: "ഞങ്ങൾക്ക് നിന്നിൽ വിശ്വാസം ഉണ്ട്",  transliteration: "Njangaḷkku ninnil vishwaasam undu",  translation: "We have trust in you",   words: [{w:"Njangaḷkku",m:"we"},{w:"ninnil",m:"in you"},{w:"vishwaasam",m:"trust"},{w:"undu",m:"there is"}] } },
        sociative:    { transliteration: "ninnōṭu",  malayalam: "നിന്നോട്", meaning: "with you",      example: { malayalam: "ഞാൻ നിന്നോട് ചോദിക്കട്ടേ",          transliteration: "Njan ninnōṭu chōdikkaṭṭē",          translation: "Let me ask you",         words: [{w:"Njan",m:"I"},{w:"ninnōṭu",m:"with you"},{w:"chōdikkaṭṭē",m:"let me ask"}] } }
      }
    },
    "ningaḷ": {
      malayalam: "നിങ്ങൾ",
      meaning: "you (formal / plural)",
      forms: {
        nominative:   { transliteration: "ningaḷ",     malayalam: "നിങ്ങൾ",     meaning: "you (formal)",  example: { malayalam: "നിങ്ങൾ ഇവിടെ ഇരിക്കൂ",                   transliteration: "Ningaḷ ivide irikkoo",                  translation: "Please sit here", words: [{w:"Ningaḷ",m:"you (formal)"},{w:"ivide",m:"here"},{w:"irikkoo",m:"sit"}] } },
        genitive:     { transliteration: "ningaḷuṭe",  malayalam: "നിങ്ങളുടെ",  meaning: "your",          example: { malayalam: "ഇത് നിങ്ങളുടെ മുറി ആണ്",              transliteration: "Ithu ningaḷuṭe muri aanu",              translation: "This is your room", words: [{w:"Ithu",m:"this"},{w:"ningaḷuṭe",m:"your"},{w:"muri",m:"room"},{w:"aanu",m:"is"}] } },
        dative:       { transliteration: "ningaḷkku",  malayalam: "നിങ്ങൾക്ക്", meaning: "to / for you",  example: { malayalam: "നിങ്ങൾക്ക് ചായ വേണോ?",                 transliteration: "Ningaḷkku chaya venō?",                 translation: "Do you want tea?", words: [{w:"Ningaḷkku",m:"to you"},{w:"chaya",m:"tea"},{w:"venō",m:"do you want?"}] } },
        accusative:   { transliteration: "ningaḷē",    malayalam: "നിങ്ങളേ",    meaning: "you (obj.)",    example: { malayalam: "ഞാൻ നിങ്ങളേ കണ്ടു",                    transliteration: "Njan ningaḷē kandu",                    translation: "I saw you", words: [{w:"Njan",m:"I"},{w:"ningaḷē",m:"you"},{w:"kandu",m:"saw"}] } },
        instrumental: { transliteration: "ningaḷāl",   malayalam: "നിങ്ങളാൽ",   meaning: "by you",        example: { malayalam: "ഇത് നിങ്ങളാൽ ചെയ്തു",                  transliteration: "Ithu ningaḷāl cheythu",                 translation: "This was done by you", words: [{w:"Ithu",m:"this"},{w:"ningaḷāl",m:"by you"},{w:"cheythu",m:"done"}] } },
        locative:     { transliteration: "ningaḷil",   malayalam: "നിങ്ങളിൽ",   meaning: "in / on you",   example: { malayalam: "ഞങ്ങൾക്ക് നിങ്ങളിൽ വിശ്വാസം ഉണ്ട്",   transliteration: "Njangaḷkku ningaḷil vishwaasam undu",   translation: "We have trust in you", words: [{w:"Njangaḷkku",m:"we"},{w:"ningaḷil",m:"in you"},{w:"vishwaasam",m:"trust"},{w:"undu",m:"there is"}] } },
        sociative:    { transliteration: "ningaḷōṭu",  malayalam: "നിങ്ങളോട്",  meaning: "with you",      example: { malayalam: "ഞാൻ നിങ്ങളോട് സംസാരിക്കാം",            transliteration: "Njan ningaḷōṭu samsaarikaam",           translation: "I will talk with you", words: [{w:"Njan",m:"I"},{w:"ningaḷōṭu",m:"with you"},{w:"samsaarikaam",m:"will talk"}] } }
      }
    },
    "avan": {
      malayalam: "അവൻ",
      meaning: "he",
      forms: {
        nominative:   { transliteration: "avan",    malayalam: "അവൻ",     meaning: "he",           example: { malayalam: "അവൻ ഇവിടെ വരുന്നു",                transliteration: "Avan ivide varunnu",              translation: "He is coming here",    words: [{w:"Avan",m:"he"},{w:"ivide",m:"here"},{w:"varunnu",m:"is coming"}] } },
        genitive:     { transliteration: "avante",  malayalam: "അവന്റെ",  meaning: "his",          example: { malayalam: "ഇത് അവന്റെ ഫോൺ ആണ്",             transliteration: "Ithu avante phone aanu",          translation: "This is his phone",    words: [{w:"Ithu",m:"this"},{w:"avante",m:"his"},{w:"phone",m:"phone"},{w:"aanu",m:"is"}] } },
        dative:       { transliteration: "avannu",  malayalam: "അവന്",    meaning: "to / for him", example: { malayalam: "അവന് ഭക്ഷണം കൊടുക്കൂ",             transliteration: "Avannu bhakshanam kodukkoo",      translation: "Give him food",        words: [{w:"Avannu",m:"to him"},{w:"bhakshanam",m:"food"},{w:"kodukkoo",m:"give"}] } },
        accusative:   { transliteration: "avane",   malayalam: "അവനെ",    meaning: "him",          example: { malayalam: "ഞാൻ അവനെ കണ്ടു",                  transliteration: "Njan avane kandu",                translation: "I saw him",            words: [{w:"Njan",m:"I"},{w:"avane",m:"him"},{w:"kandu",m:"saw"}] } },
        instrumental: { transliteration: "avanāl",  malayalam: "അവനാൽ",   meaning: "by him",       example: { malayalam: "ഇത് അവനാൽ ചെയ്തു",                transliteration: "Ithu avanāl cheythu",             translation: "This was done by him", words: [{w:"Ithu",m:"this"},{w:"avanāl",m:"by him"},{w:"cheythu",m:"done"}] } },
        locative:     { transliteration: "avanil",  malayalam: "അവനിൽ",   meaning: "in / on him",  example: { malayalam: "ഞങ്ങൾക്ക് അവനിൽ വിശ്വാസം ഉണ്ട്",  transliteration: "Njangaḷkku avanil vishwaasam undu", translation: "We have trust in him", words: [{w:"Njangaḷkku",m:"we"},{w:"avanil",m:"in him"},{w:"vishwaasam",m:"trust"},{w:"undu",m:"there is"}] } },
        sociative:    { transliteration: "avanōṭu", malayalam: "അവനോട്",  meaning: "with him",     example: { malayalam: "ഞാൻ അവനോട് സംസാരിച്ചു",            transliteration: "Njan avanōṭu samsaarichhu",       translation: "I spoke with him",     words: [{w:"Njan",m:"I"},{w:"avanōṭu",m:"with him"},{w:"samsaarichhu",m:"spoke"}] } }
      }
    },
    "avaḷ": {
      malayalam: "അവൾ",
      meaning: "she",
      forms: {
        nominative:   { transliteration: "avaḷ",    malayalam: "അവൾ",     meaning: "she",           example: { malayalam: "അവൾ ഇവിടെ ഉണ്ട്",                   transliteration: "Avaḷ ivide undu",                  translation: "She is here", words: [{w:"Avaḷ",m:"she"},{w:"ivide",m:"here"},{w:"undu",m:"is"}] } },
        genitive:     { transliteration: "avaḷuṭe", malayalam: "അവളുടെ",  meaning: "her",           example: { malayalam: "ഇത് അവളുടെ ബാഗ് ആണ്",              transliteration: "Ithu avaḷuṭe bag aanu",            translation: "This is her bag", words: [{w:"Ithu",m:"this"},{w:"avaḷuṭe",m:"her"},{w:"bag",m:"bag"},{w:"aanu",m:"is"}] } },
        dative:       { transliteration: "avaḷkku", malayalam: "അവൾക്ക്", meaning: "to / for her",  example: { malayalam: "അവൾക്ക് ചായ വേണം",                  transliteration: "Avaḷkku chaya venam",              translation: "She wants tea", words: [{w:"Avaḷkku",m:"she"},{w:"chaya",m:"tea"},{w:"venam",m:"wants"}] } },
        accusative:   { transliteration: "avaḷē",   malayalam: "അവളേ",    meaning: "her (obj.)",    example: { malayalam: "ഞാൻ അവളേ കണ്ടു",                    transliteration: "Njan avaḷē kandu",                 translation: "I saw her", words: [{w:"Njan",m:"I"},{w:"avaḷē",m:"her"},{w:"kandu",m:"saw"}] } },
        instrumental: { transliteration: "avaḷāl",  malayalam: "അവളാൽ",   meaning: "by her",        example: { malayalam: "ഇത് അവളാൽ ചെയ്തു",                  transliteration: "Ithu avaḷāl cheythu",              translation: "This was done by her", words: [{w:"Ithu",m:"this"},{w:"avaḷāl",m:"by her"},{w:"cheythu",m:"done"}] } },
        locative:     { transliteration: "avaḷil",  malayalam: "അവളിൽ",   meaning: "in / on her",   example: { malayalam: "ഞങ്ങൾക്ക് അവളിൽ വിശ്വാസം ഉണ്ട്",   transliteration: "Njangaḷkku avaḷil vishwaasam undu", translation: "We have trust in her", words: [{w:"Njangaḷkku",m:"we"},{w:"avaḷil",m:"in her"},{w:"vishwaasam",m:"trust"},{w:"undu",m:"there is"}] } },
        sociative:    { transliteration: "avaḷōṭu", malayalam: "അവളോട്",  meaning: "with her",      example: { malayalam: "ഞാൻ അവളോട് സംസാരിച്ചു",             transliteration: "Njan avaḷōṭu samsaarichhu",        translation: "I spoke with her", words: [{w:"Njan",m:"I"},{w:"avaḷōṭu",m:"with her"},{w:"samsaarichhu",m:"spoke"}] } }
      }
    },
    "avar": {
      malayalam: "അവർ",
      meaning: "they / he/she (formal)",
      forms: {
        nominative:   { transliteration: "avar",    malayalam: "അവർ",     meaning: "they",           example: { malayalam: "അവർ ഇവിടെ ഉണ്ട്",                   transliteration: "Avar ivide undu",                   translation: "They are here", words: [{w:"Avar",m:"they"},{w:"ivide",m:"here"},{w:"undu",m:"are"}] } },
        genitive:     { transliteration: "avaruṭe", malayalam: "അവരുടെ",  meaning: "their",          example: { malayalam: "ഇത് അവരുടെ വീട് ആണ്",               transliteration: "Ithu avaruṭe veedu aanu",           translation: "This is their house", words: [{w:"Ithu",m:"this"},{w:"avaruṭe",m:"their"},{w:"veedu",m:"house"},{w:"aanu",m:"is"}] } },
        dative:       { transliteration: "avarkku", malayalam: "അവർക്ക്", meaning: "to / for them",  example: { malayalam: "അവർക്ക് ഇത് കൊടുക്കൂ",               transliteration: "Avarkku ithu kodukkoo",             translation: "Give this to them", words: [{w:"Avarkku",m:"to them"},{w:"ithu",m:"this"},{w:"kodukkoo",m:"give"}] } },
        accusative:   { transliteration: "avarē",   malayalam: "അവരേ",    meaning: "them (obj.)",    example: { malayalam: "ഞാൻ അവരേ കണ്ടു",                    transliteration: "Njan avarē kandu",                  translation: "I saw them", words: [{w:"Njan",m:"I"},{w:"avarē",m:"them"},{w:"kandu",m:"saw"}] } },
        instrumental: { transliteration: "avarāl",  malayalam: "അവരാൽ",   meaning: "by them",        example: { malayalam: "ഇത് അവരാൽ ചെയ്തു",                  transliteration: "Ithu avarāl cheythu",               translation: "This was done by them", words: [{w:"Ithu",m:"this"},{w:"avarāl",m:"by them"},{w:"cheythu",m:"done"}] } },
        locative:     { transliteration: "avaril",  malayalam: "അവരിൽ",   meaning: "among them",     example: { malayalam: "ഞാൻ അവരിൽ ഒരാൾ ആണ്",               transliteration: "Njan avaril orāḷ aanu",             translation: "I am one among them", words: [{w:"Njan",m:"I"},{w:"avaril",m:"among them"},{w:"orāḷ",m:"one person"},{w:"aanu",m:"am"}] } },
        sociative:    { transliteration: "avarōṭu", malayalam: "അവരോട്",  meaning: "with them",      example: { malayalam: "ഞാൻ അവരോട് ചോദിച്ചു",               transliteration: "Njan avarōṭu chōdichhu",            translation: "I asked them", words: [{w:"Njan",m:"I"},{w:"avarōṭu",m:"with them"},{w:"chōdichhu",m:"asked"}] } }
      }
    }
  },

  // ── DEMONSTRATIVES ───────────────────────────────────────
  demonstratives: {
    "ithu": {
      malayalam: "ഇത്",
      meaning: "this",
      forms: {
        nominative:   { transliteration: "ithu",    malayalam: "ഇത്",      meaning: "this",           example: { malayalam: "ഇത് എന്താണ്?",                      transliteration: "Ithu enthānu?",                    translation: "What is this?", words: [{w:"Ithu",m:"this"},{w:"enthānu",m:"what is?"}] } },
        genitive:     { transliteration: "ithinte", malayalam: "ഇതിന്റെ",  meaning: "of this",        example: { malayalam: "ഇതിന്റെ വില എത്ര?",                 transliteration: "Ithinte vila ethra?",              translation: "What is the price of this?", words: [{w:"Ithinte",m:"of this"},{w:"vila",m:"price"},{w:"ethra",m:"how much?"}] } },
        dative:       { transliteration: "ithinnu", malayalam: "ഇതിന്",    meaning: "to / for this",  example: { malayalam: "ഇതിന് ഒരു പേര് ഉണ്ട്",               transliteration: "Ithinnu oru peru undu",            translation: "This has a name", words: [{w:"Ithinnu",m:"to this"},{w:"oru",m:"a"},{w:"peru",m:"name"},{w:"undu",m:"there is"}] } },
        accusative:   { transliteration: "ithine",  malayalam: "ഇതിനെ",    meaning: "this (obj.)",    example: { malayalam: "ഞാൻ ഇതിനെ ഇഷ്ടപ്പെടുന്നു",          transliteration: "Njan ithine ishtappedunnu",        translation: "I like this", words: [{w:"Njan",m:"I"},{w:"ithine",m:"this"},{w:"ishtappedunnu",m:"like"}] } },
        instrumental: { transliteration: "ithināl", malayalam: "ഇതിനാൽ",   meaning: "by this",        example: { malayalam: "ഇതിനാൽ ഞാൻ ജയിച്ചു",               transliteration: "Ithināl njan jayichhu",            translation: "By this I won", words: [{w:"Ithināl",m:"by this"},{w:"njan",m:"I"},{w:"jayichhu",m:"won"}] } },
        locative:     { transliteration: "ithil",   malayalam: "ഇതിൽ",     meaning: "in this",        example: { malayalam: "ഇതിൽ എന്ത് ഉണ്ട്?",                 transliteration: "Ithil enthu undu?",                translation: "What is in this?", words: [{w:"Ithil",m:"in this"},{w:"enthu",m:"what"},{w:"undu",m:"is there?"}] } },
        sociative:    { transliteration: "ithōṭu",  malayalam: "ഇതോട്",    meaning: "with this",      example: { malayalam: "ഇതോട് ചേർത്ത് വയ്ക്കൂ",             transliteration: "Ithōṭu cherth vaykoo",             translation: "Keep it together with this", words: [{w:"Ithōṭu",m:"with this"},{w:"cherth",m:"together"},{w:"vaykoo",m:"keep"}] } }
      }
    },
    "athu": {
      malayalam: "അത്",
      meaning: "that",
      forms: {
        nominative:   { transliteration: "athu",    malayalam: "അത്",      meaning: "that",           example: { malayalam: "അത് നല്ലതാണ്",                      transliteration: "Athu nallathaanu",                 translation: "That is good", words: [{w:"Athu",m:"that"},{w:"nallathaanu",m:"is good"}] } },
        genitive:     { transliteration: "athinte", malayalam: "അതിന്റെ",  meaning: "of that",        example: { malayalam: "അതിന്റെ വില കൂടുതലാണ്",             transliteration: "Athinte vila kooduthalanu",        translation: "The price of that is too much", words: [{w:"Athinte",m:"of that"},{w:"vila",m:"price"},{w:"kooduthalanu",m:"is too much"}] } },
        dative:       { transliteration: "athinnu", malayalam: "അതിന്",    meaning: "to / for that",  example: { malayalam: "അതിന് ഒരു ഉത്തരം ഉണ്ട്",            transliteration: "Athinnu oru uttaram undu",         translation: "That has an answer", words: [{w:"Athinnu",m:"to that"},{w:"oru",m:"a"},{w:"uttaram",m:"answer"},{w:"undu",m:"there is"}] } },
        accusative:   { transliteration: "athine",  malayalam: "അതിനെ",    meaning: "that (obj.)",    example: { malayalam: "ഞാൻ അതിനെ മറന്നു",                  transliteration: "Njan athine marannu",              translation: "I forgot that", words: [{w:"Njan",m:"I"},{w:"athine",m:"that"},{w:"marannu",m:"forgot"}] } },
        instrumental: { transliteration: "athināl", malayalam: "അതിനാൽ",   meaning: "by that",        example: { malayalam: "അതിനാൽ ഞാൻ വന്നു",                  transliteration: "Athināl njan vannu",               translation: "Because of that I came", words: [{w:"Athināl",m:"because of that"},{w:"njan",m:"I"},{w:"vannu",m:"came"}] } },
        locative:     { transliteration: "athil",   malayalam: "അതിൽ",     meaning: "in that",        example: { malayalam: "അതിൽ ഭക്ഷണം ഉണ്ട്",                 transliteration: "Athil bhakshanam undu",            translation: "There is food in that", words: [{w:"Athil",m:"in that"},{w:"bhakshanam",m:"food"},{w:"undu",m:"there is"}] } },
        sociative:    { transliteration: "athōṭu",  malayalam: "അതോട്",    meaning: "with that",      example: { malayalam: "ഇത് അതോട് ചേർത്ത് വയ്ക്കൂ",         transliteration: "Ithu athōṭu cherth vaykoo",        translation: "Keep this together with that", words: [{w:"Ithu",m:"this"},{w:"athōṭu",m:"with that"},{w:"cherth",m:"together"},{w:"vaykoo",m:"keep"}] } }
      }
    },
    "ivide": {
      malayalam: "ഇവിടെ",
      meaning: "here",
      forms: {
        locative:     { transliteration: "ivide",         malayalam: "ഇവിടെ",        meaning: "here",          example: { malayalam: "ഞാൻ ഇവിടെ ഉണ്ട്",               transliteration: "Njan ivide undu",          translation: "I am here", words: [{w:"Njan",m:"I"},{w:"ivide",m:"here"},{w:"undu",m:"am"}] } },
        genitive:     { transliteration: "ivideyuṭe",     malayalam: "ഇവിടെയുടെ",   meaning: "of here",       example: { malayalam: "ഇവിടെയുടെ ഭക്ഷണം നല്ലതാണ്",    transliteration: "Ivideyuṭe bhakshanam nallathaanu", translation: "The food here is good", words: [{w:"Ivideyuṭe",m:"of here"},{w:"bhakshanam",m:"food"},{w:"nallathaanu",m:"is good"}] } },
        dative:       { transliteration: "ividekku",      malayalam: "ഇവിടേക്ക്",    meaning: "to here",       example: { malayalam: "ഇവിടേക്ക് വരൂ",                 transliteration: "Ividekku varoo",           translation: "Come here", words: [{w:"Ividekku",m:"to here"},{w:"varoo",m:"come"}] } },
        ablative:     { transliteration: "ivide ninnu",   malayalam: "ഇവിടെ നിന്ന്", meaning: "from here",     example: { malayalam: "ഇവിടെ നിന്ന് നേരെ പോകൂ",       transliteration: "Ivide ninnu nere pokoo",   translation: "Go straight from here", words: [{w:"Ivide",m:"here"},{w:"ninnu",m:"from"},{w:"nere",m:"straight"},{w:"pokoo",m:"go"}] } },
        instrumental: { transliteration: "ivide kūṭi",    malayalam: "ഇവിടെ കൂടി",   meaning: "through here",  example: { malayalam: "ഇവിടെ കൂടി പോകണം",              transliteration: "Ivide kūṭi pōkanam",       translation: "Must go through here", words: [{w:"Ivide",m:"here"},{w:"kūṭi",m:"through"},{w:"pōkanam",m:"must go"}] } }
      }
    },
    "avide": {
      malayalam: "അവിടെ",
      meaning: "there",
      forms: {
        locative:     { transliteration: "avide",         malayalam: "അവിടെ",        meaning: "there",         example: { malayalam: "അവൻ അവിടെ ഉണ്ട്",               transliteration: "Avan avide undu",          translation: "He is there", words: [{w:"Avan",m:"he"},{w:"avide",m:"there"},{w:"undu",m:"is"}] } },
        genitive:     { transliteration: "avideyuṭe",     malayalam: "അവിടെയുടെ",   meaning: "of there",      example: { malayalam: "അവിടെയുടെ ഭക്ഷണം നല്ലതാണ്",    transliteration: "Avideyuṭe bhakshanam nallathaanu", translation: "The food there is good", words: [{w:"Avideyuṭe",m:"of there"},{w:"bhakshanam",m:"food"},{w:"nallathaanu",m:"is good"}] } },
        dative:       { transliteration: "avidekku",      malayalam: "അവിടേക്ക്",    meaning: "to there",      example: { malayalam: "ഞാൻ അവിടേക്ക് പോകുന്നു",        transliteration: "Njan avidekku pokunnu",    translation: "I am going there", words: [{w:"Njan",m:"I"},{w:"avidekku",m:"to there"},{w:"pokunnu",m:"am going"}] } },
        ablative:     { transliteration: "avide ninnu",   malayalam: "അവിടെ നിന്ന്", meaning: "from there",    example: { malayalam: "അവിടെ നിന്ന് ഇവിടെ വരൂ",       transliteration: "Avide ninnu ivide varoo",  translation: "Come here from there", words: [{w:"Avide",m:"there"},{w:"ninnu",m:"from"},{w:"ivide",m:"here"},{w:"varoo",m:"come"}] } },
        instrumental: { transliteration: "avide kūṭi",    malayalam: "അവിടെ കൂടി",   meaning: "through there", example: { malayalam: "അവിടെ കൂടി പോകണം",              transliteration: "Avide kūṭi pōkanam",       translation: "Must go through there", words: [{w:"Avide",m:"there"},{w:"kūṭi",m:"through"},{w:"pōkanam",m:"must go"}] } }
      }
    },
    "ivan": {
      malayalam: "ഇവൻ",
      meaning: "this person (m.)",
      forms: {
        nominative:  { transliteration: "ivan",    malayalam: "ഇവൻ",     meaning: "this one (m.)", example: { malayalam: "ഇവൻ ആരാണ്?",               transliteration: "Ivan aaraanu?",          translation: "Who is this person?", words: [{w:"Ivan",m:"this one (m.)"},{w:"aaraanu",m:"who is?"}] } },
        genitive:    { transliteration: "ivante",  malayalam: "ഇവന്റെ",  meaning: "his",           example: { malayalam: "ഇവന്റെ പേര് എന്താണ്?",      transliteration: "Ivante peru enthānu?",   translation: "What is his name?", words: [{w:"Ivante",m:"his"},{w:"peru",m:"name"},{w:"enthānu",m:"what is?"}] } },
        dative:      { transliteration: "ivannu",  malayalam: "ഇവന്",    meaning: "to him",        example: { malayalam: "ഇവന് ഭക്ഷണം കൊടുക്കൂ",     transliteration: "Ivannu bhakshanam kodukkoo", translation: "Give him food", words: [{w:"Ivannu",m:"to him"},{w:"bhakshanam",m:"food"},{w:"kodukkoo",m:"give"}] } },
        accusative:  { transliteration: "ivane",   malayalam: "ഇവനെ",    meaning: "him",           example: { malayalam: "ഞാൻ ഇവനെ അറിയും",           transliteration: "Njan ivane ariyum",      translation: "I know him", words: [{w:"Njan",m:"I"},{w:"ivane",m:"him"},{w:"ariyum",m:"know"}] } },
        sociative:   { transliteration: "ivanōṭu", malayalam: "ഇവനോട്",  meaning: "with him",      example: { malayalam: "ഇവനോട് ചോദിക്കൂ",           transliteration: "Ivanōṭu chōdikkoo",     translation: "Ask him", words: [{w:"Ivanōṭu",m:"to him"},{w:"chōdikkoo",m:"ask"}] } }
      }
    },
    "ivaḷ": {
      malayalam: "ഇവൾ",
      meaning: "this person (f.)",
      forms: {
        nominative:  { transliteration: "ivaḷ",    malayalam: "ഇവൾ",     meaning: "this one (f.)", example: { malayalam: "ഇവൾ ആരാണ്?",               transliteration: "Ivaḷ aaraanu?",         translation: "Who is this person?", words: [{w:"Ivaḷ",m:"this one (f.)"},{w:"aaraanu",m:"who is?"}] } },
        genitive:    { transliteration: "ivaḷuṭe", malayalam: "ഇവളുടെ",  meaning: "her",           example: { malayalam: "ഇവളുടെ പേര് എന്താണ്?",     transliteration: "Ivaḷuṭe peru enthānu?", translation: "What is her name?", words: [{w:"Ivaḷuṭe",m:"her"},{w:"peru",m:"name"},{w:"enthānu",m:"what is?"}] } },
        dative:      { transliteration: "ivaḷkku", malayalam: "ഇവൾക്ക്", meaning: "to her",        example: { malayalam: "ഇവൾക്ക് ഇത് ഇഷ്ടമാണ്",     transliteration: "Ivaḷkku ithu ishtamaanu", translation: "She likes this", words: [{w:"Ivaḷkku",m:"she"},{w:"ithu",m:"this"},{w:"ishtamaanu",m:"likes"}] } },
        accusative:  { transliteration: "ivaḷē",   malayalam: "ഇവളേ",    meaning: "her (obj.)",    example: { malayalam: "ഞാൻ ഇവളേ കണ്ടു",           transliteration: "Njan ivaḷē kandu",      translation: "I saw her", words: [{w:"Njan",m:"I"},{w:"ivaḷē",m:"her"},{w:"kandu",m:"saw"}] } },
        sociative:   { transliteration: "ivaḷōṭu", malayalam: "ഇവളോട്",  meaning: "with her",      example: { malayalam: "ഇവളോട് ചോദിക്കൂ",          transliteration: "Ivaḷōṭu chōdikkoo",    translation: "Ask her", words: [{w:"Ivaḷōṭu",m:"to her"},{w:"chōdikkoo",m:"ask"}] } }
      }
    }
  },

  // ── VERBS ────────────────────────────────────────────────
  verbs: {
    "venam": {
      malayalam: "വേണം",
      meaning: "want / need",
      forms: {
        affirmative:       { transliteration: "venam",         malayalam: "വേണം",            meaning: "want / need",         example: { malayalam: "എനിക്ക് ചായ വേണം",                 transliteration: "Enikku chaya venam",              translation: "I want tea", words: [{w:"Enikku",m:"I (dative)"},{w:"chaya",m:"tea"},{w:"venam",m:"want"}] } },
        negative:          { transliteration: "venda",         malayalam: "വേണ്ട",           meaning: "don't want / no need", example: { malayalam: "ഇത് വേണ്ട",                        transliteration: "Ithu venda",                      translation: "I don't want this", words: [{w:"Ithu",m:"this"},{w:"venda",m:"don't want"}] } },
        question:          { transliteration: "venō",          malayalam: "വേണോ",            meaning: "do you want?",        example: { malayalam: "നിങ്ങൾക്ക് ചായ വേണോ?",             transliteration: "Ningaḷkku chaya venō?",           translation: "Do you want tea?", words: [{w:"Ningaḷkku",m:"you (formal)"},{w:"chaya",m:"tea"},{w:"venō",m:"want?"}] } },
        negative_question: { transliteration: "vendeyō",       malayalam: "വേണ്ടയോ",         meaning: "don't you want?",     example: { malayalam: "നിനക്ക് ഇത് വേണ്ടയോ?",             transliteration: "Ninakku ithu vendeyō?",           translation: "Don't you want this?", words: [{w:"Ninakku",m:"you"},{w:"ithu",m:"this"},{w:"vendeyō",m:"don't you want?"}] } },
        reported:          { transliteration: "veṇameṉṉ",      malayalam: "വേണമെന്ന്",       meaning: "that (one) wants",    example: { malayalam: "അവൾ ഇത് വേണമെന്ന് പറഞ്ഞു",        transliteration: "Avaḷ ithu veṇameṉṉ paranju",     translation: "She said she wants this", words: [{w:"Avaḷ",m:"she"},{w:"ithu",m:"this"},{w:"veṇameṉṉ",m:"(that she) wants"},{w:"paranju",m:"said"}] } },
        past:              { transliteration: "vēṇṭiyirunnu",  malayalam: "വേണ്ടിയിരുന്നു", meaning: "wanted / needed",      example: { malayalam: "എനിക്ക് ഇത് വേണ്ടിയിരുന്നു",      transliteration: "Enikku ithu vēṇṭiyirunnu",        translation: "I had needed this", words: [{w:"Enikku",m:"I (dative)"},{w:"ithu",m:"this"},{w:"vēṇṭiyirunnu",m:"had needed"}] } }
      }
    },
    "kazhikuka": {
      malayalam: "കഴിക്കുക",
      meaning: "to eat",
      forms: {
        present:                  { transliteration: "kazhikkunnu",   malayalam: "കഴിക്കുന്നു",    meaning: "eating / eats",            example: { malayalam: "ഞാൻ ചോറ് കഴിക്കുന്നു",       transliteration: "Njan choru kazhikkunnu",    translation: "I am eating rice", words: [{w:"Njan",m:"I"},{w:"choru",m:"rice"},{w:"kazhikkunnu",m:"am eating"}] } },
        past:                     { transliteration: "kazhicchu",     malayalam: "കഴിച്ചു",        meaning: "ate",                      example: { malayalam: "ഞാൻ ദോശ കഴിച്ചു",           transliteration: "Njan dosa kazhicchu",       translation: "I ate dosa", words: [{w:"Njan",m:"I"},{w:"dosa",m:"dosa"},{w:"kazhicchu",m:"ate"}] } },
        future:                   { transliteration: "kazhikkum",     malayalam: "കഴിക്കും",       meaning: "will eat",                 example: { malayalam: "ഞാൻ അപ്പം കഴിക്കും",        transliteration: "Njan appam kazhikkum",      translation: "I will eat appam", words: [{w:"Njan",m:"I"},{w:"appam",m:"appam"},{w:"kazhikkum",m:"will eat"}] } },
        question_present:         { transliteration: "kazhikkunno",   malayalam: "കഴിക്കുന്നോ",    meaning: "are you eating?",          example: { malayalam: "നീ ഇപ്പോൾ കഴിക്കുന്നോ?",    transliteration: "Nee ippol kazhikkunno?",    translation: "Are you eating now?", words: [{w:"Nee",m:"you"},{w:"ippol",m:"now"},{w:"kazhikkunno",m:"are eating?"}] } },
        question_past_colloquial: { transliteration: "tinno",         malayalam: "തിന്നോ",         meaning: "did you eat? (colloquial)", example: { malayalam: "നീ ഇന്ന് തിന്നോ?",          transliteration: "Nee innu tinno?",          translation: "Did you eat today?", words: [{w:"Nee",m:"you"},{w:"innu",m:"today"},{w:"tinno",m:"did you eat?"}] } },
        negative_present:         { transliteration: "kazhikkunilla", malayalam: "കഴിക്കുന്നില്ല", meaning: "not eating",               example: { malayalam: "ഞാൻ ഇപ്പോൾ കഴിക്കുന്നില്ല", transliteration: "Njan ippol kazhikkunilla",  translation: "I am not eating now", words: [{w:"Njan",m:"I"},{w:"ippol",m:"now"},{w:"kazhikkunilla",m:"am not eating"}] } },
        negative_future:          { transliteration: "kazhikkilla",   malayalam: "കഴിക്കില്ല",     meaning: "won't eat",                example: { malayalam: "ഞാൻ ഇത് കഴിക്കില്ല",        transliteration: "Njan ithu kazhikkilla",     translation: "I won't eat this", words: [{w:"Njan",m:"I"},{w:"ithu",m:"this"},{w:"kazhikkilla",m:"won't eat"}] } },
        imperative:               { transliteration: "kazhi",         malayalam: "കഴി",             meaning: "eat! (informal)",          example: { malayalam: "വേഗം കഴി",                  transliteration: "Vegam kazhi",              translation: "Eat quickly", words: [{w:"Vegam",m:"quickly"},{w:"kazhi",m:"eat!"}] } },
        negative_imperative:      { transliteration: "kazhikkaruthe", malayalam: "കഴിക്കരുത്",     meaning: "don't eat!",               example: { malayalam: "ഇത് കഴിക്കരുത്",            transliteration: "Ithu kazhikkaruthe",       translation: "Don't eat this", words: [{w:"Ithu",m:"this"},{w:"kazhikkaruthe",m:"don't eat"}] } }
      }
    },
    "varuka": {
      malayalam: "വരുക",
      meaning: "to come",
      forms: {
        present:            { transliteration: "varunnu",   malayalam: "വരുന്നു",     meaning: "is coming",     example: { malayalam: "ഞാൻ ഇപ്പോൾ വരുന്നു",         transliteration: "Njan ippol varunnu",     translation: "I am coming now", words: [{w:"Njan",m:"I"},{w:"ippol",m:"now"},{w:"varunnu",m:"am coming"}] } },
        past:               { transliteration: "vannu",     malayalam: "വന്നു",       meaning: "came",          example: { malayalam: "അവൾ ഇന്ന് വന്നു",             transliteration: "Avaḷ innu vannu",        translation: "She came today", words: [{w:"Avaḷ",m:"she"},{w:"innu",m:"today"},{w:"vannu",m:"came"}] } },
        future:             { transliteration: "varum",     malayalam: "വരും",        meaning: "will come",     example: { malayalam: "ഞാൻ നാളെ വരും",               transliteration: "Njan naale varum",       translation: "I will come tomorrow", words: [{w:"Njan",m:"I"},{w:"naale",m:"tomorrow"},{w:"varum",m:"will come"}] } },
        question:           { transliteration: "varunno",   malayalam: "വരുന്നോ",     meaning: "are you coming?", example: { malayalam: "നീ ഇന്ന് വരുന്നോ?",           transliteration: "Nee innu varunno?",      translation: "Are you coming today?", words: [{w:"Nee",m:"you"},{w:"innu",m:"today"},{w:"varunno",m:"are coming?"}] } },
        negative_present:   { transliteration: "varunilla", malayalam: "വരുന്നില്ല",  meaning: "not coming",    example: { malayalam: "ഞാൻ ഇന്ന് വരുന്നില്ല",        transliteration: "Njan innu varunilla",    translation: "I am not coming today", words: [{w:"Njan",m:"I"},{w:"innu",m:"today"},{w:"varunilla",m:"am not coming"}] } },
        negative_future:    { transliteration: "varilla",   malayalam: "വരില്ല",      meaning: "won't come",    example: { malayalam: "ഞാൻ ഇനി വരില്ല",              transliteration: "Njan ini varilla",       translation: "I won't come again", words: [{w:"Njan",m:"I"},{w:"ini",m:"again"},{w:"varilla",m:"won't come"}] } },
        imperative:         { transliteration: "vā",        malayalam: "വാ",          meaning: "come! (informal)", example: { malayalam: "ഇവിടെ വാ",                  transliteration: "Ivide vā",               translation: "Come here", words: [{w:"Ivide",m:"here"},{w:"vā",m:"come!"}] } },
        negative_imperative:{ transliteration: "vararuthe", malayalam: "വരരുത്",      meaning: "don't come!",   example: { malayalam: "ഇനി ഇവിടെ വരരുത്",           transliteration: "Ini ivide vararuthe",    translation: "Don't come here again", words: [{w:"Ini",m:"again"},{w:"ivide",m:"here"},{w:"vararuthe",m:"don't come"}] } }
      }
    },
    "pokuka": {
      malayalam: "പോകുക",
      meaning: "to go",
      forms: {
        present:            { transliteration: "pokunnu",   malayalam: "പോകുന്നു",    meaning: "is going",      example: { malayalam: "ഞാൻ ഇപ്പോൾ പോകുന്നു",         transliteration: "Njan ippol pokunnu",     translation: "I am going now", words: [{w:"Njan",m:"I"},{w:"ippol",m:"now"},{w:"pokunnu",m:"am going"}] } },
        past:               { transliteration: "pōyi",      malayalam: "പോയി",        meaning: "went",          example: { malayalam: "അവൻ ബീച്ചിൽ പോയി",            transliteration: "Avan beachil pōyi",      translation: "He went to the beach", words: [{w:"Avan",m:"he"},{w:"beachil",m:"to the beach"},{w:"pōyi",m:"went"}] } },
        future:             { transliteration: "pōkum",     malayalam: "പോകും",       meaning: "will go",       example: { malayalam: "ഞാൻ നാളെ കേരളത്തിൽ പോകും",   transliteration: "Njan naale Keralathil pōkum", translation: "I will go to Kerala tomorrow", words: [{w:"Njan",m:"I"},{w:"naale",m:"tomorrow"},{w:"Keralathil",m:"to Kerala"},{w:"pōkum",m:"will go"}] } },
        question:           { transliteration: "pokunno",   malayalam: "പോകുന്നോ",    meaning: "are you going?", example: { malayalam: "നീ ഇന്ന് പോകുന്നോ?",          transliteration: "Nee innu pokunno?",      translation: "Are you going today?", words: [{w:"Nee",m:"you"},{w:"innu",m:"today"},{w:"pokunno",m:"are going?"}] } },
        negative_present:   { transliteration: "pokunilla", malayalam: "പോകുന്നില്ല", meaning: "not going",     example: { malayalam: "ഞാൻ ഇന്ന് പോകുന്നില്ല",       transliteration: "Njan innu pokunilla",    translation: "I am not going today", words: [{w:"Njan",m:"I"},{w:"innu",m:"today"},{w:"pokunilla",m:"am not going"}] } },
        negative_future:    { transliteration: "pokilla",   malayalam: "പോകില്ല",     meaning: "won't go",      example: { malayalam: "ഞാൻ ഇനി അവിടെ പോകില്ല",      transliteration: "Njan ini avide pokilla", translation: "I won't go there again", words: [{w:"Njan",m:"I"},{w:"ini",m:"again"},{w:"avide",m:"there"},{w:"pokilla",m:"won't go"}] } },
        imperative:         { transliteration: "pō",        malayalam: "പോ",          meaning: "go! (informal)", example: { malayalam: "വേഗം പോ",                    transliteration: "Vegam pō",               translation: "Go quickly", words: [{w:"Vegam",m:"quickly"},{w:"pō",m:"go!"}] } },
        negative_imperative:{ transliteration: "pōkaruthe", malayalam: "പോകരുത്",    meaning: "don't go!",     example: { malayalam: "ഇവിടെ നിന്ന് പോകരുത്",       transliteration: "Ivide ninnu pōkaruthe",  translation: "Don't go from here", words: [{w:"Ivide",m:"here"},{w:"ninnu",m:"from"},{w:"pōkaruthe",m:"don't go"}] } }
      }
    },
    "cheyyuka": {
      malayalam: "ചെയ്യുക",
      meaning: "to do",
      forms: {
        present:            { transliteration: "cheyyunnu",   malayalam: "ചെയ്യുന്നു",    meaning: "doing",         example: { malayalam: "ഞാൻ ജോലി ചെയ്യുന്നു",         transliteration: "Njan joli cheyyunnu",     translation: "I am working", words: [{w:"Njan",m:"I"},{w:"joli",m:"work"},{w:"cheyyunnu",m:"am doing"}] } },
        past:               { transliteration: "cheythu",     malayalam: "ചെയ്തു",        meaning: "did",           example: { malayalam: "ഞാൻ ഇത് ചെയ്തു",              transliteration: "Njan ithu cheythu",       translation: "I did this", words: [{w:"Njan",m:"I"},{w:"ithu",m:"this"},{w:"cheythu",m:"did"}] } },
        future:             { transliteration: "cheyyum",     malayalam: "ചെയ്യും",       meaning: "will do",       example: { malayalam: "ഞാൻ ഇത് ചെയ്യും",             transliteration: "Njan ithu cheyyum",       translation: "I will do this", words: [{w:"Njan",m:"I"},{w:"ithu",m:"this"},{w:"cheyyum",m:"will do"}] } },
        question:           { transliteration: "cheyyunno",   malayalam: "ചെയ്യുന്നോ",    meaning: "are you doing?", example: { malayalam: "നീ ഇത് ചെയ്യുന്നോ?",           transliteration: "Nee ithu cheyyunno?",     translation: "Are you doing this?", words: [{w:"Nee",m:"you"},{w:"ithu",m:"this"},{w:"cheyyunno",m:"are doing?"}] } },
        negative_present:   { transliteration: "cheyyunilla", malayalam: "ചെയ്യുന്നില്ല", meaning: "not doing",     example: { malayalam: "ഞാൻ ഇത് ചെയ്യുന്നില്ല",       transliteration: "Njan ithu cheyyunilla",   translation: "I am not doing this", words: [{w:"Njan",m:"I"},{w:"ithu",m:"this"},{w:"cheyyunilla",m:"am not doing"}] } },
        negative_future:    { transliteration: "cheyyilla",   malayalam: "ചെയ്യില്ല",     meaning: "won't do",      example: { malayalam: "ഞാൻ ഇത് ചെയ്യില്ല",            transliteration: "Njan ithu cheyyilla",     translation: "I won't do this", words: [{w:"Njan",m:"I"},{w:"ithu",m:"this"},{w:"cheyyilla",m:"won't do"}] } },
        imperative:         { transliteration: "cheyyū",      malayalam: "ചെയ്യൂ",        meaning: "do it!",        example: { malayalam: "ഇത് ഇപ്പോൾ ചെയ്യൂ",           transliteration: "Ithu ippol cheyyū",       translation: "Do this now", words: [{w:"Ithu",m:"this"},{w:"ippol",m:"now"},{w:"cheyyū",m:"do!"}] } },
        negative_imperative:{ transliteration: "cheyyaruthe", malayalam: "ചെയ്യരുത്",    meaning: "don't do!",     example: { malayalam: "ഇത് ഒരിക്കലും ചെയ്യരുത്",     transliteration: "Ithu orikkalum cheyyaruthe", translation: "Never do this", words: [{w:"Ithu",m:"this"},{w:"orikkalum",m:"never"},{w:"cheyyaruthe",m:"don't do"}] } }
      }
    },
    "parayuka": {
      malayalam: "പറയുക",
      meaning: "to say / tell",
      forms: {
        present:            { transliteration: "parayunnu",   malayalam: "പറയുന്നു",    meaning: "saying",        example: { malayalam: "അവൾ എന്ത് പറയുന്നു?",         transliteration: "Avaḷ enthu parayunnu?",   translation: "What is she saying?", words: [{w:"Avaḷ",m:"she"},{w:"enthu",m:"what"},{w:"parayunnu",m:"is saying?"}] } },
        past:               { transliteration: "paranju",     malayalam: "പറഞ്ഞു",      meaning: "said / told",   example: { malayalam: "അവൻ ഇത് പറഞ്ഞു",              transliteration: "Avan ithu paranju",       translation: "He said this", words: [{w:"Avan",m:"he"},{w:"ithu",m:"this"},{w:"paranju",m:"said"}] } },
        future:             { transliteration: "parayum",     malayalam: "പറയും",       meaning: "will say",      example: { malayalam: "ഞാൻ ഇത് അവനോട് പറയും",       transliteration: "Njan ithu avanōṭu parayum", translation: "I will tell him this", words: [{w:"Njan",m:"I"},{w:"ithu",m:"this"},{w:"avanōṭu",m:"to him"},{w:"parayum",m:"will tell"}] } },
        question:           { transliteration: "parayunno",   malayalam: "പറയുന്നോ",    meaning: "are you saying?", example: { malayalam: "നീ ഇത് പറയുന്നോ?",           transliteration: "Nee ithu parayunno?",     translation: "Are you saying this?", words: [{w:"Nee",m:"you"},{w:"ithu",m:"this"},{w:"parayunno",m:"are saying?"}] } },
        negative_present:   { transliteration: "parayunilla", malayalam: "പറയുന്നില്ല", meaning: "not saying",    example: { malayalam: "ഞാൻ ഒന്നും പറയുന്നില്ല",      transliteration: "Njan onnnum parayunilla", translation: "I am not saying anything", words: [{w:"Njan",m:"I"},{w:"onnnum",m:"anything"},{w:"parayunilla",m:"am not saying"}] } },
        negative_future:    { transliteration: "parayilla",   malayalam: "പറയില്ല",     meaning: "won't say",     example: { malayalam: "ഞാൻ ഇത് പറയില്ല",             transliteration: "Njan ithu parayilla",     translation: "I won't say this", words: [{w:"Njan",m:"I"},{w:"ithu",m:"this"},{w:"parayilla",m:"won't say"}] } },
        imperative:         { transliteration: "parā",        malayalam: "പറ",           meaning: "say it!",       example: { malayalam: "ഇത് ഇപ്പോൾ പറ",              transliteration: "Ithu ippol parā",         translation: "Say this now", words: [{w:"Ithu",m:"this"},{w:"ippol",m:"now"},{w:"parā",m:"say!"}] } },
        negative_imperative:{ transliteration: "pararuthe",   malayalam: "പറയരുത്",     meaning: "don't say!",    example: { malayalam: "ഇത് ഒരിക്കലും പറയരുത്",      transliteration: "Ithu orikkalum pararuthe", translation: "Never say this", words: [{w:"Ithu",m:"this"},{w:"orikkalum",m:"never"},{w:"pararuthe",m:"don't say"}] } }
      }
    },
    "ariyuka": {
      malayalam: "അറിയുക",
      meaning: "to know",
      forms: {
        present:       { transliteration: "ariyunnu",   malayalam: "അറിയുന്നു",  meaning: "knows",           example: { malayalam: "ഞാൻ ഇത് അറിയുന്നു",            transliteration: "Njan ithu ariyunnu",       translation: "I know this", words: [{w:"Njan",m:"I"},{w:"ithu",m:"this"},{w:"ariyunnu",m:"know"}] } },
        past:          { transliteration: "arinjhu",   malayalam: "അറിഞ്ഞു",    meaning: "knew / found out", example: { malayalam: "ഞാൻ ഇന്ന് ഇത് അറിഞ്ഞു",       transliteration: "Njan innu ithu arinjhu",   translation: "I found out today", words: [{w:"Njan",m:"I"},{w:"innu",m:"today"},{w:"ithu",m:"this"},{w:"arinjhu",m:"found out"}] } },
        future:        { transliteration: "ariyum",    malayalam: "അറിയും",     meaning: "will know",        example: { malayalam: "ഞാൻ ഇത് അറിയും",               transliteration: "Njan ithu ariyum",         translation: "I will know this", words: [{w:"Njan",m:"I"},{w:"ithu",m:"this"},{w:"ariyum",m:"will know"}] } },
        question:      { transliteration: "ariyunno",  malayalam: "അറിയുന്നോ",  meaning: "do you know?",     example: { malayalam: "നിങ്ങൾക്ക് Malayalam അറിയുന്നോ?", transliteration: "Ningaḷkku Malayalam ariyunno?", translation: "Do you know Malayalam?", words: [{w:"Ningaḷkku",m:"you (formal)"},{w:"Malayalam",m:"Malayalam"},{w:"ariyunno",m:"do you know?"}] } },
        negative:      { transliteration: "ariyilla",  malayalam: "അറിയില്ല",   meaning: "don't know",       example: { malayalam: "എനിക്ക് Malayalam അറിയില്ല",    transliteration: "Enikku Malayalam ariyilla", translation: "I don't know Malayalam", words: [{w:"Enikku",m:"I (dative)"},{w:"Malayalam",m:"Malayalam"},{w:"ariyilla",m:"don't know"}] } },
        negative_past: { transliteration: "arinjhilla",malayalam: "അറിഞ്ഞില്ല", meaning: "didn't know",      example: { malayalam: "ഞാൻ ഇത് അറിഞ്ഞില്ല",           transliteration: "Njan ithu arinjhilla",     translation: "I didn't know this", words: [{w:"Njan",m:"I"},{w:"ithu",m:"this"},{w:"arinjhilla",m:"didn't know"}] } }
      }
    },
    "āvuka": {
      malayalam: "ആവുക",
      meaning: "to become / to be",
      forms: {
        present:  { transliteration: "ākunnu", malayalam: "ആകുന്നു",  meaning: "is / becoming",   example: { malayalam: "ഞാൻ ഡോക്ടർ ആകുന്നു",     transliteration: "Njan doctor ākunnu",   translation: "I am becoming a doctor", words: [{w:"Njan",m:"I"},{w:"doctor",m:"doctor"},{w:"ākunnu",m:"am becoming"}] } },
        past:     { transliteration: "āyi",    malayalam: "ആയി",      meaning: "was / became",    example: { malayalam: "അത് ശരി ആയി",             transliteration: "Athu shari āyi",       translation: "That turned out fine", words: [{w:"Athu",m:"that"},{w:"shari",m:"fine/right"},{w:"āyi",m:"turned out"}] } },
        future:   { transliteration: "ākum",   malayalam: "ആകും",     meaning: "will be / become", example: { malayalam: "ഇത് ശരി ആകും",            transliteration: "Ithu shari ākum",      translation: "This will be fine", words: [{w:"Ithu",m:"this"},{w:"shari",m:"fine/right"},{w:"ākum",m:"will be"}] } },
        question: { transliteration: "ākunno", malayalam: "ആകുന്നോ",  meaning: "is it?",          example: { malayalam: "ഇത് ശരി ആകുന്നോ?",        transliteration: "Ithu shari ākunno?",   translation: "Will this be alright?", words: [{w:"Ithu",m:"this"},{w:"shari",m:"alright"},{w:"ākunno",m:"will it be?"}] } },
        negative: { transliteration: "āvilla", malayalam: "ആവില്ല",   meaning: "won't / can't be", example: { malayalam: "ഇത് ഇനി ആവില്ല",          transliteration: "Ithu ini āvilla",      translation: "This won't happen again", words: [{w:"Ithu",m:"this"},{w:"ini",m:"again"},{w:"āvilla",m:"won't happen"}] } }
      }
    }
  },

  // ── NOUNS ─────────────────────────────────────────────
  nouns: {
    // words coming soon
  }

};
