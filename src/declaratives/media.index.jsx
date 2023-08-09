export const INITIAL_MEDIA_PROPS_LINK = {
    url: "",
    name: ""
}

export const INITIAL_MEDIA_PROPS_MEDIA = {
    source: "",
    caption: ""
}

export const INITIAL_MEDIA_DEFAULT_BLOG = {
    ...INITIAL_MEDIA_DEFAULT,
    paragraphs: [],
    links: [INITIAL_MEDIA_PROPS_LINK]
}

export const INITIAL_MEDIA_DEFAULT_PICTURE = {
    ...INITIAL_MEDIA_DEFAULT,
    media: [INITIAL_MEDIA_PROPS_MEDIA]
}

export const INITIAL_MEDIA_DEFAULT = {
    title: "",
    location: "",
    likes: 0,
    media: [INITIAL_MEDIA_PROPS_MEDIA]
}