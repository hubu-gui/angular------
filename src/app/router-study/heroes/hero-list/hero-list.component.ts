import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
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
export class HeroListComponent implements OnInit {
  heroes$?: Observable<Hero[]>;
  selectedId?: number;
  constructor(
    private heroServe: HeroService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.heroes$ = this.heroServe.getHeroes();
    this.heroes$ = this.route.paramMap.pipe(
      switchMap((params: any) => {
        this.selectedId = +params.get('id');
        return this.heroServe.getHeroes();
      })
    );
  }

  onSelect(id: number) {
    // this.selectedId = id;
    // this.router.navigateByUrl('/hero/' + id);
    this.router.navigate(['/hero/', id]);
  }
}
