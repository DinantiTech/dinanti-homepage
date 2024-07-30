export type ImageFormatType = {
    data: {
        id: number,
        attributes: ImageType
    }
}

export type ImageType = {
    id: number,
    formats?: {
        thumbnail?: ImageFormatDetail,
        small?: ImageFormatDetail,
        medium?: ImageFormatDetail,
        large?: ImageFormatDetail
    },
    name: string
    hash: string
    ext: string
    mime: string
    path: any
    width: number
    height: number
    size: number
    sizeInBytes: number
    url: string,
    provider_metadata: ImageProvider,
    // attributes?: {
    //     name: string
    //     alternativeText: any
    //     caption: any
    //     width: number
    //     height: number
    //     formats: any
    //     hash: string
    //     ext: string
    //     mime: string
    //     size: number
    //     url: string
    //     previewUrl: any
    //     provider: string
    //     provider_metadata: ImageProvider,
    //     createdAt: string
    //     updatedAt: string
    // },
}

type ImageFormatDetail = {
    name: string
    hash: string
    ext: string
    mime: string
    path: any
    width: number
    height: number
    size: number
    sizeInBytes: number
    url: string,
    provider_metadata: ImageProvider,
}

type ImageProvider = {
    public_id: string
    resource_type: string
}