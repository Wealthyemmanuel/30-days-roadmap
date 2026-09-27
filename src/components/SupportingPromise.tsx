import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, Sparkles } from 'lucide-react';

interface SupportingPromiseProps {
  onOpenDownload?: () => void;
}

export const SupportingPromise: React.FC<SupportingPromiseProps> = () => {
  return (
    <section className="py-12 bg-neutral-50 border-y border-neutral-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-8">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-red-700 uppercase tracking-wider bg-red-50 border border-red-200 px-3 py-1 rounded-md mx-auto">
            <Sparkles className="w-3.5 h-3.5 text-red-600" /> The Starter Guarantee
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-black tracking-tight">
            The Supporting Promise: Clarity Before Complexity
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 max-w-2xl mx-auto">
            Before you spend hundreds on software or drown in complex multi-step funnels, here is what this 30-day framework guarantees you will walk away with.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Promise 1 */}
          <div className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-xs space-y-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center mx-auto sm:mx-0 border border-red-200/60">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-black">
              1. A Definite Daily Routine
            </h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Every morning for 30 days, you wake up knowing exactly which 20-to-30 minute task to execute. No tab fatigue, no doomscrolling, no wondering what to do next.
            </p>
          </div>

          {/* Promise 2 */}
          <div className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-xs space-y-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center mx-auto sm:mx-0 border border-red-200/60">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-black">
              2. Zero Wasted Capital
            </h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              You won't be told to buy $97/mo funnel builders, paid tracking software, or expensive ad credits before you've even made your first organic commission.
            </p>
          </div>

          {/* Promise 3 */}
          <div className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-xs space-y-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center mx-auto sm:mx-0 border border-red-200/60">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-black">
              3. Permanent Foundation
            </h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              You will build assets and communication skills that remain valuable forever: niche selection, positioning, and trust-based audience acquisition.
            </p>
          </div>
        </div>

        {/* Micro reassurance strip */}
        <div className="mt-8 pt-6 border-t border-neutral-200 flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-600 font-medium">
          <span className="flex items-center gap-1.5 text-black">
            <CheckCircle2 className="w-4 h-4 text-red-600" />
            Designed for complete beginners
          </span>
          <span className="hidden sm:inline text-neutral-300">·</span>
          <span className="flex items-center gap-1.5 text-black">
            <CheckCircle2 className="w-4 h-4 text-red-600" />
            Step-by-step 30-day checklist
          </span>
          <span className="hidden sm:inline text-neutral-300">·</span>
          <span className="flex items-center gap-1.5 text-black">
            <CheckCircle2 className="w-4 h-4 text-red-600" />
            Direct MailerLite digital delivery
          </span>
        </div>
      </div>
    </section>
  );
};
