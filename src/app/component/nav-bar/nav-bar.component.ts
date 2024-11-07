import { isPlatformBrowser } from '@angular/common';
import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { HomePageComponent } from '../home-page/home-page.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit {

  //INJECTIONS
  private _platformId = inject(PLATFORM_ID);

  //VARIABLES
  data: any = HomePageComponent;

  ngOnInit(): void {
    if (isPlatformBrowser(this._platformId)) {
      this.smallNavB();
    }
  }

  smallNavB() {
    window.addEventListener('scroll', function () {
      var header = document.querySelector("header");
      header?.classList.toggle("abajo", window.scrollY > 0)
    })

  }

}
