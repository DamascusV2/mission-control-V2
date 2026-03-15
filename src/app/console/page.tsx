const commands = [
  { id: "cmd-001", label: "Run camera snapshot", detail: "Triggers Insta360 capture + analysis" },
  { id: "cmd-002", label: "Post hourly digest", detail: "Send status to #command-hq" },
  { id: "cmd-003", label: "Sync mission data", detail: "Pull latest tasks/projects JSON" }
];

export default function CommandConsolePage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-white/50">Command Console</p>
        <h2 className="text-2xl font-semibold">Quick Actions</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {commands.map((command) => (
          <button
            key={command.id}
            className="bg-panel rounded-2xl border border-white/5 shadow-panel p-5 text-left hover:border-accent transition"
          >
            <p className="text-sm font-semibold">{command.label}</p>
            <p className="text-xs text-white/60 mt-2">{command.detail}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
