import { Article } from '@/components/article'
import { Layout } from '@/components/layout'

export default function ContactPage() {
  return (
    <Layout>
      <Article
        title="Contact Us"
        imageAlt="Email Icon"
        imageSrc="https://picsum.photos/420/640?grayscale"
      >
        <p className="text-lg font-medium mb-2">Reach out anytime:</p>
        <a 
          href="mailto:tryclausly@gmail.com" 
          className="text-blue-600 hover:underline break-all"
        >
          tryclausly@gmail.com
        </a>
      </Article>
    </Layout>
  )
}
