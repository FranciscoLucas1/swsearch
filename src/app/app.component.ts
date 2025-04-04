import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet ,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  pesquisaForm = new FormGroup({
     nome: new FormControl('',)
  });

  nome_persoangem = ""

  constructor(private cliente_http: HttpClient) {}


  mostra(): void {
    this.cliente_http
      .get<{ name: string }>(
        `https://swapi.dev/api/people/${this.pesquisaForm.controls.nome.value}/`

      )
      .subscribe((resp) => (this.nome_persoangem = resp.name));
  }

}
