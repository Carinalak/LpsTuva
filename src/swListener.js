if ('serviceWorker' in navigator) {
  // Lyssna på när ny service worker tar över
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    console.log('🆕 Ny version aktiv, laddar om smidigt...');
    // Lägg till fade-out för mjukare övergång
    document.body.style.transition = 'opacity 0.3s ease';
    document.body.style.opacity = '0';
    setTimeout(() => window.location.reload(), 300); // reload efter 0.3s
  });

  // Håll service workern uppdaterad
  navigator.serviceWorker.getRegistration().then((registration) => {
    if (registration) {
      setInterval(() => {
        registration.update(); // fråga servern om ny SW-version var 1 minut
      }, 60000);
    }
  });
}