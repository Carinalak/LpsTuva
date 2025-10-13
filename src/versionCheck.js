setInterval(async () => {
  const meta = document.querySelector('meta[name="version"]');
  const oldVersion = meta?.content;

  const res = await fetch('/', { cache: 'no-store' });
  const text = await res.text();
  const match = text.match(/<meta name="version" content="([^"]+)"/);
  const newVersion = match?.[1];

  if (newVersion && oldVersion && newVersion !== oldVersion) {
    console.log('🔄 New version detected, reloading...');
    location.reload();
  }
}, 60000); // check every 60s