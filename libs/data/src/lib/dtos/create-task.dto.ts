// Note: If you use class-validator in your API, you can add decorators here
export interface CreateTaskDto {
  title: string; // [cite: 83]
  description: string; // [cite: 83]
  category: 'Work' | 'Personal'; // Mandatory for filtering requirement [cite: 9, 74]
  organizationId: string; // Scopes the task to the current organization [cite: 5, 82]
}