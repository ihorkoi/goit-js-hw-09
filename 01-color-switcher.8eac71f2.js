const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");let r;e.setAttribute("disabled",""),t.addEventListener("click",(d=>{t.setAttribute("disabled",""),e.removeAttribute("disabled"),r=setInterval((()=>{document.querySelector("body").style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3)})),e.addEventListener("click",(()=>{t.removeAttribute("disabled"),e.setAttribute("disabled",""),clearInterval(r)}));
//# sourceMappingURL=01-color-switcher.8eac71f2.js.map