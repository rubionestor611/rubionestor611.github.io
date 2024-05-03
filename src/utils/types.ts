export type CurrentTrack = {
    item: {
        name: string;
        artists: { name:string }[];
        album: {
            images: {
                url: string;
                height: number;
                width: number;
            }[]
        };
    },
    expiresAt?: number
    message?: string
}

export type Track = {
    name: string;
    artists: { name:string }[];
    album: {
        images: {
            url: string;
            height: number;
            width: number;
        }[]
    }
}

export type TopTracks = {
    items: Track[],
    expiresAt?: number
}

export type SpotifyProfile = {
    display_name: string,
    followers: {
        total: number
    },
    uri: string,
    href: string,
    images:{
        url: string,
        height: number,
        width: number
    }[],
    external_urls: { spotify: string },
    expiresAt?: number
}

export type RecentlyPlayed = {
    items: {
        track: Track;
    }[],
    expiresAt?: number;
    message?: string
}

export type SpotifyData = {
    current: CurrentTrack | string;
    topTracks: TopTracks | string;
    profile: SpotifyProfile | string;
    recentlyPlayed: RecentlyPlayed | string;
}

export type NestorAPIError = {
    message: string;
}