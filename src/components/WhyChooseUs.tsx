import {
  Package,
  Layers,
  ShieldCheck,
  Handshake,
  Truck,
  CalendarDays,
  PartyPopper,
} from 'lucide-react';
import type { TranslationKey } from '@/lib/translations';

type Props = {
  t: (key: TranslationKey) => string;
};

const items: { icon: typeof Package; titleKey: TranslationKey; descKey: TranslationKey; color: string }[] = [
  { icon: Package, titleKey: 'why_1_title', descKey: 'why_1_desc', color: 'text-yellow-500 bg-yellow-50' },
  { icon: Layers, titleKey: 'why_2_title', descKey: 'why_2_desc', color: 'text-green-600 bg-green-50' },
  { icon: ShieldCheck, titleKey: 'why_3_title', descKey: 'why_3_desc', color: 'text-blue-600 bg-blue-50' },
  { icon: Handshake, titleKey: 'why_4_title', descKey: 'why_4_desc', color: 'text-orange-600 bg-orange-50' },
  { icon: Truck, titleKey: 'why_5_title', descKey: 'why_5_desc', color: 'text-purple-600 bg-purple-50' },
  { icon: CalendarDays, titleKey: 'why_6_title', descKey: 'why_6_desc', color: 'text-teal-600 bg-teal-50' },
  { icon: PartyPopper, titleKey: 'why_7_title', descKey: 'why_7_desc', color: 'text-pink-600 bg-pink-50' },
];

export default function WhyChooseUs({ t }: Props) {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 mb-3">
            {t('why_title')}
          </h2>
          <p className="text-slate-500 text-base sm:text-lg max-w-2xl mx-auto">
            {t('why_subtitle')}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="group p-6 bg-white border border-slate-100 rounded-2xl hover:shadow-xl hover:border-yellow-200 transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${item.color} group-hover:scale-110 transition-transform`}>
                <item.icon size={24} />
              </div>
              <h3 className="text-base font-bold text-slate-800 mb-2">
                {t(item.titleKey)}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {t(item.descKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
