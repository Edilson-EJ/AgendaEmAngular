import { Component } from '@angular/core';

@Component({
  selector: 'app-teste-adicao',
  templateUrl: './teste-adicao.component.html',
  styleUrls: ['./teste-adicao.component.css']
})
export class TesteAdicaoComponent {

  public tarefa = ""

  public itens = ['1']

  addTarefa(){

    this.itens.push(this.tarefa)

  }

  removeTarefa(itens: any){
      this.itens.splice( this.itens.indexOf(itens), 1)
  }

}
