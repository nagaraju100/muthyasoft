'use client';

import { useState, FormEvent } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.currentTarget);

    // Add your Web3Forms access key here
    // Get it from: https://web3forms.com
    formData.append('access_key', process.env.NEXT_PUBLIC_WEB3FORMS_KEY || 'YOUR_ACCESS_KEY_HERE');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setMessage('Thank you! Your message has been sent successfully.');
        (e.target as HTMLFormElement).reset();

        // Reset success message after 5 seconds
        setTimeout(() => {
          setStatus('idle');
          setMessage('');
        }, 5000);
      } else {
        setStatus('error');
        setMessage('Oops! Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Failed to send message. Please try again later.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-semibold mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700"
          required
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700"
          required
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700"
          placeholder="Tell me about your learning goals..."
          required
        ></textarea>
      </div>

      {message && (
        <div
          className={`p-4 rounded-lg ${
            status === 'success'
              ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
              : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
          }`}
        >
          {message}
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
