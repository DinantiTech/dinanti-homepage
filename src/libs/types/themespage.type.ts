import { ImageFormatType } from "./image.type"

export type ThemesPageRootType = {
    data: ThemesPageDataType
    meta: MetaType
}

export type ThemesPageDataType = {
    id: number
    attributes: Attributes
}

type Attributes = {
    heading: string
    description: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    locale: string
    themes_list: CardThemesListType[]
    localizations: LocalizationsType
}

export type CardThemesListType = {
    id: number
    title: string
    description: string
    btn_text: string
    url: string
    image: ImageFormatType
}

type LocalizationsType = {
    data: any[]
}

type MetaType = {}
