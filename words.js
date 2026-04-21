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
        nominative:   { transliteration: "njan",    malayalam: "ഞാൻ",     meaning: "I" },
        genitive:     { transliteration: "ente",    malayalam: "എന്റെ",   meaning: "my" },
        dative:       { transliteration: "enikku",  malayalam: "എനിക്ക്", meaning: "to / for me" },
        accusative:   { transliteration: "enne",    malayalam: "എന്നെ",   meaning: "me" },
        instrumental: { transliteration: "ennāl",   malayalam: "എന്നാൽ",  meaning: "by me" },
        locative:     { transliteration: "ennil",   malayalam: "എന്നിൽ",  meaning: "in / on me" },
        sociative:    { transliteration: "ennōṭu",  malayalam: "എന്നോട്", meaning: "with me" }
      }
    },
    "nee": {
      malayalam: "നീ",
      meaning: "you (informal)",
      forms: {
        nominative:   { transliteration: "nee",      malayalam: "നീ",       meaning: "you" },
        genitive:     { transliteration: "ninte",    malayalam: "നിന്റെ",   meaning: "your" },
        dative:       { transliteration: "ninakku",  malayalam: "നിനക്ക്",  meaning: "to / for you" },
        accusative:   { transliteration: "ninnē",    malayalam: "നിന്നേ",   meaning: "you (obj.)" },
        instrumental: { transliteration: "ninnāl",   malayalam: "നിന്നാൽ",  meaning: "by you" },
        locative:     { transliteration: "ninnil",   malayalam: "നിന്നിൽ",  meaning: "in / on you" },
        sociative:    { transliteration: "ninnōṭu",  malayalam: "നിന്നോട്", meaning: "with you" }
      }
    },
    "ningaḷ": {
      malayalam: "നിങ്ങൾ",
      meaning: "you (formal / plural)",
      forms: {
        nominative:   { transliteration: "ningaḷ",     malayalam: "നിങ്ങൾ",     meaning: "you (formal)" },
        genitive:     { transliteration: "ningaḷuṭe",  malayalam: "നിങ്ങളുടെ",  meaning: "your" },
        dative:       { transliteration: "ningaḷkku",  malayalam: "നിങ്ങൾക്ക്", meaning: "to / for you" },
        accusative:   { transliteration: "ningaḷē",    malayalam: "നിങ്ങളേ",    meaning: "you (obj.)" },
        instrumental: { transliteration: "ningaḷāl",   malayalam: "നിങ്ങളാൽ",   meaning: "by you" },
        locative:     { transliteration: "ningaḷil",   malayalam: "നിങ്ങളിൽ",   meaning: "in / on you" },
        sociative:    { transliteration: "ningaḷōṭu",  malayalam: "നിങ്ങളോട്",  meaning: "with you" }
      }
    },
    "avan": {
      malayalam: "അവൻ",
      meaning: "he",
      forms: {
        nominative:   { transliteration: "avan",    malayalam: "അവൻ",     meaning: "he" },
        genitive:     { transliteration: "avante",  malayalam: "അവന്റെ",  meaning: "his" },
        dative:       { transliteration: "avannu",  malayalam: "അവന്",    meaning: "to / for him" },
        accusative:   { transliteration: "avane",   malayalam: "അവനെ",    meaning: "him" },
        instrumental: { transliteration: "avanāl",  malayalam: "അവനാൽ",   meaning: "by him" },
        locative:     { transliteration: "avanil",  malayalam: "അവനിൽ",   meaning: "in / on him" },
        sociative:    { transliteration: "avanōṭu", malayalam: "അവനോട്",  meaning: "with him" }
      }
    },
    "avaḷ": {
      malayalam: "അവൾ",
      meaning: "she",
      forms: {
        nominative:   { transliteration: "avaḷ",    malayalam: "അവൾ",     meaning: "she" },
        genitive:     { transliteration: "avaḷuṭe", malayalam: "അവളുടെ",  meaning: "her" },
        dative:       { transliteration: "avaḷkku", malayalam: "അവൾക്ക്", meaning: "to / for her" },
        accusative:   { transliteration: "avaḷē",   malayalam: "അവളേ",    meaning: "her (obj.)" },
        instrumental: { transliteration: "avaḷāl",  malayalam: "അവളാൽ",   meaning: "by her" },
        locative:     { transliteration: "avaḷil",  malayalam: "അവളിൽ",   meaning: "in / on her" },
        sociative:    { transliteration: "avaḷōṭu", malayalam: "അവളോട്",  meaning: "with her" }
      }
    },
    "avar": {
      malayalam: "അവർ",
      meaning: "they / he/she (formal)",
      forms: {
        nominative:   { transliteration: "avar",    malayalam: "അവർ",     meaning: "they" },
        genitive:     { transliteration: "avaruṭe", malayalam: "അവരുടെ",  meaning: "their" },
        dative:       { transliteration: "avarkku", malayalam: "അവർക്ക്", meaning: "to / for them" },
        accusative:   { transliteration: "avarē",   malayalam: "അവരേ",    meaning: "them (obj.)" },
        instrumental: { transliteration: "avarāl",  malayalam: "അവരാൽ",   meaning: "by them" },
        locative:     { transliteration: "avaril",  malayalam: "അവരിൽ",   meaning: "among them" },
        sociative:    { transliteration: "avarōṭu", malayalam: "അവരോട്",  meaning: "with them" }
      }
    }
  },

  // ── DEMONSTRATIVES ───────────────────────────────────────
  demonstratives: {
    "ithu": {
      malayalam: "ഇത്",
      meaning: "this",
      forms: {
        nominative:   { transliteration: "ithu",    malayalam: "ഇത്",      meaning: "this" },
        genitive:     { transliteration: "ithinte", malayalam: "ഇതിന്റെ",  meaning: "of this" },
        dative:       { transliteration: "ithinnu", malayalam: "ഇതിന്",    meaning: "to / for this" },
        accusative:   { transliteration: "ithine",  malayalam: "ഇതിനെ",    meaning: "this (obj.)" },
        instrumental: { transliteration: "ithināl", malayalam: "ഇതിനാൽ",   meaning: "by this" },
        locative:     { transliteration: "ithil",   malayalam: "ഇതിൽ",     meaning: "in this" },
        sociative:    { transliteration: "ithōṭu",  malayalam: "ഇതോട്",    meaning: "with this" }
      }
    },
    "athu": {
      malayalam: "അത്",
      meaning: "that",
      forms: {
        nominative:   { transliteration: "athu",    malayalam: "അത്",      meaning: "that" },
        genitive:     { transliteration: "athinte", malayalam: "അതിന്റെ",  meaning: "of that" },
        dative:       { transliteration: "athinnu", malayalam: "അതിന്",    meaning: "to / for that" },
        accusative:   { transliteration: "athine",  malayalam: "അതിനെ",    meaning: "that (obj.)" },
        instrumental: { transliteration: "athināl", malayalam: "അതിനാൽ",   meaning: "by that" },
        locative:     { transliteration: "athil",   malayalam: "അതിൽ",     meaning: "in that" },
        sociative:    { transliteration: "athōṭu",  malayalam: "അതോട്",    meaning: "with that" }
      }
    },
    "ivide": {
      malayalam: "ഇവിടെ",
      meaning: "here",
      forms: {
        locative:     { transliteration: "ivide",         malayalam: "ഇവിടെ",        meaning: "here" },
        genitive:     { transliteration: "ivideyuṭe",     malayalam: "ഇവിടെയുടെ",   meaning: "of here" },
        dative:       { transliteration: "ividekku",      malayalam: "ഇവിടേക്ക്",    meaning: "to here" },
        ablative:     { transliteration: "ivide ninnu",   malayalam: "ഇവിടെ നിന്ന്", meaning: "from here" },
        instrumental: { transliteration: "ivide kūṭi",    malayalam: "ഇവിടെ കൂടി",   meaning: "through here" }
      }
    },
    "avide": {
      malayalam: "അവിടെ",
      meaning: "there",
      forms: {
        locative:     { transliteration: "avide",         malayalam: "അവിടെ",        meaning: "there" },
        genitive:     { transliteration: "avideyuṭe",     malayalam: "അവിടെയുടെ",   meaning: "of there" },
        dative:       { transliteration: "avidekku",      malayalam: "അവിടേക്ക്",    meaning: "to there" },
        ablative:     { transliteration: "avide ninnu",   malayalam: "അവിടെ നിന്ന്", meaning: "from there" },
        instrumental: { transliteration: "avide kūṭi",    malayalam: "അവിടെ കൂടി",   meaning: "through there" }
      }
    },
    "ivan": {
      malayalam: "ഇവൻ",
      meaning: "this person (m.)",
      forms: {
        nominative:  { transliteration: "ivan",    malayalam: "ഇവൻ",     meaning: "this one (m.)" },
        genitive:    { transliteration: "ivante",  malayalam: "ഇവന്റെ",  meaning: "his" },
        dative:      { transliteration: "ivannu",  malayalam: "ഇവന്",    meaning: "to him" },
        accusative:  { transliteration: "ivane",   malayalam: "ഇവനെ",    meaning: "him" },
        sociative:   { transliteration: "ivanōṭu", malayalam: "ഇവനോട്",  meaning: "with him" }
      }
    },
    "ivaḷ": {
      malayalam: "ഇവൾ",
      meaning: "this person (f.)",
      forms: {
        nominative:  { transliteration: "ivaḷ",    malayalam: "ഇവൾ",     meaning: "this one (f.)" },
        genitive:    { transliteration: "ivaḷuṭe", malayalam: "ഇവളുടെ",  meaning: "her" },
        dative:      { transliteration: "ivaḷkku", malayalam: "ഇവൾക്ക്", meaning: "to her" },
        accusative:  { transliteration: "ivaḷē",   malayalam: "ഇവളേ",    meaning: "her (obj.)" },
        sociative:   { transliteration: "ivaḷōṭu", malayalam: "ഇവളോട്",  meaning: "with her" }
      }
    }
  },

  // ── VERBS ────────────────────────────────────────────────
  verbs: {
    "venam": {
      malayalam: "വേണം",
      meaning: "want / need",
      forms: {
        affirmative:       { transliteration: "venam",         malayalam: "വേണം",            meaning: "want / need" },
        negative:          { transliteration: "venda",         malayalam: "വേണ്ട",           meaning: "don't want / no need" },
        question:          { transliteration: "venō",          malayalam: "വേണോ",            meaning: "do you want?" },
        negative_question: { transliteration: "vendeyō",       malayalam: "വേണ്ടയോ",         meaning: "don't you want?" },
        reported:          { transliteration: "veṇameṉṉ",      malayalam: "വേണമെന്ന്",       meaning: "that (one) wants" },
        past:              { transliteration: "vēṇṭiyirunnu",  malayalam: "വേണ്ടിയിരുന്നു", meaning: "wanted / needed" }
      }
    },
    "kazhikuka": {
      malayalam: "കഴിക്കുക",
      meaning: "to eat",
      forms: {
        present:                  { transliteration: "kazhikkunnu",   malayalam: "കഴിക്കുന്നു",    meaning: "eating / eats" },
        past:                     { transliteration: "kazhicchu",     malayalam: "കഴിച്ചു",        meaning: "ate" },
        future:                   { transliteration: "kazhikkum",     malayalam: "കഴിക്കും",       meaning: "will eat" },
        question_present:         { transliteration: "kazhikkunno",   malayalam: "കഴിക്കുന്നോ",    meaning: "are you eating?" },
        question_past_colloquial: { transliteration: "tinno",         malayalam: "തിന്നോ",         meaning: "did you eat? (colloquial)" },
        negative_present:         { transliteration: "kazhikkunilla", malayalam: "കഴിക്കുന്നില്ല", meaning: "not eating" },
        negative_future:          { transliteration: "kazhikkilla",   malayalam: "കഴിക്കില്ല",     meaning: "won't eat" },
        imperative:               { transliteration: "kazhi",         malayalam: "കഴി",             meaning: "eat! (informal)" },
        negative_imperative:      { transliteration: "kazhikkaruthe", malayalam: "കഴിക്കരുത്",     meaning: "don't eat!" }
      }
    },
    "varuka": {
      malayalam: "വരുക",
      meaning: "to come",
      forms: {
        present:            { transliteration: "varunnu",   malayalam: "വരുന്നു",     meaning: "is coming" },
        past:               { transliteration: "vannu",     malayalam: "വന്നു",       meaning: "came" },
        future:             { transliteration: "varum",     malayalam: "വരും",        meaning: "will come" },
        question:           { transliteration: "varunno",   malayalam: "വരുന്നോ",     meaning: "are you coming?" },
        negative_present:   { transliteration: "varunilla", malayalam: "വരുന്നില്ല",  meaning: "not coming" },
        negative_future:    { transliteration: "varilla",   malayalam: "വരില്ല",      meaning: "won't come" },
        imperative:         { transliteration: "vā",        malayalam: "വാ",          meaning: "come! (informal)" },
        negative_imperative:{ transliteration: "vararuthe", malayalam: "വരരുത്",      meaning: "don't come!" }
      }
    },
    "pokuka": {
      malayalam: "പോകുക",
      meaning: "to go",
      forms: {
        present:            { transliteration: "pokunnu",   malayalam: "പോകുന്നു",    meaning: "is going" },
        past:               { transliteration: "pōyi",      malayalam: "പോയി",        meaning: "went" },
        future:             { transliteration: "pōkum",     malayalam: "പോകും",       meaning: "will go" },
        question:           { transliteration: "pokunno",   malayalam: "പോകുന്നോ",    meaning: "are you going?" },
        negative_present:   { transliteration: "pokunilla", malayalam: "പോകുന്നില്ല", meaning: "not going" },
        negative_future:    { transliteration: "pokilla",   malayalam: "പോകില്ല",     meaning: "won't go" },
        imperative:         { transliteration: "pō",        malayalam: "പോ",          meaning: "go! (informal)" },
        negative_imperative:{ transliteration: "pōkaruthe", malayalam: "പോകരുത്",    meaning: "don't go!" }
      }
    },
    "cheyyuka": {
      malayalam: "ചെയ്യുക",
      meaning: "to do",
      forms: {
        present:            { transliteration: "cheyyunnu",   malayalam: "ചെയ്യുന്നു",    meaning: "doing" },
        past:               { transliteration: "cheythu",     malayalam: "ചെയ്തു",        meaning: "did" },
        future:             { transliteration: "cheyyum",     malayalam: "ചെയ്യും",       meaning: "will do" },
        question:           { transliteration: "cheyyunno",   malayalam: "ചെയ്യുന്നോ",    meaning: "are you doing?" },
        negative_present:   { transliteration: "cheyyunilla", malayalam: "ചെയ്യുന്നില്ല", meaning: "not doing" },
        negative_future:    { transliteration: "cheyyilla",   malayalam: "ചെയ്യില്ല",     meaning: "won't do" },
        imperative:         { transliteration: "cheyyū",      malayalam: "ചെയ്യൂ",        meaning: "do it!" },
        negative_imperative:{ transliteration: "cheyyaruthe", malayalam: "ചെയ്യരുത്",    meaning: "don't do!" }
      }
    },
    "parayuka": {
      malayalam: "പറയുക",
      meaning: "to say / tell",
      forms: {
        present:            { transliteration: "parayunnu",   malayalam: "പറയുന്നു",    meaning: "saying" },
        past:               { transliteration: "paranju",     malayalam: "പറഞ്ഞു",      meaning: "said / told" },
        future:             { transliteration: "parayum",     malayalam: "പറയും",       meaning: "will say" },
        question:           { transliteration: "parayunno",   malayalam: "പറയുന്നോ",    meaning: "are you saying?" },
        negative_present:   { transliteration: "parayunilla", malayalam: "പറയുന്നില്ല", meaning: "not saying" },
        negative_future:    { transliteration: "parayilla",   malayalam: "പറയില്ല",     meaning: "won't say" },
        imperative:         { transliteration: "parā",        malayalam: "പറ",           meaning: "say it!" },
        negative_imperative:{ transliteration: "pararuthe",   malayalam: "പറയരുത്",     meaning: "don't say!" }
      }
    },
    "ariyuka": {
      malayalam: "അറിയുക",
      meaning: "to know",
      forms: {
        present:       { transliteration: "ariyunnu",  malayalam: "അറിയുന്നു",  meaning: "knows" },
        past:          { transliteration: "arinjhu",   malayalam: "അറിഞ്ഞു",    meaning: "knew / found out" },
        future:        { transliteration: "ariyum",    malayalam: "അറിയും",     meaning: "will know" },
        question:      { transliteration: "ariyunno",  malayalam: "അറിയുന്നോ",  meaning: "do you know?" },
        negative:      { transliteration: "ariyilla",  malayalam: "അറിയില്ല",   meaning: "don't know" },
        negative_past: { transliteration: "arinjhilla",malayalam: "അറിഞ്ഞില്ല", meaning: "didn't know" }
      }
    },
    "āvuka": {
      malayalam: "ആവുക",
      meaning: "to become / to be",
      forms: {
        present:  { transliteration: "ākunnu", malayalam: "ആകുന്നു",  meaning: "is / becoming" },
        past:     { transliteration: "āyi",    malayalam: "ആയി",      meaning: "was / became" },
        future:   { transliteration: "ākum",   malayalam: "ആകും",     meaning: "will be / become" },
        question: { transliteration: "ākunno", malayalam: "ആകുന്നോ",  meaning: "is it?" },
        negative: { transliteration: "āvilla", malayalam: "ആവില്ല",   meaning: "won't / can't be" }
      }
    }
  }

};
