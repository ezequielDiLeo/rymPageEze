import { Component, ElementRef, HostListener, inject, OnInit, ViewChild } from '@angular/core';
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
  isScrolled = false;

  constructor(private _service: ApiServiceService) {
  }

  ngOnInit(): void {
    this.getAllCharacters();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isScrolled = scrollPosition > 300; 
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

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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