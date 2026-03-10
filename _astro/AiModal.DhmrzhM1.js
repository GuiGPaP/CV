import"./disclose-version.DsnmJJEf.js";import{o as V}from"./index-client.BRPzg5uM.js";import{t as U,a as O,c as N,d as Q,s as e,f as j,e as r,r as n,g as p,j as i,i as w}from"./template.C5Nqcw_e.js";import{d as B,a as u,e as z,s as I}from"./render.fRyr5Ad4.js";import{b as H,a as f}from"./this.BoRPRi3Q.js";import{o as L,c as Y}from"./modal-animations.BosK113I.js";import{g as A}from"./smooth-scroll.CopxFc86.js";import{o as X,C as J}from"./events.B8OKUXUm.js";import"./index.CB87Sc6I.js";import"./ScrollTrigger.DQG0xCVk.js";var K=j('<div class="ai-modal fixed inset-0 z-[var(--z-modal)] h-screen w-screen items-center justify-center max-md:items-start max-md:justify-center max-md:pt-1" id="ai-modal" style="display: none;"><div class="ai-modal-backdrop absolute inset-0 bg-[rgba(0,0,0,0.7)] backdrop-blur-[4px]" role="presentation"></div> <div class="ai-modal-content border-term bg-bg text-glow text-term relative w-[90vw] max-w-[750px] border p-8 font-mono max-md:flex max-md:h-[var(--modal-vh,calc(100svh-16px))] max-md:w-[calc(100%-8px)] max-md:!max-w-none max-md:flex-col max-md:pb-[env(safe-area-inset-bottom)]"><div class="mb-2 text-[1.1rem] opacity-90">&gt; QUERY_AI.sh</div> <div class="mb-6 text-[0.9rem] opacity-70">Interroger une IA sur mon profil, mes compétences ou mon infrastructure.</div> <div class="flex [touch-action:pan-y] flex-col gap-[0.8rem] overscroll-y-contain max-md:flex-1 max-md:overflow-y-auto"><a id="ai-link-chatgpt" target="_blank" rel="noopener noreferrer" class="ai-modal-btn border-term text-term text-glow hover:bg-term hover:text-bg flex cursor-pointer items-center gap-[0.6rem] border bg-transparent px-4 py-[0.6rem] font-mono text-base no-underline transition-all duration-200 hover:[text-shadow:none]">&gt; EXEC ChatGPT</a> <a id="ai-link-perplexity" target="_blank" rel="noopener noreferrer" class="ai-modal-btn border-term text-term text-glow hover:bg-term hover:text-bg flex cursor-pointer items-center gap-[0.6rem] border bg-transparent px-4 py-[0.6rem] font-mono text-base no-underline transition-all duration-200 hover:[text-shadow:none]">&gt; EXEC Perplexity</a> <button class="ai-modal-btn border-term text-term text-glow hover:bg-term hover:text-bg flex cursor-pointer items-center gap-[0.6rem] border bg-transparent px-4 py-[0.6rem] font-mono text-base transition-all duration-200 hover:[text-shadow:none]" id="ai-copy-btn"> </button> <button class="ai-modal-btn border-term text-term text-glow hover:bg-term hover:text-bg flex cursor-pointer items-center gap-[0.6rem] border bg-transparent px-4 py-[0.6rem] font-mono text-base transition-all duration-200 hover:[text-shadow:none]" id="ai-prompt-toggle"> </button> <div class="ai-prompt-body scrollbar-term hidden max-h-[200px] [touch-action:pan-y] overflow-y-auto overscroll-y-contain border border-[rgba(0,255,65,0.2)] bg-[rgba(0,255,65,0.03)] p-[0.8rem] text-[0.8rem] leading-[1.5] break-words whitespace-pre-wrap data-open:block max-md:max-h-none" id="ai-prompt-body"></div></div> <div class="flex justify-end p-[0.8rem] max-md:flex-shrink-0"><button class="ai-modal-btn border-term text-term text-glow hover:bg-term hover:text-bg flex cursor-pointer items-center gap-[0.6rem] border bg-transparent px-4 py-[0.6rem] font-mono text-base transition-all duration-200 hover:[text-shadow:none]" id="ai-modal-close">:q fermer</button></div></div></div>');function se(k,D){Q(D,!0);const d=`Voici les informations de référence sur Guillaume PARRAT (GuiGPaP), ingénieur microélectronique, data-scientist, artiste 2D/3D et maker basé en France.

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
5. Cite les sources en fin de réponse.`,E="https://chatgpt.com/?q="+encodeURIComponent(d),G="https://www.perplexity.ai/search/new?q="+encodeURIComponent(d);let g=w("> COPY prompt"),t=w(!1),a;function T(o){i(t,!1);const R=o?.trigger??document.getElementById("ai-modal-trigger");L(a,".ai-modal-backdrop",".ai-modal-content",R,A())}function b(){i(t,!1),Y(a,".ai-modal-backdrop",".ai-modal-content",A())}function q(){i(t,!p(t))}function _(){navigator.clipboard.writeText(d).then(()=>{i(g,"> COPIED !"),setTimeout(()=>{i(g,"> COPY prompt")},2e3)})}V(()=>X(J.AI_MODAL_OPEN,T));var s=K(),h=r(s),x=e(h,2),l=e(r(x),4),v=r(l),P=e(v,2),c=e(P,2),S=r(c,!0);n(c);var m=e(c,2),M=r(m,!0);n(m);var C=e(m,2);C.textContent=`Voici les informations de référence sur Guillaume PARRAT (GuiGPaP), ingénieur microélectronique, data-scientist, artiste 2D/3D et maker basé en France.

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
5. Cite les sources en fin de réponse.`,n(l);var y=e(l,2),F=r(y);n(y),n(x),n(s),H(s,o=>a=o,()=>a),U(()=>{f(v,"href",E),f(P,"href",G),I(S,p(g)),I(M,p(t)?"[-] Masquer le prompt":"[+] Voir le prompt"),f(C,"data-open",p(t)||void 0)}),u("click",h,b),z("wheel",l,o=>o.stopPropagation()),u("click",c,_),u("click",m,q),u("click",F,b),O(k,s),N()}B(["click"]);export{se as default};
