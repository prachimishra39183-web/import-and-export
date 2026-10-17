import { Ship } from 'lucide-react';

export default function Logo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div className="relative">
        <div className="absolute inset-0 rounded-xl bg-sea-400/30 blur-md" />
        <div className="relative grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-sea-500 to-sea-700 shadow-glow">
          <Ship className="h-5 w-5 text-white" strokeWidth={2.4} />
        </div>
      </div>
      <div className="leading-tight">
        <p className="font-display text-[15px] font-700 text-ink-800 tracking-tight">
          Future Retail
        </p>
        <p className="font-display text-[10px] font-600 tracking-[0.22em] text-sea-600 uppercase">
          Enterprise
        </p>
      </div>
    </div>
  );
}
