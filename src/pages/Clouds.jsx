import { Server, Layers, Globe, Zap } from 'lucide-react'
import CloudCard from '../components/CloudCard'
import ProviderCard from '../components/ProviderCard'

export default function Clouds() {
  const serviceModels = [
    {
      icon: Server,
      title: 'Infrastructure as a Service (IaaS)',
      description: 'Virtualized computing resources over the internet',
      features: [
        'Virtual machines',
        'Storage and databases',
        'Networking infrastructure',
        'Full control and flexibility'
      ]
    },
    {
      icon: Layers,
      title: 'Platform as a Service (PaaS)',
      description: 'Complete development and deployment environment',
      features: [
        'Development frameworks',
        'Managed databases',
        'Integration tools',
        'Reduced complexity'
      ]
    },
    {
      icon: Globe,
      title: 'Software as a Service (SaaS)',
      description: 'Ready-to-use applications over the internet',
      features: [
        'Web-based access',
        'No installation needed',
        'Automatic updates',
        'Subscription pricing'
      ]
    },
    {
      icon: Zap,
      title: 'Cloud Deployment Models',
      description: 'Different ways to deploy cloud infrastructure',
      features: [
        'Public clouds',
        'Private clouds',
        'Hybrid clouds',
        'Multi-cloud strategies'
      ]
    }
  ]

  const paidProviders = [
    {
      name: 'AWS',
      type: 'Paid',
      description: 'Amazon Web Services - Market leader with extensive services',
      services: ['EC2', 'S3', 'RDS', 'Lambda', 'CloudFront']
    },
    {
      name: 'Microsoft Azure',
      type: 'Paid',
      description: 'Enterprise cloud platform with strong integration',
      services: ['VMs', 'App Service', 'SQL Database', 'Functions', 'Cosmos DB']
    },
    {
      name: 'Google Cloud',
      type: 'Paid',
      description: 'Data and AI-focused cloud platform',
      services: ['Compute Engine', 'App Engine', 'Cloud SQL', 'BigQuery', 'Dataflow']
    },
    {
      name: 'Vercel',
      type: 'Paid',
      description: 'Frontend cloud platform optimized for Next.js',
      services: ['Hosting', 'Serverless Functions', 'Analytics', 'Edge Network']
    }
  ]

  const freeProviders = [
    {
      name: 'Render',
      type: 'Free Tier',
      description: 'Modern cloud platform with generous free tier',
      services: ['Web Services', 'Databases', 'Background Jobs', 'Cron Jobs']
    },
    {
      name: 'Heroku',
      type: 'Free Tier',
      description: 'Platform as a Service with free tier options',
      services: ['Dynos', 'PostgreSQL', 'Redis', 'Add-ons']
    },
    {
      name: 'Firebase',
      type: 'Free Tier',
      description: 'Google\'s backend platform with free tier',
      services: ['Realtime Database', 'Firestore', 'Authentication', 'Hosting']
    },
    {
      name: 'Netlify',
      type: 'Free Tier',
      description: 'Frontend hosting with continuous deployment',
      services: ['Static Hosting', 'Functions', 'Forms', 'Analytics']
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-900 via-purple-900 to-sky-800">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
          Cloud <span className="gradient-text">Service Models</span>
        </h1>
        <p className="text-xl text-sky-100 max-w-2xl">
          Understand different cloud service models and deployment strategies
        </p>
      </section>

      {/* Service Models */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-4xl font-bold text-white mb-12">Service Models</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {serviceModels.map((model, idx) => (
            <CloudCard
              key={idx}
              icon={model.icon}
              title={model.title}
              description={model.description}
              features={model.features}
            />
          ))}
        </div>
      </section>

      {/* Cloud Providers */}
      <section className="bg-black/20 py-16 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-12">Cloud Providers</h2>

          {/* Paid Providers */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-sky-300 mb-8">Paid Providers</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {paidProviders.map((provider, idx) => (
                <ProviderCard
                  key={idx}
                  name={provider.name}
                  type={provider.type}
                  description={provider.description}
                  services={provider.services}
                />
              ))}
            </div>
          </div>

          {/* Free Providers */}
          <div>
            <h3 className="text-2xl font-bold text-sky-300 mb-8">Free Tier Providers</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {freeProviders.map((provider, idx) => (
                <ProviderCard
                  key={idx}
                  name={provider.name}
                  type={provider.type}
                  description={provider.description}
                  services={provider.services}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
