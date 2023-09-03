import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PaginaDeAgendamentoComponent } from './pagina-de-agendamento/pagina-de-agendamento.component';
import { RodapeComponent } from './rodape/rodape.component';
import { AgendamentosFeitosComponent } from './agendamentos-feitos/agendamentos-feitos.component';

import { FormsModule } from '@angular/forms';
import { TesteAdicaoComponent } from './teste-adicao/teste-adicao.component';
import { ListRenderComponent } from './list-render/list-render.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PaginaDeAgendamentoComponent,
    RodapeComponent,
    AgendamentosFeitosComponent,
    TesteAdicaoComponent,
    ListRenderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
