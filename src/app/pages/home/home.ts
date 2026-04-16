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
    { title: 'Residential Design', desc: 'Crafting luxury homes that tell your unique story.', img: 'images/residential.png' },
    { title: 'Commercial Spaces', desc: 'Functional, high-end environments for modern businesses.', img: 'images/commercial.png' },
    { title: 'Modular Kitchens', desc: 'State-of-the-art culinary spaces with German engineering.', img: 'images/kitchen.png' },
    { title: 'Luxury Renovation', desc: 'Transforming existing spaces into contemporary masterpieces.', img: 'images/hero.png' }
  ];

  specialities = [
    { title: 'Hyper-Realistic 3D Renders', desc: 'Visualize every detail before construction begins with our state-of-the-art photorealistic visualizations.', icon: 'fas fa-cube' },
    { title: 'Global Material Sourcing', desc: 'Exclusive access to premium international textures, finishes, and bespoke furniture pieces.', icon: 'fas fa-globe' },
    { title: 'Technical Precision', desc: 'Seamless integration of structural, electrical, and plumbing layouts for flawless execution.', icon: 'fas fa-pen-ruler' },
    { title: 'Turnkey Solutions', desc: 'From the first conceptual sketch to the final handover, we manage the entire project lifecycle stress-free.', icon: 'fas fa-key' }
  ];

  featuredProjects = [
    { title: 'The Obsidian Suite', category: 'Apartment', img: 'images/hero.png' },
    { title: 'Azure Riverside', category: 'Villa', img: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1000' },
    { title: 'Amber Creative Studio', category: 'Commercial', img: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1000' },
    { title: 'Minimalist Haven', category: 'Living Room', img: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&q=80&w=1000' },
    { title: 'Velvet Horizon', category: 'Bedroom', img: 'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&q=80&w=1000' },
    { title: 'Marble & Oak', category: 'Kitchen', img: 'images/kitchen.png' }
  ];

  clientLogos = [
    'images/client1.webp',
    'images/client2.webp',
    'images/client3.webp',
    'images/client4.webp',
    'images/client5.webp',
    'images/client6.webp',
    'images/client7.webp',
    'images/client8.webp',
    'images/client9.webp'
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
