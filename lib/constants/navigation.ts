export const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About", isHidden: true },
  { href: "/terms", label: "Terms", isHidden: true },
  { href: "/privacy", label: "Privacy", isHidden: true },
] as const;

export type NavigationLink = (typeof navigationLinks)[number];
