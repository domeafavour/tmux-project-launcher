export interface ProjectConfig {
  project: string;
  name: string;
  root: string;
  description?: string;
  settings?: Record<string, any>;
}
