import { ImageFormatType } from "./image.type"

export type RootLocalizationType = {
    data: DataLocalizationType;
}

export type DataLocalizationType = {
    id: number;
    attributes: Attributes;
}

type Attributes = {
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string;
    navigation: Navigation[];
    icon: ImageFormatType;
    localizations: Localizations;
}

type Navigation = {
    id: number;
    title: string;
    url: string;
}

type Localizations = {
    data: LocalizationsType[];
}

type LocalizationsType = {
    id: number;
    attributes: DetailLocalizationsType;
}

type DetailLocalizationsType = {
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string;
}