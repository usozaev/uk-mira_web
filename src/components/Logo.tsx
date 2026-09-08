export default function Logo({
  className = "",
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      viewBox="0 -40 244 108"
      className={className}
      aria-hidden="true"
      style={{ overflow: "visible", ...style }}
    >
      <text
        x="0"
        y="66"
        fontFamily="var(--font-display)"
        fontWeight="700"
        fontSize="68"
        fill="var(--mist)"
      >
        МИ
      </text>

      <rect x="112" y="-38" width="128" height="104" rx="16" fill="var(--mist)" />

      <text
        x="127"
        y="66"
        fontFamily="var(--font-display)"
        fontWeight="700"
        fontSize="68"
        fill="var(--graphite)"
      >
        РА
      </text>

      <path
        d="M190,-34 L193,-21 L206,-18 L193,-15 L190,-2 L187,-15 L174,-18 L187,-21 Z"
        fill="var(--graphite)"
      />
      <path
        d="M215,-36 L216.6,-29.6 L223,-28 L216.6,-26.4 L215,-20 L213.4,-26.4 L207,-28 L213.4,-29.6 Z"
        fill="var(--graphite)"
      />
      <path
        d="M225,-17 L226,-13 L230,-12 L226,-11 L225,-7 L224,-11 L220,-12 L224,-13 Z"
        fill="var(--graphite)"
      />
      <path
        d="M160,-34 L160.8,-30.8 L164,-30 L160.8,-29.2 L160,-26 L159.2,-29.2 L156,-30 L159.2,-30.8 Z"
        fill="var(--graphite)"
      />
    </svg>
  );
}
