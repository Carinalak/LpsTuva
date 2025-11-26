import { RouterProvider } from "react-router-dom"
import { router } from "./Router"
import { useEffect } from "react";
import CookieConsent from "react-cookie-consent";
//import { HeadingIcon } from "lucide-react";
import styled from "styled-components";
import { BREAKPOINT_DESKTOP, BREAKPOINT_BIGGER_DESKTOP, BREAKPOINT_TABLET } from "./components/styled/Variables";


export const CookieImage = styled.img `
  width: 30px;
  height: 30px;


    @media screen and (min-width: ${BREAKPOINT_TABLET}) {
      width: 40px;
      height: 40px;
    }
    @media screen and (min-width: ${BREAKPOINT_DESKTOP}) {
      width: 50px;
      height: 50px;
    }
    @media screen and (min-width: ${BREAKPOINT_BIGGER_DESKTOP}) {
      width: 60px;
      height: 60px;
    }
`;


export const CookieBigWrapper = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

      @media screen and (min-width: ${BREAKPOINT_TABLET}) {
        flex-direction: row;
          gap: 40px;
    }
    @media screen and (min-width: ${BREAKPOINT_DESKTOP}) {
      flex-direction: row;
        gap: 50px;
    }
    @media screen and (min-width: ${BREAKPOINT_BIGGER_DESKTOP}) {
      flex-direction: row;
        gap: 60x;
    }
`;


export const CookieWrapper = styled.div `
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  gap: 20px;

      @media screen and (min-width: ${BREAKPOINT_TABLET}) {
        justify-content: center;
        gap: 40px;

    }
    @media screen and (min-width: ${BREAKPOINT_DESKTOP}) {
      flex-direction: row;
        gap: 50px;
    }
    @media screen and (min-width: ${BREAKPOINT_BIGGER_DESKTOP}) {
      flex-direction: row;
        gap: 60x;
    }
`;


declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}
function App() {
useEffect(() => {
  const cookieValue = document.cookie
    .split("; ")
    .find(row => row.startsWith("cookieConsent="))
    ?.split("=")[1];

  if (cookieValue === "true") {
    initGoogleAnalytics();
  }
}, []);


const initGoogleAnalytics = () => {
  const GA_ID = process.env.REACT_APP_GA_ID;
  if (!GA_ID) return;

  const script1 = document.createElement("script");
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script1);

  const script2 = document.createElement("script");
  script2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}

    // Blockera GA tills samtycke ges
    gtag('consent', 'default', {
      ad_storage: 'denied',
      analytics_storage: 'denied'
    });

    gtag('js', new Date());
    gtag('config', '${GA_ID}');
  `;
  document.head.appendChild(script2);
};


  return (
    <>
    <RouterProvider router={router}></RouterProvider>

<CookieConsent
  location="bottom"
  buttonText="Jag godkänner"
  declineButtonText="Nej tack"
  cookieName="cookieConsent"
  style={{ background: "rgba(0, 0, 0, 0.8)" }}
  buttonStyle={{
    color: "#ffffff",
    fontSize: "13px",
    background: "#D77DD4",
    borderRadius: "4px"
  }}
  declineButtonStyle={{
    color: "#ffffff",
    fontSize: "13px",
    background: "#AB3DA7",
    borderRadius: "4px"
  }}
  enableDeclineButton
  expires={150}

  // 👉 Körs när användaren GODKÄNNER cookies
  onAccept={() => {
    // Spara cookie
    document.cookie =
      "cookieConsent=true; path=/; max-age=" + 150 * 24 * 60 * 60;

    // Uppdatera GA om samtycke nu är givet
    if (typeof window.gtag === "function") {
      window.gtag("consent", "update", {
        ad_storage: "granted",
        analytics_storage: "granted"
      });
    }

            // Starta Google Analytics
            initGoogleAnalytics();
          }}

          // 👉 Körs när användaren NEKAR cookies
          onDecline={() => {
            document.cookie =
              "cookieConsent=false; path=/; max-age=" + 150 * 24 * 60 * 60;

            // Säkerställ att GA är blockerat
            if (typeof window.gtag === "function") {
              window.gtag("consent", "update", {
                ad_storage: "denied",
                analytics_storage: "denied"
              });
            }
          }}
        >
        <CookieWrapper>
        <CookieImage src="/happyCookie.png" alt="Kaka" />
        <div>Vi använder kakor för att förbättra sajten. Välj om du vill godkänna.</div>
        </CookieWrapper>
      </CookieConsent>

    </>
  )
}

export default App
