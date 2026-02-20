import { Role } from './role.enum';

export interface User {
  id: string;
  email: string;
  role: Role; // [cite: 201]
  organizationId: string; // [cite: 201]
}