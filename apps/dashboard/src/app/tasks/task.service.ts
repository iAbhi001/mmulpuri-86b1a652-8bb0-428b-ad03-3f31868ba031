import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '@mmulpuri-86b1a652-8bb0-428b-ad03-3f31868ba031/data';

@Injectable({ providedIn: 'root' })
export class TaskService {
  private http = inject(HttpClient);
  private readonly API_URL = 'http://localhost:3000/api/tasks';

  getTasks() {
    // The authInterceptor automatically adds the Bearer token here!
    return this.http.get<Task[]>(this.API_URL);
  }

  createTask(task: Partial<Task>) {
    return this.http.post<Task>(this.API_URL, task);
  }
}