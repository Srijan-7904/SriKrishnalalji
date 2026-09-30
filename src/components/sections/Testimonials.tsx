import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { testimonials } from '@/data/siteConfig';

export const Testimonials: React.FC = () => {
  const [mobileIndex, setMobileIndex] = useState(0);

  const nextTestimonial = () => {
    setMobileIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setMobileIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="relative py-20 md:py-32 bg-transparent border-t border-theme">
      <Container size="xl">
        <SectionHeading
          eyebrow="CLIENT EXPERIENCES"
          title="Trust Earned Across Decades"
          subtitle="Professional guidance built around clarity, timeliness, and reliable support."
        />

        {/* Desktop & Tablet Grid (4 columns) */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] as const }}
              whileHover={{ y: -4 }}
              className="card-theme flex flex-col justify-between p-7 rounded-2xl shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1 text-gold-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-gold-400 text-gold-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-gold-500/30" />
                </div>

                <p className="text-sm sm:text-base text-body-theme leading-relaxed font-normal italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-theme">
                <span className="font-serif text-base font-bold text-heading-theme block">
                  {t.author}
                </span>
                <span className="text-xs text-gold-theme font-medium">Verified Client</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel / Card Slider */}
        <div className="md:hidden relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={mobileIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="card-theme p-7 rounded-2xl shadow-xl"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-1 text-gold-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
                  ))}
                </div>
                <Quote className="w-7 h-7 text-gold-500/40" />
              </div>

              <p className="text-base text-body-theme leading-relaxed font-normal italic min-h-[90px]">
                "{testimonials[mobileIndex].quote}"
              </p>

              <div className="mt-6 pt-4 border-t border-theme">
                <span className="font-serif text-lg font-bold text-heading-theme block">
                  {testimonials[mobileIndex].author}
                </span>
                <span className="text-xs text-gold-theme font-medium">Verified Client</span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Mobile Navigation Controls */}
          <div className="flex items-center justify-between mt-5 px-2">
            <div className="flex items-center gap-1.5">
              {testimonials.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => setMobileIndex(dotIdx)}
                  className={`h-1.5 rounded-full transition-all cursor-pointer ${
                    dotIdx === mobileIndex ? 'w-6 bg-gold-400' : 'w-2 bg-slate-400/40 dark:bg-slate-700'
                  }`}
                  aria-label={`Go to testimonial ${dotIdx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={prevTestimonial}
                aria-label="Previous testimonial"
                className="card-inner-theme p-2 rounded-lg text-heading-theme hover:text-gold-theme hover:border-gold-500/40 cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextTestimonial}
                aria-label="Next testimonial"
                className="card-inner-theme p-2 rounded-lg text-heading-theme hover:text-gold-theme hover:border-gold-500/40 cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
