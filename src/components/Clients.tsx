import { Building2, Landmark, Car, Briefcase, Sparkles } from 'lucide-react';
import type { TranslationKey } from '@/lib/translations';

type Props = {
  t: (key: TranslationKey) => string;
};

const clients: { icon: typeof Building2; titleKey: TranslationKey; descKey: TranslationKey; color: string; highlight?: boolean }[] = [
  { icon: Landmark, titleKey: 'client_banks_title', descKey: 'client_banks_desc', color: 'text-blue-600 bg-blue-50' },
  { icon: Building2, titleKey: 'client_gov_title', descKey: 'client_gov_desc', color: 'text-teal-600 bg-teal-50' },
  { icon: Car, titleKey: 'client_showroom_title', descKey: 'client_showroom_desc', color: 'text-pink-600 bg-pink-50', highlight: true },
  { icon: Briefcase, titleKey: 'client_corporate_title', descKey: 'client_corporate_desc', color: 'text-purple-600 bg-purple-50' },
];

export default function Clients({ t }: Props) {
  return (
    <section id="clients" className="py-16 sm:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 mb-3">
            {t('clients_title')}
          </h2>
          <p className="text-slate-500 text-base sm:text-lg max-w-2xl mx-auto">
            {t('clients_subtitle')}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {clients.map((client, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                client.highlight
                  ? 'bg-gradient-to-br from-pink-50 to-yellow-50 border-pink-200 shadow-md hover:shadow-xl'
                  : 'bg-white border-slate-100 hover:shadow-xl'
              }`}
            >
              <div className={`w-14 h-14 rounded-2xl ${client.color} flex items-center justify-center mb-4`}>
                <client.icon size={28} />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">
                {t(client.titleKey)}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {t(client.descKey)}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 p-6 sm:p-8 bg-gradient-to-r from-navy-900 to-slate-800 rounded-2xl text-center">
          <div className="inline-flex items-center gap-2 text-pink-400 text-sm font-semibold mb-3">
            <Sparkles size={18} />
            {t('client_showroom_title')}
          </div>
          <p className="text-white text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            {t('client_showroom_highlight')}
          </p>
        </div>
      </div>
    </section>
  );
}
