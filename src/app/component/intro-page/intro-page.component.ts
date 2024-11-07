import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro-page',
  templateUrl: './intro-page.component.html',
  styleUrl: './intro-page.component.css'
})
export class IntroPageComponent implements OnInit {

  //INJECTS
  private _router = inject(Router)

  ngOnInit() {
    this.redireccionInit()
  }

  redireccionInit() {
    setTimeout(() => {
      this._router.navigateByUrl('/home')
    }, 1500);
  }

}
