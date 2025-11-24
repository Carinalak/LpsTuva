type SubLinks = {
  path: string;
  label: string;
  target?: string;
};

type MenuLinks = {
  path: string;
  label: string;
  target?: string;
  subLinks?: SubLinks[];
};

export const MenuLinks = [
  { path: "/", label: "Hem" },
  { 
    path: "/galleribilder",
    label: "Galleri",
    /*subLinks: [
      {path: "/galleribilder", label: "Mitt Galleri"},
    ],*/
  },
  { 
    path: "/pysselspel", 
    label: "Pyssel & Spel",
    target: "_blank?",
    subLinks: [
      { path: "/jul/kalender/julkalender", label: "Julkalender" },
      { path: "/julmemory", label: "Julmemory" },
      { path: "/memory", label: "Memoryspel", target: "top" },
      { path: "/farglagg", label: "Färgläggning", target: "top"},
      { path: "/ritblock", label: "Ritblock", target: "top"},
      //{ path: "/halloween/halloweenpyssel", label: "Halloweenpyssel", target: "top" },
      //{ path: "/halloweenmemory", label: "Halloween Memory", target: "top" },

      //{ path: "https://kaninspelet.onrender.com/", label: "Kaninspelet", target: "_blank" },

    ],
  },
  { path: "/om", label: "Om" },
  { path: "/kontakt", label: "Kontakt" },
];
