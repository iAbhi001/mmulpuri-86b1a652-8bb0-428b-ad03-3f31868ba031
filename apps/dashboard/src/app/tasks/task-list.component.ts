import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from './task.service';
// Use your exact workspace alias from tsconfig
import { Task } from '@mmulpuri-86b1a652-8bb0-428b-ad03-3f31868ba031/data';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-task-list',
  template: `
    <div class="task-dashboard">
      <h1>Your Tasks</h1>
      
      <div class="filters">
        <button (click)="filter = 'all'">All</button>
        <button (click)="filter = 'Work'">Work</button>
        <button (click)="filter = 'Personal'">Personal</button>
      </div>

      <div class="task-grid">
        <div *ngFor="let task of filteredTasks" class="task-card">
          <h3>{{ task.title }}</h3>
          <p>{{ task.description }}</p>
          <span class="badge">{{ task.category }}</span>
          <span class="status">{{ task.status }}</span>
        </div>
      </div>
      
      <div *ngIf="filteredTasks.length === 0">No tasks found.</div>
    </div>
  `,
  styles: [`
    .task-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; }
    .task-card { border: 1px solid #ccc; padding: 1rem; border-radius: 8px; }
    .badge { background: #e0e0e0; padding: 2px 8px; border-radius: 4px; font-size: 0.8rem; }
    .filters { margin-bottom: 20px; }
    button { margin-right: 10px; cursor: pointer; }
  `]
})
export class TaskListComponent implements OnInit {
  private taskService = inject(TaskService);
  
  tasks: Task[] = [];
  filter: 'all' | 'Work' | 'Personal' = 'all';

  ngOnInit() {
    this.loadTasks();
  }

  loadTasks() {
    this.taskService.getTasks().subscribe({
      next: (data) => this.tasks = data,
      error: (err) => console.error('Could not load tasks', err)
    });
  }

  get filteredTasks() {
    if (this.filter === 'all') return this.tasks;
    return this.tasks.filter(t => t.category === this.filter);
  }
}