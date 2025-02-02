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
    subLinks: [
      { path: "/farglagg", label: "Färgläggning" },
      { path: "/memory", label: "Memoryspel" },
      //{ path: "/julmemory", label: "Julmemory" },
    ],
  },
  
  { path: "/kontakt", label: "Kontakt" },
];
