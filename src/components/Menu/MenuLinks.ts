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
      {path: "/galleri", label: "Galleri"},
      {path: "/galleri", label: "Galleri"},
    ],
  },
  { path: "/kontakt", label: "Kontakt" },
];
