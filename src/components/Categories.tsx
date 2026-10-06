import {
  FileText,
  SprayCan,
  PartyPopper,
  Package,
  Monitor,
} from 'lucide-react';
import type { TranslationKey } from '@/lib/translations';

type Props = {
  t: (key: TranslationKey) => string;
};

const categories: { icon: typeof FileText; titleKey: TranslationKey; descKey: TranslationKey; color: string; bg: string }[] = [
  { icon: FileText, titleKey: 'cat_1_title', descKey: 'cat_1_desc', color: 'text-yellow-600', bg: 'bg-yellow-50' },
  { icon: SprayCan, titleKey: 'cat_2_title', descKey: 'cat_2_desc', color: 'text-green-600', bg: 'bg-green-50' },
  { icon: PartyPopper, titleKey: 'cat_3_title', descKey: 'cat_3_desc', color: 'text-pink-600', bg: 'bg-pink-50' },
  { icon: Package, titleKey: 'cat_4_title', descKey: 'cat_4_desc', color: 'text-blue-600', bg: 'bg-blue-50' },
  { icon: Monitor, titleKey: 'cat_5_title', descKey: 'cat_5_desc', color: 'text-purple-600', bg: 'bg-purple-50' },
];

export default function Categories({ t }: Props) {
  return (
    <section id="categories" className="py-16 sm:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 mb-3">
            {t('categories_title')}
          </h2>
          <p className="text-slate-500 text-base sm:text-lg max-w-2xl mx-auto">
            {t('categories_subtitle')}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="group relative p-6 bg-white rounded-2xl border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <div className={`absolute -right-8 -top-8 w-24 h-24 rounded-full ${cat.bg} opacity-50 group-hover:scale-150 transition-transform duration-500`} />
              <div className="relative">
                <div className={`w-14 h-14 rounded-2xl ${cat.bg} flex items-center justify-center mb-4`}>
                  <cat.icon size={28} className={cat.color} />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">
                  {t(cat.titleKey)}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {t(cat.descKey)}
                </p>
              </div>
            </div>
          ))}

          <div className="p-6 bg-gradient-to-br from-navy-900 to-slate-800 rounded-2xl flex flex-col justify-center items-center text-center">
            <p className="text-yellow-400 text-sm font-semibold mb-2">+ Many More</p>
            <p className="text-white text-lg font-bold">Can't find it?</p>
            <p className="text-slate-300 text-sm mt-1">We arrange it for you.</p>
            <button
              onClick={() => document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' })}
              className="mt-4 px-5 py-2.5 bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold text-sm rounded-lg transition-colors"
            >
              {t('hero_quote_btn')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
