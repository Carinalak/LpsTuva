import Cookies from "js-cookie";

interface Admin {
  id: number;
  name?: string;
}

// Spara användarsession i en cookie
export const saveAdminSession = (admin: Admin, token: string) => {
  if (!admin || typeof admin.id === "undefined") {
    console.error("Ogiltig användare, id saknas:", admin);
    return;
  }

  const sessionData = {
    admin: admin,
    id: admin.id,
    token: token,
  };

  Cookies.set("session", JSON.stringify(sessionData), {
    expires: 7, // Cookien är giltig i 7 dagar
    sameSite: "Strict",
    secure: true,
  });

  console.log("Session saved:", sessionData);
};

// Hämta användarsession från en cookie
export const getAdminSession = () => {
  const session = Cookies.get("session");
  console.log("Full cookie:", document.cookie);
  if (session) {
    try {
      const parsedSession = JSON.parse(session);
      console.log("Fetched session from cookie:", parsedSession);
      return parsedSession; // Returnerar både admin och token
    } catch (error) {
      console.error("Kunde inte parsa session-cookien:", error);
      return null;
    }
  }
  return null;
};

// Ta bort session-cookie
export const removeAdminSession = () => {
  Cookies.remove("session");
  console.log("Session removed");
};
