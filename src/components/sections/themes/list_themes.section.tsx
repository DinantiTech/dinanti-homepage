"use client";

import Maintenance from "@/components/globals/maintenance";
import { fetchMoreThemes } from "@/libs/actions/themes/themes.action";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useInfiniteQuery } from "@tanstack/react-query";
import dynamic from "next/dynamic";
import { Suspense, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useDebounce } from "use-debounce";

const CardThemeContent = dynamic(() => import("@/components/cards/theme.card"), { ssr: false });

export default function ListThemes() {

    const [searchTerm, setSearchTerm] = useState<string>('');
    const [debouncedSearchTerm] = useDebounce(searchTerm, 300);

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

    return (
        <section className="flex flex-col items-center justify-center w-full py-1">
            <label className="input input-bordered flex items-center gap-2 max-w-[29rem] w-full text-NEUTRAL py-4">
                <input type="text" onChange={handleSearchChange} className="grow w-full" placeholder="Search" />
                <kbd className="kbd kbd-sm"><Icon icon="fluent:search-sparkle-16-filled" className="lg:text-lg" /></kbd>
            </label>

            <Suspense fallback={<p>Loading.....</p>}>
                <div className='grid lg:grid-cols-3 xxs:grid-cols-2 grid-cols-1 lg:gap-7 sm:gap-5 gap-3 mt-10'>
                    {data?.pages.flatMap(page => page.data)?.map?.((theme) => (
                        <CardThemeContent key={theme?.id} data={theme} />
                    ))}
                </div>
            </Suspense>

            <div ref={ref}>
                {isFetchingNextPage
                    ? 'Loading more...'
                    : hasNextPage
                        ? 'Load More'
                        : 'Nothing more to load'}
            </div>
        </section>
    )
}