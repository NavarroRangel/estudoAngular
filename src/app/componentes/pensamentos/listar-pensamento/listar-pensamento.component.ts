import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {
  listaPensamentos = [
    {
      conteudo: 'Passo informações entre componentes',
      autoria: 'Componente pai',
      modelo: 'modelo1'
    },
    {
      conteudo: 'Minha proproiedade é decorada com @input',
      autoria: 'navarro',
      modelo: 'modelo1'
    },
    {
      conteudo: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.',
      autoria: 'navarro',
      modelo: 'modelo1'
    },

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
