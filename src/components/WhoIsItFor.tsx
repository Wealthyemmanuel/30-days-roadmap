import React from 'react';
import { Check, X } from 'lucide-react';

export const WhoIsItFor: React.FC = () => {
  return (
    <section id="who-its-for" className="py-16 sm:py-24 bg-white border-b border-neutral-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-red-700 bg-red-50 px-3 py-1 rounded-md border border-red-200/60 mx-auto">
            Clarity & Fit
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black tracking-tight text-balance">
            Who This Roadmap Is For
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto">
            We believe in honest alignment. See if this 30-day framework fits your current journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* This roadmap is for you if */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white border-2 border-neutral-900 shadow-sm space-y-6">
            <div>
              <div className="text-xs font-bold text-red-600 uppercase tracking-wider mb-1">
                Perfect Fit
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-black">
                This roadmap is for you if:
              </h3>
            </div>

            <ul className="space-y-4 text-sm sm:text-base text-neutral-800">
              <li className="flex items-start gap-3">
                <span className="p-1 rounded-full bg-red-50 text-red-600 mt-0.5 shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </span>
                <span>You're completely new to affiliate marketing.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="p-1 rounded-full bg-red-50 text-red-600 mt-0.5 shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </span>
                <span>You've started learning but feel overwhelmed.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="p-1 rounded-full bg-red-50 text-red-600 mt-0.5 shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </span>
                <span>You've consumed lots of information but haven't taken consistent action.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="p-1 rounded-full bg-red-50 text-red-600 mt-0.5 shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </span>
                <span>You don't know what to focus on first.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="p-1 rounded-full bg-red-50 text-red-600 mt-0.5 shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </span>
                <span>You want a simple structure to follow.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="p-1 rounded-full bg-red-50 text-red-600 mt-0.5 shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </span>
                <span className="font-semibold text-black">
                  You want to stop jumping from one strategy to another.
                </span>
              </li>
            </ul>
          </div>

          {/* It's not for you if */}
          <div className="p-6 sm:p-8 rounded-2xl bg-neutral-50 border border-neutral-300 shadow-xs space-y-6">
            <div>
              <div className="text-xs font-bold text-neutral-600 uppercase tracking-wider mb-1">
                Honest Exclusions
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-black">
                It's not for you if:
              </h3>
            </div>

            <ul className="space-y-4 text-sm sm:text-base text-neutral-700">
              <li className="flex items-start gap-3">
                <span className="p-1 rounded-full bg-neutral-200 text-neutral-800 mt-0.5 shrink-0">
                  <X className="w-3.5 h-3.5" />
                </span>
                <span>You're looking for overnight income or get-rich-quick hacks.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="p-1 rounded-full bg-neutral-200 text-neutral-800 mt-0.5 shrink-0">
                  <X className="w-3.5 h-3.5" />
                </span>
                <span>You want someone to do the work for you.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="p-1 rounded-full bg-neutral-200 text-neutral-800 mt-0.5 shrink-0">
                  <X className="w-3.5 h-3.5" />
                </span>
                <span>You're unwilling to learn, be consistent, and take real action.</span>
              </li>
            </ul>

            <div className="pt-6 border-t border-neutral-200 text-xs text-neutral-600 leading-relaxed">
              We respect your time. If you are serious about building an authentic recommendation business with clear direction, this roadmap was built for you.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
