import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
<section class="hero is-primary is-bold">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">
        Contact
      </h1>
    </div>
  </div>
</section>




<section class="section">
<div class="container">

<form (ngSubmit)="submitForm()" #contactForm="ngForm">

<div class="field">
<label class="label">Nume</label>
<input
type="text"
name="name"
class="input"
[(ngModel)]="name"
#nameInput="ngModel"
required>

<div class="help is-error" *ngIf="nameInput.invalid && nameInput.touched">
Nume!.
</div>
</div>

<div class="field">
<label class="label">Email</label>
<input type="email"
name="email"
class="input"
[(ngModel)]="email"
#emailInput="ngModel"
required
email>
</div>

<div class="help is-error" *ngIf="emailInput.invalid && nameInput.touched">
email!.
</div>


<div class="field">
<label class="label">Messaj</label>
<textarea name="message"
class="textarea"
[(ngModel)]="message"></textarea>
</div>

<button type="submit" class="button is-large is-warning"
[disabled]="contactForm.invalid">
Trimite!
</button>
</form>
</div>
</section>
  `,
  styles: [
  ]
})
export class ContactComponent implements OnInit {
name:string;
email:string;
message:string;
  constructor() { }

  ngOnInit(): void {
  }

  submitForm(){
  const message=`My name is ${this.name}.My email is ${this.email}.My message is ${this.message}`;
  alert(message);
  }

}
