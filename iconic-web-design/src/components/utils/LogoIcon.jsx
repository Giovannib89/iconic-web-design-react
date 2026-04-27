export function LogoIcon({ size = 36 }) {
  return (
    <svg width={size} height={size * 1.13} viewBox="0 0 60 68" xmlns="http://www.w3.org/2000/svg">
      <polygon points="30,0 60,17 30,34" fill="#00D4FF" opacity="0.9" />
      <polygon points="60,17 60,51 30,34" fill="#00A8CC" opacity="0.85" />
      <polygon points="30,34 60,51 30,68" fill="#007A99" opacity="0.8" />
      <polygon points="0,17 30,34 0,51" fill="#0E3A44" opacity="0.95" />
      <polygon points="30,0 0,17 30,34" fill="#00B8E6" opacity="0.85" />
      <polygon points="0,51 30,68 30,34" fill="#005566" opacity="0.9" />
      <circle cx="30" cy="0" r="2.5" fill="#00D4FF" />
      <circle cx="30" cy="34" r="3" fill="#80EAFF" />
    </svg>
  );
}
