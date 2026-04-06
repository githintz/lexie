// ════════════════════════════════════════════════════════
//  WORDS DATABASE — Practical Malayalam for visiting Kerala
//
//  Each entry:
//    id        – unique string ID
//    malayalam – word/phrase in Malayalam script
//    phonetic  – pronunciation in English letters
//    meaning   – English meaning / context note
//    imageUrl  – photo shown on the back of the card
//
//  To add a word: copy any entry, give it the next ID, fill in the fields.
//  To remove a word: delete the whole { ... } line.
//  IDs don't need to be sequential — just unique.
// ════════════════════════════════════════════════════════

const WORDS = [

  // ── GREETINGS & POLITENESS ──────────────────────────────
  { id:"1",  malayalam:"നമസ്കാരം",        phonetic:"Namaskaram",         meaning:"Hello / Greetings",                  imageUrl:"https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=600&auto=format&fit=crop" },
  { id:"2",  malayalam:"നന്ദി",            phonetic:"Nandi",              meaning:"Thank you",                          imageUrl:"https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&auto=format&fit=crop" },
  { id:"3",  malayalam:"ക്ഷമിക്കണം",       phonetic:"Kshamikkanam",       meaning:"Sorry / Excuse me",                  imageUrl:"https://images.unsplash.com/photo-1529688530647-93a6e1916f5f?w=600&auto=format&fit=crop" },
  { id:"4",  malayalam:"ദയവായി",           phonetic:"Dayavayi",           meaning:"Please",                             imageUrl:"https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=600&auto=format&fit=crop" },
  { id:"5",  malayalam:"സ്വാഗതം",          phonetic:"Swagatham",          meaning:"Welcome",                            imageUrl:"https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&auto=format&fit=crop" },
  { id:"6",  malayalam:"വിട",              phonetic:"Vida",               meaning:"Goodbye",                            imageUrl:"https://images.unsplash.com/photo-1473186578172-c141e6798cf4?w=600&auto=format&fit=crop" },
  { id:"7",  malayalam:"അതെ",              phonetic:"Athe",               meaning:"Yes",                                imageUrl:"https://images.unsplash.com/photo-1565515636969-8b4c0a7e7e00?w=600&auto=format&fit=crop" },
  { id:"8",  malayalam:"ഇല്ല",              phonetic:"Illa",               meaning:"No",                                 imageUrl:"https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?w=600&auto=format&fit=crop" },
  { id:"9",  malayalam:"ശരി",              phonetic:"Shari",              meaning:"Okay / Alright",                     imageUrl:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop" },
  { id:"10", malayalam:"എങ്ങനെ ഉണ്ട്?",    phonetic:"Engane undu?",       meaning:"How are you?",                       imageUrl:"https://images.unsplash.com/photo-1516714435131-44d6b64dc6a2?w=600&auto=format&fit=crop" },
  { id:"11", malayalam:"നന്നായി ഉണ്ട്",     phonetic:"Nannayi undu",       meaning:"I am fine",                          imageUrl:"https://images.unsplash.com/photo-1552693673-1bf958298935?w=600&auto=format&fit=crop" },
  { id:"12", malayalam:"പേര് എന്താണ്?",     phonetic:"Peru enthaan?",      meaning:"What is your name?",                 imageUrl:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&auto=format&fit=crop" },

  // ── ASKING FOR HELP & UNDERSTANDING ─────────────────────
  { id:"13", malayalam:"സഹായം",            phonetic:"Sahayam",            meaning:"Help!",                              imageUrl:"https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&auto=format&fit=crop" },
  { id:"14", malayalam:"മനസ്സിലായില്ല",    phonetic:"Manassilayilla",     meaning:"I don't understand",                imageUrl:"https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&auto=format&fit=crop" },
  { id:"15", malayalam:"മലയാളം അറിയില്ല",  phonetic:"Malayalam ariyilla", meaning:"I don't know Malayalam",            imageUrl:"https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&auto=format&fit=crop" },
  { id:"16", malayalam:"ഇത് എവിടെ?",       phonetic:"Ithu evidey?",       meaning:"Where is this?",                     imageUrl:"https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&auto=format&fit=crop" },
  { id:"17", malayalam:"ടോയ്‌ലറ്റ് എവിടെ?", phonetic:"Toilet evidey?",     meaning:"Where is the toilet?",               imageUrl:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&auto=format&fit=crop" },
  { id:"18", malayalam:"ഇംഗ്ലീഷ് അറിയാമോ?", phonetic:"English ariyaamo?",  meaning:"Do you know English?",               imageUrl:"https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&auto=format&fit=crop" },
  { id:"19", malayalam:"വിലാസം",            phonetic:"Vilasam",            meaning:"Address",                            imageUrl:"https://images.unsplash.com/photo-1518619745914-76c09d5e2b38?w=600&auto=format&fit=crop" },

  // ── DIRECTIONS & GETTING AROUND ──────────────────────────
  { id:"20", malayalam:"വലത്ത്",            phonetic:"Valath",             meaning:"Right (direction)",                  imageUrl:"https://images.unsplash.com/photo-1547930-5b54a0b2f8b4?w=600&auto=format&fit=crop" },
  { id:"21", malayalam:"ഇടത്ത്",            phonetic:"Idath",              meaning:"Left (direction)",                   imageUrl:"https://images.unsplash.com/photo-1547930-5b54a0b2f8b4?w=600&auto=format&fit=crop" },
  { id:"22", malayalam:"നേരെ",              phonetic:"Nere",               meaning:"Straight ahead",                     imageUrl:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&auto=format&fit=crop" },
  { id:"23", malayalam:"അടുത്ത്",           phonetic:"Aduthu",             meaning:"Nearby / Close",                     imageUrl:"https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&auto=format&fit=crop" },
  { id:"24", malayalam:"ദൂരെ",              phonetic:"Doore",              meaning:"Far away",                           imageUrl:"https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&auto=format&fit=crop" },
  { id:"25", malayalam:"ഇവിടെ നിർത്തൂ",    phonetic:"Evidey nirthu",      meaning:"Stop here",                          imageUrl:"https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&auto=format&fit=crop" },
  { id:"26", malayalam:"ഓട്ടോ",             phonetic:"Auto",               meaning:"Auto-rickshaw",                      imageUrl:"https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&auto=format&fit=crop" },
  { id:"27", malayalam:"ടാക്സി",            phonetic:"Taxi",               meaning:"Taxi",                               imageUrl:"https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&auto=format&fit=crop" },
  { id:"28", malayalam:"ബസ്",               phonetic:"Bus",                meaning:"Bus",                                imageUrl:"https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&auto=format&fit=crop" },
  { id:"29", malayalam:"ട്രെയിൻ",           phonetic:"Train",              meaning:"Train",                              imageUrl:"https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=600&auto=format&fit=crop" },
  { id:"30", malayalam:"ബോട്ട്",             phonetic:"Boat",               meaning:"Boat / Houseboat",                   imageUrl:"https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?w=600&auto=format&fit=crop" },
  { id:"31", malayalam:"ബസ് സ്റ്റോപ്പ്",    phonetic:"Bus stop",           meaning:"Bus stop",                           imageUrl:"https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&auto=format&fit=crop" },

  // ── PLACES & LANDMARKS ───────────────────────────────────
  { id:"32", malayalam:"ബീച്ച്",            phonetic:"Beach",              meaning:"Beach",                              imageUrl:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop" },
  { id:"33", malayalam:"കായൽ",              phonetic:"Kaayal",             meaning:"Backwaters / Lagoon",                imageUrl:"https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?w=600&auto=format&fit=crop" },
  { id:"34", malayalam:"ക്ഷേത്രം",           phonetic:"Kshetram",           meaning:"Temple",                             imageUrl:"https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=600&auto=format&fit=crop" },
  { id:"35", malayalam:"ഹോട്ടൽ",            phonetic:"Hotel",              meaning:"Hotel / Restaurant",                 imageUrl:"https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&auto=format&fit=crop" },
  { id:"36", malayalam:"ചന്ത",              phonetic:"Chantha",            meaning:"Market / Bazaar",                    imageUrl:"https://images.unsplash.com/photo-1533900298318-6b8da08a523e?w=600&auto=format&fit=crop" },
  { id:"37", malayalam:"ആശുപത്രി",          phonetic:"Aashupathri",        meaning:"Hospital",                           imageUrl:"https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=600&auto=format&fit=crop" },
  { id:"38", malayalam:"ബാങ്ക്",             phonetic:"Bank",               meaning:"Bank",                               imageUrl:"https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?w=600&auto=format&fit=crop" },
  { id:"39", malayalam:"ATM",                phonetic:"ATM",                meaning:"ATM",                                imageUrl:"https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=600&auto=format&fit=crop" },
  { id:"40", malayalam:"വിമാനത്താവളം",      phonetic:"Vimaanathaavalum",   meaning:"Airport",                            imageUrl:"https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&auto=format&fit=crop" },
  { id:"41", malayalam:"കേരളം",             phonetic:"Kerala",             meaning:"Kerala (God's Own Country)",        imageUrl:"https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&auto=format&fit=crop" },

  // ── FOOD & DRINK — KERALA ESSENTIALS ────────────────────
  { id:"42", malayalam:"ഭക്ഷണം",            phonetic:"Bhakshanam",         meaning:"Food",                               imageUrl:"https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=600&auto=format&fit=crop" },
  { id:"43", malayalam:"ചോറ്",               phonetic:"Choru",              meaning:"Rice (cooked)",                      imageUrl:"https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?w=600&auto=format&fit=crop" },
  { id:"44", malayalam:"ചായ",               phonetic:"Chaya",              meaning:"Tea",                                imageUrl:"https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&auto=format&fit=crop" },
  { id:"45", malayalam:"കാപ്പി",             phonetic:"Kaapi",              meaning:"Coffee",                             imageUrl:"https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&auto=format&fit=crop" },
  { id:"46", malayalam:"വെള്ളം",             phonetic:"Vellam",             meaning:"Water",                              imageUrl:"https://images.unsplash.com/photo-1559825481-12a05cc00344?w=600&auto=format&fit=crop" },
  { id:"47", malayalam:"മീൻ",               phonetic:"Meen",               meaning:"Fish",                               imageUrl:"https://images.unsplash.com/photo-1553481187-be93c21490a9?w=600&auto=format&fit=crop" },
  { id:"48", malayalam:"മീൻ കറി",           phonetic:"Meen Kari",          meaning:"Fish curry",                         imageUrl:"https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&auto=format&fit=crop" },
  { id:"49", malayalam:"നാളികേരം",           phonetic:"Naalikeram",         meaning:"Coconut",                            imageUrl:"https://images.unsplash.com/photo-1559181567-c3190ca9be46?w=600&auto=format&fit=crop" },
  { id:"50", malayalam:"ഇളനീർ",             phonetic:"Ilaneeru",           meaning:"Tender coconut water",               imageUrl:"https://images.unsplash.com/photo-1559181567-c3190ca9be46?w=600&auto=format&fit=crop" },
  { id:"51", malayalam:"ദോശ",               phonetic:"Dosa",               meaning:"Dosa (crispy crepe)",                imageUrl:"https://images.unsplash.com/photo-1630383249896-424e482df921?w=600&auto=format&fit=crop" },
  { id:"52", malayalam:"ഇടിയപ്പം",          phonetic:"Idiayappam",         meaning:"String hoppers",                     imageUrl:"https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&auto=format&fit=crop" },
  { id:"53", malayalam:"പുട്ട്",              phonetic:"Puttu",              meaning:"Puttu (steamed rice cake)",          imageUrl:"https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&auto=format&fit=crop" },
  { id:"54", malayalam:"അപ്പം",              phonetic:"Appam",              meaning:"Appam (lacy rice pancake)",          imageUrl:"https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&auto=format&fit=crop" },
  { id:"55", malayalam:"സദ്യ",               phonetic:"Sadya",              meaning:"Kerala feast on banana leaf",        imageUrl:"https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=600&auto=format&fit=crop" },
  { id:"56", malayalam:"ചക്ക",               phonetic:"Chakka",             meaning:"Jackfruit",                          imageUrl:"https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=600&auto=format&fit=crop" },
  { id:"57", malayalam:"കറി",               phonetic:"Kari",               meaning:"Curry",                              imageUrl:"https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&auto=format&fit=crop" },
  { id:"58", malayalam:"സാമ്പാർ",           phonetic:"Sambar",             meaning:"Sambar (lentil stew)",               imageUrl:"https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&auto=format&fit=crop" },
  { id:"59", malayalam:"ബിരിയാണി",          phonetic:"Biriyani",           meaning:"Biryani",                            imageUrl:"https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&auto=format&fit=crop" },
  { id:"60", malayalam:"ഊൺ",                phonetic:"Oon",                meaning:"Meal (formal)",                      imageUrl:"https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=600&auto=format&fit=crop" },

  // ── SHOPPING & MONEY ─────────────────────────────────────
  { id:"61", malayalam:"എത്ര?",             phonetic:"Ethra?",             meaning:"How much? (price)",                  imageUrl:"https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&auto=format&fit=crop" },
  { id:"62", malayalam:"വില",               phonetic:"Vila",               meaning:"Price",                              imageUrl:"https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&auto=format&fit=crop" },
  { id:"63", malayalam:"രൂപ",               phonetic:"Roopa",              meaning:"Rupee",                              imageUrl:"https://images.unsplash.com/photo-1580519542036-c47de6196ba5?w=600&auto=format&fit=crop" },
  { id:"64", malayalam:"കൂടുതൽ",            phonetic:"Kooduthal",          meaning:"More / Too much",                    imageUrl:"https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&auto=format&fit=crop" },
  { id:"65", malayalam:"കുറഞ്ഞ വില",        phonetic:"Kuranja vila",       meaning:"Lower price / Discount",             imageUrl:"https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&auto=format&fit=crop" },
  { id:"66", malayalam:"വേണ്ട",              phonetic:"Venda",              meaning:"No need / I don't want it",         imageUrl:"https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?w=600&auto=format&fit=crop" },
  { id:"67", malayalam:"കൊള്ളാം",           phonetic:"Kollam",             meaning:"Good / That's fine",                imageUrl:"https://images.unsplash.com/photo-1552693673-1bf958298935?w=600&auto=format&fit=crop" },
  { id:"68", malayalam:"ബിൽ",               phonetic:"Bill",               meaning:"Bill / Check",                       imageUrl:"https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&auto=format&fit=crop" },

  // ── NUMBERS ──────────────────────────────────────────────
  { id:"69", malayalam:"ഒന്ന്",              phonetic:"Onnu",               meaning:"One (1)",                            imageUrl:"https://images.unsplash.com/photo-1509228468518-180dd4864904?w=600&auto=format&fit=crop" },
  { id:"70", malayalam:"രണ്ട്",              phonetic:"Randu",              meaning:"Two (2)",                            imageUrl:"https://images.unsplash.com/photo-1509228468518-180dd4864904?w=600&auto=format&fit=crop" },
  { id:"71", malayalam:"മൂന്ന്",             phonetic:"Moonnu",             meaning:"Three (3)",                          imageUrl:"https://images.unsplash.com/photo-1509228468518-180dd4864904?w=600&auto=format&fit=crop" },
  { id:"72", malayalam:"നാല്",               phonetic:"Naalu",              meaning:"Four (4)",                           imageUrl:"https://images.unsplash.com/photo-1509228468518-180dd4864904?w=600&auto=format&fit=crop" },
  { id:"73", malayalam:"അഞ്ച്",              phonetic:"Anchu",              meaning:"Five (5)",                           imageUrl:"https://images.unsplash.com/photo-1509228468518-180dd4864904?w=600&auto=format&fit=crop" },
  { id:"74", malayalam:"ആറ്",                phonetic:"Aaru",               meaning:"Six (6)",                            imageUrl:"https://images.unsplash.com/photo-1509228468518-180dd4864904?w=600&auto=format&fit=crop" },
  { id:"75", malayalam:"ഏഴ്",                phonetic:"Ezhu",               meaning:"Seven (7)",                          imageUrl:"https://images.unsplash.com/photo-1509228468518-180dd4864904?w=600&auto=format&fit=crop" },
  { id:"76", malayalam:"എട്ട്",               phonetic:"Ettu",               meaning:"Eight (8)",                          imageUrl:"https://images.unsplash.com/photo-1509228468518-180dd4864904?w=600&auto=format&fit=crop" },
  { id:"77", malayalam:"ഒൻപത്",             phonetic:"Onpathu",            meaning:"Nine (9)",                           imageUrl:"https://images.unsplash.com/photo-1509228468518-180dd4864904?w=600&auto=format&fit=crop" },
  { id:"78", malayalam:"പത്ത്",              phonetic:"Pathu",              meaning:"Ten (10)",                           imageUrl:"https://images.unsplash.com/photo-1509228468518-180dd4864904?w=600&auto=format&fit=crop" },
  { id:"79", malayalam:"നൂറ്",               phonetic:"Nooru",              meaning:"One hundred (100)",                  imageUrl:"https://images.unsplash.com/photo-1509228468518-180dd4864904?w=600&auto=format&fit=crop" },
  { id:"80", malayalam:"ആയിരം",             phonetic:"Aayiram",            meaning:"One thousand (1000)",                imageUrl:"https://images.unsplash.com/photo-1509228468518-180dd4864904?w=600&auto=format&fit=crop" },

  // ── TIME & WEATHER ───────────────────────────────────────
  { id:"81", malayalam:"ഇന്ന്",              phonetic:"Innu",               meaning:"Today",                              imageUrl:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&auto=format&fit=crop" },
  { id:"82", malayalam:"നാളെ",               phonetic:"Naale",              meaning:"Tomorrow",                           imageUrl:"https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?w=600&auto=format&fit=crop" },
  { id:"83", malayalam:"ഇപ്പോൾ",             phonetic:"Ippol",              meaning:"Now",                                imageUrl:"https://images.unsplash.com/photo-1501791330673-603715379ded?w=600&auto=format&fit=crop" },
  { id:"84", malayalam:"രാവിലെ",             phonetic:"Ravile",             meaning:"Morning",                            imageUrl:"https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=600&auto=format&fit=crop" },
  { id:"85", malayalam:"വൈകുന്നേരം",         phonetic:"Vaikunneram",        meaning:"Evening",                            imageUrl:"https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&auto=format&fit=crop" },
  { id:"86", malayalam:"രാത്രി",             phonetic:"Raathri",            meaning:"Night",                              imageUrl:"https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?w=600&auto=format&fit=crop" },
  { id:"87", malayalam:"മഴ",                 phonetic:"Mazha",              meaning:"Rain (Kerala monsoon!)",             imageUrl:"https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?w=600&auto=format&fit=crop" },
  { id:"88", malayalam:"ചൂട്",               phonetic:"Choodu",             meaning:"Heat / It's hot",                   imageUrl:"https://images.unsplash.com/photo-1504608524841-42584120d1fc?w=600&auto=format&fit=crop" },
  { id:"89", malayalam:"തണുപ്പ്",             phonetic:"Thanuppu",           meaning:"Cold",                               imageUrl:"https://images.unsplash.com/photo-1418985991508-e47386d96a71?w=600&auto=format&fit=crop" },
  { id:"90", malayalam:"കാറ്റ്",              phonetic:"Kaattu",             meaning:"Wind / Breeze",                      imageUrl:"https://images.unsplash.com/photo-1504608524841-42584120d1fc?w=600&auto=format&fit=crop" },

  // ── HEALTH & EMERGENCY ───────────────────────────────────
  { id:"91", malayalam:"ഡോക്ടർ",             phonetic:"Doctor",             meaning:"Doctor",                             imageUrl:"https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&auto=format&fit=crop" },
  { id:"92", malayalam:"മരുന്ന്",             phonetic:"Marunnu",            meaning:"Medicine",                           imageUrl:"https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=600&auto=format&fit=crop" },
  { id:"93", malayalam:"വേദന",               phonetic:"Vedana",             meaning:"Pain",                               imageUrl:"https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&auto=format&fit=crop" },
  { id:"94", malayalam:"പനി",                phonetic:"Pani",               meaning:"Fever",                              imageUrl:"https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&auto=format&fit=crop" },
  { id:"95", malayalam:"ക്ഷീണം",             phonetic:"Kshinam",            meaning:"Tiredness / Fatigue",                imageUrl:"https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=600&auto=format&fit=crop" },
  { id:"96", malayalam:"പോലീസ്",             phonetic:"Police",             meaning:"Police",                             imageUrl:"https://images.unsplash.com/photo-1521791055366-0d553872952f?w=600&auto=format&fit=crop" },

  // ── ACCOMMODATION ────────────────────────────────────────
  { id:"97", malayalam:"മുറി",               phonetic:"Muri",               meaning:"Room",                               imageUrl:"https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&auto=format&fit=crop" },
  { id:"98", malayalam:"താക്കോൽ",            phonetic:"Thaakkol",           meaning:"Key",                                imageUrl:"https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&auto=format&fit=crop" },
  { id:"99", malayalam:"ചൂടുവെള്ളം",         phonetic:"Chudu vellam",       meaning:"Hot water",                          imageUrl:"https://images.unsplash.com/photo-1559825481-12a05cc00344?w=600&auto=format&fit=crop" },
  { id:"100", malayalam:"ഫാൻ",              phonetic:"Fan",                meaning:"Fan (ceiling / wall)",               imageUrl:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&auto=format&fit=crop" },
  { id:"101", malayalam:"AC",                phonetic:"AC",                 meaning:"Air conditioning",                   imageUrl:"https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&auto=format&fit=crop" },
  { id:"102", malayalam:"ചെക്ക് ഔട്ട്",      phonetic:"Check out",          meaning:"Check out",                          imageUrl:"https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&auto=format&fit=crop" },

  // ── FEELINGS & USEFUL EXPRESSIONS ───────────────────────
  { id:"103", malayalam:"വിശക്കുന്നു",       phonetic:"Vishakkunnu",        meaning:"I'm hungry",                        imageUrl:"https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=600&auto=format&fit=crop" },
  { id:"104", malayalam:"ദാഹിക്കുന്നു",      phonetic:"Daahikkunnu",        meaning:"I'm thirsty",                       imageUrl:"https://images.unsplash.com/photo-1559825481-12a05cc00344?w=600&auto=format&fit=crop" },
  { id:"105", malayalam:"ക്ഷീണിച്ചു",        phonetic:"Ksheenichu",         meaning:"I'm tired",                         imageUrl:"https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=600&auto=format&fit=crop" },
  { id:"106", malayalam:"ഇഷ്ടമായി",          phonetic:"Ishtamaayi",         meaning:"I loved it / I like it",             imageUrl:"https://images.unsplash.com/photo-1552693673-1bf958298935?w=600&auto=format&fit=crop" },
  { id:"107", malayalam:"മസ്ത്",              phonetic:"Masth",              meaning:"Awesome! (Kerala slang)",            imageUrl:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop" },
  { id:"108", malayalam:"ഭംഗി",              phonetic:"Bhangi",             meaning:"Beautiful / Pretty",                 imageUrl:"https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&auto=format&fit=crop" },
  { id:"109", malayalam:"നല്ലത്",             phonetic:"Nallath",            meaning:"Good / Nice",                        imageUrl:"https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=600&auto=format&fit=crop" },
  { id:"110", malayalam:"ചെറിയ",             phonetic:"Cheriya",            meaning:"Small / Little",                     imageUrl:"https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&auto=format&fit=crop" },
  { id:"111", malayalam:"വലിയ",              phonetic:"Valiya",             meaning:"Big / Large",                        imageUrl:"https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&auto=format&fit=crop" },
  { id:"112", malayalam:"പതുക്കെ",           phonetic:"Pathukke",           meaning:"Slowly / Gently",                    imageUrl:"https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&auto=format&fit=crop" },
  { id:"113", malayalam:"വേഗം",              phonetic:"Vegam",              meaning:"Fast / Quickly",                     imageUrl:"https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&auto=format&fit=crop" },

  // ── FAMILY & ADDRESS TERMS ───────────────────────────────
  // In Kerala, these are used to address strangers respectfully too
  { id:"114", malayalam:"അമ്മ",              phonetic:"Amma",               meaning:"Mother (also: respectful to women)",  imageUrl:"https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=600&auto=format&fit=crop" },
  { id:"115", malayalam:"അച്ഛൻ",             phonetic:"Achhan",             meaning:"Father (also: respectful to men)",    imageUrl:"https://images.unsplash.com/photo-1547995886-6dc09384c6e8?w=600&auto=format&fit=crop" },
  { id:"116", malayalam:"ചേട്ടൻ",            phonetic:"Chettan",            meaning:"Elder brother (address any man)",     imageUrl:"https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?w=600&auto=format&fit=crop" },
  { id:"117", malayalam:"ചേച്ചി",            phonetic:"Chechi",             meaning:"Elder sister (address any woman)",    imageUrl:"https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&auto=format&fit=crop" },
  { id:"118", malayalam:"കുഞ്ഞ്",             phonetic:"Kunju",              meaning:"Little one (term of endearment)",     imageUrl:"https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=600&auto=format&fit=crop" },

  // ── KERALA CULTURE & NATURE ──────────────────────────────
  { id:"119", malayalam:"ആന",                phonetic:"Aana",               meaning:"Elephant (seen at Kerala temples!)",  imageUrl:"https://images.unsplash.com/photo-1548366086-7f1b76106622?w=600&auto=format&fit=crop" },
  { id:"120", malayalam:"കഥകളി",             phonetic:"Kathakali",          meaning:"Kathakali (classical dance)",         imageUrl:"https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=600&auto=format&fit=crop" },
  { id:"121", malayalam:"ഓണം",               phonetic:"Onam",               meaning:"Onam (harvest festival)",             imageUrl:"https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=600&auto=format&fit=crop" },
  { id:"122", malayalam:"കടൽ",               phonetic:"Kadal",              meaning:"Sea / Ocean",                        imageUrl:"https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=600&auto=format&fit=crop" },
  { id:"123", malayalam:"മല",                phonetic:"Mala",               meaning:"Mountain / Hill",                    imageUrl:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&auto=format&fit=crop" },
  { id:"124", malayalam:"കാട്",               phonetic:"Kaadu",              meaning:"Forest / Jungle",                    imageUrl:"https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&auto=format&fit=crop" },
  { id:"125", malayalam:"നദി",               phonetic:"Nadi",               meaning:"River",                              imageUrl:"https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?w=600&auto=format&fit=crop" },

];
