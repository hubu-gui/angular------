import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Hero, HeroArg } from 'src/app/configs/types';
import { HeroService } from 'src/app/services/hero.service';
import Heros from '../../../configs/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [HeroService],
})
export class HeroesComponent implements OnInit {
  searchParams: HeroArg = {
    name: '',
    job: '',
    sort: 'desc',
  };
  heroes: Hero[] = Heros;
  constructor(readonly heroeserve: HeroService) {
    this.heroes = this.heroeserve.getHeros();
  }

  ngOnInit(): void {}
}
