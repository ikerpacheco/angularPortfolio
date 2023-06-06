import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  name_missing: boolean = false;
  email_missing: boolean = false;
  subject_missing: boolean = false;
  message_missing: boolean = false;
  form_submitted: boolean = false;
  contactForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    subject: new FormControl(''),
    message: new FormControl('')
  });
  constructor() { }

  ngOnInit(): void {
  }

  checkInputs() {
    if (this.contactForm.value.name === "")
      this.name_missing = true;
    else
      this.name_missing = false;
    if (this.contactForm.value.email === "")
      this.email_missing = true;
    else
      this.email_missing = false;
    if (this.contactForm.value.subject === "")
      this.subject_missing = true;
    else
      this.subject_missing = false;
    if (this.contactForm.value.message === "")
      this.message_missing = true;
    else
      this.message_missing = false;
  }

  submitForm() {
    this.checkInputs();

    if (!this.name_missing && !this.email_missing && !this.subject_missing && !this.message_missing) {
      this.form_submitted = true;
      console.log("Form submitted successfully");
      this.contactForm.reset();

      // const email = this.contactForm.value;
      // const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      // this.http.post('https://formspree.io/asdlf7asdf',
      //   { name: email.name, replyto: email.email, message: email.message },
      //   { 'headers': headers }).subscribe(
      //     response => {
      //       console.log(response);
      //     }
      //   );

      setTimeout( () => {
        this.form_submitted = false;
      }, 5000);
    } else {
      console.log("Missing fields");
    }
  }

}
