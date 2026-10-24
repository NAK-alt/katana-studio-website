// Thin line icons (1.5 stroke) drawn for the Katana Studio site.
type IconProps = { className?: string };

function Icon({ className, children }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className ?? "h-6 w-6"}
    >
      {children}
    </svg>
  );
}

export const IconBrowser = (p: IconProps) => (
  <Icon {...p}>
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <path d="M3 9h18M7 6.5h.01M10 6.5h.01" />
  </Icon>
);

export const IconSystem = (p: IconProps) => (
  <Icon {...p}>
    <rect x="3" y="3" width="7" height="7" rx="1.5" />
    <rect x="14" y="3" width="7" height="7" rx="1.5" />
    <rect x="3" y="14" width="7" height="7" rx="1.5" />
    <path d="M14 17.5h7M17.5 14v7" />
  </Icon>
);

export const IconDatabase = (p: IconProps) => (
  <Icon {...p}>
    <ellipse cx="12" cy="5.5" rx="7.5" ry="2.5" />
    <path d="M4.5 5.5v6.5c0 1.4 3.4 2.5 7.5 2.5s7.5-1.1 7.5-2.5V5.5" />
    <path d="M4.5 12v6.5c0 1.4 3.4 2.5 7.5 2.5s7.5-1.1 7.5-2.5V12" />
  </Icon>
);

export const IconLayout = (p: IconProps) => (
  <Icon {...p}>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M3 9h18M9 9v12" />
  </Icon>
);

export const IconPen = (p: IconProps) => (
  <Icon {...p}>
    <path d="M12 19l7-7 2 2-7 7-2-2z" />
    <path d="M18 13l-1.5-7.5L3 2l3.5 13.5L14 17l4-4z" />
    <path d="M3 2l7.6 7.6" />
    <circle cx="11" cy="11" r="2" />
  </Icon>
);

export const IconRocket = (p: IconProps) => (
  <Icon {...p}>
    <path d="M5 15c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.8.7-2.1-.1-2.9a2.2 2.2 0 0 0-2.9-.1z" />
    <path d="M12 15l-3-3a22 22 0 0 1 2-3.9A12.9 12.9 0 0 1 22 2c0 2.7-.8 7.5-6 11a22.4 22.4 0 0 1-4 2z" />
    <path d="M9 12H4s.6-3 2-4c1.6-1.1 5 0 5 0M12 15v5s3-.6 4-2c1.1-1.6 0-5 0-5" />
  </Icon>
);

export const IconArrow = (p: IconProps) => (
  <Icon className={p.className ?? "h-4 w-4"}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </Icon>
);

export const IconExternal = (p: IconProps) => (
  <Icon className={p.className ?? "h-4 w-4"}>
    <path d="M7 17L17 7M8 7h9v9" />
  </Icon>
);

export const IconTelegram = (p: IconProps) => (
  <Icon {...p}>
    <path d="M21.5 4.5L2.5 11.8l6 2.2 2.3 6.5 3.4-4.2 5 3.7 2.3-15.5z" />
    <path d="M8.5 14l10-7.5-7.7 9.5" />
  </Icon>
);

export const IconFacebook = (p: IconProps) => (
  <Icon {...p}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </Icon>
);

export const IconMenu = (p: IconProps) => (
  <Icon {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </Icon>
);
