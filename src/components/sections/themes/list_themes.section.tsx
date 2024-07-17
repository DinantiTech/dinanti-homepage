"use client";

import dynamic from "next/dynamic";
import { useDebounce } from "use-debounce";
import { Suspense, useEffect, useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useInView } from "react-intersection-observer";
import { useInfiniteQuery } from "@tanstack/react-query";

import Maintenance from "@/components/globals/maintenance";
import { fetchMoreThemes } from "@/libs/actions/themes/themes.action";
import StorageUtil from "@/libs/helpers/storage.helper";

const CardThemeContent = dynamic(() => import("@/components/cards/theme.card"), { ssr: false });

export default function ListThemes() {

    const [searchTerm, setSearchTerm] = useState<string>('');
    const [debouncedSearchTerm] = useDebounce(searchTerm, 500);

    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: false,
    });

    const {
        data,
        error,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        status,
    } = useInfiniteQuery({
        queryKey: ['themes', debouncedSearchTerm],
        queryFn: ({ pageParam }) => fetchMoreThemes({ pageParam, searchTerm: debouncedSearchTerm }),
        initialPageParam: 1,
        getNextPageParam: (lastPage) => {
            const { page, pageCount } = lastPage?.meta?.pagination;
            if (page < pageCount) {
                return page + 1;
            }
            return undefined;
        },
    });

    useEffect(() => {
        if (inView) {
            fetchNextPage();
        }
    }, [fetchNextPage, inView]);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    if (status === 'error') return <Maintenance />;

    if (error) return <Maintenance />;

    const dataThemes = data?.pages.flatMap(page => page.data) ?? [];
    
    // Lang
    const getLang = StorageUtil.getItem({ key: "lang", type: "cookie" }) ?? "id";
    const placeholder = getLang !== "id" ? "Search themes" : "Cari Tema";
    const messageSearchEmpty = getLang !== "id" ? "Themes not Found!": "Tema tidak ditemukan!";

    return (
        <section className="flex flex-col items-center justify-center w-full py-1">
            <label className="input input-bordered flex items-center gap-2 max-w-[29rem] w-full text-NEUTRAL mt-6">
                <input type="text" onChange={handleSearchChange} className="grow w-full" placeholder={placeholder} />
                <kbd className="kbd kbd-sm"><Icon icon="fluent:search-sparkle-16-filled" className="lg:text-lg" /></kbd>
            </label>

            <Suspense fallback={<p>Loading.....</p>}>
                {dataThemes?.length > 0 ? (
                    <div className='grid lg:grid-cols-3 xxs:grid-cols-2 grid-cols-1 lg:gap-7 sm:gap-5 gap-3 mt-10'>
                        {dataThemes?.map?.((theme) => (
                            <CardThemeContent key={theme?.id} data={theme} />
                        ))}
                    </div>
                ) : (
                    <div className="my-5">
                        <p>{messageSearchEmpty}</p>
                    </div>
                )}
            </Suspense>

            <div ref={ref}>
                {isFetchingNextPage || hasNextPage && <span className="loading loading-dots loading-lg py-7" />}
            </div>
        </section>
    )
}