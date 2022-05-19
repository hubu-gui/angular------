import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: { title: '首页' },
    children: [
      {
        path: 'heroes',
        component: HeroesComponent,
        data: { title: '英雄列表', breadcrumb: ['页面', '英雄列表'] },
      },
      { path: '', redirectTo: 'heroes', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
