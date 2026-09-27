import React from 'react';
import { ArrowRight, AlertCircle, Sparkles } from 'lucide-react';

export const ProblemAgitation: React.FC = () => {
  return (
    <section id="the-problem" className="py-16 sm:py-24 bg-white border-b border-neutral-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Centralized Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-red-700 bg-red-50 px-3 py-1 rounded-md border border-red-200/60 mx-auto">
            <AlertCircle className="w-3.5 h-3.5 text-red-600" />
            The Real Bottleneck
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black tracking-tight text-balance">
            Information Isn't Your Problem. Lack Of Direction Is.
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto">
            You can spend months learning affiliate marketing and still feel like you're starting from zero.
          </p>
        </div>

        {/* Narrative Flow */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-neutral-200 shadow-sm space-y-6">
          <div className="space-y-3 text-neutral-800 leading-relaxed text-base sm:text-lg">
            <p className="text-black font-semibold">
              You watch one video…
            </p>
            <p>Then discover another strategy…</p>
            <p>Then hear someone talking about paid ads…</p>
            <p>Someone else says organic traffic…</p>
            <p>Someone tells you to build a WhatsApp audience…</p>
            <p>Another person tells you to start a blog…</p>
            <p className="pt-2 font-bold text-black text-lg">
              And suddenly you have dozens of things you could be doing. But you don't know which one you should actually do.
            </p>
          </div>

          <div className="pt-6 border-t border-neutral-200">
            <h3 className="text-xl font-bold text-black mb-4 text-center">
              That creates three problems:
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-5 rounded-xl bg-neutral-50 border border-neutral-200 space-y-2 text-center sm:text-left">
                <span className="text-xs font-mono font-bold text-red-600 uppercase tracking-wider flex items-center justify-center sm:justify-start gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
                  Problem 01
                </span>
                <p className="text-base font-semibold text-black">
                  You keep starting instead of executing.
                </p>
                <p className="text-xs text-neutral-600">
                  Perpetual preparation mode where planning replaces real action.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-neutral-50 border border-neutral-200 space-y-2 text-center sm:text-left">
                <span className="text-xs font-mono font-bold text-red-600 uppercase tracking-wider flex items-center justify-center sm:justify-start gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
                  Problem 02
                </span>
                <p className="text-base font-semibold text-black">
                  You keep changing strategies instead of giving one process enough time.
                </p>
                <p className="text-xs text-neutral-600">
                  Abandoning methods at day 4 before compound momentum ever kicks in.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-neutral-50 border border-neutral-200 space-y-2 text-center sm:text-left">
                <span className="text-xs font-mono font-bold text-red-600 uppercase tracking-wider flex items-center justify-center sm:justify-start gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
                  Problem 03
                </span>
                <p className="text-base font-semibold text-black">
                  You consume more information without making meaningful progress.
                </p>
                <p className="text-xs text-neutral-600">
                  The false sensation of productivity while staying at square zero.
                </p>
              </div>
            </div>
          </div>

          {/* The Solution Box - Centralized */}
          <div className="pt-6 border-t border-neutral-200 bg-neutral-50 -mx-6 -mb-6 sm:-mx-10 sm:-mb-10 p-6 sm:p-8 rounded-b-2xl border-b border-neutral-200 text-center">
            <div className="flex flex-col items-center gap-4 max-w-xl mx-auto text-center">
              <div className="p-2.5 rounded-xl bg-red-100 text-red-700 shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="space-y-3">
                <p className="text-black font-medium text-base sm:text-lg leading-relaxed">
                  The solution isn't necessarily another massive course.
                  Sometimes you need a simple roadmap that tells you:
                </p>
                <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 py-2.5 px-5 rounded-xl bg-white border border-neutral-300 font-bold text-black text-sm sm:text-base shadow-xs">
                  <span>Start here</span>
                  <ArrowRight className="w-4 h-4 text-red-600" />
                  <span>Do this</span>
                  <ArrowRight className="w-4 h-4 text-red-600" />
                  <span>Then move to this</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
