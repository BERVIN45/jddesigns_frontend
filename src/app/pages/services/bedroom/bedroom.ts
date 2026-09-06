import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-bedroom',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './bedroom.html',
  styleUrl: './bedroom.scss'
})
export class BedroomComponent implements OnInit, AfterViewInit {
  ngOnInit() {
    window.scrollTo(0,0);
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
