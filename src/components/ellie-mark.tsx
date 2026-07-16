import * as React from "react";

/**
 * The aiellie mascot — a violet gradient orb with two eyes.
 * Reproduced from the brand mark on https://ui.aiellie.dev.
 */
export function EllieMark({
  className,
  title = "aiellie",
  ...props
}: React.SVGProps<SVGSVGElement> & { title?: string }) {
  const uid = React.useId();
  const orb = `${uid}-orb`;
  const shade = `${uid}-shade`;
  const spec = `${uid}-spec`;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      role="img"
      aria-label={title}
      className={className}
      {...props}
    >
      <defs>
        <radialGradient id={orb} cx="36%" cy="30%" r="74%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="20%" stopColor="#f5f3ff" />
          <stop offset="46%" stopColor="#e9d5ff" />
          <stop offset="73%" stopColor="#c4b5fd" />
          <stop offset="100%" stopColor="#a5b4fc" />
        </radialGradient>
        <radialGradient id={shade} cx="30%" cy="80%" r="58%">
          <stop offset="58%" stopColor="#8b7ff0" stopOpacity="0" />
          <stop offset="100%" stopColor="#7d6fe8" stopOpacity="0.42" />
        </radialGradient>
        <radialGradient id={spec} cx="68%" cy="22%" r="26%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="48" fill={`url(#${orb})`} />
      <circle cx="50" cy="50" r="48" fill={`url(#${shade})`} />
      <circle cx="50" cy="50" r="48" fill={`url(#${spec})`} />
      <g fill="#2a1f57">
        <ellipse cx="40" cy="53" rx="5" ry="6.4" />
        <ellipse cx="60" cy="53" rx="5" ry="6.4" />
      </g>
      <g fill="#ffffff" fillOpacity="0.92">
        <circle cx="38.1" cy="50" r="1.6" />
        <circle cx="58.1" cy="50" r="1.6" />
      </g>
    </svg>
  );
}
