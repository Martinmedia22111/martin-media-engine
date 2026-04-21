import { memo } from "react";

/**
 * Typographic "icon" hero block for service cards.
 * Maps each service slug to a bold word + minimal red accent.
 * Pure CSS/SVG, no images.
 */

type Variant = {
  label: string;
  // Renderer overlays accent on top of the label
  render: (label: string) => JSX.Element;
};

const Word = ({ children }: { children: React.ReactNode }) => (
  <span className="font-heading font-black tracking-tight text-foreground leading-none whitespace-nowrap">
    {children}
  </span>
);

const RedDot = ({ className = "" }: { className?: string }) => (
  <span className={`inline-block rounded-full bg-primary ${className}`} aria-hidden />
);

// Variant builders -------------------------------------------------

const videoVariant: Variant = {
  label: "VIDEO",
  // Replace the "O" with a bold ring + red REC dot inside
  render: () => (
    <Word>
      VIDE
      <span className="relative inline-flex items-center justify-center">
        <span>O</span>
        <RedDot className="absolute w-[0.22em] h-[0.22em]" />
      </span>
    </Word>
  ),
};

const tvVariant: Variant = {
  label: "TV",
  // Red play triangle between T and V
  render: () => (
    <span className="inline-flex items-center font-heading font-black tracking-tight text-foreground leading-none">
      <span>T</span>
      <span
        className="mx-[0.05em] inline-block"
        style={{
          width: "0.45em",
          height: "0.55em",
          background: "hsl(var(--primary))",
          clipPath: "polygon(0 0, 100% 50%, 0 100%)",
        }}
        aria-hidden
      />
      <span>V</span>
    </span>
  ),
};

const ratioVariant: Variant = {
  label: "9:16",
  // Red colon
  render: () => (
    <span className="inline-flex items-baseline font-heading font-black tracking-tight text-foreground leading-none">
      <span>9</span>
      <span className="text-primary mx-[0.02em]">:</span>
      <span>16</span>
    </span>
  ),
};

const smmVariant: Variant = {
  label: "SMM",
  // Red upward arrow over the last M
  render: () => (
    <span className="relative inline-flex items-center font-heading font-black tracking-tight text-foreground leading-none">
      <span>SMM</span>
      <svg
        viewBox="0 0 24 24"
        className="absolute -top-[0.35em] right-[-0.05em] w-[0.55em] h-[0.55em] text-primary"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M5 19 L19 5" />
        <path d="M9 5 L19 5 L19 15" />
      </svg>
    </span>
  ),
};

const threeDVariant: Variant = {
  label: "3D",
  // The "D" rendered red
  render: () => (
    <Word>
      3<span className="text-primary">D</span>
    </Word>
  ),
};

const foodVariant: Variant = {
  label: "FOOD",
  // Red plate dot above first O
  render: () => (
    <span className="relative inline-flex font-heading font-black tracking-tight text-foreground leading-none">
      <span>F</span>
      <span className="relative">
        O
        <RedDot className="absolute -top-[0.35em] left-1/2 -translate-x-1/2 w-[0.18em] h-[0.18em]" />
      </span>
      <span>OD</span>
    </span>
  ),
};

const inflVariant: Variant = {
  label: "INFL.",
  render: () => (
    <span className="font-heading font-black tracking-tight text-foreground leading-none">
      INFL<span className="text-primary">.</span>
    </span>
  ),
};

const aiVariant: Variant = {
  label: "AI",
  // Neuron node above A
  render: () => (
    <span className="relative inline-flex items-center font-heading font-black tracking-tight text-foreground leading-none">
      <svg
        viewBox="0 0 40 30"
        className="absolute -top-[0.55em] left-[-0.1em] w-[0.6em] h-[0.45em] text-primary"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden
      >
        <line x1="8" y1="22" x2="22" y2="8" />
        <line x1="22" y1="8" x2="34" y2="18" />
        <circle cx="22" cy="8" r="4" fill="currentColor" />
        <circle cx="8" cy="22" r="2.5" fill="currentColor" />
        <circle cx="34" cy="18" r="2.5" fill="currentColor" />
      </svg>
      <span>AI</span>
    </span>
  ),
};

const avaVariant: Variant = {
  label: "AVA",
  // Red dot inside V (avatar metaphor)
  render: () => (
    <span className="relative inline-flex font-heading font-black tracking-tight text-foreground leading-none">
      A
      <span className="relative">
        V
        <RedDot className="absolute top-[0.25em] left-1/2 -translate-x-1/2 w-[0.18em] h-[0.18em]" />
      </span>
      A
    </span>
  ),
};

const botVariant: Variant = {
  label: "BOT",
  // Speech tail on the O
  render: () => (
    <span className="relative inline-flex font-heading font-black tracking-tight text-foreground leading-none">
      B
      <span className="relative">
        O
        <span
          className="absolute -bottom-[0.1em] right-[-0.05em]"
          style={{
            width: "0.2em",
            height: "0.2em",
            background: "hsl(var(--primary))",
            clipPath: "polygon(0 0, 100% 0, 100% 100%)",
          }}
          aria-hidden
        />
      </span>
      T
    </span>
  ),
};

const prVariant: Variant = {
  label: "PR",
  // Red signal waves above P
  render: () => (
    <span className="relative inline-flex items-center font-heading font-black tracking-tight text-foreground leading-none">
      <svg
        viewBox="0 0 32 24"
        className="absolute -top-[0.55em] left-[-0.05em] w-[0.55em] h-[0.45em] text-primary"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        aria-hidden
      >
        <path d="M6 18 Q16 8, 26 18" />
        <path d="M10 20 Q16 14, 22 20" />
        <circle cx="16" cy="20" r="1.8" fill="currentColor" />
      </svg>
      <span>PR</span>
    </span>
  ),
};

const hrVariant: Variant = {
  label: "HR",
  // Row of red dots beneath (people row)
  render: () => (
    <span className="relative inline-flex flex-col items-center font-heading font-black tracking-tight text-foreground leading-none">
      <span>HR</span>
      <span className="flex gap-[0.08em] mt-[0.1em]">
        <RedDot className="w-[0.12em] h-[0.12em]" />
        <RedDot className="w-[0.12em] h-[0.12em]" />
        <RedDot className="w-[0.12em] h-[0.12em]" />
        <RedDot className="w-[0.12em] h-[0.12em]" />
      </span>
    </span>
  ),
};

const corpVariant: Variant = {
  label: "CORP.",
  render: () => (
    <span className="font-heading font-black tracking-tight text-foreground leading-none">
      CORP<span className="text-primary">.</span>
    </span>
  ),
};

const aeroVariant: Variant = {
  label: "AERO",
  // Red dot inside O (drone POV)
  render: () => (
    <span className="relative inline-flex font-heading font-black tracking-tight text-foreground leading-none">
      AER
      <span className="relative">
        O
        <RedDot className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[0.18em] h-[0.18em]" />
      </span>
    </span>
  ),
};

const webVariant: Variant = {
  label: "WEB",
  // Red paper-plane accent on E
  render: () => (
    <span className="relative inline-flex font-heading font-black tracking-tight text-foreground leading-none">
      W
      <span className="relative">
        E
        <svg
          viewBox="0 0 24 24"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[0.5em] h-[0.5em] text-primary"
          fill="currentColor"
          aria-hidden
        >
          <path d="M2 12 L22 2 L14 22 L12 13 Z" />
        </svg>
      </span>
      B
    </span>
  ),
};

const variants: Record<string, Variant> = {
  videoproduction: videoVariant,
  "reklamnye-roliki": tvVariant,
  "short-form-video": ratioVariant,
  "smm-content-strategy": smmVariant,
  "3d-motion-design": threeDVariant,
  "food-video": foodVariant,
  "influence-marketing": inflVariant,
  "ai-resheniya": aiVariant,
  "korporativnye-filmy": corpVariant,
  "pr-strategii": prVariant,
  "hr-brand": hrVariant,
  "aerosyomka-panoramy": aeroVariant,
  "reklamnyye-igry": avaVariant, // спецпроекты — нейтральный
  "telegram-boty-i-sajty": webVariant,
  "ai-chatbots": botVariant,
};

interface Props {
  slug: string;
  /** Container size class controlling the typography block. */
  className?: string;
}

const ServiceTypoIcon = memo(({ slug, className = "" }: Props) => {
  const variant = variants[slug];
  if (!variant) {
    // Fallback: first 3 letters of slug uppercased
    const fallback = slug.slice(0, 3).toUpperCase();
    return (
      <div className={`flex items-center ${className}`}>
        <Word>{fallback}</Word>
      </div>
    );
  }
  return <div className={`flex items-center ${className}`}>{variant.render(variant.label)}</div>;
});

ServiceTypoIcon.displayName = "ServiceTypoIcon";

export default ServiceTypoIcon;
