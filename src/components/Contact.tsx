import { Phone, Mail, MapPin } from 'lucide-react';
import { BUSINESS } from '@/lib/data';
import type { TranslationKey } from '@/lib/translations';

type Props = {
  t: (key: TranslationKey) => string;
};

export default function Contact({ t }: Props) {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 mb-3">
            {t('contact_title')}
          </h2>
          <p className="text-slate-500 text-base sm:text-lg">
            {t('contact_subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className="flex items-center gap-4 p-5 bg-slate-50 hover:bg-yellow-50 rounded-2xl border border-slate-100 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-yellow-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Phone size={22} className="text-slate-900" />
              </div>
              <div>
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                  {t('contact_phone')}
                </div>
                <div className="text-lg font-bold text-slate-800">{BUSINESS.phone}</div>
              </div>
            </a>

            <a
              href={`mailto:${BUSINESS.email}`}
              className="flex items-center gap-4 p-5 bg-slate-50 hover:bg-green-50 rounded-2xl border border-slate-100 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail size={22} className="text-white" />
              </div>
              <div className="min-w-0">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                  {t('contact_email')}
                </div>
                <div className="text-base font-bold text-slate-800 truncate">{BUSINESS.email}</div>
              </div>
            </a>

            <a
              href={BUSINESS.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 bg-slate-50 hover:bg-blue-50 rounded-2xl border border-slate-100 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                <MapPin size={22} className="text-white" />
              </div>
              <div>
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                  {t('contact_address')}
                </div>
                <div className="text-sm font-bold text-slate-800">{BUSINESS.address}</div>
              </div>
            </a>

            <div className="p-5 bg-gradient-to-br from-navy-900 to-slate-800 rounded-2xl">
              <p className="text-slate-300 text-sm mb-1">Founded by</p>
              <p className="text-white text-lg font-bold">{BUSINESS.founder}</p>
              <p className="text-slate-300 text-sm mt-3 mb-1">{t('contact_cofounder')}</p>
              <p className="text-white text-lg font-bold">{BUSINESS.cofounder}</p>
              <p className="text-slate-400 text-xs mt-3">GST No: {BUSINESS.gst}</p>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-slate-200 min-h-[350px] shadow-sm">
            <iframe
              title="Location Map"
              src={BUSINESS.mapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '350px' }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
