import { BlocksContent } from "@strapi/blocks-react-renderer";
import { ImageFormatType } from "./image.type";
import { ThemesDataType } from "./themes.type";

export type CustomerDataType = {
    id: number;
    attributes: CustomerType
}

export type CustomerType = {
    id: number;
    name: string;
    testimony: BlocksContent;
    createdAt: string;
    updatedAt: string;  
    image: ImageFormatType;
    theme?: {
        data: ThemesDataType
    }
    theme_url?: string;
}