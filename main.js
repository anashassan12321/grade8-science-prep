import './style.css';
import { appData } from './data.js';

// Smooth page-to-page transition (View Transitions API). Falls back to
// instant navigation in browsers that don't support it.
function navigate(href) {
    if (document.startViewTransition && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.startViewTransition(() => { window.location.href = href; });
    } else {
        window.location.href = href;
    }
}

function applyTilt(card) {
    const inner = card.querySelector('.tilt-inner');
    if (!inner) return;
    // skip on touch devices (no hover / no mouse follow)
    if (matchMedia('(hover: none)').matches) return;

    let raf = 0;
    card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width  - 0.5;  // -0.5..0.5
        const y = (e.clientY - rect.top)  / rect.height - 0.5;
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => {
            inner.style.transform =
                `rotateX(${-y * 8}deg) rotateY(${x * 8}deg) translateZ(0)`;
            // Add a subtle glare that follows the cursor
            inner.style.setProperty('--mx', `${(x + 0.5) * 100}%`);
            inner.style.setProperty('--my', `${(y + 0.5) * 100}%`);
        });
    });
    card.addEventListener('mouseleave', () => {
        cancelAnimationFrame(raf);
        inner.style.transform = 'rotateX(0) rotateY(0) translateZ(0)';
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const listContainer = document.getElementById('subjects-list');
    listContainer.innerHTML = '';

    const keys = Object.keys(appData);
    keys.forEach((key, idx) => {
        const subject = appData[key];

        const cardHtml = `
            <a href="${key}.html"
               class="tilt-wrap block w-full"
               style="animation-delay: ${idx * 0.08}s">
                <div class="card-lift slide-in-right tilt-inner
                            bg-slate-800 border border-slate-700 shadow-md
                            hover:shadow-2xl hover:border-slate-500
                            rounded-2xl p-5 flex items-center justify-between
                            text-left group tap-scale relative overflow-hidden"
                     data-key="${key}">
                    <!-- subtle radial glare that follows the cursor -->
                    <div class="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                         style="background: radial-gradient(circle at var(--mx,50%) var(--my,50%), rgba(255,255,255,0.08), transparent 60%);"></div>

                    <div class="flex items-center gap-4 relative z-10">
                        <div class="w-14 h-14 rounded-full ${subject.themeBg} flex items-center justify-center text-3xl shadow-inner border ${subject.themeBorder}
                                    group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                            ${subject.icon}
                        </div>
                        <div>
                            <h3 class="text-xl font-bold text-slate-100">${subject.title}</h3>
                            <p class="text-sm text-slate-400">${subject.subtitle}</p>
                        </div>
                    </div>
                    <div class="${subject.themeText} text-xl font-bold group-hover:translate-x-1 transition-transform duration-300 relative z-10">→</div>
                </div>
            </a>
        `;

        listContainer.insertAdjacentHTML('beforeend', cardHtml);
    });

    // Hook up 3D tilt + smooth navigation
    document.querySelectorAll('#subjects-list a').forEach(card => {
        applyTilt(card);
        card.addEventListener('click', e => {
            e.preventDefault();
            navigate(card.getAttribute('href'));
        });
    });
});
