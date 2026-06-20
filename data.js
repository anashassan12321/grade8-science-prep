export const appData = {
    math: {
        title: "Types of Numbers",
        subtitle: "Natural, Whole, Integers, Rational & more",
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
        ]
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
                title: "Transportation in Animals — Digestive System",
                emoji: "🥪",
                definition: "The digestive system breaks down food into simpler pieces so the body can soak up (absorb) nutrients for energy, growth, and repair.",
                facts: [
                    "<b>Path of food:</b> Mouth → Esophagus (food pipe) → Stomach → Small Intestine → Large Intestine → Rectum → Anus.",
                    "<b>Digestion starts in the mouth</b> (your teeth chew the food and saliva makes it soft and wet).",
                    "<b>Absorption (soaking up):</b> Most of the nutrients are soaked up in the <i>small intestine</i>.",
                    "<b>Large intestine:</b> Soaks up the last bit of water and turns what is left into solid waste (faeces / poop)."
                ],
                eli5: "Your body is like a powerful engine, and food is the fuel. Digestion is a magical factory inside you that crushes the food, melts it down into an invisible soup, and pulls out all the good stuff so you have the energy to run and play!"
            },
            {
                title: "Transportation in Animals — Blood Circulatory System",
                emoji: "🫀",
                definition: "The system that moves blood, oxygen, nutrients and waste around your whole body using the heart and blood vessels.",
                facts: [
                    "<b>Heart:</b> A strong muscle that pumps blood (like a water pump pushing water through pipes).",
                    "<b>Arteries:</b> Carry blood <i>away</i> from the heart (usually full of oxygen).",
                    "<b>Veins:</b> Carry blood <i>back to</i> the heart (usually low in oxygen).",
                    "<b>Capillaries (tiny tubes):</b> So small you need a microscope — gases, nutrients and wastes are swapped here between blood and body cells.",
                    "<b>Red blood cells</b> carry oxygen. &nbsp; <b>White blood cells</b> fight germs."
                ],
                eli5: "The heart is a pump pushing a massive river of blood around your body. The 'red boats' (red blood cells) carry oxygen, and the 'white boats' (white blood cells) are brave police officers that fight off germs!"
            }
        ]
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
        ]
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
        ]
    }
};
