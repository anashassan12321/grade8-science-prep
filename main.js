import './style.css';
import { appData } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
    const listContainer = document.getElementById('subjects-list');
    listContainer.innerHTML = '';

    Object.keys(appData).forEach(key => {
        const subject = appData[key];

        const cardHtml = `
            <a href="${key}.html" class="block w-full bg-slate-800 border border-slate-700 shadow-sm hover:shadow-lg hover:border-slate-600 transition-all rounded-2xl p-5 flex items-center justify-between text-left group">
                <div class="flex items-center gap-4">
                    <div class="w-14 h-14 rounded-full ${subject.themeBg} flex items-center justify-center text-3xl shadow-inner group-hover:scale-110 transition-transform border ${subject.themeBorder}">
                        ${subject.icon}
                    </div>
                    <div>
                        <h3 class="text-xl font-bold text-slate-100">${subject.title}</h3>
                        <p class="text-sm text-slate-400">${subject.subtitle}</p>
                    </div>
                </div>
                <div class="${subject.themeText} text-xl font-bold group-hover:translate-x-1 transition-transform">→</div>
            </a>
        `;

        listContainer.insertAdjacentHTML('beforeend', cardHtml);
    });
});
