self.addEventListener('install', ()=>{
  console.log('install foo');
});

self.addEventListener('fetch', (event) => {
  const req = event && evnet.request;
  const url = req.url;
  console.log(`fetch: ${url} (foo)`);
  return;
});
