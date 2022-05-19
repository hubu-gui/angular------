import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { CrisisService } from '../crisis.service';
import { Hero } from '../../heroes/hero';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-crisis-list',
  templateUrl: './crisis-list.component.html',
  styles: [
    `
      .list-group {
        width: 280px;
        cursor: pointer;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CrisisListComponent implements OnInit {
  crises$: any;
  selectedId?: number;
  constructor(
    private crisisServe: CrisisService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.heroes$ = this.heroServe.getHeroes();
    this.crises$ = this.route.paramMap.pipe(
      switchMap((params: any) => {
        this.selectedId = +params.get('id');
        return this.crisisServe.getCrises();
      })
    );
  }

  onSelect(id: number) {
    this.selectedId = id;
    this.router.navigate([id], { relativeTo: this.route });
  }
}
