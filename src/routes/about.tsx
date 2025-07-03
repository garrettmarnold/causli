import { Article } from '@/components/article'
import { Layout } from '@/components/layout'

function AboutPage() {
  return (
    <Layout>
      <Article
        title="About Clausly"
        imageAlt="Legal tech intake automation"
        imageSrc="https://picsum.photos/420/640?grayscale"
      >
        {/* prettier-ignore */}
        <p>
          Clausly automates intake for solo attorneys—ending missed calls, no-shows, and tire kickers.
        </p>
        <p>
          We deliver AI-powered client qualification and booking, so you focus on law, not admin.
        </p>
        <p>
          Built for solos. Designed to maximize billable hours and client growth.
        </p>
      </Article>
    </Layout>
  )
}

export default AboutPage
