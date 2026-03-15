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
