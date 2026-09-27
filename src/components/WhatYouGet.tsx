import React, { useState, useEffect } from 'react';
import { 
  CORE_ROADMAP_BENEFITS, 
  ROADMAP_WEEKS, 
  ROADMAP_DAYS, 
  RoadmapDay 
} from '@/src/data/roadmapData';
import { 
  CheckCircle2, 
  Circle, 
  ChevronDown, 
  ChevronUp, 
  Copy, 
  Printer, 
  ArrowRight,
  Compass,
  Sparkles,
  Search
} from 'lucide-react';

interface WhatYouGetProps {
  onOpenDownload: () => void;
}

export const WhatYouGet: React.FC<WhatYouGetProps> = ({ onOpenDownload }) => {
  const [activeWeek, setActiveWeek] = useState<number>(1);
  const [selectedDay, setSelectedDay] = useState<number>(1);
  const [expandedDay, setExpandedDay] = useState<number | null>(1);
  const [completedDays, setCompletedDays] = useState<number[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedState, setCopiedState] = useState<boolean>(false);

  // Load completed days from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('affiliate_roadmap_completed_days');
      if (saved) {
        setCompletedDays(JSON.parse(saved));
      }
    } catch {
      // ignore
    }
  }, []);

  const toggleDayCompletion = (dayNum: number, e: React.MouseEvent) => {
    e.stopPropagation();
    const updated = completedDays.includes(dayNum)
      ? completedDays.filter(d => d !== dayNum)
      : [...completedDays, dayNum];
    setCompletedDays(updated);
    try {
      localStorage.setItem('affiliate_roadmap_completed_days', JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  const copyFullMarkdown = () => {
    const md = `# 30-Day Affiliate Marketing Starter Roadmap
From Knowing Nothing About Affiliate Marketing to Knowing Exactly What to Do Next

${ROADMAP_DAYS.map(d => `## Day ${d.day}: ${d.title} (Week ${d.week})
- Objective: ${d.objective}
- Action Item: ${d.actionItem}
- What to Avoid: ${d.whatToAvoid}
- Key Daily Question: ${d.keyQuestion}
`).join('\n')}
`;
    navigator.clipboard.writeText(md);
    setCopiedState(true);
    setTimeout(() => setCopiedState(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  const filteredDays = ROADMAP_DAYS.filter(d => {
    const matchesWeek = activeWeek === 0 || d.week === activeWeek;
    const matchesSearch = searchQuery === '' || 
      d.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.actionItem.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.objective.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesWeek && matchesSearch;
  });

  const completionPercentage = Math.round((completedDays.length / 30) * 100);

  return (
    <section id="whats-inside" className="py-16 sm:py-24 bg-white border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header - Centralized */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-red-700 bg-red-50 px-3 py-1 rounded-md border border-red-200/60 mx-auto">
            Inside The Curriculum
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black tracking-tight text-balance">
            Here's What You'll Get Inside The 30-Day Roadmap
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
            You'll get a simple structure for your first 30 days, including guidance around:
          </p>
        </div>

        {/* 10 Core Guidance Pillars (Editorial Numbering, No Pill Enclosures) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {CORE_ROADMAP_BENEFITS.map((item) => (
            <div
              key={item.number}
              className="p-5 sm:p-6 rounded-xl bg-white border border-neutral-200 shadow-xs hover:border-red-300 transition-colors flex gap-4"
            >
              <div className="text-lg font-mono font-bold text-red-600 shrink-0">
                {item.number}
              </div>
              <div className="space-y-1.5 text-left">
                <h3 className="text-base font-bold text-black leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* The Core Goal Reassurance - Centralized */}
        <div className="p-8 rounded-2xl bg-neutral-900 text-white text-center space-y-2 max-w-3xl mx-auto shadow-md">
          <p className="text-xs uppercase tracking-wider font-semibold text-red-400">
            The Realistic Standard
          </p>
          <p className="text-lg sm:text-xl font-medium leading-relaxed">
            “The goal isn't to make you an expert in 30 days.<br className="hidden sm:inline" />
            The goal is to give you direction so you know what to work on next.”
          </p>
        </div>

        {/* Interactive 30-Day Roadmap Explorer */}
        <div className="bg-white rounded-2xl border border-neutral-200 shadow-sm overflow-hidden">
          {/* Header of the Explorer - Centralized Title */}
          <div className="p-6 sm:p-8 border-b border-neutral-200 bg-neutral-50 flex flex-col items-center text-center gap-6">
            <div className="space-y-2 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-red-700 uppercase tracking-wider">
                <Compass className="w-4 h-4 text-red-600" />
                <span>Interactive Day-by-Day Roadmap</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-black">
                Explore The Exact Daily Steps (Days 1–30)
              </h3>
              <p className="text-sm text-neutral-600">
                Filter by week, mark your completed milestones, or copy the entire action plan to Notion.
              </p>
            </div>

            {/* Actions: Progress + Print + Copy */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-red-50 border border-red-200 text-xs font-semibold text-black">
                <span>Progress:</span>
                <span className="font-mono text-red-600 font-bold">{completedDays.length}/30</span>
                <span>({completionPercentage}%)</span>
              </div>

              <button
                onClick={copyFullMarkdown}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-white border border-neutral-300 text-neutral-800 hover:text-black hover:bg-neutral-50 transition-colors shadow-xs cursor-pointer"
                title="Copy entire 30 days to markdown"
              >
                <Copy className="w-3.5 h-3.5 text-red-600" />
                <span>{copiedState ? 'Copied to Clipboard!' : 'Copy Markdown'}</span>
              </button>

              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-white border border-neutral-300 text-neutral-800 hover:text-black hover:bg-neutral-50 transition-colors shadow-xs cursor-pointer"
                title="Print or Save as PDF"
              >
                <Printer className="w-3.5 h-3.5 text-red-600" />
                <span>Print Guide</span>
              </button>
            </div>
          </div>

          {/* Week Filter Controls & Search */}
          <div className="p-4 sm:p-6 border-b border-neutral-200 bg-white flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-1.5 p-1 bg-neutral-100 rounded-lg overflow-x-auto w-full sm:w-auto">
              <button
                onClick={() => setActiveWeek(0)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                  activeWeek === 0
                    ? 'bg-white text-black shadow-xs font-bold'
                    : 'text-neutral-600 hover:text-black'
                }`}
              >
                All 30 Days
              </button>
              {ROADMAP_WEEKS.map((w) => (
                <button
                  key={w.week}
                  onClick={() => setActiveWeek(w.week)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                    activeWeek === w.week
                      ? 'bg-white text-black shadow-xs font-bold'
                      : 'text-neutral-600 hover:text-black'
                  }`}
                >
                  Week {w.week}
                </button>
              ))}
            </div>

            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search steps, e.g. 'niche', 'link'..."
                className="w-full pl-9 pr-3 py-1.5 text-xs bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-hidden focus:ring-1 focus:ring-black text-black"
              />
            </div>
          </div>

          {/* Day list */}
          <div className="divide-y divide-neutral-200">
            {filteredDays.length === 0 ? (
              <div className="p-12 text-center text-neutral-500 text-sm">
                No days found matching your search. Clear the filter to see all 30 days.
              </div>
            ) : (
              filteredDays.map((dayItem) => {
                const isCompleted = completedDays.includes(dayItem.day);
                const isExpanded = expandedDay === dayItem.day;

                return (
                  <div
                    key={dayItem.day}
                    className={`transition-colors ${isCompleted ? 'bg-neutral-50' : 'hover:bg-neutral-50/70'}`}
                  >
                    <div
                      onClick={() => setExpandedDay(isExpanded ? null : dayItem.day)}
                      className="p-4 sm:p-6 flex items-start sm:items-center justify-between gap-4 cursor-pointer"
                    >
                      <div className="flex items-start sm:items-center gap-3.5 flex-1 min-w-0">
                        {/* Checkbox */}
                        <button
                          onClick={(e) => toggleDayCompletion(dayItem.day, e)}
                          className="mt-0.5 sm:mt-0 text-neutral-400 hover:text-red-600 transition-colors shrink-0"
                          title={isCompleted ? 'Mark incomplete' : 'Mark complete'}
                        >
                          {isCompleted ? (
                            <CheckCircle2 className="w-5 h-5 text-red-600 fill-red-100" />
                          ) : (
                            <Circle className="w-5 h-5 text-neutral-300 hover:text-neutral-500" />
                          )}
                        </button>

                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-500 mb-0.5">
                            <span className="font-mono font-bold text-black">
                              Day {dayItem.day}
                            </span>
                            <span aria-hidden="true">·</span>
                            <span>Week {dayItem.week}</span>
                            <span aria-hidden="true">·</span>
                            <span>{dayItem.phase}</span>
                            <span aria-hidden="true">·</span>
                            <span>~{dayItem.estimatedMinutes} mins</span>
                          </div>

                          <h4 className={`text-base font-bold ${isCompleted ? 'line-through text-neutral-400' : 'text-black'}`}>
                            {dayItem.title}
                          </h4>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 shrink-0">
                        <span className="hidden sm:inline text-xs text-neutral-500">
                          {isExpanded ? 'Hide details' : 'View daily action'}
                        </span>
                        {isExpanded ? (
                          <ChevronUp className="w-5 h-5 text-neutral-400" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-neutral-400" />
                        )}
                      </div>
                    </div>

                    {/* Expanded Day Details */}
                    {isExpanded && (
                      <div className="px-4 sm:px-6 pb-6 pt-2 border-t border-neutral-100 bg-neutral-50/60 space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-1.5">
                            <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wide">
                              Core Daily Objective
                            </span>
                            <p className="text-sm text-neutral-800 leading-relaxed">
                              {dayItem.objective}
                            </p>
                          </div>

                          <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-1.5">
                            <span className="text-xs font-semibold text-red-700 uppercase tracking-wide flex items-center gap-1">
                              <Sparkles className="w-3.5 h-3.5 text-red-600" />
                              Action Item For Today
                            </span>
                            <p className="text-sm text-black font-medium leading-relaxed">
                              {dayItem.actionItem}
                            </p>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                          <div className="p-3.5 rounded-lg bg-red-50 border border-red-200 text-neutral-800 space-y-1">
                            <span className="font-semibold text-red-700 uppercase tracking-wider block">
                              What To Avoid Today
                            </span>
                            <p className="text-neutral-700">{dayItem.whatToAvoid}</p>
                          </div>

                          <div className="p-3.5 rounded-lg bg-neutral-100 border border-neutral-200 text-neutral-800 space-y-1">
                            <span className="font-semibold text-neutral-700 uppercase tracking-wider block">
                              Daily Reflection Question
                            </span>
                            <p className="text-black italic">"{dayItem.keyQuestion}"</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>

          {/* Bottom Bar inside Explorer */}
          <div className="p-6 bg-black text-white flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <div className="font-bold text-base">
                Ready to follow this full 30-day direction?
              </div>
              <div className="text-xs text-neutral-400">
                Download the complete printable PDF workbook and offline checklists for free.
              </div>
            </div>
            <button
              onClick={onOpenDownload}
              className="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm font-bold rounded-lg transition-colors shrink-0 cursor-pointer"
            >
              Get Free Offline Pack
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
