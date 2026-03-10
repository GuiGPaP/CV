import"./disclose-version.DsnmJJEf.js";import{o as S}from"./index-client.Cod4efyj.js";import{b as V,t as _,a as E,f as D,e as n,r as a,s as o,g as c,j as T,k as v,c as O,d as U}from"./template.BYy8BGkP.js";import{d as G,a as m,s as h}from"./render.COcF__ry.js";import{s as x,b as F}from"./this.B4SRaEQs.js";import{o as N,c as Q}from"./modal-animations.D53B5ZQD.js";import{g as I}from"./smooth-scroll.CopxFc86.js";import{o as j,C as z}from"./events.DdUwVn9O.js";import"./index.CB87Sc6I.js";import"./ScrollTrigger.DQG0xCVk.js";var B=D('<button class="ai-prompt-toggle text-term text-glow hover:border-term cursor-pointer border border-[rgba(0,255,65,0.3)] bg-transparent px-[0.8rem] py-[0.4rem] font-mono text-[0.85rem]" id="ai-prompt-toggle"> </button> <div class="ai-prompt-body scrollbar-term mt-[0.8rem] hidden max-h-[200px] overflow-y-auto border border-[rgba(0,255,65,0.2)] bg-[rgba(0,255,65,0.03)] p-[0.8rem] text-[0.8rem] leading-[1.5] break-words whitespace-pre-wrap data-open:block" id="ai-prompt-body"> </div>',1);function L(d,u){let e=T(!1);function b(){v(e,!c(e))}var s=B(),t=V(s),r=n(t,!0);a(t);var i=o(t,2),l=n(i,!0);a(i),_(()=>{h(r,c(e)?"[-] Masquer le prompt":"[+] Voir le prompt"),x(i,"data-open",c(e)||void 0),h(l,u.prompt)}),m("click",t,b),E(d,s)}G(["click"]);var X=D('<div class="ai-modal fixed inset-0 z-[var(--z-modal)] h-screen w-screen items-center justify-center" id="ai-modal" style="display: none;"><div class="ai-modal-backdrop absolute inset-0 bg-[rgba(0,0,0,0.7)] backdrop-blur-[4px]" role="presentation"></div> <div class="ai-modal-content border-term bg-bg text-glow text-term relative w-[90vw] max-w-[550px] border p-8 font-mono"><button class="ai-modal-close border-term text-term text-glow hover:bg-term hover:text-bg absolute top-[0.8rem] right-[0.8rem] cursor-pointer border bg-transparent px-[0.5rem] py-[0.2rem] font-mono text-base transition-all duration-200 hover:[text-shadow:none]" id="ai-modal-close">[X]</button> <div class="mb-2 text-[1.1rem] opacity-90">&gt; QUERY_AI.sh</div> <div class="mb-6 text-[0.9rem] opacity-70">Interroger une IA sur mon profil, mes compétences ou mon infrastructure.</div> <div class="mb-6 flex flex-col gap-[0.8rem]"><a id="ai-link-chatgpt" target="_blank" rel="noopener noreferrer" class="ai-modal-btn border-term text-term text-glow hover:bg-term hover:text-bg flex cursor-pointer items-center gap-[0.6rem] border bg-transparent px-4 py-[0.6rem] font-mono text-base no-underline transition-all duration-200 hover:[text-shadow:none]">&gt; EXEC ChatGPT</a> <a id="ai-link-perplexity" target="_blank" rel="noopener noreferrer" class="ai-modal-btn border-term text-term text-glow hover:bg-term hover:text-bg flex cursor-pointer items-center gap-[0.6rem] border bg-transparent px-4 py-[0.6rem] font-mono text-base no-underline transition-all duration-200 hover:[text-shadow:none]">&gt; EXEC Perplexity</a> <button class="ai-modal-btn border-term text-term text-glow hover:bg-term hover:text-bg flex cursor-pointer items-center gap-[0.6rem] border bg-transparent px-4 py-[0.6rem] font-mono text-base transition-all duration-200 hover:[text-shadow:none]" id="ai-copy-btn"> </button></div> <!></div></div>');function oe(d,u){U(u,!0);const e=`Voici les informations de référence sur Guillaume PARRAT (GuiGPaP), ingénieur microélectronique, data-scientist, artiste 2D/3D et maker basé en France.

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
5. Cite les sources en fin de réponse.`,b="https://chatgpt.com/?q="+encodeURIComponent(e),s="https://www.perplexity.ai/search/new?q="+encodeURIComponent(e);let t=T("> COPY prompt"),r;function i(){N(r,".ai-modal-backdrop",".ai-modal-content",I())}function l(){Q(r,".ai-modal-backdrop",".ai-modal-content",I())}function q(){navigator.clipboard.writeText(e).then(()=>{v(t,"> COPIED !"),setTimeout(()=>{v(t,"> COPY prompt")},2e3)})}S(()=>j(z.AI_MODAL_OPEN,i));var p=X(),w=n(p),P=o(w,2),C=n(P),g=o(C,6),y=n(g),k=o(y,2),f=o(k,2),M=n(f,!0);a(f),a(g);var R=o(g,2);L(R,{prompt:e}),a(P),a(p),F(p,A=>r=A,()=>r),_(()=>{x(y,"href",b),x(k,"href",s),h(M,c(t))}),m("click",w,l),m("click",C,l),m("click",f,q),E(d,p),O()}G(["click"]);export{oe as default};
