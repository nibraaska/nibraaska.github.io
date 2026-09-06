import React, { useState } from 'react';
import Section from './Section';

const fieldClass =
  'w-full rounded border border-secondary-300 px-3 py-2 text-sm text-secondary-900 ' +
  'placeholder:text-secondary-400 focus:border-primary-500 focus:outline-none ' +
  'focus:ring-1 focus:ring-primary-500';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/xrbenobo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <Section id="contact" title="Contact">
      <p className="mb-6 max-w-3xl">
        The quickest way to reach me is by email at{' '}
        <a href="mailto:nnibraas@gmail.com">nnibraas@gmail.com</a>. You can also use the form
        below.
      </p>

      <form onSubmit={handleSubmit} className="max-w-xl space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="mb-1 block text-sm text-secondary-600"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={fieldClass}
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="mb-1 block text-sm text-secondary-600"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={fieldClass}
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="subject"
            className="mb-1 block text-sm text-secondary-600"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className={fieldClass}
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="mb-1 block text-sm text-secondary-600"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className={fieldClass}
          />
        </div>
        <div className="flex items-center gap-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn btn-primary disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? 'Sending…' : 'Send message'}
          </button>
          {submitStatus === 'success' && (
            <p className="text-sm text-secondary-600" role="status">
              Thanks — I'll get back to you soon.
            </p>
          )}
          {submitStatus === 'error' && (
            <p className="text-sm text-red-700" role="status">
              Something went wrong. Please email me directly.
            </p>
          )}
        </div>
      </form>
    </Section>
  );
};

export default Contact;
