let loc = document.getElementsByClassName("page-location")[0];
loc.innerText = location.href;

let lastMod = document.querySelectorAll("div.last-modified")[0];
lastMod.innerText = document.lastModified;