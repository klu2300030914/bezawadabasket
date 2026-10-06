import { Smartphone, Apple } from 'lucide-react';
import type { TranslationKey } from '@/lib/translations';

type Props = {
  t: (key: TranslationKey) => string;
};

export default function AppDownload({ t }: Props) {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-yellow-50 to-green-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="inline-flex w-16 h-16 rounded-2xl bg-navy-900 items-center justify-center mb-5">
          <Smartphone size={32} className="text-yellow-400" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800 mb-3">
          {t('app_title')}
        </h2>
        <p className="text-slate-500 text-base sm:text-lg mb-8 max-w-xl mx-auto">
          {t('app_subtitle')}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="#"
            className="inline-flex items-center gap-3 px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl transition-colors"
          >
            <Apple size={26} />
            <div className="text-left leading-tight">
              <div className="text-[10px] text-slate-400">Download on the</div>
              <div className="text-sm font-bold">App Store</div>
            </div>
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-3 px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl transition-colors"
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zM14.5 12L17.5 9l3.5 2-3.5 2-3-1zm-1.5 1.5l5.5 3.5-5.5 3v-6.5zm0-3v-6.5l5.5 3-5.5 3.5z" />
              </svg>
            </div>
            <div className="text-left leading-tight">
              <div className="text-[10px] text-slate-400">Get it on</div>
              <div className="text-sm font-bold">Google Play</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
