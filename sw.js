self.addEventListener('install', ()=>{
  console.log('install');
});

self.addEventListener('fetch', (event) => {
  const req = event && evnet.request;
  const url = req.url;
  console.log(`fetch: ${url}`);
  return;
});
