
export interface IAlbum {
    id: number;
    title: string;
    link: string;
    cover: string;
    cover_small: string;
    cover_medium: string;
    cover_big: string;
    cover_xl: string;
    md5_image: string;
    release_date: Date;
    tracklist: string;
    type: string;
}

export interface IArtist {
    id: number;
    name: string;
    link: string;
    share: string;
    picture: string;
    picture_small: string;
    picture_medium: string;
    picture_big: string;
    picture_xl: string;
    radio: boolean;
    tracklist: string;
    type: string;
    role?: string;
}


export interface ITrackError {
    type: 'error';
    error: any;
}

export interface ITrackData {
    type: 'data';
    id: number;
    readable: boolean;
    title: string;
    title_short: string;
    title_version: string;
    isrc: string;
    link: string;
    share: string;
    duration: number;
    track_position: number;
    disk_number: number;
    rank: number;
    release_date: Date;
    explicit_lyrics: boolean;
    explicit_content_lyrics: number;
    explicit_content_cover: number;
    preview: string;
    bpm: number;
    gain: number;
    available_countries: string[];
    contributors: IArtist[];
    md5_image: string;
    track_token: string;
    artist: IArtist;
    album: IAlbum;
}

export type ITrack = ITrackData | ITrackError;
