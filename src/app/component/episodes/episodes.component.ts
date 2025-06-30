import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import TypeIt from 'typeit';


interface Star {
  x: number;
  y: number;
  r: number;
}
@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']  // CORRECTO: styleUrls y plural
})
export class EpisodesComponent implements AfterViewInit {
  isScrolled = false;
  showModal = false;
  selectedEpisode: any = null;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  episodes = [
    {
      rank: 5,
      title: 'Pickle Rick',
      season: 3,
      episode: 3,
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      description: 'Rick se convierte en pepinillo y sobrevive a un ejército de ratas en una épica aventura.',
      details: 'Este episodio es uno de los más icónicos y memorables por su locura creativa y el desarrollo de personajes.'
    },
    {
      rank: 4,
      title: 'The Wedding Squanchers',
      season: 2,
      episode: 10,
      image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
      description: 'Rick se entrega para salvar a su familia durante la boda de su amigo Hombre pájaro.',
      details: 'Un episodio con un clímax dramático que muestra la profundidad y consecuencias en la vida de Rick.'
    },
    {
      rank: 3,
      title: 'Total Rickall',
      season: 2,
      episode: 4,
      image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
      description: 'Parásitos invaden la casa y crean recuerdos falsos, causando caos entre la familia Smith.',
      details: 'Con humor y suspense, este episodio explora la confianza y la memoria de los personajes.'
    },
    {
      rank: 2,
      title: 'The Ricklantis Mixup',
      season: 3,
      episode: 7,
      image: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg',
      description: 'El ascenso al poder en la Ciudadela de los Ricks, con múltiples versiones de Rick y Morty.',
      details: 'Un episodio oscuro y complejo que amplía el universo de la serie con un estilo narrativo único.'
    },
    {
      rank: 1,
      title: 'The Rickshank Rickdemption',
      season: 3,
      episode: 1,
      image: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg',
      description: 'Rick escapa del control mental y desencadena una batalla épica contra el gobierno galáctico.',
      details: 'Considerado uno de los mejores episodios, combina acción, emoción y humor con maestría.'
    }
  ];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 200;
  }



  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      new TypeIt("#simpleUsage", {
        strings: "Buba duba lop lop, Morty! burp ¡No te hagas el tonto! Esa es la clave para… bueno, no importa, solo sigue diciendo buba duba lop lop y verás lo que pasa.",
        speed: 50,
        waitUntilVisible: true,
      }).go();

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


  scrollToTop() {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  openModal(ep: any) {
    if (isPlatformBrowser(this.platformId)) {
      this.selectedEpisode = ep;
      this.showModal = true;
      document.body.style.overflow = 'hidden';
    }
  }

  closeModal() {
    if (isPlatformBrowser(this.platformId)) {
      this.showModal = false;
      this.selectedEpisode = null;
      document.body.style.overflow = 'auto';
    }
  }
}
