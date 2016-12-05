import { NgModule }        from '@angular/core';
import { CommonModule }    from '@angular/common';
import { FotoComponent }   from './foto.component';
import { FiltroPorTitulo } from './foto.pipes';
import { FotoService }     from './foto.service';

@NgModule({
  imports:      [ CommonModule ],
  declarations: [ FotoComponent, FiltroPorTitulo ], // Faz parte do modulo
  exports:      [ FotoComponent, FiltroPorTitulo ],  // Tudo que pode ser utilizado ao importar o module
  providers:    [ FotoService ]
})
export class FotoModule { }