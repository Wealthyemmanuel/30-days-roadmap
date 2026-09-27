import React from 'react';
import { ArrowRight, CheckCircle2, Quote, Award, Sparkles, TrendingUp } from 'lucide-react';

interface PersonalStoryProps {
  onOpenDownload?: () => void;
}

export const PersonalStory: React.FC<PersonalStoryProps> = () => {
  return (
    <section id="my-story" className="py-16 md:py-24 bg-white border-b border-neutral-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-red-700 uppercase tracking-wider bg-red-50 border border-red-200 px-3 py-1 rounded-md mx-auto">
            <Sparkles className="w-3.5 h-3.5 text-red-600" /> Transparent Breakdown
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight">
            My Story: How I Cut Through The Noise
          </h2>
          <p className="text-base text-neutral-600 max-w-2xl mx-auto">
            Before I had a consistent affiliate system, I spent months doing everything wrong.
          </p>
        </div>

        <div className="bg-neutral-50 border border-neutral-200 rounded-3xl p-6 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
            {/* Author Photo */}
            <div className="md:col-span-5 flex justify-center">
              <div className="relative group w-full max-w-xs sm:max-w-sm">
                <div className="rounded-2xl overflow-hidden border-2 border-neutral-300 shadow-xl bg-white">
                  <img
                    src="https://i.ibb.co/b5GxMwhC/i54kw8.jpg"
                    alt="Affiliate Marketing Mentor"
                    referrerPolicy="no-referrer"
                    className="w-full h-auto object-cover aspect-4/5 block"
                  />
                </div>
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-black text-white text-xs font-bold px-4 py-1 rounded-full border border-neutral-700 shadow-md whitespace-nowrap flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                  <span>Emmanuel · Affiliate Strategist</span>
                </div>
              </div>
            </div>

            {/* Content / Narrative */}
            <div className="md:col-span-7 space-y-5 text-left">
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-red-600 uppercase tracking-wider">
                  The Turning Point
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-black">
                  "I was buying courses and opening 30 tabs a day — until I stripped everything back."
                </h3>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
                <p>
                  Like most people starting out, I bought into the illusion that more information meant faster results. I had bookmarks on SEO, tutorials on paid TikTok ads, courses on email autoresponders, and dozens of half-finished notes.
                </p>
                <p>
                  Every guru promised a different "secret loophole." The truth? There was no secret loophole. I was simply overwhelmed, jumping from one shiny tactic to another without giving anything enough time or focus to bear fruit.
                </p>
                <p className="font-semibold text-black">
                  Everything changed when I set a simple rule: one niche, one high-integrity offer, and one simple daily routine that takes less than an hour. That is the exact 30-day progression outlined in this free roadmap.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-black bg-white p-3 rounded-xl border border-neutral-200">
                  <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                  <span>One single daily focus</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-black bg-white p-3 rounded-xl border border-neutral-200">
                  <TrendingUp className="w-4 h-4 text-red-600 shrink-0" />
                  <span>Compound execution</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-black bg-white p-3 rounded-xl border border-neutral-200">
                  <Award className="w-4 h-4 text-red-600 shrink-0" />
                  <span>No expensive tools</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-black bg-white p-3 rounded-xl border border-neutral-200">
                  <Sparkles className="w-4 h-4 text-red-600 shrink-0" />
                  <span>Clear starting path</span>
                </div>
              </div>

              <div className="pt-3">
                <a
                  href="#overview"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm font-bold rounded-xl transition-all shadow-md cursor-pointer"
                >
                  <span>Claim Your Free 30-Day Starter Roadmap</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
