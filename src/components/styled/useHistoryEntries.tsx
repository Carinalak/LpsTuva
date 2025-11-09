import { useState, useEffect } from "react";
import  { Oktober25 }  from "../../pages/history/Oktober25.tsx"; 
import { Summer25 } from "../../pages/history/Summer25.tsx";

interface HistoryEntry {
  component: JSX.Element;
  season: string;
}

const entries: HistoryEntry[] = [
  {
    component: <Oktober25 />,
    season: "Oktober25"         
  },
    {
    component: <Summer25 />,
    season: "Summer25"         
  }
  // Lägg till fler komponenter här vid behov:
  // { component: <Host2024 />, season: "Host2024" }
];

export const useHistoryEntries = (sortBy: string) => {
  const [currentPage, setCurrentPage] = useState(1);

const filteredEntries =
  sortBy === "all"
    ? entries
    : sortBy === "none"
    ? [] // töm innehållet men behåll arrayen
    : entries.filter(entry => entry.season === sortBy);

  useEffect(() => {
    setCurrentPage(1);
  }, [sortBy]);

  return {
    currentEntries: filteredEntries,
    currentPage,
    totalPages: 1,
    handleNext: () => {},
    handlePrevious: () => {},
  };
};