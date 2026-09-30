import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronDown,
  HelpCircle,
  Phone,
  MessageSquare,
  FileCheck2,
  Scale,
  ShieldCheck,
  Building,
} from 'lucide-react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { siteConfig } from '@/data/siteConfig';

interface FAQItem {
  id: string;
  category: 'it' | 'gst' | 'chamber';
  question: string;
  answer: string;
  statutoryReference?: string;
}

const faqData: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'it',
    question: 'What immediate legal action should I take upon receiving a Section 148 or 148A Notice?',
    answer:
      'Do not ignore or delay responding to an inquiry under Section 148A(b). The statutory limitation typically grants 14 to 30 days to file a reply showing cause why reassessment should not be initiated. We examine the jurisdictional validity, verify whether approval from the specified authority under Section 151 was lawfully granted, and draft an authoritative reply with supporting books and audit records before any adverse order under Section 148A(d) is passed.',
    statutoryReference: 'Income Tax Act, 1961 - Sec 148 / 148A / 151',
  },
  {
    id: 'faq-2',
    category: 'gst',
    question: 'How do you defend against GST Show Cause Notices (DRC-01 / DRC-01A) and ITC reversals?',
    answer:
      'GST notices involving mismatch between GSTR-2B and GSTR-3B, or allegations of fraudulent suppliers under Section 16(2)(c), require a rigorous reconciliation of tax invoices, e-way bills, bank payment proofs, and transportation manifests. We draft substantive legal replies citing landmark High Court rulings, demand cross-examination if third-party statements are relied upon, and personally represent your matter before the Adjudicating Authority.',
    statutoryReference: 'CGST / SGST Act, 2017 - Sec 73, 74 & Rule 142',
  },
  {
    id: 'faq-3',
    category: 'it',
    question: 'Can I file an Updated Return (ITR-U) if I omitted income or received an inquiry?',
    answer:
      'An Updated Return under Section 139(8A) can be filed within 24 months from the end of the relevant assessment year, subject to payment of additional tax (25% or 50%). However, if a search, survey, or formal notice under Section 148 has already been initiated for that assessment year, ITR-U cannot be filed. We assess your tax eligibility to ensure you choose the safest, legally complaint route.',
    statutoryReference: 'Income Tax Act, 1961 - Sec 139(8A)',
  },
  {
    id: 'faq-4',
    category: 'chamber',
    question: 'Where are your chambers located in Varanasi, and do I need a prior appointment?',
    answer:
      'Sri Krishna Lal Ji maintains two chambers in Varanasi: the Primary Chamber at Nae Basti, Chet Ganj (near Ishwar Gangi Crossing), and the Secondary Office at S, Teliyabag. To ensure dedicated personal attention and document review, consultation is strictly by prior appointment. You can schedule an appointment online or call directly.',
    statutoryReference: 'Chamber Practice: Chet Ganj & Teliyabag, Varanasi',
  },
  {
    id: 'faq-5',
    category: 'it',
    question: 'What is the procedure for filing an appeal before CIT (Appeals) or the Tax Tribunal (ITAT)?',
    answer:
      'If an adverse assessment order or penalty has been passed, an appeal must be filed within 30 days in Form 35 before the Commissioner of Income Tax (Appeals). We formulate rigorous Grounds of Appeal, draft the Statement of Facts, prepare paper books with statutory case laws, and represent you during Faceless or Personal Virtual Appellate Hearings.',
    statutoryReference: 'Income Tax Act, 1961 - Sec 246A to 254',
  },
  {
    id: 'faq-6',
    category: 'gst',
    question: 'What can be done if our GST registration has been cancelled suo-motu by the department?',
    answer:
      'If your GSTIN was cancelled due to non-filing of returns or physical address verification issues, we assist in filing an Application for Revocation of Cancellation in Form GST REG-21 within the statutory condonation period, clearing pending returns with optimized tax computations, and representing the matter before the Joint Commissioner (Appeals) if rejected.',
    statutoryReference: 'CGST Act, 2017 - Sec 30 & Rule 23',
  },
  {
    id: 'faq-7',
    category: 'chamber',
    question: 'What documents should I bring or prepare for the first case review?',
    answer:
      'For tax notices, please provide a clear copy of the notice (with DIN number), past 3 years ITR acknowledgments, AIS/TIS statement, and relevant bank statements. For GST disputes, please carry the SCN, DRC-01, GSTR-1 & 3B summary tables, and corresponding invoices. Having clean documentation enables an accurate preliminary legal evaluation.',
    statutoryReference: 'Preliminary Documentation Protocol',
  },
  {
    id: 'faq-8',
    category: 'chamber',
    question: 'Can outstation clients or businesses outside Varanasi consult with Sri Krishna Lal Ji?',
    answer:
      'Yes. In addition to in-person chamber consultations in Varanasi, we regularly represent clients across Eastern Uttar Pradesh and handle faceless assessments and virtual appellate proceedings across the country. Initial document review and strategy sessions can be conducted via scheduled telephone or video conferences.',
    statutoryReference: 'Faceless Jurisdictions & Virtual Representation',
  },
];

type CategoryFilter = 'all' | 'it' | 'gst' | 'chamber';

export const FAQSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');

  const filteredFaqs =
    activeCategory === 'all'
      ? faqData
      : faqData.filter((item) => item.category === activeCategory);

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'it':
        return <FileCheck2 className="w-4 h-4 text-gold-400" />;
      case 'gst':
        return <Scale className="w-4 h-4 text-gold-400" />;
      case 'chamber':
        return <Building className="w-4 h-4 text-gold-400" />;
      default:
        return <HelpCircle className="w-4 h-4 text-gold-400" />;
    }
  };

  return (
    <section id="faq" className="relative py-20 md:py-32 bg-transparent border-t border-theme">
      <Container size="xl">
        <SectionHeading
          eyebrow="LEGAL CLARITY &amp; PROTOCOL"
          title="Frequently Asked Legal Questions"
          subtitle="Clear answers on Income Tax notices, GST departmental disputes, and chamber representation."
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {[
            { key: 'all', label: 'All Queries' },
            { key: 'it', label: 'Income Tax & Notices' },
            { key: 'gst', label: 'GST Compliance & Disputes' },
            { key: 'chamber', label: 'Chamber & Appointments' },
          ].map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key as CategoryFilter)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                activeCategory === cat.key
                  ? 'bg-gold-500 text-navy-950 font-semibold shadow-[0_2px_12px_rgba(197,168,128,0.3)]'
                  : 'card-inner-theme text-body-theme hover:text-heading-theme hover:border-gold-500/40'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openFaqId === faq.id;
            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`card-theme rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen ? 'border-gold-500/60 shadow-[0_4px_25px_rgba(197,168,128,0.12)]' : ''
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-6 sm:p-7 flex items-start justify-between gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="card-inner-theme w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                      {getCategoryIcon(faq.category)}
                    </div>
                    <div>
                      <h3 className="font-serif text-base sm:text-lg md:text-xl font-bold text-heading-theme leading-snug">
                        {faq.question}
                      </h3>
                      {faq.statutoryReference && (
                        <span className="text-[11px] font-mono text-gold-theme block mt-1">
                          {faq.statutoryReference}
                        </span>
                      )}
                    </div>
                  </div>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    className="card-inner-theme p-1.5 rounded-lg text-heading-theme shrink-0 mt-0.5"
                  >
                    <ChevronDown className="w-4 h-4 text-gold-theme" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-1 text-sm sm:text-base text-body-theme leading-relaxed border-t border-theme font-normal">
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Help Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="card-inner-theme max-w-3xl mx-auto mt-12 p-6 sm:p-7 rounded-2xl border border-theme flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-theme shrink-0">
              <ShieldCheck className="w-5 h-5 text-gold-400" />
            </div>
            <div>
              <h4 className="font-serif text-lg font-bold text-heading-theme">
                Have a specific statutory question or notice?
              </h4>
              <p className="text-xs sm:text-sm text-muted-theme mt-0.5">
                Speak directly with Advocate Sri Krishna Lal Ji for confidential counsel.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${siteConfig.contacts.primaryPhone.replace(/\s+/g, '')}`}
              className="card-theme px-4 py-2 rounded-lg text-xs font-semibold text-heading-theme hover:text-gold-theme flex items-center gap-2 cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5 text-gold-400" />
              <span>Call Now</span>
            </a>

            <a
              href={`https://wa.me/${siteConfig.contacts.whatsapp.replace(/[^0-9]/g, '')}?text=Hello%20Advocate%20Sri%20Krishna%20Lal%20Ji,%20I%20have%20a%20legal%20query%20regarding%20my%20tax%20matter.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg text-xs font-semibold bg-emerald-600/20 text-emerald-700 dark:text-emerald-300 border border-emerald-500/40 hover:bg-emerald-600/30 flex items-center gap-2"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-500" />
              <span>WhatsApp</span>
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
