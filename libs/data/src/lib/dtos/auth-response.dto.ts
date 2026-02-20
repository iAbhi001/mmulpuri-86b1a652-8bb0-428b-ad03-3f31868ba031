import { Role } from '../interfaces/role.enum';

export interface AuthResponseDto {
  accessToken: string; // The JWT token 
  user: {
    id: string;
    email: string;
    role: Role; // Used for frontend RBAC visibility [cite: 13, 79]
    organizationId: string; // Used to scope the dashboard view [cite: 80, 82]
  };
}