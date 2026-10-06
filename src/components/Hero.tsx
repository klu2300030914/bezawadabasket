import { MessageCircle, MapPin, ShoppingBasket } from 'lucide-react';
import { BUSINESS } from '@/lib/data';
import type { TranslationKey } from '@/lib/translations';

type Props = {
  t: (key: TranslationKey) => string;
};

export default function Hero({ t }: Props) {
  return (
    <section
      id="home"
      className="relative pt-28 pb-16 sm:pt-32 sm:pb-24 overflow-hidden bg-gradient-to-br from-slate-900 via-navy-900 to-slate-800"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-20 w-96 h-96 bg-green-500 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-yellow-400/20 border border-yellow-400/30 rounded-full mb-6">
              <ShoppingBasket size={16} className="text-yellow-400" />
              <span className="text-yellow-400 text-sm font-semibold">{t('hero_badge')}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
              {t('hero_title')}
            </h1>
            <p className="text-xl sm:text-2xl text-yellow-400 font-semibold mb-6">
              {t('hero_tagline')}
            </p>

            <div className="inline-flex items-center gap-2 text-slate-300 mb-6">
              <MapPin size={18} className="text-green-400" />
              <span className="text-sm sm:text-base">{t('hero_delivery')}</span>
            </div>

            <div className="flex flex-wrap gap-4 sm:gap-6 justify-center lg:justify-start mb-8">
              <div className="text-center lg:text-left">
                <div className="text-3xl sm:text-4xl font-extrabold text-yellow-400">50+</div>
                <div className="text-xs text-slate-400 mt-1">{t('hero_stat_branches')}</div>
              </div>
              <div className="w-px bg-white/20" />
              <div className="text-center lg:text-left">
                <div className="text-3xl sm:text-4xl font-extrabold text-green-400">15+</div>
                <div className="text-xs text-slate-400 mt-1">{t('hero_stat_showrooms')}</div>
              </div>
              <div className="w-px bg-white/20" />
              <div className="text-center lg:text-left">
                <div className="text-3xl sm:text-4xl font-extrabold text-white">1</div>
                <div className="text-xs text-slate-400 mt-1">{t('hero_stat_delivery')}</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <button
                onClick={() => document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold text-base rounded-xl transition-all shadow-lg hover:shadow-yellow-400/30 hover:scale-105 active:scale-95"
              >
                {t('hero_quote_btn')}
              </button>
              <a
                href={BUSINESS.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold text-base rounded-xl transition-all shadow-lg hover:shadow-green-500/30 hover:scale-105 active:scale-95"
              >
                <MessageCircle size={20} />
                {t('hero_whatsapp_btn')}
              </a>
            </div>
          </div>

          <div className="hidden lg:flex justify-center animate-fade-in">
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-green-500/20 rounded-3xl blur-2xl" />
              <div className="relative w-full h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 flex items-center justify-center">
                <div className="grid grid-cols-3 gap-3">
                  {['📋', '🧽', '🎉', '🖨️', '🗑️', '🖊️', '🪣', '🎈', '📎'].map((emoji, i) => (
                    <div
                      key={i}
                      className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center text-3xl hover:bg-yellow-400/20 transition-colors"
                      style={{ animation: `fadeUp 0.6s ease-out ${i * 0.1}s both` }}
                    >
                      {emoji}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
