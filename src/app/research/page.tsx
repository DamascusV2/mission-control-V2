import research from "../../data/mission-control/research.json";

export default function ResearchPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-white/50">Research Hub</p>
        <h2 className="text-2xl font-semibold">Initiatives</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {research.map((item) => (
          <div key={item.id} className="bg-panel rounded-2xl border border-white/5 shadow-panel p-4 space-y-2">
            <p className="text-sm font-semibold">{item.title}</p>
            <p className="text-xs text-white/50">Owner: {item.owner}</p>
            <p className="text-xs text-white/60">Status: {item.status}</p>
            <p className="text-xs text-white/60">Next: {item.next}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
