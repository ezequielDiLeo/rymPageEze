import { Component, Inject, inject, OnInit, PLATFORM_ID, ViewEncapsulation } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from '../../services/api-service.service';
import { isPlatformBrowser } from '@angular/common';


@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrl: './character-detail.component.css',
  encapsulation: ViewEncapsulation.None
})
export class CharacterDetailComponent implements OnInit {

  //INJECTS
  private _actRoute = inject(ActivatedRoute)
  private _service = inject(ApiServiceService)

  //VARIABLES
  characterId: string = '';
  character = null as any;
  episodes: any[] = [];
  isEpisodesVisible: boolean = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.characterId = this._actRoute.snapshot.paramMap.get('id') as string
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo(0, 0);
    }
    this.getCharacterById()
  }

  getCharacterById() {
    this._service.getCharactersById(this.characterId).subscribe({
      next: (res) => {
        this.character = res
        this.getEpisodes();
      },
      error: (err) => {
        console.error('error', err)
      },
    })
  }

  getEpisodes() {

    for (let url of this.character.episode) {

      this._service.getByUrl(url).subscribe({
        next: (res) => {

          this.episodes.push(res)

        },
        error: (err: any) => {

        },
      })
    }
  }

  toggleEpisodes() {
    this.isEpisodesVisible = !this.isEpisodesVisible;
  }

}
