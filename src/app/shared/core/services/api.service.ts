import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs"; // -> o Angular trabalha com RxJS para lidar com requisições assíncronas
import { League } from "../models/league.model";

@Injectable({
  providedIn: 'root', // -> Faz o service ficar disponível globalmente (em toda aplicação)
})
export class ApiService {
  private apiUrl = 'https://football-standings-api.vercel.app'; // URL da API

  constructor(private http: HttpClient) {}

  getLeagues(): Observable<{status: boolean, data: League[]}> {
    return this.http.get<{status: boolean, data: League[]}>(`${this.apiUrl}/leagues`);
  }
}
