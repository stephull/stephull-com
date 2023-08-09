export const INITIAL_PORTFOLIO_PROPS_LINK = {
    url: "",
    name: ""
}

export const INITIAL_PORTFOLIO_PROPS_DATE = {
    start: new Date(),
    end: new Date()
}

export const INITIAL_PORTFOLIO_MEDIA_TYPE = "image" | "video";

export const INITIAL_PORTFOLIO_MEDIA = {
    source: "",
    title: "",
    description: "",
    type: INITIAL_PORTFOLIO_MEDIA_TYPE,
    dates: INITIAL_PORTFOLIO_PROPS_DATE
}

export const INITIAL_PORTFOLIO_TYPE = "art" | "music" | "game";

export const INITIAL_PORTFOLIO_DEFAULT = {
    title: "",
    description: "",
    links: [INITIAL_PORTFOLIO_PROPS_LINK],
    dates: [INITIAL_PORTFOLIO_PROPS_DATE],
    media: [INITIAL_PORTFOLIO_MEDIA],
    type: INITIAL_PORTFOLIO_TYPE
}