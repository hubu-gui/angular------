import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeroesModule } from './heroes/heroes.module';
import { ReactiveFormsModule } from '@angular/forms';
// import {ServiceModule} from '../../services/service.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HomeRoutingModule,
    HeroesModule,
    // ServiceModule
  ],
})
export class HomeModule {}
