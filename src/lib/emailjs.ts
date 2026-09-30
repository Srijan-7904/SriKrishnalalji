import emailjs from '@emailjs/browser';

export interface EmailParams {
  fullName: string;
  phone: string;
  email: string;
  service: string;
  preferredDate?: string;
  message: string;
}

export const sendConsultationEmail = async (params: EmailParams): Promise<boolean> => {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    console.warn(
      '[EmailJS] Credentials not configured in .env. Simulating submission with params:',
      params
    );
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return true;
  }

  // Universal parameter mapping to match any EmailJS template configuration
  const templateParams: Record<string, string> = {
    // Client Name
    from_name: params.fullName,
    name: params.fullName,
    user_name: params.fullName,

    // Contact Details
    from_phone: params.phone,
    phone: params.phone,
    user_phone: params.phone,
    contact_number: params.phone,

    from_email: params.email,
    email: params.email,
    user_email: params.email,
    reply_to: params.email,

    // Legal Matter / Service
    service_required: params.service,
    service: params.service,
    legal_matter: params.service,
    subject: `Legal Consultation Request: ${params.service} - ${params.fullName}`,

    // Date & Inquiry
    preferred_date: params.preferredDate || 'Flexible / Urgent Consultation',
    date: params.preferredDate || 'Flexible / Urgent Consultation',
    message: params.message,
    notes: params.message,

    // Chamber / Recipient
    to_name: 'Advocate Sri Krishna Lal Ji',
  };

  try {
    console.log('[EmailJS] Dispatching consultation email via service:', serviceId);
    const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);
    console.log('[EmailJS] Email sent successfully:', response.status, response.text);
    return response.status === 200;
  } catch (error: unknown) {
    console.error('[EmailJS SDK] Primary dispatch failed, trying direct API fallback...', error);
    
    // Direct API fallback in case browser extensions or adblockers block SDK hooks
    try {
      const fallbackRes = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          template_params: templateParams,
        }),
      });

      if (fallbackRes.ok) {
        console.log('[EmailJS Fallback] Direct API dispatch succeeded with status:', fallbackRes.status);
        return true;
      }
      const errText = await fallbackRes.text();
      console.error('[EmailJS Fallback] Direct API error:', fallbackRes.status, errText);
      return false;
    } catch (fallbackErr) {
      console.error('[EmailJS Fallback] Direct API network error:', fallbackErr);
      return false;
    }
  }
};
