import { Link } from 'react-router-dom'
import { ArrowRight, Zap, Shield, TrendingUp } from 'lucide-react'
import CloudCard from '../components/CloudCard'

export default function Home() {
  const features = [
    {
      icon: Zap,
      title: 'Fast & Reliable',
      description: 'Experience lightning-fast cloud services with 99.9% uptime guarantee',
      features: ['Global CDN', 'Auto-scaling', 'Load balancing', 'Redundancy']
    },
    {
      icon: Shield,
      title: 'Secure & Compliant',
      description: 'Enterprise-grade security with compliance certifications',
      features: ['Encryption', 'HIPAA compliant', 'SOC 2 certified', 'DDoS protection']
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-900 via-purple-900 to-sky-800">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Explore Cloud <span className="gradient-text">Computing</span>
          </h1>
          <p className="text-xl text-sky-100 mb-8 max-w-2xl mx-auto">
            Learn about cloud computing, understand different service models, and discover how to leverage cloud technology for your business.
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/learn" className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 transition">
              Start Learning <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/clouds" className="border border-sky-300 text-sky-100 hover:bg-sky-500/10 px-8 py-3 rounded-lg font-semibold transition">
              Explore Clouds
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Why Choose Cloud?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, idx) => (
            <CloudCard
              key={idx}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              features={feature.features}
            />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black/20 py-16 mt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Master Cloud Computing?</h2>
          <p className="text-xl text-sky-100 mb-8">
            Dive into our comprehensive learning modules and become a cloud expert.
          </p>
          <Link to="/learn" className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 rounded-lg font-semibold inline-block transition">
            Start Your Journey
          </Link>
        </div>
      </section>
    </div>
  )
}
