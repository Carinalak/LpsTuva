import { useEffect, useRef } from "react";

interface VersionCheckerProps {
  interval?: number; // tid i ms, t.ex. 120000 = 2 minuter
}

const VersionChecker: React.FC<VersionCheckerProps> = ({ interval = 120000 }) => {
  const currentETag = useRef<string | null>(null);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const checkForUpdate = async () => {
      try {
        const response = await fetch("/", {
          method: "HEAD",
          cache: "no-store",
        });

        const newETag = response.headers.get("etag");
        const lastModified = response.headers.get("last-modified");
        const identifier = newETag || lastModified;

        // Om vi redan har en version lagrad och den nya skiljer sig → ladda om
        if (currentETag.current && identifier && identifier !== currentETag.current) {
          console.log("Ny version upptäckt, laddar om sidan...");
          window.location.reload();
        } else if (!currentETag.current && identifier) {
          currentETag.current = identifier;
        }
      } catch (err) {
        console.error("Kunde inte kolla efter ny version:", err);
      }
    };

    // Kör första gången direkt
    checkForUpdate();

    // Kör även varje gång användaren återvänder till fliken
    const handleFocus = () => checkForUpdate();
    window.addEventListener("focus", handleFocus);

    // Kör automatiskt med intervall (standard var 2 min)
    // eslint-disable-next-line prefer-const
    timer = setInterval(checkForUpdate, interval);

    // Städning
    return () => {
      clearInterval(timer);
      window.removeEventListener("focus", handleFocus);
    };
  }, [interval]);

  return null;
};

export default VersionChecker;