(()=>{"use strict";const e=()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("page-content");const n=document.createElement("img");n.src="https://as2.ftcdn.net/v2/jpg/03/03/62/45/1000_F_303624505_u0bFT1Rnoj8CMUSs8wMCwoKlnWlh5Jiq.jpg",n.height="300",t.appendChild(n);const c=document.createElement("h1");c.textContent="Welcome",t.appendChild(c);const d=document.createElement("p");d.textContent="Good food",t.appendChild(d),e.appendChild(t)};(()=>{const t=document.querySelector("#content"),n=document.createElement("div"),c=document.createElement("div"),d=document.createElement("div");function o(){const e=document.querySelector("#content"),t=document.querySelector(".page-content");t&&e.removeChild(t)}n.setAttribute("id","home-btn"),c.setAttribute("id","menu-btn"),d.setAttribute("id","contact-btn"),n.classList.add("tab"),c.classList.add("tab"),d.classList.add("tab"),n.textContent="home",c.textContent="menu",d.textContent="contact",t.appendChild(n),t.appendChild(c),t.appendChild(d),n.addEventListener("click",(()=>{o(),e()})),c.addEventListener("click",(()=>{o(),(()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("page-content");const n=document.createElement("h1");n.textContent="Our Menu";const c=document.createElement("ul"),d=document.createElement("li");d.textContent="Item 1";const o=document.createElement("li");o.textContent="Item 2";const a=document.createElement("li");a.textContent="Item 3",c.appendChild(d),c.appendChild(o),c.appendChild(a),t.appendChild(n),t.appendChild(c),e.appendChild(t)})()})),d.addEventListener("click",(()=>{o(),(()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("page-content");const n=document.createElement("form");n.classList.add("contact-form");const c=document.createElement("input");c.type="text",c.placeholder="Enter heading",n.appendChild(c);const d=document.createElement("input");d.type="text",d.placeholder="Enter address",n.appendChild(d);const o=document.createElement("input");o.type="text",o.placeholder="Enter phone",n.appendChild(o);const a=document.createElement("input");a.type="submit",a.value="Submit",n.appendChild(a),t.appendChild(n),e.appendChild(t)})()}))})(),e()})();