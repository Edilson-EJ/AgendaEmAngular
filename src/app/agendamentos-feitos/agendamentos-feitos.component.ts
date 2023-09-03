import { Component } from '@angular/core';

@Component({
  selector: 'app-agendamentos-feitos',
  templateUrl: './agendamentos-feitos.component.html',
  styleUrls: ['./agendamentos-feitos.component.css']
})
export class AgendamentosFeitosComponent {

  compromisso: string = "Compromissos"


  agenda: any ={
    nome: "Edilson",
    email: "edilson@",
    data: "18/05/1998",
    celular: "88 99980",
    assunto: "projeto angular"
  }


  public items = [ this.agenda.nome, this.agenda.email, this.agenda.data, this.agenda.celular, this.agenda.assunto ]


}
