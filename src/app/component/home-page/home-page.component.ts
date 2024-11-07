import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { ApiServiceService } from '../../services/api-service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent implements OnInit {

  //IMPORTS


  //VARIABLES
  characters: any[] = []
  params = {} as any

  constructor(private _service: ApiServiceService) {
  }

  ngOnInit(): void {
    this.getAllCharacters();
  }

  onSearch() {
    this._service.getCharacters(this.params).subscribe({
      next: (res: any) => {
        this.characters = res.results
      }
    })
  }



  getAllCharacters() {
    this._service.getCharacters(this.params).subscribe({
      next: (res: any) => {
        this.characters.push(...res.results)
      },
      error: (err: any) => {
        console.error('Error fetching characters:', err);
      }

    })
  }

}

















// search(event: Event): void {
//   const element = event.currentTarget as HTMLInputElement;
//   this.searchTerm$.next(element.value);
//   // this.getSearch()
// }

// getSearch() {
//   this.searchIsTrue = true
//   this.character$ = this.searchTerm$.pipe(
//     filter((term: string) => term.length >= 2),
//     debounceTime(400),
//     distinctUntilChanged(),
//     switchMap((term: string) => this._service.filterCharacter(term))
//   )
// }