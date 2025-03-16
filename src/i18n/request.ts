import {getRequestConfig} from 'next-intl/server';
import { cookies } from 'next/headers';
 
export default getRequestConfig(async () => {
    const cookieStore = cookies()
  // Provide a static locale, fetch a user setting,
  // read from `cookies()`, `headers()`, etc.
  const getLang = (await cookieStore).get('lang')
  const locale = getLang ? JSON.parse(getLang.value) : 'id'
 
  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});