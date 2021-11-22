import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // @ts-ignore
  formulario: FormGroup;

  constructor(private formbuilder: FormBuilder) {

  }

  ngOnInit(): void {

    this.formulario = this.formbuilder.group({
      nome: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(30)]],
      sobrenome: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(30)]],
      email: [null, [Validators.required, Validators.email]]
    });
  }

  saveData(): void {
    alert('Olha a gente aqui!!! \n\nSubmitou!!!');
    this.resetForm();
  }


  resetForm(): void {
    this.formulario.reset();
  }
}
