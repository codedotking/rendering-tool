"use client"
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { translateText } from '@/lib/translate';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { ReloadIcon } from "@radix-ui/react-icons"
import { cn } from '@/lib/utils';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
const SHARED_CLASSES = {
  textarea: 'w-full md:w-1/2 p-4 border border-border rounded-lg bg-input text-foreground resize-none shadow-md transition duration-200 focus:outline-none focus:ring-2 focus:ring-primary',
};

const App = () => {
  const [sourceText, setSourceText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [loading, setLoading] = useState(false);
  const handleTranslate = async () => {
    setLoading(true)
    const res = await translateText({
      text: sourceText,
      target_lang: 'en',
      source_lang: 'auto',
    });
    toast.success('translation success')
    setTranslatedText(res);
    setLoading(false)
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center p-4">
      <Header />
      <main className="w-full max-w-4xl flex flex-col items-center mt-8">
        <div className="w-full flex flex-col md:flex-row gap-6">
          {/* 输入框 */}
          <Textarea
            rows={10}
            className={SHARED_CLASSES.textarea}
            placeholder="Enter text to translate..."
            value={sourceText}
            onChange={(e) => {
              setSourceText(e.target.value)
            }}
          />
          {/* 翻译结果 */}
          <Textarea
            className={SHARED_CLASSES.textarea}
            placeholder="Translated text will appear here..."
            value={translatedText}
            readOnly
          />
        </div>
        {/* 翻译按钮 */}
        <Button className="mt-6 h-8 bg-secondary text-secondary-foreground px-8 py-3 rounded-lg shadow-lg hover:bg-secondary/80 transition duration-200 w-full"
          disabled={loading}
          onClick={handleTranslate}>
          <ReloadIcon className={cn("mr-2 h-4 w-4", loading && " animate-spin")} />
          Translate
        </Button>
      </main>
      <Footer />
    </div>
  );
};

export default App;