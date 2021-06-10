import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GraficaService {

  constructor(private http: HttpClient) { }

  public getUserSocialMedia(){
    return this.http.get('http://localhost:3000/grafica');
  }
}
