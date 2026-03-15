import fs from "fs";
import path from "path";

const dataDir = path.join(process.cwd(), "src", "data", "mission-control");

export function loadTasks() {
  const file = path.join(dataDir, "tasks.json");
  return JSON.parse(fs.readFileSync(file, "utf8"));
}

export function loadProjects() {
  const file = path.join(dataDir, "projects.json");
  return JSON.parse(fs.readFileSync(file, "utf8"));
}

export function loadTeam() {
  const file = path.join(dataDir, "team.json");
  return JSON.parse(fs.readFileSync(file, "utf8"));
}

export function loadOffice() {
  const file = path.join(dataDir, "office.json");
  return JSON.parse(fs.readFileSync(file, "utf8"));
}
