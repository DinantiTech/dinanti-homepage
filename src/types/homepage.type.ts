import { ImageType } from "./image.type"
import { MetaType } from "./meta.type"

export type HomePageType = {
    id: number
    attributes: AttributesHomepage
}

export type AttributesHomepage = {
    createdAt: string
    updatedAt: string
    publishedAt: string
    locale: string
    heading: string
    navigation: Navigation[]
    logo: ImageType
    testimonies: any[]
    seo: MetaType;
}

type Navigation = {
    id: number
    title: string
    url: string
}