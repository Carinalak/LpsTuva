import { useEffect, useRef } from "react";

// Denna kod gör så att det kollas två gånger per dag om det har uppdaterats något på Git Hub. Sidan kollar direkt vid laddning av användaren, när den precis går in på sidan. Om den hittar en ny version → laddar den om.
interface VersionCheckerProps {
  interval?: number; // ms
}

const VersionChecker: React.FC<VersionCheckerProps> = ({ interval = 43_200_000 }) => {
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

    // Kör direkt vid sidstart
    checkForUpdate();

    // Kör även var 12:e timme
    // eslint-disable-next-line prefer-const
    timer = setInterval(checkForUpdate, interval);

    // Städning
    return () => clearInterval(timer);
  }, [interval]);

  return null;
};

export default VersionChecker;
