import AdiFrostLanding from '@/components/AdiFrostLanding'

export default function Home() {
  try {
    return <AdiFrostLanding />
  } catch {
    return <div>Something went wrong.</div>
  }
}