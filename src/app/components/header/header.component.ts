import { Component,HostListener } from '@angular/core';
import { OverlayService } from 'src/app/services/overlay.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(public overlayService: OverlayService) {}


  @HostListener('window:resize',['$event'])
  onResize(event:Event){
    this.closeHamburgerMenuIfNecessary();
  }


  isHumburgerOpen: boolean = false;
  onHumburgerClick() {
    this.isHumburgerOpen = !this.isHumburgerOpen;
    if (this.isHumburgerOpen) {
      this.overlayService.openOverlay();
    } else {
      this.overlayService.closeOverlay();
      this.isHumburgerOpen = false;
    }
  }

  onOverlayClick() {
    this.overlayService.closeOverlay();
    this.isHumburgerOpen = false;
  }

  closeHamburgerMenuIfNecessary(){

    if(window.innerWidth > 800 && this.isHumburgerOpen){
      this.isHumburgerOpen = false;
      this.overlayService.closeOverlay();
    }
  }
  
}
