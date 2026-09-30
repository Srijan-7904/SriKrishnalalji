import React, { useState } from 'react';
import {
  Phone,
  MessageSquare,
  Calendar,
  Bot,
  Sparkles,
  Landmark,
} from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export interface FloatingActionsBarProps {
  onBookAppointment: () => void;
}

export const FloatingActionsBar: React.FC<FloatingActionsBarProps> = ({ onBookAppointment }) => {
  const [hovered, setHovered] = useState<string | null>(null);

  const openChatbot = () => {
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
      {/* DESKTOP & TABLET: Refined Floating Action Dock */}
      <aside
        aria-label="Quick Actions Dock"
        className="fixed right-3 md:right-4 top-1/2 -translate-y-1/2 z-[100] hidden sm:flex flex-col items-end pointer-events-auto"
      >
        <div className="bg-white/95 dark:bg-[#080e1a]/95 p-2 rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.12)] dark:shadow-[0_16px_48px_rgba(0,0,0,0.7)] border border-slate-200/90 dark:border-gold-500/30 backdrop-blur-2xl flex flex-col items-center gap-2 overflow-visible transition-all">
          {/* 1. Chambers Active Beacon */}
          <div
            onMouseEnter={() => setHovered('chambers')}
            onMouseLeave={() => setHovered(null)}
            title="Legal Chambers Open • Varanasi"
            className="group relative flex items-center justify-center w-11 h-11 rounded-xl bg-slate-100/90 dark:bg-slate-900/90 hover:bg-emerald-500/10 dark:hover:bg-emerald-950/40 border border-slate-200/80 dark:border-slate-800 hover:border-emerald-500/40 text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 cursor-pointer shadow-xs transition-all"
          >
            <Landmark className="w-5 h-5 transition-transform group-hover:scale-105" />
            <span className="absolute top-1.5 right-1.5 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 ring-2 ring-white dark:ring-[#080e1a]" />
            </span>

            {/* Hover Tooltip / Flyout Badge */}
            <div
              className={`absolute right-[calc(100%+12px)] top-1/2 -translate-y-1/2 whitespace-nowrap px-4 py-2.5 rounded-xl bg-white/98 dark:bg-[#070d18] text-slate-900 dark:text-[#f8fafc] border border-slate-200/90 dark:border-gold-500/40 shadow-[0_12px_32px_rgba(0,0,0,0.14)] dark:shadow-[0_16px_40px_rgba(0,0,0,0.85)] z-[999] flex items-center gap-3 transition-all duration-200 pointer-events-none ${
                hovered === 'chambers'
                  ? 'opacity-100 visible translate-x-0'
                  : 'opacity-0 invisible translate-x-3'
              }`}
            >
              <div className="w-7 h-7 rounded-lg bg-emerald-500/15 dark:bg-emerald-500/20 border border-emerald-500/30 dark:border-emerald-500/40 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
                <Landmark className="w-4 h-4" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-600 dark:text-emerald-400">
                  Legal Chambers Active
                </span>
                <span className="text-sm font-bold text-slate-900 dark:text-white tracking-wide">
                  Chambers Open <span className="text-amber-600 dark:text-gold-400 font-medium">• Varanasi</span>
                </span>
              </div>
              <span className="absolute top-1/2 -translate-y-1/2 -right-2 w-0 h-0 border-y-[6px] border-y-transparent border-l-[8px] border-l-white dark:border-l-[#070d18]" />
            </div>
          </div>

          <div className="w-6 h-px bg-slate-200/80 dark:bg-slate-800/80 my-0.5" />

          {/* 2. Direct Call Icon */}
          <a
            href={`tel:${siteConfig.contacts.primaryPhone.replace(/\s+/g, '')}`}
            onMouseEnter={() => setHovered('phone')}
            onMouseLeave={() => setHovered(null)}
            title={`Call Advocate: ${siteConfig.contacts.primaryPhone}`}
            aria-label={`Call ${siteConfig.contacts.primaryPhone}`}
            className="group relative flex items-center justify-center w-11 h-11 rounded-xl bg-slate-100/90 dark:bg-slate-900/90 hover:bg-amber-500/15 dark:hover:bg-amber-500/20 border border-slate-200/80 dark:border-slate-800 hover:border-amber-400/50 dark:hover:border-gold-500/50 text-slate-700 dark:text-slate-300 hover:text-amber-700 dark:hover:text-gold-400 shadow-xs transition-all cursor-pointer"
          >
            <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />

            {/* Hover Tooltip */}
            <div
              className={`absolute right-[calc(100%+12px)] top-1/2 -translate-y-1/2 whitespace-nowrap px-4 py-2.5 rounded-xl bg-white/98 dark:bg-[#070d18] text-slate-900 dark:text-[#f8fafc] border border-slate-200/90 dark:border-gold-500/40 shadow-[0_12px_32px_rgba(0,0,0,0.14)] dark:shadow-[0_16px_40px_rgba(0,0,0,0.85)] z-[999] flex items-center gap-3 transition-all duration-200 pointer-events-none ${
                hovered === 'phone'
                  ? 'opacity-100 visible translate-x-0'
                  : 'opacity-0 invisible translate-x-3'
              }`}
            >
              <div className="w-7 h-7 rounded-lg bg-amber-500/15 dark:bg-gold-500/20 border border-amber-500/30 dark:border-gold-500/40 flex items-center justify-center text-amber-700 dark:text-gold-400 shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[10px] uppercase font-bold tracking-widest text-amber-700 dark:text-gold-400">
                  Direct Advocate Call
                </span>
                <span className="text-sm font-bold text-slate-900 dark:text-white font-mono tracking-wider">
                  {siteConfig.contacts.primaryPhone}
                </span>
              </div>
              <span className="absolute top-1/2 -translate-y-1/2 -right-2 w-0 h-0 border-y-[6px] border-y-transparent border-l-[8px] border-l-white dark:border-l-[#070d18]" />
            </div>
          </a>

          {/* 3. WhatsApp Icon */}
          <a
            href="https://wa.me/919415996748?text=Hello%20Advocate%20Sri%20Krishna%20Lal%20Ji,%20I%20would%20like%20to%20consult%20regarding%20a%20tax%20matter."
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setHovered('whatsapp')}
            onMouseLeave={() => setHovered(null)}
            title="Chat on WhatsApp (+91 9415996748)"
            aria-label="WhatsApp Legal Chamber"
            className="group relative flex items-center justify-center w-11 h-11 rounded-xl bg-slate-100/90 dark:bg-slate-900/90 hover:bg-emerald-500/15 dark:hover:bg-emerald-950/40 border border-slate-200/80 dark:border-slate-800 hover:border-emerald-500/50 text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 shadow-xs transition-all cursor-pointer"
          >
            <MessageSquare className="w-5 h-5 group-hover:scale-110 transition-transform" />

            {/* Hover Tooltip */}
            <div
              className={`absolute right-[calc(100%+12px)] top-1/2 -translate-y-1/2 whitespace-nowrap px-4 py-2.5 rounded-xl bg-white/98 dark:bg-[#070d18] text-slate-900 dark:text-[#f8fafc] border border-slate-200/90 dark:border-emerald-500/40 shadow-[0_12px_32px_rgba(0,0,0,0.14)] dark:shadow-[0_16px_40px_rgba(0,0,0,0.85)] z-[999] flex items-center gap-3 transition-all duration-200 pointer-events-none ${
                hovered === 'whatsapp'
                  ? 'opacity-100 visible translate-x-0'
                  : 'opacity-0 invisible translate-x-3'
              }`}
            >
              <div className="w-7 h-7 rounded-lg bg-emerald-500/15 dark:bg-emerald-500/20 border border-emerald-500/30 dark:border-emerald-500/40 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
                <MessageSquare className="w-4 h-4" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-600 dark:text-emerald-400">
                  Instant Chamber Chat
                </span>
                <span className="text-sm font-bold text-slate-900 dark:text-white tracking-wide">
                  WhatsApp Direct <span className="text-emerald-600 dark:text-emerald-300 font-mono text-xs">(+91 9415996748)</span>
                </span>
              </div>
              <span className="absolute top-1/2 -translate-y-1/2 -right-2 w-0 h-0 border-y-[6px] border-y-transparent border-l-[8px] border-l-white dark:border-l-[#070d18]" />
            </div>
          </a>

          {/* 4. Book Legal Consultation Icon (Highlighted Action) */}
          <button
            type="button"
            onClick={onBookAppointment}
            onMouseEnter={() => setHovered('book')}
            onMouseLeave={() => setHovered(null)}
            title="Book Legal Consultation"
            aria-label="Book Consultation"
            className="group relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-amber-600 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-500 text-white shadow-[0_4px_14px_rgba(217,119,6,0.32)] dark:shadow-[0_4px_16px_rgba(245,158,11,0.25)] border border-amber-400/50 hover:brightness-105 active:scale-95 transition-all cursor-pointer"
          >
            <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform text-white" />

            {/* Hover Tooltip */}
            <div
              className={`absolute right-[calc(100%+12px)] top-1/2 -translate-y-1/2 whitespace-nowrap px-4 py-2.5 rounded-xl bg-white/98 dark:bg-[#070d18] text-slate-900 dark:text-[#f8fafc] border border-slate-200/90 dark:border-gold-500/40 shadow-[0_12px_32px_rgba(0,0,0,0.14)] dark:shadow-[0_16px_40px_rgba(0,0,0,0.85)] z-[999] flex items-center gap-3 transition-all duration-200 pointer-events-none ${
                hovered === 'book'
                  ? 'opacity-100 visible translate-x-0'
                  : 'opacity-0 invisible translate-x-3'
              }`}
            >
              <div className="w-7 h-7 rounded-lg bg-amber-500/15 dark:bg-gold-500/20 border border-amber-500/30 dark:border-gold-500/40 flex items-center justify-center text-amber-700 dark:text-gold-400 shrink-0">
                <Calendar className="w-4 h-4" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[10px] uppercase font-bold tracking-widest text-amber-700 dark:text-gold-400">
                  Advocate Appointment
                </span>
                <span className="text-sm font-bold text-slate-900 dark:text-white tracking-wide">
                  Book Legal Consultation
                </span>
              </div>
              <span className="absolute top-1/2 -translate-y-1/2 -right-2 w-0 h-0 border-y-[6px] border-y-transparent border-l-[8px] border-l-white dark:border-l-[#070d18]" />
            </div>
          </button>

          {/* 5. AI Chatbot Icon (TaxSahayak) */}
          <button
            type="button"
            onClick={openChatbot}
            onMouseEnter={() => setHovered('bot')}
            onMouseLeave={() => setHovered(null)}
            title="Ask TaxSahayak AI Assistant"
            aria-label="Ask TaxSahayak AI"
            className="group relative flex items-center justify-center w-11 h-11 rounded-xl bg-slate-100/90 dark:bg-slate-900/90 hover:bg-amber-500/15 dark:hover:bg-amber-500/20 border border-slate-200/80 dark:border-slate-800 hover:border-amber-400/50 dark:hover:border-gold-500/50 text-slate-700 dark:text-slate-300 hover:text-amber-700 dark:hover:text-gold-400 shadow-xs transition-all cursor-pointer"
          >
            <Bot className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <Sparkles className="w-2.5 h-2.5 text-amber-500 dark:text-gold-300 absolute top-1.5 right-1.5" />

            {/* Hover Tooltip */}
            <div
              className={`absolute right-[calc(100%+12px)] top-1/2 -translate-y-1/2 whitespace-nowrap px-4 py-2.5 rounded-xl bg-white/98 dark:bg-[#070d18] text-slate-900 dark:text-[#f8fafc] border border-slate-200/90 dark:border-gold-500/40 shadow-[0_12px_32px_rgba(0,0,0,0.14)] dark:shadow-[0_16px_40px_rgba(0,0,0,0.85)] z-[999] flex items-center gap-3 transition-all duration-200 pointer-events-none ${
                hovered === 'bot'
                  ? 'opacity-100 visible translate-x-0'
                  : 'opacity-0 invisible translate-x-3'
              }`}
            >
              <div className="w-7 h-7 rounded-lg bg-amber-500/15 dark:bg-gold-500/20 border border-amber-500/30 dark:border-gold-500/40 flex items-center justify-center text-amber-700 dark:text-gold-400 shrink-0">
                <Bot className="w-4 h-4" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[10px] uppercase font-bold tracking-widest text-amber-700 dark:text-gold-400">
                  24/7 Tax Chatbot
                </span>
                <span className="text-sm font-bold text-slate-900 dark:text-white tracking-wide">
                  Ask TaxSahayak AI
                </span>
              </div>
              <span className="absolute top-1/2 -translate-y-1/2 -right-2 w-0 h-0 border-y-[6px] border-y-transparent border-l-[8px] border-l-white dark:border-l-[#070d18]" />
            </div>
          </button>
        </div>
      </aside>

      {/* MOBILE: Fixed Bottom Pill Bar with Icons */}
      <aside
        aria-label="Mobile Quick Actions"
        className="fixed bottom-3 left-1/2 -translate-x-1/2 z-40 w-[calc(100%-2rem)] max-w-sm sm:hidden"
      >
        <div className="bg-white/95 dark:bg-[#080e1a]/95 rounded-full p-2 shadow-[0_10px_30px_rgba(0,0,0,0.15)] dark:shadow-[0_14px_40px_rgba(0,0,0,0.7)] border border-slate-200/90 dark:border-gold-500/30 backdrop-blur-2xl flex items-center justify-around gap-2">
          {/* Chambers Open Status Beacon */}
          <div
            className="relative flex items-center justify-center w-10 h-10 rounded-full bg-slate-100/90 dark:bg-slate-900/90 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-800"
            title="Chambers Open • Varanasi"
          >
            <Landmark className="w-4 h-4" />
            <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 ring-2 ring-white dark:ring-[#080e1a]" />
            </span>
          </div>

          {/* Direct Call */}
          <a
            href={`tel:${siteConfig.contacts.primaryPhone.replace(/\s+/g, '')}`}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-100/90 dark:bg-slate-900/90 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-800"
            title="Call Advocate Sri Krishna Lal Ji"
            aria-label="Call Advocate"
          >
            <Phone className="w-4 h-4" />
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/919415996748?text=Hello%20Advocate%20Sri%20Krishna%20Lal%20Ji,%20I%20would%20like%20to%20consult%20regarding%20a%20tax%20matter."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-100/90 dark:bg-slate-900/90 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-800"
            title="WhatsApp Legal Chamber"
            aria-label="WhatsApp"
          >
            <MessageSquare className="w-4 h-4" />
          </a>

          {/* AI Chatbot */}
          <button
            type="button"
            onClick={openChatbot}
            className="relative flex items-center justify-center w-10 h-10 rounded-full bg-slate-100/90 dark:bg-slate-900/90 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-800"
            title="Ask TaxSahayak AI"
            aria-label="Ask TaxSahayak AI"
          >
            <Bot className="w-4 h-4" />
            <Sparkles className="w-2 h-2 text-amber-500 dark:text-amber-400 absolute top-1 right-1" />
          </button>

          {/* Book Consultation */}
          <button
            type="button"
            onClick={onBookAppointment}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-amber-600 via-amber-500 to-amber-600 text-white shadow-md shadow-amber-500/25 border border-amber-400/50 font-bold"
            title="Book Legal Consultation"
            aria-label="Book Consultation"
          >
            <Calendar className="w-4 h-4" />
          </button>
        </div>
      </aside>
    </>
  );
};
