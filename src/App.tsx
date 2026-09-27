/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SupportingPromise } from './components/SupportingPromise';
import { PersonalStory } from './components/PersonalStory';
import { ProblemAgitation } from './components/ProblemAgitation';
import { WhatYouGet } from './components/WhatYouGet';
import { TheBigReframe } from './components/TheBigReframe';
import { WhoIsItFor } from './components/WhoIsItFor';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { DownloadModal } from './components/DownloadModal';

export default function App() {
  const [isDownloadOpen, setIsDownloadOpen] = useState<boolean>(false);

  const handleOpenDownload = () => {
    setIsDownloadOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-black selection:bg-red-100 selection:text-red-900">
      {/* Top Bar Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* 1. Hero Section: Headline -> Subheadline -> Product Mock Picture -> Opt-in Form connected to MailerLite -> Button */}
        <Hero onOpenDownload={handleOpenDownload} />

        {/* 2. The Supporting Promise */}
        <SupportingPromise onOpenDownload={handleOpenDownload} />

        {/* 3. My Story (with your picture & personal journey) */}
        <PersonalStory onOpenDownload={handleOpenDownload} />

        {/* 4. Agitate The Problem */}
        <ProblemAgitation />

        {/* 5. What They'll Get + Interactive 30-Day Action Guide */}
        <WhatYouGet onOpenDownload={handleOpenDownload} />

        {/* 6. The Big Reframe */}
        <TheBigReframe />

        {/* 7. Who It's For vs Who It's Not For */}
        <WhoIsItFor />

        {/* 8. Final Decision CTA */}
        <FinalCTA onOpenDownload={handleOpenDownload} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modal */}
      <DownloadModal
        isOpen={isDownloadOpen}
        onClose={() => setIsDownloadOpen(false)}
      />
    </div>
  );
}
