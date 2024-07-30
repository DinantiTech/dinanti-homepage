import { BlocksContent } from "@strapi/blocks-react-renderer";
import { ImageFormatType } from "./image.type";
import { CustomerDataType } from "./customers.type";
import { MetaPageType } from "./meta_page.type";

export type ThemesDataListType = {
    data: ThemesDataType[],
    meta: MetaPageType
}

export type ThemesDataType = {
    id: number;
    attributes: {
        title: string;
        description: BlocksContent;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        slug: string;
        categories: string;
        cover: ImageFormatType;
        screenshot: ImageFormatType;
        customers: {
            data: CustomerDataType[]
        },
        badge: BadgeType[]
        code: string;
    }
}

export type BadgeType = {
    id: number;
    type: string;
    icon: string;
}