import { Component, HostListener, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Renderer2,ElementRef } from '@angular/core';
import { NgClass, NgStyle } from '@angular/common';



@Component({
  selector: 'app-navbar',
  imports: [ RouterLink , RouterLinkActive,NgStyle ,NgClass],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {


  @ViewChild('navBar') myNav!: ElementRef;
  @HostListener('window:scroll', [])
  onScroll(): void {
    if (window.scrollY > 10) {
      this.myNav.nativeElement.classList.replace('py-4', 'py-2');
    } else {
      this.myNav.nativeElement.classList.replace('py-2', 'py-4');
    }
  }


  // navbarHeight :string = '100px';

  // constructor(private renderer: Renderer2, private el: ElementRef) {}

  // @HostListener('window:scroll', [])
  // onWindowScroll() {
  //   const scrollPosition = window.scrollY || document.documentElement.scrollTop;
  //   if (scrollPosition > 50 && innerWidth>991) {

  //     this.navbarHeight = '70px';
  //   } else {

  //     this.navbarHeight = '100px';
  //   }

  //   const navbar = this.el.nativeElement.querySelector('.navbar');
  //   if (navbar ) {
  //     this.renderer.setStyle(navbar, 'height', this.navbarHeight);
  //     this.renderer.setStyle(navbar, 'transition', 'height 0.3s ease');
  //   }
  // }

  // showList ():void {
  //   this.navbarHeight = '200px';
  // }

}
