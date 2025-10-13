if ('serviceWorker' in navigator) {
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    // En ny service worker har tagit över – ladda om sidan
    console.log('🆕 Ny version aktiv, laddar om...');
    window.location.reload();
  });

  // Registrera uppdateringar
  navigator.serviceWorker.getRegistration().then((registration) => {
    if (registration) {
      setInterval(() => {
        registration.update(); // fråga servern om ny SW-version var 1 minut
      }, 60000);
    }
  });
}