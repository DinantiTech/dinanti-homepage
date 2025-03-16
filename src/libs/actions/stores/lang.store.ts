import {create} from 'zustand';
import StorageUtil from '@/libs/helpers/storage.helper';

type LanguageStore = {
  lang: string;
  setLanguage: (lang: string) => void;
};

const getLangFromCookie = (): string => {
  const lang = StorageUtil.getItem({ key: 'lang', type: 'cookie' });
  return lang ? JSON.parse(lang) : 'id';
};

const useLanguageStore = create<LanguageStore>((set) => ({
  lang: getLangFromCookie(),
  setLanguage: (lang: string) => {
    StorageUtil.setItem({ key: 'lang', value: lang, type: 'cookie' });
    
    set({ lang });

    window.location.reload()
  },
}));

export default useLanguageStore;
