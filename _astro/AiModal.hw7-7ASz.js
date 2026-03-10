import"./disclose-version.DsnmJJEf.js";import{o as ee}from"./index-client.jNvoMz6r.js";import{t as te,a as S,c as oe,d as re,f as V,e as i,s as n,r as a,g as c,j as o,i as w}from"./template.Bxml1E_T.js";import{d as ie,a as g,s as M}from"./render.B_tF91YM.js";import{i as ne}from"./if.CSl38TVT.js";import{b as C,a as F,c as ae}from"./this.xI2JasOA.js";import{g as p}from"./index.CB87Sc6I.js";import{o as se,c as le}from"./modal-animations.BosK113I.js";import{g as R}from"./smooth-scroll.CopxFc86.js";import{o as ce,C as pe}from"./events.B8OKUXUm.js";import"./ScrollTrigger.DQG0xCVk.js";var me=V('<div class="relative overflow-hidden"><div class="pointer-events-none absolute right-0 left-0 h-[3px] opacity-0" style="background: var(--color-term, #00ff41); box-shadow: 0 0 8px var(--color-term, #00ff41), 0 0 20px var(--color-term, #00ff41);"></div> <div class="ai-prompt-body scrollbar-term max-h-[200px] overflow-y-auto overscroll-y-contain border-t border-[rgba(0,255,65,0.2)] bg-[rgba(0,255,65,0.03)] p-[0.8rem] text-[0.8rem] leading-[1.5] break-words whitespace-pre-wrap" id="ai-prompt-body"></div></div>'),ue=V('<div class="ai-modal fixed inset-0 z-[var(--z-modal)] h-screen w-screen items-center justify-center" id="ai-modal" style="display: none;"><div class="ai-modal-backdrop absolute inset-0 bg-[rgba(0,0,0,0.7)] backdrop-blur-[4px]" role="presentation"></div> <div class="ai-modal-content border-term bg-bg text-glow text-term relative w-[90vw] max-w-[750px] border p-8 font-mono max-md:mt-[var(--modal-voffset,0px)] max-md:flex max-md:h-auto max-md:max-h-[85vh] max-md:w-[calc(100%-8px)] max-md:!max-w-none max-md:flex-col max-md:overflow-y-auto max-md:pb-[env(safe-area-inset-bottom)]" data-lenis-prevent=""><div class="mb-2 text-[1.1rem] opacity-90">&gt; QUERY_AI.sh</div> <div class="mb-6 text-[0.9rem] opacity-70">Interroger une IA sur mon profil, mes compétences ou mon infrastructure.</div> <div class="flex flex-col gap-[0.8rem] overscroll-y-contain max-md:flex-1 max-md:overflow-y-auto"><a id="ai-link-chatgpt" target="_blank" rel="noopener noreferrer" class="ai-modal-btn border-term text-term text-glow hover:bg-term hover:text-bg flex cursor-pointer items-center gap-[0.6rem] border bg-transparent px-4 py-[0.6rem] font-mono text-base no-underline transition-all duration-200 hover:[text-shadow:none]">&gt; EXEC ChatGPT</a> <a id="ai-link-perplexity" target="_blank" rel="noopener noreferrer" class="ai-modal-btn border-term text-term text-glow hover:bg-term hover:text-bg flex cursor-pointer items-center gap-[0.6rem] border bg-transparent px-4 py-[0.6rem] font-mono text-base no-underline transition-all duration-200 hover:[text-shadow:none]">&gt; EXEC Perplexity</a> <button class="ai-modal-btn border-term text-term text-glow hover:bg-term hover:text-bg flex cursor-pointer items-center gap-[0.6rem] border bg-transparent px-4 py-[0.6rem] font-mono text-base transition-all duration-200 hover:[text-shadow:none]" id="ai-copy-btn"> </button> <div class="border border-[rgba(0,255,65,0.3)]"><button class="text-term text-glow hover:bg-term hover:text-bg flex w-full cursor-pointer items-center justify-between border-0 bg-transparent px-4 py-[0.6rem] font-mono text-base transition-all duration-200 hover:[text-shadow:none]" id="ai-prompt-toggle"><span> </span> <span class="inline-block text-[0.7rem] transition-transform duration-300">&#9660;</span></button> <!></div></div> <div class="flex justify-end p-[0.8rem] max-md:flex-shrink-0"><button class="ai-modal-btn border-term text-term text-glow hover:bg-term hover:text-bg flex cursor-pointer items-center gap-[0.6rem] border bg-transparent px-4 py-[0.6rem] font-mono text-base transition-all duration-200 hover:[text-shadow:none]" id="ai-modal-close">:q fermer</button></div></div></div>');function Ae(O,U){re(U,!0);const b=`Voici les informations de référence sur Guillaume PARRAT (GuiGPaP), ingénieur microélectronique, data-scientist, artiste 2D/3D et maker basé en France.

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
5. Cite les sources en fin de réponse.`,N="https://chatgpt.com/?q="+encodeURIComponent(b),B="https://www.perplexity.ai/search/new?q="+encodeURIComponent(b);let v=w("> COPY prompt"),s=w(!1),l=w(!1),m,e,h;function Q(t){o(s,!1),o(l,!1),e&&(p.killTweensOf(e),p.set(e,{clearProps:"height,overflow"}));const r=t?.trigger??document.getElementById("ai-modal-trigger");se(m,".ai-modal-backdrop",".ai-modal-content",r,R())}function A(){o(s,!1),o(l,!1),e&&(p.killTweensOf(e),p.set(e,{clearProps:"height,overflow"})),le(m,".ai-modal-backdrop",".ai-modal-content",R())}function j(){c(l)||(c(s)?z():H())}function H(){o(l,!0),o(s,!0),requestAnimationFrame(()=>{const t=e.scrollHeight,r=p.timeline({onComplete:()=>{o(l,!1)}});r.fromTo(e,{height:0},{height:t,duration:.4,ease:"power2.out"},0),r.fromTo(h,{y:0,opacity:1},{y:t,opacity:0,duration:.4,ease:"power2.out"},0),r.set(e,{height:"auto"})})}function z(){o(l,!0),p.timeline({onComplete:()=>{o(s,!1),o(l,!1)}}).to(e,{height:0,duration:.3,ease:"power2.in"})}function L(){navigator.clipboard.writeText(b).then(()=>{o(v,"> COPIED !"),setTimeout(()=>{o(v,"> COPY prompt")},2e3)})}ee(()=>ce(pe.AI_MODAL_OPEN,Q));var u=ue(),I=i(u),k=n(I,2),x=n(i(k),4),D=i(x),T=n(D,2),d=n(T,2),Y=i(d,!0);a(d);var _=n(d,2),f=i(_),P=i(f),X=i(P,!0);a(P);var W=n(P,2);let E;a(f);var J=n(f,2);{var K=t=>{var r=me(),q=i(r);C(q,y=>h=y,()=>h);var $=n(q,2);$.textContent=`Voici les informations de référence sur Guillaume PARRAT (GuiGPaP), ingénieur microélectronique, data-scientist, artiste 2D/3D et maker basé en France.

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
5. Cite les sources en fin de réponse.`,a(r),C(r,y=>e=y,()=>e),S(t,r)};ne(J,t=>{c(s)&&t(K)})}a(_),a(x);var G=n(x,2),Z=i(G);a(G),a(k),a(u),C(u,t=>m=t,()=>m),te(()=>{F(D,"href",N),F(T,"href",B),M(Y,c(v)),M(X,c(s)?"> Masquer le prompt":"> Voir le prompt"),E=ae(W,"",E,{transform:c(s)?"rotate(180deg)":"rotate(0deg)"})}),g("click",I,A),g("click",d,L),g("click",f,j),g("click",Z,A),S(O,u),oe()}ie(["click"]);export{Ae as default};
