"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";
import StorageUtil from "@/libs/helpers/storage.helper";

export default function ThemePreview({ coverUrl }: { coverUrl: string }) {
    const getLang = StorageUtil.getItem({ type: "cookie", key: "lang" }) ?? "id";

    return (
        <div>
            <div className='flex flex-col items-start justify-center gap-y-2'>
                <p className='lg:text-lg font-semibold'>Preview</p>
                <div className='relative w-44 rounded-xl overflow-hidden'>
                    <label
                        htmlFor="my_modal_7"
                        className='text-xs absolute top-0 left-0 h-full bg-black/50 w-full flex flex-col items-center justify-center text-white cursor-pointer gap-1 hover:bg-black/30 duration-500'
                    >
                        <Icon icon="solar:full-screen-circle-broken" className='text-2xl' />
                        { getLang !== "id" ? "View" : "Lihat" } Preview
                    </label>
                    <Image
                        className='shadow aspect-[9/14] object-cover rounded-xl'
                        src={coverUrl}
                        alt='Preview'
                        width={800}
                        height={800}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                </div>
            </div>
        </div>
    )
}