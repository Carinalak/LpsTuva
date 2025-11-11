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



function App() {
   useEffect(() => {
    // Om användaren redan godkänt, initiera Analytics
    if (localStorage.getItem("cookieConsent") === "true") {
      initGoogleAnalytics();
    }
  }, []);

const initGoogleAnalytics = () => {
  const GA_ID = process.env.REACT_APP_GA_ID;

  if (!GA_ID) return; // Stoppar om env-variabeln saknas

  const script1 = document.createElement("script");
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script1);

  const script2 = document.createElement("script");
  script2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
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


        buttonStyle={{ color: "#ffffff", fontSize: "13px", background: "#D77DD4", borderRadius: "4px" }}


        declineButtonStyle={{ color: "#ffffff", fontSize: "13px", background: "#AB3DA7", borderRadius: "4px" }}
        enableDeclineButton
        expires={150}
        onAccept={() => {
          document.cookie = "cookieConsent=true; max-age=" + 150*24*60*60;
          initGoogleAnalytics();
        }}
        onDecline={() => {
          document.cookie = "cookieConsent=false; max-age=" + 150*24*60*60;
          // här gör du inget, Analytics laddas inte
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
