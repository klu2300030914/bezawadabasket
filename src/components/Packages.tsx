import { Building, Car } from 'lucide-react';
import type { TranslationKey } from '@/lib/translations';

type Props = {
  t: (key: TranslationKey) => string;
};

export default function Packages({ t }: Props) {
  return (
    <section id="packages" className="py-16 sm:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 mb-3">
            {t('packages_title')}
          </h2>
          <p className="text-slate-500 text-base sm:text-lg max-w-2xl mx-auto">
            {t('packages_subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="group p-8 bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 rounded-2xl hover:shadow-xl transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <Building size={28} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">
              {t('pkg_1_title')}
            </h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              {t('pkg_1_desc')}
            </p>
            <button
              onClick={() => document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl transition-colors"
            >
              {t('hero_quote_btn')}
            </button>
          </div>

          <div className="group p-8 bg-gradient-to-br from-pink-50 to-yellow-50 border border-pink-100 rounded-2xl hover:shadow-xl transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-pink-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <Car size={28} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">
              {t('pkg_2_title')}
            </h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              {t('pkg_2_desc')}
            </p>
            <button
              onClick={() => document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white font-bold text-sm rounded-xl transition-colors"
            >
              {t('hero_quote_btn')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
