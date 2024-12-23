import { BlocksContent } from "@strapi/blocks-react-renderer";
import { ImageFormatType } from "./image.type"

export type RootNavigationsType = {
    data: DataNavigationsType;
}

export type DataNavigationsType = {
    id: number;
    attributes: Attributes;
}

type Attributes = {
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string;
    is_maintenance: boolean;
    navbars: NavigationType[];
    others: NavigationType[];
    icon: ImageFormatType;
    localizations: LocalizationsType;
    footer: FooterType;
    contact_admin: {
        number: string;
        link: string;
    };
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
    type?: string;
    icon_txt?: string;
}

type SocialLinkType = {
    id: number;
    title: string;
    url: string;
    icon_txt: string;
}

export type LocalizationsType = {
    data: LocalizationType[];
}

type LocalizationType = {
    id: number;
    attributes: DetailLocalizationsType;
}

type DetailLocalizationsType = {
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string;
}