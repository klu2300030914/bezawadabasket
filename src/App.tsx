import { useState, useCallback } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import WhyChooseUs from '@/components/WhyChooseUs';
import Categories from '@/components/Categories';
import Catalogue from '@/components/Catalogue';
import Clients from '@/components/Clients';
import Packages from '@/components/Packages';
import HowItWorks from '@/components/HowItWorks';
import QuoteForm from '@/components/QuoteForm';
import AppDownload from '@/components/AppDownload';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { translations, type Language, type TranslationKey } from '@/lib/translations';

export default function App() {
  const [lang, setLang] = useState<Language>('en');

  const t = useCallback(
    (key: TranslationKey) => translations[lang][key],
    [lang]
  );

  return (
    <div className="min-h-screen bg-white">
      <Header lang={lang} t={t} onLangChange={setLang} />
      <main>
        <Hero t={t} />
        <WhyChooseUs t={t} />
        <Categories t={t} />
        <Catalogue t={t} />
        <Clients t={t} />
        <Packages t={t} />
        <HowItWorks t={t} />
        <QuoteForm t={t} />
        <AppDownload t={t} />
        <Contact t={t} />
      </main>
      <Footer t={t} />
      <WhatsAppButton />
    </div>
  );
}
