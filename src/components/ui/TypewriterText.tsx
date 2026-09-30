import React, { useState, useEffect } from 'react';

interface TypewriterTextProps {
  phrases?: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  className?: string;
}

export const TypewriterText: React.FC<TypewriterTextProps> = ({
  phrases = [
    'GST Legal Solutions.',
    'Income Tax Advisory.',
    'Notice & Audit Defense.',
    'Appellate Representation.',
  ],
  typingSpeed = 75,
  deletingSpeed = 40,
  pauseDuration = 2200,
  className = '',
}) => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = phrases[currentPhraseIndex];

    let timer: NodeJS.Timeout;

    if (!isDeleting) {
      if (currentText.length < fullText.length) {
        // Typing forward
        timer = setTimeout(() => {
          setCurrentText(fullText.slice(0, currentText.length + 1));
        }, typingSpeed);
      } else {
        // Finished typing phrase, wait before backspacing
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDuration);
      }
    } else {
      if (currentText.length > 0) {
        // Backspacing / deleting
        timer = setTimeout(() => {
          setCurrentText(fullText.slice(0, currentText.length - 1));
        }, deletingSpeed);
      } else {
        // Finished deleting, move to next phrase
        setIsDeleting(false);
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentPhraseIndex, phrases, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className={`inline-flex items-center ${className}`}>
      <span>{currentText}</span>
      <span className="inline-block w-[3px] h-[0.9em] bg-gold-400 ml-1.5 animate-pulse align-middle" />
    </span>
  );
};
