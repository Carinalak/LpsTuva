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
    path: "/galleri",
    label: "Galleri",
    subLinks: [
      {path: "/galleribilder", label: "Mitt Galleri"},
      {path: "/minalps", label: "Mina LPS"},
    ],
  },
  { 
    path: "/pyssel", 
    label: "Pyssel & Spel",
    subLinks: [
      { path: "/farglagg", label: "Färgläggning" },
    ],
  },
  
  { path: "/kontakt", label: "Kontakt" },
];
