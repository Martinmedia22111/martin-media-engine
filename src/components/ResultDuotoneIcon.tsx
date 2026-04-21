import { memo } from "react";

/**
 * Duotone SVG illustrations for "Что получает бизнес".
 * Two-color system:
 *   - primary  → красный акцент (hsl(var(--primary)))
 *   - graphite → графитовый/foreground цвет (hsl(var(--foreground)))
 * Pure SVG, no images, scales with currentColor where useful.
 */

type IconKey =
  | "growth"
  | "lead-cost"
  | "fast-launch"
  | "ai-247"
  | "full-cycle"
  | "measurable";

const baseProps = {
  viewBox: "0 0 96 96",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": true as const,
};

// Tokens
const GRAPHITE = "hsl(var(--foreground))";
const GRAPHITE_SOFT = "hsl(var(--foreground) / 0.12)";
const RED = "hsl(var(--primary))";
const RED_SOFT = "hsl(var(--primary) / 0.18)";
const BG_SOFT = "hsl(var(--muted))";

// 1. Рост охватов 200–400% — восходящая столбчатая диаграмма со стрелкой
const GrowthIcon = () => (
  <svg {...baseProps}>
    {/* soft red background blob */}
    <circle cx="48" cy="48" r="42" fill={BG_SOFT} />
    {/* baseline */}
    <line x1="18" y1="74" x2="80" y2="74" stroke={GRAPHITE_SOFT} strokeWidth="2" strokeLinecap="round" />
    {/* bars */}
    <rect x="22" y="58" width="10" height="16" rx="2" fill={GRAPHITE} />
    <rect x="36" y="48" width="10" height="26" rx="2" fill={GRAPHITE} />
    <rect x="50" y="38" width="10" height="36" rx="2" fill={GRAPHITE} />
    <rect x="64" y="24" width="10" height="50" rx="2" fill={RED} />
    {/* trend arrow */}
    <path
      d="M22 54 L40 42 L54 32 L72 18"
      stroke={RED}
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path d="M64 18 L72 18 L72 26" stroke={RED} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

// 2. Снижение стоимости лида — монета с падающей стрелкой
const LeadCostIcon = () => (
  <svg {...baseProps}>
    <circle cx="48" cy="48" r="42" fill={BG_SOFT} />
    {/* coin */}
    <circle cx="40" cy="44" r="22" fill={GRAPHITE} />
    <circle cx="40" cy="44" r="16" fill="none" stroke={RED_SOFT} strokeWidth="2" />
    <text
      x="40"
      y="51"
      textAnchor="middle"
      fontFamily="'Space Grotesk', system-ui, sans-serif"
      fontWeight="900"
      fontSize="22"
      fill="white"
    >
      $
    </text>
    {/* down arrow */}
    <path
      d="M68 30 L68 64"
      stroke={RED}
      strokeWidth="4"
      strokeLinecap="round"
    />
    <path
      d="M60 56 L68 64 L76 56"
      stroke={RED}
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

// 3. Запуск за 2–4 недели — календарь с отмеченным диапазоном
const FastLaunchIcon = () => (
  <svg {...baseProps}>
    <circle cx="48" cy="48" r="42" fill={BG_SOFT} />
    {/* calendar body */}
    <rect x="20" y="26" width="56" height="48" rx="6" fill={GRAPHITE} />
    {/* header strip */}
    <rect x="20" y="26" width="56" height="12" rx="6" fill={RED} />
    <rect x="20" y="32" width="56" height="6" fill={RED} />
    {/* rings */}
    <rect x="30" y="20" width="4" height="12" rx="2" fill={GRAPHITE} />
    <rect x="62" y="20" width="4" height="12" rx="2" fill={GRAPHITE} />
    {/* week dots */}
    <g fill="white" opacity="0.35">
      <circle cx="30" cy="48" r="2.2" />
      <circle cx="40" cy="48" r="2.2" />
      <circle cx="50" cy="48" r="2.2" />
      <circle cx="60" cy="48" r="2.2" />
      <circle cx="70" cy="48" r="2.2" />
      <circle cx="30" cy="58" r="2.2" />
      <circle cx="60" cy="58" r="2.2" />
      <circle cx="70" cy="58" r="2.2" />
      <circle cx="30" cy="68" r="2.2" />
      <circle cx="40" cy="68" r="2.2" />
      <circle cx="50" cy="68" r="2.2" />
      <circle cx="60" cy="68" r="2.2" />
      <circle cx="70" cy="68" r="2.2" />
    </g>
    {/* highlighted launch range 2–4 */}
    <rect x="36" y="54" width="20" height="10" rx="3" fill={RED} />
    <circle cx="40" cy="59" r="2.4" fill="white" />
    <circle cx="50" cy="59" r="2.4" fill="white" />
  </svg>
);

// 4. AI 24/7 — нейрон с пульсом, бесконечность снизу
const Ai247Icon = () => (
  <svg {...baseProps}>
    <circle cx="48" cy="48" r="42" fill={BG_SOFT} />
    {/* central node */}
    <circle cx="48" cy="42" r="10" fill={GRAPHITE} />
    {/* satellites */}
    <circle cx="22" cy="28" r="4" fill={GRAPHITE} />
    <circle cx="74" cy="28" r="4" fill={GRAPHITE} />
    <circle cx="20" cy="56" r="4" fill={RED} />
    <circle cx="76" cy="56" r="4" fill={RED} />
    {/* connecting lines */}
    <line x1="26" y1="30" x2="42" y2="38" stroke={GRAPHITE} strokeWidth="2" strokeLinecap="round" />
    <line x1="70" y1="30" x2="54" y2="38" stroke={GRAPHITE} strokeWidth="2" strokeLinecap="round" />
    <line x1="24" y1="54" x2="42" y2="46" stroke={RED} strokeWidth="2" strokeLinecap="round" />
    <line x1="72" y1="54" x2="54" y2="46" stroke={RED} strokeWidth="2" strokeLinecap="round" />
    {/* infinity (24/7) */}
    <path
      d="M30 76 C30 70, 40 70, 44 74 C48 78, 54 78, 58 74 C62 70, 70 70, 70 76 C70 82, 62 82, 58 78 C54 74, 48 74, 44 78 C40 82, 30 82, 30 76 Z"
      fill={RED}
    />
  </svg>
);

// 5. Полный цикл в одной команде — концентрические сегменты (стратегия → продакшн → дистрибуция)
const FullCycleIcon = () => (
  <svg {...baseProps}>
    <circle cx="48" cy="48" r="42" fill={BG_SOFT} />
    {/* outer ring */}
    <circle cx="48" cy="48" r="32" fill="none" stroke={GRAPHITE} strokeWidth="6" />
    {/* mid ring */}
    <circle cx="48" cy="48" r="22" fill="none" stroke={GRAPHITE_SOFT} strokeWidth="6" />
    {/* red arc — completion */}
    <path
      d="M48 16 A32 32 0 0 1 80 48"
      stroke={RED}
      strokeWidth="6"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M48 26 A22 22 0 0 1 70 48"
      stroke={RED}
      strokeWidth="6"
      strokeLinecap="round"
      fill="none"
    />
    {/* center dot */}
    <circle cx="48" cy="48" r="6" fill={GRAPHITE} />
    <circle cx="48" cy="48" r="2.5" fill={RED} />
  </svg>
);

// 6. Измеримый результат — приборная панель / спидометр
const MeasurableIcon = () => (
  <svg {...baseProps}>
    <circle cx="48" cy="48" r="42" fill={BG_SOFT} />
    {/* gauge arc background */}
    <path
      d="M18 60 A30 30 0 0 1 78 60"
      stroke={GRAPHITE_SOFT}
      strokeWidth="8"
      strokeLinecap="round"
      fill="none"
    />
    {/* filled portion (red) */}
    <path
      d="M18 60 A30 30 0 0 1 62 33"
      stroke={RED}
      strokeWidth="8"
      strokeLinecap="round"
      fill="none"
    />
    {/* tick marks */}
    <g stroke={GRAPHITE} strokeWidth="2" strokeLinecap="round">
      <line x1="22" y1="52" x2="26" y2="54" />
      <line x1="34" y1="36" x2="37" y2="40" />
      <line x1="48" y1="30" x2="48" y2="34" />
      <line x1="62" y1="36" x2="59" y2="40" />
      <line x1="74" y1="52" x2="70" y2="54" />
    </g>
    {/* needle */}
    <line x1="48" y1="60" x2="64" y2="36" stroke={GRAPHITE} strokeWidth="4" strokeLinecap="round" />
    <circle cx="48" cy="60" r="5" fill={GRAPHITE} />
    <circle cx="48" cy="60" r="2" fill={RED} />
  </svg>
);

const map: Record<IconKey, () => JSX.Element> = {
  growth: GrowthIcon,
  "lead-cost": LeadCostIcon,
  "fast-launch": FastLaunchIcon,
  "ai-247": Ai247Icon,
  "full-cycle": FullCycleIcon,
  measurable: MeasurableIcon,
};

interface Props {
  icon: IconKey;
  className?: string;
}

const ResultDuotoneIcon = ({ icon, className = "" }: Props) => {
  const Comp = map[icon];
  if (!Comp) return null;
  return (
    <div className={`w-full h-full ${className}`}>
      <Comp />
    </div>
  );
};

export type { IconKey as ResultIconKey };
export default memo(ResultDuotoneIcon);
