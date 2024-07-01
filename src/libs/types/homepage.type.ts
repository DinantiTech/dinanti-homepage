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
    testimony: TestimonySectionType
    seo?: MetaType
    sliders: SliderType[]
    features: FeatureType
    steppers: SteppersType
    banners: BannersType[]
}

export type TestimonySectionType = {
    id: number;
    heading: string;
    description: string;
    url?: string;
    testimonies: TestimoniesType[]
}

export type TestimoniesType = {
    id: string;
    customer_name: string;
    testimony: string;
    image: ImageFormatType;
}

export type SliderType = {
    id: number;
    url: string;
    description: string;
    title: string;
    btn_text: string;
    image: ImageFormatType;
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

export type SteppersType = {
    id: number;
    heading: string;
    description: string;
    image: ImageFormatType;
    list_stepper: ListSteppers[]
}

type ListSteppers = {
    id: number
    description: string
    title: string
}

export type BannersType = {
    id: number;
    title: string;
    description: string;
    btn_text: string;
    image: ImageFormatType;
    url: string;
}