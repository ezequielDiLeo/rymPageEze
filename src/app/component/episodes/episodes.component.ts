import { AfterViewInit, Component, ElementRef, HostListener, viewChild } from '@angular/core';
import TypeIt from 'typeit';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrl: './episodes.component.css'
})
export class EpisodesComponent implements AfterViewInit {

  //VARIABLES
  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isScrolled = scrollPosition > 300; 
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  ngAfterViewInit(): void {
    new TypeIt("#simpleUsage", {
        strings: "Buba duba lop lop, Morty! burp ¡No te hagas el tonto! Esa es la clave para… bueno, no importa, solo sigue diciendo buba duba lop lop y verás lo que pasa.",
        speed: 50,
        waitUntilVisible: true,
    }).go();
  }

}
