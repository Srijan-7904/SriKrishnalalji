import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Maximize2,
  Minimize2,
  ExternalLink,
  Bot,
  Sparkles,
  Phone,
  ShieldCheck,
  RefreshCw,
} from 'lucide-react';

export interface TaxSahayakWidgetProps {
  onBookAppointment?: () => void;
}

export const TaxSahayakWidget: React.FC<TaxSahayakWidgetProps> = ({ onBookAppointment }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [iframeKey, setIframeKey] = useState(0);

  const handleRefresh = () => {
    setIsLoading(true);
    setIframeKey((prev) => prev + 1);
  };

  const openPopupWindow = () => {
    const width = 480;
    const height = 740;
    const left = window.screen.width - width - 30;
    const top = 60;
    window.open(
      'https://taxsahayak.zapier.app',
      'TaxSahayakAI',
      `width=${width},height=${height},left=${left},top=${top},resizable=yes,scrollbars=yes,status=no,toolbar=no,menubar=no`
    );
  };

  return (
    <>
      {/* Floating Launcher Button (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-40">
        <AnimatePresence>
          {!isOpen && (
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(true)}
              className="group flex items-center gap-3 px-4 py-3 rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-amber-500 text-navy-950 font-bold shadow-[0_8px_30px_rgba(197,168,128,0.45)] hover:shadow-[0_12px_40px_rgba(197,168,128,0.65)] transition-all cursor-pointer border border-gold-300/40"
              aria-label="Open TaxSahayak AI Assistant"
            >
              {/* Bot Avatar Icon with pulsing ring */}
              <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-navy-950 text-gold-400 shadow-inner">
                <Bot className="w-5 h-5" />
                <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-navy-950" />
              </div>

              <div className="flex flex-col text-left">
                <span className="text-xs uppercase tracking-wider font-extrabold text-navy-950 flex items-center gap-1">
                  TaxSahayak AI
                  <Sparkles className="w-3 h-3 text-navy-900 fill-navy-900" />
                </span>
                <span className="text-[10px] text-navy-950/80 font-medium">Ask Tax Questions 24/7</span>
              </div>
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Floating Chat Modal / Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.92 }}
            transition={{ type: 'spring', damping: 26, stiffness: 280 }}
            className={`fixed z-50 transition-all duration-300 ${
              isExpanded
                ? 'inset-3 sm:inset-6 md:inset-10 lg:inset-16 max-w-5xl mx-auto my-auto h-[calc(100vh-3rem)]'
                : 'bottom-4 right-4 sm:bottom-6 sm:right-6 w-[calc(100vw-2rem)] sm:w-[440px] md:w-[480px] h-[660px] max-h-[calc(100vh-2.5rem)]'
            }`}
          >
            <div className="card-theme h-full rounded-2xl sm:rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.6)] border border-gold-500/50 flex flex-col overflow-hidden backdrop-blur-2xl">
              {/* Header Bar */}
              <div className="card-inner-theme px-4 py-3.5 sm:px-5 sm:py-4 border-b border-theme flex items-center justify-between gap-3 shrink-0">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-gold-500 to-amber-600 flex items-center justify-center text-navy-950 font-bold shadow-md">
                    <Bot className="w-6 h-6" />
                    <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-navy-950 animate-pulse" />
                  </div>
                  <div>
                    <h3 className="font-serif text-base sm:text-lg font-bold text-heading-theme flex items-center gap-1.5 leading-snug">
                      <span>TaxSahayak AI</span>
                      <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-gold-500/20 text-gold-theme border border-gold-500/30">
                        Online
                      </span>
                    </h3>
                    <p className="text-[11px] text-muted-theme">
                      Chamber Tax &amp; GST Assistant
                    </p>
                  </div>
                </div>

                {/* Window Action Controls */}
                <div className="flex items-center gap-1 sm:gap-1.5 text-muted-theme">
                  {/* Popout Window (Bypasses iframe X-Frame-Options) */}
                  <button
                    type="button"
                    onClick={openPopupWindow}
                    title="Open standalone popout window (bypasses iframe restrictions)"
                    className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-gold-500/15 text-gold-theme hover:bg-gold-500/25 border border-gold-500/30 text-xs font-semibold transition-colors cursor-pointer"
                  >
                    <span>Popout</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>

                  {/* Refresh Iframe */}
                  <button
                    type="button"
                    onClick={handleRefresh}
                    title="Reload chatbot"
                    className="p-1.5 rounded-lg hover:text-heading-theme hover:bg-gold-500/10 transition-colors cursor-pointer"
                  >
                    <RefreshCw className="w-4 h-4" />
                  </button>

                  {/* Expand / Minimize Window Size */}
                  <button
                    type="button"
                    onClick={() => setIsExpanded(!isExpanded)}
                    title={isExpanded ? 'Restore window size' : 'Expand window'}
                    className="hidden sm:block p-1.5 rounded-lg hover:text-heading-theme hover:bg-gold-500/10 transition-colors cursor-pointer"
                  >
                    {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                  </button>

                  {/* Close Window */}
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    title="Close"
                    className="p-1.5 rounded-lg hover:text-heading-theme hover:bg-red-500/10 hover:text-red-400 transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Informational Sub-banner if Zapier blocks cross-origin framing */}
              <div className="card-inner-theme px-4 py-2 border-b border-theme flex items-center justify-between gap-2 text-[11px] text-muted-theme bg-amber-500/5">
                <span>Zapier security may require opening directly:</span>
                <button
                  type="button"
                  onClick={openPopupWindow}
                  className="font-bold text-gold-theme hover:underline flex items-center gap-1 cursor-pointer shrink-0"
                >
                  <span>Launch Live Window</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </div>

              {/* Iframe Body Area */}
              <div className="relative flex-1 bg-white dark:bg-[#0b1120] overflow-hidden">
                {isLoading && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-navy-950/80 backdrop-blur-md z-10">
                    <div className="w-12 h-12 rounded-full border-2 border-gold-500/30 border-t-gold-400 animate-spin mb-4" />
                    <p className="text-sm font-semibold text-heading-theme font-serif">
                      Connecting to TaxSahayak AI...
                    </p>
                    <span className="text-xs text-muted-theme mt-1">
                      Loading legal &amp; tax guidance database
                    </span>
                  </div>
                )}

                <iframe
                  key={iframeKey}
                  src="https://taxsahayak.zapier.app"
                  title="TaxSahayak AI Legal Assistant"
                  onLoad={() => setIsLoading(false)}
                  className="w-full h-full border-0"
                  allow="clipboard-write"
                  loading="lazy"
                />
              </div>

              {/* Footer Advisory Bar */}
              <div className="card-inner-theme px-4 py-2.5 sm:px-5 sm:py-3 border-t border-theme flex flex-wrap items-center justify-between gap-2 text-xs">
                <div className="flex items-center gap-1.5 text-[11px] text-muted-theme">
                  <ShieldCheck className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                  <span>AI answers for preliminary guidance only.</span>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setIsOpen(false);
                    if (onBookAppointment) onBookAppointment();
                  }}
                  className="text-xs font-bold text-gold-theme hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <Phone className="w-3 h-3 text-gold-400" />
                  <span>Consult Advocate Sri Krishna Lal Ji</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
