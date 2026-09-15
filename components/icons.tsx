export function BarbellMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 640 120"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect x="150" y="52" width="340" height="16" fill="currentColor" />
      <rect x="96" y="20" width="20" height="80" rx="2" fill="currentColor" />
      <rect x="60" y="34" width="20" height="52" rx="2" fill="currentColor" />
      <rect x="28" y="44" width="16" height="32" rx="2" fill="currentColor" />
      <rect x="524" y="20" width="20" height="80" rx="2" fill="currentColor" />
      <rect x="560" y="34" width="20" height="52" rx="2" fill="currentColor" />
      <rect x="596" y="44" width="16" height="32" rx="2" fill="currentColor" />
    </svg>
  );
}

export function IconFreeWeights({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
      <rect x="6" y="26" width="10" height="12" rx="1.5" stroke="currentColor" strokeWidth="2" />
      <rect x="16" y="29" width="6" height="6" fill="currentColor" />
      <rect x="22" y="30" width="20" height="4" fill="currentColor" />
      <rect x="42" y="29" width="6" height="6" fill="currentColor" />
      <rect x="48" y="26" width="10" height="12" rx="1.5" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function IconFunctional({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
      <path
        d="M8 44C8 44 16 20 32 20C48 20 56 44 56 44"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="8" cy="46" r="4" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="56" cy="46" r="4" stroke="currentColor" strokeWidth="2.5" />
    </svg>
  );
}

export function IconCardio({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
      <path
        d="M6 34H18L24 18L34 48L40 34H58"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconLocker({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
      <rect x="14" y="10" width="16" height="44" rx="1" stroke="currentColor" strokeWidth="2.5" />
      <rect x="34" y="10" width="16" height="44" rx="1" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="26" cy="32" r="1.6" fill="currentColor" />
      <circle cx="46" cy="32" r="1.6" fill="currentColor" />
    </svg>
  );
}

export function IconRecovery({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
      <path
        d="M32 12C24 20 16 26 16 36C16 45 23 52 32 52C41 52 48 45 48 36C48 26 40 20 32 12Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path d="M32 30V44" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconTurf({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
      <rect x="8" y="24" width="48" height="16" stroke="currentColor" strokeWidth="2.5" />
      <path d="M8 32H56" stroke="currentColor" strokeWidth="2.5" />
      <path d="M18 24V40M32 24V40M46 24V40" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function IconPin({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 21C12 21 19 14.5 19 9.5C19 5.63401 15.866 2.5 12 2.5C8.13401 2.5 5 5.63401 5 9.5C5 14.5 12 21 12 21Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="9.5" r="2.5" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export function IconPhone({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M6.5 3.5H9.5L11 8L8.5 9.5C9.4 11.6 11.4 13.6 13.5 14.5L15 12L19.5 13.5V16.5C19.5 17.6 18.6 18.5 17.5 18.5C10.6 18.5 5.5 13.4 5.5 6.5C5.5 5.4 6.4 3.5 6.5 3.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconClock({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12.5" r="8.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 7.5V12.5L15.5 14.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
