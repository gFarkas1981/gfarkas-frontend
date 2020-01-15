import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {EmailService} from '../../service/email.service';
import {EmailModel} from '../../models/email.model';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {

  form: FormGroup;
  result: string;
  email: EmailModel;
  emailHasSent: boolean;


  constructor(private emailService: EmailService, private formBuilder: FormBuilder) {

    this.emailHasSent = false;

    this.form = this.formBuilder.group({
      from: [null],
      subject: [null],
      message: [null]
    });
  }

  ngOnInit() {
  }

  submit() {
    this.email = {...this.form.value};

    this.emailService.sendEmail(this.email).subscribe(
      result => console.log(result)
    );

    this.emailHasSent = true;
  }

}
