export default function CloudCard({ icon: Icon, title, description, features }) {
  return (
    <div className="glass-effect rounded-xl p-6 text-white border border-sky-300/20 hover:border-sky-300/50 transition-all duration-300">
      <div className="flex items-center gap-3 mb-3">
        <Icon className="w-6 h-6 text-sky-400" />
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <p className="text-sky-100 mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-center gap-2 text-sky-200">
            <span className="text-sky-400">✓</span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  )
}
