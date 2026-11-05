import type { ReactNode } from 'react'

const paths: Record<string, ReactNode> = {
  tools: <path d="M4 20l8-8M14 4l6 6-3 3-6-6z" />,
  shield: <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" />,
  calendar: (
    <>
      <rect x="4" y="5" width="16" height="15" rx="2" />
      <path d="M4 10h16" />
    </>
  ),
  award: (
    <>
      <circle cx="12" cy="9" r="5" />
      <path d="M9 13l-1 8 4-2 4 2-1-8" />
    </>
  ),
  check: <path d="M5 12l4 4 10-10" />,
  'ac-repair': <path d="M12 2v20M4 6l16 12M20 6L4 18" />,
  'ac-install': <path d="M3 11l9-7 9 7v9H3zM12 9v6M9 12h6" />,
  'heat-repair': (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" />
    </>
  ),
  'heat-install': (
    <>
      <path d="M3 11l9-7 9 7v9H3z" />
      <circle cx="12" cy="14" r="3" />
    </>
  ),
  chevron: <path d="M6 9l6 6 6-6" />,
  tag: (
    <>
      <path d="M3 12V4h8l10 10-8 8z" />
      <circle cx="7.5" cy="8.5" r="1.5" />
    </>
  ),
}

type Props = { name: keyof typeof paths | string; className?: string }

/** Thin outline icon. Size and color come from className (defaults: icon-sm, currentColor). */
export function Icon({ name, className = 'size-(--icon-sm)' }: Props) {
  return (
    <svg
      className={`flex-none fill-none stroke-current stroke-[1.5] ${className}`}
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}
