import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin,
  Phone,
  MessageSquare,
  Mail,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  Calendar,
  ExternalLink,
} from 'lucide-react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { siteConfig, dailyWorkingHours, serviceDropdownOptions } from '@/data/siteConfig';
import { sendConsultationEmail } from '@/lib/emailjs';

export interface ContactSectionProps {
  prefilledService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ prefilledService }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    service: prefilledService || '',
    preferredDate: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      errors.fullName = 'Full name is required.';
    }

    const cleanPhone = formData.phone.replace(/[\s-]/g, '');
    if (!cleanPhone) {
      errors.phone = 'Phone number is required.';
    } else if (!/^[+]?[0-9]{10,13}$/.test(cleanPhone)) {
      errors.phone = 'Please enter a valid 10-digit phone number.';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please provide a valid email address.';
    }

    if (!formData.service) {
      errors.service = 'Please select a service.';
    }

    if (!formData.message.trim()) {
      errors.message = 'Please provide details about your inquiry.';
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formStatus === 'submitting') return;

    if (!validate()) return;

    setFormStatus('submitting');

    const success = await sendConsultationEmail({
      fullName: formData.fullName,
      phone: formData.phone,
      email: formData.email,
      service: formData.service,
      preferredDate: formData.preferredDate,
      message: formData.message,
    });

    if (success) {
      setFormStatus('success');
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        service: '',
        preferredDate: '',
        message: '',
      });
      setFieldErrors({});
    } else {
      setFormStatus('error');
    }
  };

  return (
    <section id="contact" className="relative py-20 md:py-32 bg-transparent border-t border-theme">
      <Container size="xl">
        <SectionHeading
          eyebrow="DIRECT ACCESS TO COUNSEL"
          title="Schedule a Consultation"
          subtitle="Consult with Sri Krishna Lal Ji at our Varanasi chambers or arrange a confidential telephone evaluation."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14">
          {/* LEFT COLUMN: Offices, Contacts, Hours & Action Buttons (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between space-y-8"
          >
            {/* Office Locations */}
            <div className="card-theme p-7 rounded-2xl shadow-lg space-y-6">
              <h3 className="font-serif text-xl font-bold text-heading-theme flex items-center gap-2.5 pb-4 border-b border-theme">
                <MapPin className="w-5 h-5 text-gold-400" />
                <span>Office Locations</span>
              </h3>

              {/* Primary Office */}
              <div className="text-sm space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs uppercase font-bold tracking-wider text-gold-theme bg-gold-500/10 px-2 py-0.5 rounded">
                    Primary Chamber
                  </span>
                </div>
                <p className="font-semibold text-heading-theme mt-1">
                  Nae Basti, Chet Ganj, Ishwar Gangi
                </p>
                <p className="text-body-theme">Varanasi, Uttar Pradesh - 221001</p>
                <p className="text-xs text-gold-theme italic">
                  Landmark: Near Ishwar Gangi Crossing
                </p>
              </div>

              {/* Secondary Office */}
              <div className="text-sm space-y-1 pt-4 border-t border-theme">
                <div className="flex items-center gap-2">
                  <span className="text-xs uppercase font-bold tracking-wider text-heading-theme bg-gold-500/10 px-2 py-0.5 rounded">
                    Secondary Office
                  </span>
                </div>
                <p className="font-semibold text-heading-theme mt-1">S, Teliyabag</p>
                <p className="text-body-theme">Varanasi, Uttar Pradesh - 221001</p>
              </div>

              {/* Quick Google Maps Action */}
              <a
                href="https://maps.google.com/?q=Ishwar+Gangi+Crossing+Chet+Ganj+Varanasi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold-theme hover:underline transition-colors pt-2"
              >
                <span>View Chamber on Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Direct Contact Links */}
            <div className="card-theme p-7 rounded-2xl shadow-lg space-y-4">
              <h3 className="font-serif text-lg font-bold text-heading-theme pb-3 border-b border-theme">
                Direct Contact Lines
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                {/* Mobile Call */}
                <a
                  href={`tel:${siteConfig.contacts.primaryPhone.replace(/\s+/g, '')}`}
                  className="card-inner-theme p-3 rounded-xl flex items-center gap-3 transition-colors hover:border-gold-500/50"
                >
                  <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                  <div>
                    <span className="text-[10px] text-muted-theme block uppercase">Mobile</span>
                    <span className="font-semibold text-heading-theme">{siteConfig.contacts.primaryPhone}</span>
                  </div>
                </a>

                {/* Landline */}
                <a
                  href={`tel:${siteConfig.contacts.landline.replace(/\s+/g, '')}`}
                  className="card-inner-theme p-3 rounded-xl flex items-center gap-3 transition-colors hover:border-gold-500/50"
                >
                  <Phone className="w-4 h-4 text-muted-theme shrink-0" />
                  <div>
                    <span className="text-[10px] text-muted-theme block uppercase">Chamber Phone</span>
                    <span className="font-semibold text-heading-theme">{siteConfig.contacts.landline}</span>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${siteConfig.contacts.whatsapp.replace(/[^0-9]/g, '')}?text=Hello%20Advocate%20Sri%20Krishna%20Lal%20Ji,%20I%20would%20like%20to%20schedule%20a%20tax%20consultation.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-emerald-950/20 dark:bg-emerald-950/40 border border-emerald-600/40 flex items-center gap-3 transition-colors text-emerald-600 dark:text-emerald-300"
                >
                  <MessageSquare className="w-4 h-4 shrink-0" />
                  <div>
                    <span className="text-[10px] text-emerald-600 dark:text-emerald-400 block uppercase">WhatsApp Direct</span>
                    <span className="font-semibold text-heading-theme">{siteConfig.contacts.whatsapp}</span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${siteConfig.contacts.email}`}
                  className="card-inner-theme p-3 rounded-xl flex items-center gap-3 transition-colors hover:border-gold-500/50"
                >
                  <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                  <div className="overflow-hidden">
                    <span className="text-[10px] text-muted-theme block uppercase">Official Email</span>
                    <span className="font-semibold text-heading-theme truncate block text-xs">
                      {siteConfig.contacts.email}
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* Daily Working Hours & Emergency Note */}
            <div className="card-theme p-7 rounded-2xl shadow-lg space-y-4">
              <h3 className="font-serif text-lg font-bold text-heading-theme flex items-center gap-2 pb-3 border-b border-theme">
                <Clock className="w-4 h-4 text-gold-400" />
                <span>Working Hours</span>
              </h3>

              <div className="space-y-2 text-xs sm:text-sm">
                {dailyWorkingHours.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between py-1 border-b border-theme last:border-none"
                  >
                    <span className="text-body-theme">{item.day}</span>
                    <span className={item.hours === 'Closed' ? 'text-red-500 font-semibold' : 'text-heading-theme font-medium'}>
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-theme text-xs text-gold-theme leading-relaxed font-normal">
                <p>
                  <strong>Note:</strong> Office consultation is strictly by appointment. Emergency support is available during office hours.
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Consultation Request Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="card-theme p-8 sm:p-10 rounded-2xl relative shadow-2xl">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-heading-theme mb-2">
                Request a Consultation
              </h3>
              <p className="text-sm text-muted-theme mb-8 font-normal">
                Please fill in the details below. Sri Krishna Lal Ji will review your matter and contact you promptly.
              </p>

              {/* Status Notifications */}
              <AnimatePresence>
                {formStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-5 rounded-xl bg-emerald-950/20 dark:bg-emerald-950/80 border border-emerald-500/40 text-emerald-700 dark:text-emerald-200 mb-6 flex items-start gap-3 text-sm"
                  >
                    <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block font-semibold">Consultation Request Dispatched</strong>
                      <span>
                        Your consultation request has been sent successfully. We will contact you shortly.
                      </span>
                    </div>
                  </motion.div>
                )}

                {formStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-5 rounded-xl bg-red-950/20 dark:bg-red-950/80 border border-red-500/40 text-red-700 dark:text-red-200 mb-6 flex items-start gap-3 text-sm"
                  >
                    <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block font-semibold">Submission Interrupted</strong>
                      <span>
                        Unable to send your request right now. Please try calling or WhatsApp us directly.
                      </span>
                      <div className="mt-3 flex gap-3">
                        <a
                          href={`tel:${siteConfig.contacts.primaryPhone.replace(/\s+/g, '')}`}
                          className="underline font-medium text-heading-theme"
                        >
                          Call Now
                        </a>
                        <span>•</span>
                        <a
                          href={`https://wa.me/${siteConfig.contacts.whatsapp.replace(/[^0-9]/g, '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline font-medium text-emerald-600 dark:text-emerald-300"
                        >
                          WhatsApp Direct
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Form Element */}
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-heading-theme mb-2">
                      Full Name <span className="text-gold-400">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Srijan Sharma"
                      className="input-theme w-full px-4 py-3 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-gold-400 transition-colors"
                      disabled={formStatus === 'submitting'}
                    />
                    {fieldErrors.fullName && (
                      <span className="text-xs text-red-400 mt-1 block">{fieldErrors.fullName}</span>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-heading-theme mb-2">
                      Phone Number <span className="text-gold-400">*</span>
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 9876543210"
                      className="input-theme w-full px-4 py-3 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-gold-400 transition-colors"
                      disabled={formStatus === 'submitting'}
                    />
                    {fieldErrors.phone && (
                      <span className="text-xs text-red-400 mt-1 block">{fieldErrors.phone}</span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Email Address */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-heading-theme mb-2">
                      Email Address <span className="text-gold-400">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. name@domain.com"
                      className="input-theme w-full px-4 py-3 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-gold-400 transition-colors"
                      disabled={formStatus === 'submitting'}
                    />
                    {fieldErrors.email && (
                      <span className="text-xs text-red-400 mt-1 block">{fieldErrors.email}</span>
                    )}
                  </div>

                  {/* Service Required Dropdown */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-heading-theme mb-2">
                      Service Required <span className="text-gold-400">*</span>
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="input-theme w-full px-4 py-3 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-gold-400 transition-colors cursor-pointer"
                      disabled={formStatus === 'submitting'}
                    >
                      <option value="" disabled className="text-muted-theme">
                        Select Required Legal Service
                      </option>
                      {serviceDropdownOptions.map((opt, idx) => (
                        <option key={idx} value={opt} className="bg-navy-900 text-slate-100 dark:bg-navy-900 light:bg-white light:text-slate-900">
                          {opt}
                        </option>
                      ))}
                    </select>
                    {fieldErrors.service && (
                      <span className="text-xs text-red-400 mt-1 block">{fieldErrors.service}</span>
                    )}
                  </div>
                </div>

                {/* Preferred Date */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-heading-theme mb-2">
                    Preferred Date (Optional)
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="input-theme w-full px-4 py-3 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-gold-400 transition-colors"
                      disabled={formStatus === 'submitting'}
                    />
                    <Calendar className="w-4 h-4 text-muted-theme absolute right-4 top-3.5 pointer-events-none" />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-heading-theme mb-2">
                    Brief Summary of Your Tax Matter <span className="text-gold-400">*</span>
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your notice details, return type, GST issue, or consultation requirements..."
                    className="input-theme w-full px-4 py-3 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-gold-400 transition-colors resize-none"
                    disabled={formStatus === 'submitting'}
                  />
                  {fieldErrors.message && (
                    <span className="text-xs text-red-400 mt-1 block">{fieldErrors.message}</span>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={formStatus === 'submitting'}
                    icon={<Send className="w-4 h-4" />}
                    className="w-full"
                  >
                    {formStatus === 'submitting' ? 'Submitting Details...' : 'Request Consultation'}
                  </Button>
                </div>

                <p className="text-[11px] text-muted-theme text-center mt-3">
                  All discussions and submitted information are held in strict legal confidence.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
