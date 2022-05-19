import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { add } from './number';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  color = 'green';
  constructor(private router: Router) {}

  toCrisisCenter() {
    this.router.navigate(['/crisis-center']);
  }
  toHeroes() {
    this.router.navigate(['/heroes']);
  }

  alertResult(...args: number[]) {
    import('./number').then((module) => {
      alert(module.add(args));
    });
    alert(add(args));
  }
}
