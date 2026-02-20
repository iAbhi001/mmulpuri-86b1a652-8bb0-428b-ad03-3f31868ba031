import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'app-root',
  // This template tells Angular where to swap your Login and Task pages
  template: '<router-outlet></router-outlet>', 
})
export class App {}