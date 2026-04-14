import { Component, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent implements AfterViewInit {
  services = [
    { title: 'Residential Design', desc: 'Crafting luxury homes that tell your unique story.', icon: 'fas fa-home' },
    { title: 'Commercial Spaces', desc: 'Functional, high-end environments for modern businesses.', icon: 'fas fa-briefcase' },
    { title: 'Modular Kitchens', desc: 'State-of-the-art culinary spaces with German engineering.', icon: 'fas fa-utensils' },
    { title: 'Luxury Renovation', desc: 'Transforming existing spaces into contemporary masterpieces.', icon: 'fas fa-hammer' }
  ];

  featuredProjects = [
    { title: 'The Obsidian Suite', category: 'Apartment', img: 'images/hero.png' },
    { title: 'Azure Riverside', category: 'Villa', img: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1000' },
    { title: 'Amber Creative Studio', category: 'Commercial', img: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1000' }
  ];

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
