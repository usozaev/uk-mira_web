export default function SiteMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" aria-hidden="true">
      <path d="M2 10V2H10" stroke="currentColor" strokeWidth="1.6" />
      <path d="M38 10V2H30" stroke="currentColor" strokeWidth="1.6" />
      <path d="M2 30V38H10" stroke="currentColor" strokeWidth="1.6" />
      <path d="M38 30V38H30" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 29V11H16.2L20 22L23.8 11H28V29H24.6V16.5L20.8 27.5H19.2L15.4 16.5V29H12Z" fill="currentColor" />
    </svg>
  );
}
