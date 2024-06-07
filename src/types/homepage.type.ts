import { ImageFormatType, ImageType } from "./image.type"
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
    sub_heading: string
    logo: ImageType
    testimonies: any[]
    seo?: MetaType
    features: FeatureType
}

export type FeatureType = {
    id: number
    title: string
    description: string
    url: string
    btn_text: string
    list_features: ListFeature[]
}

type ListFeature = {
    id: number
    description: string
    name: string
    icon: ImageFormatType
  }