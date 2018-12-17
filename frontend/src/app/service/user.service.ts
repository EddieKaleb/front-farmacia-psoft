import { Injectable } from '@angular/core';
import Product from '../model/product.module';
import Lot from '../model/lot.module';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  lots: Array<Lot>;
  constructor(private http: HttpClient) { }

  getUser(id) {
    return this.http.get<any>(API_URL + "/usuarios/" + id);
  }

}
