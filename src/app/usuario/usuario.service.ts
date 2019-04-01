import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Usuario} from './usuario';
import data from '../assets/usuarios.json';

const API_URL = '../assets/';
const usuarios = 'usuarios.json';
console.log( data)

@Injectable()
export class UsuarioService {

  constructor(private http :HttpClient) { }

  getUsuarios(): Observable<Usuario[]>
  {
    console.log( data)
    return this.http.get<Usuario[]>(API_URL + usuarios)
  }

}