import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  public mintForm: FormGroup;
  constructor(private _fb: FormBuilder) {
    this.mintForm = this.initializeForm();
  }

  ngOnInit(): void {}

  private initializeForm() {
    return this._fb.group({
      handle: [null, [Validators.required, Validators.minLength(0)]],
      image: [null, [Validators.required]],
      limit: [
        null,
        [Validators.required, Validators.min(0), Validators.pattern('[0-9]')],
      ],
    });
  }

  onSubmit() {
    const mintData = {
      handle: this.mintForm.get('handle')?.value,
      image: this.mintForm.get('image')?.value,
      item: this.mintForm.get('limit')?.value,
    };
    console.log({ mintData });
  }
}
