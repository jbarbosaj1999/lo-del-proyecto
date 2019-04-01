import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Usuario} from './usuario';
import data from '../assets/usuarios.json';

const API_URL = '../../assets/';
const usuarios = 'usuarios.json';


@Injectable()
export class UsuarioService {

  constructor(private http :HttpClient) { }

  getUsuarios(): Observable<Usuario[]>
  {
    console.log( this.http.get<Usuario[]>(API_URL + usuarios))
    return this.http.get<Usuario[]>(API_URL + usuarios);
    
    

  }

}