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
