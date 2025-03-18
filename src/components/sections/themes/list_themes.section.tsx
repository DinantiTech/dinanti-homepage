"use client";

import dynamic from "next/dynamic";
import { useDebounce } from "use-debounce";
import { Suspense, useEffect, useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useInView } from "react-intersection-observer";
import { useTranslations } from "next-intl";

import themesData from "@/json/themes.json"; // Sesuaikan path ke file JSON Anda

const CardThemeContent = dynamic(() => import("@/components/cards/theme.card"), { ssr: false });

export default function ListThemes() {
    const t = useTranslations('ThemesPage');

    const [searchTerm, setSearchTerm] = useState<string>('');
    const [debouncedSearchTerm] = useDebounce(searchTerm, 500);
    const [filteredThemes, setFilteredThemes] = useState<any[]>([]);
    const [visibleThemes, setVisibleThemes] = useState<any[]>([]);
    const [page, setPage] = useState<number>(1);
    const limit = 8;

    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: false,
    });

    // Fungsi untuk memfilter data berdasarkan search term
    const filterThemes = (themes: any[], term: string) => {
        return themes.filter(theme =>
            theme.title.toLowerCase().includes(term.toLowerCase()) ||
            theme.code.toLowerCase().includes(term.toLowerCase()) ||
            theme.categories.some((cat: string) => cat.toLowerCase().includes(term.toLowerCase()))
        );
    };

    // Efek untuk memfilter data saat search term berubah
    useEffect(() => {
        const filtered = filterThemes(themesData.themes, debouncedSearchTerm);
        setFilteredThemes(filtered);
        setPage(1); // Reset ke halaman pertama saat pencarian berubah
        setVisibleThemes(filtered.slice(0, limit)); // Tampilkan 8 item pertama
    }, [debouncedSearchTerm]);

    // Efek untuk menambahkan data saat scroll ke bawah
    useEffect(() => {
        if (inView && filteredThemes.length > visibleThemes.length) {
            const nextPage = page + 1;
            const nextThemes = filteredThemes.slice(visibleThemes.length, visibleThemes.length + limit);
            setVisibleThemes((prev) => [...prev, ...nextThemes]);
            setPage(nextPage);
        }
    }, [inView, filteredThemes, visibleThemes]);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    return (
        <section className="flex flex-col items-center justify-center w-full py-1">
            <label className="input input-bordered flex items-center gap-2 max-w-[29rem] w-full text-NEUTRAL mt-6">
                <input
                    type="search"
                    onChange={handleSearchChange}
                    className="grow w-full"
                    placeholder={t('placeholder_search')}
                />
                <kbd className="kbd kbd-sm">
                    <Icon icon="fluent:search-sparkle-16-filled" className="lg:text-lg" />
                </kbd>
            </label>

            <Suspense fallback={<p>Rendering.....</p>}>
                {visibleThemes?.length > 0 ? (
                    <div className='grid lg:grid-cols-3 xxs:grid-cols-2 grid-cols-1 lg:gap-7 sm:gap-5 gap-3 mt-10'>
                        {visibleThemes?.map?.((theme, idx) => (
                            <CardThemeContent key={idx} data={theme} />
                        ))}
                    </div>
                ) : (
                    <div className="my-5">
                        <p>{t('themes_not_found')}</p>
                    </div>
                )}
            </Suspense>

            <div ref={ref}>
                {inView && filteredThemes.length > visibleThemes.length && (
                    <span className="loading loading-dots loading-lg py-7" />
                )}
            </div>
        </section>
    );
}