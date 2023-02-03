export interface Article {
    title?: string;
    url?: string;
    likes: number;
    likeThis?: () => void;
}
