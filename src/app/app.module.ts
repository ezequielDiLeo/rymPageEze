import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { CharacterDetailComponent } from './component/character-detail/character-detail.component';
import { IntroPageComponent } from './component/intro-page/intro-page.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { HttpClient, HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { ApiServiceService } from './services/api-service.service';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';
import { EpisodesComponent } from './component/episodes/episodes.component';
import { FooterComponent } from './component/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CharacterDetailComponent,
    IntroPageComponent,
    NavBarComponent,
    EpisodesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(),
    ApiServiceService,
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
