import React, { useState } from 'react';
import { clinicConfig } from '../data/clinicConfig';
import { ArrowRight } from 'lucide-react';

export const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    treatment: '',
    date: '',
    time: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isPreparing, setIsPreparing] = useState(false);

  const validatePhone = (phone: string) => {
    const phoneRegex = /^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid Indian mobile number';
    }
    if (!formData.treatment) newErrors.treatment = 'Please select a treatment';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsPreparing(true);
    setErrors({});

    const message = `Hello Dental Lounge,
I would like to request an appointment.

Patient Name: ${formData.name}
Mobile Number: ${formData.phone}${formData.email ? `\nEmail: ${formData.email}` : ''}

Treatment / Concern:
${formData.treatment}

Preferred Date:
${formData.date || 'Not specified'}

Preferred Time:
${formData.time || 'Not specified'}

Additional Concern:
${formData.message || 'None'}

Please confirm my appointment.
Thank you.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${clinicConfig.contact.whatsappNumber}?text=${encodedMessage}`;

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setIsPreparing(false);
    }, 800);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const today = new Date().toISOString().split('T')[0];

  const inputClass = "w-full bg-transparent border-0 border-b border-gray-200 px-0 py-2 text-[var(--color-text-main)] focus:ring-0 focus:border-[var(--color-primary)] transition-colors placeholder:text-gray-400";
  const labelClass = "block text-[var(--color-text-main)]/70 text-sm mb-1";

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-2xl mx-auto">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-[var(--color-text-main)]">Request appointment</h2>
      </div>

      <div>
        <label htmlFor="name" className={labelClass}>Name <span className="text-red-500">*</span></label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={inputClass}
          placeholder="Enter your full name"
        />
        {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={inputClass}
          placeholder="Enter your email address"
        />
      </div>

      <div>
        <label htmlFor="phone" className={labelClass}>Phone <span className="text-red-500">*</span></label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={inputClass}
          placeholder="+91 98765 43210"
        />
        {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
      </div>

      <div>
        <label htmlFor="treatment" className={labelClass}>Request appointment For <span className="text-red-500">*</span></label>
        <select
          id="treatment"
          name="treatment"
          value={formData.treatment}
          onChange={handleChange}
          className={inputClass}
        >
          <option value="" disabled>Select your appointment type</option>
          <option value="General Consultation">General Consultation</option>
          {clinicConfig.treatments.map((t) => (
            <option key={t.id} value={t.name}>{t.name}</option>
          ))}
          <option value="Other">Other</option>
        </select>
        {errors.treatment && <p className="mt-1 text-sm text-red-500">{errors.treatment}</p>}
      </div>

      <div>
        <label className={labelClass}>Preferred date and time</label>
        <div className="flex gap-4">
          <input
            type="date"
            id="date"
            name="date"
            min={today}
            value={formData.date}
            onChange={handleChange}
            className={`flex-1 ${inputClass}`}
          />
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className={`flex-1 ${inputClass}`}
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>Note</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={3}
          className="w-full bg-transparent border border-gray-200 px-4 py-3 rounded-md text-[var(--color-text-main)] focus:ring-1 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] transition-colors placeholder:text-gray-400 mt-1 resize-none"
          placeholder="In order to better serve you, please let us know the reason for your visit."
        ></textarea>
      </div>

      <div className="pt-4">
        <button
          type="submit"
          disabled={isPreparing}
          className="w-full bg-[var(--color-primary)] text-white shadow-md py-4 rounded-xl font-bold hover:bg-[var(--color-secondary)] transition-all flex justify-center items-center gap-2 disabled:opacity-80 group"
        >
          {isPreparing ? 'Preparing WhatsApp...' : 'Request an appointment'}
        </button>
      </div>
    </form>
  );
};
