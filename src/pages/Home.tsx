import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle } from 'lucide-react'
import Hero from '../components/sections/Hero'
import ServicesPreview from '../components/sections/ServicesPreview'
import WhyChooseUs from '../components/sections/WhyChooseUs'
import PortfolioPreview from '../components/sections/PortfolioPreview'
import CTA from '../components/sections/CTA'

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <WhyChooseUs />
      <PortfolioPreview />
      <CTA />
    </>
  )
}
