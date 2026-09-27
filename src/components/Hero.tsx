import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, User, Phone, Mail, Sparkles, ShieldCheck } from 'lucide-react';
import productMockup from '@/src/assets/images/roadmap_mockup_1790177621046.jpg';

interface HeroProps {
  onOpenDownload?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    if (!email.trim() || !email.includes('@') || !email.includes('.')) {
      e.preventDefault();
      setError('Please enter a valid email address.');
      return;
    }
    if (!name.trim()) {
      e.preventDefault();
      setError('Please enter your name.');
      return;
    }
    if (!phone.trim()) {
      e.preventDefault();
      setError('Please enter your WhatsApp / phone number.');
      return;
    }

    setError('');
    setIsSubmitting(true);

    // Save to local storage for persistence
    try {
      const stored = localStorage.getItem('roadmap_optins') || '[]';
      const parsed = JSON.parse(stored);
      parsed.push({
        name: name.trim(),
        phone: phone.trim(),
        email: email.trim(),
        timestamp: new Date().toISOString()
      });
      localStorage.setItem('roadmap_optins', JSON.stringify(parsed));
    } catch {
      // ignore
    }

    // Allow standard POST submission to MailerLite
  };

  return (
    <section id="overview" className="relative pt-12 pb-16 md:pt-20 md:pb-24 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        {/* Top Tag */}
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-red-700 bg-red-50 px-3 py-1 rounded-md border border-red-200/70 mx-auto">
          <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
          Free 30-Day Starter Roadmap
        </div>

        {/* 1. Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-black tracking-tight leading-[1.08] text-balance max-w-4xl mx-auto">
          Stop Guessing What To Do Next In Affiliate Marketing
        </h1>

        {/* 2. Subheadline */}
        <div className="text-lg sm:text-xl text-neutral-800 leading-relaxed space-y-3 font-normal max-w-3xl mx-auto">
          <p>
            Get the free 30-Day Affiliate Marketing Starter Roadmap that gives you a simple step-by-step path to follow when you're starting from zero.
          </p>
          <div className="space-y-1.5 pt-1 text-base text-neutral-900 font-medium inline-block text-left sm:text-center">
            <div className="flex items-center justify-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0"></span>
              <span>No more jumping between YouTube videos.</span>
            </div>
            <div className="flex items-center justify-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0"></span>
              <span>No more trying 10 different strategies at once.</span>
            </div>
            <div className="flex items-center justify-center gap-2.5 text-black font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0"></span>
              <span>Just a clear direction for your next 30 days.</span>
            </div>
          </div>
        </div>

        {/* 3. Product Mock Picture */}
        <div className="pt-2 flex justify-center">
          <div className="relative group max-w-2xl w-full">
            <div className="rounded-2xl overflow-hidden border-2 border-neutral-200 shadow-xl bg-neutral-100 transition-transform duration-300 group-hover:scale-[1.01]">
              <img
                src={productMockup}
                alt="30-Day Affiliate Marketing Starter Roadmap Digital Guide Mockup"
                className="w-full h-auto object-cover aspect-16/9 block"
              />
            </div>
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-black text-white text-[11px] font-semibold uppercase tracking-wider px-3.5 py-1 rounded-full border border-neutral-700 shadow-md whitespace-nowrap flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
              <span>Free Digital Edition · Instant Access</span>
            </div>
          </div>
        </div>

        {/* 4. The Opt-in Form Directly Under The Product Mockup Picture */}
        <div className="pt-4 max-w-xl mx-auto">
          <div className="p-6 sm:p-8 rounded-2xl bg-white border-2 border-neutral-900 shadow-xl text-left space-y-5">
            <div className="text-center space-y-1">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-red-700 uppercase tracking-wider bg-red-50 border border-red-200 px-2.5 py-0.5 rounded">
                <Sparkles className="w-3.5 h-3.5 text-red-600" /> Instant Free Access
              </div>
              <h3 className="text-2xl font-extrabold text-black">
                Get Your Free Blueprint Now
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600">
                Enter your details below to receive the 30-day starter roadmap delivered straight to your inbox.
              </p>
            </div>

            {/* Direct MailerLite Form Submission -> Routes directly to your MailerLite redirect/success page */}
            <form
              action="https://assets.mailerlite.com/jsonp/1835706/forms/199415358711400014/subscribe"
              method="post"
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              {/* MailerLite Hidden Fields */}
              <input type="hidden" name="ml-submit" value="1" />
              <input type="hidden" name="anticsrf" value="true" />

              {/* Email */}
              <div>
                <label htmlFor="hero-email" className="block text-xs font-bold text-black uppercase tracking-wider mb-1.5">
                  Email <span className="text-red-600">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    id="hero-email"
                    name="fields[email]"
                    type="email"
                    required
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full pl-10 pr-3.5 py-3 text-sm bg-neutral-50 border border-neutral-300 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-red-600 focus:bg-white text-black transition-all"
                  />
                </div>
              </div>

              {/* Name */}
              <div>
                <label htmlFor="hero-name" className="block text-xs font-bold text-black uppercase tracking-wider mb-1.5">
                  Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-400">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    id="hero-name"
                    name="fields[name]"
                    type="text"
                    required
                    autoComplete="given-name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name"
                    className="w-full pl-10 pr-3.5 py-3 text-sm bg-neutral-50 border border-neutral-300 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-red-600 focus:bg-white text-black transition-all"
                  />
                </div>
              </div>

              {/* Phone / WhatsApp */}
              <div>
                <label htmlFor="hero-phone" className="block text-xs font-bold text-black uppercase tracking-wider mb-1.5">
                  Phone
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <input
                    id="hero-phone"
                    name="fields[phone]"
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+1 234 567 8900"
                    className="w-full pl-10 pr-3.5 py-3 text-sm bg-neutral-50 border border-neutral-300 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-red-600 focus:bg-white text-black transition-all"
                  />
                </div>
              </div>

              {error && (
                <p className="text-xs text-red-600 font-semibold">{error}</p>
              )}

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 bg-red-600 hover:bg-red-700 active:scale-[0.99] text-white font-extrabold text-base rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      <span>SENDING...</span>
                    </span>
                  ) : (
                    <>
                      <span>Get your free blueprint now</span>
                      <ArrowRight className="w-5 h-5 text-white" />
                    </>
                  )}
                </button>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 pt-1 text-xs text-neutral-600">
                <span className="flex items-center gap-1 font-medium text-black">
                  <CheckCircle2 className="w-3.5 h-3.5 text-red-600" /> 100% Free
                </span>
                <span aria-hidden="true" className="text-neutral-300">·</span>
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-neutral-500" /> Instant Delivery
                </span>
                <span aria-hidden="true" className="text-neutral-300">·</span>
                <span>No spam</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
