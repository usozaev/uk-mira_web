export default function Logo({
  className = "",
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      viewBox="0 -40 340 108"
      className={className}
      aria-hidden="true"
      style={{ overflow: "visible", ...style }}
    >
      <text
        x="0"
        y="66"
        fontFamily="var(--font-display)"
        fontWeight="300"
        fontSize="68"
        fill="var(--mist)"
      >
        МИ
      </text>

      <rect x="149" y="-38" width="135" height="104" rx="16" fill="var(--mist)" />

      <text
        x="163"
        y="66"
        fontFamily="var(--font-display)"
        fontWeight="300"
        fontSize="68"
        fill="var(--graphite)"
      >
        РА
      </text>

      <path
        d="M236,-34 L239,-21 L252,-18 L239,-15 L236,-2 L233,-15 L220,-18 L233,-21 Z"
        fill="var(--graphite)"
      />
      <path
        d="M261,-36 L262.6,-29.6 L269,-28 L262.6,-26.4 L261,-20 L259.4,-26.4 L253,-28 L259.4,-29.6 Z"
        fill="var(--graphite)"
      />
      <path
        d="M271,-17 L272,-13 L276,-12 L272,-11 L271,-7 L270,-11 L266,-12 L270,-13 Z"
        fill="var(--graphite)"
      />
      <path
        d="M206,-34 L206.8,-30.8 L210,-30 L206.8,-29.2 L206,-26 L205.2,-29.2 L202,-30 L205.2,-30.8 Z"
        fill="var(--graphite)"
      />
    </svg>
  );
}
