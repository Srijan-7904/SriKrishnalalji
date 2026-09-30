import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Clock,
  ArrowRight,
  ShieldCheck,
  FileText,
} from 'lucide-react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';

interface NoticeOption {
  id: string;
  code: string;
  title: string;
  category: string;
  riskLevel: 'High' | 'Medium' | 'Standard';
  overview: string;
  statutoryAdvice: string;
  timeline: string;
}

const noticeOptions: NoticeOption[] = [
  {
    id: 'sec-148',
    code: 'Sec 148 / 148A',
    title: 'Income Tax Reassessment Notice',
    category: 'Income Tax Act, 1961',
    riskLevel: 'High',
    overview: 'Departmental notice seeking to reopen past assessment years based on alleged escaped income or high-value transactions.',
    statutoryAdvice: 'Statutory reply must be drafted with precise jurisdictional objections under Section 148A(b) before an adverse order is passed.',
    timeline: 'Mandatory reply within 15–30 days from receipt.',
  },
  {
    id: 'sec-143-1',
    code: 'Sec 143(1) / 139(9)',
    title: 'Defective Return or Tax Demand',
    category: 'Income Tax Act, 1961',
    riskLevel: 'Medium',
    overview: 'Mismatch in TDS (Form 26AS/AIS) or disallowance of statutory deductions resulting in unexpected tax demands or withheld refunds.',
    statutoryAdvice: 'Rectification filing under Section 154 or revised return filing before the CPC demand becomes a recovery proceeding.',
    timeline: 'Immediate rectification to halt 1% per month interest under Section 220.',
  },
  {
    id: 'gst-drc-01',
    code: 'DRC-01 / DRC-01A',
    title: 'GST Show Cause Notice (SCN)',
    category: 'CGST / SGST Act, 2017',
    riskLevel: 'High',
    overview: 'Formal demand notice proposing tax liabilities, ITC reversal, and penalties under Section 73 or 74 for turnover or tax differences.',
    statutoryAdvice: 'Comprehensive legal reply with statutory reconciliation, case law defense, and personal hearing request before Adjudicating Authority.',
    timeline: 'Statutory 30-day response window before ex-parte recovery.',
  },
  {
    id: 'gst-asmt-10',
    code: 'ASMT-10',
    title: 'GST Scrutiny Notice',
    category: 'CGST / SGST Act, 2017',
    riskLevel: 'Medium',
    overview: 'Automated or officer scrutiny highlighting discrepancies between GSTR-1, GSTR-3B, and GSTR-2B Input Tax Credit.',
    statutoryAdvice: 'Filing statutory response in Form DRC-03 or ASMT-11 with supplier invoices and ledger reconciliations.',
    timeline: 'Normally 30 days to resolve before escalation to SCN DRC-01.',
  },
  {
    id: 'sec-271',
    code: 'Sec 271 / 270A',
    title: 'Penalty & Prosecution Notice',
    category: 'Direct Taxes',
    riskLevel: 'High',
    overview: 'Show-cause notices proposing penal levies (up to 200%) for under-reporting or misreporting of income.',
    statutoryAdvice: 'Substantive defense demonstrating bona-fide explanation and filing immunity application under Section 270AA.',
    timeline: 'Strict adherence to limitation dates is non-negotiable.',
  },
  {
    id: 'itr-planning',
    code: 'ITR-U / Audit',
    title: 'Updated Return & Tax Audit Defense',
    category: 'Compliance & Audit',
    riskLevel: 'Standard',
    overview: 'Filing updated returns (ITR-U) to disclose omitted income, or defending business books during comprehensive tax audit.',
    statutoryAdvice: 'Accurate tax computation, avoidance of interest cascading, and clean compliance certification.',
    timeline: 'Up to 24 months from the end of the relevant assessment year.',
  },
];

export interface TaxNoticeTriageProps {
  onSelectMatter: (matterTitle: string) => void;
}

export const TaxNoticeTriage: React.FC<TaxNoticeTriageProps> = ({ onSelectMatter }) => {
  const [selectedNoticeId, setSelectedNoticeId] = useState<string>('sec-148');
  const activeNotice = noticeOptions.find((n) => n.id === selectedNoticeId) || noticeOptions[0];

  return (
    <section id="notices" className="relative py-20 md:py-32 bg-transparent border-t border-theme">
      <Container size="xl">
        <SectionHeading
          eyebrow="STATUTORY TRIAGE ASSISTANT"
          title="Received a Tax Notice or Audit Summon?"
          subtitle="Select your notice category to understand immediate legal steps and prevent statutory defaults."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Selectable Notice Buttons (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            <span className="text-xs uppercase tracking-widest text-muted-theme font-semibold block mb-2 px-1">
              Select Your Matter / Notice Type:
            </span>

            {noticeOptions.map((item) => {
              const isSelected = item.id === selectedNoticeId;
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedNoticeId(item.id)}
                  className={`w-full text-left p-4 rounded-xl transition-all flex items-center justify-between cursor-pointer border ${
                    isSelected
                      ? 'card-theme border-gold-500/80 shadow-[0_4px_20px_rgba(197,168,128,0.18)] scale-[1.01]'
                      : 'card-inner-theme border-theme hover:border-gold-500/40 opacity-80 hover:opacity-100'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold font-serif ${
                        isSelected
                          ? 'bg-gold-500/20 text-gold-theme border border-gold-500/40'
                          : 'card-inner-theme text-muted-theme'
                      }`}
                    >
                      <FileText className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-heading-theme font-serif">
                        {item.title}
                      </h4>
                      <span className="text-xs text-muted-theme block">{item.code}</span>
                    </div>
                  </div>

                  <span
                    className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded ${
                      item.riskLevel === 'High'
                        ? 'bg-red-500/15 text-red-500 border border-red-500/30'
                        : item.riskLevel === 'Medium'
                        ? 'bg-amber-500/15 text-amber-500 border border-amber-500/30'
                        : 'bg-emerald-500/15 text-emerald-500 border border-emerald-500/30'
                    }`}
                  >
                    {item.riskLevel} Risk
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Statutory Guidance Card (7 cols) */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeNotice.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="card-theme p-7 sm:p-9 rounded-2xl relative shadow-2xl space-y-6"
              >
                {/* Header */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-theme">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-gold-theme font-bold">
                      {activeNotice.category}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-heading-theme mt-1">
                      {activeNotice.title}
                    </h3>
                  </div>

                  <span className="card-inner-theme px-3 py-1.5 rounded-lg text-xs font-mono font-semibold text-gold-theme border border-gold-500/30">
                    Statutory Ref: {activeNotice.code}
                  </span>
                </div>

                {/* Matter Overview */}
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-muted-theme font-semibold mb-2">
                    Matter Scope &amp; Legal Context:
                  </h4>
                  <p className="text-sm sm:text-base text-body-theme leading-relaxed font-normal">
                    {activeNotice.overview}
                  </p>
                </div>

                {/* Legal Advisory Checklist */}
                <div className="card-inner-theme p-5 rounded-xl border border-theme space-y-3">
                  <div className="flex items-center gap-2 text-gold-theme font-serif font-bold text-base">
                    <ShieldCheck className="w-5 h-5 text-gold-400" />
                    <span>Recommended Chamber Strategy:</span>
                  </div>
                  <p className="text-sm text-body-theme leading-relaxed">
                    {activeNotice.statutoryAdvice}
                  </p>
                </div>

                {/* Timeline Alert */}
                <div className="flex items-start gap-3 p-4 rounded-xl bg-amber-500/10 border border-amber-500/25 text-amber-700 dark:text-amber-300 text-xs sm:text-sm">
                  <Clock className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-semibold">Statutory Limitation Note:</strong>
                    <span>{activeNotice.timeline} Delay can lead to ex-parte orders or penal interest.</span>
                  </div>
                </div>

                {/* Action CTA */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-xs text-muted-theme">
                    Consultation available in person at Chet Ganj or online.
                  </span>

                  <Button
                    variant="primary"
                    size="md"
                    onClick={() => onSelectMatter(`${activeNotice.title} (${activeNotice.code})`)}
                    icon={<ArrowRight className="w-4 h-4" />}
                    className="w-full sm:w-auto"
                  >
                    Consult on this Notice
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
};
