import { useState } from 'react';
import { ChevronDown, Download, Info } from 'lucide-react';
import { catalogue } from '@/lib/data';
import type { TranslationKey } from '@/lib/translations';

type Props = {
  t: (key: TranslationKey) => string;
};

export default function Catalogue({ t }: Props) {
  const [activeTab, setActiveTab] = useState(0);
  const [expandedCats, setExpandedCats] = useState<Set<number>>(new Set([0]));

  const toggleCategory = (idx: number) => {
    setExpandedCats((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) next.delete(idx);
      else next.add(idx);
      return next;
    });
  };

  const tabKeys: TranslationKey[] = ['cat_tab_stationery', 'cat_tab_sanitary', 'cat_tab_party'];

  const downloadPDF = () => {
    const lines: string[] = ['Srindhu Enterprises - Bezawada Basket', 'Product Catalogue', '='.repeat(50), ''];
    catalogue.forEach((tab) => {
      lines.push(tab.key.toUpperCase());
      lines.push('-'.repeat(30));
      tab.categories.forEach((cat) => {
        lines.push(`\n${cat.name}:`);
        cat.items.forEach((item) => lines.push(`  - ${item}`));
      });
      lines.push('');
    });
    lines.push(t('catalogue_note'));

    const blob = new Blob([lines.join('\n')], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Bezawada-Basket-Catalogue.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section id="catalogue" className="py-16 sm:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 mb-3">
            {t('catalogue_title')}
          </h2>
          <p className="text-slate-500 text-base sm:text-lg">
            {t('catalogue_subtitle')}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {catalogue.map((tab, idx) => (
            <button
              key={tab.key}
              onClick={() => {
                setActiveTab(idx);
                setExpandedCats(new Set([0]));
              }}
              className={`px-5 py-2.5 text-sm font-bold rounded-xl transition-all ${
                activeTab === idx
                  ? 'bg-yellow-400 text-slate-900 shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {t(tabKeys[idx])}
            </button>
          ))}
        </div>

        <div className="space-y-3">
          {catalogue[activeTab].categories.map((cat, idx) => {
            const isExpanded = expandedCats.has(idx);
            return (
              <div
                key={idx}
                className="border border-slate-200 rounded-xl overflow-hidden bg-white"
              >
                <button
                  onClick={() => toggleCategory(idx)}
                  className="w-full flex items-center justify-between px-5 py-4 hover:bg-slate-50 transition-colors"
                >
                  <span className="text-base font-bold text-slate-800 text-left">
                    {cat.name}
                    <span className="ml-2 text-xs font-medium text-slate-400">
                      ({cat.items.length} items)
                    </span>
                  </span>
                  <ChevronDown
                    size={20}
                    className={`text-slate-400 transition-transform duration-300 ${
                      isExpanded ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isExpanded && (
                  <div className="px-5 pb-5 pt-1">
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2">
                      {cat.items.map((item, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 px-3 py-2 bg-slate-50 rounded-lg text-sm text-slate-600 hover:bg-yellow-50 transition-colors"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 flex-shrink-0" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 p-5 bg-gradient-to-r from-yellow-50 to-green-50 rounded-xl border border-yellow-100">
          <div className="flex items-center gap-3 text-slate-700">
            <Info size={20} className="text-yellow-600 flex-shrink-0" />
            <span className="text-sm font-medium">{t('catalogue_note')}</span>
          </div>
          <button
            onClick={downloadPDF}
            className="flex items-center gap-2 px-5 py-2.5 bg-slate-800 hover:bg-slate-900 text-white font-semibold text-sm rounded-lg transition-colors flex-shrink-0"
          >
            <Download size={18} />
            {t('download_catalogue')}
          </button>
        </div>
      </div>
    </section>
  );
}
