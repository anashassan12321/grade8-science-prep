import{a as n}from"./data-BAnYRzoD.js";document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("subjects-list");e.innerHTML="",Object.keys(n).forEach(s=>{const t=n[s],o=`
            <a href="${s}.html" class="block w-full bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow rounded-2xl p-5 flex items-center justify-between text-left group">
                <div class="flex items-center gap-4">
                    <div class="w-14 h-14 rounded-full ${t.themeBg} flex items-center justify-center text-3xl shadow-inner group-hover:scale-110 transition-transform">
                        ${t.icon}
                    </div>
                    <div>
                        <h3 class="text-xl font-bold text-slate-800">${t.title}</h3>
                        <p class="text-sm text-slate-500">${t.subtitle}</p>
                    </div>
                </div>
                <div class="${t.themeText} text-xl font-bold group-hover:translate-x-1 transition-transform">→</div>
            </a>
        `;e.insertAdjacentHTML("beforeend",o)})});
