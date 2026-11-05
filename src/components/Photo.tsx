type Props = {
  src: string
  alt: string
  placeholder: string
  /** Optional smaller copies, e.g. "/a-800.webp 800w, /a.webp 1600w", with the matching sizes hint */
  srcSet?: string
  sizes?: string
  /** CSS object-position: which part of the photo to keep when it is cropped */
  position?: string
  /** true for above-the-fold images: loads first, at high priority */
  eager?: boolean
  className?: string
}

/** Client photo, or a labelled gradient block until the real photo is in /public/images. */
export function Photo({ src, alt, placeholder, srcSet, sizes, position, eager, className = '' }: Props) {
  return src ? (
    <img
      src={src}
      srcSet={srcSet}
      sizes={srcSet ? sizes : undefined}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      fetchPriority={eager ? 'high' : undefined}
      decoding={eager ? 'sync' : 'async'}
      className={`object-cover ${className}`}
      style={position ? { objectPosition: position } : undefined}
    />
  ) : (
    <div className={`ph-img ${className}`} role="img" aria-label={alt}>
      {placeholder}
    </div>
  )
}
