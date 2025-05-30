"use client";

import BlockRendererClient from "@/components/globals/rich_text.global";
import { CustomerDataType } from "@/libs/types/customers.type";
import Image from "next/image";
import { useState } from "react";
import { Pacifico } from "next/font/google";
import StorageUtil from "@/libs/helpers/storage.helper";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";

const facifico = Pacifico({
    subsets: ["latin"],
    display: "swap",
    weight: "400"
})

export default function TestimonyTheme({ themes }: { themes: CustomerDataType[] }) {
    const [testimony, setTestimony] = useState<CustomerDataType | null>(null);

    return (
        <div className='flex items-center justify-start flex-wrap gap-3'>
            {themes?.map((item) => (
                <label htmlFor="modal-testimony" key={item?.id} onClick={() => setTestimony(item)} className='flex items-center justify-center gap-x-2 bg-SECONDARY px-3 py-1 rounded-full shadow cursor-pointer'>
                    <Image
                        src={item?.attributes?.image?.data?.attributes?.url}
                        alt={item?.attributes?.name} width={100} height={100}
                        className='rounded-full w-8 h-8 object-cover'
                    />
                    <p className='text-xs text-NEUTRAL font-medium'>{item?.attributes?.name}</p>
                </label>

            ))}

            {(themes?.length === 10 || themes?.length > 9) && (
                <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                    {[0, 1, 2]?.map((item) => (
                        <div key={item} className="avatar">
                            <div className="w-8">
                                <img src={themes[item]?.attributes?.image?.data?.attributes?.url} />
                            </div>
                        </div>
                    ))}
                    <div className="avatar placeholder">
                        <div className="bg-neutral text-neutral-content w-8 text-xs">
                            <span>+10</span>
                        </div>
                    </div>
                </div>
            )}

            <ModalTestimony testimony={testimony} />
        </div>
    )
}

function ModalTestimony({ testimony }: { testimony?: CustomerDataType | null }) {
    const getLang = StorageUtil.getItem({ type: "cookie", key: "lang" }) ?? "id"

    return (
        <>
            {testimony ? (
                <>
                    <input type="checkbox" id="modal-testimony" className="modal-toggle" />
                    <div className="modal" role="dialog">
                        <div className="modal-box w-full overflow-hidden ">
                            {/* Btn Close modal */}
                            <label htmlFor="modal-testimony">
                                <span className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</span>
                            </label>

                            <div className="flex flex-col items-center justify-center gap-3 text-center text-sm text-wrap">
                                <div className="flex flex-col items-center justify-center gap-4">
                                    <Image src={testimony?.attributes?.image?.data?.attributes?.url} loading='lazy' alt='cover' width={100} height={100} className='rounded-full w-20 h-20 flex-shrink-0 object-cover' />
                                    <p className={`${facifico.className} font-light text-lg`}>{testimony?.attributes?.name}</p>
                                </div>

                                <BlockRendererClient content={testimony?.attributes?.testimony} />
                            </div>

                            <div className="flex items-center justify-center gap-3 text-xs">
                                <Link href={testimony?.attributes?.theme_url ?? "/"} target="_blank" className="w-[65%] btn">
                                    <Icon icon="mingcute:invite-fill" className="text-lg" />
                                    Buka undangan
                                </Link>
                                <label className="btn my-5 w-[35%] bg-MIDNIGHT text-white hover:bg-MIDNIGHT/90 duration-500" htmlFor="modal-testimony">
                                    {getLang !== "id" ? "Close" : "Tutup"}
                                </label>
                            </div>
                        </div>
                        <label className="modal-backdrop" htmlFor="modal-testimony" />
                    </div>
                </>
            ) : null}
        </>
    )
}