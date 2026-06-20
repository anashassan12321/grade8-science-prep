import './style.css';
import { appData } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
    const subjectKey = document.body.getAttribute('data-subject');
    const currentSubject = appData[subjectKey];

    if(!currentSubject) return;
    
    document.getElementById('subject-title').innerHTML = `${currentSubject.icon} ${currentSubject.title}`;
    
    const container = document.getElementById('topics-container');
    container.innerHTML = ''; 

    currentSubject.topics.forEach((topic, tIndex) => {
        const factsHtml = topic.facts.map(fact => `<li class="flex gap-2"><span class="${currentSubject.themeText}">•</span> <span>${fact}</span></li>`).join('');
        
        const qaHtml = topic.qa.map((qa) => `
            <div class="qa-card bg-white border border-slate-100 rounded-lg overflow-hidden mb-2 shadow-sm">
                <button class="qa-toggle-btn w-full text-left p-3 font-semibold text-slate-700 flex justify-between items-center hover:bg-slate-50">
                    <span class="flex-1 pr-4">Q: ${qa.q}</span>
                    <svg class="qa-icon w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                </button>
                <div class="answer-content bg-slate-50 px-3 pb-3 text-slate-600 text-sm">
                    <span class="font-bold text-slate-700">A:</span> ${qa.a}
                </div>
            </div>
        `).join('');

        const mcqHtml = topic.mcqs.map((mcq, mIndex) => {
            const optionsHtml = mcq.options.map((opt, oIndex) => `
                <button data-correct="${oIndex === mcq.correct}" class="mcq-btn w-full text-left p-3 border border-slate-200 rounded-lg mb-2 text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors">
                    ${opt}
                </button>
            `).join('');

            return `
                <div class="mb-5 last:mb-0">
                    <p class="font-bold text-slate-700 text-sm mb-3">${mIndex + 1}. ${mcq.q}</p>
                    <div class="mcq-container">${optionsHtml}</div>
                </div>
            `;
        }).join('');

        const cardHtml = `
            <div class="bg-white rounded-2xl shadow-md border border-slate-100 overflow-hidden slide-in-right" style="animation-delay: ${tIndex * 0.1}s">
                <div class="${currentSubject.themeBg} ${currentSubject.themeText} p-4 border-b ${currentSubject.themeBorder} flex items-center gap-3">
                    <div class="text-3xl">${topic.emoji}</div>
                    <h3 class="text-xl font-bold leading-tight">${topic.title}</h3>
                </div>
                <div class="p-4 space-y-5">
                    <div>
                        <div class="inline-block px-2 py-1 ${currentSubject.themeBg} ${currentSubject.themeText} text-xs font-bold rounded mb-2 uppercase tracking-wide">Definition</div>
                        <p class="text-slate-700 text-sm mb-3">${topic.definition}</p>
                        <ul class="text-sm text-slate-600 space-y-1">
                            ${factsHtml}
                        </ul>
                    </div>
                    <div class="bg-slate-50 rounded-xl p-4 border border-slate-100 relative">
                        <div class="absolute -top-3 left-4 bg-amber-100 text-amber-700 text-xs font-bold px-2 py-1 rounded-full border border-amber-200 shadow-sm flex items-center gap-1">
                            👶 Explain Like I'm 5
                        </div>
                        <p class="text-sm text-slate-600 mt-2 italic">"${topic.eli5}"</p>
                    </div>
                    <div>
                        <h4 class="font-bold text-slate-800 mb-3 flex items-center gap-2">
                            <svg class="w-5 h-5 ${currentSubject.themeText}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                            Questions & Answers
                        </h4>
                        ${qaHtml}
                    </div>
                    <div class="pt-4 border-t border-slate-100">
                        <h4 class="font-bold text-slate-800 mb-4 flex items-center gap-2">
                            <svg class="w-5 h-5 ${currentSubject.themeText}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            Test Yourself (MCQs)
                        </h4>
                        <div class="bg-slate-50 p-4 rounded-xl border border-slate-100">
                            ${mcqHtml}
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        const div = document.createElement('div');
        div.innerHTML = cardHtml;
        container.appendChild(div.firstElementChild);
    });

    container.querySelectorAll('.qa-toggle-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            btn.closest('.qa-card').classList.toggle('open');
        });
    });

    container.querySelectorAll('.mcq-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const parent = btn.closest('.mcq-container');
            if(parent.classList.contains('answered')) return;
            parent.classList.add('answered');
            
            const isCorrect = btn.getAttribute('data-correct') === 'true';
            if (isCorrect) {
                btn.classList.remove('bg-white', 'text-slate-600', 'border-slate-200');
                btn.classList.add('bg-green-500', 'text-white', 'border-green-600', 'shadow-md');
            } else {
                btn.classList.remove('bg-white', 'text-slate-600', 'border-slate-200');
                btn.classList.add('bg-red-500', 'text-white', 'border-red-600');
            }

            parent.querySelectorAll('.mcq-btn').forEach(b => {
                if(b !== btn) {
                    b.classList.add('opacity-50', 'cursor-not-allowed');
                }
            });
        });
    });
});
