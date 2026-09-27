import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-neutral-200 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand Wordmark */}
        <a href="#" className="text-base sm:text-lg font-extrabold tracking-tight text-black hover:text-red-600 transition-colors whitespace-nowrap">
          30-Day Starter Roadmap
        </a>

        {/* Clean text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-neutral-700">
          <a href="#overview" className="hover:text-red-600 transition-colors">
            Overview
          </a>
          <a href="#my-story" className="hover:text-red-600 transition-colors">
            My Story
          </a>
          <a href="#the-problem" className="hover:text-red-600 transition-colors">
            The Problem
          </a>
          <a href="#whats-inside" className="hover:text-red-600 transition-colors">
            What's Inside
          </a>
          <a href="#who-its-for" className="hover:text-red-600 transition-colors">
            Who It's For
          </a>
        </nav>

        {/* Status tag */}
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-700 bg-neutral-100 px-3 py-1.5 rounded-lg border border-neutral-200">
            <span className="w-2 h-2 rounded-full bg-red-600"></span>
            <span>Free Edition</span>
          </span>
        </div>
      </div>
    </header>
  );
};
