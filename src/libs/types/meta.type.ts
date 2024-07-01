import { ImageFormatType } from "./image.type"

export type MetaRootType = {
    id: number;
    attributes: {
        createdAt: Date;
        updatedAt: Date;
        locale: string;
        seo: MetaType
    };
}

export type MetaType = {
    id: number
    metaTitle: string
    metaDescription: string
    keywords: string
    metaRobots: string
    structuredData: object;
    metaViewport: string
    canonicalURL: string
    metaImage: ImageFormatType
    metaSocial: MetaSocial[],
    baseUrl: string;
}

type ItemListElement = {
    "@type": string
    name: string
    image: string
    description: string
    sku: string
    brand: Brand
    offers: Offers
}

type MetaSocial = {
    id: number
    socialNetwork: "Facebook" | "Twitter"
    title: string
    description: string
    image: ImageFormatType
}

type Brand = {
    "@type": string
    name: string
}

type Offers = {
    "@type": string
    priceCurrency: string
    price: string
    availability: string
    seller: Seller
}

type Seller = {
    "@type": string
    name: string
}