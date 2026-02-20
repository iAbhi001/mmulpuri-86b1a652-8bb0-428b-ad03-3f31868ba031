import { SetMetadata } from '@nestjs/common';
// Use your exact workspace alias from tsconfig
import { Role } from '@mmulpuri-86b1a652-8bb0-428b-ad03-3f31868ba031/data';

/**
 * Key used to store and retrieve role metadata.
 */
export const ROLES_KEY = 'roles';

/**
 * Decorator to specify which roles are allowed to access an endpoint.
 * Supports role inheritance logic (Owner > Admin > Viewer).
 */
export const Roles = (...roles: Role[]) => SetMetadata(ROLES_KEY, roles);