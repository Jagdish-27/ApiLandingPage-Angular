import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UrlShortenerService } from 'src/app/services/url-shortener.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  constructor(private urlShortenerService: UrlShortenerService) {}

  urlShotenForm = new FormGroup({
    userUrl: new FormControl('', [Validators.required]),
  });

  resultBoxes: { originalUrl: string; shortenedUrl: string }[] = [];

  onFormSubmit() {
    const userUrl = this.urlShotenForm.controls.userUrl.value;

    // const shortenedUrl = this.shortenUrl(userUrl as string);

    // this.resultBoxes.push({
    //   originalUrl: userUrl as string,
    //   shortenedUrl: shortenedUrl,
    // });

    this.urlShotenForm.controls.userUrl.reset();
  }
  
  // shortenUrl(userUrl:string) {
  //   const longUrl = userUrl;
  //   const apiKey = '99760dace539ca09db4a9c0dffcd7b9a8af88';

  //   this.urlShortenerService
  //     .shortenUrl(longUrl, apiKey)
  //     .subscribe((response) => {
  //       console.log('Shortened URL:', response.url.shortLink);
  //     });
  // }

  copyLink(link: string) {
    // Add logic for copying the link to the clipboard here
    console.log('Copying link:', link);
  }
}
