import { Phone, Mail, MapPin } from 'lucide-react';
import { BUSINESS } from '@/lib/data';
import type { TranslationKey } from '@/lib/translations';

type Props = {
  t: (key: TranslationKey) => string;
};

const quickLinks: { id: string; key: TranslationKey }[] = [
  { id: 'categories', key: 'nav_categories' },
  { id: 'catalogue', key: 'nav_catalogue' },
  { id: 'clients', key: 'nav_clients' },
  { id: 'packages', key: 'nav_packages' },
  { id: 'how', key: 'nav_how' },
  { id: 'quote', key: 'nav_quote' },
];

export default function Footer({ t }: Props) {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center">
                <span className="text-slate-900 font-extrabold text-lg">BB</span>
              </div>
              <div className="leading-tight">
                <div className="text-sm font-bold text-white">{BUSINESS.brand}</div>
                <div className="text-xs text-slate-400">{BUSINESS.name}</div>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              {t('footer_about')}
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-4">{t('footer_links')}</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="text-sm text-slate-400 hover:text-yellow-400 transition-colors"
                  >
                    {t(link.key)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-4">{t('footer_contact')}</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${BUSINESS.phoneRaw}`}
                  className="flex items-center gap-2 text-sm text-slate-400 hover:text-yellow-400 transition-colors"
                >
                  <Phone size={16} className="flex-shrink-0" />
                  {BUSINESS.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="flex items-center gap-2 text-sm text-slate-400 hover:text-yellow-400 transition-colors break-all"
                >
                  <Mail size={16} className="flex-shrink-0" />
                  {BUSINESS.email}
                </a>
              </li>
              <li>
                <span className="flex items-start gap-2 text-sm text-slate-400">
                  <MapPin size={16} className="flex-shrink-0 mt-0.5" />
                  {BUSINESS.address}
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-4">Business Info</h4>
            <div className="space-y-2 text-sm text-slate-400">
              <p><span className="text-slate-500">Founder:</span> {BUSINESS.founder}</p>
              <p><span className="text-slate-500">Co-Founder:</span> {BUSINESS.cofounder}</p>
              <p><span className="text-slate-500">GST No:</span> {BUSINESS.gst}</p>
              <p><span className="text-slate-500">Delivery:</span> Within Vijayawada</p>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} {BUSINESS.name}. {t('footer_rights')}
          </p>
          <p className="text-xs text-slate-500">GST No: {BUSINESS.gst}</p>
        </div>
      </div>
    </footer>
  );
}
