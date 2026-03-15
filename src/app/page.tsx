const highlights = [
  { label: "Operational Tempo", value: "Green", detail: "6 active tracks" },
  { label: "Intel Signals", value: "12", detail: "+3 overnight" },
  { label: "Automation Runs", value: "34", detail: "last 24h" }
];

const opsFeed = [
  { time: "08:10", text: "Roofing data ingestion kick-off" },
  { time: "07:30", text: "Discord HQ channels verified" },
  { time: "06:45", text: "Security audit steady" }
];

export default function Page() {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 xl:grid-cols-3">
        <div className="xl:col-span-2 glass-card rounded-3xl border border-white/10 p-6">
          <p className="text-xs uppercase tracking-[0.4em] text-white/50">War Room</p>
          <h2 className="text-4xl font-semibold mt-2">Command Overview</h2>
          <p className="text-white/60 mt-3 max-w-2xl">
            Monitor ops tempo, threat signals, and automation health at a glance.
          </p>
          <div className="grid gap-4 mt-6 sm:grid-cols-3">
            {highlights.map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/10 glass-card p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-white/50">{item.label}</p>
                <p className="text-3xl font-semibold mt-1">{item.value}</p>
                <p className="text-sm text-white/60">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="glass-card rounded-3xl border border-white/10 p-6 flex flex-col justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-white/50">Priority</p>
            <h3 className="text-2xl font-semibold mt-2">Mission 001</h3>
            <p className="text-white/60 mt-2">Roofing Lead Engine ready for data ingest + scoring today.</p>
          </div>
          <div className="mt-4 space-y-2 text-sm text-white/80">
            <p>• Finalize War Room deploy</p>
            <p>• Automate Morning Brief + Discord logs</p>
            <p>• Deliver lead batch</p>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="glass-card rounded-3xl border border-white/10 p-6 lg:col-span-2">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-white/50">Ops Feed</p>
              <h3 className="text-2xl font-semibold">Live Activity</h3>
            </div>
            <div className="text-sm text-white/50">Eastern Time</div>
          </div>
          <div className="mt-4 space-y-4">
            {opsFeed.map((item) => (
              <div key={item.time} className="flex gap-4">
                <div className="text-white/40 text-sm w-16">{item.time}</div>
                <div className="flex-1 border-b border-white/10 pb-3 text-white/80">{item.text}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="glass-card rounded-3xl border border-white/10 p-6 space-y-4">
          <p className="text-xs uppercase tracking-[0.4em] text-white/50">Quick Actions</p>
          <button className="w-full rounded-2xl border border-emerald-300/40 bg-emerald-500/10 px-4 py-3 text-left text-sm">
            ⟶ Deploy latest War Room build
          </button>
          <button className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-left text-sm">
            ⟶ Trigger Discord system-health post
          </button>
          <button className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-left text-sm">
            ⟶ Generate Morning Brief draft
          </button>
        </div>
      </div>
    </div>
  );
}
