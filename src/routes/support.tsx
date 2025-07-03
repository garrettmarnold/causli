import { Article } from '@/components/article'
import { Layout } from '@/components/layout'
import { useState, ChangeEvent, FormEvent } from 'react'

const FORM_SUBMIT_TOKEN = '989155ff6c3d52645a9f28d995f49cb0' // your FormSubmit ID

function SupportForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setSuccess(false)

    try {
      const res = await fetch(`https://formsubmit.co/ajax/${FORM_SUBMIT_TOKEN}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(form),
      })

      const data = await res.json()
      if (res.ok) {
        setSuccess(true)
        setForm({ name: '', email: '', message: '' })
      } else {
        setError(data.message || 'Submission failed')
      }
    } catch {
      setError('Network error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-lg font-medium leading-10" htmlFor="name">
          Name
        </label>
        <input
          className="w-full rounded-sm border border-gray-300 bg-white px-4 py-3 text-sm text-gray-500 shadow-none"
          id="name"
          name="name"
          type="text"
          required
          value={form.name}
          onChange={handleChange}
          disabled={loading}
        />
      </div>
      <div>
        <label className="block text-lg font-medium leading-10" htmlFor="email">
          Email
        </label>
        <input
          className="w-full rounded-sm border border-gray-300 bg-white px-4 py-3 text-sm text-gray-500 shadow-none"
          id="email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange}
          disabled={loading}
        />
      </div>
      <div>
        <label className="block text-lg font-medium leading-10" htmlFor="message">
          Message
        </label>
        <textarea
          className="w-full rounded-sm border border-gray-300 bg-white px-4 py-3 text-sm text-gray-500 shadow-none"
          id="message"
          name="message"
          required
          value={form.message}
          onChange={handleChange}
          disabled={loading}
        />
      </div>

      <button
        className=" -mt-px inline-flex cursor-pointer justify-center whitespace-nowrap rounded-sm border-0 bg-gradient-to-r from-secondary-500 to-secondary-400 px-7 py-4 text-center font-medium leading-4 text-white no-underline shadow-lg"
        type="submit"
        disabled={loading}
      >
        {loading ? 'Submitting...' : 'Submit'}
      </button>

      {success && (
        <div className="mt-2 text-xs italic text-gray-500">🎉 Your message has been sent successfully!</div>
      )}
      {error && (
        <div className="mt-2 text-xs italic text-red-500">{error}</div>
      )}
    </form>
  )
}

export default function SupportPage() {
  return (
    <Layout>
      <Article
        title="Support"
        imageAlt="Lorem Picsum"
        imageSrc="https://picsum.photos/420/640?grayscale"
      >
        <p>Add your support content here.</p>
        <SupportForm />
      </Article>
    </Layout>
  )
}
