import { Hero, HeroIllustration } from '@/components/hero'
import { Layout } from '@/components/layout'

export default function HomePage() {
  return (
    <Layout>
      <Hero
        title="Intake Is Broken. Stop Fixing It with Your Time."
        content="Causli gives solos a done-for-you intake engine—without the admin."
        illustration={<HeroIllustration />}
      />
    </Layout>
  )
}
