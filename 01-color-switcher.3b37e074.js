!function(){var t,e=document.querySelector("[data-start]"),r=document.querySelector("[data-stop]");r.setAttribute("disabled",""),e.addEventListener("click",(function(a){e.setAttribute("disabled",""),r.removeAttribute("disabled"),t=setInterval((function(){document.querySelector("body").style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3)})),r.addEventListener("click",(function(){e.removeAttribute("disabled"),r.setAttribute("disabled",""),clearInterval(t)}))}();
//# sourceMappingURL=01-color-switcher.3b37e074.js.map