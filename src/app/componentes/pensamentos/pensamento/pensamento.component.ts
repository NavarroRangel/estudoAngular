import { Component, Input, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {

  @Input()  pensamento:Pensamento = {
    id: '',
    conteudo: 'eu amo angular',
    autoria: 'navarro',
    modelo: 'modelo3'
  }
  constructor() { }

  ngOnInit(): void {
  }

  excluirPensamento(){
    alert("clicou")
  }
  editarPensamento(){
    alert("clicou")
  }

  larguraPensamento():string{
    if(this.pensamento.conteudo.length >= 256){
      return 'pensamento-g'
    } else {
      return 'pensamento-p'
    }
  }

}
