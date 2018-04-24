self.addEventListener('install', ()=>{
  console.log('install (sw2)');
  self.skipWaiting();
});

self.addEventListener('activate', ()=>{
  console.log('claints.claim (sw2)');
  clients.claim();
})

self.addEventListener('fetch', (event) => {
  const req = event && event.request;
  const url = req.url;
  console.log(`fetch: ${url} (root / sw2)`);

  event.respondWith(
    caches.open('main').then((cache) => {
      return cache.match(req).then((matching)=>{
        if (matching) {
          return matching;
        }
        return fetch(req).then((res)=>{
          cache.put(req, res.clone());
          return res;
        })
      })
  }));
});
