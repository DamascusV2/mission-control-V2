export type Agent = {
  id: string;
  name: string;
  role: string;
  location: string;
  focus: string;
  status: string;
};

export type TeamData = {
  mission: string;
  principles: string[];
  agents: Agent[];
};

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  id: string;
  name: string;
  description: string;
  owner: string;
  status: number;
  lastUpdated: string;
  links?: ProjectLink[];
};

export type Task = {
  id: string;
  title: string;
  owner: string;
  ownerType: string;
  description: string;
  tags?: string[];
  due?: string;
  priority?: string;
  updatedAt?: string;
  completedAt?: string;
};

export type TaskColumn = {
  id: string;
  title: string;
  tasks: Task[];
};

export type TaskBoardData = {
  activity: {
    id: string;
    timestamp: string;
    summary: string;
  }[];
  columns: TaskColumn[];
};

export type ModuleState = "Not Started" | "In Progress" | "Live" | "Blocked";

export type ModuleStatus = {
  id: string;
  name: string;
  owner: string;
  state: ModuleState;
  updated: string;
  notes: string;
  blocker?: string | null;
};

export type ActivityEntry = {
  id: string;
  timestamp: string;
  summary: string;
  owner: string;
};

export type StatusPayload = {
  build: ModuleStatus[];
  runtime: ModuleStatus[];
  activity: ActivityEntry[];
};
