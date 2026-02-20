import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
// Ensure this matches your exact workspace alias from tsconfig
import { Role } from '@mmulpuri-86b1a652-8bb0-428b-ad03-3f31868ba031/data';
import { ROLES_KEY } from '../decorators/roles.decorator';

@Injectable()
export class RbacGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requiredRoles) {
      return true; 
    }

    const { user } = context.switchToHttp().getRequest();

    // Inheritance Weights: Owner(3) > Admin(2) > Viewer(1)
    const weights: Record<string, number> = {
      [Role.OWNER]: 3,
      [Role.ADMIN]: 2,
      [Role.VIEWER]: 1,
    };

    const userWeight = weights[user.role as Role] || 0;

    // Check if user's role weight meets or exceeds any required role's weight
    return requiredRoles.some((role) => userWeight >= weights[role]); 
  }
}