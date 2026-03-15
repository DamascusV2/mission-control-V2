import { loadTeam } from "../../lib/data";

const workloadMap: Record<string, string> = {
  damascus: "Heavy",
  zay: "Variable",
  vector: "Idle",
  iris: "Offline"
};

const currentTasks: Record<string, string> = {
  damascus: "Mission Control polish",
  zay: "Field ops",
  vector: "On deck",
  iris: "Standby"
};

export default function AgentStatusPage() {
  const team = loadTeam();
  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-white/50">Agent Roster</p>
        <h2 className="text-2xl font-semibold">Status Board</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {team.agents.map((agent: any) => (
          <div key={agent.id} className="bg-panel rounded-2xl border border-white/5 shadow-panel p-4 space-y-2">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold">{agent.name}</p>
                <p className="text-xs text-white/50">{agent.role}</p>
              </div>
              <span className="text-xs text-white/50">{agent.status}</span>
            </div>
            <p className="text-xs text-white/60">Division: {agent.role.includes("Research") ? "Intelligence" : agent.role.includes("Engineer") ? "Automation" : "Command"}</p>
            <p className="text-xs text-white/60">Focus: {agent.focus}</p>
            <p className="text-xs text-white/60">Current Task: {currentTasks[agent.id] ?? "TBD"}</p>
            <p className="text-xs text-white/60">Workload: {workloadMap[agent.id] ?? "Unknown"}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
