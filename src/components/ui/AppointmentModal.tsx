import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle, AlertCircle, Calendar, ShieldCheck } from 'lucide-react';
import { Button } from './Button';
import { serviceDropdownOptions, siteConfig } from '@/data/siteConfig';
import { sendConsultationEmail } from '@/lib/emailjs';

export interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  initialService = '',
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    service: initialService || serviceDropdownOptions[0],
    preferredDate: '',
    message: '',
  });

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'submitting') return;

    if (!formData.fullName.trim() || !formData.phone.trim() || !formData.email.trim()) {
      setErrorMsg('Please complete all required fields.');
      return;
    }

    setStatus('submitting');
    setErrorMsg('');

    const success = await sendConsultationEmail({
      fullName: formData.fullName,
      phone: formData.phone,
      email: formData.email,
      service: formData.service,
      preferredDate: formData.preferredDate,
      message: formData.message || 'Direct consultation requested via quick modal.',
    });

    if (success) {
      setStatus('success');
      setTimeout(() => {
        onClose();
        setStatus('idle');
      }, 3000);
    } else {
      setStatus('error');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-navy-950/85 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="card-theme relative w-full max-w-lg rounded-2xl p-6 sm:p-8 shadow-2xl z-10 my-8"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close dialog"
              className="absolute top-5 right-5 p-2 rounded-lg text-muted-theme hover:text-heading-theme hover:bg-gold-500/10 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-1">
              <ShieldCheck className="w-4 h-4 text-gold-400" />
              <span className="text-xs uppercase tracking-widest text-gold-theme font-semibold">
                CHAMBER APPOINTMENT
              </span>
            </div>

            <h3 className="font-serif text-2xl font-bold text-heading-theme">
              Schedule Consultation
            </h3>

            <p className="text-xs sm:text-sm text-muted-theme mt-1 mb-6">
              Connect with Advocate Sri Krishna Lal Ji for authoritative tax evaluation.
            </p>

            {status === 'success' ? (
              <div className="p-6 rounded-xl bg-emerald-950/20 dark:bg-emerald-950/80 border border-emerald-500/40 text-emerald-700 dark:text-emerald-200 text-center space-y-2">
                <CheckCircle className="w-8 h-8 text-emerald-500 mx-auto" />
                <h4 className="font-semibold text-lg">Request Received</h4>
                <p className="text-xs text-emerald-600 dark:text-emerald-300">
                  Your consultation request has been sent successfully. We will contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {errorMsg && (
                  <div className="p-3 rounded-lg bg-red-950/20 dark:bg-red-950/60 border border-red-500/40 text-red-600 dark:text-red-200 text-xs">
                    {errorMsg}
                  </div>
                )}

                {status === 'error' && (
                  <div className="p-3 rounded-lg bg-red-950/20 dark:bg-red-950/60 border border-red-500/40 text-red-600 dark:text-red-200 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>Unable to send request. Call us at {siteConfig.contacts.primaryPhone}</span>
                  </div>
                )}

                <div>
                  <label className="block text-xs font-semibold text-heading-theme mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Your legal or business name"
                    className="input-theme w-full px-3.5 py-2.5 rounded-lg text-sm focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-heading-theme mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="10-digit number"
                      className="input-theme w-full px-3.5 py-2.5 rounded-lg text-sm focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-heading-theme mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@email.com"
                      className="input-theme w-full px-3.5 py-2.5 rounded-lg text-sm focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-heading-theme mb-1">
                      Service *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="input-theme w-full px-3.5 py-2.5 rounded-lg text-sm focus:outline-none cursor-pointer"
                    >
                      {serviceDropdownOptions.map((opt, i) => (
                        <option key={i} value={opt} className="bg-navy-900 text-slate-100 dark:bg-navy-900 light:bg-white light:text-slate-900">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-heading-theme mb-1">
                      Preferred Date
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="input-theme w-full px-3.5 py-2.5 rounded-lg text-sm focus:outline-none"
                      />
                      <Calendar className="w-3.5 h-3.5 text-muted-theme absolute right-3 top-3 pointer-events-none" />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-heading-theme mb-1">
                    Matter Summary (Optional)
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Brief description of your tax matter..."
                    className="input-theme w-full px-3.5 py-2.5 rounded-lg text-sm focus:outline-none resize-none"
                  />
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    disabled={status === 'submitting'}
                    icon={<Send className="w-4 h-4" />}
                    className="w-full"
                  >
                    {status === 'submitting' ? 'Submitting...' : 'Request Consultation'}
                  </Button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
