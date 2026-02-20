export interface Organization {
  id: string;
  name: string;
  parentId?: string; // Supports 2-level hierarchy [cite: 170, 203]
}