import { reviews } from '../content/site'

function Stars({ className = '' }: { className?: string }) {
  return (
    <span className={`tracking-[0.1em] text-accent ${className}`} role="img" aria-label="5 out of 5 stars">
      ★★★★★
    </span>
  )
}

export function Reviews() {
  return (
    <section className="bg-ice py-section">
      <div data-reveal className="container-site grid items-start gap-8 lg:grid-cols-[0.9fr_2fr]">
        <div>
          <h2 className="m-0 text-h2 leading-tight font-bold">{reviews.title}</h2>
          <div className="mt-4 grid gap-1">
            <span className="text-score leading-none font-medium">{reviews.rating.score}</span>
            <Stars className="text-h3" />
            <span className="text-btn text-muted">{reviews.rating.count}</span>
          </div>
        </div>
        {/* Two cards per row to match the reference card width; an odd last card spans the row */}
        <div className="grid items-start gap-4 md:grid-cols-2">
          {reviews.items.map((r) => (
            <article
              key={r.name}
              className="card rounded-box border border-rule bg-paper p-5 shadow-box md:odd:last:col-span-2"
            >
              <Stars className="mb-2 block text-h3" />
              <p className="m-0 text-md">{r.text}</p>
              <div className="mt-3 text-h3 font-bold">{r.name}</div>
              {reviews.sourceHref ? (
                <a
                  href={reviews.sourceHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link hit text-note text-muted no-underline hover:underline"
                >
                  {reviews.sourceLabel}
                </a>
              ) : (
                <div className="text-note text-muted">{reviews.sourceLabel}</div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
