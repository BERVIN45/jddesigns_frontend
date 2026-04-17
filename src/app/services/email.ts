import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';

@Injectable({
  providedIn: 'root',
})
export class Email {

  sendmail(data:any){
   return emailjs.send('service_0otah6m', 'template_rwdjcrw', data, '16AhzDphCaI8Xyvb5');
  }
}
