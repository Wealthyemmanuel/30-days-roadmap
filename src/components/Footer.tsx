import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-neutral-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <span className="text-base font-bold text-black">
              30-Day Affiliate Marketing Starter Roadmap
            </span>
            <p className="text-xs text-neutral-600 mt-1 max-w-md leading-relaxed">
              From Knowing Nothing About Affiliate Marketing to Knowing Exactly What to Do Next. A simple daily structure for beginners starting from zero.
            </p>
          </div>

          <nav className="flex flex-wrap items-center gap-6 text-xs text-neutral-600">
            <a href="#overview" className="hover:text-red-600 transition-colors">Overview</a>
            <a href="#my-story" className="hover:text-red-600 transition-colors">My Story</a>
            <a href="#the-problem" className="hover:text-red-600 transition-colors">The Problem</a>
            <a href="#whats-inside" className="hover:text-red-600 transition-colors">Curriculum</a>
            <a href="#who-its-for" className="hover:text-red-600 transition-colors">Who It's For</a>
          </nav>
        </div>

        {/* Ethical Affiliate and Earnings Disclaimer */}
        <div className="pt-6 border-t border-neutral-100 text-xs text-neutral-500 space-y-2 leading-relaxed">
          <p>
            <strong>Disclaimer:</strong> This roadmap is designed for educational purposes to provide structured operational clarity. Success in affiliate marketing depends on personal work ethic, niche selection, consistent execution, and individual persistence. We do not promote get-rich-quick schemes or guaranteed overnight earnings.
          </p>
          <p>
            <strong>Affiliate Transparency:</strong> Some links and resources referenced across our educational roadmaps may contain affiliate partnerships. If you choose to invest in software or tools through those links, we may earn a referral commission at no additional cost to you.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-neutral-100 text-xs text-neutral-400">
          <p>© {new Date().getFullYear()} 30-Day Affiliate Marketing Starter Roadmap. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-neutral-600 transition-colors">Privacy Policy</a>
            <span>·</span>
            <a href="#" className="hover:text-neutral-600 transition-colors">Terms of Service</a>
            <span>·</span>
            <a href="#" className="hover:text-neutral-600 transition-colors">Contact Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
