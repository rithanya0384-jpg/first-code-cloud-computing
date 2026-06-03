export default function ProviderCard({ name, type, description, services }) {
  return (
    <div className="glass-effect rounded-lg p-4 text-white border border-sky-300/20 hover:border-sky-300/50 transition-all duration-300">
      <h3 className="text-lg font-bold mb-2">{name}</h3>
      <p className="text-sm text-sky-300 mb-2">{type}</p>
      <p className="text-sky-100 text-sm mb-3">{description}</p>
      <div className="flex flex-wrap gap-2">
        {services.map((service, idx) => (
          <span key={idx} className="text-xs bg-sky-500/20 text-sky-200 px-2 py-1 rounded">
            {service}
          </span>
        ))}
      </div>
    </div>
  )
}
