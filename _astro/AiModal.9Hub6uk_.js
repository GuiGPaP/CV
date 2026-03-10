import"./disclose-version.DsnmJJEf.js";import{o as ie}from"./index-client.jNvoMz6r.js";import{t as ne,a as V,c as ae,d as se,f as Q,j as o,g as e,i as u,e as n,s as a,r as s,k as le}from"./template.Bxml1E_T.js";import{d as ce,a as v,s as O}from"./render.B_tF91YM.js";import{i as pe}from"./if.CSl38TVT.js";import{s as b,b as _,c as U,a as N,d as me}from"./this.AROSL9m-.js";import{g as h}from"./index.CB87Sc6I.js";import{o as ue,c as de}from"./modal-animations.BosK113I.js";import{g as B}from"./smooth-scroll.CopxFc86.js";import{o as fe,C as ge}from"./events.B8OKUXUm.js";import"./ScrollTrigger.DQG0xCVk.js";var ve=Q('<div class="relative overflow-hidden"><div class="pointer-events-none absolute right-0 left-0 h-[3px] opacity-0" style="background: var(--color-term, #00ff41); box-shadow: 0 0 8px var(--color-term, #00ff41), 0 0 20px var(--color-term, #00ff41);"></div> <div class="ai-prompt-body scrollbar-term max-h-[200px] overflow-y-auto overscroll-y-contain border-t border-[rgba(0,255,65,0.2)] bg-[rgba(0,255,65,0.03)] p-[0.8rem] text-[0.8rem] leading-[1.5] break-words whitespace-pre-wrap" id="ai-prompt-body"></div></div>'),be=Q('<div class="ai-modal fixed inset-0 z-[var(--z-modal)] h-screen w-screen items-center justify-center" id="ai-modal" style="display: none;"><div class="ai-modal-backdrop absolute inset-0 bg-[rgba(0,0,0,0.7)] backdrop-blur-[4px]" role="presentation"></div> <div class="ai-modal-content border-term bg-bg text-glow text-term relative w-[90vw] max-w-[750px] border p-8 font-mono max-md:mt-[var(--modal-voffset,0px)] max-md:flex max-md:h-auto max-md:max-h-[85vh] max-md:w-[calc(100%-8px)] max-md:!max-w-none max-md:flex-col max-md:overflow-y-auto max-md:pb-[env(safe-area-inset-bottom)]" data-lenis-prevent=""><div class="mb-2 text-[1.1rem] opacity-90">&gt; QUERY_AI.sh</div> <div class="mb-6 text-[0.9rem] opacity-70">Interroger une IA sur mon profil, mes compétences ou mon infrastructure.</div> <div class="flex flex-col gap-[0.8rem] overscroll-y-contain max-md:flex-1 max-md:overflow-y-auto"><a id="ai-link-chatgpt" target="_blank" rel="noopener noreferrer">&gt; EXEC ChatGPT</a> <a id="ai-link-perplexity" target="_blank" rel="noopener noreferrer">&gt; EXEC Perplexity</a> <button id="ai-copy-btn"> </button> <div class="border border-[rgba(0,255,65,0.3)]"><button class="text-term text-glow hover:bg-term hover:text-bg flex w-full cursor-pointer items-center justify-between border-0 bg-transparent px-4 py-[0.6rem] font-mono text-base transition-all duration-200 hover:[text-shadow:none]" id="ai-prompt-toggle"><span> </span> <span class="inline-block text-[0.7rem] transition-transform duration-300">&#9660;</span></button> <!></div></div> <div class="flex justify-end p-[0.8rem] max-md:flex-shrink-0"><button id="ai-modal-close">:q fermer</button></div></div></div>');function De(j,H){se(H,!0);const T="ai-modal-btn border-term text-term text-glow hover:bg-term hover:text-bg flex cursor-pointer items-center gap-[0.6rem] border bg-transparent px-4 py-[0.6rem] font-mono text-base transition-all duration-200 hover:[text-shadow:none]",x=`Voici les informations de référence sur Guillaume PARRAT (GuiGPaP), ingénieur microélectronique, data-scientist, artiste 2D/3D et maker basé en France.

Fiche résumé :
- Formation : Ingénieur INPG Phelma (Microélectronique & Télécoms, 2020), DUT GEII, CPGE MPSI
- Expérience : STMicroelectronics (alternance ingénieur Qualité/Fiabilité RF & aérospatial), CNAM Toulon (chargé de production contenus immersifs, formateur technologies immersives & IA), auto-entrepreneur audiovisuel
- Tech : infrastructure Docker self-hosted sur VPS (Caddy, CrowdSec, N8N, Prometheus, Grafana), AI stack (Qdrant, Claude/Ollama), automatisation workflows
- Créatif : TouchDesigner, Unreal Engine, vidéo-mapping, LED mapping, instruments MIDI custom, IA générative (ComfyUI, Stable Diffusion, Flux.dev), impression 3D, prototypage électronique
- Certifications : TouchDesigner Operation Foundation, Summer of Unreal Engine

Sources officielles (à consulter si possible) :
- CV interactif : https://guigpap.github.io/CV/
- Hub : https://odoo.guigpap.com/
- Documentation technique : https://blog.guigpap.com/fr/
- Portfolio : https://portfolio.guigpap.com/
- GitHub : https://github.com/GuiGPaP
- Fiche complète : https://guigpap.github.io/CV/llms.txt
- Contact : https://odoo.guigpap.com/contactus

Consignes pour la réponse :
1. Présente-toi brièvement comme pouvant aider à découvrir le profil de Guillaume PARRAT.
2. Avant de détailler, pose cette question :

   Quel est votre contexte ?
   A. Recruteur / profil technique → infra, Docker, VPS, automatisation, AI stack
   B. Profil artistique / créatif → projets interactifs, prototypage, expérimentations
   C. Profil hybride (tech + créatif) → sélection équilibrée
   D. Autre → précisez librement

3. Attends la réponse avant de continuer.
4. Base-toi sur les informations ci-dessus et les sources listées. Si une info n'est pas disponible, indique "non précisé".
5. Cite les sources en fin de réponse.`,L="https://chatgpt.com/?q="+encodeURIComponent(x),z="https://www.perplexity.ai/search/new?q="+encodeURIComponent(x);let P=u("> COPY prompt"),l=u(!1),c=u(!1),d,r=u(void 0),p=u(void 0);function y(){o(l,!1),o(c,!1),e(r)&&h.killTweensOf(e(r)),e(p)&&h.killTweensOf(e(p))}function Y(t){y();const i=t?.trigger??document.getElementById("ai-modal-trigger");ue(d,".ai-modal-backdrop",".ai-modal-content",i,B())}function D(){y(),de(d,".ai-modal-backdrop",".ai-modal-content",B())}function X(){e(c)||(e(l)?J():W())}async function W(){if(o(c,!0),o(l,!0),await le(),!e(r)||!e(p)){o(c,!1);return}const t=e(r).scrollHeight,i=h.timeline({onComplete:()=>{o(c,!1)}});i.fromTo(e(r),{height:0},{height:t,duration:.4,ease:"power2.out"},0),i.fromTo(e(p),{y:0,opacity:1},{y:t,opacity:0,duration:.4,ease:"power2.out"},0),i.set(e(r),{height:"auto"})}function J(){if(!e(r))return;o(c,!0),h.timeline({onComplete:()=>{o(l,!1),o(c,!1)}}).to(e(r),{height:0,duration:.3,ease:"power2.in"})}function K(){navigator.clipboard.writeText(x).then(()=>{o(P,"> COPIED !"),setTimeout(()=>{o(P,"> COPY prompt")},2e3)})}ie(()=>{const t=fe(ge.AI_MODAL_OPEN,Y);return()=>{t(),y()}});var f=be(),E=n(f),G=a(E,2),C=a(n(G),4),w=n(C);b(w,1,"ai-modal-btn border-term text-term text-glow hover:bg-term hover:text-bg flex cursor-pointer items-center gap-[0.6rem] border bg-transparent px-4 py-[0.6rem] font-mono text-base transition-all duration-200 hover:[text-shadow:none] no-underline");var A=a(w,2);b(A,1,"ai-modal-btn border-term text-term text-glow hover:bg-term hover:text-bg flex cursor-pointer items-center gap-[0.6rem] border bg-transparent px-4 py-[0.6rem] font-mono text-base transition-all duration-200 hover:[text-shadow:none] no-underline");var m=a(A,2);b(m,1,U(T));var Z=n(m,!0);s(m);var S=a(m,2),g=n(S),k=n(g),$=n(k,!0);s(k);var ee=a(k,2);let q;s(g);var te=a(g,2);{var oe=t=>{var i=ve(),R=n(i);_(R,I=>o(p,I),()=>e(p));var re=a(R,2);re.textContent=`Voici les informations de référence sur Guillaume PARRAT (GuiGPaP), ingénieur microélectronique, data-scientist, artiste 2D/3D et maker basé en France.

Fiche résumé :
- Formation : Ingénieur INPG Phelma (Microélectronique & Télécoms, 2020), DUT GEII, CPGE MPSI
- Expérience : STMicroelectronics (alternance ingénieur Qualité/Fiabilité RF & aérospatial), CNAM Toulon (chargé de production contenus immersifs, formateur technologies immersives & IA), auto-entrepreneur audiovisuel
- Tech : infrastructure Docker self-hosted sur VPS (Caddy, CrowdSec, N8N, Prometheus, Grafana), AI stack (Qdrant, Claude/Ollama), automatisation workflows
- Créatif : TouchDesigner, Unreal Engine, vidéo-mapping, LED mapping, instruments MIDI custom, IA générative (ComfyUI, Stable Diffusion, Flux.dev), impression 3D, prototypage électronique
- Certifications : TouchDesigner Operation Foundation, Summer of Unreal Engine

Sources officielles (à consulter si possible) :
- CV interactif : https://guigpap.github.io/CV/
- Hub : https://odoo.guigpap.com/
- Documentation technique : https://blog.guigpap.com/fr/
- Portfolio : https://portfolio.guigpap.com/
- GitHub : https://github.com/GuiGPaP
- Fiche complète : https://guigpap.github.io/CV/llms.txt
- Contact : https://odoo.guigpap.com/contactus

Consignes pour la réponse :
1. Présente-toi brièvement comme pouvant aider à découvrir le profil de Guillaume PARRAT.
2. Avant de détailler, pose cette question :

   Quel est votre contexte ?
   A. Recruteur / profil technique → infra, Docker, VPS, automatisation, AI stack
   B. Profil artistique / créatif → projets interactifs, prototypage, expérimentations
   C. Profil hybride (tech + créatif) → sélection équilibrée
   D. Autre → précisez librement

3. Attends la réponse avant de continuer.
4. Base-toi sur les informations ci-dessus et les sources listées. Si une info n'est pas disponible, indique "non précisé".
5. Cite les sources en fin de réponse.`,s(i),_(i,I=>o(r,I),()=>e(r)),V(t,i)};pe(te,t=>{e(l)&&t(oe)})}s(S),s(C);var M=a(C,2),F=n(M);b(F,1,U(T)),s(M),s(G),s(f),_(f,t=>d=t,()=>d),ne(()=>{N(w,"href",L),N(A,"href",z),O(Z,e(P)),O($,e(l)?"> Masquer le prompt":"> Voir le prompt"),q=me(ee,"",q,{transform:e(l)?"rotate(180deg)":"rotate(0deg)"})}),v("click",E,D),v("click",m,K),v("click",g,X),v("click",F,D),V(j,f),ae()}ce(["click"]);export{De as default};
