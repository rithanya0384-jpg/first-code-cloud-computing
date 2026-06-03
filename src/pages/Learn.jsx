import { BookOpen, Lightbulb, Target, TrendingUp } from 'lucide-react'

export default function Learn() {
  const learningModules = [
    {
      icon: Lightbulb,
      title: 'Cloud Computing Basics',
      description: 'Understand the fundamentals of cloud computing and how it works',
      features: [
        'What is cloud computing?',
        'On-demand resources',
        'Pay-as-you-go model',
        'Scalability and flexibility'
      ]
    },
    {
      icon: Target,
      title: 'Cloud Service Models',
      description: 'Learn about IaaS, PaaS, and SaaS cloud service models',
      features: [
        'Infrastructure as a Service (IaaS)',
        'Platform as a Service (PaaS)',
        'Software as a Service (SaaS)',
        'Choosing the right model'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Cloud Deployment Models',
      description: 'Explore public, private, and hybrid cloud deployments',
      features: [
        'Public clouds',
        'Private clouds',
        'Hybrid clouds',
        'Multi-cloud strategies'
      ]
    },
    {
      icon: BookOpen,
      title: 'Cloud Security & Best Practices',
      description: 'Master security, compliance, and industry best practices',
      features: [
        'Data encryption',
        'Access control',
        'Compliance standards',
        'Disaster recovery'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-900 via-purple-900 to-sky-800">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
          Learn Cloud <span className="gradient-text">Computing</span>
        </h1>
        <p className="text-xl text-sky-100 max-w-2xl">
          Master cloud computing concepts, best practices, and deployment strategies
        </p>
      </section>

      {/* Learning Modules */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Learning Modules</h2>
          <p className="text-xl text-sky-200">Master cloud computing step by step with our structured learning path</p>
        </div>
        <div className="space-y-8">
          {learningModules.map((module, idx) => {
            const Module = module.icon
            return (
              <div key={idx} className="group">
                <div className="glass-effect rounded-2xl p-8 text-white border border-sky-300/20 hover:border-sky-300/50 transition-all duration-300 transform hover:scale-105">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-gradient-to-br from-sky-500 to-sky-600 shadow-lg">
                        <span className="text-3xl font-bold text-white">{idx + 1}</span>
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-3">
                        <Module className="w-7 h-7 text-sky-300" />
                        <h3 className="text-2xl font-bold text-white">{module.title}</h3>
                      </div>
                      <p className="text-sky-100 mb-6 text-lg leading-relaxed">{module.description}</p>
                      <div className="grid md:grid-cols-2 gap-4">
                        {module.features.map((feature, fIdx) => (
                          <div key={fIdx} className="flex items-center gap-3 bg-sky-500/10 rounded-lg p-3 border border-sky-400/20">
                            <span className="text-sky-400 text-xl">→</span>
                            <span className="text-sky-100">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Theory Section */}
      <section className="bg-black/30 py-16 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-12">Cloud Computing Theory</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="glass-effect rounded-xl p-8 text-white border border-sky-300/20">
              <h3 className="text-2xl font-bold mb-4 text-sky-300">📚 What is Cloud Computing?</h3>
              <p className="text-sky-100 mb-4 leading-relaxed">
                Cloud computing is a paradigm shift in how we think about IT infrastructure. Instead of owning and maintaining physical servers, organizations can access computing resources over the internet on a pay-as-you-go basis. This model provides unprecedented flexibility, scalability, and cost efficiency.
              </p>
              <p className="text-sky-100 leading-relaxed">
                The cloud operates on the principle of resource pooling, where multiple users share the same physical infrastructure while maintaining complete isolation and security. This shared model allows cloud providers to optimize resource utilization and pass those savings to customers.
              </p>
            </div>

            <div className="glass-effect rounded-xl p-8 text-white border border-sky-300/20">
              <h3 className="text-2xl font-bold mb-4 text-sky-300">🎯 Key Principles of Cloud Computing</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-sky-400 text-xl mt-1">◆</span>
                  <div>
                    <strong className="text-sky-300">On-Demand Self-Service:</strong>
                    <p className="text-sky-100 text-sm mt-1">Users can provision resources without human interaction</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sky-400 text-xl mt-1">◆</span>
                  <div>
                    <strong className="text-sky-300">Broad Network Access:</strong>
                    <p className="text-sky-100 text-sm mt-1">Services accessible over the network from any device</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sky-400 text-xl mt-1">◆</span>
                  <div>
                    <strong className="text-sky-300">Resource Pooling:</strong>
                    <p className="text-sky-100 text-sm mt-1">Provider resources pooled to serve multiple consumers</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sky-400 text-xl mt-1">◆</span>
                  <div>
                    <strong className="text-sky-300">Rapid Elasticity:</strong>
                    <p className="text-sky-100 text-sm mt-1">Resources can scale up or down quickly based on demand</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sky-400 text-xl mt-1">◆</span>
                  <div>
                    <strong className="text-sky-300">Measured Service:</strong>
                    <p className="text-sky-100 text-sm mt-1">Resource usage is monitored and billed accordingly</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="glass-effect rounded-xl p-8 text-white border border-sky-300/20 mb-8">
            <h3 className="text-2xl font-bold mb-6 text-sky-300">🔄 Cloud Computing Architecture</h3>
            <p className="text-sky-100 mb-6 leading-relaxed">
              Cloud architecture is built on several layers, each serving a specific purpose in delivering services to end users. Understanding these layers helps in designing scalable and reliable cloud solutions.
            </p>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-sky-500/10 rounded-lg p-4 border border-sky-400/30">
                <h4 className="text-lg font-bold text-sky-300 mb-2">SaaS Layer</h4>
                <p className="text-sky-200 text-sm">Applications and services delivered to end users</p>
              </div>
              <div className="bg-sky-500/10 rounded-lg p-4 border border-sky-400/30">
                <h4 className="text-lg font-bold text-sky-300 mb-2">PaaS Layer</h4>
                <p className="text-sky-200 text-sm">Development platforms and tools for developers</p>
              </div>
              <div className="bg-sky-500/10 rounded-lg p-4 border border-sky-400/30">
                <h4 className="text-lg font-bold text-sky-300 mb-2">IaaS Layer</h4>
                <p className="text-sky-200 text-sm">Computing resources and infrastructure</p>
              </div>
              <div className="bg-sky-500/10 rounded-lg p-4 border border-sky-400/30">
                <h4 className="text-lg font-bold text-sky-300 mb-2">Hardware</h4>
                <p className="text-sky-200 text-sm">Physical servers and networking equipment</p>
              </div>
            </div>
          </div>

          <div className="glass-effect rounded-xl p-8 text-white border border-sky-300/20">
            <h3 className="text-2xl font-bold mb-6 text-sky-300">💡 Theoretical Benefits of Cloud Computing</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-bold text-sky-300 mb-3">Cost Efficiency</h4>
                <p className="text-sky-100 mb-3">
                  Organizations eliminate capital expenditure on hardware and only pay for what they use. This operational expense model is more flexible and scalable than traditional IT infrastructure.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-sky-300 mb-3">Scalability & Flexibility</h4>
                <p className="text-sky-100 mb-3">
                  Cloud resources can be scaled up or down instantly based on demand. This elasticity allows businesses to handle traffic spikes without over-provisioning infrastructure.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-sky-300 mb-3">Reliability & Availability</h4>
                <p className="text-sky-100 mb-3">
                  Cloud providers offer high availability through redundancy, backup systems, and disaster recovery mechanisms. Service level agreements (SLAs) guarantee uptime commitments.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-sky-300 mb-3">Security & Compliance</h4>
                <p className="text-sky-100 mb-3">
                  Cloud providers invest heavily in security infrastructure, encryption, and compliance certifications. This often exceeds what individual organizations could achieve alone.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-sky-300 mb-3">Performance & Speed</h4>
                <p className="text-sky-100 mb-3">
                  Global data centers and content delivery networks (CDNs) ensure low latency and high performance. Automatic updates and patches keep systems optimized.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-sky-300 mb-3">Accessibility & Collaboration</h4>
                <p className="text-sky-100 mb-3">
                  Cloud services are accessible from anywhere with an internet connection, enabling remote work and global collaboration. This promotes agility and innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Cloud Computing Topics */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mt-16">
        <h2 className="text-4xl font-bold text-white mb-12">Detailed Cloud Computing Topics</h2>

        {/* IaaS */}
        <div className="glass-effect rounded-xl p-8 text-white border border-sky-300/20 mb-8">
          <h3 className="text-3xl font-bold mb-6 text-sky-300">🖥️ Infrastructure as a Service (IaaS)</h3>
          <p className="text-sky-100 mb-4 leading-relaxed">
            Infrastructure as a Service (IaaS) is a cloud computing model that provides virtualized computing resources over the internet. With IaaS, you rent IT infrastructure such as servers, storage, and networking from a cloud provider on a pay-as-you-go basis. This eliminates the need to purchase and maintain physical hardware.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div>
              <h4 className="text-lg font-bold text-sky-300 mb-3">Key Characteristics</h4>
              <ul className="space-y-2 text-sky-200">
                <li>✓ Virtualized computing resources</li>
                <li>✓ On-demand scalability</li>
                <li>✓ Pay-per-use pricing model</li>
                <li>✓ Full control over infrastructure</li>
                <li>✓ No physical hardware management</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold text-sky-300 mb-3">Services Provided</h4>
              <ul className="space-y-2 text-sky-200">
                <li>✓ Virtual machines (servers)</li>
                <li>✓ Storage and databases</li>
                <li>✓ Networking infrastructure</li>
                <li>✓ Load balancing</li>
                <li>✓ Backup and disaster recovery</li>
              </ul>
            </div>
          </div>
          <p className="text-sky-100 mt-4">
            <strong>Best For:</strong> Organizations that need maximum control over their infrastructure, developers building custom applications, and businesses with unpredictable workloads that require flexible scaling.
          </p>
          <p className="text-sky-100 mt-2">
            <strong>Examples:</strong> AWS EC2, Microsoft Azure Virtual Machines, Google Compute Engine, DigitalOcean
          </p>
        </div>

        {/* PaaS */}
        <div className="glass-effect rounded-xl p-8 text-white border border-sky-300/20 mb-8">
          <h3 className="text-3xl font-bold mb-6 text-sky-300">🛠️ Platform as a Service (PaaS)</h3>
          <p className="text-sky-100 mb-4 leading-relaxed">
            Platform as a Service (PaaS) provides a complete development and deployment environment in the cloud. It includes everything needed to build and deploy applications, including development tools, databases, middleware, and runtime environments. Developers can focus on writing code without worrying about infrastructure management.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div>
              <h4 className="text-lg font-bold text-sky-300 mb-3">Key Characteristics</h4>
              <ul className="space-y-2 text-sky-200">
                <li>✓ Complete development environment</li>
                <li>✓ Pre-built development tools</li>
                <li>✓ Integrated databases and middleware</li>
                <li>✓ Reduced development complexity</li>
                <li>✓ Automatic updates and maintenance</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold text-sky-300 mb-3">Services Provided</h4>
              <ul className="space-y-2 text-sky-200">
                <li>✓ Application development frameworks</li>
                <li>✓ Managed databases</li>
                <li>✓ Integration tools</li>
                <li>✓ API management</li>
                <li>✓ Deployment and hosting</li>
              </ul>
            </div>
          </div>
          <p className="text-sky-100 mt-4">
            <strong>Best For:</strong> Development teams building web and mobile applications, rapid application development, and organizations wanting to reduce time-to-market for new applications.
          </p>
          <p className="text-sky-100 mt-2">
            <strong>Examples:</strong> Heroku, Google App Engine, AWS Elastic Beanstalk, Azure App Service
          </p>
        </div>

        {/* SaaS */}
        <div className="glass-effect rounded-xl p-8 text-white border border-sky-300/20 mb-8">
          <h3 className="text-3xl font-bold mb-6 text-sky-300">📱 Software as a Service (SaaS)</h3>
          <p className="text-sky-100 mb-4 leading-relaxed">
            Software as a Service (SaaS) delivers fully managed applications over the internet. Users access these applications through a web browser without needing to install or maintain any software locally. The cloud provider handles all updates, security, and maintenance, allowing users to focus on using the application.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div>
              <h4 className="text-lg font-bold text-sky-300 mb-3">Key Characteristics</h4>
              <ul className="space-y-2 text-sky-200">
                <li>✓ Web-based access</li>
                <li>✓ No installation required</li>
                <li>✓ Automatic updates and patches</li>
                <li>✓ Multi-tenant architecture</li>
                <li>✓ Subscription-based pricing</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold text-sky-300 mb-3">Services Provided</h4>
              <ul className="space-y-2 text-sky-200">
                <li>✓ Email and collaboration tools</li>
                <li>✓ Customer relationship management</li>
                <li>✓ Business intelligence and analytics</li>
                <li>✓ Productivity applications</li>
                <li>✓ Communication platforms</li>
              </ul>
            </div>
          </div>
          <p className="text-sky-100 mt-4">
            <strong>Best For:</strong> End users and businesses needing ready-to-use applications, companies without IT resources, and organizations requiring easy collaboration and accessibility.
          </p>
          <p className="text-sky-100 mt-2">
            <strong>Examples:</strong> Salesforce, Microsoft 365, Google Workspace, Slack, Zoom
          </p>
        </div>

        {/* Deployment Models */}
        <div className="glass-effect rounded-xl p-8 text-white border border-sky-300/20 mb-8">
          <h3 className="text-3xl font-bold mb-6 text-sky-300">☁️ Cloud Deployment Models</h3>
          <p className="text-sky-100 mb-6">
            Cloud deployment models define how cloud infrastructure is deployed and who has access to it. Each model offers different levels of control, security, and cost considerations.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-sky-500/10 rounded-lg p-6 border border-sky-400/30">
              <h4 className="text-xl font-bold text-sky-300 mb-3">Public Cloud</h4>
              <p className="text-sky-100 mb-4">
                Cloud infrastructure is owned and operated by third-party providers and shared among multiple organizations. Resources are accessed over the public internet.
              </p>
              <h5 className="text-sm font-bold text-sky-300 mb-2">Advantages:</h5>
              <ul className="space-y-1 text-sky-200 text-sm mb-4">
                <li>• Cost-effective</li>
                <li>• Highly scalable</li>
                <li>• No maintenance required</li>
                <li>• Easy to get started</li>
              </ul>
              <h5 className="text-sm font-bold text-sky-300 mb-2">Disadvantages:</h5>
              <ul className="space-y-1 text-sky-200 text-sm">
                <li>• Less control</li>
                <li>• Security concerns</li>
                <li>• Vendor lock-in risk</li>
              </ul>
            </div>
            <div className="bg-sky-500/10 rounded-lg p-6 border border-sky-400/30">
              <h4 className="text-xl font-bold text-sky-300 mb-3">Private Cloud</h4>
              <p className="text-sky-100 mb-4">
                Cloud infrastructure is dedicated to a single organization. It can be hosted on-premises or by a third-party provider exclusively for that organization.
              </p>
              <h5 className="text-sm font-bold text-sky-300 mb-2">Advantages:</h5>
              <ul className="space-y-1 text-sky-200 text-sm mb-4">
                <li>• Maximum control</li>
                <li>• Enhanced security</li>
                <li>• Compliance flexibility</li>
                <li>• Customization options</li>
              </ul>
              <h5 className="text-sm font-bold text-sky-300 mb-2">Disadvantages:</h5>
              <ul className="space-y-1 text-sky-200 text-sm">
                <li>• Higher costs</li>
                <li>• Requires IT expertise</li>
                <li>• Limited scalability</li>
              </ul>
            </div>
            <div className="bg-sky-500/10 rounded-lg p-6 border border-sky-400/30">
              <h4 className="text-xl font-bold text-sky-300 mb-3">Hybrid Cloud</h4>
              <p className="text-sky-100 mb-4">
                Combines public and private cloud infrastructure. Organizations can run sensitive workloads on private cloud and non-sensitive workloads on public cloud.
              </p>
              <h5 className="text-sm font-bold text-sky-300 mb-2">Advantages:</h5>
              <ul className="space-y-1 text-sky-200 text-sm mb-4">
                <li>• Flexibility</li>
                <li>• Cost optimization</li>
                <li>• Security balance</li>
                <li>• Scalability</li>
              </ul>
              <h5 className="text-sm font-bold text-sky-300 mb-2">Disadvantages:</h5>
              <ul className="space-y-1 text-sky-200 text-sm">
                <li>• Complex management</li>
                <li>• Integration challenges</li>
                <li>• Higher costs</li>
              </ul>
            </div>
            <div className="bg-sky-500/10 rounded-lg p-6 border border-sky-400/30">
              <h4 className="text-xl font-bold text-sky-300 mb-3">Multi-Cloud</h4>
              <p className="text-sky-100 mb-4">
                Uses multiple cloud providers to avoid vendor lock-in and optimize costs. Different workloads run on different cloud platforms.
              </p>
              <h5 className="text-sm font-bold text-sky-300 mb-2">Advantages:</h5>
              <ul className="space-y-1 text-sky-200 text-sm mb-4">
                <li>• Avoid vendor lock-in</li>
                <li>• Best-of-breed services</li>
                <li>• Redundancy</li>
                <li>• Cost optimization</li>
              </ul>
              <h5 className="text-sm font-bold text-sky-300 mb-2">Disadvantages:</h5>
              <ul className="space-y-1 text-sky-200 text-sm">
                <li>• Complex management</li>
                <li>• Skill requirements</li>
                <li>• Integration complexity</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Service Model Comparison */}
        <div className="glass-effect rounded-xl p-8 text-white border border-sky-300/20">
          <h3 className="text-3xl font-bold mb-6 text-sky-300">Service Models Comparison</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-sky-400/30">
                  <th className="text-left py-3 px-4 text-sky-300">Aspect</th>
                  <th className="text-left py-3 px-4 text-sky-300">IaaS</th>
                  <th className="text-left py-3 px-4 text-sky-300">PaaS</th>
                  <th className="text-left py-3 px-4 text-sky-300">SaaS</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-sky-400/20">
                  <td className="py-3 px-4 text-sky-200 font-semibold">Management</td>
                  <td className="py-3 px-4 text-sky-100">You manage apps, data, runtime</td>
                  <td className="py-3 px-4 text-sky-100">You manage apps and data</td>
                  <td className="py-3 px-4 text-sky-100">Provider manages everything</td>
                </tr>
                <tr className="border-b border-sky-400/20">
                  <td className="py-3 px-4 text-sky-200 font-semibold">Control Level</td>
                  <td className="py-3 px-4 text-sky-100">Maximum control</td>
                  <td className="py-3 px-4 text-sky-100">Medium control</td>
                  <td className="py-3 px-4 text-sky-100">Minimal control</td>
                </tr>
                <tr className="border-b border-sky-400/20">
                  <td className="py-3 px-4 text-sky-200 font-semibold">Cost</td>
                  <td className="py-3 px-4 text-sky-100">Medium to high</td>
                  <td className="py-3 px-4 text-sky-100">Medium</td>
                  <td className="py-3 px-4 text-sky-100">Low (subscription)</td>
                </tr>
                <tr className="border-b border-sky-400/20">
                  <td className="py-3 px-4 text-sky-200 font-semibold">Flexibility</td>
                  <td className="py-3 px-4 text-sky-100">Highly flexible</td>
                  <td className="py-3 px-4 text-sky-100">Moderately flexible</td>
                  <td className="py-3 px-4 text-sky-100">Limited flexibility</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sky-200 font-semibold">Best For</td>
                  <td className="py-3 px-4 text-sky-100">Custom applications</td>
                  <td className="py-3 px-4 text-sky-100">App development</td>
                  <td className="py-3 px-4 text-sky-100">End users</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/40 text-sky-200 py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>© 2024 CloudHub. Explore the cloud, understand the future.</p>
        </div>
      </footer>
    </div>
  )
}
