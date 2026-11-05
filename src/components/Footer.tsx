import { footer } from '../content/site'

export function Footer() {
  return (
    <footer className="bg-footer pt-11 pb-12 text-body text-footer-ink">
      <div className="container-site">
        {footer.terms.map((t, i) => (
          <p key={i} className="m-0 mb-4">
            {t}
          </p>
        ))}
        <div className="mt-6 grid gap-2 border-t border-footer-rule pt-6 text-small">
          <span>{footer.copyright}</span>
          <span>
            {footer.links.map((l) => (
              <a key={l.label} href={l.href} className="underline">
                {l.label}
              </a>
            ))}
          </span>
        </div>
      </div>
    </footer>
  )
}
