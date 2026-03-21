import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function BaseIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    />
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M5 12h14" />
      <path d="m13 5 7 7-7 7" />
    </BaseIcon>
  );
}

export function ChevronRightIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="m9 18 6-6-6-6" />
    </BaseIcon>
  );
}

export function ChevronDownIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="m6 9 6 6 6-6" />
    </BaseIcon>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </BaseIcon>
  );
}

export function XIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="m6 6 12 12" />
      <path d="M18 6 6 18" />
    </BaseIcon>
  );
}

export function MessageCircleIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M7 18.5 3.5 20l1.5-3.5A8.5 8.5 0 1 1 20.5 12c0 4.7-3.8 8.5-8.5 8.5H7Z" />
    </BaseIcon>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7l.5 3a2 2 0 0 1-.6 1.8l-1.3 1.3a16 16 0 0 0 6.5 6.5l1.3-1.3a2 2 0 0 1 1.8-.6l3 .5A2 2 0 0 1 22 16.9Z" />
    </BaseIcon>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M12 3 5 6v5c0 5 3.4 8.8 7 10 3.6-1.2 7-5 7-10V6l-7-3Z" />
    </BaseIcon>
  );
}

export function HandHeartIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M11 12.5 9.2 10.7a2.6 2.6 0 0 1 3.7-3.7l.1.1.1-.1a2.6 2.6 0 0 1 3.7 3.7L15 12.5" />
      <path d="M3 13h4l2.2 2.2a2 2 0 0 0 1.4.6H15a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2H9l-2.5-2.2A4 4 0 0 0 3.8 17H3" />
      <path d="M3 13v7" />
    </BaseIcon>
  );
}

export function SparklesIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="m12 3 1.6 3.8L17 8.5l-3.4 1.7L12 14l-1.6-3.8L7 8.5l3.4-1.7L12 3Z" />
      <path d="m5 15 .9 2.1L8 18l-2.1.9L5 21l-.9-2.1L2 18l2.1-.9L5 15Z" />
      <path d="m19 14 .9 2.1L22 17l-2.1.9L19 20l-.9-2.1L16 17l2.1-.9L19 14Z" />
    </BaseIcon>
  );
}

export function HelpingHandIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M8 12.5V7a1.5 1.5 0 0 1 3 0v4.5" />
      <path d="M11 11V6.5a1.5 1.5 0 0 1 3 0V11" />
      <path d="M14 11.5V8a1.5 1.5 0 0 1 3 0v6.5a4.5 4.5 0 0 1-4.5 4.5H10a5 5 0 0 1-3.5-1.5L4 15" />
      <path d="M4 15a1.5 1.5 0 0 1 2.1-2.1l1.9 1.9" />
    </BaseIcon>
  );
}

export function BadgeCheckIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="m12 3 2 2.2 3-.3.8 2.9 2.6 1.5-1 2.8 1 2.8-2.6 1.5-.8 2.9-3-.3L12 21l-2-2.2-3 .3-.8-2.9L3.6 14.7l1-2.8-1-2.8 2.6-1.5.8-2.9 3 .3L12 3Z" />
      <path d="m9 12 2 2 4-4" />
    </BaseIcon>
  );
}

export function CarFrontIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M6 16h12" />
      <path d="M7 16 8.5 9h7L17 16" />
      <path d="M5 16v2" />
      <path d="M19 16v2" />
      <path d="M7.5 12h9" />
      <circle cx="7.5" cy="16.5" r="1" />
      <circle cx="16.5" cy="16.5" r="1" />
    </BaseIcon>
  );
}

export function HeartPulseIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M12 21s-7-4.7-9-9.3C1 7.4 4.1 4 7.7 4c2 0 3.4 1 4.3 2.2C12.9 5 14.3 4 16.3 4 19.9 4 23 7.4 21 11.7 19 16.3 12 21 12 21Z" />
      <path d="M3.8 12h4l1.7-3 2.3 6 1.7-3h4.7" />
    </BaseIcon>
  );
}

export function ShieldCheckIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M12 3 5 6v5c0 5 3.4 8.8 7 10 3.6-1.2 7-5 7-10V6l-7-3Z" />
      <path d="m9.5 12 1.7 1.7 3.3-3.7" />
    </BaseIcon>
  );
}

export function HomeIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="m3 11 9-7 9 7" />
      <path d="M5 10.5V20h14v-9.5" />
      <path d="M10 20v-5h4v5" />
    </BaseIcon>
  );
}

export function Building2Icon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M4 21V7l8-4v18" />
      <path d="M12 9h8v12h-8" />
      <path d="M7 10h1" />
      <path d="M7 14h1" />
      <path d="M7 18h1" />
      <path d="M15 12h1" />
      <path d="M15 16h1" />
    </BaseIcon>
  );
}

export function LandmarkIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M3 10h18" />
      <path d="m5 10 7-4 7 4" />
      <path d="M6 10v7" />
      <path d="M10 10v7" />
      <path d="M14 10v7" />
      <path d="M18 10v7" />
      <path d="M3 21h18" />
    </BaseIcon>
  );
}

export function WalletCardsIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <rect x="3" y="6" width="18" height="12" rx="2" />
      <path d="M3 10h18" />
      <path d="M16 14h2" />
    </BaseIcon>
  );
}

export function LifeBuoyIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="3" />
      <path d="M5.6 5.6 9.9 9.9" />
      <path d="m14.1 14.1 4.3 4.3" />
      <path d="m18.4 5.6-4.3 4.3" />
      <path d="m9.9 14.1-4.3 4.3" />
    </BaseIcon>
  );
}

export function FacebookIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M14 8h3V4h-3c-2.8 0-5 2.2-5 5v3H6v4h3v4h4v-4h3.2l.8-4H13V9c0-.6.4-1 1-1Z" />
    </BaseIcon>
  );
}
