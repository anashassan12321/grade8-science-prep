export const appData = {
    math: {
        title: "Mathematics",
        subtitle: "Algebra, Numbers, Percentages, Ratios",
        icon: "🧮",
        themeText: "text-rose-600",
        themeBg: "bg-rose-50",
        themeBorder: "border-rose-200",
        themeAccent: "bg-rose-500",
        topics: [
            {
                title: "Prime Numbers",
                emoji: "🔢",
                definition: "A whole number greater than 1 whose only factors are 1 and itself. It can only be divided evenly by 1 and the number itself.",
                facts: [
                    "<b>Definition:</b> A prime has exactly <i>two</i> distinct factors: 1 and itself (e.g., 2, 3, 5, 7, 11, 13).",
                    "<b>2 is the only even prime</b> — every other even number is divisible by 2, so it can't be prime.",
                    "<b>1 is NOT prime</b> (only one factor) and NOT composite (you need at least two).",
                    "<b>Prime Factorization:</b> Writing a number as a product of its primes (e.g., 60 = 2 × 2 × 3 × 5)."
                ],
                eli5: "Prime numbers are like loners — they only want to play with themselves and the number 1. If you try to split them into equal groups, you just can't… except into one big group or a bunch of ones!",
                qa: [
                    { q: "Is 9 a prime number? Why or why not?", a: "No. 9 = 3 × 3, so it has factors other than 1 and 9, making it composite." },
                    { q: "Find the prime factorization of 24.", a: "24 = 2 × 2 × 2 × 3  (or 2³ × 3)." }
                ],
                mcqs: [
                    { q: "Which of the following is a prime number?", options: ["9", "15", "17"], correct: 2 },
                    { q: "How many factors does the number 1 have?", options: ["0", "1", "2"], correct: 1 },
                    { q: "The prime factorization of 12 is:", options: ["2 × 2 × 3", "3 × 4", "2 × 6"], correct: 0 }
                ]
            },
            {
                title: "Highest Common Factor (HCF)",
                emoji: "✂️",
                definition: "The largest positive integer that divides two or more numbers exactly, leaving no remainder. Also called the Greatest Common Divisor (GCD).",
                facts: [
                    "<b>Method 1 — Listing:</b> List all factors of each number and pick the biggest one they share.",
                    "<b>Method 2 — Prime Factorization:</b> Find the prime factors of each number and multiply the common ones (using the smallest power).",
                    "<b>Real-world use:</b> Cutting two ropes of different lengths into the longest possible equal pieces.",
                    "<b>HCF of two co-prime numbers</b> (e.g., 8 & 9) is always <b>1</b>."
                ],
                eli5: "Imagine you have a 12-cm ribbon and an 18-cm ribbon. The HCF (6) tells you the longest piece you can cut both ribbons into so nothing is wasted — six 6-cm pieces from each!",
                qa: [
                    { q: "Find the HCF of 12 and 18.", a: "Factors of 12: 1, 2, 3, 4, 6, 12. Factors of 18: 1, 2, 3, 6, 9, 18. Common factors: 1, 2, 3, 6. HCF = 6." },
                    { q: "What is the HCF of two co-prime numbers like 8 and 15?", a: "1, because they share no common factor other than 1." }
                ],
                mcqs: [
                    { q: "The HCF of 24 and 36 is:", options: ["6", "12", "18"], correct: 1 },
                    { q: "The HCF of two consecutive numbers is always:", options: ["1", "2", "The smaller number"], correct: 0 }
                ]
            },
            {
                title: "Lowest Common Multiple (LCM)",
                emoji: "🔁",
                definition: "The smallest positive integer that is divisible by two or more given numbers.",
                facts: [
                    "<b>Method 1 — Listing:</b> List multiples of each number and find the smallest common one.",
                    "<b>Method 2 — Prime Factorization:</b> Multiply each prime factor using its <i>highest</i> power across the numbers.",
                    "<b>Real-world use:</b> Figuring out when two events will happen at the same time (alarm rings every 6 mins, light blinks every 8 mins → first match at 24 mins).",
                    "<b>Shortcut:</b> For any two numbers, a × b = HCF × LCM."
                ],
                eli5: "Two friends visit you — one every 4 days, one every 6 days. The LCM (12) tells you the first day BOTH of them show up together. After 12 days, it's a party!",
                qa: [
                    { q: "Find the LCM of 4 and 6.", a: "Multiples of 4: 4, 8, 12, 16… Multiples of 6: 6, 12, 18… The smallest common multiple is 12. LCM = 12." },
                    { q: "If HCF(a, b) = 6 and a × b = 180, what is LCM?", a: "LCM = (a × b) / HCF = 180 / 6 = 30." }
                ],
                mcqs: [
                    { q: "The LCM of 5 and 7 is:", options: ["12", "35", "70"], correct: 1 },
                    { q: "Two bells ring every 8 and 12 minutes. When do they ring together first?", options: ["20 mins", "24 mins", "48 mins"], correct: 1 }
                ]
            },
            {
                title: "Basic Algebra",
                emoji: "✖️",
                definition: "A branch of mathematics where letters and symbols are used to represent unknown numbers in equations and expressions.",
                facts: [
                    "<b>Variable:</b> A letter (like <i>x</i> or <i>y</i>) that represents an unknown number.",
                    "<b>Constant:</b> A number on its own, like 3 or 10.",
                    "<b>Equation:</b> A math sentence stating that two things are equal (e.g., x + 2 = 5).",
                    "<b>Golden Rule:</b> Whatever you do to one side of an equation, you must do to the other side too."
                ],
                eli5: "Algebra is like a secret code puzzle. If I say 'I have some apples, and my friend gave me 2 more, now I have 5', algebra lets us write this as 'x + 2 = 5' to figure out I started with 3 apples!",
                qa: [
                    { q: "What is a variable in algebra?", a: "A letter or symbol used to represent a value that can change or is currently unknown." },
                    { q: "Solve for x: x − 4 = 10", a: "x = 14. (Because 14 − 4 = 10)" }
                ],
                mcqs: [
                    { q: "If 2x = 10, what is the value of x?", options: ["4", "5", "8"], correct: 1 },
                    { q: "Which of the following is a constant?", options: ["x", "y", "7"], correct: 2 }
                ]
            },
            {
                title: "Percentages",
                emoji: "💯",
                definition: "A way of expressing a number as a fraction of 100. The symbol '%' means 'per hundred'.",
                facts: [
                    "<b>Convert fraction → %:</b> Multiply the fraction by 100 (e.g., 1/4 = 25%).",
                    "<b>Convert % → decimal:</b> Divide by 100 (e.g., 35% = 0.35).",
                    "<b>Finding X% of a number:</b> Multiply the number by (X/100).",
                    "<b>% Increase/Decrease:</b> ((New − Old) / Old) × 100."
                ],
                eli5: "Think of a pizza cut into 100 tiny slices. Each slice is 1%. If you eat 25 slices, you ate 25% of the pizza — that's the same as 1/4 of it!",
                qa: [
                    { q: "What does 'percent' literally mean?", a: "It means 'per hundred' or 'out of 100'." },
                    { q: "Find 20% of 250.", a: "20% of 250 = (20 / 100) × 250 = 50." }
                ],
                mcqs: [
                    { q: "What is 25% written as a fraction in simplest form?", options: ["1/2", "1/4", "1/5"], correct: 1 },
                    { q: "A shirt costs Rs. 800 and is on sale for 25% off. What is the sale price?", options: ["Rs. 600", "Rs. 625", "Rs. 700"], correct: 0 }
                ]
            },
            {
                title: "Ratio and Rate",
                emoji: "⚖️",
                definition: "A ratio compares two quantities of the same kind; a rate compares two quantities of different kinds (often per unit of time).",
                facts: [
                    "<b>Ratio:</b> Written as <i>a : b</i> or a/b. Can be simplified like a fraction (e.g., 6 : 4 = 3 : 2).",
                    "<b>Rate:</b> Usually has different units, like km/hour or words/minute.",
                    "<b>Proportion:</b> Two equal ratios, e.g., 2/3 = 4/6. Cross-multiply to solve.",
                    "<b>Unit Rate:</b> The rate for <i>one</i> unit (e.g., Rs. 120 for 4 apples → Rs. 30 per apple)."
                ],
                eli5: "If you mix 2 cups of orange juice with 4 cups of water, the ratio is 2:4. That's the same flavor as mixing 1 cup of juice with 2 cups of water — the ratio 1:2 is just simpler!",
                qa: [
                    { q: "Simplify the ratio 18 : 24.", a: "Divide both by 6 → 3 : 4." },
                    { q: "A car travels 240 km in 4 hours. What is its speed (rate)?", a: "Speed = 240 ÷ 4 = 60 km/hour." }
                ],
                mcqs: [
                    { q: "The ratio 15 : 25 simplifies to:", options: ["3 : 5", "1 : 2", "5 : 8"], correct: 0 },
                    { q: "If 3 pens cost Rs. 90, what is the cost of 1 pen (unit rate)?", options: ["Rs. 20", "Rs. 25", "Rs. 30"], correct: 2 }
                ]
            }
        ]
    },
    english: {
        title: "English Language",
        subtitle: "Grammar, Tenses, Composition",
        icon: "📚",
        themeText: "text-amber-600",
        themeBg: "bg-amber-50",
        themeBorder: "border-amber-200",
        themeAccent: "bg-amber-500",
        topics: [
            {
                title: "Noun Types (Collective, Abstract, Material)",
                emoji: "📝",
                definition: "Beyond common and proper nouns, English has special categories of nouns that name groups, ideas, or the substances things are made from.",
                facts: [
                    "<b>Collective Noun:</b> Names a <i>group</i> as one unit (e.g., <i>flock</i> of sheep, <i>team</i> of players, <i>bouquet</i> of flowers).",
                    "<b>Abstract Noun:</b> Names something you can't see or touch — an idea, feeling or quality (e.g., <i>honesty</i>, <i>love</i>, <i>freedom</i>, <i>childhood</i>).",
                    "<b>Material Noun:</b> Names the material or substance things are made of (e.g., <i>gold</i>, <i>cotton</i>, <i>water</i>, <i>wood</i>).",
                    "<b>Tip:</b> If you can ask 'what is it made of?' → it's likely a material noun."
                ],
                eli5: "Collective nouns are 'group words' (a pride of lions). Abstract nouns are 'feeling words' you can't point at (like bravery). Material nouns are 'stuff words' — cotton, gold, water — the things other objects are made from!",
                qa: [
                    { q: "Identify the noun type: 'A swarm of bees attacked the hive.'", a: "'Swarm' is a Collective Noun (it names a group of bees as one unit)." },
                    { q: "Is 'happiness' a common, abstract, or collective noun?", a: "Abstract noun — it's a feeling/quality, not something physical." }
                ],
                mcqs: [
                    { q: "Which is a collective noun?", options: ["Gold", "Honesty", "Flock"], correct: 2 },
                    { q: "'Cotton' is an example of a:", options: ["Material noun", "Collective noun", "Abstract noun"], correct: 0 },
                    { q: "Which word is an ABSTRACT noun?", options: ["Table", "Courage", "Team"], correct: 1 }
                ]
            },
            {
                title: "Degrees of Adjectives",
                emoji: "📊",
                definition: "Adjectives have three forms (degrees) used to compare things: positive, comparative, and superlative.",
                facts: [
                    "<b>Positive:</b> The base form (e.g., <i>tall</i>).",
                    "<b>Comparative:</b> Compares <i>two</i> things — usually ends in <i>-er</i> or uses 'more' (e.g., <i>taller</i>, <i>more intelligent</i>).",
                    "<b>Superlative:</b> Compares <i>three or more</i> things — usually ends in <i>-est</i> or uses 'most' (e.g., <i>tallest</i>, <i>most intelligent</i>).",
                    "<b>Irregular:</b> good → better → best &nbsp; bad → worse → worst &nbsp; many/much → more → most."
                ],
                eli5: "If Ali is tall (1 person), he's in the positive. If Ali is taller than Ahmed (2 people), we use comparative. If Ali is the tallest in the class (3+ people), we use superlative!",
                qa: [
                    { q: "Write the three degrees of 'beautiful'.", a: "Positive: beautiful. Comparative: more beautiful. Superlative: most beautiful." },
                    { q: "Which is correct: 'She is the smartest girl' or 'She is a smarter girl'?", a: "Use 'smartest' (superlative) when comparing her to a group of 3+; use 'smarter' (comparative) when comparing her to just one other." }
                ],
                mcqs: [
                    { q: "The comparative form of 'good' is:", options: ["Gooder", "Better", "Best"], correct: 1 },
                    { q: "Choose the correct superlative: 'Mount Everest is the ___ mountain in the world.'", options: ["higher", "highest", "more high"], correct: 1 }
                ]
            },
            {
                title: "Three Forms of Verbs",
                emoji: "🔤",
                definition: "Every English verb has three basic forms: the base (V1), the past simple (V2), and the past participle (V3).",
                facts: [
                    "<b>V1 (Base Form):</b> The plain form used with 'to' or as an imperative (e.g., <i>go</i>, <i>eat</i>).",
                    "<b>V2 (Past Simple):</b> Used alone for past actions (e.g., <i>went</i>, <i>ate</i>).",
                    "<b>V3 (Past Participle):</b> Used with 'has/have/had' or in passive voice (e.g., <i>gone</i>, <i>eaten</i>).",
                    "<b>Regular verbs:</b> V2 and V3 add <i>-ed</i> (walk → walked → walked).",
                    "<b>Irregular verbs:</b> V2 and V3 do NOT follow the -ed rule (go → went → gone)."
                ],
                eli5: "Think of V1 as the verb's plain name, V2 as what it 'became' yesterday, and V3 as the 'done' version you keep in a jar for later (like 'I have eaten').",
                qa: [
                    { q: "Give the three forms of 'write'.", a: "V1: write &nbsp; V2: wrote &nbsp; V3: written" },
                    { q: "Fill in: 'She has ___ (eat) breakfast already.'", a: "eaten (V3 — used with 'has')." }
                ],
                mcqs: [
                    { q: "What is V2 of 'begin'?", options: ["Begun", "Began", "Begun"], correct: 1 },
                    { q: "Choose the correct V3: 'I have ___ the book.' (read)", options: ["Read", "Readed", "Readen"], correct: 0 }
                ]
            },
            {
                title: "Tenses",
                emoji: "⏳",
                definition: "Forms of a verb that show WHEN an action happens — past, present, or future.",
                facts: [
                    "<b>Present Indefinite:</b> Habit or general truth (e.g., 'I <i>walk</i> to school.').",
                    "<b>Past Indefinite:</b> A finished action (e.g., 'I <i>walked</i> yesterday.').",
                    "<b>Future Indefinite:</b> Will happen later (e.g., 'I <i>will walk</i> tomorrow.').",
                    "<b>Present Continuous:</b> Happening right now (e.g., 'I <i>am walking</i>.').",
                    "<b>Present Perfect:</b> Past action with present relevance (e.g., 'I <i>have walked</i> ten miles.')."
                ],
                eli5: "Tenses are like a time machine for verbs. They instantly tell the reader if something happened yesterday, is happening today, or will happen tomorrow!",
                qa: [
                    { q: "What is the past tense of 'eat'?", a: "Ate." },
                    { q: "Change to Future Indefinite: 'She reads a book.'", a: "'She will read a book.'" }
                ],
                mcqs: [
                    { q: "Which sentence is in the Past Indefinite tense?", options: ["I will run.", "I ran to the store.", "I am running."], correct: 1 },
                    { q: "Choose the correct Present Continuous: 'They ___ (play) cricket now.'", options: ["play", "are playing", "played"], correct: 1 }
                ]
            },
            {
                title: "Translation (Urdu → English)",
                emoji: "🌐",
                definition: "Translating accurately from Urdu sentences into natural, grammatically correct English — paying close attention to tense and verb forms.",
                facts: [
                    "<b>Step 1:</b> Identify the tense of the Urdu verb (present / past / future).",
                    "<b>Step 2:</b> Find the subject (who is doing the action).",
                    "<b>Step 3:</b> Build the English sentence in the matching tense.",
                    "<b>Common Pitfall:</b> Urdu 'main khaata hoon' = 'I eat' (Present) — not 'I am eating' (which would be 'main kha raha hoon')."
                ],
                eli5: "Translation is like being a bridge between two languages! Your job is to help Urdu words 'jump across' to English — but you have to make sure they land on the right tense (past, present, or future).",
                qa: [
                    { q: "Translate: 'میں سکول جاتا ہوں۔'", a: "'I go to school.' (Present Indefinite — habitual action.)" },
                    { q: "Translate: 'وہ کتاب پڑھے گا۔'", a: "'He/She will read the book.' (Future Indefinite.)" }
                ],
                mcqs: [
                    { q: "The Urdu sentence 'میں نے کھانا کھایا۔' means:", options: ["I eat food.", "I ate food.", "I will eat food."], correct: 1 },
                    { q: "Pick the correct tense for: 'وہ بولتا ہے۔'", options: ["Past", "Present", "Future"], correct: 1 }
                ]
            },
            {
                title: "Reading Comprehension",
                emoji: "📖",
                definition: "Understanding an unseen passage by identifying the main idea, supporting details, vocabulary in context, and the author's purpose.",
                facts: [
                    "<b>Skim first:</b> Read quickly to get the <i>main idea</i> of each paragraph.",
                    "<b>Then scan:</b> Look back for <i>specific details</i> when answering questions.",
                    "<b>Vocabulary in context:</b> Guess unknown words from the words around them.",
                    "<b>Question types:</b> Factual (directly stated), Inferential (read between lines), Vocabulary."
                ],
                eli5: "Reading comprehension is like being a detective. First you read the passage quickly to spot the big idea, then you go back and look for clues (specific facts) to answer the questions!",
                qa: [
                    { q: "What is the difference between 'skim' and 'scan'?", a: "Skim = read quickly for the main idea. Scan = look quickly for a specific piece of information." },
                    { q: "What is an 'inferential' question?", a: "A question whose answer is NOT directly written in the passage — you have to figure it out from clues." }
                ],
                mcqs: [
                    { q: "Where in a passage is the main idea usually found?", options: ["Only in the last sentence", "Often in the first or last sentence of a paragraph", "Only in the title"], correct: 1 },
                    { q: "If you don't know a word's meaning, you should:", options: ["Skip it", "Guess from context", "Make one up"], correct: 1 }
                ]
            },
            {
                title: "Paragraph Writing (70–90 words)",
                emoji: "✍️",
                definition: "Writing a short, well-organised paragraph on a general topic for the admission test. Aim for 70–90 words.",
                facts: [
                    "<b>Structure:</b> Topic sentence → 2–3 supporting sentences → Concluding sentence.",
                    "<b>Length:</b> Count words carefully — aim for 70 to 90 words.",
                    "<b>Tense:</b> Stay in ONE tense throughout (usually Present Indefinite).",
                    "<b>Neatness:</b> Use capital letters, full stops, and indent the first line."
                ],
                eli5: "A paragraph is like a tiny sandwich! The topic sentence is the top bread (your main idea). The fillings are your supporting details. The bottom bread is your closing sentence that wraps it all up.",
                qa: [
                    { q: "How many sentences should a 70–90 word paragraph usually have?", a: "About 5 to 7 sentences." },
                    { q: "Why should you stay in one tense?", a: "Switching tenses confuses the reader and lowers your score for grammar." }
                ],
                mcqs: [
                    { q: "The first sentence of a paragraph is usually the:", options: ["Conclusion", "Topic sentence", "Question"], correct: 1 },
                    { q: "Which tense is best for describing a general topic?", options: ["Past Indefinite", "Present Indefinite", "Future"], correct: 1 }
                ]
            }
        ]
    },
    biology: {
        title: "Biology",
        subtitle: "Transportation in Plants & Animals",
        icon: "🧬",
        themeText: "text-emerald-600",
        themeBg: "bg-emerald-50",
        themeBorder: "border-emerald-200",
        themeAccent: "bg-emerald-500",
        topics: [
            {
                title: "Transportation in Plants",
                emoji: "🌿",
                definition: "The movement of water, minerals, and food from one part of a plant to another using specialised tissues like xylem and phloem.",
                facts: [
                    "<b>Xylem:</b> Transports water and minerals <i>from roots to leaves</i>.",
                    "<b>Phloem:</b> Transports food (sugar) <i>from leaves to all parts of the plant</i>.",
                    "<b>Transpiration:</b> Loss of water vapor from leaves — pulls water up through the xylem.",
                    "<b>Stomata:</b> Tiny pores on leaves for gas exchange (CO₂ in, O₂ out)."
                ],
                eli5: "Plants don't have blood like we do. They have tiny pipes inside their stems! One pipe (xylem) drinks up water from the dirt like a long straw. The other pipe (phloem) takes the yummy food made in the leaves and shares it with the whole plant.",
                qa: [
                    { q: "What is transpiration?", a: "The loss of water vapor from the leaves of a plant." },
                    { q: "What is the function of stomata?", a: "Tiny pores on leaves used for gas exchange (taking in carbon dioxide and releasing oxygen)." }
                ],
                mcqs: [
                    { q: "Which tissue carries water and minerals from the roots?", options: ["Phloem", "Xylem", "Stomata"], correct: 1 },
                    { q: "Phloem carries ___ throughout the plant.", options: ["Water", "Air", "Food"], correct: 2 }
                ]
            },
            {
                title: "Transportation in Animals — Digestive System",
                emoji: "🥪",
                definition: "The digestive system breaks down food into simpler substances so the body can absorb nutrients for energy, growth, and repair.",
                facts: [
                    "<b>Main organs:</b> Mouth → Esophagus → Stomach → Small Intestine → Large Intestine → Rectum → Anus.",
                    "<b>Digestion starts in the mouth</b> (chewing + saliva).",
                    "<b>Absorption:</b> Most nutrient absorption happens in the <i>small intestine</i>.",
                    "<b>Large intestine</b> absorbs water and forms solid waste (faeces)."
                ],
                eli5: "Your body is like a powerful engine, and food is the fuel. Digestion is a magical factory inside you that crushes the food, melts it down into an invisible soup, and pulls out all the good stuff so you have the energy to run and play!",
                qa: [
                    { q: "Where does digestion begin?", a: "Digestion begins in the mouth." },
                    { q: "Where does most nutrient absorption occur?", a: "In the small intestine." }
                ],
                mcqs: [
                    { q: "Digestion starts in the:", options: ["Stomach", "Mouth", "Esophagus"], correct: 1 },
                    { q: "Which organ absorbs the most nutrients?", options: ["Large Intestine", "Small Intestine", "Stomach"], correct: 1 }
                ]
            },
            {
                title: "Transportation in Animals — Blood Circulatory System",
                emoji: "🫀",
                definition: "The system that transports blood, oxygen, nutrients, hormones and wastes throughout the body via the heart and blood vessels.",
                facts: [
                    "<b>Heart:</b> The muscular organ that pumps blood.",
                    "<b>Arteries:</b> Carry blood <i>away</i> from the heart (usually oxygen-rich).",
                    "<b>Veins:</b> Carry blood <i>toward</i> the heart (usually oxygen-poor).",
                    "<b>Capillaries:</b> Tiny vessels where gases/nutrients/wastes are exchanged with cells.",
                    "<b>Red Blood Cells:</b> Carry oxygen (give blood its red colour).",
                    "<b>White Blood Cells:</b> Fight germs and infections."
                ],
                eli5: "The heart is a pump pushing a massive river of blood around your body. The 'red boats' (red blood cells) carry oxygen, and the 'white boats' (white blood cells) are brave police officers that fight off germs!",
                qa: [
                    { q: "What is the difference between arteries and veins?", a: "Arteries carry blood away from the heart; veins carry blood back toward the heart." },
                    { q: "What do white blood cells do?", a: "They fight diseases and infections (they're part of the immune system)." }
                ],
                mcqs: [
                    { q: "Which blood vessels carry blood AWAY from the heart?", options: ["Veins", "Arteries", "Capillaries"], correct: 1 },
                    { q: "Red blood cells carry:", options: ["Wastes", "Diseases", "Oxygen"], correct: 2 }
                ]
            }
        ]
    },
    chemistry: {
        title: "Chemistry",
        subtitle: "Atoms, Metals, Acids & Bases",
        icon: "🧪",
        themeText: "text-purple-600",
        themeBg: "bg-purple-50",
        themeBorder: "border-purple-200",
        themeAccent: "bg-purple-500",
        topics: [
            {
                title: "Atoms & Molecules",
                emoji: "⚛️",
                definition: "Atoms are the fundamental building blocks of all matter; molecules are two or more atoms chemically joined together.",
                facts: [
                    "<b>Atom:</b> The smallest particle of an element that can take part in a chemical reaction.",
                    "<b>Molecule:</b> Two or more atoms chemically joined (e.g., O₂, H₂O, CO₂).",
                    "<b>Element:</b> Made of only one kind of atom (e.g., pure gold = Au atoms only).",
                    "<b>Compound:</b> Two or more <i>different</i> elements chemically combined (e.g., H₂O = hydrogen + oxygen)."
                ],
                eli5: "Atoms are the tiny invisible LEGO blocks of the universe. Everything is made of them! When you snap two or more of these blocks together, you create a molecule. If the blocks are different colours, you've made a compound!",
                qa: [
                    { q: "What is the smallest unit of an element?", a: "An atom." },
                    { q: "Is H₂O an element, compound, or molecule?", a: "It is BOTH a molecule AND a compound — it is a molecule because it has 2+ atoms joined, and a compound because it has 2 different elements (H and O)." }
                ],
                mcqs: [
                    { q: "The smallest particle of an element is a/an:", options: ["Molecule", "Atom", "Cell"], correct: 1 },
                    { q: "Two or more atoms chemically joined form a:", options: ["Compound", "Element", "Molecule"], correct: 2 }
                ]
            },
            {
                title: "Metals & Non-Metals",
                emoji: "🔩",
                definition: "Elements are divided into metals and non-metals based on their physical and chemical properties.",
                facts: [
                    "<b>Metals:</b> Shiny, malleable (hammer into sheets), ductile (drawn into wires), good conductors of heat & electricity.",
                    "<b>Non-metals:</b> Usually dull, brittle (if solid), and POOR conductors of heat & electricity.",
                    "<b>Metal examples:</b> Iron (Fe), Copper (Cu), Aluminum (Al), Gold (Au).",
                    "<b>Non-metal examples:</b> Oxygen (O), Sulfur (S), Carbon (C), Nitrogen (N)."
                ],
                eli5: "Metals are like superhero materials — strong, shiny, and they let electricity zoom right through them. Non-metals are more like wood or chalk — dull and they BLOCK electricity.",
                qa: [
                    { q: "Give three examples of metals.", a: "Iron, Copper, and Aluminum (any three from the metal list)." },
                    { q: "What does 'malleable' mean?", a: "It means a material can be hammered or pressed into a new shape without breaking." }
                ],
                mcqs: [
                    { q: "Which is a property of metals?", options: ["Dull", "Poor conductor", "Shiny"], correct: 2 },
                    { q: "Which of the following is a non-metal?", options: ["Copper", "Oxygen", "Iron"], correct: 1 }
                ]
            },
            {
                title: "Acids & Bases",
                emoji: "🍋",
                definition: "Acids and bases are chemical opposites that react with each other. Their strength is measured on the pH scale (0–14).",
                facts: [
                    "<b>Acid:</b> Produces hydrogen ions (H⁺) in water. pH < 7. Usually tastes sour.",
                    "<b>Base:</b> Produces hydroxide ions (OH⁻) in water. pH > 7. Usually feels soapy/slippery.",
                    "<b>Neutral:</b> pH = 7 (e.g., pure water).",
                    "<b>Litmus test:</b> Acid turns blue litmus RED. Base turns red litmus BLUE.",
                    "<b>Neutralisation:</b> Acid + Base → Salt + Water."
                ],
                eli5: "Acids usually taste sour, like lemon juice or vinegar. Bases feel slippery, like soap. They are chemical opposites! If you test them with special litmus paper, acids turn it red (sour/danger!) and bases turn it blue.",
                qa: [
                    { q: "What ion does an acid produce in water?", a: "Hydrogen ions (H⁺)." },
                    { q: "What colour does a base turn red litmus paper?", a: "Blue." }
                ],
                mcqs: [
                    { q: "Acids turn blue litmus paper into which colour?", options: ["Green", "Blue", "Red"], correct: 2 },
                    { q: "Bases produce which ion in water?", options: ["Hydrogen (H⁺)", "Hydroxide (OH⁻)", "Oxygen"], correct: 1 }
                ]
            }
        ]
    },
    physics: {
        title: "Physics",
        subtitle: "Force, Light, Electricity, Energy, Heat",
        icon: "⚡",
        themeText: "text-blue-600",
        themeBg: "bg-blue-50",
        themeBorder: "border-blue-200",
        themeAccent: "bg-blue-500",
        topics: [
            {
                title: "Force",
                emoji: "🚀",
                definition: "A quantitative description of an interaction (a push or a pull) that can change an object's motion or shape.",
                facts: [
                    "<b>Definition:</b> Force is a push or a pull acting on an object.",
                    "<b>Unit:</b> The standard unit of force is the <i>Newton (N)</i>.",
                    "<b>Effects:</b> Force can change an object's speed, direction, or shape.",
                    "<b>Types:</b> Contact forces (friction, push) and non-contact forces (gravity, magnetism)."
                ],
                eli5: "A force is just a push or a pull. You need a force to move a toy car, to catch and stop a rolling ball, or to squish a piece of Play-Doh into a pancake!",
                qa: [
                    { q: "What is the SI unit of force?", a: "The Newton (N)." },
                    { q: "Name three things a force can change about an object.", a: "Its speed, its direction, and its shape." }
                ],
                mcqs: [
                    { q: "Force is defined as a:", options: ["Push or pull", "Flow of electrons", "Form of energy"], correct: 0 },
                    { q: "The unit of force is the:", options: ["Joule", "Newton", "Watt"], correct: 1 }
                ]
            },
            {
                title: "Electricity",
                emoji: "🔌",
                definition: "The flow of electric charges (usually electrons) through a conductor, carrying energy that powers devices.",
                facts: [
                    "<b>Conductor:</b> Material that lets electricity pass easily (e.g., copper, aluminum).",
                    "<b>Insulator:</b> Material that blocks electricity (e.g., plastic, rubber, wood).",
                    "<b>Switch:</b> Opens or closes the circuit to turn devices ON or OFF.",
                    "<b>Safety:</b> Never touch a switch with wet hands — water conducts electricity!"
                ],
                eli5: "Electricity is like an invisible river of tiny magic sparks travelling through wires. Conductors (metal wires) are open roads for the sparks. Insulators (plastic coating) are roadblocks to keep the sparks safely inside!",
                qa: [
                    { q: "What is a conductor?", a: "A material that allows electric charges to flow through it easily." },
                    { q: "Give one example of an insulator.", a: "Plastic, rubber, or wood." }
                ],
                mcqs: [
                    { q: "Electricity flows easily through:", options: ["Conductors", "Insulators", "Wood"], correct: 0 },
                    { q: "Which of these is an insulator?", options: ["Copper", "Plastic", "Iron"], correct: 1 }
                ]
            },
            {
                title: "Light",
                emoji: "💡",
                definition: "A form of electromagnetic radiation that can be detected by the human eye and travels in straight lines at very high speed.",
                facts: [
                    "<b>Travels in straight lines</b> — that's why shadows form.",
                    "<b>Reflection:</b> The bouncing back of light when it hits a shiny surface (e.g., a mirror).",
                    "<b>Refraction:</b> The bending of light as it passes from one transparent substance into another (e.g., air → water).",
                    "<b>Speed:</b> Light travels at about 300,000 km per second — the fastest thing in the universe!"
                ],
                eli5: "Light is super-fast energy that bounces off things and jumps into your eyes so you can see colours and shapes! If it bounces off perfectly, like a mirror, that's reflection. If it bends, like a straw in a glass of water, that's refraction.",
                qa: [
                    { q: "How does light travel?", a: "In straight lines." },
                    { q: "What is the difference between reflection and refraction?", a: "Reflection is the bouncing back of light; refraction is the bending of light." }
                ],
                mcqs: [
                    { q: "The bending of light is called:", options: ["Reflection", "Refraction", "Absorption"], correct: 1 },
                    { q: "Light always travels in a:", options: ["Straight line", "Circle", "Zig-zag pattern"], correct: 0 }
                ]
            },
            {
                title: "Energy",
                emoji: "⚙️",
                definition: "The ability to do work or cause change. Energy exists in many forms and can be converted from one form to another.",
                facts: [
                    "<b>Forms of energy:</b> Heat, Light, Electrical, Chemical, Sound, Kinetic (motion), Potential (stored).",
                    "<b>Transformation:</b> Energy can be converted from one form to another (e.g., chemical → electrical in a battery).",
                    "<b>Law of Conservation:</b> Energy can NEVER be created or destroyed — only converted.",
                    "<b>Unit:</b> Energy is measured in Joules (J)."
                ],
                eli5: "Energy is the 'go-juice' that makes everything happen in the universe. You eat food to get chemical energy, your body turns it into kinetic energy so you can run, and you give off heat energy that warms the air around you!",
                qa: [
                    { q: "What is the definition of energy?", a: "The ability to do work or cause change." },
                    { q: "State the Law of Conservation of Energy.", a: "Energy can neither be created nor destroyed — it can only be converted from one form to another." }
                ],
                mcqs: [
                    { q: "Energy is defined as:", options: ["A push or pull", "The flow of electrons", "The ability to do work"], correct: 2 },
                    { q: "The SI unit of energy is the:", options: ["Newton", "Joule", "Watt"], correct: 1 }
                ]
            },
            {
                title: "Heat Transfer",
                emoji: "🔥",
                definition: "The movement of thermal energy from a hotter object to a colder one until both reach the same temperature.",
                facts: [
                    "<b>Heat always moves</b> from a hotter object to a colder object.",
                    "<b>Conduction:</b> Heat transfer by <i>direct contact</i> (e.g., a metal spoon getting hot in soup).",
                    "<b>Convection:</b> Heat transfer in <i>fluids</i> (liquids & gases) by the movement of the fluid itself.",
                    "<b>Radiation:</b> Heat transfer by <i>waves</i> — does NOT need a medium (e.g., heat from the Sun)."
                ],
                eli5: "Heat is special energy that hates being unbalanced. It always jumps from a hot thing (soup) into a cold thing (spoon or air) until everything is exactly the same temperature. That's why ice melts in your hand!",
                qa: [
                    { q: "In which direction does heat always flow?", a: "From a hotter object to a colder object." },
                    { q: "Which method of heat transfer can happen through empty space (a vacuum)?", a: "Radiation." }
                ],
                mcqs: [
                    { q: "Heat from a hot metal spoon to your hand is transferred by:", options: ["Conduction", "Convection", "Radiation"], correct: 0 },
                    { q: "How does the Sun's heat reach the Earth?", options: ["Conduction", "Convection", "Radiation"], correct: 2 }
                ]
            }
        ]
    },
    urdu: {
        title: "اردو (Urdu)",
        subtitle: "Grammar, Vocabulary, Writing",
        icon: "📖",
        themeText: "text-orange-600",
        themeBg: "bg-orange-50",
        themeBorder: "border-orange-200",
        themeAccent: "bg-orange-500",
        topics: [
            {
                title: "نکاتی خاکہ (Point-wise Review)",
                emoji: "📋",
                definition: "مرکزی خیالات کو نکاتی شکل میں لکھنے کا طریقہ — تاکہ اہم باتیں مختصر اور واضح طور پر سامنے آئیں۔",
                facts: [
                    "<b>ہر نکتہ ایک مکمل جملہ ہو</b> تاکہ معنی واضح رہے۔",
                    "<b>نکات کی ترتیب منطقی ہو</b> — پہلے اہم بات، پھر تفصیل۔",
                    "<b>عنوان واضح اور مختصر رکھیں۔</b>",
                    "<b>مثال:</b> 'پھولوں کے فوائد' → نکتہ ۱: خوشبو پھیلاتے ہیں۔ نکتہ ۲: ماحول خوبصورت بناتے ہیں۔"
                ],
                eli5: "Imagine you're packing for a trip — instead of dumping everything in one big bag, you sort things into small clear pouches. Point-wise review is the same idea: each point is a tiny pouch holding one clear idea!",
                qa: [
                    { q: "نکاتی خاکہ کیوں لکھا جاتا ہے؟", a: "تاکہ مرکزی خیالات مختصر، واضح اور یاد رکھنے میں آسان ہوں۔" },
                    { q: "اگر آپ کو 'بارش کے فوائد' لکھنے ہوں تو پہلا نکتہ کیا ہوگا؟", a: "پہلا نکتہ: بارش پودوں کے لیے پانی فراہم کرتی ہے (یا کوئی بھی مرکزی فائدہ)۔" }
                ],
                mcqs: [
                    { q: "نکاتی خاکے میں ہر نکتہ کیسا ہونا چاہیے؟", options: ["نیم مکمل", "مکمل جملہ", "صرف ایک لفظ"], correct: 1 },
                    { q: "نکات کی ترتیب کیسی ہونی چاہیے؟", options: ["بے ترتیب", "منطقی", "الٹی"], correct: 1 }
                ]
            },
            {
                title: "واحد و جمع (Singular & Plural)",
                emoji: "🔢",
                definition: "واحد ایک چیز کو کہتے ہیں، جبکہ جمع ایک سے زیادہ چیزوں کو۔ اردو میں واحد سے جمع بنانے کے مختلف طریقے ہیں۔",
                facts: [
                    "<b>سادہ جمع:</b> واحد میں 'ہ'، 'وں'، 'یں' یا 'ات' لگائیں (لڑکا → لڑکے، کتاب → کتابیں)۔",
                    "<b>عربی جمع:</b> 'ات'، 'ون' لگا کر (معلم → معلمین، فاعل → فاعلین)۔",
                    "<b>مونث جمع:</b> 'لڑکیاں'، 'استانیاں'، 'بہنیں'۔",
                    "<b>غیر ملکی جمع:</b> 'فرانس → فرانسیسی'، 'پاکستانی' وغیرہ۔"
                ],
                eli5: "Singular means ONE (one book = ایک کتاب). Plural means MORE THAN ONE (many books = کتابیں). Urdu has many ways to turn ONE into MANY — just like adding 's' or 'es' in English!",
                qa: [
                    { q: "'لڑکا' کا جمع کیا ہوگا؟", a: "لڑکے" },
                    { q: "'کتاب' کا جمع کیسے بنایں گے؟", a: "کتابیں (نون جمع لگا کر)" },
                    { q: "ایک عربی جمع کی مثال دیں۔", a: "معلم → معلمین یا کاتب → کاتبین" }
                ],
                mcqs: [
                    { q: "'بچہ' کا جمع ہے:", options: ["بچیں", "بچے", "بچوں"], correct: 1 },
                    { q: "'استاد' کا عربی جمع ہے:", options: ["استادیں", "اساتذہ", "استادون"], correct: 1 },
                    { q: "'پھول' کا جمع ہے:", options: ["پھولیں", "پھولے", "پھلوں"], correct: 2 }
                ]
            },
            {
                title: "مذکر و مونث (Masculine & Feminine)",
                emoji: "⚧️",
                definition: "مذکر مرد یا نر کو کہتے ہیں، مونث عورت یا مادہ کو۔ اردو میں بعض الفاظ میں 'ہ' یا 'ا' لگا کر مونث بنایا جاتا ہے۔",
                facts: [
                    "<b>ہائی مونث:</b> آخر میں 'ہ' بدل کر 'ی' کریں (شاہ → شاہی، خدا → خدائی)۔",
                    "<b>اہ مونث:</b> آخر میں 'ا' لگائیں (خادم → خادمہ، مومن → مومنہ)۔",
                    "<b>لڑکا (مذکر) → لڑکی (مونث)</b> — کچھ الفاظ بالکل بدل جاتے ہیں۔",
                    "<b>استاد (مذکر) → استانی (مونث)</b>۔"
                ],
                eli5: "Some words change their ending like magic to become feminine! Adding an 'a' (ہ → ا or اہ) usually turns a masculine word into a feminine one — just like how 'waiter' becomes 'waitress' in English!",
                qa: [
                    { q: "'معلم' کا مونث کیا ہوگا؟", a: "معلمہ" },
                    { q: "'شاہ' کا مونث کیسے بنایں؟", a: "شاہی (آخری 'ہ' کو 'ی' میں بدلیں)" }
                ],
                mcqs: [
                    { q: "'ناصر' کا مونث ہے:", options: ["ناصرہ", "ناصرین", "ناصری"], correct: 0 },
                    { q: "'بادشاہ' کا مونث ہے:", options: ["بادشاہہ", "ملکہ", "بادشاہی"], correct: 2 }
                ]
            },
            {
                title: "مترادف الفاظ (Synonyms)",
                emoji: "🔁",
                definition: "وہ الفاظ جن کے معنی ایک جیسے یا تقریباً ایک جیسے ہوں — مترادف کہلاتے ہیں۔",
                facts: [
                    "<b>خوشی = مسرت، خوشنودی، سرور</b>",
                    "<b>دشمن = دُشمن، عدو، مخالف</b>",
                    "<b>پانی = آب، جل</b>",
                    "<b>استعمال:</b> مترادف الفاظ استعمال کرنے سے زبان خوبصورت اور متنوع ہوتی ہے۔"
                ],
                eli5: "Synonyms are 'twin words' that mean almost the same thing — so you can swap them without changing the meaning. Just like 'happy' and 'joyful' in English!",
                qa: [
                    { q: "'خوشی' کے تین مترادف لکھیں۔", a: "مسرت، خوشنودی، سرور (یا خرمی، شادمانی)" },
                    { q: "'دشمن' کا مترادف کیا ہے؟", a: "عدو یا مخالف" }
                ],
                mcqs: [
                    { q: "'پانی' کا مترادف ہے:", options: ["آب", "آگ", "ہوا"], correct: 0 },
                    { q: "'خوبصورت' کا مترادف ہے:", options: ["بدصورت", "جمیل", "پرانا"], correct: 1 }
                ]
            },
            {
                title: "متضاد الفاظ (Antonyms)",
                emoji: "↔️",
                definition: "وہ الفاظ جن کے معنی ایک دوسرے کے بالکل برعکس ہوں — متضاد کہلاتے ہیں۔",
                facts: [
                    "<b>اچھا ↔ برا</b>",
                    "<b>سچ ↔ جھوٹ</b>",
                    "<b>امیر ↔ غریب</b>",
                    "<b>استعمال:</b> متضاد الفاظ سے موازنہ اور تضاد واضح ہوتا ہے۔"
                ],
                eli5: "Antonyms are 'enemy words' that mean the OPPOSITE — like 'hot' vs 'cold'. They help us show CONTRAST in our writing!",
                qa: [
                    { q: "'امیر' کا متضاد لفظ کیا ہے؟", a: "غریب" },
                    { q: "'روشنی' کا متضاد کیا ہے؟", a: "اندھیرا یا تاریکی" }
                ],
                mcqs: [
                    { q: "'اونچا' کا متضاد ہے:", options: ["لمبا", "نیچا", "چوڑا"], correct: 1 },
                    { q: "'سچ' کا متضاد ہے:", options: ["سچا", "جھوٹ", "راست"], correct: 1 }
                ]
            },
            {
                title: "الفاظ اور جملے (Words & Sentences)",
                emoji: "📜",
                definition: "لفظ ایک مکمل معنی رکھنے والی زبان کی سب سے چھوٹی اکائی ہے؛ جملہ دو یا زیادہ الفاظ کا ایسا مجموعہ جس میں مکمل معنی پایا جائے۔",
                facts: [
                    "<b>لفظ = Word</b> (مثال: کتاب، سکول، بچہ)۔",
                    "<b>جملہ = Sentence</b> (مثال: 'بچہ سکول جاتا ہے۔')۔",
                    "<b>جملے کا آغاز بڑے حرف سے ہوتا ہے اور آخر میں پورا وقفہ (۔) آتا ہے۔</b>",
                    "<b>جملے کے اجزاء:</b> فاعل (subject) + فعل (verb) + مفعول (object)۔"
                ],
                eli5: "Words are like LEGO bricks — single pieces with meaning. Sentences are what you BUILD with those bricks — complete thoughts with a subject and verb, ending with a full stop!",
                qa: [
                    { q: "جملے کی پہچان کیا ہے؟", a: "جملے کا آغاز بڑے حرف سے ہوتا ہے اور آخر میں پورا وقفہ (۔) لگتا ہے، اور اس میں مکمل معنی ہوتا ہے۔" },
                    { q: "'احمد کتاب پڑھتا ہے' — اس جملے میں فاعل کیا ہے؟", a: "فاعل: احمد (جو کام کر رہا ہے)" }
                ],
                mcqs: [
                    { q: "جملے کے آخر میں کیا آتا ہے؟", options: [",", "۔", "؟"], correct: 1 },
                    { q: "'سیب' کیا ہے؟", options: ["جملہ", "لفظ", "پیراگراف"], correct: 1 }
                ]
            },
            {
                title: "لفظی گنتی (Word Count)",
                emoji: "🔢",
                definition: "پیراگراف یا جملے میں الفاظ کی تعداد شمار کرنا — خاص طور پر مضمون نگاری میں اہم ہے۔",
                facts: [
                    "<b>ہر خالی جگہ (space) کے بعد ایک لفظ شمار ہوتا ہے۔</b>",
                    "<b>ادویس کے الفاظ:</b> 'آج'، 'کل'، 'یہاں' — ہر ایک ایک لفظ ہے۔",
                    "<b>مرکب الفاظ:</b> 'سکول کا بیگ' — یہ تین الفاظ ہیں (سکول + کا + بیگ)۔",
                    "<b>نکتہ:</b> گنتی کرتے وقت 'ہے'، 'کا'، 'کو' بھی الگ الگ الفاظ شمار ہوتے ہیں۔"
                ],
                eli5: "Counting words in Urdu is the same as counting words in English — every space-separated piece is one word. 'سکول' = 1 word. 'سکول کا بیگ' = 3 words (سکول + کا + بیگ)!",
                qa: [
                    { q: "'آج موسم بہت خوبصورت ہے' میں کتنے الفاظ ہیں؟", a: "5 الفاظ (آج + موسم + بہت + خوبصورت + ہے)" },
                    { q: "'وہ روز سکول جاتا ہے' میں کتنے الفاظ ہیں؟", a: "5 الفاظ (وہ + روز + سکول + جاتا + ہے)" }
                ],
                mcqs: [
                    { q: "'میں کتاب پڑھتا ہوں' میں کتنے الفاظ ہیں؟", options: ["3", "4", "5"], correct: 1 },
                    { q: "'بچہ کھیل رہا ہے' میں الفاظ کی تعداد ہے:", options: ["2", "3", "4"], correct: 2 }
                ]
            },
            {
                title: "پیراگراف نگاری (Paragraph Writing)",
                emoji: "✍️",
                definition: "کسی بھی موضوع پر مختصر اور منظم پیراگراف لکھنے کا طریقہ — جس میں ایک مرکزی خیال اور اس کی وضاحت ہو۔",
                facts: [
                    "<b>پہلا جملہ = مرکزی خیال (Topic Sentence)</b> جو پورے پیراگراف کا خلاصہ ہو۔",
                    "<b>درمیانی جملے = وضاحت اور مثالیں</b> جو مرکزی خیال کو سہارا دیں۔",
                    "<b>آخری جملہ = اختتامیہ</b> جو خلاصہ دے یا نتیجہ نکالے۔",
                    "<b>لمبائی:</b> 70 سے 90 الفاظ کے درمیان رکھیں (جیسا انگریزی میں بھی ہے)۔"
                ],
                eli5: "A paragraph is like a tiny sandwich! The TOP bread = your main idea. The FILLING = supporting sentences and examples. The BOTTOM bread = your closing sentence that wraps it all up!",
                qa: [
                    { q: "پیراگراف کے پہلے جملے کو کیا کہتے ہیں؟", a: "مرکزی خیال یا 'Topic Sentence'" },
                    { q: "پیراگراف کی سفارش کردہ لمبائی کیا ہے؟", a: "70 سے 90 الفاظ کے درمیان۔" }
                ],
                mcqs: [
                    { q: "پیراگراف کا آخری جملہ کیا کرتا ہے؟", options: ["نیا موضوع شروع کرتا ہے", "خلاصہ یا نتیجہ دیتا ہے", "صرف ختم ہوتا ہے"], correct: 1 },
                    { q: "پیراگراف کا آغاز کس چیز سے ہونا چاہیے؟", options: ["مثال", "مرکزی خیال", "سوال"], correct: 1 }
                ]
            }
        ]
    }
};
