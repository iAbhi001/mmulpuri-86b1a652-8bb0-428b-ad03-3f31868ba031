import { Role } from './role.enum';

export interface Task {
  id: string; // [cite: 204]
  title: string; // [cite: 204]
  description: string; // [cite: 204]
  status: 'Todo' | 'Doing' | 'Done'; // [cite: 204]
  category: 'Work' | 'Personal'; // Required for filtering [cite: 61, 204]
  organizationId: string; // Used for organization-level access [cite: 36, 126]
  creatorId: string; // Used to enforce ownership [cite: 36]
  createdAt: Date;
  updatedAt: Date;
}