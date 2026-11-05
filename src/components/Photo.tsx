type Props = {
  src: string
  alt: string
  placeholder: string
  /** CSS object-position: which part of the photo to keep when it is cropped */
  position?: string
  /** true for above-the-fold images */
  eager?: boolean
  className?: string
}

/** Client photo, or a labelled gradient block until the real photo is in /public/images. */
export function Photo({ src, alt, placeholder, position, eager, className = '' }: Props) {
  return src ? (
    <img
      src={src}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      className={`object-cover ${className}`}
      style={position ? { objectPosition: position } : undefined}
    />
  ) : (
    <div className={`ph-img ${className}`} role="img" aria-label={alt}>
      {placeholder}
    </div>
  )
}
