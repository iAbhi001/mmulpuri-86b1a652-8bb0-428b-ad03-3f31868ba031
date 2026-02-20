import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from '@mmulpuri-86b1a652-8bb0-428b-ad03-3f31868ba031/data';
// FIX: Corrected path based on your folder structure
import { ROLES_KEY } from '../decorators/roles.decorators';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!requiredRoles) return true;

    const { user } = context.switchToHttp().getRequest();
    if (!user) return false;

    // Logic: Owner(3) > Admin(2) > Viewer(1)
    const weights: Record<string, number> = {
      [Role.OWNER]: 3,
      [Role.ADMIN]: 2,
      [Role.VIEWER]: 1,
    };

    const userWeight = weights[user.role as Role] || 0;
    return requiredRoles.some((role) => userWeight >= weights[role]);
  }
}