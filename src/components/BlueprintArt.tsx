type ArtProps = { className?: string };

const stroke = "var(--cyan)";
const accent = "var(--safety)";

export function CraneArt({ className = "" }: ArtProps) {
  return (
    <svg viewBox="0 0 400 300" className={className} fill="none" aria-hidden="true">
      <line x1="0" y1="270" x2="400" y2="270" stroke={stroke} strokeOpacity="0.3" strokeDasharray="2 6" />
      <path d="M120 270V60" stroke={stroke} strokeWidth="2" />
      <path d="M120 60L340 90" stroke={stroke} strokeWidth="2" />
      <path d="M120 60L70 100" stroke={stroke} strokeWidth="2" />
      <path d="M120 80L300 100" stroke={stroke} strokeWidth="1" strokeOpacity="0.5" />
      <path d="M120 100L280 115" stroke={stroke} strokeWidth="1" strokeOpacity="0.5" />
      <path d="M300 100V150" stroke={accent} strokeWidth="1.5" strokeDasharray="3 4" />
      <circle cx="300" cy="150" r="4" fill={accent} />
      <rect x="95" y="255" width="50" height="18" stroke={stroke} strokeWidth="1.5" />
      <path d="M80 270 100 240 140 240 160 270" stroke={stroke} strokeWidth="1.2" strokeOpacity="0.6" />
      <text x="220" y="260" fill={stroke} fontSize="9" fontFamily="var(--font-mono)" opacity="0.6">
        H = 42.0 M
      </text>
    </svg>
  );
}

export function TrussBridgeArt({ className = "" }: ArtProps) {
  return (
    <svg viewBox="0 0 400 300" className={className} fill="none" aria-hidden="true">
      <line x1="20" y1="220" x2="380" y2="220" stroke={stroke} strokeWidth="2" />
      <line x1="20" y1="150" x2="380" y2="150" stroke={stroke} strokeWidth="2" />
      {Array.from({ length: 9 }).map((_, i) => {
        const x = 20 + i * 45;
        return <line key={`v${i}`} x1={x} y1="150" x2={x} y2="220" stroke={stroke} strokeWidth="1.2" strokeOpacity="0.6" />;
      })}
      {Array.from({ length: 8 }).map((_, i) => {
        const x1 = 20 + i * 45;
        const x2 = 20 + (i + 1) * 45;
        return <line key={`d${i}`} x1={i % 2 === 0 ? x1 : x2} y1="150" x2={i % 2 === 0 ? x2 : x1} y2="220" stroke={accent} strokeWidth="1" strokeOpacity="0.5" />;
      })}
      <line x1="20" y1="220" x2="20" y2="250" stroke={stroke} strokeWidth="2" />
      <line x1="380" y1="220" x2="380" y2="250" stroke={stroke} strokeWidth="2" />
      <line x1="0" y1="250" x2="400" y2="250" stroke={stroke} strokeOpacity="0.3" strokeDasharray="2 6" />
      <text x="150" y="270" fill={stroke} fontSize="9" fontFamily="var(--font-mono)" opacity="0.6">
        L = 360.0 M
      </text>
    </svg>
  );
}

export function TowerElevationArt({ className = "" }: ArtProps) {
  return (
    <svg viewBox="0 0 400 300" className={className} fill="none" aria-hidden="true">
      <line x1="0" y1="270" x2="400" y2="270" stroke={stroke} strokeOpacity="0.3" strokeDasharray="2 6" />
      <rect x="150" y="40" width="100" height="230" stroke={stroke} strokeWidth="2" />
      {Array.from({ length: 11 }).map((_, i) => (
        <line key={i} x1="150" y1={40 + i * 21} x2="250" y2={40 + i * 21} stroke={stroke} strokeWidth="0.75" strokeOpacity="0.4" />
      ))}
      <line x1="180" y1="40" x2="180" y2="270" stroke={stroke} strokeWidth="0.75" strokeOpacity="0.4" />
      <line x1="220" y1="40" x2="220" y2="270" stroke={stroke} strokeWidth="0.75" strokeOpacity="0.4" />
      <path d="M150 40L200 15L250 40" stroke={accent} strokeWidth="1.5" />
      <circle cx="200" cy="15" r="3" fill={accent} />
      <text x="260" y="160" fill={stroke} fontSize="9" fontFamily="var(--font-mono)" opacity="0.6">
        H = 128.0 M
      </text>
    </svg>
  );
}

export function SitePlanArt({ className = "" }: ArtProps) {
  return (
    <svg viewBox="0 0 400 300" className={className} fill="none" aria-hidden="true">
      <rect x="40" y="40" width="320" height="220" stroke={stroke} strokeWidth="1" strokeOpacity="0.4" strokeDasharray="3 5" />
      <rect x="70" y="70" width="110" height="80" stroke={stroke} strokeWidth="1.5" />
      <rect x="220" y="70" width="110" height="50" stroke={stroke} strokeWidth="1.5" />
      <rect x="220" y="140" width="60" height="60" stroke={accent} strokeWidth="1.5" />
      <rect x="70" y="180" width="180" height="50" stroke={stroke} strokeWidth="1.5" />
      <line x1="40" y1="160" x2="360" y2="160" stroke={stroke} strokeWidth="0.75" strokeOpacity="0.35" />
      <circle cx="310" cy="180" r="14" stroke={accent} strokeWidth="1.2" strokeOpacity="0.7" />
      <text x="60" y="255" fill={stroke} fontSize="9" fontFamily="var(--font-mono)" opacity="0.6">
        ГЕНПЛАН М 1:500
      </text>
    </svg>
  );
}

export function PipelineArt({ className = "" }: ArtProps) {
  return (
    <svg viewBox="0 0 400 300" className={className} fill="none" aria-hidden="true">
      <path
        d="M20 240 C 100 240, 120 120, 200 120 S 300 60, 380 60"
        stroke={stroke}
        strokeWidth="3"
      />
      <path
        d="M20 240 C 100 240, 120 120, 200 120 S 300 60, 380 60"
        stroke={accent}
        strokeWidth="1"
        strokeDasharray="2 6"
        opacity="0.7"
      />
      {[
        [20, 240],
        [140, 170],
        [200, 120],
        [300, 78],
        [380, 60],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="4" fill="var(--graphite)" stroke={stroke} strokeWidth="1.5" />
      ))}
      <text x="140" y="270" fill={stroke} fontSize="9" fontFamily="var(--font-mono)" opacity="0.6">
        Ø 1420 ММ · СЕТЬ
      </text>
    </svg>
  );
}

export function FoundationArt({ className = "" }: ArtProps) {
  return (
    <svg viewBox="0 0 400 300" className={className} fill="none" aria-hidden="true">
      <line x1="0" y1="200" x2="400" y2="200" stroke={stroke} strokeWidth="1.5" />
      {Array.from({ length: 7 }).map((_, r) =>
        Array.from({ length: 9 }).map((_, c) => (
          <circle key={`${r}-${c}`} cx={40 + c * 40} cy={210 + r * 10} r="1.2" fill={stroke} opacity="0.5" />
        )),
      )}
      <rect x="40" y="150" width="320" height="50" stroke={accent} strokeWidth="1.5" />
      <line x1="40" y1="150" x2="40" y2="120" stroke={stroke} strokeWidth="1" strokeDasharray="2 4" opacity="0.6" />
      <line x1="360" y1="150" x2="360" y2="120" stroke={stroke} strokeWidth="1" strokeDasharray="2 4" opacity="0.6" />
      <line x1="40" y1="125" x2="360" y2="125" stroke={stroke} strokeWidth="1" opacity="0.6" />
      <text x="150" y="115" fill={stroke} fontSize="9" fontFamily="var(--font-mono)" opacity="0.6">
        B = 320.0 СМ
      </text>
    </svg>
  );
}

export const artByKey = {
  crane: CraneArt,
  truss: TrussBridgeArt,
  tower: TowerElevationArt,
  site: SitePlanArt,
  pipeline: PipelineArt,
  foundation: FoundationArt,
};

export type ArtKey = keyof typeof artByKey;
