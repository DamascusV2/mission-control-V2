const events = [
  { id: "evt-001", title: "Morning Brief", time: "08:30", owner: "Damascus", type: "ritual" },
  { id: "evt-002", title: "Midday Ops Update", time: "13:00", owner: "Damascus", type: "ritual" },
  { id: "evt-003", title: "Roofing Lead Research Sprint", time: "15:00", owner: "Damascus", type: "mission" },
  { id: "evt-004", title: "Evening Debrief", time: "21:00", owner: "Damascus", type: "ritual" }
];

export default function CalendarPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-white/50">Cadence</p>
        <h2 className="text-2xl font-semibold">Daily Calendar</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {events.map((event) => (
          <div key={event.id} className="bg-panel rounded-2xl border border-white/5 shadow-panel p-4 flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold">{event.title}</p>
              <p className="text-xs text-white/50">Owner: {event.owner}</p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-mono">{event.time}</p>
              <p className="text-xs text-white/40 uppercase">{event.type}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
