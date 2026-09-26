chrome.storage.local.get({ o: 0.3 }, d => r.value = d.o);
r.oninput = () => chrome.storage.local.set({ o: +r.value });
