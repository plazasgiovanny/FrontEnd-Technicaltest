import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Seller } from '../models/seller.mode';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  _url = `${environment.apiUrl}/SELLERs`;

  constructor(private http: HttpClient) {}

  getAllSellers() {
    return this.http.get(this._url);
  }

  getAllSellerByCode(code: number): Observable<Seller> {
    return this.http.get<Seller>(`${this._url}/${code}`);
  }

  getUpdateSeller(code: number, seller: Seller): Observable<Seller> {
    return this.http.put<Seller>(`${this._url}/${code}`,seller);
  }

  DeleteSeller(code: number): Observable<Seller> {
    var x = this.http.delete<Seller>(`${this._url}/${code}`);
    return x
  }

  SaveSeller(seller: Seller): Observable<Seller> {
    var s = this.http.post<Seller>(`${this._url}`,seller);
    return s
  }
}
