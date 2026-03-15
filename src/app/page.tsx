import { loadStatus } from "../lib/data";
import type { ModuleState, ModuleStatus, StatusPayload } from "../types/mission-control";

const highlights = [
  { label: "Operational Tempo", value: "Green", detail: "6 active tracks" },
  { label: "Intel Signals", value: "12", detail: "+3 overnight" },
  { label: "Automation Runs", value: "34", detail: "last 24h" }
];

const stateStyles: Record<ModuleState, string> = {
  "Live": "text-emerald-300 bg-emerald-500/10 border-emerald-400/40",
  "In Progress": "text-sky-300 bg-sky-500/10 border-sky-400/40",
  "Not Started": "text-white/60 bg-white/5 border-white/10",
  "Blocked": "text-amber-300 bg-amber-500/10 border-amber-400/40"
};

const timeFormatter = new Intl.DateTimeFormat("en-US", {
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
  timeZone: "America/New_York"
});

function formatTime(timestamp: string) {
  return timeFormatter.format(new Date(timestamp));
}

function StatusPanel({ title, items }: { title: string; items: ModuleStatus[] }) {
  return (
    <div className="glass-card rounded-3xl border border-white/10 p-6 space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-white/50">{title === "Build Status" ? "Vector" : "Runtime"}</p>
          <h3 className="text-2xl font-semibold">{title}</h3>
        </div>
        <span className="text-xs text-white/40">Not Started / In Progress / Live / Blocked</span>
      </div>
      <div className="space-y-3">
        {items.map((item) => (
          <div key={item.id} className="rounded-2xl border border-white/10 bg-white/5 p-4 space-y-2">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold">{item.name}</p>
              <span className={`text-xs px-3 py-1 rounded-full border ${stateStyles[item.state]}`}>{item.state}</span>
            </div>
            <div className="text-xs text-white/50 flex items-center justify-between">
              <span>Owner: {item.owner}</span>
              <span>Updated {formatTime(item.updated)}</span>
            </div>
            <p className="text-sm text-white/70">{item.notes}</p>
            {item.blocker && <p className="text-xs text-amber-300/80">Blocker: {item.blocker}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Page() {
  const status = loadStatus() as StatusPayload;
  const activity = status.activity;

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
            {activity.map((item) => (
              <div key={item.id} className="flex gap-4">
                <div className="text-white/40 text-sm w-16">{formatTime(item.timestamp)}</div>
                <div className="flex-1 border-b border-white/10 pb-3 text-white/80">
                  <p className="font-medium">{item.summary}</p>
                  <p className="text-xs text-white/50">{item.owner}</p>
                </div>
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

      <div className="grid gap-6 lg:grid-cols-2">
        <StatusPanel title="Build Status" items={status.build} />
        <StatusPanel title="Runtime Status" items={status.runtime} />
      </div>
    </div>
  );
}
