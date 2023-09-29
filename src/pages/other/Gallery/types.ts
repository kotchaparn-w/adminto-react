export type Image = {
    src: string;
    caption: string;
};

export type GalleryItem = {
    id?: number;
    image: Image;
    title?: string;
    userName?: string;
    avatar?: string;
    isLiked?: boolean;
    category?: string[];
};
