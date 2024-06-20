import { BlocksContent } from "@strapi/blocks-react-renderer";
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
    navigation: NavigationType[];
    icon: ImageFormatType;
    localizations: Localizations;
    footer: FooterType
}

export type FooterType = {
    id: number;
    description: BlocksContent;
    icon: ImageFormatType;
    social_link: SocialLinkType[]
}

export type NavigationType = {
    id: number;
    title: string;
    url: string;
}

type SocialLinkType = {
    id: number;
    title: string;
    url: string;
    icon_txt: string;
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