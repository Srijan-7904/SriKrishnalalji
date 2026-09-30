import React, { useState } from 'react';
import {
  Sparkles,
  ExternalLink,
  ShieldCheck,
  Phone,
  RefreshCw,
  Lock,
} from 'lucide-react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';

export interface TaxSahayakSectionProps {
  onBookAppointment?: () => void;
}

const sampleQuestions = [
  'How to reply to Section 148A notice?',
  'What is the late fee for GSTR-3B return?',
  'Can I file ITR-U after receiving demand?',
  'What documents are needed for GST registration?',
  'How to challenge ITC mismatch in ASMT-10?',
];

export const TaxSahayakSection: React.FC<TaxSahayakSectionProps> = ({ onBookAppointment }) => {
  const [iframeKey, setIframeKey] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const handleRefresh = () => {
    setIsLoading(true);
    setIframeKey((prev) => prev + 1);
  };

  const openPopupWindow = () => {
    const width = 480;
    const height = 740;
    const left = window.screen.width - width - 40;
    const top = 60;
    const url = 'https://taxsahayak.zapier.app';
    window.open(
      url,
      'TaxSahayakAI',
      `width=${width},height=${height},left=${left},top=${top},resizable=yes,scrollbars=yes,status=no,toolbar=no,menubar=no`
    );
  };

  return (
    <section id="ai-assistant" className="relative py-20 md:py-32 bg-transparent border-t border-theme">
      <Container size="xl">
        <SectionHeading
          eyebrow="24/7 AI TAX ASSISTANT"
          title="Consult TaxSahayak AI"
          subtitle="Get instantaneous answers on Income Tax compliance, GST disputes, and filing protocols directly in your browser."
        />

        {/* Query Suggestion Pills with Click-to-Launch */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6 max-w-4xl mx-auto">
          <span className="text-xs uppercase tracking-wider text-gold-theme font-bold flex items-center gap-1.5 mr-2">
            <Sparkles className="w-3.5 h-3.5" />
            Click to Ask TaxSahayak:
          </span>
          {sampleQuestions.map((q, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => openPopupWindow()}
              className="card-inner-theme px-3.5 py-1.5 rounded-full text-xs text-body-theme hover:text-heading-theme hover:border-gold-500/50 hover:bg-gold-500/10 transition-all cursor-pointer shadow-xs flex items-center gap-1"
            >
              <span>{q}</span>
              <ExternalLink className="w-3 h-3 text-gold-400 opacity-70" />
            </button>
          ))}
        </div>

        {/* Embedded Chatbot Device Frame */}
        <div className="max-w-5xl mx-auto">
          <div className="card-theme rounded-3xl overflow-hidden shadow-2xl border border-gold-500/40 backdrop-blur-2xl">
            {/* Top Browser / App Chrome Bar */}
            <div className="card-inner-theme px-5 py-3.5 border-b border-theme flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              </div>

              {/* URL Address Badge */}
              <div className="hidden sm:flex items-center gap-2 px-4 py-1 rounded-full card-theme text-xs text-muted-theme border border-theme shadow-inner">
                <Lock className="w-3 h-3 text-emerald-500" />
                <span className="font-mono text-heading-theme font-medium">taxsahayak.zapier.app</span>
                <span className="text-[10px] text-gold-theme font-semibold uppercase tracking-wider bg-gold-500/10 px-1.5 py-0.2 rounded">
                  AI Online
                </span>
              </div>

              {/* Control Buttons */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => openPopupWindow()}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gold-500 text-navy-950 font-bold text-xs hover:brightness-110 shadow-sm transition-all cursor-pointer"
                >
                  <span>Launch Live Window</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>

                <button
                  type="button"
                  onClick={handleRefresh}
                  title="Reload chatbot"
                  className="card-inner-theme p-1.5 rounded-lg text-muted-theme hover:text-heading-theme hover:border-gold-500/40 transition-colors cursor-pointer"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Informational Sub-banner explaining Zapier X-Frame Policy & Quick Launch */}
            <div className="card-inner-theme px-5 py-2.5 border-b border-theme flex flex-col sm:flex-row items-center justify-between gap-3 text-xs bg-amber-500/10 text-amber-800 dark:text-amber-200">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse shrink-0" />
                <span>
                  <strong>Note:</strong> If the iframe preview below displays "refused to connect", Zapier security requires launching directly or allowing domain embedding in your Zapier Chatbot settings.
                </span>
              </div>
              <button
                type="button"
                onClick={() => openPopupWindow()}
                className="font-bold underline text-gold-theme hover:text-heading-theme cursor-pointer shrink-0"
              >
                Open Unrestricted Chat Window &rarr;
              </button>
            </div>

            {/* Iframe Viewport */}
            <div className="relative w-full h-[620px] sm:h-[680px] bg-white dark:bg-[#070c17]">
              {isLoading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-navy-950/80 backdrop-blur-md z-10">
                  <div className="w-12 h-12 rounded-full border-2 border-gold-500/30 border-t-gold-400 animate-spin mb-4" />
                  <p className="text-base font-semibold text-heading-theme font-serif">
                    Loading TaxSahayak AI Interface...
                  </p>
                  <span className="text-xs text-muted-theme mt-1">
                    Powered by Zapier AI &amp; Indian Statutory Knowledge Base
                  </span>
                </div>
              )}

              <iframe
                key={iframeKey}
                src="https://taxsahayak.zapier.app"
                title="TaxSahayak AI Chatbot"
                onLoad={() => setIsLoading(false)}
                className="w-full h-full border-0"
                allow="clipboard-write"
                loading="lazy"
              />
            </div>

            {/* Bottom Disclaimer & Advocate Escalation */}
            <div className="card-inner-theme p-5 border-t border-theme flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
              <div className="flex items-center gap-2 text-muted-theme">
                <ShieldCheck className="w-4 h-4 text-gold-400 shrink-0" />
                <span>
                  TaxSahayak provides instant AI preliminary guidance. For statutory notice replies, audits, and court representation, engage Sri Krishna Lal Ji.
                </span>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <Button
                  variant="primary"
                  size="sm"
                  onClick={onBookAppointment}
                  icon={<Phone className="w-3.5 h-3.5" />}
                  className="whitespace-nowrap"
                >
                  Book Advocate Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
