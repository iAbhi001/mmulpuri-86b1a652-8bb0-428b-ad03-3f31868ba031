import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';

@Injectable()
export class OwnershipGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    const resource = request.body; // Or fetch from DB based on ID in params

    if (!user || !resource) {
      return false; 
    }

    // Verify Organization Scoping: User can only touch data in their Org
    if (resource.organizationId && resource.organizationId !== user.organizationId) {
      throw new ForbiddenException('Access denied: Resource belongs to another organization'); 
    }

    return true; 
  }
}