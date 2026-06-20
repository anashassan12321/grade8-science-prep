import './style.css';
import { appData } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
    const subjectKey = document.body.getAttribute('data-subject');
    const currentSubject = appData[subjectKey];

    if (!currentSubject) return;

    document.getElementById('subject-title').innerHTML =
        `${currentSubject.icon} ${currentSubject.title}`;

    const container = document.getElementById('topics-container');
    container.innerHTML = '';

    currentSubject.topics.forEach((topic, tIndex) => {
        const factsHtml = topic.facts
            .map(fact => `<li class="flex gap-2"><span class="${currentSubject.themeText} shrink-0 mt-0.5">•</span> <span>${fact}</span></li>`)
            .join('');

        const cardHtml = `
            <article class="bg-slate-800 rounded-2xl shadow-lg border border-slate-700 overflow-hidden slide-in-right" style="animation-delay: ${tIndex * 0.08}s">
                <header class="${currentSubject.themeBg} ${currentSubject.themeText} p-4 border-b ${currentSubject.themeBorder} flex items-center gap-3">
                    <div class="text-3xl">${topic.emoji}</div>
                    <h3 class="text-xl font-bold leading-tight text-white">${topic.title}</h3>
                </header>

                <div class="p-5 space-y-5">
                    <section>
                        <span class="inline-block px-2 py-1 ${currentSubject.themeBg} ${currentSubject.themeText} text-xs font-bold rounded uppercase tracking-wide border ${currentSubject.themeBorder}">Definition</span>
                        <p class="text-slate-300 text-sm mt-3 leading-relaxed">${topic.definition}</p>
                    </section>

                    <section>
                        <h4 class="text-xs font-bold uppercase tracking-wide text-slate-400 mb-2">Key Facts</h4>
                        <ul class="text-sm text-slate-300 space-y-2 leading-relaxed">
                            ${factsHtml}
                        </ul>
                    </section>

                    <section class="bg-slate-900/60 rounded-xl p-4 border border-slate-700 relative pt-5">
                        <span class="absolute -top-3 left-4 bg-amber-500/20 text-amber-300 text-xs font-bold px-2 py-1 rounded-full border border-amber-700/60 shadow-sm flex items-center gap-1">
                            👶 Explain Like I'm 5
                        </span>
                        <p class="text-sm text-slate-300 mt-1 italic leading-relaxed">"${topic.eli5}"</p>
                    </section>
                </div>
            </article>
        `;

        const div = document.createElement('div');
        div.innerHTML = cardHtml;
        container.appendChild(div.firstElementChild);
    });

    // Append "Test Me" button at the very end of the subject content
    const testBtn = document.createElement('div');
    testBtn.className = 'pt-2 pb-4 slide-in-right';
    testBtn.style.animationDelay = `${currentSubject.topics.length * 0.08}s`;
    testBtn.innerHTML = `
        <a href="test.html?subject=${subjectKey}"
           class="flex items-center justify-between w-full bg-gradient-to-br ${currentSubject.themeAccent} ${currentSubject.themeText.replace('text-', 'text-')} p-5 rounded-2xl shadow-lg border border-slate-700 active:scale-[0.98] transition-transform group">
            <div class="flex items-center gap-3">
                <div class="text-3xl">🎯</div>
                <div>
                    <h3 class="text-xl font-extrabold text-white">Test Me</h3>
                    <p class="text-sm text-white/80">MCQs + short questions — randomized</p>
                </div>
            </div>
            <div class="text-white text-2xl font-bold group-hover:translate-x-1 transition-transform">→</div>
        </a>
    `;
    container.appendChild(testBtn);
});
