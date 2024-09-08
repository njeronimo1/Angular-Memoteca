import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PensamentoComponent } from '../pensamento/pensamento.component';
import { NgFor, NgIf } from '@angular/common';
import { Pensamento } from '../pensamento/pensamento';

@Component({
  selector: 'app-listar-pensamentos',
  standalone: true,
  imports: [RouterLink, PensamentoComponent, NgFor, NgIf],
  templateUrl: './listar-pensamentos.component.html',
  styleUrl: './listar-pensamentos.component.css'
})
export class ListarPensamentosComponent {
    listaPensamentos: Pensamento[] = [];
}
