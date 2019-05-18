let loc = document.getElementsByClassName("page-location")[0];
loc.querySelector("div").innerText = location.href;

let lastMod = document.querySelectorAll("span.last-modified")[0];
lastMod.querySelector("div").innerText = document.lastModified;