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
      { path: "/farglagg", label: "Färgläggning" },
      { path: "/ritblock", label: "Ritblock" },
      { path: "/memory", label: "Memoryspel" },
      { path: "https://kaninspelet.onrender.com/", label: "Kaninspelet", target: "_blank" },
      //{ path: "/julmemory", label: "Julmemory" },
    ],
  },
  { path: "/kontakt", label: "Kontakt" },
];
