import React, { useState } from 'react';
import Section from './ui/Section';
import { RESUME_DATA } from '../constants';
import { Mail, MapPin, Phone, Send, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

declare global {
  interface ImportMetaEnv {
    VITE_GOOGLE_SCRIPT_URL?: string;
  }
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
}

const SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL || '';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<FormState>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, timestamp: new Date().toISOString() }),
      });
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <Section id="contact" title="Get In Touch" className="mb-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <p className="text-lg text-slate-300 leading-relaxed">
            I'm currently looking for new opportunities in AI/ML Engineering and Data Science.
            Whether you have a question or just want to say hi, feel free to drop a message!
          </p>

          <div className="flex flex-col gap-4 mt-8">
            <a href={`mailto:${RESUME_DATA.contact.email}`} className="flex items-center gap-4 text-slate-300 hover:text-accent transition-colors p-4 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-accent">
              <Mail className="text-accent" />
              <span>{RESUME_DATA.contact.email}</span>
            </a>
            <div className="flex items-center gap-4 text-slate-300 p-4 bg-slate-800/50 rounded-lg border border-slate-700">
              <Phone className="text-accent" />
              <span>{RESUME_DATA.contact.phone}</span>
            </div>
            <div className="flex items-center gap-4 text-slate-300 p-4 bg-slate-800/50 rounded-lg border border-slate-700">
              <MapPin className="text-accent" />
              <span>{RESUME_DATA.contact.location}</span>
            </div>
          </div>

          <div className="flex gap-4 mt-6">
            <a href={RESUME_DATA.contact.linkedin} className="p-3 bg-slate-800 rounded-full hover:bg-accent hover:text-primary transition-all duration-300">
              <FaLinkedin size={24} />
            </a>
            <a href={RESUME_DATA.contact.github} className="p-3 bg-slate-800 rounded-full hover:bg-white hover:text-primary transition-all duration-300">
              <FaGithub size={24} />
            </a>
          </div>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-400">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full bg-slate-800/50 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-400">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full bg-slate-800/50 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                placeholder="john@example.com"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-400">Subject</label>
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              required
              className="w-full bg-slate-800/50 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
              placeholder="Project Inquiry"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-400">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full bg-slate-800/50 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
              placeholder="Your message here..."
            />
          </div>

          {status === 'success' && (
            <div className="flex items-center gap-2 text-green-400 bg-green-400/10 border border-green-400/20 rounded-lg p-3">
              <CheckCircle size={18} />
              <span className="text-sm">Message sent! I'll get back to you soon.</span>
            </div>
          )}
          {status === 'error' && (
            <div className="flex items-center gap-2 text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg p-3">
              <AlertCircle size={18} />
              <span className="text-sm">Something went wrong. Please try emailing me directly.</span>
            </div>
          )}

          <button
            type="submit"
            disabled={status === 'submitting' || !SCRIPT_URL}
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-accent to-secondary text-white font-bold py-3 rounded-lg hover:opacity-90 transition-opacity shadow-lg shadow-accent/20 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'submitting' ? (
              <>
                <Loader size={18} className="animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send size={18} />
                Send Message
              </>
            )}
          </button>
        </form>
      </div>
    </Section>
  );
};

export default Contact;
