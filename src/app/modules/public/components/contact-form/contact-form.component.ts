import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  constructor(private http: HttpClient) {}

  showMessage = false;

  onSubmit(contactForm: NgForm) {
    if (contactForm.valid) {
      const form = contactForm.value;
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

      this.http.post('https://formspree.io/f/xoqbyzzl',
        {
          name: form.name,
          email: form.email,
          replyto: form.email,
          subject: form.subject,
          message: form.message
        },
        { 'headers': headers }
      ).subscribe(
        response => {
          this.showMessage = true;
          contactForm.reset();
          console.log(response);
        }
      );
    }
  }

}
