/* eslint-disable @next/next/no-img-element */
interface ImgProps {
  src: string
  alt: string
  fill?: boolean
  sizes?: string
  className?: string
  style?: React.CSSProperties
  priority?: boolean
}

export default function Img({ src, alt, fill, className, style, priority }: ImgProps) {
  if (fill) {
    return (
      <img
        src={src}
        alt={alt}
        className={className}
        loading={priority ? 'eager' : 'lazy'}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          display: 'block',
          ...style,
        }}
      />
    )
  }
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={priority ? 'eager' : 'lazy'}
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: 'center',
        display: 'block',
        ...style,
      }}
    />
  )
}