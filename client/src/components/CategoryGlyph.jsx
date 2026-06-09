/**
 * CategoryGlyph — lightweight inline SVG used as a project's representative
 * visual. No external image requests; scales crisply at any size.
 */
export default function CategoryGlyph({ category }) {
  const common = {
    width: '100%',
    height: '100%',
    viewBox: '0 0 120 120',
    fill: 'none',
    'aria-hidden': true,
    role: 'img',
  };

  switch (category) {
    case 'Vision/AI':
      return (
        <svg {...common}>
          <circle cx="60" cy="60" r="34" stroke="currentColor" strokeWidth="3" />
          <circle cx="60" cy="60" r="14" fill="currentColor" opacity="0.25" />
          <circle cx="60" cy="60" r="6" fill="currentColor" />
          <path d="M26 60h-12M106 60h-12M60 26v-12M60 106v-12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    case 'IoT':
      return (
        <svg {...common}>
          <rect x="38" y="48" width="44" height="30" rx="4" stroke="currentColor" strokeWidth="3" />
          <path d="M60 48V30M60 30a10 10 0 1 1 0-.01" stroke="currentColor" strokeWidth="3" />
          <path d="M30 88c8-8 16-8 24 0M66 88c8-8 16-8 24 0" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <circle cx="60" cy="63" r="4" fill="currentColor" />
        </svg>
      );
    case 'Web':
      return (
        <svg {...common}>
          <rect x="24" y="30" width="72" height="54" rx="5" stroke="currentColor" strokeWidth="3" />
          <path d="M24 44h72" stroke="currentColor" strokeWidth="3" />
          <circle cx="33" cy="37" r="2.4" fill="currentColor" />
          <circle cx="41" cy="37" r="2.4" fill="currentColor" />
          <path d="M48 92h24" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    default:
      // Embedded — a microcontroller chip glyph
      return (
        <svg {...common}>
          <rect x="40" y="40" width="40" height="40" rx="4" stroke="currentColor" strokeWidth="3" />
          <rect x="52" y="52" width="16" height="16" rx="2" fill="currentColor" opacity="0.3" />
          {[48, 60, 72].map((x) => (
            <g key={x}>
              <path d={`M${x} 40v-12M${x} 92v-12`} stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              <path d={`M40 ${x}h-12M92 ${x}h-12`} stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            </g>
          ))}
        </svg>
      );
  }
}
