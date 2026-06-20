export const appData = {
    math: {
        title: "Mathematics",
        subtitle: "Types of Numbers — Natural, Whole, Integers, Rational & more",
        icon: "🔢",
        themeText: "text-rose-400",
        themeBg: "bg-rose-500/15",
        themeBorder: "border-rose-800/60",
        themeAccent: "bg-rose-500",
        topics: [
            {
                title: "Natural & Whole Numbers",
                emoji: "1️⃣",
                definition: "Natural numbers (ℕ) are the counting numbers starting from 1. Whole numbers (W) are natural numbers PLUS zero.",
                facts: [
                    "<b>Natural numbers:</b> ℕ = {1, 2, 3, 4, 5, …} — used for <i>counting</i> things.",
                    "<b>Whole numbers:</b> W = {0, 1, 2, 3, 4, …} — whole set with zero included.",
                    "<b>0 is the smallest whole number</b> but it is <i>NOT</i> a natural number.",
                    "<b>Every natural number is also a whole number</b> (just ℕ + {0})."
                ],
                eli5: "Natural numbers are for counting things — 'I have 3 apples'. Whole numbers are like natural numbers but they also let you say 'I have 0 apples' (none at all). Zero is the only difference between them!"
            },
            {
                title: "Integers (ℤ)",
                emoji: "➕➖",
                definition: "Integers are all whole numbers AND their negatives — every number that has no fraction or decimal part.",
                facts: [
                    "<b>Symbol:</b> ℤ (a shorthand letter scientists use for integers).",
                    "<b>Positive integers:</b> 1, 2, 3, … &nbsp; <b>Negative integers:</b> -1, -2, -3, …",
                    "<b>Zero (0)</b> is neither positive nor negative.",
                    "<b>Integers do NOT include</b> fractions (½) or decimals (0.7) — only whole counts, positive or negative."
                ],
                eli5: "If whole numbers are for counting your candies, integers also let you talk about owing candies! 'I owe Ahmed 3 candies' is written as -3. Integers are like a number line that stretches in BOTH directions from zero."
            },
            {
                title: "Rational Numbers (ℚ)",
                emoji: "➗",
                definition: "A rational number is any number that can be written as a fraction p⁄q where p and q are integers and q is NOT zero.",
                facts: [
                    "<b>Symbol:</b> ℚ (a shorthand letter scientists use for rational numbers).",
                    "<b>Examples:</b> ½, -¾, 5 (= 5⁄1), 0.75 (= ¾), -2.5, 0 (= 0⁄1).",
                    "<b>Every integer is also rational</b> — just write it over 1 (e.g. 7 = 7⁄1).",
                    "<b>Decimals that stop</b> (like 0.5) and <b>decimals that repeat forever</b> (like 0.333…) are always rational."
                ],
                eli5: "Rational numbers are ANY number you can write as one integer divided by another — like 3÷4, 5÷1, or even -7÷2. If it can be squeezed into a fraction, it's rational!"
            },
            {
                title: "Irrational Numbers",
                emoji: "♾️",
                definition: "Irrational numbers CANNOT be written as a simple fraction. Their decimal version goes on forever WITHOUT ever repeating.",
                facts: [
                    "<b>Famous examples:</b> π (3.14159…), √2 (1.41421…), e (2.71828…), φ (the golden ratio, 1.618…).",
                    "<b>Their decimals never end</b> and <b>never form a repeating pattern</b>.",
                    "<b>√2 was the first known irrational number</b> — discovered by the ancient Greeks.",
                    "<b>Between any two rationals there is always an irrational</b> — they fill the gaps on the number line."
                ],
                eli5: "Some numbers are stubborn — they REFUSE to be written as a clean fraction! π (the circle number) keeps going forever: 3.14159265… and never repeats itself. That's why it's called 'irrational' — it doesn't follow the rational rules!"
            },
            {
                title: "Real Numbers (ℝ)",
                emoji: "📏",
                definition: "The real numbers are every rational number PLUS every irrational number — in other words, every number that has a place on the number line.",
                facts: [
                    "<b>Symbol:</b> ℝ (a shorthand letter scientists use for real numbers).",
                    "<b>Real = Rational + Irrational.</b> If it has a spot on the number line, it's real.",
                    "<b>Examples:</b> -7, 0, ½, √2, π, 100.6, -3.333…",
                    "<b>NOT real:</b> √(-1), the square root of any negative number, and infinity (∞, which just means 'goes on forever')."
                ],
                eli5: "Real numbers are ALL the numbers put together — every integer, every fraction, every weird decimal like π. If you can point to it somewhere on a number line that goes on forever in both directions, it's real!"
            },
            {
                title: "Even & Odd Numbers",
                emoji: "⚖️",
                definition: "An EVEN number can be divided by 2 with nothing left over. An ODD number cannot be divided by 2 evenly — it always leaves 1 left over.",
                facts: [
                    "<b>Even numbers</b> end in 0, 2, 4, 6 or 8 in the ones place.",
                    "<b>Odd numbers</b> end in 1, 3, 5, 7 or 9 in the ones place.",
                    "<b>Examples:</b> Even → 2, 14, 56, 100 &nbsp; Odd → 1, 13, 27, 99.",
                    "<b>0 is EVEN</b> (because 0 ÷ 2 = 0 exactly — nothing left over)."
                ],
                eli5: "Even numbers LOVE to make pairs! 6 cookies can be split perfectly between 2 friends (3 each). Odd numbers always leave one cookie sitting alone — the leftover that has nobody to pair up with!"
            },
            {
                title: "Prime & Composite Numbers",
                emoji: "🔐",
                definition: "A PRIME number has exactly TWO different factors: 1 and itself. A COMPOSITE number has MORE than two factors (so it can be split into smaller equal groups).",
                facts: [
                    "<b>Primes under 20:</b> 2, 3, 5, 7, 11, 13, 17, 19.",
                    "<b>2 is the ONLY even prime</b> — every other even number has 2 as a factor.",
                    "<b>1 is NEITHER prime NOR composite</b> — it has only one factor.",
                    "<b>4 is the smallest composite</b> (4 = 2 × 2).",
                    "<b>Every composite can be broken down into a product of primes</b> (called prime factorisation)."
                ],
                eli5: "Prime numbers are loners — they only play with themselves and the number 1. Try splitting 7 into equal groups… you just can't, except one big group of 7, or seven 1s! Composite numbers like 6 are friendlier — 6 = 2 × 3, so 6 cookies split perfectly into 2 groups of 3."
            }
        ],
        testPool: {
            mcqs: [
                // Natural & Whole (7)
                { q: "Which of these is a natural number?", options: ["-1", "0", "5", "0.5"], correct: 2, topic: "Natural & Whole" },
                { q: "What is the smallest whole number?", options: ["0", "1", "-1", "2"], correct: 0, topic: "Natural & Whole" },
                { q: "Where does the number 0 belong?", options: ["Natural numbers only", "Whole numbers only", "Both natural and whole", "Neither"], correct: 1, topic: "Natural & Whole" },
                { q: "Which of these is a whole number?", options: ["-3", "0", "0.5", "½"], correct: 1, topic: "Natural & Whole" },
                { q: "The number 7 is…", options: ["Natural and whole", "Only natural", "Only whole", "Neither"], correct: 0, topic: "Natural & Whole" },
                { q: "Are natural numbers a subset of whole numbers?", options: ["Yes", "No", "Only sometimes", "Only if even"], correct: 0, topic: "Natural & Whole" },
                { q: "W = {0, 1, 2, 3, …} represents…", options: ["Natural numbers", "Whole numbers", "Integers", "Rationals"], correct: 1, topic: "Natural & Whole" },

                // Integers (7)
                { q: "Which of these is an integer?", options: ["½", "0.7", "-5", "π"], correct: 2, topic: "Integers" },
                { q: "The symbol ℤ stands for…", options: ["Natural numbers", "Whole numbers", "Integers", "Rationals"], correct: 2, topic: "Integers" },
                { q: "Which is a negative integer?", options: ["0", "1", "-10", "0.5"], correct: 2, topic: "Integers" },
                { q: "Zero is…", options: ["Positive", "Negative", "Neither positive nor negative", "Not an integer"], correct: 2, topic: "Integers" },
                { q: "Which is NOT an integer?", options: ["-3", "7", "½", "0"], correct: 2, topic: "Integers" },
                { q: "Integers include…", options: ["Only positives", "Whole numbers, zero, and their negatives", "All numbers", "Fractions only"], correct: 1, topic: "Integers" },
                { q: "What comes right before -1 on the number line?", options: ["-2", "0", "1", "-0.5"], correct: 0, topic: "Integers" },

                // Rational (7)
                { q: "Which is a rational number?", options: ["π", "√2", "¾", "e"], correct: 2, topic: "Rational" },
                { q: "A rational number can be written as…", options: ["A decimal only", "A fraction p⁄q where q ≠ 0", "A square root", "An infinite decimal"], correct: 1, topic: "Rational" },
                { q: "Is 0.5 rational?", options: ["Yes", "No", "Only sometimes", "Only if it's a fraction"], correct: 0, topic: "Rational" },
                { q: "The number -2.5 is…", options: ["An integer", "Irrational", "Rational", "A whole number"], correct: 2, topic: "Rational" },
                { q: "Which is NOT a rational number?", options: ["½", "0.333…", "7", "√3"], correct: 3, topic: "Rational" },
                { q: "The symbol ℚ stands for…", options: ["Integers", "Rational numbers", "Real numbers", "Quads"], correct: 1, topic: "Rational" },
                { q: "Every integer is also…", options: ["Irrational", "Rational", "A whole number", "Not rational"], correct: 1, topic: "Rational" },

                // Irrational (7)
                { q: "Which is an irrational number?", options: ["½", "0.333…", "π", "7"], correct: 2, topic: "Irrational" },
                { q: "The decimals of an irrational number…", options: ["Always end", "Always repeat", "Never end and never repeat", "Sometimes repeat"], correct: 2, topic: "Irrational" },
                { q: "Which is irrational?", options: ["√4", "√9", "√2", "0.5"], correct: 2, topic: "Irrational" },
                { q: "π is approximately…", options: ["3.14", "2.71", "1.41", "1.61"], correct: 0, topic: "Irrational" },
                { q: "Which famous irrational starts with 1.41421…?", options: ["π", "e", "√2", "φ"], correct: 2, topic: "Irrational" },
                { q: "Who first discovered irrational numbers?", options: ["Egyptians", "Ancient Greeks", "Romans", "Modern scientists"], correct: 1, topic: "Irrational" },
                { q: "Between any two rational numbers there is always…", options: ["Another rational", "An integer", "An irrational number", "Zero"], correct: 2, topic: "Irrational" },

                // Real (7)
                { q: "The symbol ℝ stands for…", options: ["Rational numbers", "Real numbers", "Integers", "Whole numbers"], correct: 1, topic: "Real" },
                { q: "Real numbers include…", options: ["Only rationals", "Only irrationals", "Rational + irrational", "Only integers"], correct: 2, topic: "Real" },
                { q: "Which is NOT a real number?", options: ["-5", "0", "π", "√(-1)"], correct: 3, topic: "Real" },
                { q: "A real number is one that has…", options: ["A name", "A place on the number line", "A decimal form", "A symbol"], correct: 1, topic: "Real" },
                { q: "Which of these is a real number?", options: ["√(-4)", "∞", "0.5", "All of the above"], correct: 2, topic: "Real" },
                { q: "Real numbers are the combination of…", options: ["Whole + integers", "Rational + irrational", "Natural + whole", "All fractions"], correct: 1, topic: "Real" },
                { q: "Is infinity (∞) a real number?", options: ["Yes", "No", "Sometimes", "Only positive"], correct: 1, topic: "Real" },

                // Even & Odd (7)
                { q: "Which is an even number?", options: ["3", "7", "12", "21"], correct: 2, topic: "Even/Odd" },
                { q: "Is 0 even or odd?", options: ["Odd", "Even", "Neither", "Positive"], correct: 1, topic: "Even/Odd" },
                { q: "Which ends in an odd digit?", options: ["42", "56", "89", "100"], correct: 2, topic: "Even/Odd" },
                { q: "An odd number always leaves what remainder when divided by 2?", options: ["0", "1", "2", "3"], correct: 1, topic: "Even/Odd" },
                { q: "Which is odd?", options: ["14", "28", "35", "100"], correct: 2, topic: "Even/Odd" },
                { q: "Even numbers end in…", options: ["1 or 3", "0, 2, 4, 6, or 8", "5 or 7", "9 only"], correct: 1, topic: "Even/Odd" },
                { q: "The number 999 is…", options: ["Even", "Odd", "Zero", "Not a number"], correct: 1, topic: "Even/Odd" },

                // Prime & Composite (8)
                { q: "Which is a prime number?", options: ["4", "9", "11", "15"], correct: 2, topic: "Prime/Composite" },
                { q: "The number 1 is…", options: ["Prime", "Composite", "Neither", "A factor"], correct: 2, topic: "Prime/Composite" },
                { q: "Which is composite?", options: ["2", "5", "9", "7"], correct: 2, topic: "Prime/Composite" },
                { q: "What is the only EVEN prime?", options: ["0", "2", "4", "6"], correct: 1, topic: "Prime/Composite" },
                { q: "The smallest composite number is…", options: ["1", "2", "3", "4"], correct: 3, topic: "Prime/Composite" },
                { q: "A prime has how many factors?", options: ["1", "2", "3", "4"], correct: 1, topic: "Prime/Composite" },
                { q: "Which is prime?", options: ["15", "21", "23", "25"], correct: 2, topic: "Prime/Composite" },
                { q: "The prime factorisation of 12 is…", options: ["2 × 6", "3 × 4", "2² × 3", "2 × 2 × 2"], correct: 2, topic: "Prime/Composite" }
            ],
            shortQs: []   // Math test is MCQs only (one part, no Part 2)
        }
    },
    biology: {
        title: "Biology",
        subtitle: "Transportation in Plants & Animals",
        icon: "🧬",
        themeText: "text-emerald-400",
        themeBg: "bg-emerald-500/15",
        themeBorder: "border-emerald-800/60",
        themeAccent: "bg-emerald-500",
        topics: [
            {
                title: "Transportation in Plants",
                emoji: "🌿",
                definition: "The movement of water, minerals, and food from one part of a plant to another using special tubes called xylem and phloem.",
                facts: [
                    "<b>Xylem (water tube):</b> Carries water and minerals <i>from roots up to the leaves</i>.",
                    "<b>Phloem (food tube):</b> Carries food (sugar) <i>from the leaves to every part of the plant</i>.",
                    "<b>Transpiration:</b> When leaves lose water vapour — this <i>pulls</i> water up through the xylem, like sucking on a straw.",
                    "<b>Stomata (tiny holes):</b> Small openings on leaves that let gases in and out (CO₂ in, O₂ out)."
                ],
                eli5: "Plants don't have blood like we do. They have tiny pipes inside their stems! One pipe (xylem) drinks up water from the dirt like a long straw. The other pipe (phloem) takes the yummy food made in the leaves and shares it with the whole plant."
            },
            {
                title: "Transportation in Animals",
                emoji: "🫀",
                definition: "Animals move food, oxygen and waste around the body using TWO systems: the digestive system (breaks food down) and the blood circulatory system (carries the nutrients and oxygen to every cell).",
                facts: [
                    "<b>Digestive system:</b> Breaks food into simpler pieces so the body can soak up nutrients.",
                    "<b>Digestion path:</b> Mouth → Esophagus (food pipe) → Stomach → Small Intestine → Large Intestine → Rectum → Anus.",
                    "<b>Most nutrient absorption happens</b> in the <i>small intestine</i>; the large intestine soaks up water and forms solid waste (faeces).",
                    "<b>Blood circulatory system:</b> The heart (a strong muscle) pumps blood through a network of vessels to every part of the body.",
                    "<b>Arteries</b> carry blood <i>away</i> from the heart (oxygen-rich); <b>veins</b> carry blood <i>back</i> to the heart (low in oxygen); <b>capillaries</b> are tiny tubes where gases, nutrients and wastes are swapped with cells.",
                    "<b>Red blood cells</b> carry oxygen; <b>white blood cells</b> fight germs and infections."
                ],
                eli5: "Animals have two big transport systems working together! The digestive system is like a magical food factory that crushes food and pulls out the good stuff. The blood system is like a river — the heart is the pump, and the 'red boats' (red blood cells) carry oxygen while the 'white boats' (white blood cells) fight germs!"
            }
        ],
        testPool: {
            mcqs: [
                // Transportation in Plants (12)
                { q: "Which tissue carries water from roots to leaves?", options: ["Phloem", "Xylem", "Stomata", "Chlorophyll"], correct: 1, topic: "Plants" },
                { q: "What is transpiration?", options: ["Food making", "Loss of water from leaves", "Growth of roots", "Flower opening"], correct: 1, topic: "Plants" },
                { q: "Phloem carries…", options: ["Water", "Food/sugar", "Air", "Minerals only"], correct: 1, topic: "Plants" },
                { q: "Stomata are…", options: ["Roots", "Tiny pores on leaves", "Stem parts", "Flowers"], correct: 1, topic: "Plants" },
                { q: "Which gas do plants TAKE IN through stomata?", options: ["Oxygen", "Nitrogen", "CO₂", "Hydrogen"], correct: 2, topic: "Plants" },
                { q: "Xylem and phloem are found in…", options: ["Roots only", "Leaves only", "Stems and other parts", "Flowers only"], correct: 2, topic: "Plants" },
                { q: "What pulls water up through the xylem?", options: ["Gravity", "Transpiration", "Wind", "Animals"], correct: 1, topic: "Plants" },
                { q: "Which gas do plants RELEASE through stomata?", options: ["CO₂", "Nitrogen", "O₂", "Helium"], correct: 2, topic: "Plants" },
                { q: "What is the food transported in phloem?", options: ["Water", "Sugar", "Oxygen", "Salt"], correct: 1, topic: "Plants" },
                { q: "Which tissue carries minerals from roots to leaves?", options: ["Phloem", "Xylem", "Stomata", "Pith"], correct: 1, topic: "Plants" },
                { q: "Where are stomata mostly found?", options: ["Roots", "Stem", "Underside of leaves", "Flowers"], correct: 2, topic: "Plants" },
                { q: "Why is transpiration useful for plants?", options: ["Makes food", "Pulls water up from roots", "Releases oxygen", "Makes pollen"], correct: 1, topic: "Plants" },

                // Transportation in Animals (13)
                { q: "Where does digestion START?", options: ["Stomach", "Mouth", "Small intestine", "Large intestine"], correct: 1, topic: "Animals" },
                { q: "The esophagus is…", options: ["A stomach part", "The food pipe", "A type of food", "An organ in the brain"], correct: 1, topic: "Animals" },
                { q: "Where does most nutrient absorption happen?", options: ["Stomach", "Mouth", "Small intestine", "Large intestine"], correct: 2, topic: "Animals" },
                { q: "What does the large intestine mainly absorb?", options: ["Food", "Water", "Oxygen", "Sugar"], correct: 1, topic: "Animals" },
                { q: "Digestion breaks food into…", options: ["Bigger pieces", "Simpler substances", "Same size", "Waste only"], correct: 1, topic: "Animals" },
                { q: "Which organ turns food into faeces?", options: ["Stomach", "Small intestine", "Large intestine", "Mouth"], correct: 2, topic: "Animals" },
                { q: "Saliva is produced in the…", options: ["Stomach", "Mouth", "Intestine", "Liver"], correct: 1, topic: "Animals" },
                { q: "The heart is a…", options: ["Bone", "Muscle", "Liquid", "Skin"], correct: 1, topic: "Animals" },
                { q: "Arteries carry blood…", options: ["Toward the heart", "Away from the heart", "Only downward", "Only at night"], correct: 1, topic: "Animals" },
                { q: "Veins carry blood…", options: ["Away from the heart", "Toward the heart", "Around the lungs only", "Up only"], correct: 1, topic: "Animals" },
                { q: "Red blood cells carry…", options: ["Water", "Oxygen", "Food", "Waste"], correct: 1, topic: "Animals" },
                { q: "White blood cells…", options: ["Carry oxygen", "Fight germs", "Pump blood", "Digest food"], correct: 1, topic: "Animals" },
                { q: "Which vessel usually carries oxygen-RICH blood?", options: ["Veins", "Arteries", "Capillaries", "None"], correct: 1, topic: "Animals" }
            ],
            shortQs: [
                { q: "What is the job of xylem in a plant?", a: "Xylem is a tube inside the plant that carries water and minerals from the roots UP to the leaves.", topic: "Plants" },
                { q: "What is transpiration?", a: "Transpiration is when leaves lose water vapour. This loss pulls more water up through the xylem from the roots, like sucking on a straw.", topic: "Plants" },
                { q: "What are stomata and what do they do?", a: "Stomata are tiny holes on the underside of leaves. They let gases in and out — CO₂ in for photosynthesis, O₂ out as a waste product.", topic: "Plants" },
                { q: "Name the two transport systems in animals.", a: "The digestive system (breaks food down into nutrients) and the blood circulatory system (carries the nutrients and oxygen around the body).", topic: "Animals" },
                { q: "List the organs food passes through, in order.", a: "Mouth → Esophagus → Stomach → Small Intestine → Large Intestine → Rectum → Anus.", topic: "Animals" },
                { q: "Where does digestion start, and where does most absorption happen?", a: "Digestion starts in the mouth (teeth + saliva). Most nutrient absorption happens in the small intestine.", topic: "Animals" },
                { q: "What is the role of the large intestine?", a: "The large intestine soaks up the last bit of water from undigested food and turns what is left into solid waste (faeces).", topic: "Animals" },
                { q: "What does the heart do?", a: "The heart is a strong muscle that pumps blood around the body through the blood vessels, like a water pump pushing water through pipes.", topic: "Animals" },
                { q: "What is the difference between arteries and veins?", a: "Arteries carry blood AWAY from the heart (usually full of oxygen). Veins carry blood BACK to the heart (usually low in oxygen).", topic: "Animals" },
                { q: "What do red blood cells and white blood cells each do?", a: "Red blood cells carry oxygen from the lungs to every part of the body. White blood cells fight germs and infections.", topic: "Animals" }
            ]
        }
    },
    chemistry: {
        title: "Chemistry",
        subtitle: "Atoms, Metals, Acids & Bases",
        icon: "🧪",
        themeText: "text-purple-400",
        themeBg: "bg-purple-500/15",
        themeBorder: "border-purple-800/60",
        themeAccent: "bg-purple-500",
        topics: [
            {
                title: "Atoms & Molecules",
                emoji: "⚛️",
                definition: "Atoms are the tiny pieces that everything in the world is made of. A molecule is two or more atoms stuck together.",
                facts: [
                    "<b>Atom:</b> The tiniest piece of an element that can take part in a chemical change (a reaction).",
                    "<b>Molecule:</b> Two or more atoms stuck together (e.g. O₂, H₂O, CO₂).",
                    "<b>Element:</b> Made of only one kind of atom (e.g. pure gold = only Au atoms).",
                    "<b>Compound:</b> Two or more <i>different</i> elements stuck together (e.g. H₂O = hydrogen + oxygen)."
                ],
                eli5: "Atoms are the tiny invisible LEGO blocks of the universe. Everything is made of them! When you snap two or more of these blocks together, you create a molecule. If the blocks are different colours, you've made a compound!"
            },
            {
                title: "Metals & Non-Metals",
                emoji: "🔩",
                definition: "Elements are sorted into metals and non-metals based on what they look like and how they behave.",
                facts: [
                    "<b>Metals:</b> Shiny, malleable (can be hammered flat into sheets), ductile (can be pulled into wires), and good conductors of heat & electricity.",
                    "<b>Non-metals:</b> Usually dull, brittle (break easily if solid), and POOR conductors of heat & electricity.",
                    "<b>Metal examples:</b> Iron (Fe), Copper (Cu), Aluminium (Al), Gold (Au).",
                    "<b>Non-metal examples:</b> Oxygen (O), Sulfur (S), Carbon (C), Nitrogen (N)."
                ],
                eli5: "Metals are like superhero materials — strong, shiny, and they let electricity zoom right through them. Non-metals are more like wood or chalk — dull and they BLOCK electricity."
            },
            {
                title: "Acids & Bases",
                emoji: "🍋",
                definition: "Acids and bases are chemical opposites that react with each other. Their strength is measured on the pH scale (0 = most acidic, 14 = most basic).",
                facts: [
                    "<b>Acid:</b> Makes hydrogen ions (H⁺, tiny positively-charged particles) in water. pH < 7. Usually tastes sour.",
                    "<b>Base:</b> Makes hydroxide ions (OH⁻, tiny negatively-charged particles) in water. pH > 7. Usually feels soapy/slippery.",
                    "<b>Neutral:</b> pH = 7 (e.g. pure water).",
                    "<b>Litmus test:</b> Acid turns blue litmus paper RED. Base turns red litmus paper BLUE.",
                    "<b>Neutralisation:</b> When you mix an acid and a base together, they cancel each other out and make <i>salt + water</i>."
                ],
                eli5: "Acids usually taste sour, like lemon juice or vinegar. Bases feel slippery, like soap. They are chemical opposites! Special litmus paper turns red in acids and blue in bases."
            }
        ],
        testPool: {
            mcqs: [
                // Atoms (8)
                { q: "The smallest piece of an element is called…", options: ["A molecule", "An atom", "A compound", "A cell"], correct: 1, topic: "Atoms" },
                { q: "A molecule is…", options: ["One atom", "Two or more atoms joined together", "A type of cell", "A solid"], correct: 1, topic: "Atoms" },
                { q: "Water (H₂O) is an example of…", options: ["An element", "A molecule", "An atom", "A proton"], correct: 1, topic: "Atoms" },
                { q: "An element is made of…", options: ["Many different atoms", "Only one kind of atom", "No atoms", "Always gases"], correct: 1, topic: "Atoms" },
                { q: "Two or more DIFFERENT elements joined make a…", options: ["Molecule", "Compound", "Atom", "Mixture"], correct: 1, topic: "Atoms" },
                { q: "The chemical formula for water is…", options: ["HO", "H₂O", "H₂O₂", "O₂"], correct: 1, topic: "Atoms" },
                { q: "How many atoms are in one molecule of CO₂?", options: ["1", "2", "3", "4"], correct: 2, topic: "Atoms" },
                { q: "Which is an element?", options: ["Water", "Salt", "Gold (Au)", "Sugar"], correct: 2, topic: "Atoms" },

                // Metals (8)
                { q: "Which is a property of metals?", options: ["Dull", "Shiny", "Poor conductor", "Brittle"], correct: 1, topic: "Metals" },
                { q: "Which is a non-metal?", options: ["Iron", "Copper", "Oxygen", "Gold"], correct: 2, topic: "Metals" },
                { q: "Malleable means…", options: ["Can break easily", "Can be hammered into sheets", "Conducts electricity", "Is shiny"], correct: 1, topic: "Metals" },
                { q: "Ductile means…", options: ["Hard", "Can be drawn into wires", "Dull", "Liquid"], correct: 1, topic: "Metals" },
                { q: "A good conductor of electricity is usually a…", options: ["Non-metal", "Metal", "Gas", "Wood"], correct: 1, topic: "Metals" },
                { q: "Non-metals are usually…", options: ["Shiny", "Ductile", "Dull", "Malleable"], correct: 2, topic: "Metals" },
                { q: "Which is a metal?", options: ["Sulfur", "Oxygen", "Aluminum", "Carbon"], correct: 2, topic: "Metals" },
                { q: "Plastic is a good…", options: ["Conductor", "Insulator", "Magnet", "Battery"], correct: 1, topic: "Metals" },

                // Acids (9)
                { q: "An acid usually tastes…", options: ["Sweet", "Bitter", "Sour", "Salty"], correct: 2, topic: "Acids" },
                { q: "A base usually feels…", options: ["Slimy/soapy", "Dry", "Hot", "Cold"], correct: 0, topic: "Acids" },
                { q: "The pH of a neutral substance is…", options: ["0", "7", "14", "1"], correct: 1, topic: "Acids" },
                { q: "Acid turns blue litmus paper…", options: ["Blue", "Red", "Green", "Yellow"], correct: 1, topic: "Acids" },
                { q: "Base turns red litmus paper…", options: ["Red", "Blue", "Green", "Yellow"], correct: 1, topic: "Acids" },
                { q: "When you mix an acid and a base, you get…", options: ["More acid", "Salt + water", "Only water", "A gas"], correct: 1, topic: "Acids" },
                { q: "Which is an acid?", options: ["Soap", "Baking soda", "Lemon juice", "Milk of magnesia"], correct: 2, topic: "Acids" },
                { q: "pH less than 7 means the substance is…", options: ["Basic", "Neutral", "Acidic", "Salty"], correct: 2, topic: "Acids" },
                { q: "Hydroxide ions (OH⁻) are found in…", options: ["Acids", "Bases", "Pure water", "Salt only"], correct: 1, topic: "Acids" }
            ],
            shortQs: [
                { q: "What is an atom?", a: "An atom is the tiniest piece of an element that still behaves like that element. Everything in the world is made of atoms.", topic: "Atoms" },
                { q: "What is a molecule? Give two examples.", a: "A molecule is two or more atoms stuck together. Examples: O₂ (oxygen gas), H₂O (water), CO₂ (carbon dioxide).", topic: "Atoms" },
                { q: "What is the difference between an element and a compound?", a: "An element is made of only one kind of atom (e.g. pure gold). A compound is made of two or more DIFFERENT kinds of atoms joined together (e.g. water = hydrogen + oxygen).", topic: "Atoms" },
                { q: "Name three properties of metals.", a: "Shiny, malleable (hammered into sheets), ductile (drawn into wires), good conductors of heat and electricity.", topic: "Metals" },
                { q: "Name three examples of metals.", a: "Iron (Fe), Copper (Cu), Aluminium (Al), Gold (Au), Silver (Ag) — any three from this list.", topic: "Metals" },
                { q: "What is the difference between a conductor and an insulator?", a: "A conductor lets electricity pass through it easily (e.g. copper). An insulator blocks electricity (e.g. plastic, rubber, wood).", topic: "Metals" },
                { q: "What does litmus paper do?", a: "Litmus paper is a special coloured paper that tells you if a substance is an acid or a base. Acid turns blue litmus RED; base turns red litmus BLUE.", topic: "Acids" },
                { q: "What is an acid? Give one example.", a: "An acid is a substance that makes hydrogen ions (H⁺) in water. It usually tastes sour. Examples: lemon juice, vinegar, HCl.", topic: "Acids" },
                { q: "What is a base? Give one example.", a: "A base is a substance that makes hydroxide ions (OH⁻) in water. It usually feels soapy/slippery. Examples: soap, baking soda, milk of magnesia.", topic: "Acids" },
                { q: "What happens during neutralisation?", a: "When you mix an acid and a base together, they cancel each other out. The products are a SALT and WATER, and the mixture is no longer acidic or basic (it becomes neutral, pH 7).", topic: "Acids" }
            ]
        }
    },
    physics: {
        title: "Physics",
        subtitle: "Force, Light, Electricity, Energy, Heat",
        icon: "⚡",
        themeText: "text-blue-400",
        themeBg: "bg-blue-500/15",
        themeBorder: "border-blue-800/60",
        themeAccent: "bg-blue-500",
        topics: [
            {
                title: "Force",
                emoji: "🚀",
                definition: "A push or a pull that can change an object's motion (speed or direction) or change its shape.",
                facts: [
                    "<b>Definition:</b> Force is a push or a pull acting on an object.",
                    "<b>Unit:</b> The standard unit of force is the <i>Newton (N)</i>.",
                    "<b>Effects:</b> Force can change an object's speed, direction, or shape.",
                    "<b>Types:</b> Contact forces (friction, push, kick) and non-contact forces (gravity, magnetism)."
                ],
                eli5: "A force is just a push or a pull. You need a force to move a toy car, to catch and stop a rolling ball, or to squish a piece of Play-Doh into a pancake!"
            },
            {
                title: "Electricity",
                emoji: "🔌",
                definition: "The flow of tiny electric charges (electrons) through a material that lets them pass — this flow carries energy that powers our devices.",
                facts: [
                    "<b>Conductor:</b> A material that lets electricity pass through it easily (e.g. copper, aluminium, water).",
                    "<b>Insulator:</b> A material that BLOCKS electricity (e.g. plastic, rubber, wood).",
                    "<b>Switch:</b> Opens or closes the circuit to turn a device ON or OFF.",
                    "<b>Safety:</b> Never touch a switch with wet hands — water lets electricity pass through you!"
                ],
                eli5: "Electricity is like an invisible river of tiny magic sparks travelling through wires. Conductors (metal wires) are open roads for the sparks. Insulators (plastic coating) are roadblocks to keep the sparks safely inside!"
            },
            {
                title: "Light",
                emoji: "💡",
                definition: "A form of energy that travels as waves, that your eyes can see, and that always moves in straight lines at very high speed.",
                facts: [
                    "<b>Travels in straight lines</b> — that's why shadows form.",
                    "<b>Reflection:</b> When light <i>bounces back</i> off a shiny surface (e.g. a mirror).",
                    "<b>Refraction:</b> When light <i>bends</i> as it passes from one clear (see-through) substance into another (e.g. air → water).",
                    "<b>Speed:</b> Light travels at about 300,000 km per second — the fastest thing in the universe!"
                ],
                eli5: "Light is super-fast energy that bounces off things and jumps into your eyes so you can see colours and shapes! If it bounces off perfectly, like a mirror, that's reflection. If it bends, like a straw in a glass of water, that's refraction."
            },
            {
                title: "Energy",
                emoji: "⚙️",
                definition: "The ability to do work (make things happen) or cause change. Energy comes in many forms and can change from one form to another.",
                facts: [
                    "<b>Forms of energy:</b> Heat, Light, Electrical, Chemical, Sound, Kinetic (moving energy), Potential (stored energy).",
                    "<b>Transformation:</b> Energy can change from one form to another (e.g. chemical → electrical in a battery).",
                    "<b>Law of Conservation (Energy Rule):</b> Energy can NEVER be created or destroyed — only changed from one form to another.",
                    "<b>Unit:</b> Energy is measured in Joules (J)."
                ],
                eli5: "Energy is the 'go-juice' that makes everything happen in the universe. You eat food to get chemical energy, your body turns it into kinetic (moving) energy so you can run, and you give off heat energy that warms the air around you!"
            },
            {
                title: "Heat Transfer",
                emoji: "🔥",
                definition: "The movement of heat from a hotter object to a colder one until both reach the same temperature.",
                facts: [
                    "<b>Heat always moves</b> from a hotter object to a colder object.",
                    "<b>Conduction:</b> Heat moving through <i>direct contact</i> (e.g. a metal spoon getting hot in hot soup).",
                    "<b>Convection:</b> Heat moving through <i>liquids and gases</i> as the warm fluid rises and the cool fluid sinks.",
                    "<b>Radiation:</b> Heat travelling as <i>waves</i> — it can move through empty space (e.g. heat from the Sun reaches us across space)."
                ],
                eli5: "Heat is special energy that hates being unbalanced. It always jumps from a hot thing (soup) into a cold thing (spoon or air) until everything is exactly the same temperature. That's why ice melts in your hand!"
            }
        ],
        testPool: {
            mcqs: [
                // Force (5)
                { q: "Force is a…", options: ["Push or pull", "Type of energy", "Flow of electrons", "Property of light"], correct: 0, topic: "Force" },
                { q: "The unit of force is the…", options: ["Joule", "Newton", "Watt", "Meter"], correct: 1, topic: "Force" },
                { q: "Force can change an object's…", options: ["Colour only", "Speed, direction, or shape", "Mass only", "Temperature only"], correct: 1, topic: "Force" },
                { q: "Friction is a type of…", options: ["Non-contact force", "Contact force", "Magnetic force", "None"], correct: 1, topic: "Force" },
                { q: "Gravity is a type of…", options: ["Contact force", "Non-contact force", "Push", "Friction"], correct: 1, topic: "Force" },

                // Electricity (5)
                { q: "Which is a conductor?", options: ["Plastic", "Rubber", "Copper", "Wood"], correct: 2, topic: "Electricity" },
                { q: "Which is an insulator?", options: ["Copper", "Aluminum", "Plastic", "Iron"], correct: 2, topic: "Electricity" },
                { q: "A switch is used to…", options: ["Make electricity", "Turn devices ON or OFF", "Store charge", "Increase voltage"], correct: 1, topic: "Electricity" },
                { q: "Why should you not touch switches with wet hands?", options: ["Wet hands are cold", "Water lets electricity pass through you", "Switches break", "Hands get wet"], correct: 1, topic: "Electricity" },
                { q: "Electricity flows easily through…", options: ["Insulators", "Conductors", "Air only", "Nothing"], correct: 1, topic: "Electricity" },

                // Light (5)
                { q: "Light travels in…", options: ["Circles", "Straight lines", "Zig-zags", "Curves"], correct: 1, topic: "Light" },
                { q: "Reflection is when light…", options: ["Bends", "Bounces back", "Stops", "Speeds up"], correct: 1, topic: "Light" },
                { q: "Refraction is when light…", options: ["Bounces", "Bends passing through different substances", "Goes around corners", "Reflects"], correct: 1, topic: "Light" },
                { q: "Light travels at about…", options: ["300 km/s", "3,000 km/s", "300,000 km/s", "3,000,000 km/s"], correct: 2, topic: "Light" },
                { q: "A straw in a glass of water looks 'broken' because of…", options: ["Reflection", "Refraction", "Gravity", "Wind"], correct: 1, topic: "Light" },

                // Energy (5)
                { q: "Energy is the ability to…", options: ["Be hot", "Do work or cause change", "Make noise", "Be visible"], correct: 1, topic: "Energy" },
                { q: "Energy is measured in…", options: ["Newtons", "Joules", "Watts", "Meters"], correct: 1, topic: "Energy" },
                { q: "Kinetic energy is the energy of…", options: ["Stored objects", "Moving objects", "Hot objects", "Light"], correct: 1, topic: "Energy" },
                { q: "Potential energy is…", options: ["Moving energy", "Stored energy", "Heat energy", "Sound energy"], correct: 1, topic: "Energy" },
                { q: "The Law of Conservation says energy can be…", options: ["Created", "Destroyed", "Changed from one form to another", "Lost"], correct: 2, topic: "Energy" },

                // Heat (5)
                { q: "Heat always moves from…", options: ["Cold to hot", "Hot to cold", "Side to side", "Only up"], correct: 1, topic: "Heat" },
                { q: "Conduction is heat transfer through…", options: ["Empty space", "Direct contact", "Liquids only", "Air only"], correct: 1, topic: "Heat" },
                { q: "Convection happens in…", options: ["Solids only", "Liquids and gases", "Empty space", "Metals"], correct: 1, topic: "Heat" },
                { q: "Radiation can travel through…", options: ["Solids only", "Empty space", "Liquids only", "Nothing"], correct: 1, topic: "Heat" },
                { q: "Heat from the Sun reaches us by…", options: ["Conduction", "Convection", "Radiation", "Touching"], correct: 2, topic: "Heat" }
            ],
            shortQs: [
                { q: "What is force? What is its unit?", a: "Force is a push or a pull that can change an object's motion (speed/direction) or shape. Its unit is the Newton (N).", topic: "Force" },
                { q: "Name three things a force can change about an object.", a: "Its speed, its direction, and its shape.", topic: "Force" },
                { q: "What is the difference between a conductor and an insulator?", a: "A conductor lets electricity pass through it easily (e.g. copper). An insulator blocks electricity (e.g. plastic, rubber, wood).", topic: "Electricity" },
                { q: "Why should you not touch a switch with wet hands?", a: "Because water lets electricity pass through it — wet hands would let the electric current pass through YOUR body and shock you.", topic: "Electricity" },
                { q: "How does light travel?", a: "Light always travels in straight lines, at about 300,000 km per second.", topic: "Light" },
                { q: "What is the difference between reflection and refraction?", a: "Reflection is when light BOUNCES BACK off a shiny surface (like a mirror). Refraction is when light BENDS as it passes from one substance into another (like air into water).", topic: "Light" },
                { q: "What is energy? What is its unit?", a: "Energy is the ability to do work or cause change. Its unit is the Joule (J).", topic: "Energy" },
                { q: "What is the Law of Conservation of Energy?", a: "Energy can NEVER be created or destroyed — it can only be changed from one form into another.", topic: "Energy" },
                { q: "What are the three methods of heat transfer?", a: "Conduction (direct contact), Convection (through liquids and gases), and Radiation (through waves — even empty space).", topic: "Heat" },
                { q: "In which direction does heat always move?", a: "Heat always moves from a HOTTER object to a COLDER object until both reach the same temperature.", topic: "Heat" }
            ]
        }
    }
};
