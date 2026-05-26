type ImageSize = 'hero' | 'card' | 'thumb' | 'avatar'

const SIZE_MAP: Record<ImageSize, string> = {
  hero:   'w=1400&q=75&fm=webp&auto=format',
  card:   'w=720&q=72&fm=webp&auto=format',
  thumb:  'w=480&q=70&fm=webp&auto=format',
  avatar: 'w=200&q=80&fm=webp&auto=format&fit=crop&crop=faces',
}

export function imgUrl(base: string, size: ImageSize = 'card'): string {
  const clean = base.split('?')[0]
  return `${clean}?${SIZE_MAP[size]}`
}
