import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UrlShortenerService {
  example:string='twitter.com';
  private apiUrl = 'https://cutt.ly/api/api.php';

  constructor(private http: HttpClient) { }

  shortenUrl(longUrl: string, apiKey: string) {
    const requestUrl = `${this.apiUrl}/shorten`;
    const params = {
      url: longUrl,
      key: apiKey
    };
    return this.http.post(requestUrl, params);
  }
}
