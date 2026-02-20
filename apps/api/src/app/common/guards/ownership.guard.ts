import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';

@Injectable()
export class OwnershipGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const user = request.user; // Attached by JwtStrategy
    const resource = request.body;

    if (!user) return false;

    // Multi-tenancy check: User's Org must match the resource's Org
    if (resource?.organizationId && resource.organizationId !== user.organizationId) {
      throw new ForbiddenException('Access Denied: Organization mismatch');
    }

    return true;
  }
}