import { useEffect, useRef } from "react";

const VersionChecker: React.FC = () => {
  const currentETag = useRef<string | null>(null);

  useEffect(() => {
    const timer: NodeJS.Timeout | null = null;

    const checkForUpdate = async () => {
      try {
        const response = await fetch("/", {
          method: "HEAD", // vi hämtar bara headers (snabbt)
          cache: "no-store",
        });

        const newETag = response.headers.get("etag");
        const lastModified = response.headers.get("last-modified");

        // Jämför ETag eller Last-Modified för att se om sidan uppdaterats
        if (currentETag.current && (newETag !== currentETag.current || !newETag)) {
          console.log("Ny version upptäckt, laddar om sidan...");
          window.location.reload();
        } else {
          currentETag.current = newETag || lastModified;
        }
      } catch (err) {
        console.error("Kunde inte kolla efter ny version:", err);
      }

      // Kör igen när användaren återaktiverar fliken (t.ex. kommer tillbaka)
      window.addEventListener("focus", checkForUpdate);
    };

    // Kör en gång när komponenten laddas
    checkForUpdate();

    // Kör om användaren återvänder till fliken (fångar när sidan varit i bakgrunden)
    const handleFocus = () => checkForUpdate();
    window.addEventListener("focus", handleFocus);

    return () => {
      if (timer) clearInterval(timer);
      window.removeEventListener("focus", handleFocus);
    };
  }, []);

  return null;
};

export default VersionChecker;