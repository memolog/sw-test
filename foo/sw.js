self.addEventListener('install', ()=>{
  console.log('install foo');
});

self.addEventListener('fetch', (event) => {
  const req = event && event.request;
  const url = req.url;
  console.log(`fetch: ${url} (foo)`);

  event.respondWith(
    caches.open('main').then((cache) => {
      return cache.match(req).then((matching)=>{
        if (matching) {
          return matching;
        }
        return fetch(req).then((res)=>{
          cache.put(req, res);
          return res.clone();
        })
      })
  }));
});
