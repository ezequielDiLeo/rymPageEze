import { Component, ElementRef, HostListener, Inject, inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { ApiServiceService } from '../../services/api-service.service';
import { isPlatformBrowser } from '@angular/common';

interface Star {
  x: number;
  y: number;
  r: number;
}

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

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private _service: ApiServiceService) {
  }

  ngOnInit(): void {
    this.getAllCharacters();
  }


  ngAfterViewInit(): void {
      if (isPlatformBrowser(this.platformId)) {
        const canvas = document.getElementById('starfield') as HTMLCanvasElement;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const count = 100;
        const stars: Star[] = [];

        for (let i = 0; i < count; i++) {
          stars.push({
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            r: Math.random() * 2,
          });
        }

        function draw() {
          const ctx = canvas.getContext('2d');
          if (!ctx) return;

          ctx.clearRect(0, 0, canvas.width, canvas.height);

          ctx.fillStyle = '#0ff';
          for (const s of stars) {
            ctx.beginPath();
            ctx.arc(s.x, s.y, s.r, 0, 2 * Math.PI);
            ctx.fill();
          }
        }

        function loop() {
          for (const s of stars) {
            s.y += 0.3;
            if (s.y > canvas.height) s.y = 0;
          }
          draw();
          requestAnimationFrame(loop);
        }

        function resize() {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
        }

        window.addEventListener('resize', resize);
        resize();
        loop();
      }
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
