import React, { useState } from 'react';
import { X, ArrowRight, ShieldCheck, Mail, User, Phone, Sparkles, CheckCircle2 } from 'lucide-react';

const BRIDGE_PAGE_URL = 'https://30-days-roadmap-bridge-page.vercel.app/';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenVideo?: () => void;
}

export const DownloadModal: React.FC<DownloadModalProps> = ({
  isOpen,
  onClose
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim() || !email.includes('@') || !email.includes('.')) {
      setError('Please provide a valid email address.');
      return;
    }
    if (!name.trim()) {
      setError('Please provide your name.');
      return;
    }
    if (!phone.trim()) {
      setError('Please provide your phone / WhatsApp number.');
      return;
    }

    setError('');
    setIsSubmitting(true);

    // 1. Immediately open the Bridge Page in a new tab upon user click to avoid popup blocker
    try {
      window.open(BRIDGE_PAGE_URL, '_blank', 'noopener,noreferrer');
    } catch {
      // browser popup safety
    }

    // 2. Save subscriber to local storage backup
    try {
      localStorage.setItem('affiliate_roadmap_subscriber', JSON.stringify({ name: name.trim(), phone: phone.trim(), email: email.trim(), date: new Date().toISOString() }));
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

    // 3. Post to MailerLite
    try {
      const formData = new FormData();
      formData.append('ml-submit', '1');
      formData.append('anticsrf', 'true');
      formData.append('fields[name]', name.trim());
      formData.append('fields[email]', email.trim());
      formData.append('fields[phone]', phone.trim());

      await fetch('https://assets.mailerlite.com/jsonp/1835706/forms/199415358711400014/subscribe', {
        method: 'POST',
        body: formData,
        mode: 'no-cors'
      });
    } catch (err) {
      console.error('MailerLite modal submission error:', err);
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  const handleCloseModal = () => {
    setIsSubmitted(false);
    setError('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-fadeIn">
      <div className="relative w-full max-w-lg bg-white rounded-3xl border border-neutral-200 shadow-2xl p-6 sm:p-8 overflow-hidden text-black">
        {/* Close Button */}
        <button
          onClick={handleCloseModal}
          className="absolute top-5 right-5 p-2 rounded-full text-neutral-400 hover:text-black hover:bg-neutral-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-6">
          {isSubmitted ? (
            <div className="py-6 text-center space-y-5">
              <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center text-green-600 shadow-xs">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <div className="space-y-2">
                <span className="inline-block text-xs font-bold text-green-700 uppercase tracking-wider bg-green-50 border border-green-200 px-2.5 py-0.5 rounded">
                  Submission Received
                </span>
                <h3 className="text-2xl font-extrabold text-black">
                  You're All Set!
                </h3>
                <p className="text-sm text-neutral-600 max-w-sm mx-auto leading-relaxed">
                  Your details have been submitted and we've opened the <strong>30-Day Roadmap Bridge Page</strong> for you in a new tab.
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={BRIDGE_PAGE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-6 bg-red-600 hover:bg-red-700 active:scale-[0.99] text-white font-extrabold text-sm rounded-xl transition-all shadow-md hover:shadow-lg inline-flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Open 30-Day Roadmap Bridge Page</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </a>
                <p className="text-xs text-neutral-400 mt-2">
                  Didn't see the new tab? Tap the button above to continue.
                </p>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="text-xs text-neutral-500 hover:text-black underline cursor-pointer"
                >
                  Done &amp; Close
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className="text-center space-y-2">
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-red-700 bg-red-50 border border-red-200 px-3 py-1 rounded-md">
                  <Sparkles className="w-3.5 h-3.5 text-red-600" />
                  <span>Instant Access</span>
                </div>
                <h3 className="text-2xl font-extrabold text-black tracking-tight">
                  Get Your Free Blueprint Now
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed max-w-sm mx-auto">
                  Enter your details below to receive the complete 30-day starter roadmap delivered straight to your inbox.
                </p>
              </div>

              <form
                action="https://assets.mailerlite.com/jsonp/1835706/forms/199415358711400014/subscribe"
                method="post"
                onSubmit={handleSubmit}
                className="space-y-4 text-left"
              >
                {/* Hidden fields */}
                <input type="hidden" name="ml-submit" value="1" />
                <input type="hidden" name="anticsrf" value="true" />

                <div>
                  <label htmlFor="modal-email" className="block text-xs font-bold text-neutral-800 uppercase tracking-wider mb-1.5">
                    Email Address <span className="text-red-600">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <input
                      id="modal-email"
                      name="fields[email]"
                      type="email"
                      required
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@example.com"
                      className="w-full pl-9 pr-3.5 py-2.5 text-sm bg-neutral-50 border border-neutral-300 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-red-600 focus:bg-white transition-all text-black"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="modal-name" className="block text-xs font-bold text-neutral-800 uppercase tracking-wider mb-1.5">
                    Your Name <span className="text-red-600">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-400">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      id="modal-name"
                      name="fields[name]"
                      type="text"
                      required
                      autoComplete="given-name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your Name"
                      className="w-full pl-9 pr-3.5 py-2.5 text-sm bg-neutral-50 border border-neutral-300 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-red-600 focus:bg-white transition-all text-black"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="modal-phone" className="block text-xs font-bold text-neutral-800 uppercase tracking-wider mb-1.5">
                    Phone / WhatsApp Number <span className="text-red-600">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-400">
                      <Phone className="w-4 h-4" />
                    </div>
                    <input
                      id="modal-phone"
                      name="fields[phone]"
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+1 234 567 8900"
                      className="w-full pl-9 pr-3.5 py-2.5 text-sm bg-neutral-50 border border-neutral-300 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-red-600 focus:bg-white transition-all text-black"
                    />
                  </div>
                </div>

                {error && <p className="text-xs text-red-600 font-semibold mt-1">{error}</p>}

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 bg-red-600 hover:bg-red-700 active:scale-[0.99] text-white font-extrabold text-sm rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                  >
                    {isSubmitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <span>Get your free blueprint now</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-center gap-2 text-xs text-neutral-500 pt-1">
                  <ShieldCheck className="w-4 h-4 text-neutral-400" />
                  <span>Instant delivery. No spam, ever.</span>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
