import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, mapTo, Observable, of, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TokenService } from '../authentication/token.service';
import { Animal, Animals } from './animal';

const API = environment.apiURL;
const NOT_MODIFIED = '304';
@Injectable({
  providedIn: 'root',
})
export class AnimalsService {
  constructor(private http: HttpClient, private tokenService: TokenService) {}

  userListPhotos(userName: string): Observable<Animals> {
    return this.http.get<Animals>(`${API}/${userName}/photos`);
  }

  searchPerId(id: number): Observable<Animal> {
    return this.http.get<Animal>(`${API}/photos/${id}`);
  }

  deleteAnimal(id: number): Observable<Animal> {
    return this.http.delete<Animal>(`${API}/photos/${id}`);
  }

  like(id: number): Observable<boolean> {
    return this.http
      .post(`${API}/photos/${id}/like`, {}, { observe: 'response' })
      .pipe(
        map(() => true),
        catchError((error) => {
          return error.status === NOT_MODIFIED ? of(false) : throwError(() => error);
        })
      );
  }
}
