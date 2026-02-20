import { SetMetadata } from '@nestjs/common';

/**
 * Key used to store and retrieve specific permission metadata.
 */
export const PERMISSIONS_KEY = 'permissions';

/**
 * Decorator for granular access control beyond roles.
 * Example: @Permissions('can_delete_task')
 */
export const Permissions = (...permissions: string[]) => 
  SetMetadata(PERMISSIONS_KEY, permissions);