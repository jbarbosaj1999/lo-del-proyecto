import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { UsuarioCreateComponent } from './usuario-create/usuario-create.component';
import { UsuarioService } from './usuario.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UsuarioListComponent, UsuarioCreateComponent],
  exports :[UsuarioListComponent, UsuarioCreateComponent],
  providers: [UsuarioService]
})
export class UsuarioModule { }