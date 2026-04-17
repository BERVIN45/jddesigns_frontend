import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Email } from '../../services/email';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class ContactComponent implements AfterViewInit {

  success = false;
  error = false;

  formData = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  constructor(private email:Email){}

  onSubmit() {
    this.success = false;
    this.error = false;
    
     this.email.sendmail(this.formData)
     .then((response:any)=>{
      this.success = true;
      this.formData = {
        name: '',
        email: '',
        phone: '',
        message: ''
      }
     })
     .catch((error:any)=>{
      this.error = true;
     })
     
  }

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }
}
