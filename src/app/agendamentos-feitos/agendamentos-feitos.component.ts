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


  public items = [ {nome: 'edilson', email: 'nada.com',data: '12/08/2023', celular: '88 999808045', assunto: 'projeto angular'},
                    {nome: 'mundo', email: 'nada.com',data: '12/08/2023', celular: '88 999808045', assunto: 'java'},
                    {nome: 'mundo', email: 'nada.com',data: '12/08/2023', celular: '88 999808045', assunto: 'react'},
                    {nome: 'mundo', email: 'nada.com',data: '12/08/2023', celular: '88 999808045', assunto: 'MySql'},
                    {nome: 'mundo', email: 'nada.com',data: '12/08/2023', celular: '88 999808045', assunto: 'ruby'}
                  ]
  
  removeTarefa(itens: any){
      this.items.splice( this.items.indexOf(itens),1)

  }

  concluirTarefa(){
    const element = document.querySelector('li')
    element?.classList.add("riscaTarefa")    
  }
                

}
