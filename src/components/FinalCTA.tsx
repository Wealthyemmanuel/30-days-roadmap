import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface FinalCTAProps {
  onOpenDownload: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenDownload }) => {
  return (
    <section className="py-20 sm:py-28 bg-white border-b border-neutral-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-red-700 bg-red-50 px-3 py-1 rounded-md border border-red-200/60 mx-auto">
          The Fork In The Road
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-black tracking-tight text-balance leading-tight max-w-3xl mx-auto">
          Your Next 30 Days Don't Have To Be Confusing.
        </h2>

        <div className="text-lg sm:text-xl text-neutral-800 max-w-2xl mx-auto space-y-2 leading-relaxed">
          <p>
            You can keep jumping from strategy to strategy…
          </p>
          <p className="font-bold text-black text-xl sm:text-2xl">
            or you can start with a clear direction.
          </p>
          <p className="pt-2 text-base sm:text-lg text-neutral-600">
            Get the 30-Day Affiliate Marketing Starter Roadmap and know exactly what you're working toward over the next 30 days.
          </p>
        </div>

        {/* CTA decision block */}
        <div className="pt-4 space-y-3 flex flex-col items-center">
          <button
            onClick={onOpenDownload}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 sm:px-10 sm:py-5 text-base sm:text-lg font-bold text-white bg-red-600 hover:bg-red-700 active:scale-[0.99] rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer whitespace-nowrap"
          >
            <span>YES, GIVE ME MY FREE 30-DAY ROADMAP</span>
            <ArrowRight className="w-5 h-5 text-white" />
          </button>

          <div className="flex items-center justify-center gap-3 text-xs sm:text-sm text-neutral-600">
            <span className="flex items-center gap-1 font-medium text-black">
              <CheckCircle2 className="w-4 h-4 text-red-600" /> It's free. Start today.
            </span>
            <span aria-hidden="true" className="text-neutral-300">·</span>
            <span>Instant delivery</span>
            <span aria-hidden="true" className="text-neutral-300">·</span>
            <span>No credit card required</span>
          </div>
        </div>
      </div>
    </section>
  );
};
