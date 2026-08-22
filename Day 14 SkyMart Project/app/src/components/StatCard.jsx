export default function StatCard({ icon: Icon, iconBg, iconColor, value, label, sub }) {
  return (
    <div className="card p-5 flex items-center gap-4">
      {Icon && (
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
          style={{ backgroundColor: iconBg }}
        >
          <Icon size={20} style={{ color: iconColor }} />
        </div>
      )}
      <div>
        <p className="text-2xl font-bold leading-tight">{value}</p>
        <p className="text-sm text-neutral-300">{label}</p>
        {sub && <p className="text-xs text-neutral-500">{sub}</p>}
      </div>
    </div>
  );
}
