import { SetMetadata } from '@nestjs/common';
import { Role } from '@mmulpuri-86b1a652-8bb0-428b-ad03-3f31868ba031/data';

export const ROLES_KEY = 'roles';
export const Roles = (...roles: Role[]) => SetMetadata(ROLES_KEY, roles);