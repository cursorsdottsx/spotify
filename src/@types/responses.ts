import { ArtistObject } from "./objects";

export interface LoginResponse {
    access_token: string;
    token_type: string;
    expires_in: number;
}

export interface SearchResponseObject<Item> {
    href: string;
    items: Item[];
    limit: number;
    next: any;
    offset: number;
    previous: any;
    total: number;
}

export interface SearchResponse {
    artists?: SearchResponseObject<ArtistObject>;
}
