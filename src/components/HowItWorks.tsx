import { Send, FileText, CheckCircle, Truck } from 'lucide-react';
import type { TranslationKey } from '@/lib/translations';

type Props = {
  t: (key: TranslationKey) => string;
};

const steps: { icon: typeof Send; titleKey: TranslationKey; descKey: TranslationKey }[] = [
  { icon: Send, titleKey: 'how_1', descKey: 'how_1_desc' },
  { icon: FileText, titleKey: 'how_2', descKey: 'how_2_desc' },
  { icon: CheckCircle, titleKey: 'how_3', descKey: 'how_3_desc' },
  { icon: Truck, titleKey: 'how_4', descKey: 'how_4_desc' },
];

export default function HowItWorks({ t }: Props) {
  return (
    <section id="how" className="py-16 sm:py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 mb-3">
            {t('how_title')}
          </h2>
          <p className="text-slate-500 text-base sm:text-lg">
            {t('how_subtitle')}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div key={idx} className="relative">
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-full h-0.5 border-t-2 border-dashed border-yellow-300" />
              )}
              <div className="relative flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-2xl bg-white border-2 border-yellow-200 flex items-center justify-center mb-4 shadow-sm hover:shadow-md hover:border-yellow-400 transition-all">
                  <step.icon size={32} className="text-yellow-500" />
                </div>
                <div className="absolute -top-2 -right-1 lg:right-auto lg:-top-3 w-7 h-7 bg-navy-900 text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {idx + 1}
                </div>
                <h3 className="text-base font-bold text-slate-800 mb-2">
                  {t(step.titleKey)}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {t(step.descKey)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
