const checks = [
  { id: "firewall", label: "Firewall / Stealth", status: "PASS", detail: "Enabled 2026-03-07 14:45" },
  { id: "camera", label: "Athena Vision Stack", status: "PASS", detail: "YOLOv8 + MobileNet online" },
  { id: "cron", label: "Heartbeat + Cron", status: "WARN", detail: "Needs intel/news feed integration" },
  { id: "discord", label: "Discord HQ", status: "PASS", detail: "Channels live; automation wiring in progress" }
];

export default function SystemHealthPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-white/50">Diagnostics</p>
        <h2 className="text-2xl font-semibold">System Health</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {checks.map((check) => (
          <div key={check.id} className="bg-panel rounded-2xl border border-white/5 shadow-panel p-4 flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold">{check.label}</p>
              <p className="text-xs text-white/50">{check.detail}</p>
            </div>
            <span
              className={`px-3 py-1 text-xs rounded-full font-semibold ${
                check.status === "PASS" ? "bg-green-400/20 text-green-300" : "bg-amber-400/20 text-amber-200"
              }`}
            >
              {check.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
