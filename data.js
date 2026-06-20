export const appData = {
    math: {
        title: "Mathematics",
        subtitle: "Algebra, Geometry, Arithmetic",
        icon: "🧮",
        themeText: "text-rose-600",
        themeBg: "bg-rose-50",
        themeBorder: "border-rose-200",
        themeAccent: "bg-rose-500",
        topics: [
            {
                title: "Basic Algebra",
                emoji: "✖️",
                definition: "A branch of mathematics where letters and symbols are used to represent unknown numbers in equations.",
                facts: [
                    "<b>Variable:</b> A letter (like <i>x</i> or <i>y</i>) that represents an unknown number.",
                    "<b>Constant:</b> A number on its own, like 3 or 10.",
                    "<b>Equation:</b> A math sentence stating that two things are equal (e.g., x + 2 = 5)."
                ],
                eli5: "Algebra is like a secret code puzzle. If I say 'I have some apples, and my friend gave me 2 more, now I have 5', algebra lets us write this as 'x + 2 = 5' to figure out I started with 3 apples!",
                qa: [
                    { q: "What is a variable in algebra?", a: "A letter or symbol used to represent a value that can change or is currently unknown." },
                    { q: "Solve for x: x - 4 = 10", a: "x = 14. (Because 14 - 4 = 10)" }
                ],
                mcqs: [
                    { q: "If 2x = 10, what is the value of x?", options: ["4", "5", "8"], correct: 1 },
                    { q: "Which of the following is a constant?", options: ["x", "y", "7"], correct: 2 }
                ]
            },
            {
                title: "Geometry",
                emoji: "📐",
                definition: "The study of sizes, shapes, positions, angles, and dimensions of things.",
                facts: [
                    "<b>Perimeter:</b> The total length around the outside of a shape.",
                    "<b>Area:</b> The amount of space inside a flat (2D) shape.",
                    "<b>Triangle Angles:</b> The three inside angles of any triangle always add up to 180 degrees.",
                    "<b>Right Angle:</b> An angle that is exactly 90 degrees."
                ],
                eli5: "Geometry helps us measure the world! If you want to put a fence around your yard, you measure the Perimeter. If you want to know how much grass seed to plant, you measure the Area.",
                qa: [
                    { q: "How do you find the area of a rectangle?", a: "Multiply its length by its width (Area = Length × Width)." },
                    { q: "What is the sum of angles in a triangle?", a: "180 degrees." }
                ],
                mcqs: [
                    { q: "What do you call an angle that is exactly 90 degrees?", options: ["Acute", "Obtuse", "Right Angle"], correct: 2 },
                    { q: "If a square has a side of 4cm, what is its area?", options: ["16 cm²", "8 cm²", "12 cm²"], correct: 0 }
                ]
            },
            {
                title: "Fractions & Percentages",
                emoji: "🍕",
                definition: "Different ways of representing parts of a whole value.",
                facts: [
                    "<b>Fraction:</b> Shows a part of a whole (e.g., 1/2 means one out of two equal parts).",
                    "<b>Numerator/Denominator:</b> Top number is numerator, bottom is denominator.",
                    "<b>Percentage:</b> A fraction out of 100. (e.g., 50% = 50/100 = 1/2)."
                ],
                eli5: "Think of a pizza cut into 4 slices. If you eat 1 slice, you ate 1/4 of the pizza! Since a whole pizza is 100%, eating a quarter of it means you ate 25%.",
                qa: [
                    { q: "What does percent mean?", a: "It means 'per hundred' or 'out of 100'." },
                    { q: "Convert 1/2 into a percentage.", a: "50%" }
                ],
                mcqs: [
                    { q: "What is 25% written as a fraction in simplest form?", options: ["1/2", "1/4", "1/5"], correct: 1 },
                    { q: "Which is larger: 1/2 or 3/4?", options: ["1/2", "3/4", "They are equal"], correct: 1 }
                ]
            }
        ]
    },
    english: {
        title: "English Language",
        subtitle: "Grammar, Vocab, Comprehension",
        icon: "📚",
        themeText: "text-amber-600",
        themeBg: "bg-amber-50",
        themeBorder: "border-amber-200",
        themeAccent: "bg-amber-500",
        topics: [
            {
                title: "Parts of Speech",
                emoji: "📝",
                definition: "The categories given to words based on their function in a sentence.",
                facts: [
                    "<b>Noun:</b> A person, place, thing, or idea (e.g., Ali, City, Book).",
                    "<b>Verb:</b> An action or state of being (e.g., run, jump, is).",
                    "<b>Adjective:</b> A word that describes a noun (e.g., <i>beautiful</i> flower).",
                    "<b>Adverb:</b> A word that describes a verb (e.g., running <i>quickly</i>)."
                ],
                eli5: "Nouns are the 'things' in the world. Verbs are the 'actions' those things do. Adjectives are the 'decorations' that make the nouns look pretty, and Adverbs tell us 'how' an action is done!",
                qa: [
                    { q: "Identify the verb in: 'The dog barks loudly.'", a: "barks" },
                    { q: "What is the function of an adjective?", a: "To describe or modify a noun." }
                ],
                mcqs: [
                    { q: "In the sentence 'She is a smart student', what is the word 'smart'?", options: ["Noun", "Adverb", "Adjective"], correct: 2 },
                    { q: "Which of the following is an adverb?", options: ["Quickly", "Happy", "Table"], correct: 0 }
                ]
            },
            {
                title: "Tenses",
                emoji: "⏳",
                definition: "Forms of a verb that show the time an action happened.",
                facts: [
                    "<b>Past Tense:</b> Action that already happened (e.g., 'I walked').",
                    "<b>Present Tense:</b> Action happening right now (e.g., 'I walk').",
                    "<b>Future Tense:</b> Action that will happen later (e.g., 'I will walk')."
                ],
                eli5: "Tenses are like a time-machine for words. They instantly tell the reader if something happened yesterday, is happening today, or will happen tomorrow!",
                qa: [
                    { q: "What is the past tense of 'eat'?", a: "Ate." },
                    { q: "Change to future tense: 'She reads a book.'", a: "'She will read a book.'" }
                ],
                mcqs: [
                    { q: "Which sentence is in the past tense?", options: ["I will run.", "I ran to the store.", "I am running."], correct: 1 },
                    { q: "What is the past participle of 'go'?", options: ["Went", "Going", "Gone"], correct: 2 }
                ]
            },
            {
                title: "Synonyms & Antonyms",
                emoji: "🔄",
                definition: "Words related to each other by similar or opposite meanings.",
                facts: [
                    "<b>Synonyms:</b> Words that mean exactly or nearly the same thing (e.g., Happy & Joyful).",
                    "<b>Antonyms:</b> Words that have opposite meanings (e.g., Hot & Cold)."
                ],
                eli5: "Synonyms are twin words that mean the same thing, so you can swap them without changing the story. Antonyms are enemy words that are complete opposites!",
                qa: [
                    { q: "What is a synonym for 'Huge'?", a: "Massive, Giant, or Large." },
                    { q: "What is the antonym of 'Brave'?", a: "Cowardly or scared." }
                ],
                mcqs: [
                    { q: "Which word is a synonym for 'Fast'?", options: ["Slow", "Quick", "Heavy"], correct: 1 },
                    { q: "Which word is an antonym for 'Begin'?", options: ["Start", "Finish", "Create"], correct: 1 }
                ]
            }
        ]
    },
    gk: {
        title: "General Knowledge",
        subtitle: "Geography, History, Science",
        icon: "🌍",
        themeText: "text-cyan-600",
        themeBg: "bg-cyan-50",
        themeBorder: "border-cyan-200",
        themeAccent: "bg-cyan-500",
        topics: [
            {
                title: "World Geography",
                emoji: "🗺️",
                definition: "The study of the physical features of the earth and its atmosphere.",
                facts: [
                    "<b>Continents:</b> There are 7 continents (Asia, Africa, North America, South America, Antarctica, Europe, Australia).",
                    "<b>Oceans:</b> The Pacific Ocean is the largest and deepest ocean on Earth.",
                    "<b>Highest Mountain:</b> Mount Everest."
                ],
                eli5: "The Earth is a giant ball covered mostly in water (Oceans) and big puzzle pieces of land (Continents) where we all live!",
                qa: [
                    { q: "What is the largest continent in the world by size and population?", a: "Asia." },
                    { q: "Which is the largest ocean?", a: "The Pacific Ocean." }
                ],
                mcqs: [
                    { q: "How many continents are there on Earth?", options: ["5", "7", "9"], correct: 1 },
                    { q: "What is the highest mountain in the world?", options: ["K2", "Mount Kilimanjaro", "Mount Everest"], correct: 2 }
                ]
            },
            {
                title: "Our Solar System",
                emoji: "🪐",
                definition: "The gravitationally bound system of the Sun and the objects that orbit it.",
                facts: [
                    "<b>The Sun:</b> A star at the center of our solar system.",
                    "<b>Planets:</b> There are 8 planets. Earth is the 3rd planet from the Sun.",
                    "<b>Jupiter:</b> The largest planet in our solar system.",
                    "<b>Mars:</b> Often called the 'Red Planet'."
                ],
                eli5: "The Sun is a giant, super-hot campfire in space. Eight planets, including our Earth, spin around this campfire in big invisible circles to stay warm!",
                qa: [
                    { q: "Which planet is closest to the Sun?", a: "Mercury." },
                    { q: "Why is Mars called the Red Planet?", a: "Because its surface is covered in iron oxide (rust), giving it a reddish color." }
                ],
                mcqs: [
                    { q: "Which planet is known as the largest in the solar system?", options: ["Earth", "Saturn", "Jupiter"], correct: 2 },
                    { q: "What position is Earth from the Sun?", options: ["1st", "2nd", "3rd"], correct: 2 }
                ]
            },
            {
                title: "Famous Inventions",
                emoji: "💡",
                definition: "Significant creations or discoveries that changed human history.",
                facts: [
                    "<b>Telephone:</b> Invented by Alexander Graham Bell.",
                    "<b>Lightbulb:</b> Thomas Edison developed the first practical electric light bulb.",
                    "<b>Airplane:</b> Invented by the Wright Brothers."
                ],
                eli5: "Inventions are cool ideas people had to solve problems. Long ago, people had no lights at night until Thomas Edison figured out how to trap a glowing wire inside a glass bulb!",
                qa: [
                    { q: "Who invented the telephone?", a: "Alexander Graham Bell." },
                    { q: "Who is credited with inventing the airplane?", a: "The Wright Brothers (Orville and Wilbur Wright)." }
                ],
                mcqs: [
                    { q: "Who developed the first practical electric lightbulb?", options: ["Albert Einstein", "Thomas Edison", "Isaac Newton"], correct: 1 },
                    { q: "The Wright Brothers invented the:", options: ["Car", "Train", "Airplane"], correct: 2 }
                ]
            }
        ]
    },
    biology: {
        title: "Biology",
        subtitle: "Plants, Digestion, Circulation",
        icon: "🧬",
        themeText: "text-emerald-600",
        themeBg: "bg-emerald-50",
        themeBorder: "border-emerald-200",
        themeAccent: "bg-emerald-500",
        topics: [
            {
                title: "Transportation in Plants",
                emoji: "🌿",
                definition: "The movement of water, minerals, and food from one part of a plant to another using specialized tissues like xylem and phloem.",
                facts: [
                    "<b>Xylem:</b> transports water and minerals from roots to leaves.",
                    "<b>Phloem:</b> transports food from leaves to all parts of the plant.",
                    "<b>Transpiration:</b> loss of water vapor from leaves.",
                    "<b>Stomata:</b> tiny pores on leaves for gas exchange."
                ],
                eli5: "Plants don't have blood like we do. Instead, they have tiny pipes inside their stems. One pipe (Xylem) drinks up water from the dirt like a long straw. The other pipe (Phloem) takes the yummy food made in the leaves and shares it with the whole plant!",
                qa: [
                    { q: "What is transpiration?", a: "The loss of water vapor from the leaves of a plant." },
                    { q: "What is the function of stomata?", a: "They are tiny pores on leaves used for gas exchange (taking in Carbon Dioxide and releasing Oxygen)." }
                ],
                mcqs: [
                    { q: "Which tissue carries water and minerals from the roots?", options: ["Phloem", "Xylem", "Stomata"], correct: 1 },
                    { q: "What does phloem carry throughout the plant?", options: ["Water", "Air", "Food"], correct: 2 }
                ]
            },
            {
                title: "Digestive System",
                emoji: "🥪",
                definition: "The system that breaks down food into simpler substances so the body can absorb nutrients for energy, growth, and repair.",
                facts: [
                    "<b>Main Organs:</b> Mouth, Esophagus, Stomach, Small Intestine, Large Intestine, Rectum, Anus.",
                    "<b>Digestion starts:</b> in the mouth (chewing and saliva).",
                    "<b>Absorption:</b> Most nutrient absorption occurs in the small intestine."
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
                title: "Blood Circulatory System",
                emoji: "🫀",
                definition: "The system that transports blood, oxygen, nutrients, and wastes throughout the body.",
                facts: [
                    "<b>Heart:</b> The muscular organ that pumps blood.",
                    "<b>Arteries:</b> Carry blood <i>away</i> from the heart.",
                    "<b>Veins:</b> Carry blood <i>toward</i> the heart.",
                    "<b>Capillaries:</b> Tiny vessels where materials are exchanged.",
                    "<b>Red Blood Cells:</b> Carry oxygen.",
                    "<b>White Blood Cells:</b> Fight diseases."
                ],
                eli5: "The heart is a pump pushing a massive river of blood around your entire body. The 'red boats' in this river carry the oxygen you need to live, and the 'white boats' are the brave police officers that fight off germs and keep you from getting sick.",
                qa: [
                    { q: "What is the difference between arteries and veins?", a: "Arteries carry blood away from the heart, while veins carry blood back toward the heart." },
                    { q: "What do white blood cells do?", a: "They are part of the immune system and fight diseases and infections." }
                ],
                mcqs: [
                    { q: "Which blood vessels carry blood away from the heart?", options: ["Veins", "Arteries", "Capillaries"], correct: 1 },
                    { q: "What do red blood cells carry?", options: ["Wastes", "Diseases", "Oxygen"], correct: 2 }
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
                definition: "The fundamental building blocks of all matter in the universe.",
                facts: [
                    "<b>Atom:</b> The smallest particle of an element.",
                    "<b>Molecule:</b> Two or more atoms chemically joined together.",
                    "<b>Examples:</b> O₂ (Oxygen gas), H₂O (Water), CO₂ (Carbon Dioxide)."
                ],
                eli5: "Atoms are the tiny invisible Lego blocks of the universe. Everything is made of them! When you snap two or more of these Lego blocks together, you create a Molecule.",
                qa: [
                    { q: "What is the smallest unit of an element?", a: "An atom." },
                    { q: "What is H₂O an example of?", a: "A molecule (specifically, water)." }
                ],
                mcqs: [
                    { q: "The smallest particle of an element is called a/an:", options: ["Molecule", "Atom", "Cell"], correct: 1 },
                    { q: "Two or more atoms chemically joined form a:", options: ["Compound", "Element", "Molecule"], correct: 2 }
                ]
            },
            {
                title: "Metals & Non-Metals",
                emoji: "🔩",
                definition: "Two primary categories of elements based on their physical and chemical properties.",
                facts: [
                    "<b>Metal:</b> Shiny, malleable (can be hammered into sheets), ductile (can be drawn into wires), and a good conductor of heat/electricity.",
                    "<b>Non-metal:</b> Usually dull in appearance and a poor conductor of heat/electricity.",
                    "<b>Metal Examples:</b> Iron, Copper, Aluminum.",
                    "<b>Non-metal Examples:</b> Oxygen, Sulfur, Carbon."
                ],
                eli5: "Metals are like superhero materials—they are strong, shiny, and let electricity zoom right through them. Non-metals are more like wood, chalk, or air; they are dull and completely block electricity.",
                qa: [
                    { q: "Give three examples of metals.", a: "Iron, Copper, and Aluminum." },
                    { q: "What does malleable mean?", a: "It means a material can be hammered or pressed permanently out of shape without breaking or cracking." }
                ],
                mcqs: [
                    { q: "Which of these is a characteristic of metals?", options: ["Dull", "Poor Conductor", "Shiny"], correct: 2 },
                    { q: "Which of the following is a non-metal?", options: ["Copper", "Oxygen", "Iron"], correct: 1 }
                ]
            },
            {
                title: "Acids & Bases",
                emoji: "🍋",
                definition: "Chemical compounds with opposite characteristics that react with each other.",
                facts: [
                    "<b>Acid:</b> A substance that produces hydrogen ions (H+) in water.",
                    "<b>Base:</b> A substance that produces hydroxide ions (OH-) in water.",
                    "<b>Indicators:</b> Acids turn blue litmus paper red. Bases turn red litmus paper blue."
                ],
                eli5: "Acids usually taste sour, like lemon juice or vinegar. Bases feel slippery, like soap. They are chemical opposites! If you test them with special 'litmus' paper, acids make it turn red (danger/sour!), and bases make it turn blue.",
                qa: [
                    { q: "What ion does an acid produce in water?", a: "Hydrogen ions (H+)." },
                    { q: "What color does a base turn red litmus paper?", a: "Blue." }
                ],
                mcqs: [
                    { q: "Acids turn blue litmus paper into which color?", options: ["Green", "Blue", "Red"], correct: 2 },
                    { q: "Bases produce which ions in water?", options: ["Hydrogen (H+)", "Hydroxide (OH-)", "Oxygen"], correct: 1 }
                ]
            }
        ]
    },
    physics: {
        title: "Physics",
        subtitle: "Force, Light, Energy, Heat",
        icon: "⚡",
        themeText: "text-blue-600",
        themeBg: "bg-blue-50",
        themeBorder: "border-blue-200",
        themeAccent: "bg-blue-500",
        topics: [
            {
                title: "Force",
                emoji: "🚀",
                definition: "A quantitative description of an interaction that causes a change in an object's motion.",
                facts: [
                    "<b>Definition:</b> Force is a push or pull acting on an object.",
                    "<b>Unit:</b> The standard unit of force is the Newton (N).",
                    "<b>Effects:</b> Force can change an object's speed, direction, or shape."
                ],
                eli5: "A force is simply a push or a pull. You need a force to move a toy car, to catch and stop a rolling ball, or even to squish a piece of Play-Doh into a pancake!",
                qa: [
                    { q: "What is the standard unit of force?", a: "The Newton (N)." },
                    { q: "What three things can a force change about an object?", a: "Its speed, its direction, and its shape." }
                ],
                mcqs: [
                    { q: "Force is defined as a:", options: ["Push or pull", "Flow of electrons", "Form of energy"], correct: 0 },
                    { q: "The unit of force is:", options: ["Joule", "Newton", "Watt"], correct: 1 }
                ]
            },
            {
                title: "Electricity",
                emoji: "🔌",
                definition: "The flow of electrical power or charge.",
                facts: [
                    "<b>Electricity:</b> The flow of electric charges through a conductor.",
                    "<b>Conductor:</b> A material that allows electricity to pass easily (e.g., Copper, Aluminum).",
                    "<b>Insulator:</b> A material that does not allow electricity to pass (e.g., Plastic, Rubber)."
                ],
                eli5: "Electricity is like an invisible river of tiny magic sparks traveling through wires to power your TV and tablet. Conductors (like metal wires) are the open roads for the sparks, and insulators (like the plastic coating on wires) act as roadblocks to keep the sparks safely inside.",
                qa: [
                    { q: "What is a conductor?", a: "A material that allows electric charges to flow through it easily." },
                    { q: "Give an example of an insulator.", a: "Plastic, rubber, or wood." }
                ],
                mcqs: [
                    { q: "Electricity flows easily through:", options: ["Conductors", "Insulators", "Wood"], correct: 0 },
                    { q: "Which of the following is an insulator?", options: ["Copper", "Plastic", "Iron"], correct: 1 }
                ]
            },
            {
                title: "Light",
                emoji: "💡",
                definition: "A form of electromagnetic radiation that can be detected by the human eye.",
                facts: [
                    "<b>Properties:</b> Light is a form of energy that enables us to see objects. It always travels in a straight line.",
                    "<b>Reflection:</b> The bouncing back of light when it hits a surface (like a mirror).",
                    "<b>Refraction:</b> The bending of light as it passes from one transparent substance into another (like air to water)."
                ],
                eli5: "Light is super-fast energy that bounces off things and jumps into your eyes so you can see colors and shapes! If it bounces off perfectly, like a mirror, that's Reflection. If it bends, like how a straw looks broken in a glass of water, that's Refraction.",
                qa: [
                    { q: "How does light travel?", a: "In straight lines." },
                    { q: "What is the difference between reflection and refraction?", a: "Reflection is the bouncing back of light, while refraction is the bending of light." }
                ],
                mcqs: [
                    { q: "The bending of light is called:", options: ["Reflection", "Refraction", "Absorption"], correct: 1 },
                    { q: "Light always travels in a:", options: ["Straight line", "Circle", "Zig-zag pattern"], correct: 0 }
                ]
            },
            {
                title: "Energy & Heat Transfer",
                emoji: "🔥",
                definition: "Energy is the capacity to do work, and heat transfer is how thermal energy moves across systems.",
                facts: [
                    "<b>Energy:</b> The ability to do work. Forms include Heat, Light, Electrical, Chemical, Sound.",
                    "<b>Transformation:</b> Energy can be converted from one form to another.",
                    "<b>Heat Transfer:</b> Heat always moves from a hotter object to a colder object.",
                    "<b>Methods of Heat Transfer:</b> Conduction (direct contact), Convection (fluids), Radiation (waves)."
                ],
                eli5: "Energy is the 'go-juice' that makes everything happen in the universe. Heat is a special kind of energy that hates being unbalanced. It will always jump from a hot thing (like hot soup) into a cold thing (like your spoon or the air) until everything is exactly the same temperature.",
                qa: [
                    { q: "What is the definition of energy?", a: "The ability to do work." },
                    { q: "In what direction does heat always flow?", a: "From a hotter object to a colder object." },
                    { q: "What are the three methods of heat transfer?", a: "Conduction, Convection, and Radiation." }
                ],
                mcqs: [
                    { q: "Energy is defined as:", options: ["A push or pull", "The flow of electrons", "The ability to do work"], correct: 2 },
                    { q: "Which method of heat transfer occurs through empty space (like heat from the Sun)?", options: ["Conduction", "Convection", "Radiation"], correct: 2 }
                ]
            }
        ]
    }
};
