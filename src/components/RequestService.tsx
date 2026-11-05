import { useEffect, useRef, useState, type FormEvent } from 'react'
import { request, type RequestField } from '../content/site'

type Values = Record<RequestField, string>
type Status = 'idle' | 'sending' | 'sent' | 'not-connected' | 'error'

const empty: Values = { zip: '', service: '', firstName: '', lastName: '', phone: '', email: '' }

/** Native input settings per field; the browser does the required/format checks. */
const inputProps: Record<Exclude<RequestField, 'service'>, React.InputHTMLAttributes<HTMLInputElement>> = {
  zip: { type: 'text', inputMode: 'numeric', autoComplete: 'postal-code', pattern: '\\d{5}', maxLength: 5, title: 'Enter a 5-digit ZIP code' },
  firstName: { type: 'text', autoComplete: 'given-name' },
  lastName: { type: 'text', autoComplete: 'family-name' },
  phone: { type: 'tel', autoComplete: 'tel', pattern: '[\\d\\s()+.\\-]{10,}', title: 'Enter a phone number with area code' },
  email: { type: 'email', autoComplete: 'email' },
}

/**
 * Three-step request card that overlaps the bottom of the hero and the top of the offers band.
 * Step 1: ZIP + service. Step 2: name. Step 3: phone + email, consent text, submit.
 */
export function RequestService() {
  const [step, setStep] = useState(0)
  const [values, setValues] = useState<Values>(empty)
  const [status, setStatus] = useState<Status>('idle')
  const firstField = useRef<HTMLInputElement | HTMLSelectElement | null>(null)
  const moved = useRef(false)

  const current = request.steps[step]
  const isLast = step === request.steps.length - 1

  // Move focus to the first field of a new step (not on first page load)
  useEffect(() => {
    if (moved.current) firstField.current?.focus()
  }, [step])

  const set = (f: RequestField) => (e: { target: { value: string } }) =>
    setValues((v) => ({ ...v, [f]: e.target.value }))

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (!isLast) {
      moved.current = true
      setStep(step + 1)
      return
    }
    if (!request.endpoint) {
      setStatus('not-connected')
      return
    }
    setStatus('sending')
    try {
      const res = await fetch(request.endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })
      setStatus(res.ok ? 'sent' : 'error')
    } catch {
      setStatus('error')
    }
  }

  function back() {
    moved.current = true
    setStatus('idle')
    setStep(step - 1)
  }

  return (
    <section
      id={request.id}
      className="relative z-10 mx-auto -mt-(--request-overlap) max-w-(--request-max) rounded-box bg-paper px-15 pt-6 pb-11 text-center shadow-box max-md:mx-4 max-md:px-5 max-md:py-6 md:max-lg:mx-6"
    >
      <h2 className="m-0 mb-2 text-h2 leading-tight font-bold">{request.title}</h2>
      <p className="m-0 mb-5 text-md">{request.intro}</p>

      {status === 'sent' ? (
        <p className="m-0 text-lead font-bold" role="status">
          {request.thanks}
        </p>
      ) : (
        <form
          className="grid items-center gap-3.5 md:gap-5.5 md:grid-cols-[1fr_1fr_auto]"
          onSubmit={onSubmit}
          aria-label={`${request.title}, ${current.button}`}
        >
          {current.fields.map((f, i) => {
            const ref = i === 0 ? (el: HTMLInputElement | HTMLSelectElement | null) => {
                    firstField.current = el
                  }
                : undefined
            return f === 'service' ? (
              <select
                key={f}
                ref={ref}
                name={f}
                required
                className="field"
                aria-label={request.labels[f]}
                value={values[f]}
                onChange={set(f)}
              >
                <option value="" disabled>
                  {request.servicePlaceholder}
                </option>
                {request.services.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            ) : (
              <input
                key={f}
                ref={ref}
                name={f}
                required
                className="field"
                placeholder={request.labels[f]}
                aria-label={request.labels[f]}
                value={values[f]}
                onChange={set(f)}
                {...inputProps[f]}
              />
            )
          })}
          <button className="btn btn-primary h-(--field-h) px-8" type="submit" disabled={status === 'sending'}>
            {current.button}
          </button>
        </form>
      )}

      {status !== 'sent' && (
        <div className="mt-3 flex flex-wrap items-start justify-between gap-x-6 gap-y-2 text-left">
          {isLast && (
            <p className="m-0 flex-1 basis-80 text-small text-muted">
              {request.consent}{' '}
              <a href={request.privacyHref} className="underline">
                {request.privacyLabel}
              </a>
            </p>
          )}
          {step > 0 && (
            <button
              type="button"
              onClick={back}
              className="ml-auto cursor-pointer border-0 bg-transparent p-0 text-small text-muted underline"
            >
              {request.backLabel}
            </button>
          )}
        </div>
      )}

      {(status === 'not-connected' || status === 'error') && (
        <p className="m-0 mt-3 text-md font-bold text-accent" role="alert">
          {status === 'error' ? request.error : request.notConnected}
        </p>
      )}
    </section>
  )
}
