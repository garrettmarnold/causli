import { cn } from '@/utils/cn'
import type { ChangeEvent, FormEvent } from 'react'
import { useState } from 'react'

function NewsletterForm({
  className,
  submitText = 'Submit',
}: {
  className?: string
  submitText?: string
}) {
  const [email, setEmail] = useState('')
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLoading(true)
    setError(null)
    setSuccess(false)

    try {
      const response = await fetch('https://formsubmit.co/ajax/989155ff6c3d52645a9f28d995f49cb0', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ email }),
      })
      const data = await response.json()

      if (response.ok) {
        setSuccess(true)
        setEmail('')
      } else {
        setError(data.message || 'Submission failed')
      }
    } catch (e) {
      setError('Network error')
    } finally {
      setLoading(false)
    }
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn('newsletter-form is-revealing flex flex-col gap-2 sm:flex-row', className)}
    >
      <div className="mr-2 flex-shrink flex-grow">
        <label className="hidden" htmlFor="email" aria-hidden="true">
          Email
        </label>
        <input
          required
          placeholder="Your best email&hellip;"
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={handleChange}
          autoComplete="off"
          disabled={loading}
          className="w-full rounded-sm border border-gray-300 bg-white px-4 py-3 text-sm text-gray-500 shadow-none"
        />
        {success && (
          <div className="mt-2 text-xs italic text-gray-500">Email submitted successfully!</div>
        )}
        {error && (
          <div className="mt-2 text-xs italic text-red-500">{error}</div>
        )}
      </div>

      <div className="control">
        <button
          className="-mt-px inline-flex cursor-pointer justify-center whitespace-nowrap rounded-sm border-0 bg-gradient-to-r from-secondary-500 to-secondary-400 px-7 py-4 text-center font-medium leading-4 text-white no-underline shadow-lg"
          type="submit"
          disabled={loading}
        >
          {loading ? 'Submitting...' : submitText}
        </button>
      </div>
    </form>
  )
}

export default NewsletterForm
