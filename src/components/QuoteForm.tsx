import { useState } from 'react';
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import type { TranslationKey } from '@/lib/translations';
import { BUSINESS } from '@/lib/data';

type Props = {
  t: (key: TranslationKey) => string;
};

type FormState = {
  name: string;
  organisation: string;
  phone: string;
  email: string;
  items_needed: string;
  preferred_date: string;
};

const initialState: FormState = {
  name: '',
  organisation: '',
  phone: '',
  email: '',
  items_needed: '',
  preferred_date: '',
};

export default function QuoteForm({ t }: Props) {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.items_needed.trim()) return;

    setStatus('loading');
    try {
      const apiUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/notify-quote`;
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({
          name: form.name.trim(),
          organisation: form.organisation.trim() || null,
          phone: form.phone.trim(),
          email: form.email.trim() || null,
          items_needed: form.items_needed.trim(),
          preferred_date: form.preferred_date || null,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `Request failed (${response.status})`);
      }

      const data = await response.json();
      if (!data.success) {
        throw new Error('Server did not confirm the request');
      }

      setStatus('success');
      setForm(initialState);
      setTimeout(() => setStatus('idle'), 6000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 6000);
    }
  };

  const inputClass =
    'w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all';

  return (
    <section id="quote" className="py-16 sm:py-24 bg-gradient-to-br from-navy-900 via-slate-800 to-navy-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
            {t('quote_title')}
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            {t('quote_subtitle')}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8">
          {status === 'success' && (
            <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-xl mb-6 animate-fade-up">
              <CheckCircle size={24} className="text-green-600 flex-shrink-0" />
              <p className="text-sm text-green-800 font-medium">{t('form_success')}</p>
            </div>
          )}

          {status === 'error' && (
            <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-xl mb-6 animate-fade-up">
              <AlertCircle size={24} className="text-red-600 flex-shrink-0" />
              <p className="text-sm text-red-800 font-medium">{t('form_error')}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                  {t('form_name')} *
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  className={inputClass}
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                  {t('form_organisation')}
                </label>
                <input
                  type="text"
                  value={form.organisation}
                  onChange={(e) => handleChange('organisation', e.target.value)}
                  className={inputClass}
                  placeholder="ABC Bank / XYZ Motors"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                  {t('form_phone')} *
                </label>
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  className={inputClass}
                  placeholder="86886 58358"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                  {t('form_email')}
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className={inputClass}
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                {t('form_items')} *
              </label>
              <textarea
                required
                rows={4}
                value={form.items_needed}
                onChange={(e) => handleChange('items_needed', e.target.value)}
                className={inputClass}
                placeholder="e.g. A4 paper (10 reams), toilet cleaner (5L), party poppers (20), balloons (100)..."
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                {t('form_date')}
              </label>
              <input
                type="date"
                value={form.preferred_date}
                onChange={(e) => handleChange('preferred_date', e.target.value)}
                className={inputClass}
              />
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full py-4 bg-yellow-400 hover:bg-yellow-500 disabled:opacity-60 text-slate-900 font-bold text-base rounded-xl transition-all shadow-lg hover:shadow-yellow-400/30 flex items-center justify-center gap-2"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 size={20} className="animate-spin" />
                  Sending...
                </>
              ) : (
                t('form_submit')
              )}
            </button>
          </form>

          <div className="mt-5 text-center">
            <a
              href={BUSINESS.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-slate-500 hover:text-green-600 transition-colors"
            >
              Prefer WhatsApp? Click here to message us directly.
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
