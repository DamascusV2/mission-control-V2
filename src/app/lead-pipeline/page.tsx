import leads from "../../data/mission-control/leads.json";

export default function LeadPipelinePage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-white/50">Lead Engine</p>
        <h2 className="text-2xl font-semibold">Pipeline Tracker</h2>
      </div>
      <div className="bg-panel rounded-2xl border border-white/5 shadow-panel p-5 flex gap-6 text-sm">
        <div>
          <p className="text-white/50">Total Leads</p>
          <p className="text-3xl font-semibold">{leads.summary.total}</p>
        </div>
        <div>
          <p className="text-white/50">New Today</p>
          <p className="text-3xl font-semibold">+{leads.summary.newToday}</p>
        </div>
        <div>
          <p className="text-white/50">Priority</p>
          <p className="text-3xl font-semibold">{leads.summary.priority}</p>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {leads.pipelines.map((pipeline) => (
          <div key={pipeline.id} className="bg-panel rounded-2xl border border-white/5 shadow-panel p-4 space-y-2">
            <p className="text-sm font-semibold">{pipeline.name}</p>
            <p className="text-xs text-white/50">Stage: {pipeline.stage}</p>
            <p className="text-xs text-white/60">Leads: {pipeline.leads}</p>
            <p className="text-xs text-white/60">Next: {pipeline.next}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
