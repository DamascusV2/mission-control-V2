import opportunities from "../../data/mission-control/opportunities.json";

export default function OpportunitiesPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-white/50">Opportunity Scanner</p>
        <h2 className="text-2xl font-semibold">Signals</h2>
      </div>
      <div className="space-y-4">
        {opportunities.map((opportunity) => (
          <div key={opportunity.id} className="bg-panel rounded-2xl border border-white/5 shadow-panel p-4">
            <div className="flex items-center justify-between text-xs text-white/50">
              <span>{opportunity.category}</span>
              <span className="uppercase">{opportunity.status}</span>
            </div>
            <p className="text-sm text-white/80 mt-2">{opportunity.signal}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
