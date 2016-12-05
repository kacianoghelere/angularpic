import 'rxjs/add/operator/map';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FotoModule } from './foto/foto.module';
import { PainelModule } from './painel/painel.module';
import { FormModule } from './form/form.module';
import { BotaoModule } from './botao/botao.module';
import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListagemComponent } from './listagem/listagem.component';
import { routing } from './app.routes';

@NgModule({
  imports:      [
    BrowserModule,
    HttpModule,
    FotoModule,
    PainelModule,
    FormModule,
    routing,
    FormsModule,
    ReactiveFormsModule,
    BotaoModule
  ],
  declarations: [ AppComponent, CadastroComponent, ListagemComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }