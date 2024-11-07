import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroPageComponent } from './component/intro-page/intro-page.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { CharacterDetailComponent } from './component/character-detail/character-detail.component';
import { EpisodesComponent } from './component/episodes/episodes.component';

const routes: Routes = [
  { path: '', redirectTo: 'intro', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'character-detail/:id', component: CharacterDetailComponent },
  { path: 'intro', component: IntroPageComponent },
  { path: 'best-episodes', component: EpisodesComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
