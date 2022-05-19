import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { HeroesComponent } from './home/heroes/heroes.component';
// import { HomeModule } from './home/home.module';
import { HomeModule } from './home/home.module';

import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [],
  imports: [
    HomeModule,
    // LoginModule
  ],
})
export class PagesModule {}
