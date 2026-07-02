const imageSlug = (file: string) =>
  file
    .replace(/\.[^.]+$/, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')

export const logoPath = '/img/optimized/logo.png'

export const optimizedImagePath = (file: string) => `/img/optimized/${imageSlug(file)}.jpg`

export const videoPath = (file: string) => encodeURI(`/video/${file}`)
