self.addEventListener('install', ()=>{
  console.log('install foo');
});

self.addEventListener('fetch', (event) => {
  const req = event && event.request;
  const url = req.url;
  console.log(`fetch: ${url} (foo)`);
  return;
});
