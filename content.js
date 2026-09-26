const s = document.head.appendChild(document.createElement('style'));
const set = o => s.textContent = `.fc-event:has([data-full-title$="- W"]){opacity:${o}!important}`;
chrome.storage.local.get({ o: 0.3 }, d => set(d.o));
chrome.storage.onChanged.addListener(c => set(c.o.newValue));
