import { Article } from '@/components/article'
import { Layout } from '@/components/layout'

export default function FaqsPage() {
  return (
    <Layout>
      <Article
        title="FAQs"
        imageAlt="Legal tech intake questions"
        imageSrc="https://picsum.photos/420/640?grayscale"
      >
        <details
          className="mt-4 block rounded-sm border px-4 open:border-primary-400 hover:border-primary-300"
          open
        >
          <summary className="-mx-4 cursor-pointer border-primary-200 px-4 py-3">
            What problem does Clausly solve?
          </summary>
          <p>
            Clausly eliminates intake chaos for solo attorneys by automating lead qualification,
            follow-up, and appointment booking—reducing missed calls, no-shows, and tire kickers.
          </p>
        </details>
        <details className="mt-4 block rounded-sm border border-gray-200 px-4 hover:border-primary-300">
          <summary className="-mx-4 cursor-pointer px-4 py-3">
            How does Clausly integrate with my current workflow?
          </summary>
          <p>
            Clausly plugs into your existing systems and calendars with minimal setup, automating
            intake without adding complexity or requiring new apps.
          </p>
        </details>
        <details className="mt-4 block rounded-sm border border-gray-200 px-4 hover:border-primary-300">
          <summary className="-mx-4 cursor-pointer px-4 py-3">
            Will Clausly reduce no-shows and unqualified leads?
          </summary>
          <p>
            Yes. By pre-qualifying leads and automating follow-ups, Clausly drastically cuts no-shows
            and ensures you only meet serious clients.
          </p>
        </details>
        <details className="mt-4 block rounded-sm border border-gray-200 px-4 hover:border-primary-300">
          <summary className="-mx-4 cursor-pointer px-4 py-3">What types of solo attorneys benefit?</summary>
          <p>
            Clausly is designed for all solo practice areas struggling with intake inefficiency,
            including family, business, criminal, and entertainment law.
          </p>
        </details>
        <details className="mt-4 block rounded-sm border border-gray-200 px-4 hover:border-primary-300">
          <summary className="-mx-4 cursor-pointer px-4 py-3">How do I join the Clausly early access cohort?</summary>
          <p>
            Join our waitlist on the homepage to secure a spot for personalized onboarding and early pricing.
          </p>
        </details>
      </Article>
    </Layout>
  )
}
