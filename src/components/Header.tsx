import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { BUSINESS } from '@/lib/data';
import type { Language, TranslationKey } from '@/lib/translations';

type Props = {
  lang: Language;
  t: (key: TranslationKey) => string;
  onLangChange: (lang: Language) => void;
};

const navItems: { id: string; key: TranslationKey }[] = [
  { id: 'home', key: 'nav_home' },
  { id: 'categories', key: 'nav_categories' },
  { id: 'catalogue', key: 'nav_catalogue' },
  { id: 'clients', key: 'nav_clients' },
  { id: 'packages', key: 'nav_packages' },
  { id: 'how', key: 'nav_how' },
  { id: 'contact', key: 'nav_contact' },
];

export default function Header({ lang, t, onLangChange }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <button
          onClick={() => scrollTo('home')}
          className="flex items-center gap-2 flex-shrink-0"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center shadow-md">
            <span className="text-navy-900 font-extrabold text-lg">BB</span>
          </div>
          <div className="text-left leading-tight">
            <div className="text-sm font-bold text-slate-800">{BUSINESS.brand}</div>
            <div className="text-[10px] text-slate-500">{BUSINESS.name}</div>
          </div>
        </button>

        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-yellow-600 hover:bg-yellow-50 rounded-lg transition-colors"
            >
              {t(item.key)}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-1 bg-slate-100 rounded-lg p-1">
            <button
              onClick={() => onLangChange('en')}
              className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors ${
                lang === 'en' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => onLangChange('te')}
              className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors ${
                lang === 'te' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500'
              }`}
            >
              తె
            </button>
          </div>

          <button
            onClick={() => scrollTo('quote')}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold text-sm rounded-lg transition-colors shadow-sm"
          >
            {t('nav_quote')}
          </button>

          <a
            href={`tel:${BUSINESS.phoneRaw}`}
            className="sm:hidden p-2 text-slate-700"
            aria-label="Call"
          >
            <Phone size={20} />
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 text-slate-700"
            aria-label="Menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 shadow-lg">
          <nav className="px-4 py-3 flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="px-4 py-2.5 text-left text-sm font-medium text-slate-700 hover:bg-yellow-50 hover:text-yellow-600 rounded-lg transition-colors"
              >
                {t(item.key)}
              </button>
            ))}
            <div className="flex items-center gap-2 px-4 py-2">
              <button
                onClick={() => onLangChange('en')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md ${
                  lang === 'en' ? 'bg-yellow-400 text-slate-900' : 'bg-slate-100 text-slate-500'
                }`}
              >
                English
              </button>
              <button
                onClick={() => onLangChange('te')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md ${
                  lang === 'te' ? 'bg-yellow-400 text-slate-900' : 'bg-slate-100 text-slate-500'
                }`}
              >
                తెలుగు
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
