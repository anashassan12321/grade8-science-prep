import './style.css';
import { appData } from './data.js';

// ─── helpers ────────────────────────────────────────────────────────────────
function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function shuffleOptions(mcq) {
    const indices = mcq.options.map((_, i) => i);
    const shuffled = shuffle(indices);
    return {
        q: mcq.q,
        options: shuffled.map(i => mcq.options[i]),
        correct: shuffled.indexOf(mcq.correct),
        topic: mcq.topic
    };
}

// Animate a number from 0 → target with ease-out cubic
function animateNumber(el, target, duration = 900, suffix = '') {
    const start = performance.now();
    function tick(now) {
        const t = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - t, 3);
        el.textContent = Math.round(target * eased) + suffix;
        if (t < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
}

// Confetti burst — only on good scores (>= 75%)
function spawnConfetti(pieces = 60) {
    const colors = ['#f59e0b', '#ec4899', '#8b5cf6', '#10b981', '#3b82f6', '#f43f5e', '#fbbf24'];
    const frag = document.createDocumentFragment();
    for (let i = 0; i < pieces; i++) {
        const p = document.createElement('div');
        p.className = 'confetti-piece';
        p.style.left = Math.random() * 100 + 'vw';
        p.style.background = colors[Math.floor(Math.random() * colors.length)];
        p.style.animationDelay = (Math.random() * 0.4) + 's';
        p.style.animationDuration = (2 + Math.random() * 2) + 's';
        p.style.transform = `rotate(${Math.random() * 360}deg)`;
        frag.appendChild(p);
    }
    document.body.appendChild(frag);
    setTimeout(() => {
        document.querySelectorAll('.confetti-piece').forEach(p => p.remove());
    }, 5000);
}

// ─── read subject from URL ──────────────────────────────────────────────────
const params = new URLSearchParams(window.location.search);
const subjectKey = params.get('subject') || 'math';
const subject = appData[subjectKey];

if (!subject || !subject.testPool) {
    document.getElementById('test-content').innerHTML =
        '<p class="text-rose-400 text-center mt-10">No test pool found for this subject.</p>';
    throw new Error('No testPool');
}

document.getElementById('test-title').innerHTML =
    `${subject.icon} ${subject.title} — Test`;
document.getElementById('back-btn').onclick = () => {
    window.location.href = `${subjectKey}.html`;
};

// ─── state ──────────────────────────────────────────────────────────────────
const state = {
    phase: 'setup',
    mcqCount: 25,
    testSize: 'hard',
    mcqs: [],
    shortQs: [],
    currentMCQ: 0,
    currentShortQ: 0,
    part1Correct: 0,
    part2Correct: 0,
    mcqSelected: -1,
    mcqSubmitted: false,
    shortRevealed: false,
    shortSelfMarked: null
};

function getConfig() {
    if (subjectKey === 'math') {
        return { mcqs: state.mcqCount, shortQs: 0 };
    }
    return ({
        small:  { mcqs: 10, shortQs: 5  },
        medium: { mcqs: 15, shortQs: 7  },
        hard:   { mcqs: 25, shortQs: 10 }
    })[state.testSize];
}

// ─── start test ─────────────────────────────────────────────────────────────
function startTest() {
    const cfg = getConfig();
    state.mcqs       = shuffle(subject.testPool.mcqs).slice(0, cfg.mcqs).map(shuffleOptions);
    state.shortQs    = shuffle(subject.testPool.shortQs || []).slice(0, cfg.shortQs);
    state.part1Correct = 0;
    state.part2Correct = 0;
    state.currentMCQ   = 0;
    state.currentShortQ = 0;
    state.mcqSelected   = -1;
    state.mcqSubmitted  = false;
    state.shortRevealed = false;
    state.shortSelfMarked = null;
    state.phase = 'part1';
    render();
}

// ─── renderers ──────────────────────────────────────────────────────────────
function render() {
    const c = document.getElementById('test-content');
    c.classList.remove('fade-in');
    // Force reflow to restart the fade-in animation on phase changes
    void c.offsetWidth;
    c.classList.add('fade-in');
    if (state.phase === 'setup')        c.innerHTML = renderSetup();
    else if (state.phase === 'part1')    c.innerHTML = renderPart1();
    else if (state.phase === 'part1Done')c.innerHTML = renderPart1Done();
    else if (state.phase === 'part2')    c.innerHTML = renderPart2();
    else if (state.phase === 'result')   c.innerHTML = renderResult();
    bindEvents();

    // Side-effects on phase entry
    if (state.phase === 'result' && state.part1Correct > 0) {
        animateScoreNumbers();
        const totalCorrect = state.part1Correct + state.part2Correct;
        const totalQ = state.mcqs.length + state.shortQs.length;
        const pctVal = Math.round((totalCorrect / totalQ) * 100);
        if (pctVal >= 75) spawnConfetti(80);
    }
}

function animateScoreNumbers() {
    const c = document.getElementById('test-content');
    const counters = c.querySelectorAll('[data-counter]');
    counters.forEach(el => {
        const target = Number(el.dataset.counter);
        animateNumber(el, target, 900);
    });
}

function pct(correct, total) {
    return total === 0 ? 0 : Math.round((correct / total) * 100);
}
function grade(p) {
    if (p >= 90) return { label: 'Outstanding!', emoji: '🏆', color: 'text-yellow-300' };
    if (p >= 75) return { label: 'Great job!',  emoji: '🌟', color: 'text-emerald-400' };
    if (p >= 60) return { label: 'Good effort', emoji: '👍', color: 'text-blue-400' };
    if (p >= 40) return { label: 'Keep practising', emoji: '📚', color: 'text-orange-400' };
    return { label: 'Try again', emoji: '💪', color: 'text-rose-400' };
}

// ─── SETUP screen ───────────────────────────────────────────────────────────
function renderSetup() {
    const isMath = subjectKey === 'math';
    let sizeBlock = '';
    if (isMath) {
        const sizes = [10, 15, 20, 25, 30, 35, 40, 45, 50];
        sizeBlock = `
            <div class="bg-slate-800 rounded-2xl p-5 border border-slate-700 shadow-lg slide-in-right">
                <h3 class="font-bold text-slate-100 mb-1">How many MCQs?</h3>
                <p class="text-sm text-slate-400 mb-4">Up to <b class="text-rose-400">50</b> available.</p>
                <div id="size-grid" class="grid grid-cols-5 gap-2">
                    ${sizes.map(n => `
                        <button data-count="${n}"
                                class="size-btn tap-scale py-3 rounded-xl font-bold text-sm transition-all border
                                ${n === state.mcqCount
                                    ? `bg-rose-500 text-white border-rose-400 shadow-md`
                                    : `bg-slate-900/60 text-slate-300 border-slate-700 hover:border-slate-500`}">
                            ${n}
                        </button>
                    `).join('')}
                </div>
                <p class="text-xs text-slate-500 mt-3">MCQs only — single-part test.</p>
            </div>
        `;
    } else {
        const sizes = [
            { key: 'small',  label: 'Small',  mcqs: 10, shortQs: 5,  emoji: '🟢' },
            { key: 'medium', label: 'Medium', mcqs: 15, shortQs: 7,  emoji: '🟡' },
            { key: 'hard',   label: 'Hard',   mcqs: 25, shortQs: 10, emoji: '🔴' }
        ];
        sizeBlock = `
            <div class="bg-slate-800 rounded-2xl p-5 border border-slate-700 shadow-lg slide-in-right">
                <h3 class="font-bold text-slate-100 mb-1">Choose test size</h3>
                <p class="text-sm text-slate-400 mb-4">Each test has two parts: MCQs then short questions.</p>
                <div id="size-grid" class="space-y-3">
                    ${sizes.map(s => `
                        <button data-size="${s.key}"
                                class="size-btn tap-scale w-full p-4 rounded-xl font-bold transition-all border flex items-center gap-3 text-left
                                ${s.key === state.testSize
                                    ? `${subject.themeBg} ${subject.themeText} border-current shadow-md`
                                    : `bg-slate-900/60 text-slate-300 border-slate-700 hover:border-slate-500`}">
                            <div class="text-2xl">${s.emoji}</div>
                            <div class="flex-1">
                                <div class="text-base">${s.label} Test</div>
                                <div class="text-xs font-normal opacity-75">${s.mcqs} MCQs · ${s.shortQs} short questions</div>
                            </div>
                        </button>
                    `).join('')}
                </div>
            </div>
        `;
    }
    return `
        <div class="space-y-5">
            <div class="text-center pt-2 bounce-in">
                <div class="text-5xl mb-2 float-slow">${subject.icon}</div>
                <h2 class="text-2xl font-extrabold text-white">${subject.title}</h2>
                <p class="text-sm text-slate-400">${subject.subtitle}</p>
            </div>

            ${sizeBlock}

            <button id="start-btn"
                    class="glow-pulse tap-scale w-full bg-gradient-to-br ${subject.themeAccent.replace('bg-', 'from-')} ${subject.themeAccent} to-${subject.themeAccent.replace('bg-', '')} p-5 rounded-2xl shadow-lg text-white font-extrabold text-lg">
                Start Test →
            </button>
        </div>
    `;
}

// ─── PART 1 — MCQs ──────────────────────────────────────────────────────────
function renderPart1() {
    const i   = state.currentMCQ;
    const q   = state.mcqs[i];
    const tot = state.mcqs.length;
    return `
        <div class="space-y-5">
            <div class="slide-in-right">
                <div class="flex justify-between text-xs text-slate-400 mb-1">
                    <span>Part 1 — MCQs</span>
                    <span>${i + 1} / ${tot}</span>
                </div>
                <div class="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div class="h-full ${subject.themeAccent} progress-bar-fill transition-all duration-500" style="width:${((i + 1) / tot) * 100}%"></div>
                </div>
            </div>

            <div class="bg-slate-800 rounded-2xl p-5 border border-slate-700 shadow-lg slide-in-right" style="animation-delay: 0.05s">
                <div class="text-xs uppercase tracking-wide ${subject.themeText} font-bold mb-2">Question ${i + 1}</div>
                <p class="text-lg font-semibold text-white leading-snug">${escapeHtml(q.q)}</p>
            </div>

            <div class="space-y-2 slide-in-right" style="animation-delay: 0.1s">
                ${q.options.map((opt, oi) => {
                    let cls = `bg-slate-800 border-slate-700 text-slate-300 hover:border-slate-500 hover:bg-slate-700/50`;
                    let flash = '';
                    if (state.mcqSubmitted) {
                        if (oi === q.correct) {
                            cls = `bg-green-500 border-green-600 text-white shadow-md`;
                            flash = ' correct-flash';
                        } else if (oi === state.mcqSelected) {
                            cls = `bg-red-500 border-red-600 text-white`;
                            flash = ' wrong-flash';
                        } else {
                            cls = `bg-slate-800/40 border-slate-700 text-slate-500 opacity-60`;
                        }
                    } else if (oi === state.mcqSelected) {
                        cls = `${subject.themeBg} ${subject.themeText} border-current shadow-md`;
                    }
                    return `<button data-option="${oi}" class="opt-btn tap-scale w-full text-left p-4 rounded-xl border-2 font-medium text-sm transition-all ${cls}${flash}">
                        <span class="inline-block w-6 h-6 rounded-full border-2 border-current text-xs font-bold mr-2 leading-6 text-center">${String.fromCharCode(65 + oi)}</span>
                        ${escapeHtml(opt)}
                    </button>`;
                }).join('')}
            </div>

            ${state.mcqSubmitted ? `
                <button id="next-btn" class="bounce-in w-full ${subject.themeAccent} text-white font-bold p-4 rounded-2xl shadow-lg tap-scale">
                    ${i + 1 === tot ? 'See Part 1 Score →' : 'Next Question →'}
                </button>
            ` : `
                <button id="submit-btn" ${state.mcqSelected === -1 ? 'disabled' : ''}
                        class="tap-scale w-full ${state.mcqSelected === -1 ? 'bg-slate-800 text-slate-500' : 'bg-gradient-to-br from-indigo-600 to-violet-700 text-white shadow-lg'} font-bold p-4 rounded-2xl disabled:opacity-50">
                    ${state.mcqSelected === -1 ? 'Pick an option first' : 'Submit Answer'}
                </button>
            `}
        </div>
    `;
}

// ─── PART 1 done ────────────────────────────────────────────────────────────
function renderPart1Done() {
    const tot = state.mcqs.length;
    const p   = pct(state.part1Correct, tot);
    const g   = grade(p);
    const hasShort = state.shortQs.length > 0;
    return `
        <div class="space-y-5 pt-2 text-center bounce-in">
            <div class="text-6xl star-burst">${hasShort ? '🎉' : '🎯'}</div>
            <h2 class="text-2xl font-extrabold text-white">${hasShort ? 'Part 1 Complete!' : 'Test Complete!'}</h2>

            <div class="bg-slate-800 rounded-2xl p-6 border border-slate-700 shadow-lg">
                <div class="text-sm text-slate-400 uppercase tracking-wide font-bold mb-2">Your MCQ Score</div>
                <div class="text-6xl font-extrabold ${g.color}" data-counter="${state.part1Correct}">0<span class="text-3xl text-slate-500"> / ${tot}</span></div>
                <div class="text-2xl font-bold text-slate-300 mt-1">${p}%</div>
                <div class="mt-3 text-lg ${g.color}">${g.emoji} ${g.label}</div>
            </div>

            ${hasShort ? `
                <div class="bg-slate-800/60 rounded-2xl p-4 border border-slate-700 text-center">
                    <p class="text-sm text-slate-300">Up next: <b class="text-white">${state.shortQs.length} short questions</b></p>
                </div>
                <button id="continue-btn"
                        class="glow-pulse tap-scale w-full ${subject.themeAccent} text-white font-bold p-4 rounded-2xl shadow-lg">
                    Continue to Part 2 →
                </button>
            ` : `
                <button id="continue-btn"
                        class="glow-pulse tap-scale w-full ${subject.themeAccent} text-white font-bold p-4 rounded-2xl shadow-lg">
                    View Result →
                </button>
            `}
        </div>
    `;
}

// ─── PART 2 — Short Qs ──────────────────────────────────────────────────────
function renderPart2() {
    const i   = state.currentShortQ;
    const q   = state.shortQs[i];
    const tot = state.shortQs.length;
    return `
        <div class="space-y-5">
            <div class="slide-in-right">
                <div class="flex justify-between text-xs text-slate-400 mb-1">
                    <span>Part 2 — Short Questions</span>
                    <span>${i + 1} / ${tot}</span>
                </div>
                <div class="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div class="h-full ${subject.themeAccent} progress-bar-fill transition-all duration-500" style="width:${((i + 1) / tot) * 100}%"></div>
                </div>
            </div>

            <div class="bg-slate-800 rounded-2xl p-5 border border-slate-700 shadow-lg slide-in-right" style="animation-delay: 0.05s">
                <div class="text-xs uppercase tracking-wide ${subject.themeText} font-bold mb-2">Question ${i + 1}</div>
                <p class="text-lg font-semibold text-white leading-snug">${escapeHtml(q.q)}</p>
                ${state.shortRevealed
                    ? `<div class="mt-4 pt-4 border-t border-slate-700 bounce-in">
                           <div class="text-xs uppercase tracking-wide text-emerald-400 font-bold mb-2">📖 Answer</div>
                           <p class="text-sm text-slate-200 leading-relaxed">${escapeHtml(q.a)}</p>
                       </div>`
                    : ''
                }
            </div>

            ${!state.shortRevealed ? `
                <div class="bg-slate-800/60 border border-slate-700 rounded-xl p-4 text-center text-sm text-slate-400 float-slow">
                    💭 Think about your answer first…
                </div>
                <button id="reveal-btn"
                        class="tap-scale w-full ${subject.themeAccent} text-white font-bold p-4 rounded-2xl shadow-lg">
                    Reveal Answer 👀
                </button>
            ` : state.shortSelfMarked === null ? `
                <div class="bg-slate-800 rounded-2xl p-5 border border-slate-700 shadow-lg bounce-in">
                    <h3 class="text-center font-bold text-slate-100 mb-3">Did you get it right?</h3>
                    <div class="grid grid-cols-2 gap-3">
                        <button data-mark="true"
                                class="mark-btn tap-scale bg-emerald-600 hover:bg-emerald-500 text-white font-bold p-4 rounded-xl shadow-md">
                            ✅ Yes
                        </button>
                        <button data-mark="false"
                                class="mark-btn tap-scale bg-rose-600 hover:bg-rose-500 text-white font-bold p-4 rounded-xl shadow-md">
                            ❌ No
                        </button>
                    </div>
                </div>
            ` : ''}
        </div>
    `;
}

// ─── RESULT ─────────────────────────────────────────────────────────────────
function renderResult() {
    const m = state.mcqs.length;
    const s = state.shortQs.length;
    const tot = m + s;
    const correct = state.part1Correct + state.part2Correct;
    const p = pct(correct, tot);
    const g = grade(p);
    const hasShort = s > 0;

    return `
        <div class="space-y-5 pt-2 text-center bounce-in">
            <div class="text-7xl star-burst">${g.emoji}</div>
            <h2 class="text-2xl font-extrabold text-white">Test Complete!</h2>
            <div class="text-lg ${g.color} font-bold">${g.label}</div>

            <div class="bg-slate-800 rounded-2xl p-6 border border-slate-700 shadow-lg">
                <div class="text-sm text-slate-400 uppercase tracking-wide font-bold mb-2">Overall Score</div>
                <div class="text-7xl font-extrabold ${g.color}" data-counter="${p}">0<span>%</span></div>
                <div class="text-xl text-slate-300 mt-1">
                    <span data-counter="${correct}">0</span> / <span data-counter="${tot}">0</span> correct
                </div>
            </div>

            ${hasShort ? `
                <div class="grid grid-cols-2 gap-3">
                    <div class="bg-slate-800/60 border border-slate-700 rounded-xl p-4">
                        <div class="text-xs text-slate-400 uppercase font-bold">Part 1 (MCQs)</div>
                        <div class="text-2xl font-extrabold text-white mt-1">
                            <span data-counter="${state.part1Correct}">0</span>/${m}
                        </div>
                        <div class="text-sm ${grade(pct(state.part1Correct, m)).color}">${pct(state.part1Correct, m)}%</div>
                    </div>
                    <div class="bg-slate-800/60 border border-slate-700 rounded-xl p-4">
                        <div class="text-xs text-slate-400 uppercase font-bold">Part 2 (Short)</div>
                        <div class="text-2xl font-extrabold text-white mt-1">
                            <span data-counter="${state.part2Correct}">0</span>/${s}
                        </div>
                        <div class="text-sm ${grade(pct(state.part2Correct, s)).color}">${pct(state.part2Correct, s)}%</div>
                    </div>
                </div>
            ` : `
                <div class="bg-slate-800/60 border border-slate-700 rounded-xl p-4">
                    <div class="text-xs text-slate-400 uppercase font-bold">MCQs</div>
                    <div class="text-2xl font-extrabold text-white mt-1">
                        <span data-counter="${state.part1Correct}">0</span>/${m}
                    </div>
                    <div class="text-sm ${grade(pct(state.part1Correct, m)).color}">${pct(state.part1Correct, m)}%</div>
                </div>
            `}

            <div class="grid grid-cols-2 gap-3 pt-3">
                <button id="restart-btn"
                        class="tap-scale bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-bold p-4 rounded-2xl">
                    🔁 Retry
                </button>
                <button id="done-btn"
                        class="tap-scale ${subject.themeAccent} text-white font-bold p-4 rounded-2xl shadow-lg">
                    Done ✓
                </button>
            </div>
        </div>
    `;
}

// ─── escape utility ────────────────────────────────────────────────────────
function escapeHtml(s) {
    return String(s)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

// ─── event wiring ───────────────────────────────────────────────────────────
function bindEvents() {
    // SETUP
    document.querySelectorAll('.size-btn').forEach(btn => {
        btn.onclick = () => {
            if (subjectKey === 'math') state.mcqCount = Number(btn.dataset.count);
            else state.testSize = btn.dataset.size;
            render();
        };
    });
    const start = document.getElementById('start-btn');
    if (start) start.onclick = startTest;

    // PART 1 — option pick / submit / next
    document.querySelectorAll('.opt-btn').forEach(btn => {
        btn.onclick = () => {
            if (state.mcqSubmitted) return;
            state.mcqSelected = Number(btn.dataset.option);
            btn.classList.add('option-pick');
            setTimeout(() => btn.classList.remove('option-pick'), 300);
            render();
        };
    });
    const submit = document.getElementById('submit-btn');
    if (submit) submit.onclick = () => {
        if (state.mcqSelected === -1) return;
        state.mcqSubmitted = true;
        if (state.mcqSelected === state.mcqs[state.currentMCQ].correct) state.part1Correct++;
        render();
    };
    const next = document.getElementById('next-btn');
    if (next) next.onclick = () => {
        if (state.phase === 'part1') {
            if (state.currentMCQ + 1 >= state.mcqs.length) {
                state.phase = 'part1Done';
            } else {
                state.currentMCQ++;
                state.mcqSelected = -1;
                state.mcqSubmitted = false;
            }
            render();
        }
    };

    // PART 1 done → continue (to Part 2 if there are short Qs, else straight to result)
    const cont = document.getElementById('continue-btn');
    if (cont) cont.onclick = () => {
        state.phase = state.shortQs.length > 0 ? 'part2' : 'result';
        render();
    };

    // PART 2 — reveal / mark
    const reveal = document.getElementById('reveal-btn');
    if (reveal) reveal.onclick = () => { state.shortRevealed = true; render(); };
    document.querySelectorAll('.mark-btn').forEach(btn => {
        btn.onclick = () => {
            state.shortSelfMarked = btn.dataset.mark === 'true';
            if (state.shortSelfMarked) state.part2Correct++;
            render();
            setTimeout(() => {
                if (state.currentShortQ + 1 >= state.shortQs.length) {
                    state.phase = 'result';
                } else {
                    state.currentShortQ++;
                    state.shortRevealed = false;
                    state.shortSelfMarked = null;
                }
                render();
            }, 700);
        };
    });

    // RESULT — restart / done
    const restart = document.getElementById('restart-btn');
    if (restart) restart.onclick = () => { state.phase = 'setup'; render(); };
    const done = document.getElementById('done-btn');
    if (done) done.onclick = () => { window.location.href = `${subjectKey}.html`; };
}

// ─── boot ───────────────────────────────────────────────────────────────────
render();
