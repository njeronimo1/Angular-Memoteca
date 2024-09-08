import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Pensamento } from '../pensamento/pensamento';

@Component({
  selector: 'app-criar-pensamento',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './criar-pensamento.component.html',
  styleUrl: './criar-pensamento.component.css'
})
export class CriarPensamentoComponent {
    pensamento: Pensamento = {
      id: 1,
      conteudo: 'Aprendendo angular',
      autoria: 'dev',
      modelo: 'modelo3'
    }

    criarPensamento() {
      alert('novo')
    }

    cancelarPensamento(){
    }
}
