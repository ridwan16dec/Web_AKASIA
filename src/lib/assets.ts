const imageSlug = (file: string) =>
  file
    .replace(/\.[^.]+$/, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')

const assetPath = (file: string) => `${import.meta.env.BASE_URL}${file.replace(/^\/+/, '')}`

export const logoPath = assetPath('img/optimized/logo.png')

export const optimizedImagePath = (file: string) => assetPath(`img/optimized/${imageSlug(file)}.jpg`)

export const videoPath = (file: string) => encodeURI(assetPath(`video/${file}`))
