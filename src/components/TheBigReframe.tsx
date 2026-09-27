import React from 'react';
import { Check, X } from 'lucide-react';

export const TheBigReframe: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-neutral-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header - Centralized */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-red-700 bg-red-50 px-3 py-1 rounded-md border border-red-200/60 mx-auto">
            The Big Reframe
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black tracking-tight text-balance">
            You Don't Need To Know Everything Before You Start.
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            You don't need to master affiliate marketing before taking your first step.
          </p>
        </div>

        {/* Contrast Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {/* What you don't need */}
          <div className="p-6 sm:p-8 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-red-700 block">
              Things you do NOT need today:
            </span>
            <ul className="space-y-3 text-neutral-700 text-sm sm:text-base">
              <li className="flex items-start gap-3">
                <span className="p-1 rounded-md bg-red-100 text-red-700 mt-0.5 shrink-0">
                  <X className="w-3.5 h-3.5" />
                </span>
                <span>You don't need thousands of followers.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="p-1 rounded-md bg-red-100 text-red-700 mt-0.5 shrink-0">
                  <X className="w-3.5 h-3.5" />
                </span>
                <span>You don't need to understand every traffic strategy.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="p-1 rounded-md bg-red-100 text-red-700 mt-0.5 shrink-0">
                  <X className="w-3.5 h-3.5" />
                </span>
                <span>You don't need to know every sales technique.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="p-1 rounded-md bg-red-100 text-red-700 mt-0.5 shrink-0">
                  <X className="w-3.5 h-3.5" />
                </span>
                <span>You don't need complicated tech stacks or paid tools.</span>
              </li>
            </ul>
          </div>

          {/* What you actually need */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white border-2 border-red-600/30 shadow-xs space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-black block">
                What you actually need:
              </span>
              <ul className="space-y-3 text-black text-sm sm:text-base font-medium">
                <li className="flex items-start gap-3">
                  <span className="p-1 rounded-md bg-red-50 text-red-700 mt-0.5 shrink-0">
                    <Check className="w-3.5 h-3.5 text-red-600" />
                  </span>
                  <span>You need to know what to focus on now.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="p-1 rounded-md bg-red-50 text-red-700 mt-0.5 shrink-0">
                    <Check className="w-3.5 h-3.5 text-red-600" />
                  </span>
                  <span>Then you build from there.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="p-1 rounded-md bg-red-50 text-red-700 mt-0.5 shrink-0">
                    <Check className="w-3.5 h-3.5 text-red-600" />
                  </span>
                  <span>Step by step, day by day, without second-guessing.</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-neutral-200 text-sm font-semibold text-black">
              That's what this roadmap is designed to help you do.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
