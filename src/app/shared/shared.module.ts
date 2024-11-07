import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ApiServiceService } from '../services/api-service.service';
import { CharacterDetailComponent } from '../component/character-detail/character-detail.component';
import { HomePageComponent } from '../component/home-page/home-page.component';
import { NavBarComponent } from '../component/nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [],
  exports: [
    RouterModule
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    ApiServiceService
  ]
})
export class SharedModule { }
