import { StorageType } from "@/types/storage.type";

interface StorageProps {
  key: string;
  value?: string;
  type?: StorageType;
  days?: number;
}

class StorageUtil {
  private static storageType(type?: StorageType): 'localStorage' | 'sessionStorage' | 'cookie' {
    switch(type) {
        case "cookie":
            return "cookie";
        case "session":
            return "sessionStorage";
        default:
            return "localStorage";
    }
  }

  private static isBrowser(): boolean {
    return typeof window !== 'undefined';
  }

  private static getCookie(name: string): string | null {
    if (!this.isBrowser()) return null;
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? decodeURIComponent(match[2]) : null;
  }

  private static setCookie(name: string, value: string, days: number = 365): void {
    if (!this.isBrowser()) return;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = "; expires=" + date.toUTCString();
    document.cookie = name + "=" + encodeURIComponent(value) + expires + "; path=/";
  }

  private static removeCookie(name: string): void {
    if (this.isBrowser()) {
      this.setCookie(name, '', -1);
    }
  }

  public static getItem({ key, type }: Omit<StorageProps, 'value' | 'days'>): string | null {
    if (!this.isBrowser()) return null;
    const storage = this.storageType(type);
    if (storage === 'cookie') {
      return this.getCookie(key);
    }
    return window[storage].getItem(key);
  }

  public static setItem({ key, value, type, days }: StorageProps): boolean {
    if (!this.isBrowser()) return false;
    const storage = this.storageType(type);
    if (storage === 'cookie') {
      this.setCookie(key, value || '', days);
    } else {
      window[storage].setItem(key, value || '');
    }
    return true;
  }

  public static removeItem({ key, type }: Omit<StorageProps, 'value' | 'days'>): void {
    if (!this.isBrowser()) return;
    const storage = this.storageType(type);
    if (storage === 'cookie') {
      this.removeCookie(key);
    } else {
      window[storage].removeItem(key);
    }
  }
}

export default StorageUtil;
