import { BlocksContent } from "@strapi/blocks-react-renderer"

export type PricingPageRootType = {
    data: PricingDataType
}

export type PricingDataType = {
    id: number
    attributes: AttributesType
}

type AttributesType = {
    heading: string
    description: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    locale: string
    pricing_list: PricingListType[]
    localizations: LocalizationsType
}

export type PricingListType = {
    id: number
    type: string
    title: string
    btn_text: string
    description: BlocksContent
    url: string
    price: number
    discount: number
}

type DescriptionType = {
    type: string
    children: Record<string, any>[]
}


type LocalizationsType = {
    data: any[]
}