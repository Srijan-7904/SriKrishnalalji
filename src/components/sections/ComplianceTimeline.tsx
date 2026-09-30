import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar,
  AlertCircle,
  Clock,
  ArrowRight,
} from 'lucide-react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';

interface ComplianceEvent {
  id: string;
  category: 'it' | 'gst';
  dateLabel: string;
  frequency: string;
  title: string;
  applicableTo: string;
  penaltyRisk: string;
  statutorySection: string;
}

const complianceEvents: ComplianceEvent[] = [
  {
    id: 'c-1',
    category: 'gst',
    dateLabel: '11th of Every Month',
    frequency: 'Monthly',
    title: 'GSTR-1 Monthly Outward Supplies',
    applicableTo: 'Regular taxpayers with turnover > ₹5 Crores or non-QRMP',
    penaltyRisk: 'Late fee ₹50/day (₹20 for NIL). Blocks e-way bills and buyer ITC.',
    statutorySection: 'CGST Sec 37 & Rule 59',
  },
  {
    id: 'c-2',
    category: 'gst',
    dateLabel: '20th of Every Month',
    frequency: 'Monthly',
    title: 'GSTR-3B Summary Return & Tax Discharge',
    applicableTo: 'All regular registered GST taxpayers',
    penaltyRisk: '18% p.a. interest on delayed net cash tax liability + daily late fees.',
    statutorySection: 'CGST Sec 39 & Sec 50',
  },
  {
    id: 'c-3',
    category: 'it',
    dateLabel: '15th June, Sep, Dec, Mar',
    frequency: 'Quarterly',
    title: 'Advance Tax Installments (15%, 45%, 75%, 100%)',
    applicableTo: 'All assesses whose estimated tax liability exceeds ₹10,000 in a FY',
    penaltyRisk: 'Mandatory interest of 1% per month under Sections 234B & 234C.',
    statutorySection: 'Income Tax Act - Sec 208 / 211',
  },
  {
    id: 'c-4',
    category: 'it',
    dateLabel: '31st July',
    frequency: 'Annual',
    title: 'Original ITR Filing (Non-Audit Cases)',
    applicableTo: 'Salaried individuals, professionals, and non-audit business entities',
    penaltyRisk: 'Late fee up to ₹5,000 under Sec 234F. Loss of carry-forward losses.',
    statutorySection: 'Income Tax Act - Sec 139(1)',
  },
  {
    id: 'c-5',
    category: 'it',
    dateLabel: '31st October / 30th November',
    frequency: 'Annual',
    title: 'Tax Audit (44AB) & Corporate Return Filing',
    applicableTo: 'Businesses with turnover exceeding statutory audit limits',
    penaltyRisk: 'Penalty up to 0.5% of total turnover or ₹1,50,000 under Sec 271B.',
    statutorySection: 'Income Tax Act - Sec 44AB & 139(1)',
  },
  {
    id: 'c-6',
    category: 'gst',
    dateLabel: '31st December',
    frequency: 'Annual',
    title: 'GSTR-9 & GSTR-9C Annual Return & Reconciliation',
    applicableTo: 'Regular taxpayers exceeding aggregate annual turnover threshold',
    penaltyRisk: 'Late fees ₹200/day. Departmental scrutiny of ITC mismatches.',
    statutorySection: 'CGST Act - Sec 44 & Rule 80',
  },
  {
    id: 'c-7',
    category: 'it',
    dateLabel: '31st March (Within 2 Years)',
    frequency: 'Limitation Window',
    title: 'Updated Return (ITR-U) Voluntary Disclosure',
    applicableTo: 'Taxpayers correcting omitted income to avoid reassessment & penal prosecution',
    penaltyRisk: '25% to 50% additional tax payable; unavailable once Sec 148 notice is issued.',
    statutorySection: 'Income Tax Act - Sec 139(8A)',
  },
];

export interface ComplianceTimelineProps {
  onSelectEvent?: (title: string) => void;
}

export const ComplianceTimeline: React.FC<ComplianceTimelineProps> = ({ onSelectEvent }) => {
  const [filter, setFilter] = useState<'all' | 'it' | 'gst'>('all');

  const filteredEvents =
    filter === 'all'
      ? complianceEvents
      : complianceEvents.filter((item) => item.category === filter);

  return (
    <section id="compliance" className="relative py-20 md:py-32 bg-transparent border-t border-theme">
      <Container size="xl">
        <SectionHeading
          eyebrow="STATUTORY CALENDAR &amp; RISK RADAR"
          title="Tax Compliance Deadlines"
          subtitle="Stay ahead of statutory cut-offs. Prevent mandatory interest cascading, late fees, and departmental notices."
        />

        {/* Category Pills */}
        <div className="flex items-center justify-center gap-3 mb-10">
          {[
            { key: 'all', label: 'All Statutory Deadlines' },
            { key: 'it', label: 'Income Tax Acts' },
            { key: 'gst', label: 'GST Acts & Rules' },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setFilter(tab.key as 'all' | 'it' | 'gst')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                filter === tab.key
                  ? 'bg-gold-500 text-navy-950 shadow-[0_2px_12px_rgba(197,168,128,0.3)]'
                  : 'card-inner-theme text-body-theme hover:text-heading-theme hover:border-gold-500/40'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredEvents.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                whileHover={{ y: -4 }}
                className="card-theme group p-6 sm:p-7 rounded-2xl flex flex-col justify-between relative shadow-lg"
              >
                <div>
                  {/* Top Bar with Date & Category Pill */}
                  <div className="flex items-center justify-between gap-2 pb-4 border-b border-theme">
                    <span className="inline-flex items-center gap-1.5 text-xs font-serif font-bold text-gold-theme">
                      <Calendar className="w-3.5 h-3.5 text-gold-400" />
                      {item.dateLabel}
                    </span>

                    <span
                      className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded ${
                        item.category === 'it'
                          ? 'bg-blue-500/15 text-blue-400 border border-blue-500/30'
                          : 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                      }`}
                    >
                      {item.category === 'it' ? 'Income Tax' : 'GST Act'}
                    </span>
                  </div>

                  {/* Title & Section */}
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-heading-theme mt-4 group-hover:text-gold-theme transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <span className="text-[11px] font-mono text-muted-theme block mt-1">
                    Statutory Ref: {item.statutorySection}
                  </span>

                  {/* Applicability */}
                  <div className="mt-4 text-xs text-body-theme space-y-1">
                    <span className="text-muted-theme block uppercase text-[10px] tracking-wider font-semibold">
                      Applies To:
                    </span>
                    <p className="leading-relaxed">{item.applicableTo}</p>
                  </div>

                  {/* Risk Callout */}
                  <div className="mt-4 p-3 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-700 dark:text-amber-300 text-xs flex items-start gap-2">
                    <AlertCircle className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-semibold block">Statutory Non-Compliance Risk:</strong>
                      <span className="leading-relaxed">{item.penaltyRisk}</span>
                    </div>
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-6 pt-4 border-t border-theme">
                  <button
                    type="button"
                    onClick={() => onSelectEvent && onSelectEvent(item.title)}
                    className="w-full text-xs font-semibold text-gold-theme hover:text-heading-theme flex items-center justify-between cursor-pointer transition-colors"
                  >
                    <span>Consult on Compliance Filing</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Disclaimer / Reminder */}
        <div className="card-inner-theme mt-12 p-5 rounded-xl max-w-3xl mx-auto flex items-start gap-3 text-xs text-body-theme">
          <Clock className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
          <p>
            <strong className="text-heading-theme font-medium">Compliance Advisory:</strong> The Central Board of Direct Taxes (CBDT) and CBIC periodically issue circulars extending statutory dates under exceptional circumstances. We advise clients to initiate audit preparation and documentation at least 15 days prior to statutory deadlines.
          </p>
        </div>
      </Container>
    </section>
  );
};
