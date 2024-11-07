import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  // INJECT

  constructor(private _httpClient: HttpClient) {

  }

  getCharacters(params: any) {
    return this._httpClient.get(environment.baseUrl + environment.character, { params })
  }


  getCharactersById(id: string) {
    return this._httpClient.get(environment.baseUrl + environment.character + id)
  }

  getByUrl(url: string) {
    return this._httpClient.get(url)
  }


}
