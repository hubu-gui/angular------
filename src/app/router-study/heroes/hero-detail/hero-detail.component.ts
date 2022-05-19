import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { HeroService } from '../../heroes/hero.service';
import { Hero } from '../hero';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroDetailComponent implements OnInit {
  hero$?: Observable<Hero | any>;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private heroServe: HeroService
  ) {}

  ngOnInit(): void {
    this.hero$ = this.route.paramMap.pipe(
      switchMap((params) => {
        return this.heroServe.getHero(params.get('id'));
      })
    );
  }
  back(id: number) {
    this.router.navigate(['/heroes', { id }]);
  }
}
