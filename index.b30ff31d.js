!function(){"use strict";var e={burgerBtn:document.querySelector("[data-mobile-open]"),mobileMenu:document.querySelector("[data-mobile-menu]")},n=function(){e.mobileMenu.classList.remove("is-open")},t=function(e){e.target.closest("[data-mobile-open]")||e.target.closest("[data-mobile-menu]")||(n(),document.removeEventListener("click",t))};e.burgerBtn.addEventListener("click",(function(n){n.stopPropagation(),e.mobileMenu.classList.toggle("is-open"),e.mobileMenu.classList.contains("is-open")?document.addEventListener("click",t):document.removeEventListener("click",t)})),e.mobileMenu.addEventListener("click",(function(o){"A"===o.target.nodeName&&(n(),e.mobileMenu.classList.contains("is-open")||document.removeEventListener("click",t))}))}();
//# sourceMappingURL=index.b30ff31d.js.map
