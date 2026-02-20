// libs/data/src/index.ts

export * from './lib/interfaces/role.enum';
export * from './lib/interfaces/user.interface';
export * from './lib/interfaces/organization.interface';
export * from './lib/interfaces/task.interface';

// THIS LINE FIXES THE ERROR IN auth.service.ts
export * from './lib/dtos/auth-response.dto'; 
export * from './lib/dtos/create-task.dto';