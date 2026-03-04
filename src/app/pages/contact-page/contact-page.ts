import {Component, inject} from '@angular/core';
import {ReactiveFormsModule, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatError, MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {MatCard, MatCardContent} from '@angular/material/card';
import {NgClass} from '@angular/common';
import {MatButton} from '@angular/material/button';
import {HttpClient} from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-contact-page',
  imports: [ReactiveFormsModule, MatInput, MatLabel, MatCard, MatCardContent, MatError, MatFormField, NgClass, MatButton],
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.css',
})
export class ContactPage {
    contactForm = new FormGroup({
      name: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required, Validators.email]),
      message: new FormControl('',[Validators.required,Validators.minLength(50),Validators.maxLength(500)])
    })
  private readonly httpClient = inject(HttpClient);
  private readonly snackBar = inject(MatSnackBar);
  protected sendEmail() {
      this.httpClient.post('https://formspree.io/f/xpqjkqyn', this.contactForm.value,{
        headers: { 'Content-Type': 'application/json' },
      } ).subscribe({
        next: () => {
      this.contactForm.reset();
    },
      error: (err) => {
        this.snackBar.open(`Something went wrong: ${err}`, 'OK', { duration: 2000 });
    },
  });
  }
}
