import { loadProjects } from "../../lib/data";

export default function ProjectsPage() {
  const projects = loadProjects();
  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-white/50">Strategic Initiatives</p>
        <h2 className="text-2xl font-semibold">Projects</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {projects.map((project: any) => (
          <div key={project.id} className="bg-panel rounded-2xl border border-white/5 shadow-panel p-5 space-y-3">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold">{project.name}</p>
              <span className="text-xs text-white/50">{Math.round(project.status * 100)}%</span>
            </div>
            <p className="text-sm text-white/70">{project.description}</p>
            <p className="text-xs text-white/40">Owner: {project.owner}</p>
            <p className="text-xs text-white/40">Updated: {new Date(project.lastUpdated).toLocaleString()}</p>
            <div className="text-xs text-white/50 space-y-1">
              {project.links?.map((link: any) => (
                <div key={link.href}>• {link.label}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
