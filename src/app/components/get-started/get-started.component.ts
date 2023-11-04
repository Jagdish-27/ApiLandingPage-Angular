import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.scss']
})
export class GetStartedComponent {

  imageUrl: string = 'assets/images/bg-boost-desktop.svg';

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.updateBackground();
  }

  updateBackground() {
    const screenWidth = window.innerWidth;

    if (screenWidth <= 1000) {
      this.imageUrl = 'assets/images/bg-boost-mobile.svg';
    } else {
      this.imageUrl = 'assets/images/bg-boost-desktop.svg';
    }
  }

}
