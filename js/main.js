        window.history.scrollRestoration = 'manual';
        window.scrollTo(0, 0);

        document.addEventListener('DOMContentLoaded', function() {
            var now = new Date();
            document.getElementById('sys-date').textContent = now.toISOString();
            document.getElementById('kernel-date').textContent = now.getFullYear() + '.' + String(now.getMonth() + 1).padStart(2, '0');

            // Typing effect: type out text character by character
            function typeLine(el, text, charDelay) {
                return new Promise(function(resolve) {
                    el.textContent = '';
                    el.classList.add('typing');
                    var i = 0;
                    function tick() {
                        if (i < text.length) {
                            el.textContent += text[i];
                            i++;
                            setTimeout(tick, charDelay);
                        } else {
                            el.classList.remove('typing');
                            el.classList.add('typed');
                            resolve();
                        }
                    }
                    tick();
                });
            }

            // Reveal ASCII art char by char (typing effect)
            function revealAsciiArt(el) {
                return new Promise(function(resolve) {
                    var fullText = el.textContent;
                    var lines = fullText.split('\n');
                    el.textContent = '';
                    el.style.opacity = '1';
                    var lineIdx = 0;
                    var charIdx = 0;
                    function tick() {
                        if (lineIdx >= lines.length) { resolve(); return; }
                        var line = lines[lineIdx];
                        if (charIdx === 0 && lineIdx > 0) {
                            el.textContent += '\n';
                        }
                        if (charIdx < line.length) {
                            el.textContent += line[charIdx];
                            charIdx++;
                        } else {
                            lineIdx++;
                            charIdx = 0;
                        }
                        if (lineIdx < lines.length) {
                            setTimeout(tick, 1);
                        } else {
                            resolve();
                        }
                    }
                    tick();
                });
            }

            // Collect elements
            var bootLines = document.querySelectorAll('.sys-out[data-boot-step]');
            var asciiArt = document.querySelector('.ascii-art[data-boot-step]');

            // Store original text and clear all boot lines
            var texts = [];
            bootLines.forEach(function(el) {
                texts.push(el.textContent);
                el.textContent = '';
            });

            // Skip animation if already seen
            var alreadySeen = localStorage.getItem('bootAnimSeen');
            if (alreadySeen) {
                bootLines.forEach(function(el, i) {
                    el.textContent = texts[i];
                    el.classList.add('typed');
                });
                asciiArt.style.opacity = '1';
                document.querySelector('.status-bar').classList.add('boot-visible');
                document.querySelectorAll('.cmd-block').forEach(function(block) {
                    block.classList.add('boot-reveal');
                });
                document.querySelectorAll('.terminal-input-line').forEach(function(line) {
                    line.classList.add('boot-visible');
                });
            }

            // Phase 1: type boot lines one by one
            var charSpeed = 25; // ms per character
            var linePause = 300; // pause between lines

            function typeAllLines(index) {
                if (index >= bootLines.length) {
                    // Phase 2: ASCII art line by line
                    setTimeout(function() {
                        revealAsciiArt(asciiArt).then(function() {
                            revealRest();
                        });
                    }, 400);
                    return;
                }
                typeLine(bootLines[index], texts[index], charSpeed).then(function() {
                    setTimeout(function() {
                        typeAllLines(index + 1);
                    }, linePause);
                });
            }

            function revealRest() {
                // Phase 3: status bar
                var statusBar = document.querySelector('.status-bar');
                setTimeout(function() { statusBar.classList.add('boot-visible'); }, 300);

                // Phase 4: cmd-blocks (déclenche l'animation seulement maintenant)
                var blocks = document.querySelectorAll('.cmd-block');
                blocks.forEach(function(block, i) {
                    setTimeout(function() {
                        block.classList.add('boot-reveal');
                    }, 600 + i * 300);
                });

                // Phase 5: contact lines (echo + nvim)
                var contactLines = document.querySelectorAll('.terminal-input-line');
                contactLines.forEach(function(line, i) {
                    setTimeout(function() {
                        line.classList.add('boot-visible');
                        if (i === contactLines.length - 1) {
                            localStorage.setItem('bootAnimSeen', '1');
                        }
                    }, 800 + blocks.length * 300 + i * 400);
                });
            }

            // Start the sequence (only if not already seen)
            if (!alreadySeen) {
                typeAllLines(0);
            }

            // Timeline interactive system
            var timelineOutput = document.getElementById('timeline-output');
            var timelineBtns = document.querySelectorAll('.tui-btn[data-filter]');
            var timelineAnimating = false;

            // Type a command into a container element
            function typeCommand(text, container, charDelay) {
                return new Promise(function(resolve) {
                    var cmdLine = document.createElement('div');
                    cmdLine.className = 'timeline-cmd-line';
                    cmdLine.innerHTML = '<span class="cmd-text"></span>';
                    container.appendChild(cmdLine);
                    var cmdText = cmdLine.querySelector('.cmd-text');
                    var fullText = 'guig@parrat:~$ ' + text;
                    var i = 0;
                    function tick() {
                        if (i < fullText.length) {
                            cmdText.textContent += fullText[i];
                            i++;
                            setTimeout(tick, charDelay || 20);
                        } else {
                            cmdText.classList.add('done');
                            resolve();
                        }
                    }
                    tick();
                });
            }

            // Show a progress bar animation
            function showProgress(count, container) {
                return new Promise(function(resolve) {
                    var el = document.createElement('div');
                    el.className = 'timeline-progress';
                    el.textContent = 'Searching... ';
                    container.appendChild(el);
                    var blocks = 10;
                    var filled = 0;
                    function tick() {
                        if (filled < blocks) {
                            filled++;
                            el.textContent = 'Searching... ' + '\u2588'.repeat(filled) + '\u2591'.repeat(blocks - filled);
                            setTimeout(tick, 50);
                        } else {
                            el.textContent = 'Searching... ' + '\u2588'.repeat(blocks) + ' ' + count + ' results';
                            resolve();
                        }
                    }
                    tick();
                });
            }

            // Get entries for a category, in DOM order
            function getEntriesForCategory(category) {
                return Array.from(document.querySelectorAll('.timeline-entry.' + category));
            }

            // Update year header visibility based on visible entries
            function updateYearHeaders() {
                var years = document.querySelectorAll('.timeline-year');
                years.forEach(function(year) {
                    var next = year.nextElementSibling;
                    var hasVisible = false;
                    while (next && !next.classList.contains('timeline-year')) {
                        if (next.classList.contains('timeline-entry') && next.classList.contains('visible')) {
                            hasVisible = true;
                            break;
                        }
                        next = next.nextElementSibling;
                    }
                    if (hasVisible) {
                        year.classList.add('visible');
                    } else {
                        year.classList.remove('visible');
                    }
                });
            }

            // Cascade-show entries with stagger
            function cascadeShow(entries, delay) {
                return new Promise(function(resolve) {
                    if (entries.length === 0) { resolve(); return; }
                    var i = 0;
                    function tick() {
                        if (i < entries.length) {
                            entries[i].classList.add('visible', 'cascade-in');
                            entries[i].classList.remove('cascade-out');
                            updateYearHeaders();
                            i++;
                            if (i < entries.length) {
                                setTimeout(tick, delay || 30);
                            } else {
                                setTimeout(resolve, 200);
                            }
                        }
                    }
                    tick();
                });
            }

            // Cascade-hide entries in reverse with stagger
            function cascadeHide(entries, delay) {
                return new Promise(function(resolve) {
                    if (entries.length === 0) { resolve(); return; }
                    var reversed = entries.slice().reverse();
                    var i = 0;
                    function tick() {
                        if (i < reversed.length) {
                            reversed[i].classList.add('cascade-out');
                            reversed[i].classList.remove('cascade-in');
                            var el = reversed[i];
                            setTimeout(function() {
                                el.classList.remove('visible', 'cascade-out');
                            }, 200);
                            i++;
                            if (i < reversed.length) {
                                setTimeout(tick, delay || 30);
                            } else {
                                setTimeout(function() {
                                    updateYearHeaders();
                                    resolve();
                                }, 250);
                            }
                        }
                    }
                    tick();
                });
            }

            // Disable/enable all buttons during animation
            function setButtonsDisabled(disabled) {
                timelineBtns.forEach(function(btn) {
                    if (disabled) {
                        btn.classList.add('disabled');
                    } else {
                        btn.classList.remove('disabled');
                    }
                });
            }

            // Handle button click
            timelineBtns.forEach(function(btn) {
                btn.addEventListener('click', function() {
                    if (timelineAnimating) return;
                    timelineAnimating = true;
                    setButtonsDisabled(true);

                    var category = btn.getAttribute('data-filter');
                    var label = btn.getAttribute('data-grep');
                    var isActive = btn.classList.contains('active');

                    if (isActive) {
                        // Deactivate: sed command + reverse cascade
                        btn.classList.remove('active');
                        var entries = getEntriesForCategory(category).filter(function(e) {
                            return e.classList.contains('visible');
                        });
                        typeCommand("sed -i '/" + label + "/d' output.tmp", timelineOutput, 18).then(function() {
                            var msg = document.createElement('div');
                            msg.className = 'timeline-result-msg';
                            msg.textContent = 'Removed ' + entries.length + ' entries.';
                            timelineOutput.appendChild(msg);
                            return cascadeHide(entries, 25);
                        }).then(function() {
                            timelineAnimating = false;
                            setButtonsDisabled(false);
                        });
                    } else {
                        // Activate: grep command + progress + cascade
                        btn.classList.add('active');
                        var entries = getEntriesForCategory(category);
                        var newEntries = entries.filter(function(e) {
                            return !e.classList.contains('visible');
                        });
                        typeCommand('grep ' + label + ' /var/log/timeline.log', timelineOutput, 18).then(function() {
                            return showProgress(newEntries.length, timelineOutput);
                        }).then(function() {
                            return cascadeShow(newEntries, 30);
                        }).then(function() {
                            timelineAnimating = false;
                            setButtonsDisabled(false);
                        });
                    }
                });
            });
            // AI Modal
            var aiPrompt = "Voici les informations de référence sur Guillaume PARRAT (GuiGPaP), ingénieur microélectronique, data-scientist, artiste 2D/3D et maker basé en France.\n\nFiche résumé :\n- Formation : Ingénieur INPG Phelma (Microélectronique & Télécoms, 2020), DUT GEII, CPGE MPSI\n- Expérience : STMicroelectronics (alternance ingénieur Qualité/Fiabilité RF & aérospatial), CNAM Toulon (chargé de production contenus immersifs, formateur technologies immersives & IA), auto-entrepreneur audiovisuel\n- Tech : infrastructure Docker self-hosted sur VPS (Caddy, CrowdSec, N8N, Prometheus, Grafana), AI stack (Qdrant, Claude/Ollama), automatisation workflows\n- Créatif : TouchDesigner, Unreal Engine, vidéo-mapping, LED mapping, instruments MIDI custom, IA générative (ComfyUI, Stable Diffusion, Flux.dev), impression 3D, prototypage électronique\n- Certifications : TouchDesigner Operation Foundation, Summer of Unreal Engine\n\nSources officielles (à consulter si possible) :\n- CV interactif : https://guigpap.github.io/CV/\n- Hub : https://odoo.guigpap.com/\n- Documentation technique : https://blog.guigpap.com/fr/\n- Portfolio : https://portfolio.guigpap.com/\n- GitHub : https://github.com/GuiGPaP\n- Fiche complète : https://guigpap.github.io/CV/llms.txt\n- Contact : https://odoo.guigpap.com/contactus\n\nConsignes pour la réponse :\n1. Présente-toi brièvement comme pouvant aider à découvrir le profil de Guillaume PARRAT.\n2. Avant de détailler, pose cette question :\n\n   Quel est votre contexte ?\n   A. Recruteur / profil technique → infra, Docker, VPS, automatisation, AI stack\n   B. Profil artistique / créatif → projets interactifs, prototypage, expérimentations\n   C. Profil hybride (tech + créatif) → sélection équilibrée\n   D. Autre → précisez librement\n\n3. Attends la réponse avant de continuer.\n4. Base-toi sur les informations ci-dessus et les sources listées. Si une info n'est pas disponible, indique \"non précisé\".\n5. Cite les sources en fin de réponse.";

            var chatgptUrl = 'https://chatgpt.com/?q=' + encodeURIComponent(aiPrompt);
            var perplexityUrl = 'https://www.perplexity.ai/search/new?q=' + encodeURIComponent(aiPrompt);

            document.getElementById('ai-link-chatgpt').href = chatgptUrl;
            document.getElementById('ai-link-perplexity').href = perplexityUrl;
            document.getElementById('ai-prompt-body').textContent = aiPrompt;

            var aiModal = document.getElementById('ai-modal');
            var aiTrigger = document.getElementById('ai-modal-trigger');
            var aiClose = document.getElementById('ai-modal-close');
            var aiBackdrop = aiModal.querySelector('.ai-modal-backdrop');
            var aiToggle = document.getElementById('ai-prompt-toggle');
            var aiBody = document.getElementById('ai-prompt-body');
            var aiCopyBtn = document.getElementById('ai-copy-btn');

            aiTrigger.addEventListener('click', function() {
                aiModal.classList.add('open');
            });
            aiClose.addEventListener('click', function() {
                aiModal.classList.remove('open');
            });
            aiBackdrop.addEventListener('click', function() {
                aiModal.classList.remove('open');
            });

            aiToggle.addEventListener('click', function() {
                var isOpen = aiBody.classList.toggle('open');
                aiToggle.textContent = isOpen ? '[-] Masquer le prompt' : '[+] Voir le prompt';
            });

            aiCopyBtn.addEventListener('click', function() {
                navigator.clipboard.writeText(aiPrompt).then(function() {
                    aiCopyBtn.textContent = '> COPIED !';
                    setTimeout(function() {
                        aiCopyBtn.textContent = '> COPY prompt';
                    }, 2000);
                });
            });

            // Nvim contact modal
            var nvimModal = document.getElementById('nvim-modal');
            var nvimTrigger = document.getElementById('nvim-trigger');
            var nvimTextarea = document.getElementById('nvim-textarea');
            var nvimBackdrop = nvimModal.querySelector('.nvim-modal-backdrop');
            var nvimCancel = document.getElementById('nvim-cancel');
            var nvimSend = document.getElementById('nvim-send');
            var nvimPosition = document.getElementById('nvim-position');

            var nvimTemplate = 'Bonjour Guillaume,\n\n\n\nCordialement,\n[votre nom]';
            var nvimCursorPos = 'Bonjour Guillaume,\n\n'.length;
            var NVIM_CHAR_LIMIT = 1000;
            var nvimCharcount = document.getElementById('nvim-charcount');
            var nvimWarning = document.getElementById('nvim-warning');
            nvimTextarea.value = nvimTemplate;

            function openNvim() {
                nvimModal.classList.add('open');
                nvimTextarea.focus();
                nvimTextarea.setSelectionRange(nvimCursorPos, nvimCursorPos);
                updatePosition();
                updateCharcount();
            }
            function closeNvim() {
                nvimModal.classList.remove('open');
            }
            function updatePosition() {
                var val = nvimTextarea.value.substring(0, nvimTextarea.selectionStart);
                var lines = val.split('\n');
                var line = lines.length;
                var col = lines[lines.length - 1].length;
                nvimPosition.textContent = line + ',' + col + '   All';
            }
            function updateCharcount() {
                var len = nvimTextarea.value.length;
                var over = len > NVIM_CHAR_LIMIT;
                nvimCharcount.textContent = len + '/' + NVIM_CHAR_LIMIT;
                nvimCharcount.classList.toggle('nvim-charcount-over', over);
                nvimWarning.classList.toggle('visible', over);
                nvimSend.textContent = over ? ':wq ouvrir la boite mail' : ':wq envoyer';
            }
            function sendMessage() {
                var msg = nvimTextarea.value.trim();
                if (!msg) return;
                var subject = encodeURIComponent('Contact depuis CV interactif');
                var body = encodeURIComponent(msg);
                window.open('mailto:guillaume.parrat@gmail.com?subject=' + subject + '&body=' + body, '_blank');
                closeNvim();
            }

            nvimTrigger.addEventListener('click', openNvim);
            nvimBackdrop.addEventListener('click', closeNvim);
            nvimCancel.addEventListener('click', closeNvim);
            nvimSend.addEventListener('click', sendMessage);

            nvimTextarea.addEventListener('input', function() { updatePosition(); updateCharcount(); });
            nvimTextarea.addEventListener('click', updatePosition);
            nvimTextarea.addEventListener('keyup', updatePosition);

            nvimTextarea.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
                    e.preventDefault();
                    sendMessage();
                }
            });

            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && nvimModal.classList.contains('open')) {
                    closeNvim();
                }
            });

            // Easter egg: STATUS: ONLINE reboot
            var statusOnline = document.getElementById('status-online');
            var rebootMsg = document.getElementById('reboot-msg');
            var rebootMsgText = document.getElementById('reboot-msg-text');
            var crtShutdown = document.getElementById('crt-shutdown');

            var rebootLines = [
                '> CRITICAL: UNAUTHORIZED ACCESS DETECTED',
                '> TRACE: 0xDEAD 0xBEEF 0xCAFE',
                '> INITIATING EMERGENCY REBOOT...',
                '> sudo kill -9 $(pidof reality)'
            ];

            function typeRebootLine(el, lines, lineIdx, charIdx) {
                if (lineIdx >= lines.length) {
                    setTimeout(function() {
                        rebootMsgText.style.display = 'none';
                        rebootMsg.style.background = '#000';
                        crtShutdown.classList.add('active');
                        setTimeout(function() {
                            localStorage.removeItem('bootAnimSeen');
                            location.reload();
                        }, 600);
                    }, 400);
                    return;
                }
                if (charIdx === 0 && lineIdx > 0) el.textContent += '\n';
                if (charIdx < lines[lineIdx].length) {
                    el.textContent += lines[lineIdx][charIdx];
                    setTimeout(function() {
                        typeRebootLine(el, lines, lineIdx, charIdx + 1);
                    }, 30);
                } else {
                    setTimeout(function() {
                        typeRebootLine(el, lines, lineIdx + 1, 0);
                    }, 200);
                }
            }

            statusOnline.addEventListener('click', function() {
                rebootMsgText.textContent = '';
                rebootMsgText.style.display = '';
                rebootMsg.style.background = '';
                rebootMsg.classList.add('active');
                setTimeout(function() {
                    typeRebootLine(rebootMsgText, rebootLines, 0, 0);
                }, 100);
            });
        });
