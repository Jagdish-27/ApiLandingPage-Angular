import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  menuItems = [
    { title: 'Shortly', type: 'header' },
    { title: 'Features', type: 'text', items: ['Link Shortening', 'Branded Links', 'Analytics'] },
    { title: 'Resources', type: 'text', items: ['Blog', 'Developers', 'Support'] },
    { title: 'Company', type: 'text', items: ['About', 'Our Team', 'Careers', 'Contact'] },
    { title: 'Social Media', type: 'icons', icons: ['assets/images/icon-facebook.svg', 'assets/images/icon-twitter.svg', 'assets/images/icon-pinterest.svg', 'assets/images/icon-instagram.svg'] }
  ];

}
