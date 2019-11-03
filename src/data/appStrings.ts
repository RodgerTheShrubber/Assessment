export interface AppStrings {
        heading: string, 
        description: string,
        snippets: string[],
        locations: string[],
        "video-embed": string,
        quote: quote,
        gallery: galleryItem[],
        "episode-list": episodeDetails[]
    }

export interface quote {
    text: string,
    author: string
}

export interface galleryItem {
    src: string,
    text: string,
    reference?: string
}

export interface episodeDetails {
    season: number,
    name: string,
    rating: number
}