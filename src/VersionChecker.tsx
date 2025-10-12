import { useEffect, useRef } from "react";

/**
 * VersionChecker
 * ---------------
 * Kollar om en ny version av appen har deployats.
 * Fungerar på Render, Netlify, Vercel m.fl.
 *
 * Kör direkt vid laddning, och sedan dagligen vid:
 * 06:00, 08:00, 09:00, 12:00, 15:00, 18:00 och 24:00.
 */
const VersionChecker: React.FC = () => {
  const currentHash = useRef<string | null>(null);

  // 🔍 Hämtar index.html och letar efter en JS-bundle i /assets/
  const checkForUpdate = async () => {
    try {
      const res = await fetch("/index.html", { cache: "no-store" });
      const text = await res.text();

      // Leta efter första JS-filen i /assets/, t.ex. /assets/main.abc123.js
      const match = text.match(/\/assets\/([A-Za-z0-9_-]+\.\w+\.js)/);
      const newHash = match ? match[1] : null;

      if (currentHash.current && newHash && currentHash.current !== newHash) {
        console.log("🔁 Ny version upptäckt – laddar om sidan...");
        window.location.reload();
      } else if (!currentHash.current && newHash) {
        currentHash.current = newHash;
        console.log("✅ VersionChecker aktiv – nuvarande build:", newHash);
      }
    } catch (err) {
      console.error("❌ Kunde inte kolla efter ny version:", err);
    }
  };

  useEffect(() => {
    const checkHours = [6, 8, 9, 12, 15, 18, 24];
    let timeoutId: NodeJS.Timeout;

    const getTimeUntilNextCheck = (): number => {
      const now = new Date();
      const currentHour = now.getHours();
      const nextHour = checkHours.find((h) => h > currentHour) ?? checkHours[0];
      const nextCheck = new Date(now);
      nextCheck.setHours(nextHour === 24 ? 0 : nextHour, 0, 0, 0);
      if (nextHour <= currentHour) nextCheck.setDate(nextCheck.getDate() + 1);
      return nextCheck.getTime() - now.getTime();
    };

    const getNextCheckTimeString = (): string => {
      const now = new Date();
      const currentHour = now.getHours();
      const nextHour = checkHours.find((h) => h > currentHour) ?? checkHours[0];
      const nextDate = new Date(now);
      if (nextHour <= currentHour) nextDate.setDate(nextDate.getDate() + 1);
      nextDate.setHours(nextHour === 24 ? 0 : nextHour, 0, 0, 0);
      return nextDate.toLocaleTimeString("sv-SE", { hour: "2-digit", minute: "2-digit" });
    };

    const scheduleNextCheck = () => {
      const delay = getTimeUntilNextCheck();
      const nextTime = getNextCheckTimeString();
      console.log(`🕒 Nästa versionskoll sker kl ${nextTime}.`);
      timeoutId = setTimeout(async () => {
        await checkForUpdate();
        scheduleNextCheck();
      }, delay);
    };

    // 🟢 Kör direkt när användaren öppnar sidan
    checkForUpdate();

    // 🕓 Schemalägg nästa körning
    scheduleNextCheck();

    // 🧹 Städning vid unmount
    return () => clearTimeout(timeoutId);
  }, []);

  return null;
};

export default VersionChecker;
